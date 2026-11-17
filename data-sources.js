// ============================================================
//  LES SOURCES de chaque point de grammaire.
//  Chaque page citée a été ouverte et contrôlée : elle traite bien du point.
//  - Tae Kim : Tae Kim's Guide to Learning Japanese (guidetojapanese.org)
//  - Tofugu  : Tofugu Japanese Grammar (tofugu.com)
//  - Imabi   : IMABI (imabi.org)
//  - Bunpro  : Bunpro Grammar (bunpro.jp), qui donne aussi le niveau JLPT
//  Quand c'est possible, le lien mène à la section précise de la page
//  (partie après le # dans l'adresse).
//  Une liste vide [] signifie : aucune source vérifiée pour l'instant.
// ============================================================

const SOURCES = {
  "〜です": [
    { nom: "Tae Kim", page: "Polite Form and Verb Stems", url: "https://guidetojapanese.org/learn/grammar/polite#part4" },
    { nom: "Tofugu", page: "です: Japanese Word for Politeness", url: "https://www.tofugu.com/japanese-grammar/desu/" },
    { nom: "Imabi", page: "Copular Sentences II", url: "https://imabi.org/copular-sentences-ii%e3%80%80%e3%82%b3%e3%83%94%e3%83%a5%e3%83%a9%e6%96%87%ef%bc%88%e4%b8%81%e5%af%a7%e4%bd%93%ef%bc%89/#:~:text=The%20Copula%20Verb%20%E3%81%A7%E3%81%99" },
    { nom: "Bunpro", page: "です (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%A7%E3%81%99" }
  ],
  "は": [
    { nom: "Tae Kim", page: "Introduction to Particles", url: "https://guidetojapanese.org/learn/grammar/particlesintro#:~:text=The%20%E3%80%8C%E3%81%AF%E3%80%8D%20topic%20particle" },
    { nom: "Tofugu", page: "Particle は: Topic Marker", url: "https://www.tofugu.com/japanese-grammar/particle-wa/" },
    { nom: "Imabi", page: "The Particle は I: The Topic/Contrast Marker", url: "https://imabi.org/the-particle-wa-%e3%81%af-i-the-topic-contrast-marker/" },
    { nom: "Bunpro", page: "は (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AF" }
  ],
  "が": [
    { nom: "Tae Kim", page: "Introduction to Particles", url: "https://guidetojapanese.org/learn/grammar/particlesintro#:~:text=The%20%E3%80%8C%E3%81%8C%E3%80%8D%20identifier%20particle" },
    { nom: "Tofugu", page: "Particle が: Subject Marker", url: "https://www.tofugu.com/japanese-grammar/particle-ga/" },
    { nom: "Imabi", page: "The Subject Marker が", url: "https://imabi.org/the-particle-ga-i%e3%80%80%e6%a0%bc%e5%8a%a9%e8%a9%9e%e3%80%8c%e3%81%8c%e3%80%8d%e2%91%a0/" },
    { nom: "Bunpro", page: "が (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%8C" }
  ],
  "を": [
    { nom: "Tae Kim", page: "Particles used with verbs", url: "https://guidetojapanese.org/learn/grammar/verbparticles#part2" },
    { nom: "Tofugu", page: "Particle を: Direct Object Marker", url: "https://www.tofugu.com/japanese-grammar/particle-wo/" },
    { nom: "Imabi", page: "The Particle を I", url: "https://imabi.org/the-particle-wo-%e3%82%92-i/" },
    { nom: "Bunpro", page: "を (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%82%92" }
  ],
  "に (lieu, temps, destinataire)": [
    { nom: "Tae Kim", page: "Particles used with verbs", url: "https://guidetojapanese.org/learn/grammar/verbparticles#part3" },
    { nom: "Tofugu", page: "Particle に: For Pin Pointing Locations", url: "https://www.tofugu.com/japanese-grammar/particle-ni/" },
    { nom: "Imabi", page: "The Locational Marker に", url: "https://imabi.org/the-particle-ni-%e3%81%ab-i/" },
    { nom: "Bunpro", page: "に (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AB" }
  ],
  "へ": [
    { nom: "Tae Kim", page: "Particles used with verbs", url: "https://guidetojapanese.org/learn/grammar/verbparticles#part4" },
    { nom: "Tofugu", page: "Particle へ: For Marking Direction", url: "https://www.tofugu.com/japanese-grammar/particle-he/" },
    { nom: "Imabi", page: "The Particle へ", url: "https://imabi.org/the-particle-e-%e3%81%b8/" },
    { nom: "Bunpro", page: "へ (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%B8" }
  ],
  "で": [
    { nom: "Tae Kim", page: "Particles used with verbs", url: "https://guidetojapanese.org/learn/grammar/verbparticles#part5" },
    { nom: "Tofugu", page: "Particle で: To Specify How / Where", url: "https://www.tofugu.com/japanese-grammar/particle-de/" },
    { nom: "Imabi", page: "The Particle で I", url: "https://imabi.org/the-particle-de-%e3%81%a7-i/" },
    { nom: "Bunpro", page: "で (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%A7" },
    { nom: "Bunpro", page: "で-by (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%A7-by" }
  ],
  "と": [
    { nom: "Tae Kim", page: "Noun-related Particles", url: "https://guidetojapanese.org/learn/grammar/nounparticles#part2" },
    { nom: "Tofugu", page: "Particle と: For Connecting Words Together", url: "https://www.tofugu.com/japanese-grammar/particle-to/" },
    { nom: "Imabi", page: "The Parallel/Case Particle と", url: "https://imabi.org/the-particle-%e3%81%a8-i/" },
    { nom: "Bunpro", page: "と-and (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%A8-and" },
    { nom: "Bunpro", page: "と-with (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%A8-with" }
  ],
  "も": [
    { nom: "Tae Kim", page: "Introduction to Particles", url: "https://guidetojapanese.org/learn/grammar/particlesintro#:~:text=The%20%E3%80%8C%E3%82%82%E3%80%8D%20inclusive%20topic%20particle" },
    { nom: "Tofugu", page: "Particle も: Addition Marker", url: "https://www.tofugu.com/japanese-grammar/particle-mo/" },
    { nom: "Imabi", page: "The Particle も I: Also/Too", url: "https://imabi.org/the-particle-mo-%e3%82%82-i-also-too/" },
    { nom: "Bunpro", page: "も (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%82%82" }
  ],
  "の": [
    { nom: "Tae Kim", page: "Noun-related Particles", url: "https://guidetojapanese.org/learn/grammar/nounparticles#part4" },
    { nom: "Tofugu", page: "Particle の: Noun Modifier", url: "https://www.tofugu.com/japanese-grammar/particle-no-noun-modifier/" },
    { nom: "Imabi", page: "The Attributive Marker の", url: "https://imabi.org/the-case-particle-%e3%81%ae-i/" },
    { nom: "Bunpro", page: "の (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AE" }
  ],
  "か": [
    { nom: "Tae Kim", page: "The Question Marker", url: "https://guidetojapanese.org/learn/grammar/question#part3" },
    { nom: "Tofugu", page: "Particle か: A Marker of the Unknown", url: "https://www.tofugu.com/japanese-grammar/particle-ka/" },
    { nom: "Imabi", page: "The Particle か I: Basic Questions", url: "https://imabi.org/the-particle-ka-%e3%81%8b-i-basic-questions/" },
    { nom: "Bunpro", page: "か (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%8B" },
    { nom: "Bunpro", page: "か-or (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%8B-or" }
  ],
  "や": [
    { nom: "Tae Kim", page: "Noun-related Particles", url: "https://guidetojapanese.org/learn/grammar/nounparticles#part3" },
    { nom: "Tofugu", page: "Particle や For Listing Multiple Items", url: "https://www.tofugu.com/japanese-grammar/particle-ya/" },
    { nom: "Imabi", page: "The Parallel Particle や", url: "https://imabi.org/the-particle-%e3%82%84/" },
    { nom: "Bunpro", page: "や (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%82%84" }
  ],
  "〜から〜まで": [
    { nom: "Tae Kim", page: "Particles used with verbs", url: "https://guidetojapanese.org/learn/grammar/verbparticles" },
    { nom: "Tofugu", page: "Particle まで: Endpoint Marker", url: "https://www.tofugu.com/japanese-grammar/particle-made/" },
    { nom: "Imabi", page: "The Particle まで", url: "https://imabi.org/the-particle-%e3%81%be%e3%81%a7/#:~:text=Omitting%20%E3%81%BE%E3%81%A7" },
    { nom: "Bunpro", page: "から (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%82%89" }
  ],
  "ね / よ": [
    { nom: "Tae Kim", page: "Review and more sentence-ending particles", url: "https://guidetojapanese.org/learn/grammar/sentence_ending" },
    { nom: "Tofugu", page: "Particle よね", url: "https://www.tofugu.com/japanese-grammar/particle-yone/" },
    { nom: "Imabi", page: "The Final Particles よ & ね", url: "https://imabi.org/%e8%aa%9e%e5%b0%be-i-%e3%82%88-%e3%81%ad/" },
    { nom: "Bunpro", page: "ね (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AD" },
    { nom: "Bunpro", page: "よ (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%82%88" }
  ],
  "だけ": [
    { nom: "Tae Kim", page: "Expressing Amounts", url: "https://guidetojapanese.org/learn/grammar/amount#part2" },
    { nom: "Tofugu", page: "だけ for \"Only\"", url: "https://www.tofugu.com/japanese-grammar/dake/" },
    { nom: "Imabi", page: "The Particle だけ", url: "https://imabi.org/the-particle-%e3%81%a0%e3%81%91/#:~:text=The%20Adverbial%20Particle%20%E3%81%A0%E3%81%91" },
    { nom: "Bunpro", page: "だけ (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%A0%E3%81%91" }
  ],
  "こ・そ・あ・ど": [
    { nom: "Tofugu", page: "Japanese Demonstratives: こそあど (Ko-So-A-Do)", url: "https://www.tofugu.com/japanese-grammar/kosoado/" },
    { nom: "Imabi", page: "こそあど I: This & That", url: "https://imabi.org/kosoado-i-this-that/" },
    { nom: "Bunpro", page: "これ (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%93%E3%82%8C" },
    { nom: "Bunpro", page: "この (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%93%E3%81%AE" },
    { nom: "Bunpro", page: "ここ (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%93%E3%81%93" }
  ],
  "〜ます / 〜ません": [
    { nom: "Tae Kim", page: "Polite Form and Verb Stems", url: "https://guidetojapanese.org/learn/grammar/polite#:~:text=%E3%81%BE%E3%81%9B%E3%82%93" },
    { nom: "Tofugu", page: "〜ます: Verb Polite Form", url: "https://www.tofugu.com/japanese-grammar/masu/" },
    { nom: "Bunpro", page: "polite-verb-endings (JLPT N5)", url: "https://bunpro.jp/grammar_points/polite-verb-endings" }
  ],
  "〜ました / 〜ませんでした": [
    { nom: "Tae Kim", page: "Polite Form and Verb Stems", url: "https://guidetojapanese.org/learn/grammar/polite#:~:text=%E3%81%BE%E3%81%9B%E3%82%93%E3%81%A7%E3%81%97%E3%81%9F" },
    { nom: "Bunpro", page: "polite-verb-endings (JLPT N5)", url: "https://bunpro.jp/grammar_points/polite-verb-endings" }
  ],
  "〜ない": [
    { nom: "Tae Kim", page: "Negative Verbs", url: "https://guidetojapanese.org/learn/grammar/negativeverbs" },
    { nom: "Tofugu", page: "Japanese Verb Negative Plain ない Form", url: "https://www.tofugu.com/japanese-grammar/verb-negative-nai-form/" },
    { nom: "Imabi", page: "Negative Patterns", url: "https://imabi.org/negative-patterns/#:~:text=%EF%BD%9E%E3%81%AA%E3%81%84%E3%81%93%E3%81%A8%E3%81%AB%E3%81%AF%28%EF%BD%9E%E3%81%AA%E3%81%84%29" },
    { nom: "Bunpro", page: "るverb-ない (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%82%8Bverb-%E3%81%AA%E3%81%84" },
    { nom: "Bunpro", page: "うverb--ない (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%86verb--%E3%81%AA%E3%81%84" }
  ],
  "〜た": [
    { nom: "Tae Kim", page: "Past Tense", url: "https://guidetojapanese.org/learn/grammar/past_tense" },
    { nom: "Tofugu", page: "Japanese Verb Plain Past た Form", url: "https://www.tofugu.com/japanese-grammar/verb-past-ta-form/" },
    { nom: "Imabi", page: "Tense I: The Auxiliary Verb -TA", url: "https://imabi.org/tense-i-the-auxiliary-verb-ta/" },
    { nom: "Bunpro", page: "る-verb-past (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%82%8B-verb-past" },
    { nom: "Bunpro", page: "う-verb-past (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%86-verb-past" }
  ],
  "〜て (enchaînement)": [
    { nom: "Tae Kim", page: "Compound Sentences", url: "https://guidetojapanese.org/learn/grammar/compound" },
    { nom: "Tofugu", page: "Te Form: Connecting words and clauses in Japanese", url: "https://www.tofugu.com/japanese-grammar/te-form/" },
    { nom: "Imabi", page: "The Conjunctive Particle て I: The Affirmative", url: "https://imabi.org/the-conjunctive-particle-%e3%81%a6-i-the-affirmative/" },
    { nom: "Bunpro", page: "verb-て (JLPT N5)", url: "https://bunpro.jp/grammar_points/verb-%E3%81%A6" }
  ],
  "〜ている": [
    { nom: "Tae Kim", page: "Other uses of the te-form", url: "https://guidetojapanese.org/learn/grammar/teform#part2" },
    { nom: "Tofugu", page: "Japanese Verb Continuous Form ている", url: "https://www.tofugu.com/japanese-grammar/verb-continuous-form-teiru/" },
    { nom: "Imabi", page: "The Progressive/Continued State: ～ている", url: "https://imabi.org/the-progressive-continued-state-te-iru-%ef%bd%9e%e3%81%a6%e3%81%84%e3%82%8b/#:~:text=%EF%BD%9E%E3%81%A6%E3%81%84%E3%82%8B" },
    { nom: "Bunpro", page: "ている1 (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%84%E3%82%8B1" },
    { nom: "Bunpro", page: "ている2 (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%84%E3%82%8B2" }
  ],
  "〜てください": [
    { nom: "Tae Kim", page: "Making Requests", url: "https://guidetojapanese.org/learn/grammar/requests#part2" },
    { nom: "Tofugu", page: "ください for Making Requests", url: "https://www.tofugu.com/japanese-grammar/kudasai/" },
    { nom: "Bunpro", page: "てください (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84" }
  ],
  "〜ないでください": [
    { nom: "Tae Kim", page: "Making Requests", url: "https://guidetojapanese.org/learn/grammar/requests#:~:text=%E3%81%AA%E3%81%84%E3%81%A7%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84" },
    { nom: "Tofugu", page: "ください for Making Requests", url: "https://www.tofugu.com/japanese-grammar/kudasai/" },
    { nom: "Bunpro", page: "ないでください (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%84%E3%81%A7%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84" }
  ],
  "〜てもいい": [
    { nom: "Tae Kim", page: "Expressing “must” or “have to”", url: "https://guidetojapanese.org/learn/grammar/must#:~:text=%E3%81%A6%E3%82%82%E3%81%84%E3%81%84" },
    { nom: "Tofugu", page: "〜てもいい for Permissions", url: "https://www.tofugu.com/japanese-grammar/temoii/" },
    { nom: "Imabi", page: "Permission", url: "https://imabi.org/permission/#:~:text=%EF%BD%9E%E3%81%A6%E3%82%82%E3%81%84%E3%81%84%E3%81%A7%E3%81%99%E3%81%8B%EF%BC%9F" },
    { nom: "Bunpro", page: "てもいい (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%82%82%E3%81%84%E3%81%84" }
  ],
  "〜てはいけない": [
    { nom: "Tae Kim", page: "Expressing “must” or “have to”", url: "https://guidetojapanese.org/learn/grammar/must#part2" },
    { nom: "Imabi", page: "Must Not", url: "https://imabi.org/must-not/#:~:text=%E7%A6%81%E6%AD%A2%EF%BC%9A%EF%BD%9E%E3%81%A6%E3%81%AF%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84%E3%83%BB%EF%BD%9E%E3%81%A6%E3%81%AF%E3%81%84%E3%81%91%E3%81%AA%E3%81%84%E3%83%BB%EF%BD%9E%E3%81%A6%E3%81%AF%E3%81%A0%E3%82%81%E3%81%A0" },
    { nom: "Bunpro", page: "てはいけない (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%AF%E3%81%84%E3%81%91%E3%81%AA%E3%81%84" }
  ],
  "〜たい": [
    { nom: "Tae Kim", page: "Desire and Suggestions", url: "https://guidetojapanese.org/learn/grammar/desire#part2" },
    { nom: "Tofugu", page: "Japanese Verb Desire Form たい", url: "https://www.tofugu.com/japanese-grammar/tai-form/" },
    { nom: "Imabi", page: "Personal Desire: ～たい", url: "https://imabi.org/personal-desire-%ef%bd%9e%e3%81%9f%e3%81%84/#:~:text=Conjugating%20w%2F%20Auxiliary%20%EF%BD%9E%E3%81%9F%E3%81%84" },
    { nom: "Bunpro", page: "たい (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%81%84" }
  ],
  "〜ましょう": [
    { nom: "Tae Kim", page: "Desire and Suggestions", url: "https://guidetojapanese.org/learn/grammar/desire#:~:text=%E3%81%BE%E3%81%97%E3%82%87%E3%81%86" },
    { nom: "Imabi", page: "The Volition Form: ～（よ）う", url: "https://imabi.org/the-volitional-i/#:~:text=Polite%20Speech%3A%20%EF%BD%9E%E3%81%BE%E3%81%97%E3%82%87%E3%81%86" },
    { nom: "Bunpro", page: "ましょう (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%BE%E3%81%97%E3%82%87%E3%81%86" }
  ],
  "〜ませんか": [
    { nom: "Imabi", page: "The Particle か W/ The Negative", url: "https://imabi.org/the-particle-ka-%e3%81%8b-ii-%ef%bd%9e%e3%81%aa%e3%81%84%e3%81%8b/#:~:text=%EF%BD%9E%E3%81%BE%E3%81%9B%E3%82%93%E3%81%8B" },
    { nom: "Bunpro", page: "ませんか (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%BE%E3%81%9B%E3%82%93%E3%81%8B" }
  ],
  "〜に行く / 〜に来る": [
    { nom: "Tae Kim", page: "Polite Form and Verb Stems", url: "https://guidetojapanese.org/learn/grammar/polite" },
    { nom: "Imabi", page: "The Purpose Marker に", url: "https://imabi.org/the-purpose-marker-%e3%81%ab/" },
    { nom: "Bunpro", page: "verb-にいく (JLPT N5)", url: "https://bunpro.jp/grammar_points/verb-%E3%81%AB%E3%81%84%E3%81%8F" }
  ],
  "〜がある / 〜がいる": [
    { nom: "Tae Kim", page: "Verb Basics", url: "https://guidetojapanese.org/learn/grammar/verbs" },
    { nom: "Tofugu", page: "いる and ある: Japanese Verbs \"To Exist\" or \"There Is\"", url: "https://www.tofugu.com/japanese-grammar/iru-aru/" },
    { nom: "Imabi", page: "The Existential Verbs ある & いる", url: "https://imabi.org/the-existential-verbs-%e3%81%82%e3%82%8b-%e3%81%84%e3%82%8b/#:~:text=The%20Verb%20%E3%81%84%E3%82%8B%3A%20Conjugations" },
    { nom: "Bunpro", page: "がある (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%8C%E3%81%82%E3%82%8B" },
    { nom: "Bunpro", page: "がいる (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%8C%E3%81%84%E3%82%8B" }
  ],
  "〜前に": [
    { nom: "Imabi", page: "Before: ～前", url: "https://imabi.org/before-%e5%89%8d/" },
    { nom: "Bunpro", page: "まえに (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%BE%E3%81%88%E3%81%AB" }
  ],
  "〜てから": [
    { nom: "Imabi", page: "After I: あと, のち, & ～てから", url: "https://imabi.org/after-i-%e3%81%82%e3%81%a8-%e3%81%ae%e3%81%a1-%ef%bd%9e%e3%81%a6%e3%81%8b%e3%82%89/#:~:text=%EF%BD%9E%E3%81%A6%E3%81%8B%E3%82%89" },
    { nom: "Bunpro", page: "てから (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%8B%E3%82%89" }
  ],
  "〜たり〜たりする": [
    { nom: "Tae Kim", page: "Compound Sentences", url: "https://guidetojapanese.org/learn/grammar/compound" },
    { nom: "Tofugu", page: "Japanese Listing Form たりする", url: "https://www.tofugu.com/japanese-grammar/tarisuru/" },
    { nom: "Imabi", page: "The Particle たり", url: "https://imabi.org/the-particle-%e3%81%9f%e3%82%8a/#:~:text=The%20Conjunctive%20Particle%20%E3%81%9F%E3%82%8A" },
    { nom: "Bunpro", page: "たり-たりする (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%82%8A-%E3%81%9F%E3%82%8A%E3%81%99%E3%82%8B" }
  ],
  "〜なければならない": [
    { nom: "Tae Kim", page: "Expressing “must” or “have to”", url: "https://guidetojapanese.org/learn/grammar/must#:~:text=%E3%81%AA%E3%81%91%E3%82%8C%E3%81%B0" },
    { nom: "Imabi", page: "Must", url: "https://imabi.org/must/#:~:text=%E3%81%AA%E3%81%91%E3%82%8C%E3%81%B0" },
    { nom: "Bunpro", page: "なければならない (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%91%E3%82%8C%E3%81%B0%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84" },
    { nom: "Bunpro", page: "なくちゃ-なきゃ (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%8F%E3%81%A1%E3%82%83-%E3%81%AA%E3%81%8D%E3%82%83" }
  ],
  "〜なくてもいい": [
    { nom: "Tae Kim", page: "Expressing “must” or “have to”", url: "https://guidetojapanese.org/learn/grammar/must#:~:text=%E3%81%AA%E3%81%8F%E3%81%A6%E3%82%82%E3%81%84%E3%81%84" },
    { nom: "Imabi", page: "Permission", url: "https://imabi.org/permission/#:~:text=%EF%BD%9E%E3%81%AA%E3%81%8F%E3%81%A6%E3%82%82%E3%81%84%E3%81%84%20vs%20%EF%BD%9E%E3%81%AA%E3%81%84%E3%81%A7%E3%82%82%E3%81%84%E3%81%84" },
    { nom: "Bunpro", page: "なくてもいい (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%8F%E3%81%A6%E3%82%82%E3%81%84%E3%81%84" }
  ],
  "Adjectifs en い": [
    { nom: "Tae Kim", page: "Adjectives", url: "https://guidetojapanese.org/learn/grammar/adjectives#:~:text=The%20i%2Dadjective" },
    { nom: "Tofugu", page: "Japanese い-Adjective", url: "https://www.tofugu.com/japanese-grammar/i-adjective/" },
    { nom: "Imabi", page: "Adjectives 形容詞", url: "https://imabi.org/adjectives%e3%80%80%e5%bd%a2%e5%ae%b9%e8%a9%9e/" },
    { nom: "Bunpro", page: "い-adjectives (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%84-adjectives" },
    { nom: "Bunpro", page: "negative-い-adjectives (JLPT N5)", url: "https://bunpro.jp/grammar_points/negative-%E3%81%84-adjectives" },
    { nom: "Bunpro", page: "past-tense-い-adjectives (JLPT N5)", url: "https://bunpro.jp/grammar_points/past-tense-%E3%81%84-adjectives" }
  ],
  "Adjectifs en な": [
    { nom: "Tae Kim", page: "Adjectives", url: "https://guidetojapanese.org/learn/grammar/adjectives#:~:text=The%20na%2Dadjective" },
    { nom: "Tofugu", page: "な-Adjectives: Japanese Noun-Like Adjective", url: "https://www.tofugu.com/japanese-grammar/na-adjective/" },
    { nom: "Imabi", page: "Adjectival Nouns I 形容動詞①", url: "https://imabi.org/adjectival-nouns-i%e3%80%80%e5%bd%a2%e5%ae%b9%e5%8b%95%e8%a9%9e%e2%91%a0/" },
    { nom: "Bunpro", page: "な-adjectives (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AA-adjectives" },
    { nom: "Bunpro", page: "な-adjective-noun (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AA-adjective-noun" }
  ],
  "〜が好き / 〜が上手": [
    { nom: "Tae Kim", page: "Adjectives", url: "https://guidetojapanese.org/learn/grammar/adjectives" },
    { nom: "Imabi", page: "Like & Love", url: "https://imabi.org/like-love/" },
    { nom: "Bunpro", page: "すき (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%99%E3%81%8D" },
    { nom: "Bunpro", page: "のがじょうず (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AE%E3%81%8C%E3%81%98%E3%82%87%E3%81%86%E3%81%9A" }
  ],
  "〜がほしい": [
    { nom: "Tae Kim", page: "Desire and Suggestions", url: "https://guidetojapanese.org/learn/grammar/desire#part3" },
    { nom: "Imabi", page: "Wanting Something: ほしい", url: "https://imabi.org/want-feeling-i-%ef%bd%9e%e3%81%9f%e3%81%84-%e3%81%bb%e3%81%97%e3%81%84/#:~:text=%E6%AC%B2%E3%81%97%E3%81%84%3A%20Wanting%20Something" },
    { nom: "Bunpro", page: "がほしい (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%8C%E3%81%BB%E3%81%97%E3%81%84" }
  ],
  "〜より / 〜のほうが": [
    { nom: "Tae Kim", page: "Using 「方」 and 「よる」", url: "https://guidetojapanese.org/learn/grammar/comparison#part3" },
    { nom: "Tofugu", page: "Particle より For \"Than…\" In Comparison", url: "https://www.tofugu.com/japanese-grammar/particle-yori-than/" },
    { nom: "Imabi", page: "The Particle より", url: "https://imabi.org/the-particle-%e3%82%88%e3%82%8a/#:~:text=The%20Case%20Particle%20%E3%82%88%E3%82%8A" },
    { nom: "Bunpro", page: "より-のほうが (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%82%88%E3%82%8A-%E3%81%AE%E3%81%BB%E3%81%86%E3%81%8C" }
  ],
  "いちばん": [
    { nom: "Imabi", page: "The Superlative", url: "https://imabi.org/the-superlative/" },
    { nom: "Bunpro", page: "のなかで-がいちばん (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AE%E3%81%AA%E3%81%8B%E3%81%A7-%E3%81%8C%E3%81%84%E3%81%A1%E3%81%B0%E3%82%93" }
  ],
  "〜くなる / 〜になる": [
    { nom: "Tae Kim", page: "Using する and なる with the に particle", url: "https://guidetojapanese.org/learn/grammar/surunaru#part2" },
    { nom: "Tofugu", page: "なる for \"To Become\"", url: "https://www.tofugu.com/japanese-grammar/naru/" },
    { nom: "Bunpro", page: "になる-くなる (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%AA%E3%82%8B-%E3%81%8F%E3%81%AA%E3%82%8B" }
  ],
  "〜から (raison)": [
    { nom: "Tae Kim", page: "Compound Sentences", url: "https://guidetojapanese.org/learn/grammar/compound#part4" },
    { nom: "Tofugu", page: "Particle から: Starting Point Marker", url: "https://www.tofugu.com/japanese-grammar/particle-kara/" },
    { nom: "Imabi", page: "The Conjunctive Particles から & ので", url: "https://imabi.org/because-%e3%81%8b%e3%82%89-%e3%81%ae%e3%81%a7-%e3%81%ae%e3%81%a0/#:~:text=The%20Conjunctive%20Particle%20%E3%81%8B%E3%82%89" },
    { nom: "Bunpro", page: "から-because (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%82%89-because" }
  ],
  "〜が / 〜けど": [
    { nom: "Tae Kim", page: "Compound Sentences", url: "https://guidetojapanese.org/learn/grammar/compound#part6" },
    { nom: "Tofugu", page: "Conjunctive Particles が・けど: \"But\" in Japanese", url: "https://www.tofugu.com/japanese-grammar/conjunctive-particle-ga-kedo/" },
    { nom: "Imabi", page: "The Conjunctive Particles が & けれど", url: "https://imabi.org/the-conjunctive-particles-%e3%81%8c-%e3%81%91%e3%82%8c%e3%81%a9/" },
    { nom: "Bunpro", page: "が-but (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%8C-but" },
    { nom: "Bunpro", page: "けど-だけど (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%91%E3%81%A9-%E3%81%A0%E3%81%91%E3%81%A9" }
  ],
  "〜とき": [
    { nom: "Tofugu", page: "〜とき for \"When\"", url: "https://www.tofugu.com/japanese-grammar/toki/" },
    { nom: "Imabi", page: "When: 時", url: "https://imabi.org/when-%e6%99%82/" },
    { nom: "Bunpro", page: "とき (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%8D" }
  ],
  "もう / まだ": [
    { nom: "Tofugu", page: "もう for \"Already / Not Anymore\"", url: "https://www.tofugu.com/japanese-grammar/mou-already-not-anymore/" },
    { nom: "Bunpro", page: "もう (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%82%82%E3%81%86" },
    { nom: "Bunpro", page: "まだ (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%BE%E3%81%A0" }
  ],
  "〜でしょう": [
    { nom: "Tae Kim", page: "Various degrees of certainty", url: "https://guidetojapanese.org/learn/grammar/certainty#part3" },
    { nom: "Tofugu", page: "Japanese でしょう Form for Guessing", url: "https://www.tofugu.com/japanese-grammar/deshou/" },
    { nom: "Imabi", page: "The Auxiliaries だろう・でしょう", url: "https://imabi.org/the-auxiliaries-%e3%81%a0%e3%82%8d%e3%81%86%e3%83%bb%e3%81%a7%e3%81%97%e3%82%87%e3%81%86/#:~:text=%E3%81%A0%E3%82%8D%E3%81%86%E3%83%BB%E3%81%A7%E3%81%97%E3%82%87%E3%81%86" },
    { nom: "Bunpro", page: "でしょう (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%A7%E3%81%97%E3%82%87%E3%81%86" }
  ],
  "Forme potentielle": [
    { nom: "Tae Kim", page: "Potential Form", url: "https://guidetojapanese.org/learn/grammar/potential#:~:text=%E3%82%89%E3%82%8C%E3%82%8B" },
    { nom: "Tofugu", page: "Japanese Verb Potential れる Form", url: "https://www.tofugu.com/japanese-grammar/verb-potential-form-reru/" },
    { nom: "Imabi", page: "Potential I: The Potential Form", url: "https://imabi.org/potential-i-the-potential-form/#:~:text=%E3%82%89%E3%82%8C%E3%82%8B" },
    { nom: "Bunpro", page: "Verb[potential] (JLPT N4)", url: "https://bunpro.jp/grammar_points/Verb[potential]" }
  ],
  "Forme volitive (〜よう)": [
    { nom: "Tae Kim", page: "Desire and Suggestions", url: "https://guidetojapanese.org/learn/grammar/desire" },
    { nom: "Tofugu", page: "Japanese Verb Volitional Form よう", url: "https://www.tofugu.com/japanese-grammar/verb-volitional-form-you/" },
    { nom: "Imabi", page: "The Volition Form: ～（よ）う", url: "https://imabi.org/the-volitional-i/" },
    { nom: "Bunpro", page: "よう-おう (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%82%88%E3%81%86-%E3%81%8A%E3%81%86" }
  ],
  "〜ようと思う": [
    { nom: "Imabi", page: "The Volition Form: ～（よ）う", url: "https://imabi.org/the-volitional-i/#:~:text=%E3%82%88%E3%81%86%E3%81%A8%E6%80%9D" },
    { nom: "Bunpro", page: "ようと思う-おうと思う (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%82%88%E3%81%86%E3%81%A8%E6%80%9D%E3%81%86-%E3%81%8A%E3%81%86%E3%81%A8%E6%80%9D%E3%81%86" }
  ],
  "〜つもり": [
    { nom: "Tofugu", page: "つもり For Expressing Intentions", url: "https://www.tofugu.com/japanese-grammar/tsumori/" },
    { nom: "Imabi", page: "Planning: ～つもりだ", url: "https://imabi.org/planning-%ef%bd%9e%e3%81%a4%e3%82%82%e3%82%8a%e3%81%a0/#:~:text=Verb%20%28non%2DPast%29%20%2B%20%EF%BD%9E%E3%81%A4%E3%82%82%E3%82%8A%E3%81%A0" },
    { nom: "Bunpro", page: "つもりだ (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%A4%E3%82%82%E3%82%8A%E3%81%A0" }
  ],
  "Forme passive (〜られる)": [
    { nom: "Tae Kim", page: "Causative and Passive Verbs", url: "https://guidetojapanese.org/learn/grammar/causepass#:~:text=%E3%82%89%E3%82%8C%E3%82%8B" },
    { nom: "Tofugu", page: "Japanese Verb Passive られる Form", url: "https://www.tofugu.com/japanese-grammar/verb-passive-form-rareru/" },
    { nom: "Imabi", page: "The Passive", url: "https://imabi.org/the-passive/#:~:text=%EF%BD%9E%E3%82%89%E3%82%8C%E3%82%8B%20and%20%EF%BD%9E%E3%82%8C%E3%82%8B" },
    { nom: "Bunpro", page: "Verb[passive] (JLPT N4)", url: "https://bunpro.jp/grammar_points/Verb[passive]" }
  ],
  "Forme causative (〜させる)": [
    { nom: "Tae Kim", page: "Causative and Passive Verbs", url: "https://guidetojapanese.org/learn/grammar/causepass#:~:text=%E3%81%95%E3%81%9B%E3%82%8B" },
    { nom: "Tofugu", page: "Japanese Verb Causative Form させる", url: "https://www.tofugu.com/japanese-grammar/verb-causative-form-saseru/" },
    { nom: "Imabi", page: "The Causative I: ～させる & ～せる", url: "https://imabi.org/the-causative-i-%ef%bd%9e%e3%81%95%e3%81%9b%e3%82%8b-%ef%bd%9e%e3%81%9b%e3%82%8b/#:~:text=%E3%81%95%E3%81%9B%E3%82%8B" },
    { nom: "Bunpro", page: "causative (JLPT N4)", url: "https://bunpro.jp/grammar_points/causative" }
  ],
  "Causatif-passif (〜させられる)": [
    { nom: "Tae Kim", page: "Causative and Passive Verbs", url: "https://guidetojapanese.org/learn/grammar/causepass#:~:text=%E3%81%95%E3%81%9B%E3%82%89%E3%82%8C%E3%82%8B" },
    { nom: "Imabi", page: "Causative-Passive", url: "https://imabi.org/causative-passive/#:~:text=%E3%81%95%E3%81%9B%E3%82%89%E3%82%8C%E3%82%8B" },
    { nom: "Bunpro", page: "causative-passive (JLPT N4)", url: "https://bunpro.jp/grammar_points/causative-passive" }
  ],
  "Impératif et interdiction (〜な)": [
    { nom: "Tae Kim", page: "Making Requests", url: "https://guidetojapanese.org/learn/grammar/requests#:~:text=command" },
    { nom: "Tofugu", page: "Japanese Verb Command Form ろ", url: "https://www.tofugu.com/japanese-grammar/verb-command-form-ro/" },
    { nom: "Imabi", page: "The Imperative", url: "https://imabi.org/the-imperative/#:~:text=command" },
    { nom: "Bunpro", page: "命令形 (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E5%91%BD%E4%BB%A4%E5%BD%A2" },
    { nom: "Bunpro", page: "な (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AA" }
  ],
  "〜なさい": [
    { nom: "Tae Kim", page: "Making Requests", url: "https://guidetojapanese.org/learn/grammar/requests#part4" },
    { nom: "Tofugu", page: "Japanese Verb なさい Form", url: "https://www.tofugu.com/japanese-grammar/verb-imperative-form-nasai/" },
    { nom: "Bunpro", page: "なさい (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%95%E3%81%84" }
  ],
  "Proposition relative": [
    { nom: "Tae Kim", page: "Relative Clauses and Sentence Order", url: "https://guidetojapanese.org/learn/grammar/clause#part2" },
    { nom: "Tofugu", page: "Japanese Sentence and Clause Structure", url: "https://www.tofugu.com/japanese-grammar/sentences-and-clauses/" },
    { nom: "Bunpro", page: "verb-た-noun (JLPT N5)", url: "https://bunpro.jp/grammar_points/verb-%E3%81%9F-noun" }
  ],
  "〜てみる": [
    { nom: "Tae Kim", page: "Trying or attempting something", url: "https://guidetojapanese.org/learn/grammar/try" },
    { nom: "Tofugu", page: "〜てみる for Attempts", url: "https://www.tofugu.com/japanese-grammar/temiru/" },
    { nom: "Imabi", page: "Trying", url: "https://imabi.org/trying/#:~:text=%EF%BD%9E%E3%81%A6%E3%81%BF%E3%82%8B%2F%EF%BD%9E%E3%81%A6%E3%81%BF%E3%81%9F%E3%81%84" },
    { nom: "Bunpro", page: "てみる (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%BF%E3%82%8B" }
  ],
  "〜ておく": [
    { nom: "Tae Kim", page: "Other uses of the te-form", url: "https://guidetojapanese.org/learn/grammar/teform" },
    { nom: "Tofugu", page: "〜ておく To Do Something for Future Convenience", url: "https://www.tofugu.com/japanese-grammar/teoku/" },
    { nom: "Imabi", page: "Advanced Preparation: ～ておく", url: "https://imabi.org/advanced-preparation-%ef%bd%9e%e3%81%a6%e3%81%8a%e3%81%8f/" },
    { nom: "Bunpro", page: "ておく (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%8A%E3%81%8F" }
  ],
  "〜てしまう": [
    { nom: "Tae Kim", page: "Unintended Actions", url: "https://guidetojapanese.org/learn/grammar/unintended#part2" },
    { nom: "Imabi", page: "～てしまう", url: "https://imabi.org/%ef%bd%9e%e3%81%a6%e3%81%97%e3%81%be%e3%81%86/#:~:text=%EF%BD%9E%E3%81%A6%E3%81%97%E3%81%BE%E3%81%86" },
    { nom: "Bunpro", page: "てしまう-ちゃう (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%97%E3%81%BE%E3%81%86-%E3%81%A1%E3%82%83%E3%81%86" }
  ],
  "〜てくる / 〜ていく": [
    { nom: "Tae Kim", page: "Other uses of the te-form", url: "https://guidetojapanese.org/learn/grammar/teform#:~:text=%E3%81%A6%E3%81%84%E3%81%8F" },
    { nom: "Tofugu", page: "〜ていく・〜てくる for Gradual Process", url: "https://www.tofugu.com/japanese-grammar/teiku-tekuru/" },
    { nom: "Imabi", page: "～ていく & ～てくる", url: "https://imabi.org/%ef%bd%9e%e3%81%a6%e3%81%84%e3%81%8f-%ef%bd%9e%e3%81%a6%e3%81%8f%e3%82%8b/#:~:text=%EF%BD%9E%E3%81%A6%E3%81%84%E3%81%8F%20%26%20%EF%BD%9E%E3%81%A6%E3%81%8F%E3%82%8B" },
    { nom: "Bunpro", page: "てくる (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%8F%E3%82%8B" },
    { nom: "Bunpro", page: "ていく (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%84%E3%81%8F" }
  ],
  "〜てあげる / 〜てくれる / 〜てもらう": [
    { nom: "Tae Kim", page: "Giving and Receiving", url: "https://guidetojapanese.org/learn/grammar/favors#part4" },
    { nom: "Tofugu", page: "Giving and Receiving Verbs: くれる, あげる, and もらう", url: "https://www.tofugu.com/japanese-grammar/kureru-ageru-morau/" },
    { nom: "Imabi", page: "～てあげる, ～てくれる, & ～てもらう", url: "https://imabi.org/%ef%bd%9e%e3%81%a6%e3%81%82%e3%81%92%e3%82%8b-%ef%bd%9e%e3%81%a6%e3%81%8f%e3%82%8c%e3%82%8b-%ef%bd%9e%e3%81%a6%e3%82%82%e3%82%89%e3%81%86-2/#:~:text=Compare%20and%20Contrast%3A%20%EF%BD%9E%E3%81%A6%E3%81%8F%E3%82%8C%E3%82%8B%20VS%20%EF%BD%9E%E3%81%A6%E3%82%82%E3%82%89%E3%81%86" },
    { nom: "Bunpro", page: "てあげる (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%82%E3%81%92%E3%82%8B" },
    { nom: "Bunpro", page: "てくれる (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%8F%E3%82%8C%E3%82%8B" },
    { nom: "Bunpro", page: "てもらう (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%82%82%E3%82%89%E3%81%86" }
  ],
  "〜てある": [
    { nom: "Tae Kim", page: "Other uses of the te-form", url: "https://guidetojapanese.org/learn/grammar/teform#part4" },
    { nom: "Tofugu", page: "〜てある for When Something Is Done (and Left That Way)", url: "https://www.tofugu.com/japanese-grammar/tearu/" },
    { nom: "Imabi", page: "～てある", url: "https://imabi.org/stative-verbs-te-aru-%ef%bd%9e%e3%81%a6%e3%81%82%e3%82%8b/#:~:text=%EF%BD%9E%E3%81%A6%E3%81%82%E3%82%8B%3A%20Creating%20Stative%20Verbs" },
    { nom: "Bunpro", page: "てある (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%82%E3%82%8B" }
  ],
  "〜ないで / 〜ずに": [
    { nom: "Tae Kim", page: "More negative verbs", url: "https://guidetojapanese.org/learn/grammar/negativeverbs2#:~:text=%E3%81%AA%E3%81%84%E3%81%A7" },
    { nom: "Imabi", page: "The Negative て形: ～なくて & ～ないで", url: "https://imabi.org/the-negative-%e3%81%a6%e5%bd%a2-%ef%bd%9e%e3%81%aa%e3%81%8f%e3%81%a6-%ef%bd%9e%e3%81%aa%e3%81%84%e3%81%a7/#:~:text=%EF%BD%9E%E3%81%AA%E3%81%84%E3%81%A7" },
    { nom: "Bunpro", page: "ずに (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%9A%E3%81%AB" }
  ],
  "〜たら": [
    { nom: "Tae Kim", page: "Conditionals", url: "https://guidetojapanese.org/learn/grammar/conditionals#part5" },
    { nom: "Tofugu", page: "Japanese Conditional Form たら", url: "https://www.tofugu.com/japanese-grammar/conditional-form-tara/" },
    { nom: "Imabi", page: "The Conditionals", url: "https://imabi.org/the-conditionals/#:~:text=The%20Conjunctive%20Particle%20%E3%81%9F%E3%82%89" },
    { nom: "Bunpro", page: "たら (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%82%89" }
  ],
  "〜ば": [
    { nom: "Tae Kim", page: "Conditionals", url: "https://guidetojapanese.org/learn/grammar/conditionals#part4" },
    { nom: "Tofugu", page: "Japanese Verb Conditional Form ば", url: "https://www.tofugu.com/japanese-grammar/verb-conditional-form-ba/" },
    { nom: "Imabi", page: "The Particle ば", url: "https://imabi.org/the-particle-%e3%81%b0/" },
    { nom: "Bunpro", page: "ば (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%B0" }
  ],
  "〜なら": [
    { nom: "Tae Kim", page: "Conditionals", url: "https://guidetojapanese.org/learn/grammar/conditionals#part3" },
    { nom: "Tofugu", page: "Japanese Conditional Form なら", url: "https://www.tofugu.com/japanese-grammar/conditional-form-nara/" },
    { nom: "Imabi", page: "The Conditionals", url: "https://imabi.org/the-conditionals/#:~:text=The%20Conjunctive%20Particle%20%E3%81%AA%E3%82%89%EF%BC%88%E3%81%B0%EF%BC%89" },
    { nom: "Bunpro", page: "なら (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%82%89" }
  ],
  "〜と (conséquence)": [
    { nom: "Tae Kim", page: "Conditionals", url: "https://guidetojapanese.org/learn/grammar/conditionals#part2" },
    { nom: "Tofugu", page: "Japanese Verb と Form", url: "https://www.tofugu.com/japanese-grammar/verb-to/" },
    { nom: "Imabi", page: "The Conditionals", url: "https://imabi.org/the-conditionals/" },
    { nom: "Bunpro", page: "と-conditional (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A8-conditional" }
  ],
  "〜ても": [
    { nom: "Imabi", page: "The Particle でも", url: "https://imabi.org/the-particle-%e3%81%a7%e3%82%82/" },
    { nom: "Bunpro", page: "ても (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%82%82" }
  ],
  "〜のに": [
    { nom: "Tae Kim", page: "Compound Sentences", url: "https://guidetojapanese.org/learn/grammar/compound#part5" },
    { nom: "Tofugu", page: "Conjunctive Particle のに: For Expressing Surprise / Frustration", url: "https://www.tofugu.com/japanese-grammar/conjunctive-particle-noni/" },
    { nom: "Imabi", page: "The Particle のに", url: "https://imabi.org/the-particle-%e3%81%ae%e3%81%ab/#:~:text=The%20Conjunctive%20Particle%20%E3%81%AE%E3%81%AB" },
    { nom: "Bunpro", page: "のに-despite (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AE%E3%81%AB-despite" }
  ],
  "〜ので": [
    { nom: "Tae Kim", page: "Compound Sentences", url: "https://guidetojapanese.org/learn/grammar/compound#part4" },
    { nom: "Tofugu", page: "Conjunctive Particle ので: For Expressing a Reason", url: "https://www.tofugu.com/japanese-grammar/conjunctive-particle-node/" },
    { nom: "Imabi", page: "The Conjunctive Particles から & ので", url: "https://imabi.org/because-%e3%81%8b%e3%82%89-%e3%81%ae%e3%81%a7-%e3%81%ae%e3%81%a0/#:~:text=The%20Conjunctive%20Particle%20%E3%81%AE%E3%81%A7" },
    { nom: "Bunpro", page: "ので (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AE%E3%81%A7" }
  ],
  "〜し": [
    { nom: "Tae Kim", page: "Compound Sentences", url: "https://guidetojapanese.org/learn/grammar/compound#part7" },
    { nom: "Tofugu", page: "〜し for \"Not Only…but Also…\"", url: "https://www.tofugu.com/japanese-grammar/shi/" },
    { nom: "Imabi", page: "The Particle し", url: "https://imabi.org/the-particle-%e3%81%97/" },
    { nom: "Bunpro", page: "し-し (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%97-%E3%81%97" }
  ],
  "〜と思う": [
    { nom: "Tae Kim", page: "Acting on relative clauses", url: "https://guidetojapanese.org/learn/grammar/actionclause" },
    { nom: "Imabi", page: "The Citation Particle と", url: "https://imabi.org/the-particle-%e3%81%a8-ii-citation/#:~:text=%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99" },
    { nom: "Bunpro", page: "とおもう (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%8A%E3%82%82%E3%81%86" }
  ],
  "〜と言う / 〜って": [
    { nom: "Tae Kim", page: "Acting on relative clauses", url: "https://guidetojapanese.org/learn/grammar/actionclause#part4" },
    { nom: "Imabi", page: "The Citation Particle と", url: "https://imabi.org/the-particle-%e3%81%a8-ii-citation/" },
    { nom: "Bunpro", page: "って (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%A3%E3%81%A6" }
  ],
  "〜という": [
    { nom: "Tae Kim", page: "Defining and Describing", url: "https://guidetojapanese.org/learn/grammar/define#part4" },
    { nom: "Tofugu", page: "〜という for Names, Hearsays and More", url: "https://www.tofugu.com/japanese-grammar/toiu/" },
    { nom: "Imabi", page: "～という, ～ということ, & ～というもの", url: "https://imabi.org/citation-ii-%ef%bd%9e%e3%81%a8%e3%81%84%e3%81%86-%ef%bd%9e%e3%81%a8%e3%81%84%e3%81%86%e3%81%93%e3%81%a8-%ef%bd%9e%e3%81%a8%e3%81%84%e3%81%86%e3%82%82%e3%81%ae/#:~:text=%E3%81%A8%E3%81%84%E3%81%86" },
    { nom: "Bunpro", page: "という-called (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%84%E3%81%86-called" }
  ],
  "〜んだ / 〜のだ": [
    { nom: "Tofugu", page: "んだ: Japanese Explanatory Form (んです/のだ/のです)", url: "https://www.tofugu.com/japanese-grammar/explanatory-nda-ndesu-noda-nodesu/" },
    { nom: "Imabi", page: "The Mood Marker ～のだ", url: "https://imabi.org/the-mood-marker-%ef%bd%9e%e3%81%ae%e3%81%a0/#:~:text=The%20Two%20%EF%BD%9E%E3%81%AE%E3%81%A0%3A%20%E2%80%9CScope%E2%80%9D%20Marker%20VS%20%E2%80%9CMood%E2%80%9D%20Marker" },
    { nom: "Bunpro", page: "-んです-のです (JLPT N5)", url: "https://bunpro.jp/grammar_points/-%E3%82%93%E3%81%A7%E3%81%99-%E3%81%AE%E3%81%A7%E3%81%99" }
  ],
  "〜かもしれない": [
    { nom: "Tae Kim", page: "Various degrees of certainty", url: "https://guidetojapanese.org/learn/grammar/certainty#part2" },
    { nom: "Tofugu", page: "〜かもしれない for Uncertainty", url: "https://www.tofugu.com/japanese-grammar/kamoshirenai/" },
    { nom: "Imabi", page: "Might: かもしれない", url: "https://imabi.org/might-%e3%81%8b%e3%82%82%e3%81%97%e3%82%8c%e3%81%aa%e3%81%84/#:~:text=ConjUGATING%20WITH%20%E3%81%8B%E3%82%82%E3%81%97%E3%82%8C%E3%81%AA%E3%81%84" },
    { nom: "Bunpro", page: "かもしれない (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%82%82%E3%81%97%E3%82%8C%E3%81%AA%E3%81%84" }
  ],
  "〜だろう": [
    { nom: "Tae Kim", page: "Various degrees of certainty", url: "https://guidetojapanese.org/learn/grammar/certainty#part4" },
    { nom: "Tofugu", page: "Japanese だろう Form for Guessing", url: "https://www.tofugu.com/japanese-grammar/darou/" },
    { nom: "Imabi", page: "The Auxiliaries だろう・でしょう", url: "https://imabi.org/the-auxiliaries-%e3%81%a0%e3%82%8d%e3%81%86%e3%83%bb%e3%81%a7%e3%81%97%e3%82%87%e3%81%86/#:~:text=%E3%81%A0%E3%82%8D%E3%81%86%E3%83%BB%E3%81%A7%E3%81%97%E3%82%87%E3%81%86" },
    { nom: "Bunpro", page: "だろう (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%A0%E3%82%8D%E3%81%86" }
  ],
  "〜はずだ": [
    { nom: "Tae Kim", page: "Things that should be a certain way", url: "https://guidetojapanese.org/learn/grammar/should#part2" },
    { nom: "Bunpro", page: "はずだ (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AF%E3%81%9A%E3%81%A0" }
  ],
  "〜そうだ (apparence)": [
    { nom: "Tae Kim", page: "Similarity or hearsay", url: "https://guidetojapanese.org/learn/grammar/similarity#part4" },
    { nom: "Tofugu", page: "Japanese Verb そう Form", url: "https://www.tofugu.com/japanese-grammar/verb-sou/" },
    { nom: "Imabi", page: "Seem: ～そうだ", url: "https://imabi.org/seem-%ef%bd%9e%e3%81%9d%e3%81%86%e3%81%a0/" },
    { nom: "Bunpro", page: "そう (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%81%86" }
  ],
  "〜そうだ (ouï-dire)": [
    { nom: "Tae Kim", page: "Similarity or hearsay", url: "https://guidetojapanese.org/learn/grammar/similarity#part5" },
    { nom: "Imabi", page: "Hearsay: ～そうだ", url: "https://imabi.org/hearsay/#:~:text=Conjugating%20w%2F%20Function%202%20%EF%BD%9E%E3%81%9D%E3%81%86%E3%81%A0" },
    { nom: "Bunpro", page: "そうだ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%81%86%E3%81%A0" }
  ],
  "〜ようだ / 〜みたいだ": [
    { nom: "Tae Kim", page: "Similarity or hearsay", url: "https://guidetojapanese.org/learn/grammar/similarity#part3" },
    { nom: "Imabi", page: "Similarity", url: "https://imabi.org/similarity/#:~:text=%EF%BD%9E%E3%81%BF%E3%81%9F%E3%81%84%E3%81%A0" },
    { nom: "Bunpro", page: "ようだ (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%82%88%E3%81%86%E3%81%A0" },
    { nom: "Bunpro", page: "みたい (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%BF%E3%81%9F%E3%81%84" }
  ],
  "〜らしい": [
    { nom: "Tae Kim", page: "Similarity or hearsay", url: "https://guidetojapanese.org/learn/grammar/similarity#part6" },
    { nom: "Imabi", page: "The Auxiliary ～らしい", url: "https://imabi.org/the-auxiliary-%ef%bd%9e%e3%82%89%e3%81%97%e3%81%84/#:~:text=The%20Meanings%20of%20%EF%BD%9E%E3%82%89%E3%81%97%E3%81%84" },
    { nom: "Bunpro", page: "らしい1 (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%82%89%E3%81%97%E3%81%841" },
    { nom: "Bunpro", page: "らしい2 (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%82%89%E3%81%97%E3%81%842" }
  ],
  "〜かどうか / question indirecte": [
    { nom: "Tae Kim", page: "The Question Marker", url: "https://guidetojapanese.org/learn/grammar/question" },
    { nom: "Imabi", page: "The Particle か III: Indirect Question", url: "https://imabi.org/the-particle-ka-%e3%81%8b-iii-indirect-question/#:~:text=%EF%BD%9E%E3%81%8B%E3%81%A9%E3%81%86%E3%81%8B" },
    { nom: "Bunpro", page: "かどうか (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%81%A9%E3%81%86%E3%81%8B" },
    { nom: "Bunpro", page: "question-phrase-か (JLPT N4)", url: "https://bunpro.jp/grammar_points/question-phrase-%E3%81%8B" }
  ],
  "〜ために": [
    { nom: "Imabi", page: "～ために I: In order to…", url: "https://imabi.org/%ef%bd%9e%e3%81%9f%e3%82%81%e3%81%ab-i-in-order-to/" },
    { nom: "Bunpro", page: "ために (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%82%81%E3%81%AB" },
    { nom: "Bunpro", page: "ため-に (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%82%81-%E3%81%AB" }
  ],
  "〜ように": [
    { nom: "Tae Kim", page: "Using する and なる with the に particle", url: "https://guidetojapanese.org/learn/grammar/surunaru#:~:text=%E3%82%88%E3%81%86%E3%81%AB" },
    { nom: "Imabi", page: "So that", url: "https://imabi.org/so-that/#:~:text=The%20Usages%20of%20%EF%BD%9E%E3%82%88%E3%81%86%E3%81%AB" },
    { nom: "Bunpro", page: "ように (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%82%88%E3%81%86%E3%81%AB" }
  ],
  "〜ようになる": [
    { nom: "Tae Kim", page: "Using する and なる with the に particle", url: "https://guidetojapanese.org/learn/grammar/surunaru#:~:text=%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%82%8B" },
    { nom: "Imabi", page: "～ようになる& ～ようにする", url: "https://imabi.org/%ef%bd%9e%e3%82%88%e3%81%86%e3%81%ab%e3%81%aa%e3%82%8b-%ef%bd%9e%e3%82%88%e3%81%86%e3%81%ab%e3%81%99%e3%82%8b/#:~:text=%EF%BD%9E%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%82%8B" },
    { nom: "Bunpro", page: "ようになる (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%82%8B" }
  ],
  "〜ことができる": [
    { nom: "Tae Kim", page: "Potential Form", url: "https://guidetojapanese.org/learn/grammar/potential#:~:text=%E3%81%93%E3%81%A8%E3%81%8C%E3%81%A7%E3%81%8D%E3%82%8B" },
    { nom: "Imabi", page: "Potential II: できる", url: "https://imabi.org/potential-ii-%e3%81%a7%e3%81%8d%e3%82%8b/#:~:text=%E3%81%93%E3%81%A8%E3%81%8C%E3%81%A7%E3%81%8D%E3%82%8B" },
    { nom: "Bunpro", page: "ことができる (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%93%E3%81%A8%E3%81%8C%E3%81%A7%E3%81%8D%E3%82%8B" }
  ],
  "〜たことがある": [
    { nom: "Tae Kim", page: "Special Expressions with Generic Nouns", url: "https://guidetojapanese.org/learn/grammar/genericnouns#:~:text=%E3%81%93%E3%81%A8%E3%81%8C%E3%81%82%E3%82%8B" },
    { nom: "Tofugu", page: "〜たことがある for Past Experiences", url: "https://www.tofugu.com/japanese-grammar/takotogaaru/" },
    { nom: "Imabi", page: "Expressions with こと", url: "https://imabi.org/expressions-with-%e3%81%93%e3%81%a8/#:~:text=%EF%BD%9E%E3%81%93%E3%81%A8%E3%81%8C%E3%81%82%E3%82%8B%3A%20Experience%28S%29%20One%20Has" },
    { nom: "Bunpro", page: "たことがある (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%81%93%E3%81%A8%E3%81%8C%E3%81%82%E3%82%8B" }
  ],
  "〜ことにする": [
    { nom: "Imabi", page: "Expressions with こと", url: "https://imabi.org/expressions-with-%e3%81%93%e3%81%a8/#:~:text=%E3%81%93%E3%81%A8%E3%81%AB%E3%81%99%E3%82%8B" },
    { nom: "Bunpro", page: "ことにする (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%93%E3%81%A8%E3%81%AB%E3%81%99%E3%82%8B" }
  ],
  "〜ことになる": [
    { nom: "Imabi", page: "Expressions with こと", url: "https://imabi.org/expressions-with-%e3%81%93%e3%81%a8/#:~:text=%E3%81%93%E3%81%A8%E3%81%AB%E3%81%AA%E3%82%8B" },
    { nom: "Bunpro", page: "ことになる (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%93%E3%81%A8%E3%81%AB%E3%81%AA%E3%82%8B" }
  ],
  "〜ほうがいい": [
    { nom: "Tae Kim", page: "Using 「方」 and 「よる」", url: "https://guidetojapanese.org/learn/grammar/comparison#:~:text=%E6%96%B9%E3%81%8C%E3%81%84%E3%81%84" },
    { nom: "Bunpro", page: "たほうがいい (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%81%BB%E3%81%86%E3%81%8C%E3%81%84%E3%81%84" },
    { nom: "Bunpro", page: "ないほうがいい (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%84%E3%81%BB%E3%81%86%E3%81%8C%E3%81%84%E3%81%84" }
  ],
  "〜の / 〜こと (nominalisation)": [
    { nom: "Tae Kim", page: "Noun-related Particles", url: "https://guidetojapanese.org/learn/grammar/nounparticles#part4" },
    { nom: "Tofugu", page: "Particle の: Nominalizer", url: "https://www.tofugu.com/japanese-grammar/particle-no-nominalizer/" },
    { nom: "Imabi", page: "Nominalizers: の, こと, & もの", url: "https://imabi.org/nominalization/" },
    { nom: "Bunpro", page: "のは (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AE%E3%81%AF" },
    { nom: "Bunpro", page: "こと (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%93%E3%81%A8" }
  ],
  "〜すぎる": [
    { nom: "Tae Kim", page: "Expressing Amounts", url: "https://guidetojapanese.org/learn/grammar/amount#part6" },
    { nom: "Tofugu", page: "すぎる for \"Too Much\"", url: "https://www.tofugu.com/japanese-grammar/sugiru/" },
    { nom: "Imabi", page: "Too: ～すぎる", url: "https://imabi.org/too-%ef%bd%9e%e3%81%99%e3%81%8e%e3%82%8b/#:~:text=%EF%BD%9E%E3%81%99%E3%81%8E%E3%82%8B" },
    { nom: "Bunpro", page: "すぎる (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%99%E3%81%8E%E3%82%8B" }
  ],
  "〜やすい / 〜にくい": [
    { nom: "Tae Kim", page: "Actions that are easy or hard to do", url: "https://guidetojapanese.org/learn/grammar/easyhard#part2" },
    { nom: "Tofugu", page: "Japanese Verb やすい", url: "https://www.tofugu.com/japanese-grammar/yasui/" },
    { nom: "Imabi", page: "Easy I: ～やすい", url: "https://imabi.org/easy-i-%ef%bd%9e%e3%82%84%e3%81%99%e3%81%84/#:~:text=%EF%BD%9E%E3%82%84%E3%81%99%E3%81%84" },
    { nom: "Bunpro", page: "やすい (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%82%84%E3%81%99%E3%81%84" },
    { nom: "Bunpro", page: "にくい (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%8F%E3%81%84" }
  ],
  "〜方": [
    { nom: "Tae Kim", page: "Using 「方」 and 「よる」", url: "https://guidetojapanese.org/learn/grammar/comparison#part2" },
    { nom: "Imabi", page: "The Non-Question “How”: ～方(かた)", url: "https://imabi.org/the-non-question-how-%ef%bd%9e%e6%96%b9%e3%81%8b%e3%81%9f/" },
    { nom: "Bunpro", page: "かた (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%81%9F" }
  ],
  "〜さ": [
    { nom: "Tae Kim", page: "Expressing Amounts", url: "https://guidetojapanese.org/learn/grammar/amount#part9" },
    { nom: "Tofugu", page: "Japanese Adjective Suffix さ", url: "https://www.tofugu.com/japanese-grammar/adjective-suffix-sa/" },
    { nom: "Imabi", page: "Adjective Nominalization", url: "https://imabi.org/adjective-nominalization/" },
    { nom: "Bunpro", page: "さ (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%95" }
  ],
  "〜ながら": [
    { nom: "Tae Kim", page: "Time-specific actions", url: "https://guidetojapanese.org/learn/grammar/timeactions#part4" },
    { nom: "Tofugu", page: "Japanese Verb ながら to Say \"While〜\"", url: "https://www.tofugu.com/japanese-grammar/verb-nagara/" },
    { nom: "Imabi", page: "The Particle ながら I: Simultaneous Action", url: "https://imabi.org/the-particle-%e3%81%aa%e3%81%8c%e3%82%89-i-simultaneous-action/#:~:text=%E3%81%AA%E3%81%8C%E3%82%89" },
    { nom: "Bunpro", page: "ながら (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%8C%E3%82%89" }
  ],
  "〜しか〜ない": [
    { nom: "Tae Kim", page: "Expressing Amounts", url: "https://guidetojapanese.org/learn/grammar/amount#part4" },
    { nom: "Imabi", page: "Shika & Hoka", url: "https://imabi.org/shika-hoka/#:~:text=The%20Particles%20%E3%81%97%E3%81%8B%20%26%20%E3%81%BB%E3%81%8B" },
    { nom: "Bunpro", page: "しか-ない (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%97%E3%81%8B-%E3%81%AA%E3%81%84" }
  ],
  "〜ばかり": [
    { nom: "Tae Kim", page: "Expressing Amounts", url: "https://guidetojapanese.org/learn/grammar/amount#part5" },
    { nom: "Imabi", page: "Combination Particles with ばかり", url: "https://imabi.org/combination-particles-with-%e3%81%b0%e3%81%8b%e3%82%8a/#:~:text=The%20Adverbial%20Particle%20%E3%81%B0%E3%81%8B%E3%82%8A" },
    { nom: "Bunpro", page: "ばかり (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%B0%E3%81%8B%E3%82%8A" }
  ],
  "〜ところ": [
    { nom: "Tae Kim", page: "Special Expressions with Generic Nouns", url: "https://guidetojapanese.org/learn/grammar/genericnouns#part3" },
    { nom: "Imabi", page: "Combination Particles with ところ", url: "https://imabi.org/combination-particles-with-%e3%81%a8%e3%81%93%e3%82%8d/#:~:text=%E3%81%A8%E3%81%93%E3%82%8D" },
    { nom: "Bunpro", page: "るところだ (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%82%8B%E3%81%A8%E3%81%93%E3%82%8D%E3%81%A0" },
    { nom: "Bunpro", page: "たところだ (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%81%A8%E3%81%93%E3%82%8D%E3%81%A0" },
    { nom: "Bunpro", page: "ているところだ (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%84%E3%82%8B%E3%81%A8%E3%81%93%E3%82%8D%E3%81%A0" }
  ],
  "〜間 / 〜間に": [
    { nom: "Imabi", page: "While I: ～間", url: "https://imabi.org/while-i-%e9%96%93/" },
    { nom: "Bunpro", page: "ているあいだに (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%84%E3%82%8B%E3%81%82%E3%81%84%E3%81%A0%E3%81%AB" },
    { nom: "Bunpro", page: "の間に (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AE%E9%96%93%E3%81%AB" }
  ],
  "〜までに": [
    { nom: "Imabi", page: "The Particle まで", url: "https://imabi.org/the-particle-%e3%81%be%e3%81%a7/#:~:text=Usage%20I%20%E3%81%BE%E3%81%A7%20vs%20%EF%BD%9E%E3%81%BE%E3%81%A7%E3%81%AB" },
    { nom: "Bunpro", page: "までに (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%BE%E3%81%A7%E3%81%AB" }
  ],
  "〜始める / 〜出す / 〜続ける / 〜終わる": [
    { nom: "Imabi", page: "Start to I: ～始める & ～出す", url: "https://imabi.org/start-to-%ef%bd%9e%e5%a7%8b%e3%82%81%e3%82%8b-%ef%bd%9e%e5%87%ba%e3%81%99-%ef%bd%9e%e3%81%8b%e3%81%91%e3%82%8b/#:~:text=%EF%BD%9E%E5%87%BA%E3%81%99" },
    { nom: "Bunpro", page: "はじめる (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AF%E3%81%98%E3%82%81%E3%82%8B" },
    { nom: "Bunpro", page: "だす (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A0%E3%81%99" },
    { nom: "Bunpro", page: "つづける (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A4%E3%81%A5%E3%81%91%E3%82%8B" },
    { nom: "Bunpro", page: "おわる (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%8A%E3%82%8F%E3%82%8B" }
  ],
  "〜がる / 〜たがる": [
    { nom: "Tofugu", page: "Japanese Verb たがる Form", url: "https://www.tofugu.com/japanese-grammar/tagaru-form/" },
    { nom: "Imabi", page: "The Auxiliary Verb ～がる", url: "https://imabi.org/the-auxiliary-verb-%ef%bd%9e%e3%81%8c%e3%82%8b/#:~:text=In%2DDepth%20Coverage%20of%20%EF%BD%9E%E3%81%8C%E3%82%8B" },
    { nom: "Bunpro", page: "がる (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%8C%E3%82%8B" },
    { nom: "Bunpro", page: "たがる (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%81%8C%E3%82%8B" }
  ],
  "〜とか": [
    { nom: "Tae Kim", page: "Noun-related Particles", url: "https://guidetojapanese.org/learn/grammar/nounparticles#part3" },
    { nom: "Imabi", page: "The Particle とか", url: "https://imabi.org/the-particle-%e3%81%a8%e3%81%8b/#:~:text=%E3%81%BC%E3%81%8B%E3%81%97%E3%81%AE%E3%80%8C%E3%81%A8%E3%81%8B%E3%80%8D%20After%20Noun" },
    { nom: "Bunpro", page: "とか-とか (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%8B-%E3%81%A8%E3%81%8B" }
  ],
  "〜でも": [
    { nom: "Imabi", page: "The Particle でも", url: "https://imabi.org/the-particle-%e3%81%a7%e3%82%82/#:~:text=The%20Adverbial%20Particle%20%E3%81%A7%E3%82%82" },
    { nom: "Bunpro", page: "でも (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A7%E3%82%82" }
  ],
  "Langage honorifique (敬語)": [
    { nom: "Tae Kim", page: "Honorific and Humble Forms", url: "https://guidetojapanese.org/learn/grammar/honorific#:~:text=%E3%81%AB%E3%81%AA%E3%82%8B" },
    { nom: "Tofugu", page: "Honorific Prefix: 御〜 (お〜•ご〜)", url: "https://www.tofugu.com/japanese-grammar/honorific-prefix-o-go/" },
    { nom: "Imabi", page: "Honorifics VI: Regular Verbs", url: "https://imabi.org/honorifics-vi-regular-verbs/#:~:text=%E3%81%AB%E3%81%AA%E3%82%8B" },
    { nom: "Bunpro", page: "お-になる (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%8A-%E3%81%AB%E3%81%AA%E3%82%8B" },
    { nom: "Bunpro", page: "お-する (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%8A-%E3%81%99%E3%82%8B" }
  ],
  "〜なんか / 〜なんて": [
    { nom: "Tae Kim", page: "Casual Patterns and Slang", url: "https://guidetojapanese.org/learn/grammar/casual#part7" },
    { nom: "Imabi", page: "The Particle など・なんか", url: "https://imabi.org/the-particles-%e3%81%a8%e3%81%8b-%e3%81%aa%e3%81%a9-%e3%81%aa%e3%82%93%e3%81%8b/#:~:text=The%20Adverbial%20particle%20%E3%81%AA%E3%82%93%E3%81%8B" },
    { nom: "Bunpro", page: "なんか-なんて (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%82%93%E3%81%8B-%E3%81%AA%E3%82%93%E3%81%A6" }
  ],
  "〜まま": [
    { nom: "Tae Kim", page: "Expressing a lack of change", url: "https://guidetojapanese.org/learn/grammar/nochange#part2" },
    { nom: "Bunpro", page: "まま (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%BE%E3%81%BE" }
  ],
  "〜がする": [
    { nom: "Bunpro", page: "がする (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%8C%E3%81%99%E3%82%8B" }
  ],
  "〜としても": [
    { nom: "Tae Kim", page: "Hypothesizing and Concluding", url: "https://guidetojapanese.org/learn/grammar/reasoning#:~:text=%E3%81%A8%E3%81%97%E3%81%A6%E3%82%82" },
    { nom: "Bunpro", page: "としても (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%97%E3%81%A6%E3%82%82" }
  ],
  "〜っぽい": [
    { nom: "Tae Kim", page: "Similarity or hearsay", url: "https://guidetojapanese.org/learn/grammar/similarity#part7" },
    { nom: "Imabi", page: "The Suffix ～っぽい", url: "https://imabi.org/the-suffix-%ef%bd%9e%e3%81%a3%e3%81%bd%e3%81%84/#:~:text=Noun%20%2B%20%EF%BD%9E%E3%81%A3%E3%81%BD%E3%81%84" },
    { nom: "Bunpro", page: "っぽい (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A3%E3%81%BD%E3%81%84" }
  ],
  "〜がち": [
    { nom: "Tae Kim", page: "Tendencies", url: "https://guidetojapanese.org/learn/grammar/tendency#part2" },
    { nom: "Bunpro", page: "がち (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%8C%E3%81%A1" }
  ],
  "〜気味": [
    { nom: "Bunpro", page: "ぎみ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%8E%E3%81%BF" }
  ],
  "〜だらけ": [
    { nom: "Tae Kim", page: "Covered by something", url: "https://guidetojapanese.org/learn/grammar/covered#part2" },
    { nom: "Bunpro", page: "だらけ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A0%E3%82%89%E3%81%91" }
  ],
  "〜ふりをする": [
    { nom: "Bunpro", page: "ふりをする (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%B5%E3%82%8A%E3%82%92%E3%81%99%E3%82%8B" }
  ],
  "〜くせに": [
    { nom: "Imabi", page: "Criticizing: くせに・くせして", url: "https://imabi.org/criticizing-%e3%81%8f%e3%81%9b%e3%81%ab%e3%83%bb%e3%81%8f%e3%81%9b%e3%81%97%e3%81%a6/#:~:text=%EF%BD%9E%E3%81%8F%E3%81%9B%E3%81%AB%3A%20Dissatisfaction" },
    { nom: "Bunpro", page: "くせに (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%8F%E3%81%9B%E3%81%AB" }
  ],
  "〜もの / 〜もん": [
    { nom: "Tae Kim", page: "Special Expressions with Generic Nouns", url: "https://guidetojapanese.org/learn/grammar/genericnouns" },
    { nom: "Imabi", page: "Combination Particles with もの", url: "https://imabi.org/combination-particles-with-%e3%82%82%e3%81%ae/" },
    { nom: "Bunpro", page: "もの-もん (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%82%82%E3%81%AE-%E3%82%82%E3%82%93" }
  ],
  "〜っけ": [
    { nom: "Imabi", page: "語尾 III", url: "https://imabi.org/%e8%aa%9e%e5%b0%be-iii/" },
    { nom: "Bunpro", page: "っけ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A3%E3%81%91" }
  ],
  "〜かな": [
    { nom: "Tae Kim", page: "Review and more sentence-ending particles", url: "https://guidetojapanese.org/learn/grammar/sentence_ending" },
    { nom: "Bunpro", page: "かな (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%81%AA" }
  ],
  "〜って (thème)": [
    { nom: "Tae Kim", page: "Casual Patterns and Slang", url: "https://guidetojapanese.org/learn/grammar/casual" },
    { nom: "Imabi", page: "The Particles って, たって, & だって", url: "https://imabi.org/the-particles-%e3%81%a3%e3%81%a6-%e3%81%9f%e3%81%a3%e3%81%a6-%e3%81%a0%e3%81%a3%e3%81%a6/#:~:text=The%20Particle%20%E3%81%A3%E3%81%A6" },
    { nom: "Bunpro", page: "って (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A3%E3%81%A6-slang" }
  ],
  "まるで〜ようだ": [
    { nom: "Imabi", page: "Similarity", url: "https://imabi.org/similarity/#:~:text=%E3%81%BE%E3%82%8B%E3%81%A7" },
    { nom: "Bunpro", page: "まるで-ようだ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%BE%E3%82%8B%E3%81%A7-%E3%82%88%E3%81%86%E3%81%A0" }
  ],
  "なかなか": [
    { nom: "Bunpro", page: "なかなか (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%8B%E3%81%AA%E3%81%8B" },
    { nom: "Bunpro", page: "なかなか-ない (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%8B%E3%81%AA%E3%81%8B-%E3%81%AA%E3%81%84" }
  ],
  "決して〜ない / めったに〜ない / 全く〜ない": [
    { nom: "Bunpro", page: "決して-ない (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E6%B1%BA%E3%81%97%E3%81%A6-%E3%81%AA%E3%81%84" },
    { nom: "Bunpro", page: "めったに-ない (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%82%81%E3%81%A3%E3%81%9F%E3%81%AB-%E3%81%AA%E3%81%84" },
    { nom: "Bunpro", page: "全く-ない (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E5%85%A8%E3%81%8F-%E3%81%AA%E3%81%84" }
  ],
  "〜わけだ": [
    { nom: "Tae Kim", page: "Hypothesizing and Concluding", url: "https://guidetojapanese.org/learn/grammar/reasoning#part2" },
    { nom: "Imabi", page: "わけだ", url: "https://imabi.org/%e3%82%8f%e3%81%91%e3%81%a0/" },
    { nom: "Bunpro", page: "わけだ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%82%8F%E3%81%91%E3%81%A0" }
  ],
  "〜わけではない": [
    { nom: "Imabi", page: "わけではない, わけがない, わけにはいかない", url: "https://imabi.org/%e3%82%8f%e3%81%91%e3%81%a7%e3%81%af%e3%81%aa%e3%81%84-%e3%82%8f%e3%81%91%e3%81%8c%e3%81%aa%e3%81%84-%e3%82%8f%e3%81%91%e3%81%ab%e3%81%af%e3%81%84%e3%81%8b%e3%81%aa%e3%81%84/#:~:text=%E3%82%8F%E3%81%91%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84" },
    { nom: "Bunpro", page: "わけではない (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%82%8F%E3%81%91%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84" }
  ],
  "〜わけがない / 〜はずがない": [
    { nom: "Tae Kim", page: "Hypothesizing and Concluding", url: "https://guidetojapanese.org/learn/grammar/reasoning#:~:text=%E3%82%8F%E3%81%91%E3%81%8C%E3%81%AA%E3%81%84" },
    { nom: "Imabi", page: "わけではない, わけがない, わけにはいかない", url: "https://imabi.org/%e3%82%8f%e3%81%91%e3%81%a7%e3%81%af%e3%81%aa%e3%81%84-%e3%82%8f%e3%81%91%e3%81%8c%e3%81%aa%e3%81%84-%e3%82%8f%e3%81%91%e3%81%ab%e3%81%af%e3%81%84%e3%81%8b%e3%81%aa%e3%81%84/#:~:text=%E3%82%8F%E3%81%91%E3%81%8C%E3%81%AA%E3%81%84" },
    { nom: "Bunpro", page: "わけがない (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%82%8F%E3%81%91%E3%81%8C%E3%81%AA%E3%81%84" },
    { nom: "Bunpro", page: "はずがない (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AF%E3%81%9A%E3%81%8C%E3%81%AA%E3%81%84" }
  ],
  "〜わけにはいかない": [
    { nom: "Tae Kim", page: "Hypothesizing and Concluding", url: "https://guidetojapanese.org/learn/grammar/reasoning#:~:text=%E3%82%8F%E3%81%91%E3%81%AB%E3%81%AF%E3%81%84%E3%81%8B%E3%81%AA%E3%81%84" },
    { nom: "Imabi", page: "わけではない, わけがない, わけにはいかない", url: "https://imabi.org/%e3%82%8f%e3%81%91%e3%81%a7%e3%81%af%e3%81%aa%e3%81%84-%e3%82%8f%e3%81%91%e3%81%8c%e3%81%aa%e3%81%84-%e3%82%8f%e3%81%91%e3%81%ab%e3%81%af%e3%81%84%e3%81%8b%e3%81%aa%e3%81%84/#:~:text=%E3%82%8F%E3%81%91%E3%81%AB%E3%81%AF%E3%81%84%E3%81%8B%E3%81%AA%E3%81%84" },
    { nom: "Bunpro", page: "わけにはいかない (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%82%8F%E3%81%91%E3%81%AB%E3%81%AF%E3%81%84%E3%81%8B%E3%81%AA%E3%81%84" }
  ],
  "〜に違いない": [
    { nom: "Imabi", page: "No doubt that", url: "https://imabi.org/no-doubt-that/#:~:text=%EF%BD%9E%E3%81%AB%E9%81%95%E3%81%84%E3%81%AA%E3%81%84%20VS%20%EF%BD%9E%E3%81%AB%E7%9B%B8%E9%81%95%E3%81%AA%E3%81%84" },
    { nom: "Bunpro", page: "に違いない (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E9%81%95%E3%81%84%E3%81%AA%E3%81%84" }
  ],
  "〜とは限らない": [
    { nom: "Imabi", page: "Limit", url: "https://imabi.org/limit/#:~:text=%E9%99%90%E3%82%89%E3%81%AA%E3%81%84" },
    { nom: "Bunpro", page: "とは限らない (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%AF%E9%99%90%E3%82%89%E3%81%AA%E3%81%84" }
  ],
  "〜おそれがある": [
    { nom: "Bunpro", page: "恐れがある (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E6%81%90%E3%82%8C%E3%81%8C%E3%81%82%E3%82%8B" }
  ],
  "〜ということだ / 〜とのことだ": [
    { nom: "Tae Kim", page: "Defining and Describing", url: "https://guidetojapanese.org/learn/grammar/define#:~:text=%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8" },
    { nom: "Bunpro", page: "ということだ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A0" }
  ],
  "〜べきだ": [
    { nom: "Tae Kim", page: "Things that should be a certain way", url: "https://guidetojapanese.org/learn/grammar/should#part3" },
    { nom: "Imabi", page: "Obligation: ～べきだ", url: "https://imabi.org/obligation-%ef%bd%9e%e3%81%b9%e3%81%8d%e3%81%a0/#:~:text=%EF%BD%9E%E3%81%B9%E3%81%8D%20Used%20Adjectivally" },
    { nom: "Bunpro", page: "べき (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%B9%E3%81%8D" },
    { nom: "Bunpro", page: "べきではない (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%B9%E3%81%8D%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84" }
  ],
  "〜ことだ": [
    { nom: "Bunpro", page: "ことだ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%93%E3%81%A8%E3%81%A0" }
  ],
  "〜ものだ": [
    { nom: "Imabi", page: "Used To: ～たものだ& かつて", url: "https://imabi.org/used-to-%ef%bd%9e%e3%81%9f%e3%82%82%e3%81%ae%e3%81%a0-%e5%98%97%e3%81%a6/#:~:text=Verb%20%EF%BC%8B%20%EF%BD%9E%E3%81%9F%E3%82%82%E3%81%AE%E3%81%A0" },
    { nom: "Bunpro", page: "ものだ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%82%82%E3%81%AE%E3%81%A0" },
    { nom: "Bunpro", page: "たものだ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%82%82%E3%81%AE%E3%81%A0" }
  ],
  "〜ことはない": [
    { nom: "Bunpro", page: "ことはない (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%93%E3%81%A8%E3%81%AF%E3%81%AA%E3%81%84" }
  ],
  "〜しかない": [
    { nom: "Tae Kim", page: "Expressing Amounts", url: "https://guidetojapanese.org/learn/grammar/amount#:~:text=%E3%81%97%E3%81%8B%E3%81%AA%E3%81%84" },
    { nom: "Imabi", page: "Shika & Hoka", url: "https://imabi.org/shika-hoka/#:~:text=%E3%81%97%E3%81%8B%E3%81%AA%E3%81%84" },
    { nom: "Bunpro", page: "しかない (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%97%E3%81%8B%E3%81%AA%E3%81%84" }
  ],
  "〜ばよかった": [
    { nom: "Imabi", page: "Conditional Phrases", url: "https://imabi.org/conditional-phrases/#:~:text=%E3%81%B0%E3%82%88%E3%81%8B%E3%81%A3%E3%81%9F" },
    { nom: "Bunpro", page: "ばよかった (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%B0%E3%82%88%E3%81%8B%E3%81%A3%E3%81%9F" }
  ],
  "〜てほしい": [
    { nom: "Tae Kim", page: "Desire and Suggestions", url: "https://guidetojapanese.org/learn/grammar/desire#:~:text=%E3%81%A6%E3%81%BB%E3%81%97%E3%81%84" },
    { nom: "Tofugu", page: "〜てほしい To Express What You Want Someone To Do", url: "https://www.tofugu.com/japanese-grammar/tehoshii/" },
    { nom: "Imabi", page: "Wanting Something: ほしい", url: "https://imabi.org/want-feeling-i-%ef%bd%9e%e3%81%9f%e3%81%84-%e3%81%bb%e3%81%97%e3%81%84/#:~:text=%EF%BD%9E%E3%81%A6%E3%81%BB%E3%81%97%E3%81%84%3A%20Wanting%20Something%20Done%20by%E2%80%A6" },
    { nom: "Bunpro", page: "てほしい (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%BB%E3%81%97%E3%81%84" }
  ],
  "〜させてください": [
    { nom: "Tae Kim", page: "Causative and Passive Verbs", url: "https://guidetojapanese.org/learn/grammar/causepass" },
    { nom: "Imabi", page: "The Causative I: ～させる & ～せる", url: "https://imabi.org/the-causative-i-%ef%bd%9e%e3%81%95%e3%81%9b%e3%82%8b-%ef%bd%9e%e3%81%9b%e3%82%8b/#:~:text=%E3%81%95%E3%81%9B%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84" }
  ],
  "〜てたまらない / 〜てしょうがない": [
    { nom: "Bunpro", page: "てたまらない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%9F%E3%81%BE%E3%82%89%E3%81%AA%E3%81%84" },
    { nom: "Bunpro", page: "てしょうがない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%97%E3%82%87%E3%81%86%E3%81%8C%E3%81%AA%E3%81%84" }
  ],
  "〜ようにする": [
    { nom: "Tae Kim", page: "Using する and なる with the に particle", url: "https://guidetojapanese.org/learn/grammar/surunaru#:~:text=%E3%82%88%E3%81%86%E3%81%AB%E3%81%99%E3%82%8B" },
    { nom: "Imabi", page: "～ようになる& ～ようにする", url: "https://imabi.org/%ef%bd%9e%e3%82%88%e3%81%86%e3%81%ab%e3%81%aa%e3%82%8b-%ef%bd%9e%e3%82%88%e3%81%86%e3%81%ab%e3%81%99%e3%82%8b/#:~:text=%EF%BD%9E%E3%82%88%E3%81%86%E3%81%AB%E3%81%99%E3%82%8B" },
    { nom: "Bunpro", page: "ようにする (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%82%88%E3%81%86%E3%81%AB%E3%81%99%E3%82%8B" }
  ],
  "〜ようとする": [
    { nom: "Tae Kim", page: "Trying or attempting something", url: "https://guidetojapanese.org/learn/grammar/try#:~:text=%E3%82%88%E3%81%86%E3%81%A8%E3%81%99%E3%82%8B" },
    { nom: "Bunpro", page: "verb-volitionalとする (JLPT N3)", url: "https://bunpro.jp/grammar_points/verb-volitional%E3%81%A8%E3%81%99%E3%82%8B" }
  ],
  "〜ことにしている": [
    { nom: "Imabi", page: "Expressions with こと", url: "https://imabi.org/expressions-with-%e3%81%93%e3%81%a8/#:~:text=%E3%81%93%E3%81%A8%E3%81%AB%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B" }
  ],
  "〜ことになっている": [
    { nom: "Bunpro", page: "ことになっている (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%93%E3%81%A8%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B" }
  ],
  "〜たばかり": [
    { nom: "Tae Kim", page: "Time-specific actions", url: "https://guidetojapanese.org/learn/grammar/timeactions#part2" },
    { nom: "Imabi", page: "Combination Particles with ばかり", url: "https://imabi.org/combination-particles-with-%e3%81%b0%e3%81%8b%e3%82%8a/#:~:text=The%20Adverbial%20Particle%20%E3%81%B0%E3%81%8B%E3%82%8A" },
    { nom: "Bunpro", page: "たばかり (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%81%B0%E3%81%8B%E3%82%8A" }
  ],
  "〜うちに": [
    { nom: "Tofugu", page: "うち: Japanese Word For \"Inside\"", url: "https://www.tofugu.com/japanese-grammar/uchi/" },
    { nom: "Imabi", page: "While II: ～うち", url: "https://imabi.org/while-ii-%e3%81%86%e3%81%a1/#:~:text=%EF%BD%9E%E3%81%86%E3%81%A1%E3%81%AB%20w%2F%20Instantaneous%20Verbs" },
    { nom: "Bunpro", page: "うちに (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%86%E3%81%A1%E3%81%AB" }
  ],
  "〜最中に": [
    { nom: "Bunpro", page: "最中に (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E6%9C%80%E4%B8%AD%E3%81%AB" }
  ],
  "〜たとたん": [
    { nom: "Tae Kim", page: "Time-specific actions", url: "https://guidetojapanese.org/learn/grammar/timeactions#part3" },
    { nom: "Imabi", page: "As soon as", url: "https://imabi.org/as-soon-as/#:~:text=%E3%81%A8%E3%81%9F%E3%82%93" },
    { nom: "Bunpro", page: "たとたんに (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%81%A8%E3%81%9F%E3%82%93%E3%81%AB" }
  ],
  "〜たびに": [
    { nom: "Imabi", page: "Whenever II: ～度に, ～都度, & ～につけ", url: "https://imabi.org/whenever-ii-%ef%bd%9e%e5%ba%a6%e3%81%ab-%ef%bd%9e%e9%83%bd%e5%ba%a6%e3%80%80-%ef%bd%9e%e3%81%ab%e3%81%a4%e3%81%91/#:~:text=%EF%BD%9E%E5%BA%A6%E3%81%AB" },
    { nom: "Bunpro", page: "たびに (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%81%B3%E3%81%AB" }
  ],
  "〜てはじめて": [
    { nom: "Bunpro", page: "て初めて (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E5%88%9D%E3%82%81%E3%81%A6" }
  ],
  "〜ついでに": [
    { nom: "Imabi", page: "Incidental", url: "https://imabi.org/incidental/#:~:text=%E3%81%A4%E3%81%84%E3%81%A7%E3%81%AB" },
    { nom: "Bunpro", page: "ついでに (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A4%E3%81%84%E3%81%A7%E3%81%AB" }
  ],
  "〜際に": [
    { nom: "Imabi", page: "Occasion", url: "https://imabi.org/occasion/" },
    { nom: "Bunpro", page: "際に (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E9%9A%9B%E3%81%AB" }
  ],
  "〜から〜にかけて": [
    { nom: "Imabi", page: "Span: ～にかけて & にわたって", url: "https://imabi.org/span-%ef%bd%9e%e3%81%ab%e3%81%8b%e3%81%91%e3%81%a6-%e3%81%ab%e3%82%8f%e3%81%9f%e3%81%a3%e3%81%a6/#:~:text=%EF%BD%9E%E3%81%8B%E3%82%89%EF%BD%9E%E3%81%BE%E3%81%A7%20VS%20%EF%BD%9E%E3%81%8B%E3%82%89%EF%BD%9E%E3%81%AB%E3%81%8B%E3%81%91%E3%81%A6" },
    { nom: "Bunpro", page: "にかけて (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%8B%E3%81%91%E3%81%A6" }
  ],
  "〜につれて": [
    { nom: "Imabi", page: "As (change)", url: "https://imabi.org/as-change/#:~:text=%EF%BD%9E%E3%81%AB%E3%81%A4%E3%82%8C%E3%81%A6" },
    { nom: "Bunpro", page: "につれて (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%A4%E3%82%8C%E3%81%A6" }
  ],
  "〜一方だ": [
    { nom: "Bunpro", page: "一方だ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E4%B8%80%E6%96%B9%E3%81%A0" }
  ],
  "〜おかげで": [
    { nom: "Bunpro", page: "おかげで (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%8A%E3%81%8B%E3%81%92%E3%81%A7" }
  ],
  "〜せいで": [
    { nom: "Imabi", page: "Fault: ～せいで & ～にかこつけて", url: "https://imabi.org/fault-%ef%bd%9e%e3%81%9b%e3%81%84%e3%81%a7-%ef%bd%9e%e3%81%ab%e3%81%8b%e3%81%93%e3%81%a4%e3%81%91%e3%81%a6/" },
    { nom: "Bunpro", page: "せいで (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%9B%E3%81%84%E3%81%A7" }
  ],
  "〜によって": [
    { nom: "Tae Kim", page: "Using 「方」 and 「よる」", url: "https://guidetojapanese.org/learn/grammar/comparison#part5" },
    { nom: "Imabi", page: "～によって", url: "https://imabi.org/%ef%bd%9e%e3%81%ab%e3%82%88%e3%81%a3%e3%81%a6/#:~:text=%EF%BD%9E%E3%81%AB%E3%82%88%E3%81%A3%E3%81%A6%E3%83%BB%E3%81%AB%E3%82%88%E3%82%8A" },
    { nom: "Bunpro", page: "によって-による (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%82%88%E3%81%A3%E3%81%A6-%E3%81%AB%E3%82%88%E3%82%8B" }
  ],
  "〜によると": [
    { nom: "Tae Kim", page: "Using 「方」 and 「よる」", url: "https://guidetojapanese.org/learn/grammar/comparison#part6" },
    { nom: "Imabi", page: "Hearsay: ～そうだ", url: "https://imabi.org/hearsay/#:~:text=%E3%81%AB%E3%82%88%E3%82%8B%E3%81%A8" },
    { nom: "Bunpro", page: "によると-によれば (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%82%88%E3%82%8B%E3%81%A8-%E3%81%AB%E3%82%88%E3%82%8C%E3%81%B0" }
  ],
  "〜について / 〜に関して": [
    { nom: "Bunpro", page: "について (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6" },
    { nom: "Bunpro", page: "に関する-に関して (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B-%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6" }
  ],
  "〜に対して": [
    { nom: "Imabi", page: "～に対して", url: "https://imabi.org/%ef%bd%9e%e3%81%ab%e5%af%be%e3%81%97%e3%81%a6/#:~:text=%EF%BD%9E%E3%81%AB%E5%AF%BE%E3%81%97%E3%81%A6" },
    { nom: "Bunpro", page: "に対して (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E5%AF%BE%E3%81%97%E3%81%A6" }
  ],
  "〜にとって": [
    { nom: "Imabi", page: "Standpoint: として（は） VS にとって（は）", url: "https://imabi.org/standpoint-%e3%81%a8%e3%81%97%e3%81%a6%ef%bc%88%e3%81%af%ef%bc%89-vs-%e3%81%ab%e3%81%a8%e3%81%a3%e3%81%a6%ef%bc%88%e3%81%af%ef%bc%89/#:~:text=%EF%BD%9E%E3%81%AB%E3%81%A8%E3%81%A3%E3%81%A6" },
    { nom: "Bunpro", page: "に取って (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E5%8F%96%E3%81%A3%E3%81%A6" }
  ],
  "〜として": [
    { nom: "Imabi", page: "Standpoint: として（は） VS にとって（は）", url: "https://imabi.org/standpoint-%e3%81%a8%e3%81%97%e3%81%a6%ef%bc%88%e3%81%af%ef%bc%89-vs-%e3%81%ab%e3%81%a8%e3%81%a3%e3%81%a6%ef%bc%88%e3%81%af%ef%bc%89/#:~:text=%EF%BD%9E%E3%81%A8%E3%81%97%E3%81%A6%EF%BC%88%E3%81%AF%EF%BC%89" },
    { nom: "Bunpro", page: "として (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%97%E3%81%A6" }
  ],
  "〜に比べて": [
    { nom: "Imabi", page: "Compare/Contrast", url: "https://imabi.org/compare-contrast/" },
    { nom: "Bunpro", page: "に比べて (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E6%AF%94%E3%81%B9%E3%81%A6" }
  ],
  "〜において": [
    { nom: "Imabi", page: "～において・における", url: "https://imabi.org/%ef%bd%9e%e3%81%ab%e3%81%8a%e3%81%84%e3%81%a6%e3%83%bb%e3%81%ab%e3%81%8a%e3%81%91%e3%82%8b/#:~:text=%EF%BD%9E%E3%81%AB%E3%81%8A%E3%81%84%E3%81%A6%E3%83%BB%E3%81%8A%E3%81%91%E3%82%8B" },
    { nom: "Bunpro", page: "において-における (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%8A%E3%81%84%E3%81%A6-%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B" }
  ],
  "〜を通して / 〜を通じて": [
    { nom: "Imabi", page: "Through: を通じて & を通して", url: "https://imabi.org/through-%e3%82%92%e9%80%9a%e3%81%98%e3%81%a6-%e3%82%92%e9%80%9a%e3%81%97%e3%81%a6/#:~:text=%EF%BD%9E%E3%82%92%E9%80%9A%E3%81%97%E3%81%A6%20VS%20%EF%BD%9E%E3%82%92%E9%80%9A%E3%81%98%E3%81%A6" },
    { nom: "Bunpro", page: "を通じて-を通して (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E9%80%9A%E3%81%98%E3%81%A6-%E3%82%92%E9%80%9A%E3%81%97%E3%81%A6" }
  ],
  "〜を中心に": [
    { nom: "Imabi", page: "Centering: ～を中心に（して）", url: "https://imabi.org/centering-%ef%bd%9e%e3%82%92%e4%b8%ad%e5%bf%83%e3%81%ab%ef%bc%88%e3%81%97%e3%81%a6%ef%bc%89/#:~:text=%EF%BD%9E%E3%82%92%E4%B8%AD%E5%BF%83%E3%81%AB%EF%BC%88%E3%81%97%E3%81%A6%EF%BC%89" },
    { nom: "Bunpro", page: "を中心に (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E4%B8%AD%E5%BF%83%E3%81%AB" }
  ],
  "〜をはじめ": [
    { nom: "Imabi", page: "Defining Parameter", url: "https://imabi.org/defining-parameter/#:~:text=%E3%82%92%E3%81%AF%E3%81%98%E3%82%81" },
    { nom: "Bunpro", page: "をはじめ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E3%81%AF%E3%81%98%E3%82%81" }
  ],
  "〜向け / 〜向き": [
    { nom: "Bunpro", page: "向け (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E5%90%91%E3%81%91" },
    { nom: "Bunpro", page: "向き (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E5%90%91%E3%81%8D" }
  ],
  "〜代わりに": [
    { nom: "Imabi", page: "Nominal Phrases II", url: "https://imabi.org/nominal-phrases-ii/#:~:text=%E4%BB%A3%E3%82%8F%E3%82%8A%E3%81%AB" },
    { nom: "Bunpro", page: "代わりに (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E4%BB%A3%E3%82%8F%E3%82%8A%E3%81%AB" }
  ],
  "〜とおり": [
    { nom: "Imabi", page: "～とおりに", url: "https://imabi.org/%ef%bd%9e%e3%81%a8%e3%81%8a%e3%82%8a%e3%81%ab/#:~:text=%EF%BD%9E%E3%81%A8%E3%81%8A%E3%82%8A%E3%81%AB%20%26%20%EF%BD%9E%E3%81%A9%E3%81%8A%E3%82%8A%E3%81%AB" },
    { nom: "Bunpro", page: "とおり (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%8A%E3%82%8A" }
  ],
  "〜結果": [
    { nom: "Imabi", page: "Result", url: "https://imabi.org/result/#:~:text=%EF%BD%9E%E7%B5%90%E6%9E%9C" },
    { nom: "Bunpro", page: "結果・の結果 (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E7%B5%90%E6%9E%9C%E3%83%BB%E3%81%AE%E7%B5%90%E6%9E%9C" }
  ],
  "〜くらい / 〜ほど": [
    { nom: "Tae Kim", page: "Expressing Amounts", url: "https://guidetojapanese.org/learn/grammar/amount#part8" },
    { nom: "Tofugu", page: "くらい For Approximation", url: "https://www.tofugu.com/japanese-grammar/kurai/" },
    { nom: "Imabi", page: "The Particles ほど & くらい", url: "https://imabi.org/the-particles-%e3%81%bb%e3%81%a9-%e3%81%8f%e3%82%89%e3%81%84/#:~:text=The%20Adverbial%20Particle%20%E3%81%BB%E3%81%A9" },
    { nom: "Bunpro", page: "くらい2 (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%8F%E3%82%89%E3%81%842" },
    { nom: "Bunpro", page: "ほど (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%BB%E3%81%A9" }
  ],
  "〜ほど〜ない": [
    { nom: "Tae Kim", page: "Expressing Amounts", url: "https://guidetojapanese.org/learn/grammar/amount#part8" },
    { nom: "Imabi", page: "The Particles ほど & くらい", url: "https://imabi.org/the-particles-%e3%81%bb%e3%81%a9-%e3%81%8f%e3%82%89%e3%81%84/#:~:text=The%20Adverbial%20Particle%20%E3%81%BB%E3%81%A9" },
    { nom: "Bunpro", page: "ほど～ない (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%BB%E3%81%A9%EF%BD%9E%E3%81%AA%E3%81%84" }
  ],
  "〜ば〜ほど": [
    { nom: "Tae Kim", page: "Expressing Amounts", url: "https://guidetojapanese.org/learn/grammar/amount#part8" },
    { nom: "Imabi", page: "The Particles ほど & くらい", url: "https://imabi.org/the-particles-%e3%81%bb%e3%81%a9-%e3%81%8f%e3%82%89%e3%81%84/#:~:text=The%20Adverbial%20Particle%20%E3%81%BB%E3%81%A9" },
    { nom: "Bunpro", page: "ば-ほど (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%B0-%E3%81%BB%E3%81%A9" }
  ],
  "〜さえ": [
    { nom: "Tae Kim", page: "The minimum expectation", url: "https://guidetojapanese.org/learn/grammar/even#part2" },
    { nom: "Imabi", page: "The Particles さえ, すら, & だに", url: "https://imabi.org/the-particles-%e3%81%95%e3%81%88-%e3%81%99%e3%82%89-%e3%81%a0%e3%81%ab/#:~:text=The%20Adverbial%20Particle%20%E3%81%95%E3%81%88" },
    { nom: "Bunpro", page: "さえ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%95%E3%81%88" }
  ],
  "〜さえ〜ば": [
    { nom: "Tae Kim", page: "The minimum expectation", url: "https://guidetojapanese.org/learn/grammar/even#part2" },
    { nom: "Imabi", page: "The Particles さえ, すら, & だに", url: "https://imabi.org/the-particles-%e3%81%95%e3%81%88-%e3%81%99%e3%82%89-%e3%81%a0%e3%81%ab/#:~:text=The%20Adverbial%20Particle%20%E3%81%95%E3%81%88" },
    { nom: "Bunpro", page: "さえ-ば (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%95%E3%81%88-%E3%81%B0" }
  ],
  "〜こそ": [
    { nom: "Imabi", page: "The Particle こそ", url: "https://imabi.org/the-particle-%e3%81%93%e3%81%9d/#:~:text=The%20Fundamentals%20of%20%E3%81%93%E3%81%9D" },
    { nom: "Bunpro", page: "こそ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%93%E3%81%9D" }
  ],
  "〜だけでなく / 〜ばかりでなく": [
    { nom: "Imabi", page: "Addition", url: "https://imabi.org/addition/#:~:text=%E3%81%A0%E3%81%91%E3%81%A7%E3%81%AA%E3%81%8F" },
    { nom: "Bunpro", page: "だけでなく (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A0%E3%81%91%E3%81%A7%E3%81%AA%E3%81%8F" },
    { nom: "Bunpro", page: "ばかりでなく (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%B0%E3%81%8B%E3%82%8A%E3%81%A7%E3%81%AA%E3%81%8F" }
  ],
  "〜はもちろん": [
    { nom: "Imabi", page: "Addition", url: "https://imabi.org/addition/#:~:text=%EF%BD%9E%E3%81%AF%E3%82%82%E3%81%A1%E3%82%8D%E3%82%93%E3%83%BB%E3%82%82%E3%81%A8%E3%82%88%E3%82%8A%E3%83%BB%E3%81%8A%E3%82%8D%E3%81%8B" },
    { nom: "Bunpro", page: "はもちろん (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AF%E3%82%82%E3%81%A1%E3%82%8D%E3%82%93" }
  ],
  "〜に加えて": [
    { nom: "Imabi", page: "Addition", url: "https://imabi.org/addition/#:~:text=%EF%BD%9E%E3%81%AB%E5%8A%A0%E3%81%88%E3%81%A6" },
    { nom: "Bunpro", page: "に加えて (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E5%8A%A0%E3%81%88%E3%81%A6" }
  ],
  "〜というより": [
    { nom: "Imabi", page: "Rather", url: "https://imabi.org/rather/#:~:text=%EF%BD%9E%E3%81%A8%E3%81%84%E3%81%86%E3%82%88%E3%82%8A%EF%BC%88%E3%82%80%E3%81%97%E3%82%8D%EF%BC%89%EF%BD%9E" },
    { nom: "Bunpro", page: "というより (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%84%E3%81%86%E3%82%88%E3%82%8A" }
  ],
  "〜といっても": [
    { nom: "Bunpro", page: "と言っても (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E8%A8%80%E3%81%A3%E3%81%A6%E3%82%82" }
  ],
  "〜といえば": [
    { nom: "Imabi", page: "“When it Comes to…” I:というと, といえば, & といったら", url: "https://imabi.org/when-it-comes-to-i%e3%81%a8%e3%81%84%e3%81%86%e3%81%a8-%e3%81%a8%e3%81%84%e3%81%88%e3%81%b0-%e3%81%a8%e3%81%84%e3%81%a3%e3%81%9f%e3%82%89/#:~:text=%EF%BD%9E%E3%81%A8%E3%81%84%E3%81%88%E3%81%B0%3A%20Speaking%20of%20which%E2%80%A6" },
    { nom: "Bunpro", page: "といえば (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%84%E3%81%88%E3%81%B0" }
  ],
  "〜一方で": [
    { nom: "Imabi", page: "Opposite: 逆に, 反対に, 反面, & 一方（で）", url: "https://imabi.org/opposite-%e9%80%86%e3%81%ab-%e5%8f%8d%e5%af%be%e3%81%ab-%e5%8f%8d%e9%9d%a2-%e4%b8%80%e6%96%b9%ef%bc%88%e3%81%a7%ef%bc%89/#:~:text=%EF%BD%9E%E5%8F%8D%E9%9D%A2%20VS%20%EF%BD%9E%E4%B8%80%E6%96%B9%EF%BC%88%E3%81%A7%EF%BC%89" },
    { nom: "Bunpro", page: "一方で (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E4%B8%80%E6%96%B9%E3%81%A7" }
  ],
  "たとえ〜ても": [
    { nom: "Imabi", page: "No Matter If: たとえ・いくら・どれだけ・どんなに", url: "https://imabi.org/no-matter-if-%e3%81%9f%e3%81%a8%e3%81%88/#:~:text=%E3%81%9F%E3%81%A8%E3%81%88%20Situation%20A%20%2B%20%EF%BD%9E%E3%81%A6%E3%82%82%20Situation%20B" },
    { nom: "Bunpro", page: "たとえ-ても (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%81%A8%E3%81%88-%E3%81%A6%E3%82%82" }
  ],
  "ところが": [
    { nom: "Bunpro", page: "ところが (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%93%E3%82%8D%E3%81%8C" }
  ],
  "〜切る": [
    { nom: "Imabi", page: "Used to/together…", url: "https://imabi.org/used-to-together/#:~:text=%EF%BD%9E%E5%88%87%E3%82%8B" },
    { nom: "Bunpro", page: "切る (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E5%88%87%E3%82%8B" }
  ],
  "〜かける": [
    { nom: "Imabi", page: "Start to II: ～かける & ～かかる", url: "https://imabi.org/start-to-ii-%ef%bd%9e%e3%81%8b%e3%81%91%e3%82%8b-%ef%bd%9e%e3%81%8b%e3%81%8b%e3%82%8b/" },
    { nom: "Bunpro", page: "かけ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%81%91" }
  ],
  "〜っぱなし": [
    { nom: "Tae Kim", page: "Expressing a lack of change", url: "https://guidetojapanese.org/learn/grammar/nochange#part3" },
    { nom: "Bunpro", page: "っぱなし (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A3%E3%81%B1%E3%81%AA%E3%81%97" }
  ],
  "〜直す": [
    { nom: "Imabi", page: "Fix/Error: ～忘れる, ～直す, ～間違える, & ～誤る", url: "https://imabi.org/fix-error-%ef%bd%9e%e5%bf%98%e3%82%8c%e3%82%8b-%ef%bd%9e%e7%9b%b4%e3%81%99-%e9%96%93%e9%81%95%e3%81%88%e3%82%8b-%ef%bd%9e%e8%aa%a4%e3%82%8b/#:~:text=Verb1%20%E9%80%A3%E7%94%A8%E5%BD%A2%20%EF%BC%8B%20%EF%BD%9E%E7%9B%B4%E3%81%99" },
    { nom: "Bunpro", page: "なおす (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%8A%E3%81%99" }
  ],
  "〜合う": [
    { nom: "Imabi", page: "Used to/together…", url: "https://imabi.org/used-to-together/#:~:text=%EF%BD%9E%E5%90%88%E3%81%86%E3%83%BB%E5%90%88%E3%82%8F%E3%81%9B%E3%82%8B" },
    { nom: "Bunpro", page: "合う (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E5%90%88%E3%81%86" }
  ],
  "〜込む": [
    { nom: "Imabi", page: "込む", url: "https://imabi.org/%e8%be%bc%e3%82%80/#:~:text=%E8%BE%BC%E3%82%80" },
    { nom: "Bunpro", page: "込む1 (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E8%BE%BC%E3%82%801" },
    { nom: "Bunpro", page: "込む2 (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E8%BE%BC%E3%82%802" }
  ]
};

