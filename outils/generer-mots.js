#!/usr/bin/env node
// Fabrique data-mots.js : le dictionnaire de mots de la loupe.
//
// Source, la même que l'extension 10ten : JMdict
// (https://www.edrdg.org/pub/Nihongo/JMdict.gz, la version multilingue,
// qui contient aussi des traductions françaises). JMdict appartient à
// l'Electronic Dictionary Research and Development Group (EDRDG) et est
// utilisé selon sa licence (https://www.edrdg.org/edrdg/licence.html,
// CC BY-SA 4.0) ; data-mots.js, qui en est tiré, est sous la même licence.
//
// On ne garde que les mots que la loupe peut trouver dans le texte du site :
// pour chaque position du texte japonais, on cherche (avec la même
// désinflexion que la loupe) tous les mots de JMdict qui commencent là.
//
// Usage : node outils/generer-mots.js chemin/JMdict
"use strict";
const fs = require("fs");
const path = require("path");
const Deinflexion = require("../deinflexion.js");

const RACINE = path.resolve(__dirname, "..");
const LONGUEUR_MAX = 16;
const JAPONAIS = /[ぁ-ゖゝゞァ-ヺー-ヾ々一-鿿㐀-䶿豈-﫿]/;
const COURANT = new Set(["news1", "ichi1", "spec1", "spec2", "gai1"]);
const FORMES_RARES = new Set(["sK", "iK", "oK", "rK", "ik", "ok", "rk", "sk"]);

function decoder(t) {
  return t.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, "&");
}
function tous(bloc, balise) {
  const re = new RegExp(`<${balise}(?: [^>]*)?>([^<]*)</${balise}>`, "g");
  return [...bloc.matchAll(re)].map((m) => m[1]);
}
function code(valeur) { return valeur.replace(/^&|;$/g, ""); }

