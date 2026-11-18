// ===================== NIVEAU N5 =====================
// Le niveau de chaque fiche est celui indiqué par Bunpro.

point("N5", "〜です", "Copule polie : placée après un nom ou un adjectif, elle affirme « A est B ». Ce n'est pas un verbe, même si on la traduit souvent par « être ».",
  modele("私[わたし]は学生[がくせい]{です}。", "Je {suis} étudiant."),
  aimyon("人[ひと]になれない人[ひと]{です}",
    "Je {suis} quelqu'un qui ne sait pas devenir quelqu'un.", "インタビュー", null,
    "人です = « je suis une personne ». 人になれない (qui ne peut pas devenir quelqu'un) est une proposition relative placée devant 人."));
point("N5", "は", "Marque le thème de la phrase : « quant à… ». Se prononce « wa ».",
  modele("今日[きょう]{は}暑[あつ]いです。", "{Aujourd'hui}, il fait chaud."),
  aimyon("私[わたし]{は}朝[あさ]が嫌[きら]い",
    "{Moi}, je déteste le matin.", "朝が嫌い", null,
    "は pose le thème (« moi »), が marque ce qui est détesté : la structure « A は B が 嫌い / 好き »."));
point("N5", "が", "Marque le sujet, souvent une information nouvelle ou mise en avant.",
  modele("雨[あめ]{が}降[ふ]っています。", "{La pluie} tombe."),
  aimyon("それだけ{が}心配[しんぱい]",
    "c'est {là} mon unique souci.", "from 四階の角部屋", null,
    "が met en avant le sujet : « c'est cela, et rien d'autre, qui m'inquiète »."));
point("N5", "を", "Marque l'objet direct du verbe. Se prononce « o ».",
  modele("水[みず]{を}飲[の]みます。", "Je bois {de l'eau}."),
  aimyon("今[いま]{を}生[い]きる",
    "je vis {le présent}.", "いつまでも", null,
    "今 (maintenant) est l'objet de 生きる : littéralement « vivre le maintenant »."));
point("N5", "に (lieu, temps, destinataire)", "Indique le moment précis, la destination, le lieu d'existence ou le destinataire.",
  modele("七時[しちじ]{に}起[お]きます。", "Je me lève {à} sept heures."),
  modele("友達[ともだち]{に}手紙[てがみ]を書[か]きます。", "J'écris une lettre {à} un ami."),
  aimyon("空[そら]飛[と]ぶ気球[ききゅう]{に}乗[の]りたいの？",
    "Tu veux monter {dans} une montgolfière ?", "彼氏有無", null,
    "に marque l'endroit où l'on monte : 〜に乗る."));
point("N5", "へ", "Indique la direction d'un déplacement. Se prononce « e ».",
  modele("日本[にほん]{へ}行[い]きます。", "Je vais {au} Japon."),
  aimyon("香[かお]りを買[か]いに渋谷[しぶや]{へ}",
    "je vais {à} Shibuya acheter ce parfum.", "ポプリの葉", null,
    "へ indique la direction ; le verbe « aller » est sous-entendu. 買いに (N5) exprime le but du déplacement."));
point("N5", "で", "Indique le lieu d'une action, ou le moyen utilisé.",
  modele("図書館[としょかん]{で}勉強[べんきょう]します。", "J'étudie {à la} bibliothèque."),
  modele("電車[でんしゃ]{で}行[い]きます。", "J'y vais {en} train."),
  aimyon("耳元[みみもと]{で}囁[ささや]かれる",
    "On me murmure {à} l'oreille :", "強くなっちゃったんだ、ブルー", null,
    "で marque le lieu où se passe l'action. 囁かれる est le passif (N4) de 囁く."));
point("N5", "と", "« Et » entre deux noms (liste complète), ou « avec » quelqu'un.",
  modele("友達[ともだち]{と}映画[えいが]を見[み]ます。", "Je regarde un film {avec} un ami."),
  aimyon("君[きみ]{と}過[す]ごしたい",
    "je veux le passer {avec} toi.", "GOOD NIGHT BABY", null,
    "君と = « avec toi ». 過ごしたい : forme en 〜たい de 過ごす."));
point("N5", "も", "« Aussi ». Remplace は, が ou を.",
  modele("私[わたし]{も}行[い]きます。", "Moi {aussi}, j'y vais."),
  aimyon("今日[きょう]{も}芸術[げいじゅつ]だ",
    "Aujourd'hui {encore}, c'est de l'art.", "今日の芸術", null,
    "も remplace は : « aujourd'hui aussi »."));