// ---- Sources des points ajoutés depuis Bunpro ----
// Pour ces fiches, la page Bunpro est la seule source consultée.
SOURCES["〜だ"] = [
  { nom: "Bunpro", page: "だ (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%A0" }
];
SOURCES["いい / よい"] = [
  { nom: "Bunpro", page: "いい (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%84%E3%81%84" }
];
SOURCES["Verbes en る et en う"] = [
  { nom: "Bunpro", page: "る-Verb (Dictionary) (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%82%8B-Verbs" }
];
SOURCES["〜の？ (question)"] = [
  { nom: "Bunpro", page: "の (Questions) (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AE-questions" }
];
SOURCES["する"] = [
  { nom: "Bunpro", page: "する (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%99%E3%82%8B" }
];
SOURCES["来る"] = [
  { nom: "Bunpro", page: "くる (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%8F%E3%82%8B" }
];
SOURCES["〜が嫌い"] = [
  { nom: "Bunpro", page: "きらい (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%8D%E3%82%89%E3%81%84" }
];
SOURCES["〜がある + nom"] = [
  { nom: "Bunpro", page: "がある + Noun (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%8C%E3%81%82%E3%82%8B-noun" }
];
SOURCES["〜なかった"] = [
  { nom: "Bunpro", page: "る-Verb (Negative-Past) (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%82%8B-verb-neg-past" }
];
SOURCES["誰"] = [
  { nom: "Bunpro", page: "誰 (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%A0%E3%82%8C" }
];
SOURCES["なぜ / どうして / なんで"] = [
  { nom: "Bunpro", page: "なぜ (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%9C" }
];
SOURCES["〜だった / 〜でした"] = [
  { nom: "Bunpro", page: "だった・でした (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%A0%E3%81%A3%E3%81%9F-%E3%81%A7%E3%81%97%E3%81%9F" }
];
SOURCES["〜じゃない / 〜じゃなかった"] = [
  { nom: "Bunpro", page: "じゃない (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%98%E3%82%83%E3%81%AA%E3%81%84" }
];
SOURCES["の (sujet d'une relative)"] = [
  { nom: "Bunpro", page: "が・の (Subject) (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AE-subject" }
];
SOURCES["の (nom sous-entendu)"] = [
  { nom: "Bunpro", page: "の (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AE-noun-omission" }
];
SOURCES["けっこう"] = [
  { nom: "Bunpro", page: "けっこう (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%91%E3%81%A3%E3%81%93%E3%81%86" }
];
SOURCES["たくさん"] = [
  { nom: "Bunpro", page: "たくさん (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%81%8F%E3%81%95%E3%82%93" }
];
SOURCES["〜くらい (environ)"] = [
  { nom: "Bunpro", page: "くらい ① (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%8F%E3%82%89%E3%81%841" }
];
SOURCES["〜まで (jusqu'à ce que)"] = [
  { nom: "Bunpro", page: "Verb + まで (JLPT N5)", url: "https://bunpro.jp/grammar_points/v-%E3%81%BE%E3%81%A7" }
];
SOURCES["〜にする"] = [
  { nom: "Bunpro", page: "にする (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%99%E3%82%8B" }
];
SOURCES["何か / 何も"] = [
  { nom: "Bunpro", page: "なにか・なにも (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%AB%E3%81%8B-%E3%81%AA%E3%81%AB%E3%82%82" }
];
SOURCES["誰か / どこか / 誰も / どこも"] = [
  { nom: "Bunpro", page: "誰か・どこか・誰も・どこも (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E8%AA%B0%E3%81%8B-%E3%81%A9%E3%81%93%E3%81%8B-%E8%AA%B0%E3%82%82-%E3%81%A9%E3%81%93%E3%82%82" }
];
SOURCES["〜ましょうか"] = [
  { nom: "Bunpro", page: "～ましょうか (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%BE%E3%81%97%E3%82%87%E3%81%86%E3%81%8B" }
];
SOURCES["〜くて / 〜で (relier des adjectifs)"] = [
  { nom: "Bunpro", page: "Adjective + て・Noun + で (JLPT N5)", url: "https://bunpro.jp/grammar_points/adjective-%E3%81%A6-noun-%E3%81%A7" }
];
SOURCES["Adjectif + のは"] = [
  { nom: "Bunpro", page: "Adjective + の(は) (JLPT N5)", url: "https://bunpro.jp/grammar_points/adjective-%E3%81%AE-%E3%81%AF" }
];
SOURCES["あげる / くれる / もらう"] = [
  { nom: "Bunpro", page: "あげる (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%82%E3%81%92%E3%82%8B" }
];
SOURCES["〜づらい"] = [
  { nom: "Bunpro", page: "づらい (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A5%E3%82%89%E3%81%84" }
];
SOURCES["だんだん"] = [
  { nom: "Bunpro", page: "だんだん (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A0%E3%82%93%E3%81%A0%E3%82%93" }
];
SOURCES["どんどん"] = [
  { nom: "Bunpro", page: "どんどん (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A9%E3%82%93%E3%81%A9%E3%82%93" }
];
SOURCES["〜ら"] = [
  { nom: "Bunpro", page: "～ら (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%82%89" }
];
SOURCES["〜だけで"] = [
  { nom: "Bunpro", page: "だけで (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A0%E3%81%91%E3%81%A7" }
];
SOURCES["だが / ですが"] = [
  { nom: "Bunpro", page: "だが・ですが (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A0%E3%81%8C%E3%83%BB%E3%81%A7%E3%81%99%E3%81%8C" }
];
SOURCES["〜なくて"] = [
  { nom: "Bunpro", page: "なくて (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%8F%E3%81%A6-conjunction" }
];
SOURCES["Verbes transitifs et intransitifs"] = [
  { nom: "Bunpro", page: "他動詞・自動詞 (JLPT N4)", url: "https://bunpro.jp/grammar_points/transitive-intransitive-verbs" }
];
SOURCES["〜ということ"] = [
  { nom: "Bunpro", page: "ということ (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8" }
];
SOURCES["まず"] = [
  { nom: "Bunpro", page: "まず (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%BE%E3%81%9A" }
];
SOURCES["また"] = [
  { nom: "Bunpro", page: "また (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%BE%E3%81%9F" }
];
SOURCES["〜ごろ / 〜ころ"] = [
  { nom: "Bunpro", page: "ごろ (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%94%E3%82%8D" }
];
SOURCES["〜あとで"] = [
  { nom: "Bunpro", page: "あとで (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%82%E3%81%A8%E3%81%A7" }
];
SOURCES["〜ていた"] = [
  { nom: "Bunpro", page: "ていた  (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%84%E3%81%9F" }
];
SOURCES["に (fréquence)"] = [
  { nom: "Bunpro", page: "に (Frequency) (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AB-frequency" }
];
SOURCES["とうとう"] = [
  { nom: "Bunpro", page: "とうとう (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%86%E3%81%A8%E3%81%86" }
];
SOURCES["〜ごとに"] = [
  { nom: "Bunpro", page: "ごとに (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%94%E3%81%A8%E3%81%AB" }
];
SOURCES["なるべく"] = [
  { nom: "Bunpro", page: "なるべく (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%82%8B%E3%81%B9%E3%81%8F" }
];
SOURCES["〜など"] = [
  { nom: "Bunpro", page: "など (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%A9" }
];
SOURCES["こういう / そういう / ああいう / どういう"] = [
  { nom: "Bunpro", page: "そういう (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%81%86%E3%81%84%E3%81%86" }
];
SOURCES["あまり〜ない"] = [
  { nom: "Bunpro", page: "あまり～ない (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%82%E3%81%BE%E3%82%8A-%E3%81%AA%E3%81%84" }
];
SOURCES["〜をしている (porter, avoir)"] = [
  { nom: "Bunpro", page: "する (Have/Wear) (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%99%E3%82%8B-wear" }
];
SOURCES["〜くする / 〜にする (rendre)"] = [
  { nom: "Bunpro", page: "～にする・～くする (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%99%E3%82%8B-%E3%81%8F%E3%81%99%E3%82%8B" }
];
SOURCES["〜くは"] = [
  { nom: "Bunpro", page: "くは (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%8F%E3%81%AF" }
];
SOURCES["〜といい"] = [
  { nom: "Bunpro", page: "といい (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%84%E3%81%84" }
];
SOURCES["毎〜のように"] = [
  { nom: "Bunpro", page: "まい～のように (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%BE%E3%81%84-%E3%81%AE%E3%82%88%E3%81%86%E3%81%AB" }
];
SOURCES["〜じゃないか"] = [
  { nom: "Bunpro", page: "じゃないか (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%98%E3%82%83%E3%81%AA%E3%81%84%E3%81%8B" }
];
SOURCES["〜と聞いた"] = [
  { nom: "Bunpro", page: "ときいた (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%8D%E3%81%84%E3%81%9F" }
];
SOURCES["聞こえる"] = [
  { nom: "Bunpro", page: "聞こえる (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E8%81%9E%E3%81%93%E3%81%88%E3%82%8B" }
];
SOURCES["見える"] = [
  { nom: "Bunpro", page: "見える (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E8%A6%8B%E3%81%88%E3%82%8B" }
];
SOURCES["〜代"] = [
  { nom: "Bunpro", page: "～代 (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E4%BB%A3" }
];
SOURCES["かかる (temps, argent)"] = [
  { nom: "Bunpro", page: "かかる (Time/Price) (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%81%8B%E3%82%8B-time-cost" }
];
SOURCES["する (prix)"] = [
  { nom: "Bunpro", page: "する (Cost) (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%99%E3%82%8B-cost" }
];
SOURCES["Nombre + も"] = [
  { nom: "Bunpro", page: "Number + も (JLPT N4)", url: "https://bunpro.jp/grammar_points/number-%E3%82%82" }
];
SOURCES["ほとんど"] = [
  { nom: "Bunpro", page: "ほとんど (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%BB%E3%81%A8%E3%82%93%E3%81%A9" }
];
SOURCES["こんな / そんな / あんな / どんな"] = [
  { nom: "Bunpro", page: "そんな・こんな・あんな・どんな (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%82%93%E3%81%AA-%E3%81%93%E3%82%93%E3%81%AA-%E3%81%82%E3%82%93%E3%81%AA-%E3%81%A9%E3%82%93%E3%81%AA" }
];
SOURCES["各〜"] = [
  { nom: "Bunpro", page: "各 (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E5%90%84" }
];
SOURCES["〜の次に"] = [
  { nom: "Bunpro", page: "の次に (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AE%E6%AC%A1%E3%81%AB" }
];
SOURCES["〜以上 (quantité)"] = [
  { nom: "Bunpro", page: "以上 ① (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E4%BB%A5%E4%B8%8A1" }
];
SOURCES["〜以下"] = [
  { nom: "Bunpro", page: "いか (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%84%E3%81%8B" }
];
SOURCES["〜以外"] = [
  { nom: "Bunpro", page: "いがい (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%84%E3%81%8C%E3%81%84" }
];
SOURCES["ずっと"] = [
  { nom: "Bunpro", page: "ずっと ① (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%9A%E3%81%A3%E3%81%A81" }
];
SOURCES["だいたい"] = [
  { nom: "Bunpro", page: "だいたい (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A0%E3%81%84%E3%81%9F%E3%81%84" }
];
SOURCES["〜の中で"] = [
  { nom: "Bunpro", page: "のなかで (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AE%E3%81%AA%E3%81%8B%E3%81%A7" }
];
SOURCES["Quantité + は"] = [
  { nom: "Bunpro", page: "Number/Amount + は (JLPT N4)", url: "https://bunpro.jp/grammar_points/number-amount-%E3%81%AF" }
];
SOURCES["何 + compteur + か"] = [
  { nom: "Bunpro", page: "なん + counter + か (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%82%93-counter-%E3%81%8B" }
];
SOURCES["真っ〜"] = [
  { nom: "Bunpro", page: "真(っ) (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E7%9C%9F(%E3%81%A3)" }
];
SOURCES["〜は〜の一つだ"] = [
  { nom: "Bunpro", page: "～は～の一つだ (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AF-%E3%81%AE%E4%B8%80%E3%81%A4%E3%81%A0" }
];
SOURCES["〜ない〜はない"] = [
  { nom: "Bunpro", page: "～ない～はない (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%84-%E3%81%AF%E3%81%AA%E3%81%84" }
];
SOURCES["少しも〜ない"] = [
  { nom: "Bunpro", page: "すこしも～ない (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%99%E3%81%93%E3%81%97%E3%82%82-%E3%81%AA%E3%81%84" }
];
SOURCES["〜は少なくない"] = [
  { nom: "Bunpro", page: "すくなくない (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%99%E3%81%8F%E3%81%AA%E3%81%8F%E3%81%AA%E3%81%84" }
];
SOURCES["〜場合は"] = [
  { nom: "Bunpro", page: "ばあいは (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%B0%E3%81%82%E3%81%84%E3%81%AF" }
];
SOURCES["〜て (demande familière)"] = [
  { nom: "Bunpro", page: "Verb[て] (JLPT N4)", url: "https://bunpro.jp/grammar_points/verb%E3%81%A6-request" }
];
SOURCES["〜てよかった"] = [
  { nom: "Bunpro", page: "てよかった (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%82%88%E3%81%8B%E3%81%A3%E3%81%9F" }
];
SOURCES["〜と言ってもいい"] = [
  { nom: "Bunpro", page: "といってもいい (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%84%E3%81%A3%E3%81%A6%E3%82%82%E3%81%84%E3%81%84" }
];
SOURCES["〜て (cause)"] = [
  { nom: "Bunpro", page: "Verb[て] + B (JLPT N4)", url: "https://bunpro.jp/grammar_points/verb%E3%81%A6-b2" }
];
SOURCES["〜て / 〜で (moyen, manière)"] = [
  { nom: "Bunpro", page: "Verb[て]・Noun[で] + B (JLPT N4)", url: "https://bunpro.jp/grammar_points/verb-%E3%81%A6-noun-%E3%81%A7-b" }
];
SOURCES["〜てすみません"] = [
  { nom: "Bunpro", page: "てすみません (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%99%E3%81%BF%E3%81%BE%E3%81%9B%E3%82%93" }
];
SOURCES["〜てくれてありがとう"] = [
  { nom: "Bunpro", page: "てくれてありがとう (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%8F%E3%82%8C%E3%81%A6%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86" }
];
SOURCES["〜てくれない？ / 〜てもらえない？"] = [
  { nom: "Bunpro", page: "てくれない・てもらえない (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%8F%E3%82%8C%E3%81%AA%E3%81%84-%E3%81%A6%E3%82%82%E3%82%89%E3%81%88%E3%81%AA%E3%81%84" }
];
SOURCES["〜のだろうか"] = [
  { nom: "Bunpro", page: "～のだろうか (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AE%E3%81%A0%E3%82%8D%E3%81%86%E3%81%8B" }
];
SOURCES["〜ていただけませんか"] = [
  { nom: "Bunpro", page: "ていただけませんか (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%91%E3%81%BE%E3%81%9B%E3%82%93%E3%81%8B" }
];
SOURCES["ほかに"] = [
  { nom: "Bunpro", page: "ほかに(も)・ほか(に)は (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%BB%E3%81%8B%E3%81%AB%E3%82%82-%E3%81%BB%E3%81%8B%E3%81%AB%E3%81%AF" }
];
SOURCES["〜が必要"] = [
  { nom: "Bunpro", page: "がひつよう (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%8C%E3%81%B2%E3%81%A4%E3%82%88%E3%81%86" }
];
SOURCES["〜必要がある"] = [
  { nom: "Bunpro", page: "ひつようがある (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%B2%E3%81%A4%E3%82%88%E3%81%86%E3%81%8C%E3%81%82%E3%82%8B" }
];
SOURCES["そんなに"] = [
  { nom: "Bunpro", page: "そんなに (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%82%93%E3%81%AA%E3%81%AB" }
];
SOURCES["例えば"] = [
  { nom: "Bunpro", page: "たとえば (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%81%A8%E3%81%88%E3%81%B0" }
];
SOURCES["〜んだけど / 〜んですが"] = [
  { nom: "Bunpro", page: "んだけど・んですが (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%82%93%E3%81%A0%E3%81%91%E3%81%A9-%E3%82%93%E3%81%A7%E3%81%99%E3%81%8C" }
];
SOURCES["〜ないと"] = [
  { nom: "Bunpro", page: "ないと (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%84%E3%81%A8" }
];
SOURCES["〜かい"] = [
  { nom: "Bunpro", page: "かい (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%81%84" }
];
SOURCES["もし"] = [
  { nom: "Bunpro", page: "もし (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%82%82%E3%81%97" }
];
SOURCES["〜でできる / 〜からできる"] = [
  { nom: "Bunpro", page: "でできる・からできる (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A7%E3%81%A7%E3%81%8D%E3%82%8B-%E3%81%8B%E3%82%89%E3%81%A7%E3%81%8D%E3%82%8B" }
];
SOURCES["〜と〜と、どちらが"] = [
  { nom: "Bunpro", page: "と～と、どちらが  (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A8-%E3%81%A8-%E3%81%A9%E3%81%A1%E3%82%89%E3%81%8C" }
];
SOURCES["〜ように言う"] = [
  { nom: "Bunpro", page: "ようにいう (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%82%88%E3%81%86%E3%81%AB%E3%81%84%E3%81%86" }
];
SOURCES["〜予定だ"] = [
  { nom: "Bunpro", page: "よていだ (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%82%88%E3%81%A6%E3%81%84%E3%81%A0" }
];
SOURCES["〜ように祈る"] = [
  { nom: "Bunpro", page: "ようにいのる (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%82%88%E3%81%86%E3%81%AB%E3%81%84%E3%81%AE%E3%82%8B" }
];
SOURCES["〜化する"] = [
  { nom: "Bunpro", page: "化する (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E5%8C%96%E3%81%99%E3%82%8B" }
];
SOURCES["〜かしら"] = [
  { nom: "Bunpro", page: "かしら (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%81%97%E3%82%89" }
];
SOURCES["〜って感じ"] = [
  { nom: "Bunpro", page: "って感じ (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A3%E3%81%A6%E6%84%9F%E3%81%98" }
];
SOURCES["〜に見える"] = [
  { nom: "Bunpro", page: "にみえる (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%BF%E3%81%88%E3%82%8B" }
];
SOURCES["〜と見える"] = [
  { nom: "Bunpro", page: "とみえる (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%BF%E3%81%88%E3%82%8B" }
];
SOURCES["〜風"] = [
  { nom: "Bunpro", page: "風 (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E9%A2%A8" }
];
SOURCES["〜が見られる"] = [
  { nom: "Bunpro", page: "がみられる (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%8C%E3%81%BF%E3%82%89%E3%82%8C%E3%82%8B" }
];
SOURCES["〜に気がつく"] = [
  { nom: "Bunpro", page: "にきがつく (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%8D%E3%81%8C%E3%81%A4%E3%81%8F" }
];
SOURCES["〜ても〜ても / 〜でも〜でも"] = [
  { nom: "Bunpro", page: "〜でも 〜でも (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A7%E3%82%82-%E3%81%A7%E3%82%82" }
];
SOURCES["それに"] = [
  { nom: "Bunpro", page: "それに (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%82%8C%E3%81%AB" }
];
SOURCES["それで"] = [
  { nom: "Bunpro", page: "それで (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%82%8C%E3%81%A7" }
];
SOURCES["それでも"] = [
  { nom: "Bunpro", page: "それでも (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%82%8C%E3%81%A7%E3%82%82" }
];
SOURCES["〜たらどう"] = [
  { nom: "Bunpro", page: "たらどう (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%82%89%E3%81%A9%E3%81%86" }
];
SOURCES["〜と考えられている"] = [
  { nom: "Bunpro", page: "とかんがえられている (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%8B%E3%82%93%E3%81%8C%E3%81%88%E3%82%89%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B" }
];
SOURCES["〜とされている"] = [
  { nom: "Bunpro", page: "とされている (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B" }
];
SOURCES["〜と言われている"] = [
  { nom: "Bunpro", page: "といわれている (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%84%E3%82%8F%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B" }
];
SOURCES["〜ばいい / 〜たらいい"] = [
  { nom: "Bunpro", page: "ばいい (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%B0%E3%81%84%E3%81%84" }
];
SOURCES["〜中 / 〜中"] = [
  { nom: "Bunpro", page: "中 (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E4%B8%AD" }
];
SOURCES["〜あまり"] = [
  { nom: "Bunpro", page: "あまり (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%82%E3%81%BE%E3%82%8A" }
];
SOURCES["すると / そうすると"] = [
  { nom: "Bunpro", page: "すると (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%99%E3%82%8B%E3%81%A8" }
];
SOURCES["〜のは〜の方だ"] = [
  { nom: "Bunpro", page: "のはXの方だ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AE%E3%81%AFx%E3%81%AE%E6%96%B9%E3%81%A0" }
];
SOURCES["〜型"] = [
  { nom: "Bunpro", page: "Noun＋型 (JLPT N3)", url: "https://bunpro.jp/grammar_points/noun-%E5%9E%8B" }
];
SOURCES["〜てごらん"] = [
  { nom: "Bunpro", page: "てごらん (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%94%E3%82%89%E3%82%93" }
];
SOURCES["Particule + の"] = [
  { nom: "Bunpro", page: "Particle + の (JLPT N3)", url: "https://bunpro.jp/grammar_points/particle-%E3%81%AE" }
];
SOURCES["〜である"] = [
  { nom: "Bunpro", page: "である (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A7%E3%81%82%E3%82%8B" }
];
SOURCES["ところで"] = [
  { nom: "Bunpro", page: "ところで (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%93%E3%82%8D%E3%81%A7" }
];
SOURCES["では / それでは / じゃあ"] = [
  { nom: "Bunpro", page: "では・それでは・じゃあ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A7%E3%81%AF-%E3%81%9D%E3%82%8C%E3%81%A7%E3%81%AF-%E3%81%98%E3%82%83%E3%81%82" }
];
SOURCES["〜のに (pour)"] = [
  { nom: "Bunpro", page: "のに (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AE%E3%81%AB" }
];
SOURCES["〜というのは"] = [
  { nom: "Bunpro", page: "というのは (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%81%AF" }
];
SOURCES["〜的"] = [
  { nom: "Bunpro", page: "的 (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E7%9A%84" }
];
SOURCES["〜上で"] = [
  { nom: "Bunpro", page: "上で (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E4%B8%8A%E3%81%A7" }
];
SOURCES["〜に基づいて"] = [
  { nom: "Bunpro", page: "にもとづいて (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%82%82%E3%81%A8%E3%81%A5%E3%81%84%E3%81%A6" }
];
SOURCES["〜点"] = [
  { nom: "Bunpro", page: "点 (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E7%82%B9" }
];
SOURCES["なぜなら〜から"] = [
  { nom: "Bunpro", page: "なぜなら〜から (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%9C%E3%81%AA%E3%82%89-%E3%81%8B%E3%82%89" }
];
SOURCES["〜からこそ"] = [
  { nom: "Bunpro", page: "からこそ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%82%89%E3%81%93%E3%81%9D" }
];
SOURCES["〜ばかりだ"] = [
  { nom: "Bunpro", page: "ばかりだ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%B0%E3%81%8B%E3%82%8A%E3%81%A0" }
];
SOURCES["〜ばかりに"] = [
  { nom: "Bunpro", page: "ばかりに (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%B0%E3%81%8B%E3%82%8A%E3%81%AB" }
];
SOURCES["〜ことがある"] = [
  { nom: "Bunpro", page: "ことがある (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%93%E3%81%A8%E3%81%8C%E3%81%82%E3%82%8B" }
];
SOURCES["〜ということなのだ"] = [
  { nom: "Bunpro", page: "ことなの (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%93%E3%81%A8%E3%81%AA%E3%81%AE" }
];
SOURCES["〜は〜で有名"] = [
  { nom: "Bunpro", page: "～は～で有名 (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AF-%E3%81%A7%E6%9C%89%E5%90%8D" }
];
SOURCES["〜に合わせて"] = [
  { nom: "Bunpro", page: "に合わせて・に合った (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E5%90%88%E3%82%8F%E3%81%9B%E3%81%A6-%E3%81%AB%E5%90%88%E3%81%A3%E3%81%9F" }
];
SOURCES["〜姿"] = [
  { nom: "Bunpro", page: "～(の)姿 (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AE%E5%A7%BF" }
];
SOURCES["〜と言える"] = [
  { nom: "Bunpro", page: "と言える (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E8%A8%80%E3%81%88%E3%82%8B" }
];
SOURCES["ちゃんと / きちんと"] = [
  { nom: "Bunpro", page: "ちゃんと・きちんと (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A1%E3%82%83%E3%82%93%E3%81%A8-%E3%81%8D%E3%81%A1%E3%82%93%E3%81%A8" }
];
SOURCES["そのため(に)"] = [
  { nom: "Bunpro", page: "そのため(に) (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%81%AE%E3%81%9F%E3%82%81-%E3%81%AB" }
];
SOURCES["どんなに〜ても / いくら〜ても"] = [
  { nom: "Bunpro", page: "どんなに〜ても (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A9%E3%82%93%E3%81%AA%E3%81%AB-%E3%81%A6%E3%82%82" }
];
SOURCES["〜かは〜によって違う"] = [
  { nom: "Bunpro", page: "〜かは〜によって違う (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%81%AF-%E3%81%AB%E3%82%88%E3%81%A3%E3%81%A6%E9%81%95%E3%81%86" }
];
SOURCES["かなり"] = [
  { nom: "Bunpro", page: "かなり (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%81%AA%E3%82%8A" }
];
SOURCES["あまりに(も)"] = [
  { nom: "Bunpro", page: "あまりに (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%82%E3%81%BE%E3%82%8A%E3%81%AB" }
];
SOURCES["〜と同時に"] = [
  { nom: "Bunpro", page: "と同時に (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E5%90%8C%E6%99%82%E3%81%AB" }
];
SOURCES["〜ところだった"] = [
  { nom: "Bunpro", page: "ところだった ① (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%93%E3%82%8D%E3%81%A0%E3%81%A3%E3%81%9F1" }
];
SOURCES["だって"] = [
  { nom: "Bunpro", page: "だって (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A0%E3%81%A3%E3%81%A6" }
];
SOURCES["〜んだって"] = [
  { nom: "Bunpro", page: "んだって (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%82%93%E3%81%A0%E3%81%A3%E3%81%A6" }
];
SOURCES["〜に関係がある"] = [
  { nom: "Bunpro", page: "関係がある (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E9%96%A2%E4%BF%82%E3%81%8C%E3%81%82%E3%82%8B" }
];
SOURCES["〜は〜くらいだ"] = [
  { nom: "Bunpro", page: "は～くらいです (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AF-%E3%81%8F%E3%82%89%E3%81%84%E3%81%A7%E3%81%99" }
];
SOURCES["さあ"] = [
  { nom: "Bunpro", page: "さ - Interjection (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%95-interjection" }
];
SOURCES["〜さ (dans la phrase)"] = [
  { nom: "Bunpro", page: "さ - Filler (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%95-filler" }
];
SOURCES["〜さ (fin de phrase)"] = [
  { nom: "Bunpro", page: "さ - Casual よ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%95-casual%E3%82%88" }
];
SOURCES["それぞれ"] = [
  { nom: "Bunpro", page: "それぞれ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%82%8C%E3%81%9E%E3%82%8C" }
];
SOURCES["そこで"] = [
  { nom: "Bunpro", page: "そこで (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%81%93%E3%81%A7" }
];
SOURCES["〜てもかまわない"] = [
  { nom: "Bunpro", page: "てもかまわない (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%82%82%E3%81%8B%E3%81%BE%E3%82%8F%E3%81%AA%E3%81%84" }
];
SOURCES["〜ても〜なくても"] = [
  { nom: "Bunpro", page: "～ても～なくても (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%82%82-%E3%81%AA%E3%81%8F%E3%81%A6%E3%82%82" }
];
SOURCES["〜んじゃない (interdiction)"] = [
  { nom: "Bunpro", page: "んじゃない (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%82%93%E3%81%98%E3%82%83%E3%81%AA%E3%81%84" }
];
SOURCES["〜としたら / 〜とすれば / 〜とすると"] = [
  { nom: "Bunpro", page: "としたら・とすれば・とすると (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%97%E3%81%9F%E3%82%89-%E3%81%A8%E3%81%99%E3%82%8C%E3%81%B0-%E3%81%A8%E3%81%99%E3%82%8B%E3%81%A8" }
];
SOURCES["〜にしては"] = [
  { nom: "Bunpro", page: "にしては (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%97%E3%81%A6%E3%81%AF" }
];
SOURCES["〜にしても"] = [
  { nom: "Bunpro", page: "にしても (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%97%E3%81%A6%E3%82%82" }
];
SOURCES["〜というのは事実だ"] = [
  { nom: "Bunpro", page: "～というのは事実だ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%81%AF%E4%BA%8B%E5%AE%9F%E3%81%A0" }
];
SOURCES["〜から言うと"] = [
  { nom: "Bunpro", page: "から言うと (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%82%89%E8%A8%80%E3%81%86%E3%81%A8" }
];
SOURCES["〜ことから"] = [
  { nom: "Bunpro", page: "ことから (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%93%E3%81%A8%E3%81%8B%E3%82%89" }
];
SOURCES["さて"] = [
  { nom: "Bunpro", page: "さて (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%95%E3%81%A6" }
];
SOURCES["むしろ"] = [
  { nom: "Bunpro", page: "むしろ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%82%80%E3%81%97%E3%82%8D" }
];
SOURCES["つまり"] = [
  { nom: "Bunpro", page: "つまり (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A4%E3%81%BE%E3%82%8A" }
];
SOURCES["すなわち"] = [
  { nom: "Bunpro", page: "即ち (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E5%8D%B3%E3%81%A1" }
];
SOURCES["かえって"] = [
  { nom: "Bunpro", page: "却って (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E5%8D%B4%E3%81%A3%E3%81%A6" }
];
SOURCES["〜ような気がする"] = [
  { nom: "Bunpro", page: "ような気がする (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%82%88%E3%81%86%E3%81%AA%E6%B0%97%E3%81%8C%E3%81%99%E3%82%8B" }
];
SOURCES["とても〜ない"] = [
  { nom: "Bunpro", page: "とても～ない (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%A6%E3%82%82-%E3%81%AA%E3%81%84" }
];
SOURCES["別に〜ない"] = [
  { nom: "Bunpro", page: "別に〜ない (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E5%88%A5%E3%81%AB-%E3%81%AA%E3%81%84" }
];
SOURCES["〜ではなくて / 〜じゃなくて"] = [
  { nom: "Bunpro", page: "ではなくて・じゃなくて (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%8F%E3%81%A6-%E3%81%98%E3%82%83%E3%81%AA%E3%81%8F%E3%81%A6" }
];
SOURCES["〜だけしか〜ない"] = [
  { nom: "Bunpro", page: "だけしか (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A0%E3%81%91%E3%81%97%E3%81%8B" }
];
SOURCES["〜は言うまでもない"] = [
  { nom: "Bunpro", page: "は言うまでもない ① (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AF%E8%A8%80%E3%81%86%E3%81%BE%E3%81%A7%E3%82%82%E3%81%AA%E3%81%841" }
];
SOURCES["〜ようとしない"] = [
  { nom: "Bunpro", page: "〜ようとしない (JLPT N3)", url: "https://bunpro.jp/grammar_points/-%E3%82%88%E3%81%86%E3%81%A8%E3%81%97%E3%81%AA%E3%81%84" }
];
SOURCES["もしかしたら / もしかして"] = [
  { nom: "Bunpro", page: "もしかしたら (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%82%82%E3%81%97%E3%81%8B%E3%81%97%E3%81%9F%E3%82%89" }
];
SOURCES["〜ことに"] = [
  { nom: "Bunpro", page: "ことに (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%93%E3%81%A8%E3%81%AB" }
];
SOURCES["〜ことか"] = [
  { nom: "Bunpro", page: "ことか (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%93%E3%81%A8%E3%81%8B" }
];
SOURCES["〜かというと"] = [
  { nom: "Bunpro", page: "～かというと ① (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%A81" }
];
SOURCES["〜で言うと"] = [
  { nom: "Bunpro", page: "で言うと (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A7%E8%A8%80%E3%81%86%E3%81%A8" }
];
SOURCES["〜ずつ"] = [
  { nom: "Bunpro", page: "～ずつ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%9A%E3%81%A4" }
];
SOURCES["ずっと (de loin)"] = [
  { nom: "Bunpro", page: "ずっと ② (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%9A%E3%81%A3%E3%81%A82" }
];
SOURCES["もっとも"] = [
  { nom: "Bunpro", page: "もっとも (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%82%82%E3%81%A3%E3%81%A8%E3%82%82" }
];
SOURCES["再び"] = [
  { nom: "Bunpro", page: "再び (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E5%86%8D%E3%81%B3" }
];
SOURCES["〜み"] = [
  { nom: "Bunpro", page: "み (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%BF" }
];
SOURCES["〜と同じくらい"] = [
  { nom: "Bunpro", page: "と同じくらい (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E5%90%8C%E3%81%98%E3%81%8F%E3%82%89%E3%81%84" }
];
SOURCES["〜と同じで / 〜と違って"] = [
  { nom: "Bunpro", page: "と同じで・と違って (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E5%90%8C%E3%81%98%E3%81%A7-%E3%81%A8%E9%81%95%E3%81%A3%E3%81%A6" }
];
SOURCES["〜と並んで"] = [
  { nom: "Bunpro", page: "と並んで (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E4%B8%A6%E3%82%93%E3%81%A7" }
];
SOURCES["〜当たり"] = [
  { nom: "Bunpro", page: "当たり (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E5%BD%93%E3%81%9F%E3%82%8A" }
];
SOURCES["〜に当たる"] = [
  { nom: "Bunpro", page: "に当たる (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E5%BD%93%E3%81%9F%E3%82%8B" }
];
SOURCES["〜に限る"] = [
  { nom: "Bunpro", page: "に限る (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E9%99%90%E3%82%8B" }
];
SOURCES["〜わりに"] = [
  { nom: "Bunpro", page: "割に (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%82%8F%E3%82%8A%E3%81%AB" }
];
SOURCES["〜そうもない"] = [
  { nom: "Bunpro", page: "そうもない (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%81%86%E3%82%82%E3%81%AA%E3%81%84" }
];
SOURCES["〜ないことはない"] = [
  { nom: "Bunpro", page: "ないことはない (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%84%E3%81%93%E3%81%A8%E3%81%AF%E3%81%AA%E3%81%84" }
];
SOURCES["〜と共に"] = [
  { nom: "Bunpro", page: "と共に (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E5%85%B1%E3%81%AB" }
];
SOURCES["直ちに"] = [
  { nom: "Bunpro", page: "直ちに (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E7%9B%B4%E3%81%A1%E3%81%AB" }
];
SOURCES["〜おきに"] = [
  { nom: "Bunpro", page: "おきに (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%8A%E3%81%8D%E3%81%AB" }
];
SOURCES["あるいは"] = [
  { nom: "Bunpro", page: "あるいは (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%82%E3%82%8B%E3%81%84%E3%81%AF" }
];
SOURCES["〜ながらも"] = [
  { nom: "Bunpro", page: "ながらも (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%8C%E3%82%89%E3%82%82" }
];
SOURCES["第一"] = [
  { nom: "Bunpro", page: "第一 (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E7%AC%AC%E4%B8%80" }
];
SOURCES["ますます"] = [
  { nom: "Bunpro", page: "ますます (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%BE%E3%81%99%E3%81%BE%E3%81%99" }
];
SOURCES["ついに"] = [
  { nom: "Bunpro", page: "遂に (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E9%81%82%E3%81%AB" }
];
SOURCES["すでに"] = [
  { nom: "Bunpro", page: "すでに (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%99%E3%81%A7%E3%81%AB" }
];
SOURCES["〜ずにはいられない"] = [
  { nom: "Bunpro", page: "ずにはいられない (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%9A%E3%81%AB%E3%81%AF%E3%81%84%E3%82%89%E3%82%8C%E3%81%AA%E3%81%84" }
];
SOURCES["〜なし"] = [
  { nom: "Bunpro", page: "なし (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%97" }
];
SOURCES["〜あり"] = [
  { nom: "Bunpro", page: "あり (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%82%E3%82%8A" }
];
SOURCES["〜は考えられない"] = [
  { nom: "Bunpro", page: "考えられない (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E8%80%83%E3%81%88%E3%82%89%E3%82%8C%E3%81%AA%E3%81%84" }
];
SOURCES["必ずしも〜ない"] = [
  { nom: "Bunpro", page: "必ずしも  (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E5%BF%85%E3%81%9A%E3%81%97%E3%82%82" }
];
SOURCES["Forme conjonctive (連用形)"] = [
  { nom: "Bunpro", page: "連用形 (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E9%80%A3%E7%94%A8%E5%BD%A2" }
];
SOURCES["〜上がる / 〜上げる"] = [
  { nom: "Bunpro", page: "上がる・上げる (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E4%B8%8A%E3%81%8C%E3%82%8B-%E4%B8%8A%E3%81%92%E3%82%8B" }
];
SOURCES["〜切れない"] = [
  { nom: "Bunpro", page: "切れない (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E5%88%87%E3%82%8C%E3%81%AA%E3%81%84" }
];
SOURCES["〜きり"] = [
  { nom: "Bunpro", page: "きり (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%8D%E3%82%8A" }
];
SOURCES["〜たて"] = [
  { nom: "Bunpro", page: "たて (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%81%A6" }
];
SOURCES["できれば / できたら"] = [
  { nom: "Bunpro", page: "できれば・できたら (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A7%E3%81%8D%E3%82%8C%E3%81%B0-%E3%81%A7%E3%81%8D%E3%81%9F%E3%82%89" }
];
SOURCES["〜でよければ"] = [
  { nom: "Bunpro", page: "でよければ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A7%E3%82%88%E3%81%91%E3%82%8C%E3%81%B0" }
];
SOURCES["〜次第"] = [
  { nom: "Bunpro", page: "次第 (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E6%AC%A1%E7%AC%AC" }
];
SOURCES["〜でもある"] = [
  { nom: "Bunpro", page: "でもある (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A7%E3%82%82%E3%81%82%E3%82%8B" }
];
SOURCES["どうしても"] = [
  { nom: "Bunpro", page: "どうしても (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A9%E3%81%86%E3%81%97%E3%81%A6%E3%82%82" }
];
SOURCES["〜同士"] = [
  { nom: "Bunpro", page: "同士 (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E5%90%8C%E5%A3%AB" }
];
SOURCES["〜がたい"] = [
  { nom: "Bunpro", page: "がたい (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%8C%E3%81%9F%E3%81%84" }
];
SOURCES["まさか"] = [
  { nom: "Bunpro", page: "まさか (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%BE%E3%81%95%E3%81%8B" }
];
SOURCES["前者は〜後者は"] = [
  { nom: "Bunpro", page: "前者は・後者は (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E5%89%8D%E8%80%85%E3%81%AF-%E5%BE%8C%E8%80%85%E3%81%AF" }
];
SOURCES["つい"] = [
  { nom: "Bunpro", page: "つい (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A4%E3%81%84" }
];
SOURCES["わざわざ"] = [
  { nom: "Bunpro", page: "わざわざ (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%82%8F%E3%81%96%E3%82%8F%E3%81%96" }
];
SOURCES["一体"] = [
  { nom: "Bunpro", page: "一体 (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E4%B8%80%E4%BD%93" }
];
SOURCES["せっかく"] = [
  { nom: "Bunpro", page: "折角 (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%9B%E3%81%A3%E3%81%8B%E3%81%8F" }
];
SOURCES["〜に代わって"] = [
  { nom: "Bunpro", page: "に代わって (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E4%BB%A3%E3%82%8F%E3%81%A3%E3%81%A6" }
];
SOURCES["〜どころか"] = [
  { nom: "Bunpro", page: "どころか (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A9%E3%81%93%E3%82%8D%E3%81%8B" }
];
SOURCES["〜という理由で"] = [
  { nom: "Bunpro", page: "という理由で (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%84%E3%81%86%E7%90%86%E7%94%B1%E3%81%A7" }
];
SOURCES["〜となっている"] = [
  { nom: "Bunpro", page: "～は～となっている (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AF-%E3%81%A8%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B" }
];
SOURCES["〜を左右する"] = [
  { nom: "Bunpro", page: "左右する (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E5%B7%A6%E5%8F%B3%E3%81%99%E3%82%8B" }
];
SOURCES["〜得る / 〜得ない"] = [
  { nom: "Bunpro", page: "得る・得る (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E5%BE%97%E3%82%8B-%E5%BE%97%E3%82%8B" }
];
SOURCES["〜ざるを得ない"] = [
  { nom: "Bunpro", page: "ざるを得ない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%96%E3%82%8B%E3%82%92%E5%BE%97%E3%81%AA%E3%81%84" }
];
SOURCES["〜ざる"] = [
  { nom: "Bunpro", page: "～ざる (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%96%E3%82%8B" }
];
SOURCES["〜つもりで"] = [
  { nom: "Bunpro", page: "つもりで (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A4%E3%82%82%E3%82%8A%E3%81%A7" }
];
SOURCES["どうせ"] = [
  { nom: "Bunpro", page: "どうせ (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A9%E3%81%86%E3%81%9B" }
];
SOURCES["せめて"] = [
  { nom: "Bunpro", page: "せめて (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%9B%E3%82%81%E3%81%A6" }
];
SOURCES["どうやら"] = [
  { nom: "Bunpro", page: "どうやら (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A9%E3%81%86%E3%82%84%E3%82%89" }
];
SOURCES["何やら"] = [
  { nom: "Bunpro", page: "なにやら (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%AB%E3%82%84%E3%82%89" }
];
SOURCES["〜よりほかない / 〜より仕方がない"] = [
  { nom: "Bunpro", page: "よりほかない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%82%88%E3%82%8A%E3%81%BB%E3%81%8B%E3%81%AA%E3%81%84" }
];
SOURCES["確かに"] = [
  { nom: "Bunpro", page: "確かに (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E7%A2%BA%E3%81%8B%E3%81%AB" }
];
SOURCES["一応"] = [
  { nom: "Bunpro", page: "一応 ① (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E4%B8%80%E5%BF%9C1" }
];
SOURCES["〜に相違ない"] = [
  { nom: "Bunpro", page: "に相違ない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E7%9B%B8%E9%81%95%E3%81%AA%E3%81%84" }
];
SOURCES["万が一"] = [
  { nom: "Bunpro", page: "万が一 (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E4%B8%87%E3%81%8C%E4%B8%80" }
];
SOURCES["〜ようがない"] = [
  { nom: "Bunpro", page: "ようがない・ようもない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%82%88%E3%81%86%E3%81%8C%E3%81%AA%E3%81%84%E3%83%BB%E3%82%88%E3%81%86%E3%82%82%E3%81%AA%E3%81%84" }
];
SOURCES["〜にほかならない"] = [
  { nom: "Bunpro", page: "にほかならない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%BB%E3%81%8B%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84" }
];
SOURCES["〜っこない"] = [
  { nom: "Bunpro", page: "っこない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A3%E3%81%93%E3%81%AA%E3%81%84" }
];
SOURCES["それなら"] = [
  { nom: "Bunpro", page: "それなら (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%82%8C%E3%81%AA%E3%82%89" }
];
SOURCES["〜ものなら"] = [
  { nom: "Bunpro", page: "ものなら① (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%82%82%E3%81%AE%E3%81%AA%E3%82%89%E2%91%A0" }
];
SOURCES["〜を〜に任せる"] = [
  { nom: "Bunpro", page: "～を～に任せる (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%82%92-%E3%81%AB%E4%BB%BB%E3%81%9B%E3%82%8B" }
];
SOURCES["〜を活かす"] = [
  { nom: "Bunpro", page: "活かす (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E6%B4%BB%E3%81%8B%E3%81%99" }
];
SOURCES["おおよそ / およそ"] = [
  { nom: "Bunpro", page: "おおよそ (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%8A%E3%81%8A%E3%82%88%E3%81%9D" }
];
SOURCES["〜まい"] = [
  { nom: "Bunpro", page: "まい (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%BE%E3%81%84" }
];
SOURCES["〜上"] = [
  { nom: "Bunpro", page: "上 (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E4%B8%8A" }
];
SOURCES["〜上に"] = [
  { nom: "Bunpro", page: "上に (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E4%B8%8A%E3%81%AB" }
];
SOURCES["〜以上 (puisque)"] = [
  { nom: "Bunpro", page: "以上 ② (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E4%BB%A5%E4%B8%8A2" }
];
SOURCES["〜以上に"] = [
  { nom: "Bunpro", page: "以上に (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E4%BB%A5%E4%B8%8A%E3%81%AB" }
];
SOURCES["〜途中で"] = [
  { nom: "Bunpro", page: "途中に・途中で (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E9%80%94%E4%B8%AD%E3%81%AB%E3%83%BB%E9%80%94%E4%B8%AD%E3%81%A7" }
];
SOURCES["〜中を"] = [
  { nom: "Bunpro", page: "中を (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E4%B8%AD%E3%82%92" }
];
SOURCES["〜のもとで"] = [
  { nom: "Bunpro", page: "の下で (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AE%E4%B8%8B%E3%81%A7" }
];
SOURCES["あと〜 (restant)"] = [
  { nom: "Bunpro", page: "後(の) Noun (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E5%BE%8C-%E3%81%AEnoun" }
];
SOURCES["〜手前"] = [
  { nom: "Bunpro", page: "手前 (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E6%89%8B%E5%89%8D" }
];
SOURCES["〜をめぐって"] = [
  { nom: "Bunpro", page: "を巡って (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E5%B7%A1%E3%81%A3%E3%81%A6" }
];
SOURCES["〜にわたって"] = [
  { nom: "Bunpro", page: "にわたって (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%82%8F%E3%81%9F%E3%81%A3%E3%81%A6" }
];
SOURCES["〜に沿って"] = [
  { nom: "Bunpro", page: "に沿って (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E6%B2%BF%E3%81%A3%E3%81%A6" }
];
SOURCES["〜た末 / 〜の末"] = [
  { nom: "Bunpro", page: "た末・の末 (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E6%9C%AB-%E3%81%AE%E6%9C%AB" }
];
SOURCES["〜にしたがって"] = [
  { nom: "Bunpro", page: "にしたがって (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%97%E3%81%9F%E3%81%8C%E3%81%A3%E3%81%A6" }
];
SOURCES["〜に伴って"] = [
  { nom: "Bunpro", page: "に伴って・に伴い (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E4%BC%B4%E3%81%A3%E3%81%A6-%E3%81%AB%E4%BC%B4%E3%81%84" }
];
SOURCES["〜につき"] = [
  { nom: "Bunpro", page: "につき (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%A4%E3%81%8D" }
];
SOURCES["〜につけ"] = [
  { nom: "Bunpro", page: "につけ (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%A4%E3%81%91" }
];
SOURCES["〜にかかわる"] = [
  { nom: "Bunpro", page: "にかかわる (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%8B%E3%81%8B%E3%82%8F%E3%82%8B" }
];
SOURCES["〜に向かって / 〜に向けて"] = [
  { nom: "Bunpro", page: "に向かって・に向けて (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E5%90%91%E3%81%8B%E3%81%A3%E3%81%A6-%E3%81%AB%E5%90%91%E3%81%91%E3%81%A6" }
];
SOURCES["〜が気になる"] = [
  { nom: "Bunpro", page: "が気になる (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%8C%E6%B0%97%E3%81%AB%E3%81%AA%E3%82%8B" }
];
SOURCES["〜に気をつける"] = [
  { nom: "Bunpro", page: "に気をつける (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E6%B0%97%E3%82%92%E3%81%A4%E3%81%91%E3%82%8B" }
];
SOURCES["〜もかまわず"] = [
  { nom: "Bunpro", page: "も構わず (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%82%82%E3%81%8B%E3%81%BE%E3%82%8F%E3%81%9A" }
];
SOURCES["〜かねる"] = [
  { nom: "Bunpro", page: "かねる (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%81%AD%E3%82%8B" }
];
SOURCES["〜かねない"] = [
  { nom: "Bunpro", page: "かねない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%81%AD%E3%81%AA%E3%81%84" }
];
SOURCES["〜を除いて"] = [
  { nom: "Bunpro", page: "を除いて (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E9%99%A4%E3%81%84%E3%81%A6" }
];
SOURCES["〜にかかわらず"] = [
  { nom: "Bunpro", page: "にかかわらず (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%8B%E3%81%8B%E3%82%8F%E3%82%89%E3%81%9A" }
];
SOURCES["〜にもかかわらず"] = [
  { nom: "Bunpro", page: "にもかかわらず (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%82%82%E3%81%8B%E3%81%8B%E3%82%8F%E3%82%89%E3%81%9A" }
];
SOURCES["〜に限って"] = [
  { nom: "Bunpro", page: "に限って (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E9%99%90%E3%81%A3%E3%81%A6" }
];
SOURCES["〜に限らず"] = [
  { nom: "Bunpro", page: "に限らず (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E9%99%90%E3%82%89%E3%81%9A" }
];
SOURCES["なお"] = [
  { nom: "Bunpro", page: "なお① (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%8A1" }
];
SOURCES["〜限り"] = [
  { nom: "Bunpro", page: "限り (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E9%99%90%E3%82%8A" }
];
SOURCES["〜次第だ / 〜次第で"] = [
  { nom: "Bunpro", page: "次第だ・次第で (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E6%AC%A1%E7%AC%AC%E3%81%A0-%E6%AC%A1%E7%AC%AC%E3%81%A7" }
];
SOURCES["次第に"] = [
  { nom: "Bunpro", page: "次第に (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E6%AC%A1%E7%AC%AC%E3%81%AB" }
];
SOURCES["〜てこそ"] = [
  { nom: "Bunpro", page: "～てこそ (JLPT N2)", url: "https://bunpro.jp/grammar_points/-%E3%81%A6%E3%81%93%E3%81%9D" }
];
SOURCES["〜を問わず"] = [
  { nom: "Bunpro", page: "を問わず (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E5%95%8F%E3%82%8F%E3%81%9A" }
];
SOURCES["〜に越したことはない"] = [
  { nom: "Bunpro", page: "に越したことはない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E8%B6%8A%E3%81%97%E3%81%9F%E3%81%93%E3%81%A8%E3%81%AF%E3%81%AA%E3%81%84" }
];
SOURCES["要するに"] = [
  { nom: "Bunpro", page: "要するに (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E8%A6%81%E3%81%99%E3%82%8B%E3%81%AB" }
];
SOURCES["〜てからでないと"] = [
  { nom: "Bunpro", page: "てからでないと (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%8B%E3%82%89%E3%81%A7%E3%81%AA%E3%81%84%E3%81%A8" }
];
SOURCES["〜なくはない"] = [
  { nom: "Bunpro", page: "なくはない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%8F%E3%81%AF%E3%81%AA%E3%81%84" }
];
SOURCES["〜ないことには〜ない"] = [
  { nom: "Bunpro", page: "ないことには～ない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%84%E3%81%93%E3%81%A8%E3%81%AB%E3%81%AF-%E3%81%AA%E3%81%84" }
];
SOURCES["〜ないではいられない"] = [
  { nom: "Bunpro", page: "ないではいられない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%84%E3%81%A7%E3%81%AF%E3%81%84%E3%82%89%E3%82%8C%E3%81%AA%E3%81%84" }
];
SOURCES["〜ねばならない"] = [
  { nom: "Bunpro", page: "ねばならない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AD%E3%81%B0%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84" }
];
SOURCES["〜たまえ"] = [
  { nom: "Bunpro", page: "たまえ (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%81%BE%E3%81%88" }
];
SOURCES["〜のうち(で)"] = [
  { nom: "Bunpro", page: "～のうち(で) (JLPT N2)", url: "https://bunpro.jp/grammar_points/-%E3%81%AE%E3%81%86%E3%81%A1-%E3%81%A7" }
];
SOURCES["〜つつ / 〜つつも"] = [
  { nom: "Bunpro", page: "つつ (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A4%E3%81%A4" }
];
SOURCES["〜に際して"] = [
  { nom: "Bunpro", page: "に際して (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E9%9A%9B%E3%81%97%E3%81%A6" }
];
SOURCES["〜にあたって"] = [
  { nom: "Bunpro", page: "にあたり・にあたって (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%82%E3%81%9F%E3%82%8A-%E3%81%AB%E3%81%82%E3%81%9F%E3%81%A3%E3%81%A6" }
];
SOURCES["〜を契機に"] = [
  { nom: "Bunpro", page: "を契機に (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E5%A5%91%E6%A9%9F%E3%81%AB" }
];
SOURCES["〜つつある"] = [
  { nom: "Bunpro", page: "つつある (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A4%E3%81%A4%E3%81%82%E3%82%8B" }
];
SOURCES["〜ところに / 〜ところへ"] = [
  { nom: "Bunpro", page: "～ところに・～ところへ (JLPT N2)", url: "https://bunpro.jp/grammar_points/%EF%BD%9E%E3%81%A8%E3%81%93%E3%82%8D%E3%81%AB%E3%83%BB%EF%BD%9E%E3%81%A8%E3%81%93%E3%82%8D%E3%81%B8" }
];
SOURCES["〜か〜ないかのうちに"] = [
  { nom: "Bunpro", page: "か〜ないかのうちに (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%8B-%E3%81%AA%E3%81%84%E3%81%8B%E3%81%AE%E3%81%86%E3%81%A1%E3%81%AB" }
];
SOURCES["〜がけに"] = [
  { nom: "Bunpro", page: "がけに (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%8C%E3%81%91%E3%81%AB" }
];
SOURCES["〜ていては"] = [
  { nom: "Bunpro", page: "ていては (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%84%E3%81%A6%E3%81%AF" }
];
SOURCES["〜どころではない"] = [
  { nom: "Bunpro", page: "どころではない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A9%E3%81%93%E3%82%8D%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84" }
];
SOURCES["〜ぶりに"] = [
  { nom: "Bunpro", page: "ぶりに (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%B6%E3%82%8A%E3%81%AB" }
];
SOURCES["〜ては"] = [
  { nom: "Bunpro", page: "ては (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%AF" }
];
SOURCES["〜もまた"] = [
  { nom: "Bunpro", page: "も又 (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%82%82%E5%8F%88" }
];
SOURCES["〜て以来"] = [
  { nom: "Bunpro", page: "以来 (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E4%BB%A5%E6%9D%A5" }
];
SOURCES["〜に先立って"] = [
  { nom: "Bunpro", page: "に先立ち (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E5%85%88%E7%AB%8B%E3%81%A1" }
];
SOURCES["果たして"] = [
  { nom: "Bunpro", page: "はたして (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AF%E3%81%9F%E3%81%97%E3%81%A6" }
];
SOURCES["〜かいがある"] = [
  { nom: "Bunpro", page: "甲斐がある (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E7%94%B2%E6%96%90%E3%81%8C%E3%81%82%E3%82%8B" }
];
SOURCES["やがて"] = [
  { nom: "Bunpro", page: "やがて (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%82%84%E3%81%8C%E3%81%A6" }
];
SOURCES["したがって"] = [
  { nom: "Bunpro", page: "したがって (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%97%E3%81%9F%E3%81%8C%E3%81%A3%E3%81%A6" }
];
SOURCES["〜あげく"] = [
  { nom: "Bunpro", page: "あげく (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%82%E3%81%92%E3%81%8F" }
];
SOURCES["〜をきっかけに"] = [
  { nom: "Bunpro", page: "きっかけ (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91" }
];
SOURCES["〜にかけては"] = [
  { nom: "Bunpro", page: "にかけては (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%8B%E3%81%91%E3%81%A6%E3%81%AF" }
];
SOURCES["とっくに"] = [
  { nom: "Bunpro", page: "とっくに (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%A3%E3%81%8F%E3%81%AB" }
];
SOURCES["いまだに"] = [
  { nom: "Bunpro", page: "未だに (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E6%9C%AA%E3%81%A0%E3%81%AB" }
];
SOURCES["〜をもとに"] = [
  { nom: "Bunpro", page: "をもとに (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E3%82%82%E3%81%A8%E3%81%AB" }
];
SOURCES["〜からには"] = [
  { nom: "Bunpro", page: "からには (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%82%89%E3%81%AB%E3%81%AF" }
];
SOURCES["いつの間にか"] = [
  { nom: "Bunpro", page: "いつの間にか (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%84%E3%81%A4%E3%81%AE%E9%96%93%E3%81%AB%E3%81%8B" }
];
SOURCES["一旦"] = [
  { nom: "Bunpro", page: "一旦 (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E4%B8%80%E6%97%A6" }
];
SOURCES["〜はもとより"] = [
  { nom: "Bunpro", page: "はもとより (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AF%E3%82%82%E3%81%A8%E3%82%88%E3%82%8A" }
];
SOURCES["〜に反して"] = [
  { nom: "Bunpro", page: "に反して (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E5%8F%8D%E3%81%97%E3%81%A6" }
];
SOURCES["逆に"] = [
  { nom: "Bunpro", page: "逆に (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E9%80%86%E3%81%AB" }
];
SOURCES["〜反面"] = [
  { nom: "Bunpro", page: "反面 (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E5%8F%8D%E9%9D%A2" }
];
SOURCES["〜抜く"] = [
  { nom: "Bunpro", page: "抜く (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E6%8A%9C%E3%81%8F" }
];
SOURCES["〜抜きで"] = [
  { nom: "Bunpro", page: "抜きで (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E6%8A%9C%E3%81%8D%E3%81%A7" }
];
SOURCES["いよいよ"] = [
  { nom: "Bunpro", page: "いよいよ (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%84%E3%82%88%E3%81%84%E3%82%88" }
];
SOURCES["〜ずに済む"] = [
  { nom: "Bunpro", page: "ずに済む (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%9A%E3%81%AB%E6%B8%88%E3%82%80" }
];
SOURCES["〜に応じて"] = [
  { nom: "Bunpro", page: "に応じて (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E5%BF%9C%E3%81%98%E3%81%A6" }
];
SOURCES["〜に応えて"] = [
  { nom: "Bunpro", page: "に応えて (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E5%BF%9C%E3%81%88%E3%81%A6" }
];
SOURCES["それとも"] = [
  { nom: "Bunpro", page: "それとも (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%82%8C%E3%81%A8%E3%82%82" }
];
SOURCES["〜にしたら / 〜にすれば"] = [
  { nom: "Bunpro", page: "にしたら (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%97%E3%81%9F%E3%82%89" }
];
SOURCES["〜にしても〜にしても / 〜にしろ〜にしろ"] = [
  { nom: "Bunpro", page: "にしても～にしても (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%97%E3%81%A6%E3%82%82-%E3%81%AB%E3%81%97%E3%81%A6%E3%82%82" }
];
SOURCES["〜にせよ / 〜にしろ"] = [
  { nom: "Bunpro", page: "にせよ・にしろ (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%9B%E3%82%88-%E3%81%AB%E3%81%97%E3%82%8D" }
];
SOURCES["〜としては"] = [
  { nom: "Bunpro", page: "としては (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%97%E3%81%A6%E3%81%AF" }
];
SOURCES["それにしても"] = [
  { nom: "Bunpro", page: "それにしても (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%82%8C%E3%81%AB%E3%81%97%E3%81%A6%E3%82%82" }
];
SOURCES["〜ぬ"] = [
  { nom: "Bunpro", page: "ぬ (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AC" }
];
SOURCES["〜ことなく"] = [
  { nom: "Bunpro", page: "ことなく (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%93%E3%81%A8%E3%81%AA%E3%81%8F" }
];
SOURCES["〜にて"] = [
  { nom: "Bunpro", page: "にて (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%A6" }
];
SOURCES["〜には (pour)"] = [
  { nom: "Bunpro", page: "には (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%AF" }
];
SOURCES["思うように"] = [
  { nom: "Bunpro", page: "思うように (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E6%80%9D%E3%81%86%E3%82%88%E3%81%86%E3%81%AB" }
];
SOURCES["〜かと思うと / 〜かと思ったら"] = [
  { nom: "Bunpro", page: "かと思ったら・かと思うと (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%81%A8%E6%80%9D%E3%81%A3%E3%81%9F%E3%82%89-%E3%81%8B%E3%81%A8%E6%80%9D%E3%81%86%E3%81%A8" }
];
SOURCES["〜ばと思います"] = [
  { nom: "Bunpro", page: "～ばと思います (JLPT N2)", url: "https://bunpro.jp/grammar_points/%EF%BD%9E%E3%81%B0%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99" }
];
SOURCES["〜というものではない"] = [
  { nom: "Bunpro", page: "というものでもない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%84%E3%81%86%E3%82%82%E3%81%AE%E3%81%A7%E3%82%82%E3%81%AA%E3%81%84" }
];
SOURCES["〜という点から考えると"] = [
  { nom: "Bunpro", page: "という点から考えると (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%84%E3%81%86%E7%82%B9%E3%81%8B%E3%82%89%E8%80%83%E3%81%88%E3%82%8B%E3%81%A8" }
];
SOURCES["ということは"] = [
  { nom: "Bunpro", page: "ということは (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%AF" }
];
SOURCES["〜ふうに"] = [
  { nom: "Bunpro", page: "ふうに (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%B5%E3%81%86%E3%81%AB" }
];
SOURCES["〜ものの"] = [
  { nom: "Bunpro", page: "ものの (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%82%82%E3%81%AE%E3%81%AE" }
];
SOURCES["〜というものだ"] = [
  { nom: "Bunpro", page: "というものだ (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%84%E3%81%86%E3%82%82%E3%81%AE%E3%81%A0" }
];
SOURCES["〜から見ると"] = [
  { nom: "Bunpro", page: "から見ると (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%82%89%E8%A6%8B%E3%82%8B%E3%81%A8" }
];
SOURCES["〜ところを見ると"] = [
  { nom: "Bunpro", page: "ところを見ると (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%93%E3%82%8D%E3%82%92%E8%A6%8B%E3%82%8B%E3%81%A8" }
];
SOURCES["〜からすると / 〜からすれば"] = [
  { nom: "Bunpro", page: "からすると・からすれば (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%82%89%E3%81%99%E3%82%8B%E3%81%A8-%E3%81%8B%E3%82%89%E3%81%99%E3%82%8C%E3%81%B0" }
];
SOURCES["〜からして"] = [
  { nom: "Bunpro", page: "からして (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%82%89%E3%81%97%E3%81%A6" }
];
SOURCES["〜からといって"] = [
  { nom: "Bunpro", page: "からといって (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%82%89%E3%81%A8%E3%81%84%E3%81%A3%E3%81%A6" }
];
SOURCES["そういえば"] = [
  { nom: "Bunpro", page: "そういえば (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%81%86%E3%81%84%E3%81%88%E3%81%B0" }
];
SOURCES["お〜願う"] = [
  { nom: "Bunpro", page: "お～願う (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%8A-%E9%A1%98%E3%81%86" }
];
SOURCES["〜てちょうだい"] = [
  { nom: "Bunpro", page: "～て頂戴 (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E9%A0%82%E6%88%B4" }
];
SOURCES["〜とか (ouï-dire)"] = [
  { nom: "Bunpro", page: "とか (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%8B" }
];
SOURCES["〜ようではないか"] = [
  { nom: "Bunpro", page: "〜ようではないか (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%82%88%E3%81%86%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84%E3%81%8B" }
];
SOURCES["〜かのようだ"] = [
  { nom: "Bunpro", page: "かのようだ (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%81%AE%E3%82%88%E3%81%86%E3%81%A0" }
];
SOURCES["〜のではないだろうか"] = [
  { nom: "Bunpro", page: "のではないだろうか (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AE%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84%E3%81%A0%E3%82%8D%E3%81%86%E3%81%8B" }
];
SOURCES["〜て当然だ"] = [
  { nom: "Bunpro", page: "て当然だ (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E5%BD%93%E7%84%B6%E3%81%A0" }
];
SOURCES["〜のももっともだ"] = [
  { nom: "Bunpro", page: "のももっともだ (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AE%E3%82%82%E3%82%82%E3%81%A3%E3%81%A8%E3%82%82%E3%81%A0" }
];
SOURCES["たった"] = [
  { nom: "Bunpro", page: "たった(の) (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%81%A3%E3%81%9F-%E3%81%AE" }
];
SOURCES["おそらく"] = [
  { nom: "Bunpro", page: "おそらく (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%8A%E3%81%9D%E3%82%89%E3%81%8F" }
];
SOURCES["〜ものか"] = [
  { nom: "Bunpro", page: "ものか (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%82%82%E3%81%AE%E3%81%8B" }
];
SOURCES["おまけに"] = [
  { nom: "Bunpro", page: "おまけに (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%8A%E3%81%BE%E3%81%91%E3%81%AB" }
];
SOURCES["〜に決まっている"] = [
  { nom: "Bunpro", page: "に決まっている (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E6%B1%BA%E3%81%BE%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B" }
];
SOURCES["〜気"] = [
  { nom: "Bunpro", page: "気 (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E6%B0%97" }
];
SOURCES["〜げ"] = [
  { nom: "Bunpro", page: "げ (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%92" }
];
SOURCES["〜のことだから"] = [
  { nom: "Bunpro", page: "ことだから (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%93%E3%81%A8%E3%81%A0%E3%81%8B%E3%82%89" }
];
SOURCES["〜ものだから / 〜もので"] = [
  { nom: "Bunpro", page: "ものだから (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%82%82%E3%81%AE%E3%81%A0%E3%81%8B%E3%82%89" }
];
SOURCES["〜ものがある"] = [
  { nom: "Bunpro", page: "ものがある (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%82%82%E3%81%AE%E3%81%8C%E3%81%82%E3%82%8B" }
];
SOURCES["〜傾向がある"] = [
  { nom: "Bunpro", page: "傾向がある (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E5%82%BE%E5%90%91%E3%81%8C%E3%81%82%E3%82%8B" }
];
SOURCES["〜に値する"] = [
  { nom: "Bunpro", page: "～に値する (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E5%80%A4%E3%81%99%E3%82%8B" }
];
SOURCES["〜だけましだ"] = [
  { nom: "Bunpro", page: "だけましだ (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A0%E3%81%91%E3%81%BE%E3%81%97%E3%81%A0" }
];
SOURCES["幸い / 幸いなことに"] = [
  { nom: "Bunpro", page: "幸い・幸いなことに (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E5%B9%B8%E3%81%84-%E5%B9%B8%E3%81%84%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AB" }
];
SOURCES["〜ようでは"] = [
  { nom: "Bunpro", page: "ようでは・ようじゃ (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%82%88%E3%81%86%E3%81%A7%E3%81%AF-%E3%82%88%E3%81%86%E3%81%98%E3%82%83" }
];
SOURCES["さすが"] = [
  { nom: "Bunpro", page: "さすが (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%95%E3%81%99%E3%81%8C" }
];
SOURCES["〜ことは〜が"] = [
  { nom: "Bunpro", page: "ことは〜が (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%93%E3%81%A8%E3%81%AF-%E3%81%8C" }
];
SOURCES["さらに"] = [
  { nom: "Bunpro", page: "更に (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%95%E3%82%89%E3%81%AB" }
];
SOURCES["せいぜい"] = [
  { nom: "Bunpro", page: "精々 (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E7%B2%BE%E3%80%85" }
];
SOURCES["わずかに"] = [
  { nom: "Bunpro", page: "僅かに (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E5%83%85%E3%81%8B%E3%81%AB" }
];
SOURCES["〜弱 / 〜強"] = [
  { nom: "Bunpro", page: "弱 (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E5%BC%B1" }
];
SOURCES["および"] = [
  { nom: "Bunpro", page: "および (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%8A%E3%82%88%E3%81%B3" }
];
SOURCES["たちまち"] = [
  { nom: "Bunpro", page: "たちまち (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%81%A1%E3%81%BE%E3%81%A1" }
];
SOURCES["いきなり"] = [
  { nom: "Bunpro", page: "いきなり (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%84%E3%81%8D%E3%81%AA%E3%82%8A" }
];
SOURCES["〜といった"] = [
  { nom: "Bunpro", page: "といった (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%84%E3%81%A3%E3%81%9F" }
];
SOURCES["〜を込めて"] = [
  { nom: "Bunpro", page: "を込めて (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E8%BE%BC%E3%82%81%E3%81%A6" }
];
SOURCES["何から何まで"] = [
  { nom: "Bunpro", page: "何から何まで (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E4%BD%95%E3%81%8B%E3%82%89%E4%BD%95%E3%81%BE%E3%81%A7" }
];
SOURCES["〜は別として"] = [
  { nom: "Bunpro", page: "は別として (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AF%E5%88%A5%E3%81%A8%E3%81%97%E3%81%A6" }
];
SOURCES["〜だけに"] = [
  { nom: "Bunpro", page: "だけに (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A0%E3%81%91%E3%81%AB" }
];
SOURCES["〜だけは〜"] = [
  { nom: "Bunpro", page: "だけは (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A0%E3%81%91%E3%81%AF" }
];
SOURCES["〜だけあって / 〜だけのことはある"] = [
  { nom: "Bunpro", page: "だけあって (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A0%E3%81%91%E3%81%82%E3%81%A3%E3%81%A6" }
];
SOURCES["何より"] = [
  { nom: "Bunpro", page: "何より (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E4%BD%95%E3%82%88%E3%82%8A" }
];
SOURCES["何といっても"] = [
  { nom: "Bunpro", page: "何といっても (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E4%BD%95%E3%81%A8%E3%81%84%E3%81%A3%E3%81%A6%E3%82%82" }
];
SOURCES["〜か何か"] = [
  { nom: "Bunpro", page: "か何か (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E4%BD%95%E3%81%8B" }
];
SOURCES["〜てならない"] = [
  { nom: "Bunpro", page: "てならない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84" }
];
SOURCES["〜のみ"] = [
  { nom: "Bunpro", page: "のみ (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AE%E3%81%BF" }
];
SOURCES["〜のみならず"] = [
  { nom: "Bunpro", page: "のみならず (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AE%E3%81%BF%E3%81%AA%E3%82%89%E3%81%9A" }
];
SOURCES["それなのに"] = [
  { nom: "Bunpro", page: "それなのに (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%82%8C%E3%81%AA%E3%81%AE%E3%81%AB" }
];
SOURCES["いわゆる"] = [
  { nom: "Bunpro", page: "いわゆる (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%84%E3%82%8F%E3%82%86%E3%82%8B" }
];
SOURCES["〜にすぎない"] = [
  { nom: "Bunpro", page: "にすぎない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%99%E3%81%8E%E3%81%AA%E3%81%84" }
];
SOURCES["〜も〜ば〜も"] = [
  { nom: "Bunpro", page: "も～ば～も (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%82%82-%E3%81%B0-%E3%82%82" }
];
SOURCES["〜でしかない"] = [
  { nom: "Bunpro", page: "でしかない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A7%E3%81%97%E3%81%8B%E3%81%AA%E3%81%84" }
];
SOURCES["何しろ"] = [
  { nom: "Bunpro", page: "何しろ (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E4%BD%95%E3%81%97%E3%82%8D" }
];
SOURCES["〜はともかく"] = [
  { nom: "Bunpro", page: "はともかく (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AF%E3%81%A8%E3%82%82%E3%81%8B%E3%81%8F" }
];
SOURCES["〜ならともかく"] = [
  { nom: "Bunpro", page: "ならともかく (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%82%89%E3%81%A8%E3%82%82%E3%81%8B%E3%81%8F" }
];
SOURCES["〜やら〜やら"] = [
  { nom: "Bunpro", page: "やら～やら (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%82%84%E3%82%89-%E3%82%84%E3%82%89" }
];
SOURCES["しかしながら"] = [
  { nom: "Bunpro", page: "しかしながら (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%97%E3%81%8B%E3%81%97%E3%81%AA%E3%81%8C%E3%82%89" }
];
SOURCES["〜ことにはならない"] = [
  { nom: "Bunpro", page: "ことにはならない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%93%E3%81%A8%E3%81%AB%E3%81%AF%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84" }
];
SOURCES["〜てはならない"] = [
  { nom: "Bunpro", page: "てはならない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%AF%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84" }
];
SOURCES["〜てはいられない"] = [
  { nom: "Bunpro", page: "てはいられない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%AF%E3%81%84%E3%82%89%E3%82%8C%E3%81%AA%E3%81%84" }
];
SOURCES["ろくに〜ない"] = [
  { nom: "Bunpro", page: "陸に～ない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E9%99%B8%E3%81%AB-%E3%81%AA%E3%81%84" }
];
SOURCES["しかも"] = [
  { nom: "Bunpro", page: "しかも (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%97%E3%81%8B%E3%82%82" }
];
SOURCES["〜てでも"] = [
  { nom: "Bunpro", page: "てでも (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%A7%E3%82%82" }
];
SOURCES["〜とも"] = [
  { nom: "Bunpro", page: "とも (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%82%82" }
];
SOURCES["〜たって"] = [
  { nom: "Bunpro", page: "たって (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%81%A3%E3%81%A6" }
];
SOURCES["〜に至るまで"] = [
  { nom: "Bunpro", page: "に至るまで (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E8%87%B3%E3%82%8B%E3%81%BE%E3%81%A7" }
];
SOURCES["〜たところで"] = [
  { nom: "Bunpro", page: "たところで (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%81%A8%E3%81%93%E3%82%8D%E3%81%A7" }
];
SOURCES["〜ごとく / 〜ごとき / 〜ごとし"] = [
  { nom: "Bunpro", page: "如く・如き・如し (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E5%A6%82%E3%81%8F-%E5%A6%82%E3%81%8D-%E5%A6%82%E3%81%97" }
];
SOURCES["〜に足る"] = [
  { nom: "Bunpro", page: "に足る (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E8%B6%B3%E3%82%8B" }
];
SOURCES["〜極まりない / 〜極まる"] = [
  { nom: "Bunpro", page: "極まりない・極まる (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E6%A5%B5%E3%81%BE%E3%82%8A%E3%81%AA%E3%81%84-%E6%A5%B5%E3%81%BE%E3%82%8B" }
];
SOURCES["〜といえども"] = [
  { nom: "Bunpro", page: "といえども (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%84%E3%81%88%E3%81%A9%E3%82%82" }
];
SOURCES["〜をもって"] = [
  { nom: "Bunpro", page: "を以て (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E4%BB%A5%E3%81%A6" }
];
SOURCES["〜きらいがある"] = [
  { nom: "Bunpro", page: "きらいがある (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%8D%E3%82%89%E3%81%84%E3%81%8C%E3%81%82%E3%82%8B" }
];
SOURCES["〜ならまだしも"] = [
  { nom: "Bunpro", page: "ならまだしも (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%82%89%E3%81%BE%E3%81%A0%E3%81%97%E3%82%82" }
];
SOURCES["〜までもない"] = [
  { nom: "Bunpro", page: "までもない (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%BE%E3%81%A7%E3%82%82%E3%81%AA%E3%81%84" }
];
SOURCES["〜ともなると / 〜ともなれば"] = [
  { nom: "Bunpro", page: "ともなると・にもなると (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%82%82%E3%81%AA%E3%82%8B%E3%81%A8-%E3%81%AB%E3%82%82%E3%81%AA%E3%82%8B%E3%81%A8" }
];
SOURCES["〜をいいことに"] = [
  { nom: "Bunpro", page: "をいいことに (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E3%81%84%E3%81%84%E3%81%93%E3%81%A8%E3%81%AB" }
];
SOURCES["〜いかん"] = [
  { nom: "Bunpro", page: "如何 (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E5%A6%82%E4%BD%95" }
];
SOURCES["〜までだ / 〜までのことだ"] = [
  { nom: "Bunpro", page: "～るまでだ (JLPT N1)", url: "https://bunpro.jp/grammar_points/%EF%BD%9E%E3%82%8B%E3%81%BE%E3%81%A7%E3%81%A0" }
];
SOURCES["〜にあって"] = [
  { nom: "Bunpro", page: "にあって (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%82%E3%81%A3%E3%81%A6" }
];
SOURCES["〜を余儀なくされる"] = [
  { nom: "Bunpro", page: "を余儀なくされる (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E4%BD%99%E5%84%80%E3%81%AA%E3%81%8F%E3%81%95%E3%82%8C%E3%82%8B" }
];
SOURCES["〜とは (surprise)"] = [
  { nom: "Bunpro", page: "とは (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%AF" }
];
SOURCES["〜じゃあるまいし"] = [
  { nom: "Bunpro", page: "じゃあるまいし (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%98%E3%82%83%E3%81%82%E3%82%8B%E3%81%BE%E3%81%84%E3%81%97" }
];
SOURCES["〜てからというもの"] = [
  { nom: "Bunpro", page: "てからというもの (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%8B%E3%82%89%E3%81%A8%E3%81%84%E3%81%86%E3%82%82%E3%81%AE" }
];
SOURCES["〜かたわら"] = [
  { nom: "Bunpro", page: "かたわら (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%81%9F%E3%82%8F%E3%82%89" }
];
SOURCES["〜を皮切りに"] = [
  { nom: "Bunpro", page: "を皮切りに (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E7%9A%AE%E5%88%87%E3%82%8A%E3%81%AB" }
];
SOURCES["〜に至っては"] = [
  { nom: "Bunpro", page: "に至っては (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E8%87%B3%E3%81%A3%E3%81%A6%E3%81%AF" }
];
SOURCES["〜なり"] = [
  { nom: "Bunpro", page: "なり (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%82%8A" }
];
SOURCES["〜ともなく / 〜ともなしに"] = [
  { nom: "Bunpro", page: "ともなく・ともなしに (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%82%82%E3%81%AA%E3%81%8F-%E3%81%A8%E3%82%82%E3%81%AA%E3%81%97%E3%81%AB" }
];
SOURCES["〜まみれ"] = [
  { nom: "Bunpro", page: "塗れ (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E5%A1%97%E3%82%8C" }
];
SOURCES["〜ようが / 〜ようと (〜まいが)"] = [
  { nom: "Bunpro", page: "ようが～まいが (JLPT N1)", url: "https://bunpro.jp/grammar_points/-%E3%82%88%E3%81%86--%E3%81%86-%E3%81%BE%E3%81%84-%E3%81%8C-%E3%81%A8" }
];
SOURCES["〜からする / 〜からある"] = [
  { nom: "Bunpro", page: "からする (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%82%89%E3%81%99%E3%82%8B" }
];
SOURCES["〜にして"] = [
  { nom: "Bunpro", page: "にして① (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%97%E3%81%A61" }
];
SOURCES["〜ものを"] = [
  { nom: "Bunpro", page: "ものを (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%82%E3%81%AE%E3%82%92" }
];
SOURCES["〜であれ / 〜であれ〜であれ"] = [
  { nom: "Bunpro", page: "であれ (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A7%E3%81%82%E3%82%8C" }
];
SOURCES["〜をおいてほかに〜ない"] = [
  { nom: "Bunpro", page: "をおいてほかに〜ない (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E3%81%8A%E3%81%84%E3%81%A6%E3%81%BB%E3%81%8B%E3%81%AB-%E3%81%AA%E3%81%84" }
];
SOURCES["〜とはいえ"] = [
  { nom: "Bunpro", page: "とはいえ (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%AF%E3%81%84%E3%81%88" }
];
SOURCES["〜ならでは"] = [
  { nom: "Bunpro", page: "ならでは (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%82%89%E3%81%A7%E3%81%AF" }
];
SOURCES["〜たはいいが"] = [
  { nom: "Bunpro", page: "～たはいいが (JLPT N1)", url: "https://bunpro.jp/grammar_points/%EF%BD%9E%E3%81%9F%E3%81%AF%E3%81%84%E3%81%84%E3%81%8C" }
];
SOURCES["〜すら"] = [
  { nom: "Bunpro", page: "すら (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%99%E3%82%89" }
];
SOURCES["〜あっての"] = [
  { nom: "Bunpro", page: "あっての (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%82%E3%81%A3%E3%81%A6%E3%81%AE" }
];
SOURCES["〜を経て"] = [
  { nom: "Bunpro", page: "を経て (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E7%B5%8C%E3%81%A6" }
];
SOURCES["〜ながらに"] = [
  { nom: "Bunpro", page: "ながらに (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%8C%E3%82%89%E3%81%AB" }
];
SOURCES["〜たなり"] = [
  { nom: "Bunpro", page: "たなり・なり (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%81%AA%E3%82%8A-%E3%81%AA%E3%82%8A" }
];
SOURCES["〜の極み"] = [
  { nom: "Bunpro", page: "の極み (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AE%E6%A5%B5%E3%81%BF" }
];
SOURCES["〜にしてみれば"] = [
  { nom: "Bunpro", page: "にしてみれば (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8C%E3%81%B0" }
];
SOURCES["〜だの〜だの"] = [
  { nom: "Bunpro", page: "だの (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A0%E3%81%AE" }
];
SOURCES["あくまで(も)"] = [
  { nom: "Bunpro", page: "あくまでも (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%82%E3%81%8F%E3%81%BE%E3%81%A7%E3%82%82" }
];
SOURCES["〜べく"] = [
  { nom: "Bunpro", page: "べく (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%B9%E3%81%8F" }
];
SOURCES["〜ところを"] = [
  { nom: "Bunpro", page: "ところを (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%93%E3%82%8D%E3%82%92" }
];
SOURCES["〜つ〜つ"] = [
  { nom: "Bunpro", page: "つ〜つ (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A4-%E3%81%A4" }
];
SOURCES["〜を境に"] = [
  { nom: "Bunpro", page: "を境に (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E5%A2%83%E3%81%AB" }
];
SOURCES["〜たら最後 / 〜たが最後"] = [
  { nom: "Bunpro", page: "たら最後 (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%82%89%E6%9C%80%E5%BE%8C" }
];
SOURCES["いかなる"] = [
  { nom: "Bunpro", page: "いかなる (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%84%E3%81%8B%E3%81%AA%E3%82%8B" }
];
SOURCES["〜なりに"] = [
  { nom: "Bunpro", page: "なりに (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%82%8A%E3%81%AB" }
];
SOURCES["〜(ら)れるままに"] = [
  { nom: "Bunpro", page: "れる・られる + ままに (JLPT N1)", url: "https://bunpro.jp/grammar_points/verb-passive-%E3%81%BE%E3%81%BE%E3%81%AB" }
];
SOURCES["〜ままに"] = [
  { nom: "Bunpro", page: "まま(に) (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%BE%E3%81%BE%E3%81%AB" }
];
SOURCES["〜にまつわる"] = [
  { nom: "Bunpro", page: "にまつわる (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%BE%E3%81%A4%E3%82%8F%E3%82%8B" }
];
SOURCES["〜たる"] = [
  { nom: "Bunpro", page: "たる (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%82%8B" }
];
SOURCES["〜なら〜で / 〜たら〜たで"] = [
  { nom: "Bunpro", page: "なら〜で (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%82%89-%E3%81%A7" }
];
SOURCES["〜をものともせず"] = [
  { nom: "Bunpro", page: "をものともせず (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E3%82%82%E3%81%AE%E3%81%A8%E3%82%82%E3%81%9B%E3%81%9A" }
];
SOURCES["〜には当たらない"] = [
  { nom: "Bunpro", page: "には当たらない (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%AF%E5%BD%93%E3%81%9F%E3%82%89%E3%81%AA%E3%81%84" }
];
SOURCES["〜ものと思う"] = [
  { nom: "Bunpro", page: "ものと思う (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%82%E3%81%AE%E3%81%A8%E6%80%9D%E3%81%86" }
];
SOURCES["〜を踏まえて"] = [
  { nom: "Bunpro", page: "を踏まえて (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E8%B8%8F%E3%81%BE%E3%81%88%E3%81%A6" }
];
SOURCES["〜ゆえに"] = [
  { nom: "Bunpro", page: "ゆえに (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%86%E3%81%88%E3%81%AB" }
];
SOURCES["〜という〜 (tous sans exception)"] = [
  { nom: "Bunpro", page: "という (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%84%E3%81%86" }
];
SOURCES["〜にとどまらず"] = [
  { nom: "Bunpro", page: "にとどまらず (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%A8%E3%81%A9%E3%81%BE%E3%82%89%E3%81%9A" }
];
SOURCES["〜と思いきや"] = [
  { nom: "Bunpro", page: "と思いきや (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E6%80%9D%E3%81%84%E3%81%8D%E3%82%84" }
];
SOURCES["どうにも〜ない"] = [
  { nom: "Bunpro", page: "どうにも (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A9%E3%81%86%E3%81%AB%E3%82%82" }
];
SOURCES["〜ことだし"] = [
  { nom: "Bunpro", page: "ことだし (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%93%E3%81%A8%E3%81%A0%E3%81%97" }
];
SOURCES["ガン〜"] = [
  { nom: "Bunpro", page: "がん～ (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%8C%E3%82%93-totally" }
];
SOURCES["〜か否か"] = [
  { nom: "Bunpro", page: "か否か (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E5%90%A6%E3%81%8B" }
];
SOURCES["〜べくして"] = [
  { nom: "Bunpro", page: "べくして (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%B9%E3%81%8F%E3%81%97%E3%81%A6" }
];
SOURCES["〜かれ〜かれ"] = [
  { nom: "Bunpro", page: "かれ〜かれ (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%82%8C-%E3%81%8B%E3%82%8C" }
];
SOURCES["〜に〜ない"] = [
  { nom: "Bunpro", page: "〜に〜ない (JLPT N1)", url: "https://bunpro.jp/grammar_points/-%E3%81%AB-%E3%81%AA%E3%81%84" }
];
SOURCES["〜ようにも〜ない"] = [
  { nom: "Bunpro", page: "にも～ない (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%82%82-%E3%81%AA%E3%81%84" }
];
SOURCES["〜なくして(は)"] = [
  { nom: "Bunpro", page: "なくして(は) (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%8F%E3%81%97%E3%81%A6-%E3%81%AF" }
];
SOURCES["〜のなんのって"] = [
  { nom: "Bunpro", page: "のなんのって (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AE%E3%81%AA%E3%82%93%E3%81%AE%E3%81%A3%E3%81%A6" }
];
SOURCES["〜にかかっている"] = [
  { nom: "Bunpro", page: "にかかっている (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%8B%E3%81%8B%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B" }
];
SOURCES["〜てやまない"] = [
  { nom: "Bunpro", page: "てやまない (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%82%84%E3%81%BE%E3%81%AA%E3%81%84" }
];
SOURCES["〜くらいなら"] = [
  { nom: "Bunpro", page: "ぐらいなら (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%90%E3%82%89%E3%81%84%E3%81%AA%E3%82%89" }
];
SOURCES["〜ってば / 〜ったら"] = [
  { nom: "Bunpro", page: "ってば・ったら (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A3%E3%81%A6%E3%81%B0-%E3%81%A3%E3%81%9F%E3%82%89" }
];
SOURCES["〜ずとも"] = [
  { nom: "Bunpro", page: "ずとも (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%9A%E3%81%A8%E3%82%82" }
];
SOURCES["〜とあって"] = [
  { nom: "Bunpro", page: "とあって (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%82%E3%81%A3%E3%81%A6" }
];
SOURCES["〜でもなんでもない"] = [
  { nom: "Bunpro", page: "でもなんでもない (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A7%E3%82%82%E3%81%AA%E3%82%93%E3%81%A7%E3%82%82%E3%81%AA%E3%81%84" }
];
SOURCES["〜くもなんともない"] = [
  { nom: "Bunpro", page: "い-Adj[く] + もなんともない (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%84-adj-%E3%81%8F-%E3%82%82%E3%81%AA%E3%82%93%E3%81%A8%E3%82%82%E3%81%AA%E3%81%84" }
];
SOURCES["〜ぐるみ"] = [
  { nom: "Bunpro", page: "ぐるみで (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%90%E3%82%8B%E3%81%BF%E3%81%A7" }
];
SOURCES["〜そばから"] = [
  { nom: "Bunpro", page: "そばから (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%81%B0%E3%81%8B%E3%82%89" }
];
SOURCES["訳あり"] = [
  { nom: "Bunpro", page: "訳あり(訳あって) (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E8%A8%B3%E3%81%82%E3%82%8A" }
];
SOURCES["〜に至って"] = [
  { nom: "Bunpro", page: "に至って・に至り (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E8%87%B3%E3%81%A3%E3%81%A6-%E3%81%AB%E8%87%B3%E3%82%8A" }
];
SOURCES["〜だに"] = [
  { nom: "Bunpro", page: "だに + しない (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A0%E3%81%AB-%E3%81%97%E3%81%AA%E3%81%84" }
];
SOURCES["〜がてら"] = [
  { nom: "Bunpro", page: "がてら (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%8C%E3%81%A6%E3%82%89" }
];
SOURCES["〜んがため(に)"] = [
  { nom: "Bunpro", page: "んがため(に) (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%93%E3%81%8C%E3%81%9F%E3%82%81-%E3%81%AB" }
];
SOURCES["〜なり〜なり"] = [
  { nom: "Bunpro", page: "～なり～なり (JLPT N1)", url: "https://bunpro.jp/grammar_points/-%E3%81%AA%E3%82%8A-%E3%81%AA%E3%82%8A" }
];
SOURCES["〜ないでもない"] = [
  { nom: "Bunpro", page: "ないでもない (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%84%E3%81%A7%E3%82%82%E3%81%AA%E3%81%84" }
];
SOURCES["〜もさることながら"] = [
  { nom: "Bunpro", page: "もさることながら (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%82%E3%81%95%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AA%E3%81%8C%E3%82%89" }
];
SOURCES["〜でなくてなんだろう"] = [
  { nom: "Bunpro", page: "でなくてなんだろう (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A7%E3%81%AA%E3%81%8F%E3%81%A6%E3%81%AA%E3%82%93%E3%81%A0%E3%82%8D%E3%81%86" }
];
SOURCES["〜はさておき"] = [
  { nom: "Bunpro", page: "はさておき・はさておいて (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AF%E3%81%95%E3%81%A6%E3%81%8A%E3%81%8D-%E3%81%AF%E3%81%95%E3%81%A6%E3%81%8A%E3%81%84%E3%81%A6" }
];
SOURCES["〜折(に)"] = [
  { nom: "Bunpro", page: "折には (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E6%8A%98%E3%81%AB%E3%81%AF" }
];
SOURCES["〜とばかり(に)"] = [
  { nom: "Bunpro", page: "とばかり（に） (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%B0%E3%81%8B%E3%82%8A" }
];
SOURCES["〜わ〜わ"] = [
  { nom: "Bunpro", page: "わ〜わ (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%8F-%E3%82%8F" }
];
SOURCES["〜なりとも"] = [
  { nom: "Bunpro", page: "なりとも (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%82%8A%E3%81%A8%E3%82%82" }
];
SOURCES["〜に至っても"] = [
  { nom: "Bunpro", page: "に至っても (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E8%87%B3%E3%81%A3%E3%81%A6%E3%82%82" }
];
SOURCES["〜を兼ねて"] = [
  { nom: "Bunpro", page: "を兼ねて (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E5%85%BC%E3%81%AD%E3%81%A6" }
];
SOURCES["〜ないものだろうか"] = [
  { nom: "Bunpro", page: "Verb[ない]もの(だろう)か (JLPT N1)", url: "https://bunpro.jp/grammar_points/verb-%E3%81%AA%E3%81%84%E3%82%82%E3%81%AE-%E3%81%A0%E3%82%8D%E3%81%86%E3%81%8B" }
];
SOURCES["〜てみせる"] = [
  { nom: "Bunpro", page: "Verb[て] + みせる (JLPT N1)", url: "https://bunpro.jp/grammar_points/verb-%E3%81%A6-%E3%81%BF%E3%81%9B%E3%82%8B" }
];
SOURCES["〜と相まって"] = [
  { nom: "Bunpro", page: "相まって (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E7%9B%B8%E3%81%BE%E3%81%A3%E3%81%A6" }
];
SOURCES["〜に足りない"] = [
  { nom: "Bunpro", page: "に足りない (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E8%B6%B3%E3%82%8A%E3%81%AA%E3%81%84" }
];
SOURCES["〜べからず / 〜べからざる"] = [
  { nom: "Bunpro", page: "べからず (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%B9%E3%81%8B%E3%82%89%E3%81%9A" }
];
SOURCES["〜んばかりに"] = [
  { nom: "Bunpro", page: "んばかりに (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%93%E3%81%B0%E3%81%8B%E3%82%8A%E3%81%AB" }
];
SOURCES["〜に則って"] = [
  { nom: "Bunpro", page: "に則って・に則り (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E5%89%87%E3%81%A3%E3%81%A6-%E3%81%AB%E5%89%87%E3%82%8A" }
];
SOURCES["〜限りだ"] = [
  { nom: "Bunpro", page: "Adj限りだ (JLPT N1)", url: "https://bunpro.jp/grammar_points/adj%E9%99%90%E3%82%8A%E3%81%A0" }
];
SOURCES["〜はおろか"] = [
  { nom: "Bunpro", page: "はおろか (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AF%E3%81%8A%E3%82%8D%E3%81%8B" }
];
SOURCES["〜めく"] = [
  { nom: "Bunpro", page: "めく・めいた (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%81%E3%81%8F-%E3%82%81%E3%81%84%E3%81%9F" }
];
SOURCES["〜といわず〜といわず"] = [
  { nom: "Bunpro", page: "といわず (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%84%E3%82%8F%E3%81%9A" }
];
SOURCES["〜にもほどがある"] = [
  { nom: "Bunpro", page: "にもほどがある (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%82%82%E3%81%BB%E3%81%A9%E3%81%8C%E3%81%82%E3%82%8B" }
];
SOURCES["〜にもまして"] = [
  { nom: "Bunpro", page: "にもまして (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%82%82%E3%81%BE%E3%81%97%E3%81%A6" }
];
SOURCES["〜まくる"] = [
  { nom: "Bunpro", page: "まくる (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%BE%E3%81%8F%E3%82%8B" }
];
SOURCES["どうにか"] = [
  { nom: "Bunpro", page: "どうにか (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A9%E3%81%86%E3%81%AB%E3%81%8B" }
];
SOURCES["〜や否や"] = [
  { nom: "Bunpro", page: "や否や (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%84%E5%90%A6%E3%82%84" }
];
SOURCES["〜次第です"] = [
  { nom: "Bunpro", page: "次第です (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E6%AC%A1%E7%AC%AC%E3%81%A7%E3%81%99" }
];
SOURCES["〜というところだ / 〜といったところだ"] = [
  { nom: "Bunpro", page: "というところ (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%84%E3%81%86%E3%81%A8%E3%81%93%E3%82%8D" }
];
SOURCES["〜たりとも〜ない"] = [
  { nom: "Bunpro", page: "１～たりとも～ない (JLPT N1)", url: "https://bunpro.jp/grammar_points/%EF%BC%91-%E3%82%8A%E3%81%A8%E3%82%82-%E3%81%AA%E3%81%84" }
];
SOURCES["〜といったらない / 〜ったらない"] = [
  { nom: "Bunpro", page: "ったらない・といったらない (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A3%E3%81%9F%E3%82%89%E3%81%AA%E3%81%84%E3%83%BB%E3%81%A8%E3%81%84%E3%81%A3%E3%81%9F%E3%82%89%E3%81%AA%E3%81%84" }
];
SOURCES["〜に照らして"] = [
  { nom: "Bunpro", page: "に照らして・に照らすと (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E7%85%A7%E3%82%89%E3%81%97%E3%81%A6%E3%83%BB%E3%81%AB%E7%85%A7%E3%82%89%E3%81%99%E3%81%A8" }
];
SOURCES["〜とあれば"] = [
  { nom: "Bunpro", page: "とあれば (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%82%E3%82%8C%E3%81%B0" }
];
SOURCES["さぞ"] = [
  { nom: "Bunpro", page: "さぞ (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%95%E3%81%9E" }
];
SOURCES["〜ときたら"] = [
  { nom: "Bunpro", page: "ときたら (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%8D%E3%81%9F%E3%82%891" }
];
SOURCES["〜びる"] = [
  { nom: "Bunpro", page: "びる (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%B3%E3%82%8B" }
];
SOURCES["〜にしたところで / 〜にしたって"] = [
  { nom: "Bunpro", page: "にしたところで (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%97%E3%81%9F%E3%81%A8%E3%81%93%E3%82%8D%E3%81%A7" }
];
SOURCES["〜ばこそ"] = [
  { nom: "Bunpro", page: "～ばこそ (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%B0%E3%81%93%E3%81%9D" }
];
SOURCES["〜ても差し支えない"] = [
  { nom: "Bunpro", page: "ても差し支えない (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%82%82%E5%B7%AE%E3%81%97%E6%94%AF%E3%81%88%E3%81%AA%E3%81%84" }
];
SOURCES["〜には及ばない"] = [
  { nom: "Bunpro", page: "には及ばない① (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%AF%E5%8F%8A%E3%81%B0%E3%81%AA%E3%81%841" }
];
SOURCES["〜に即して"] = [
  { nom: "Bunpro", page: "に即して (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E5%8D%B3%E3%81%97%E3%81%A6" }
];
SOURCES["〜ないまでも"] = [
  { nom: "Bunpro", page: "ないまでも (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%84%E3%81%BE%E3%81%A7%E3%82%82" }
];
SOURCES["〜をよそに"] = [
  { nom: "Bunpro", page: "をよそに (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E3%82%88%E3%81%9D%E3%81%AB" }
];
SOURCES["〜に限ったことではない"] = [
  { nom: "Bunpro", page: "に限ったことではない (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E9%99%90%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84" }
];
SOURCES["〜とは比べものにならない"] = [
  { nom: "Bunpro", page: "とは比べものにならない (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%AF%E6%AF%94%E3%81%B9%E3%82%82%E3%81%AE%E3%81%AB%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84" }
];
SOURCES["〜を顧みず"] = [
  { nom: "Bunpro", page: "を顧みず (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E9%A1%A7%E3%81%BF%E3%81%9A" }
];
SOURCES["〜まじき"] = [
  { nom: "Bunpro", page: "まじき (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%BE%E3%81%98%E3%81%8D" }
];
SOURCES["〜の至り"] = [
  { nom: "Bunpro", page: "の至り (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AE%E8%87%B3%E3%82%8A" }
];
SOURCES["〜に恥じない"] = [
  { nom: "Bunpro", page: "に恥じない (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E6%81%A5%E3%81%98%E3%81%AA%E3%81%84" }
];
SOURCES["〜ずじまい"] = [
  { nom: "Bunpro", page: "ずじまい (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%9A%E3%81%98%E3%81%BE%E3%81%84" }
];
SOURCES["〜に言わせれば"] = [
  { nom: "Bunpro", page: "に言わせれば・に言わせると・に言わせたら (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E8%A8%80%E3%82%8F%E3%81%9B%E3%82%8C%E3%81%B0" }
];
SOURCES["〜こととて"] = [
  { nom: "Bunpro", page: "こととて (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%93%E3%81%A8%E3%81%A8%E3%81%A6" }
];
SOURCES["〜ずくめ"] = [
  { nom: "Bunpro", page: "ずくめ (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%9A%E3%81%8F%E3%82%81" }
];
SOURCES["〜とは言うものの"] = [
  { nom: "Bunpro", page: "とは言うものの (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%AF%E8%A8%80%E3%81%86%E3%82%82%E3%81%AE%E3%81%AE" }
];
SOURCES["〜が早いか"] = [
  { nom: "Bunpro", page: "が早いか (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%8C%E6%97%A9%E3%81%84%E3%81%8B" }
];
SOURCES["〜に難くない"] = [
  { nom: "Bunpro", page: "に難くない (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E9%9B%A3%E3%81%8F%E3%81%AA%E3%81%84" }
];
SOURCES["〜ならいざ知らず"] = [
  { nom: "Bunpro", page: "ならいざ知らず (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%82%89%E3%81%B0%E3%81%84%E3%81%96%E7%9F%A5%E3%82%89%E3%81%9A" }
];
SOURCES["〜を禁じ得ない"] = [
  { nom: "Bunpro", page: "を禁じ得ない (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E7%A6%81%E3%81%98%E5%BE%97%E3%81%AA%E3%81%84" }
];
SOURCES["〜にかこつけて"] = [
  { nom: "Bunpro", page: "にかこつけて (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%8B%E3%81%93%E3%81%A4%E3%81%91%E3%81%A6" }
];
SOURCES["〜ようによっては"] = [
  { nom: "Bunpro", page: "ようによっては (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%88%E3%81%86%E3%81%AB%E3%82%88%E3%81%A3%E3%81%A6%E3%81%AF" }
];
SOURCES["〜べくもない"] = [
  { nom: "Bunpro", page: "べくもない (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%B9%E3%81%8F%E3%82%82%E3%81%AA%E3%81%84" }
];
SOURCES["〜ものとして"] = [
  { nom: "Bunpro", page: "ものとして (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%82%E3%81%AE%E3%81%A8%E3%81%97%E3%81%A6" }
];
SOURCES["〜を前提に"] = [
  { nom: "Bunpro", page: "を前提に (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E5%89%8D%E6%8F%90%E3%81%AB" }
];
SOURCES["〜ずにはすまない"] = [
  { nom: "Bunpro", page: "ずにはすまない (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%9A%E3%81%AB%E3%81%AF%E3%81%99%E3%81%BE%E3%81%AA%E3%81%84" }
];
SOURCES["〜に堪えない"] = [
  { nom: "Bunpro", page: "に堪えない (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E5%A0%AA%E3%81%88%E3%81%AA%E3%81%84" }
];
SOURCES["〜始末だ"] = [
  { nom: "Bunpro", page: "始末だ (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E5%A7%8B%E6%9C%AB%E3%81%A0" }
];
SOURCES["〜ようものなら"] = [
  { nom: "Bunpro", page: "ものなら② (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%82%E3%81%AE%E3%81%AA%E3%82%89%E2%91%A1" }
];
SOURCES["〜にひきかえ"] = [
  { nom: "Bunpro", page: "にひきかえ (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%B2%E3%81%8D%E3%81%8B%E3%81%88" }
];
SOURCES["〜ばそれまでだ"] = [
  { nom: "Bunpro", page: "それまでだ (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%82%8C%E3%81%BE%E3%81%A7%E3%81%A0" }
];
SOURCES["〜といおうか〜といおうか"] = [
  { nom: "Bunpro", page: "といおうか (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%84%E3%81%8A%E3%81%86%E3%81%8B" }
];
SOURCES["〜ずにはおかない"] = [
  { nom: "Bunpro", page: "ずにはおかない (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%9A%E3%81%AB%E3%81%AF%E3%81%8A%E3%81%8B%E3%81%AA%E3%81%84" }
];
SOURCES["〜を限りに"] = [
  { nom: "Bunpro", page: "を限りに (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E9%99%90%E3%82%8A%E3%81%AB" }
];
SOURCES["〜てはかなわない"] = [
  { nom: "Bunpro", page: "てはかなわない (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%AF%E3%81%8B%E3%81%AA%E3%82%8F%E3%81%AA%E3%81%84" }
];
SOURCES["〜かたがた"] = [
  { nom: "Bunpro", page: "かたがた (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%81%9F%E3%81%8C%E3%81%9F" }
];
SOURCES["〜てやる"] = [
  { nom: "Bunpro", page: "～てやる (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%82%84%E3%82%8B" }
];
SOURCES["ただ〜のみ"] = [
  { nom: "Bunpro", page: "ただ〜のみ (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%81%A0-%E3%81%AE%E3%81%BF" }
];
SOURCES["〜ものとする"] = [
  { nom: "Bunpro", page: "ものとする (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%82%E3%81%AE%E3%81%A8%E3%81%99%E3%82%8B" }
];
SOURCES["〜との"] = [
  { nom: "Bunpro", page: "との (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%AE" }
];
SOURCES["〜以前"] = [
  { nom: "Bunpro", page: "以前 (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E4%BB%A5%E5%89%8D" }
];
SOURCES["〜ともあろう"] = [
  { nom: "Bunpro", page: "ともあろう (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%82%82%E3%81%82%E3%82%8D%E3%81%86" }
];
SOURCES["〜こそすれ〜ない"] = [
  { nom: "Bunpro", page: "こそすれ〜ない (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%93%E3%81%9D%E3%81%99%E3%82%8C-%E3%81%AA%E3%81%84" }
];
SOURCES["〜並み"] = [
  { nom: "Bunpro", page: "並み (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E4%B8%A6%E3%81%BF" }
];
SOURCES["〜に先駆けて"] = [
  { nom: "Bunpro", page: "に先駆けて (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E5%85%88%E9%A7%86%E3%81%91%E3%81%A6" }
];
SOURCES["〜を機に"] = [
  { nom: "Bunpro", page: "を機に (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E6%A9%9F%E3%81%AB" }
];
SOURCES["〜ぞ / 〜ぜ"] = [
  { nom: "Bunpro", page: "ぞ (hors JLPT)", url: "https://bunpro.jp/grammar_points/%E3%81%9E" }
];
SOURCES["〜わ"] = [
  { nom: "Bunpro", page: "わ (hors JLPT)", url: "https://bunpro.jp/grammar_points/%E3%82%8F" }
];
SOURCES["〜かい / 〜だい"] = [
  { nom: "Bunpro", page: "い (hors JLPT)", url: "https://bunpro.jp/grammar_points/%E3%81%84" }
];
SOURCES["〜ん (contraction)"] = [
  { nom: "Bunpro", page: "ん (Slang) (hors JLPT)", url: "https://bunpro.jp/grammar_points/%E3%82%93-slang" }
];
SOURCES["〜っつう / 〜っつった"] = [
  { nom: "Bunpro", page: "つ (Slang) (hors JLPT)", url: "https://bunpro.jp/grammar_points/%E3%81%A4-slang" }
];
SOURCES["〜やがる"] = [
  { nom: "Bunpro", page: "～やがる (hors JLPT)", url: "https://bunpro.jp/grammar_points/%E3%82%84%E3%81%8C%E3%82%8B" }
];
SOURCES["〜がいい"] = [
  { nom: "Bunpro", page: "がいい (hors JLPT)", url: "https://bunpro.jp/grammar_points/%E3%81%8C%E3%81%84%E3%81%84" }
];
SOURCES["〜かろう"] = [
  { nom: "Bunpro", page: "かろう (hors JLPT)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%82%8D%E3%81%86" }
];
SOURCES["やや"] = [
  { nom: "Bunpro", page: "やや (hors JLPT)", url: "https://bunpro.jp/grammar_points/%E3%82%84%E3%82%84" }
];
SOURCES["いずれも"] = [
  { nom: "Bunpro", page: "いずれも (hors JLPT)", url: "https://bunpro.jp/grammar_points/%E3%81%84%E3%81%9A%E3%82%8C%E3%82%82" }
];
SOURCES["あわよくば"] = [
  { nom: "Bunpro", page: "あわよくば (hors JLPT)", url: "https://bunpro.jp/grammar_points/%E3%81%82%E3%82%8F%E3%82%88%E3%81%8F%E3%81%B0" }
];
SOURCES["〜むず"] = [
  { nom: "Bunpro", page: "むず (hors JLPT)", url: "https://bunpro.jp/grammar_points/%E3%82%80%E3%81%9A" }
];