function lireJMdict(fichier) {
  const texte = fs.readFileSync(fichier, "utf8");
  const date = (texte.match(/<!-- JMdict created: ([0-9-]+) -->/) || [])[1] || "?";
  const entrees = [];
  for (const m of texte.matchAll(/<entry>([\s\S]*?)<\/entry>/g)) {
    const bloc = m[1];
    const kanji = [...bloc.matchAll(/<k_ele>([\s\S]*?)<\/k_ele>/g)].map((x) => ({
      forme: tous(x[1], "keb")[0], infos: tous(x[1], "ke_inf").map(code), pri: tous(x[1], "ke_pri"),
    }));
    const lectures = [...bloc.matchAll(/<r_ele>([\s\S]*?)<\/r_ele>/g)].map((x) => ({
      forme: tous(x[1], "reb")[0], infos: tous(x[1], "re_inf").map(code), pri: tous(x[1], "re_pri"),
    }));
    const sens = [];
    const francais = [];
    let posPrecedent = [];
    for (const s of bloc.matchAll(/<sense>([\s\S]*?)<\/sense>/g)) {
      const contenu = s[1];
      const fr = [...contenu.matchAll(/<gloss xml:lang="fre">([^<]*)<\/gloss>/g)].map((x) => decoder(x[1]));
      if (fr.length) francais.push(fr.join(" ; "));
      const en = [...contenu.matchAll(/<gloss(?: g_type="[^"]*")?>([^<]*)<\/gloss>/g)].map((x) => decoder(x[1]));
      if (!en.length) continue;
      let pos = tous(contenu, "pos").map(code);
      if (pos.length) posPrecedent = pos; else pos = posPrecedent;
      const infos = [...tous(contenu, "misc"), ...tous(contenu, "field"), ...tous(contenu, "dial")].map(code);
      const note = tous(contenu, "s_inf").map(decoder);
      const sensFiche = { p: pos, g: en.join("; ") };
      if (infos.length) sensFiche.i = infos;
      if (note.length) sensFiche.n = note.join(" ; ");
      sens.push(sensFiche);
    }
    const toutesPri = [...kanji, ...lectures].flatMap((x) => x.pri);
    const nf = toutesPri.map((p) => /^nf(\d+)$/.exec(p)).filter(Boolean).map((x) => +x[1]);
    entrees.push({
      kanji, lectures, sens, francais,
      courant: toutesPri.some((p) => COURANT.has(p)),
      rang: nf.length ? Math.min(...nf) : 99,
    });
  }
  return { entrees, date };
}

// Le texte japonais du site, tel que la page l'affiche : sans les furigana
// « 漢字[かな] » ni les accolades qui colorent le point de grammaire.
function texteDuSite() {
  const fichiers = fs.readdirSync(RACINE).filter((f) => /\.(js|html)$/.test(f) && !/^(data-kanji|data-mots|deinflexion|loupe-kanji)\.js$/.test(f));
  const morceaux = [];
  for (const f of fichiers) {
    const brut = fs.readFileSync(path.join(RACINE, f), "utf8")
      .replace(/([一-龯々0-9]+)\[([^\]]+)\]/g, "$1")
      .replace(/[{}]/g, "")
      .replace(/<rt>[^<]*<\/rt>/g, "")
      .replace(/<[^>]+>/g, "");
    let actuel = "";
    for (const c of brut) {
      if (JAPONAIS.test(c)) actuel += c;
      else if (actuel) { morceaux.push(actuel); actuel = ""; }
    }
    if (actuel) morceaux.push(actuel);
  }
  return [...new Set(morceaux)];
}

function main() {
  const fichier = process.argv[2];
  if (!fichier) { console.error("Usage : node outils/generer-mots.js chemin/JMdict"); process.exit(1); }
  const { entrees, date } = lireJMdict(fichier);
  const index = new Map();
  entrees.forEach((e, n) => {
    for (const f of [...e.kanji, ...e.lectures]) {
      if (!index.has(f.forme)) index.set(f.forme, []);
      index.get(f.forme).push(n);
    }
  });
  const garder = new Set();
  const formesUtiles = new Map(); // forme -> ensemble d'entrées
  function noter(forme, n) {
    garder.add(n);
    if (!formesUtiles.has(forme)) formesUtiles.set(forme, new Set());
    formesUtiles.get(forme).add(n);
  }
  const morceaux = texteDuSite();
  const dejaVu = new Set();
  for (const morceau of morceaux) {
    for (let debut = 0; debut < morceau.length; debut++) {
      for (let lg = 1; lg <= LONGUEUR_MAX && debut + lg <= morceau.length; lg++) {
        const sous = morceau.slice(debut, debut + lg);
        if (dejaVu.has(sous)) continue;
        dejaVu.add(sous);
        for (const cand of Deinflexion.deflechir(sous)) {
          for (const n of index.get(cand.mot) || []) {
            const pos = entrees[n].sens.flatMap((s) => s.p);
            if (Deinflexion.compatible(cand, pos)) noter(cand.mot, n);
          }
          // 勉強した → 勉強する → 勉強 (nom + する)
          if ((cand.classe & Deinflexion.VS) && cand.mot.endsWith("する") && cand.mot.length > 2) {
            const radical = cand.mot.slice(0, -2);
            for (const n of index.get(radical) || []) {
              if (entrees[n].sens.some((s) => s.p.includes("vs"))) noter(radical, n);
            }
          }
        }
      }
    }
  }
  const ids = [...garder].sort((a, b) => a - b);
  const nouveau = new Map(ids.map((n, i) => [n, i]));
  const mots = ids.map((n) => {
    const e = entrees[n];
    const sortie = {
      k: e.kanji.filter((x) => !x.infos.some((i) => FORMES_RARES.has(i))).map((x) => x.forme),
      r: e.lectures.filter((x) => !x.infos.some((i) => FORMES_RARES.has(i))).map((x) => x.forme),
      s: e.sens,
    };
    if (!sortie.r.length) sortie.r = e.lectures.slice(0, 1).map((x) => x.forme);
    if (e.francais.length) sortie.fr = e.francais;
    if (e.courant) sortie.c = 1;
    if (e.rang < 99) sortie.nf = e.rang;
    return sortie;
  });
  const indexSortie = {};
  for (const [forme, ens] of [...formesUtiles].sort()) indexSortie[forme] = [...ens].map((n) => nouveau.get(n));
  const lignes = [
    "// Dictionnaire de mots de la loupe : FABRIQUÉ par outils/generer-mots.js, ne pas modifier à la main.",
    "// Données : JMdict, propriété de l'Electronic Dictionary Research and Development Group (EDRDG),",
    "// utilisées selon sa licence : https://www.edrdg.org/edrdg/licence.html (CC BY-SA 4.0).",
    `// Version JMdict du ${date}. Seuls les mots présents dans le texte du site sont gardés.`,
    "const MOTS = [",
    ...mots.map((m) => "  " + JSON.stringify(m) + ","),
    "];",
    "const INDEX_MOTS = " + JSON.stringify(indexSortie) + ";",
  ];
  fs.writeFileSync(path.join(RACINE, "data-mots.js"), lignes.join("\n") + "\n");
  const avecFr = mots.filter((m) => m.fr).length;
  console.log(`${morceaux.length} morceaux de texte, ${mots.length} mots gardés (${avecFr} avec traduction française), ${Object.keys(indexSortie).length} formes`);
}

main();
