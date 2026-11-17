// ============================================================
//  RÉVISION : une phrase (extrait d'Aimyon ou phrase modèle) dont la
//  partie qui illustre le point de grammaire est masquée. On choisit
//  le bon point parmi quatre, puis on voit la réponse et la traduction.
// ============================================================

const NIVEAUX_REV = ["N5", "N4", "N3", "N2", "N1", "Hors JLPT"];
const reglages = {
  niveaux: new Set(),          // vide = tous
  sources: new Set(["Aimyon"]), // "Aimyon" et/ou "Phrases modèles"
  inconnus: false,
};
const score = { bonnes: 0, total: 0 };
const zoneQuestion = document.getElementById("question");
const zoneVide = document.getElementById("vide-revision");
const zoneScore = document.getElementById("score");

function echapper(texte) {
  return String(texte).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Furigana et mise en valeur, comme sur les fiches
function enHtml(texte) {
  return echapper(texte)
    .replace(/([一-龯々0-9]+)\[([^\]]+)\]/g, "<ruby>$1<rt>$2</rt></ruby>")
    .replace(/\{/g, "<mark>").replace(/\}/g, "</mark>");
}

// La même phrase, avec la partie entre accolades remplacée par un trou
function avecTrou(texte) {
  return echapper(texte)
    .replace(/\{[^}]*\}/g, '<span class="trou" aria-label="partie masquée">＿＿＿</span>')
    .replace(/([一-龯々0-9]+)\[([^\]]+)\]/g, "<ruby>$1<rt>$2</rt></ruby>");
}

function traductionSansMarque(texte) {
  return echapper(texte).replace(/[{}]/g, "");
}

function hasard(liste) {
  return liste[Math.floor(Math.random() * liste.length)];
}

function melanger(liste) {
  const copie = [...liste];
  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copie[i], copie[j]] = [copie[j], copie[i]];
  }
  return copie;
}

// Toutes les phrases utilisables avec les réglages actuels
function candidates() {
  const liste = [];
  for (const point of POINTS) {
    if (reglages.niveaux.size && !reglages.niveaux.has(point.niveau)) continue;
    if (reglages.inconnus && estConnu(point.titre)) continue;
    for (const ex of point.exemples) {
      if (!/\{[^}]+\}/.test(ex.japonais)) continue;
      const source = ex.chanson ? "Aimyon" : "Phrases modèles";
      if (!reglages.sources.has(source)) continue;
      liste.push({ point, ex });
    }
  }
  return liste;
}

// Trois mauvaises réponses plausibles : même niveau, de préférence même thème
function leurres(point) {
  const autres = POINTS.filter((p) => p.titre !== point.titre && p.niveau === point.niveau);
  const memeTheme = autres.filter((p) => CATEGORIE_DE[p.titre] === CATEGORIE_DE[point.titre]);
  const choisis = melanger(memeTheme).slice(0, 2);
  for (const p of melanger(autres)) {
    if (choisis.length >= 3) break;
    if (!choisis.includes(p)) choisis.push(p);
  }
  return choisis;
}

let questionEnCours = null;

function nouvelleQuestion() {
  const liste = candidates();
  zoneVide.hidden = liste.length > 0;
  zoneQuestion.hidden = liste.length === 0;
  if (!liste.length) return;
  let tirage = hasard(liste);
  // évite de reposer deux fois de suite la même phrase
  if (questionEnCours && liste.length > 1 && tirage.ex === questionEnCours.ex) tirage = hasard(liste);
  questionEnCours = tirage;
  const { point, ex } = tirage;
  const choix = melanger([point, ...leurres(point)]);
  const titreChanson = ex.chanson ? ex.chanson.replace(" (album)", "") : "";
  const pochette = ex.chanson && typeof POCHETTES !== "undefined" ? POCHETTES[titreChanson] : null;
  const origine = ex.chanson
    ? `<div class="origine">
        ${pochette ? `<img class="pochette-revision" src="${echapper(pochette.image)}" alt="" width="72" height="72" loading="lazy" onerror="this.remove()">` : ""}
        <div><span class="origine-titre" lang="ja">♪ ${echapper(titreChanson)}</span>
        ${pochette ? `<span class="origine-disque">${pochette.type === "single" ? "Single" : "Album"} <span lang="ja">${echapper(pochette.disque)}</span>${pochette.annee ? " · " + echapper(pochette.annee) : ""}</span>` : ""}</div>
      </div>`
    : `<p class="origine">Phrase modèle</p>`;
  zoneQuestion.innerHTML = `
    <div class="fiche-tete"><h2>Quel point manque ?</h2><span class="niveau">${point.niveau}</span></div>
    <blockquote class="${ex.chanson ? "chanson" : "modele"}">
      <p class="japonais" lang="ja">${avecTrou(ex.japonais)}</p>
      <details class="indice"><summary>Indice : la traduction</summary>
        <p class="traduction">${traductionSansMarque(ex.traduction)}</p></details>
      ${origine}
    </blockquote>
    <div class="choix">${choix.map((p) =>
      `<button type="button" class="choix-reponse" data-titre="${echapper(p.titre)}" lang="ja">${echapper(p.titre)}</button>`).join("")}
    </div>
    <div id="reponse" hidden></div>`;
}

