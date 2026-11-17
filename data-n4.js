// ===================== NIVEAU N4 =====================
// Le niveau de chaque fiche est celui indiqué par Bunpro.

point("N4", "〜なければならない", "Obligation : « il faut… », « je dois… ». Variante orale : 〜なきゃ.",
  modele("薬[くすり]を{飲[の]まなければなりません}。", "{Je dois prendre} mon médicament."),
  aimyon("{許[ゆる]していかなきゃ}",
    "{il faudrait donc tout pardonner}.", "さながらロンリー", null,
    "なきゃ est la contraction orale de なければ(ならない). 〜ていく indique une action qui se poursuit vers l'avenir."));
point("N4", "〜なくてもいい", "Absence d'obligation : « ce n'est pas la peine de… ».",
  modele("明日[あした]は{来[こ]なくてもいい}です。", "Vous {n'avez pas besoin de venir} demain."),
  aimyon("何[なに]も{描[えが]かなくてもいい}",
    "tu {peux bien ne rien peindre}.", "今日の芸術", null,
    "描く → 描かない → 描かなくてもいい."));
point("N4", "〜がほしい", "Vouloir quelque chose (un objet).",
  modele("新[あたら]しいかばん{がほしい}です。", "Je {voudrais} un nouveau sac."),
  aimyon("赤[あか]いあの風船[ふうせん]{が欲[ほ]しい}の？",
    "Tu {veux} ce ballon rouge, là-bas ?", "彼氏有無", null,
    "L'objet désiré prend が. の final : question familière."));
point("N4", "〜とき", "« Quand », « au moment où ».",
  modele("子供[こども]{のとき}、よく海[うみ]で泳[およ]ぎました。", "{Quand j'étais} enfant, je nageais souvent dans la mer."),
  aimyon("私[わたし]笑[わら]える{時[とき]}は笑[わら]ってたい",
    "{Quand} je peux rire, je veux rire.", "ねむい", null,
    "笑える時 = « les moments où je peux rire » (potentiel de 笑う). 笑ってたい = 笑っていたい."));
point("N4", "Forme potentielle", "« Pouvoir faire ». Verbes en -u : finale en -e + る (書く → 書ける). Verbes en -ru : 〜られる (食べる → 食べられる).",
  modele("漢字[かんじ]が{読[よ]めます}。", "Je {sais lire} les kanji."),
  aimyon("君[きみ]がいない夜[よる]を{越[こ]えられ}やしない", "Les nuits sans toi, jamais je ne {saurai les traverser}.", "君がいない夜を越えられやしない", 2022,
    "越える (traverser) → 越えられる (pouvoir traverser). La terminaison 〜やしない est une tournure négative qui sort du cadre de ces fiches. 君がいない夜 est aussi une proposition relative."));
point("N4", "Forme volitive (〜よう)", "« Faisons… », « je vais… ». Forme familière de 〜ましょう (行く → 行こう, 食べる → 食べよう).",
  modele("そろそろ{帰[かえ]ろう}。", "Allez, {rentrons}."),
  aimyon("話[はなし]は{やめよう}",
    "{n'en parlons plus}.", "駅前喫茶ポプラ", null,
    "やめる → やめよう = « arrêtons »."));
point("N4", "〜ようと思う", "Volitif + と思う : « je pense faire… ». Pour une autre personne, on emploie 〜ようと思っている.",
  modele("来年[らいねん]日本[にほん]に{行[い]こうと思[おも]っています}。", "{Je pense aller} au Japon l'année prochaine."),
  aimyon("今週末[こんしゅうまつ]{切[き]ろうと思[おも]う}の",
    "{je pense les couper} ce week-end.", "あなたのために", null,
    "切る → 切ろう (volitif) + と思う : une intention que l'on annonce."));
point("N4", "Forme passive (〜られる)", "« Être …é ». Verbes en -u : finale en -a + れる (叱る → 叱られる). Sert aussi à exprimer qu'on subit quelque chose.",
  modele("先生[せんせい]に{褒[ほ]められました}。", "{J'ai été félicité} par le professeur."),
  aimyon("{嫌[きら]われる}ことを恐[おそ]れてる",
    "j'ai peur {que tu cesses de m'aimer}.", "君がいない夜を越えられやしない", 2022,
    "嫌う (détester) → 嫌われる (être détesté). こと transforme le verbe en nom : « le fait d'être détestée »."));
point("N4", "Forme causative (〜させる)", "« Faire faire » ou « laisser faire ». Verbes en -u : finale en -a + せる.",
  modele("母[はは]は弟[おとうと]に野菜[やさい]を{食[た]べさせました}。", "Ma mère {a fait manger} des légumes à mon petit frère."),
  aimyon("{忘[わす]れさせて}くれ",
    "{laisse-moi t'oublier}.", "ほろ酔い", null,
    "忘れる → 忘れさせる (faire oublier) ; 〜てくれ est une demande directe."));
point("N4", "Causatif-passif (〜させられる)", "« Être obligé de faire » quelque chose contre son gré.",
  modele("子供[こども]のとき、毎日[まいにち]ピアノを{練習[れんしゅう]させられました}。", "Enfant, {on m'obligeait à travailler} le piano tous les jours."),
  aimyon("通[とお]りすぎた過去[かこ]の記憶[きおく]に{泣[な]かされて}",
    "Les souvenirs d'un passé révolu {m'arrachent des larmes},", "強がりました", null,
    "泣く → 泣かされる (forme courte de 泣かせられる) : « être amenée à pleurer » malgré soi."));
point("N4", "Impératif et interdiction (〜な)", "Ordre direct (行く → 行け, 食べる → 食べろ) ; verbe au dictionnaire + な = « ne fais pas ! ». Très brusque.",
  modele("早[はや]く{起[お]きろ}。", "{Lève-toi} vite !"),
  modele("ここに{入[はい]るな}。", "{N'entre pas} ici !"),
  aimyon("白[しろ]いカモメは海[うみ]へ{飛[と]べ}",
    "Mouette blanche, {vole} vers la mer.", "夢追いベンガル", null,
    "飛ぶ → 飛べ : impératif."));
point("N4", "〜なさい", "Ordre adouci, d'un parent ou d'un professeur.",
  modele("早[はや]く{寝[ね]なさい}。", "Va vite {te coucher}."),
  aimyon("ジュリアナ東京[とうきょう]を{見[み]てみなさい}",
    "{regarde donc} le Juliana's Tokyo.", "ナウなヤングにバカウケするのは当たり前だのクラッ歌", null,
    "見てみる (essayer de regarder) + なさい : un ordre adouci."));
point("N4", "〜てみる", "« Essayer de faire » pour voir ce que ça donne.",
  modele("この服[ふく]を{着[き]てみて}もいいですか。", "Puis-je {essayer} ce vêtement ?"),
  aimyon("{問[と]いかけてみた}けれど",
    "{J'ai bien essayé de te le demander},", "ハッピー", null,
    "問いかける → 問いかけてみた = « j'ai essayé de demander »."));
