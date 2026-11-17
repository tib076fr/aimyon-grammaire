// ============================================================
//  ANECDOTES sur les chansons, affichées en cliquant sur leur titre.
//  Chaque anecdote vient d'une interview d'Aimyon ou d'un commentaire
//  officiel repris par la presse musicale ; la source est indiquée.
//  Une chanson absente de cette liste n'a pas d'infobulle.
// ============================================================

const ANECDOTES = {
  "マリーゴールド": {
    textes: [
      "En l'écrivant, Aimyon a eu en tête l'image d'une fille en chapeau de paille, vue de dos, qui ressemblait à un souci (marigold) se balançant. Elle dit que si elle n'avait pas saisi cette image au vol, la chanson n'existerait pas.",
      "Elle l'a chantée lors de sa première participation au Kōhaku de la NHK, fin 2018."
    ],
    sources: [
      { nom: "Real Sound, interview de février 2019", url: "https://realsound.jp/2019/02/post-318932.html" }
    ]
  },
  "生きていたんだよな": {
    textes: [
      "C'est la dernière chanson qu'elle a écrite chez ses parents, avant de s'installer à Tokyo ; elle l'a composée en une journée environ.",
      "C'était la première fois qu'elle ouvrait une chanson par un passage parlé. Le texte part d'un fait divers : elle dit ne pas pouvoir rester simple spectatrice devant une nouvelle qui l'accable.",
      "Jouée pour la première fois en mars 2016, elle est devenue son premier single en major en novembre 2016."
    ],
    sources: [
      { nom: "Real Sound, interview de novembre 2016", url: "https://realsound.jp/2016/11/post-10335.html" },
      { nom: "Real Sound, interview de septembre 2017", url: "https://realsound.jp/2017/09/post-108621.html" }
    ]
  },
  "満月の夜なら": {
    textes: [
      "Écrite à la mi-janvier 2018, un mois où elle a composé une dizaine de chansons : aucune ne lui semblait convenir comme titre principal du single, jusqu'à celle-ci.",
      "Elle voulait retrouver un balancement « groovy », sans refaire 愛を伝えたいだとか ni revenir à la pop de 君はロックを聴かない."
    ],
    sources: [
      { nom: "Real Sound, interview d'avril 2018", url: "https://realsound.jp/2018/04/post-178733.html" }
    ]
  },
  "君はロックを聴かない": {
    textes: [
      "Son troisième single. Il a dépassé les 100 millions d'écoutes en streaming en novembre 2019 et est ressorti en vinyle 45 tours en 2021, avec 青春と青春と青春 en face B."
    ],
    sources: [
      { nom: "Real Sound, mai 2021", url: "https://realsound.jp/2021/05/post-758141.html" }
    ]
  },
  "青春と青春と青春": {
    textes: [
      "Face B du single 君はロックを聴かない, rééditée avec lui en vinyle 45 tours en 2021."
    ],
    sources: [
      { nom: "Real Sound, mai 2021", url: "https://realsound.jp/2021/05/post-758141.html" }
    ]
  },
  "ひかりもの": {
    textes: [
      "Première chanson écrite en 2018, sous le coup de la tristesse et de la colère, ce qui lui arrive rarement depuis son adolescence.",
      "Le titre parle d'elle : comme l'étoile la plus brillante, qu'on regarde un instant avant de chercher les autres, elle pensait n'attirer l'attention que pour un temps."
    ],
    sources: [
      { nom: "Real Sound, interview de février 2019", url: "https://realsound.jp/2019/02/post-318932.html" }
    ]
  },
  "from 四階の角部屋": {
    textes: [
      "Dernier titre de l'album 瞬間的シックスセンス, produit par Shigekazu Aida (« Aigon »), avec qui elle travaillait pour la première fois. Elle dit que grâce à lui, la chanson referme bien l'album."
    ],
    sources: [
      { nom: "Real Sound, interview de février 2019", url: "https://realsound.jp/2019/02/post-318932.html" }
    ]
  },
  "あなたのために": {
    textes: [
      "Face B de マリーゴールド, et première collaboration avec le producteur Tōmi Yō, dont Aimyon se dit fan."
    ],
    sources: [
      { nom: "Real Sound, interview de février 2019", url: "https://realsound.jp/2019/02/post-318932.html" }
    ]
  },
  "ら、のはなし": {
    textes: [
      "Produite par Tōmi Yō, comme ひかりもの et 夢追いベンガル sur le même album : Aimyon, fan de son travail, lui a confié ces trois titres."
    ],
    sources: [
      { nom: "Real Sound, interview de février 2019", url: "https://realsound.jp/2019/02/post-318932.html" }
    ]
  },
  "夢追いベンガル": {
    textes: [
      "Produite par Tōmi Yō, comme ひかりもの et ら、のはなし sur le même album : Aimyon, fan de son travail, lui a confié ces trois titres."
    ],
    sources: [
      { nom: "Real Sound, interview de février 2019", url: "https://realsound.jp/2019/02/post-318932.html" }
    ]
  },
  "恋をしたから": {
    textes: [
      "L'arrangeur y a ajouté une clarinette ; Aimyon raconte avoir été émue en découvrant ce que cet instrument apportait."
    ],
    sources: [
      { nom: "Real Sound, interview de février 2019", url: "https://realsound.jp/2019/02/post-318932.html" }
    ]
  },
  "19歳になりたくない": {
    textes: [
      "Parue sur le mini-album indépendant 憎まれっ子世に憚る. Aimyon la cite comme exemple de ses chansons de l'époque indépendante."
    ],
    sources: [
      { nom: "Real Sound, interview de février 2019", url: "https://realsound.jp/2019/02/post-318932.html" }
    ]
  },
  "いつまでも": {
    textes: [
      "Écrite juste après son arrivée à Tokyo, à un moment où elle se demandait ce qu'elle allait devenir."
    ],
    sources: [
      { nom: "Real Sound, interview de septembre 2017", url: "https://realsound.jp/2017/09/post-108621.html" }
    ]
  },
  "憧れてきたんだ": {
    textes: [
      "Elle ouvre l'album 青春のエキサイトメント comme le « il était une fois » d'un conte : Aimyon y dit qu'elle fait de la musique parce qu'elle a admiré beaucoup d'artistes."
    ],
    sources: [
      { nom: "Real Sound, interview de septembre 2017", url: "https://realsound.jp/2017/09/post-108621.html" }
    ]
  },
  "マトリョーシカ": {
    textes: [
      "L'idée vient d'une poupée russe qu'elle avait chez elle et qu'elle trouvait inquiétante : on a beau l'ouvrir, un autre visage apparaît, ce qui lui a semblé dire quelque chose des faces cachées des gens."
    ],
    sources: [
      { nom: "Real Sound, interview de septembre 2017", url: "https://realsound.jp/2017/09/post-108621.html" }
    ]
  },
  "漂白": {
    textes: [
      "C'est sa première chanson écrite sur commande, pour un film. En réécoutant l'album, elle l'a jugée parmi ses cinq meilleures et l'a placée à la fin : le titre, « blanchiment », invite à tout remettre à blanc avant de réécouter depuis le début."
    ],
    sources: [
      { nom: "Real Sound, interview de septembre 2017", url: "https://realsound.jp/2017/09/post-108621.html" }
    ]
  },
  "どうせ死ぬなら": {
    textes: [
      "Écrite vers 19 ans, « comme on rédige un testament ». Aimyon explique qu'elle vit avec une grande peur de la mort, particulièrement forte à cet âge."
    ],
    sources: [
      { nom: "Real Sound, interview de décembre 2015", url: "https://realsound.jp/2015/12/post-5663.html" }
    ]
  },
  "好きって言ってよ": {
    textes: [
      "L'histoire se passe à Kappabashi, la rue des ustensiles de cuisine d'Asakusa, un quartier qu'elle aime. Le triangle amoureux s'inspire de ce que lui ont raconté des amies."
    ],
    sources: [
      { nom: "Real Sound, interview de décembre 2015", url: "https://realsound.jp/2015/12/post-5663.html" }
    ]
  },
  "わかってない": {
    textes: [
      "Face B du single 満月の夜なら. On y voit souvent une réponse à 分かってくれよ : l'une est écrite du point de vue d'un homme, l'autre d'une femme. Aimyon dit ne pas l'avoir cherché, mais trouve l'idée amusante."
    ],
    sources: [
      { nom: "Real Sound, interview d'avril 2018", url: "https://realsound.jp/2018/04/post-178733.html" }
    ]
  },
  "分かってくれよ": {
    textes: [
      "Parue en 2015 sur le mini-album tamago. On voit souvent dans わかってない (2018) sa réponse : celle-ci est écrite du point de vue d'un homme, l'autre d'une femme."
    ],
    sources: [
      { nom: "Real Sound, interview d'avril 2018", url: "https://realsound.jp/2018/04/post-178733.html" }
    ]
  },
  "猫": {
    textes: [
      "Aimyon l'a écrite en 2017 pour le groupe DISH//, à sa demande. Elle disait alors en riant qu'elle aimerait bien la chanter elle-même."
    ],
    sources: [
      { nom: "Real Sound, interview d'avril 2018", url: "https://realsound.jp/2018/04/post-178733.html" }
    ]
  },
  "RING DING": {
    textes: [
      "La chanson est née d'une phrase qui lui est venue : « soupirer, c'est gaspiller de l'oxygène ».",
      "En 2026, pour ses dix ans de carrière, les fans l'ont élue (plus de 43 000 votes) pour recevoir un clip."
    ],
    sources: [
      { nom: "Real Sound, juillet 2026", url: "https://realsound.jp/2026/07/post-2476476.html" }
    ]
  },
  "ハート": {
    textes: [
      "Générique du drama 婚姻届に判を捺しただけですが (TBS, 2021).",
      "Contrairement à son habitude, Aimyon a réécrit le texte de nombreuses fois. Elle remarque qu'un cœur est rond en haut et pointu en bas : mignon, mais il a l'air de faire mal."
    ],
    sources: [
      { nom: "Real Sound, septembre 2021", url: "https://realsound.jp/2021/09/post-858618.html" }
    ]
  },
  "ざらめ": {
    textes: [
      "Générique du drama 降り積もれ孤独な死よ (2024). C'était la première fois qu'Aimyon travaillait pour un drama à suspense."
    ],
    sources: [
      { nom: "Real Sound, juin 2024", url: "https://realsound.jp/2024/06/post-1703386.html" }
    ]
  },
  "裸の心": {
    textes: [
      "Générique du drama 私の家政夫ナギサさん (TBS, 2020) et dixième single.",
      "Le clip, réalisé par Tomokazu Yamada, est tourné sans coupe ; Aimyon y chante en partie sous une douche. Elle note que c'était la première fois depuis マリーゴールド qu'elle tournait dans une douche face à ce réalisateur."
    ],
    sources: [
      { nom: "Real Sound, juin 2020", url: "https://realsound.jp/2020/06/post-570221.html" }
    ]
  },
  "あのね": {
    textes: [
      "Chanson du film 窓ぎわのトットちゃん (2023). Le clip a été tourné dans des dunes."
    ],
    sources: [
      { nom: "Real Sound, décembre 2023", url: "https://realsound.jp/2023/12/post-1510254.html" }
    ]
  },
  "会いに行くのに": {
    textes: [
      "Générique du drama アンメット (2024). À propos du clip, Aimyon dit qu'il l'a amenée à se demander dans quels moments on a envie de voir quelqu'un."
    ],
    sources: [
      { nom: "Real Sound, mai 2024", url: "https://realsound.jp/2024/05/post-1668742.html" }
    ]
  },
  "ビーナスベルト": {
    textes: [
      "Titre principal de son dix-huitième single (2025). Le clip, réalisé par Tomokazu Yamada, est tourné en une seule prise."
    ],
    sources: [
      { nom: "Real Sound, octobre 2025", url: "https://realsound.jp/2025/10/post-2196487.html" }
    ]
  },
  "ノット・オーケー": {
    textes: [
      "Sortie par surprise en octobre 2023. Aimyon commente : dans la vie, il y a bien plus de moments où ça ne va pas, mais le temps passe sans pitié et il faut avancer."
    ],
    sources: [
      { nom: "Real Sound, octobre 2023", url: "https://realsound.jp/2023/10/post-1457665.html" }
    ]
  },
  "リズム64": {
    textes: [
      "Sa première chanson écrite pour une publicité (Shiseido), sortie en février 2024. Elle parle des choix que l'on fait en avançant dans la vie."
    ],
    sources: [
      { nom: "Real Sound, janvier 2024", url: "https://realsound.jp/2024/01/post-1548072.html" }
    ]
  },
  "さながらロンリー": {
    textes: [
      "Générique du drama もうパパ！ (2026). Aimyon dit avoir eu envie d'en chanter le générique après avoir lu le scénario du premier épisode."
    ],
    sources: [
      { nom: "Real Sound, septembre 2026", url: "https://realsound.jp/2026/09/post-2526774.html" }
    ]
  },
  "さよならの今日に": {
    textes: [
      "Le clip, réalisé par Tomokazu Yamada, a été tourné dans un quartier de Shibuya alors en plein réaménagement, utilisé pour la première fois pour un clip. Aimyon note qu'on ne pourra plus jamais filmer ce paysage."
    ],
    sources: [
      { nom: "Real Sound, février 2020", url: "https://realsound.jp/2020/02/post-503687.html" }
    ]
  },
  "ハルノヒ": {
    textes: [
      "Écrite pour le film « Crayon Shin-chan » de 2019, consacré au voyage de noces tardif des parents de Shin-chan. Aimyon, fan de la série depuis l'enfance, a pris le point de vue du père, Hiroshi : la chanson s'ouvre sur le quai de la gare de Kita-Senju, là où il a demandé Misae en mariage.",
      "Elle raconte que c'est un autre film de la série, « L'Empire des adultes » (2001), qui lui a fait découvrir la Tour du Soleil et l'a rendue fan de Tarō Okamoto."
    ],
    sources: [
      { nom: "Real Sound, annonce et commentaire d'Aimyon, février 2019", url: "https://realsound.jp/2019/02/post-315373.html" }
    ]
  },
  "3636": {
    textes: [
      "Aimyon dit être partie d'un souvenir : le jour où la boîte à colis de son immeuble ne s'ouvrait plus, elle a eu l'impression que quelqu'un lui fermait son cœur, et s'est lancée dans « un voyage imaginaire sans fin » : ne voulait-il plus d'elle ?",
      "Le clip, réalisé par Classic 6, prend la boîte à colis comme fil conducteur."
    ],
    sources: [
      { nom: "Real Sound, sortie du clip et commentaire d'Aimyon, août 2022", url: "https://realsound.jp/2022/08/post-1105075.html" }
    ]
  },
  "マシマロ": {
    textes: [
      "Premier clip réalisé par Tonda Hayashi Ran, qui signait jusque-là ses pochettes et ses photos : un clip entièrement en collage. Aimyon dit ne s'être jamais vue ainsi, et que le tournage a été fait « de rires, et de larmes à force de rire »."
    ],
    sources: [
      { nom: "Real Sound, sortie du clip et commentaire d'Aimyon, septembre 2020", url: "https://realsound.jp/2020/09/post-616680.html" }
    ]
  },
  "双葉": {
    textes: [
      "Composée pour l'émission de la NHK « Aimyon 18-sai », à partir des messages et vidéos envoyés par 1 000 jeunes de 18 ans de tout le Japon. Le spectacle a eu lieu le 6 mars 2022, jour de l'anniversaire d'Aimyon."
    ],
    sources: [
      { nom: "Real Sound, annonce de l'émission, mars 2022", url: "https://realsound.jp/2022/03/post-988794.html" }
    ]
  },
  "愛の花": {
    textes: [
      "Chanson du générique du feuilleton du matin de la NHK « Ranman » (2023), inspiré de la vie du botaniste Tomitarō Makino.",
      "À propos du clip, Aimyon dit qu'on croirait y entendre sa voix, sa respiration, les battements de son cœur et le froissement des arbres : « J'ai pu conserver le fait d'être vivante tel quel. » Une version guitare-voix a ensuite été filmée au jardin botanique Makino, à Kōchi."
    ],
    sources: [
      { nom: "Real Sound, sortie du clip et commentaire d'Aimyon, mai 2023", url: "https://realsound.jp/2023/05/post-1323413.html" },
      { nom: "Real Sound, clip guitare-voix, septembre 2023", url: "https://realsound.jp/2023/09/post-1439226.html" }
    ]
  },
  "いちについて": {
    textes: [
      "Écrite pour le drame « 19-banme no Karte » (TBS, 2025). C'était la première fois qu'Aimyon signait le générique d'un « Nichiyō Gekijō », la case du dimanche soir de TBS, qu'elle dit adorer."
    ],
    sources: [
      { nom: "Real Sound, annonce et commentaire d'Aimyon, juillet 2025", url: "https://realsound.jp/2025/07/post-2076113.html" }
    ]
  },
  "スケッチ": {
    textes: [
      "Écrite pour le film « Doraemon : Nobita et le monde des tableaux » (2025), dont elle signe le générique ; « 君の夢を聞きながら、僕は笑えるアイデアを! », sur le même single, en est la chanson insérée."
    ],
    sources: [
      { nom: "Real Sound, annonce du single, janvier 2025", url: "https://realsound.jp/2025/01/post-1912590.html" }
    ]
  },
  "君の夢を聞きながら、僕は笑えるアイデアを!": {
    textes: [
      "Chanson insérée du film « Doraemon : Nobita et le monde des tableaux » (2025), écrite pour lui ; elle partage un single avec « スケッチ », le générique du film."
    ],
    sources: [
      { nom: "Real Sound, annonce du single, janvier 2025", url: "https://realsound.jp/2025/01/post-1912590.html" }
    ]
  },
  "愛を伝えたいだとか": {
    textes: [
      "Son clip a été tourné en une seule prise, avec une seule caméra et sans montage, dans un petit van aménagé, par le réalisateur Kyōtarō Hayashi. Pour ses dix ans de carrière en major, ce van a été exposé à Tokyo, Osaka et dans le département d'Aichi en 2026."
    ],
    sources: [
      { nom: "Real Sound, reportage sur l'exposition, août 2026", url: "https://realsound.jp/2026/08/post-2486976.html" }
    ]
  },
  "初恋が泣いている": {
    textes: [
      "Générique du drama « Koi nante, honki de yatte dō suru no? » (Kansai TV / Fuji TV, 2022). La pochette, signée Tonda Hayashi Ran, montre un cadenas en forme de cœur."
    ],
    sources: [
      { nom: "Real Sound, annonce du single, avril 2022", url: "https://realsound.jp/2022/04/post-1011403.html" }
    ]
  },
  "貴方解剖純愛歌 ～死ね～": {
    textes: [
      "Son premier disque (2015). Aimyon raconte l'avoir écrite en une dizaine de minutes : le mot « ねえ », qu'on adresse à quelqu'un qu'on aime, a appelé de lui-même la rime « 死ね ». Elle n'avait pas cherché à placer ce mot.",
      "Elle n'y parle pas d'elle : elle voulait donner voix à quelque chose de profond chez les femmes, une chanson d'amour « pure » et désespérée. Les radios ont refusé de la diffuser."
    ],
    sources: [
      { nom: "BARKS, interview de mars 2015", url: "https://barks.jp/news/739856/" },
      { nom: "BARKS, interview de mai 2015", url: "https://barks.jp/news/744738/" }
    ]
  },
  "○○ちゃん": {
    textes: [
      "Écrite pour sa meilleure amie, environ un an avant la sortie de « tamago » (2015). Beaucoup de gens lui demandaient une chanson ; elle n'a accepté que pour cette amie, dont elle trouvait la vie passionnante.",
      "Elle dit que rien de joyeux ne lui est venu, et qu'elle avait prévenu son amie que ce serait « un peu cru »."
    ],
    sources: [
      { nom: "BARKS, interview de mai 2015", url: "https://barks.jp/news/744738/" }
    ]
  },
  "幸せになりたい": {
    textes: [
      "Aimyon la décrit comme la chanson d'une femme qui subit des violences. Pendant l'enregistrement, on lui a demandé si c'était son histoire : elle répond que presque toutes ses chansons sont de l'imagination."
    ],
    sources: [
      { nom: "BARKS, interview de mai 2015", url: "https://barks.jp/news/744738/" }
    ]
  },
  "あした世界が終わるとしても": {
    textes: [
      "Générique du film d'animation du même titre (2019), dont « ら、のはなし » est aussi une chanson. Aimyon a écrit les deux en se mettant à la place du héros, Shin.",
      "Elle a pu travailler à partir d'une maquette animée du film, et non d'un simple scénario, ce qui l'a aidée."
    ],
    sources: [
      { nom: "SPICE, entretien avec le réalisateur Yūhei Sakuragi, février 2019", url: "https://spice.eplus.jp/articles/224742" }
    ]
  },
  "ふたりの世界": {
    textes: [
      "Aimyon dit que cette chanson lui a permis, pour la première fois, de parler franchement de sexe dans un texte, et qu'elle compte continuer à écrire des chansons sensuelles."
    ],
    sources: [
      { nom: "Numéro TOKYO, interview de mai 2018", url: "https://numero.jp/talks49/" }
    ]
  }
};

