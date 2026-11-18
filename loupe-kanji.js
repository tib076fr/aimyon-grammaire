// ============================================================
//  LOUPE (mots et kanji) : au survol d'un texte japonais (ou en le
//  touchant sur téléphone), une fenêtre montre le mot qui commence
//  là, même conjugué (泣いている → 泣く), et la fiche du kanji.
//  Même principe que l'extension 10ten, avec les mêmes sources :
//  JMdict (data-mots.js), KANJIDIC2 et KRADFILE (data-kanji.js),
//  de l'EDRDG. Ces fichiers ne sont chargés qu'au premier survol.
// ============================================================
(function () {
  const CLE = "aimyon-grammaire:sans-loupe";
  const DELAI_FERMETURE = 350;
  const LONGUEUR_MAX = 16;
  const MAX_MOTS = 6;
  // Mêmes caractères que dans outils/generer-mots.js
  const JAPONAIS = /[ぁ-ゖゝゞァ-ヺー-ヾ々一-鿿㐀-䶿豈-﫿]/;
  const CLE_SURLIGNAGE = "aimyon-grammaire:sans-surlignage";
  const CLE_LANGUE = "aimyon-grammaire:langue"; // "fr" (français si possible) ou "en"
  function lire(cle) { try { return localStorage.getItem(cle); } catch (e) { return null; } }
  function ecrire(cle, valeur) { try { localStorage.setItem(cle, valeur); } catch (e) { /* choix pour cette visite */ } }
  let actif = lire(CLE) !== "1";
  let avecSurlignage = lire(CLE_SURLIGNAGE) !== "1";
  const enFrancais = () => lire(CLE_LANGUE) !== "en";

  let pret = false;
  let chargement = null;
  let fenetre = null;
  let affiche = null;   // { cle, onglet, mots, kanji }
  let minuterie = null;
  let dernierPointeur = "mouse";
  let enAttente = null;

  // Surlignage : le mot est entouré de <span class="loupe-surligne"> le temps
  // que la fenêtre est ouverte. (L'API CSS Highlight ne colore pas le texte
  // sous les furigana dans Safari sur iPhone.) Les furigana ne sont pas surlignées.
  let surlignes = [];
  function effacerSurlignage() {
    for (const span of surlignes) if (span.parentNode) span.replaceWith(...span.childNodes);
    surlignes = [];
  }
  function surligner(lettres) {
    effacerSurlignage();
    if (!avecSurlignage) return;
    // Morceaux contigus dans un même nœud de texte : [nœud, début, fin]
    const morceaux = [];
    for (const l of lettres) {
      const dernier = morceaux[morceaux.length - 1];
      if (dernier && dernier[0] === l.noeud && dernier[2] === l.i) dernier[2] = l.i + 1;
      else morceaux.push([l.noeud, l.i, l.i + 1]);
    }
    for (const [noeud, debut, fin] of morceaux) {
      if (fin < noeud.data.length) noeud.splitText(fin);
      const milieu = debut > 0 ? noeud.splitText(debut) : noeud;
      const span = document.createElement("span");
      span.className = "loupe-surligne";
      milieu.replaceWith(span);
      span.appendChild(milieu);
      surlignes.push(span);
    }
  }

  // Parties du discours et remarques de JMdict, en français
  const ETIQUETTES = {
    n: "nom", "n-pr": "nom propre", "n-suf": "nom suffixe", "n-pref": "nom préfixe", "n-adv": "nom adverbial", "n-t": "nom de temps",
    pn: "pronom", num: "nombre", ctr: "compteur", pref: "préfixe", suf: "suffixe", prt: "particule", conj: "conjonction",
    int: "interjection", exp: "expression", cop: "copule", "cop-da": "copule", aux: "auxiliaire", "aux-v": "verbe auxiliaire",
    "aux-adj": "adjectif auxiliaire", unc: "non classé",
    v1: "verbe ichidan", "v1-s": "verbe ichidan", vk: "verbe 来る", vs: "nom + する", "vs-i": "verbe en する",
    "vs-s": "verbe en する", "vs-c": "verbe en す", vz: "verbe en ずる", vi: "intransitif", vt: "transitif",
    "adj-i": "adjectif en い", "adj-ix": "adjectif en い (いい/よい)", "adj-na": "adjectif en な", "adj-no": "nom + の",
    "adj-t": "adjectif en たる", "adj-f": "devant un nom", "adj-pn": "déterminant (連体詞)", "adj-kari": "adjectif en かり",
    "adj-ku": "adjectif en く", "adj-shiku": "adjectif en しく", "adj-nari": "adjectif en なり",
    adv: "adverbe", "adv-to": "adverbe en と",
    uk: "souvent en kana", col: "familier", hon: "honorifique", hum: "humble", pol: "poli", sl: "argot", arch: "archaïque",
    vulg: "vulgaire", abbr: "abréviation", "on-mim": "onomatopée", poet: "poétique", male: "masculin", fem: "féminin",
    joc: "plaisant", derog: "péjoratif", id: "expression idiomatique", yoji: "yojijukugo", proverb: "proverbe",
    obs: "vieilli", dated: "daté", rare: "rare", form: "soutenu", chn: "langage enfantin", sens: "sensible",
    ksb: "dialecte du Kansai", ktb: "dialecte du Kantō", kyb: "dialecte de Kyōto", osb: "dialecte d'Ōsaka",
    music: "musique", food: "cuisine", med: "médecine", ling: "linguistique", gramm: "grammaire", Buddh: "bouddhisme",
  };
  function etiquette(code) {
    if (ETIQUETTES[code]) return ETIQUETTES[code];
    if (/^v5/.test(code)) return "verbe godan";
    if (/^v[24]/.test(code)) return "verbe classique";
    return code;
  }

  function echapper(texte) {
    return String(texte).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function estKanji(c) {
    if (!c) return false;
    const o = c.codePointAt(0);
    return (o >= 0x4e00 && o <= 0x9fff) || (o >= 0x3400 && o <= 0x4dbf) || (o >= 0xf900 && o <= 0xfaff);
  }

  function chargerScript(fichier) {
    return new Promise((ok, echec) => {
      const script = document.createElement("script");
      script.src = fichier;
      script.onload = ok;
      script.onerror = () => echec(new Error(fichier + " introuvable"));
      document.head.appendChild(script);
    });
  }
  function charger() {
    if (pret) return Promise.resolve();
    if (!chargement) {
      chargement = Promise.all(["data-kanji.js", "deinflexion.js", "data-mots.js"].map(chargerScript))
        .then(() => { pret = true; }, (e) => { chargement = null; throw e; });
    }
    return chargement;
  }

  // Position du caractère réellement sous le pointeur (pas seulement le plus proche).
  function caractereSous(x, y) {
    let noeud = null;
    let decalage = 0;
    if (document.caretPositionFromPoint) {
      const p = document.caretPositionFromPoint(x, y);
      if (p) { noeud = p.offsetNode; decalage = p.offset; }
    } else if (document.caretRangeFromPoint) {
      const r = document.caretRangeFromPoint(x, y);
      if (r) { noeud = r.startContainer; decalage = r.startOffset; }
    }
    if (!noeud || noeud.nodeType !== Node.TEXT_NODE) return null;
    const parent = noeud.parentElement;
    if (!parent || parent.closest("rt, input, textarea, #loupe-kanji, .sans-loupe")) return null;
    for (const i of [decalage, decalage - 1]) {
      if (i < 0 || i >= noeud.data.length || !JAPONAIS.test(noeud.data[i])) continue;
      const plage = document.createRange();
      plage.setStart(noeud, i);
      plage.setEnd(noeud, i + 1);
      for (const b of plage.getClientRects()) {
        if (x >= b.left - 1 && x <= b.right + 1 && y >= b.top - 1 && y <= b.bottom + 1) {
          return { noeud, i, rect: b };
        }
      }
    }
    return null;
  }

  // Le texte japonais qui suit, à travers les balises (furigana exclues),
  // dans le même bloc : [{noeud, i, c}].
  function texteApres(noeud, i) {
    let bloc = noeud.parentElement;
    while (bloc && bloc !== document.body && /^(inline|ruby|contents)/.test(getComputedStyle(bloc).display)) bloc = bloc.parentElement;
    const lettres = [];
    const parcours = document.createTreeWalker(bloc || document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (n.parentElement && n.parentElement.closest("rt") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
    });
    parcours.currentNode = noeud;
    let actuel = noeud;
    let debut = i;
    while (actuel && lettres.length < LONGUEUR_MAX) {
      for (let j = debut; j < actuel.data.length && lettres.length < LONGUEUR_MAX; j++) {
        const c = actuel.data[j];
        if (!JAPONAIS.test(c)) return lettres;
        lettres.push({ noeud: actuel, i: j, c });
      }
      actuel = parcours.nextNode();
      debut = 0;
    }
    return lettres;
  }

  // Mots de JMdict qui commencent ici, du plus long au plus court.
  function chercherMots(texte) {
    if (typeof MOTS === "undefined" || typeof Deinflexion === "undefined") return [];
    const trouves = new Map();
    for (let lg = texte.length; lg >= 1; lg--) {
      const sous = texte.slice(0, lg);
      for (const cand of Deinflexion.deflechir(sous)) {
        const essais = [[cand.mot, null]];
        if ((cand.classe & Deinflexion.VS) && cand.mot.endsWith("する") && cand.mot.length > 2) essais.push([cand.mot.slice(0, -2), "vs"]);
        for (const [forme, exige] of essais) {
          for (const id of INDEX_MOTS[forme] || []) {
            if (trouves.has(id)) continue;
            const mot = MOTS[id];
            const pos = mot.s.flatMap((s) => s.p);
            if (exige ? !pos.includes(exige) : !Deinflexion.compatible(cand, pos)) continue;
            trouves.set(id, { mot, lg, raisons: cand.raisons, forme });
          }
        }
      }
    }
    return [...trouves.values()].sort((a, b) =>
      b.lg - a.lg || a.raisons.length - b.raisons.length || (b.mot.c || 0) - (a.mot.c || 0) || (a.mot.nf || 99) - (b.mot.nf || 99)
    ).slice(0, MAX_MOTS);
  }

  // ---------- Affichage d'un mot ----------
  function blocMot(t) {
    const m = t.mot;
    const titre = m.k.length ? m.k.slice(0, 3).join("、") : m.r[0];
    const lecture = m.k.length ? m.r.slice(0, 3).join("、") : m.r.slice(1, 3).join("、");
    const raisons = t.raisons.length ? `<span class="mot-raisons">◂ ${t.raisons.map(echapper).join(" ◂ ")}</span>` : "";
    const fr = (m.fr || []).length && enFrancais()
      ? `<p class="mot-fr"><span class="loupe-etiquette">FR</span> ${m.fr.map(echapper).join(" · ")}</p>` : "";
    let posAvant = "";
    const sens = m.s.map((s) => {
      const pos = s.p.join(",");
      const etiquettes = (pos !== posAvant ? s.p : []).concat(s.i || []);
      posAvant = pos;
      return `<li>${etiquettes.map((e) => `<span class="mot-pos">${echapper(etiquette(e))}</span>`).join("")}${echapper(s.g)}${s.n ? ` <span class="loupe-note">(${echapper(s.n)})</span>` : ""}</li>`;
    }).join("");
    const lien = encodeURIComponent(m.k[0] || m.r[0]);
    return `
      <div class="mot">
        <div class="mot-tete">
          <span class="mot-forme" lang="ja">${echapper(titre)}</span>
          ${lecture ? `<span class="mot-lecture" lang="ja">${echapper(lecture)}</span>` : ""}
          ${m.c ? `<span class="mot-courant">courant</span>` : ""}
          <a class="mot-lien" href="https://jisho.org/search/${lien}" target="_blank" rel="noopener noreferrer" title="Voir ce mot sur Jisho">Jisho ↗</a>
        </div>
        ${raisons}
        ${fr}
        <ol class="mot-sens" lang="en">${sens}</ol>
      </div>`;
  }

  // ---------- Affichage d'un kanji ----------
  function lectureKun(kun) {
    const [racine, okuri] = kun.split(".");
    return echapper(racine) + (okuri ? `<span class="loupe-okuri">${echapper(okuri)}</span>` : "");
  }
  function classe(n) {
    if (n >= 1 && n <= 6) return `Appris en ${n === 1 ? "1re" : n + "e"} année de primaire (kyōiku kanji)`;
    if (n === 8) return "Jōyō kanji appris au collège ou au lycée";
    if (n === 9) return "Jinmeiyō kanji (utilisé dans les noms propres)";
    if (n === 10) return "Jinmeiyō kanji (variante d'un jōyō kanji)";
    return "";
  }
  function blocKanji(kanji, f) {
    const sens = f.fr && enFrancais()
      ? `<p class="loupe-sens">${f.fr.map(echapper).join(" ; ")}</p>`
      : `<p class="loupe-sens" lang="en">${(f.en || []).map(echapper).join("; ")}${enFrancais() ? ` <span class="loupe-note" lang="fr">(en anglais : pas de traduction française dans KANJIDIC2)</span>` : ""}</p>`;
    const lectures = [];
    if (f.on.length) lectures.push(`<div><span class="loupe-etiquette">On</span> <span lang="ja">${f.on.map(echapper).join("、")}</span></div>`);
    if (f.kun.length) lectures.push(`<div><span class="loupe-etiquette">Kun</span> <span lang="ja">${f.kun.map(lectureKun).join("、")}</span></div>`);
    const infos = [`${f.traits} trait${f.traits > 1 ? "s" : ""}`];
    if (f.radical) infos.push(`clé n° ${f.radical} <span lang="ja">${String.fromCodePoint(0x2f00 + f.radical - 1)}</span>`);
    const lignes = [];
    if (f.classe) lignes.push(classe(f.classe));
    if (f.frequence) lignes.push(`${f.frequence}<sup>e</sup> kanji le plus fréquent dans la presse (sur 2&nbsp;500)`);
    if (f.jlpt) lignes.push(`JLPT d'avant 2010 : niveau ${f.jlpt} (le niveau 4 était le plus facile)`);
    const elements = (f.elements || []).length
      ? `<div class="loupe-elements"><span class="loupe-etiquette">Éléments</span> ${f.elements.map((e) => `<span class="loupe-element" lang="ja">${echapper(e)}</span>`).join("")}</div>`
      : "";
    const ouvrages = typeof OUVRAGES_KANJI !== "undefined" ? OUVRAGES_KANJI : {};
    const refs = Object.entries(f.refs || {}).map(([code, valeur]) =>
      `<li>${echapper(code === "skip" ? "Code SKIP" : ouvrages[code] || code)} : <b>${echapper(valeur)}</b></li>`).join("");
    const k = encodeURIComponent(kanji);
    return `
      <div class="loupe-tete">
        <span class="loupe-kanji" lang="ja">${echapper(kanji)}</span>
        <div class="loupe-lectures">${lectures.join("")}</div>
      </div>
      ${sens}
      <p class="loupe-infos">${infos.join(" · ")}</p>
      ${lignes.length ? `<ul class="loupe-liste">${lignes.map((l) => `<li>${l}</li>`).join("")}</ul>` : ""}
      ${elements}
      ${refs ? `<details class="loupe-refs"><summary>Ouvrages de référence</summary><ul>${refs}</ul></details>` : ""}
      <p class="loupe-liens">
        <a href="https://jisho.org/search/${k}%20%23kanji" target="_blank" rel="noopener noreferrer">Jisho ↗</a>
        <a href="https://fr.wiktionary.org/wiki/${k}" target="_blank" rel="noopener noreferrer">Wiktionnaire ↗</a>
      </p>`;
  }

  function rendre() {
    const { onglet, mots, kanji } = affiche;
    const ficheKanji = kanji && typeof KANJI !== "undefined" ? KANJI[kanji] : null;
    const onglets = `
      <div class="loupe-onglets" role="tablist">
        <button type="button" role="tab" class="loupe-onglet" data-onglet="mots" aria-selected="${onglet === "mots"}" ${mots.length ? "" : "disabled"}>Mots</button>
        <button type="button" role="tab" class="loupe-onglet" data-onglet="kanji" aria-selected="${onglet === "kanji"}" ${ficheKanji ? "" : "disabled"}>Kanji${ficheKanji ? ` <span lang="ja">${echapper(kanji)}</span>` : ""}</button>
      </div>`;
    const corps = onglet === "mots" ? mots.map(blocMot).join("") : blocKanji(kanji, ficheKanji);
    const sources = onglet === "mots" ? "JMdict" : "KANJIDIC2 et KRADFILE";
    fenetre.innerHTML = `${onglets}<div class="loupe-corps">${corps}</div>
      <p class="loupe-pied">
        <span>Données : ${sources}, © <a href="https://www.edrdg.org/edrdg/licence.html" target="_blank" rel="noopener noreferrer">EDRDG</a> (CC BY-SA 4.0)</span>
        <button type="button" class="bouton-loupe-off">Désactiver la loupe</button>
      </p>`;
  }

  function creerFenetre() {
    if (fenetre) return fenetre;
    fenetre = document.createElement("div");
    fenetre.id = "loupe-kanji";
    fenetre.setAttribute("role", "dialog");
    fenetre.setAttribute("aria-label", "Dictionnaire");
    fenetre.hidden = true;
    fenetre.addEventListener("mouseenter", () => clearTimeout(minuterie));
    fenetre.addEventListener("mouseleave", () => programmerFermeture());
    fenetre.addEventListener("click", (e) => {
      const bouton = e.target instanceof Element && e.target.closest(".loupe-onglet");
      if (!bouton || bouton.disabled || !affiche) return;
      affiche.onglet = bouton.dataset.onglet;
      rendre();
    });
    document.body.appendChild(fenetre);
    return fenetre;
  }

  function placer(rect) {
    const marge = 8;
    const largeur = fenetre.offsetWidth;
    const hauteur = fenetre.offsetHeight;
    const gauche = Math.min(Math.max(marge, rect.left), window.innerWidth - largeur - marge);
    let haut = rect.bottom + 6;
    if (haut + hauteur > window.innerHeight - marge && rect.top - hauteur - 6 > marge) haut = rect.top - hauteur - 6;
    fenetre.style.left = Math.max(marge, gauche) + window.scrollX + "px";
    fenetre.style.top = Math.max(marge, haut) + window.scrollY + "px";
  }

  function afficher(position) {
    clearTimeout(minuterie);
    const lettres = texteApres(position.noeud, position.i);
    if (!lettres.length) { fermer(); return; }
    const texte = lettres.map((l) => l.c).join("");
    const premier = lettres[0].c;
    // Même texte au même endroit : rien à refaire (le surlignage découpe les nœuds de texte).
    const cle = `${texte}|${Math.round(position.rect.left + window.scrollX)},${Math.round(position.rect.top + window.scrollY)}`;
    if (!affiche || affiche.cle !== cle) {
      const mots = chercherMots(texte);
      const kanji = estKanji(premier) && typeof KANJI !== "undefined" && KANJI[premier] ? premier : null;
      if (!mots.length && !kanji) { fermer(); return; }
      effacerSurlignage();
      affiche = { cle, mots, kanji, onglet: mots.length ? "mots" : "kanji" };
      creerFenetre();
      rendre();
      surligner(lettres.slice(0, mots.length ? mots[0].lg : 1));
    }
    fenetre.hidden = false;
    placer(position.rect);
  }

  function fermer() {
    clearTimeout(minuterie);
    if (fenetre) fenetre.hidden = true;
    affiche = null;
    effacerSurlignage();
  }

  function programmerFermeture() {
    clearTimeout(minuterie);
    minuterie = setTimeout(fermer, DELAI_FERMETURE);
  }

  function examiner(x, y) {
    const position = caractereSous(x, y);
    if (!position) {
      if (fenetre && !fenetre.hidden) programmerFermeture();
      return;
    }
    charger().then(() => afficher(position), () => {});
  }

  document.addEventListener("pointerdown", (e) => { dernierPointeur = e.pointerType; }, true);

  // Souris : on regarde au plus une fois par image affichée.
  document.addEventListener("mousemove", (e) => {
    if (!actif || dernierPointeur === "touch") return;
    if (e.target instanceof Element && e.target.closest("#loupe-kanji")) return;
    const x = e.clientX;
    const y = e.clientY;
    if (enAttente) return;
    enAttente = requestAnimationFrame(() => { enAttente = null; examiner(x, y); });
  });

  // Écran tactile : toucher un mot ouvre la fenêtre, toucher ailleurs la ferme.
  document.addEventListener("click", (e) => {
    if (e.target instanceof Element && e.target.closest(".bouton-loupe-off")) {
      basculer(false);
      return;
    }
    if (e.target instanceof Element && e.target.closest("#loupe-kanji")) return;
    if (!actif || dernierPointeur !== "touch") return;
    if (e.target instanceof Element && e.target.closest("a, button, summary, label, input")) { fermer(); return; }
    const position = caractereSous(e.clientX, e.clientY);
    if (position) charger().then(() => afficher(position), () => {});
    else fermer();
  });

  document.addEventListener("keydown", (e) => { if (e.key === "Escape") fermer(); });
  window.addEventListener("scroll", () => { if (dernierPointeur !== "touch") fermer(); }, { passive: true });
  window.addEventListener("resize", fermer);

  // Bouton « Loupe : oui / non » (sur les fiches) et « Désactiver la loupe ».
  function majBoutons() {
    for (const bouton of document.querySelectorAll(".bouton-loupe")) {
      bouton.setAttribute("aria-pressed", actif);
      bouton.textContent = actif ? "Loupe : oui" : "Loupe : non";
    }
    for (const bouton of document.querySelectorAll(".bouton-surlignage")) {
      bouton.setAttribute("aria-pressed", avecSurlignage);
      bouton.textContent = avecSurlignage ? "Surlignage : oui" : "Surlignage : non";
      bouton.disabled = !actif;
    }
  }
  function basculer(valeur) {
    actif = valeur;
    ecrire(CLE, actif ? "0" : "1");
    if (!actif) fermer();
    majBoutons();
  }
  function basculerSurlignage(valeur) {
    avecSurlignage = valeur;
    ecrire(CLE_SURLIGNAGE, avecSurlignage ? "0" : "1");
    if (!avecSurlignage) effacerSurlignage();
    majBoutons();
  }
  document.addEventListener("click", (e) => {
    if (!(e.target instanceof Element)) return;
    if (e.target.closest(".bouton-loupe")) basculer(!actif);
    else if (e.target.closest(".bouton-surlignage")) basculerSurlignage(!avecSurlignage);
  });
  // Un réglage changé dans un autre onglet (page Réglages) s'applique ici aussi.
  window.addEventListener("storage", () => {
    actif = lire(CLE) !== "1";
    avecSurlignage = lire(CLE_SURLIGNAGE) !== "1";
    fermer();
    majBoutons();
  });
  window.majBoutonsLoupe = majBoutons;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", majBoutons);
  else majBoutons();
})();
