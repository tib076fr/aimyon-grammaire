// ============================================================
//  LE SOMMAIRE : toutes les fiches en cartes, avec filtres par niveau,
//  par thème, par présence d'une chanson, et une recherche.
// ============================================================

const etat = {
  niveaux: new Set(), // niveaux cochés ; vide = tous
  themes: new Set(), // thèmes cochés ; vide = tous
  chanson: false,
  avecAnecdote: false,
  texte: "",
};

const NIVEAUX = ["N5", "N4", "N3", "N2", "N1", "Hors JLPT"];
const NOMS_NIVEAUX = { N5: "Débutant", N4: "Élémentaire", N3: "Intermédiaire", N2: "Avancé", N1: "Expert", "Hors JLPT": "" };

// « Hors JLPT » -> « Hors-JLPT » : un nom utilisable comme classe CSS
function classeNiveau(niveau) {
  return niveau.replace(/\s+/g, "-");
};

const zoneResultats = document.getElementById("resultats");
const compteurSommaire = document.getElementById("compteur-sommaire");
const videSommaire = document.getElementById("vide-sommaire");
const champSommaire = document.getElementById("recherche-sommaire");
const caseChanson = document.getElementById("filtre-chanson");
const boutonReinitialiser = document.getElementById("reinitialiser");