// Pages Bunpro supplémentaires rattachées à une fiche
(SOURCES["〜をもって"] = SOURCES["〜をもって"] || []).push(
  { nom: "Bunpro", page: "をもって (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E3%82%82%E3%81%A3%E3%81%A6" });
(SOURCES["〜いかん"] = SOURCES["〜いかん"] || []).push(
  { nom: "Bunpro", page: "いかん〜ず (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%84%E3%81%8B%E3%82%93-%E3%81%9A" });
(SOURCES["〜までだ / 〜までのことだ"] = SOURCES["〜までだ / 〜までのことだ"] || []).push(
  { nom: "Bunpro", page: "～たまでだ (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%81%BE%E3%81%A7%E3%81%A0" });
(SOURCES["〜からする / 〜からある"] = SOURCES["〜からする / 〜からある"] || []).push(
  { nom: "Bunpro", page: "からある (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%82%89%E3%81%82%E3%82%8B" });
(SOURCES["〜にして"] = SOURCES["〜にして"] || []).push(
  { nom: "Bunpro", page: "にして② (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%97%E3%81%A62" });
(SOURCES["〜であれ / 〜であれ〜であれ"] = SOURCES["〜であれ / 〜であれ〜であれ"] || []).push(
  { nom: "Bunpro", page: "であれ〜であれ (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A7%E3%81%82%E3%82%8C-%E3%81%A7%E3%81%82%E3%82%8C" });
