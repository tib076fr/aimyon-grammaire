// ===================== NIVEAU N5 =====================

// --- Particules ---
point("N5", "〜です", "Verbe « être » poli, placé en fin de phrase.",
  modele("私[わたし]は学生[がくせい]{です}。", "Je suis étudiant."),
  aimyon("人[ひと]になれない人[ひと]{です}",
    "Je suis quelqu'un qui n'arrive pas à devenir quelqu'un.", "インタビュー", null,
    "人です = « je suis une personne ». 人になれない (qui ne peut pas devenir quelqu'un) est une proposition relative placée devant 人."));
point("N5", "は", "Marque le thème de la phrase : « quant à… ». Se prononce « wa ».",
  modele("今日[きょう]{は}暑[あつ]いです。", "Aujourd'hui, il fait chaud."),
  aimyon("私[わたし]{は}朝[あさ]が嫌[きら]い",
    "Moi, je déteste le matin.", "朝が嫌い", null,
    "は pose le thème (« moi »), が marque ce qui est détesté : la structure « A は B が 嫌い / 好き »."));
point("N5", "が", "Marque le sujet, souvent une information nouvelle ou mise en avant.",
  modele("雨[あめ]{が}降[ふ]っています。", "Il pleut."),
  aimyon("それだけ{が}心配[しんぱい]",
    "C'est la seule chose qui m'inquiète.", "from 四階の角部屋", null,
    "が met en avant le sujet : « c'est cela, et rien d'autre, qui m'inquiète »."));
point("N5", "を", "Marque l'objet direct du verbe. Se prononce « o ».",
  modele("水[みず]{を}飲[の]みます。", "Je bois de l'eau."),
  aimyon("今[いま]{を}生[い]きる",
    "Vivre le présent.", "いつまでも", null,
    "今 (maintenant) est l'objet de 生きる : littéralement « vivre le maintenant »."));
point("N5", "に (lieu, temps, destinataire)", "Indique le moment précis, la destination, le lieu d'existence ou le destinataire.",
  modele("七時[しちじ]{に}起[お]きます。", "Je me lève à sept heures."),
  modele("友達[ともだち]{に}手紙[てがみ]を書[か]きます。", "J'écris une lettre à un ami."),
  aimyon("空[そら]飛[と]ぶ気球[ききゅう]{に}乗[の]りたいの？",
    "Tu veux monter dans une montgolfière ?", "彼氏有無", null,
    "に marque l'endroit où l'on monte : 〜に乗る."));
point("N5", "へ", "Indique la direction d'un déplacement. Se prononce « e ».",
  modele("日本[にほん]{へ}行[い]きます。", "Je vais au Japon."),
  aimyon("香[かお]りを買[か]いに渋谷[しぶや]{へ}",
    "À Shibuya, pour acheter un parfum.", "ポプリの葉", null,
    "へ indique la direction ; le verbe « aller » est sous-entendu. 買いに (N5) exprime le but du déplacement."));
point("N5", "で", "Indique le lieu d'une action, ou le moyen utilisé.",
  modele("図書館[としょかん]{で}勉強[べんきょう]します。", "J'étudie à la bibliothèque."),
  modele("電車[でんしゃ]{で}行[い]きます。", "J'y vais en train."),
  aimyon("耳元[みみもと]{で}囁[ささや]かれる",
    "On me chuchote à l'oreille.", "強くなっちゃったんだ、ブルー", null,
    "で marque le lieu où se passe l'action. 囁かれる est le passif (N4) de 囁く."));
point("N5", "と", "« Et » entre deux noms (liste complète), ou « avec » quelqu'un.",
  modele("友達[ともだち]{と}映画[えいが]を見[み]ます。", "Je regarde un film avec un ami."),
  aimyon("君[きみ]{と}過[す]ごしたい",
    "Je veux passer du temps avec toi.", "GOOD NIGHT BABY", null,
    "君と = « avec toi ». 過ごしたい : forme en 〜たい de 過ごす."));
point("N5", "も", "« Aussi ». Remplace は, が ou を.",
  modele("私[わたし]{も}行[い]きます。", "Moi aussi, j'y vais."),
  aimyon("今日[きょう]{も}芸術[げいじゅつ]だ",
    "Aujourd'hui aussi, c'est de l'art.", "今日の芸術", null,
    "も remplace は : « aujourd'hui aussi »."));
