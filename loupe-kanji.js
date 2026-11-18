// ============================================================
//  LOUPE KANJI : au survol d'un kanji (ou en le touchant sur
//  téléphone), une fenêtre affiche ses lectures, son sens, son
//  nombre de traits, sa clé, ses éléments et des liens vers Jisho
//  et le Wiktionnaire. Même principe que l'extension 10ten.
//  Données : KANJIDIC2 et KRADFILE de l'EDRDG (data-kanji.js,
//  chargé seulement au premier kanji survolé).
// ============================================================
(function () {
  const CLE = "aimyon-grammaire:sans-loupe";
  const DELAI_FERMETURE = 350;
  let actif = true;
  try { actif = localStorage.getItem(CLE) !== "1"; } catch (e) { /* choix par défaut */ }

  let donnees = null;
  let chargement = null;
  let fenetre = null;
  let kanjiAffiche = null;
  let minuterie = null;
  let dernierPointeur = "mouse";
  let enAttente = null;

  const surlignage = typeof CSS !== "undefined" && CSS.highlights && typeof Highlight === "function"
    ? new Highlight() : null;
  if (surlignage) CSS.highlights.set("kanji-survole", surlignage);

  function echapper(texte) {
    return String(texte).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function estKanji(c) {
    if (!c) return false;
    const o = c.codePointAt(0);
    return (o >= 0x4e00 && o <= 0x9fff) || (o >= 0x3400 && o <= 0x4dbf) || (o >= 0xf900 && o <= 0xfaff);
  }

  function charger() {
    if (donnees) return Promise.resolve(donnees);
    if (!chargement) {
      chargement = new Promise((ok, echec) => {
        const script = document.createElement("script");
        script.src = "data-kanji.js";
        script.onload = () => {
          donnees = typeof KANJI !== "undefined" ? KANJI : {};
          ok(donnees);
        };
        script.onerror = () => { chargement = null; echec(new Error("data-kanji.js introuvable")); };
        document.head.appendChild(script);
      });
    }
    return chargement;
  }

  // Caractère réellement sous le pointeur (pas seulement le plus proche).
  function kanjiSous(x, y) {
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
      if (i < 0 || i >= noeud.data.length || !estKanji(noeud.data[i])) continue;
      const plage = document.createRange();
      plage.setStart(noeud, i);
      plage.setEnd(noeud, i + 1);
      for (const b of plage.getClientRects()) {
        if (x >= b.left - 1 && x <= b.right + 1 && y >= b.top - 1 && y <= b.bottom + 1) {
          return { kanji: noeud.data[i], plage, rect: b };
        }
      }
    }
    return null;
  }

  function lectureKun(kun) {
    // « かた.る » : la partie après le point est l'okurigana.
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

  function contenu(kanji, f) {
    const sens = f.fr
      ? `<p class="loupe-sens">${f.fr.map(echapper).join(" ; ")}</p>`
      : `<p class="loupe-sens">${(f.en || []).map(echapper).join(" ; ")} <span class="loupe-note">(en anglais : pas de traduction française dans KANJIDIC2)</span></p>`;
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
      </p>
      <p class="loupe-pied">
        <span>Données : KANJIDIC2 et KRADFILE, © <a href="https://www.edrdg.org/edrdg/licence.html" target="_blank" rel="noopener noreferrer">EDRDG</a> (CC BY-SA 4.0)</span>
        <button type="button" class="bouton-loupe-off">Désactiver la loupe</button>
      </p>`;
  }

  function creerFenetre() {
    if (fenetre) return fenetre;
    fenetre = document.createElement("div");
    fenetre.id = "loupe-kanji";
    fenetre.setAttribute("role", "dialog");
    fenetre.setAttribute("aria-label", "Fiche du kanji");
    fenetre.hidden = true;
    fenetre.addEventListener("mouseenter", () => clearTimeout(minuterie));
    fenetre.addEventListener("mouseleave", () => programmerFermeture());
    document.body.appendChild(fenetre);
    return fenetre;
  }

  function placer(rect) {
    const marge = 8;
    const largeur = fenetre.offsetWidth;
    const hauteur = fenetre.offsetHeight;
    let gauche = Math.min(Math.max(marge, rect.left), window.innerWidth - largeur - marge);
    let haut = rect.bottom + 6;
    if (haut + hauteur > window.innerHeight - marge && rect.top - hauteur - 6 > marge) haut = rect.top - hauteur - 6;
    fenetre.style.left = Math.max(marge, gauche) + window.scrollX + "px";
    fenetre.style.top = Math.max(marge, haut) + window.scrollY + "px";
  }

  function afficher(trouve) {
    clearTimeout(minuterie);
    const f = donnees && donnees[trouve.kanji];
    if (!f) { fermer(); return; }
    creerFenetre();
    if (kanjiAffiche !== trouve.kanji) {
      fenetre.innerHTML = contenu(trouve.kanji, f);
      kanjiAffiche = trouve.kanji;
    }
    fenetre.hidden = false;
    placer(trouve.rect);
    if (surlignage) { surlignage.clear(); surlignage.add(trouve.plage); }
  }

  function fermer() {
    clearTimeout(minuterie);
    if (fenetre) fenetre.hidden = true;
    kanjiAffiche = null;
    if (surlignage) surlignage.clear();
  }

  function programmerFermeture() {
    clearTimeout(minuterie);
    minuterie = setTimeout(fermer, DELAI_FERMETURE);
  }

  function examiner(x, y) {
    const trouve = kanjiSous(x, y);
    if (!trouve) {
      if (fenetre && !fenetre.hidden) programmerFermeture();
      return;
    }
    charger().then(() => afficher(trouve), () => {});
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

  // Écran tactile : toucher un kanji ouvre la fiche, toucher ailleurs la ferme.
  document.addEventListener("click", (e) => {
    if (e.target instanceof Element && e.target.closest(".bouton-loupe-off")) {
      basculer(false);
      return;
    }
    if (e.target instanceof Element && e.target.closest("#loupe-kanji")) return;
    if (!actif || dernierPointeur !== "touch") return;
    if (e.target instanceof Element && e.target.closest("a, button, summary, label, input")) { fermer(); return; }
    const trouve = kanjiSous(e.clientX, e.clientY);
    if (trouve) charger().then(() => afficher(trouve), () => {});
    else fermer();
  });

  document.addEventListener("keydown", (e) => { if (e.key === "Escape") fermer(); });
  window.addEventListener("scroll", () => { if (dernierPointeur !== "touch") fermer(); }, { passive: true });
  window.addEventListener("resize", fermer);

  // Bouton « Loupe kanji : oui / non » (sur les fiches) et « Désactiver la loupe ».
  function majBoutons() {
    for (const bouton of document.querySelectorAll(".bouton-loupe")) {
      bouton.setAttribute("aria-pressed", actif);
      bouton.textContent = actif ? "Loupe kanji : oui" : "Loupe kanji : non";
    }
  }
  function basculer(valeur) {
    actif = valeur;
    try { localStorage.setItem(CLE, actif ? "0" : "1"); } catch (e) { /* choix pour cette visite */ }
    if (!actif) fermer();
    majBoutons();
  }
  document.addEventListener("click", (e) => {
    if (e.target instanceof Element && e.target.closest(".bouton-loupe")) basculer(!actif);
  });
  window.majBoutonsLoupe = majBoutons;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", majBoutons);
  else majBoutons();
})();
