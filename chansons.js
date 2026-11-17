// ============================================================
//  CHANSONS : toutes les chansons, rangées par album. Un clic sur une
//  chanson déplie les points de grammaire qu'elle illustre, avec la
//  courte citation déjà présente sur la fiche.
// ============================================================

const filtres = {
  albums: new Set(), // albums cochés ; vide = tous
  texte: "",
  seulementCitees: false,
};
const zoneListe = document.getElementById("liste-chansons");
const zoneVideChansons = document.getElementById("vide-chansons");
const zoneCompteur = document.getElementById("compteur-chansons");
const champChansons = document.getElementById("recherche-chansons");

function echapper(texte) {
  return String(texte).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function enHtml(texte) {
  return echapper(texte)
    .replace(/([一-龯々0-9]+)\[([^\]]+)\]/g, "<ruby>$1<rt>$2</rt></ruby>")
    .replace(/\{/g, "<mark>").replace(/\}/g, "</mark>");
}
function traductionHtml(texte) {
  return echapper(texte).replace(/\{/g, "<mark>").replace(/\}/g, "</mark>");
}

// Pour chaque chanson : les points qu'elle illustre, avec la citation
const PAR_CHANSON = {};
for (const point of POINTS) {
  for (const ex of point.exemples) {
    if (!ex.chanson) continue;
    const titre = ex.chanson.replace(" (album)", "");
    (PAR_CHANSON[titre] = PAR_CHANSON[titre] || []).push({ point, ex });
  }
}
const ORDRE_NIVEAUX = ["N5", "N4", "N3", "N2", "N1", "Hors JLPT"];
for (const liste of Object.values(PAR_CHANSON)) {
  liste.sort((a, b) => ORDRE_NIVEAUX.indexOf(a.point.niveau) - ORDRE_NIVEAUX.indexOf(b.point.niveau));
}

