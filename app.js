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
      ? `<button type="button" class="titre-chanson avec-anecdote" lang="ja" aria-expanded="false" title="Anecdotes sur cette chanson">${echapper(ex.chanson)}</button>`
      : `<span class="titre-chanson" lang="ja">${echapper(ex.chanson)}</span>`;
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
      ${creerConstruction(point)}
      <div class="exemples">${exemples.map(creerExemple).join("")}</div>
      ${creerVoirAussi(point)}
      <div class="fiche-pied">
        ${creerSources(point)}
        ${boutonConnu(point.titre)}
      </div>
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
    const titreEntier = simplifierRomaji(kanaVersRomaji(lectureDuTitre(point.titre)));
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
    morceaux.push(sansFurigana(ex.japonais), sansFurigana(ex.traduction), ex.chanson || "", ex.note || "");
  }
  const contenu = sansAccents(morceaux.join(" ").toLowerCase());
  return contenu.includes(sansAccents(texteCherche)) ? 1 : 0;
}

// Affichage par paquets
const TAILLE_PAQUET = 25;
let aAfficher = [];
let dejaAffichees = 0;
const sentinelle = document.createElement("div");
sentinelle.className = "sentinelle";
sentinelle.setAttribute("aria-hidden", "true");

function afficherPaquet() {
  const paquet = aAfficher.slice(dejaAffichees, dejaAffichees + TAILLE_PAQUET);
  zoneFiches.insertAdjacentHTML("beforeend", paquet.map(creerFiche).join(""));
  dejaAffichees += paquet.length;
  if (dejaAffichees < aAfficher.length) {
    zoneFiches.after(sentinelle);
    // Sans IntersectionObserver, ou si la fin de liste est déjà visible,
    // on enchaîne le paquet suivant
    const proche = sentinelle.getBoundingClientRect().top < innerHeight + 1200;
    if (!("IntersectionObserver" in window) || proche) requestAnimationFrame(afficherPaquet);
  } else sentinelle.remove();
}

if ("IntersectionObserver" in window) {
  new IntersectionObserver((entrees) => {
    if (entrees.some((e) => e.isIntersecting)) afficherPaquet();
  }, { rootMargin: "1200px 0px" }).observe(sentinelle);
}

// (Re)dessine la liste des fiches
function afficher() {
  const visibles = POINTS
    .map((point) => ({ point, note: noter(point) }))
    .filter((x) => x.note > 0)
    .sort((a, b) => b.note - a.note) // les titres qui correspondent d'abord
    .map((x) => x.point);
  // Les fiches sont ajoutées par paquets, au fil du défilement :
  // la page reste fluide même avec plus de 800 fiches.
  aAfficher = visibles;
  dejaAffichees = 0;
  zoneFiches.innerHTML = "";
  afficherPaquet();
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

// Adresse d'une fiche : fiches.html?p=<titre de la fiche>
function lienFiche(point) {
  return "fiches.html?p=" + encodeURIComponent(point.titre);
}

// Mode « fiche seule » : la page n'affiche que la fiche demandée,
// avec des liens vers la précédente et la suivante.
function afficherFicheSeule(titre) {
  const index = POINTS.findIndex((p) => p.titre === titre);
  if (index < 0) return false;
  const point = POINTS[index];
  const precedente = POINTS[index - 1];
  const suivante = POINTS[index + 1];

  document.title = `${point.titre} — Aimyon 文法`;
  document.querySelector("header h1").textContent = CATEGORIE_DE[point.titre] || "Fiche";
  document.querySelector(".controles").hidden = true;

  const navigation = document.getElementById("navigation-fiche");
  navigation.hidden = false;
  navigation.innerHTML = `
    <a href="index.html" class="retour">← Sommaire</a>
    <span class="voisines">
      ${precedente ? `<a href="${lienFiche(precedente)}" title="Fiche précédente" lang="ja">‹ ${echapper(precedente.titre)}</a>` : ""}
      ${suivante ? `<a href="${lienFiche(suivante)}" title="Fiche suivante" lang="ja">${echapper(suivante.titre)} ›</a>` : ""}
    </span>
    <button type="button" class="bouton-hasard lien-hasard" title="Ouvrir une autre fiche au hasard">🎲 Au hasard</button>`;
  zoneFiches.innerHTML = creerFiche(point);
  return true;
}

const ficheDemandee = new URLSearchParams(location.search).get("p");
if (!ficheDemandee || !afficherFicheSeule(ficheDemandee)) {
  creerFiltres();
  afficher();
}
