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