point("N4", "〜ておく", "Faire quelque chose à l'avance, en prévision.",
  modele("旅行[りょこう]の前[まえ]にホテルを{予約[よやく]しておきます}。", "{Je réserve} l'hôtel avant le voyage."),
  aimyon("メモ書[が]きは{残[のこ]しておいた}でしょ",
    "Je t'{ai bien laissé} un mot, non ?", "チカ", null,
    "残す → 残しておいた : fait à l'avance, en prévision."));
point("N4", "〜てしまう", "Action achevée complètement, ou faite par mégarde (regret). Forme orale : 〜ちゃう.",
  modele("財布[さいふ]を{忘[わす]れてしまいました}。", "{J'ai oublié} mon portefeuille {(zut)}."),
  aimyon("{飽[あ]きてしまった}の？",
    "Tu {t'en es lassé} ?", "3636", null,
    "飽きる → 飽きてしまった : c'est fait, et c'est regrettable."));
point("N4", "〜てくる / 〜ていく", "Changement ou action qui se rapproche du présent (てくる) ou s'en éloigne vers l'avenir (ていく).",
  modele("だんだん寒[さむ]く{なってきました}。", "Il {s'est mis à faire} de plus en plus froid."),
  aimyon("{憧[あこが]れてきた}んだ", "Je vous {ai toujours admirés}.", "憧れてきたんだ", 2017,
    "憧れる (admirer, rêver de) + てきた : un sentiment qui dure depuis longtemps jusqu'à maintenant. んだ donne du poids à l'aveu."));
point("N4", "〜てあげる / 〜てくれる / 〜てもらう", "Rendre service (あげる), quelqu'un me rend service (くれる), obtenir un service de quelqu'un (もらう).",
  modele("友達[ともだち]が駅[えき]まで{送[おく]ってくれました}。", "Mon ami {m'a accompagné} jusqu'à la gare."),
  modele("先生[せんせい]に作文[さくぶん]を{直[なお]してもらいました}。", "{J'ai fait corriger} ma rédaction par le professeur."),
  aimyon("{守[まも]ってあげたい}",
    "et {te protéger}.", "君のこゝろ", null,
    "守ってあげる = « protéger (pour toi) », à la forme en 〜たい."));
point("N4", "〜てある", "État résultant d'une action faite volontairement par quelqu'un.",
  modele("窓[まど]が{開[あ]けてあります}。", "La fenêtre {a été ouverte (et l'est restée)}."),
  aimyon("助[たす]けが来[く]るシステムに{してあるよ}",
    "{tout est prévu} pour que du secours arrive.", "プレゼント", null,
    "システムにする (en faire un système) → してある : c'est déjà mis en place, et cela reste ainsi."));
point("N4", "〜ないで / 〜ずに", "« Sans faire… ». ずに est plus écrit (する → せずに).",
  modele("朝[あさ]ごはんを{食[た]べないで}出[で]かけました。", "Je suis sorti {sans prendre} de petit-déjeuner."),
  aimyon("{焦[あせ]らずに}いるよ",
    "{je ne me presse pas}.", "愛を伝えたいだとか", 2017,
    "焦る → 焦らずに = « sans s'impatienter »."));
point("N4", "〜たら", "« Si… », « quand… » : une fois la première action réalisée.",
  modele("雨[あめ]が{降[ふ]ったら}、家[いえ]にいます。", "{S'il pleut}, je resterai à la maison."),
  aimyon("これが夢[ゆめ]{だったら}",
    "{Si tout cela était} un rêve,", "会いに行くのに", 2024,
    "Nom + だったら = « si c'était… »."));
point("N4", "〜ば", "Conditionnel général : « si… ». Finale en -e + ば (行く → 行けば) ; adjectifs : 〜ければ.",
  modele("{安[やす]ければ}買[か]います。", "{Si ce n'est pas cher}, j'achète."),
  aimyon("明日[あした]に{なれば}私[わたし]",
    "{Quand demain sera là}, est-ce que moi,", "19歳になりたくない", null,
    "なる → なれば = « si / quand ça devient »."));
point("N4", "〜なら", "« Si c'est… », « s'il s'agit de… » : reprend une situation donnée.",
  modele("日本[にほん]に行[い]く{なら}、京都[きょうと]がいいですよ。", "{Si} vous allez au Japon, je vous conseille Kyoto."),
  aimyon("満月[まんげつ]の夜[よる]{なら}", "{Si c'est} une nuit de pleine lune…", "満月の夜なら", 2018,
    "Nom + なら : « s'il s'agit de… ». La phrase reste en suspens, à l'auditeur d'imaginer la suite."),
  aimyon("どうせ死[し]ぬ{なら}", "{Quitte à} mourir…", "どうせ死ぬなら", null,
    "Verbe + なら : « si (de toute façon) on doit… ». どうせ (N2) = « de toute façon » : ce qui suit est présenté comme inévitable."));
point("N4", "〜と (conséquence)", "« Quand / si… alors toujours… » : conséquence automatique.",
  modele("春[はる]に{なると}、桜[さくら]が咲[さ]きます。", "{Quand le printemps arrive}, les cerisiers fleurissent."),
  aimyon("覚悟[かくご]はあると言[い]う{と}嘘[うそ]になる",
    "Dire que j'y suis prête, {ce serait} mentir.", "おじゃまします", null,
    "Deux と différents : あると言う (citation, « dire que ») puis 言うと (conséquence, « si je dis… alors »)."));
point("N4", "〜ても", "« Même si… ».",
  modele("雨[あめ]が{降[ふ]っても}行[い]きます。", "J'irai {même s'il pleut}."),
  aimyon("{泳[およ]いでも} {もがいても}",
    "{J'ai beau nager}, {j'ai beau me débattre},", "森のくまさん", null,
    "泳ぐ → 泳いでも ; la répétition 〜ても〜ても insiste : « quoi que je fasse »."));
point("N4", "〜のに", "« Alors que », « bien que » : exprime surprise ou déception.",
  modele("たくさん勉強[べんきょう]した{のに}、試験[しけん]に落[お]ちました。", "J'ai raté l'examen {alors que} j'avais beaucoup étudié."),
  aimyon("俺[おれ]だったらいい{のに}",
    "{si seulement} c'était moi.", "ミニスカートとハイライト", null,
    "〜たらいいのに exprime un souhait irréalisé."));
point("N4", "〜し", "Énumérer plusieurs raisons : « et puis… ».",
  modele("この店[みせ]は安[やす]い{し}、おいしい{し}、よく来[き]ます。", "Ce restaurant est bon marché, c'est bon : je viens souvent."),
  aimyon("あまり優[やさ]しくない{し}",
    "Tu n'es pas très tendre, {et puis}", "ふたりの世界", null,
    "し énumère une raison parmi d'autres ; la suite est sous-entendue."));
point("N4", "〜と思う", "« Je pense que… ». Précédé de la forme neutre.",
  modele("明日[あした]は晴[は]れる{と思[おも]います}。", "{Je pense qu'}il fera beau demain."),
  aimyon("それでも恋[こい]をしたい{と思[おも]う}",
    "Et malgré tout, {je crois que} je veux aimer.", "漂白", null,
    "恋をしたい (vouloir aimer) + と思う."));