point("N5", "の", "Relie deux noms : « A の B » = « le B de A » (possession, appartenance, description).",
  modele("これは私[わたし]{の}本[ほん]です。", "C'est mon livre."),
  aimyon("麦[むぎ]わら{の}帽子[ぼうし]{の}君[きみ]が 揺[ゆ]れたマリーゴールドに似[に]てる",
    "Toi, avec ton chapeau de paille, tu ressembles à un souci qui se balance.", "マリーゴールド", 2018,
    "Deux の s'enchaînent : 麦わらの帽子 (un chapeau de paille), puis 麦わらの帽子の君 (toi au chapeau de paille)."));
point("N5", "か", "Placé en fin de phrase, forme une question. Entre deux noms : « ou ».",
  modele("これは何[なん]です{か}。", "Qu'est-ce que c'est ?"),
  aimyon("何[なに]が分[わ]かるの{か}",
    "Qu'est-ce que tu peux bien y comprendre ?", "リズム64", null,
    "のか en fin de phrase : question familière, souvent rhétorique."));
point("N5", "や", "« Et » entre des noms, pour une liste non exhaustive (« entre autres »).",
  modele("パン{や}卵[たまご]を買[か]いました。", "J'ai acheté du pain, des œufs, etc."),
  aimyon("悲壮感[ひそうかん]{や}憂鬱[ゆううつ]も",
    "Le tragique, la mélancolie, tout cela aussi…", "スーパーガール", null,
    "や relie deux noms pris comme exemples parmi d'autres."));
point("N5", "〜から〜まで", "« De… à… », « depuis… jusqu'à… » (lieu ou temps).",
  modele("九時[くじ]{から}五時[ごじ]{まで}働[はたら]きます。", "Je travaille de neuf heures à cinq heures."),
  aimyon("愛[あい]を知[し]る{まで}は", "Jusqu'à ce que je connaisse l'amour.", "愛を知るまでは", 2021,
    "まで s'emploie aussi après un verbe : 知るまで = « jusqu'à ce que je connaisse ». Le は final insiste : « du moins jusque-là »."));
point("N5", "ね / よ", "Particules de fin de phrase : ね cherche l'accord (« n'est-ce pas ? »), よ affirme ou informe.",
  modele("いい天気[てんき]です{ね}。", "Il fait beau, n'est-ce pas ?"),
  modele("この店[みせ]は安[やす]いです{よ}。", "Ce magasin n'est pas cher, vous savez."),
  aimyon("楽[たの]しかった{ね}",
    "C'était bien, hein.", "スケッチ", null,
    "ね cherche l'accord de l'autre. 楽しかった : passé de l'adjectif 楽しい."));
point("N5", "だけ", "« Seulement », « juste ».",
  modele("一[ひと]つ{だけ}ください。", "Donnez-m'en un seul, s'il vous plaît."),
  aimyon("桜[さくら]{だけ}でいい",
    "…il suffit que ce soient les cerisiers.", "桜が降る夜は", null,
    "だけでいい = « rien que… suffit »."));
point("N5", "こ・そ・あ・ど", "Démonstratifs : これ (ceci, près de moi), それ (cela, près de toi), あれ (là-bas), どれ (lequel). Même logique pour この, ここ, etc.",
  modele("{それ}は私[わたし]の傘[かさ]です。", "Ça, c'est mon parapluie."),
  aimyon("{それ}がいい",
    "C'est ça que je veux.", "テレパしい", null,
    "それ renvoie à ce que l'interlocuteur vient d'évoquer ; が le désigne comme le bon choix."));

// --- Verbes ---
point("N5", "〜ます / 〜ません", "Forme polie du verbe au présent/futur, affirmative et négative.",
  modele("毎日[まいにち]日本語[にほんご]を{勉強[べんきょう]します}。", "J'étudie le japonais tous les jours."),
  modele("お酒[さけ]は{飲[の]みません}。", "Je ne bois pas d'alcool."),
  aimyon("私[わたし] 今日[きょう]も{待[ま]っています}",
    "Moi, aujourd'hui encore, j'attends.", "ユラユラ", null,
    "待っています : forme en 〜ている à la politesse en 〜ます."));
point("N5", "〜ました / 〜ませんでした", "Forme polie au passé, affirmative et négative.",
  modele("昨日[きのう]映画[えいが]を{見[み]ました}。", "Hier, j'ai regardé un film."),
  aimyon("{強[つよ]がりました}", "J'ai fait la forte.", "強がりました", null,
    "強がる (faire semblant d'être fort) → 強がります → 強がりました au passé poli."));