point("N5", "の", "Relie deux noms : « A の B » = « le B de A » (possession, appartenance, description).",
  modele("これは私[わたし]{の}本[ほん]です。", "C'est {mon} livre."),
  aimyon("麦[むぎ]わら{の}帽子[ぼうし]{の}君[きみ]が 揺[ゆ]れたマリーゴールドに似[に]てる",
    "Toi, sous ton chapeau {de} paille, tu as l'air d'un souci qui se balance.", "マリーゴールド", 2018,
    "Deux の s'enchaînent : 麦わらの帽子 (un chapeau de paille), puis 麦わらの帽子の君 (toi au chapeau de paille)."));
point("N5", "か", "Placé en fin de phrase, forme une question. Entre deux noms : « ou ».",
  modele("これは何[なん]です{か}。", "{Qu'est-ce que} c'est ?"),
  aimyon("何[なに]が分[わ]かるの{か}",
    "{Qu'est-ce que} tu en sais ?", "リズム64", null,
    "の devant か donne à la question un ton de demande d'explication."));
point("N5", "や", "« Et » entre des noms, pour une liste non exhaustive (« entre autres »).",
  modele("パン{や}卵[たまご]を買[か]いました。", "J'ai acheté du pain, des œufs, {etc.}"),
  aimyon("悲壮感[ひそうかん]{や}憂鬱[ゆううつ]も",
    "Mon désespoir {et} ma mélancolie aussi,", "スーパーガール", null,
    "や relie deux noms pris comme exemples parmi d'autres."));
point("N5", "〜から〜まで", "« De… à… », « depuis… jusqu'à… » (lieu ou temps).",
  modele("九時[くじ]{から}五時[ごじ]{まで}働[はたら]きます。", "Je travaille {de} neuf heures {à} cinq heures."),
  aimyon("愛[あい]を知[し]る{まで}は", "{Jusqu'à ce que} je connaisse l'amour.", "愛を知るまでは", 2021,
    "まで s'emploie aussi après un verbe : 知るまで = « jusqu'à ce que je connaisse ». Le は final insiste : « du moins jusque-là »."));
point("N5", "ね / よ", "Particules de fin de phrase : ね cherche l'accord (« n'est-ce pas ? »), よ affirme ou informe.",
  modele("いい天気[てんき]です{ね}。", "Il fait beau, {n'est-ce pas} ?"),
  modele("この店[みせ]は安[やす]いです{よ}。", "Ce magasin n'est pas cher, {vous savez}."),
  aimyon("楽[たの]しかった{ね}",
    "C'était bien, {hein}.", "スケッチ", null,
    "ね cherche l'accord de l'autre. 楽しかった : passé de l'adjectif 楽しい."));
point("N5", "だけ", "« Seulement », « juste ».",
  modele("一[ひと]つ{だけ}ください。", "Donnez-m'en un {seul}, s'il vous plaît."),
  aimyon("桜[さくら]{だけ}でいい",
    "…les cerisiers {seuls}, cela suffit.", "桜が降る夜は", null,
    "だけでいい = « rien que… suffit »."));
point("N5", "こ・そ・あ・ど", "Démonstratifs : これ (ceci, près de moi), それ (cela, près de toi), あれ (là-bas), どれ (lequel). Même logique pour この, ここ, etc.",
  modele("{それ}は私[わたし]の傘[かさ]です。", "{Ça}, c'est mon parapluie."),
  aimyon("{それ}がいい",
    "{c'est} bien ce que je préfère.", "テレパしい", null,
    "それ renvoie à ce que l'interlocuteur vient d'évoquer ; が le désigne comme le bon choix."));
point("N5", "〜ます / 〜ません", "Forme polie du verbe au présent/futur, affirmative et négative.",
  modele("毎日[まいにち]日本語[にほんご]を{勉強[べんきょう]します}。", "{J'étudie} le japonais tous les jours."),
  modele("お酒[さけ]は{飲[の]みません}。", "Je {ne bois pas} d'alcool."),
  aimyon("私[わたし] 今日[きょう]も{待[ま]っています}",
    "moi, aujourd'hui encore, {j'attends}.", "ユラユラ", null,
    "待っています : forme en 〜ている à la politesse en 〜ます."));