point("N4", "〜かもしれない", "« Peut-être », « il se peut que… ».",
  modele("午後[ごご]は雨[あめ]が降[ふ]る{かもしれません}。", "{Il se peut qu'}il pleuve cet après-midi."),
  aimyon("一緒[いっしょ]に捨[す]ててしまった{かもしれない}",
    "je les ai {peut-être} jetées, elles aussi.", "ねむい", null,
    "捨ててしまった (jeté par mégarde) + かもしれない."));
point("N4", "〜はずだ", "« Normalement », « devrait » : attente fondée sur une raison.",
  modele("彼[かれ]は今日[きょう]来[く]る{はず}です。", "Il {devrait} venir aujourd'hui."),
  aimyon("二人[ふたり]は完璧[かんぺき]な{はず}だった",
    "Nous deux, nous {devions} être parfaits.", "強がりました", null,
    "Adjectif en な + な + はず. Au passé (はずだった) : ce qui aurait dû être, mais ne l'a pas été."));
point("N4", "〜そうだ (apparence)", "Base du verbe / radical de l'adjectif + そう : « avoir l'air… », « être sur le point de… ».",
  modele("このケーキは{おいしそう}です。", "Ce gâteau {a l'air délicieux}."),
  modele("雨[あめ]が{降[ふ]りそう}です。", "{On dirait qu'il va pleuvoir}."),
  aimyon("{溢[あふ]れちゃいそう}だ",
    "elle {va déborder}.", "マトリョーシカ", null,
    "溢れちゃう (= 溢れてしまう) + そうだ : « sur le point de »."));
point("N4", "〜ようだ / 〜みたいだ", "« On dirait que… », « comme… ». みたい est plus familier.",
  modele("彼[かれ]は疲[つか]れている{ようです}。", "Il {a l'air} fatigué."),
  modele("夢[ゆめ]{みたいだ}。", "{On dirait} un rêve."),
  aimyon("花占[はなうらな]いをする{みたいに}",
    "{Comme} on effeuille une marguerite,", "ラッキーカラー", null,
    "Verbe + みたいに = « comme si… »."));
point("N4", "〜らしい", "« Il semble que… » d'après ce qu'on a entendu ; ou « typique de… ».",
  modele("あの店[みせ]は来月[らいげつ]閉[し]まる{らしい}。", "{Il paraît que} ce magasin ferme le mois prochain."),
  aimyon("俺[おれ]なんかじゃない{らしい}",
    "ce n'est pas un type comme moi, {paraît-il}.", "ミニスカートとハイライト", null,
    "らしい : conclusion tirée de ce qu'on a vu ou entendu. なんか (N3) déprécie : « un type comme moi »."));
point("N4", "〜かどうか / question indirecte", "« Si… ou non ». Avec un mot interrogatif, か seul suffit.",
  modele("彼[かれ]が来[く]る{かどうか}分[わ]かりません。", "Je ne sais pas {s'il viendra ou non}."),
  modele("駅[えき]がどこにある{か}教[おし]えてください。", "Dites-moi {où} se trouve la gare, s'il vous plaît."));
point("N4", "〜ように", "« De façon que », « pour que » : but que l'on ne contrôle pas directement.",
  modele("{忘[わす]れないように}、メモを書[か]きます。", "Je prends des notes {pour ne pas oublier}."),
  aimyon("私[わたし]が{濡[ぬ]れないように}",
    "{pour que je ne sois pas mouillée},", "皐月", null,
    "Verbe négatif + ように = « de façon à ne pas… »."));
point("N4", "〜ようになる", "« En venir à… », « se mettre à pouvoir… » : changement progressif.",
  modele("日本語[にほんご]が{話[はな]せるようになりました}。", "{Je suis devenu capable de parler} japonais."));
point("N4", "〜ことができる", "« Pouvoir », « être capable de ».",
  modele("彼女[かのじょ]はピアノを{弾[ひ]くことができます}。", "Elle {sait jouer} du piano."));
point("N4", "〜やすい / 〜にくい", "« Facile à… » / « difficile à… ».",
  modele("この靴[くつ]は{歩[ある]きやすい}です。", "Ces chaussures sont {agréables pour marcher}."),
  aimyon("{分[わ]かりやすい}なあ",
    "{On lit en toi comme dans un livre}.", "駅前喫茶ポプラ", null,
    "分かる → 分かりやすい = « facile à comprendre »."));
point("N4", "〜方", "Base du verbe + 方[かた] : « la manière de… ».",
  modele("この漢字[かんじ]の{読[よ]み方[かた]}を教[おし]えてください。", "Dites-moi {comment se lit} ce kanji."),
  aimyon("余裕[よゆう]のある{生[い]き方[かた]}がしたい",
    "Je veux {une vie} où l'on a le temps de respirer.", "黄昏にバカ話をしたあの日を思い出す時を", 2020,
    "生きる → 生き方 = « la manière de vivre »."));
point("N4", "〜さ", "Transforme un adjectif en nom : 青い → 青さ (le bleu), 強い → 強さ (la force).",
  modele("この川[かわ]の{深[ふか]さ}はどのくらいですか。", "Quelle est la {profondeur} de cette rivière ?"),
  aimyon("忘[わす]れないぞ あの日[ひ]の{悔[くや]しさ}を",
    "Je n'oublierai pas {l'amertume} de ce jour-là.", "ひかりもの", null,
    "悔しい → 悔しさ. L'objet (を) est placé après le verbe : l'ordre habituel est inversé."));
point("N4", "〜ながら", "« Tout en… » : deux actions simultanées. L'action principale est à la fin.",
  modele("音楽[おんがく]を{聞[き]きながら}勉強[べんきょう]します。", "J'étudie {en écoutant} de la musique."),
  aimyon("君[きみ]との恋[こい]を{望[のぞ]みながら}",
    "{Tout en espérant} un amour avec toi,", "ら、のはなし", null,
    "望む → 望みながら."));
point("N4", "〜しか〜ない", "« Ne… que » (insiste sur le peu). Toujours avec une négation.",
  modele("百円[ひゃくえん]{しか}ありません。", "Je {n'ai que} cent yens."),
  aimyon("ふたりだけに{しか}分[わ]からない話[はなし]がしたい",
    "je veux qu'on se dise ce que {nous seuls} pouvons comprendre.", "姿", null,
    "しか + 分からない : « que personne d'autre ne comprend »."));
point("N4", "〜ところ", "Situe l'action dans le temps : sur le point de (verbe au présent + ところ), en train de (〜ているところ), venir juste de (forme en た + ところ).",
  modele("今[いま]から{出[で]かけるところ}です。", "Je suis {sur le point de sortir}."));
point("N4", "〜間 / 〜間に", "« Pendant tout le temps que… » (間) ou « à un moment pendant que… » (間に).",
  modele("留守[るす]の{間[あいだ]に}、荷物[にもつ]が届[とど]きました。", "Un colis est arrivé {pendant} mon absence."),
  aimyon("知[し]らない{間[あいだ]に} 食[た]べてるそれは何[なに]？",
    "Qu'est-ce que tu manges là, {à mon insu} ?", "私に見せてよ", null,
    "知らない間に = « pendant que je ne le savais pas »."));
