---
tags:
  - transhumains
  - equipement
  - rayon
updated: 2026-10-06
---

# Armes à énergie

> [!info] Rayon
> Lasers et faisceaux. **L'AP dépend de la distance** (l'intensité chute ×10 par palier de portée). Déga gain : tir en rafale courte = −1 AP → +1 cadence ; large tache = −1 AP → +1 dégâts (cumulable). Dégâts `1+` : si la cible encaisse, l'excédent de précision compte comme dégâts.

## Catalogue

| Arme | Prix (₡) | Cadence | Taille | Clip | Masse (kg) | Optique (cm) | Puissance (kW) | Chaleur (kJ) | Batterie (kJ) | Permis |
|---|---|---|---|---|---|---|---|---|---|---|
| Laser mini | 3 | 1/s | −3 | 20 | 0,1 | 3 | 1 | 5 | 18 | — |
| Pistolet laser | 3 | 1/s | −2 | 20 | 1 | 30 | 10 | 50 | 180 | — |
| Fusil léger | 5 | 1/s | −1 | 20 | 5 | 40 | 50 | 250 | 900 | — |
| Fusil lourd | 8 | 1/s | −1 | 20 | 40 | 50 | 400 | 2 000 | 7 200 | — |
| Canon laser | 8 | 1/s | 0 | 20 | 100 | 100 | 10³ | 5 000 | 18 000 | — |
| Tourelle laser | 10 | 1/s | 1 | — | 10³ | 100 | 10⁵ | — | — | `M` |
| Tourelle +1 | 20 | 1/s | 2 | — | 10⁴ | 10³ | 10⁶ | — | — | `M` |
| Tourelle +2 | 30 | 1/s | 3 | — | 10⁵ | 10⁴ | 10⁷ | — | — | `M` |
| Fusil à électrons | 5 | 1/s | −1 | 10 | 50 | — | 500 | — | — | — |
| EMP | 5 | 1/s | −1 | 10 | 10 | — | 100 | — | — | — |

Longueurs d'onde : 1064 nm (IR) sauf mention ; rendement ~70 %. Le fusil à électrons perce un trou millimétrique dans l'armure ([[Armures#Annexe — couches d'armure|perméation]]).

## AP selon la distance

| Arme | 3 m | 10 m | 30 m | 100 m | 300 m | 1 km | 3 km | 10 km |
|---|---|---|---|---|---|---|---|---|
| Mini | +3 | +2 | +1 | 0 | −1 | — | — | — |
| Pistolet | — | — | +3 | +2 | +1 | 0 | −1 | — |
| Fusil léger | — | — | +4 | +3 | +2 | +1 | 0 | −1 |
| Fusil lourd | — | — | +5 | +4 | +3 | +2 | +1 | 0 |
| Canon | — | — | — | +5 | +4 | +3 | +2 | +1 |
| Tourelle | — | — | — | — | +7 | +6 | +5 | +4 |
| Tourelle +1 | — | — | — | — | — | +8 | +7 | +6 |
| Tourelle +2 | — | — | — | — | — | +9 | +8 | — |
| EMP (6 E) | +4 | +3 | +2 | +1 | 0 | −1 | — | — |

## Modificateurs

| Condition | Effet |
|---|---|
| Humidité | −1 AP ([[Combinaisons\|atmosphères]]) |
| Pluie | −2 AP |
| Immergé | portée 10 cm |
| Miroirs / revêtements | réflexion négligeable aux fortes intensités |
| Visibilité | [[Mods & implants#Modules\|yeux de félin]], [[Ingénierie#Catalogue\|scanner]] (laser « aveugle » si tir non prévenu : pas de réaction) |

## Conversion AP ↔ blindage thermique

| AP | Organique | Matériau | Intensité (kJ/cm²) |
|---|---|---|---|
| −1 | éblouit | papier | 10⁻¹ |
| 0 | chair (douleur) | eau | 10⁰ |
| 1 | vêtements | bois | 10¹ |
| 2 | os (léthal) | acier | 10² |
| 3 | armure lourde | acier 5 cm | 10³ |
| 4 | power armor | coque de vaisseau 5 cm | 10⁴ |
| 5 | bunker | acier 5 m | 10⁵ |

Si AP < armure thermique → AP et dégâts tombent à 0 (point lumineux). Si AP = → −1 AP, dégâts perdent le « + », 90 % de l'énergie part en brûlure. Si AP > → traverse sans perte, 10 % de l'énergie.

## Notes techniques

Rafales de 0,1–10 ms en 10–100 impulsions ajustées en temps réel (processeur dédié, [[Augments#Processeur]]) ; recharge = 10× la durée de tir ; perçage par plasma successif, focus mini 0,1 mm. Détail : [[Calculs transhumains#Heat|Calculs Heat]]. Référence externe du tableur : panoptesv.com (LaserDeathRay).

> Voir aussi : [[Armes cinétiques]] · [[Armures#Externe|blindages]] · [[Vaisseaux#Options récurrentes|tourelles embarquées]] · [[Électronique]] (EMP & cyber) · [[Explosifs#Charges|charge façonnée]]
