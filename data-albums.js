// ============================================================
//  ALBUMS : chaque chanson rangée dans son album d'origine (listes
//  d'Apple Music), dans l'ordre des pistes. Sert à la page Chansons.
// ============================================================

const ALBUMS = [
 {
  "nom": "tamago",
  "type": "Mini-album indépendant",
  "annee": "2015",
  "image": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/9d/d8/71/9dd871a1-ed85-4e26-2c3b-c329bde1cfd2/LACD-0255_jkt_WEB.jpg/200x200bb.jpg",
  "lien": "https://music.apple.com/jp/album/tamago/1438498572",
  "chansons": [
   "貴方解剖純愛歌 ～死ね～",
   "分かってくれよ",
   "お互い様やん",
   "○○ちゃん",
   "夜行バス",
   "幸せになりたい",
   "強がりました",
   "ナウなヤングにバカウケするのは当たり前だのクラッ歌",
   "いいことしましょ"
  ]
 },
 {
  "nom": "憎まれっ子世に憚る",
  "type": "Mini-album indépendant",
  "annee": "2015",
  "image": "https://is1-ssl.mzstatic.com/image/thumb/Music69/v4/b7/9d/5a/b79d5aef-a0fd-dc96-abcc-9bf959bc01a8/ANTCD-16657.jpg/200x200bb.jpg",
  "lien": "https://music.apple.com/jp/album/%E6%86%8E%E3%81%BE%E3%82%8C%E3%81%A3%E5%AD%90%E4%B8%96%E3%81%AB%E6%86%9A%E3%82%8B/1061037955",
  "chansons": [
   "どうせ死ぬなら",
   "19歳になりたくない",
   "好きって言ってよ",
   "泥だんごの天才いたよね",
   "おっぱい",
   "私に彼氏ができない理由",
   "ほろ酔い"
  ]
 },
 {
  "nom": "青春のエキサイトメント",
  "type": "1er album",
  "annee": "2017",
  "image": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/d8/7b/7c/d87b7cfd-c88c-1003-bc5d-883882043e33/190295747138.jpg/200x200bb.jpg",
  "lien": "https://music.apple.com/jp/album/excitement-of-youth/1273709789",
  "chansons": [
   "憧れてきたんだ",
   "生きていたんだよな",
   "君はロックを聴かない",
   "マトリョーシカ",
   "ふたりの世界",
   "いつまでも",
   "愛を伝えたいだとか",
   "風のささやき",
   "RING DING",
   "ジェニファー",
   "漂白"
  ]
 },
 {
  "nom": "瞬間的シックスセンス",
  "type": "2e album",
  "annee": "2019",
  "image": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3c/3b/f6/3c3bf6e8-1947-347e-f6f0-c857ca4c026f/190295490089.jpg/200x200bb.jpg",
  "lien": "https://music.apple.com/jp/album/momentary-sixth-sense/1446781785",
  "chansons": [
   "満月の夜なら",
   "マリーゴールド",
   "ら、のはなし",
   "二人だけの国",
   "プレゼント",
   "ひかりもの",
   "恋をしたから",
   "夢追いベンガル",
   "今夜このまま",
   "あした世界が終わるとしても",
   "GOOD NIGHT BABY",
   "from 四階の角部屋"
  ]
 },
 {
  "nom": "おいしいパスタがあると聞いて",
  "type": "3e album",
  "annee": "2020",
  "image": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/94/65/50/94655099-7651-8772-6cf7-46a5b9eaf6cb/190295171094.jpg/200x200bb.jpg",
  "lien": "https://music.apple.com/jp/album/heard-that-theres-good-pasta/1525539754",
  "chansons": [
   "黄昏にバカ話をしたあの日を思い出す時を",
   "ハルノヒ",
   "シガレット",
   "さよならの今日に",
   "朝陽",
   "裸の心",
   "マシマロ",
   "空の青さを知る人よ",
   "真夏の夜の匂いがする",
   "ポプリの葉",
   "チカ",
   "そんな風に生きている"
  ]
 },
 {
  "nom": "瞳へ落ちるよレコード",
  "type": "4e album",
  "annee": "2022",
  "image": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/21/ed/60/21ed6035-13b7-1347-0341-da967f77f04c/5054197247347.jpg/200x200bb.jpg",
  "lien": "https://music.apple.com/jp/album/falling-into-your-eyes-record/1634772798",
  "chansons": [
   "双葉",
   "スーパーガール",
   "姿",
   "初恋が泣いている",
   "君のこゝろ",
   "3636",
   "強くなっちゃったんだ、ブルー",
   "桜が降る夜は",
   "ペルソナの記憶",
   "神秘の領域へ",
   "ハート",
   "インタビュー",
   "愛を知るまでは"
  ]
 },
 {
  "nom": "猫にジェラシー",
  "type": "5e album",
  "annee": "2024",
  "image": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a3/6e/09/a36e0990-66d0-6509-2fb7-e9e9082379f1/5021732417251.jpg/200x200bb.jpg",
  "lien": "https://music.apple.com/jp/album/jealous-of-cats/1753269545",
  "chansons": [
   "私に見せてよ",
   "会いに行くのに",
   "ラッキーカラー",
   "駅前喫茶ポプラ",
   "あのね",
   "ノット・オーケー",
   "リズム64",
   "炎曜日",
   "偽者",
   "朝が嫌い",
   "ざらめ",
   "愛の花",
   "猫にジェラシー"
  ]
 },
 {
  "nom": "AIMYON B-SIDE COLLECTION ALBUM",
  "type": "Compilation des faces B",
  "annee": "2026",
  "image": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/2b/e6/d5/2be6d56d-7b26-87a6-272b-620f7fa5b3ef/1200214726270.jpg/200x200bb.jpg",
  "lien": "https://music.apple.com/jp/album/aimyon-b-side-collection-album/6797516678",
  "chansons": [
   "今日の芸術",
   "君がいない夜を越えられやしない",
   "ハッピー",
   "MIO",
   "青春と青春と青春",
   "わかってない",
   "あなたのために",
   "鯉",
   "テレパしい",
   "葵",
   "ユラユラ",
   "ミニスカートとハイライト",
   "森のくまさん",
   "皐月",
   "彼氏有無",
   "die die die",
   "ねむい",
   "おばけがでるぞ"
  ]
 },
 {
  "nom": "Singles hors album",
  "type": "Singles parus après le dernier album",
  "annee": "2025–2026",
  "image": null,
  "lien": null,
  "chansons": [
   "スケッチ",
   "君の夢を聞きながら、僕は笑えるアイデアを!",
   "いちについて",
   "ビーナスベルト",
   "おじゃまします",
   "さながらロンリー",
   "猫"
  ]
 },
 {
  "nom": "Raretés",
  "type": "Chanson de concert et CD bonus",
  "annee": "",
  "image": null,
  "lien": null,
  "chansons": [
   "1995",
   "サラバ"
  ]
 },
 {
  "nom": "Collaborations",
  "type": "Avec d'autres artistes",
  "annee": "",
  "image": null,
  "lien": null,
  "chansons": [
   "キスだけで",
   "怪物さん",
   "泣き出しそうだよ",
   "栞"
  ]
 }
];