point("N4", "〜までに", "« D'ici… », « avant (une échéance) ».",
  modele("金曜日[きんようび]{までに}出[だ]してください。", "Rendez-le {d'ici} vendredi."),
  aimyon("この香[かお]りにたどり着[つ]く{までに}",
    "{Avant d'arriver} jusqu'à ce parfum,", "ポプリの葉", null,
    "Verbe + までに : le temps écoulé avant d'atteindre ce point."));
point("N4", "〜始める / 〜出す / 〜続ける / 〜終わる", "Base du verbe + auxiliaire : commencer à, se mettre soudain à, continuer à, finir de.",
  modele("急[きゅう]に雨[あめ]が{降[ふ]り出[だ]しました}。", "Il {s'est soudain mis à pleuvoir}."),
  aimyon("{撒[ま]き続[つづ]ける}のは嫌[いや]",
    "je ne veux plus {continuer à en semer}.", "わかってない", null,
    "撒く → 撒き続ける = « continuer à semer ». の en fait un nom : « le fait de continuer »."));
point("N4", "〜がる / 〜たがる", "Décrire le sentiment ou l'envie d'une autre personne, d'après ce qu'elle montre.",
  modele("子供[こども]は外[そと]で{遊[あそ]びたがっています}。", "L'enfant {a envie de jouer} dehors."),
  aimyon("泣[な]きたい時[とき]はどうして{強[つよ]がる}の",
    "quand tu as envie de pleurer, pourquoi {faire la forte} ?", "RING DING", null,
    "強い → 強がる = « se donner l'air fort »."));
point("N4", "〜とか", "Donner des exemples : « … ou … par exemple ». Familier.",
  modele("休[やす]みの日[ひ]は映画[えいが]{とか}買[か]い物[もの]{とか}に行[い]きます。", "Les jours de repos, je vais au cinéma, faire les magasins, {ce genre de choses}."),
  aimyon("胸[むね]のやわらかさ{とか}吐息[といき]{とか}",
    "La douceur de ta poitrine, ton souffle…", "君がいない夜を越えられやしない", 2022,
    "とか… とか énumère des exemples. やわらかさ : adjectif + さ."));
point("N4", "〜でも", "« Même… » ; ou proposition légère : « … ou autre chose ».",
  modele("お茶[ちゃ]{でも}飲[の]みませんか。", "On ne prendrait pas un thé, {ou quelque chose} ?"),
  aimyon("小[ちい]さな傷[きず]{でも} 私[わたし]に見[み]せてよ",
    "{Même} une toute petite blessure, montre-la-moi.", "私に見せてよ", null,
    "Nom + でも = « même… »."));
point("N4", "Langage honorifique (敬語)", "お + base + になる élève l'action de l'autre ; お + base + する abaisse la sienne.",
  modele("先生[せんせい]はもう{お帰[かえ]りになりました}。", "Le professeur est déjà {rentré}."),
  modele("お荷物[にもつ]を{お持[も]ちします}。", "Je {vais porter} vos bagages."));
point("N4", "〜がする", "Percevoir une odeur, un son, un goût, une impression : 匂い / 音 / 味 / 気 + がする.",
  modele("隣[となり]の部屋[へや]から音[おと]{がします}。", "{On entend du bruit} dans la pièce d'à côté."),
  aimyon("真夏[まなつ]の夜[よる]の匂[にお]い{がする}", "{Cela sent} la nuit de plein été.", "真夏の夜の匂いがする", 2019,
    "匂いがする = « il y a une odeur de… ». Trois noms reliés par の : 真夏の夜の匂い."));
point("N4", "〜かな", "Se demander à soi-même : « je me demande si… ».",
  modele("明日[あした]は晴[は]れる{かな}。", "{Je me demande s'}il fera beau demain."),
  aimyon("出会[であ]うことは可能[かのう]なの{かな}",
    "se rencontrer de nouveau, {est-ce possible} ?", "猫", null,
    "なのかな : on s'interroge à voix haute."));
point("N4", "〜ばよかった", "Regret : « j'aurais dû… ».",
  modele("もっと早[はや]く{起[お]きればよかった}。", "{J'aurais dû me lever} plus tôt."));
point("N4", "〜てほしい", "Vouloir que quelqu'un d'autre fasse quelque chose.",
  modele("もっとゆっくり{話[はな]してほしい}です。", "{J'aimerais que vous parliez} plus lentement."),
  aimyon("心[こころ]を読[よ]み{聞[き]かせて欲[ほ]しい}",
    "{je voudrais que tu me lises} ton cœur, comme un conte :", "ビーナスベルト", null,
    "読み聞かせる (lire à voix haute pour quelqu'un) + てほしい."));
point("N4", "〜ようにする", "« Faire en sorte de… », « s'efforcer de… ».",
  modele("毎日[まいにち]野菜[やさい]を{食[た]べるようにしています}。", "{Je m'efforce de manger} des légumes tous les jours."));
point("N4", "〜たばかり", "« Venir tout juste de… ».",
  modele("日本[にほん]に{来[き]たばかり}です。", "Je {viens tout juste d'arriver} au Japon."));
point("N4", "〜だけでなく / 〜ばかりでなく", "« Non seulement… mais aussi… ».",
  modele("彼女[かのじょ]は歌[うた]{だけでなく}、ギターも上手[じょうず]です。", "Elle est douée {non seulement} pour le chant, {mais aussi} pour la guitare."));
point("N4", "〜直す", "Base + 直[なお]す : refaire, recommencer en mieux.",
  modele("作文[さくぶん]を{書[か]き直[なお]しました}。", "{J'ai réécrit} ma rédaction."),
  aimyon("できれば {やり直[なお]したい}けれど",
    "Si je pouvais, {je recommencerais tout}, mais…", "さよならの今日に", 2020,
    "やる → やり直す = « refaire »."));

// ---- Points ajoutés depuis Bunpro (phrases modèles seulement) ----
point("N4", "〜づらい", "Radical du verbe + づらい : « difficile à… », « pénible à… », souvent avec une gêne ressentie par celui qui parle.",
  modele("この靴[くつ]は{歩[ある]きづらい}。", "Ces chaussures sont {pénibles pour marcher}."));
point("N4", "だんだん", "« Peu à peu », « progressivement » : un changement graduel.",
  modele("{だんだん}暖[あたた]かくなってきました。", "Il se met à faire {peu à peu} plus doux."),
  aimyon("{だんだん}息[いき]もできなくなって",
    "{Peu à peu}, je n'arrive même plus à respirer,", "今夜このまま", 2018,
    "だんだん : un changement progressif."));
point("N4", "どんどん", "« De plus en plus », « à toute allure » : un changement rapide et continu (だんだん est plus graduel).",
  modele("日本語[にほんご]が{どんどん}上手[じょうず]になる。", "Mon japonais s'améliore {à vue d'œil}."));
