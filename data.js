// ============================================================
//  LES DONNÉES — outils communs aux fichiers data-n5.js, data-n4.js, data-n3.js
//
//  Pour ajouter une fiche, ajoutez dans le fichier du bon niveau :
//
//    point("N5", "titre", "résumé de la règle",
//      modele("phrase japonaise", "traduction"),
//      aimyon("ligne citée", "traduction", "titre de la chanson", année, "remarque")
//    );
//
//  - modele(...) : une phrase inventée pour illustrer la règle (pas d'Aimyon).
//  - aimyon(...) : UNE ligne (ou le titre) d'une chanson. Jamais plus d'une ou
//    deux lignes par chanson : les paroles sont protégées par le droit d'auteur.
//  - Furigana : la lecture entre crochets après les kanji, ex. 帽子[ぼうし].
// ============================================================

const POINTS = [];

function modele(japonais, traduction) {
  return { japonais, traduction };
}

function aimyon(japonais, traduction, chanson, annee, note) {
  return { japonais, traduction, chanson, annee, note };
}

function point(niveau, titre, resume, ...exemples) {
  POINTS.push({ niveau, titre, resume, exemples });
}