function echapper(texte) {
  return String(texte).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function sansAccents(texte) {
  return texte.normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function chansonsDe(point) {
  return [...new Set(point.exemples.filter((e) => e.chanson).map((e) => e.chanson))];
}

// Même logique que la recherche des fiches : titre (kana, romaji), puis résumé
function noterRecherche(point) {
  if (!etat.texte) return 1;
  const cherche = sansAccents(etat.texte);
  if (/^[a-zāīūēōâîûêô\s\-']+$/.test(etat.texte)) {
    const simple = simplifierRomaji(etat.texte);
    const mots = romajiDuTitre(point.titre).split(" ").map(simplifierRomaji);
    if (mots.includes(simple)) return 3;
    if (simple.length > 2 && (mots.some((m) => m.startsWith(simple)) ||
        simplifierRomaji(kanaVersRomaji(lectureDuTitre(point.titre))).includes(simple))) return 2;
  }
  if (sansAccents(point.titre.toLowerCase()).includes(cherche)) return 2;
  const texte = sansAccents([point.resume, CATEGORIE_DE[point.titre] || "", ...chansonsDe(point)].join(" ").toLowerCase());
  return texte.includes(cherche) ? 1 : 0;
}

function correspond(point) {
  if (etat.niveaux.size && !etat.niveaux.has(point.niveau)) return false;
  if (etat.themes.size && !etat.themes.has(CATEGORIE_DE[point.titre])) return false;
  if (etat.chanson && chansonsDe(point).length === 0) return false;
  if (etat.avecAnecdote && !chansonsDe(point).some((c) => ANECDOTES[c.replace(" (album)", "")])) return false;
  return true;
}

// Une carte : niveau, titre japonais, résumé, pochettes des chansons
function creerCarte(point) {
  const chansons = chansonsDe(point);
  const pochettes = chansons
    .map((c) => POCHETTES[c.replace(" (album)", "")])
    .filter(Boolean)
    .filter((p, i, liste) => liste.findIndex((q) => q.image === p.image) === i)
    .slice(0, 3);
  const pied = chansons.length
    ? `<span class="carte-pochettes" aria-hidden="true">${pochettes
        .map((p) => `<img src="${echapper(urlSure(p.image))}" alt="" width="28" height="28" loading="lazy" data-retirer="soi">`)
        .join("")}</span>
       <span class="carte-chansons" lang="ja">♪ ${echapper(chansons.slice(0, 2).join(" · "))}${chansons.length > 2 ? " …" : ""}</span>`
    : `<span class="carte-modele">Phrase modèle</span>`;
  return `
    <a class="carte-point niveau-${classeNiveau(point.niveau)}" href="fiches.html?p=${encodeURIComponent(point.titre)}">
      <span class="carte-niveau">${point.niveau}</span>
      <span class="carte-titre" lang="ja">${echapper(point.titre)}</span>
      <span class="carte-resume">${echapper(point.resume)}</span>
      <span class="carte-pied">${pied}</span>
    </a>`;
}

function afficherSommaire() {
  let visibles = POINTS.filter(correspond)
    .map((point) => ({ point, note: noterRecherche(point) }))
    .filter((x) => x.note > 0);
  const nbChanson = visibles.filter((x) => chansonsDe(x.point).length).length;
  compteurSommaire.textContent =
    `${visibles.length} point${visibles.length > 1 ? "s" : ""} · ` +
    `${nbChanson} illustré${nbChanson > 1 ? "s" : ""} par Aimyon`;
  videSommaire.hidden = visibles.length > 0;
  boutonReinitialiser.hidden =
    !etat.niveaux.size && !etat.themes.size && !etat.chanson && !etat.avecAnecdote && !etat.texte;

  // Avec une recherche : une seule grille, les meilleurs résultats d'abord.
  // Sans recherche : une section par thème.
  if (etat.texte) {
    visibles.sort((a, b) => b.note - a.note);
    zoneResultats.innerHTML = `<div class="grille">${visibles.map((x) => creerCarte(x.point)).join("")}</div>`;
    return;
  }
  const html = [];
  for (const theme of Object.keys(CATEGORIES)) {
    // Dans chaque thème, du plus facile au plus difficile (N5 d'abord)
    const points = visibles.filter((x) => CATEGORIE_DE[x.point.titre] === theme).map((x) => x.point)
      .sort((a, b) => NIVEAUX.indexOf(a.niveau) - NIVEAUX.indexOf(b.niveau));
    if (!points.length) continue;
    html.push(`
      <section class="section-theme">
        <h2>${echapper(theme)} <span class="compte">${points.length}</span></h2>
        <div class="grille">${points.map(creerCarte).join("")}</div>
      </section>`);
  }
  zoneResultats.innerHTML = html.join("");
}

function compterParNiveau(niveau) {
  return POINTS.filter((p) => p.niveau === niveau).length;
}

// Rangée d'interrupteurs : chaque puce s'allume ou s'éteint d'un clic, on
// peut en cocher plusieurs ; « Tous » éteint tout (= aucun filtre).
// `choix` est l'ensemble (Set) des valeurs cochées.
const majPuces = [];
function creerInterrupteurs(zone, valeurs, choix, libelle, classe) {
  zone.innerHTML = "";
  const maj = () => {
    for (const puce of zone.children) {
      const v = puce.dataset.valeur;
      puce.setAttribute("aria-pressed", v === "Tous" ? !choix.size : choix.has(v));
    }
  };
  for (const valeur of ["Tous", ...valeurs]) {
    const puce = document.createElement("button");
    puce.type = "button";
    puce.dataset.valeur = valeur;
    puce.className = "puce" + (valeur !== "Tous" && classe ? " " + classe(valeur) : "");
    puce.innerHTML = libelle(valeur);
    puce.addEventListener("click", () => {
      if (valeur === "Tous") choix.clear();
      else if (choix.has(valeur)) choix.delete(valeur);
      else choix.add(valeur);
      maj();
      afficherSommaire();
    });
    zone.appendChild(puce);
  }
  maj();
  majPuces.push(maj);
}

creerInterrupteurs(document.getElementById("filtre-niveaux"), NIVEAUX, etat.niveaux,
  (v) => v === "Tous"
    ? "Tous"
    : `<span class="pastille" aria-hidden="true"></span>${v} <span class="sous-libelle"><span class="nom-niveau">${NOMS_NIVEAUX[v] ? NOMS_NIVEAUX[v] + " · " : ""}</span>${compterParNiveau(v)}</span>`,
  (v) => "puce-" + classeNiveau(v));
creerInterrupteurs(document.getElementById("filtre-themes"), Object.keys(CATEGORIES), etat.themes,
  (v) => (v === "Tous" ? "Tous les thèmes" : echapper(v)));

const caseAnecdote = document.getElementById("filtre-anecdote");
caseAnecdote.addEventListener("change", () => {
  etat.avecAnecdote = caseAnecdote.checked;
  afficherSommaire();
});

caseChanson.addEventListener("change", () => {
  etat.chanson = caseChanson.checked;
  afficherSommaire();
});

document.getElementById("formulaire-sommaire").addEventListener("submit", (evenement) => {
  evenement.preventDefault();
  etat.texte = champSommaire.value.trim().toLowerCase();
  champSommaire.blur();
  afficherSommaire();
});
champSommaire.addEventListener("input", () => {
  if (champSommaire.value.trim() === "" && etat.texte) {
    etat.texte = "";
    afficherSommaire();
  }
});

boutonReinitialiser.addEventListener("click", () => {
  Object.assign(etat, { chanson: false, avecAnecdote: false, texte: "" });
  caseAnecdote.checked = false;
  etat.niveaux.clear();
  etat.themes.clear();
  majPuces.forEach((maj) => maj());
  champSommaire.value = "";
  caseChanson.checked = false;
  afficherSommaire();
});

// Chiffres clés sous le titre
const nbIllustres = POINTS.filter((p) => chansonsDe(p).length).length;
const nbChansons = new Set(POINTS.flatMap(chansonsDe)).size;
document.getElementById("chiffres").innerHTML = [
  [POINTS.length, "points de grammaire"],
  [nbIllustres, "illustrés par Aimyon"],
  [nbChansons, "chansons citées"],
  [Object.keys(CATEGORIES).length, "thèmes"],
].map(([n, l]) => `<li><strong>${n}</strong> ${l}</li>`).join("");

afficherSommaire();