point("N4", "〜ら", "Pluriel après un pronom : 彼ら « eux », 僕ら « nous ». Familier ; peut sembler rude envers quelqu'un.",
  modele("{彼[かれ]ら}は高校生[こうこうせい]です。", "{Eux}, ce sont des lycéens."),
  aimyon("「どうよ{私[わたし]ら}イケてるでしょ」と言[い]わんばかりの顔[かお]を見[み]せる",
    "avec une tête qui a tout l'air de dire : « Alors, {nous}, on est stylées, hein ? »", "泥だんごの天才いたよね", 2015,
    "私 + ら : « nous », pluriel familier."));
point("N4", "〜だけで", "« Rien qu'en… », « il suffit de… ».",
  modele("{見[み]るだけで}楽[たの]しい。", "{Rien qu'à regarder}, c'est amusant."));
point("N4", "だが / ですが", "En début de phrase : « mais », « cependant » (soutenu).",
  modele("彼[かれ]は若[わか]い。{だが}、経験[けいけん]は多[おお]い。", "Il est jeune. {Pourtant}, il a beaucoup d'expérience."));
point("N4", "〜なくて", "Forme en て de la négation : « ne pas… et… ». Sert à enchaîner, ou à donner la cause (« comme… ne… pas »).",
  modele("お金[かね]が{なくて}、買[か]えませんでした。", "{Comme je n'avais pas} d'argent, je n'ai pas pu l'acheter."));
point("N4", "Verbes transitifs et intransitifs", "Beaucoup de verbes vont par paires : le transitif (quelqu'un agit : を開ける « ouvrir ») et l'intransitif (cela se produit : が開く « s'ouvrir »).",
  modele("ドア{が開[あ]きました}。", "La porte {s'est ouverte}."));
point("N4", "〜ということ", "Phrase + ということ : transforme toute une phrase en nom, « le fait que… ».",
  modele("彼[かれ]が来[こ]ない{ということ}を知[し]りませんでした。", "Je ne savais pas {qu'}il ne viendrait pas."));
point("N4", "まず", "« D'abord », « pour commencer ».",
  modele("{まず}手[て]を洗[あら]ってください。", "{D'abord}, lavez-vous les mains."));
point("N4", "また", "« Encore », « de nouveau » ; aussi « de plus », « également ».",
  modele("{また}会[あ]いましょう。", "Revoyons-nous {une prochaine fois}."),
  aimyon("出会[であ]い頭[がしら]で{また}つまずく",
    "et dès la première rencontre je trébuche {encore}.", "シガレット", 2020,
    "また : « encore », « de nouveau »."));
point("N4", "〜ごろ / 〜ころ", "« Vers… », « aux alentours de… » (moment) ; avec un verbe ou の : « à l'époque où… ».",
  modele("三時[さんじ]{ごろ}帰[かえ]ります。", "Je rentre {vers} trois heures."),
  aimyon("小[ちい]さな{ころから}気取[きど]ってばかりいること",
    "Jouer les grands {depuis tout petit},", "泥だんごの天才いたよね", 2015,
    "小さなころ : « l'époque où l'on était petit »."));
point("N4", "〜あとで", "Verbe au passé (ou nom + の) + あとで : « après… », « après avoir… ». Seul : « plus tard ».",
  modele("ご飯[はん]を{食[た]べたあとで}、散歩[さんぽ]します。", "{Après avoir mangé}, je vais me promener."));
point("N4", "〜ていた", "Passé de 〜ている : « était en train de… », ou état qui durait dans le passé.",
  modele("その時[とき]、本[ほん]を{読[よ]んでいた}。", "À ce moment-là, je {lisais} un livre."),
  aimyon("涙[なみだ]こらえ{聞[き]いていた}のは 大好[だいす]きな五[いつ]つの音[おと]",
    "ce que {j'écoutais} en retenant mes larmes, c'étaient cinq sons que j'aime tant.", "夜行バス", 2015,
    "聞いていた : passé de 聞いている, une action qui durait."));
point("N4", "に (fréquence)", "Période + に + nombre de fois : « … fois par… ».",
  modele("一週間[いっしゅうかん]{に}二回[にかい]泳[およ]ぎます。", "Je nage deux fois {par} semaine."));
point("N4", "とうとう", "« Finalement », « pour finir », après une longue attente ou un long processus.",
  modele("{とうとう}雨[あめ]が降[ふ]り出[だ]した。", "La pluie a {fini par} se mettre à tomber."));
point("N4", "〜ごとに", "« Chaque… », « tous les… », « à chaque fois que… ».",
  modele("二時間[にじかん]{ごとに}薬[くすり]を飲[の]みます。", "Je prends le médicament {toutes les} deux heures."));
point("N4", "なるべく", "« Autant que possible », « dans la mesure du possible ».",
  modele("{なるべく}早[はや]く来[き]てください。", "Venez {le plus} tôt {possible}."));
point("N4", "〜など", "« … par exemple », « … et ainsi de suite », « etc. ».",
  modele("りんごやバナナ{など}を買[か]いました。", "J'ai acheté des pommes, des bananes, {etc.}"),
  aimyon("昨日[きのう]のこと{など} 幻[まぼろし]だと思[おも]おう",
    "Ce qui s'est passé hier, {ce genre de choses}, disons que ce n'était qu'un mirage.", "猫", null,
    "など après 昨日のこと : « ce genre de choses », avec une nuance de dédain."));
point("N4", "こういう / そういう / ああいう / どういう", "Devant un nom : « ce genre de… », « un tel… » ; どういう : « quel genre de… ».",
  modele("{そういう}話[はなし]は聞[き]きたくない。", "Je ne veux pas entendre {ce genre d'}histoires."),
  aimyon("そういえば僕[ぼく]は君[きみ]の{こういう}ところが大好[だいす]きで",
    "Au fait, {ce côté-là} de toi, je l'adore,", "駅前喫茶ポプラ", 2024,
    "こういう + nom : « ce genre de… » (こういうところ « ce côté-là »)."));
point("N4", "あまり〜ない", "あまり + négation : « pas très », « pas beaucoup », « pas vraiment ».",
  modele("この映画[えいが]は{あまり}面白[おもしろ]く{ない}。", "Ce film n'est {pas très} intéressant."),
  aimyon("{あまり}考[かんが]え込[こ]むのは好[す]きじゃないんだ",
    "Je n'aime {pas trop} ruminer.", "分かってくれよ", 2015,
    "あまり + négation (好きじゃない) : « pas tellement »."));
point("N4", "〜をしている (porter, avoir)", "Nom + をしている : porter un accessoire (cravate, montre…) ou avoir un trait physique.",
  modele("父[ちち]はネクタイ{をしています}。", "Mon père {porte} une cravate."));
point("N4", "〜くする / 〜にする (rendre)", "Adjectif en い → 〜くする, adjectif en な ou nom → 〜にする : « rendre… », « faire devenir… ».",
  modele("部屋[へや]を{きれいにしました}。", "J'ai {rangé} la chambre."),
  aimyon("ほろ酔[よ]いは 俺[おれ]を {ダメな男[おとこ]にする}",
    "L'ivresse légère {fait de moi un pauvre type}.", "ほろ酔い", 2015,
    "A を B にする : « faire de A un B »."));
