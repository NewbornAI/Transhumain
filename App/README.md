# Transhumains — App

Aide de table et archive publique du jeu de rôle Transhumains : un site statique,
lisible hors-ligne, ouvrable en double-cliquant (`file://`), sans serveur ni compte.

**État actuel : phase 0 — pipeline de données + PRD + garde-fous. Il n'y a pas
encore d'interface : `index.html` arrive en phase 1.** Ce dépôt contient
aujourd'hui la conversion vérifiée des notes du coffre en données machine, et les
outils qui garantissent qu'elles sont livrables.

## Ouvrir l'app

Pas encore ouvrable en tant qu'app (phase 1+). Les données livrées dans
`data/` sont des **scripts classiques** posant `window.TH_DATA` — aucun module
ES, aucun `fetch` : c'est ce contrat qui permettra d'ouvrir l'app en
`file://` par double-clic, et il est tenu dès maintenant, vérifié à chaque
contrôle (`tools/check.mjs`).

## Régénérer les données

Le contenu vit dans le **coffre Obsidian** (le dossier parent `transhumains/`),
source humaine unique. Depuis la racine du coffre :

    node App/tools/build-data.mjs

relit les notes (`Regles/`, `Lore/`, `Campagne/`, `Personnages/`,
`Vaisseaux/`, `Medias/`, `Archives/`) et régénère `App/data/content.data.js`
et `App/data/astronav.data.js`. `App/data/ref.data.js` et
`App/data/ships.data.js` sont des projections curées (pointer de source en tête
de fichier), modifiées à la main **après** correction du `.md` correspondant.

Puis contrôler le résultat :

    node App/tools/check.mjs

Sortie 0 = livrable : syntaxe de chaque fichier, chargement réel dans une VM
`window`-shim, comptes conformes (28 colonies, 11 moteurs, 5 routes
interstellaires, 3 systèmes détaillés, ≥ 10 sections de règles), et **zéro URL
externe** dans les fichiers livrés hors crédits explicitement listés.

## Où sont les sources humaines

Partout dans le coffre parent — l'app ne possède que l'état de jeu (à venir,
navigateur uniquement) et cette pipeline. Règle du coffre « nothing lives
twice » : on écrit dans les `.md`, on régénère, on commite. `data/*.data.js`
est généré, jamais édité à la main.

## Le PRD

`prd/transhumains-app.md` : décisions (journal §3), phases (§4), scénarios de
validation. Exécution : branche `main` de ce dépôt imbriqué, ignoré par le
coffre.