point("N5", "〜ました / 〜ませんでした", "Forme polie au passé, affirmative et négative.",
  modele("昨日[きのう]映画[えいが]を{見[み]ました}。", "Hier, {j'ai regardé} un film."),
  aimyon("{強[つよ]がりました}", "{J'ai joué} les fortes.", "強がりました", null,
    "強がる (faire semblant d'être fort) → 強がります → 強がりました au passé poli."));
point("N5", "〜ない", "Forme négative familière. Verbes en -u : la finale passe en -a + ない (聴く → 聴かない). Verbes en -ru : 食べる → 食べない.",
  modele("今日[きょう]は学校[がっこう]に{行[い]かない}。", "Aujourd'hui, je {ne vais pas} à l'école."),
  aimyon("君[きみ]はロックを{聴[き]かない}", "Toi, tu {n'écoutes pas} de rock.", "君はロックを聴かない", 2017,
    "聴く → 聴かない. Remarquez aussi は (le thème : « toi ») et を (l'objet : « le rock »)."));
point("N5", "〜た", "Forme passée familière. Se construit comme la forme en て (食べる → 食べた, 飲む → 飲んだ).",
  modele("朝[あさ]ごはんを{食[た]べた}。", "{J'ai pris} mon petit-déjeuner."),
  aimyon("甘[あま]い{香[かお]りした}",
    "Il {flottait} une odeur sucrée.", "おばけがでるぞ", null,
    "する → した au passé. 香り(が)した : la particule が est omise, comme souvent à l'oral."));
point("N5", "〜て (enchaînement)", "La forme en て relie des actions ou des états, qui se suivent ou vont ensemble : « … et … ».",
  modele("朝[あさ]{起[お]きて}、顔[かお]を洗[あら]います。", "Le matin, {je me lève et} je me lave le visage."),
  aimyon("{愛[あい]されて} 愛[あい]してみたい",
    "{Être aimée, puis} à mon tour essayer d'aimer.", "朝陽", null,
    "La forme en て relie les deux actions. 愛される est un passif (N4), 〜てみたい = « vouloir essayer de »."));
point("N5", "〜ている", "Action en cours (« être en train de ») ou état qui dure.",
  modele("今[いま]、本[ほん]を{読[よ]んでいます}。", "En ce moment, {je lis} un livre."),
  aimyon("初恋[はつこい]が{泣[な]いている}", "Mon premier amour {pleure}.", "初恋が泣いている", 2022,
    "泣く → 泣いて + いる : l'action de pleurer est en cours."));
point("N5", "〜てください", "Demander poliment à quelqu'un de faire quelque chose.",
  modele("ここに名前[なまえ]を{書[か]いてください}。", "{Écrivez} votre nom ici, {s'il vous plaît}."),
  aimyon("「危[あぶ]ないですから{離[はな]れてください}」",
    "« C'est dangereux, {éloignez-vous, s'il vous plaît}. »", "生きていたんだよな", 2016,
    "離れる → 離れてください. から donne la raison : « parce que c'est dangereux »."));
point("N5", "〜ないでください", "Demander poliment de ne pas faire quelque chose.",
  modele("ここで写真[しゃしん]を{撮[と]らないでください}。", "{Ne prenez pas} de photos ici, {s'il vous plaît}."),
  aimyon("ずっと{忘[わす]れないで}",
    "{Ne l'oublie} jamais.", "双葉", null,
    "Version familière : ください est omis, 〜ないで suffit."));
point("N5", "〜てもいい", "Permission : « on peut… », « puis-je… ? ».",
  modele("窓[まど]を{開[あ]けてもいい}ですか。", "{Puis-je ouvrir} la fenêtre ?"),
  aimyon("あのプレゼント{開[あ]けてもいい}からね",
    "{tu pourras ouvrir} ce cadeau, tu sais.", "プレゼント", null,
    "開ける → 開けてもいい = « tu peux ouvrir »."));
point("N5", "〜てはいけない", "Interdiction : « il ne faut pas… ».",
  modele("ここでたばこを{吸[す]ってはいけません}。", "{Il ne faut pas fumer} ici."));
point("N5", "〜たい", "Exprimer ce que l'on veut faire : on remplace ます par たい.",
  modele("日本[にほん]に{行[い]きたい}です。", "Je {veux aller} au Japon."),
  aimyon("愛[あい]を{伝[つた]えたい}だとか", "« {Te dire} mon amour », ce genre de choses…", "愛を伝えたいだとか", 2017,
    "伝えます → 伝えたい. だとか, à la fin, ajoute un flou : « … ou quelque chose comme ça »."));