point("N4", "〜くは", "Adjectif en い à la forme く + は : met l'adjectif en relief ou en contraste, surtout avant une négation.",
  modele("{高[たか]くは}ないが、安[やす]くもない。", "Ce n'est pas {vraiment cher}, mais pas bon marché non plus."),
  aimyon("{強[つよ]くは}なりたい でも弱[よわ]くもありたい",
    "{Forte}, je veux bien le devenir ; mais je veux aussi rester fragile.", "19歳になりたくない", 2015,
    "強く + は : met l'adjectif en contraste avec 弱くも."));
point("N4", "〜といい", "« J'espère que… », « ce serait bien que… » ; adressé à quelqu'un : « tu devrais… ».",
  modele("明日[あした]晴[は]れる{といい}ですね。", "{J'espère qu'}il fera beau demain."),
  aimyon("叶[かな]う{といい}けどなぁ",
    "{j'aimerais tant qu'}il se réalise…", "ラッキーカラー", 2024,
    "叶う + といい : souhait, « ce serait bien que… »."));
point("N4", "毎〜のように", "毎日のように, 毎週のように… : « presque chaque… ».",
  modele("{毎日[まいにち]のように}雨[あめ]が降[ふ]る。", "Il pleut {presque tous les jours}."));
point("N4", "〜じゃないか", "« N'est-ce pas ? », « tu vois bien que… » : chercher l'accord, ou marquer la surprise ou le reproche.",
  modele("いい天気[てんき]{じゃないか}。", "Il fait beau, {tu ne trouves pas} ?"));
point("N4", "〜と聞いた", "« J'ai entendu dire que… ».",
  modele("彼[かれ]は結婚[けっこん]した{と聞[き]いた}。", "{J'ai entendu dire qu'}il s'est marié."));
point("N4", "聞こえる", "« On entend… », « être audible » (sans effort volontaire) ; aussi « sonner comme… ».",
  modele("鳥[とり]の声[こえ]が{聞[き]こえる}。", "{On entend} le chant des oiseaux."));
point("N4", "見える", "« On voit… », « être visible » ; aussi « avoir l'air… ».",
  modele("窓[まど]から海[うみ]が{見[み]える}。", "De la fenêtre, {on voit} la mer."),
  aimyon("青[あお]く波打[なみう]つ海[うみ]が{見[み]えた}気[き]がした",
    "J'ai cru {voir} une mer bleue et houleuse.", "神秘の領域へ", 2022,
    "見える : ce qui apparaît à la vue, sans qu'on le cherche."));
point("N4", "〜代", "Après une dizaine : tranche d'âge (二十代 « la vingtaine ») ; 年代 pour une décennie.",
  modele("母[はは]は{五十代[ごじゅうだい]}です。", "Ma mère a {la cinquantaine}."));
point("N4", "かかる (temps, argent)", "« Prendre » (du temps), « coûter » (de l'argent).",
  modele("駅[えき]まで三十分[さんじゅっぷん]{かかります}。", "{Il faut} trente minutes jusqu'à la gare."));
point("N4", "する (prix)", "Prix + する : « coûter… ».",
  modele("このかばんは一万円[いちまんえん]{します}。", "Ce sac {coûte} dix mille yens."));
point("N4", "Nombre + も", "Après une quantité : insiste sur le fait qu'elle est grande (« pas moins de… ») ; avec une négation, « pas même… ».",
  modele("三時間[さんじかん]{も}待[ま]ちました。", "J'ai attendu {pas moins de} trois heures."));
point("N4", "ほとんど", "« Presque tout », « la plupart » ; avec une négation : « presque pas ».",
  modele("宿題[しゅくだい]は{ほとんど}終[お]わりました。", "J'ai {presque} fini mes devoirs."));
point("N4", "こんな / そんな / あんな / どんな", "Devant un nom : « un… comme ça », « un tel… » ; どんな : « quel genre de… ».",
  modele("{そんな}ことは知[し]りません。", "Je ne sais rien d'{une chose pareille}."));
point("N4", "各〜", "Préfixe : « chaque… », « chacun des… ».",
  modele("{各[かく]}クラスに先生[せんせい]が二人[ふたり]います。", "Il y a deux professeurs dans {chaque} classe."));
point("N4", "〜の次に", "« Après… », « juste derrière… » dans un ordre ou un classement.",
  modele("東京[とうきょう]{の次[つぎ]に}大[おお]きい町[まち]は横浜[よこはま]です。", "La plus grande ville {après} Tokyo, c'est Yokohama."));
point("N4", "〜以上 (quantité)", "Quantité + 以上 : « … ou plus », « au moins… ». これ以上 : « davantage ».",
  modele("十人[じゅうにん]{以上[いじょう]}来[き]ました。", "Dix personnes {ou plus} sont venues."));
point("N4", "〜以下", "Quantité + 以下 : « … ou moins », « au maximum… ».",
  modele("五歳[ごさい]{以下[いか]}の子供[こども]は無料[むりょう]です。", "C'est gratuit pour les enfants de cinq ans {et moins}."));
point("N4", "〜以外", "« Sauf… », « à part… », « autre que… ».",
  modele("日曜日[にちようび]{以外[いがい]}は開[あ]いています。", "C'est ouvert tous les jours {sauf} le dimanche."),
  aimyon("そして「僕[ぼく]」{以外[いがい]}の処方箋[しょほうせん]をください",
    "puis prescrivez-lui un remède {autre que} « moi ».", "彼氏有無", 2023,
    "Nom + 以外 : « autre que… », « à part… »."));
point("N4", "ずっと", "« Tout le temps », « sans arrêt », « depuis toujours ».",
  modele("朝[あさ]から{ずっと}雨[あめ]が降[ふ]っている。", "Il pleut {sans arrêt} depuis ce matin."),
  aimyon("君[きみ]が現[あらわ]れた時[とき]から{ずっと}",
    "depuis ton arrivée, {sans jamais cesser}.", "スケッチ", 2025,
    "〜からずっと : « depuis…, sans interruption »."));
point("N4", "だいたい", "« À peu près », « dans l'ensemble », « la plupart du temps ».",
  modele("話[はなし]は{だいたい}分[わ]かりました。", "J'ai {à peu près} compris l'histoire."),
  aimyon("{だいたい}のことでは傷[きず]ついてきた",
    "J'ai été blessée par {à peu près tout} :", "ひかりもの", 2019,
    "だいたいのこと : « la plupart des choses »."));
point("N4", "〜の中で", "« Parmi… », « au sein de… » : désigne un élément à l'intérieur d'un groupe ; aussi « dans… » (un lieu).",
  modele("果物[くだもの]{の中[なか]で}何[なに]が一番[いちばん]好[す]きですか。", "{Parmi} les fruits, lequel préférez-vous ?"),
  aimyon("夢[ゆめ]{の中[なか]で}悪魔[あくま]が唱[とな]えた",
    "prononcée par un démon {dans} mon rêve,", "初恋が泣いている", 2022,
    "Nom + の中で : « dans », « à l'intérieur de »."));
point("N4", "Quantité + は", "Après une quantité : « au moins… », « dans les… ».",
  modele("毎日[まいにち]一時間[いちじかん]{は}勉強[べんきょう]します。", "J'étudie {au moins} une heure par jour."));
