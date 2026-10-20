---
tags:
  - transhumains
  - app
  - prd
updated: 2026-10-08
---

# App Transhumains — PRD

Status: decisions settled (2026-10-08, grilling session + quatre passes de recherche factuelle).
Execution: branch `transhumains-app` — not started.

## 1. Purpose and end state

L'app est **l'écran unique de la table** : elle réunit ce qui est aujourd'hui dispersé dans une
quarantaine de notes Obsidian et douze tableurs — archive publique (lore, carte stellaire, dossiers de
PNJ, catalogue de supermarché) et outils de jeu (fiches de personnage, page de crise, console de
pilotage Astronav), sur un site statique hébergé, lisible sur téléphone en pièce sombre, utilisable
hors-ligne, et compréhensible par quelqu'un qui ne connaît pas le jeu.

Critère d'end state : toute question de règle, d'objet, de PNJ ou de trajet se résout sans quitter
l'app, sans attendre le MJ, et sans réseau.

Sources:
- `Regles/Transhumains - Règles.md`, `Regles/Caracs.md` — système de jeu (fiche, création, skillchecks, crise, crafting, électronique, économie, nations, chronologie, aérospatiale).
- `Lore/Transhuman background.md`, `Lore/Transhumains - Profils.md`, `Lore/Transhumains - Astronav.md` — univers, colonies, routes.
- `Equipement/Rayons/*.md` → `Equipement/données/supermarche.data.js` — catalogue (source humaine / export machine).
- `Personnages/Transhumains - Personnages.md` — fiches FP existantes (référence, import au mieux).
- `Vaisseaux/Transhumains - Spaceships.md`, `Vaisseaux/Stratios Merc.md`, `Vaisseaux/Transhumains - SAD.md` — fiches vaisseaux.
- `Source/_design/mockup-supermarche*.html` (v1, v2, finale) + `mockup-supermarche-v1.png` — lignée visuelle de référence.
- `Source/_design/styles.html` — maquette comparative à six styles, **Signal retenu** ; son contenu est un placeholder (Q32). Les trois `final-*.png` ont été **retirés volontairement** le 2026-10-08 : le prototype HTML du supermarché fait foi.
- `Source/_design/crise-table.html` — prototype de **comportement** en style Signal : paquet de cartes, nappes empilées, jets qui consomment les dés. Gestuelle validée en navigateur ; son contenu reste placeholder (Q32).
- `Medias/Truands sournois (prototype).md` — prototype Bubble « LEGION », à recréer.
- `workspace/transhumains-assets/stellar/stellar_catalog.json` — 275 systèmes, 375 composantes, 154 planètes (0–30 ly), sauvé de `C:\Users\efilo\Desktop\Python\scraper\`.

## 2. Roles / system boundaries

**Le coffre Obsidian** possède le *contenu* : règles, lore, catalogue, fiches vaisseaux, campagne,
images sources. Aucune donnée de contenu n'est éditée dans l'app ; c'est le seul endroit où l'on écrit
du texte de jeu.

**Le générateur** (`app/tools/build-data.mjs`) possède la *conversion* : notes markdown → `data/*.data.js`
versionnés, avec comptes vérifiés à chaque exécution. Il ne décide rien, il projette.

**L'app** possède l'*état de jeu* : fiches de personnage, paniers, crise en cours, brouillons de dossiers
PNJ, réglages. Cet état vit dans le navigateur (localStorage/IndexedDB), s'exporte en JSON, et ne
remonte jamais au serveur — il n'y a pas de serveur.

**L'éditeur de dossiers PNJ** possède les *brouillons* : création locale, export vers le fichier de
données versionné. Publier un PNJ, c'est commiter un export, pas cliquer dans une administration.

**L'hébergeur** (Vercel Hobby, migration possible vers Cloudflare Pages + R2) possède la *livraison des
octets* : aucun code serveur, aucune fonction, uniquement des fichiers statiques.

**Le matériel source hors dépôt** (`C:\Transhumains`, wiki, `images vrac`, `portraits`, jeu stellaire)
possède les *originaux* ; l'app ne reçoit que des dérivés recadrés et compressés.

**Le MJ** possède le *secret* : ce qui ne doit pas être lu ne se construit pas dans le site public.

## 3. Decision log

Confidence legend: 95-100 = settled by fact or explicit call; 85-90 = firm, implementation may surface
detail changes; 75-85 = a real branch is live and may be revisited mid-phase. Les lignes 75-85 % sont
les seules où un agent d'implémentation doit **s'arrêter et remonter** plutôt que trancher.

| # | Area | Decision | Confidence |
|---|---|---|---|
| Q1 | Produit | Aide de table d'abord, mais lisible par un non-initié | 95% |
| Q2 | Diffusion | Site public unique, hébergé (Vercel Hobby d'abord) | 90% |
| Q3 | Séquencement | On commence par un prototype ; Astronav en dernier | 95% |
| Q4 | Sources | Le coffre (.md) est la source du contenu ; l'app possède l'état de jeu | 95% |
| Q5 | Usage | Chacun son écran, surtout smartphone ; le statique suffit | 90% |
| Q6 | Existant | `Equipement/Supermarché.html` est une maquette : absorbée, remplacée par une redirection | 95% |
| Q7 | Design | **Tranche** : style **Signal** retenu (équerre longue, rayon 6 px, ligne de piqure). Les deux autres candidates douces restent tracées dans la maquette | 95% |
| Q8 | Outils de table | Page Crise dédiée : initiative, pools de dés des PNJ, localisation ; pas de terrain ; vaisseaux en second temps | 90% |
| Q9 | Gouvernance | PRD dans le dépôt de l'app ; exécution par phases avec `prd-execution` | 90% |
| Q10 | Forme du PRD | Gabarit ForTKSim respecté, avec frontmatter Obsidian ajouté au-dessus | 90% |
| Q11 | Dépôt | Dépôt git imbriqué `transhumains/App/.git`, ignoré par le coffre ; pas de submodule | 90% |
| Q12 | Images | Les images servent d'abord les PNJ (portrait, carte, token) ; le volume doit passer l'échelle | 90% |
| Q13 | Produit | Un seul artefact : archive publique + outils de table, même site | 90% |
| Q14 | Périmètre | Roster PNJ = module à part ; atlas dans Astronav ; le wiki est une source ; SystemView est abandonné | 90% |
| Q15 | Publication | Tout est public, sauf les PNJ non encore révélés (drapeau) | 90% |
| Q16 | Images | Originaux hors dépôt ; dérivés générés ; cadrages normalisés (portrait 2:3, carte 16:9, token carré) | 85% |
| Q17 | Comptes | Aucun compte, aucun backend en v1 | 90% |
| Q18 | Appareils | Responsive ; fiche locale par appareil ; aucune synchronisation | 85% |
| Q19 | Images en ligne | Constante `IMAGE_BASE` unique : relative en local, absolue en ligne | 85% |
| Q20 | Hébergement | Vercel Hobby d'abord ; migration Cloudflare Pages + R2 si les images pèsent | 80% |
| Q21 | Roster | Concevoir pour quelques centaines, livrer les 16 existants | 90% |
| Q22 | Langue | Français partout ; l'anglais est réservé aux noms propres d'univers (LEGION) | 90% |
| Q23 | Édition PNJ | Éditeur local + export vers le fichier versionné ; pas d'administration en ligne | 85% |
| Q24 | Zone MJ | Drapeau « non publié » assumé comme de l'obscurité ; jamais de faux secret client ; le vrai secret ne se construit pas | 90% |
| Q25 | Persistance | Export/import en v1 ; PWA installable en phase 2 (seul chemin durable sur iOS) | 90% |
| Q26 | Prototype | On garde le pipeline de données, on jette la coquille UI (routeur multi-segments + modales) | 90% |
| Q27 | Données stellaires | Intégrer le JSON 0–30 ly tel quel ; re-scrape à 50 ly en item externe ; créditer la source | 85% |
| Q28 | Style | Le style de base s'est décidé sur la maquette comparative (`Source/_design/styles.html`, six styles, quatre écrans, bascules gris et photocopie) | 95% |
| Q29 | Crise | L'unité de suivi est le **groupe** (PNJ seul, escouade, équipe d'agents) ; joueurs et PNJ sont traités symétriquement dans le même registre | 95% |
| Q30 | Crise | **Un jet ne touche aucune autre fiche** que celle du groupe qui le lance — aucune écriture croisée entre fiches | 95% |
| Q31 | Crise | **Un résultat de jet ne déclenche rien** : pas de dégâts appliqués, pas de blessure créée, pas de statut posé. La résolution appartient à la table | 95% |
| Q32 | Maquettes | Le contenu des maquettes est un **placeholder non canonique** : noms, chiffres et textes ne font autorité sur rien. Aucune donnée d'application n'est lue ou inspirée de `Source/_design/` — la maquette ne prête que sa forme | 95%
| Q33 | Ergonomie | **Mobile d'abord** : tout s'ouvre au tap, toute décision est une **nappe inférieure qui s'empile** (la couche du dessous recule, se voile et **dépasse au-dessus** de la nouvelle), elle se ferme en la **glissant vers le bas**, par `Échap` ou par le voile ; jamais de dialogue centré, jamais le survol comme seul indice ; cibles ≥ 44 px | 95% |
| Q34 | Crise | La table de crise suit les **PNJ**, pas les joueurs : les PJ vivent sur leurs fiches, les PNJ changent à chaque partie | 95% |
| Q35 | Crise | Trois provenances pour un groupe : **import du roster** (PNJ nommés), **PNJ générique par niveau** (3-4-5-6), **copie modifiée** d'un profil importé | 90% |
| Q36 | Données | Toute fiche nommée du coffre est un **PJ**. Les PNJ nommés viennent du roster LEGION ; les mercenaires génériques suivent un profil par âge ; à défaut, le MJ fait au feeling | 90% |
| Q37 | Édition | L'édition reste **ouverte pendant la partie** : caracs, compétences et bonus modifiables à tout moment. Un profil importé ne se verrouille jamais | 95% |
| Q38 | Dés | Un jet affiche **les dés et le nombre de succès**, sans cible de succès à régler : les oppositions se tranchent à la table | 95% |
| Q39 | Dés | **Réflexes (sur Corps) et overclock (sur Processeur) appliqués par défaut**, avec un interrupteur unique pour les couper ; un champ de **bonus en dés** signé (+6D rafale, -2D environnement adverse), à borne haute explicite | 95% |
| Q40 | Structure | **Un seul écran.** Le registre et la fiche d'un groupe sont le même plan qui se **déplie et se replie sur place** ; empiler un écran sur un écran est un défaut. Le jet reste une **pop-up à mi-écran**, pour garder visible le groupe qui lance | 95% |
| Q41 | Vocabulaire | Deux mécanismes distincts, pas une seule famille de couches : **Expand** = conteneur intelligent qui masque et affiche au tap ; **Popup** = HUD transitoire au tap | 90% |
| Q42 | Escouade | Une escouade est un groupe de PNJ qui agissent **en synchronie** (cinq chiens à la chasse, drones connectés) : ils lancent **ensemble** et **s'aident** les uns les autres | 95% |
| Q43 | Motion | Le lancer doit être **fluide** : les dés se posent, ils n'apparaissent pas d'un bloc | 85% |
| Q44 | Diegèse | **Anti-pattern nommé** : la prose de développement et les commentaires d'implémentation n'ont pas leur place à l'écran (ex. « vérifié · Apex seul consommé · aucun effet appliqué »). L'interface doit se lire comme **l'instrument virtuel du personnage** | 95%
| Q45 | Dés | L’effort par défaut d’un jet est **1 dé** : c’est ce qui maximise l’accélération (les dés de réflexes/overclock s’ajoutent sans toucher la réserve) et laisse de quoi se défendre. Lancer toute la réserve est le *hail mary* du PNJ qui va mourir ou du PJ sûr d’éliminer la menace — accessible au stepper, jamais par défaut | 95% |
| Q46 | Modèle de données | Corps et Processeur sont **transitoires** : un personnage change de corps comme de chemise (Apex), et ces valeurs peuvent **dépasser 6** (prototypes). Les compétences peuvent **monter sans limite**, le standard restant 6 (campagnes haut niveau). Aucun plafond de 6 n’existe dans l’app ; le stepper s’arrête à une borne de pure raison (20), pas à une règle | 95% |
| Q47 | Validation | **Le client valide l’interface de crise** telle que prototypée (expand sur place, pop-up à mi-écran, effort par défaut 1, escouade synchrone, style Signal, voix diégétique). La maquette `Source/_design/crise-table.html` n’est plus une exploration : **sa forme fait contrat** pour la phase 5 — seul son contenu reste non canonique (Q32) | 95% |
| Q48 | Méthode | **Maquettes d’abord** : chaque écran est prototypé et validé dans `Source/_design/` avant d’être implémenté ; les phases 1+ attendent la validation de leur maquette. File : table de crise (validée Q47) → **fiche de personnage** (en cours) → supermarché (la référence existante est à recoudre dans la grammaire Signal/Q47) → astronav (interface de pilote) → consultation des règles/lore | 95% |
| Q49 | Données | Les fiches existent en **plusieurs versions** (format ou règles dépassés) : la plus récente est l’unique source de valeurs ; les versions dépassées restent visibles dans le rail mais marquées et atténuées, et ne fournissent jamais une valeur. Les grilles anciennes à doublons se replient sur les **6 zones canoniques** (tête, poitrine, bras droit, bras gauche, abdomen, jambes) | 95% |
| Q50 | Diegèse | Les blessures se lisent sur une **silhouette de corps humain** (SVG inline, 6 zones), du vert sain au rouge critique, comme un HUD de jeu — usage couleur que Q44/Q47 permettent parce que la sévérité se lit **aussi** par la luminance et le chiffre, jamais par la teinte seule. Les zones de la silhouette ne sont pas des cibles tactiles (trop petites) : l’édition reste sur les 6 boutons de zone (≥ 44 px) dont le tap fait pulser la zone correspondante. Sain = vert **atténué** (teinte basse), pas un signal | 95% |

## 4. Phase plan

Chaque phase porte un résultat en une ligne, des tranches numérotées (5-8, dimensionnées pour un agent),
des **gates** rejoués par l'orchestrateur, et un **scénario de validation nommé** dont les `Pass criteria`
s'observent sur des faits. Un commit par tranche est le plancher.

### Phase 0 — Dépôt, pipeline, garde-fous

Outcome: le dépôt de l'app existe, versionne le pipeline de données vérifié, et refuse ce qui ne devrait pas y entrer.
Slices:
1. `git init` dans `transhumains/App/` (branche `main`), premier commit du pipeline seul (`tools/build-data.mjs`, `data/*.data.js`, `data/ref.data.js`, `data/ships.data.js`) ; ligne `transhumains/App/` ajoutée au `.gitignore` du coffre — commit séparé, côté vault.
2. Déplacer la coquille du prototype (`index.html`, `assets/app.css`, `js/core.js`) vers `workspace/transhumains-spike/` : hors dépôt, réversible, jamais commitée.
3. `tools/check.mjs` : chaque `data/*.data.js` se charge (`node --check`), les comptes attendus sont présents (28 colonies, 11 moteurs, 5 routes interstellaires, 3 systèmes détaillés, 10 sections de règles minimum + présence des titres), et aucun fichier livré ne contient d'URL externe hors les crédits explicitement listés.
4. `README.md` : comment ouvrir l'app (double-clic, `file://`), comment régénérer les données, où sont les sources humaines.
5. `.gitattributes` : `* text=auto eol=lf` — le dépôt doit rester propre entre Windows et un clone Linux.
6. `prd/notes/` : dossier des notes de phase (décisions d'implémentation, écarts au PRD).
Gates: `node tools/build-data.mjs` (0 avertissement, comptes conformes) ; `node tools/check.mjs` (sortie 0) ; `git status` propre.
Scenario — **Dépôt froid**: copier le dépôt seul dans un dossier vierge, sans le coffre. Pass criteria: `node tools/check.mjs` sort 0 ; l'app s'ouvre en `file://` ; aucune donnée manquante ; la recherche d'URL externe ne remonte que les crédits.

### Phase 1 — Prototype de direction (le spike)

Outcome: une direction visuelle est choisie sur la base de deux mockups testés à la table, pas d'une opinion.
Slices:
1. `Source/_design/styles.html` : **la maquette comparative** — un même écran (crise + fiche + supermarché) décliné en plusieurs styles côte à côte, chacun avec sa palette, ses polices (polices système uniquement, zéro webfont), sa densité et ses formes ; c'est le support de la décision Q7/Q28.
2. `Source/_design/mockup-crise-tiroir.html` : le style retenu appliqué à la carte de crise en profondeur 1 — six tuiles-verbes géantes dans la bande du pouce, tiroir unique, puce de focus, aucune sous-page.
3. `Source/_design/alerte-demo.html` : trois sévérités, overlay plein cadre en `clamp()`, vibration si disponible **avec repli visuel obligatoire**, fermeture au tap ou après 6-10 s.
3. `Source/_design/mockup-fiche.html` : la fiche dense — c'est elle qui fixe la limite de lisibilité du produit.
4. `Source/_design/mockup-supermarche-tiroir.html` : le même squelette appliqué à la grille du supermarché, pour vérifier que la grille de cartes survit à la profondeur 1.
5. `prd/notes/phase-1.md` : quelle direction par défaut (A Console de table / B Instrument / C Archive lisible), quels éléments retenus de chaque branche, et la classe de chaque écran (« coup d'œil » 3 m ou « concentré » 40 cm).
Gates: les mockups s'ouvrent en `file://` ; onglet Réseau vide (aucune requête, aucun CDN, aucune police distante).
Scenario — **Pièce sombre**: un téléphone réel, luminosité minimale, une main, pièce faiblement éclairée ; une personne qui n'a jamais vu l'app doit (a) trouver la tuile « frapper » en moins de 5 s, (b) lire à 3 m le nom et les points de vie du personnage actif, (c) annoncer à voix haute le contenu d'une alerte pendant que le porteur ne regarde pas l'écran. Pass criteria: les trois gestes réussis par au moins deux personnes sur trois ; durées consignées dans `phase-1.md`.

### Phase 2 — Coquille, navigation, PWA

Outcome: le squelette définitif — profondeur 1, tiroir unique, puce de focus — plus une app installable.
Slices:
1. `js/core.js` réécrit : routeur à **un seul segment**, registre de vues, tiroir unique, puce de focus, aucun modal.
2. `assets/app.css` : jetons de couleur, échelle typographique, classes du design system retenu en phase 1.
3. `index.html` : coquille et chargement des `data/*.data.js` en **scripts classiques** — l'app doit s'ouvrir en double-clic, donc pas de module ES.
4. `manifest.webmanifest`, icônes, `sw.js` minimal (cache-first des fichiers statiques) ; bouton « installer » discret, jamais harcelant.
5. `navigator.storage.persist()` demandé au premier enregistrement de fiche, avec message explicite si refusé.
6. Feuille de style d'impression pour la fiche et les pages de règles.
Gates: `node --check` sur tous les `.js` ; `node tools/check.mjs` ; zéro requête réseau hors origine, vérifié onglet Réseau en mode hors-ligne.
Scenario — **Une main**: à 390×844, réseau coupé, cinq cartes, aucune modale. Pass criteria: les cinq cartes sont atteignables en deux gestes au plus depuis n'importe quelle autre ; le hash ne contient jamais plus d'un segment ; un rechargement hors-ligne retombe sur la même carte ; le tiroir n'ouvre jamais plus d'un niveau ; la fiche survit à un redémarrage du navigateur.

### Phase 3 — Règles & Lore

Outcome: tout le corpus de règles et de lore est consultable, cherchable et citable, sans tableur.
Slices:
1. Rendu des blocs markdown (paragraphes, listes, tableaux, encadrés) depuis `content.data.js`.
2. Sommaire par section, navigation clavier, ancrage par section.
3. Recherche globale (palette `Ctrl+K`) sur les sections, compétences, objets, PNJ et systèmes.
4. **Index par question bloquante** : `data/questions.data.js` écrit à la main depuis les règles — « combien de dés pour viser en gravité nulle ? » — chaque entrée pointant vers sa section source.
5. Fiches de référence rapides : skillcheck, crise, économie, chronologie, aérospatiale.
6. Mode impression « page de règles ».
Gates: `node tools/check.mjs` — chaque entrée de `questions.data.js` pointe vers une section existante, et toute section du corpus est atteignable depuis le sommaire.
Scenario — **La question du milieu de partie**: dix questions réelles tirées du corpus (trois skillchecks, deux économie, deux crafting, deux crise, une chronologie). Pass criteria: chaque question trouve sa section en deux gestes et dix secondes au plus depuis n'importe quel écran ; toute réponse affiche sa source (fichier + section).

### Phase 4 — Fiches de personnage

Outcome: on crée, joue et sauvegarde une fiche complète, et les jets se résolvent dans l'app.
Slices:
1. Modèle de fiche et `TH.sheets` : création, normalisation, sauvegarde, import/export JSON.
2. Création guidée par l'âge — Adolescent 10 XP, Étudiant 30, Adulte 60, Vétéran 85 ; crédits = XP × facteur (×1/×1/×2/×3) ; nombre d'historiques 0/1/2/3.
3. Compétences et coûts XP (barème 1/3/6/10/15/21), budget consommé affiché en permanence.
4. Moteur de dés **avec graine injectable** : N dés de Corps ou Processeur, succès sur dé ≤ compétence, un 1 rapporte un succès supplémentaire, aide plafonnée au niveau de la compétence, relance de passion.
5. Santé : localisations, blessures, douleur, état du processeur, énergie, armure par couche (bouclier/externe/dermale/interne).
6. Possessions et crédits, débit automatique à l'achat — surface d'intégration de la phase 7.
7. Export/import JSON, impression, duplication.
Gates: `node tools/check.mjs` ; suite déterministe `node tools/test-fiches.mjs` à graine fixe ; aucune écriture hors localStorage.
Scenario — **Mars 2**: reproduire la fiche « FP Mars 2 » du coffre (Corps 5, Processeur 5, Esprit 3, Empathie 4 ; Aérospatiale 6, Communication 6, Militaire 6, autres compétences 4). Pass criteria: le total XP affiché égale la somme du barème pour ces niveaux ; avec graine 1, deux exécutions produisent exactement les mêmes dés et les mêmes succès ; une fiche exportée puis réimportée est identique champ à champ.

### Phase 5 — Table de crise (outil MJ)

Outcome: le MJ suit ses PNJ sur **un seul écran**, déplie ce dont il a besoin sur place, lance les dés du groupe qu'il regarde, et rien ne se verrouille.

Modèle d'interaction (Q40, Q41) : le registre est une liste de groupes ; tap sur un groupe = il **se déplie** (pools, localisations, édition), tap = il se replie. Aucun écran n'est posé sur un écran. Seule la fenêtre de jet est une **pop-up à mi-écran**, pour que le groupe qui lance reste visible au-dessus.

Slices:
1. Registre des groupes de PNJ sur un seul plan, avec expand/collapse sur place.
2. Trois provenances à l'ajout d'un groupe : import du roster (nommés), PNJ générique par niveau (3-6, profil mercenaire par âge), copie modifiée d'un profil déjà présent.
3. Édition permanente : caracs, compétences, bonus modifiables en cours de partie, jamais verrouillés après import.
4. Jet : effort **1 dé par défaut** (Q45), stepper jusqu à la réserve ; succès = dés ≤ compétence, un 1 rapporte un succès de plus ; **aucune cible de succès** à régler. Après le lancer, la pop-up se repose sur le résultat.
5. Réflexes et overclock (indices d augmentations, pas des effets de crise) appliqués par défaut, avec un seul interrupteur pour les couper ; champ de bonus en dés signé et borné. Le total lancé se résout sous la compétence, plafond Carac + compétence.
6. Escouade en synchronie : les membres lancent ensemble et s'aident (l'aide est plafonnée au niveau de la compétence, règle du coffre).
7. Pop-up de jet plafonnée à la moitié de l'écran ; le groupe qui lance reste lisible derrière.
8. Lancer fluide : les dés se posent en séquence courte, coupé intégralement par prefers-reduced-motion.
9. Consistance : le pool d'un membre ne bouge que par un jet de ce membre ; édition et jet annulables sans réécrire le journal.

Gates: node tools/check.mjs ; suite à graine fixe (jets reproductibles) ; **contrôle de texte** : node tools/check.mjs --copy refuse à l'écran toute chaîne de la liste noire de prose de développement (vérifié, aucun effet, consommé, coffre, placeholder, à saisir, non publié, PRD, Q3x, MJ en étiquette visible).
Scenario — **Meute**: une escouade de cinq chiens et une escouade de trois drones, plus un PNJ nommé importé du roster. Tour scripté : les cinq chiens lancent ensemble et s'aident ; un drone ne lance pas. Pass criteria: la pop-up de jet occupe au plus 55 % de la hauteur et le groupe qui lance reste lisible ; chaque pool baisse exactement du nombre de dés lancés, et du seul sien ; le PNJ nommé non participant est intégralement inchangé (comparaison des instantanés avant/après) ; au moins trois cibles tactiles de 44 px ou plus dans la pop-up ; **aucune chaîne de la liste noire n'apparaît dans le rendu** ; zéro erreur de console.
### Phase 6 — Roster PNJ et pipeline d'images

Outcome: les PNJ se parcourent, se filtrent et s'éditent ; les images passent l'échelle.
Slices:
1. Modèle de dossier : pseudonyme, nationalité, système, rôle, portrait, marque, goûts, **trois cartes de fond** {titre, texte}, drapeau `publie`.
2. Import des seize citoyens du prototype Bubble, avec les nations ramenées aux valeurs canoniques du coffre (Alpha, Ares, Union, Xenos) — le menu du prototype proposait des nations périmées qui n'existent pas dans l'univers.
3. `tools/build-images.mjs` : lit les sources hors dépôt, **recadre** (portrait 2:3, carte 16:9, token carré), génère du WebP à deux largeurs, écrit `images/` (gitignoré) et `data/images.data.js` (manifeste) ; constante `IMAGE_BASE` unique consommée par les vues.
4. Grille, recherche par pseudonyme, filtres Nation et Système, avec **état vide explicite** — le prototype Bubble laissait les cartes disparaître sans un mot.
5. Dossier « classifié » : portrait, nationalité, marque, goûts, trois cartes de fond.
6. Éditeur local de dossier et export vers `data/pnj.data.js` versionné ; un dossier `publie: false` disparaît de l'index public.
7. Page de crédits image (source, auteur, licence) alimentée par le manifeste.
Gates: `node tools/check.mjs` — aucun PNJ `publie: false` dans les données publiques générées ; `node tools/build-images.mjs` idempotent (deux exécutions, mêmes empreintes) ; poids des dérivés consigné.
Scenario — **Registre**: les seize citoyens plus un brouillon `publie: false`. Pass criteria: filtrer « Ares » donne exactement le nombre attendu ; chercher « Chro » trouve Chrome ; le brouillon n'apparaît ni dans le DOM public ni dans le fichier de données livré ; aucun portrait ne dépasse 60 Ko.

### Phase 7 — Supermarché

Outcome: le catalogue est utilisable et alimente directement les fiches.
Slices:
1. Grille catalogue depuis `window.SUPERMARCHE_DATA` : rayons, recherche, tri, filtres permis / prix / taille / licence.
2. Dossier article avec ses champs de rayon, la mention légale et le prix.
3. Panier, persistance locale, total en ₡.
4. Assignation à une fiche : ajout en possessions et débit des crédits — surface d'intégration de la phase 4.
5. Le catalogue reste en **lecture seule** : aucune reduplication dans l'app, la source humaine reste `Equipement/Rayons/*.md`.
6. Redirection `Equipement/Supermarché.html` vers `App/index.html#/supermarche` — cinq lignes — puis mise à jour du MOC.
Gates: `node tools/check.mjs` ; test de non-régression des prix témoins, dont Ares Legion à 18 ₡ ; aucune police ni ressource distante.
Scenario — **Panier**: chercher « monowire », l'ajouter, changer de rayon, filtrer « permis M », créer une fiche, assigner le panier. Pass criteria: le total du panier égale la somme des lignes ; la fiche reçoit exactement les articles et son solde est débité du même montant ; vider le panier ne touche pas la fiche ; un rechargement conserve le panier.

### Phase 8 — Astronav

Outcome: planifier un trajet et situer le monde — le module gardé pour la fin.
Slices:
1. Transit interplanétaire : brachistochrone (accélération en g, distance en UA → durée, delta-v, vitesse de pointe), confronté au tableau officiel des moteurs du coffre.
2. Transit interstellaire : distance en années-lumière, vitesse en fraction de c, temps réel **et** temps propre, avec le tableau du coffre comme référence.
3. Atlas : 275 systèmes réels (RA/Dec/distance → x/y/z), 375 composantes, 154 planètes, superposés aux **39 colonies** fictives.
4. Carte 2D RA/Dec en repli immédiat, puis carte 3D dérivée, avec la mention explicite de la portée (30 années-lumière) et de la frontière.
5. Console de pilotage : fiche Stratios Patrol (puissance, chaleur, CPU, agilité, senseurs, armes, blindage), tirage des tables d'avaries (propulsion, puissance, senseurs, CPU, sous-système) et échelle de détection 1-7.
6. Crédits : `stellarcatalog.com`, autorisation du créateur obtenue, licence des données.
Gates: `node tools/check.mjs` ; test du convertisseur RA/Dec vers xyz sur des valeurs connues ; le brachistochrone reproduit le tableau du coffre à ±5 % sur trois lignes témoins.
Scenario — **Sol vers Barnard**: planifier un transit interstellaire de 7 années-lumière à 0,8 c, puis un transit interplanétaire de 9 UA à 0,807 g. Pass criteria: temps réel et temps propre encadrent les valeurs du tableau du coffre ; le brachistochrone donne 9,4 jours à ±5 % ; la carte affiche 275 systèmes et 39 colonies ; aucun système n'apparaît deux fois.

### Phase 9 — Audit d'ergonomie, habillage, publication

Outcome: l'app est prouvée lisible, puis publiée.
Slices:
1. `tools/audit/degrade.mjs` : fonction de dégradation unique et versionnée — désaturation, compression de contraste, voile 300 nits, réduction à l'angle visuel réel de 3 m.
2. `tools/audit/screens.mjs` : captures via `puppeteer-core` sur le navigateur déjà installé ; classes « coup d'œil » (3 m) et « concentré » (40 cm) ; échec mesuré (contraste WCAG, survie des glyphes après binarisation, cibles tactiles ≥ 44 px).
3. Manifeste dérivé du routeur : une vue absente du manifeste fait échouer le script — on ne peut plus ajouter un écran sans le soumettre.
4. Page publique `/audit` : une fiche par écran — image nominale, image dégradée, motif du refus.
5. Habillage final selon la direction retenue en phase 1.
6. Publication : `dist/`, déploiement, domaine, `noindex` selon décision, lien depuis le MOC et la fiche projet.
Gates: `node tools/audit/screens.mjs` (toutes les vues, aucun échec non justifié) ; `node tools/check.mjs` ; déploiement de préproduction vérifié à la main sur un téléphone.
Scenario — **La table réelle**: une session complète, trois joueurs et un MJ, téléphones en main, pièce sombre, réseau coupé. Pass criteria: aucun blocage attribué à l'app ; chaque joueur a créé ou importé sa fiche ; un achat passe du panier à une fiche ; une crise de trois rounds est suivie sans papier ; deux retours écrits sont consignés dans `## Open notes`.

## 5. Contracts / integration surfaces

**Données de contenu** — les fichiers `data/*.data.js` sont des scripts **classiques** (pas de module ES, pas de `fetch`) qui posent `window.TH_DATA.{content, astronav, ref, ships}` ; le catalogue pose `window.SUPERMARCHE_DATA`. C'est ce qui permet d'ouvrir l'app en `file://`, sans serveur. Tout ajout de données passe par le générateur, jamais par une requête réseau.

**Générateur** — `node app/tools/build-data.mjs` lit les notes du coffre (chemins en clair dans le script), écrit `data/content.data.js` et `data/astronav.data.js`, et **sort en erreur** si une section attendue manque. Il affiche les comptes à chaque exécution : 28 colonies, 11 moteurs, 5 routes interstellaires, 3 systèmes détaillés. `data/ref.data.js` et `data/ships.data.js` sont des projections curées, avec pointeur de source en tête de fichier.

**Images** — une seule constante `IMAGE_BASE` préfixe tous les chemins (`images/` en local, base absolue en ligne). Le manifeste `data/images.data.js` expose, par identifiant : `{ id, portrait: {src, w, h}, carte: {...}, token: {...}, credit: {source, auteur, licence} }`. Les originaux ne sont jamais livrés.

**Fiche de personnage** — objet JSON : identité, âge et tranche, historiques, passions, permis, quatre caractéristiques, accélérations, compétences, skillsofts, santé (localisations, douleur, processeur, énergie, gel), armure par couche, crédits, possessions, mods, notes. Clé de stockage `th.fiches` ; API `TH.sheets.{all, get, upsert, remove, creer, normaliser, addItem, coutCompetence, xpDepense}`. L'export/import est le contrat d'échange entre appareils.

**Dossier PNJ** — `{ id, pseudonyme, nation, systeme, role, portrait, marque, gouts, fond: [{titre, texte}, x3], publie }`. Export vers `data/pnj.data.js` versionné. Un dossier `publie: false` est retiré des données publiques générées, pas seulement masqué en CSS.

**Journal de crise** — une ligne JSON par événement, ajoutée et jamais réécrite : `{ t, type, qui, texte, donnees }`. Relecture = concaténation ; aucun index mutable.

**Dés** — `TH.dice.check({ carac, competence, bonus, dc, seed })` renvoie les dés, les succès (avec le 1 qui rapporte un succès de plus) et le verdict. La **graine est un paramètre du contrat** : sans elle, aucun test déterministe n'est possible.

**Les garanties Q30 et Q31 vivent dans le code et dans les tests, jamais dans l'interface** (Q44) : le moteur ne notifie pas qu'il n'a rien écrit, il ne l'écrit tout simplement pas.

**Modèle de jet, d après les règles** (source unique : Regles/Transhumains - Règles.md, section Crise) — chaque personnage prend deux pools de quantités égales à Corps et Processeur ; ces pools représentent l effort dépensable dans le round. Une action dépense un ou plusieurs dés du pool associé, auxquels s ajoutent les dés bonus (Expertise, Accélération, Historique, Environnement), et le total se lance sous la compétence comme un skillcheck. La résolution cumule les succès, plafonnée à Carac + compétence. Le round se termine quand plus personne n a de dés. Mouvement : si le jet est sous Corps, 1 m par dé lancé.

**Réflexes et overclock ne sont pas des effets de la crise** : ce sont des augmentations à indice 1-6 (Equipement/Rayons/Augments.md, section Réflexes / overclock, prix en i²). Réflexes bonifie les jets sous Corps, overclock les jets sous Processeur. L interrupteur de Q39 porte là-dessus : coupé, le jet ne reçoit pas ces dés. Le champ de bonus libre (Q39) accepte le négatif comme le positif, parce que l Environnement des règles est lui-même en +/- dés (1 à 3).

**Les PNJ génériques par niveau ne sont pas à inventer** : le catalogue porte déjà des profils chiffrés — Ares Legion (Corps 5, Processeur 4, Réflexes 1, overclock 1), Alpha Scholarship (Corps 5, Processeur 4, overclock 1), Union Spider (Processeur 5, overclock 2), Pokebot (Corps 4, Proc 4, réflexes 1) et son évolution (réflexes 2, overclock 1). Un niveau de PNJ générique se construit donc à partir d un starter ou d un pokebot du catalogue, pas d une intuition.

**Corps et Processeur sont des états, pas des identités** (Q46) : changer de corps change la caractéristique courante, et la réserve ne peut pas dépasser la caractéristique *actuelle* (le prototype borde déjà `pool ≤ carac` à l édition). Aucun champ ne plafonne carac ou compétence à 6 ; la borne haute du stepper (20) est une décision d ergonomie, pas une règle du monde.

**Le vocabulaire à l écran est celui des règles**, et c est ce qui rend Q44 tenable sans inventer de jargon : effort, aide (ajoute des succès), synchronisation (effectue la même exacte action), opposition (réduit les succès), esquive, jeton d initiative, et pour les drones autopilote / synchronisé / interfacé. Escouade : dépensent un dé chacun, une action, les autres aident — c est la règle de Q42, pas une invention de maquette.
Deux propriétés contractuelles du moteur de jets, héritées de Q30 et Q31 : **`TH.dice` n'écrit dans aucune fiche** — il reçoit des nombres et rend un résultat; c'est l'appelant qui décrémente, et il ne décrémente que le pool du groupe qui a lancé. Et **le résultat n'a pas d'aval** : aucun émetteur, aucun effet enchaîné, aucun abonné. Un jet produit une ligne de journal et un nombre à l'écran, rien de plus.

**Catalogue stellaire** — `stellar_catalog.json` versionné dans le dépôt (259 Ko). Conversion : `x = d·cosδ·cosα`, `y = d·cosδ·sinα`, `z = d·sinδ`, avec analyse de `"6h 45m 8.792s"` et `"-16° 43' 15.357''"`. Les 39 colonies du coffre sont superposées par nom d'étoile.

**Déploiement** — `dist/` = l'app avec `images/` peuplé ; Vercel Hobby, déploiement par git. Aucune fonction serveur, aucun code exécuté côté hébergeur.

**Pile d'interaction** — le registre tient dans une carte ; les cartes derrière sont **ancrées en haut et soulevées** (`scale` dégressif, voile à 0,55), donc leur bord dépasse au-dessus de la carte active. Une nappe ouverte n'occulte jamais entièrement sa parente : **145 px de la parente restent visibles** dans le prototype validé. Ordre de fermeture, du plus naturel au plus discret : glisser vers le bas (> 110 px ou vélocité > 900 px/s), `Échap`, appui sur le voile, ✕.

## 6. Known limitations (accepted)

- **Aucun backend, aucun compte, aucune synchronisation.** Deux appareils = deux états divergents ; le partage passe par l'export/import et rien d'autre. Accepté au nom de Q17.
- **Le stockage du navigateur peut être purgé.** Sur iOS, l'installation de la PWA est le seul chemin durable ; l'export reste la vraie sauvegarde. Accepté, avec l'export rendu visible.
- **« Non publié » est de l'obscurité, pas une serrure.** Un PNJ marqué non publié est retiré des données livrées — donc il n'existe plus pour l'app ; en revanche tout ce qui est livré est lisible par qui ouvre les outils du navigateur. Accepté explicitement.
- **Le catalogue stellaire s'arrête à 30 années-lumière** alors que la fiction en annonce 50. La carte portera la mention de portée ; le re-scrape est un item externe.
- **Le roster compte seize PNJ**, conçu pour quelques centaines. Aucune infrastructure d'échelle n'est construite avant d'en avoir besoin.
- **Le déploiement n'est pas autosuffisant** : les images sources vivent hors du dépôt, donc un clone seul ne peut pas régénérer les dérivés.
- **Vercel Hobby plafonne à 100 Go/mois** et interdit l'usage commercial (les dons restent autorisés). Accepté pour un projet de fan ; la migration vers Cloudflare Pages + R2 est prévue si les images pèsent.
- **L'oracle d'ergonomie peut être mal calibré** : un gate qui passe pour de mauvaises raisons est pire que pas de gate. Accepté, avec la taxonomie « coup d'œil / concentré » et un jeu d'ancrage physique versionné.
- **Le corpus de règles vient d'exports de tableurs** : des cellules fusionnées produisent des colonnes vides et quelques valeurs abîmées. Le rendu est fidèle, pas corrigé — corriger le .md est un travail de contenu, pas d'app.
- **L'import des fiches FP Excel serait au mieux** : les exports sont dégradés (caractéristiques vides, niveaux dans la colonne « /skillsoft »). Accepté comme brouillon à vérifier, pas comme import fidèle.
- **Interface en français uniquement.** Aucune internationalisation.

## 7. External work-item list (other repos / owners)

| Item | Bloquant ? | Livrable attendu |
|---|---|---|
| Re-scraper `stellarcatalog.com` à 50 années-lumière | Bloquant pour la complétude de l'atlas (phase 8) | Nouveau `stellar_catalog.json` couvrant 0-50 ly ; nécessite l'installation de `requests` + `bs4` et l'accord explicite de Mandal |
| Créer le dépôt distant GitHub de l'app et brancher Vercel | Bloquant pour la phase 9 | Remote `github.com/BOGOSbot/<app>` ; `gh auth login` requis ; action vers l'extérieur, donc accord préalable |
| Réserver le nom de domaine | Bloquant pour la publication | Domaine enregistré chez un registrar, DNS pointé sur l'hébergeur |
| Dédupliquer `C:\Transhumains\images vrac` (doublons `(1)`, PSD/JPG/WebP redondants, vidéos) et vérifier la provenance des 18 fichiers `ash-hellbender-*` | Bloquant pour la publication de ce lot | Dossier d'images propres + liste des images dont les droits sont établis |
| Réduire `Equipement/Supermarché.md` en hub | Non bloquant | Le doublon connu du coffre disparaît au profit de `Rayons/` + lien vers l'app |
| Capturer le portrait manquant de `Chrome` | Non bloquant | Master local du seizième citoyen, ou décision de le recréer |
| Ré-export Drive avant la mort du `client_id` rclone partagé | Non bloquant | Sources rafraîchies, ou décision de geler le coffre en l'état |

## 8. Supersession map

**Remplacés par ce PRD** : le prototype Bubble « LEGION » (jamais repris comme plateforme ; il est une source de contenu et de design) · `Equipement/Supermarché.html` (devient une redirection de cinq lignes) · la coquille du prototype `App/js/core.js`, `index.html`, `assets/app.css` (déplacée hors dépôt en phase 0) · `C:\Transhumains\SystemView` (non ressuscité ; sert de référence pour le rendu Canvas).

**Éléments repris** : les maquettes `Source/_design/mockup-supermarche*.html` (lignée visuelle de référence ; les `final-*.png` ont été retirés volontairement le 2026-10-08) · `Equipement/Rayons/*.md` et `données/supermarche.data.js` (catalogue) · `workspace/transhumains-assets/stellar/` (jeu stellaire sauvé) · les sections de règles et de lore du coffre (contenu).

**Non supersédés, laissés ouverts** : le wiki MediaWiki et son instantané 2024 (source de contenu à miner plus tard) · `C:\Transhumains` (legacy, référence) · le dossier `images vrac` (item de déduplication) · la couche de règles du coffre (`AGENTS.md`, `meta/`), hors périmètre.

## 9. Out of scope

- **Pas de table virtuelle** : ni grille, ni pions, ni positions, ni ligne de vue. L'app suit un état, elle ne simule pas un terrain.
- **Pas de comptes, pas de serveur, pas de synchronisation temps réel.**
- **Pas de résolution automatique des règles** : l'app ne lance jamais un dé ni n'applique un modificateur sans un geste explicite de l'utilisateur ; elle ne décide pas à la place de la table.
- **Pas d'écriture croisée entre fiches, pas d'effets en chaîne après un jet** (Q30, Q31) : la page de crise observe et consomme des dés, elle ne joue pas la partie.
- **Pas d'autre langue que le français**, hors noms propres d'univers.
- **Pas de publication d'images dont les droits ne sont pas établis.**
- **Pas d'application native ni de distribution sur magasin** : une PWA installable, rien de plus.
- **Pas d'édition de contenu dans l'app** : on écrit dans le coffre, on génère, on commit.
- **Les maquettes de `Source/_design/` ne sont pas une spécification de contenu** (Q32) : elles ne prêtent que leur forme.
- **Pas de re-scrape au-delà de l'item listé**, et pas d'élargissement de la carte sans donnée.

## 10. Carried open items

| Item | Phase propriétaire |
|---|---|
| Contenu canonique de chaque écran (crise, fiche, roster, supermarché, atlas) à repenser avec les retours — la maquette n'a que sa forme | Phases 3 à 8, une passe de contenu par module avant son implémentation |
| Politique de proposition d'installation PWA (quand, comment, à qui) | Phase 2 |
| Import des fiches FP Excel : brouillon au mieux ou abandon | Phase 4 |
| Format exact du journal de crise | Phase 5 |
| Champs de l'éditeur de dossier PNJ, et traitement des images téléversées | Phase 6 |
| Carte 2D par défaut ou 3D d'emblée | Phase 8 |
| Sort du re-scrape à 50 ly (fait, partiel, ou abandonné) | Phase 8 |
| Migration des images vers R2/Cloudflare | Phase 9 |
| Zone MJ fermée derrière Cloudflare Access : utile ou jamais | Phase 9 |
| Publication indexable ou `noindex` | Phase 9 |

## Implementation record

Appended by the orchestrator as work proceeds — jamais pré-écrit. Par phase : les tranches telles que commitées (empreinte, résultat des gates), la re-cotation des décisions 75-85 %, les ajustements de scénario avec leur justification, et la manière dont chaque escalade s'est résolue.
- **2026-10-08 · Validation client** : « j’aime beaucoup l’interface : je valide ». Le modèle d’interaction de la table de crise est gelé (Q47) ; la tranche 3 en cours n’ajoute que des micro-gestes, pas de structure.
- **2026-10-08 · Table de crise, tranche 3** (mesurée par le Lead) : « tout miser » — aperçu en teinte alerte `rgb(255,187,85)` quand effort = réserve (≥ 2 ; réserve de 1 = pas de geste), escouade indemne ; chips de l annuaire sans aucun chiffre ; copie modifiée cloisonnée dans les deux sens (copie→1 laisse l import à 6, import→4 laisse la copie à 1), reload fidèle. Interface **validée par le client** (Q47). Coffre `ad5525d`+le commit suivant.
- **2026-10-08 · Phase 0 acceptée** : gates verts mesurés par le Lead (build 28·11·5·3 + 10 sections, check exit 0, dépôt froid exit 0, négatif URL injectée exit 1, régénération déterministe). Commis ouvriers `cfecd9a`/`011d0ec`/`7c551d2` ; extension crédits `meta.credits` + garde du parseur ajoutée par le Lead (addendum prd/notes/phase-0.md).

## Open notes

- **Divergence d'orthographe** : `Big Mac` (coffre) contre `Big Mak` (prototype Bubble). À trancher en phase 6.
- **Date incohérente** : le prototype annonce « year 2491 » (XXV<sup>e</sup> siècle) alors que la chronologie du coffre place le siècle courant au XXIV<sup>e</sup> et réserve le XXV<sup>e</sup> à un « ? ». À trancher, ou à retirer.
- **Nations périmées** dans l'administration Bubble (Terran Collective, Veylan Sovereignty, Iron Dominion…) : elles n'existent pas dans l'univers ; ne pas les importer.
- **Vibration : support iOS indécis.** MDN ne documente pas iOS ; une issue de compatibilité de mars 2026 affirme que `navigator.vibrate` fonctionne ; le rapport d'implémentation du W3C (mai 2026) dit que WebKit ne l'implémente pas. Conclusion : canal opportuniste, repli visuel obligatoire.
- **Le coffre n'a ni remote ni autre branche que `main`** : le dépôt de l'app est le premier artefact à sortir du poste, et il faudra un remote pour que Vercel puisse construire.
- **`gh` est installé mais non connecté** : nul au moment de créer le remote.
- **Le prototype du 2026-10-08 (coquille UI) est déplacé dans `workspace/transhumains-spike/`** : hors dépôt, réversible, volontairement non versionné.