point("N5", "〜ましょう", "Proposer de faire quelque chose ensemble : « faisons… ».",
  modele("一緒[いっしょ]に{帰[かえ]りましょう}。", "{Rentrons} ensemble."),
  aimyon("涙[なみだ]を{流[なが]しましょう}",
    "{Laissons couler} nos larmes.", "姿", null,
    "流します → 流しましょう : invitation à faire ensemble."));
point("N5", "〜ませんか", "Inviter poliment : « ne voudriez-vous pas… ? ».",
  modele("コーヒーを{飲[の]みませんか}。", "{Vous ne voudriez pas boire} un café ?"));
point("N5", "〜に行く / 〜に来る", "Base du verbe (sans ます) + に行く : « aller faire quelque chose ».",
  modele("映画[えいが]を{見[み]に行[い]きます}。", "Je {vais voir} un film."),
  aimyon("{会[あ]いに行[い]く}のに", "Alors, {j'irais te retrouver}…", "会いに行くのに", 2024,
    "会います → 会い + に行く = « aller voir (quelqu'un) ». のに final (N4) exprime un regret : « et pourtant… »."));
point("N5", "〜がある / 〜がいる", "« Il y a ». ある pour les choses inanimées, いる pour les êtres animés (personnes, animaux).",
  modele("公園[こうえん]に猫[ねこ]{がいます}。", "{Il y a} un chat dans le parc."),
  aimyon("魔法[まほう]{がある}よ",
    "{il existe} une magie, tu sais.", "葵", null,
    "魔法 est une chose : on emploie ある."));
point("N5", "〜前に", "« Avant de… ». Verbe au dictionnaire + 前に, ou nom + の前に.",
  modele("{寝[ね]る前[まえ]に}本[ほん]を読[よ]みます。", "Je lis {avant de dormir}."),
  aimyon("あなたが部屋[へや]に{来[く]る前[まえ]に}",
    "{Avant que tu n'arrives} dans ma chambre,", "いいことしましょ", null,
    "Le verbe reste à la forme du dictionnaire devant 前に, même pour une action future ou passée."));
point("N5", "〜てから", "« Après avoir fait… ».",
  modele("手[て]を{洗[あら]ってから}食[た]べます。", "Je mange {après m'être lavé} les mains."),
  aimyon("でも、ふたり{結[むす]ばれてから}",
    "Mais c'est {une fois unis}, tous les deux,", "ハート", null,
    "結ばれる (être uni, passif) → 結ばれてから = « après avoir été unis »."));
point("N5", "〜たり〜たりする", "Citer quelques actions parmi d'autres : « faire des choses comme… ».",
  modele("週末[しゅうまつ]は本[ほん]を{読[よ]んだり}、音楽[おんがく]を{聞[き]いたり}します。", "Le week-end, {je lis}, {j'écoute} de la musique, {etc.}"),
  aimyon("ヤキモチ{焼[や]いたり} キス{したり}",
    "{être jalouse}, {s'embrasser}…", "漂白", null,
    "Deux actions citées en exemple ; le する final est sous-entendu."));
point("N5", "Adjectifs en い", "Se placent devant le nom ou en fin de phrase. Négatif : 〜くない. Passé : 〜かった.",
  modele("この本[ほん]は{面白[おもしろ]い}です。", "Ce livre est {intéressant}."),
  modele("昨日[きのう]は{寒[さむ]くなかった}です。", "Hier, il {ne faisait pas froid}."),
  aimyon("{痛[いた]い}{痛[いた]い}{痛[いた]い}",
    "Ça fait {mal}, {mal}, {mal}.", "朝陽", null,
    "痛い, adjectif en い, forme une phrase à lui seul. La ligne d'avant, 逢いたい (je veux te voir), se termine par les mêmes sons « itai »."));
point("N5", "Adjectifs en な", "Prennent な devant un nom. Négatif : 〜じゃない. Passé : 〜だった / 〜でした.",
  modele("ここは{静[しず]かな}町[まち]です。", "C'est une ville {calme}."),
  aimyon("{好[す]きな}人[ひと]の唇[くちびる]奪[うば]う",
    "Je volerai un baiser à celui {que j'aime}.", "どうせ死ぬなら", null,
    "好き est un adjectif en な : 好きな人 = « la personne que j'aime »."));
point("N5", "〜が好き / 〜が上手", "Ce qu'on aime ou sait bien faire se marque avec が (et non を).",
  modele("私[わたし]は音楽[おんがく]{が好[す]き}です。", "{J'aime} la musique."),
  aimyon("君[きみ]{が好[す]き}だ",
    "Je {t'aime}.", "GOOD NIGHT BABY", null,
    "La personne aimée est marquée par が, pas par を."));