function repondre(bouton) {
  if (!questionEnCours || zoneQuestion.querySelector(".choix-reponse[disabled]")) return;
  const { point, ex } = questionEnCours;
  const juste = bouton.dataset.titre === point.titre;
  score.total += 1;
  if (juste) score.bonnes += 1;
  zoneScore.textContent = `${score.bonnes} / ${score.total} bonne${score.bonnes > 1 ? "s" : ""} réponse${score.bonnes > 1 ? "s" : ""}`;
  for (const b of zoneQuestion.querySelectorAll(".choix-reponse")) {
    b.disabled = true;
    if (b.dataset.titre === point.titre) b.classList.add("bonne");
    else if (b === bouton) b.classList.add("mauvaise");
  }
  zoneQuestion.querySelector(".japonais").innerHTML = enHtml(ex.japonais);
  zoneQuestion.querySelector(".indice").outerHTML =
    `<p class="traduction">${enHtml(ex.traduction).replace(/<rt>.*?<\/rt>/g, "")}</p>`;
  const reponse = zoneQuestion.querySelector("#reponse");
  reponse.hidden = false;
  reponse.innerHTML = `
    <p class="verdict ${juste ? "verdict-bon" : "verdict-faux"}">${juste ? "Bonne réponse !" : "Ce n'est pas ça."}
      C'était <a href="fiches.html?p=${encodeURIComponent(point.titre)}" lang="ja">${echapper(point.titre)}</a> : ${echapper(point.resume)}</p>
    <div class="fiche-pied">
      ${boutonConnu(point.titre)}
      <button type="button" class="bouton-principal" id="suivante">Phrase suivante →</button>
    </div>`;
  reponse.querySelector("#suivante").focus();
}

zoneQuestion.addEventListener("click", (e) => {
  const choix = e.target.closest(".choix-reponse");
  if (choix) return repondre(choix);
  if (e.target.closest("#suivante")) nouvelleQuestion();
});

// Rangées d'interrupteurs (même principe que le sommaire)
function interrupteurs(zone, valeurs, choix, avecTous, classe) {
  const maj = () => {
    for (const puce of zone.children) {
      const v = puce.dataset.valeur;
      puce.setAttribute("aria-pressed", v === "Tous" ? !choix.size : choix.has(v));
    }
  };
  for (const valeur of (avecTous ? ["Tous", ...valeurs] : valeurs)) {
    const puce = document.createElement("button");
    puce.type = "button";
    puce.dataset.valeur = valeur;
    puce.className = "puce" + (classe && valeur !== "Tous" ? " " + classe(valeur) : "");
    puce.innerHTML = valeur === "Tous" ? "Tous" : (classe ? '<span class="pastille" aria-hidden="true"></span>' : "") + echapper(valeur);
    puce.addEventListener("click", () => {
      if (valeur === "Tous") choix.clear();
      else if (choix.has(valeur)) {
        // il faut garder au moins une source de phrases
        if (!avecTous && choix.size === 1) return;
        choix.delete(valeur);
      } else choix.add(valeur);
      maj();
      nouvelleQuestion();
    });
    zone.appendChild(puce);
  }
  maj();
}

interrupteurs(document.getElementById("niveaux-revision"), NIVEAUX_REV, reglages.niveaux, true,
  (v) => "puce-" + v.replace(/\s+/g, "-"));
interrupteurs(document.getElementById("sources-revision"), ["Aimyon", "Phrases modèles"], reglages.sources, false);
document.getElementById("revision-inconnus").addEventListener("change", (e) => {
  reglages.inconnus = e.target.checked;
  nouvelleQuestion();
});

nouvelleQuestion();
