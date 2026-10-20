---
tags:
  - transhumains
  - moc
  - accueil
source: gdrive:Transhumains
exported: 2026-10-06
updated: 2026-10-15
---

# Transhumains

Jeu de rôle de science-fiction dure, XXIVᵉ siècle (inspiré The Expanse, Cyberpunk, Eclipse Phase, Ghost in the Shell). Ce coffre organise l'export du dossier Google Drive **Transhumains** (5 documents, 12 tableurs, 37 illustrations, 1 diagramme).

## Univers & Lore
- [[Transhuman background]] — histoire (XXIIᵉ–XXIVᵉ s.), sociétés post-scarcity, nations majeures (Alpha, Ares, Union, Venus)
- [[Transhumains - Astronav]] — systèmes stellaires, cartes, distances, vitesses interplanétaires ; + Jupiter/Sol (données réelles sourcées, ajout 2026-10-08)
- [[Transhumains - Profils]] — profils des colonies (Sirius, YZ Ceti, Proxima, Alpha Cen, Sol, Gem)
- [[Transhumains - Jove]] — mégacorps montante : datacenter planétaire sur Titan, doctrine jovienne (courber, cacher, dévier)

## Règles du jeu
- [[Transhumains - Règles]] — cœur du système : fiche de perso, création, historiques, skillchecks, crise, crafting, économie, chronologie
- [[Caracs]] — table objets : dégâts cinétique / thermique / PV
- [[Calculs transhumains]] — le moteur de calcul : batteries, réacteurs, augmentations, thermiques, lasers, masses de vaisseaux, blindages…
- [[Transhumains - archive]] — anciennes versions des règles de combat (archivées)

## Matériel
- **🛒 [Supermarché.html](../Equipement/Supermarché.html)** — catalogue en ligne interactif (280 articles, rayons, permis, panier en ₡) — importer de `Equipement/données/supermarche.data.js` (export des [[00 Sommaire des rayons|rayons]]) ; ouvrir dans le navigateur pendant la partie
- [[Supermarché]] — catalogue d'achat : équipement, augmentations, armes, armures, explosifs, vaisseaux, pokebots, batteries, matériaux
- **[[00 Sommaire des rayons|🧺 Rayons extraits (21)]]** — un fichier par rayon dans `Equipement/Rayons/`, prix ₡ quantifiés, légendes permis/notations, registre des duplications & conflits
- [[Stratios Merc]] — fiches marchandes des vaisseaux (Stratios Merc / Patrol / LEG GO Shark)

## Vaisseaux
- [[Transhumains - Spaceships]] — fiche technique de la Stratios Patrol
- [[Transhumains - SAD]] — profils de stations & navires : S.A.D, The Ender, Rocinante, LEG GO Requin, Poings de Shiva, Pokebots, Shadow Runners

## Campagne
- [[Campagne transhu]] — préparation du MJ : Sirius, Ares, Tau Ceti, Proxima-Ouest, factions, idées, intros

## Personnages
- [[Transhumains - Personnages]] — fiches de personnages (FP) des joueurs et PNJ clés

## Fictions & one-shots
- [[70R]] — dialogue d'un agent IA hacker (pièce narrative)
- [[Bliss]] — nouvelle
- [[Chaude retraite]] — nouvelle courte
- [[Représailles]] — scénario / one-shot

## Médias
- [[Transhumains - Images]] — index des 37 illustrations (vaisseaux, HUD, cartes)
- [[Transhumains - Visual identity]] — faction plates (Alpha, Hazat, Ares, Skavs, Xenos, Union) + palette tokens ; doc technique en anglais
- [[Truands sournois (prototype)]] — app Bubble « LEGION » : inspiration visuelle des outils HTML
- `Source/Oneshot transhumains.drawio` — diagramme des one-shots (plugin draw.io ou diagrams.draw.io)

---

## Organisation du coffre

```
00 Accueil/   cette note
Lore/         univers, systèmes, colonies
Regles/       système de jeu + tables de calcul
Equipement/   catalogues et boutiques
Vaisseaux/    fiches de navires
Personnages/  fiches de persos
Campagne/     notes de MJ
Fiction/      nouvelles & scénarios
Medias/       index d'images
Archives/     vieilles versions
Attachments/  images (embeds Obsidian)
Source/       fichiers Drive bruts (docx, xlsx, drawio)
```

- Les onglets Google Sheets anonymes (`Sheet46`, `Form Responses 1`, `Copy of…`) sont regroupés dans une section **Scratch** en fin de [[Calculs transhumains]] et [[Stratios Merc]].
- Les en-têtes de colonnes vides des tableurs exportés apparaissent comme cellules vides (les placeholders `col2`, `col3`… ont été nettoyés).
- Les vignettes de "fiche" (Spaceships, SAD) restent en grille brute : leur mise en page Excel fusionnée ne convertit pas proprement.

## Rafraîchir depuis Drive

Re-export (staging `C:\agentic\transhumains-src`, convertisseur `C:\agentic\transhumains-md-convert.py`) :

```powershell
C:\agentic\tools\rclone-v1.75.1-windows-amd64\rclone.exe copy gdrive:Transhumains C:\agentic\transhumains-src --fast-list
```

> [!warning] L'`client_id` partagé de rclone est retiré courant 2026 — basculer le remote sur un `client_id` OAuth personnel avant qu'il ne casse. Cf. https://rclone.org/drive/#making-your-own-client-id

> [!note] Un re-export écrira des fichiers à plat ; les re-ranger dans les dossiers ci-dessus (ou diriger le convertisseur vers les bons dossiers) et relancer le tri.