point("N5", "〜より / 〜のほうが", "Comparaison : « A は B より… » (A est plus… que B), « A のほうが… » (c'est A qui est le plus…).",
  modele("電車[でんしゃ]はバス{より}速[はや]いです。", "Le train est {plus} rapide {que} le bus."),
  aimyon("寝癖[ねぐせ]がある君[きみ]{の方[ほう]が}",
    "{Toi}, avec tes épis du matin,", "あのね", null,
    "〜の方が compare : « c'est plutôt toi, décoiffé, qui… ». Ce qui est comparé arrive à la ligne suivante."));
point("N5", "いちばん", "Superlatif : « le plus… ».",
  modele("果物[くだもの]の中[なか]でりんごが{いちばん}好[す]きです。", "Parmi les fruits, c'est la pomme {que je préfère}."),
  aimyon("{一番[いちばん]}弱[よわ]い自分[じぶん]の影[かげ]",
    "l'ombre de moi {au plus} faible.", "空の青さを知る人よ", 2019,
    "一番 + adjectif = superlatif : 一番弱い = « le plus faible »."));
point("N5", "〜くなる / 〜になる", "« Devenir ». Adjectif en い → 〜くなる ; nom ou adjectif en な → 〜になる.",
  modele("{寒[さむ]くなりました}。", "Il {s'est mis à faire froid}."),
  modele("医者[いしゃ]{になりたい}です。", "Je veux {devenir} médecin."),
  aimyon("嫌[いや]{になった}の？",
    "Tu en {as eu assez}…", "3636", null,
    "嫌 (adjectif en な) + になる = « en venir à ne plus supporter »."));
point("N5", "〜から (raison)", "« Parce que ». La raison vient avant から.",
  modele("時間[じかん]がない{から}、タクシーで行[い]きます。", "{Comme} je n'ai pas le temps, j'y vais en taxi."),
  aimyon("恋[こい]をした{から}", "{Parce que} je suis tombée amoureuse.", "恋をしたから", 2019,
    "恋をした (je suis tombée amoureuse, passé en 〜た) + から (parce que)."));
point("N5", "〜が / 〜けど", "« Mais ». が est plus formel, けど plus familier.",
  modele("日本語[にほんご]は難[むずか]しいです{が}、面白[おもしろ]いです。", "Le japonais est difficile, {mais} intéressant."),
  aimyon("分[わ]かっていた{けれど}",
    "Je le savais bien, {pourtant}…", "炎曜日", null,
    "けれど est la forme longue de けど. La phrase s'arrête sur le « mais »."));
point("N5", "もう / まだ", "もう : « déjà » (ou « ne… plus » avec une négation). まだ : « encore » (ou « pas encore »).",
  modele("{もう}宿題[しゅくだい]をしました。", "J'ai {déjà} fait mes devoirs."),
  modele("{まだ}食[た]べていません。", "Je n'ai {pas encore} mangé."),
  aimyon("{もう}止[と]められない",
    "{Plus rien} ne m'arrête.", "おじゃまします", null,
    "もう + négation = « ne… plus »."));
point("N5", "〜でしょう", "Supposition polie (« probablement ») ou demande de confirmation.",
  modele("明日[あした]は雨[あめ]{でしょう}。", "Demain, il pleuvra {sans doute}."),
  aimyon("証拠[あかし]になる{でしょう}",
    "voilà ce que cela {prouvera}.", "あした世界が終わるとしても", 2019,
    "でしょう exprime une supposition : « sans doute ». D'après UtaTen, 証拠 se chante ici あかし et non しょうこ."));
point("N5", "〜つもり", "Verbe au dictionnaire + つもり : « avoir l'intention de… ».",
  modele("来週[らいしゅう]、国[くに]へ{帰[かえ]るつもり}です。", "{J'ai l'intention de rentrer} dans mon pays la semaine prochaine."),
  aimyon("いったいこのままいつまで 一人[ひとり]で{いるつもり}だろう", "Jusqu'à quand, au juste, {vais-je rester} seule ainsi ?", "裸の心", 2020,
    "いるつもり = « avoir l'intention de rester ». だろう ajoute une interrogation tournée vers soi : « je me demande… »."));
