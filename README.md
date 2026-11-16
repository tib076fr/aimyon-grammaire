# Aimyon 文法

La grammaire japonaise (JLPT N5 à N3, plus quelques points N2) expliquée par les chansons d'Aimyon.

- 196 points de grammaire, chacun avec une phrase modèle et, quand c'est possible, une courte citation d'une chanson (furigana, traduction, remarque).
- Chaque fiche renvoie vers des guides de grammaire (Tae Kim, Tofugu, Imabi, Bunpro) et vers les paroles complètes sur un site externe.

## Utilisation

Le site compte deux pages, qui fonctionnent en ouvrant simplement le fichier dans un navigateur :

- `index.html` : le sommaire, toutes les fiches en cartes, avec filtres par niveau, par thème et par présence d'une chanson ;
- `fiches.html` : les fiches complètes (`fiches.html?p=<titre>` affiche une seule fiche).

## Organisation

| Fichier | Rôle |
|---|---|
| `index.html`, `sommaire.js` | Le sommaire et ses filtres |
| `fiches.html`, `app.js` | Les fiches complètes |
| `style.css` | L'apparence des deux pages |
| `data-categories.js` | Le thème de chaque fiche |
| `data.js` | Mode d'emploi et outils communs aux données |
| `data-n5.js`, `data-n4.js`, `data-n3.js`, `data-n2.js` | Les fiches de grammaire, par niveau (niveaux de Bunpro) |
| `data-sources.js` | Les sources de chaque fiche |
| `data-paroles.js` | Les liens vers les paroles complètes |
| `data-contexte.js` | La ligne d'avant et d'après chaque extrait de chanson |
| `data-pochettes.js` | Les pochettes (single ou album), chargées depuis Apple Music |
| `data-anecdotes.js` | Les anecdotes sourcées sur les chansons (infobulles) |
| `romaji.js` | La recherche des fiches en romaji |

## Paroles complètes (usage personnel)

Le texte entier des chansons n'est pas dans ce dépôt. Pour le récupérer en local (dossier `paroles-locales/`, ignoré par Git) :

```bash
python3 outils/telecharger-paroles.py
```

## Droits

Les extraits de chansons sont de courtes citations à but pédagogique. Paroles © Aimyon et ses ayants droit.
