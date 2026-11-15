// ============================================================
//  RECHERCHE EN ROMAJI
//  kanaVersRomaji("たい") -> "tai". Sert à retrouver une fiche en tapant
//  son titre en lettres latines (ex. "nakereba", "tsumori", "wa").
// ============================================================

const KANA = {
  あ:"a",い:"i",う:"u",え:"e",お:"o",
  か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",
  さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",
  た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",だ:"da",ぢ:"ji",づ:"zu",で:"de",ど:"do",
  な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",
  は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",
  ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",
  ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",
  ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",を:"wo",ん:"n",
  きゃ:"kya",きゅ:"kyu",きょ:"kyo",ぎゃ:"gya",ぎゅ:"gyu",ぎょ:"gyo",
  しゃ:"sha",しゅ:"shu",しょ:"sho",じゃ:"ja",じゅ:"ju",じょ:"jo",
  ちゃ:"cha",ちゅ:"chu",ちょ:"cho",にゃ:"nya",にゅ:"nyu",にょ:"nyo",
  ひゃ:"hya",ひゅ:"hyu",ひょ:"hyo",びゃ:"bya",びゅ:"byu",びょ:"byo",
  ぴゃ:"pya",ぴゅ:"pyu",ぴょ:"pyo",みゃ:"mya",みゅ:"myu",みょ:"myo",
  りゃ:"rya",りゅ:"ryu",りょ:"ryo",
};

function kanaVersRomaji(texte) {
  // Les katakana sont ramenés aux hiragana correspondants
  const kana = texte.replace(/[ァ-ヶ]/g, (c) =>
    String.fromCharCode(c.charCodeAt(0) - 0x60)
  );
  let resultat = "";
  let doubler = false; // vrai après un petit っ : on double la consonne suivante

  for (let i = 0; i < kana.length; i++) {
    const deux = KANA[kana.slice(i, i + 2)];
    const un = KANA[kana[i]];
    let syllabe;
    if (kana[i] === "っ") { doubler = true; continue; }
    if (deux) { syllabe = deux; i++; }
    else if (un) { syllabe = un; }
    else { resultat += " "; continue; } // autre signe (〜, /, kanji…) : une espace
    if (doubler) { syllabe = syllabe[0] + syllabe; doubler = false; }
    resultat += syllabe;
  }
  return resultat.replace(/\s+/g, " ").trim();
}

// Titres que la conversion automatique ne sait pas lire (kanji, titres en
// français) ou qui ont plusieurs écritures courantes en romaji.
const ROMAJI_EN_PLUS = {
  "は": "wa ha",
  "を": "o wo",
  "へ": "e he",
  "こ・そ・あ・ど": "kosoado kore sore are dore kono sono ano dono",
  "〜に行く / 〜に来る": "ni iku ni kuru",
  "〜前に": "mae ni",
  "Adjectifs en い": "i keiyoushi",
  "Adjectifs en な": "na keiyoushi",
  "〜が好き / 〜が上手": "ga suki ga jouzu",
  "いちばん": "ichiban",
  "Forme potentielle": "kanoukei rareru eru",
  "Forme volitive (〜よう)": "you ikoukei",
  "〜ようと思う": "you to omou",
  "Forme passive (〜られる)": "ukemi rareru",
  "Forme causative (〜させる)": "shieki saseru",
  "Causatif-passif (〜させられる)": "shieki ukemi saserareru",
  "Impératif et interdiction (〜な)": "meireikei na",
  "Proposition relative": "rentai shuushoku",
  "〜と思う": "to omou",
  "〜と言う / 〜って": "to iu tte",
  "〜方": "kata",
  "〜間 / 〜間に": "aida aida ni",
  "〜始める / 〜出す / 〜続ける / 〜終わる": "hajimeru dasu tsuzukeru owaru",
  "Langage honorifique (敬語)": "keigo o ni naru o suru",
  "〜気味": "gimi",
  "決して〜ない / めったに〜ない / 全く〜ない": "kesshite nai metta ni nai mattaku nai",
  "〜に違いない": "ni chigainai",
  "〜とは限らない": "to wa kagiranai",
  "〜最中に": "saichuu ni",
  "〜際に": "sai ni",
  "〜一方だ": "ippou da",
  "〜に関して": "ni kanshite",
  "〜について / 〜に関して": "ni tsuite ni kanshite",
  "〜に対して": "ni taishite",
  "〜に比べて": "ni kurabete",
  "〜を通して / 〜を通じて": "wo tooshite wo tsuujite",
  "〜を中心に": "wo chuushin ni",
  "〜向け / 〜向き": "muke muki",
  "〜代わりに": "kawari ni",
  "〜結果": "kekka",
  "〜に加えて": "ni kuwaete",
  "〜一方で": "ippou de",
  "〜切る": "kiru",
  "〜直す": "naosu",
  "〜合う": "au",
  "〜込む": "komu",
};

// Simplifie le romaji pour comparer : minuscules, sans espaces ni tirets,
// voyelles longues ramenées à une seule (ō, ou, oo -> o ; ū, uu -> u).
function simplifierRomaji(texte) {
  return texte
    .toLowerCase()
    .replace(/[ōô]/g, "o").replace(/[ūû]/g, "u")
    .replace(/[\s\-'〜~]/g, "")
    .replace(/ou|oo/g, "o").replace(/uu/g, "u");
}

// Le romaji d'un titre de fiche : conversion automatique + compléments
function romajiDuTitre(titre) {
  return (kanaVersRomaji(titre) + " " + (ROMAJI_EN_PLUS[titre] || "")).trim();
}