// ---- Compléments tirés de BARKS, CINRA, Numéro TOKYO, SKREAM! et SPICE ----
ANECDOTES["マリーゴールド"].textes.push(
  "Elle raconte que l'image du refrain lui est « tombée dans la tête » d'un coup, et qu'il faut savoir saisir ce genre d'instant : c'est ce qui a donné son titre à l'album « 瞬間的シックスセンス » (« sixième sens du moment »).",
  "Sûre d'elle dès le premier jet, elle avait annoncé à son équipe qu'elle en ferait un single, et que si le monde n'écoutait pas cette chanson-là, elle ne pourrait plus faire de musique.");
ANECDOTES["マリーゴールド"].sources.push(
  { nom: "CINRA, interview de 2018 (sortie de « 瞬間的シックスセンス »)", url: "https://www.cinra.net/article/interview-201902-aimyong" },
  { nom: "SKREAM!, interview de février 2019", url: "https://skream.jp/interview/2019/02/aimyong.php" },
  { nom: "Numéro TOKYO, interview de novembre 2020", url: "https://numero.jp/interview218/" });
ANECDOTES["満月の夜なら"].textes.push(
  "Elle voulait surprendre après « 君はロックを聴かない », très J-pop. Grande lectrice de romans érotiques pour apprendre l'art du sous-entendu, elle s'amuse de voir chacun imaginer ce que cache un mot aussi anodin qu'« アイスクリーム ».",
  "Elle dit aussi adorer faire rimer les mots, ce qu'elle fait beaucoup ici.");