point("N5", "〜ない", "Forme négative familière. Verbes en -u : la finale passe en -a + ない (聴く → 聴かない). Verbes en -ru : 食べる → 食べない.",
  modele("今日[きょう]は学校[がっこう]に{行[い]かない}。", "Aujourd'hui, je ne vais pas à l'école."),
  aimyon("君[きみ]はロックを{聴[き]かない}", "Toi, tu n'écoutes pas de rock.", "君はロックを聴かない", 2017,
    "聴く → 聴かない. Remarquez aussi は (le thème : « toi ») et を (l'objet : « le rock »)."));
point("N5", "〜た", "Forme passée familière. Se construit comme la forme en て (食べる → 食べた, 飲む → 飲んだ).",
  modele("朝[あさ]ごはんを{食[た]べた}。", "J'ai pris mon petit-déjeuner."),
  aimyon("甘[あま]い{香[かお]りした}",
    "Ça sentait le sucré.", "おばけがでるぞ", null,
    "する → した au passé. 香り(が)した : la particule が est omise, comme souvent à l'oral."));
point("N5", "〜て (enchaînement)", "La forme en て relie des actions successives : « … et puis… ».",
  modele("朝[あさ]{起[お]きて}、顔[かお]を洗[あら]います。", "Le matin, je me lève et je me lave le visage."),
  aimyon("{愛[あい]されて} 愛[あい]してみたい",
    "Être aimée, et essayer d'aimer à mon tour.", "朝陽", null,
    "La forme en て relie les deux actions. 愛される est un passif (N4), 〜てみたい = « vouloir essayer de »."));
point("N5", "〜ている", "Action en cours (« être en train de ») ou état qui dure.",
  modele("今[いま]、本[ほん]を{読[よ]んでいます}。", "En ce moment, je lis un livre."),
  aimyon("初恋[はつこい]が{泣[な]いている}", "Mon premier amour est en train de pleurer.", "初恋が泣いている", 2022,
    "泣く → 泣いて + いる : l'action de pleurer est en cours."));
point("N5", "〜てください", "Demander poliment à quelqu'un de faire quelque chose.",
  modele("ここに名前[なまえ]を{書[か]いてください}。", "Écrivez votre nom ici, s'il vous plaît."),
  aimyon("「危[あぶ]ないですから{離[はな]れてください}」",
    "C'est dangereux, veuillez vous écarter.", "生きていたんだよな", 2016,
    "離れる → 離れてください. から donne la raison : « parce que c'est dangereux »."));
point("N5", "〜ないでください", "Demander poliment de ne pas faire quelque chose.",
  modele("ここで写真[しゃしん]を{撮[と]らないでください}。", "Ne prenez pas de photos ici, s'il vous plaît."),
  aimyon("ずっと{忘[わす]れないで}",
    "Ne m'oublie jamais.", "双葉", null,
    "Version familière : ください est omis, 〜ないで suffit."));
point("N5", "〜てもいい", "Permission : « on peut… », « puis-je… ? ».",
  modele("窓[まど]を{開[あ]けてもいい}ですか。", "Puis-je ouvrir la fenêtre ?"),
  aimyon("あのプレゼント{開[あ]けてもいい}からね",
    "Tu peux ouvrir ce cadeau, tu sais.", "プレゼント", null,
    "開ける → 開けてもいい = « tu peux ouvrir »."));
point("N5", "〜てはいけない", "Interdiction : « il ne faut pas… ».",
  modele("ここでたばこを{吸[す]ってはいけません}。", "Il ne faut pas fumer ici."));
point("N5", "〜たい", "Exprimer ce que l'on veut faire : on remplace ます par たい.",
  modele("日本[にほん]に{行[い]きたい}です。", "Je veux aller au Japon."),
  aimyon("愛[あい]を{伝[つた]えたい}だとか", "Vouloir dire mon amour, ou quelque chose comme ça.", "愛を伝えたいだとか", 2017,
    "伝えます → 伝えたい. だとか, à la fin, ajoute un flou : « … ou quelque chose comme ça »."));
point("N5", "〜ましょう", "Proposer de faire quelque chose ensemble : « faisons… ».",
  modele("一緒[いっしょ]に{帰[かえ]りましょう}。", "Rentrons ensemble."),
  aimyon("涙[なみだ]を{流[なが]しましょう}",
    "Versons des larmes.", "姿", null,
    "流します → 流しましょう : invitation à faire ensemble."));
point("N5", "〜ませんか", "Inviter poliment : « ne voudriez-vous pas… ? ».",
  modele("コーヒーを{飲[の]みませんか}。", "Vous ne voudriez pas boire un café ?"));