(SOURCES["あくまで(も)"] = SOURCES["あくまで(も)"] || []).push(
  { nom: "Bunpro", page: "飽くまで(も) (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E9%A3%BD%E3%81%8F%E3%81%BE%E3%81%A7-%E3%82%82" });
(SOURCES["〜なら〜で / 〜たら〜たで"] = SOURCES["〜なら〜で / 〜たら〜たで"] || []).push(
  { nom: "Bunpro", page: "たら〜で (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%82%89-%E3%81%A7" });
(SOURCES["〜だに"] = SOURCES["〜だに"] || []).push(
  { nom: "Bunpro", page: "Verb + だに (JLPT N1)", url: "https://bunpro.jp/grammar_points/verb-%E3%81%A0%E3%81%AB" });
(SOURCES["〜ぞ / 〜ぜ"] = SOURCES["〜ぞ / 〜ぜ"] || []).push(
  { nom: "Bunpro", page: "ぜ (hors JLPT)", url: "https://bunpro.jp/grammar_points/%E3%81%9C" });
(SOURCES["〜ものと思う"] = SOURCES["〜ものと思う"] || []).push(
  { nom: "Bunpro", page: "ものと思っていた (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%82%E3%81%AE%E3%81%A8%E6%80%9D%E3%81%A3%E3%81%A6%E3%81%84%E3%81%9F" });