ANECDOTES["満月の夜なら"].sources.push(
  { nom: "CINRA, interview d'avril 2018", url: "https://www.cinra.net/article/interview-201804-aimyong" },
  { nom: "Numéro TOKYO, interview de mai 2018", url: "https://numero.jp/talks49/" });
ANECDOTES["わかってない"].textes.push(
  "Écrite environ deux ans avant sa sortie en face B de « 満月の夜なら » (2018). Beaucoup d'auditeurs l'ont entendue comme la réponse de la femme de 満月の夜なら ; ce n'était pas voulu, mais Aimyon dit en être ravie.");
ANECDOTES["わかってない"].sources.push(
  { nom: "CINRA, interview d'avril 2018", url: "https://www.cinra.net/article/interview-201804-aimyong" });
ANECDOTES["ひかりもの"].textes.push(
  "Le titre ne parle pas de poisson : pour elle, « ひかりもの » était un mot négatif. En 2018, elle se voyait comme l'étoile la plus brillante du moment, celle qu'on regarde avant de se tourner vers une autre.");
ANECDOTES["ひかりもの"].sources.push(
  { nom: "CINRA, interview de 2018 (sortie de « 瞬間的シックスセンス »)", url: "https://www.cinra.net/article/interview-201902-aimyong" });
ANECDOTES["君はロックを聴かない"].textes.push(
  "Avec « マリーゴールド », c'est la chanson dont elle a senti tout de suite qu'elle « marcherait ». Elle dit que ces deux titres lui ont appris à faire confiance à son intuition.");