point("N5", "〜に行く / 〜に来る", "Base du verbe (sans ます) + に行く : « aller faire quelque chose ».",
  modele("映画[えいが]を{見[み]に行[い]きます}。", "Je vais voir un film."),
  aimyon("{会[あ]いに行[い]く}のに", "Alors que j'irais bien te voir…", "会いに行くのに", 2024,
    "会います → 会い + に行く = « aller voir (quelqu'un) ». のに final (N4) exprime un regret : « et pourtant… »."));
point("N5", "〜がある / 〜がいる", "« Il y a ». ある pour les choses, いる pour les êtres vivants.",
  modele("公園[こうえん]に猫[ねこ]{がいます}。", "Il y a un chat dans le parc."),
  aimyon("魔法[まほう]{がある}よ",
    "Il y a de la magie, tu sais.", "葵", null,
    "魔法 est une chose : on emploie ある."));
point("N5", "〜前に", "« Avant de… ». Verbe au dictionnaire + 前に, ou nom + の前に.",
  modele("{寝[ね]る前[まえ]に}本[ほん]を読[よ]みます。", "Je lis avant de dormir."),
  aimyon("あなたが部屋[へや]に{来[く]る前[まえ]に}",
    "Avant que tu ne viennes dans ma chambre.", "いいことしましょ", null,
    "Le verbe reste à la forme du dictionnaire devant 前に, même pour une action future ou passée."));
point("N5", "〜てから", "« Après avoir fait… ».",
  modele("手[て]を{洗[あら]ってから}食[た]べます。", "Je mange après m'être lavé les mains."),
  aimyon("でも、ふたり{結[むす]ばれてから}",
    "Mais depuis que nous sommes unis…", "ハート", null,
    "結ばれる (être uni, passif) → 結ばれてから = « après avoir été unis »."));
point("N5", "〜たり〜たりする", "Citer quelques actions parmi d'autres : « faire des choses comme… ».",
  modele("週末[しゅうまつ]は本[ほん]を{読[よ]んだり}、音楽[おんがく]を{聞[き]いたり}します。", "Le week-end, je lis, j'écoute de la musique, etc."),
  aimyon("ヤキモチ{焼[や]いたり} キス{したり}",
    "Être jalouse, s'embrasser…", "漂白", null,
    "Deux actions citées en exemple ; le する final est sous-entendu."));
point("N5", "〜なければならない", "Obligation : « il faut… », « je dois… ». Variante orale : 〜なきゃ.",
  modele("薬[くすり]を{飲[の]まなければなりません}。", "Je dois prendre mon médicament."),
  aimyon("{許[ゆる]していかなきゃ}",
    "Il faut que j'apprenne à pardonner.", "さながらロンリー", null,
    "なきゃ est la contraction orale de なければ(ならない). 〜ていく indique une action qui se poursuit vers l'avenir."));
point("N5", "〜なくてもいい", "Absence d'obligation : « ce n'est pas la peine de… ».",
  modele("明日[あした]は{来[こ]なくてもいい}です。", "Vous n'avez pas besoin de venir demain."),
  aimyon("何[なに]も{描[か]かなくてもいい}",
    "Pas besoin de dessiner quoi que ce soit.", "今日の芸術", null,
    "描く → 描かない → 描かなくてもいい."));

// --- Adjectifs et comparaison ---
point("N5", "Adjectifs en い", "Se placent devant le nom ou en fin de phrase. Négatif : 〜くない. Passé : 〜かった.",
  modele("この本[ほん]は{面白[おもしろ]い}です。", "Ce livre est intéressant."),
  modele("昨日[きのう]は{寒[さむ]くなかった}です。", "Hier, il ne faisait pas froid."),
  aimyon("{痛[いた]い}{痛[いた]い}{痛[いた]い}",
    "Ça fait mal, mal, mal.", "朝陽", null,
    "痛い, adjectif en い, forme une phrase à lui seul. Jeu de mots avec la ligne d'avant : 逢いたい (je veux te voir) contient « itai »."));
point("N5", "Adjectifs en な", "Prennent な devant un nom. Négatif : 〜じゃない. Passé : 〜だった / 〜でした.",
  modele("ここは{静[しず]かな}町[まち]です。", "C'est une ville calme."),
  aimyon("{好[す]きな}人[ひと]の唇[くちびる]奪[うば]う",
    "Voler un baiser à la personne que j'aime.", "どうせ死ぬなら", null,
    "好き est un adjectif en な : 好きな人 = « la personne que j'aime »."));
point("N5", "〜が好き / 〜が上手", "Ce qu'on aime ou sait bien faire se marque avec が (et non を).",
  modele("私[わたし]は音楽[おんがく]{が好[す]き}です。", "J'aime la musique."),
  aimyon("君[きみ]{が好[す]き}だ",
    "Je t'aime.", "GOOD NIGHT BABY", null,
    "La personne aimée est marquée par が, pas par を."));