(SOURCES["〜わ〜わ"] = SOURCES["〜わ〜わ"] || []).push(
  { nom: "Bunpro", page: "わ〜わ（で） (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%8F-%E3%82%8F%E3%81%A7" });
(SOURCES["〜といったらない / 〜ったらない"] = SOURCES["〜といったらない / 〜ったらない"] || []).push(
  { nom: "Bunpro", page: "ったら・といったら (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A3%E3%81%9F%E3%82%89-%E3%81%A8%E3%81%84%E3%81%A3%E3%81%9F%E3%82%89" });
(SOURCES["〜ときたら"] = SOURCES["〜ときたら"] || []).push(
  { nom: "Bunpro", page: "と来たら (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%8D%E3%81%9F%E3%82%892" });
(SOURCES["〜には及ばない"] = SOURCES["〜には及ばない"] || []).push(
  { nom: "Bunpro", page: "には及ばない② (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%AF%E5%8F%8A%E3%81%B0%E3%81%AA%E3%81%84%E2%91%A1" });
(SOURCES["〜を余儀なくされる"] = SOURCES["〜を余儀なくされる"] || []).push(
  { nom: "Bunpro", page: "を余儀なくさせる (JLPT N1)", url: "https://bunpro.jp/grammar_points/%E3%82%92%E4%BD%99%E5%84%80%E3%81%AA%E3%81%8F%E3%81%95%E3%81%9B%E3%82%8B" });
