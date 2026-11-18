// ============================================================
//  PAGE D'UNE FICHE (fiches.html?p=<titre>) : lit la liste POINTS
//  (fichiers data-*.js) et affiche la fiche demandée. La liste de
//  toutes les fiches, elle, est le Sommaire (index.html).
// ============================================================

const zoneFiches = document.getElementById("fiches");

// Rend un texte inoffensif avant de l'insérer dans du HTML
function echapper(texte) {
  return String(texte).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

// Transforme "帽子[ぼうし]" en <ruby>帽子<rt>ぼうし</rt></ruby> (furigana)
function furigana(texte) {
  return echapper(texte).replace(
    /([一-龯々0-9]+)\[([^\]]+)\]/g,
    "<ruby>$1<rt>$2</rt></ruby>"
  )
    // {…} entoure la partie de la phrase qui illustre le point de grammaire
    .replace(/\{/g, "<mark>").replace(/\}/g, "</mark>");
}

// Texte français : {…} entoure les mots qui traduisent le point de grammaire,
// affichés dans la même couleur que le point dans la phrase japonaise
function traduction(texte) {
  return echapper(texte).replace(/\{/g, "<mark>").replace(/\}/g, "</mark>");
}

// Enlève les crochets de lecture : sert pour la recherche
function sansFurigana(texte) {
  return texte.replace(/\[[^\]]+\]/g, "").replace(/[{}]/g, "");
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
    // Pochette du single ou de l'album (data-pochettes.js)
    const pochette = POCHETTES[titre];
    const anneeConnue = ex.annee || (pochette && pochette.annee);
    const annee = anneeConnue ? ` (${anneeConnue})` : "";
    const vignette = pochette
      ? `<a class="pochette" href="${echapper(urlSure(pochette.lien))}" target="_blank" rel="noopener"
           title="${pochette.type === "single" ? "Single" : "Album"} : ${echapper(pochette.disque)}">
           <img src="${echapper(urlSure(pochette.image))}" alt="Pochette ${pochette.type === "single" ? "du single" : "de l'album"} ${echapper(pochette.disque)}"
                width="56" height="56" loading="lazy" data-retirer="parent"></a>`
      : "";
    const lienParoles = estAlbum
      ? ""
      : ` <span class="ensemble">· <a href="${echapper(urlSure(paroles))}" target="_blank" rel="noopener">Paroles complètes ↗</a></span>`;
    // Si une anecdote existe (data-anecdotes.js), le titre devient un bouton
    const anecdote = ANECDOTES[titre];
    const titreAffiche = anecdote
      ? `<button type="button" class="titre-chanson avec-anecdote" lang="ja" aria-expanded="false" title="Anecdotes sur cette chanson">${htmlTitre(ex.chanson)}</button>`
      : `<span class="titre-chanson" lang="ja">${htmlTitre(ex.chanson)}</span>`;
    const infobulle = anecdote
      ? `<span class="infobulle" hidden>
          ${anecdote.textes.map((t) => `<span class="anecdote">${echapper(t)}</span>`).join("")}
          <span class="anecdote-source">Source : ${anecdote.sources
            .map((s) => `<a href="${echapper(urlSure(s.url))}" target="_blank" rel="noopener">${echapper(s.nom)} ↗</a>`)
            .join(" · ")}</span>
        </span>`
      : "";
    source = `<cite>${vignette}<span class="cite-texte">♪ ${titreAffiche}${annee}
      <span class="ensemble">· <a href="${echapper(urlSure(ecouter))}" target="_blank" rel="noopener">Écouter ↗</a></span>${lienParoles}</span>${infobulle}</cite>`;
  } else {
    source = `<cite>Phrase modèle</cite>`;
  }

  const note = ex.note ? `<p class="note">${echapper(ex.note)}</p>` : "";

  // Ligne d'avant et ligne d'après dans la chanson (data-contexte.js)
  const cle = ex.chanson + "|" + sansFurigana(ex.japonais).replace(/[\s　「」]/g, "");
  const contexte = (ex.chanson && CONTEXTE[cle]) || {};
  const ligne = (c) => (c ? `<p class="contexte" lang="ja">${furigana(c.japonais)}</p>` : "");
  const ligneFr = (c) => (c ? `<span class="contexte">${echapper(c.traduction)}</span>` : "");

  return `
    <blockquote class="${ex.chanson ? "chanson" : "modele"}">
      ${ligne(contexte.avant)}
      <p class="japonais" lang="ja">${furigana(ex.japonais)}</p>
      ${ligne(contexte.apres)}
      <p class="traduction">${ligneFr(contexte.avant)}<span>${traduction(ex.traduction)}</span>${ligneFr(contexte.apres)}</p>
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
      `<a href="${echapper(urlSure(s.url))}" target="_blank" rel="noopener" title="${echapper(s.page)}">${echapper(s.nom)} ↗</a>`
  );
  return `<p class="sources">Sources : ${liens.join(" · ")}</p>`;
}

// Construction et mise en garde (data-details.js), quand elles existent
function creerConstruction(point) {
  const d = (typeof DETAILS !== "undefined" && DETAILS[point.titre]) || {};
  let html = "";
  if (d.construction && d.construction.length) {
    html += `<div class="construction"><span class="etiquette">Construction</span><ul>${d.construction
      .map((c) => `<li lang="ja">${echapper(c)}</li>`).join("")}</ul></div>`;
  }
  if (d.attention) {
    html += `<p class="attention"><span class="etiquette">Attention</span> ${echapper(d.attention)}</p>`;
  }
  return html;
}

// Points proches (data-liens.js) : liens vers leurs fiches
function creerVoirAussi(point) {
  const proches = ((typeof VOIR_AUSSI !== "undefined" && VOIR_AUSSI[point.titre]) || [])
    .filter((t) => POINTS.some((p) => p.titre === t));
  if (!proches.length) return "";
  return `<p class="voir-aussi"><span class="etiquette">Voir aussi</span> ${proches
    .map((t) => `<a href="fiches.html?p=${encodeURIComponent(t)}" lang="ja">${echapper(t)}</a>`)
    .join(" · ")}</p>`;
}

// Fabrique le HTML d'une fiche
function creerFiche(point, balise = "h2") {
  // Les extraits de chansons d'abord, les phrases modèles ensuite
  const exemples = [...point.exemples].sort(
    (a, b) => (b.chanson ? 1 : 0) - (a.chanson ? 1 : 0)
  );

  return `
    <article class="fiche">
      <div class="fiche-tete">
        <${balise} lang="ja">${echapper(point.titre)}</${balise}>
        <span class="niveau">${point.niveau}</span>
      </div>
      <p class="resume">${echapper(point.resume)}</p>
      ${creerConstruction(point)}
      <div class="exemples">${exemples.map(creerExemple).join("")}</div>
      ${creerVoirAussi(point)}
      <div class="fiche-pied">
        ${creerSources(point)}
      </div>
    </article>`;
}

// Infobulles d'anecdotes : un clic sur le titre d'une chanson l'ouvre ou la
// referme ; un clic ailleurs ou la touche Échap referme celle qui est ouverte.
function fermerInfobulles(sauf) {
  for (const bouton of document.querySelectorAll('.avec-anecdote[aria-expanded="true"]')) {
    if (bouton === sauf) continue;
    bouton.setAttribute("aria-expanded", "false");
    bouton.closest("cite").querySelector(".infobulle").hidden = true;
  }
}
document.addEventListener("click", (evenement) => {
  const bouton = evenement.target.closest(".avec-anecdote");
  if (!bouton) {
    if (!evenement.target.closest(".infobulle")) fermerInfobulles();
    return;
  }
  fermerInfobulles(bouton);
  const infobulle = bouton.closest("cite").querySelector(".infobulle");
  const ouvrir = infobulle.hidden;
  infobulle.hidden = !ouvrir;
  bouton.setAttribute("aria-expanded", ouvrir);
});
document.addEventListener("keydown", (evenement) => {
  if (evenement.key === "Escape") fermerInfobulles();
});

// Adresse d'une fiche : fiches.html?p=<titre de la fiche>
function lienFiche(point) {
  return "fiches.html?p=" + encodeURIComponent(point.titre);
}

// Affiche la fiche demandée, son thème et les liens vers les fiches voisines.
function afficherFiche(titre) {
  const index = POINTS.findIndex((p) => p.titre === titre);
  if (index < 0) return false;
  const point = POINTS[index];
  const precedente = POINTS[index - 1];
  const suivante = POINTS[index + 1];

  document.title = `${point.titre} — Aimyon 文法`;
  const theme = CATEGORIE_DE[point.titre];
  document.getElementById("theme-fiche").textContent = theme ? theme : "";
  zoneFiches.innerHTML = creerFiche(point, "h1");
  document.getElementById("navigation-fiche").innerHTML = `
    ${precedente
      ? `<a class="voisine precedente" href="${lienFiche(precedente)}"><span class="lecteur-ecran">Fiche précédente : </span><span aria-hidden="true">‹</span> <span class="voisine-titre" lang="ja">${echapper(precedente.titre)}</span></a>`
      : "<span></span>"}
    <button type="button" class="bouton-hasard lien-hasard" title="Ouvrir une autre fiche au hasard"><span aria-hidden="true">🎲</span> <span class="hasard-texte">Au hasard</span></button>
    ${suivante
      ? `<a class="voisine suivante" href="${lienFiche(suivante)}"><span class="lecteur-ecran">Fiche suivante : </span><span class="voisine-titre" lang="ja">${echapper(suivante.titre)}</span> <span aria-hidden="true">›</span></a>`
      : "<span></span>"}`;
  return true;
}

// Sans fiche demandée (ou fiche inconnue), on va au Sommaire.
if (!afficherFiche(new URLSearchParams(location.search).get("p"))) location.replace("index.html");
