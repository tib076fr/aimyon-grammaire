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
  )
    // {…} entoure la partie de la phrase qui illustre le point de grammaire
    .replace(/\{/g, "<mark>").replace(/\}/g, "</mark>");
}

// Enlève les crochets de lecture : sert pour la recherche
function sansFurigana(texte) {
  return texte.replace(/\[[^\]]+\]/g, "").replace(/[{}]/g, "");
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
    // Pochette du single ou de l'album (data-pochettes.js)
    const pochette = POCHETTES[titre];
    const anneeConnue = ex.annee || (pochette && pochette.annee);
    const annee = anneeConnue ? ` (${anneeConnue})` : "";
    const vignette = pochette
      ? `<a class="pochette" href="${echapper(pochette.lien)}" target="_blank" rel="noopener"
           title="${pochette.type === "single" ? "Single" : "Album"} : ${echapper(pochette.disque)}">
           <img src="${echapper(pochette.image)}" alt="Pochette ${pochette.type === "single" ? "du single" : "de l'album"} ${echapper(pochette.disque)}"
                width="56" height="56" loading="lazy" onerror="this.parentNode.remove()"></a>`
      : "";
    const lienParoles = estAlbum
      ? ""
      : ` <span class="ensemble">· <a href="${paroles}" target="_blank" rel="noopener">Paroles complètes ↗</a></span>`;
    // Si une anecdote existe (data-anecdotes.js), le titre devient un bouton
    const anecdote = ANECDOTES[titre];
    const titreAffiche = anecdote
      ? `<button type="button" class="titre-chanson avec-anecdote" lang="ja" aria-expanded="false" title="Anecdotes sur cette chanson">${echapper(ex.chanson)}</button>`
      : `<span class="titre-chanson" lang="ja">${echapper(ex.chanson)}</span>`;
    const infobulle = anecdote
      ? `<span class="infobulle" hidden>
          ${anecdote.textes.map((t) => `<span class="anecdote">${echapper(t)}</span>`).join("")}
          <span class="anecdote-source">Source : ${anecdote.sources
            .map((s) => `<a href="${echapper(s.url)}" target="_blank" rel="noopener">${echapper(s.nom)} ↗</a>`)
            .join(" · ")}</span>
        </span>`
      : "";
    source = `<cite>${vignette}<span class="cite-texte">♪ ${titreAffiche}${annee}
      <span class="ensemble">· <a href="${ecouter}" target="_blank" rel="noopener">Écouter ↗</a></span>${lienParoles}</span>${infobulle}</cite>`;
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
      <p class="traduction">${ligneFr(contexte.avant)}<span>${echapper(ex.traduction)}</span>${ligneFr(contexte.apres)}</p>
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
      <div class="exemples">${exemples.map(creerExemple).join("")}</div>
      ${creerSources(point)}
    </article>`;
}

// Enlève les accents : "negation" trouve aussi "négation"
function sansAccents(texte) {
  return texte.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Note une fiche pour la recherche en cours :
//   0 = ne correspond pas, 1 = correspond dans le texte,
//   2 = correspond au titre, 3 = correspond exactement au titre en romaji
// Les meilleures notes sont affichées en premier.
function noter(point) {
  if (niveauChoisi !== "Tous" && point.niveau !== niveauChoisi) return 0;
  if (seulementChansons && !aUneChanson(point)) return 0;
  if (texteCherche === "") return 1;

  // Recherche en romaji, sur le titre de la fiche
  if (/^[a-zāīūēōâîûêô\s\-']+$/.test(texteCherche)) {
    const cherche = simplifierRomaji(texteCherche);
    const mots = romajiDuTitre(point.titre).split(" ").map(simplifierRomaji);
    const titreEntier = simplifierRomaji(kanaVersRomaji(point.titre));
    // Une ou deux lettres ("wa", "ni") : il faut le mot exact, sinon trop de bruit
    if (mots.includes(cherche)) return 3; // le mot exact : tout en haut
    if (cherche.length <= 2) return 0;
    if (mots.some((m) => m.startsWith(cherche)) || titreEntier.includes(cherche)) return 2;
  }

  // Le titre contient le texte cherché (en kana ou en français)
  if (sansAccents(point.titre.toLowerCase()).includes(sansAccents(texteCherche))) return 2;

  // Sinon, on cherche dans tout le texte de la fiche
  const morceaux = [point.resume];
  for (const ex of point.exemples) {
    morceaux.push(sansFurigana(ex.japonais), ex.traduction, ex.chanson || "", ex.note || "");
  }
  const contenu = sansAccents(morceaux.join(" ").toLowerCase());
  return contenu.includes(sansAccents(texteCherche)) ? 1 : 0;
}

// (Re)dessine la liste des fiches
function afficher() {
  const visibles = POINTS
    .map((point) => ({ point, note: noter(point) }))
    .filter((x) => x.note > 0)
    .sort((a, b) => b.note - a.note) // les titres qui correspondent d'abord
    .map((x) => x.point);
  zoneFiches.innerHTML = visibles.map(creerFiche).join("");
  messageVide.hidden = visibles.length > 0;

  const avecChanson = visibles.filter(aUneChanson).length;
  compteur.textContent =
    `${visibles.length} point${visibles.length > 1 ? "s" : ""} de grammaire · ` +
    `${avecChanson} illustré${avecChanson > 1 ? "s" : ""} par Aimyon`;
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

// La recherche se lance en validant : bouton « Chercher » ou touche Entrée
document.getElementById("formulaire").addEventListener("submit", (evenement) => {
  evenement.preventDefault(); // empêche le navigateur de recharger la page
  texteCherche = champRecherche.value.trim().toLowerCase();
  champRecherche.blur(); // referme le clavier sur téléphone
  afficher();
});

// Si on vide le champ, on réaffiche tout sans avoir à valider
champRecherche.addEventListener("input", () => {
  if (champRecherche.value.trim() === "" && texteCherche !== "") {
    texteCherche = "";
    afficher();
  }
});

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

creerFiltres();
afficher();
