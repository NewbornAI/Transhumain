---
tags:
  - transhumains
  - equipement
  - rayon
updated: 2026-10-16
---

# Sommaire des rayons

Extraction du [[Supermarché]] (export de `Supermarché.xlsx`) en un fichier par rayon, alignée sur les 21 allées du catalogue interactif [Supermarché.html](../Supermarché.html). Prix quantifiés en **₡ (crédits)**, notations explicitées, renvois directs entre rayons.

> 1 ₡ = 1 mois de salaire — [[Transhumains - Règles#Economie|Économie]].
> **Variations nationales** : Alpha = gratuit jusqu'à 2–5 ₡ pour les citoyens ; Union = dotation selon besoin et réputation ; Xenos = tout payant, prix 0 = microtransaction (revenu universel 1 ₡/mois) ; Ares = prix standards, permis sur signature.
> **Disponibilité par défaut = coût.** Si la dispo du système est inférieure, jet DC Dispo, prix multiplié par la rareté ([[Transhumains - Règles#Economie|Disponibilité]]).

> **Images** : deux niveaux. Les **planches d'allée** (`../../Medias/Equipement/`) montrent chaque rayon en scène, 2048×1152. Le catalogue vend, lui, **une image par article** : `Images/<allée>-<slug>.jpg`, 1024×576, objet unique centré sur fond de studio sombre — contrat des deux jeux : [[Transhumains - Visual identity#Equipment plates|Visual identity]].

## Rayons

| Rayon | Articles | Renvois externes |
|---|---|---|
| [[Starter packs]] | 4 kits de création | — |
| [[Mods & implants]] | 18 mods | [[Augments]] |
| [[Cosmétique]] | 7 | — |
| [[Skillsofts]] | 6 (indices 3–6) | [[Transhumains - Règles#Création\|Création]] |
| [[Vêtements]] | 5 | [[Armures]] |
| [[Combinaisons]] | 5 | [[Mods & implants]] |
| [[Niveau de vie]] | 6 (mensuel) | [[Immobilier]] |
| [[Immobilier]] | 7 (achat) | — |
| [[Ingénierie]] | 11 | [[Transhumains - Règles#Crafting\|Crafting]] |
| [[Santé & bio]] | 11 | [[Matières premières]] |
| [[Électronique]] | 9 | [[Transhumains - Règles#Electronique\|Cybercombat]] |
| [[Interfaces & drones]] | 16 | [[Pokebots]], [[Vaisseaux]] |
| [[Chimie & effets]] | 25 | [[Mods & implants]], [[Santé & bio]] |
| [[Matières premières]] | 7 | [[Calculs transhumains]] |
| [[Augments]] | 10 blocs bioméca | [[Calculs transhumains]] |
| [[Armes cinétiques]] | ~30 | [[Armures]], [[Explosifs]] |
| [[Armes à énergie]] | 10 | [[Armures]] |
| [[Armures]] | 4 couches | [[Matières premières]], [[Armes cinétiques]] |
| [[Explosifs]] | 14 | [[Calculs transhumains]], [[Armes cinétiques]] |
| [[Pokebots]] | 2 châssis + 6 builds | [[Interfaces & drones]] |
| [[Vaisseaux]] | 17 fiches | [[Stratios Merc]], [[Transhumains - Spaceships]], [[Transhumains - SAD]] |

## Conventions

- **Taille standard (humain = 0)** : par taille supérieure → **+1 ₡, masse ×10** ; par taille inférieure → **masse ÷10** (prix inchangé).
- **Permis** : `M` — Militaire · `P` — Professionnel · `S` — Sûreté réseau · `V` — VIP · `A` — citoyen Alpha · `I` — Interdit (licence). Légende reprise de `Supermarché.html` ; **aucune légende n'existe dans les sources Drive — à valider**.
- **Prix en « i »** : `i` = indice de l'article (échelle 1–6). `i²`/`X²` = **i au carré** (✅ tranché par le MJ) → 1 / 4 / 9 / 16 / 25 / 36 ₡ ; une notation explicitement `i×2` se lirait « double de l'indice ». **Affichage (✅ tranché MJ)** : pas de calcul affiché — les familles à indice variable ([[Électronique#ICE — 6 versions|ICE]], [[Électronique#Virus éveillé — 6 versions|virus]], [[Électronique#Hub — 6 versions|hubs]], [[Électronique#Jammer — 6 versions|jammers]], [[Ingénierie#Senseur — 6 versions|senseurs]], [[Augments#Réflexes / overclock|réflexes military]]) sont déclinées en **versions concrètes, une par indice, marque différente** ; la formule ne sert plus qu'au calcul. ⚠️ voir [[#Notations surfaced ⚠️ — à trancher, non devinées]].
- **Options « +x ₡ »** : supplément au prix de l'article hôte (ex. "+1" = +1 ₡ sur le prix de l'article).

## Notations surfaced ⚠️ — à trancher, non devinées

| # | Notation | Occurrence | Lecture appliquée ici | Alternative possible |
|---|---|---|---|---|
| N1 | `i²`, `X²` | ICE, Virus éveillé, Réflexes Military | ✅ **tranché (MJ) : i au carré** → 1 / 4 / 9 / 16 / 25 / 36 ₡ | ~~i × 2~~ écarté |
| N2 | `i` seul | Hub, Jammer | ✅ **i ₡** (l'indice en crédits, tranché) | ~~i × 2~~ écarté |
| N3 | `1+i` | Senseur | **(1 + i) ₡** → 2 à 7 ₡ | — |
| N4 | `P` | Toxine, Persistant, Antidouleur, Antidote, Contrôle (+2P), Malware (P×) | ✅ **tranché (MJ) : P = puissance visée**, ajoutée en ₡ ; Malware = prix × P | — |
| N5 | `*` (prix seul) | Composé 100 doses | ✅ **tranché (MJ) : base = puissance visée P** → P ₡ avant modificateurs | — |
| N6 | `+1-3`, `+1-6` | Effet rapide, Évolutif, Discret | supplément de **1 à 3 ₡** / **1 à 6 ₡** (choix du fabricant) | — |
| N7 | `3 E` | Taser | ✅ **tranché (MJ) : dégâts électriques / EMP** | — |
| N8 | `💀` | Frégate / Station (coilguns capitaux) | **mort instantanée** sans jet | valeur de dégâts à chiffrer (7+ ?) |
| N9 | `N/A` | Perforation du shotgun | la dispersion **ignore l'armure** (mais × portée courte) | portée nulle contre armures |
| `—` | prix absent | Sédatif, Ingéré, Nuke, Micro-AM, Artillerie… | **non chiffré dans la source** → laissé vide + réserve | — |
| N10 | `3+2D`, `6+4D` etc. | Processeurs fixes (Maison, Magasin, Serveur, Mainframe) | indice **+ bonus de dés** (3 + 2D) | indice × dés |
| N11 | `M16` | colonne « Energy scale » du fusil d'assaut | cellule parasite (référence réelle ?) — **ignorée** | échelle d'énergie à définir |
| N12 | `3-`, `2-`, `4-` | Taille des Roues | taille **≤ 3 / ≤ 2 / ≤ 4** | prix 3 ₡ « − » |
| N13 | `×10` | prix des grenades | prix affiché **pour 10 unités** | stock ×10 |
| N14 | prix en `kg`, `tonnes` | Matières premières | prix par unité de masse indiquée, pas en bloc | — |
| N15 | `Es+Em` | Artificiels « Sur mesure » | prix = **Esprit + Empathie** en ₡ (source sûre pour la notation, à confirmer) | — |
| N16 | marqueurs `-10% !`, `Free !` | Starter packs | badges promo **non appliqués** au prix xlsx ; prix appliqués signalés dans [[Starter packs]] | remise déjà incluse |

**Autres tranchages (MJ)** : les colonnes `M`/`E` des cards de vaisseaux sont **ignorées** — les options du [[Vaisseaux#Options récurrentes|catalogue]] restent non chiffrées.

## Duplications & conflits relevés

| # | Constat | Emplacement | Arbitrage appliqué | Statut |
|---|---|---|---|---|
| D1 | **Nanotat** listé 2× avec descriptions différentes | xlsx Cosmetics | fusion en une entrée (1 mois d'abonnement + nanites lumineuses) | ✅ réglé — valider le texte fusionné |
| D2 | **Drone Bakta** listé 2× (« voir drones » + fiche complète) | xlsx Biologie & Interfaces | une seule entrée dans [[Santé & bio]], [[Interfaces & drones]] pointe dessus | ✅ |
| D3 | **Jet suit** : ligne vide du rayon Combinaisons + fiche 2 ₡ dans Augments/Fusées | xlsx | conserve dans [[Augments#Fusées / jets]] ; [[Combinaisons#Renvois\|renvoi]] depuis Combinaisons | ✅ |
| D4 | **Exosuit / Power armor** dans Interfaces *et* Armures (mêmes prix 5/10 ₡) | xlsx | conservés des deux côtés : coquille (Armures) vs pack autonome (Interfaces), prix cohérents | ✅ cohérent |
| D5 | **Homonymes « Autopilote »** : mod (0 ₡), skillsoft (2 ₡), option de drone/vaisseau (niveaux) | xlsx | distingués par rayon, alias explicités | ✅ |
| D6 | **Homonymes « Spider »** : pack Union, jambes bio, drone d'infiltration 6 ₡ | xlsx | trois articles distincts liés par renvoi | ✅ |
| D7 | **Mentor** : 10 ₡ au catalogue + note « Mise à jour : 1 ₡ (3 ₡ early access) » | xlsx Skillsofts | ✅ **tranché (MJ)** : **10 ₡ l'achat, 1 ₡ la mise à jour** (3 ₡ early access) ; l'obsolescence peut faire baisser le prix de mise à jour | ✅ |
| D8 | **Adaptation** : cellule prix corrompue en date Excel (2025-01-03) | xlsx Mods | 1 ₡ repris du catalogue HTML | ⚠️ à confirmer |
| D9 | **Refroidissement de plusieurs vaisseaux** : dates Excel (2024-02-03, 2024-03-04) | xlsx Vaisseaux | ✅ **tranché (MJ)** : valeurs corrompues **ignorées** — pas de restauration depuis Drive | ✅ |
| D10 | **Vampire 'SAD'** : ligne vide aux [[Armes cinétiques#Divers\|Armes cinétiques]] | xlsx | ✅ **tranché (MJ)** : **biomod qui draine les batteries** des gens → [[Mods & implants#Modules]] ; **10 ₡, permis `M`** — sa rareté gonfle le prix (dispo = coût) | ✅ |
| D11 | **Ares Wasp** : fiche complète dans le xlsx, absente du catalogue HTML | xlsx vs html | réintégrée dans [[Vaisseaux]] | ✅ |
| D12 | **Batteries/Materiaux (ref)** dupliqués entre Supermarché.xlsx et [[Calculs transhumains]], avec **valeurs divergentes** (ex. charge Graphene 18 s vs 4 s ; RTG 36 vs 18 MJ/kg) | xlsx | les rayons **lient** vers Calculs (source de calcul) ; copies du Supermarché non reprises | ⚠️ écart à purger |
| D13 | **Antimatière** : 1 g — l'énergie brute (E=mc², 2 g annihilés) vaut ≈ 43 kt TNT, mais le chiffre du tableur (10⁷ kg = **10 kt**) est le **rendu blast effectif** : une part de l'énergie part en rayonnement gamma, neutrons et débris qui ne couplent pas comme une explosion chimique | xlsx vs html | ✅ **tranché (MJ)** : 10 kt retenu comme équivalent TNT d'effet ; 43 kt = énergie brute, à distinguer | ✅ approximation de travail : **couplage 20–30 %** (10/43 ≈ 23 %) — affinage éventuel plus tard |
| D14 | **Promo starter packs** : bannière HTML (−10 % Ares seulement) vs badges xlsx (−10/−10/−20) | xlsx vs html | ✅ **tranché (MJ)** : **−10 % Ares, −10 % Xenos, −20 % Union** ; prix promo retenus dans [[Starter packs]], bannière HTML corrigée | ✅ |

## Marques & corporations

Les marques des versions déclinées (une par indice) s'appuient sur les corporations du lore : [[Transhumains - Règles#Nations|Nations & corporations]] — Alpha (Son-Y, Neumann, Hardvard, Bakta, YouPub, Hazat…), Ares (Legion, Templiers, Macrotek, Radiance, Skavs, Voodoos…), Union (Ten-Cents, TherMoss, NetWatch, Stategrid, Zarya…), Xenos (Guilde, LEG GO, SETI, Max-Tak, Cowboy, X-Cell…) — et la corporation indépendante **S.A.D.** (Tau Ceti, cf. [[Transhumains - SAD]]), déjà associée aux articles « 'SAD » et « Booster 'DDE ».

> Les siglages **'JC'** (Monosting, Smarter, Beenade) et **'SC'** (Power fist, Metalos) sont des **marques de joueurs** — ✅ tranché par le MJ : conservées telles quelles, sans définition à ajouter au lore. **'SAD'** reste la corporation indépendante ([[Transhumains - SAD]]).

## Flux des données (règle « link over copy »)

- **Source humaine unique** : les 21 notes de ce dossier — catalogue, prix quantifiés, arbitrages du registre ci-dessus.
- **Images d'articles** : une par article hors vaisseaux — `Images/<allée>-<slug>.jpg`, rendues à 1024×576 puis converties en JPEG (≈ 55 Ko), **une seule recette** (objet unique centré, fond de studio sombre, lumière et marge identiques) pour que la grille reste lisible à 118 px de haut. Brief par article : `Images/briefs.json` (sujet + maison) ; les palettes sont lues à l'exécution dans [[Transhumains - Corporate identity]] et [[Transhumains - Visual identity]] ; outils : `outils/render-articles.mjs` (repris au besoin — il saute ce qui existe et réessaie en cas de bridage) puis `outils/link-images.mjs`, qui écrit le champ `img` de l'export. Les vaisseaux restent sans image ([[Transhumains - Visual identity#Ships are out of scope|hors périmètre]]), la vignette retombe alors sur le dégradé du rayon.
- **Export machine** : [supermarche.data.js](../données/supermarche.data.js) — **280 lignes** (225 cartes visibles + 55 variantes listées dans leur fiche), allées, permis, champ `img` par article, + `meta.conventions` (résumé des arbitrages). Importé par [Supermarché.html](../Supermarché.html) via `<script src>` ; **la page ne contient plus aucune donnée éditée à la main**.
- **Règle** : tout arbitrage ou prix nouveau se consigne d'abord ici et dans le rayon concerné, puis est répercuté dans l'export machine (l'inverse est interdit).
- **Configurateur** : le [[Chimie & effets#Bases|composé]] est une carte **« ⚗ CONFIG »** unique — puissance P 1–6, add-ons cochables, doses au choix, prix recalculé en direct ((P + additifs) × multiplicatifs × doses/100). Les commandes composées entrent au panier sous un nom auto-descriptif suffixé du prix (`… · 60 ₡`), qui survit au rechargement.
- **Description = information principale** : la **carte popup (fiche)** porte un conteneur dédié en bas de carte (`.fdesc`, pleine largeur, version longue). Les descriptions sont **analysées** : toute mention d'un autre article (≥4 caractères,frontière de mot, correspondance la plus longue d'abord, 'Mode' exclu des faux positifs) devient un lien direct ouvrant la fiche de l'article mentionné — les packs renvoient ainsi pièce par pièce aux rayons.
- **Descriptions retravaillées** : chaque article de l'export porte désormais une description produit complète (une phrase minimum, plusieurs lignes quand le contenu s'y prête), fidèle aux tableaux des rayons ; une correction de contenu est intervenue (Plaquage dermique, dont la fiche portait le texte de l'add-on Évolutif). Les 4 starter packs ont été reformatés en lignes sans changement de contenu.
- **Hero cards** : les familles à indice variable n'occupent qu'**une carte** dans le catalogue HTML ; la fiche ouverte liste les versions par indice, commandables une à une (variantes marquées `parent`, masquées dans la grille). `Supermarché.html` servi depuis `Equipement/` (double-clic ou http) fonctionne tel quel ; les images pointent `../Attachments/`.
- La copie brute du Drive reste [[Supermarché]] (régénérable par le flux « Rafraîchir depuis Drive », nonéditée).