(SOURCES["〜得る / 〜得ない"] = SOURCES["〜得る / 〜得ない"] || []).push(
  { nom: "Bunpro", page: "〜得ない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E5%BE%97%E3%81%AA%E3%81%84" });
(SOURCES["〜よりほかない / 〜より仕方がない"] = SOURCES["〜よりほかない / 〜より仕方がない"] || []).push(
  { nom: "Bunpro", page: "よりしかたがない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%82%88%E3%82%8A%E3%81%97%E3%81%8B%E3%81%9F%E3%81%8C%E3%81%AA%E3%81%84" });
(SOURCES["一応"] = SOURCES["一応"] || []).push(
  { nom: "Bunpro", page: "一応 ② (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E4%B8%80%E5%BF%9C2" });
(SOURCES["〜上に"] = SOURCES["〜上に"] || []).push(
  { nom: "Bunpro", page: "その上 (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%81%AE%E4%B8%8A" });
(SOURCES["〜以上 (puisque)"] = SOURCES["〜以上 (puisque)"] || []).push(
  { nom: "Bunpro", page: "上は (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E4%B8%8A%E3%81%AF" });
(SOURCES["なお"] = SOURCES["なお"] || []).push(
  { nom: "Bunpro", page: "なお② (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%8A2" });
(SOURCES["〜つつ / 〜つつも"] = SOURCES["〜つつ / 〜つつも"] || []).push(
  { nom: "Bunpro", page: "つつ(も) (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A4%E3%81%A4-%E3%82%82" });
