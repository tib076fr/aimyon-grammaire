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
  for (const caseACocher of document.querySelectorAll(".case-furigana")) caseACocher.checked = !sans;
}
appliquerFurigana(lireSansFurigana());
document.addEventListener("DOMContentLoaded", () => appliquerFurigana(lireSansFurigana()));
document.addEventListener("change", (evenement) => {
  if (!evenement.target.classList.contains("case-furigana")) return;
  const sans = !evenement.target.checked;
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

// Un réglage changé dans un autre onglet (page Réglages) s'applique ici aussi.
window.addEventListener("storage", () => {
  appliquerFurigana(lireSansFurigana());
  appliquerTitres(lireTitresInternationaux());
});

// ---------- Accessibilité (RGAA 13.2) ----------
// Tout lien qui s'ouvre dans un nouvel onglet le dit aux lecteurs d'écran,
// et la flèche « ↗ », décorative, leur est masquée. Appliqué aussi au
// contenu ajouté plus tard (fiches chargées au fil du défilement, loupe…).
function signalerNouvellesFenetres(racine) {
  for (const lien of racine.querySelectorAll('a[target="_blank"]:not([data-nf])')) {
    lien.dataset.nf = "1";
    for (const noeud of [...lien.childNodes]) {
      if (noeud.nodeType === Node.TEXT_NODE && noeud.data.includes("↗")) {
        const morceaux = noeud.data.split("↗");
        const fragment = document.createDocumentFragment();
        morceaux.forEach((texte, i) => {
          if (texte) fragment.append(texte);
          if (i < morceaux.length - 1) {
            const fleche = document.createElement("span");
            fleche.setAttribute("aria-hidden", "true");
            fleche.textContent = "↗";
            fragment.append(fleche);
          }
        });
        noeud.replaceWith(fragment);
      }
    }
    const note = document.createElement("span");
    note.className = "lecteur-ecran";
    note.textContent = " (nouvelle fenêtre)";
    lien.append(note);
  }
}
function surveillerNouvellesFenetres() {
  signalerNouvellesFenetres(document);
  new MutationObserver((changements) => {
    for (const c of changements) for (const n of c.addedNodes) if (n.nodeType === Node.ELEMENT_NODE) signalerNouvellesFenetres(n.parentNode || n);
  }).observe(document.body, { childList: true, subtree: true });
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", surveillerNouvellesFenetres);
else surveillerNouvellesFenetres();

// ---------- Filtres repliables (Sommaire, Chansons) ----------
// Sur téléphone, les filtres sont repliés derrière un bouton « Filtres (n) »
// qui indique combien sont actifs ; sur grand écran, ils restent ouverts.
const ECRAN_LARGE = window.matchMedia("(min-width: 701px)");
function compterFiltres(bloc) {
  const puces = [...bloc.querySelectorAll('.puce[aria-pressed="true"]')]
    .filter((p) => !p.textContent.trim().startsWith("Tous"));
  const cases = bloc.querySelectorAll('input[type="checkbox"]:checked');
  const n = puces.length + cases.length;
  bloc.querySelector(".nb-filtres").textContent = n ? ` (${n})` : "";
}
function preparerFiltresRepliables() {
  for (const bloc of document.querySelectorAll(".filtres-repliables")) {
    bloc.open = ECRAN_LARGE.matches;
    compterFiltres(bloc);
    // Après chaque choix (le clic est traité d'abord par la page)
    for (const type of ["click", "change"]) bloc.addEventListener(type, () => setTimeout(() => compterFiltres(bloc)));
  }
}
ECRAN_LARGE.addEventListener("change", () => {
  for (const bloc of document.querySelectorAll(".filtres-repliables")) bloc.open = ECRAN_LARGE.matches;
});
// « Tout réafficher » (hors du bloc) remet aussi le compte à zéro
document.addEventListener("click", (e) => {
  if (e.target.closest && e.target.closest("#reinitialiser")) setTimeout(() => document.querySelectorAll(".filtres-repliables").forEach(compterFiltres));
});
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", preparerFiltresRepliables);
else preparerFiltresRepliables();
