// ============================================================
//  PAGE RÉGLAGES : préférences gardées dans ce navigateur
//  (localStorage), lues par commun.js (furigana) et
//  loupe-kanji.js (loupe, surlignage, langue) sur chaque page.
// ============================================================
const REGLAGES = {
  furigana: { cle: "aimyon-grammaire:sans-furigana", id: "reglage-furigana" },
  loupe: { cle: "aimyon-grammaire:sans-loupe", id: "reglage-loupe" },
  surlignage: { cle: "aimyon-grammaire:sans-surlignage", id: "reglage-surlignage" },
};
const CLE_LANGUE = "aimyon-grammaire:langue";
const CLE_TITRES_REGLAGE = "aimyon-grammaire:titres"; // "international" ou "original"

function lireReglage(cle) {
  try { return localStorage.getItem(cle); } catch (e) { return null; }
}
function ecrireReglage(cle, valeur) {
  try {
    if (valeur === null) localStorage.removeItem(cle);
    else localStorage.setItem(cle, valeur);
    return true;
  } catch (e) {
    return false;
  }
}

const statut = document.getElementById("reglages-statut");
let minuterieStatut = null;
function annoncer(ok) {
  statut.textContent = ok ? "✓ Enregistré" : "Le navigateur bloque l'enregistrement (navigation privée ?) : le réglage ne vaut que pour cette page.";
  clearTimeout(minuterieStatut);
  if (ok) minuterieStatut = setTimeout(() => { statut.textContent = ""; }, 2000);
}

function afficherReglages() {
  for (const { cle, id } of Object.values(REGLAGES)) {
    document.getElementById(id).checked = lireReglage(cle) !== "1";
  }
  document.getElementById("reglage-titres").checked = lireReglage(CLE_TITRES_REGLAGE) === "international";
  const langue = lireReglage(CLE_LANGUE) === "en" ? "en" : "fr";
  for (const radio of document.querySelectorAll('input[name="langue"]')) radio.checked = radio.value === langue;
  document.getElementById(REGLAGES.surlignage.id).disabled = !document.getElementById(REGLAGES.loupe.id).checked;
}

for (const { cle, id } of Object.values(REGLAGES)) {
  document.getElementById(id).addEventListener("change", (e) => {
    const ok = ecrireReglage(cle, e.target.checked ? "0" : "1");
    if (cle === REGLAGES.furigana.cle) appliquerFurigana(!e.target.checked);
    afficherReglages();
    annoncer(ok);
  });
}
document.getElementById("reglage-titres").addEventListener("change", (e) => {
  annoncer(ecrireReglage(CLE_TITRES_REGLAGE, e.target.checked ? "international" : "original"));
});
for (const radio of document.querySelectorAll('input[name="langue"]')) {
  radio.addEventListener("change", () => annoncer(ecrireReglage(CLE_LANGUE, radio.value)));
}
document.getElementById("reglages-defaut").addEventListener("click", () => {
  let ok = true;
  for (const { cle } of Object.values(REGLAGES)) ok = ecrireReglage(cle, null) && ok;
  ok = ecrireReglage(CLE_LANGUE, null) && ok;
  ok = ecrireReglage(CLE_TITRES_REGLAGE, null) && ok;
  appliquerFurigana(false);
  afficherReglages();
  annoncer(ok);
});
window.addEventListener("storage", afficherReglages);

afficherReglages();

// ============================================================
//  HORS LIGNE : téléchargement de tout le site dans le cache du
//  navigateur (Cache Storage), servi sans réseau par sw.js.
// ============================================================
const CACHE_HORS_LIGNE = "aimyon-hors-ligne"; // même nom que dans sw.js
const INFOS_HORS_LIGNE = "hors-ligne-infos.json"; // entrée fictive : date, fichiers, versions
const PAGES = ["./", "index.html", "fiches.html", "chansons.html", "revision.html", "reglages.html"];
// Chargés à la demande par loupe-kanji.js (absents des balises <script>)
const FICHIERS_LOUPE = ["data-kanji.js", "deinflexion.js", "data-mots.js"];

const zone = {
  etat: document.getElementById("hors-ligne-etat"),
  telecharger: document.getElementById("hors-ligne-telecharger"),
  maj: document.getElementById("hors-ligne-maj"),
  supprimer: document.getElementById("hors-ligne-supprimer"),
  progression: document.getElementById("hors-ligne-progression"),
};

const horsLignePossible = "serviceWorker" in navigator && "caches" in window && window.isSecureContext;

function adresse(fichier) { return new URL(fichier, location.href).href; }
function taille(octets) {
  return octets > 1e6 ? (octets / 1e6).toLocaleString("fr-FR", { maximumFractionDigits: 1 }) + " Mo"
    : Math.round(octets / 1e3) + " Ko";
}
function dateLisible(iso) {
  return new Date(iso).toLocaleString("fr-FR", { dateStyle: "long", timeStyle: "short" });
}
// Ce qui identifie la version d'un fichier sur le serveur
function version(reponse) {
  return reponse.headers.get("etag") || reponse.headers.get("last-modified") || "";
}

