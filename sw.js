// ============================================================
//  MODE HORS LIGNE (service worker). Il n'est installé que si l'on
//  appuie sur « Télécharger pour l'utiliser hors ligne » dans les
//  Réglages ; c'est la page Réglages qui remplit le cache.
//
//  Stratégie « réseau d'abord » : en ligne, on voit toujours la
//  dernière version du site. Sans réseau (ou s'il ne répond pas en
//  4 secondes), la copie téléchargée prend le relais. La copie n'est
//  jamais modifiée en douce : elle reste cohérente jusqu'au prochain
//  « Mettre à jour ».
// ============================================================
const CACHE = "aimyon-hors-ligne";
const DELAI_RESEAU = 4000;

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (e) => {
  const requete = e.request;
  const url = new URL(requete.url);
  if (requete.method !== "GET" || url.origin !== self.location.origin) return;
  e.respondWith(repondre(requete, url));
});

async function repondre(requete, url) {
  // Les pages sont gardées sans leur « ?p=… » : fiches.html?p=X → fiches.html
  // (caches.match ne crée pas de cache vide si la copie a été supprimée)
  const copie = await caches.match(url.origin + url.pathname, { cacheName: CACHE });
  const reseau = fetch(requete);
  reseau.catch(() => {}); // évite une erreur non traitée si la copie répond avant
  if (!copie) return reseau;
  const delai = new Promise((ok) => setTimeout(() => ok(null), DELAI_RESEAU));
  try {
    const reponse = await Promise.race([reseau, delai]);
    if (reponse && reponse.status < 500) return reponse;
  } catch (erreur) {
    // pas de réseau : on prend la copie
  }
  return copie;
}