(SOURCES["〜ところだった"] = SOURCES["〜ところだった"] || []).push(
  { nom: "Bunpro", page: "ところだった ② (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%93%E3%82%8D%E3%81%A0%E3%81%A3%E3%81%9F2" });
(SOURCES["〜ては"] = SOURCES["〜ては"] || []).push(
  { nom: "Bunpro", page: "ては〜ては (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%AF-%E3%81%A6%E3%81%AF" });
(SOURCES["〜そうもない"] = SOURCES["〜そうもない"] || []).push(
  { nom: "Bunpro", page: "そうにない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%81%86%E3%81%AB%E3%81%AA%E3%81%84" });
(SOURCES["〜にしても〜にしても / 〜にしろ〜にしろ"] = SOURCES["〜にしても〜にしても / 〜にしろ〜にしろ"] || []).push(
  { nom: "Bunpro", page: "にしろ～にしろ (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AB%E3%81%97%E3%82%8D-%E3%81%AB%E3%81%97%E3%82%8D" });
(SOURCES["〜と考えられている"] = SOURCES["〜と考えられている"] || []).push(
  { nom: "Bunpro", page: "と考えられる (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E8%80%83%E3%81%88%E3%82%89%E3%82%8C%E3%82%8B" });
(SOURCES["〜ふうに"] = SOURCES["〜ふうに"] || []).push(
  { nom: "Bunpro", page: "という風に (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%84%E3%81%86%E9%A2%A8%E3%81%AB" });
