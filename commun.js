// ============================================================
//  OUTILS COMMUNS DE SÉCURITÉ, chargés avant les autres scripts.
// ============================================================

// N'accepte qu'une adresse https (ou une page du site) pour un lien ou
// une image : une adresse « javascript: » glissée dans les données ne
// pourrait donc jamais s'exécuter.
function urlSure(adresse) {
  const texte = String(adresse || "");
  if (/^https:\/\//i.test(texte)) return texte;
  if (/^[a-z0-9-]+\.html(\?[^"<>]*)?$/i.test(texte)) return texte;
  return "#";
}

// Une pochette qui ne se charge pas disparaît (data-retirer="soi" ou
// "parent"), sans attribut onerror dans le HTML : cela permet d'interdire
// tout script en ligne dans la politique de sécurité de la page.
document.addEventListener("error", (evenement) => {
  const image = evenement.target;
  if (!(image instanceof HTMLImageElement) || !image.dataset.retirer) return;
  (image.dataset.retirer === "parent" ? image.parentNode : image).remove();
}, true);

// Bouton « Au hasard » : ouvre une fiche tirée au sort.
document.addEventListener("click", (evenement) => {
  const bouton = evenement.target.closest(".bouton-hasard");
  if (!bouton || typeof POINTS === "undefined" || !POINTS.length) return;
  evenement.preventDefault();
  const actuel = new URLSearchParams(location.search).get("p");
  const choix = POINTS.filter((p) => p.titre !== actuel);
  const point = choix[Math.floor(Math.random() * choix.length)];
  location.href = "fiches.html?p=" + encodeURIComponent(point.titre);
});

// L'ancien suivi « Je connais » a été retiré : on efface ce qu'il avait gardé.
try { localStorage.removeItem("aimyon-grammaire:connus"); } catch (e) { /* rien à effacer */ }

// Furigana : affichées ou masquées (choix gardé dans ce navigateur).
// La préférence s'applique à toutes les pages ; le bouton est sur les fiches.
const CLE_FURIGANA = "aimyon-grammaire:sans-furigana";
function lireSansFurigana() {
  try { return localStorage.getItem(CLE_FURIGANA) === "1"; } catch (e) { return false; }
}
function appliquerFurigana(sans) {
  document.documentElement.classList.toggle("sans-furigana", sans);
  for (const bouton of document.querySelectorAll(".bouton-furigana")) {
    bouton.setAttribute("aria-pressed", !sans);
    bouton.textContent = sans ? "Furigana : non" : "Furigana : oui";
  }
}
appliquerFurigana(lireSansFurigana());
document.addEventListener("DOMContentLoaded", () => appliquerFurigana(lireSansFurigana()));
document.addEventListener("click", (evenement) => {
  if (!evenement.target.closest(".bouton-furigana")) return;
  const sans = !document.documentElement.classList.contains("sans-furigana");
  try { localStorage.setItem(CLE_FURIGANA, sans ? "1" : "0"); } catch (e) { /* tant pis : choix pour cette visite */ }
  appliquerFurigana(sans);
});
// Titres des chansons : originaux ou internationaux (titre anglais officiel,
// data-titres.js). Les deux sont dans la page ; une classe sur <html> choisit.
const CLE_TITRES = "aimyon-grammaire:titres";
function lireTitresInternationaux() {
  try { return localStorage.getItem(CLE_TITRES) === "international"; } catch (e) { return false; }
}
function appliquerTitres(international) {
  document.documentElement.classList.toggle("titres-internationaux", international);
  for (const bouton of document.querySelectorAll(".bouton-titres")) {
    bouton.setAttribute("aria-pressed", international);
    bouton.textContent = international ? "Titres : internationaux" : "Titres : originaux";
  }
}
function echapperTitre(texte) {
  return String(texte).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
// HTML d'un titre de chanson (avec « (album) » éventuel), dans les deux versions.
function htmlTitre(titre) {
  const base = String(titre).replace(" (album)", "");
  const suffixe = base === titre ? "" : " (album)";
  const international = typeof TITRES_INTERNATIONAUX !== "undefined" && TITRES_INTERNATIONAUX[base];
  if (!international) return echapperTitre(titre);
  return `<span class="titre-original" lang="ja" title="Titre international : ${echapperTitre(international)}">${echapperTitre(base)}</span>`
    + `<span class="titre-international" lang="en" title="Titre original : ${echapperTitre(base)}">${echapperTitre(international)}</span>${suffixe}`;
}
appliquerTitres(lireTitresInternationaux());
document.addEventListener("DOMContentLoaded", () => appliquerTitres(lireTitresInternationaux()));
document.addEventListener("click", (evenement) => {
  if (!evenement.target.closest(".bouton-titres")) return;
  const international = !document.documentElement.classList.contains("titres-internationaux");
  try { localStorage.setItem(CLE_TITRES, international ? "international" : "original"); } catch (e) { /* choix pour cette visite */ }
  appliquerTitres(international);
});

// Un réglage changé dans un autre onglet (page Réglages) s'applique ici aussi.
window.addEventListener("storage", () => {
  appliquerFurigana(lireSansFurigana());
  appliquerTitres(lireTitresInternationaux());
});
