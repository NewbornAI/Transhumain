# Phase 0 — notes d'implémentation

## 2026-10-08 · slice 3 — tools/check.mjs (garde-fous de livraison)

- **Décision** : le check est sans dépendance et autoportable (résout tout
  chemin relatif à sa propre position) — il doit tourner dans un dépôt copié
  sans le coffre. **Pourquoi** : scénario « Dépôt froid » du PRD.
- **Décision** : les fichiers `data/*.data.js` sont validés en deux temps :
  `node --check` (child_process, jamais une lecture de texte seule) puis
  chargement réel dans une VM avec shim `window` — c'est le contrat « scripts
  classiques » du PRD §5. **Pourquoi** : une syntaxe valide ne prouve pas que
  `window.TH_DATA` est posé.
- **Décision** : comptes attendus **lus dans data/ le 2026-10-08**, pas
  inventés : colonies 28, moteurs 11, routes interstellaires 5, systèmes
  détaillés 3 (Alpha Centauri 11 lignes, Tau Ceti 20, YZ Ceti 7 — seules les
  clés de systèmes sont comptées). Le PRD fixe ces quatre nombres ; ils
  concordent avec le réel, aucun écart à signaler.
- **Décision** : les sections de règles ne sont pas fixées par le PRD (« N »).
  Réel lu : 10 (Création, Historiques, Skillchecks, Crise, Crafting,
  Electronique, Economie, Nations, Chronologie, Aerospatiale). Le check exige
  un **plancher de 10 + présence des 10 titres** : toute perte fait échec,
  tout ajout légitime passe. Pas de chiffre durci au-delà du réel.
- **Décision** : « aucune URL externe » = motif `https?://` dans les fichiers
  **livrés** uniquement (data/, et index.html/assets/js/ dès qu'ils existeront) ;
  les outils (`tools/`) et le PRD ne sont pas livrés au navigateur et peuvent
  citer des URLs. Une `data:` URI est du contenu embarqué, pas du réseau : hors
  motif. Les mentions de crédit sans schéma (ex. « stellarcatalog.com » en
  texte) passent ; une exception URL réelle exige une entrée explicite dans la
  liste `CREDITS` de check.mjs — **vide à ce jour**.
- **Conséquence dans le pipeline** : build-data.mjs dépouille désormais les
  URLs nues `http(s)://` à la génération (13 présentes dans
  `content.data.js` avant ce changement — Gemini, Google Docs/Sheets, YouTube,
  Wikipedia, yaktribe, prototype Bubble ; aucune n'est un crédit). Les liens
  restent dans les `.md` du coffre, source humaine ; l'app publique ne les
  livre pas. `astronav.data.js` était déjà propre (0 URL).
- **Négatifs vérifiés** (le garde doit mordre) : URL injectée → sortie 1 avec
  le fichier fautif ; comptes amputés (28/11/5/3 → 0) → sortie 1 sur les
  quatre comptes.
- **Scénario « Dépôt froid »** : copie sans le coffre ni `.git` —
  `robocopy C:\agentic\bulle\transhumains\App <workspace>\th-cold /E /XD .git`
  (robocopy : code 1 = fichiers copiés, succès) puis
  `node <workspace>\th-cold\tools\check.mjs` → **sortie 0**, 4 fichiers
  examinés. `build-data.mjs` ne fait pas partie du scénario : il lit le
  coffre, il ne tourne que dedans.

## 2026-10-08 · slices 1, 2 et 5 (rappel — faites avant cette passe)

- Dépôt `git init` sur `main`, pipeline commitée ; `App/` ignoré par le
  coffre (commit côté vault) ; coquille du spike déplacée dans
  `workspace/transhumains-spike/` (hors dépôt) ; `.gitattributes`
  `* text=auto eol=lf`.

## 2026-10-08 · slice 4 — README.md

- Le README dit la vérité : pas d'interface avant la phase 1 ; « ouvrir » = le
  contrat file:// des données, pas une app existante. Pourquoi : un README qui
  promet un double-clic impossible à la phase 0 serait une dette de confiance.

## 2026-10-08 · slice 6 — ce fichier

- `prd/notes/` : une note de phase datée, format libre, décision + pourquoi.

## Addendum — crédits et fausse colonie (2026-10-08, Lead)

- Le strip « URLs à nu » du premier check faisait disparaître l'attribution (Q28). Décision : le strip rend le texte **sans protocole** (crédit lisible) et le builder déclare les URLs brutes de la source dans `meta.credits` ; check.mjs autorise une URL uniquement si le fichier la liste lui-même. Liste `CREDITS` manuelle gardée en secours.
- Conséquence mesurée : une ligne de référence dépouillée de son protocole était devenue une « 29e colonie » (domaine wikipedia.org parse comme nom). Le parseur rejette désormais tout nom de colonie qui ressemble à un domaine (`x.org/…`).
- Négatifs rejoués après l'extension : URL injectée hors `meta.credits` → check exit 1. Dépôt froid avec les 13 crédits stellarcatalog/wikipedia → exit 0.
