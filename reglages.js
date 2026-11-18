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
for (const radio of document.querySelectorAll('input[name="langue"]')) {
  radio.addEventListener("change", () => annoncer(ecrireReglage(CLE_LANGUE, radio.value)));
}
document.getElementById("reglages-defaut").addEventListener("click", () => {
  let ok = true;
  for (const { cle } of Object.values(REGLAGES)) ok = ecrireReglage(cle, null) && ok;
  ok = ecrireReglage(CLE_LANGUE, null) && ok;
  appliquerFurigana(false);
  afficherReglages();
  annoncer(ok);
});
window.addEventListener("storage", afficherReglages);

afficherReglages();
