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
  }
};
