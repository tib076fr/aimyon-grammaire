// ============================================================
//  LE CODE : lit la liste POINTS (fichiers data-*.js) et fabrique la page.
// ============================================================

// Ce que l'utilisateur a choisi pour l'instant
let niveauChoisi = "Tous";
let texteCherche = "";
let seulementChansons = false;

// Les éléments de la page que l'on va remplir
const zoneFiches = document.getElementById("fiches");
const zoneFiltres = document.getElementById("filtres");
const champRecherche = document.getElementById("recherche");
const messageVide = document.getElementById("vide");
const compteur = document.getElementById("compteur");

// Rend un texte inoffensif avant de l'insérer dans du HTML
function echapper(texte) {
  return texte.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Transforme "帽子[ぼうし]" en <ruby>帽子<rt>ぼうし</rt></ruby> (furigana)
function furigana(texte) {
  return echapper(texte).replace(
    /([一-龯々0-9]+)\[([^\]]+)\]/g,
    "<ruby>$1<rt>$2</rt></ruby>"
  );
}

// Enlève les crochets de lecture : sert pour la recherche
function sansFurigana(texte) {
  return texte.replace(/\[[^\]]+\]/g, "");
}

// Une fiche a-t-elle au moins un extrait de chanson ?
function aUneChanson(point) {
  return point.exemples.some((ex) => ex.chanson);
}

// Fabrique le HTML d'un exemple (extrait d'Aimyon ou phrase modèle)
function creerExemple(ex) {
  let source;
  if (ex.chanson) {
    const estAlbum = ex.chanson.includes("(album)");
    const titre = ex.chanson.replace(" (album)", "");
    const ecouter =
      "https://www.youtube.com/results?search_query=" +
      encodeURIComponent("あいみょん " + titre);
    // Lien externe vers les paroles complètes : la page de la chanson si on la
    // connaît (data-paroles.js), sinon une recherche « artiste titre 歌詞 »
    const paroles =
      PAROLES[titre] ||
      "https://www.google.com/search?q=" +
        encodeURIComponent("あいみょん " + titre + " 歌詞");
    const annee = ex.annee ? ` (${ex.annee})` : "";
    const lienParoles = estAlbum
      ? ""
      : ` <span class="ensemble">· <a href="${paroles}" target="_blank" rel="noopener">Paroles complètes ↗</a></span>`;
    source = `<cite>♪ <span class="titre-chanson" lang="ja">${echapper(ex.chanson)}</span>${annee}
      <span class="ensemble">· <a href="${ecouter}" target="_blank" rel="noopener">Écouter ↗</a></span>${lienParoles}</cite>`;
  } else {
    source = `<cite>Phrase modèle</cite>`;
  }

  const note = ex.note ? `<p class="note">${echapper(ex.note)}</p>` : "";

  return `
    <blockquote class="${ex.chanson ? "chanson" : "modele"}">
      <p class="japonais" lang="ja">${furigana(ex.japonais)}</p>
      <p class="traduction">${echapper(ex.traduction)}</p>
      ${source}
      ${note}
    </blockquote>`;
}

// Fabrique la ligne « Sources » d'une fiche, à partir de data-sources.js
function creerSources(point) {
  const sources = SOURCES[point.titre] || [];
  if (sources.length === 0) {
    return `<p class="sources">Source : à ajouter</p>`;
  }
  const liens = sources.map(
    (s) =>
      `<a href="${echapper(s.url)}" target="_blank" rel="noopener" title="${echapper(s.page)}">${echapper(s.nom)} ↗</a>`
  );
  return `<p class="sources">Sources : ${liens.join(" · ")}</p>`;
}

// Fabrique le HTML d'une fiche
function creerFiche(point) {
  // Les extraits de chansons d'abord, les phrases modèles ensuite
  const exemples = [...point.exemples].sort(
    (a, b) => (b.chanson ? 1 : 0) - (a.chanson ? 1 : 0)
  );

  return `
    <article class="fiche">
      <div class="fiche-tete">
        <h2 lang="ja">${echapper(point.titre)}</h2>
        <span class="niveau">${point.niveau}</span>
      </div>
      <p class="resume">${echapper(point.resume)}</p>
      ${exemples.map(creerExemple).join("")}
      ${creerSources(point)}
    </article>`;
}

// Un point correspond-il aux filtres et à la recherche en cours ?
function correspond(point) {
  if (niveauChoisi !== "Tous" && point.niveau !== niveauChoisi) return false;
  if (seulementChansons && !aUneChanson(point)) return false;
  if (texteCherche === "") return true;

  const morceaux = [point.titre, point.resume];
  for (const ex of point.exemples) {
    morceaux.push(sansFurigana(ex.japonais), ex.traduction, ex.chanson || "", ex.note || "");
  }
  return morceaux.join(" ").toLowerCase().includes(texteCherche);
}

// (Re)dessine la liste des fiches
function afficher() {
  const visibles = POINTS.filter(correspond);
  zoneFiches.innerHTML = visibles.map(creerFiche).join("");
  messageVide.hidden = visibles.length > 0;

  const avecChanson = visibles.filter(aUneChanson).length;
  compteur.textContent =
    `${visibles.length} points de grammaire · ${avecChanson} illustrés par Aimyon`;
}

// Crée un bouton de filtre
function creerBouton(texte, actif, auClic) {
  const bouton = document.createElement("button");
  bouton.textContent = texte;
  bouton.setAttribute("aria-pressed", actif);
  bouton.addEventListener("click", () => auClic(bouton));
  zoneFiltres.appendChild(bouton);
  return bouton;
}

// Un bouton par niveau, plus un bouton « Avec chanson »
function creerFiltres() {
  const niveaux = ["Tous", ...new Set(POINTS.map((p) => p.niveau))];
  const boutonsNiveau = [];

  for (const niveau of niveaux) {
    const bouton = creerBouton(niveau, niveau === niveauChoisi, () => {
      niveauChoisi = niveau;
      for (const b of boutonsNiveau) b.setAttribute("aria-pressed", b === bouton);
      afficher();
    });
    boutonsNiveau.push(bouton);
  }

  const boutonChanson = creerBouton("♪ Avec chanson", false, (bouton) => {
    seulementChansons = !seulementChansons;
    bouton.setAttribute("aria-pressed", seulementChansons);
    afficher();
  });
  boutonChanson.classList.add("a-part");
}

// À chaque frappe dans le champ de recherche, on met à jour la liste
champRecherche.addEventListener("input", () => {
  texteCherche = champRecherche.value.trim().toLowerCase();
  afficher();
});

creerFiltres();
afficher();