(SOURCES["〜て当然だ"] = SOURCES["〜て当然だ"] || []).push(
  { nom: "Bunpro", page: "のも当然だ (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AE%E3%82%82%E5%BD%93%E7%84%B6%E3%81%A0" });
(SOURCES["〜ものだから / 〜もので"] = SOURCES["〜ものだから / 〜もので"] || []).push(
  { nom: "Bunpro", page: "ものですから・もので (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%82%82%E3%81%AE%E3%81%A7%E3%81%99%E3%81%8B%E3%82%89-%E3%82%82%E3%81%AE%E3%81%A7" });
(SOURCES["〜弱 / 〜強"] = SOURCES["〜弱 / 〜強"] || []).push(
  { nom: "Bunpro", page: "強 (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E5%BC%B7" });
(SOURCES["〜だけあって / 〜だけのことはある"] = SOURCES["〜だけあって / 〜だけのことはある"] || []).push(
  { nom: "Bunpro", page: "だけのことはある (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A0%E3%81%91%E3%81%AE%E3%81%93%E3%81%A8%E3%81%AF%E3%81%82%E3%82%8B" });
(SOURCES["〜わけにはいかない"] = SOURCES["〜わけにはいかない"] || []).push(
  { nom: "Bunpro", page: "ないわけにはいかない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%84%E3%82%8F%E3%81%91%E3%81%AB%E3%81%AF%E3%81%84%E3%81%8B%E3%81%AA%E3%81%84" });
(SOURCES["〜わけではない"] = SOURCES["〜わけではない"] || []).push(
  { nom: "Bunpro", page: "というわけではない (JLPT N2)", url: "https://bunpro.jp/grammar_points/%E3%81%A8%E3%81%84%E3%81%86%E3%82%8F%E3%81%91%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84" });
(SOURCES["〜ばいい / 〜たらいい"] = SOURCES["〜ばいい / 〜たらいい"] || []).push(
  { nom: "Bunpro", page: "たらいい・といい (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%9F%E3%82%89%E3%81%84%E3%81%84-%E3%81%A8%E3%81%84%E3%81%84" });
(SOURCES["〜うちに"] = SOURCES["〜うちに"] || []).push(
  { nom: "Bunpro", page: "ないうちに (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%84%E3%81%86%E3%81%A1%E3%81%AB" });
(SOURCES["すると / そうすると"] = SOURCES["すると / そうすると"] || []).push(
  { nom: "Bunpro", page: "そうすると (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%81%86%E3%81%99%E3%82%8B%E3%81%A8" });
(SOURCES["〜結果"] = SOURCES["〜結果"] || []).push(
  { nom: "Bunpro", page: "その結果 (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%81%AE%E7%B5%90%E6%9E%9C" });
(SOURCES["どんなに〜ても / いくら〜ても"] = SOURCES["どんなに〜ても / いくら〜ても"] || []).push(
  { nom: "Bunpro", page: "いくら〜でも (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%84%E3%81%8F%E3%82%89-%E3%81%A7%E3%82%82" });
(SOURCES["〜だけでなく / 〜ばかりでなく"] = SOURCES["〜だけでなく / 〜ばかりでなく"] || []).push(
  { nom: "Bunpro", page: "だけでなく(て)～も (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%A0%E3%81%91%E3%81%A7%E3%81%AA%E3%81%8F-%E3%81%A6-%E3%82%82" });
(SOURCES["〜は言うまでもない"] = SOURCES["〜は言うまでもない"] || []).push(
  { nom: "Bunpro", page: "言うまでもない ② (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E8%A8%80%E3%81%86%E3%81%BE%E3%81%A7%E3%82%82%E3%81%AA%E3%81%842" });
(SOURCES["〜ようとする"] = SOURCES["〜ようとする"] || []).push(
  { nom: "Bunpro", page: "Verb[volitional] + としたが (JLPT N3)", url: "https://bunpro.jp/grammar_points/verb-volitional-%E3%81%A8%E3%81%97%E3%81%9F%E3%81%8C" });
(SOURCES["〜かというと"] = SOURCES["〜かというと"] || []).push(
  { nom: "Bunpro", page: "～かというと ② (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%81%8B%E3%81%A8%E3%81%84%E3%81%86%E3%81%A82" });
(SOURCES["また"] = SOURCES["また"] || []).push(
  { nom: "Bunpro", page: "又〜も (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E5%8F%88-%E3%82%82" });
(SOURCES["もし"] = SOURCES["もし"] || []).push(
  { nom: "Bunpro", page: "もしも～なら・もしも～でも (JLPT N3)", url: "https://bunpro.jp/grammar_points/%E3%82%82%E3%81%97%E3%82%82%EF%BD%9E%E3%81%AA%E3%82%89%E3%83%BB%E3%82%82%E3%81%97%E3%82%82%EF%BD%9E%E3%81%A7%E3%82%82" });
(SOURCES["〜なくて"] = SOURCES["〜なくて"] || []).push(
  { nom: "Bunpro", page: "なくて (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%8F%E3%81%A6" });
(SOURCES["〜ないで / 〜ずに"] = SOURCES["〜ないで / 〜ずに"] || []).push(
  { nom: "Bunpro", page: "ないで (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%84%E3%81%A7" });
(SOURCES["〜より / 〜のほうが"] = SOURCES["〜より / 〜のほうが"] || []).push(
  { nom: "Bunpro", page: "より (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%82%88%E3%82%8A" });
(SOURCES["決して〜ない / めったに〜ない / 全く〜ない"] = SOURCES["決して〜ない / めったに〜ない / 全く〜ない"] || []).push(
  { nom: "Bunpro", page: "ぜんぜん (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%9C%E3%82%93%E3%81%9C%E3%82%93" });
(SOURCES["〜ようだ / 〜みたいだ"] = SOURCES["〜ようだ / 〜みたいだ"] || []).push(
  { nom: "Bunpro", page: "みたいに・みたいな (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%BF%E3%81%9F%E3%81%84%E3%81%AB-%E3%81%BF%E3%81%9F%E3%81%84%E3%81%AA" });
(SOURCES["〜そうだ (apparence)"] = SOURCES["〜そうだ (apparence)"] || []).push(
  { nom: "Bunpro", page: "そうに・そうな  (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%81%86%E3%81%AB-%E3%81%9D%E3%81%86%E3%81%AA" });
(SOURCES["〜ようだ / 〜みたいだ"] = SOURCES["〜ようだ / 〜みたいだ"] || []).push(
  { nom: "Bunpro", page: "のように・のような  (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AE%E3%82%88%E3%81%86%E3%81%AB-%E3%81%AE%E3%82%88%E3%81%86%E3%81%AA" });
(SOURCES["〜ようだ / 〜みたいだ"] = SOURCES["〜ようだ / 〜みたいだ"] || []).push(
  { nom: "Bunpro", page: "ように・ような (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%82%88%E3%81%86%E3%81%AB-%E3%82%88%E3%81%86%E3%81%AA" });
(SOURCES["〜しか〜ない"] = SOURCES["〜しか〜ない"] || []).push(
  { nom: "Bunpro", page: "Number + しか〜ない (JLPT N4)", url: "https://bunpro.jp/grammar_points/number-%E3%81%97%E3%81%8B-%E3%81%AA%E3%81%84" });
(SOURCES["〜て (enchaînement)"] = SOURCES["〜て (enchaînement)"] || []).push(
  { nom: "Bunpro", page: "Verb[て] + B (JLPT N4)", url: "https://bunpro.jp/grammar_points/verb%E3%81%A6-b" });
(SOURCES["〜てほしい"] = SOURCES["〜てほしい"] || []).push(
  { nom: "Bunpro", page: "ように～てほしい (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%82%88%E3%81%86%E3%81%AB-%E3%81%A6%E3%81%BB%E3%81%97%E3%81%84" });
(SOURCES["Langage honorifique (敬語)"] = SOURCES["Langage honorifique (敬語)"] || []).push(
  { nom: "Bunpro", page: "なさる (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%95%E3%82%8B" });
(SOURCES["Langage honorifique (敬語)"] = SOURCES["Langage honorifique (敬語)"] || []).push(
  { nom: "Bunpro", page: "お～ください  (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%8A-%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84" });
(SOURCES["Langage honorifique (敬語)"] = SOURCES["Langage honorifique (敬語)"] || []).push(
  { nom: "Bunpro", page: "いらっしゃる (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%84%E3%82%89%E3%81%A3%E3%81%97%E3%82%83%E3%82%8B" });
(SOURCES["Langage honorifique (敬語)"] = SOURCES["Langage honorifique (敬語)"] || []).push(
  { nom: "Bunpro", page: "ございます (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99" });
(SOURCES["Langage honorifique (敬語)"] = SOURCES["Langage honorifique (敬語)"] || []).push(
  { nom: "Bunpro", page: "でございます (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%A7%E3%81%94%E3%81%96%E3%81%84%E3%81%BE%E3%81%99" });
(SOURCES["Langage honorifique (敬語)"] = SOURCES["Langage honorifique (敬語)"] || []).push(
  { nom: "Bunpro", page: "いたす (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%84%E3%81%9F%E3%81%99" });
(SOURCES["〜なければならない"] = SOURCES["〜なければならない"] || []).push(
  { nom: "Bunpro", page: "なければいけない (JLPT N4)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%91%E3%82%8C%E3%81%B0%E3%81%84%E3%81%91%E3%81%AA%E3%81%84" });
(SOURCES["こ・そ・あ・ど"] = SOURCES["こ・そ・あ・ど"] || []).push(
  { nom: "Bunpro", page: "それ (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%82%8C" });
(SOURCES["こ・そ・あ・ど"] = SOURCES["こ・そ・あ・ど"] || []).push(
  { nom: "Bunpro", page: "あれ (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%82%E3%82%8C" });
(SOURCES["こ・そ・あ・ど"] = SOURCES["こ・そ・あ・ど"] || []).push(
  { nom: "Bunpro", page: "そこ (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%81%93" });
(SOURCES["こ・そ・あ・ど"] = SOURCES["こ・そ・あ・ど"] || []).push(
  { nom: "Bunpro", page: "あそこ (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%82%E3%81%9D%E3%81%93" });
(SOURCES["こ・そ・あ・ど"] = SOURCES["こ・そ・あ・ど"] || []).push(
  { nom: "Bunpro", page: "その (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%9D%E3%81%AE" });
(SOURCES["こ・そ・あ・ど"] = SOURCES["こ・そ・あ・ど"] || []).push(
  { nom: "Bunpro", page: "あの (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%82%E3%81%AE" });
(SOURCES["こ・そ・あ・ど"] = SOURCES["こ・そ・あ・ど"] || []).push(
  { nom: "Bunpro", page: "どれ (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%A9%E3%82%8C" });
(SOURCES["こ・そ・あ・ど"] = SOURCES["こ・そ・あ・ど"] || []).push(
  { nom: "Bunpro", page: "どこ (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%A9%E3%81%93" });
(SOURCES["こ・そ・あ・ど"] = SOURCES["こ・そ・あ・ど"] || []).push(
  { nom: "Bunpro", page: "どの (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%A9%E3%81%AE" });
(SOURCES["Verbes en る et en う"] = SOURCES["Verbes en る et en う"] || []).push(
  { nom: "Bunpro", page: "う-Verb (Dictionary) (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%86-Verbs" });
(SOURCES["Verbes en る et en う"] = SOURCES["Verbes en る et en う"] || []).push(
  { nom: "Bunpro", page: "Verbs (Non-past) (JLPT N5)", url: "https://bunpro.jp/grammar_points/verb-non-past" });
(SOURCES["Adjectifs en い"] = SOURCES["Adjectifs en い"] || []).push(
  { nom: "Bunpro", page: "い-Adjective + Noun (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%84-adjective-noun" });
(SOURCES["Adjectifs en い"] = SOURCES["Adjectifs en い"] || []).push(
  { nom: "Bunpro", page: "い-Adjective (Predicate) (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%84-adjective-predicate" });
(SOURCES["Adjectifs en い"] = SOURCES["Adjectifs en い"] || []).push(
  { nom: "Bunpro", page: "い-Adjective くなかった (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%84-Adjective-%E3%81%8F%E3%81%AA%E3%81%8B%E3%81%A3%E3%81%9F" });
(SOURCES["Adjectifs en な"] = SOURCES["Adjectifs en な"] || []).push(
  { nom: "Bunpro", page: "な-Adjective だ (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AA-adjective-predicate" });
(SOURCES["へ"] = SOURCES["へ"] || []).push(
  { nom: "Bunpro", page: "へいく (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%B8%E3%81%84%E3%81%8F" });
(SOURCES["〜が好き / 〜が上手"] = SOURCES["〜が好き / 〜が上手"] || []).push(
  { nom: "Bunpro", page: "のがすき (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AE%E3%81%8C%E3%81%99%E3%81%8D" });
(SOURCES["〜が好き / 〜が上手"] = SOURCES["〜が好き / 〜が上手"] || []).push(
  { nom: "Bunpro", page: "のがへた (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AE%E3%81%8C%E3%81%B8%E3%81%9F" });
(SOURCES["〜なかった"] = SOURCES["〜なかった"] || []).push(
  { nom: "Bunpro", page: "う-Verb (Negative-Past) (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%86-verb-neg-past" });
(SOURCES["なぜ / どうして / なんで"] = SOURCES["なぜ / どうして / なんで"] || []).push(
  { nom: "Bunpro", page: "どうして (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%A9%E3%81%86%E3%81%97%E3%81%A6" });
(SOURCES["なぜ / どうして / なんで"] = SOURCES["なぜ / どうして / なんで"] || []).push(
  { nom: "Bunpro", page: "なんで (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%82%93%E3%81%A7" });
(SOURCES["〜じゃない / 〜じゃなかった"] = SOURCES["〜じゃない / 〜じゃなかった"] || []).push(
  { nom: "Bunpro", page: "じゃなかった (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%98%E3%82%83%E3%81%AA%E3%81%8B%E3%81%A3%E3%81%9F" });
(SOURCES["〜と言う / 〜って"] = SOURCES["〜と言う / 〜って"] || []).push(
  { nom: "Bunpro", page: "と (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%A8" });
(SOURCES["〜て (enchaînement)"] = SOURCES["〜て (enchaînement)"] || []).push(
  { nom: "Bunpro", page: "Verb + て+ B (JLPT N5)", url: "https://bunpro.jp/grammar_points/verb-%E3%81%A6-b" });
(SOURCES["もう / まだ"] = SOURCES["もう / まだ"] || []).push(
  { nom: "Bunpro", page: "まだ～ていません (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%BE%E3%81%A0-%E3%81%A6%E3%81%84%E3%81%BE%E3%81%9B%E3%82%93" });
(SOURCES["〜から〜まで"] = SOURCES["〜から〜まで"] || []).push(
  { nom: "Bunpro", page: "Noun + まで (JLPT N5)", url: "https://bunpro.jp/grammar_points/noun-%E3%81%BE%E3%81%A7" });
(SOURCES["〜てもいい"] = SOURCES["〜てもいい"] || []).push(
  { nom: "Bunpro", page: "Verb + てもいい (JLPT N5)", url: "https://bunpro.jp/grammar_points/verb-%E3%81%A6%E3%82%82%E3%81%84%E3%81%84" });
(SOURCES["〜なければならない"] = SOURCES["〜なければならない"] || []).push(
  { nom: "Bunpro", page: "なくてはいけない (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%8F%E3%81%A6%E3%81%AF%E3%81%84%E3%81%91%E3%81%AA%E3%81%84" });
(SOURCES["〜なければならない"] = SOURCES["〜なければならない"] || []).push(
  { nom: "Bunpro", page: "なくてはならない (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%AA%E3%81%8F%E3%81%A6%E3%81%AF%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84" });
(SOURCES["〜ている"] = SOURCES["〜ている"] || []).push(
  { nom: "Bunpro", page: "ている③ (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%84%E3%82%8B3" });
(SOURCES["〜くて / 〜で (relier des adjectifs)"] = SOURCES["〜くて / 〜で (relier des adjectifs)"] || []).push(
  { nom: "Bunpro", page: "Adjective + て + B (JLPT N5)", url: "https://bunpro.jp/grammar_points/adjective-%E3%81%A6-b" });
(SOURCES["あげる / くれる / もらう"] = SOURCES["あげる / くれる / もらう"] || []).push(
  { nom: "Bunpro", page: "くれる (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%8F%E3%82%8C%E3%82%8B" });
(SOURCES["あげる / くれる / もらう"] = SOURCES["あげる / くれる / もらう"] || []).push(
  { nom: "Bunpro", page: "もらう (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%82%82%E3%82%89%E3%81%86" });
(SOURCES["〜が / 〜けど"] = SOURCES["〜が / 〜けど"] || []).push(
  { nom: "Bunpro", page: "けれども (JLPT N5)", url: "https://bunpro.jp/grammar_points/%E3%81%91%E3%82%8C%E3%81%A9%E3%82%82" });