point("N4", "何 + compteur + か", "何人か, 何回か, いくつか… : « quelques… », « plusieurs… ».",
  modele("{何人[なんにん]か}の友達[ともだち]が来[き]ました。", "{Quelques} amis sont venus."));
point("N4", "真っ〜", "Préfixe d'intensité : « tout… », « en plein… » (真っ白 « tout blanc », 真ん中 « en plein milieu »).",
  modele("空[そら]が{真[ま]っ青[さお]}です。", "Le ciel est {tout bleu}."));
point("N4", "〜は〜の一つだ", "« … est l'un des… ».",
  modele("京都[きょうと]は日本[にほん]で有名[ゆうめい]な町[まち]{の一[ひと]つだ}。", "Kyoto est {l'une des} villes célèbres du Japon."));
point("N4", "〜ない〜はない", "Double négation : « il n'y a pas de… qui ne… pas », donc « tous… ».",
  modele("彼[かれ]を{知[し]らない}人[ひと]{はいない}。", "{Il n'y a personne} qui {ne} le {connaisse pas}."));
point("N4", "少しも〜ない", "少しも + négation : « pas du tout », « pas le moins du monde ».",
  modele("{少[すこ]しも}寒[さむ]く{ない}。", "Je n'ai {pas} froid {du tout}."));
point("N4", "〜は少なくない", "Mot à mot « ne sont pas peu nombreux » : « il y en a pas mal », « nombreux sont… ».",
  modele("そう考[かんが]える人[ひと]{は少[すく]なくない}。", "Les gens qui pensent ainsi {ne sont pas rares}."));
point("N4", "〜場合は", "« Dans le cas où… », « en cas de… ».",
  modele("雨[あめ]の{場合[ばあい]は}中止[ちゅうし]です。", "{En cas de} pluie, c'est annulé."));
point("N4", "〜て (demande familière)", "Forme en て seule en fin de phrase : demande familière, 〜てください sans ください.",
  modele("ちょっと{待[ま]って}。", "{Attends} un peu."));
point("N4", "〜てよかった", "« Heureusement que… », « je suis content que… ».",
  modele("傘[かさ]を{持[も]ってきてよかった}。", "{Heureusement que j'ai pris} un parapluie."));
point("N4", "〜と言ってもいい", "« On peut dire que… ».",
  modele("これは彼[かれ]の一番[いちばん]いい作品[さくひん]だ{と言[い]ってもいい}。", "{On peut dire que} c'est sa meilleure œuvre."));
point("N4", "〜て (cause)", "La forme en て peut donner la cause de ce qui suit : « … et du coup… », « comme… ».",
  modele("風邪[かぜ]を{ひいて}、学校[がっこう]を休[やす]みました。", "{J'ai attrapé} un rhume, {alors} j'ai manqué l'école."),
  aimyon("{暗[くら]くて}何[なに]も見[み]えないから",
    "{Comme il fait noir} et qu'on ne voit rien,", "夜行バス", 2015,
    "暗い → 暗くて : la forme en て donne la cause."));
point("N4", "〜て / 〜で (moyen, manière)", "La forme en て (ou nom + で) indique le moyen ou la manière dont se fait l'action.",
  modele("{歩[ある]いて}学校[がっこう]に行[い]きます。", "Je vais à l'école {à pied}."));
point("N4", "〜てすみません", "« Excusez-moi de… », « désolé d'avoir… ».",
  modele("{遅[おそ]くなってすみません}。", "{Excusez-moi d'être en retard}."));
point("N4", "〜てくれてありがとう", "« Merci de… », « merci d'avoir… » : remercier quelqu'un pour ce qu'il a fait pour nous.",
  modele("{手伝[てつだ]ってくれてありがとう}。", "{Merci de m'avoir aidé}."));
point("N4", "〜てくれない？ / 〜てもらえない？", "Demande familière : « tu ne voudrais pas… ? », « tu pourrais… ? ».",
  modele("ちょっと{手伝[てつだ]ってくれない}？", "{Tu ne voudrais pas m'aider} un peu ?"));
point("N4", "〜のだろうか", "« Je me demande si… » : question que l'on se pose à soi-même.",
  modele("彼[かれ]は本当[ほんとう]に来[く]る{のだろうか}。", "Viendra-t-il vraiment, {je me le demande}."),
  aimyon("どこまでも楽[らく]になれる{のだろうか}",
    "tout deviendrait-il infiniment plus léger{, je me le demande} ?", "いちについて", 2025,
    "のだろうか : question que l'on se pose à soi-même."));
point("N4", "〜ていただけませんか", "Demande très polie (langage d'humilité) : « pourriez-vous… s'il vous plaît ? ».",
  modele("もう一度[いちど]{説明[せつめい]していただけませんか}。", "{Pourriez-vous m'expliquer} encore une fois ?"));
point("N4", "ほかに", "« D'autre », « à part cela », « en plus ».",
  modele("{ほかに}質問[しつもん]はありますか。", "Avez-vous {d'autres} questions ?"));
point("N4", "〜が必要", "« Avoir besoin de… », « … est nécessaire ».",
  modele("この仕事[しごと]には経験[けいけん]{が必要[ひつよう]}です。", "Pour ce travail, il {faut} de l'expérience."));
point("N4", "〜必要がある", "Verbe + 必要がある : « il est nécessaire de… », « il faut… ».",
  modele("もっと{練習[れんしゅう]する必要[ひつよう]がある}。", "{Il faut s'entraîner} davantage."));
point("N4", "そんなに", "« À ce point », « tant que ça » ; avec une négation : « pas tant que ça ».",
  modele("{そんなに}食[た]べられません。", "Je ne peux pas manger {autant que ça}."),
  aimyon("{そんなに}変[か]わってないのに",
    "et rien n'a {tellement} changé, pourtant.", "会いに行くのに", 2024,
    "そんなに + négation : « pas tant que ça »."));
point("N4", "例えば", "« Par exemple ».",
  modele("{例[たと]えば}、寿司[すし]や天[てん]ぷらが好[す]きです。", "{Par exemple}, j'aime les sushis et les tempuras."));
point("N4", "〜んだけど / 〜んですが", "Pose le contexte avant une demande ou une question, souvent en laissant la suite en suspens.",
  modele("ちょっと聞[き]きたい{んですが}。", "C'est que j'aurais une question…"),
  aimyon("幸[しあわ]せの味付[あじつ]けを調[しら]べてみた{んだけど}",
    "J'ai bien cherché comment assaisonner le bonheur{, mais voilà} :", "3636", 2022,
    "んだけど pose le contexte avant ce qui suit."));
point("N4", "〜ないと", "« Il faut que… » : version familière et abrégée de 〜ないといけない.",
  modele("もう{帰[かえ]らないと}。", "{Il faut que je rentre}, maintenant."),
  aimyon("「人生[じんせい]は{楽[たの]しまないと}ネ!」",
    "« La vie, {il faut en profiter}, hein ! »", "さながらロンリー", 2026,
    "楽しまないと(いけない) : « il faut… », la fin est sous-entendue."));