point("N5", "〜がほしい", "Vouloir quelque chose (un objet).",
  modele("新[あたら]しいかばん{がほしい}です。", "Je voudrais un nouveau sac."),
  aimyon("赤[あか]いあの風船[ふうせん]{が欲[ほ]しい}の？",
    "Tu veux ce ballon rouge ?", "彼氏有無", null,
    "L'objet désiré prend が. の final : question familière."));
point("N5", "〜より / 〜のほうが", "Comparaison : « A は B より… » (A est plus… que B), « A のほうが… » (c'est A qui est le plus…).",
  modele("電車[でんしゃ]はバス{より}速[はや]いです。", "Le train est plus rapide que le bus."),
  aimyon("寝癖[ねぐせ]がある君[きみ]{の方[ほう]が}",
    "Toi, avec tes cheveux en bataille au réveil, c'est toi que…", "あのね", null,
    "〜の方が désigne celui des deux que l'on préfère ; la phrase reste en suspens."));
point("N5", "いちばん", "Superlatif : « le plus… ».",
  modele("果物[くだもの]の中[なか]でりんごが{いちばん}好[す]きです。", "Parmi les fruits, c'est la pomme que je préfère."),
  aimyon("{一番[いちばん]}弱[よわ]い自分[じぶん]の影[かげ]",
    "L'ombre de mon moi le plus faible.", "空の青さを知る人よ", 2019,
    "一番 + adjectif = superlatif : 一番弱い = « le plus faible »."));
point("N5", "〜くなる / 〜になる", "« Devenir ». Adjectif en い → 〜くなる ; nom ou adjectif en な → 〜になる.",
  modele("{寒[さむ]くなりました}。", "Il s'est mis à faire froid."),
  modele("医者[いしゃ]{になりたい}です。", "Je veux devenir médecin."),
  aimyon("嫌[いや]{になった}の？",
    "Tu en as eu assez ?", "3636", null,
    "嫌 (adjectif en な) + になる = « en venir à ne plus supporter »."));

// --- Relier les phrases ---
point("N5", "〜から (raison)", "« Parce que ». La raison vient avant から.",
  modele("時間[じかん]がない{から}、タクシーで行[い]きます。", "Comme je n'ai pas le temps, j'y vais en taxi."),
  aimyon("恋[こい]をした{から}", "Parce que je suis tombée amoureuse.", "恋をしたから", 2019,
    "恋をした (je suis tombée amoureuse, passé en 〜た) + から (parce que)."));
point("N5", "〜が / 〜けど", "« Mais ». が est plus formel, けど plus familier.",
  modele("日本語[にほんご]は難[むずか]しいです{が}、面白[おもしろ]いです。", "Le japonais est difficile, mais intéressant."),
  aimyon("分[わ]かっていた{けれど}",
    "Je le savais bien, pourtant…", "炎曜日", null,
    "けれど est la forme longue de けど. La phrase s'arrête sur le « mais »."));
point("N5", "〜とき", "« Quand », « au moment où ».",
  modele("子供[こども]{のとき}、よく海[うみ]で泳[およ]ぎました。", "Quand j'étais enfant, je nageais souvent dans la mer."),
  aimyon("私[わたし]笑[わら]える{時[とき]}は笑[わら]ってたい",
    "Quand je peux rire, je veux rire.", "ねむい", null,
    "笑える時 = « les moments où je peux rire » (potentiel de 笑う). 笑ってたい = 笑っていたい."));
point("N5", "もう / まだ", "もう : « déjà » (ou « ne… plus » avec une négation). まだ : « encore » (ou « pas encore »).",
  modele("{もう}宿題[しゅくだい]をしました。", "J'ai déjà fait mes devoirs."),
  modele("{まだ}食[た]べていません。", "Je n'ai pas encore mangé."),
  aimyon("{もう}止[と]められない",
    "Je ne peux plus m'arrêter.", "おじゃまします", null,
    "もう + négation = « ne… plus »."));
point("N5", "〜でしょう", "Supposition polie (« probablement ») ou demande de confirmation.",
  modele("明日[あした]は雨[あめ]{でしょう}。", "Demain, il pleuvra sans doute."),
  aimyon("証拠[しょうこ]になる{でしょう}",
    "Ce sera sans doute une preuve.", "あした世界が終わるとしても", 2019,
    "でしょう exprime une supposition : « sans doute »."));