point("N5", "Proposition relative", "Un verbe placé devant un nom le décrit, sans pronom relatif (« qui », « que »).",
  modele("{昨日[きのう]買[か]った}本[ほん]は面白[おもしろ]いです。", "Le livre {que j'ai acheté hier} est intéressant."),
  aimyon("{空[そら]の青[あお]さを知[し]る}人[ひと]よ", "Ô toi {qui connais le bleu du ciel}.", "空の青さを知る人よ", 2019,
    "空の青さを知る (connaître le bleu du ciel) + 人 (personne) = « la personne qui connaît le bleu du ciel ». 青さ : voir la fiche 〜さ."),
  aimyon("黄昏[たそがれ]に{バカ話[ばなし]をした}{あの日[ひ]を思[おも]い出[だ]す}時[とき]を", "Ces instants {où me revient le jour} {où nous disions des bêtises} au crépuscule.", "黄昏にバカ話をしたあの日を思い出す時を", 2020,
    "Deux relatives emboîtées : [バカ話をした] あの日 (ce jour où l'on a dit des bêtises), puis [あの日を思い出す] 時 (le moment où je repense à ce jour)."));
point("N5", "〜ので", "« Comme », « parce que » : plus doux et objectif que から.",
  modele("頭[あたま]が痛[いた]い{ので}、早[はや]く帰[かえ]ります。", "{Comme} j'ai mal à la tête, je rentre tôt."));
point("N5", "〜と言う / 〜って", "Rapporter des paroles. って est la forme orale de と.",
  modele("彼[かれ]は明日[あした]来[く]る{と言[い]いました}。", "{Il a dit qu'}il viendrait demain."),
  aimyon("好[す]き{って言[い]って}よ", "{Dis-moi que} tu m'aimes.", "好きって言ってよ", null,
    "好きって言う = 好きと言う (« dire je t'aime »). 言ってよ : forme en て employée comme demande familière, renforcée par よ."));
point("N5", "〜んだ / 〜のだ", "Expliquer, souligner ou demander une explication. Poli : 〜んです.",
  modele("どうして遅[おく]れた{んです}か。", "{Comment se fait-il que} vous soyez arrivé en retard ?"),
  aimyon("生[い]きていた{んだ}よな", "Elle était {bien} vivante, n'est-ce pas.", "生きていたんだよな", 2016,
    "生きていた (« elle vivait ») devient 生きていたんだ (« elle vivait bel et bien »). よな, variante familière de よね, cherche l'assentiment : « hein ? »."));
point("N5", "〜だろう", "Supposition familière (« sans doute »). Forme neutre de でしょう.",
  modele("彼[かれ]はもう帰[かえ]った{だろう}。", "Il est {sans doute} déjà rentré."),
  aimyon("いつか溶[と]ける{だろう}か",
    "{fondront-ils} un jour ?", "ざらめ", null,
    "だろうか : on se pose la question à soi-même."));
point("N5", "〜たことがある", "Expérience passée : « il m'est déjà arrivé de… ».",
  modele("富士山[ふじさん]に{登[のぼ]ったことがあります}。", "{J'ai déjà gravi} le mont Fuji."),
  aimyon("自慢[じまん]できるほどの恋[こい]は{したことがない}けど",
    "{Je n'ai pas connu} d'amour dont je puisse être fière, mais…", "ハート", null,
    "したことがない = « ne l'avoir jamais fait ». ほど (N3) indique le degré : « au point de pouvoir s'en vanter »."));
point("N5", "〜ほうがいい", "Conseil : forme en た + ほうがいい (« tu ferais mieux de… ») ; négatif : 〜ないほうがいい.",
  modele("早[はや]く{寝[ね]たほうがいい}ですよ。", "{Vous feriez mieux de vous coucher} tôt."));
point("N5", "〜の / 〜こと (nominalisation)", "Transforme un verbe en nom : « le fait de… ».",
  modele("歌[うた]を{歌[うた]うのが}好[す]きです。", "J'aime {chanter}."),
  aimyon("涙[なみだ]が{でることは}解[わか]る",
    "{Que les larmes viennent}, je le comprends.", "さよならの今日に", 2020,
    "涙がでること = « le fait que les larmes coulent »."));
point("N5", "〜すぎる", "« Trop ». Base du verbe ou radical de l'adjectif + すぎる.",
  modele("昨日[きのう]は{食[た]べすぎました}。", "Hier, j'ai {trop mangé}."),
  aimyon("風[かぜ]の強[つよ]さがちょっと 心[こころ]を{揺[ゆ]さぶりすぎて}", "Le vent souffle un peu {trop} fort, il me chavire le cœur :", "マリーゴールド", 2018,
    "揺さぶります → 揺さぶりすぎる (« secouer trop »). La forme en て laisse la phrase en suspens. 強さ : voir la fiche 〜さ."));

