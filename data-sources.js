// ============================================================
//  LES SOURCES de chaque point de grammaire.
//  Chaque page citée a été ouverte et contrôlée : elle traite bien du point.
//  - Tae Kim : Tae Kim's Guide to Learning Japanese (guidetojapanese.org)
//  - Tofugu  : Tofugu Japanese Grammar (tofugu.com)
//  - Imabi   : IMABI (imabi.org)
//  Quand c'est possible, le lien mène à la section précise de la page
//  (partie après le # dans l'adresse).
//  Une liste vide [] signifie : aucune source vérifiée pour l'instant.
// ============================================================

const SOURCES = {
  "〜です": [
    { nom: "Tae Kim", page: "Polite Form and Verb Stems", url: "https://guidetojapanese.org/learn/grammar/polite#part4" },
    { nom: "Tofugu", page: "です: Japanese Word for Politeness", url: "https://www.tofugu.com/japanese-grammar/desu/" },
    { nom: "Imabi", page: "Copular Sentences II", url: "https://imabi.org/copular-sentences-ii%e3%80%80%e3%82%b3%e3%83%94%e3%83%a5%e3%83%a9%e6%96%87%ef%bc%88%e4%b8%81%e5%af%a7%e4%bd%93%ef%bc%89/#:~:text=The%20Copula%20Verb%20%E3%81%A7%E3%81%99" }
  ],
  "は": [
    { nom: "Tae Kim", page: "Introduction to Particles", url: "https://guidetojapanese.org/learn/grammar/particlesintro#:~:text=The%20%E3%80%8C%E3%81%AF%E3%80%8D%20topic%20particle" },
    { nom: "Tofugu", page: "Particle は: Topic Marker", url: "https://www.tofugu.com/japanese-grammar/particle-wa/" },
    { nom: "Imabi", page: "The Particle は I: The Topic/Contrast Marker", url: "https://imabi.org/the-particle-wa-%e3%81%af-i-the-topic-contrast-marker/" }
  ],
  "が": [
    { nom: "Tae Kim", page: "Introduction to Particles", url: "https://guidetojapanese.org/learn/grammar/particlesintro#:~:text=The%20%E3%80%8C%E3%81%8C%E3%80%8D%20identifier%20particle" },
    { nom: "Tofugu", page: "Particle が: Subject Marker", url: "https://www.tofugu.com/japanese-grammar/particle-ga/" },
    { nom: "Imabi", page: "The Subject Marker が", url: "https://imabi.org/the-particle-ga-i%e3%80%80%e6%a0%bc%e5%8a%a9%e8%a9%9e%e3%80%8c%e3%81%8c%e3%80%8d%e2%91%a0/" }
  ],
  "を": [
    { nom: "Tae Kim", page: "Particles used with verbs", url: "https://guidetojapanese.org/learn/grammar/verbparticles#part2" },
    { nom: "Tofugu", page: "Particle を: Direct Object Marker", url: "https://www.tofugu.com/japanese-grammar/particle-wo/" },
    { nom: "Imabi", page: "The Particle を I", url: "https://imabi.org/the-particle-wo-%e3%82%92-i/" }
  ],
  "に (lieu, temps, destinataire)": [
    { nom: "Tae Kim", page: "Particles used with verbs", url: "https://guidetojapanese.org/learn/grammar/verbparticles#part3" },
    { nom: "Tofugu", page: "Particle に: For Pin Pointing Locations", url: "https://www.tofugu.com/japanese-grammar/particle-ni/" },
    { nom: "Imabi", page: "The Locational Marker に", url: "https://imabi.org/the-particle-ni-%e3%81%ab-i/" }
  ],
  "へ": [
    { nom: "Tae Kim", page: "Particles used with verbs", url: "https://guidetojapanese.org/learn/grammar/verbparticles#part4" },
    { nom: "Tofugu", page: "Particle へ: For Marking Direction", url: "https://www.tofugu.com/japanese-grammar/particle-he/" },
    { nom: "Imabi", page: "The Particle へ", url: "https://imabi.org/the-particle-e-%e3%81%b8/" }
  ],
  "で": [
    { nom: "Tae Kim", page: "Particles used with verbs", url: "https://guidetojapanese.org/learn/grammar/verbparticles#part5" },
    { nom: "Tofugu", page: "Particle で: To Specify How / Where", url: "https://www.tofugu.com/japanese-grammar/particle-de/" },
    { nom: "Imabi", page: "The Particle で I", url: "https://imabi.org/the-particle-de-%e3%81%a7-i/" }
  ],
  "と": [
    { nom: "Tae Kim", page: "Noun-related Particles", url: "https://guidetojapanese.org/learn/grammar/nounparticles#part2" },
    { nom: "Tofugu", page: "Particle と: For Connecting Words Together", url: "https://www.tofugu.com/japanese-grammar/particle-to/" },
    { nom: "Imabi", page: "The Parallel/Case Particle と", url: "https://imabi.org/the-particle-%e3%81%a8-i/" }
  ],
  "も": [
    { nom: "Tae Kim", page: "Introduction to Particles", url: "https://guidetojapanese.org/learn/grammar/particlesintro#:~:text=The%20%E3%80%8C%E3%82%82%E3%80%8D%20inclusive%20topic%20particle" },
    { nom: "Tofugu", page: "Particle も: Addition Marker", url: "https://www.tofugu.com/japanese-grammar/particle-mo/" },
    { nom: "Imabi", page: "The Particle も I: Also/Too", url: "https://imabi.org/the-particle-mo-%e3%82%82-i-also-too/" }
  ],
  "の": [
    { nom: "Tae Kim", page: "Noun-related Particles", url: "https://guidetojapanese.org/learn/grammar/nounparticles#part4" },
    { nom: "Tofugu", page: "Particle の: Noun Modifier", url: "https://www.tofugu.com/japanese-grammar/particle-no-noun-modifier/" },
    { nom: "Imabi", page: "The Attributive Marker の", url: "https://imabi.org/the-case-particle-%e3%81%ae-i/" }
  ],
  "か": [
    { nom: "Tae Kim", page: "The Question Marker", url: "https://guidetojapanese.org/learn/grammar/question#part3" },
    { nom: "Tofugu", page: "Particle か: A Marker of the Unknown", url: "https://www.tofugu.com/japanese-grammar/particle-ka/" },
    { nom: "Imabi", page: "The Particle か I: Basic Questions", url: "https://imabi.org/the-particle-ka-%e3%81%8b-i-basic-questions/" }
  ],
  "や": [
    { nom: "Tae Kim", page: "Noun-related Particles", url: "https://guidetojapanese.org/learn/grammar/nounparticles#part3" },
    { nom: "Tofugu", page: "Particle や For Listing Multiple Items", url: "https://www.tofugu.com/japanese-grammar/particle-ya/" },
    { nom: "Imabi", page: "The Parallel Particle や", url: "https://imabi.org/the-particle-%e3%82%84/" }
  ],
  "〜から〜まで": [
    { nom: "Tae Kim", page: "Particles used with verbs", url: "https://guidetojapanese.org/learn/grammar/verbparticles" },
    { nom: "Tofugu", page: "Particle まで: Endpoint Marker", url: "https://www.tofugu.com/japanese-grammar/particle-made/" },
    { nom: "Imabi", page: "The Particle まで", url: "https://imabi.org/the-particle-%e3%81%be%e3%81%a7/#:~:text=Omitting%20%E3%81%BE%E3%81%A7" }
  ],
  "ね / よ": [
    { nom: "Tae Kim", page: "Review and more sentence-ending particles", url: "https://guidetojapanese.org/learn/grammar/sentence_ending" },
    { nom: "Tofugu", page: "Particle よね", url: "https://www.tofugu.com/japanese-grammar/particle-yone/" },
    { nom: "Imabi", page: "The Final Particles よ & ね", url: "https://imabi.org/%e8%aa%9e%e5%b0%be-i-%e3%82%88-%e3%81%ad/" }
  ],
  "だけ": [
    { nom: "Tae Kim", page: "Expressing Amounts", url: "https://guidetojapanese.org/learn/grammar/amount#part2" },
    { nom: "Tofugu", page: "だけ for \"Only\"", url: "https://www.tofugu.com/japanese-grammar/dake/" },
    { nom: "Imabi", page: "The Particle だけ", url: "https://imabi.org/the-particle-%e3%81%a0%e3%81%91/#:~:text=The%20Adverbial%20Particle%20%E3%81%A0%E3%81%91" }
  ],
  "こ・そ・あ・ど": [
    { nom: "Tofugu", page: "Japanese Demonstratives: こそあど (Ko-So-A-Do)", url: "https://www.tofugu.com/japanese-grammar/kosoado/" },
    { nom: "Imabi", page: "こそあど I: This & That", url: "https://imabi.org/kosoado-i-this-that/" }
  ],
  "〜ます / 〜ません": [
    { nom: "Tae Kim", page: "Polite Form and Verb Stems", url: "https://guidetojapanese.org/learn/grammar/polite#:~:text=%E3%81%BE%E3%81%9B%E3%82%93" },
    { nom: "Tofugu", page: "〜ます: Verb Polite Form", url: "https://www.tofugu.com/japanese-grammar/masu/" }
  ],
  "〜ました / 〜ませんでした": [
    { nom: "Tae Kim", page: "Polite Form and Verb Stems", url: "https://guidetojapanese.org/learn/grammar/polite#:~:text=%E3%81%BE%E3%81%9B%E3%82%93%E3%81%A7%E3%81%97%E3%81%9F" }
  ],
  "〜ない": [
    { nom: "Tae Kim", page: "Negative Verbs", url: "https://guidetojapanese.org/learn/grammar/negativeverbs" },
    { nom: "Tofugu", page: "Japanese Verb Negative Plain ない Form", url: "https://www.tofugu.com/japanese-grammar/verb-negative-nai-form/" },
    { nom: "Imabi", page: "Negative Patterns", url: "https://imabi.org/negative-patterns/#:~:text=%EF%BD%9E%E3%81%AA%E3%81%84%E3%81%93%E3%81%A8%E3%81%AB%E3%81%AF%28%EF%BD%9E%E3%81%AA%E3%81%84%29" }
  ],
  "〜た": [
    { nom: "Tae Kim", page: "Past Tense", url: "https://guidetojapanese.org/learn/grammar/past_tense" },
    { nom: "Tofugu", page: "Japanese Verb Plain Past た Form", url: "https://www.tofugu.com/japanese-grammar/verb-past-ta-form/" },
    { nom: "Imabi", page: "Tense I: The Auxiliary Verb -TA", url: "https://imabi.org/tense-i-the-auxiliary-verb-ta/" }
  ],
  "〜て (enchaînement)": [
    { nom: "Tae Kim", page: "Compound Sentences", url: "https://guidetojapanese.org/learn/grammar/compound" },
    { nom: "Tofugu", page: "Te Form: Connecting words and clauses in Japanese", url: "https://www.tofugu.com/japanese-grammar/te-form/" },
    { nom: "Imabi", page: "The Conjunctive Particle て I: The Affirmative", url: "https://imabi.org/the-conjunctive-particle-%e3%81%a6-i-the-affirmative/" }
  ],
  "〜ている": [
    { nom: "Tae Kim", page: "Other uses of the te-form", url: "https://guidetojapanese.org/learn/grammar/teform#part2" },
    { nom: "Tofugu", page: "Japanese Verb Continuous Form ている", url: "https://www.tofugu.com/japanese-grammar/verb-continuous-form-teiru/" },
    { nom: "Imabi", page: "The Progressive/Continued State: ～ている", url: "https://imabi.org/the-progressive-continued-state-te-iru-%ef%bd%9e%e3%81%a6%e3%81%84%e3%82%8b/#:~:text=%EF%BD%9E%E3%81%A6%E3%81%84%E3%82%8B" }
  ],
  "〜てください": [
    { nom: "Tae Kim", page: "Making Requests", url: "https://guidetojapanese.org/learn/grammar/requests#part2" },
    { nom: "Tofugu", page: "ください for Making Requests", url: "https://www.tofugu.com/japanese-grammar/kudasai/" }
  ],
  "〜ないでください": [
    { nom: "Tae Kim", page: "Making Requests", url: "https://guidetojapanese.org/learn/grammar/requests#:~:text=%E3%81%AA%E3%81%84%E3%81%A7%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84" },
    { nom: "Tofugu", page: "ください for Making Requests", url: "https://www.tofugu.com/japanese-grammar/kudasai/" }
  ],
  "〜てもいい": [
    { nom: "Tae Kim", page: "Expressing “must” or “have to”", url: "https://guidetojapanese.org/learn/grammar/must#:~:text=%E3%81%A6%E3%82%82%E3%81%84%E3%81%84" },
    { nom: "Tofugu", page: "〜てもいい for Permissions", url: "https://www.tofugu.com/japanese-grammar/temoii/" },
    { nom: "Imabi", page: "Permission", url: "https://imabi.org/permission/#:~:text=%EF%BD%9E%E3%81%A6%E3%82%82%E3%81%84%E3%81%84%E3%81%A7%E3%81%99%E3%81%8B%EF%BC%9F" }
  ],
  "〜てはいけない": [
    { nom: "Tae Kim", page: "Expressing “must” or “have to”", url: "https://guidetojapanese.org/learn/grammar/must#part2" },
    { nom: "Imabi", page: "Must Not", url: "https://imabi.org/must-not/#:~:text=%E7%A6%81%E6%AD%A2%EF%BC%9A%EF%BD%9E%E3%81%A6%E3%81%AF%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84%E3%83%BB%EF%BD%9E%E3%81%A6%E3%81%AF%E3%81%84%E3%81%91%E3%81%AA%E3%81%84%E3%83%BB%EF%BD%9E%E3%81%A6%E3%81%AF%E3%81%A0%E3%82%81%E3%81%A0" }
  ],
  "〜たい": [
    { nom: "Tae Kim", page: "Desire and Suggestions", url: "https://guidetojapanese.org/learn/grammar/desire#part2" },
    { nom: "Tofugu", page: "Japanese Verb Desire Form たい", url: "https://www.tofugu.com/japanese-grammar/tai-form/" },
    { nom: "Imabi", page: "Personal Desire: ～たい", url: "https://imabi.org/personal-desire-%ef%bd%9e%e3%81%9f%e3%81%84/#:~:text=Conjugating%20w%2F%20Auxiliary%20%EF%BD%9E%E3%81%9F%E3%81%84" }
  ],
  "〜ましょう": [
    { nom: "Tae Kim", page: "Desire and Suggestions", url: "https://guidetojapanese.org/learn/grammar/desire#:~:text=%E3%81%BE%E3%81%97%E3%82%87%E3%81%86" },
    { nom: "Imabi", page: "The Volition Form: ～（よ）う", url: "https://imabi.org/the-volitional-i/#:~:text=Polite%20Speech%3A%20%EF%BD%9E%E3%81%BE%E3%81%97%E3%82%87%E3%81%86" }
  ],
  "〜ませんか": [
    { nom: "Imabi", page: "The Particle か W/ The Negative", url: "https://imabi.org/the-particle-ka-%e3%81%8b-ii-%ef%bd%9e%e3%81%aa%e3%81%84%e3%81%8b/#:~:text=%EF%BD%9E%E3%81%BE%E3%81%9B%E3%82%93%E3%81%8B" }
  ],
  "〜に行く / 〜に来る": [
    { nom: "Tae Kim", page: "Polite Form and Verb Stems", url: "https://guidetojapanese.org/learn/grammar/polite" },
    { nom: "Imabi", page: "The Purpose Marker に", url: "https://imabi.org/the-purpose-marker-%e3%81%ab/" }
  ],
  "〜がある / 〜がいる": [
    { nom: "Tae Kim", page: "Verb Basics", url: "https://guidetojapanese.org/learn/grammar/verbs" },
    { nom: "Tofugu", page: "いる and ある: Japanese Verbs \"To Exist\" or \"There Is\"", url: "https://www.tofugu.com/japanese-grammar/iru-aru/" },
    { nom: "Imabi", page: "The Existential Verbs ある & いる", url: "https://imabi.org/the-existential-verbs-%e3%81%82%e3%82%8b-%e3%81%84%e3%82%8b/#:~:text=The%20Verb%20%E3%81%84%E3%82%8B%3A%20Conjugations" }
  ],
  "〜前に": [
    { nom: "Imabi", page: "Before: ～前", url: "https://imabi.org/before-%e5%89%8d/" }
  ],
  "〜てから": [
    { nom: "Imabi", page: "After I: あと, のち, & ～てから", url: "https://imabi.org/after-i-%e3%81%82%e3%81%a8-%e3%81%ae%e3%81%a1-%ef%bd%9e%e3%81%a6%e3%81%8b%e3%82%89/#:~:text=%EF%BD%9E%E3%81%A6%E3%81%8B%E3%82%89" }
  ],
  "〜たり〜たりする": [
    { nom: "Tae Kim", page: "Compound Sentences", url: "https://guidetojapanese.org/learn/grammar/compound" },
    { nom: "Tofugu", page: "Japanese Listing Form たりする", url: "https://www.tofugu.com/japanese-grammar/tarisuru/" },
    { nom: "Imabi", page: "The Particle たり", url: "https://imabi.org/the-particle-%e3%81%9f%e3%82%8a/#:~:text=The%20Conjunctive%20Particle%20%E3%81%9F%E3%82%8A" }
  ],
  "〜なければならない": [
    { nom: "Tae Kim", page: "Expressing “must” or “have to”", url: "https://guidetojapanese.org/learn/grammar/must#:~:text=%E3%81%AA%E3%81%91%E3%82%8C%E3%81%B0" },
    { nom: "Imabi", page: "Must", url: "https://imabi.org/must/#:~:text=%E3%81%AA%E3%81%91%E3%82%8C%E3%81%B0" }
  ],
  "〜なくてもいい": [
    { nom: "Tae Kim", page: "Expressing “must” or “have to”", url: "https://guidetojapanese.org/learn/grammar/must#:~:text=%E3%81%AA%E3%81%8F%E3%81%A6%E3%82%82%E3%81%84%E3%81%84" },
    { nom: "Imabi", page: "Permission", url: "https://imabi.org/permission/#:~:text=%EF%BD%9E%E3%81%AA%E3%81%8F%E3%81%A6%E3%82%82%E3%81%84%E3%81%84%20vs%20%EF%BD%9E%E3%81%AA%E3%81%84%E3%81%A7%E3%82%82%E3%81%84%E3%81%84" }
  ],
  "Adjectifs en い": [
    { nom: "Tae Kim", page: "Adjectives", url: "https://guidetojapanese.org/learn/grammar/adjectives#:~:text=The%20i%2Dadjective" },
    { nom: "Tofugu", page: "Japanese い-Adjective", url: "https://www.tofugu.com/japanese-grammar/i-adjective/" },
    { nom: "Imabi", page: "Adjectives 形容詞", url: "https://imabi.org/adjectives%e3%80%80%e5%bd%a2%e5%ae%b9%e8%a9%9e/" }
  ],
  "Adjectifs en な": [
    { nom: "Tae Kim", page: "Adjectives", url: "https://guidetojapanese.org/learn/grammar/adjectives#:~:text=The%20na%2Dadjective" },
    { nom: "Tofugu", page: "な-Adjectives: Japanese Noun-Like Adjective", url: "https://www.tofugu.com/japanese-grammar/na-adjective/" },
    { nom: "Imabi", page: "Adjectival Nouns I 形容動詞①", url: "https://imabi.org/adjectival-nouns-i%e3%80%80%e5%bd%a2%e5%ae%b9%e5%8b%95%e8%a9%9e%e2%91%a0/" }
  ],
  "〜が好き / 〜が上手": [
    { nom: "Tae Kim", page: "Adjectives", url: "https://guidetojapanese.org/learn/grammar/adjectives" },
    { nom: "Imabi", page: "Like & Love", url: "https://imabi.org/like-love/" }
  ],
  "〜がほしい": [
    { nom: "Tae Kim", page: "Desire and Suggestions", url: "https://guidetojapanese.org/learn/grammar/desire#part3" },
    { nom: "Imabi", page: "Wanting Something: ほしい", url: "https://imabi.org/want-feeling-i-%ef%bd%9e%e3%81%9f%e3%81%84-%e3%81%bb%e3%81%97%e3%81%84/#:~:text=%E6%AC%B2%E3%81%97%E3%81%84%3A%20Wanting%20Something" }
  ],
  "〜より / 〜のほうが": [
    { nom: "Tae Kim", page: "Using 「方」 and 「よる」", url: "https://guidetojapanese.org/learn/grammar/comparison#part3" },
    { nom: "Tofugu", page: "Particle より For \"Than…\" In Comparison", url: "https://www.tofugu.com/japanese-grammar/particle-yori-than/" },
    { nom: "Imabi", page: "The Particle より", url: "https://imabi.org/the-particle-%e3%82%88%e3%82%8a/#:~:text=The%20Case%20Particle%20%E3%82%88%E3%82%8A" }
  ],
  "いちばん": [
    { nom: "Imabi", page: "The Superlative", url: "https://imabi.org/the-superlative/" }
  ],
  "〜くなる / 〜になる": [
    { nom: "Tae Kim", page: "Using する and なる with the に particle", url: "https://guidetojapanese.org/learn/grammar/surunaru#part2" },
    { nom: "Tofugu", page: "なる for \"To Become\"", url: "https://www.tofugu.com/japanese-grammar/naru/" }
  ],
  "〜から (raison)": [
    { nom: "Tae Kim", page: "Compound Sentences", url: "https://guidetojapanese.org/learn/grammar/compound#part4" },
    { nom: "Tofugu", page: "Particle から: Starting Point Marker", url: "https://www.tofugu.com/japanese-grammar/particle-kara/" },
    { nom: "Imabi", page: "The Conjunctive Particles から & ので", url: "https://imabi.org/because-%e3%81%8b%e3%82%89-%e3%81%ae%e3%81%a7-%e3%81%ae%e3%81%a0/#:~:text=The%20Conjunctive%20Particle%20%E3%81%8B%E3%82%89" }
  ],
  "〜が / 〜けど": [
    { nom: "Tae Kim", page: "Compound Sentences", url: "https://guidetojapanese.org/learn/grammar/compound#part6" },
    { nom: "Tofugu", page: "Conjunctive Particles が・けど: \"But\" in Japanese", url: "https://www.tofugu.com/japanese-grammar/conjunctive-particle-ga-kedo/" },
    { nom: "Imabi", page: "The Conjunctive Particles が & けれど", url: "https://imabi.org/the-conjunctive-particles-%e3%81%8c-%e3%81%91%e3%82%8c%e3%81%a9/" }
  ],
  "〜とき": [
    { nom: "Tofugu", page: "〜とき for \"When\"", url: "https://www.tofugu.com/japanese-grammar/toki/" },
    { nom: "Imabi", page: "When: 時", url: "https://imabi.org/when-%e6%99%82/" }
  ],
  "もう / まだ": [
    { nom: "Tofugu", page: "もう for \"Already / Not Anymore\"", url: "https://www.tofugu.com/japanese-grammar/mou-already-not-anymore/" }
  ],
  "〜でしょう": [
    { nom: "Tae Kim", page: "Various degrees of certainty", url: "https://guidetojapanese.org/learn/grammar/certainty#part3" },
    { nom: "Tofugu", page: "Japanese でしょう Form for Guessing", url: "https://www.tofugu.com/japanese-grammar/deshou/" },
    { nom: "Imabi", page: "The Auxiliaries だろう・でしょう", url: "https://imabi.org/the-auxiliaries-%e3%81%a0%e3%82%8d%e3%81%86%e3%83%bb%e3%81%a7%e3%81%97%e3%82%87%e3%81%86/#:~:text=%E3%81%A0%E3%82%8D%E3%81%86%E3%83%BB%E3%81%A7%E3%81%97%E3%82%87%E3%81%86" }
  ],
  "Forme potentielle": [
    { nom: "Tae Kim", page: "Potential Form", url: "https://guidetojapanese.org/learn/grammar/potential#:~:text=%E3%82%89%E3%82%8C%E3%82%8B" },
    { nom: "Tofugu", page: "Japanese Verb Potential れる Form", url: "https://www.tofugu.com/japanese-grammar/verb-potential-form-reru/" },
    { nom: "Imabi", page: "Potential I: The Potential Form", url: "https://imabi.org/potential-i-the-potential-form/#:~:text=%E3%82%89%E3%82%8C%E3%82%8B" }
  ],
  "Forme volitive (〜よう)": [
    { nom: "Tae Kim", page: "Desire and Suggestions", url: "https://guidetojapanese.org/learn/grammar/desire" },
    { nom: "Tofugu", page: "Japanese Verb Volitional Form よう", url: "https://www.tofugu.com/japanese-grammar/verb-volitional-form-you/" },
    { nom: "Imabi", page: "The Volition Form: ～（よ）う", url: "https://imabi.org/the-volitional-i/" }
  ],
  "〜ようと思う": [
    { nom: "Imabi", page: "The Volition Form: ～（よ）う", url: "https://imabi.org/the-volitional-i/#:~:text=%E3%82%88%E3%81%86%E3%81%A8%E6%80%9D" }
  ],
  "〜つもり": [
    { nom: "Tofugu", page: "つもり For Expressing Intentions", url: "https://www.tofugu.com/japanese-grammar/tsumori/" },
    { nom: "Imabi", page: "Planning: ～つもりだ", url: "https://imabi.org/planning-%ef%bd%9e%e3%81%a4%e3%82%82%e3%82%8a%e3%81%a0/#:~:text=Verb%20%28non%2DPast%29%20%2B%20%EF%BD%9E%E3%81%A4%E3%82%82%E3%82%8A%E3%81%A0" }
  ],
  "Forme passive (〜られる)": [
    { nom: "Tae Kim", page: "Causative and Passive Verbs", url: "https://guidetojapanese.org/learn/grammar/causepass#:~:text=%E3%82%89%E3%82%8C%E3%82%8B" },
    { nom: "Tofugu", page: "Japanese Verb Passive られる Form", url: "https://www.tofugu.com/japanese-grammar/verb-passive-form-rareru/" },
    { nom: "Imabi", page: "The Passive", url: "https://imabi.org/the-passive/#:~:text=%EF%BD%9E%E3%82%89%E3%82%8C%E3%82%8B%20and%20%EF%BD%9E%E3%82%8C%E3%82%8B" }
  ],
  "Forme causative (〜させる)": [
    { nom: "Tae Kim", page: "Causative and Passive Verbs", url: "https://guidetojapanese.org/learn/grammar/causepass#:~:text=%E3%81%95%E3%81%9B%E3%82%8B" },
    { nom: "Tofugu", page: "Japanese Verb Causative Form させる", url: "https://www.tofugu.com/japanese-grammar/verb-causative-form-saseru/" },
    { nom: "Imabi", page: "The Causative I: ～させる & ～せる", url: "https://imabi.org/the-causative-i-%ef%bd%9e%e3%81%95%e3%81%9b%e3%82%8b-%ef%bd%9e%e3%81%9b%e3%82%8b/#:~:text=%E3%81%95%E3%81%9B%E3%82%8B" }
  ],
  "Causatif-passif (〜させられる)": [
    { nom: "Tae Kim", page: "Causative and Passive Verbs", url: "https://guidetojapanese.org/learn/grammar/causepass#:~:text=%E3%81%95%E3%81%9B%E3%82%89%E3%82%8C%E3%82%8B" },
    { nom: "Imabi", page: "Causative-Passive", url: "https://imabi.org/causative-passive/#:~:text=%E3%81%95%E3%81%9B%E3%82%89%E3%82%8C%E3%82%8B" }
  ],
  "Impératif et interdiction (〜な)": [
    { nom: "Tae Kim", page: "Making Requests", url: "https://guidetojapanese.org/learn/grammar/requests#:~:text=command" },
    { nom: "Tofugu", page: "Japanese Verb Command Form ろ", url: "https://www.tofugu.com/japanese-grammar/verb-command-form-ro/" },
    { nom: "Imabi", page: "The Imperative", url: "https://imabi.org/the-imperative/#:~:text=command" }
  ],
  "〜なさい": [
    { nom: "Tae Kim", page: "Making Requests", url: "https://guidetojapanese.org/learn/grammar/requests#part4" },
    { nom: "Tofugu", page: "Japanese Verb なさい Form", url: "https://www.tofugu.com/japanese-grammar/verb-imperative-form-nasai/" }
  ],
  "Proposition relative": [
    { nom: "Tae Kim", page: "Relative Clauses and Sentence Order", url: "https://guidetojapanese.org/learn/grammar/clause#part2" },
    { nom: "Tofugu", page: "Japanese Sentence and Clause Structure", url: "https://www.tofugu.com/japanese-grammar/sentences-and-clauses/" }
  ],
  "〜てみる": [
    { nom: "Tae Kim", page: "Trying or attempting something", url: "https://guidetojapanese.org/learn/grammar/try" },
    { nom: "Tofugu", page: "〜てみる for Attempts", url: "https://www.tofugu.com/japanese-grammar/temiru/" },
    { nom: "Imabi", page: "Trying", url: "https://imabi.org/trying/#:~:text=%EF%BD%9E%E3%81%A6%E3%81%BF%E3%82%8B%2F%EF%BD%9E%E3%81%A6%E3%81%BF%E3%81%9F%E3%81%84" }
  ],
  "〜ておく": [
    { nom: "Tae Kim", page: "Other uses of the te-form", url: "https://guidetojapanese.org/learn/grammar/teform" },
    { nom: "Tofugu", page: "〜ておく To Do Something for Future Convenience", url: "https://www.tofugu.com/japanese-grammar/teoku/" },
    { nom: "Imabi", page: "Advanced Preparation: ～ておく", url: "https://imabi.org/advanced-preparation-%ef%bd%9e%e3%81%a6%e3%81%8a%e3%81%8f/" }
  ],
  "〜てしまう": [
    { nom: "Tae Kim", page: "Unintended Actions", url: "https://guidetojapanese.org/learn/grammar/unintended#part2" },
    { nom: "Imabi", page: "～てしまう", url: "https://imabi.org/%ef%bd%9e%e3%81%a6%e3%81%97%e3%81%be%e3%81%86/#:~:text=%EF%BD%9E%E3%81%A6%E3%81%97%E3%81%BE%E3%81%86" }
  ],
  "〜てくる / 〜ていく": [
    { nom: "Tae Kim", page: "Other uses of the te-form", url: "https://guidetojapanese.org/learn/grammar/teform#:~:text=%E3%81%A6%E3%81%84%E3%81%8F" },
    { nom: "Tofugu", page: "〜ていく・〜てくる for Gradual Process", url: "https://www.tofugu.com/japanese-grammar/teiku-tekuru/" },
    { nom: "Imabi", page: "～ていく & ～てくる", url: "https://imabi.org/%ef%bd%9e%e3%81%a6%e3%81%84%e3%81%8f-%ef%bd%9e%e3%81%a6%e3%81%8f%e3%82%8b/#:~:text=%EF%BD%9E%E3%81%A6%E3%81%84%E3%81%8F%20%26%20%EF%BD%9E%E3%81%A6%E3%81%8F%E3%82%8B" }
  ],
  "〜てあげる / 〜てくれる / 〜てもらう": [
    { nom: "Tae Kim", page: "Giving and Receiving", url: "https://guidetojapanese.org/learn/grammar/favors#part4" },
    { nom: "Tofugu", page: "Giving and Receiving Verbs: くれる, あげる, and もらう", url: "https://www.tofugu.com/japanese-grammar/kureru-ageru-morau/" },
    { nom: "Imabi", page: "～てあげる, ～てくれる, & ～てもらう", url: "https://imabi.org/%ef%bd%9e%e3%81%a6%e3%81%82%e3%81%92%e3%82%8b-%ef%bd%9e%e3%81%a6%e3%81%8f%e3%82%8c%e3%82%8b-%ef%bd%9e%e3%81%a6%e3%82%82%e3%82%89%e3%81%86-2/#:~:text=Compare%20and%20Contrast%3A%20%EF%BD%9E%E3%81%A6%E3%81%8F%E3%82%8C%E3%82%8B%20VS%20%EF%BD%9E%E3%81%A6%E3%82%82%E3%82%89%E3%81%86" }
  ],
  "〜てある": [
    { nom: "Tae Kim", page: "Other uses of the te-form", url: "https://guidetojapanese.org/learn/grammar/teform#part4" },
    { nom: "Tofugu", page: "〜てある for When Something Is Done (and Left That Way)", url: "https://www.tofugu.com/japanese-grammar/tearu/" },
    { nom: "Imabi", page: "～てある", url: "https://imabi.org/stative-verbs-te-aru-%ef%bd%9e%e3%81%a6%e3%81%82%e3%82%8b/#:~:text=%EF%BD%9E%E3%81%A6%E3%81%82%E3%82%8B%3A%20Creating%20Stative%20Verbs" }
  ],
  "〜ないで / 〜ずに": [
    { nom: "Tae Kim", page: "More negative verbs", url: "https://guidetojapanese.org/learn/grammar/negativeverbs2#:~:text=%E3%81%AA%E3%81%84%E3%81%A7" },
    { nom: "Imabi", page: "The Negative て形: ～なくて & ～ないで", url: "https://imabi.org/the-negative-%e3%81%a6%e5%bd%a2-%ef%bd%9e%e3%81%aa%e3%81%8f%e3%81%a6-%ef%bd%9e%e3%81%aa%e3%81%84%e3%81%a7/#:~:text=%EF%BD%9E%E3%81%AA%E3%81%84%E3%81%A7" }
  ],
  "〜たら": [
    { nom: "Tae Kim", page: "Conditionals", url: "https://guidetojapanese.org/learn/grammar/conditionals#part5" },
    { nom: "Tofugu", page: "Japanese Conditional Form たら", url: "https://www.tofugu.com/japanese-grammar/conditional-form-tara/" },
    { nom: "Imabi", page: "The Conditionals", url: "https://imabi.org/the-conditionals/#:~:text=The%20Conjunctive%20Particle%20%E3%81%9F%E3%82%89" }
  ],
  "〜ば": [
    { nom: "Tae Kim", page: "Conditionals", url: "https://guidetojapanese.org/learn/grammar/conditionals#part4" },
    { nom: "Tofugu", page: "Japanese Verb Conditional Form ば", url: "https://www.tofugu.com/japanese-grammar/verb-conditional-form-ba/" },
    { nom: "Imabi", page: "The Particle ば", url: "https://imabi.org/the-particle-%e3%81%b0/" }
  ],
  "〜なら": [
    { nom: "Tae Kim", page: "Conditionals", url: "https://guidetojapanese.org/learn/grammar/conditionals#part3" },
    { nom: "Tofugu", page: "Japanese Conditional Form なら", url: "https://www.tofugu.com/japanese-grammar/conditional-form-nara/" },
    { nom: "Imabi", page: "The Conditionals", url: "https://imabi.org/the-conditionals/#:~:text=The%20Conjunctive%20Particle%20%E3%81%AA%E3%82%89%EF%BC%88%E3%81%B0%EF%BC%89" }
  ],
  "〜と (conséquence)": [
    { nom: "Tae Kim", page: "Conditionals", url: "https://guidetojapanese.org/learn/grammar/conditionals#part2" },
    { nom: "Tofugu", page: "Japanese Verb と Form", url: "https://www.tofugu.com/japanese-grammar/verb-to/" },
    { nom: "Imabi", page: "The Conditionals", url: "https://imabi.org/the-conditionals/" }
  ],
  "〜ても": [
    { nom: "Imabi", page: "The Particle でも", url: "https://imabi.org/the-particle-%e3%81%a7%e3%82%82/" }
  ],
  "〜のに": [
    { nom: "Tae Kim", page: "Compound Sentences", url: "https://guidetojapanese.org/learn/grammar/compound#part5" },
    { nom: "Tofugu", page: "Conjunctive Particle のに: For Expressing Surprise / Frustration", url: "https://www.tofugu.com/japanese-grammar/conjunctive-particle-noni/" },
    { nom: "Imabi", page: "The Particle のに", url: "https://imabi.org/the-particle-%e3%81%ae%e3%81%ab/#:~:text=The%20Conjunctive%20Particle%20%E3%81%AE%E3%81%AB" }
  ],
  "〜ので": [
    { nom: "Tae Kim", page: "Compound Sentences", url: "https://guidetojapanese.org/learn/grammar/compound#part4" },
    { nom: "Tofugu", page: "Conjunctive Particle ので: For Expressing a Reason", url: "https://www.tofugu.com/japanese-grammar/conjunctive-particle-node/" },
    { nom: "Imabi", page: "The Conjunctive Particles から & ので", url: "https://imabi.org/because-%e3%81%8b%e3%82%89-%e3%81%ae%e3%81%a7-%e3%81%ae%e3%81%a0/#:~:text=The%20Conjunctive%20Particle%20%E3%81%AE%E3%81%A7" }
  ],
  "〜し": [
    { nom: "Tae Kim", page: "Compound Sentences", url: "https://guidetojapanese.org/learn/grammar/compound#part7" },
    { nom: "Tofugu", page: "〜し for \"Not Only…but Also…\"", url: "https://www.tofugu.com/japanese-grammar/shi/" },
    { nom: "Imabi", page: "The Particle し", url: "https://imabi.org/the-particle-%e3%81%97/" }
  ],
  "〜と思う": [
    { nom: "Tae Kim", page: "Acting on relative clauses", url: "https://guidetojapanese.org/learn/grammar/actionclause" },
    { nom: "Imabi", page: "The Citation Particle と", url: "https://imabi.org/the-particle-%e3%81%a8-ii-citation/#:~:text=%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99" }
  ],
  "〜と言う / 〜って": [
    { nom: "Tae Kim", page: "Acting on relative clauses", url: "https://guidetojapanese.org/learn/grammar/actionclause#part4" },
    { nom: "Imabi", page: "The Citation Particle と", url: "https://imabi.org/the-particle-%e3%81%a8-ii-citation/" }
  ],
  "〜という": [
    { nom: "Tae Kim", page: "Defining and Describing", url: "https://guidetojapanese.org/learn/grammar/define#part4" },
    { nom: "Tofugu", page: "〜という for Names, Hearsays and More", url: "https://www.tofugu.com/japanese-grammar/toiu/" },
    { nom: "Imabi", page: "～という, ～ということ, & ～というもの", url: "https://imabi.org/citation-ii-%ef%bd%9e%e3%81%a8%e3%81%84%e3%81%86-%ef%bd%9e%e3%81%a8%e3%81%84%e3%81%86%e3%81%93%e3%81%a8-%ef%bd%9e%e3%81%a8%e3%81%84%e3%81%86%e3%82%82%e3%81%ae/#:~:text=%E3%81%A8%E3%81%84%E3%81%86" }
  ],
  "〜んだ / 〜のだ": [
    { nom: "Tofugu", page: "んだ: Japanese Explanatory Form (んです/のだ/のです)", url: "https://www.tofugu.com/japanese-grammar/explanatory-nda-ndesu-noda-nodesu/" },
    { nom: "Imabi", page: "The Mood Marker ～のだ", url: "https://imabi.org/the-mood-marker-%ef%bd%9e%e3%81%ae%e3%81%a0/#:~:text=The%20Two%20%EF%BD%9E%E3%81%AE%E3%81%A0%3A%20%E2%80%9CScope%E2%80%9D%20Marker%20VS%20%E2%80%9CMood%E2%80%9D%20Marker" }
  ],
  "〜かもしれない": [
    { nom: "Tae Kim", page: "Various degrees of certainty", url: "https://guidetojapanese.org/learn/grammar/certainty#part2" },
    { nom: "Tofugu", page: "〜かもしれない for Uncertainty", url: "https://www.tofugu.com/japanese-grammar/kamoshirenai/" },
    { nom: "Imabi", page: "Might: かもしれない", url: "https://imabi.org/might-%e3%81%8b%e3%82%82%e3%81%97%e3%82%8c%e3%81%aa%e3%81%84/#:~:text=ConjUGATING%20WITH%20%E3%81%8B%E3%82%82%E3%81%97%E3%82%8C%E3%81%AA%E3%81%84" }
  ],
  "〜だろう": [
    { nom: "Tae Kim", page: "Various degrees of certainty", url: "https://guidetojapanese.org/learn/grammar/certainty#part4" },
    { nom: "Tofugu", page: "Japanese だろう Form for Guessing", url: "https://www.tofugu.com/japanese-grammar/darou/" },
    { nom: "Imabi", page: "The Auxiliaries だろう・でしょう", url: "https://imabi.org/the-auxiliaries-%e3%81%a0%e3%82%8d%e3%81%86%e3%83%bb%e3%81%a7%e3%81%97%e3%82%87%e3%81%86/#:~:text=%E3%81%A0%E3%82%8D%E3%81%86%E3%83%BB%E3%81%A7%E3%81%97%E3%82%87%E3%81%86" }
  ],
  "〜はずだ": [
    { nom: "Tae Kim", page: "Things that should be a certain way", url: "https://guidetojapanese.org/learn/grammar/should#part2" }
  ],
  "〜そうだ (apparence)": [
    { nom: "Tae Kim", page: "Similarity or hearsay", url: "https://guidetojapanese.org/learn/grammar/similarity#part4" },
    { nom: "Tofugu", page: "Japanese Verb そう Form", url: "https://www.tofugu.com/japanese-grammar/verb-sou/" },
    { nom: "Imabi", page: "Seem: ～そうだ", url: "https://imabi.org/seem-%ef%bd%9e%e3%81%9d%e3%81%86%e3%81%a0/" }
  ],
  "〜そうだ (ouï-dire)": [
    { nom: "Tae Kim", page: "Similarity or hearsay", url: "https://guidetojapanese.org/learn/grammar/similarity#part5" },
    { nom: "Imabi", page: "Hearsay: ～そうだ", url: "https://imabi.org/hearsay/#:~:text=Conjugating%20w%2F%20Function%202%20%EF%BD%9E%E3%81%9D%E3%81%86%E3%81%A0" }
  ],
  "〜ようだ / 〜みたいだ": [
    { nom: "Tae Kim", page: "Similarity or hearsay", url: "https://guidetojapanese.org/learn/grammar/similarity#part3" },
    { nom: "Imabi", page: "Similarity", url: "https://imabi.org/similarity/#:~:text=%EF%BD%9E%E3%81%BF%E3%81%9F%E3%81%84%E3%81%A0" }
  ],
  "〜らしい": [
    { nom: "Tae Kim", page: "Similarity or hearsay", url: "https://guidetojapanese.org/learn/grammar/similarity#part6" },
    { nom: "Imabi", page: "The Auxiliary ～らしい", url: "https://imabi.org/the-auxiliary-%ef%bd%9e%e3%82%89%e3%81%97%e3%81%84/#:~:text=The%20Meanings%20of%20%EF%BD%9E%E3%82%89%E3%81%97%E3%81%84" }
  ],
  "〜かどうか / question indirecte": [
    { nom: "Tae Kim", page: "The Question Marker", url: "https://guidetojapanese.org/learn/grammar/question" },
    { nom: "Imabi", page: "The Particle か III: Indirect Question", url: "https://imabi.org/the-particle-ka-%e3%81%8b-iii-indirect-question/#:~:text=%EF%BD%9E%E3%81%8B%E3%81%A9%E3%81%86%E3%81%8B" }
  ],
  "〜ために": [
    { nom: "Imabi", page: "～ために I: In order to…", url: "https://imabi.org/%ef%bd%9e%e3%81%9f%e3%82%81%e3%81%ab-i-in-order-to/" }
  ],
  "〜ように": [
    { nom: "Tae Kim", page: "Using する and なる with the に particle", url: "https://guidetojapanese.org/learn/grammar/surunaru#:~:text=%E3%82%88%E3%81%86%E3%81%AB" },
    { nom: "Imabi", page: "So that", url: "https://imabi.org/so-that/#:~:text=The%20Usages%20of%20%EF%BD%9E%E3%82%88%E3%81%86%E3%81%AB" }
  ],
  "〜ようになる": [
    { nom: "Tae Kim", page: "Using する and なる with the に particle", url: "https://guidetojapanese.org/learn/grammar/surunaru#:~:text=%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%82%8B" },
    { nom: "Imabi", page: "～ようになる& ～ようにする", url: "https://imabi.org/%ef%bd%9e%e3%82%88%e3%81%86%e3%81%ab%e3%81%aa%e3%82%8b-%ef%bd%9e%e3%82%88%e3%81%86%e3%81%ab%e3%81%99%e3%82%8b/#:~:text=%EF%BD%9E%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%82%8B" }
  ],
  "〜ことができる": [
    { nom: "Tae Kim", page: "Potential Form", url: "https://guidetojapanese.org/learn/grammar/potential#:~:text=%E3%81%93%E3%81%A8%E3%81%8C%E3%81%A7%E3%81%8D%E3%82%8B" },
    { nom: "Imabi", page: "Potential II: できる", url: "https://imabi.org/potential-ii-%e3%81%a7%e3%81%8d%e3%82%8b/#:~:text=%E3%81%93%E3%81%A8%E3%81%8C%E3%81%A7%E3%81%8D%E3%82%8B" }
  ],
  "〜たことがある": [
    { nom: "Tae Kim", page: "Special Expressions with Generic Nouns", url: "https://guidetojapanese.org/learn/grammar/genericnouns#:~:text=%E3%81%93%E3%81%A8%E3%81%8C%E3%81%82%E3%82%8B" },
    { nom: "Tofugu", page: "〜たことがある for Past Experiences", url: "https://www.tofugu.com/japanese-grammar/takotogaaru/" },
    { nom: "Imabi", page: "Expressions with こと", url: "https://imabi.org/expressions-with-%e3%81%93%e3%81%a8/#:~:text=%EF%BD%9E%E3%81%93%E3%81%A8%E3%81%8C%E3%81%82%E3%82%8B%3A%20Experience%28S%29%20One%20Has" }
  ],
  "〜ことにする": [
    { nom: "Imabi", page: "Expressions with こと", url: "https://imabi.org/expressions-with-%e3%81%93%e3%81%a8/#:~:text=%E3%81%93%E3%81%A8%E3%81%AB%E3%81%99%E3%82%8B" }
  ],
  "〜ことになる": [
    { nom: "Imabi", page: "Expressions with こと", url: "https://imabi.org/expressions-with-%e3%81%93%e3%81%a8/#:~:text=%E3%81%93%E3%81%A8%E3%81%AB%E3%81%AA%E3%82%8B" }
  ],
  "〜ほうがいい": [
    { nom: "Tae Kim", page: "Using 「方」 and 「よる」", url: "https://guidetojapanese.org/learn/grammar/comparison#:~:text=%E6%96%B9%E3%81%8C%E3%81%84%E3%81%84" }
  ],
  "〜の / 〜こと (nominalisation)": [
    { nom: "Tae Kim", page: "Noun-related Particles", url: "https://guidetojapanese.org/learn/grammar/nounparticles#part4" },
    { nom: "Tofugu", page: "Particle の: Nominalizer", url: "https://www.tofugu.com/japanese-grammar/particle-no-nominalizer/" },
    { nom: "Imabi", page: "Nominalizers: の, こと, & もの", url: "https://imabi.org/nominalization/" }
  ],
  "〜すぎる": [
    { nom: "Tae Kim", page: "Expressing Amounts", url: "https://guidetojapanese.org/learn/grammar/amount#part6" },
    { nom: "Tofugu", page: "すぎる for \"Too Much\"", url: "https://www.tofugu.com/japanese-grammar/sugiru/" },
    { nom: "Imabi", page: "Too: ～すぎる", url: "https://imabi.org/too-%ef%bd%9e%e3%81%99%e3%81%8e%e3%82%8b/#:~:text=%EF%BD%9E%E3%81%99%E3%81%8E%E3%82%8B" }
  ],
  "〜やすい / 〜にくい": [
    { nom: "Tae Kim", page: "Actions that are easy or hard to do", url: "https://guidetojapanese.org/learn/grammar/easyhard#part2" },
    { nom: "Tofugu", page: "Japanese Verb やすい", url: "https://www.tofugu.com/japanese-grammar/yasui/" },
    { nom: "Imabi", page: "Easy I: ～やすい", url: "https://imabi.org/easy-i-%ef%bd%9e%e3%82%84%e3%81%99%e3%81%84/#:~:text=%EF%BD%9E%E3%82%84%E3%81%99%E3%81%84" }
  ],
  "〜方": [
    { nom: "Tae Kim", page: "Using 「方」 and 「よる」", url: "https://guidetojapanese.org/learn/grammar/comparison#part2" },
    { nom: "Imabi", page: "The Non-Question “How”: ～方(かた)", url: "https://imabi.org/the-non-question-how-%ef%bd%9e%e6%96%b9%e3%81%8b%e3%81%9f/" }
  ],
  "〜さ": [
    { nom: "Tae Kim", page: "Expressing Amounts", url: "https://guidetojapanese.org/learn/grammar/amount#part9" },
    { nom: "Tofugu", page: "Japanese Adjective Suffix さ", url: "https://www.tofugu.com/japanese-grammar/adjective-suffix-sa/" },
    { nom: "Imabi", page: "Adjective Nominalization", url: "https://imabi.org/adjective-nominalization/" }
  ],
  "〜ながら": [
    { nom: "Tae Kim", page: "Time-specific actions", url: "https://guidetojapanese.org/learn/grammar/timeactions#part4" },
    { nom: "Tofugu", page: "Japanese Verb ながら to Say \"While〜\"", url: "https://www.tofugu.com/japanese-grammar/verb-nagara/" },
    { nom: "Imabi", page: "The Particle ながら I: Simultaneous Action", url: "https://imabi.org/the-particle-%e3%81%aa%e3%81%8c%e3%82%89-i-simultaneous-action/#:~:text=%E3%81%AA%E3%81%8C%E3%82%89" }
  ],
  "〜しか〜ない": [
    { nom: "Tae Kim", page: "Expressing Amounts", url: "https://guidetojapanese.org/learn/grammar/amount#part4" },
    { nom: "Imabi", page: "Shika & Hoka", url: "https://imabi.org/shika-hoka/#:~:text=The%20Particles%20%E3%81%97%E3%81%8B%20%26%20%E3%81%BB%E3%81%8B" }
  ],
  "〜ばかり": [
    { nom: "Tae Kim", page: "Expressing Amounts", url: "https://guidetojapanese.org/learn/grammar/amount#part5" },
    { nom: "Imabi", page: "Combination Particles with ばかり", url: "https://imabi.org/combination-particles-with-%e3%81%b0%e3%81%8b%e3%82%8a/#:~:text=The%20Adverbial%20Particle%20%E3%81%B0%E3%81%8B%E3%82%8A" }
  ],
  "〜ところ": [
    { nom: "Tae Kim", page: "Special Expressions with Generic Nouns", url: "https://guidetojapanese.org/learn/grammar/genericnouns#part3" },
    { nom: "Imabi", page: "Combination Particles with ところ", url: "https://imabi.org/combination-particles-with-%e3%81%a8%e3%81%93%e3%82%8d/#:~:text=%E3%81%A8%E3%81%93%E3%82%8D" }
  ],
  "〜間 / 〜間に": [
    { nom: "Imabi", page: "While I: ～間", url: "https://imabi.org/while-i-%e9%96%93/" }
  ],
  "〜までに": [
    { nom: "Imabi", page: "The Particle まで", url: "https://imabi.org/the-particle-%e3%81%be%e3%81%a7/#:~:text=Usage%20I%20%E3%81%BE%E3%81%A7%20vs%20%EF%BD%9E%E3%81%BE%E3%81%A7%E3%81%AB" }
  ],
  "〜始める / 〜出す / 〜続ける / 〜終わる": [
    { nom: "Imabi", page: "Start to I: ～始める & ～出す", url: "https://imabi.org/start-to-%ef%bd%9e%e5%a7%8b%e3%82%81%e3%82%8b-%ef%bd%9e%e5%87%ba%e3%81%99-%ef%bd%9e%e3%81%8b%e3%81%91%e3%82%8b/#:~:text=%EF%BD%9E%E5%87%BA%E3%81%99" }
  ],
  "〜がる / 〜たがる": [
    { nom: "Tofugu", page: "Japanese Verb たがる Form", url: "https://www.tofugu.com/japanese-grammar/tagaru-form/" },
    { nom: "Imabi", page: "The Auxiliary Verb ～がる", url: "https://imabi.org/the-auxiliary-verb-%ef%bd%9e%e3%81%8c%e3%82%8b/#:~:text=In%2DDepth%20Coverage%20of%20%EF%BD%9E%E3%81%8C%E3%82%8B" }
  ],
  "〜とか": [
    { nom: "Tae Kim", page: "Noun-related Particles", url: "https://guidetojapanese.org/learn/grammar/nounparticles#part3" },
    { nom: "Imabi", page: "The Particle とか", url: "https://imabi.org/the-particle-%e3%81%a8%e3%81%8b/#:~:text=%E3%81%BC%E3%81%8B%E3%81%97%E3%81%AE%E3%80%8C%E3%81%A8%E3%81%8B%E3%80%8D%20After%20Noun" }
  ],
  "〜でも": [
    { nom: "Imabi", page: "The Particle でも", url: "https://imabi.org/the-particle-%e3%81%a7%e3%82%82/#:~:text=The%20Adverbial%20Particle%20%E3%81%A7%E3%82%82" }
  ],
  "Langage honorifique (敬語)": [
    { nom: "Tae Kim", page: "Honorific and Humble Forms", url: "https://guidetojapanese.org/learn/grammar/honorific#:~:text=%E3%81%AB%E3%81%AA%E3%82%8B" },
    { nom: "Tofugu", page: "Honorific Prefix: 御〜 (お〜•ご〜)", url: "https://www.tofugu.com/japanese-grammar/honorific-prefix-o-go/" },
    { nom: "Imabi", page: "Honorifics VI: Regular Verbs", url: "https://imabi.org/honorifics-vi-regular-verbs/#:~:text=%E3%81%AB%E3%81%AA%E3%82%8B" }
  ],
  "〜なんか / 〜なんて": [
    { nom: "Tae Kim", page: "Casual Patterns and Slang", url: "https://guidetojapanese.org/learn/grammar/casual#part7" },
    { nom: "Imabi", page: "The Particle など・なんか", url: "https://imabi.org/the-particles-%e3%81%a8%e3%81%8b-%e3%81%aa%e3%81%a9-%e3%81%aa%e3%82%93%e3%81%8b/#:~:text=The%20Adverbial%20particle%20%E3%81%AA%E3%82%93%E3%81%8B" }
  ],
  "〜まま": [
    { nom: "Tae Kim", page: "Expressing a lack of change", url: "https://guidetojapanese.org/learn/grammar/nochange#part2" }
  ],
  "〜がする": [],
  "〜としても": [
    { nom: "Tae Kim", page: "Hypothesizing and Concluding", url: "https://guidetojapanese.org/learn/grammar/reasoning#:~:text=%E3%81%A8%E3%81%97%E3%81%A6%E3%82%82" }
  ],
  "〜っぽい": [
    { nom: "Tae Kim", page: "Similarity or hearsay", url: "https://guidetojapanese.org/learn/grammar/similarity#part7" },
    { nom: "Imabi", page: "The Suffix ～っぽい", url: "https://imabi.org/the-suffix-%ef%bd%9e%e3%81%a3%e3%81%bd%e3%81%84/#:~:text=Noun%20%2B%20%EF%BD%9E%E3%81%A3%E3%81%BD%E3%81%84" }
  ],
  "〜がち": [
    { nom: "Tae Kim", page: "Tendencies", url: "https://guidetojapanese.org/learn/grammar/tendency#part2" }
  ],
  "〜気味": [],
  "〜だらけ": [
    { nom: "Tae Kim", page: "Covered by something", url: "https://guidetojapanese.org/learn/grammar/covered#part2" }
  ],
  "〜ふりをする": [],
  "〜くせに": [
    { nom: "Imabi", page: "Criticizing: くせに・くせして", url: "https://imabi.org/criticizing-%e3%81%8f%e3%81%9b%e3%81%ab%e3%83%bb%e3%81%8f%e3%81%9b%e3%81%97%e3%81%a6/#:~:text=%EF%BD%9E%E3%81%8F%E3%81%9B%E3%81%AB%3A%20Dissatisfaction" }
  ],
  "〜もの / 〜もん": [
    { nom: "Tae Kim", page: "Special Expressions with Generic Nouns", url: "https://guidetojapanese.org/learn/grammar/genericnouns" },
    { nom: "Imabi", page: "Combination Particles with もの", url: "https://imabi.org/combination-particles-with-%e3%82%82%e3%81%ae/" }
  ],
  "〜っけ": [
    { nom: "Imabi", page: "語尾 III", url: "https://imabi.org/%e8%aa%9e%e5%b0%be-iii/" }
  ],
  "〜かな": [
    { nom: "Tae Kim", page: "Review and more sentence-ending particles", url: "https://guidetojapanese.org/learn/grammar/sentence_ending" }
  ],
  "〜って (thème)": [
    { nom: "Tae Kim", page: "Casual Patterns and Slang", url: "https://guidetojapanese.org/learn/grammar/casual" },
    { nom: "Imabi", page: "The Particles って, たって, & だって", url: "https://imabi.org/the-particles-%e3%81%a3%e3%81%a6-%e3%81%9f%e3%81%a3%e3%81%a6-%e3%81%a0%e3%81%a3%e3%81%a6/#:~:text=The%20Particle%20%E3%81%A3%E3%81%A6" }
  ],
  "まるで〜ようだ": [
    { nom: "Imabi", page: "Similarity", url: "https://imabi.org/similarity/#:~:text=%E3%81%BE%E3%82%8B%E3%81%A7" }
  ],
  "なかなか": [],
  "決して〜ない / めったに〜ない / 全く〜ない": [],
  "〜わけだ": [
    { nom: "Tae Kim", page: "Hypothesizing and Concluding", url: "https://guidetojapanese.org/learn/grammar/reasoning#part2" },
    { nom: "Imabi", page: "わけだ", url: "https://imabi.org/%e3%82%8f%e3%81%91%e3%81%a0/" }
  ],
  "〜わけではない": [
    { nom: "Imabi", page: "わけではない, わけがない, わけにはいかない", url: "https://imabi.org/%e3%82%8f%e3%81%91%e3%81%a7%e3%81%af%e3%81%aa%e3%81%84-%e3%82%8f%e3%81%91%e3%81%8c%e3%81%aa%e3%81%84-%e3%82%8f%e3%81%91%e3%81%ab%e3%81%af%e3%81%84%e3%81%8b%e3%81%aa%e3%81%84/#:~:text=%E3%82%8F%E3%81%91%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84" }
  ],
  "〜わけがない / 〜はずがない": [
    { nom: "Tae Kim", page: "Hypothesizing and Concluding", url: "https://guidetojapanese.org/learn/grammar/reasoning#:~:text=%E3%82%8F%E3%81%91%E3%81%8C%E3%81%AA%E3%81%84" },
    { nom: "Imabi", page: "わけではない, わけがない, わけにはいかない", url: "https://imabi.org/%e3%82%8f%e3%81%91%e3%81%a7%e3%81%af%e3%81%aa%e3%81%84-%e3%82%8f%e3%81%91%e3%81%8c%e3%81%aa%e3%81%84-%e3%82%8f%e3%81%91%e3%81%ab%e3%81%af%e3%81%84%e3%81%8b%e3%81%aa%e3%81%84/#:~:text=%E3%82%8F%E3%81%91%E3%81%8C%E3%81%AA%E3%81%84" }
  ],
  "〜わけにはいかない": [
    { nom: "Tae Kim", page: "Hypothesizing and Concluding", url: "https://guidetojapanese.org/learn/grammar/reasoning#:~:text=%E3%82%8F%E3%81%91%E3%81%AB%E3%81%AF%E3%81%84%E3%81%8B%E3%81%AA%E3%81%84" },
    { nom: "Imabi", page: "わけではない, わけがない, わけにはいかない", url: "https://imabi.org/%e3%82%8f%e3%81%91%e3%81%a7%e3%81%af%e3%81%aa%e3%81%84-%e3%82%8f%e3%81%91%e3%81%8c%e3%81%aa%e3%81%84-%e3%82%8f%e3%81%91%e3%81%ab%e3%81%af%e3%81%84%e3%81%8b%e3%81%aa%e3%81%84/#:~:text=%E3%82%8F%E3%81%91%E3%81%AB%E3%81%AF%E3%81%84%E3%81%8B%E3%81%AA%E3%81%84" }
  ],
  "〜に違いない": [
    { nom: "Imabi", page: "No doubt that", url: "https://imabi.org/no-doubt-that/#:~:text=%EF%BD%9E%E3%81%AB%E9%81%95%E3%81%84%E3%81%AA%E3%81%84%20VS%20%EF%BD%9E%E3%81%AB%E7%9B%B8%E9%81%95%E3%81%AA%E3%81%84" }
  ],
  "〜とは限らない": [
    { nom: "Imabi", page: "Limit", url: "https://imabi.org/limit/#:~:text=%E9%99%90%E3%82%89%E3%81%AA%E3%81%84" }
  ],
  "〜おそれがある": [],
  "〜ということだ / 〜とのことだ": [
    { nom: "Tae Kim", page: "Defining and Describing", url: "https://guidetojapanese.org/learn/grammar/define#:~:text=%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8" }
  ],
  "〜べきだ": [
    { nom: "Tae Kim", page: "Things that should be a certain way", url: "https://guidetojapanese.org/learn/grammar/should#part3" },
    { nom: "Imabi", page: "Obligation: ～べきだ", url: "https://imabi.org/obligation-%ef%bd%9e%e3%81%b9%e3%81%8d%e3%81%a0/#:~:text=%EF%BD%9E%E3%81%B9%E3%81%8D%20Used%20Adjectivally" }
  ],
  "〜ことだ": [],
  "〜ものだ": [
    { nom: "Imabi", page: "Used To: ～たものだ& かつて", url: "https://imabi.org/used-to-%ef%bd%9e%e3%81%9f%e3%82%82%e3%81%ae%e3%81%a0-%e5%98%97%e3%81%a6/#:~:text=Verb%20%EF%BC%8B%20%EF%BD%9E%E3%81%9F%E3%82%82%E3%81%AE%E3%81%A0" }
  ],
  "〜ことはない": [],
  "〜しかない": [
    { nom: "Tae Kim", page: "Expressing Amounts", url: "https://guidetojapanese.org/learn/grammar/amount#:~:text=%E3%81%97%E3%81%8B%E3%81%AA%E3%81%84" },
    { nom: "Imabi", page: "Shika & Hoka", url: "https://imabi.org/shika-hoka/#:~:text=%E3%81%97%E3%81%8B%E3%81%AA%E3%81%84" }
  ],
  "〜ばよかった": [
    { nom: "Imabi", page: "Conditional Phrases", url: "https://imabi.org/conditional-phrases/#:~:text=%E3%81%B0%E3%82%88%E3%81%8B%E3%81%A3%E3%81%9F" }
  ],
  "〜てほしい": [
    { nom: "Tae Kim", page: "Desire and Suggestions", url: "https://guidetojapanese.org/learn/grammar/desire#:~:text=%E3%81%A6%E3%81%BB%E3%81%97%E3%81%84" },
    { nom: "Tofugu", page: "〜てほしい To Express What You Want Someone To Do", url: "https://www.tofugu.com/japanese-grammar/tehoshii/" },
    { nom: "Imabi", page: "Wanting Something: ほしい", url: "https://imabi.org/want-feeling-i-%ef%bd%9e%e3%81%9f%e3%81%84-%e3%81%bb%e3%81%97%e3%81%84/#:~:text=%EF%BD%9E%E3%81%A6%E3%81%BB%E3%81%97%E3%81%84%3A%20Wanting%20Something%20Done%20by%E2%80%A6" }
  ],
  "〜させてください": [
    { nom: "Tae Kim", page: "Causative and Passive Verbs", url: "https://guidetojapanese.org/learn/grammar/causepass" },
    { nom: "Imabi", page: "The Causative I: ～させる & ～せる", url: "https://imabi.org/the-causative-i-%ef%bd%9e%e3%81%95%e3%81%9b%e3%82%8b-%ef%bd%9e%e3%81%9b%e3%82%8b/#:~:text=%E3%81%95%E3%81%9B%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84" }
  ],
  "〜てたまらない / 〜てしょうがない": [],
  "〜ようにする": [
    { nom: "Tae Kim", page: "Using する and なる with the に particle", url: "https://guidetojapanese.org/learn/grammar/surunaru#:~:text=%E3%82%88%E3%81%86%E3%81%AB%E3%81%99%E3%82%8B" },
    { nom: "Imabi", page: "～ようになる& ～ようにする", url: "https://imabi.org/%ef%bd%9e%e3%82%88%e3%81%86%e3%81%ab%e3%81%aa%e3%82%8b-%ef%bd%9e%e3%82%88%e3%81%86%e3%81%ab%e3%81%99%e3%82%8b/#:~:text=%EF%BD%9E%E3%82%88%E3%81%86%E3%81%AB%E3%81%99%E3%82%8B" }
  ],
  "〜ようとする": [
    { nom: "Tae Kim", page: "Trying or attempting something", url: "https://guidetojapanese.org/learn/grammar/try#:~:text=%E3%82%88%E3%81%86%E3%81%A8%E3%81%99%E3%82%8B" }
  ],
  "〜ことにしている": [
    { nom: "Imabi", page: "Expressions with こと", url: "https://imabi.org/expressions-with-%e3%81%93%e3%81%a8/#:~:text=%E3%81%93%E3%81%A8%E3%81%AB%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B" }
  ],
  "〜ことになっている": [],
  "〜たばかり": [
    { nom: "Tae Kim", page: "Time-specific actions", url: "https://guidetojapanese.org/learn/grammar/timeactions#part2" },
    { nom: "Imabi", page: "Combination Particles with ばかり", url: "https://imabi.org/combination-particles-with-%e3%81%b0%e3%81%8b%e3%82%8a/#:~:text=The%20Adverbial%20Particle%20%E3%81%B0%E3%81%8B%E3%82%8A" }
  ],
  "〜うちに": [
    { nom: "Tofugu", page: "うち: Japanese Word For \"Inside\"", url: "https://www.tofugu.com/japanese-grammar/uchi/" },
    { nom: "Imabi", page: "While II: ～うち", url: "https://imabi.org/while-ii-%e3%81%86%e3%81%a1/#:~:text=%EF%BD%9E%E3%81%86%E3%81%A1%E3%81%AB%20w%2F%20Instantaneous%20Verbs" }
  ],
  "〜最中に": [],
  "〜たとたん": [
    { nom: "Tae Kim", page: "Time-specific actions", url: "https://guidetojapanese.org/learn/grammar/timeactions#part3" },
    { nom: "Imabi", page: "As soon as", url: "https://imabi.org/as-soon-as/#:~:text=%E3%81%A8%E3%81%9F%E3%82%93" }
  ],
  "〜たびに": [
    { nom: "Imabi", page: "Whenever II: ～度に, ～都度, & ～につけ", url: "https://imabi.org/whenever-ii-%ef%bd%9e%e5%ba%a6%e3%81%ab-%ef%bd%9e%e9%83%bd%e5%ba%a6%e3%80%80-%ef%bd%9e%e3%81%ab%e3%81%a4%e3%81%91/#:~:text=%EF%BD%9E%E5%BA%A6%E3%81%AB" }
  ],
  "〜てはじめて": [],
  "〜ついでに": [
    { nom: "Imabi", page: "Incidental", url: "https://imabi.org/incidental/#:~:text=%E3%81%A4%E3%81%84%E3%81%A7%E3%81%AB" }
  ],
  "〜際に": [
    { nom: "Imabi", page: "Occasion", url: "https://imabi.org/occasion/" }
  ],
  "〜から〜にかけて": [
    { nom: "Imabi", page: "Span: ～にかけて & にわたって", url: "https://imabi.org/span-%ef%bd%9e%e3%81%ab%e3%81%8b%e3%81%91%e3%81%a6-%e3%81%ab%e3%82%8f%e3%81%9f%e3%81%a3%e3%81%a6/#:~:text=%EF%BD%9E%E3%81%8B%E3%82%89%EF%BD%9E%E3%81%BE%E3%81%A7%20VS%20%EF%BD%9E%E3%81%8B%E3%82%89%EF%BD%9E%E3%81%AB%E3%81%8B%E3%81%91%E3%81%A6" }
  ],
  "〜につれて": [
    { nom: "Imabi", page: "As (change)", url: "https://imabi.org/as-change/#:~:text=%EF%BD%9E%E3%81%AB%E3%81%A4%E3%82%8C%E3%81%A6" }
  ],
  "〜一方だ": [],
  "〜おかげで": [],
  "〜せいで": [
    { nom: "Imabi", page: "Fault: ～せいで & ～にかこつけて", url: "https://imabi.org/fault-%ef%bd%9e%e3%81%9b%e3%81%84%e3%81%a7-%ef%bd%9e%e3%81%ab%e3%81%8b%e3%81%93%e3%81%a4%e3%81%91%e3%81%a6/" }
  ],
  "〜によって": [
    { nom: "Tae Kim", page: "Using 「方」 and 「よる」", url: "https://guidetojapanese.org/learn/grammar/comparison#part5" },
    { nom: "Imabi", page: "～によって", url: "https://imabi.org/%ef%bd%9e%e3%81%ab%e3%82%88%e3%81%a3%e3%81%a6/#:~:text=%EF%BD%9E%E3%81%AB%E3%82%88%E3%81%A3%E3%81%A6%E3%83%BB%E3%81%AB%E3%82%88%E3%82%8A" }
  ],
  "〜によると": [
    { nom: "Tae Kim", page: "Using 「方」 and 「よる」", url: "https://guidetojapanese.org/learn/grammar/comparison#part6" },
    { nom: "Imabi", page: "Hearsay: ～そうだ", url: "https://imabi.org/hearsay/#:~:text=%E3%81%AB%E3%82%88%E3%82%8B%E3%81%A8" }
  ],
  "〜について / 〜に関して": [],
  "〜に対して": [
    { nom: "Imabi", page: "～に対して", url: "https://imabi.org/%ef%bd%9e%e3%81%ab%e5%af%be%e3%81%97%e3%81%a6/#:~:text=%EF%BD%9E%E3%81%AB%E5%AF%BE%E3%81%97%E3%81%A6" }
  ],
  "〜にとって": [
    { nom: "Imabi", page: "Standpoint: として（は） VS にとって（は）", url: "https://imabi.org/standpoint-%e3%81%a8%e3%81%97%e3%81%a6%ef%bc%88%e3%81%af%ef%bc%89-vs-%e3%81%ab%e3%81%a8%e3%81%a3%e3%81%a6%ef%bc%88%e3%81%af%ef%bc%89/#:~:text=%EF%BD%9E%E3%81%AB%E3%81%A8%E3%81%A3%E3%81%A6" }
  ],
  "〜として": [
    { nom: "Imabi", page: "Standpoint: として（は） VS にとって（は）", url: "https://imabi.org/standpoint-%e3%81%a8%e3%81%97%e3%81%a6%ef%bc%88%e3%81%af%ef%bc%89-vs-%e3%81%ab%e3%81%a8%e3%81%a3%e3%81%a6%ef%bc%88%e3%81%af%ef%bc%89/#:~:text=%EF%BD%9E%E3%81%A8%E3%81%97%E3%81%A6%EF%BC%88%E3%81%AF%EF%BC%89" }
  ],
  "〜に比べて": [
    { nom: "Imabi", page: "Compare/Contrast", url: "https://imabi.org/compare-contrast/" }
  ],
  "〜において": [
    { nom: "Imabi", page: "～において・における", url: "https://imabi.org/%ef%bd%9e%e3%81%ab%e3%81%8a%e3%81%84%e3%81%a6%e3%83%bb%e3%81%ab%e3%81%8a%e3%81%91%e3%82%8b/#:~:text=%EF%BD%9E%E3%81%AB%E3%81%8A%E3%81%84%E3%81%A6%E3%83%BB%E3%81%8A%E3%81%91%E3%82%8B" }
  ],
  "〜を通して / 〜を通じて": [
    { nom: "Imabi", page: "Through: を通じて & を通して", url: "https://imabi.org/through-%e3%82%92%e9%80%9a%e3%81%98%e3%81%a6-%e3%82%92%e9%80%9a%e3%81%97%e3%81%a6/#:~:text=%EF%BD%9E%E3%82%92%E9%80%9A%E3%81%97%E3%81%A6%20VS%20%EF%BD%9E%E3%82%92%E9%80%9A%E3%81%98%E3%81%A6" }
  ],
  "〜を中心に": [
    { nom: "Imabi", page: "Centering: ～を中心に（して）", url: "https://imabi.org/centering-%ef%bd%9e%e3%82%92%e4%b8%ad%e5%bf%83%e3%81%ab%ef%bc%88%e3%81%97%e3%81%a6%ef%bc%89/#:~:text=%EF%BD%9E%E3%82%92%E4%B8%AD%E5%BF%83%E3%81%AB%EF%BC%88%E3%81%97%E3%81%A6%EF%BC%89" }
  ],
  "〜をはじめ": [
    { nom: "Imabi", page: "Defining Parameter", url: "https://imabi.org/defining-parameter/#:~:text=%E3%82%92%E3%81%AF%E3%81%98%E3%82%81" }
  ],
  "〜向け / 〜向き": [],
  "〜代わりに": [
    { nom: "Imabi", page: "Nominal Phrases II", url: "https://imabi.org/nominal-phrases-ii/#:~:text=%E4%BB%A3%E3%82%8F%E3%82%8A%E3%81%AB" }
  ],
  "〜とおり": [
    { nom: "Imabi", page: "～とおりに", url: "https://imabi.org/%ef%bd%9e%e3%81%a8%e3%81%8a%e3%82%8a%e3%81%ab/#:~:text=%EF%BD%9E%E3%81%A8%E3%81%8A%E3%82%8A%E3%81%AB%20%26%20%EF%BD%9E%E3%81%A9%E3%81%8A%E3%82%8A%E3%81%AB" }
  ],
  "〜結果": [
    { nom: "Imabi", page: "Result", url: "https://imabi.org/result/#:~:text=%EF%BD%9E%E7%B5%90%E6%9E%9C" }
  ],
  "〜くらい / 〜ほど": [
    { nom: "Tae Kim", page: "Expressing Amounts", url: "https://guidetojapanese.org/learn/grammar/amount#part8" },
    { nom: "Tofugu", page: "くらい For Approximation", url: "https://www.tofugu.com/japanese-grammar/kurai/" },
    { nom: "Imabi", page: "The Particles ほど & くらい", url: "https://imabi.org/the-particles-%e3%81%bb%e3%81%a9-%e3%81%8f%e3%82%89%e3%81%84/#:~:text=The%20Adverbial%20Particle%20%E3%81%BB%E3%81%A9" }
  ],
  "〜ほど〜ない": [
    { nom: "Tae Kim", page: "Expressing Amounts", url: "https://guidetojapanese.org/learn/grammar/amount#part8" },
    { nom: "Imabi", page: "The Particles ほど & くらい", url: "https://imabi.org/the-particles-%e3%81%bb%e3%81%a9-%e3%81%8f%e3%82%89%e3%81%84/#:~:text=The%20Adverbial%20Particle%20%E3%81%BB%E3%81%A9" }
  ],
  "〜ば〜ほど": [
    { nom: "Tae Kim", page: "Expressing Amounts", url: "https://guidetojapanese.org/learn/grammar/amount#part8" },
    { nom: "Imabi", page: "The Particles ほど & くらい", url: "https://imabi.org/the-particles-%e3%81%bb%e3%81%a9-%e3%81%8f%e3%82%89%e3%81%84/#:~:text=The%20Adverbial%20Particle%20%E3%81%BB%E3%81%A9" }
  ],
  "〜さえ": [
    { nom: "Tae Kim", page: "The minimum expectation", url: "https://guidetojapanese.org/learn/grammar/even#part2" },
    { nom: "Imabi", page: "The Particles さえ, すら, & だに", url: "https://imabi.org/the-particles-%e3%81%95%e3%81%88-%e3%81%99%e3%82%89-%e3%81%a0%e3%81%ab/#:~:text=The%20Adverbial%20Particle%20%E3%81%95%E3%81%88" }
  ],
  "〜さえ〜ば": [
    { nom: "Tae Kim", page: "The minimum expectation", url: "https://guidetojapanese.org/learn/grammar/even#part2" },
    { nom: "Imabi", page: "The Particles さえ, すら, & だに", url: "https://imabi.org/the-particles-%e3%81%95%e3%81%88-%e3%81%99%e3%82%89-%e3%81%a0%e3%81%ab/#:~:text=The%20Adverbial%20Particle%20%E3%81%95%E3%81%88" }
  ],
  "〜こそ": [
    { nom: "Imabi", page: "The Particle こそ", url: "https://imabi.org/the-particle-%e3%81%93%e3%81%9d/#:~:text=The%20Fundamentals%20of%20%E3%81%93%E3%81%9D" }
  ],
  "〜だけでなく / 〜ばかりでなく": [
    { nom: "Imabi", page: "Addition", url: "https://imabi.org/addition/#:~:text=%E3%81%A0%E3%81%91%E3%81%A7%E3%81%AA%E3%81%8F" }
  ],
  "〜はもちろん": [
    { nom: "Imabi", page: "Addition", url: "https://imabi.org/addition/#:~:text=%EF%BD%9E%E3%81%AF%E3%82%82%E3%81%A1%E3%82%8D%E3%82%93%E3%83%BB%E3%82%82%E3%81%A8%E3%82%88%E3%82%8A%E3%83%BB%E3%81%8A%E3%82%8D%E3%81%8B" }
  ],
  "〜に加えて": [
    { nom: "Imabi", page: "Addition", url: "https://imabi.org/addition/#:~:text=%EF%BD%9E%E3%81%AB%E5%8A%A0%E3%81%88%E3%81%A6" }
  ],
  "〜というより": [
    { nom: "Imabi", page: "Rather", url: "https://imabi.org/rather/#:~:text=%EF%BD%9E%E3%81%A8%E3%81%84%E3%81%86%E3%82%88%E3%82%8A%EF%BC%88%E3%82%80%E3%81%97%E3%82%8D%EF%BC%89%EF%BD%9E" }
  ],
  "〜といっても": [],
  "〜といえば": [
    { nom: "Imabi", page: "“When it Comes to…” I:というと, といえば, & といったら", url: "https://imabi.org/when-it-comes-to-i%e3%81%a8%e3%81%84%e3%81%86%e3%81%a8-%e3%81%a8%e3%81%84%e3%81%88%e3%81%b0-%e3%81%a8%e3%81%84%e3%81%a3%e3%81%9f%e3%82%89/#:~:text=%EF%BD%9E%E3%81%A8%E3%81%84%E3%81%88%E3%81%B0%3A%20Speaking%20of%20which%E2%80%A6" }
  ],
  "〜一方で": [
    { nom: "Imabi", page: "Opposite: 逆に, 反対に, 反面, & 一方（で）", url: "https://imabi.org/opposite-%e9%80%86%e3%81%ab-%e5%8f%8d%e5%af%be%e3%81%ab-%e5%8f%8d%e9%9d%a2-%e4%b8%80%e6%96%b9%ef%bc%88%e3%81%a7%ef%bc%89/#:~:text=%EF%BD%9E%E5%8F%8D%E9%9D%A2%20VS%20%EF%BD%9E%E4%B8%80%E6%96%B9%EF%BC%88%E3%81%A7%EF%BC%89" }
  ],
  "たとえ〜ても": [
    { nom: "Imabi", page: "No Matter If: たとえ・いくら・どれだけ・どんなに", url: "https://imabi.org/no-matter-if-%e3%81%9f%e3%81%a8%e3%81%88/#:~:text=%E3%81%9F%E3%81%A8%E3%81%88%20Situation%20A%20%2B%20%EF%BD%9E%E3%81%A6%E3%82%82%20Situation%20B" }
  ],
  "ところが": [],
  "〜切る": [
    { nom: "Imabi", page: "Used to/together…", url: "https://imabi.org/used-to-together/#:~:text=%EF%BD%9E%E5%88%87%E3%82%8B" }
  ],
  "〜かける": [
    { nom: "Imabi", page: "Start to II: ～かける & ～かかる", url: "https://imabi.org/start-to-ii-%ef%bd%9e%e3%81%8b%e3%81%91%e3%82%8b-%ef%bd%9e%e3%81%8b%e3%81%8b%e3%82%8b/" }
  ],
  "〜っぱなし": [
    { nom: "Tae Kim", page: "Expressing a lack of change", url: "https://guidetojapanese.org/learn/grammar/nochange#part3" }
  ],
  "〜直す": [
    { nom: "Imabi", page: "Fix/Error: ～忘れる, ～直す, ～間違える, & ～誤る", url: "https://imabi.org/fix-error-%ef%bd%9e%e5%bf%98%e3%82%8c%e3%82%8b-%ef%bd%9e%e7%9b%b4%e3%81%99-%e9%96%93%e9%81%95%e3%81%88%e3%82%8b-%ef%bd%9e%e8%aa%a4%e3%82%8b/#:~:text=Verb1%20%E9%80%A3%E7%94%A8%E5%BD%A2%20%EF%BC%8B%20%EF%BD%9E%E7%9B%B4%E3%81%99" }
  ],
  "〜合う": [
    { nom: "Imabi", page: "Used to/together…", url: "https://imabi.org/used-to-together/#:~:text=%EF%BD%9E%E5%90%88%E3%81%86%E3%83%BB%E5%90%88%E3%82%8F%E3%81%9B%E3%82%8B" }
  ],
  "〜込む": [
    { nom: "Imabi", page: "込む", url: "https://imabi.org/%e8%be%bc%e3%82%80/#:~:text=%E8%BE%BC%E3%82%80" }
  ]
};
