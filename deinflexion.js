// ============================================================
//  DÉSINFLEXION : retrouve la forme du dictionnaire d'un verbe ou
//  d'un adjectif conjugué (泣いている → 泣く), pour la loupe.
//  Même principe que 10ten / Rikaichan : on remplace une
//  terminaison par une autre, en vérifiant la classe du mot.
//  Ce fichier sert aussi à outils/generer-mots.js (Node).
// ============================================================
const Deinflexion = (function () {
  // Classes de mots
  const V1 = 1;   // verbe ichidan (食べる)
  const V5 = 2;   // verbe godan (書く)
  const VK = 4;   // 来る
  const VS = 8;   // する
  const ADJ = 16; // adjectif en い (ない se conjugue aussi ainsi)
  const TE = 32;  // forme en て (étape intermédiaire)
  const INIT = 64; // le mot tel qu'il est écrit (forme qui ne se conjugue plus : 書いた, 書けば…)
  const TOUT = 127;

  // Godan : terminaison du dictionnaire, puis radicaux en i, a, e, o, forme en て et en た.
  const GODAN = [
    ["く", "き", "か", "け", "こ", "いて", "いた"],
    ["ぐ", "ぎ", "が", "げ", "ご", "いで", "いだ"],
    ["す", "し", "さ", "せ", "そ", "して", "した"],
    ["つ", "ち", "た", "て", "と", "って", "った"],
    ["ぬ", "に", "な", "ね", "の", "んで", "んだ"],
    ["ぶ", "び", "ば", "べ", "ぼ", "んで", "んだ"],
    ["む", "み", "ま", "め", "も", "んで", "んだ"],
    ["る", "り", "ら", "れ", "ろ", "って", "った"],
    ["う", "い", "わ", "え", "お", "って", "った"],
  ];

  const regles = []; // [forme, base, classe de la forme, classe de la base, raison]
  function r(forme, base, classeForme, classeBase, raison) {
    regles.push([forme, base, classeForme, classeBase, raison]);
  }

  // Formes en ます
  const POLIES = [
    ["ます", "forme polie"], ["ました", "passé poli"], ["ません", "négatif poli"],
    ["ませんでした", "passé négatif poli"], ["ましょう", "volitif poli"], ["まして", "forme en て polie"],
  ];
  for (const [suffixe, raison] of POLIES) {
    for (const g of GODAN) r(g[1] + suffixe, g[0], INIT, V5, raison);
    r(suffixe, "る", INIT, V1, raison);
    r("し" + suffixe, "する", INIT, VS, raison);
    r("き" + suffixe, "くる", INIT, VK, raison);
    r("来" + suffixe, "来る", INIT, VK, raison);
  }

  for (const [u, i, a, e, o, te, ta] of GODAN) {
    const neg = u === "う" ? "わ" : a;
    r(neg + "ない", u, ADJ | INIT, V5, "négatif");
    r(neg + "ず", u, INIT, V5, "négatif en ず");
    r(neg + "ずに", u, INIT, V5, "sans (ずに)");
    r(te, u, INIT | TE, V5, "forme en て");
    r(ta, u, INIT, V5, "passé");
    r(ta + "ら", u, INIT, V5, "conditionnel en たら");
    r(ta + "り", u, INIT, V5, "forme en たり");
    r(e + "る", u, V1, V5, "potentiel");
    r(e + "ば", u, INIT, V5, "conditionnel en ば");
    r(e, u, INIT, V5, "impératif");
    r(o + "う", u, INIT, V5, "volitif");
    r(neg + "れる", u, V1, V5, "passif");
    r(neg + "せる", u, V1, V5, "causatif");
    if (u !== "す") r(neg + "される", u, V1, V5, "causatif-passif");
    r(neg + "せられる", u, V1, V5, "causatif-passif");
    r(i + "たい", u, ADJ, V5, "désir (たい)");
    r(i + "ながら", u, INIT, V5, "tout en (ながら)");
    r(i + "すぎる", u, V1, V5, "trop (すぎる)");
    r(i + "そう", u, INIT, V5, "avoir l'air de (そう)");
    r(i + "なさい", u, INIT, V5, "ordre (なさい)");
    r(i, u, INIT, V5, "radical en ます");
  }
  // 行く : 行って, 行った
  r("って", "く", INIT | TE, V5, "forme en て");
  r("った", "く", INIT, V5, "passé");

  // Ichidan
  for (const [forme, raison, classe] of [
    ["ない", "négatif", ADJ | INIT], ["ず", "négatif en ず", INIT], ["ずに", "sans (ずに)", INIT],
    ["て", "forme en て", INIT | TE], ["た", "passé", INIT], ["たら", "conditionnel en たら", INIT],
    ["たり", "forme en たり", INIT], ["られる", "potentiel ou passif", V1], ["れば", "conditionnel en ば", INIT],
    ["ろ", "impératif", INIT], ["よう", "volitif", INIT], ["させる", "causatif", V1],
    ["させられる", "causatif-passif", V1], ["たい", "désir (たい)", ADJ], ["ながら", "tout en (ながら)", INIT],
    ["すぎる", "trop (すぎる)", V1], ["そう", "avoir l'air de (そう)", INIT], ["なさい", "ordre (なさい)", INIT],
  ]) r(forme, "る", classe, V1, raison);
  r("", "る", INIT, V1, "radical en ます");

  // する et 来る
  for (const [forme, raison, classe] of [
    ["しない", "négatif", ADJ | INIT], ["せず", "négatif en ず", INIT], ["して", "forme en て", INIT | TE],
    ["した", "passé", INIT], ["したら", "conditionnel en たら", INIT], ["したり", "forme en たり", INIT],
    ["できる", "potentiel", V1], ["される", "passif", V1], ["させる", "causatif", V1],
    ["させられる", "causatif-passif", V1], ["すれば", "conditionnel en ば", INIT], ["しろ", "impératif", INIT],
    ["しよう", "volitif", INIT], ["したい", "désir (たい)", ADJ], ["しながら", "tout en (ながら)", INIT],
  ]) r(forme, "する", classe, VS, raison);
  for (const debut of ["く", "来"]) {
    const k = debut === "く" ? "" : "来";
    const radical = (kana) => (k ? k + kana.slice(1) : kana);
    for (const [forme, raison, classe] of [
      ["こない", "négatif", ADJ | INIT], ["きて", "forme en て", INIT | TE], ["きた", "passé", INIT],
      ["きたら", "conditionnel en たら", INIT], ["こられる", "potentiel ou passif", V1],
      ["くれば", "conditionnel en ば", INIT], ["こい", "impératif", INIT], ["こよう", "volitif", INIT],
      ["きたい", "désir (たい)", ADJ], ["こさせる", "causatif", V1],
    ]) r(radical(forme), k ? "来る" : "くる", classe, VK, raison);
  }

  // Adjectifs en い (et ない, たい)
  for (const [forme, raison, classe] of [
    ["かった", "passé", INIT], ["くない", "négatif", ADJ | INIT], ["くて", "forme en て", INIT],
    ["く", "forme adverbiale", INIT], ["ければ", "conditionnel en ば", INIT], ["かったら", "conditionnel en たら", INIT],
    ["さ", "nom (さ)", INIT], ["そう", "avoir l'air (そう)", INIT], ["すぎる", "trop (すぎる)", V1],
    ["くなる", "devenir (なる)", V5],
  ]) r(forme, "い", classe, ADJ, raison);

  // Obligation familière : 行かなきゃ, 行かなくちゃ → 行かない
  r("なきゃ", "ない", INIT, ADJ, "obligation familière (なきゃ)");
  r("なくちゃ", "ない", INIT, ADJ, "obligation familière (なくちゃ)");

  // Formes construites sur la forme en て
  for (const [forme, base, classe, raison] of [
    ["ている", "て", V1, "action en cours (ている)"], ["でいる", "で", V1, "action en cours (ている)"],
    ["てる", "て", V1, "action en cours (てる)"], ["でる", "で", V1, "action en cours (てる)"],
    ["ておく", "て", V5, "faire d'avance (ておく)"], ["でおく", "で", V5, "faire d'avance (ておく)"],
    ["とく", "て", V5, "faire d'avance (とく)"], ["どく", "で", V5, "faire d'avance (とく)"],
    ["てしまう", "て", V5, "achèvement (てしまう)"], ["でしまう", "で", V5, "achèvement (てしまう)"],
    ["ちゃう", "て", V5, "achèvement (ちゃう)"], ["じゃう", "で", V5, "achèvement (ちゃう)"],
    ["てある", "て", V5, "état résultant (てある)"], ["である", "で", V5, "état résultant (てある)"],
    ["ていく", "て", V5, "aller (ていく)"], ["でいく", "で", V5, "aller (ていく)"],
    ["てくる", "て", VK, "venir (てくる)"], ["でくる", "で", VK, "venir (てくる)"],
    ["てみる", "て", V1, "essayer (てみる)"], ["でみる", "で", V1, "essayer (てみる)"],
    ["てあげる", "て", V1, "faire pour quelqu'un (てあげる)"], ["であげる", "で", V1, "faire pour quelqu'un (てあげる)"],
    ["てくれる", "て", V1, "faire pour moi (てくれる)"], ["でくれる", "で", V1, "faire pour moi (てくれる)"],
    ["てもらう", "て", V5, "se faire faire (てもらう)"], ["でもらう", "で", V5, "se faire faire (てもらう)"],
    ["てください", "て", INIT, "demande polie (てください)"], ["でください", "で", INIT, "demande polie (てください)"],
    ["ては", "て", INIT, "forme en ては"], ["では", "で", INIT, "forme en ては"],
    ["ても", "て", INIT, "même si (ても)"], ["でも", "で", INIT, "même si (ても)"],
  ]) r(forme, base, classe, TE, raison);
  // La forme en て (classe TE) redevient ensuite le verbe grâce aux règles
  // « forme en て » plus haut, qui acceptent INIT | TE.

  // Règles rangées par dernier caractère, pour aller vite.
  const parFin = new Map();
  const sansFin = [];
  for (const regle of regles) {
    if (!regle[0]) { sansFin.push(regle); continue; }
    const fin = regle[0].slice(-1);
    if (!parFin.has(fin)) parFin.set(fin, []);
    parFin.get(fin).push(regle);
  }

  // Classe d'une entrée JMdict à partir de ses parties du discours
  function classeDe(pos) {
    let c = 0;
    for (const p of pos) {
      if (p === "v1" || p === "v1-s") c |= V1;
      else if (p.startsWith("v5")) c |= V5;
      else if (p === "vk") c |= VK;
      else if (p === "vs-i" || p === "vs-s") c |= VS;
      else if (p === "adj-i" || p === "adj-ix") c |= ADJ;
    }
    return c;
  }

  // Toutes les formes de base possibles d'un mot : [{mot, classe, raisons}]
  function deflechir(mot) {
    const resultats = [{ mot, classe: TOUT, raisons: [] }];
    const vus = new Map([[mot, TOUT]]);
    for (let i = 0; i < resultats.length && i < 400; i++) {
      const actuel = resultats[i];
      if (actuel.raisons.length >= 5) continue;
      const aEssayer = (parFin.get(actuel.mot.slice(-1)) || []).concat(actuel.raisons.length ? [] : sansFin);
      for (const [forme, base, classeForme, classeBase, raison] of aEssayer) {
        if (!(actuel.classe & classeForme) || !actuel.mot.endsWith(forme)) continue;
        // Le radical en ます (書き → 書く) ne vaut que pour le mot tel qu'il est écrit.
        if (raison === "radical en ます" && actuel.raisons.length) continue;
        const nouveau = actuel.mot.slice(0, actuel.mot.length - forme.length) + base;
        if (nouveau.length <= base.length && base !== "する" && base !== "くる" && base !== "来る" && base !== "い") continue;
        const deja = vus.get(nouveau) || 0;
        if ((deja & classeBase) === classeBase) continue;
        vus.set(nouveau, deja | classeBase);
        resultats.push({ mot: nouveau, classe: classeBase, raisons: [raison, ...actuel.raisons] });
      }
    }
    return resultats;
  }

  // Une forme fléchie ne correspond qu'à un mot de la bonne classe.
  function compatible(candidat, pos) {
    if (candidat.classe === TOUT) return true;
    return (classeDe(pos) & candidat.classe) !== 0;
  }

  return { deflechir, compatible, classeDe, VS };
})();

if (typeof module !== "undefined") module.exports = Deinflexion;