function sansAccentsMin(t) {
  return t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

function correspond(titre, album) {
  if (filtres.albums.size && !filtres.albums.has(album.nom)) return false;
  if (filtres.seulementCitees && !PAR_CHANSON[titre]) return false;
  if (!filtres.texte) return true;
  const cherche = sansAccentsMin(filtres.texte);
  if (sansAccentsMin(titre).includes(cherche)) return true;
  // recherche en romaji sur les titres en kana
  if (/^[a-z\s\-']+$/.test(cherche)) {
    const romaji = simplifierRomaji(kanaVersRomaji(titre));
    if (romaji && romaji.includes(simplifierRomaji(cherche))) return true;
  }
  return sansAccentsMin(album.nom).includes(cherche);
}

function carteChanson(titre, album) {
  const pochette = POCHETTES[titre];
  const image = (pochette && pochette.image) || album.image;
  const exemples = PAR_CHANSON[titre] || [];
  const disque = pochette ? `${pochette.type === "single" ? "Single" : "Album"} <span lang="ja">${echapper(pochette.disque)}</span>${pochette.annee ? " · " + echapper(pochette.annee) : ""}` : "";
  const id = "chanson-" + encodeURIComponent(titre).replace(/%/g, "");
  const liste = exemples.length
    ? `<ul class="points-chanson">${exemples.map(({ point, ex }) => `
        <li>
          <a class="point-chanson" href="fiches.html?p=${encodeURIComponent(point.titre)}">
            <span class="niveau niveau-${point.niveau.replace(/\s+/g, "-")}">${echapper(point.niveau)}</span>
            <span class="point-titre" lang="ja">${echapper(point.titre)}</span>
          </a>
          <p class="japonais" lang="ja">${enHtml(ex.japonais)}</p>
          <p class="traduction">${traductionHtml(ex.traduction)}</p>
        </li>`).join("")}
      </ul>`
    : `<p class="pas-encore">Aucune ligne de cette chanson n'est encore citée dans les fiches.</p>`;
  const paroles = PAROLES[titre]
    ? `<a class="lien-paroles" href="${echapper(PAROLES[titre])}" target="_blank" rel="noopener">Paroles complètes ↗</a>` : "";
  return `
    <article class="chanson" id="${id}">
      <button type="button" class="chanson-tete" aria-expanded="false" aria-controls="${id}-detail">
        ${image ? `<img class="chanson-pochette" src="${echapper(image)}" alt="" width="64" height="64" loading="lazy" onerror="this.remove()">` : `<span class="chanson-pochette sans-image" aria-hidden="true">♪</span>`}
        <span class="chanson-infos">
          <span class="chanson-titre" lang="ja">${echapper(titre)}</span>
          <span class="chanson-disque">${disque}</span>
        </span>
        <span class="chanson-compte" title="Points de grammaire illustrés">${exemples.length}</span>
      </button>
      <div class="chanson-detail" id="${id}-detail" hidden>
        ${liste}
        ${paroles}
      </div>
    </article>`;
}

function afficherChansons() {
  const html = [];
  let nb = 0, nbCitees = 0;
  for (const album of ALBUMS) {
    const titres = album.chansons.filter((t) => correspond(t, album));
    if (!titres.length) continue;
    nb += titres.length;
    nbCitees += titres.filter((t) => PAR_CHANSON[t]).length;
    html.push(`
      <section class="album">
        <header class="album-tete">
          ${album.image ? `<img class="album-pochette" src="${echapper(album.image)}" alt="" width="56" height="56" loading="lazy" onerror="this.remove()">` : ""}
          <div>
            <h2 lang="ja">${echapper(album.nom)} <span class="compte">${titres.length}</span></h2>
            <p class="album-type">${echapper(album.type)}${album.annee ? " · " + echapper(album.annee) : ""}</p>
          </div>
        </header>
        <div class="grille-chansons">${titres.map((t) => carteChanson(t, album)).join("")}</div>
      </section>`);
  }
  zoneListe.innerHTML = html.join("");
  zoneVideChansons.hidden = nb > 0;
  zoneCompteur.textContent = `${nb} chanson${nb > 1 ? "s" : ""} · ${nbCitees} citée${nbCitees > 1 ? "s" : ""} dans les fiches`;
}

// Ouvrir / fermer une chanson
zoneListe.addEventListener("click", (e) => {
  const tete = e.target.closest(".chanson-tete");
  if (!tete) return;
  const ouvrir = tete.getAttribute("aria-expanded") !== "true";
  tete.setAttribute("aria-expanded", ouvrir);
  document.getElementById(tete.getAttribute("aria-controls")).hidden = !ouvrir;
});

// Albums : interrupteurs à choix multiple
const zoneAlbums = document.getElementById("filtre-albums");
function majAlbums() {
  for (const puce of zoneAlbums.children) {
    const v = puce.dataset.valeur;
    puce.setAttribute("aria-pressed", v === "Tous" ? !filtres.albums.size : filtres.albums.has(v));
  }
}
for (const valeur of ["Tous", ...ALBUMS.map((a) => a.nom)]) {
  const puce = document.createElement("button");
  puce.type = "button";
  puce.className = "puce";
  puce.dataset.valeur = valeur;
  puce.innerHTML = valeur === "Tous" ? "Tous les albums" : `<span lang="ja">${echapper(valeur)}</span>`;
  puce.addEventListener("click", () => {
    if (valeur === "Tous") filtres.albums.clear();
    else if (filtres.albums.has(valeur)) filtres.albums.delete(valeur);
    else filtres.albums.add(valeur);
    majAlbums();
    afficherChansons();
  });
  zoneAlbums.appendChild(puce);
}
majAlbums();

document.getElementById("filtre-cites").addEventListener("change", (e) => {
  filtres.seulementCitees = e.target.checked;
  afficherChansons();
});
document.getElementById("formulaire-chansons").addEventListener("submit", (e) => {
  e.preventDefault();
  filtres.texte = champChansons.value.trim();
  champChansons.blur();
  afficherChansons();
});
champChansons.addEventListener("input", () => {
  if (!champChansons.value.trim() && filtres.texte) {
    filtres.texte = "";
    afficherChansons();
  }
});

afficherChansons();

// chansons.html?c=<titre> : ouvre directement cette chanson
const demandee = new URLSearchParams(location.search).get("c");
if (demandee) {
  const article = document.getElementById("chanson-" + encodeURIComponent(demandee).replace(/%/g, ""));
  if (article) {
    article.querySelector(".chanson-tete").click();
    article.scrollIntoView({ block: "start" });
  }
}