// Liste des fichiers : les pages, tout ce qu'elles chargent et les pages qu'elles citent.
async function listerFichiers() {
  const fichiers = new Set([...PAGES, "style.css", "icone.png", "sw.js", ...FICHIERS_LOUPE]);
  for (const page of PAGES.slice(1)) {
    const texte = await (await fetch(page, { cache: "no-store" })).text();
    for (const m of texte.matchAll(/<(?:script|link|img|a)\b[^>]*?\b(?:src|href)="([^"#?:]+)"/g)) {
      if (/\.(js|css|png|html)$/.test(m[1])) fichiers.add(m[1]);
    }
  }
  return [...fichiers];
}

async function lireInfos() {
  if (!horsLignePossible) return null;
  const reponse = await caches.match(adresse(INFOS_HORS_LIGNE), { cacheName: CACHE_HORS_LIGNE });
  return reponse ? reponse.json() : null;
}

function occupe(oui) {
  for (const b of [zone.telecharger, zone.maj, zone.supprimer]) b.disabled = oui;
  zone.progression.hidden = !oui;
}

async function telecharger() {
  occupe(true);
  zone.etat.textContent = "Téléchargement…";
  try {
    const fichiers = await listerFichiers();
    zone.progression.max = fichiers.length;
    const reponses = [];
    let total = 0;
    // Tout est d'abord récupéré : la copie n'est remplacée que si tout a réussi.
    for (const [n, fichier] of fichiers.entries()) {
      const reponse = await fetch(fichier, { cache: "no-store" });
      if (!reponse.ok) throw new Error(fichier + " : erreur " + reponse.status);
      const corps = await reponse.blob();
      total += corps.size;
      // On ne garde que les en-têtes utiles (le corps est déjà décompressé).
      const entetes = {};
      for (const nom of ["content-type", "etag", "last-modified"]) if (reponse.headers.get(nom)) entetes[nom] = reponse.headers.get(nom);
      reponses.push([fichier, new Response(corps, { headers: entetes }), version(reponse)]);
      zone.progression.value = n + 1;
    }
    await caches.delete(CACHE_HORS_LIGNE);
    const cache = await caches.open(CACHE_HORS_LIGNE);
    for (const [fichier, reponse] of reponses) await cache.put(adresse(fichier), reponse);
    const infos = {
      date: new Date().toISOString(), taille: total,
      versions: Object.fromEntries(reponses.map(([f, , v]) => [f, v])),
    };
    await cache.put(adresse(INFOS_HORS_LIGNE), new Response(JSON.stringify(infos), { headers: { "Content-Type": "application/json" } }));
    await navigator.serviceWorker.register("sw.js");
    if (navigator.storage && navigator.storage.persist) await navigator.storage.persist().catch(() => false);
    await afficherHorsLigne(false);
  } catch (erreur) {
    zone.etat.textContent = "Le téléchargement a échoué (" + erreur.message + "). Vérifie la connexion et réessaie.";
  } finally {
    occupe(false);
  }
}

async function supprimer() {
  occupe(true);
  try {
    for (const inscription of await navigator.serviceWorker.getRegistrations()) await inscription.unregister();
    await caches.delete(CACHE_HORS_LIGNE);
  } finally {
    occupe(false);
    await afficherHorsLigne(false);
  }
}

// Compare la version de chaque fichier gardé avec celle du serveur.
async function majDisponible(infos) {
  for (const [fichier, ancienne] of Object.entries(infos.versions)) {
    const reponse = await fetch(fichier, { method: "HEAD", cache: "no-store" });
    if (!reponse.ok || version(reponse) !== ancienne) return true;
  }
  // Une nouvelle page ou un nouveau script ajouté au site compte aussi.
  const actuels = await listerFichiers();
  return actuels.some((f) => !(f in infos.versions));
}

async function afficherHorsLigne(verifier = true) {
  if (!horsLignePossible) {
    zone.etat.textContent = "Ce navigateur ne permet pas le mode hors ligne (navigation privée, ou page ouverte depuis un fichier local).";
    return;
  }
  const infos = await lireInfos();
  zone.telecharger.hidden = !!infos;
  zone.supprimer.hidden = !infos;
  zone.maj.hidden = true;
  if (!infos) {
    zone.etat.textContent = "Pas encore téléchargé.";
    return;
  }
  const base = `✓ Téléchargé le ${dateLisible(infos.date)} (${Object.keys(infos.versions).length} fichiers, ${taille(infos.taille)}).`;
  zone.etat.textContent = base;
  if (!verifier) return;
  if (!navigator.onLine) { zone.etat.textContent = base + " Hors connexion : impossible de chercher une mise à jour."; return; }
  zone.etat.textContent = base + " Recherche d'une mise à jour…";
  try {
    const nouvelle = await majDisponible(infos);
    zone.etat.textContent = base + (nouvelle ? " Une mise à jour du site est disponible." : " C'est la dernière version.");
    zone.maj.hidden = !nouvelle;
  } catch (erreur) {
    zone.etat.textContent = base + " Impossible de vérifier les mises à jour pour l'instant.";
  }
}

zone.telecharger.addEventListener("click", telecharger);
zone.maj.addEventListener("click", telecharger);
zone.supprimer.addEventListener("click", supprimer);
afficherHorsLigne();
