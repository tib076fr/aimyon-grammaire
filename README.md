# Aimyon 文法

La grammaire japonaise (JLPT N5 à N1) expliquée par les chansons d'Aimyon.

- 831 points de grammaire : toutes les pages de grammaire de Bunpro, du N5 au N1, plus 32 points hors JLPT (dont le dialecte du Kansai). Chacun a une phrase modèle et, pour 250 d'entre eux, une courte citation d'une chanson (furigana, traduction, remarque).
- Le point de grammaire est coloré dans la phrase japonaise et dans sa traduction.
- Chaque fiche donne sa construction, une mise en garde quand la source en signale une, et des liens « Voir aussi » vers les points proches.
- Page Révision : une phrase à trou, quatre choix. Bouton « Je connais » sur chaque fiche (mémorisé dans le navigateur).
- Chaque fiche renvoie vers des guides de grammaire (Tae Kim, Tofugu, Imabi, Bunpro) et vers les paroles complètes sur un site externe.

## Utilisation

Le site compte deux pages, qui fonctionnent en ouvrant simplement le fichier dans un navigateur :

- `index.html` : le sommaire, toutes les fiches en cartes, avec filtres par niveau, par thème et par présence d'une chanson ;
- `fiches.html?p=<titre>` : une fiche, avec la fiche précédente, une au hasard et la suivante (sans `?p=`, la page renvoie au sommaire, qui sert de liste).

## Organisation

| Fichier | Rôle |
|---|---|
| `index.html`, `sommaire.js` | Le sommaire et ses filtres |
| `fiches.html`, `app.js` | La page d'une fiche |
| `style.css` | L'apparence des deux pages |
| `data-categories.js` | Le thème de chaque fiche |
| `data.js` | Mode d'emploi et outils communs aux données |
| `data-n5.js`, `data-n4.js`, `data-n3.js`, `data-n2.js`, `data-n1.js`, `data-hors-jlpt.js` | Les fiches de grammaire, par niveau (niveaux de Bunpro ; 32 points sont classés hors JLPT, dont 20 de dialecte du Kansai) |
| `data-sources.js` | Les sources de chaque fiche |
| `data-paroles.js` | Les liens vers les paroles complètes |
| `data-contexte.js` | La ligne d'avant et d'après chaque extrait de chanson |
| `data-pochettes.js` | Les pochettes (single ou album), chargées depuis Apple Music |
| `data-anecdotes.js` | Les anecdotes sourcées sur les chansons (infobulles) |
| `data-details.js` | Construction et mises en garde de chaque fiche |
| `data-liens.js` | Les points proches (« Voir aussi ») |
| `accessibilite.html` | La déclaration d'accessibilité (RGAA 4.1.2), liée depuis le pied de chaque page |
| `data-titres.js` | Le titre anglais officiel des chansons (catalogue Apple Music international), pour l'option « Titres : internationaux » |
| `revision.html`, `revision.js` | La page de révision |
| `chansons.html`, `chansons.js`, `data-albums.js` | La liste des chansons par album, avec les points de grammaire de chacune |
| `loupe-kanji.js`, `deinflexion.js`, `data-mots.js`, `data-kanji.js` | La loupe : au survol d'un texte japonais (ou en le touchant), le mot qui commence là, même conjugué (onglet « Mots », JMdict), et la fiche du kanji (onglet « Kanji » : lectures, sens, traits, clé, éléments), avec des liens vers Jisho et le Wiktionnaire |
| `reglages.html`, `reglages.js` | La page Réglages (⚙) : furigana, loupe, surlignage, langue des explications de la loupe, et le mode hors ligne (télécharger, mettre à jour, supprimer) |
| `sw.js` | Le service worker du mode hors ligne, installé seulement si l'on télécharge le site depuis les Réglages : réseau d'abord, copie téléchargée sans connexion |
| `romaji.js`, `data-lectures.js` | La recherche des fiches en romaji, et la lecture en kana des titres écrits en kanji |

## Paroles complètes (usage personnel)

Le texte entier des chansons n'est pas dans ce dépôt. Pour le récupérer en local (dossier `paroles-locales/`, ignoré par Git) :

```bash
python3 outils/telecharger-paroles.py
```

## Loupe : mettre à jour les données

`data-mots.js` est fabriqué à partir de JMdict, et `data-kanji.js` à partir de KANJIDIC2 et de KRADFILE (les sources de l'extension 10ten), en ne gardant que les mots et les kanji présents sur le site. Après avoir ajouté des fiches :

```bash
curl -O https://www.edrdg.org/kanjidic/kanjidic2.xml.gz && gunzip kanjidic2.xml.gz
curl -O https://www.edrdg.org/pub/Nihongo/kradfile.gz && gunzip kradfile.gz
curl -O https://www.edrdg.org/pub/Nihongo/JMdict.gz && gunzip JMdict.gz
python3 outils/generer-kanji.py kanjidic2.xml kradfile
node outils/generer-mots.js JMdict
```

## Droits

Les extraits de chansons sont de courtes citations à but pédagogique. Paroles © Aimyon et ses ayants droit.

Les données de la loupe (`data-mots.js`, `data-kanji.js`) viennent de JMdict, KANJIDIC2 et KRADFILE, propriété de l'[Electronic Dictionary Research and Development Group](https://www.edrdg.org/), utilisées selon [sa licence](https://www.edrdg.org/edrdg/licence.html) (CC BY-SA 4.0) ; ces deux fichiers sont sous la même licence.