// ---- Points ajoutés depuis Bunpro (phrases modèles seulement) ----
point("N5", "〜だ", "Copule neutre : « A est B » en style familier. S'emploie après un nom ou un adjectif en な, jamais après un adjectif en い.",
  modele("これは本[ほん]{だ}。", "C'{est} un livre."));
point("N5", "いい / よい", "Adjectif en い « bon, bien », irrégulier : ses autres formes partent de よ (よくない, よかった).",
  modele("今日[きょう]は天気[てんき]が{いい}です。", "Aujourd'hui, il fait {beau}."));
point("N5", "Verbes en る et en う", "Les deux groupes de verbes à la forme du dictionnaire, qui est aussi la forme neutre du présent : verbes en る (食べる) et verbes en う (書く, 飲む).",
  modele("毎朝[まいあさ]パンを{食[た]べる}。", "Je {mange} du pain tous les matins."));
point("N5", "〜の？ (question)", "の en fin de phrase forme une question familière qui demande une explication ou du contexte.",
  modele("どこに行[い]く{の}？", "Tu vas où, {dis} ?"));
point("N5", "する", "Verbe irrégulier « faire » ; accolé à un nom d'action, il en fait un verbe (勉強する).",
  modele("宿題[しゅくだい]を{します}。", "Je {fais} mes devoirs."));
point("N5", "来る", "Verbe irrégulier « venir » (来ます, 来ない, 来た).",
  modele("友達[ともだち]が家[いえ]に{来[き]ます}。", "Un ami {vient} chez moi."));
point("N5", "〜が嫌い", "« Ne pas aimer ». 嫌い est un adjectif en な malgré sa finale en い ; ce qu'on n'aime pas prend が.",
  modele("私[わたし]は魚[さかな]{が嫌[きら]い}です。", "Je {n'aime pas} le poisson."));
point("N5", "〜がある + nom", "Nom A + がある (ou のある) + nom B : « un B qui a A », « un B avec A ».",
  modele("庭[にわ]{がある}家[いえ]に住[す]みたいです。", "Je veux habiter une maison {avec} un jardin."));
point("N5", "〜なかった", "Passé négatif neutre : on remplace ない par なかった (食べなかった, 行かなかった).",
  modele("昨日[きのう]は何[なに]も{食[た]べなかった}。", "Hier, je {n'ai} rien {mangé}."));
point("N5", "誰", "Mot interrogatif « qui ».",
  modele("あの人[ひと]は{誰[だれ]}ですか。", "{Qui} est cette personne ?"),
  aimyon("{誰[だれ]}が予想[よそう]しましたか",
    "{qui} l'aurait prévue ?", "鯉", 2019,
    "誰 + が : « qui » en position de sujet."));
point("N5", "なぜ / どうして / なんで", "« Pourquoi ». なぜ est le plus formel, どうして courant, なんで familier.",
  modele("{どうして}日本語[にほんご]を勉強[べんきょう]していますか。", "{Pourquoi} étudiez-vous le japonais ?"),
  aimyon("ねえ? {どうして}そばに来[き]てくれないの",
    "Dis… {pourquoi} ne viens-tu pas près de moi ?", "貴方解剖純愛歌 ～死ね～", 2015,
    "どうして : le « pourquoi » courant."));
point("N5", "〜だった / 〜でした", "Passé de だ et de です : « était ». Ne s'emploie pas après un adjectif en い.",
  modele("昨日[きのう]は休[やす]み{でした}。", "Hier, c'{était} un jour de repos."));
point("N5", "〜じゃない / 〜じゃなかった", "Négation de だ après un nom ou un adjectif en な : « n'est pas », au passé « n'était pas ». Forme écrite : ではない.",
  modele("これは私[わたし]の傘[かさ]{じゃない}。", "Ce {n'est pas} mon parapluie."));
point("N5", "の (sujet d'une relative)", "Dans une proposition qui qualifie un nom, le sujet peut être marqué par の au lieu de が.",
  modele("母[はは]{の}作[つく]った料理[りょうり]はおいしい。", "Les plats {que} ma mère prépare sont délicieux."),
  aimyon("見[み]たこと{の}ない大地[だいち]を走[はし]る 走[はし]る",
    "je cours, je cours sur une terre {jamais} vue.", "マシマロ", 2020,
    "見たことのない : dans la relative, の marque こと à la place de が."));
