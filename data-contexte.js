// ============================================================
//  LE CONTEXTE des extraits de chansons : la ligne d'avant et la ligne
//  d'après, pour mieux comprendre la phrase citée.
//  Clé : "titre de la chanson|ligne citée" (sans lectures ni espaces).
// ============================================================

const CONTEXTE = {
  "インタビュー|人になれない人です": {
    avant: { japonais: "カッコ、わらい", traduction: "(Rires, entre parenthèses.)" },
    apres: { japonais: "嘘[うそ]がないのも嘘[うそ]です", traduction: "Et l'absence de mensonge est elle-même un mensonge." }
  },
  "朝が嫌い|私は朝が嫌い": {
    avant: { japonais: "夜[よる]になっても側[そば]にいてほしい", traduction: "Même quand tombe la nuit, reste près de moi." },
    apres: { japonais: "知[し]らない間[あいだ]にいなくなっても", traduction: "Même si tu t'éclipses sans que je m'en aperçoive…" }
  },
  "from 四階の角部屋|それだけが心配": {
    avant: { japonais: "失敗[しっぱい]が1回[いっかい]", traduction: "Un seul faux pas :" },
    apres: { japonais: "from 四階[よんかい]の角部屋[かどべや]", traduction: "Depuis la chambre d'angle, au quatrième." }
  },
  "いつまでも|今を生きる": {
    avant: { japonais: "それなりの生活[せいかつ]やありきたりなごまかし方[かた]で", traduction: "Avec une vie tout juste convenable et des faux-fuyants ordinaires," },
    apres: { japonais: "クソみたいな歌[うた]だと貶[けな]してくれよ", traduction: "Traite-la donc de chanson de merde." }
  },
  "彼氏有無|空飛ぶ気球に乗りたいの？": {
    avant: { japonais: "台湾旅行[たいわんりょこう]？ブランドの服[ふく]？", traduction: "Un voyage à Taïwan ? Des vêtements de marque ?" },
    apres: { japonais: "って聞[き]くと また君[きみ]は", traduction: "Je te le demande, et toi, une fois encore…" }
  },
  "彼氏有無|赤いあの風船が欲しいの？": {
    avant: { japonais: "ソフトクリーム？ぬいぐるみ？", traduction: "Une glace à l'italienne ? Une peluche ?" },
    apres: { japonais: "って聞[き]くと また君[きみ]は", traduction: "Je te le demande, et toi, une fois encore…" }
  },
  "ポプリの葉|香りを買いに渋谷へ": {
    avant: { japonais: "結局[けっきょく]忘[わす]れられなかった", traduction: "Au bout du compte, je n'ai pas su oublier." },
    apres: { japonais: "簡単[かんたん]に自分[じぶん]の香[かお]りを", traduction: "Mon propre parfum, si aisément…" }
  },
  "ポプリの葉|この香りにたどり着くまでに": {
    avant: { japonais: "お店[みせ]に入[はい]るのもいいね", traduction: "Pousser la porte de la boutique, ce n'est pas mal non plus." },
    apres: { japonais: "本当[ほんとう]に色々[いろいろ]あったな", traduction: "il s'en est passé, des choses." }
  },
  "強くなっちゃったんだ、ブルー|耳元で囁かれる": {
    apres: { japonais: "「君[きみ]は魅力的[みりょくてき]なんだよ」って", traduction: "« Tu sais que tu es séduisante. »" }
  },
  "GOOD NIGHT BABY|君と過ごしたい": {
    avant: { japonais: "夢[ゆめ]ばかりの今[いま]をとりあえず", traduction: "Ce présent tout tissé de rêves, pour l'instant," },
    apres: { japonais: "ほら もう君[きみ]の横顔[よこがお]が", traduction: "Regarde, déjà ton profil…" }
  },
  "GOOD NIGHT BABY|君が好きだ": {
    avant: { japonais: "愛[いと]しい人[ひと]だと強[つよ]く頷[うなず]いた", traduction: "« C'est l'être que je chéris », ai-je acquiescé de toutes mes forces." },
    apres: { japonais: "これからの僕[ぼく]らの未来[みらい]に", traduction: "À l'avenir qui nous attend…" }
  },
  "今日の芸術|今日も芸術だ": {
    avant: { japonais: "花束[はなたば]を持[も]たせてやれ", traduction: "Qu'on lui mette un bouquet dans les bras." },
    apres: { japonais: "期待[きたい]なんてしてないさ", traduction: "Je n'en attends rien, va." }
  },
  "今日の芸術|何も描かなくてもいい": {
    avant: { japonais: "目[め]の前[まえ]にあるキャンパスに", traduction: "Sur la toile posée devant toi," },
    apres: { japonais: "それも芸術[げいじゅつ]だ", traduction: "Cela aussi, c'est de l'art." }
  },
  "マリーゴールド|麦わらの帽子の君が揺れたマリーゴールドに似てる": {
    avant: { japonais: "幸[しあわ]せだ", traduction: "Quel bonheur." },
    apres: { japonais: "あれは空[そら]がまだ青[あお]い夏[なつ]のこと", traduction: "C'était un été où le ciel était encore bleu." }
  },
  "マリーゴールド|風の強さがちょっと心を揺さぶりすぎて": {
    apres: { japonais: "真面目[まじめ]に見[み]つめた", traduction: "et je t'ai regardée, gravement." }
  },
  "リズム64|何が分かるのか": {
    avant: { japonais: "あんたは誰[だれ]なの？", traduction: "Et toi, tu es qui ?" },
    apres: { japonais: "インチキなんだよ", traduction: "Tout ça, c'est du toc." }
  },
  "スーパーガール|悲壮感や憂鬱も": {
    avant: { japonais: "僕[ぼく]は矛盾[むじゅん]と理屈[りくつ]で君[きみ]を締[し]め付[つ]けている", traduction: "Je t'enserre dans mes contradictions et mes raisonnements." },
    apres: { japonais: "君[きみ]の身体[からだ]の中[なか]へ押[お]し込[こ]んでしまう僕[ぼく]だよ", traduction: "c'est moi qui les enfonce au creux de ton corps." }
  },
  "スケッチ|楽しかったね": {
    apres: { japonais: "また うたた寝[ね]", traduction: "Et encore un petit somme." }
  },
  "桜が降る夜は|桜だけでいい": {
    avant: { japonais: "新[あたら]しい色[いろ]に染[そ]まるのは", traduction: "Qu'une couleur nouvelle vienne teinter…" },
    apres: { japonais: "だけど", traduction: "Et pourtant…" }
  },
  "桜が降る夜は|今伝えるべきなのか": {
    avant: { japonais: "心[こころ]から思[おも]うこと", traduction: "Ce que je pense du fond du cœur," },
    apres: { japonais: "考[かんが]えている間[ま]に春[はる]は終[お]わる", traduction: "Le temps d'y songer, le printemps s'en va." }
  },
  "テレパしい|それがいい": {
    avant: { japonais: "抱[だ]きしめて分[わ]かり合[あ]えるなら", traduction: "Si, en nous serrant dans les bras, on pouvait se comprendre," },
    apres: { japonais: "もしも2人[ふたり]がディスティニーだったら", traduction: "Si nous deux, c'était le destin…" }
  },
  "テレパしい|ぶつかり合う日々をやめよう": {
    avant: { japonais: "やぶれかぶれになって", traduction: "À bout, prêts à tout envoyer promener," },
    apres: { japonais: "もしも2人[ふたり]がディスティニーだったら", traduction: "Si nous deux, c'était le destin…" }
  },
  "ユラユラ|私今日も待っています": {
    avant: { japonais: "ユラユラ 揺[ゆ]れる月[つき]を見[み]ながら", traduction: "Les yeux sur la lune qui tremble, tremble," },
    apres: { japonais: "これが本当[ほんとう]の恋[こい]じゃなくとも", traduction: "Même si ce n'est pas le véritable amour." }
  },
  "ユラユラ|会えば会うほどに": {
    avant: { japonais: "常々[つねづね]言[い]って欲[ほ]しくなったよ", traduction: "J'en suis venue à vouloir te l'entendre dire sans cesse." },
    apres: { japonais: "悲[かな]しくなって", traduction: "plus la tristesse me gagne." }
  },
  "おばけがでるぞ|甘い香りした": {
    avant: { japonais: "おばけがでるぞ", traduction: "Un fantôme va surgir !" },
    apres: { japonais: "てあし みえる", traduction: "On voit des mains, des pieds." }
  },
  "朝陽|愛されて愛してみたい": {
    avant: { japonais: "愛[あい]されたい 愛[あい]されてみたい", traduction: "Je veux être aimée, je voudrais y goûter." },
    apres: { japonais: "「終電[しゅうでん]逃[のが]して何[なん]のつもり？」", traduction: "« Tu rates le dernier train : c'est quoi, ton idée ? »" }
  },
  "朝陽|痛い痛い痛い": {
    avant: { japonais: "ただまだ逢[あ]いたい", traduction: "Seulement, je veux encore te voir." },
    apres: { japonais: "あの感触[かんしょく]をまだ確[たし]かめて痛[いた]い", traduction: "Cette sensation, je la cherche encore, et j'en ai mal." }
  },
  "生きていたんだよな|危ないですから離れてください": {
    avant: { japonais: "たちまちここらはネットの餌食[えじき]", traduction: "En un rien de temps, les lieux sont la proie d'Internet." },
    apres: { japonais: "そのセリフが集合[しゅうごう]の合図[あいず]なのにな", traduction: "Alors que ces mots-là sont justement le signal du rassemblement." }
  },
  "双葉|ずっと忘れないで": {
    avant: { japonais: "幸[しあわ]せ、って今[いま]思[おも]ったよ", traduction: "« Quel bonheur », ai-je pensé à l'instant." },
    apres: { japonais: "胸[むね]の中[なか]に落[お]ちて", traduction: "Que cela se dépose au creux du cœur…" }
  },
  "プレゼント|あのプレゼント開けてもいいからね": {
    avant: { japonais: "弱[よわ]ったなら 参[まい]ったなら", traduction: "Si tu faiblis, si tu n'en peux plus," },
    apres: { japonais: "あなたのためだから", traduction: "Il est là pour toi." }
  },
  "姿|涙を流しましょう": {
    avant: { japonais: "傷[きず]つけあってゆこう", traduction: "Continuons à nous blesser l'un l'autre." },
    apres: { japonais: "お互[たが]いを抱[だ]きしめて", traduction: "Serrés l'un contre l'autre." }
  },
  "姿|ふたりだけにしか分からない話がしたい": {
    avant: { japonais: "いつまでも そう いつまでも", traduction: "Pour toujours, oui, pour toujours," },
    apres: { japonais: "これからも そう これからも", traduction: "Demain encore, oui, demain encore." }
  },
  "葵|魔法があるよ": {
    avant: { japonais: "独特[どくとく]の世界[せかい]を呼[よ]び起[お]こす", traduction: "Elle réveille un monde à nul autre pareil :" },
    apres: { japonais: "サヨナラ いつかの少年[しょうねん]の影[かげ]よ", traduction: "Adieu, ombre du garçon d'autrefois." }
  },
  "葵|涙さえも味方に": {
    avant: { japonais: "潜[もぐ]らせて 包[つつ]み込[こ]んで", traduction: "Plonge-les, enveloppe-les," },
    apres: { japonais: "きっと僕[ぼく]たちが創造[そうぞう]した未来[みらい]は", traduction: "L'avenir que nous avons inventé, sûrement…" }
  },
  "いいことしましょ|あなたが部屋に来る前に": {
    avant: { japonais: "いいことしましょ いいことしましょ", traduction: "Faisons-nous du bien, faisons-nous du bien." },
    apres: { japonais: "片付[かたづ]けをしてスペースを作[つく]る", traduction: "je range, je fais de la place." }
  },
  "いいことしましょ|あなたこそ期待してるじゃん": {
    avant: { japonais: "何[なに]を意味[いみ]する わかってるでしょ", traduction: "Ce que ça veut dire, tu le sais bien." },
    apres: { japonais: "隠[かく]しても気持[きも]ち膨[ふく]れ上[あ]がってる", traduction: "Tu as beau le cacher, ton envie déborde." }
  },
  "ハート|でも、ふたり結ばれてから": {
    avant: { japonais: "貴方[あなた]を困[こま]らせる天才[てんさい]だね", traduction: "J'ai le génie de te mettre dans l'embarras, hein." },
    apres: { japonais: "始[はじ]まる恋[こい]もあるよ？", traduction: "que certains amours commencent, tu sais ?" }
  },
  "ハート|自慢できるほどの恋はしたことがないけど": {
    avant: { japonais: "抱[だ]きしめてあげられる", traduction: "Je peux te serrer dans mes bras." },
    apres: { japonais: "私[わたし]は貴方[あなた]を", traduction: "moi, toi, je…" }
  },
  "漂白|ヤキモチ焼いたりキスしたり": {
    avant: { japonais: "好[す]きになって 嫌[きら]いになったり", traduction: "Aimer, puis se mettre à détester," },
    apres: { japonais: "この街[まち]で少[すこ]し愛[あい]することを覚[おぼ]えた", traduction: "Dans cette ville, j'ai appris un peu ce qu'aimer veut dire." }
  },
  "漂白|それでも恋をしたいと思う": {
    avant: { japonais: "人[ひと]は必[かなら]ず後悔[こうかい]する", traduction: "On finit toujours par le regretter." },
    apres: { japonais: "好[す]きになって 嫌[きら]いになったり", traduction: "Aimer, puis se mettre à détester," }
  },
  "さながらロンリー|許していかなきゃ": {
    avant: { japonais: "みんなの少[すこ]しの嘘[うそ]さえも", traduction: "Même les petits mensonges de chacun," }
  },
  "どうせ死ぬなら|好きな人の唇奪う": {
    avant: { japonais: "裸[はだか]で町中[まちじゅう]を走[はし]るわ", traduction: "Je courrai nue à travers la ville." },
    apres: { japonais: "黙[だま]ってた秘密[ひみつ]も言[い]っちゃうわ", traduction: "Je lâcherai même les secrets que je gardais." }
  },
  "どうせ死ぬなら|どうせ死ぬなら死にそうなくらいデカい声で": {
    avant: { japonais: "だからみんなで胴上[どうあ]げをしてよ高[たか]く高[たか]く", traduction: "Alors portez-moi tous en triomphe, haut, plus haut !" },
    apres: { japonais: "感謝[かんしゃ]とか嫌[きら]いとか好[す]きだったとか伝[つた]えるの", traduction: "pour dire merci, je te déteste, je t'aimais." }
  },
  "あのね|寝癖がある君の方が": {
    avant: { japonais: "会[あ]いたい", traduction: "Tu me manques." },
    apres: { japonais: "何[なん]だか生[い]きているって感[かん]じる", traduction: "…me donnes, je ne sais pourquoi, le sentiment de vivre." }
  },
  "あのね|震えて何か言おうとしていた": {
    avant: { japonais: "伸[の]びてく影[かげ]が少[すこ]しだけ", traduction: "L'ombre qui s'allonge, un instant," },
    apres: { japonais: "通[とお]り雨[あめ]は 君[きみ]の涙[なみだ]さえ", traduction: "L'averse, jusqu'à tes larmes…" }
  },
  "空の青さを知る人よ|一番弱い自分の影": {
    avant: { japonais: "流[なが]れ出[だ]す 浮[う]かび上[あ]がる", traduction: "Elle s'écoule, elle remonte à la surface :" },
    apres: { japonais: "青[あお]く滲[にじ]んだ思[おも]い出[で]隠[かく]せないのは", traduction: "Si je ne peux cacher ces souvenirs délavés de bleu, c'est que…" }
  },
  "空の青さを知る人よ|全然好きじゃなかった": {
    apres: { japonais: "ホラー映画[えいが]とキャラメル味[あじ]のキス", traduction: "les films d'horreur et les baisers au goût de caramel." }
  },
  "3636|嫌になったの？": {
    apres: { japonais: "私[わたし]と過[す]ごす日々[ひび]を", traduction: "…des jours passés avec moi ?" }
  },
  "3636|飽きてしまったの？": {
    avant: { japonais: "私[わたし]と過[す]ごす日々[ひび]を", traduction: "…des jours passés avec moi ?" },
    apres: { japonais: "なんのアレンジも効[き]いてない日々[ひび]に", traduction: "De ces jours sans la moindre fantaisie ?" }
  },
  "炎曜日|分かっていたけれど": {
    avant: { japonais: "この歌[うた]の結末[けつまつ]を分[わ]かっていた", traduction: "Je savais comment finirait cette chanson." },
    apres: { japonais: "説明[せつめい]ができないお前[まえ]の色気[いろけ]や", traduction: "Ton charme, que je ne saurais expliquer, et…" }
  },
  "ねむい|私笑える時は笑ってたい": {
    avant: { japonais: "冴[さ]えない生活[せいかつ]を楽[たの]しみましょ", traduction: "Savourons cette vie sans éclat." },
    apres: { japonais: "しょうもないドンヨリとはサヨナラ", traduction: "Adieu, grisaille sans intérêt." }
  },
  "ねむい|一緒に捨ててしまったかもしれない": {
    avant: { japonais: "溜[た]まりこんだチラシと", traduction: "Avec les prospectus qui s'entassaient," },
    apres: { japonais: "冴[さ]えない生活[せいかつ]を楽[たの]しみましょ", traduction: "Savourons cette vie sans éclat." }
  },
  "おじゃまします|もう止められない": {
    avant: { japonais: "救[すく]えないところまでたどり着[つ]いたの", traduction: "Me voilà au point où plus rien ne peut être sauvé." },
    apres: { japonais: "少[すこ]しずつ忍[しの]び、夜[よる]", traduction: "Peu à peu, à pas de loup, la nuit." }
  },
  "おじゃまします|覚悟はあると言うと嘘になる": {
    avant: { japonais: "今[いま]すぐそうする", traduction: "Je le fais sur-le-champ." },
    apres: { japonais: "本当[ほんとう]はずっとずっと怖[こわ]いんだ", traduction: "En vérité, j'ai peur, depuis toujours." }
  },
  "あした世界が終わるとしても|証拠になるでしょう": {
    avant: { japonais: "僕[ぼく]が君[きみ]を守[まも]れたという", traduction: "Que j'ai su te protéger," },
    apres: { japonais: "この頼[たよ]りない翼[つばさ]広[ひろ]げて", traduction: "Déployant ces ailes fragiles…" }
  },
  "あした世界が終わるとしても|抱えきれないものばかりで": {
    avant: { japonais: "やはり僕[ぼく]は1人[ひとり]では", traduction: "Décidément, moi, à moi seul," },
    apres: { japonais: "強[つよ]くなれない身体[からだ]に", traduction: "dans ce corps qui ne sait pas devenir fort." }
  },
  "駅前喫茶ポプラ|話はやめよう": {
    avant: { japonais: "にっちもさっちも行[い]かないような", traduction: "Ces histoires qui ne mènent nulle part," },
    apres: { japonais: "週末[しゅうまつ]の予定[よてい]を決[き]めよう ちょこっと", traduction: "Décidons plutôt de notre week-end, vite fait." }
  },
  "駅前喫茶ポプラ|分かりやすいなあ": {
    avant: { japonais: "ずっと俯[うつむ]いて頬[ほほ]を膨[ふく]らます", traduction: "Tu gardes la tête baissée et tu gonfles les joues." },
    apres: { japonais: "そういえば僕[ぼく]は君[きみ]のこういうところが大好[だいす]きで", traduction: "Au fait, c'est ce côté-là de toi que j'adore." }
  },
  "あなたのために|今週末切ろうと思うの": {
    avant: { japonais: "今[いま]では傷[いた]んで枝分[えだわ]かれて", traduction: "Les voilà abîmés, fourchus :" },
    apres: { japonais: "もう誰[だれ]のものでもないわたし", traduction: "Moi qui ne suis plus à personne." }
  },
  "裸の心|いったいこのままいつまで一人でいるつもりだろう": {
    apres: { japonais: "だんだん自分[じぶん]を憎[にく]んだり", traduction: "Peu à peu, j'en viens à m'en vouloir…" }
  },
  "君がいない夜を越えられやしない|嫌われることを恐れてる": {
    avant: { japonais: "好[す]きすぎる事[こと]が嫌[いや]になる", traduction: "T'aimer trop, voilà ce qui me pèse." },
    apres: { japonais: "もう君[きみ]がいない夜[よる]を越[こ]えられやしない", traduction: "Les nuits sans toi, je ne sais plus les traverser." }
  },
  "君がいない夜を越えられやしない|胸のやわらかさとか吐息とか": {
    avant: { japonais: "キスをしていたいなあ", traduction: "Je voudrais t'embrasser encore." },
    apres: { japonais: "耳[みみ]にまだくらいついてるから", traduction: "…restent accrochés à mon oreille." }
  },
  "ほろ酔い|忘れさせてくれ": {
    avant: { japonais: "今日[きょう]は酔[よ]いに酔[よ]ってお前[まえ]を", traduction: "Ce soir, ivre jusqu'au bout, de toi," },
    apres: { japonais: "行[い]きつけの店[みせ]で聞[き]いたよ", traduction: "Je l'ai appris au bar où j'ai mes habitudes." }
  },
  "強がりました|通りすぎた過去の記憶に泣かされて": {
    avant: { japonais: "本当[ほんとう]の幸[しあわ]せを忘[わす]れてた", traduction: "J'en avais oublié le vrai bonheur." },
    apres: { japonais: "目[め]の前[まえ]には片付[かたづ]きすぎた部屋[へや]", traduction: "devant moi, une chambre trop bien rangée." }
  },
  "強がりました|二人は完璧なはずだった": {
    avant: { japonais: "あなたを諦[あきら]めたあたしはアホ", traduction: "Avoir renoncé à toi : quelle idiote je fais." },
    apres: { japonais: "幸[しあわ]せに頷[うなず]いた夜[よる]もあった", traduction: "Il y eut aussi des nuits où je disais oui au bonheur." }
  },
  "夢追いベンガル|白いカモメは海へ飛べ": {
    avant: { japonais: "ありったけの水[みず]をちょうだい", traduction: "Donne-moi toute l'eau que tu as." },
    apres: { japonais: "デジタルも流行[はや]りもいらないよ", traduction: "Je n'ai que faire du numérique et des modes." }
  },
  "ざらめ|手も足も犠牲になるな": {
    avant: { japonais: "そろそろ こうしてちゃ", traduction: "Il serait temps ; à rester ainsi…" },
    apres: { japonais: "どんな角度[かくど]で狙[ねら]ってくるのか", traduction: "Sous quel angle viendront-ils me viser ?" }
  },
  "ざらめ|いつか溶けるだろうか": {
    avant: { japonais: "この胸[むね]に残[のこ]った鉛[なまり]の屑[くず]は", traduction: "Ces éclats de plomb restés dans ma poitrine," }
  },
  "ナウなヤングにバカウケするのは当たり前だのクラッ歌|ジュリアナ東京を見てみなさい": {
    avant: { japonais: "知[し]りたければ インターネットで", traduction: "Si tu veux savoir, va voir sur Internet," },
    apres: { japonais: "この街[まち]は 毎日[まいにち]エブリタイム誘惑[ゆうわく]ばっかさ", traduction: "Cette ville, chaque jour, à toute heure, n'est que tentations." }
  },
  "ハッピー|問いかけてみたけれど": {
    avant: { japonais: "Hey, are you happy now？", traduction: "Hé, es-tu heureux, à présent ?" },
    apres: { japonais: "You 黙[だま]ったままで", traduction: "toi, tu restes muet." }
  },
  "ハッピー|目を閉じているんだもの": {
    avant: { japonais: "You 黙[だま]ったままで", traduction: "toi, tu restes muet." },
    apres: { japonais: "Hey, you. I really love you.", traduction: "Hé, toi. Je t'aime vraiment." }
  },
  "チカ|メモ書きは残しておいたでしょ": {
    avant: { japonais: "だから今[いま]のうちに会[あ]っておいてよ", traduction: "Alors viens me voir tant qu'il est encore temps." },
    apres: { japonais: "後[うし]ろ髪[がみ]を引[ひ]かれる思[おも]いで", traduction: "Le cœur qui se retourne au moment de partir," }
  },
  "チカ|あなたの為にもう尽くせないわ": {
    avant: { japonais: "きっとすぐ帰[かえ]れない", traduction: "Je ne rentrerai sûrement pas de sitôt." },
    apres: { japonais: "笑[わら]って見過[みす]ごした", traduction: "J'ai laissé passer, dans un rire." }
  },
  "君のこゝろ|守ってあげたい": {
    avant: { japonais: "全部[ぜんぶ]見[み]つけだしてさ", traduction: "Je retrouverai tout, tu verras." },
    apres: { japonais: "まだまだまだまだ見[み]えない", traduction: "Mais je ne vois rien, toujours rien." }
  },
  "愛を伝えたいだとか|焦らずにいるよ": {
    avant: { japonais: "僕[ぼく]が明日[あした]良[い]い男[おとこ]になるわけでもないからさ", traduction: "Ce n'est pas demain que je deviendrai un type bien, alors" },
    apres: { japonais: "今日[きょう]は日[ひ]が落[お]ちる頃[ころ]に会[あ]えるの？", traduction: "Ce soir, on se voit quand le soleil se couche ?" }
  },
  "会いに行くのに|これが夢だったら": {
    avant: { japonais: "もう4月[しがつ] もうひとつ 息[いき]を吐[は]く", traduction: "Avril déjà ; encore un soupir." },
    apres: { japonais: "何度[なんど]も繰[く]り返[かえ]して君[きみ]を", traduction: "je le recommencerais sans fin, et toi…" }
  },
  "19歳になりたくない|明日になれば私": {
    apres: { japonais: "何[なに]か変[か]わっちゃうかな", traduction: "est-ce que quelque chose aura changé ?" }
  },
  "森のくまさん|泳いでももがいても": {
    avant: { japonais: "貴方[あなた]という海[うみ]に溺[おぼ]れている", traduction: "Je me noie dans cette mer qui s'appelle toi." },
    apres: { japonais: "進[すす]まない 距離[きょり]も関係[かんけい]も", traduction: "rien n'avance, ni la distance ni nous deux." }
  },
  "森のくまさん|貴方という森で彷徨って": {
    avant: { japonais: "それからやっぱり悲[かな]しい 悲[かな]しい", traduction: "Et puis, décidément, c'est triste, si triste." },
    apres: { japonais: "歩[ある]いても 歳[とし]取[と]っても", traduction: "J'ai beau marcher, j'ai beau vieillir…" }
  },
  "ミニスカートとハイライト|俺だったらいいのに": {
    avant: { japonais: "イカした彼女[かのじょ]のボーイフレンドが", traduction: "Le petit ami de cette fille qui a tant d'allure," },
    apres: { japonais: "俺[おれ]だったらいいのにな", traduction: "Ah, si seulement c'était moi." }
  },
  "ミニスカートとハイライト|俺なんかじゃないらしい": {
    avant: { japonais: "ミステリアスな彼女[かのじょ]のボーイフレンドは", traduction: "Le petit ami de cette fille mystérieuse," },
    apres: { japonais: "俺[おれ]なんかではないらしい", traduction: "Non, pas un type comme moi, paraît-il." }
  },
  "ふたりの世界|あまり優しくないし": {
    avant: { japonais: "笑[わら]い方[かた]が好[す]き", traduction: "J'aime sa façon de rire." },
    apres: { japonais: "仕事[しごと]ばかりだけれど", traduction: "il n'a que son travail en tête, pourtant…" }
  },
  "ふたりの世界|嫌いなわけじゃないのよ": {
    avant: { japonais: "でも勘違[かんちが]いしないで", traduction: "Mais ne te méprends pas." },
    apres: { japonais: "私[わたし]だってよく分[わ]からないわ", traduction: "Moi-même, je n'y comprends pas grand-chose." }
  },
  "マトリョーシカ|溢れちゃいそうだ": {
    avant: { japonais: "水[みず]たまりができて", traduction: "Une flaque s'est formée," },
    apres: { japonais: "溢[あふ]れちゃいそうだ", traduction: "elle va déborder." }
  },
  "マトリョーシカ|近いうちに愛されるかな私、私": {
    avant: { japonais: "恥[は]ずかしいなんて思[おも]わなくなった", traduction: "J'ai cessé d'en avoir honte." },
    apres: { japonais: "キラキラに光[ひか]る何[なに]かを追[お]いかけて", traduction: "À courir après ce qui brille et scintille." }
  },
  "ラッキーカラー|花占いをするみたいに": {
    avant: { japonais: "今日[きょう]のまつ毛[げ]に雨[あめ]が降[ふ]りませんように", traduction: "Pourvu qu'aucune pluie ne tombe sur mes cils aujourd'hui." },
    apres: { japonais: "静[しず]かに両手[りょうて]を染[そ]めていく", traduction: "mes deux mains se teintent en silence." }
  },
  "皐月|私が濡れないように": {
    avant: { japonais: "どうか この世界[せかい]のどこかに", traduction: "Je vous en prie : quelque part en ce monde," },
    apres: { japonais: "傘[かさ]をさしてくれる人[ひと]が", traduction: "quelqu'un qui tienne un parapluie au-dessus de moi." }
  },
  "さよならの今日に|涙がでることは解る": {
    avant: { japonais: "河川敷[かせんしき]をなぞり歩[ある]く", traduction: "Je marche en suivant la berge." },
    apres: { japonais: "気持[きも]ちが戻[もど]らないのも知[し]ってる", traduction: "Et je sais que le cœur ne reviendra pas." }
  },
  "さよならの今日に|できればやり直したいけれど": {
    avant: { japonais: "昨日[きのう]が戻[もど]らないのも知[し]ってる", traduction: "Je sais aussi qu'hier ne reviendra pas." },
    apres: { japonais: "切[き]り捨[す]てた何[なに]かで今[いま]があるなら", traduction: "si le présent est fait de ce que j'ai sacrifié…" }
  },
  "黄昏にバカ話をしたあの日を思い出す時を|余裕のある生き方がしたい": {
    avant: { japonais: "金[かね]があれば何[なん]でもできるかもしれない", traduction: "Avec de l'argent, on peut peut-être tout." },
    apres: { japonais: "でも鐘[かね]のなる方[ほう]へは行[い]かないぞ", traduction: "Mais je n'irai pas là où sonnent les cloches." }
  },
  "黄昏にバカ話をしたあの日を思い出す時を|安っぽいものを最後まで信じてみたい": {
    avant: { japonais: "高[たか]いものに目[め]は眩[くら]むけれど", traduction: "Ce qui coûte cher éblouit, c'est vrai, mais" },
    apres: { japonais: "余裕[よゆう]のある人[ひと]はかっこいい", traduction: "Ceux qui ont le temps de respirer ont de l'allure." }
  },
  "ひかりもの|忘れないぞあの日の悔しさを": {
    avant: { japonais: "知[し]りたくもなかった顔[かお]がある", traduction: "Il est des visages que j'aurais voulu ne jamais connaître." },
    apres: { japonais: "つまらない事[こと]ではもう", traduction: "Pour des riens, désormais…" }
  },
  "ら、のはなし|君との恋を望みながら": {
    avant: { japonais: "早[はや]いうちに捨[す]ててしまうのが楽[らく]だろうな", traduction: "Le plus simple serait de m'en défaire au plus vite." },
    apres: { japonais: "誰[だれ]かの不幸[ふこう]を願[ねが]いつつあるよ", traduction: "j'en viens à souhaiter le malheur d'un autre." }
  },
  "風のささやき|聞き飽きた台詞ばかり": {
    avant: { japonais: "真面目[まじめ]なふりしたドクター", traduction: "Un docteur qui prend des airs sérieux," },
    apres: { japonais: "震[ふる]えそうな手[て]を握[にぎ]りしつこく僕[ぼく]に言[い]う", traduction: "Il serre ma main prête à trembler et me le répète, encore." }
  },
  "風のささやき|僕のことなんも知らないくせにふざけんな": {
    avant: { japonais: "風[かぜ]のささやき 耳障[みみざわ]りだ", traduction: "Le murmure du vent m'écorche les oreilles." },
    apres: { japonais: "ティファニーブルーの空[そら]の下[した]", traduction: "Sous un ciel bleu Tiffany." }
  },
  "私に見せてよ|知らない間に食べてるそれは何？": {
    avant: { japonais: "時々[ときどき]淋[さみ]しくなるから", traduction: "Parce qu'il m'arrive de me sentir seule." },
    apres: { japonais: "最近[さいきん]のお気[き]に入[い]りなのかな", traduction: "Ton péché mignon du moment, peut-être ?" }
  },
  "私に見せてよ|小さな傷でも私に見せてよ": {
    apres: { japonais: "時々[ときどき]淋[さみ]しくなるから", traduction: "Parce qu'il m'arrive de me sentir seule." }
  },
  "わかってない|撒き続けるのは嫌": {
    avant: { japonais: "いつまでも心[こころ]に苦[にが]い種[たね]を", traduction: "Des graines amères dans le cœur, sans fin :" },
    apres: { japonais: "わかってないよ 全部[ぜんぶ]", traduction: "Tu ne comprends rien, rien du tout." }
  },
  "わかってない|1人で大丈夫なわけがない": {
    avant: { japonais: "不安[ふあん]じゃない 寂[さび]しくない", traduction: "Je n'ai pas peur, je ne me sens pas seule." },
    apres: { japonais: "自分[じぶん]の首[くび]をしめ続[つづ]け", traduction: "Je continue à me serrer la gorge…" }
  },
  "RING DING|泣きたい時はどうして強がるの": {
    avant: { japonais: "眠[ねむ]たい時[とき]はすぐに寝[ね]ちゃうのに", traduction: "Quand tu as sommeil, tu t'endors aussitôt, et pourtant" },
    apres: { japonais: "プライドがあるとか言[い]ってたけど", traduction: "Tu disais avoir ta fierté, mais…" }
  },
  "RING DING|一つ言わせて欲しい": {
    avant: { japonais: "プライドがあるとか言[い]ってたけど", traduction: "Tu disais avoir ta fierté, mais…" },
    apres: { japonais: "あのさプライドなんて似合[にあ]わないし", traduction: "tu sais, la fierté, ça ne te va pas." }
  },
  "君はロックを聴かない|君はロックなんか聴かないと思いながら": {
    avant: { japonais: "乾[かわ]いたメロディで踊[おど]ろうよ", traduction: "Dansons sur une mélodie sèche." },
    apres: { japonais: "少[すこ]しでも僕[ぼく]に近[ちか]づいてほしくて", traduction: "je voulais que tu te rapproches de moi, ne serait-ce qu'un peu." }
  },
  "○○ちゃん|理想の高さは人一倍夢見がちなのはわかってる": {
    avant: { japonais: "妄想[もうそう]で出来[でき]あがる彼氏[かれし]は きっとこの世[よ]にいたら気持[きも]ち悪[わる]いだろう", traduction: "L'amoureux que fabrique mon imagination serait sans doute repoussant s'il existait." },
    apres: { japonais: "口癖[くちぐせ]はいいことないかな 幸[しあわ]せのレベルはもう下[さ]げた", traduction: "Mon refrain : « il ne m'arrive donc rien de bon ? » ; le bonheur, j'en ai déjà rabattu." }
  },
  "今夜このまま|心の壁も穴だらけで": {
    avant: { japonais: "だんだん息[いき]もできなくなって", traduction: "Peu à peu, même respirer devient impossible," },
    apres: { japonais: "制御不能[せいぎょふのう] 結構[けっこう]不幸[ふこう]？", traduction: "Plus de contrôle. Plutôt malheureuse ?" }
  },
  "そんな風に生きている|どん底に落ちた女のふりして": {
    avant: { japonais: "いつだって", traduction: "À tout instant," },
    apres: { japonais: "適当[てきとう]に頭[あたま]を撫[な]でられ", traduction: "et l'on me caresse la tête, distraitement." }
  },
  "猫|出会うことは可能なのかな": {
    avant: { japonais: "若[わか]すぎる僕[ぼく]らはまた1[いち]から", traduction: "Nous, trop jeunes, tout reprendre à zéro :" },
    apres: { japonais: "願[ねが]うだけ無駄[むだ]ならもうダメだ", traduction: "Si l'espérer ne sert à rien, alors c'est fini." }
  },
  "ジェニファー|まるで僕たちのようだね": {
    avant: { japonais: "今[いま]にもちぎれそうな雲[くも]は", traduction: "Ce nuage près de se déchirer," },
    apres: { japonais: "バランスのとれない2人[ふたり]は", traduction: "Nous deux, qui ne trouvons pas l'équilibre," }
  },
  "ビーナスベルト|心を読み聞かせて欲しい": {
    avant: { japonais: "ただ囁[ささや]くくらいでいいから", traduction: "Un murmure suffirait :" },
    apres: { japonais: "むかし、むかし", traduction: "Il était une fois…" }
  },
  "MIO|あなたは会うたびに": {
    avant: { japonais: "何[なに]もなかったように笑[わら]って欲[ほ]しい", traduction: "Je voudrais que tu ries comme si de rien n'était." },
    apres: { japonais: "少[すこ]しずつ変[か]わっていったね", traduction: "tu changeais, peu à peu." }
  },
  "青春と青春と青春|きっと花火とか金魚のせいだ": {
    avant: { japonais: "恋[こい]をしたくなるんだろうな", traduction: "C'est sans doute ce qui donne envie d'aimer." },
    apres: { japonais: "嗚呼[ああ] 今日[きょう]も夢[ゆめ]を見[み]る", traduction: "Ah, aujourd'hui encore, je rêve." }
  },
  "ノット・オーケー|望み通りに進めるほど": {
    avant: { japonais: "幸[しあわ]せのラストを", traduction: "Un dénouement heureux," },
    apres: { japonais: "あなたは簡単[かんたん]じゃない", traduction: "tu n'es pas quelqu'un de si simple." }
  },
  "偽者|イタタまた付けっぱなしの": {
    avant: { japonais: "上下[じょうげ]に揺[ゆ]れてた夜[よる]を", traduction: "Cette nuit où tout tanguait, de haut en bas…" },
    apres: { japonais: "コンタクトが痛[いた]むのです", traduction: "mes lentilles me font mal." }
  },
  "分かってくれよ|あまり考え込むのは好きじゃないんだ": {
    avant: { japonais: "分[わ]かってくれよこんな僕[ぼく]を", traduction: "Comprends-moi, tel que je suis." },
    apres: { japonais: "理解[りかい]しておくれ 不器用[ぶきよう]な僕[ぼく]を", traduction: "Comprends-moi, moi et ma maladresse." }
  }
};