ANECDOTES["君はロックを聴かない"].sources.push(
  { nom: "CINRA, interview de 2018 (sortie de « 瞬間的シックスセンス »)", url: "https://www.cinra.net/article/interview-201902-aimyong" });
ANECDOTES["生きていたんだよな"].textes.push(
  "Elle avait écrit une autre chanson ouverte par un passage parlé, plus proche d'une chanson d'amour ordinaire ; c'est son label qui a choisi celle-ci pour ses débuts en major.",
  "Aucun des personnages (celle qui saute, les badauds, les téléspectateurs) n'y parle à la première personne. Elle ne la voit pas comme une chanson négative.");
ANECDOTES["生きていたんだよな"].sources.push(
  { nom: "BARKS, interview de novembre 2016", url: "https://barks.jp/news/777907/" });
ANECDOTES["19歳になりたくない"].textes.push(
  "Écrite à 18 ans. Elle dit qu'à l'époque, elle regardait le suicide avec un esprit un peu tordu, et que son regard a changé après ses vingt ans.");
ANECDOTES["19歳になりたくない"].sources.push(
  { nom: "BARKS, interview de novembre 2016", url: "https://barks.jp/news/777907/" });
ANECDOTES["愛を伝えたいだとか"].textes.push(
  "Après « 生きていたんだよな », elle voulait éviter qu'on la range dans la case des chansons sombres. On lui a dit que le morceau sonnait « city pop » : elle refuse ce rapprochement et regrette qu'on juge la musique à travers les modes.");
ANECDOTES["愛を伝えたいだとか"].sources.push(
  { nom: "CINRA, entretien avec Tonda Hayashi Ran, 2017", url: "https://www.cinra.net/article/interview-201705-aimyongran" });
ANECDOTES["ざらめ"].textes.push(
  "C'est l'acteur et chanteur Takumi Kitamura qui lui a fait découvrir le groupe Bialystocks ; son membre Sora Hokimoto a ensuite réalisé le clip de « ざらめ ».");
ANECDOTES["ざらめ"].sources.push(
  { nom: "SPICE, émission « MUSIC FREAKS » (FM802), juin 2026", url: "https://spice.eplus.jp/articles/346742" });