point("N5", "の (nom sous-entendu)", "の remplace un nom déjà mentionné : « celui de… », « le mien ».",
  modele("この傘[かさ]は私[わたし]{の}です。", "Ce parapluie est {le mien}."));
point("N5", "けっこう", "Adverbe : « assez », « plutôt », « pas mal ». けっこうです sert aussi à refuser poliment.",
  modele("このケーキは{けっこう}おいしい。", "Ce gâteau est {plutôt} bon."));
point("N5", "たくさん", "« Beaucoup », « plein de ». S'emploie devant une phrase, ou devant un nom avec の.",
  modele("本[ほん]を{たくさん}読[よ]みました。", "J'ai lu {beaucoup} de livres."));
point("N5", "〜くらい (environ)", "Après un nombre ou une durée : « environ », « à peu près ». ぐらい est une variante équivalente.",
  modele("駅[えき]まで十分[じゅっぷん]{くらい}かかります。", "Il faut {environ} dix minutes jusqu'à la gare."));
point("N5", "〜まで (jusqu'à ce que)", "Verbe + まで : « jusqu'à ce que » quelque chose se produise.",
  modele("雨[あめ]が{止[や]むまで}待[ま]ちましょう。", "Attendons {jusqu'à ce que} la pluie {s'arrête}."),
  aimyon("眠[ねむ]たく{なるまで}遊[あそ]ぼう",
    "jouons {jusqu'à ce que} le sommeil nous gagne.", "君の夢を聞きながら、僕は笑えるアイデアを!", 2025,
    "Verbe + まで : « jusqu'à ce que » (眠たくなるまで)."));
point("N5", "〜にする", "Nom + にする : « choisir », « opter pour » ; aussi « faire de… quelque chose ».",
  modele("私[わたし]はコーヒー{にします}。", "Je {vais prendre} un café."));
point("N5", "何か / 何も", "何か : « quelque chose ». 何も + négation : « rien ».",
  modele("{何[なに]か}飲[の]みますか。", "Vous buvez {quelque chose} ?"),
  aimyon("僕[ぼく]らは{何[なに]も}見[み]えない",
    "un avenir dont nous ne voyons {rien} :", "ハルノヒ", 2019,
    "何も + négation (見えない) : « rien »."));
point("N5", "誰か / どこか / 誰も / どこも", "Mot interrogatif + か : « quelqu'un », « quelque part ». Mot interrogatif + も + négation : « personne », « nulle part ».",
  modele("教室[きょうしつ]に{誰[だれ]も}いません。", "Il n'y a {personne} dans la salle de classe."),
  aimyon("もうバレンタイン {誰[だれ]か}にあげたい",
    "Déjà la Saint-Valentin : j'aimerais en offrir à {quelqu'un}.", "私に彼氏ができない理由", 2015,
    "誰 + か : « quelqu'un »."));
point("N5", "〜ましょうか", "« Voulez-vous que je… ? », « on… ? » : proposer son aide ou une action commune.",
  modele("窓[まど]を{開[あ]けましょうか}。", "{Voulez-vous que j'ouvre} la fenêtre ?"));
point("N5", "〜くて / 〜で (relier des adjectifs)", "Pour enchaîner des adjectifs ou des noms : adjectif en い → 〜くて ; adjectif en な ou nom → 〜で. « … et … ».",
  modele("この部屋[へや]は{広[ひろ]くて}明[あか]るいです。", "Cette pièce est {grande et} lumineuse."));
point("N5", "Adjectif + のは", "Adjectif + の : « celui qui est… », « ce qui est… ». の remplace un nom que l'on ne répète pas.",
  modele("{大[おお]きいのは}私[わたし]のです。", "{Le grand}, c'est le mien."));
point("N5", "あげる / くれる / もらう", "Donner et recevoir : あげる (je donne, on donne à un autre), くれる (on me donne), もらう (je reçois). Avec あげる et くれる, に marque celui qui reçoit ; avec もらう, に ou から marque celui qui donne.",
  modele("友達[ともだち]に本[ほん]を{あげました}。", "J'{ai donné} un livre à un ami."),
  aimyon("もうバレンタイン 誰[だれ]かに{あげたい}",
    "Déjà la Saint-Valentin : j'aimerais en {offrir} à quelqu'un.", "私に彼氏ができない理由", 2015,
    "あげる : donner à quelqu'un d'autre ; ici avec たい."));
