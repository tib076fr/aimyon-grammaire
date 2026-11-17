// ============================================================
//  LE CONTEXTE des extraits de chansons : la ligne d'avant et la ligne
//  d'après, pour mieux comprendre la phrase citée.
//  Clé : "titre de la chanson|ligne citée" (sans lectures ni espaces).
// ============================================================

const CONTEXTE = {
  "インタビュー|人になれない人です": {
    avant: { japonais: "カッコ、わらい", traduction: "(Rires, entre parenthèses.)" },
    apres: { japonais: "嘘[うそ]がないのも嘘[うそ]です", traduction: "Dire que je ne mens pas, c'est encore mentir." }
  },
  "朝が嫌い|私は朝が嫌い": {
    avant: { japonais: "夜[よる]になっても側[そば]にいてほしい", traduction: "Même quand tombe la nuit, reste près de moi." },
    apres: { japonais: "知[し]らない間[あいだ]にいなくなっても", traduction: "Même si tu t'en vas sans que je m'en aperçoive…" }
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
    apres: { japonais: "って聞[き]くと また君[きみ]は", traduction: "Je te le demande, et te voilà encore…" }
  },
  "彼氏有無|赤いあの風船が欲しいの？": {
    avant: { japonais: "ソフトクリーム？ぬいぐるみ？", traduction: "Une glace à l'italienne ? Une peluche ?" },
    apres: { japonais: "って聞[き]くと また君[きみ]は", traduction: "Je te le demande, et te voilà encore…" }
  },
  "ポプリの葉|香りを買いに渋谷へ": {
    avant: { japonais: "結局[けっきょく]忘[わす]れられなかった", traduction: "Finalement, je n'ai pas su l'oublier :" },
    apres: { japonais: "簡単[かんたん]に自分[じぶん]の香[かお]りを", traduction: "Mon propre parfum, si facilement…" }
  },
  "ポプリの葉|この香りにたどり着くまでに": {
    avant: { japonais: "お店[みせ]に入[はい]るのもいいね", traduction: "Pousser la porte de la boutique, ce n'est pas mal non plus." },
    apres: { japonais: "本当[ほんとう]に色々[いろいろ]あったな", traduction: "il s'en est passé, des choses." }
  },
  "強くなっちゃったんだ、ブルー|耳元で囁かれる": {
    apres: { japonais: "「君[きみ]は魅力的[みりょくてき]なんだよ」って", traduction: "« Tu es séduisante, tu sais. »" }
  },
  "GOOD NIGHT BABY|君と過ごしたい": {
    avant: { japonais: "夢[ゆめ]ばかりの今[いま]をとりあえず", traduction: "Ce présent tout tissé de rêves, pour l'instant," },
    apres: { japonais: "ほら もう君[きみ]の横顔[よこがお]が", traduction: "Tu vois, déjà ton profil…" }
  },
  "GOOD NIGHT BABY|君が好きだ": {
    avant: { japonais: "愛[いと]しい人[ひと]だと強[つよ]く頷[うなず]いた", traduction: "« C'est bien elle que j'aime », ai-je acquiescé de tout mon être." },
    apres: { japonais: "これからの僕[ぼく]らの未来[みらい]に", traduction: "À l'avenir qui nous attend…" }
  },
  "今日の芸術|今日も芸術だ": {
    avant: { japonais: "花束[はなたば]を持[も]たせてやれ", traduction: "…glisse un bouquet dans cette main-là." },
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
    apres: { japonais: "真面目[まじめ]に見[み]つめた", traduction: "toi que j'ai regardée si gravement…" }
  },
  "リズム64|何が分かるのか": {
    avant: { japonais: "あんたは誰[だれ]なの？", traduction: "Et toi, tu es qui ?" },
    apres: { japonais: "インチキなんだよ", traduction: "Du vent, tout ça." }
  },
  "スーパーガール|悲壮感や憂鬱も": {
    avant: { japonais: "僕[ぼく]は矛盾[むじゅん]と理屈[りくつ]で君[きみ]を締[し]め付[つ]けている", traduction: "Je t'enserre dans mes contradictions et mes raisonnements." },
    apres: { japonais: "君[きみ]の身体[からだ]の中[なか]へ押[お]し込[こ]んでしまう僕[ぼく]だよ", traduction: "c'est moi qui les enfouis au fond de ton corps." }
  },
  "スケッチ|楽しかったね": {
    apres: { japonais: "また うたた寝[ね]", traduction: "Et te voilà encore assoupi." }
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
    avant: { japonais: "抱[だ]きしめて分[わ]かり合[あ]えるなら", traduction: "Si une étreinte suffit à nous comprendre," },
    apres: { japonais: "もしも2人[ふたり]がディスティニーだったら", traduction: "Si nous deux, c'était le destin…" }
  },
  "テレパしい|ぶつかり合う日々をやめよう": {
    avant: { japonais: "やぶれかぶれになって", traduction: "À bout, prêts à tout casser," },
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
    apres: { japonais: "「終電[しゅうでん]逃[のが]して何[なん]のつもり？」", traduction: "« Rater le dernier train, tu cherches quoi ? »" }
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
    apres: { japonais: "胸[むね]の中[なか]に落[お]ちて", traduction: "que cela se dépose au fond de ton cœur," }
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
    avant: { japonais: "独特[どくとく]の世界[せかい]を呼[よ]び起[お]こす", traduction: "Capable de réveiller un monde à nul autre pareil," },
    apres: { japonais: "サヨナラ いつかの少年[しょうねん]の影[かげ]よ", traduction: "Adieu, ombre du garçon d'autrefois." }
  },
  "葵|涙さえも味方に": {
    avant: { japonais: "潜[もぐ]らせて 包[つつ]み込[こ]んで", traduction: "plonge-le, enveloppe-le," },
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
    avant: { japonais: "みんなの少[すこ]しの嘘[うそ]さえも", traduction: "jusqu'aux petits mensonges de chacun," }
  },
  "どうせ死ぬなら|好きな人の唇奪う": {
    avant: { japonais: "裸[はだか]で町中[まちじゅう]を走[はし]るわ", traduction: "Je courrai nue à travers la ville." },
    apres: { japonais: "黙[だま]ってた秘密[ひみつ]も言[い]っちゃうわ", traduction: "Je lâcherai même les secrets que je gardais." }
  },
  "どうせ死ぬなら|どうせ死ぬなら死にそうなくらいデカい声で": {
    avant: { japonais: "だからみんなで胴上[どうあ]げをしてよ高[たか]く高[たか]く", traduction: "Alors portez-moi tous en triomphe, haut, plus haut !" },
    apres: { japonais: "感謝[かんしゃ]とか嫌[きら]いとか好[す]きだったとか伝[つた]えるの", traduction: "que je dirai merci, je te déteste, je t'aimais." }
  },
  "あのね|寝癖がある君の方が": {
    avant: { japonais: "会[あ]いたい", traduction: "Je veux te voir." },
    apres: { japonais: "何[なん]だか生[い]きているって感[かん]じる", traduction: "tu me sembles, je ne sais pourquoi, plus vivant." }
  },
  "あのね|震えて何か言おうとしていた": {
    avant: { japonais: "伸[の]びてく影[かげ]が少[すこ]しだけ", traduction: "L'ombre qui s'allongeait, un peu," },
    apres: { japonais: "通[とお]り雨[あめ]は 君[きみ]の涙[なみだ]さえ", traduction: "L'averse m'aurait-elle caché jusqu'à tes larmes ?" }
  },
  "空の青さを知る人よ|一番弱い自分の影": {
    avant: { japonais: "流[なが]れ出[だ]す 浮[う]かび上[あ]がる", traduction: "Elle se met à couler, elle affleure :" },
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
    avant: { japonais: "今[いま]すぐそうする", traduction: "je le ferais sur-le-champ." },
    apres: { japonais: "本当[ほんとう]はずっとずっと怖[こわ]いんだ", traduction: "En vérité, j'ai peur, depuis toujours." }
  },
  "あした世界が終わるとしても|証拠になるでしょう": {
    avant: { japonais: "僕[ぼく]が君[きみ]を守[まも]れたという", traduction: "Que j'ai su te protéger :" },
    apres: { japonais: "この頼[たよ]りない翼[つばさ]広[ひろ]げて", traduction: "Déployant ces ailes fragiles…" }
  },
  "あした世界が終わるとしても|抱えきれないものばかりで": {
    avant: { japonais: "やはり僕[ぼく]は1人[ひとり]では", traduction: "Décidément, moi, à moi seul," },
    apres: { japonais: "強[つよ]くなれない身体[からだ]に", traduction: "et à ce corps qui ne sait pas être fort…" }
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
    avant: { japonais: "今[いま]では傷[いた]んで枝分[えだわ]かれて", traduction: "Aujourd'hui les voilà abîmés, fourchus :" },
    apres: { japonais: "もう誰[だれ]のものでもないわたし", traduction: "Moi qui ne suis plus à personne." }
  },
  "裸の心|いったいこのままいつまで一人でいるつもりだろう": {
    apres: { japonais: "だんだん自分[じぶん]を憎[にく]んだり", traduction: "Peu à peu, j'en viens à m'en vouloir…" }
  },
  "君がいない夜を越えられやしない|嫌われることを恐れてる": {
    avant: { japonais: "好[す]きすぎる事[こと]が嫌[いや]になる", traduction: "J'en viens à haïr de t'aimer autant :" },
    apres: { japonais: "もう君[きみ]がいない夜[よる]を越[こ]えられやしない", traduction: "Les nuits sans toi, je ne peux plus les traverser." }
  },
  "君がいない夜を越えられやしない|胸のやわらかさとか吐息とか": {
    avant: { japonais: "キスをしていたいなあ", traduction: "Je voudrais t'embrasser encore." },
    apres: { japonais: "耳[みみ]にまだくらいついてるから", traduction: "…s'accrochent encore à mon oreille." }
  },
  "ほろ酔い|忘れさせてくれ": {
    avant: { japonais: "今日[きょう]は酔[よ]いに酔[よ]ってお前[まえ]を", traduction: "Ce soir, ivre jusqu'à plus soif, toi," },
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
  "ざらめ|いつか溶けるだろうか": {
    avant: { japonais: "この胸[むね]に残[のこ]った鉛[なまり]の屑[くず]は", traduction: "Ces éclats de plomb restés dans ma poitrine," }
  },
  "ナウなヤングにバカウケするのは当たり前だのクラッ歌|ジュリアナ東京を見てみなさい": {
    avant: { japonais: "知[し]りたければ インターネットで", traduction: "Si tu veux savoir, va voir sur Internet," },
    apres: { japonais: "この街[まち]は 毎日[まいにち]エブリタイム誘惑[ゆうわく]ばっかさ", traduction: "Cette ville, chaque jour, à toute heure, n'est que tentations." }
  },
  "ハッピー|問いかけてみたけれど": {
    avant: { japonais: "Hey, are you happy now？", traduction: "Hé, es-tu heureux, maintenant ?" },
    apres: { japonais: "You 黙[だま]ったままで", traduction: "mais toi, tu restes silencieux," }
  },
  "ハッピー|目を閉じているんだもの": {
    avant: { japonais: "You 黙[だま]ったままで", traduction: "mais toi, tu restes silencieux," },
    apres: { japonais: "Hey, you. I really love you.", traduction: "Hé, toi. Je t'aime vraiment." }
  },
  "チカ|メモ書きは残しておいたでしょ": {
    avant: { japonais: "だから今[いま]のうちに会[あ]っておいてよ", traduction: "Alors viens me voir tant qu'il en est encore temps." },
    apres: { japonais: "後[うし]ろ髪[がみ]を引[ひ]かれる思[おも]いで", traduction: "Si, le cœur tiré en arrière," }
  },
  "チカ|あなたの為にもう尽くせないわ": {
    avant: { japonais: "きっとすぐ帰[かえ]れない", traduction: "Je ne rentrerai sûrement pas de sitôt." },
    apres: { japonais: "笑[わら]って見過[みす]ごした", traduction: "Toi qui as laissé passer en riant…" }
  },
  "君のこゝろ|守ってあげたい": {
    avant: { japonais: "全部[ぜんぶ]見[み]つけだしてさ", traduction: "…je veux tout débusquer," },
    apres: { japonais: "まだまだまだまだ見[み]えない", traduction: "Je ne vois toujours, toujours rien." }
  },
  "愛を伝えたいだとか|焦らずにいるよ": {
    avant: { japonais: "僕[ぼく]が明日[あした]良[い]い男[おとこ]になるわけでもないからさ", traduction: "Ce n'est pas demain que je deviendrai un type bien, alors" },
    apres: { japonais: "今日[きょう]は日[ひ]が落[お]ちる頃[ころ]に会[あ]えるの？", traduction: "Ce soir, on se voit quand le soleil se couche ?" }
  },
  "会いに行くのに|これが夢だったら": {
    avant: { japonais: "もう4月[しがつ] もうひとつ 息[いき]を吐[は]く", traduction: "Avril déjà ; encore un soupir." },
    apres: { japonais: "何度[なんど]も繰[く]り返[かえ]して君[きみ]を", traduction: "je le recommencerais mille fois, pour toi…" }
  },
  "19歳になりたくない|明日になれば私": {
    apres: { japonais: "何[なに]か変[か]わっちゃうかな", traduction: "j'aurai un peu changé ?" }
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
    avant: { japonais: "笑[わら]い方[かた]が好[す]き", traduction: "J'aime ta façon de rire." },
    apres: { japonais: "仕事[しごと]ばかりだけれど", traduction: "tu n'as que ton travail en tête, mais…" }
  },
  "ふたりの世界|嫌いなわけじゃないのよ": {
    avant: { japonais: "でも勘違[かんちが]いしないで", traduction: "Mais ne te méprends pas." },
    apres: { japonais: "私[わたし]だってよく分[わ]からないわ", traduction: "Moi-même, je ne sais pas bien…" }
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
    apres: { japonais: "静[しず]かに両手[りょうて]を染[そ]めていく", traduction: "doucement, je colore mes deux mains." }
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
    avant: { japonais: "知[し]りたくもなかった顔[かお]がある", traduction: "…se cache un visage que j'aurais voulu ne jamais connaître." },
    apres: { japonais: "つまらない事[こと]ではもう", traduction: "Pour si peu, désormais…" }
  },
  "ら、のはなし|君との恋を望みながら": {
    avant: { japonais: "早[はや]いうちに捨[す]ててしまうのが楽[らく]だろうな", traduction: "Le plus simple serait de m'en défaire au plus vite." },
    apres: { japonais: "誰[だれ]かの不幸[ふこう]を願[ねが]いつつあるよ", traduction: "…et j'en viens à souhaiter le malheur de quelqu'un." }
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
    avant: { japonais: "いつまでも心[こころ]に苦[にが]い種[たね]を", traduction: "Dans mon cœur, des graines amères, sans fin :" },
    apres: { japonais: "わかってないよ 全部[ぜんぶ]", traduction: "Tu ne comprends rien, rien du tout." }
  },
  "わかってない|1人で大丈夫なわけがない": {
    avant: { japonais: "不安[ふあん]じゃない 寂[さび]しくない", traduction: "« Je n'ai pas peur, je ne me sens pas seule » :" },
    apres: { japonais: "自分[じぶん]の首[くび]をしめ続[つづ]け", traduction: "À m'étrangler moi-même, encore et encore…" }
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
    apres: { japonais: "口癖[くちぐせ]はいいことないかな 幸[しあわ]せのレベルはもう下[さ]げた", traduction: "Je répète sans cesse « il ne m'arrive donc rien de bien ? » ; côté bonheur, j'ai déjà revu mes attentes à la baisse." }
  },
  "今夜このまま|心の壁も穴だらけで": {
    avant: { japonais: "だんだん息[いき]もできなくなって", traduction: "Peu à peu, même respirer devient impossible," },
    apres: { japonais: "制御不能[せいぎょふのう] 結構[けっこう]不幸[ふこう]？", traduction: "Plus de contrôle. Plutôt malheureuse ?" }
  },
  "そんな風に生きている|どん底に落ちた女のふりして": {
    avant: { japonais: "いつだって", traduction: "Quand on voudra." },
    apres: { japonais: "適当[てきとう]に頭[あたま]を撫[な]でられ", traduction: "on me caresse distraitement la tête," }
  },
  "猫|出会うことは可能なのかな": {
    avant: { japonais: "若[わか]すぎる僕[ぼく]らはまた1[いち]から", traduction: "Nous, trop jeunes, tout reprendre à zéro :" },
    apres: { japonais: "願[ねが]うだけ無駄[むだ]ならもうダメだ", traduction: "Si l'espérer est vain, alors c'est fini." }
  },
  "ジェニファー|まるで僕たちのようだね": {
    avant: { japonais: "今[いま]にもちぎれそうな雲[くも]は", traduction: "Ce nuage près de se déchirer," },
    apres: { japonais: "バランスのとれない2人[ふたり]は", traduction: "Nous deux, toujours en déséquilibre," }
  },
  "ビーナスベルト|心を読み聞かせて欲しい": {
    avant: { japonais: "ただ囁[ささや]くくらいでいいから", traduction: "Un simple murmure suffira :" },
    apres: { japonais: "むかし、むかし", traduction: "« il était une fois »…" }
  },
  "MIO|あなたは会うたびに": {
    avant: { japonais: "何[なに]もなかったように笑[わら]って欲[ほ]しい", traduction: "Je voudrais que tu ries comme s'il ne s'était rien passé." },
    apres: { japonais: "少[すこ]しずつ変[か]わっていったね", traduction: "tu changeais, peu à peu." }
  },
  "青春と青春と青春|きっと花火とか金魚のせいだ": {
    avant: { japonais: "恋[こい]をしたくなるんだろうな", traduction: "C'est sans doute ce qui donne envie d'aimer." },
    apres: { japonais: "嗚呼[ああ] 今日[きょう]も夢[ゆめ]を見[み]る", traduction: "Ah, aujourd'hui encore, je rêve." }
  },
  "ノット・オーケー|望み通りに進めるほど": {
    avant: { japonais: "幸[しあわ]せのラストを", traduction: "Ce dénouement heureux," },
    apres: { japonais: "あなたは簡単[かんたん]じゃない", traduction: "tu n'es pas quelqu'un d'assez simple." }
  },
  "偽者|イタタまた付けっぱなしの": {
    avant: { japonais: "上下[じょうげ]に揺[ゆ]れてた夜[よる]を", traduction: "…cette nuit où ça tanguait, de haut en bas." },
    apres: { japonais: "コンタクトが痛[いた]むのです", traduction: "mes lentilles me font mal." }
  },
  "分かってくれよ|あまり考え込むのは好きじゃないんだ": {
    avant: { japonais: "分[わ]かってくれよこんな僕[ぼく]を", traduction: "Comprends-moi, tel que je suis." },
    apres: { japonais: "理解[りかい]しておくれ 不器用[ぶきよう]な僕[ぼく]を", traduction: "Comprends-moi, moi et ma maladresse." }
  },
  "分かってくれよ|何も一人で泣くことないだろう": {
    avant: { japonais: "風[かぜ]の噂[うわさ]で聞[き]いたよ 僕[ぼく]にどうしっろて言[い]うの？", traduction: "Je l'ai su par ouï-dire ; que veux-tu que j'y fasse ?" },
    apres: { japonais: "僕[ぼく]に話[はな]してくれたらいいのに", traduction: "Si seulement tu m'en parlais." }
  },
  "強くなっちゃったんだ、ブルー|手に入るレベルの魅力ってことかしら": {
    avant: { japonais: "「君[きみ]は魅力的[みりょくてき]なんだよ」って", traduction: "« Tu es séduisante, tu sais. »" },
    apres: { japonais: "恥[は]ずかしくなる言葉[ことば]ね", traduction: "Des mots qui font rougir." }
  },
  "森のくまさん|それに悔しくてたまらなかった": {
    avant: { japonais: "腹[はら]が立[た]ってたのは事実[じじつ]", traduction: "J'étais en colère, c'est un fait," },
    apres: { japonais: "都合[つごう]よく使[つか]われて", traduction: "d'être ainsi utilisée à ta convenance." }
  },
  "姿|貴方はもちろんのこと": {
    apres: { japonais: "顔[かお]も綺麗[きれい]で すごく優[やさ]しかったり", traduction: "ton visage est beau, et tu es si tendre, parfois…" }
  },
  "ユラユラ|フライング気味にキスをして": {
    avant: { japonais: "最初[さいしょ]に言[い]って欲[ほ]しかったのよ", traduction: "c'est d'abord cela que j'aurais voulu entendre." },
    apres: { japonais: "「寒[さむ]いでしょ？」と言[い]って抱[だ]きしめて", traduction: "« Tu as froid, non ? », et tu me serres contre toi." }
  },
  "プレゼント|助けが来るシステムにしてあるよ": {
    avant: { japonais: "少[すこ]しでも傷[きず]ができたらきっと", traduction: "À la moindre blessure, sûrement," },
    apres: { japonais: "幾千年[いくせんねん]も前[まえ]からこうして", traduction: "Voilà des millénaires qu'ainsi…" }
  },
  "いつまでも|結局この世の表現ってのは": {
    avant: { japonais: "「死[し]んだ友達[ともだち]がさぁ」って語[かた]れば売[う]れんのか?", traduction: "Suffit-il de raconter « j'ai un ami qui est mort… » pour vendre ?" },
    apres: { japonais: "同情[どうじょう]だけで成[な]り立[た]ってんのかなあ", traduction: "ne tiendrait-elle que par la pitié ?" }
  },
  "私に見せてよ|内容によっては怒るけど": {
    avant: { japonais: "隠[かく]しているもの 私[わたし]に見[み]せてよ", traduction: "Ce que tu caches, montre-le-moi." },
    apres: { japonais: "些細[ささい]な発見[はっけん]も 私[わたし]に見[み]せてよ", traduction: "Tes moindres trouvailles, montre-les-moi aussi." }
  },
  "おばけがでるぞ|目が合えば捕まるぞ": {
    avant: { japonais: "左手[ひだりて]に持[も]つ赤色[あかいろ]のエキス", traduction: "Dans sa main gauche, un élixir rouge." },
    apres: { japonais: "おばけだぞ", traduction: "C'est un fantôme, attention !" }
  },
  "猫にジェラシー|なんか、僕もさどうしてか寄りかかる": {
    avant: { japonais: "夜[よる]にフッと消[き]えるお前[まえ]に", traduction: "Toi qui disparais d'un coup dans la nuit," },
    apres: { japonais: "猫[ねこ]にジェラシー", traduction: "Jaloux d'un chat." }
  },
  "die die die|ねっ?それが良いに決まってる": {
    avant: { japonais: "明日[あす]の我[わ]が身[み]に備[そな]えよう", traduction: "Préparons-nous à ce qui peut nous arriver demain." },
    apres: { japonais: "でも もしかして もしかして", traduction: "Mais peut-être, peut-être…" }
  },
  "die die die|いつ死ぬか分かんないし": {
    avant: { japonais: "だってもう私[わたし]達[たち]", traduction: "Parce que nous deux, enfin," },
    apres: { japonais: "手[て]、繋[つな]いで帰[かえ]ろうよ", traduction: "alors rentrons main dans la main." }
  },
  "die die die|いわゆる関係が落ち着いたってやつかも": {
    avant: { japonais: "でも 分[わ]かんないの 分[わ]かんないの", traduction: "Mais je ne sais pas, je ne sais pas." },
    apres: { japonais: "だけど 足[た]んないの もったいないもん", traduction: "Seulement ça ne me suffit pas, quel gâchis." }
  },
  "君の夢を聞きながら、僕は笑えるアイデアを!|数えきれないもしもの話して": {
    avant: { japonais: "いつもヘンテコな友情[ゆうじょう]だ", traduction: "Une amitié toujours aussi farfelue." },
    apres: { japonais: "不思議[ふしぎ]なもの もっと見[み]せてあげる", traduction: "Je te montrerai encore plus de merveilles." }
  },
  "君の夢を聞きながら、僕は笑えるアイデアを!|覚えたてのアイテムにも": {
    avant: { japonais: "眠[ねむ]たくなるまで遊[あそ]ぼう", traduction: "jouons jusqu'à tomber de sommeil." },
    apres: { japonais: "飽[あ]きられちゃうくらい", traduction: "on finira par s'en lasser." }
  },
  "君の夢を聞きながら、僕は笑えるアイデアを!|眠たくなるまで遊ぼう": {
    avant: { japonais: "伸[の]びた影[かげ]を追[お]いかけて", traduction: "À la poursuite de nos ombres qui s'allongent," },
    apres: { japonais: "覚[おぼ]えたてのアイテムにも", traduction: "Même les gadgets qu'on vient tout juste de découvrir," }
  },
  "愛の花|空が晴れずとも": {
    avant: { japonais: "失[うしな]う未来[みらい]なんてこないで？", traduction: "Que ne vienne jamais l'avenir où on le perd." },
    apres: { japonais: "愛[あい]を胸[むね]に祈[いの]るわ", traduction: "je prierai, l'amour au cœur." }
  },
  "愛の花|貴方の声が聴こえた気がする": {
    avant: { japonais: "緑[みどり]ゆれてる", traduction: "La verdure se balance." },
    apres: { japonais: "空[そら]が晴[は]れたら", traduction: "Quand le ciel se dégagera," }
  },
  "愛の花|涙は枯れないわ": {
    avant: { japonais: "逢[あ]いに 逢[あ]いに来[き]て欲[ほ]しい", traduction: "viens, je voudrais que tu viennes me voir." },
    apres: { japonais: "明日[あす]へと繋[つな]がる輪[わ]", traduction: "Un anneau qui relie à demain." }
  },
  "貴方解剖純愛歌 ～死ね～|あなたの最後の記憶は私であるはずよね": {
    avant: { japonais: "あなたの両目[りょうめ]をくり抜[ぬ]いて 私[わたし]のポッケに入[い]れたなら", traduction: "Si je t'arrachais les deux yeux pour les glisser dans ma poche," },
    apres: { japonais: "逃[にが]さないよ 離[はな]さないよ 私[わたし]だけのあなたになるの", traduction: "Je ne te laisserai ni fuir ni partir : tu seras à moi seule." }
  },
  "貴方解剖純愛歌 ～死ね～|ねえ?どうしてそばに来てくれないの": {
    avant: { japonais: "今[いま]すぐ部屋[へや]においで", traduction: "Viens tout de suite dans ma chambre." },
    apres: { japonais: "死[し]ね。 私[わたし]を好[す]きじゃないのならば", traduction: "Meurs. Si tu ne m'aimes pas." }
  },
  "貴方解剖純愛歌 ～死ね～|唇を縫い私だけのキスを味わえばいいの": {
    avant: { japonais: "足[あし]を引[ひ]き裂[さ]き 歩[ある]かせやしない", traduction: "Je te déchirerai les jambes, je ne te laisserai plus marcher." },
    apres: { japonais: "ねえ? 私[わたし]はどこかおかしいですか", traduction: "Dis… est-ce que quelque chose cloche chez moi ?" }
  },
  "いちについて|その先で腐るかは自分次第なのか": {
    avant: { japonais: "お決[き]まりの不幸[ふこう]で", traduction: "dans un malheur des plus convenus," },
    apres: { japonais: "残[のこ]された時間[じかん]が焦[あせ]りを誘[さそ]い戸惑[とまど]う", traduction: "Le temps qui reste attise l'impatience, et je me trouble." }
  },
  "いちについて|どこまでも楽になれるのだろうか": {
    avant: { japonais: "透明[とうめい]な瞳[ひとみ]で世間[せけん]を見[み]られたら", traduction: "Si je pouvais regarder le monde avec des yeux limpides," },
    apres: { japonais: "落[お]とされた世界[せかい]が少[すこ]し泥濘[ぬかる]んでいた", traduction: "Le monde où l'on m'a jeté était un peu boueux." }
  },
  "いちについて|運命があまりに静かに蝕んでくる": {
    avant: { japonais: "汽笛[きてき]の音[おと]さえ誰[だれ]かが遮[さえぎ]る", traduction: "Même le sifflet du train, quelqu'un le couvre." },
    apres: { japonais: "なぜ自由[じゆう]は優[やさ]しいふりをして", traduction: "Pourquoi la liberté fait-elle semblant d'être douce" }
  },
  "お互い様やん|お互い様やんそれお互い様やん": {
    avant: { japonais: "許[ゆる]しちゃう私[わたし]も なんか嫌[いや]", traduction: "Et moi qui finis par pardonner, ça m'agace aussi." },
    apres: { japonais: "お互[たが]い結局[けっきょく]めっちゃ 好[す]きなんやん", traduction: "Au fond, tous les deux, on s'aime à la folie, voilà." }
  },
  "お互い様やん|ケンカしたらしたですぐに無視をする": {
    avant: { japonais: "俺[おれ]ってついてくる 意味[いみ]あるの?", traduction: "Et moi, à quoi ça sert que je te suive ?" },
    apres: { japonais: "面倒[めんどう]なやつ", traduction: "Quelle plaie, celle-là." }
  },
  "お互い様やん|それでへらへら謝ってきて": {
    avant: { japonais: "マジでムカつく 先[さき]帰[かえ]る", traduction: "Ça m'énerve vraiment, je rentre la première." },
    apres: { japonais: "許[ゆる]しちゃう私[わたし]も なんか嫌[いや]", traduction: "et moi qui finis par pardonner, ça m'agace aussi." }
  },
  "おっぱい|揺れるんじゃなくて揺らしてみる": {
    avant: { japonais: "揺[ゆ]れるたびに あの人[ひと]見[み]る", traduction: "À chaque balancement, c'est lui que je regarde." },
    apres: { japonais: "揺[ゆ]れるたびにあの人[ひと]は見[み]ている", traduction: "À chaque balancement, lui, il regarde." }
  },
  "おっぱい|いつの間にかABCD.....": {
    avant: { japonais: "揺[ゆ]れるたびに 愛[いと]おしくて", traduction: "À chaque balancement, je les trouve attendrissants." },
    apres: { japonais: "変[へん]なあだ名[な]がついちゃったり", traduction: "On m'a même collé un drôle de surnom." }
  },
  "おっぱい|まさか破裂しちゃうんじゃないかって": {
    avant: { japonais: "みるみるうちに 膨[ふく]らんで", traduction: "Ils gonflent à vue d'œil," },
    apres: { japonais: "心配[しんぱい]で私[わたし]心配[しんぱい]で", traduction: "Je m'inquiète, moi, je m'inquiète." }
  },
  "鯉|誰が予想しましたか": {
    avant: { japonais: "ああ ジーザス こんな結末[けつまつ]を", traduction: "Ah, Jésus, une fin pareille," },
    apres: { japonais: "ああ 結局[けっきょく]私[わたし]がチョロいと", traduction: "Ah, au bout du compte, on me prend pour une fille facile," }
  },
  "鯉|思われて当然、ああ": {
    avant: { japonais: "ああ 結局[けっきょく]私[わたし]がチョロいの", traduction: "Ah, au bout du compte, c'est moi la fille facile :" },
    apres: { japonais: "なれない なれない", traduction: "Je ne peux pas, je ne peux pas," }
  },
  "鯉|魅力的だと言ったでしょ?": {
    avant: { japonais: "馬鹿[ばか]でかい穴[あな]が空[あ]くよ", traduction: "un trou énorme s'y creuse." },
    apres: { japonais: "私[わたし]のこの眼[め]を", traduction: "Ces yeux qui sont les miens." }
  },
  "幸せになりたい|ねえそれなら今針を飲める?": {
    avant: { japonais: "私[わたし]のためならなんだってするんでしょ?", traduction: "Pour moi, tu ferais n'importe quoi, pas vrai ?" },
    apres: { japonais: "上[うえ]から目線[めせん]の女[おんな]だって思[おも]っている? イエス オア ノー", traduction: "Tu me trouves hautaine ? Yes or no." }
  },
  "幸せになりたい|私それでも恋をやめれない女の執念深さよ": {
    avant: { japonais: "親[おや]にだって心配[しんぱい]もかけてる 大丈夫[だいじょうぶ]が口癖[くちぐせ]", traduction: "J'inquiète même mes parents ; « ça va » est devenu mon refrain." },
    apres: { japonais: "私[わたし]だって幸[しあわ]せになれるはず 思[おも]うくらいはいいでしょ?", traduction: "Moi aussi, je dois pouvoir être heureuse : j'ai bien le droit de le croire, non ?" }
  },
  "幸せになりたい|私だって誰かに愛されたいの尽くされたいの": {
    avant: { japonais: "ねえ 本気[ほんき]ならちょっと聞[き]いて", traduction: "Dis, si tu es sérieux, écoute un peu." },
    apres: { japonais: "ひとりぼっち そうひとりぼっち今[いま]は少[すこ]し辛[つら]いの", traduction: "Toute seule, oui, toute seule : en ce moment, c'est un peu dur." }
  },
  "シガレット|出来そうもない": {
    avant: { japonais: "出来損[できそこ]ない", traduction: "Bonne à rien," },
    apres: { japonais: "忘[わす]れること", traduction: "oublier," }
  },
  "シガレット|ふと吸い込まれてつい転んで": {
    avant: { japonais: "うっかり落[お]ちてく地獄[じごく]に", traduction: "Dans l'enfer où je glisse par mégarde," },
    apres: { japonais: "納得[なっとく]いかない全[すべ]てに", traduction: "À tout ce que je n'arrive pas à accepter," }
  },
  "シガレット|出会い頭でまたつまずく": {
    avant: { japonais: "ありきたりに傷[きず]ついては", traduction: "Je me blesse de la façon la plus banale," },
    apres: { japonais: "ありがと ごめんね さよなら", traduction: "Merci, pardon, adieu." }
  },
  "神秘の領域へ|若気の至りと被ってしまった": {
    avant: { japonais: "白[しろ]のブラジャーを", traduction: "Un soutien-gorge blanc :" },
    apres: { japonais: "ピンクのあの華[はな]に手[て]が届[とど]く気[き]がした", traduction: "J'ai cru pouvoir toucher cette fleur rose." }
  },
  "神秘の領域へ|青く波打つ海が見えた気がした": {
    avant: { japonais: "青春[せいしゅん]と名付[なづ]けて被[かぶ]ってしまった", traduction: "je l'ai baptisée « jeunesse » et mise sur ma tête." },
    apres: { japonais: "白[しろ]のブラジャーを", traduction: "Un soutien-gorge blanc :" }
  },
  "泥だんごの天才いたよね|どうよ私らイケてるでしょと言わんばかりの顔を見せる": {
    avant: { japonais: "大口[おおくち]叩[たた]く大物[おおもの]気取[きど]り", traduction: "Elle fanfaronne et joue les caïds," },
    apres: { japonais: "明[あき]らかに小学[しょうがく]三年生[さんねんせい]", traduction: "Visiblement en troisième année de primaire." }
  },
  "泥だんごの天才いたよね|背負う姿は可愛げのない高校生のようだ": {
    avant: { japonais: "茶髪[ちゃぱつ]の髪[かみ]を揺[ゆ]らしランドセル", traduction: "Cheveux teints qui dansent, cartable sur le dos :" },
    apres: { japonais: "隣[となり]には顔[かお]しかめる教師[きょうし]と", traduction: "À côté, un professeur qui grimace" }
  },
  "泥だんごの天才いたよね|小さなころから気取ってばかりいること": {
    avant: { japonais: "窮屈[きゅうくつ]してるなあ", traduction: "Comme ils doivent se sentir à l'étroit." },
    apres: { japonais: "教[おし]えてほしくないのさ", traduction: "je ne veux pas qu'on leur apprenne ça." }
  },
  "猫にジェラシー|相手が誰だろうと構わない": {
    avant: { japonais: "馬鹿[ばか]で悪[わる]いか?", traduction: "C'est idiot, et alors ?" },
    apres: { japonais: "僕[ぼく]は猫[ねこ]にジェラシー", traduction: "Moi, je suis jaloux d'un chat." }
  },
  "ハルノヒ|いつになく遠く遠くに見える": {
    avant: { japonais: "藍色[あいいろ]のスカート", traduction: "une jupe indigo" },
    apres: { japonais: "加速[かそく]する足音[あしおと]", traduction: "Des pas qui s'accélèrent." }
  },
  "ハルノヒ|僕らは何も見えない": {
    avant: { japonais: "腰掛[こしか]けたベンチで", traduction: "Assis sur un banc," },
    apres: { japonais: "未来[みらい]を誓[ちか]い合[あ]った", traduction: "nous nous le sommes juré l'un à l'autre." }
  },
  "二人だけの国|運命共同体同士": {
    apres: { japonais: "ナンマイダ", traduction: "Namu Amida…" }
  },
  "ペルソナの記憶|気にしないで済むけど内心戸惑っているわ": {
    avant: { japonais: "黙[だま]って過[す]ごしていればそんな事[こと]も", traduction: "Si je vivais sans rien dire, tout cela," },
    apres: { japonais: "心[こころ]の中[なか]にいる貴方[あなた]の名残[なごり]を全[すべ]て刺[さ]し殺[ころ]して", traduction: "Poignarder tout ce qui reste de toi dans mon cœur," }
  },
  "マシマロ|むしろ夢であれよ、と思う": {
    avant: { japonais: "こんな幸[しあわ]せできすぎている", traduction: "Un bonheur pareil, c'est trop beau." },
    apres: { japonais: "目[め]の前[まえ]にあるマシマロの丘[おか]", traduction: "Devant moi, des collines de guimauve." }
  },
  "マシマロ|見たことのない大地を走る走る": {
    avant: { japonais: "心地[ここち]よいリズムに乗[の]って", traduction: "Porté par un rythme agréable," },
    apres: { japonais: "野暮[やぼ]な考[かんが]え思[おも]い描[えが]くよ", traduction: "Je me fais des idées bien vulgaires." }
  },
  "夜行バス|暗くて何も見えないから": {
    avant: { japonais: "片道[かたみち]約[やく]8時間[じかん]の旅[たび]", traduction: "Un trajet d'environ huit heures, aller simple." },
    apres: { japonais: "鼻[はな]すすりながらかーちゃんにメールした", traduction: "j'ai écrit à maman en reniflant." }
  },
  "夜行バス|涙こらえ聞いていたのは大好きな五つの音": {
    avant: { japonais: "ギターかかえて イヤフォンをつけて", traduction: "La guitare dans les bras, les écouteurs aux oreilles," },
    apres: { japonais: "ゆさゆさうとうと走[はし]っている", traduction: "Il roule, ballotté, somnolent." }
  },
  "私に彼氏ができない理由|この季節にかぎってひと肌も恋しくなる": {
    avant: { japonais: "突然[とつぜん]現[あらわ]れること願[ねが]ってたのに", traduction: "moi qui souhaitais tant le voir apparaître d'un coup…" },
    apres: { japonais: "で自信[じしん]がないの 今日[きょう]もこたつにうずくまる", traduction: "Et je manque d'assurance : aujourd'hui encore, je me blottis sous le kotatsu." }
  },
  "私に彼氏ができない理由|もうバレンタイン誰かにあげたい": {
    avant: { japonais: "極度[きょくど]の人見知[ひとみし]りと 好[す]きな人[ひと]に気[き]づかない鈍感[どんかん]さかな?", traduction: "une timidité extrême, et cette lenteur à remarquer qui me plaît, peut-être ?" },
    apres: { japonais: "私[わたし]にも今年[ことし]は愛[あい]する人[ひと]が", traduction: "Que cette année, pour moi aussi, quelqu'un à aimer" }
  },
  "私に彼氏ができない理由|もし私に彼氏ができた冬休みは": {
    avant: { japonais: "でも逃[に]げ出[だ]したいな この空間[くうかん]は少[すこ]し照[て]れくさい", traduction: "Mais j'ai envie de fuir : cet endroit me gêne un peu." },
    apres: { japonais: "恋人[こいびと]の定番[ていばん]のデートコースを歩[ある]きたい", traduction: "je veux suivre le parcours classique des amoureux." }
  },
  "今夜このまま|だんだん息もできなくなって": {
    avant: { japonais: "泡[あわ]の中[なか]で眠[ねむ]れたらなぁ", traduction: "Si je pouvais m'endormir dans la mousse…" },
    apres: { japonais: "心[こころ]の壁[かべ]も穴[あな]だらけで", traduction: "et les murs de mon cœur sont criblés de trous." }
  },
  "あのね|それなのに何故だろう君が遠い": {
    avant: { japonais: "つま先[さき]立[だ]つ 沈[しず]まないように", traduction: "Je me dresse sur la pointe des pieds, pour ne pas sombrer." },
    apres: { japonais: "伸[の]びてく影[かげ]が少[すこ]しだけ", traduction: "L'ombre qui s'allonge, un tout petit peu," }
  },
  "恋をしたから|貴方が思う以上に大好きで": {
    avant: { japonais: "さらに言[い]えば私[わたし]は貴方[あなた]を", traduction: "Et pour en dire plus, moi, je t'aime," },
    apres: { japonais: "好[す]きで 好[す]きで 好[す]きで", traduction: "je t'aime, je t'aime, je t'aime," }
  },
  "恋をしたから|さらに言えば私は貴方を": {
    avant: { japonais: "運命[うんめい]に感[かん]じていたよ", traduction: "j'y voyais le destin." },
    apres: { japonais: "貴方[あなた]が思[おも]う以上[いじょう]に大好[だいす]きで", traduction: "bien plus que tu ne le crois," }
  },
  "スケッチ|確かに100年繋がってるんだ": {
    avant: { japonais: "同[おな]じ今[いま]を生[い]きる胴体[どうたい]は", traduction: "Nos corps qui vivent le même présent" },
    apres: { japonais: "まっすぐに 揺[ゆ]れながら", traduction: "Tout droit, en tremblant un peu," }
  },
  "スケッチ|君が現れた時からずっと": {
    avant: { japonais: "今[いま]だって光[ひか]るよ", traduction: "Maintenant encore, il brille," },
    apres: { japonais: "誰[だれ]かと思[おも]えば運命[うんめい]の", traduction: "Je me demandais qui c'était : c'est le destin" }
  },
  "猫|昨日のことなど幻だと思おう": {
    avant: { japonais: "家[いえ]まで帰[かえ]ろう 1人[ひとり]で帰[かえ]ろう", traduction: "Rentrons à la maison, rentrons seul." },
    apres: { japonais: "君[きみ]の顔[かお]なんて忘[わす]れてやるさ", traduction: "Ton visage, je l'oublierai, tu vas voir." }
  },
  "猫|猫になってでも現れてほしい": {
    avant: { japonais: "会[あ]いたいんだ忘[わす]れられない", traduction: "Je veux te voir, je n'arrive pas à oublier." },
    apres: { japonais: "いつか君[きみ]がフラッと現[あらわ]れて", traduction: "Qu'un jour tu réapparaisses, comme ça," }
  },
  "駅前喫茶ポプラ|そういえば僕は君のこういうところが大好きで": {
    avant: { japonais: "分[わ]かりやすいなあ", traduction: "Qu'est-ce que tu es transparente." },
    apres: { japonais: "たまらないんだけれど知[し]っていた?", traduction: "j'en suis fou, tu le savais ?" }
  },
  "ほろ酔い|ほろ酔いは俺をダメな男にする": {
    avant: { japonais: "すすむ酒[さけ]と時間[じかん]に身[み]を任[まか]せて", traduction: "Je m'abandonne à l'alcool qui descend et au temps qui passe." },
    apres: { japonais: "あの時[とき]もそうだったろう", traduction: "C'était pareil ce jour-là, pas vrai ?" }
  },
  "ほろ酔い|お前結婚したんだってな": {
    avant: { japonais: "行[い]きつけの店[みせ]で聞[き]いたよ", traduction: "Je l'ai appris au bar où j'ai mes habitudes :" },
    apres: { japonais: "幸[しあわ]せか?聞[き]ける立場[たちば]ではないが", traduction: "Tu es heureuse ? Je suis mal placé pour le demander, mais…" }
  },
  "19歳になりたくない|強くはなりたいでも弱くもありたい": {
    avant: { japonais: "何故[なぜ]人[ひと]は減[へ]る命[いのち]に祝[いわ]いを捧[ささ]げるの", traduction: "Pourquoi fête-t-on une vie qui diminue ?" },
    apres: { japonais: "私[わたし]のままでいたい", traduction: "Je veux rester moi-même." }
  },
  "19歳になりたくない|見たくないものを見ては泣いちゃうし": {
    avant: { japonais: "大人[おとな]になるたびに", traduction: "Chaque fois que je deviens un peu plus adulte," },
    apres: { japonais: "本当[ほんとう]の自分[じぶん]に気[き]づくことは少[すこ]し怖[こわ]いんだ", traduction: "et découvrir qui je suis vraiment me fait un peu peur." }
  },
  "ラッキーカラー|叶うといいけどなぁ": {
    avant: { japonais: "3回[かい]願[ねが]った大成功[だいせいこう]が", traduction: "Ce grand succès que j'ai souhaité trois fois," },
    apres: { japonais: "でも散々[さんざん]迷[まよ]った恋[こい]の終[お]わりは", traduction: "Mais la fin d'un amour où j'ai tant hésité," }
  },
  "ラッキーカラー|恋がついに結末を迎える": {
    avant: { japonais: "勘違[かんちが]いで終[お]わらせたかった", traduction: "J'aurais voulu que ça s'arrête sur un malentendu." },
    apres: { japonais: "確定[かくてい]した失恋[しつれん]だったよ", traduction: "C'était un chagrin d'amour couru d'avance." }
  },
  "さよならの今日に|泥まみれの過去が": {
    apres: { japonais: "纏[まと]わりつく日々[ひび]だ", traduction: "me colle à la peau, jour après jour." }
  },
  "朝が嫌い|この恋は死にかけてる": {
    avant: { japonais: "私[わたし]の夢[ゆめ]は叶[かな]わないらしい", traduction: "Mon rêve ne se réalisera pas, on dirait." },
    apres: { japonais: "知[し]らない間[あいだ]に忘[わす]れてしまって", traduction: "Que je l'oublie sans m'en apercevoir," }
  },
  "朝が嫌い|ちゃんと鍵はポストの中": {
    avant: { japonais: "知[し]らない間[あいだ]にいなくなっても", traduction: "Même si tu t'en vas sans que je m'en aperçoive," },
    apres: { japonais: "なんだか悔[くや]しくなるの", traduction: "Et ça me vexe, je ne sais pourquoi." }
  },
  "彼氏有無|そして僕以外の処方箋をください": {
    avant: { japonais: "彼女[かのじょ]の脳[のう]みそを割[わ]って診[み]ておくれ", traduction: "Ouvrez-lui le crâne et examinez-la," },
    apres: { japonais: "今[いま]の君[きみ]に足[た]りないものを", traduction: "Ce qui te manque aujourd'hui," }
  },
  "ひかりもの|だいたいのことでは傷ついてきた": {
    apres: { japonais: "恋[こい]仕事[しごと]生活[せいかつ]家族[かぞく]や", traduction: "l'amour, le travail, le quotidien, la famille…" }
  },
  "初恋が泣いている|夢の中で悪魔が唱えた": {
    avant: { japonais: "聞[き]こえてくる", traduction: "que j'entends monter," },
    apres: { japonais: "変[へん]な呪文[じゅもん]が消[き]えるのだろうか", traduction: "cette étrange formule, quand s'effacera-t-elle ?" }
  },
  "会いに行くのに|そんなに変わってないのに": {
    avant: { japonais: "あんなに近[ちか]くにいたのに", traduction: "Nous étions pourtant si proches," },
    apres: { japonais: "やっぱり寒[さむ]さには弱[よわ]い", traduction: "Décidément, je supporte mal le froid." }
  },
  "3636|幸せの味付けを調べてみたんだけど": {
    avant: { japonais: "今日[きょう]はカレーライスだよ", traduction: "Aujourd'hui, c'est riz au curry." },
    apres: { japonais: "それぞれの“さじ”加減[かげん]らしいからさ", traduction: "il paraît que chacun a sa façon de doser." }
  },
  "さながらロンリー|人生は楽しまないとネ!": {
    avant: { japonais: "「Let's go party night!」", traduction: "« Let's go party night ! »" }
  },
  "from 四階の角部屋|少しだけいいかい?": {
    avant: { japonais: "from 四階[よんかい]の角部屋[かどべや]", traduction: "Depuis la chambre d'angle, au quatrième." },
    apres: { japonais: "触[ふ]れてもいいかい?", traduction: "Je peux te toucher, dis ?" }
  },
  "from 四階の角部屋|それとももっかい忘れたフリして、する?": {
    avant: { japonais: "なんて言[い]ったらどうする?殴[なぐ]る蹴[け]る?", traduction: "Si je disais ça, tu ferais quoi ? Des coups de poing, des coups de pied ?" },
    apres: { japonais: "始[はじ]まった時[とき]から終[お]わってる", traduction: "C'était fini dès le début." }
  },
  "ジェニファー|クスクスと笑うのはどいつだい?": {
    avant: { japonais: "夢[ゆめ]でも見[み]れたらいいけど", traduction: "Si au moins je pouvais te voir en rêve…" },
    apres: { japonais: "そこにいるのかい?", traduction: "Tu es là, dis ?" }
  },
  "ハート|わがままかしら？": {
    avant: { japonais: "さようならは嫌[いや]", traduction: "Je ne veux pas d'adieu." },
    apres: { japonais: "ただ貴方[あなた]の、貴方[あなた]の心[こころ]を奪[うば]えたら...", traduction: "Si seulement je pouvais ravir ton cœur, le tien…" }
  },
  "愛を伝えたいだとか|それに割れてしまった目玉焼き": {
    avant: { japonais: "すべて心地[ここち]いいさ", traduction: "Tout est agréable, vraiment." },
    apres: { japonais: "ついてないなあ", traduction: "Pas de chance…" }
  },
  "そんな風に生きている|それでよければいつだって": {
    avant: { japonais: "不幸[ふこう]みたいな顔[かお]はできる", traduction: "je sais prendre un air malheureux." },
    apres: { japonais: "いつだってそうしてみせるわ", traduction: "quand tu veux, je te montrerai que j'en suis capable." }
  },
  "そんな風に生きている|いつだってそうしてみせるわ": {
    avant: { japonais: "それでよければいつだって", traduction: "Si cela te suffit, quand tu veux," },
    apres: { japonais: "そんなことで救[すく]われるなら", traduction: "Si cela suffit à me sauver," }
  },
  "スーパーガール|それでも君の世界とは離れがたい": {
    avant: { japonais: "僕[ぼく]は尖[とが]った台詞[せりふ]で君[きみ]を斬[き]りつけたりしているんだ", traduction: "Moi, je te lacère de répliques acérées." },
    apres: { japonais: "僕[ぼく]は矛盾[むじゅん]と理屈[りくつ]で君[きみ]を締[し]め付[つ]けている", traduction: "Je t'enserre de contradictions et de raisonnements." }
  },
  "満月の夜なら|イエスかノーかは別として": {
    avant: { japonais: "僕[ぼく]は見逃[みのが]さない", traduction: "je ne le laisse pas passer." },
    apres: { japonais: "君[きみ]の声仕草[こえしぐさ]が物語[ものがた]る", traduction: "ta voix, tes gestes parlent d'eux-mêmes." }
  },
  "ナウなヤングにバカウケするのは当たり前だのクラッ歌|するとまさかのあの女優にクリソツなちゃんねーロックオン": {
    avant: { japonais: "それに明日[あす]も早[はや]いもんで お先[さき]にテクシーでアディオス", traduction: "Et puis demain je me lève tôt, alors adios, je file en taxi." },
    apres: { japonais: "「ヘイ彼女[かのじょ] お茶[ちゃ]しない?」", traduction: "« Hé, mademoiselle, on va boire un thé ? »" }
  },
  "ねむい|洗濯物かなりめんどくさい": {
    avant: { japonais: "なんで回[まわ]したんだろう", traduction: "Pourquoi ai-je lancé la machine ?" },
    apres: { japonais: "彼[かれ]が脱[ぬ]いだ下着[したぎ]も", traduction: "Ses sous-vêtements qu'il a laissés là," }
  },
  "君はロックを聴かない|さあ腰を下ろしてよ": {
    avant: { japonais: "息[いき]を止[と]めすぎたぜ", traduction: "J'ai trop retenu mon souffle." },
    apres: { japonais: "フツフツと鳴[な]り出[だ]す青春[せいしゅん]の音[おと]", traduction: "Le son de la jeunesse se met à crépiter." }
  },
  "RING DING|明日晴れても晴れなくてもどこか行こう": {
    avant: { japonais: "バカらしくなって気[き]づけばお腹[なか]が減[へ]ってるだろう", traduction: "Tout ça te paraîtra idiot et, sans t'en rendre compte, tu auras faim." },
    apres: { japonais: "指切[ゆびき]りげんまん嘘[うそ]ついたら", traduction: "Croix de bois, croix de fer : si tu mens," }
  },
  "ら、のはなし|僕が生きるとすれば": {
    avant: { japonais: "君[きみ]のいない世界[せかい]で", traduction: "Dans un monde sans toi," },
    apres: { japonais: "それはそれはとても", traduction: "ce serait vraiment, vraiment" }
  },
  "ら、のはなし|誰かの不幸を願いつつあるよ": {
    avant: { japonais: "君[きみ]との恋[こい]を望[のぞ]みながら", traduction: "Tout en espérant ton amour," },
    apres: { japonais: "そんな僕[ぼく]の思[おも]いつきも", traduction: "Mais ces idées qui me viennent," }
  },
  "ビーナスベルト|つまりは僕にまだ可能性が有ることも": {
    avant: { japonais: "蹴[け]り飛[と]ばした想[おも]いを教[おし]えて", traduction: "Dis-moi ces sentiments que tu as envoyés valser." },
    apres: { japonais: "君[きみ]の表情[ひょうじょう]見[み]てれば分[わ]かったよ", traduction: "je l'ai compris rien qu'à voir ton visage." }
  },
  "ビーナスベルト|新しい場所が気になる事も": {
    avant: { japonais: "卑怯[ひきょう]な女[おんな]だって思[おも]われるのが怖[こわ]い事[こと]も", traduction: "Que tu as peur de passer pour une lâche," },
    apres: { japonais: "正直[しょうじき]辛[つら]いけど ちょっぴり慣[な]れてる", traduction: "Franchement c'est dur, mais j'y suis un peu habitué." }
  },
  "MIO|べつに優しさなんていらないよ": {
    avant: { japonais: "したくはないよ", traduction: "et je n'en veux pas." },
    apres: { japonais: "君[きみ]のことさ", traduction: "C'est de toi que je parle." }
  },
  "MIO|少しずつ変わっていったね": {
    avant: { japonais: "あなたは会[あ]うたびに", traduction: "À chacune de nos rencontres," },
    apres: { japonais: "ちっぽけなことでさえも", traduction: "Même les choses les plus infimes" }
  },
  "GOOD NIGHT BABY|2人きりだけど": {
    avant: { japonais: "キスはしないでおこう?", traduction: "ne nous embrassons pas, d'accord ?" },
    apres: { japonais: "さよならの後[あと]に", traduction: "Pour qu'après l'au revoir," }
  },
  "夢追いベンガル|どうせ暇だからあと5分寝かせて": {
    avant: { japonais: "その時[とき]考[かんが]えりゃいい", traduction: "il sera bien temps d'y penser." },
    apres: { japonais: "セックスピストルズ の目覚[めざ]ましがうるせー", traduction: "Ce réveil aux Sex Pistols, quel boucan." }
  },
  "ノット・オーケー|せめてそれまでは": {
    avant: { japonais: "理解[りかい]はできるだろう", traduction: "tu peux le comprendre, non ?" },
    apres: { japonais: "ふたりで ふたりで", traduction: "tous les deux, tous les deux," }
  },
  "おばけがでるぞ|暗闇の中を": {
    avant: { japonais: "おばけがでるぞ", traduction: "Un fantôme va sortir !" },
    apres: { japonais: "てかり ひかり", traduction: "ça luit, ça brille." }
  },
  "好きって言ってよ|貴方が謝らないかぎり私はあの子を狙い続ける": {
    avant: { japonais: "貴方[あなた]が悪[わる]い 貴方[あなた]が", traduction: "C'est ta faute, c'est toi." },
    apres: { japonais: "死体[したい]が二[ふた]つにならないといいね だから", traduction: "Espérons qu'il n'y aura pas deux cadavres. Alors" }
  },
  "真夏の夜の匂いがする|今夜も帰路にて頭を冷やす": {
    avant: { japonais: "いろいろな問題[もんだい]も溢[あふ]れ出[だ]す", traduction: "Toutes sortes de problèmes débordent aussi." },
    apres: { japonais: "もっと自由[じゆう]に グラスを片手[かたて]に", traduction: "Plus librement, un verre à la main," }
  },
  "○○ちゃん|得意なことも趣味もないおまけに勉強もできないけど": {
    avant: { japonais: "私[わたし]のどこがいけないか そんなの自分[じぶん]が一番[いちばん]に知[し]ってる", traduction: "Ce qui cloche chez moi ? Je suis la mieux placée pour le savoir." },
    apres: { japonais: "私[わたし]は立派[りっぱ]な女[おんな]なの 愛[あい]し愛[あい]されることを夢見[ゆめみ]るの", traduction: "je suis une femme, une vraie : je rêve d'aimer et d'être aimée." }
  },
  "○○ちゃん|私のどこがダメですか?料理だって人並みにできるのに": {
    avant: { japonais: "こんな私[わたし]もおとなになって いろんなことを覚[おぼ]えたわ", traduction: "Même moi, j'ai grandi, et j'ai appris bien des choses." },
    apres: { japonais: "将来[しょうらい]はきっといい女[おんな] 誰[だれ]かもらってね", traduction: "Je ferai sûrement une femme bien : que quelqu'un me prenne, hein." }
  },
  "生きていたんだよな|馬鹿騒ぎした奴らがアホみたいに撮りまくった": {
    avant: { japonais: "そのセリフが集合[しゅうごう]の合図[あいず]なのにな", traduction: "Cette phrase-là, c'est pourtant le signal du rassemblement." },
    apres: { japonais: "冷[つめ]たいアスファルトに流[なが]れるあの血[ち]の何[なん]とも言[い]えない", traduction: "ce sang qui coulait sur l'asphalte froid, d'un rouge indicible" }
  },
  "いつまでも|結局腐りやすい生物でしかないから": {
    avant: { japonais: "結果[けっか]がなきゃ大人[おとな]は見捨[みす]てる", traduction: "sans résultats, les adultes vous laissent tomber." },
    apres: { japonais: "生[い]き急[いそ]ぐ21", traduction: "alors je vis à toute allure, à 21 ans." }
  },
  "朝陽|私遅かれ早かれ後悔するから": {
    avant: { japonais: "なんて言[い]われましても", traduction: "On a beau me dire ça…" },
    apres: { japonais: "何[なん]でもいいよ もう何[なん]でも", traduction: "Peu importe, vraiment, peu importe." }
  },
  "テレパしい|目と目と心でどうにか乗り切ってみよう": {
    avant: { japonais: "傷[きず]つき傷[きず]つけるなら", traduction: "si l'on se blesse et que l'on blesse," },
    apres: { japonais: "言葉[ことば]にすることは難[むずか]しい", traduction: "Mettre des mots, c'est difficile." }
  },
  "強くなっちゃったんだ、ブルー|1ミリたりとも揺れない": {
    avant: { japonais: "ジャックな心[こころ]", traduction: "Mon cœur de « Jack »" },
    apres: { japonais: "それに落[お]ち込[こ]んじゃって、ブルー", traduction: "Et ça me déprime : blues." }
  },
  "憧れてきたんだ|ギターをまた握らせてやろう": {
    avant: { japonais: "掘[ほ]り起[お]こせ 掘[ほ]り起[お]こそう", traduction: "Déterrez-le, déterrons-le," },
    apres: { japonais: "私[わたし]の知[し]ってるシンガーソングライター", traduction: "L'auteur-compositeur-interprète que je connais" }
  },
  "マリーゴールド|吐き出せるほど強くはない": {
    avant: { japonais: "本当[ほんとう]の気持[きも]ち全部[ぜんぶ]", traduction: "Tout ce que je ressens vraiment," },
    apres: { japonais: "でも不思議[ふしぎ]なくらいに", traduction: "Mais, c'est étrange à quel point," }
  }
};