point("N4", "〜かい", "Marque de question familière, d'un ton plutôt masculin.",
  modele("元気[げんき]{かい}？", "Ça va {?}"),
  aimyon("少[すこ]しだけいい{かい}?",
    "Juste un peu, tu veux bien{, dis} ?", "from 四階の角部屋", 2019,
    "かい : marque de question familière."));
point("N4", "もし", "« Si jamais… » : annonce et renforce une condition (〜たら, 〜ば, 〜なら, 〜ても).",
  modele("{もし}雨[あめ]が降[ふ]ったら、行[い]きません。", "{Si jamais} il pleut, je n'irai pas."),
  aimyon("{もし}私[わたし]に彼氏[かれし]ができた冬休[ふゆやす]みは",
    "{Si jamais} j'ai un petit ami, ces vacances d'hiver-là,", "私に彼氏ができない理由", 2015,
    "もし annonce l'hypothèse."));
point("N4", "〜でできる / 〜からできる", "« Être fait en… », « être fait à partir de… ».",
  modele("この机[つくえ]は木[き]{でできています}。", "Ce bureau {est fait en} bois."));
point("N4", "〜と〜と、どちらが", "« Entre… et…, lequel est le plus… ? ».",
  modele("犬[いぬ]{と}猫[ねこ]{と、どちらが}好[す]きですか。", "{Entre} les chiens {et} les chats, {lesquels} préférez-vous ?"));
point("N4", "〜ように言う", "« Dire à quelqu'un de… » : rapporter une demande ou un ordre.",
  modele("先生[せんせい]は学生[がくせい]に静[しず]かにする{ように言[い]った}。", "Le professeur {a dit} aux élèves {de} se taire."));
point("N4", "〜予定だ", "« Il est prévu que… », « je compte… ».",
  modele("来月[らいげつ]、日本[にほん]に{行[い]く予定[よてい]です}。", "{Je dois aller} au Japon le mois prochain."));
point("N4", "〜ように祈る", "« Prier pour que… », « espérer que… ».",
  modele("試験[しけん]に合格[ごうかく]する{ように祈[いの]っています}。", "{Je prie pour que} tu réussisses l'examen."));
point("N4", "〜化する", "Nom + 化 : « -isation » ; avec する : « devenir… », « transformer en… ».",
  modele("社会[しゃかい]が{高齢化[こうれいか]している}。", "La société {vieillit}."));
point("N4", "〜かしら", "« Je me demande si… », d'un ton plutôt féminin.",
  modele("明日[あした]は晴[は]れる{かしら}。", "{Je me demande s'}il fera beau demain."),
  aimyon("わがまま{かしら}？",
    "Suis-je capricieuse{, je me le demande} ?", "ハート", 2021,
    "かしら : « je me demande si… »."));
point("N4", "〜って感じ", "« C'est un peu… », « ça fait genre… » (familier).",
  modele("やっと終[お]わった{って感[かん]じ}。", "{J'ai comme l'impression que} c'est enfin fini."));
point("N4", "〜に見える", "« Avoir l'air… », « paraître… ».",
  modele("彼[かれ]は元気[げんき]そう{に見[み]える}。", "Il {a l'air} en forme."),
  aimyon("いつになく遠[とお]く{遠[とお]くに見[み]える}",
    "{me paraît lointaine}, si lointaine, comme jamais.", "ハルノヒ", 2019,
    "遠くに見える : « paraître loin »."));
point("N4", "〜と見える", "« Il semble que… », « on dirait bien que… » : déduction à partir de ce que l'on constate.",
  modele("彼[かれ]は疲[つか]れている{と見[み]える}。", "{On dirait qu'}il est fatigué."));
point("N4", "〜風", "Nom + 風 (lu ふう) : « de style… », « à la manière… ».",
  modele("この店[みせ]は{日本風[にほんふう]}です。", "Ce restaurant est {de style japonais}."));
point("N4", "〜が見られる", "« On peut voir… », « on observe… ».",
  modele("ここでは珍[めずら]しい鳥[とり]{が見[み]られます}。", "Ici, {on peut voir} des oiseaux rares."));
point("N4", "〜に気がつく", "« Remarquer… », « s'apercevoir de… ».",
  modele("間違[まちが]い{に気[き]がつきました}。", "Je {me suis aperçu de} l'erreur."));
point("N4", "〜ても〜ても / 〜でも〜でも", "« Que ce soit… ou… » : dans les deux cas, le résultat est le même.",
  modele("雨[あめ]{でも}雪[ゆき]{でも}行[い]きます。", "{Qu'il} pleuve {ou qu'il} neige, j'irai."));
point("N4", "それに", "« En plus », « et puis », « d'ailleurs ».",
  modele("この店[みせ]は安[やす]い。{それに}、おいしい。", "Ce restaurant est bon marché. {En plus}, c'est bon."),
  aimyon("{それに}割[わ]れてしまった目玉焼[めだまや]き",
    "{Et en plus}, un œuf au plat au jaune crevé.", "愛を伝えたいだとか", 2017,
    "それに ajoute un élément à ce qui vient d'être dit."));
point("N4", "それで", "« C'est pourquoi », « du coup » ; en question : « et alors ? ».",
  modele("熱[ねつ]がありました。{それで}、学校[がっこう]を休[やす]みました。", "J'avais de la fièvre. {C'est pourquoi} j'ai manqué l'école."),
  aimyon("{それで}へらへら謝[あやま]ってきて",
    "{Et là-dessus} tu viens t'excuser avec ton sourire niais,", "お互い様やん", 2015,
    "それで relie ce qui précède à sa suite : « et là-dessus », « du coup »."));
point("N4", "それでも", "« Malgré cela », « et pourtant », « quand même ».",
  modele("雨[あめ]が降[ふ]っていた。{それでも}、出[で]かけた。", "Il pleuvait. Je suis sorti {quand même}."),
  aimyon("私[わたし]{それでも}恋[こい]をやめれない 女[おんな]の執念深[しゅうねんぶか]さよ",
    "{Et malgré tout} je ne peux pas renoncer à l'amour : l'obstination d'une femme, voilà.", "幸せになりたい", 2015,
    "それでも : « malgré cela », après la liste de ses déboires."));
point("N4", "〜たらどう", "« Et si tu… ? », « pourquoi ne pas… ? » : suggestion.",
  modele("少[すこ]し{休[やす]んだらどう}ですか。", "{Et si vous vous reposiez} un peu ?"));
point("N4", "〜と考えられている", "« On considère que… », « on pense que… » (〜と思われている a le même sens).",
  modele("これが原因[げんいん]だ{と考[かんが]えられている}。", "{On considère que} c'en est la cause."));
point("N4", "〜とされている", "« Est considéré comme… », « on tient que… ».",
  modele("納豆[なっとう]は体[からだ]にいい{とされている}。", "Le nattō {est réputé} bon pour la santé."));
point("N4", "〜と言われている", "« On dit que… », « il est connu comme… ».",
  modele("この山[やま]は日本[にほん]で一番[いちばん]美[うつく]しい{と言[い]われている}。", "{On dit que} cette montagne est la plus belle du Japon."));
