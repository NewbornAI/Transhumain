---
source: gdrive:Transhumains/Calculs transhumains.xlsx
exported: 2026-10-06
tags:
  - transhumains
  - drive-sheet
  - regles
updated: 2026-10-17
---

# Calculs transhumains

## Batteries

|  |  |  |  |  |  |  | Density |  | Charge |  | Discharge |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | MJ / kg |  |  |  |  | Wh / kg | kWh / kg | kcal / h |  | kW / kg |  | kW |
|  |  | Energy | Charge |  | Discharge |  | Energy | Useable | Synthesis | Eff | Power | Eff | Heat |
|  | Li - Ion | 0.9 | 16.6667 | min | 13.5 | min | 250 | 0.25 |  |  | 1 | 0.9 | 0.111111 |
|  | Solid state | 1.8 | 16.6667 | min | 13.5 | min | 500 | 0.5 |  |  | 2 | 0.9 | 0.222222 |
| Bio | Carbs | 5.4 | 23.8889 | h | 45 | min | 5000 | 1.5 | 200 | 0.9 | 2 | 0.3 | 4.66667 |
| Bio | Sugar cell (+) | 10.8 | 15.9259 | h | 18 | min | 5000 | 3 | 300 | 0.9 | 10 | 0.6 | 6.66667 |
| Bio | Graisse | 10.8 | 35.8333 | h | 60 | h | 10000 | 3 | 300 | 0.8 | 0.05 | 0.3 | 0.116667 |
| Bio | Fat cell (+) | 21.6 | 19.1111 | h | 6 | h | 10000 | 6 | 500 | 0.9 | 1 | 0.6 | 0.666667 |
|  | Graphene | 0.36 | 4 | sec | 3.24 | sec | 100 | 0.1 |  | 0.9 | 100 | 0.9 | 0 |
|  | RTG (Voyager) | 18 | - |  |  |  | 10000 | 5 |  |  | 1e-06 | 1 |  |
|  | Tritium | 1800000 | - |  | 10 | ans | 1000000000 | 500000 |  |  | 0.001 | 1 |  |
|  | Nickel 63 | 1800 | - |  | 50 | ans | 1000000 | 500 |  |  | 1e-06 | 1 |  |
|  | Carbon 14 | 1800 | - |  | 2000 | ans | 1000000 | 500 |  |  | 1e-09 | 1 |  |
|  | Li - Air | 5.04 | - |  | 1.42857 | h | 2000 | 1.4 |  |  | 2 | 0.7 |  |

## Augments 2

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Battery |  |  |  |  |  | Density |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  | time |  |  | km/h | degats |  | kN/kg | kW/kg | kW / kg | kg | %total | MW | MW | kg | MJ | sec | kg | %total |  | MJ / kg | kW / kg |
| Corps |  | Indice | Cout | Battery | Load |  | Sprint | Punch |  | Strength | Power | Heat | Mass | Muscle | Power | Heat | Mass | Energy | Time | Water | Mass | Eff | Energy | Power |
| Bio | Standard | 3 | 0 | 30 | x 1 |  | 20 | 0+ |  | 1 | 1 | 2.33333 | 70 | 0.3 | 0.07 | 0.049 | 0.5 | 2.5 | 35.7143 | 0.7 | 1.97143 | 0.3 | 5 | 1 |
| Bio | Athlétique | 4 | 2 | 45 | x 3 |  | 35 | 0+ |  | 1.5 | 2 | 4.66667 | 80 | 0.4 | 0.213333 | 0.149333 | 2 | 10 | 46.875 | 2.8 | 6.9 | 0.3 | 5 | 2 |
| Bio | Transhumain | 5 | 5 | 60 | x 5 |  | 70 | 1+ |  | 3 | 10 | 6.66667 | 90 | 0.5 | 0.75 | 0.3 | 4 | 40 | 53.3333 | 6.4 | 13.2889 | 0.6 | 10 | 10 |
|  | Metahumain | 6 | 10 | 20 | x 10 |  | 100 | 2+ |  | 10 | 50 | 33.3333 | 100 | 0.5 | 4.16667 | 1.66667 | 8 | 80 | 19.2 | 12.8 | 23.92 | 0.6 | 10 | 10 |
|  |  |  |  | minutes | kg |  |  |  | Flops |  | W/kg | W | %total | MJ | MW |  |  |  |  |  |  |  |  |  |
| Processeur |  | Indice | Cout | Battery | Mass |  | Ref |  | Perf |  | Power | Power | Battery | Energy | Heat |  |  |  |  |  |  |  |  |  |
|  | Free | 3 | 0 | 200 | 0.1 |  | Smartphone |  | e11 |  | 50 | 5 | 0.3 | 0.06 | 5e-06 |  |  |  |  |  |  |  |  |  |
|  | Pro | 4 | 2 | 100 | 1 |  | Laptop |  | e12 |  | 50 | 50 | 0.15 | 0.3 | 5e-05 |  |  |  |  |  |  |  |  |  |
|  | Gamer | 5 | 5 | 30 | 10 |  | Gaming laptop |  | e13 |  | 100 | 1000 | 0.09 | 1.8 | 0.001 |  |  |  |  |  |  |  |  |  |
|  | Hacker | 6 | 10 | 5 | 50 |  | Custom rig |  | e14 |  | 600 | 30000 | 0.09 | 9 | 0.03 |  |  |  |  |  |  |  |  |  |
|  | Maison | 3+2D | 2 |  | 10 |  | Desktop |  | e13 |  | 50 | 1000 |  |  | 0.001 |  |  |  |  |  |  |  |  |  |
|  | Magasin | 4+2D | 4 |  | 100 |  |  |  | e14 |  | 50 | 10000 |  |  | 0.01 |  |  |  |  |  |  |  |  |  |
|  | Serveur | 5+3D | 8 |  | 10 ton |  |  |  |  |  | 100 | 1000000 |  |  | 1 |  |  |  |  |  |  |  |  |  |
|  | Mainframe | 6+4D | 14 |  | 500 ton |  | Supercomputer |  | e18 |  | 600 | 100000000 |  |  | 100 |  |  |  |  |  |  |  |  |  |
|  | Oversize | +1D | +1 | = | x 10 |  |  |  | x 10 |  | x 10 | x 10 |  |  | x 10 |  |  |  |  |  |  |  |  |  |
|  | Miniaturized | -1D | +1 | = | / 10 |  |  |  | / 10 |  | / 10 | / 10 |  |  | / 10 |  |  |  |  |  |  |  |  |  |
|  |  |  |  | kg | % / sec | kg |  | g | g | m/s |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Jambes |  | Indice | Cout | Masse | Power | Load |  | Sprint | Jump | Speed |  |  | Taille | Mass | Load | Scale |  |  |  |  |  |  |  |  |
|  | Standard | 3 | 0 | 30 | 0 | x 1 |  | 0.5 | 2 | 5 |  |  | -4 | 1 g | 50 g | x 50 |  |  |  |  |  |  |  |  |
|  | Athlétique | 4 | 0 | 40 | 0 | x 3 |  | 1 | 3 | 10 |  |  | -3 | 100 g | 1 kg | x 10 |  |  |  |  |  |  |  |  |
|  | Transhumain | 5 | 1 | 40 | 1 | x 5 |  | 2 | 5 | 20 |  |  | -2 | 1 kg | 5 kg | x 5 |  |  |  |  |  |  |  |  |
|  | Metahumain | 6 | 2 | 40 | 5 | x 10 |  | 5 | 10 | 40 |  |  | -1 | 10 kg | 20 kg | x 2 |  |  |  |  |  |  |  |  |
|  | Speedrun | 6 | 3 | 40 | 5 | x 1 |  | 10 | 5 | 100 |  |  | 0 | 100 kg | 100 kg | x 1 |  |  |  |  |  |  |  |  |
| Bio | Cricket |  |  |  |  |  |  |  |  |  |  |  | 1 | 1 t | 500 kg | / 2 |  |  |  |  |  |  |  |  |
|  | Spring | 6 | 3 | 20 | 5 | x 1 |  | 1 | 20 | 100 |  |  | 2 | 10 t | 2 t | / 5 |  |  |  |  |  |  |  |  |
| Bio | Cheetah | 5 | 1 | 30 | 0 |  |  | 1 | 5 | 30 |  |  | 3 | 100 t | 10 t | / 10 |  |  |  |  |  |  |  |  |
|  | Roues |  | 0 | 20 | 1 | x10 |  | 1 | 0 | 100 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Chenilles |  | 0 | 20 | 1 | x100 |  | 1 | 0 | 20 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Bio | Spider |  | 1 |  | 0 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  | %corps | % / sec |  |  | degats |  | m/s | kJ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Bras |  | Cout | Masse | Power | Lift |  | Melee |  | Swing | Punch |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Standard | 0 | 3 | 0 | x 1 |  | 0+ |  | 10 | 0.2 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Athlétique | 0 | 5 | 0 | x 3 |  | 0+ |  | 20 | 1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Transhumain | 0 | 10 | 1 | x 5 |  | 1+ |  | 50 | 5 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Metahumain | 1 | 10 | 2 | x 10 |  | 2+ |  | 100 | 50 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Bio | Gorille | 1 | 20 | 0 | x 20 |  | 1+ |  | 20 | 5 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Gunslinger | 3 | 10 | 1 | x 1 |  | 0+ |  | 10 | 0.5 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Bio | Mantis | 3 | 10 | 2 | x 1 |  | 3+ |  | 300 | 500 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Tinker | 1 | 1 | 0 | x 1 |  | 0+ |  | 20 | 0.2 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Heavy duty | 0 | 20 | 1 | x 100 |  | 0+ |  | 10 | 1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Bio | Tentacule | 0 | 5 | 1 | x 1 |  | 0+ |  | 5 | 0.1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | %total | kW / kg |  |  |  | g | m/s |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Ailes |  | Taille | Cout | Masse | Power |  |  | Turn | Accel | Speed |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Bio | Venusien | 0 | 1 | 0.3 | 1 hour |  |  | 90° | 1 / 5 | 40+ |  | Accel : sustained / dive |  |  |  |  |  |  |  |  |  |  |  |  |
| Bio | Swan | -1 | 1 | 0.3 | 1 hour |  |  | 90° | 1 / 5 | 30+ |  | Dive : speed x 2 |  |  |  |  |  |  |  |  |  |  |  |  |
| Bio | Falcon | -2 | 1 | 0.3 | 1 hour |  |  | 90° | 2 / 20 | 40+ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Bio | Hummingbird | -3 | 1 | 0.3 | 1 hour |  |  | 90° | 2 / 10 | 10+ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Bio | Dragonfly | -4 | 1 |  | 1 hour |  |  | 180° | 5 / 10 | 20 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Helices |  | Taille | Cout | Masse | Power |  |  | Turn | Accel | Speed |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | eVTOL | 0 - 1 | 2 | 0.4 | 10 min |  |  | 180° | 10 | 100 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Helico | 1 - 2 | 2 | 0.6 | 1 hour |  |  | 180° | 0.5 | 100 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Thopter | -1 | 2 | 0.4 | 10 min |  |  | 180° | 30 | 100 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Minidrone | -2 | 2 | 0.4 | 10 min |  |  | 180° | 50 | 30 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Microdrone | -4 | 2 | 0.4 | 10 min |  |  | 180° | 30 | 20 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Rockets / jets |  | Taille | Cout | Masse | Power | Load |  | Turn | Accel | Speed |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Jet suit | 0 | 2 | 0.3 | 10 min | x 1 |  | 180° | 0.5 | 50 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Booster 'DDE' | 1 | 11 | 0.3 | 1 sec | x 1 |  | 45° | 50 | 100 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | F-16 | 2 | 12 | 0.6 | 1 hour | / 10 |  | 90° | 10 | 1000 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Rocket | 2+ | 7+ | 0.6 | 10 sec |  |  | 45° | 20 | 1000 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | ICF - MH | 3+ | 13+ | 0.3 | 1 hour |  |  | 45° | 10 | - |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Boeing | 3 |  | 1.3 | 10 hour |  |  | 45° | 0.2 | 300 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

## Engines

|  |  | GW | km/s | kN | kg/sec | t | kN / kg | GW / t |  | t | g |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | Power | Ve | Thrust | Fuel | Mass | T / m | P / m |  | ship | accel |  |  |  |  |  |  |
|  | Supersonic jet | 0.03 | 1 | 100 | 150 | 1 | 0.1 | 0.03 |  | 3 | 3.33333 |  |  |  |  |  |  |
|  | Merlin 1D | 2600 | 3 | 936 | 274 | 0.5 | 1.872 | 5200 |  | 5 | 18.72 |  | n | 0.54 |  |  |  |
|  | Raptor 2 | 8000 | 3.5 | 2300 | 705 | 1.6 | 1.4375 | 5000 |  | 16 | 14.375 |  |  |  |  |  |  |
|  | Saturn V | 20000 | 2.5 | 7740 |  | 8.4 | 0.921429 | 2380.95 |  | 84 | 9.21429 |  |  |  |  |  |  |
|  | MICFAM MH 1 | 100 | 400 | 500 | 2.2 | 1 | 0.5 | 100 |  | 10 | 5 |  |  |  |  |  |  |
|  | MICFAM MH 2 | 100 | 200 | 1000 | 5 | 1 | 1 | 100 |  | 10 | 10 |  |  |  |  |  |  |
|  | MICFAM MH 3 | 100 | 100 | 2000 | 20 | 1 | 2 | 100 |  | 10 | 20 |  |  |  |  |  |  |
|  | MICFAM Cruise | 100 | 11000 | 18.1818 | 0.00165289 | 1 | 0.0181818 | 100 |  | 10 | 0.181818 |  |  |  |  |  |  |
|  | Epstein | 5500 | 11000 | 1000 | 0.0909091 | 55 | 0.0181818 | 100 |  | 550 | 0.181818 |  |  |  |  |  |  |
|  | Booster DDE | 125 | 5 | 50 | 10 | 0.025 | 2 | 5000 |  | 0.1 | 50 |  | n | 1 |  |  |  |
|  | Jet suit | 0.0008 |  | 1.4 | 0.0208 | 0.0025 | 0.56 | 0.32 |  | 0.1 | 1.4 |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | Mass ratio | 2 |  | Wet mass | 100 |  | t |  |  |
|  |  |  |  |  |  |  | kN / kg |  |  |  |  |  |  |  |  |  |  |
|  | Gen T | Tp (TW) | Ve (km/s) | T (kN) | Fuel | Mass (t) | T / m |  | dV (km/s) | dV (c) |  | accel (g) |  |  | Horse power |  |  |
|  | AM Beam MAX | 500 | 100000 | 10000 | D+A | 10 | 1000 |  | 69314.7 | 0.231209 |  | 10 |  |  | 6.80272e+08 |  |  |
| 500 | ICF MAX | 500 | 10000 | 100000 | P | 1000 | 100 |  | 6931.47 | 0.0231209 |  | 100 |  |  | 6.80272e+08 |  |  |
|  | Low gear |  | 20000 | 50000 | P+H |  | #DIV/0! |  | 13862.9 | 0.0462418 |  | 50 |  |  | 0 |  |  |
|  | NSWR MAX | 30 | 4700 | 13000 | U |  | #DIV/0! |  | 3257.79 | 0.0108668 |  | 13 |  |  | 4.08163e+07 |  |  |
|  | Orion MAX | 39 | 9800 | 8000 | P | 8 | 1000 |  | 6792.84 | 0.0226585 |  | 8 |  |  | 5.30612e+07 |  |  |
|  | ICF Exacting | 10 | 7000 | 2857.14 | P | 3.33333 | 857.143 |  | 4852.03 | 0.0161846 |  | 2.85714 |  |  | 1.36054e+07 |  |  |
|  | Low gear |  | 20000 | 1050 | P+H |  | #DIV/0! |  | 13862.9 | 0.0462418 |  | 1.05 |  |  | 0 | 75 | 0.075 |
|  | ICF Stratios | 42 | 7000 | 12000 | P | 14 | 857.143 |  | 4852.03 | 0.0161846 |  | 12 | 13h |  | 5.71429e+07 |  |  |
|  | Low gear |  | 20000 | 4200 | P+H |  | #DIV/0! |  | 13862.9 | 0.0462418 |  | 4.2 |  |  | 0 |  |  |
|  | AM Beam Stratios | 75 | 50000 | 3000 | D+A | 10 | 300 |  | 34657.4 | 0.115605 |  | 3 |  |  | 1.02041e+08 |  |  |
|  | ICF Nestor | 350 | 7000 | 100000 | P | 116.667 | 857.143 |  | 4852.03 | 0.0161846 |  | 100 | 13h |  | 4.7619e+08 |  |  |
|  | Firefly | 12 | 12890 | 1900 |  |  | #DIV/0! |  | 8934.67 | 0.0298028 |  | 1.9 |  |  | 1.63265e+07 |  |  |
|  | Epstein | 5.5 | 11000 | 1000 | D+T | 1.83333 | 545.455 |  | 7624.62 | 0.025433 |  | 1 |  |  | 7.48299e+06 |  |  |
|  | Epstein 2 | 100 | 19000 | 10526.3 |  | 33.3333 | 315.789 |  |  |  |  |  |  |  |  |  |  |
|  | AV:T |  | 1000 |  | D+H |  | #DIV/0! |  | 693.147 | 0.00231209 |  | 0 |  |  | 0 |  |  |
|  | Cruise | 0.1 |  | 245 |  |  | #DIV/0! |  | 0 | 0 |  | 0.245 |  |  | 136054 |  |  |
|  | Combat | 2.5 |  | 50000 |  |  | #DIV/0! |  | 0 | 0 |  | 50 |  |  | 3.40136e+06 |  |  |
|  | MI Fusion Icarus | 8 | 8922 | 1780 | D |  | #DIV/0! |  | 6184.26 | 0.0206285 |  | 1.78 |  |  | 1.08844e+07 |  |  |
|  | Orion MAX | 39 | 9800 | 8000 | P | 10 | 800 |  | 6792.84 | 0.0226585 |  | 8 |  |  | 5.30612e+07 |  |  |
|  | Orion 10k | 24 | 120 | 400000 | D | 3250 | 123.077 |  | 83.1777 | 0.000277451 |  | 400 |  |  | 3.26531e+07 |  |  |
|  | Orion 4k | 1.6 | 39 | 80000 | D | 1700 | 47.0588 |  | 27.0327 | 9.01715e-05 |  | 80 |  |  | 2.17687e+06 |  |  |
|  | Orion USAF | 33 | 33 | 2000 | D | 3250 | 0.615385 |  | 22.8739 | 7.6299e-05 |  | 2 |  |  | 4.4898e+07 |  |  |
|  | Orion Fusion | 10.7 | 73 | 292 | D | 200 | 1.46 |  | 50.5997 | 0.000168783 |  | 0.292 |  |  | 1.45578e+07 |  |  |
|  | Orion Fission | 5.7 | 43 | 263 | U |  | #DIV/0! |  | 29.8053 | 9.94199e-05 |  | 0.263 |  |  | 7.7551e+06 |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  | 0 |  |  | 0 |  |  |
|  | Gen G | Tp (GW) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Slough Fusion |  | 50 |  | D |  | Small waste heat |  | 34.6574 | 0.000115605 |  | 0 |  |  | 0 |  |  |
|  | Cruise | 0.0026 |  | 0.1 |  |  |  |  | 0 | 0 |  | 0.0001 |  |  | 3537.41 |  |  |
|  | Combat | 0.3 |  | 14 |  |  |  |  | 0 | 0 |  | 0.014 |  |  | 408163 |  |  |
|  | MT Fusion THIO |  | 760 |  | D |  |  |  | 526.792 | 0.00175719 |  | 0 |  |  | 0 |  |  |
|  | 40 Hz pulses | 25 |  | 66 |  |  |  |  | 0 | 0 |  | 0.066 |  |  | 3.40136e+07 |  |  |
|  | 200 Hz pulses | 128 |  | 340 |  |  |  |  | 0 | 0 |  | 0.34 |  |  | 1.7415e+08 |  |  |
|  |  |  |  |  |  |  |  |  | 0 | 0 |  | 0 |  |  | 0 |  |  |
|  | IC Fusion D-T | 20 | 170 | 240 | D+T |  |  |  | 117.835 | 0.000393055 |  | 0.24 |  |  | 2.72109e+07 |  |  |
|  | IC Fusion D-D | 0.1 | 78 | 3 | D |  |  |  | 54.0655 | 0.000180343 |  | 0.003 |  |  | 136054 |  |  |

## MICFAM

|  | 0.002 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | F=ve​P​=1.5×1053.8×1012​=25.3×106N=25.3MN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | a=mF​=300,00025.3×106​=84.3m/s2≈8.6g |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| COMBAT MODE |  |  |  |  |  |  |  |  |  |  | FOR 10 SECONDS BURST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Power | P | 5 | TW | 5000000000000 |  | MICFAM | 100 | MW/kg | Engine |  | Thrust |  | Delta v |  | Heatsink |  | Fuel |  | Delta v |  | Heat |  | Fuel |  |  |
|  | Exhaust velocity | Ve | 400 | kms | 400000 |  |  | 0.1 | TW/t |  |  | 10 | g | 10 | km/r | 15 | % | 15 | % | 1 | km/s | 1 | TJ | 2 |  | t |
|  | Nozzle eff | n | 0.99 | ratio |  |  |  | 50 | t |  |  | 5 | g | 5 | km/r | 7.5 | % | 7.5 | % | 0.5 |  | 0.5 |  | 1 |  |  |
| F = 2Pn / Ve | Thrust | F | 24.75 | MN |  |  |  |  |  |  |  | 2 | g | 2 | km/r | 3 | % | 3 | % | 0.2 |  | 0.2 |  | 0.4 |  |  |
|  | Ship mass | m | 500 | t |  |  | MH | 15 | t |  |  | 1 | g | 1 | km/r | 1.5 | % | 1.5 | % | 0.1 |  | 0.1 |  | 0.2 |  |  |
|  | Acceleration | a | 5.04587 | g | 49.5 | m/s² | LiH | 10 | t | Heat sink |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  | 6.875 |  |  | 20 | MJ / kg |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| m = F / Ve | Mass flow | m | 61.875 | kg/s |  |  |  | 0.2 | TJ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Brayton cycle |  | 35 | % |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Waste heat | h | 32.5 | GW = GJ/s | 0.12375 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  | ETHER | 1 | t | Radiator |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | burn time | t | 10 | s | 0.495 | km/s |  | 200 | MW/t |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | fuel used | m | 0.61875 | t | 4.125 | % fuel tank |  | 200 | MW |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | waste heat | h | 0.325 | TJ | 162.5 | % of heat sink |  | 0.2 | GW |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | speed | delta v | 0.495 | km/s |  |  |  | 0.0002 | TW |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | displacement | d | 2.475 | km |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  | 108 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| CRUISE MODE |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Power | P | 5 | TW | 5000000000000 |  | 86400 |  | 0.3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Exhaust velocity | Ve | 10000 | kms | 10000000 |  | D | 25 | t |  |  |  |  |  |  | AU | 0.1 | 1 | 2 | 3 | 4 | 5 | 10 | 15 | 20 |  |
|  | Nozzle eff | n | 0.99 | ratio |  |  |  |  |  |  | Accel phase |  | 10 | j |  |  | 2.0121 | 6.36282 | 8.99838 | 11.0207 | 12.7256 | 14.2277 | 20.121 | 24.6431 | 28.4554 | d |
| F = 2Pn / Ve | Thrust | F | 0.99 | MN |  |  |  | 0.5 | g |  | delta v |  | 1710.72 | km/s |  |  | 17.2107 | 54.425 | 76.9686 | 94.2669 | 108.85 | 121.698 | 172.107 | 210.787 | 243.396 | % fuel |
|  | Ship mass | m | 500 | t |  |  |  | 5 | m/s |  |  |  | 0.985375 | AU/j |  | AU | 0.1 | 1 | 2 | 3 | 4 | 5 | 10 | 15 | 20 |  |
|  | Acceleration | a | 0.201835 | g | 1.98 | m/s² |  | 2.5 | MN |  | distance |  | 4.92687 | AU |  |  | 10.1015 | 11.0148 | 12.0297 | 13.0445 | 14.0594 | 15.0742 | 20.1484 | 25.2226 | 30.2968 | d |
|  |  |  |  |  | 171.072 | km/s/j |  | 12.6263 | TW |  | fuel used |  | 85.536 | % |  |  | 17.2107 | 54.425 | 76.9686 | 94.2669 | 108.85 | 121.698 | 171.072 | 171.072 | 171.072 | % fuel |
| m = F / Ve | Mass flow | m | 0.099 | kg/s |  | 8.5536 | t/j |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Brayton cycle |  | 35 | % |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Waste heat | h | 32.5 | GW = GJ/s | 32500 | GW |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  | mass ratio |  | 1.5 |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | burn time | t | 0.1 | s |  | 1.71072 |  |  |  |  | Total delta v |  | 4054.65 | km/s |  |  |  |  |  |  |  |  |  |  |  |  |
|  | fuel used | m | 9.9e-06 | t |  |  |  | 2.92275 | j |  |  |  | 2.33548 | AU/j |  |  |  |  |  |  |  |  |  |  |  |  |
|  | waste heat | h | 3.24998 | TJ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | speed | delta v | 0.000198 | km/s |  | 0.00105276 | km/s/j |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | time to cool | cd | 4.51386 | h |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ANTIMATTER MODE |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Power | P | 5 | TW | 5000000000000 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Exhaust velocity | Ve | 50000 | kms | 50000000 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Nozzle eff | n | 0.99 | ratio |  |  |  |  |  |  | Accel phase |  | 300 | j |  |  | 0.833333 |  |  |  |  |  |  |  |  |  |
| F = 2Pn / Ve | Thrust | F | 0.198 | MN |  |  |  |  |  |  | delta v |  | 118.8 | km/s |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Ship mass | m | 500 | t |  |  |  |  |  |  |  |  | 0.0684288 | AU/j |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Acceleration | a | 0.040367 | g | 0.396 | m/s² |  |  |  |  | distance |  | 10.2643 | AU |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  | fuel used |  | 102.643 | % |  |  |  |  |  |  |  |  |  |  |  |  |
| m = F / Ve | Mass flow | m | 0.00396 | kg/s |  | 0.342144 | t/j |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Brayton cycle |  | 35 | % |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Waste heat | h | 32.5 | GW = GJ/s |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | burn time | t | 1000 | s |  |  |  |  |  |  | mass ratio |  | 3 |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | fuel used | m | 0.00396 | t |  |  |  |  |  |  | Total delta v |  | 54930.6 | km/s |  |  |  |  |  |  |  |  |  |  |  |  |
|  | waste heat | h | 35000 | TJ |  |  |  |  |  |  |  |  | 31.64 | AU/j |  |  |  |  |  |  |  |  |  |  |  |  |
|  | speed | delta v | 0.396 | km/s | 0.000228096 | AU/j | 1.32e-06 | c |  |  |  |  | 0.183102 | c |  |  |  |  |  |  |  |  |  |  |  |  |
|  | time to cool | cd | 48611.1 | h |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| E = P * t | Energy needed | E | 5000 | TJ | 180 | TJ (for 1g of matter + 1g of antimatter) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Antimatter needed | m | 27.7778 | g |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

## Batterie humaine

|  |  |  |  |  |  |  |  |  |  |  |  | Target mass | 100 | kg |  |  |  | energy |  | a |  | carry |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | Cooling : continuous 2 kW, burst 10 kW (vapor). (100 - 500 W/m²K) |  |  |  |  |  |  |  |  | 5 | Muscles | 50 | % |  | 50 | kg | 1 | MW | 50 | g | 100 | kg |
|  |  |  |  |  |  |  |  |  |  |  | 4 | CPU | 10 | % |  | 10 | kg | 0.2 | MW |  |  |  |  |
|  | h (passive) | 0.5 | kW/m² K |  |  | Q_conv | 20 | kW | Q_conv = h · A · ΔT |  |  | Bones | 15 | % |  | 15 | kg |  |  |  |  |  |  |
|  | h (active) | 1 | kW/m² K |  |  | Q_conv | 40 | kW |  |  |  | Organs | 15 | % |  | 15 | kg |  |  |  |  |  |  |
|  |  |  |  |  |  | structure | 4 | kg | 2 mm CNM |  |  | Battery | 10 | % |  | 10 | kg | 2.5 | MJ |  |  |  |  |
|  | ΔT | 20 | K |  |  | cooling | 8 | kg |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  | Actual |  |  |  | 100 | kg |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | 100 | W |  | Target mass | 200 | kg |  |  |  | energy |  | a |  | carrying cap |  |
|  | Factor | 2 |  |  |  |  | 25 | kg | 6 | kJ / min | 6 | Muscles | 50 | % |  | 100 | kg | 2 | MW | 50 | g | 200 | kg |
|  | Hardware | 1 | kg |  | energy |  |  |  | 0.36 | MJ / h | 4 | CPU | 10 | % |  | 20 | kg | 0.4 | MW |  |  |  |  |
|  | Water | 6 | kg | 2500 | kJ / kg |  | 15 | MJ | 14 | h |  | Bones | 10 | % |  | 20 | kg |  |  |  |  |  |  |
|  | Graphene | 14 | kg | 360 | kW / kg |  | 5.04 | MJ | 840 | min |  | Organs | 10 | % |  | 20 | kg |  |  |  |  |  |  |
|  | Fat | 4 | kg | 3780 | kW / kg |  | 15.12 | MJ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  | Battery | 20 | % |  | 40 | kg | 10 | MJ |  |  |  |  |
|  | Total mass | 100 | kg |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Muscles | 50 | % |  | 50 | kg |  |  |  |  |  | Actual |  |  |  | 200 | kg |  |  |  |  |  |  |
|  | CPU | 10 | % |  | 10 | kg |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Bones | 15 | % |  | 15 | kg |  |  |  |  |  | Target mass | 100 | kg |  |  |  | energy |  | a |  | carrying cap |  |
|  | Organs | 15 | % |  | 15 | kg |  |  |  |  | 4 | Muscles | 50 | % |  | 50 | kg | 1 | MW | 33.3333 | g | 50 | kg |
|  | Battery | 20 | % |  | 20 | kg |  |  |  |  | 5 | CPU | 50 | % |  | 50 | kg | 1 | MW |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  | Bones | 15 | % |  | 15 | kg |  |  |  |  |  |  |
|  | Muscle mass | 50 | kg | athlete |  |  |  |  |  |  |  | Organs | 15 | % |  | 15 | kg |  |  |  |  |  |  |
|  | Muscles (aggro) | 50 | kW/kg | peak | 0.1 | kW/kg | 2.5 | MW |  |  |  | Battery | 20 | % |  | 20 | kg | 5 | MJ |  |  |  |  |
|  | Muscles (high) | 10 | kW/kg | sust | 0.02 | kW/kg | 0.5 | MW |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Muscles (low) | 1 | kW/kg |  |  |  |  |  |  |  |  | Actual |  |  |  | 150 | kg |  |  |  |  |  |  |
|  | CPU mass | 10 | kg |  |  |  | 1 | MW |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | CPU (high) | 100 | kW/kg |  |  |  |  |  |  |  |  | Target mass | 200 | kg |  |  |  | energy |  | a |  | carrying cap |  |
|  | CPU (low) | 1 | kW/kg |  |  |  |  |  |  |  | 5 | Muscles | 50 | % |  | 100 | kg | 2 | MW | 33.3333 | g | 100 | kg |
|  |  |  |  |  |  |  |  |  |  |  | 6 | CPU | 50 | % |  | 100 | kg | 2 | MW |  |  |  |  |
|  | Max discharge | 1000 | kW/kg |  |  |  | 14 | MW |  |  |  | Bones | 15 | % |  | 30 | kg |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  | Organs | 15 | % |  | 30 | kg |  |  |  |  |  |  |
|  | Average | 1500 | N/kg |  |  |  |  |  |  |  |  | Battery | 20 | % |  | 40 | kg | 10 | MJ |  |  |  |  |
|  | Athletic | 2000 | N/kg |  |  | legs | 30 | kN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Force | 3000 | N/kg |  |  | hold | 15.2957 | t | 3.33333 | m/s |  | Actual |  |  |  | 300 | kg |  |  |  |  |  |  |
|  | Structure |  |  |  |  | limit | 5.09858 | t | ARBITRARY |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | P | 500000 | W |  |  | Speed | 142.877 | m/s | v=​(2Pη / (ρCd​A))^1/3 |  |  | Target mass | 400 | kg |  |  |  | energy |  | a |  | carrying cap |  |
|  | η | 0.7 | (efficiency) |  |  |  | 514.357 | km/h |  |  | 7 | Muscles | 50 | % |  | 200 | kg | 4 | MW | 50 | g | 400 | kg |
|  | ρ | 1.2 | kg/m3 (air density) |  |  |  |  |  |  |  | 5 | CPU | 10 | % |  | 40 | kg | 0.8 | MW |  |  |  |  |
|  | CdA | 0.2 | m² (aerodynamism) |  |  |  |  |  |  |  |  | Bones | 10 | % |  | 40 | kg |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  | Organs | 10 | % |  | 40 | kg |  |  |  |  |  |  |
|  | F (legs) | 75000 | N |  |  | a | 750 | m/s² | a = F/m |  |  | Battery | 20 | % |  | 80 | kg | 20 | MJ |  |  |  |  |
|  | m | 100 | kg |  |  |  | 75 | g |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  | Actual |  |  |  | 400 | kg |  |  |  |  |  |  |
|  | Total mass | 100 | kg |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | strength | 5000 | N/kg |  |  | Fmax | 150000 | N |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | legs muscles | 30 | kg |  |  | Pmax | 3000 | W |  |  |  | Target mass | 100 | kg |  |  |  | energy |  | a |  | carrying cap |  |
|  | power | 100 | W/kg |  |  | Vmax | 0.0666667 | m/s |  |  | 3 | Muscles | 50 | % |  | 50 | kg | 1 | MW | 25 | g | 0 | kg |
|  |  |  |  |  |  | peak | 1500 | m/s² |  |  | 6 | CPU | 100 | % |  | 100 | kg | 2 | MW |  |  |  |  |
|  | α | 0.3 |  |  |  |  | 150 | g |  |  |  | Bones | 10 | % |  | 10 | kg |  |  |  |  |  |  |
| elite | sprint | 10 | m/s | human leg |  | sprint force | 5000 | N |  |  |  | Organs | 10 | % |  | 10 | kg |  |  |  |  |  |  |
|  | accel | 10 | m/s² |  |  | accel | 50 | m/s² |  |  |  | Battery | 30 | % |  | 30 | kg | 7.5 | MJ |  |  |  |  |
|  | arm speed | 40 | m/s |  |  | jump force | 15000 | N |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | cyber leg |  | sprint force | 10000 | N |  |  |  | Actual |  |  |  | 200 | kg |  |  |  |  |  |  |
|  |  |  |  |  |  | accel | 100 | m/s² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Skeletal muscle | 300000 | N/m² |  |  | jump force | 30000 | N |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 300 | N/kg |  |  |  |  |  |  |  |  | Target mass | 80 | kg |  |  |  | energy |  | a |  | carrying cap |  |
|  | drone | 10000 | N/kg |  |  | k | 0.1 |  |  |  | 4 | Muscles | 40 | % |  | 32 | kg | 0.64 | MW | 40 | g | 48 | kg |
|  |  |  |  |  |  | scaled F/W | 90 |  |  |  | 4 | CPU | 10 | % |  | 8 | kg | 0.16 | MW |  |  |  |  |
|  | density | 1000 | kg/m3 |  |  |  |  |  |  |  |  | Bones | 15 | % |  | 12 | kg |  |  |  |  |  |  |
|  | f | 0.3 |  | V |  | by mass | F/W (lift) nature |  | real | eq |  | Organs | 15 | % |  | 12 | kg |  |  |  |  |  |  |
| 100 | L (human) | 1.7 | m | 2 | m3 | 0.464159 | 2.30089 | x body weight | 3 | 5.29412 |  | Battery | 20 | % |  | 16 | kg | 4 | MJ |  |  |  |  |
| 1 | L (mouse) | 0.1 | m | 0.001 | m3 | 0.1 | 9.48683 | x body weight | 10 | 90 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 0.1 | L (ant) | 0.003 | m | 2.7e-08 | m3 | 0.0464159 | 54.7723 | x body weight | 50 | 3000 |  | Actual |  |  |  | 80 | kg |  |  |  |  |  |  |
| 1000 | L (elephant) | 3 | m | 18 | m3 | 1 | 1.73205 | x body weight | 2 | 3 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1000 | L (power) | 3 | m | 5 | m3 | 1 | 1.73205 | x body weight |  | 3 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 10000 | L (tank) | 5 | m | 20 | m3 | 2.15443 | 1.34164 | x body weight |  | 1.8 |  | Target mass | 200 | kg | Others |  | kg | energy |  | a |  | carrying cap |  |
| 10 | L (dog) | 0.5 | m |  |  | 0.215443 |  |  |  |  |  | Muscles | 65 | % |  | 130 | kg | 2.6 | MW | 65 | g | 320 | kg |
|  |  |  |  |  |  |  |  |  |  |  |  | CPU | 5 | % |  | 10 | kg | 0.2 | MW |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  | Structure | 10 | % |  | 20 | kg |  |  |  |  | 200 | kg |
|  | Total mass | 1000 | kg |  |  |  |  |  |  |  |  | Organs | 5 | % |  | 10 | kg |  |  |  |  |  |  |
|  | strength | 6000 | N/kg |  |  | Fmax | 1200000 | N |  |  |  | Battery | 15 | % |  | 30 | kg | 7.5 | MJ |  |  |  |  |
|  | legs muscles | 200 | kg |  |  | Pmax | 2000000 | W |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | power | 10000 | W/kg |  |  | Vmax | 5.55556 | m/s |  |  |  | Actual | 100 | % |  | 200 | kg |  |  |  |  |  |  |
|  |  |  |  |  |  | peak | 1200 | m/s² | 120 | m |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | α | 0.3 |  |  |  |  | 120 | g |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| elite | sprint | 10 | m/s | human leg |  | sprint force | 40000 | N |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | accel | 10 | m/s² |  |  | accel | 40 | m/s² | 4 | m |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | arm speed | 40 | m/s | cyber leg |  | sprint force | 80000 | N |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  | accel | 80 | m/s² | 8 | m |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Skeletal muscle | 5000000 | N/m² | jump |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 5000 | N/kg |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | drone | 10000 | N/kg |  |  | k | 0.1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  | scaled F/W | 750 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | density | 2000 | kg/m3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | f | 0.3 |  | V |  | by mass | F/W (lift) nature |  | real | eq |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 | L (mouse) | 0.1 | m | 0.001 | m3 | 0.1 | 27.3861 | x body weight | 10 | 750 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 0.1 | L (ant) | 0.003 | m | 2.7e-08 | m3 | 0.0464159 | 158.114 | x body weight | 50 | 25000 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1000 | L (elephant) | 3 | m | 18 | m3 | 1 | 5 | x body weight | 2 | 25 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 10000 | L (tank) | 5 | m | 20 | m3 | 2.15443 | 3.87298 | x body weight |  | 15 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 10 | L (dog) | 0.5 | m |  |  | 0.215443 | 12.2474 | x body weight |  | 150 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 0.0001 | taille -4 | 0.00464159 | m |  |  | 0.00464159 | 127.115 | x body weight |  | 16158.3 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 0.01 | taille -3 | 0.0215443 | m |  |  | 0.0215443 | 59.0016 | x body weight |  | 3481.19 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 | taille -2 | 0.1 | m |  |  | 0.1 | 27.3861 | x body weight |  | 750 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 10 | taille -1 | 0.5 | m |  |  | 0.215443 | 12.2474 | x body weight |  | 150 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 100 | taille 0 | 1.5 | m | 2 | m3 | 0.464159 | 7.07107 | x body weight | 3 | 50 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1000 | taille 1 | 3 | m | 5 | m3 | 1 | 5 | x body weight |  | 25 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 10000 | taille 2 | 5 | m |  |  | 2.15443 | 3.87298 | x body weight |  | 15 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 100000 | taille 3 | 5 | m |  |  | 4.64159 | 3.87298 | x body weight |  | 15 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1000000 | taille 4 | 10 | m |  |  | 10 | 2.73861 | x body weight |  | 7.5 |  |  |  |  |  |  |  |  |  |  |  |  |  |

## Augments

|  |  |  |  | m/s | g | degats | % / sec | Lift : body weight x |  |  |  |  |  | kN/kg | kW/kg | % corps | m/s | kJ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | Prix | Indice | Sprint | Jump | Melee | Power | Taille -3 | Taille -2 | Taille -1 | Taille 0 | Taille 1 | Taille 2 | Strength | Power | Mass | Swing | Punch |
| Corps | Standard | 0 | 3 | 5 | 2 | 0+ | 0 | x10 | x5 | x2 | x1 | x1 | x0 | 1 | 0.1 | 30 | 10 | 0.2 |
|  | Athlétique | 2 | 4 | 10 | 4 | 0+ | 0 | x20 | x10 | x5 | x3 | x2 | x1 | 1.5 | 0.2 | 40 | 20 | 1 |
|  | Surhumain | 5 | 5 | 20 | 6 | 1+ | 1 | x50 | x20 | x10 | x5 | x3 | x2 | 3 | 1 | 50 | 40 | 5 |
|  | Metahumain | 10 | 6 | 40 | 10 | 2+ | 2 | x80 | x30 | x15 | x8 | x4 | x2 | 6 | 2 | 50 | 80 | 50 |
|  | Prototype | ? | 7 | 50 | 12 | 2+ | 5 | x100 | x40 | x20 | x10 | x5 | x3 | 9 | 5 | 50 | 100 | 100 |
| Membres | Cyberlegs | 3 | 6 | 80 | 20 | 2+ | 1 |  |  |  |  |  |  | 6 | 2 | 20 | 80 | 64 |
|  | Bras Mantis | 3 | 6 |  |  | 3+ | 0.5 | x10 | x5 | x2 | x1 | x1 | x0 | 6 | 2 | 5 | 200 | 500 |
|  | Membre blindé | 1 | 6 | 4 | 1 | 1+ | 0.2 | x0 | x0 | x0 | x0 | x0 | x0 | 6 | 2 | 60 | 10 | 6 |
|  | Booster 'DDE' | 5 |  | +100 | +10 |  | 0 |  |  |  |  |  |  |  |  | 25 |  |  |
| Externe | Cyberdeck | 5 |  |  |  |  | 0 |  |  |  |  |  |  |  |  | 20 |  |  |
|  | Batterie | 1 |  |  |  |  | x0.5 |  |  |  |  |  |  |  |  | 20 |  |  |
| Standard | Masse | 70 | kg | 100 | % |  |  | Athlétique | Masse | 80 | kg | 100 | % |  |  |  |  |  |
| 3 | Muscles | 30 | % | 21 | kg |  |  | 4 | Muscles | 40 | % | 0 | kg |  |  |  |  |  |
|  | Cerveau | 4 | % | 2.8 | kg |  |  |  | Cerveau | 4 | % | 0 | kg |  |  |  |  |  |
|  | Ossature | 15 | % | 10.5 | kg |  |  |  | Ossature | 15 | % | 0 | kg |  |  |  |  |  |
|  | Organes | 15 | % | 10.5 | kg |  |  |  | Organes | 15 | % | 0 | kg |  |  |  |  |  |
| Batterie | Hardware | 0.3 | % | 0.21 | kg |  |  | Batterie | Hardware | 1 | % | 0 | kg |  |  |  |  |  |
|  | Graisse | 15 | % | 10.5 | kg |  |  |  | Graisse | 8 | % | 0 | kg |  |  |  |  |  |
|  | Eau | 20 | % | 14 | kg |  |  |  | Eau | 15 | % | 0 | kg |  |  |  |  |  |
|  | Carbs | 0.7 | % | 0.49 | kg |  |  |  | Carbs | 2 | % | 0 | kg |  |  |  |  |  |
| Transhumain | Masse | 90 | kg | 100 | % |  |  | Metahumain | Masse | 100 | kg | 100 | % |  |  |  |  |  |
| 5 | Muscles | 50 | % | 0.5 | kg |  |  | 6 | Muscles | 50 | % | 50 | kg |  |  |  |  |  |
|  | Cerveau | 4 | % | 0.04 | kg |  |  |  | Cerveau | 4 | % | 4 | kg |  |  |  |  |  |
|  | Ossature | 15 | % | 0.15 | kg |  |  |  | Ossature | 15 | % | 15 | kg |  |  |  |  |  |
|  | Organes | 15 | % | 0.15 | kg |  |  |  | Organes | 5 | % | 5 | kg |  |  |  |  |  |
| Batterie | Hardware | 1 | % | 0.01 | kg |  |  | Batterie | Hardware | 5 | % | 5 | kg |  |  |  |  |  |
|  | Graisse + | 1 | % | 0.01 | kg |  |  |  | Graisse + | 0 | % | 0 | kg |  |  |  |  |  |
|  | Eau | 10 | % | 0.1 | kg |  |  |  | Eau + | 13 | % | 13 | kg |  |  |  |  |  |
|  | Carbs + | 4 | % | 0.04 | kg |  |  |  | Carbs + | 8 | % | 8 | kg |  |  |  |  |  |

## gravity

| mass | 2 | earth |  |  |  |
| --- | --- | --- | --- | --- | --- |
| volume | 1.20581 | earth | rocky : | 1.20581 | earth |
| gravity | 1.37554 | g |  |  |  |

## Explosives

|  |  |  |  |  |  |  |  | PeakOverpressure_psi | PeakOverpressure_kPa | Human_effects | Window_glass_3mm | Car_passenger | Light_wood_frame_house | Brick_masonry_house | Reinforced_concrete_30cm | Steel_plate_5cm |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Energy | 200000000 | J |  |  |  |  |  | 0.2 | 1.4 | No significant injury if sheltered; minimal structural effect | Very unlikely to break | No structural damage | No damage | No damage | No damage | No damage |
| TNT equivalent | 47.8011 | kg |  |  |  |  |  | 0.5 | 3.4 | Possible eardrum rupture for some; minor debris risk | Small windows may crack or pop out | No structural damage; falling debris possible | No damage | No damage | No damage | No damage |
| W1/3TNT | 3.62922 |  |  |  |  |  |  | 1 | 6.9 | High chance of eardrum rupture; glass injuries likely | Most residential windows break | Localized denting or cracking | Minor structural damage (doors or windows) | Minor to moderate non-structural damage | Negligible | No damage |
|  |  |  |  | Z(P) |  | distance |  | 2 | 13.8 | Increased lung trauma risk; many injured from debris | All standard windows shatter | Possible broken windows; glass and trim ripped off | Significant damage to trim and roof elements | Partial collapse of unreinforced walls possible | Possible chipping or spalling | No perforation |
| light damage | 72.5843 | m | 1 psi | 7 | kPa | 20 | m | 3 | 20.7 | High probability of serious lung injury; fatalities outdoors | Commercial glazing fails | Doors blown off; body intrusion possible | Partial collapse of light structures | Severe structural damage to masonry | Localized spalling; generally intact | No perforation |
| heavy damage | 29.0337 | m | 5 psi | 35 | kPa | 8 | m | 5 | 34.5 | Severe injuries common; many fatalities outdoors | All glazing and curtain walls fail | Heavy deformation; possible rolling of vehicles | Severe damage to wood-frame structures | Heavy damage; collapse of many masonry buildings | Heavy spalling; thin-section breach possible | No perforation |
| severe damage | 18.1461 | m | 10 psi | 70 | kPa | 5 | m | 10 | 68.9 | Very high lethality in the open; massive destruction | Almost all glazing destroyed | Vehicles overturned or crushed by debris | Most wood houses destroyed | Severe structural collapse | Serious RC damage; through-breaches possible | No perforation; mounts may fail |
|  |  |  |  |  |  |  |  | 20 | 137.9 | Essentially unsurvivable in the open; complete destruction locally | Catastrophic building failure | Vehicles destroyed | Complete destruction of light buildings | Wide collapse of masonry | Large-scale shattering or spalling | No clean perforation; mounts fail |
|  |  |  |  |  |  |  |  | 50 | 344.7 | Near-certain fatality; near-total obliteration | Few intact structures remain | Vehicles vaporized by fragments | Nothing left of light buildings | Serious crushing of heavy masonry | Major breach or failure of concrete | Possible large plastic deformation; still unlikely to perforate |
|  |  |  |  |  |  |  |  | 100 | 689.5 | Complete annihilation locally | Absolute annihilation of exposed objects | All vehicles destroyed | All building types destroyed | Heavy damage to reinforced structures | Full plastic failure of concrete | Perforation depends on impulse/duration; near steel yield |
|  |  |  |  |  |  |  |  | 1000 | 6894.8 | Catastrophic; extreme environment | Absolute annihilation | Steel and heavy structures shredded | No light buildings remain | Crushing and destruction of masonry | Concrete obliterated | Fragment-driven penetration dominates |

## Stratios mass

|  |  | dry mass |  |
| --- | --- | --- | --- |
|  | 95 | 400 |  |
| Engine | 15 | 60 | 4 TW MICFAM engine |
| Cooling | 25 | 100 | 3 50x20m retractable L-ETHER wings (10 GW), coolant pumps |
| Heat sink | 25 | 100 | 2 TJ (Lithium hydride + L-ETHER hab wheel) |
| Structure | 10 | 40 | Carbon steel hull with ceramic plating, lightweight CNT polymer internal structure |
| Power | 3 | 12 | Backup fusion core, graphene capacitors and power buses |
| Life support | 3 | 12 | Facilities for a military crew of 10, food and water, recycling |
| Armor | 1 | 4 | Multi-layered whipple shield, front only |
| Weapons | 5 | 20 | Laser turret, keel-mounted coilgun |
| Auxiliary | 3 | 12 | Side thrusters, gyroscope (mounted in the hab wheel), wings and landing struts |
| CPU | 3 | 12 | Bio-computer with DNA storage, autonomous AI |
| Sensors | 1 | 4 | Sensors suite (radar, lidar, optical, EM sensors, internal monitoring) + Comms array |
| Miscellaneous | 1 | 4 | Laser sail, land rover, repair drones and other equipment |

## gyro

| B | 8 | T |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| r | 1 | m | shaft radius |  |  |  |  |  |
| A | 2 | m² | magnetic bearing area |  |  |  |  |  |
| τ max | 50.9296 | MN·m | ring torque | τmax = r⋅ B² A / 2μ0​​ |  |  |  |  |
| max Ωt​​ | 0.0848826 | rad |  | τ=L⋅Ωt​ |  |  |  |  |
|  | 4.86342 | deg |  |  |  |  |  |  |
|  |  |  |  |  | L = mrv |  |  |  |
| L | 600000000 | kg·m²/s |  |  |  |  |  |  |
| m | 10000 | kg | ring mass |  |  |  |  |  |
| r | 30 | m |  |  |  |  |  |  |
| v | 2000 | m/s |  |  |  |  |  |  |
| I | 28800000 | kg·m² | Ship moment of inertia        2.88×10^7 kg·m² |  |  |  |  |  |
| Ωt​​ | 0.087 | rad |  |  |  |  |  |  |
|  | 4.98473 | deg/s |  |  |  |  |  |  |
| ωship​ | 1.8125 | rad/s |  |  |  |  |  |  |
|  | 103.849 | deg/s |  |  |  |  |  |  |
| P | 4.5414 | MW | energy cost for torque | P=LΩt² |  |  |  |  |
| E | 20 | GJ | rotational energy stored | E = 1/2 mv² |  |  |  |  |
|  |  |  |  |  | Torque | 45 | MN·m |  |
|  |  |  |  |  | F | 45000000 | N | F = Pm​*A = A * B² / 2μ0​​ |

## Sail

|  |  |  |  |  |  |  |  |  |  | 1 | g |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |  | 63 | d |  |  |  |
|  |  |  |  | c= | 300000000 | m/s |  |  |  | 0.181 | c |  |  |  |
|  |  |  |  |  |  |  |  |  |  | 990 | AU |  |  |  |
|  | Heat res | 1 | TW |  |  |  | F=(1+R)⋅P​  /  c |  |  |  |  | 544400 | W/m² | solar power at 0.05 AU |
|  | Reflectivity | 99.9 | % |  | 0.999 |  |  |  |  | 2 | g | 0.5444 | MW/m² |  |
|  | Max laser power | 1000 | TW |  |  |  | Where: |  |  | 45 | d |  |  |  |
|  |  |  |  |  |  |  |  |  |  | 0.259 | c | 1836884644 | m² | area for 1 PW |
|  |  |  |  |  |  |  | F = thrust (Newtons) |  |  | 1000 | AU | 1836.88 | km² |  |
|  | Laser power | 1 | PW |  | 1e+15 | W |  |  |  |  |  | 42.8589 | km |  |
|  | Thrust | 6.66333 | MN |  | 6.66333e+06 | N | P = laser power (Watts) |  |  | 3 | g |  |  |  |
|  |  |  |  |  |  |  |  |  |  | 37 | d | 1064 | nm | w = L * 1.22 * λ / D​ |
|  | ship mass | 500 | t |  | 500000 | kg | R = reflectivity (unitless, e.g. 0.98 for 98%) |  |  | 0.32 | c | 1.064e-06 | m | L = w * D  / ( 1.22 * λ ) |
|  | accel | 13.3267 | m/s² |  | 1.35986 | g |  |  |  | 1000 | AU | 1.064e-09 | km | w = spot size |
|  |  |  |  |  |  |  | c = speed of light ≈ 3×10^8 m/s |  |  |  |  |  |  | L = distance |
|  | time | 400 | d |  |  |  |  |  |  |  |  |  |  | λ = wavelength |
|  | speed | 1.53523 | c |  |  |  | F≈1.98⋅P​ / c |  |  |  |  |  |  | D = lens diameter |
|  | distance | 53199.5 | AU | 7.95864e+15 | m | 0.841217 | ly |  |  |  |  |  |  |  |
|  | aτ | 460569600 | m/s | 0.841243 | ly |  |  |  |  |  |  |  |  |  |
|  | v | 0.83792 | c | 2.51376e+08 | m/s |  |  |  | proper time |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  | 210 |  |  |  |  |
| ARRAY | Power | 1 | PW | 1e+15 | W |  | 50000000000 | kg |  |  |  |  |  |  |
|  | Radius | 20 | km |  |  |  | 50 | Mt |  |  | 3000 |  | 10000 |  |
|  | Spot size | 1 | km radius | 1000 | m |  |  |  |  |  |  |  |  |  |
|  | Efficiency | 0.5 |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Distance | 205.981 | AU |  |  |  |  |  |  |  |  |  |  |  |
|  | Collector area | 3673.77 | km² | 3673769287 | m² |  |  |  |  |  |  | full array | 63500 | AU |
|  |  | 60.6116 | km square |  |  |  |  |  |  |  |  |  | 60 | Mt |
|  | at 1g/m² | 3673.77 | t |  |  | spacing |  |  |  |  |  |  | 1.125 | PW |
|  | Laser area | 3947.84 | km² |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  | 10% array | 20000 | AU |
|  |  |  |  |  |  |  |  |  |  |  |  |  | 6 | Mt |
|  | Focus distance | 65000 | AU | 9.724e+15 | m | 1.02781 | ly |  |  | 442.143 | days of accel |  | 0.1 | PW |
|  | > lens diameter | 12622.5 | km | 1.26225e+07 | m |  |  | D = 1.22 λ L / w |  | 1.69698 | c |  | 800 | days |
|  | > lens area | 125136124 | km² | 125136124023258 | m² |  |  | Alens = PI * (D/2)² |  |  |  |  | 0.29 | c |
|  | fill factor (sparse) | 0.1 |  |  |  |  |  |  |  | 20 | kW/kg |  |  |  |
|  | module area | 10 | m² |  |  |  |  |  | Module power | 1 | kW |  |  |  |
|  | > module count | 1251361240233 |  | 1251361240233 |  |  | N = Alens / (fill * Amodule) |  | Module mass | 0.05 | kg |  |  |  |
|  | > module power | 0.00079913 | MW | 799.13 | W | 10% loss |  |  |  |  |  |  |  |  |
|  |  | 62.5681 | Mt |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | 1.25136e+15 | W |  |  |  |  |  |  |  |  |  |
|  | > mirror area | 3673.77 | km² |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 60.6116 | km square |  |  |  |  |  | 1251361240233 |  |  |  |  |  |
|  | > mirror mass | 3673.77 | t | at 1g/m² |  |  |  |  |  | 62568062012 | kg |  |  |  |
|  | > solar panel mass | 3673.77 | t | at 100g/m² but 100x smaller |  |  |  |  |  | 62.5681 | Mt |  |  |  |
|  |  |  |  |  |  |  | d <= λ * L /  R |  |  | 125136124023258 | W |  |  |  |
|  | fill factor | 0.01 |  |  |  |  |  |  |  |  |  |  |  |  |
|  | module area | 100 | m² |  |  |  |  |  |  |  |  |  |  |  |
|  | > module count | 12513.6 | x10^6 | 12513612402 |  |  | 99.9% loss |  |  |  |  |  |  |  |
|  | > module power | 0.00079913 | MW | 90% loss |  |  |  |  |  |  |  |  |  |  |
|  |  | 200 | Mt |  |  |  |  |  |  |  |  |  |  |  |
|  | > collector area | 36737.7 | km² |  | m² |  |  |  |  |  |  |  |  |  |
|  |  | 191.671 | km square |  |  |  |  |  |  |  |  |  |  |  |
|  | at 1g/m² | 36737.7 | t |  |  |  |  |  |  |  |  |  |  |  |
|  | > min spacing d | 819.672 | m |  |  |  |  |  |  |  |  |  |  |  |
|  | > min fill | 1.4884e-05 |  |  |  |  |  |  |  |  |  |  |  |  |
|  | > module count | 186253 | x10^3 | 186252607 |  |  |  |  |  |  |  |  |  |  |
|  | > module power | 0.107381 | MW |  |  |  |  |  |  |  |  |  |  |  |

## Heat 

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | vapo |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HEAT SINK |  | Metastable Lithium Hybrid |  |  |  |  | LiH sensible heat | 1.8 | MJ/kg |  |  | Li | 6.94 | g/mol | 21 | MJ/kg | LiD sensible heat | 1.1 | MJ/kg |  |  | Li | 6.94 | g/mol | 21 | MJ/kg |
|  |  |  |  |  |  |  | LiH heat of fusion | 2.9 | MJ/kg |  |  | H | 1 | g/mol |  |  | LiD heat of fusion | 2.9 | MJ/kg |  |  | D | 2.014 | g/mol |  |  |
|  | Decomposition | 20 | MJ/kg | LiH > Li + 1/2 H2 decomposition is endothermic |  |  | chemical decomposition | 16.1006 | MJ/kg | 20.8006 |  | H2 | 2 | g/mol |  |  | chemical decomposition | 14.5187 | MJ/kg |  |  | D2 | 4.028 | g/mol |  |  |
|  |  |  |  | Engineered for higher temp |  |  | sensible heat 2000K | 2.2 | MJ/kg | 23.0006 |  | LiH | 7.95 | g/mol |  |  | sensible heat 2000K | 2 | MJ/kg |  |  | LiD | 8.954 | g/mol |  |  |
|  |  |  |  |  |  |  | Lithium vaporization | 18.3321 | MJ/kg | Latent heat of vaporization:  21 MJ/kg |  | LiH | 125.786 | mol/kg |  |  | D2 vaporization | 1.75443 | MJ/kg |  |  | LiD | 111.682 | mol/kg |  |  |
|  | Vaporization | 20 | MJ/kg | also using some dissociation/ionization energy |  |  | H2 vaporization | 3.67296 | MJ/kg | Latent + sensible heat to 2000 K: ~445 MJ/kg |  | ΔH | 128 | kJ/mol |  |  | total | 22.2731 | MJ/kg | 100000000 | g | ΔH | 130 | kJ/mol |  |  |
|  |  |  |  |  |  |  | total | 41.3327 | MJ/kg |  |  |  |  |  |  |  | Lithium vaporization | 16.2765 | MJ/kg | 7.95 | g/mol |  |  |  |  |  |
|  | Vapor is recaptured and ran through the Ether dust radiators to recondense |  |  |  |  |  |  |  |  |  |  | Li | 0.872956 | mass ratio |  |  | total | 38.5496 | MJ/kg | 0.5 | g/mol | Li | 0.775073 | mass ratio |  |  |
|  |  |  |  |  |  |  | LiH mass | 0.01 | t | 10000 | g | H2 | 0.125786 | mass ratio | 29.2 | MJ/kg (vapo at 2000K) |  |  |  |  |  | D2 | 0.224927 | mass ratio | 93 | kJ/mol |
|  | Operation temp | 2000 | K |  |  |  | LiH mol | 1257.86 | mol | 7.95 | g/mol |  |  |  |  |  | LiH mass | 100 | t |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  | H2 released | 628.931 | mol | 0.5 | g/mol |  |  |  |  |  | LiH mol | 1.25786e+07 | mol |  |  |  |  |  |  |  |
|  | tonnage | 150 | t |  |  |  |  |  |  |  |  |  |  |  |  |  | H2 released | 6.28931e+06 | mol |  |  |  |  |  |  |  |
|  | sink | 3 | TJ |  |  |  | Temp | 2000 | K |  |  |  |  |  |  |  |  |  |  |  |  | Latent heat of vaporization:  21 MJ/kg |  |  |  |  |
|  | venting | 3 | TJ |  |  |  | Pressure | 500 | atm |  |  |  |  |  |  |  | Temp | 2000 | K |  |  | Latent + sensible heat to 2000 K: ~445 MJ/kg |  |  |  |  |
|  |  |  |  |  |  |  | R = | 0.082057 | L·atm/(mol·K) |  |  |  |  |  |  |  | Pressure | 500 | atm |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  | V = nRT / P | 206.541 | L |  |  |  |  | Q=m⋅[cp​⋅(Tmelt​−Tstart​)+Lf​] |  |  | R = | 0.082057 | L·atm/(mol·K) |  |  |  |  |  |  |  |
|  | Lithium vapor at |  |  |  |  |  |  | 0.206541 | m3 |  |  |  |  |  |  |  | V = nRT / P | 2.06541e+06 | L |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  | 0.00206541 | x10x10m |  |  |  |  | Q is energy stored |  |  |  | 2065.41 | m3 |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  | m is mass |  |  |  | 20.6541 | x10x10m |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  | cp​ is specific heat (J/kg·K) |  |  |  |  |  |  |  |  |  |  |  |  |
| COOLING |  |  |  |  |  |  |  |  |  |  |  |  |  | Tmelt​ is melting point |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Ether dust tech | 200 | kW/m² | baseline |  |  |  |  |  |  |  |  |  | Tstart​ is starting temperature |  |  |  |  |  |  |  |  |  |  |  |  |
|  | at 2000K | 1 | MW/m² |  |  |  |  |  |  |  |  |  |  | Lf​ is latent heat of fusion (J/kg) |  |  |  |  |  |  |  |  |  |  |  |  |
| base | Structure | 20 | kg/m² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Hardware | 5 | kg/m² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Coolant | 15 | kg/m² |  |  |  |  |  |  |  |  | wing |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  | 60 | m |  |  |  |  |  |  |  |  |  |  |  |  |  |
| high tech | Wing | 0.1 | kg/m² | CNT polymer + graphene |  |  |  |  |  |  |  | 30 | m |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Support structure | 5 | kg/m² | Folding trusses/ribs, actuators & mechanisms, control surfaces |  |  |  |  | 0.0125047 | GW | cloud distance | 2 | m | 54 | t |  |  |  |  |  |  |  |  |  |  |  |
|  | Cooling hardware | 5 | kg/m² | Pressurized pipes, magnetic pumps, sensors |  |  |  |  |  |  | top / bottom | 1800 | m² |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Coolant |  |  | > already accounted for in heat sink |  |  |  | ROUNDED | 1500 | kW/m² | long edge | 240 | m² |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  | wings | 0.0125047 | GW | short edge | 120 | m² |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Radiator | 10 | kg/m² |  |  |  |  | wheel | 1.8 | GW | cloud surface area | 4200 | m² |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | RadHull | 5 | kg/m² |  |  | 1000 |  |  | 6 | t | total wing area (3 wings) | 5400 | m² |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  | total cloud surface (3 wings) | 12600 | m² | 2.33333 |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  | lithium nanodroplets (~10 nm radius): |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  | Particle mass m | 1.16×10−26kg |  |  |  |  |  | 2.31569 |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  | Thermal velocity vth​ | ~2,200 m/s (at 2000 K) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  | Particle charge q | 5.5×10−18C |  |  |  |  |  | 1879.12 |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | LITHIUM VAPOR VOLUME |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | V | 299.304 | m3 |  | V=nRT​ / P | n=1.44×10^7 mol | 100t |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | m | 1 | t |  |  | R=8.314 J/mol K | ideal gas constant |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | n | 144000 | mol |  |  | T=2500 K |  |  |  |  | 26000 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | R | 8.314 |  |  |  | P=60,800 Pa | 0.6 atm |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | T | 2500 | K |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | P | 10000000 | Pa |  |  |  | V= | 5000000 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  | 100 | atm |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | container | 6.68915 | m d'arete | 19250 | kg/m3 |  |  |  | m3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  | 268.468 | m² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  | 0.03 | m thickness |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  | 8.05405 | m3 tungsten volume |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  | 155.04 | t |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | DUSTY PLASMA |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | tungsten / lithium | 200 | kW/kg |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 60 | t |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 12 | GW |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| GRAPHITE | major radius R | 16 | m |  |  |  | P = ϵσT^4 | graphite dusty plasma |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | minor radius r | 4 | m |  |  |  | ϵ = emissivity | 0.9 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | torus outer area A | 1263.31 | m² |  |  |  | σ =  constant | 5.67e-08 | W/m²K^4 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Heat rad | 1.25375 | GW | 7.97604 |  |  | T = operating temp | 2100 | K |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | torus volume V | 5053.24 | m3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | dust mass density | 0.1 | kg/m3 | > to 0.01 |  |  | P= | 992437 | W/m² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | argon density | 0.02 | kg/m3 | > at 0.1 atm |  |  |  | 0.992437 | MW/m² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | total density | 0.12 | kg/m3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | total mass | 0.606388 | t |  |  |  |  |  |  |  |  |  |  | Target dust surface area per m³: |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  | Adust​≈10^5−10^6 m2/m3 |  |  |  |  |  |  |  |  |  |  |  |  |
| -- | Rcoil | 16 | m |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Rtorus | 16 | m |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Bcoil | 0.5 | T |  |  |  | B = μ0​ NI / (2 R) | Field at center of torus |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | B(Rtorus) | 0.5 | T | field strength at torus |  |  | μ0​=4π×10−7 H/m | 1.25664e-06 |  |  | Plasma beta (β) ≤ 0.01–0.1 | this means magnetic pressure dominates, and the plasma stays tightly confined. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  | at 0.1 atm > magnetic field strength B = 1.58 T |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | NI | 1.27324e+07 | A-turns |  |  |  |  |  |  |  | ideally > 2T for long-term confinement |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | turns | 100 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | I | 127324 |  | > 100 turns |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | A | 0.000127324 | m² |  |  | A = I / J | J (graphene) | 1000000000 | A/m² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | L | 10053.1 | m | > total length |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | V | 1.28 | m3 | > conductor volume |  |  | p (graphene) | 2200 | kg/m3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | coil mass | 2.816 | t |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | structure ratio | 1 | <3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | cryo ratio | 0.2 | <0.4 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | shielding ratio | 0.2 | <0.2 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | power ratio | 0.1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | safety ratio | 0.3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | total mass | 7.8848 | t | 63.0784 | t |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | total mass 2 | 6.1952 | t | 49.5616 | t for 10 GW | ITER : 3.3x | But ITER operates at higher fields and far larger scale |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 0.159009 | GW/t | 201.769 | kW/kg |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 0.202375 | GW/t |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | safe distance d | 14.1259 | m | from the ship |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 10 | m | from other coils if co-planar, less if perpendicular |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

## Stratios laser

| Power density | 20 | kW/kg |  |  |  | 6000000 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  | For 10s charge + pulse |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Lens radius | 500 | m |  |  |  |  |  | 10 sec charge |  |  |  |  |  |  |  |  |  |  |  |
| Mass | 10000 | t |  | Waste heat | 3000 | GJ | Input power | 2000000 | MJ |  |  |  |  |  |  |  |  |  |  |
| Power | 200000 | MW |  |  | 62.5 | % heat sink | Laser heat | 600000 | MJ |  |  |  |  |  |  |  |  |  |  |
| Efficiency | 70 | % |  | Heat sink | 160 | t | Power gen heat | 2000000 | MJ |  |  |  |  |  |  |  |  |  |  |
| Wavelength | 1064 | nm |  | Lithium+ | 30 | MJ / kg |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  | 4.8 | TJ |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Lab |  | Effective |  |  |  | ARMOR | Hull density | 10 | g/cm3 | Ablation loss | 90 | % |  |  |  |  |  |  |
| Extreme range | 1.45456e+07 | km | 9572700 | Mostly harmless |  | May heat up sensors or interfere with optics |  | carbon vaporization | 30 | kJ/g | Number of layers | 2 |  |  |  |  |  |  |  |
| Long range | 4.59973e+06 | km | 3027150 | Sub-threshold burn |  | Can damage exposed systems, weak armor |  | CNT / graphite | 100 | kJ/g | Energy remaining | 1 | % |  |  |  |  |  |  |
| Med range | 1.45456e+06 | km | 957270 | Matches hull resistance |  | Burns through hull, damages one subsystem |  | Hull heat res | 1 | MJ/cm3 |  |  |  |  |  |  |  |  |  |
| Short range | 459973 | km | 302710 | 10× damage threshold |  | Punches through multiple compartments |  | 5 cm thick | 5 | MJ/cm² |  |  |  |  |  |  |  |  |  |
| Overkill range | 145456 | km | 72730 |  |  | Full compartment meltdown |  | Slope, rotation, etc | dice roll |  |  |  |  |  |  |  |  |  |  |
| Hull heat res | 1 | MW/cm² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  | C6 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|  |  |  |  |  |  |  | 20 | 29.0913 | 58.1825 | 87.2738 | 116.365 | 145.456 | 174.548 | 203.639 | 232.73 | 261.821 | 290.913 |  |  |
|  |  |  |  |  |  |  | 40 | 41.1413 | 82.2825 | 123.424 | 164.565 | 205.706 | 246.848 | 287.989 | 329.13 | 370.271 | 411.413 |  |  |
|  |  |  |  |  | 0.00444444 | h of continuous fire | 60 | 50.3875 | 100.775 | 151.163 | 201.55 | 251.938 | 302.325 | 352.713 | 403.1 | 453.488 | 503.875 |  |  |
|  |  |  |  |  |  |  | 80 | 58.1825 | 116.365 | 174.548 | 232.73 | 290.913 | 349.095 | 407.278 | 465.46 | 523.643 | 581.825 |  |  |
|  |  |  |  |  |  |  | 100 | 65.05 | 130.1 | 195.15 | 260.2 | 325.25 | 390.3 | 455.35 | 520.4 | 585.45 | 650.5 |  |  |
|  |  |  |  |  |  |  | 120 | 71.2588 | 142.518 | 213.776 | 285.035 | 356.294 | 427.553 | 498.811 | 570.07 | 641.329 | 712.588 |  |  |
|  |  |  |  |  |  |  | 140 | 76.9683 | 153.937 | 230.905 | 307.873 | 384.841 | 461.81 | 538.778 | 615.746 | 692.714 | 769.683 |  |  |
|  |  |  |  |  |  |  | 160 | 82.2825 | 164.565 | 246.848 | 329.13 | 411.413 | 493.695 | 575.978 | 658.26 | 740.543 | 822.825 |  |  |
|  |  |  |  |  |  |  | 180 | 87.2738 | 174.548 | 261.821 | 349.095 | 436.369 | 523.643 | 610.917 | 698.19 | 785.464 | 872.738 |  |  |
|  |  |  |  |  |  |  | 200 | 91.9947 | 183.989 | 275.984 | 367.979 | 459.973 | 551.968 | 643.963 | 735.957 | 827.952 | 919.947 |  |  |
|  |  |  |  |  |  |  | 220 | 96.4848 | 192.97 | 289.454 | 385.939 | 482.424 | 578.909 | 675.394 | 771.878 | 868.363 | 964.848 |  |  |
|  |  |  |  |  |  |  | 240 | 100.775 | 201.55 | 302.325 | 403.1 | 503.875 | 604.651 | 705.426 | 806.201 | 906.976 | 1007.75 |  |  |
|  |  |  |  |  |  |  | 260 | 104.89 | 209.78 | 314.67 | 419.56 | 524.45 | 629.34 | 734.23 | 839.12 | 944.01 | 1048.9 |  |  |
|  |  |  |  |  |  |  | 280 | 108.85 | 217.699 | 326.549 | 435.398 | 544.248 | 653.097 | 761.947 | 870.796 | 979.646 | 1088.5 |  |  |
|  |  |  |  |  |  |  | 300 | 112.67 | 225.34 | 338.01 | 450.68 | 563.35 | 676.02 | 788.69 | 901.36 | 1014.03 | 1126.7 |  |  |
|  |  |  |  |  |  |  | 320 | 116.365 | 232.73 | 349.095 | 465.46 | 581.825 | 698.19 | 814.555 | 930.92 | 1047.29 | 1163.65 |  |  |
|  |  |  |  |  |  |  | 340 | 119.946 | 239.893 | 359.839 | 479.785 | 599.732 | 719.678 | 839.625 | 959.571 | 1079.52 | 1199.46 |  |  |
|  |  |  |  |  |  |  | 360 | 123.424 | 246.848 | 370.271 | 493.695 | 617.119 | 740.543 | 863.967 | 987.39 | 1110.81 | 1234.24 |  |  |
|  |  |  |  |  |  |  | 380 | 126.806 | 253.612 | 380.418 | 507.224 | 634.029 | 760.835 | 887.641 | 1014.45 | 1141.25 | 1268.06 |  |  |
|  |  |  |  |  |  |  | 400 | 130.1 | 260.2 | 390.3 | 520.4 | 650.5 | 780.601 | 910.701 | 1040.8 | 1170.9 | 1301 |  |  |
|  |  |  |  |  |  |  | 420 | 133.313 | 266.626 | 399.939 | 533.252 | 666.565 | 799.878 | 933.19 | 1066.5 | 1199.82 | 1333.13 |  |  |
|  |  |  |  |  |  |  | 440 | 136.45 | 272.9 | 409.35 | 545.801 | 682.251 | 818.701 | 955.151 | 1091.6 | 1228.05 | 1364.5 |  |  |
|  |  |  |  |  |  |  | 460 | 139.517 | 279.034 | 418.55 | 558.067 | 697.584 | 837.101 | 976.618 | 1116.13 | 1255.65 | 1395.17 |  |  |
|  |  |  |  |  |  |  | 480 | 142.518 | 285.035 | 427.553 | 570.07 | 712.588 | 855.105 | 997.623 | 1140.14 | 1282.66 | 1425.18 |  |  |
|  |  |  |  |  |  |  | 500 | 145.456 | 290.913 | 436.369 | 581.825 | 727.282 | 872.738 | 1018.19 | 1163.65 | 1309.11 | 1454.56 |  |  |
|  |  |  |  |  |  |  | 520 | 148.337 | 296.674 | 445.011 | 593.348 | 741.685 | 890.022 | 1038.36 | 1186.7 | 1335.03 | 1483.37 |  |  |
|  |  |  |  |  |  |  | 540 | 151.163 | 302.325 | 453.488 | 604.651 | 755.813 | 906.976 | 1058.14 | 1209.3 | 1360.46 | 1511.63 |  |  |
|  |  |  |  |  |  |  | 560 | 153.937 | 307.873 | 461.81 | 615.746 | 769.683 | 923.619 | 1077.56 | 1231.49 | 1385.43 | 1539.37 |  |  |
|  |  |  |  |  |  |  | 580 | 156.661 | 313.323 | 469.984 | 626.645 | 783.306 | 939.968 | 1096.63 | 1253.29 | 1409.95 | 1566.61 |  |  |
|  |  |  |  |  |  |  | 600 | 159.339 | 318.679 | 478.018 | 637.358 | 796.697 | 956.037 | 1115.38 | 1274.72 | 1434.05 | 1593.39 |  |  |
|  |  |  |  |  |  |  | 620 | 161.973 | 323.947 | 485.92 | 647.893 | 809.867 | 971.84 | 1133.81 | 1295.79 | 1457.76 | 1619.73 |  |  |
|  |  |  |  |  |  |  | 640 | 164.565 | 329.13 | 493.695 | 658.26 | 822.825 | 987.39 | 1151.96 | 1316.52 | 1481.09 | 1645.65 |  |  |
|  |  |  |  |  |  |  | 660 | 167.117 | 334.233 | 501.35 | 668.466 | 835.583 | 1002.7 | 1169.82 | 1336.93 | 1504.05 | 1671.17 |  |  |
|  |  |  |  |  |  |  | 680 | 169.63 | 339.26 | 508.889 | 678.519 | 848.149 | 1017.78 | 1187.41 | 1357.04 | 1526.67 | 1696.3 |  |  |
|  |  |  |  |  |  |  | 700 | 172.106 | 344.212 | 516.319 | 688.425 | 860.531 | 1032.64 | 1204.74 | 1376.85 | 1548.96 | 1721.06 |  |  |
|  |  |  |  |  |  |  | 720 | 174.548 | 349.095 | 523.643 | 698.19 | 872.738 | 1047.29 | 1221.83 | 1396.38 | 1570.93 | 1745.48 |  |  |
|  |  |  |  |  |  |  | 740 | 176.955 | 353.911 | 530.866 | 707.821 | 884.776 | 1061.73 | 1238.69 | 1415.64 | 1592.6 | 1769.55 |  |  |
|  |  |  |  |  |  |  | 760 | 179.331 | 358.661 | 537.992 | 717.322 | 896.653 | 1075.98 | 1255.31 | 1434.64 | 1613.98 | 1793.31 |  |  |
|  |  |  |  |  |  |  | 780 | 181.675 | 363.35 | 545.025 | 726.7 | 908.374 | 1090.05 | 1271.72 | 1453.4 | 1635.07 | 1816.75 |  |  |
|  |  |  |  |  |  |  | 800 | 183.989 | 367.979 | 551.968 | 735.957 | 919.947 | 1103.94 | 1287.93 | 1471.91 | 1655.9 | 1839.89 |  |  |
|  |  |  |  |  |  |  | 820 | 186.275 | 372.55 | 558.825 | 745.1 | 931.375 | 1117.65 | 1303.92 | 1490.2 | 1676.47 | 1862.75 |  |  |
|  |  |  |  |  |  |  | 840 | 188.533 | 377.066 | 565.599 | 754.132 | 942.665 | 1131.2 | 1319.73 | 1508.26 | 1696.8 | 1885.33 |  |  |
|  |  |  |  |  |  |  | 860 | 190.764 | 381.528 | 572.293 | 763.057 | 953.821 | 1144.59 | 1335.35 | 1526.11 | 1716.88 | 1907.64 |  |  |
|  |  |  |  |  |  |  | 880 | 192.97 | 385.939 | 578.909 | 771.878 | 964.848 | 1157.82 | 1350.79 | 1543.76 | 1736.73 | 1929.7 |  |  |
|  |  |  |  |  |  |  | 900 | 195.15 | 390.3 | 585.45 | 780.601 | 975.751 | 1170.9 | 1366.05 | 1561.2 | 1756.35 | 1951.5 |  |  |
|  |  |  |  |  |  |  | 920 | 197.307 | 394.613 | 591.92 | 789.226 | 986.533 | 1183.84 | 1381.15 | 1578.45 | 1775.76 | 1973.07 |  |  |
|  |  |  |  |  |  |  | 940 | 199.44 | 398.879 | 598.319 | 797.759 | 997.198 | 1196.64 | 1396.08 | 1595.52 | 1794.96 | 1994.4 |  |  |
|  |  |  |  |  |  |  | 960 | 201.55 | 403.1 | 604.651 | 806.201 | 1007.75 | 1209.3 | 1410.85 | 1612.4 | 1813.95 | 2015.5 |  |  |
|  |  |  |  |  |  |  | 980 | 203.639 | 407.278 | 610.917 | 814.555 | 1018.19 | 1221.83 | 1425.47 | 1629.11 | 1832.75 | 2036.39 |  |  |
|  |  |  |  |  |  |  | 1000 | 205.706 | 411.413 | 617.119 | 822.825 | 1028.53 | 1234.24 | 1439.94 | 1645.65 | 1851.36 | 2057.06 |  |  |

## Localisations

| 🔵 FRONT Arc |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Roll | Protection | System | Subsystem | Light | Heavy | Critical |  |  |  | TOP / BOTTOM ARC (Polar attack vectors) |  |  |
| 2 | 🛡️ | ⚡ | Reactor Core | Output reduced; auxiliary grid compensates | Partial shutdown; reroute power | Reactor fails; risk of meltdown or explosion |  |  |  | 2 | Reactor Core | Deepest, central. Only reachable if top armor is breached. |
| 3 | 🛡️ | 🧠 | Bridge / Command Core | Brief command delay | AI loop errors; command loss for 1 round | Total CPU loss; ship control reverts to emergency backup |  |  |  | 3 | Bridge / Command Core | May be dorsal; some risk depending on design. |
| 4 | 🛡️ |  | Habitat Section | Minor crew injuries or decompression | Significant hull breach; life support stress | Habitat destroyed; crew casualties and full decompression |  |  |  | 4 | Habitat Section | Accessible mid-ship hit. |
| 5 | ⚠️ | 🌡️ | Cooling Systems | Minor coolant leak; reduced heat capacity | Overheating; reactor throttled | Coolant loop ruptured; core shutdown imminent |  |  |  | 5 | Sensors / Comms | Often mounted top and bottom for full-sky coverage. |
| 6 | 🎯 | 📡 | Sensors / Comms Array | Signal jitter; targeting penalties | Sensor lock lost; comms blackout | Sensor suite destroyed; blind and deaf in front arc |  |  |  | 6 | Radiators | Extended vertically in many designs; big and weak. |
| 7 | 🛡️ |  | Front Armor / Hull | Minor scorch or spalling | Armor plate cracked; weak point created | Armor breached; front internal systems exposed |  |  |  | 7 | Dorsal/Ventral Armor | Most common surface hit. |
| 8 | 🎯 |  | Weapons (Forward) | 1 forward weapon disabled | Multiple barrels offline; weapon misfires | Full battery destroyed or explodes |  |  |  | 8 | Weapons (Turrets) | Top-mounted guns, flak, or CIWS systems. |
| 9 | 🛡️ | 🚀 | Fuel Tanks | Small leak; slight thrust penalty | Fuel dump; ship slows | Fuel fire or loss; burn duration reduced significantly |  |  |  | 9 | Fuel Tanks | May wrap around midsection. |
| 10 | 🛡️ | ⚡ | Power Vein | Local arc; minor output drop | Grid instability; reroute needed | Short circuit disables major subsystems |  |  |  | 10 | Power Trunking | Central lines passing vertically. |
| 11 | 🛡️ |  | Secondary Systems | Alarms or lights fail; minor utility loss | Internal bulkheads jam; doors or support fail | Full subsystem loss; e.g., medbay, backups, or support AI |  |  |  | 11 | Secondary Systems | Life support, storage modules, soft targets. |
| 12 | 🎯 | 🚀 | Propulsion Ancillaries | Gimbal failure; steering penalty | Burn precision degraded; drift introduced | Full steering failure; major maneuvering impossible |  |  |  | 12 | Docking Bays / Hangars | Often dorsal/ventral for cargo or landers. |
| 🟡 SIDE Arc |  |  |  |  |  |  |  |  |  |  |  |  |
| Roll |  |  | Subsystem | Light | Heavy | Critical |  |  |  |  |  |  |
| 2 |  | ⚡ | Reactor Core | Minor control spike; temporary throttling | Output irregularity; forced safety constraints | Core instability; emergency SCRAM or meltdown risk |  |  |  |  |  |  |
| 3 |  | ⚡ | Power Vein | Local rerouting; brief flicker | Surging; secondary nodes cut off | Wide power outage across one or more systems |  |  |  |  |  |  |
| 4 |  | 🧠 | Bridge / Command Core | Momentary system desync | Coordination loss; action delay | Bridge offline; command rerouted or disrupted entirely |  |  |  |  |  |  |
| 5 |  | 📡 | Sensors / Comms Array | Targeting penalty; degraded resolution | Full quadrant blind; sensor blackout | Sensor array destroyed; no external awareness on this side |  |  |  |  |  |  |
| 6 |  | 🌡️ | Cooling Systems | Efficiency drop; local overheating | Coolant throughput halved; reactor throttled | Heat rejection failure; thermal buildup threatening system stability |  |  |  |  |  |  |
| 7 |  |  | Side Hull / Armor | Surface scarring; no penetration | Cracked plating; risk of breach under pressure | Hull breach; interior compartments exposed to space | 2 | Reactor Core | 2 | Bridge / Command Core |  |  |
| 8 |  |  | Habitat Section | Shaken crew; minor compartment disruption | Habitat compromised; crew injured | Major breach; crew casualties and life support failure | 3 | Power Trunking | 3 | Habitat Section |  |  |
| 9 |  |  | Weapons (Side) | Jammed weapon; RoF reduced | Weapon mount damaged; full arc offline | Weapons destroyed or blown off; explosion risk nearby | 4 | Bridge / Command Core | 4 | Cooling systems |  |  |
| 10 |  | 🚀 | Fuel Tanks | Pressurization loss; transfer pump failure | Fuel leak; throttling required | Tank rupture; risk of fire/explosion and mass loss | 5 | Sensors / Comms Array | 5 | Sensors / Comms |  |  |
| 11 |  |  | Secondary Systems | Utility outage; minimal operational impact | Redundant function lost; increased system load elsewhere | Secondary systems destroyed; damage control, life support etc. fail | 6 | Radiators | 6 | Power Trunking |  |  |
| 12 |  | 🚀 | Propulsion Ancillaries | Minor thrust fluctuation; attitude hold degraded | Stabilizers or guidance fail; erratic maneuvering | Full control loss on one axis; spin or tumble risk | 7 | Side Hull / Armor | 7 | Rear Hull / Armor |  |  |
|  |  |  |  |  |  |  | 8 | Habitat Section | 8 | Propulsion Nozzles |  |  |
| 🔴 REAR Arc |  |  |  |  |  |  | 9 | Weapons (Side) | 9 | Engine Mounts |  |  |
| Roll |  |  | Subsystem | Light | Heavy | Critical |  |  |  |  |  |  |
| 2 |  | 🧠 | Bridge / Command Core | Minor control delays; backup systems online | Severe latency; partial loss of ship control | Core AI offline; command rerouted or lost | 10 | Fuel Tanks | 10 | Fuel Tanks |  |  |
| 3 |  |  | Habitat Section | Local injuries or decompression | Major breach; life support failing | Section destroyed; survivors at risk | 11 | Secondary Systems | 11 | Reactor Shielding |  |  |
| 4 |  | 🌡️ | Cooling Systems | Reduced thermal capacity; reactor throttled | Major sink ruptured; overheating begins | Cooling collapse; system-wide overheating risk | 12 | Propulsion Ancillaries | 12 | Reactor Core |  |  |
| 5 |  | 📡 | Comms/Sensor Suite | Signal interference; degraded targeting | Array damage; blind spots in coverage | Total blackout; sensor blackout in rear hemisphere |  |  |  |  |  |  |
| 6 |  | ⚡ | Power Vein | Power fluctuations; minor load-shedding | Partial power loss; rerouting required | Power grid failure; system-wide blackouts |  |  |  |  |  |  |
| 7 |  |  | Rear Hull / Armor | Armor blistered; cosmetic burns | Armor section holed; exposed internals | Hull breach; internal compartments compromised |  |  |  |  |  |  |
| 8 |  | 🚀 | Main Nozzle | Thrust instability; vectoring loss | Nozzle damage; maneuvering hampered | Nozzle destroyed; main thrust offline |  |  |  |  |  |  |
| 9 |  | 🚀 | Engine Mounts | Structural vibration; minor stress fractures | Mount damage; reduced acceleration efficiency | Engine detachment imminent; drive unsafe |  |  |  |  |  |  |
| 10 |  | 🚀 | Fuel Tanks | Minor leak; containment holding | Major leak; fire risk present | Explosion risk; rapid depressurization |  |  |  |  |  |  |
| 11 |  | 🚀 | Reactor Shielding | Containment stress; monitoring required | Radiation leakage; crew exposure risk | Shield breached; core exposed |  |  |  |  |  |  |
| 12 |  | 🚀 | Reactor Core | Flux spike; auto-dampeners engaged | Core damage; efficiency drop | Core breach; meltdown imminent |  |  |  |  |  |  |

## Avaries

| PROPULSION DAMAGE |  |  |
| --- | --- | --- |
| Roll | Light Damage | Critical Damage |
| 1 | A main engine sputters, reducing max thrust briefly. | Engine bell torn or fused—full thrust unavailable. |
| 2 | Minor leak, efficiency drops until patched. | Rapid fuel loss forces shutdown or explosion risk. |
| 3 | Gimbal range reduced, maneuverability impaired. | Nozzle shatters—course control lost. |
| 4 | Overheat warning—limited burns only. | Propulsion system seizes—total engine lockout. |
| 5 | Delayed response to navigation commands. | Thruster fires erratically—risk of spin. |
| 6 | Misalignment causes vibration at high thrust. | Mount ruptures—engine detaches or self-destructs. |
| POWER DAMAGE |  |  |
| Roll | Light Damage | Critical Damage |
| 1 | Temporary power drop, subsystems reboot. | Arcs disable connected systems—power rerouted. |
| 2 | Reactor throttled—reduced energy output. | Reactor scrams—ship on emergency reserves. |
| 3 | Energy bottleneck—auxiliary systems flicker. | Conduits rupture—fires or electrical arcs spread. |
| 4 | Emergency battery drains faster than expected. | Batteries explode—localized EMP hits nearby gear. |
| 5 | Radiators run hot—power output throttled. | Radiators offline—reactor forced to idle or shut down. |
| 6 | Voltage drops—some equipment underpowered. | Power grid collapse—entire ship blacks out. |
| SENSORS DAMAGE |  |  |
| Roll | Light Damage | Critical Damage |
| 1 | Range or resolution reduced. | Sensor blind in one arc. |
| 2 | Delayed or inconsistent telemetry. | Feedback loop disables tracking. |
| 3 | Target lock degrades, increased jitter. | Tracking lost—targeting systems disabled. |
| 4 | False signals or ghost contacts. | Data flood—sensor net overloads and reboots. |
| 5 | Some readings unavailable or delayed. | Total sensor blackout—targeting and nav blind. |
| 6 | Sensors forced to low-power mode. | Optics fry—system burns out. |
| CPU DAMAGE |  |  |
| Roll | Light Damage | Critical Damage |
| 1 | Delays or glitches in tactical responses. | Combat AI crashes—manual control needed. |
| 2 | Navigation and fire control slow. | Predictive systems offline—misses and misfires. |
| 3 | Optimization algorithms fail—lower performance. | Ship coordination fails—automated systems disabled. |
| 4 | Delayed input processing. | Commands lost or reversed—risk of collision or friendly fire. |
| 5 | Minor brownouts disrupt task allocation. | CPU resets—ship acts on outdated data or panics. |
| 6 | Minor damage, self-diagnostics in progress. | Core CPU melted or torn—control lost. |

## Calculs

| https://upload.wikimedia.org/wikipedia/commons/8/89/236084main_MilkyWay-full-annotated.jpg |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | g |  | km/s |  |  |  |
| 150 M km = 1 AU = 12 lm |  |  |  |  |  |  |  |  |  |  |  |  | 1g |  | 10 | m/s² | 36 | km/min² |  |  |  |  | 1.5 |  | 1 |  |  |  |
| https://upload.wikimedia.org/wikipedia/commons/e/ee/Orbit_Alpha_Centauri_AB_arcsec.png |  |  |  |  |  |  |  |  |  |  |  |  | 1g |  | 0.01 | km/s² |  |  |  |  |  |  | 5 |  | 3 |  |  |  |
| Depuis B | AU | Mkm | vm | c |  |  | ip | is |  |  |  |  | 1m |  | 0.6 | km/s/m | 36 | km |  |  |  | 1 min | 10 |  | 6 |  |  |  |
|  | 0.12 | 15 |  | 1 |  | m |  |  |  |  |  |  | 1h |  | 36 | km/s/h | 129.6 | kkm/h² |  | 129600 | km/h² |  | 20 |  | 12 |  |  |  |
| Abiwan | 1 | 150 |  | 8.33333 |  |  | #REF! |  |  |  |  |  | 1j |  | 864 | km/s/j | 0.497664 | AU/j² |  | 74649600 | km/j² |  | 50 |  | 30 |  |  |  |
| Metal | 10 | 1500 |  | 1.38889 |  | h | #REF! | 2.31481 |  | jours | Propre (0.2c) |  |  |  |  |  |  |  |  |  |  |  | 100 |  | 60 |  |  |  |
| A | 20 | 3000 |  | 2.77778 |  |  | #REF! | 4.62963 |  |  | Maintenu (100) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Ceinture | 23 | 3450 |  | 3.19444 |  |  | #REF! | 5.32407 |  |  |  |  |  |  |  |  |  | 1000 |  |  |  |  |  |  |  |  |  |  |
| Routes | 25 | 3750 |  | 3.47222 |  |  | #REF! | 5.78704 |  |  |  | temps propre | P |  |  |  |  |  |  |  |  |  | g | acc |  | dj | da |  |
|  | AU | ly | c | is | isp | is1 | is1p | is2 | is2p |  |  |  |  |  |  |  |  |  |  |  |  |  | 1 |  | m |  |  |  |
| Proxima | 15 k | 0.24 | 2.88 | 4.8 | 3.84 | 4.11429 | 2.88 | 3.6 | 2.46857 | mois |  |  |  |  | temps standard * dilatation |  |  |  |  |  | 1 | km/s | 10 |  | m |  |  |  |
|  |  | 3 | 3 | 5 | 4 | 4.28571 | 3 | 3.75 | 2.57143 | années |  | Vitesse |  |  |  |  |  |  |  |  |  |  | 20 |  | m |  |  |  |
| Sol |  | 4 | 4 | 6.66667 | 5.33333 | 5.71429 | 4 | 5 | 3.42857 |  |  |  |  |  |  |  |  |  |  |  |  |  | 20 |  | m |  |  |  |
| Wolf |  | 5 | 5 | 8.33333 | 6.66667 | 7.14286 | 5 | 6.25 | 4.28571 |  |  | manoeuvre | vm |  | 1 | km/s |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  | pointe | vp |  | 1000 | km/s |  |  |  |  |  |  | g | acc |  | dj | da |  |
| https://en.wikipedia.org/wiki/List_of_nearest_stars_and_brown_dwarfs |  |  |  |  |  |  |  |  |  |  |  | (dilatation d) |  |  | c | d |  |  |  |  |  |  | 1 | 20 | m | 0 |  |  |
| Sol | ly | sec |  | isy |  |  | isP | is2y | is2P | long(equat) | lat | jump interplanétaire | ip |  | 0.6 | 1 |  |  |  |  | 10 | km/s | 10 | 2 | m | 0 |  |  |
| Centre galactique | 20k | C |  |  |  |  |  | 25000 | 15000 | 17h45 | -30 | jump interstellaire | is |  |  | 0.8 |  |  |  |  |  |  | 20 | 1 | m | 180 | 360 | km |
| Alpha Centauri | 4 | CES | -30° | 6.66667 |  |  | 5.33333 | 5 | 3 | 14h30 | -62 | jumper +1 | is1 |  | 0.7 | 0.7 |  |  |  |  |  |  |  |  |  |  |  |  |
| Barnard | 6 | CN | 30° | 10 |  |  | 8 | 7.5 | 4.5 | 18h | 4 | jumper +2 | is2 |  | 0.8 | 0.6 |  |  |  |  |  |  | g | acc |  | dj | da |  |
| Luhman | 7 | ES | -90° | 11.6667 |  |  | 9.33333 | 8.75 | 5.25 | 11h | -60 |  |  |  |  |  |  | 333.333 |  |  | 1000 | km/s | 1 | 1 | j | 0.15 | 0.3 | AU |
| Wolf | 8 | E | 0° | 13.3333 |  |  | 10.6667 | 10 | 6 | 11h | 7 |  |  |  |  |  |  |  |  |  | 0.576 | AU/j | 25 | 1 | h | 0.5 | 1 | Mkm |
| Lalande | 8 | AS |  | 13.3333 |  |  | 10.6667 | 10 | 6 | 6h45 | -16 | Secteurs |  |  |  |  |  |  |  |  | 4.032 | AU/sm | 50 | 30 | m | 300 | 600 | kkm |
| Sirius | 8 | A |  | 13.3333 |  |  | 10.6667 | 10 | 6 |  |  | Centre | C |  | 18 | -30 |  |  |  |  |  |  |  |  |  |  |  |  |
| Luyten | 9 | EN | 30° | 15 |  |  | 12 | 11.25 | 6.75 | 11h | 35 | Anticentre | A |  | 6 | 30 |  |  |  |  |  |  |  |  |  |  |  |  |
| Sagiross | 10 | C | 0° | 16.6667 |  |  | 13.3333 | 12.5 | 7.5 | 19h | -24 | Est | E |  | 12 | 0 |  |  |  |  |  |  |  |  |  |  |  |  |
| Androross | 10 | W |  | 16.6667 |  |  | 13.3333 | 12.5 | 7.5 | 23h40 | 44 | West | W |  | 0 | 0 |  |  |  |  |  | 21h | CW |  | 0h |  | AW | 3h |
| Eridani | 10 | AWS |  | 16.6667 |  |  | 13.3333 | 12.5 | 7.5 | 3h30 | -10 | Nord polaire | N |  |  |  |  |  |  |  |  |  |  | -15° | W | 15° |  |  |
| Lacaille | 10 | WS |  | 16.6667 |  |  | 13.3333 | 12.5 | 7.5 | 23h | -35 | Sud polaire | S |  |  |  |  |  |  |  |  | 18h | C | -30° |  | 30° | A | 6h |
| Virgiross | 11 | E | 0° | 18.3333 |  |  | 14.6667 | 13.75 | 8.25 | 12h | 0 |  |  |  |  |  |  |  |  |  |  |  |  |  | E |  |  |  |
| Aquarii | 11 | W |  | 18.3333 |  |  | 14.6667 | 13.75 | 8.25 | 23h | -15 | Unité stellaire | AU |  | 150 | Mkm |  |  |  |  |  | 15h | CE |  | 12h |  | AE | 9h |
| Procyon | 11 | AS |  | 18.3333 |  |  | 14.6667 | 13.75 | 8.25 | 8h | 5 |  | lm |  | 0.1 | AU |  |  |  |  | 360 |  |  |  |  |  |  |  |
| Cygni | 11 | CWN |  | 18.3333 |  |  | 14.6667 | 13.75 | 8.25 | 21h | 40 | jour lumière | ld |  | 172.8 | AU |  |  |  |  |  |  |  |  |  |  |  |  |
| Struve | 11 | CN |  | 18.3333 |  |  | 14.6667 | 13.75 | 8.25 | 19h | 60 | année lumière | ly |  | 63.072 | kAU |  |  |  |  |  |  |  |  |  |  |  |  |
| Groombridge | 11 | WN |  | 18.3333 |  |  | 14.6667 | 13.75 | 8.25 | 24h | 44 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Indi | 12 | CWS |  | 20 |  |  | 16 | 15 | 9 | 22h | -56 | vitesse lumière | c |  | 0.3 | Mkm/s |  |  |  |  |  |  | g | acc |  | dj | da |  |
| Tau Ceti | 12 | AWS |  | 20 |  |  | 16 | 15 | 9 | 2h | -15 |  |  |  |  |  |  |  |  |  | 1800 | km/s | 1 | 2 | j | 0.15 | 0.3 | AU |
| Cancri | 12 | CWN |  | 20 |  |  | 16 | 15 | 9 | 20h | 9 |  |  |  | c |  |  |  |  |  | 0.0432 | AU/h | 20 |  | j | 0 |  | AU |
| Neuten | 12 | AE |  | 20 |  |  | 16 | 15 | 9 | 7h30 | 5 |  | ls |  | 0.002 | AU |  |  |  |  | 1.0368 | AU/j | 30 |  | h | 0 |  | Mkm |
| Teegarden | 12 | AW |  | 20 |  |  | 16 | 15 | 9 | 3h | 16 |  | lm |  | 0.12 | AU |  |  |  |  | 7.2576 | AU/sm | 50 | 1 | h | 0 |  | kkm |
| Kapteyn | 13 | AS2 |  | 21.6667 |  |  | 17.3333 | 16.25 | 9.75 | 5h | -45 |  | lh |  | 7.2 | AU |  |  |  |  |  |  |  |  |  |  |  |  |
| Van Maanen | 14 | AS |  | 23.3333 |  |  | 18.6667 | 17.5 | 10.5 | 5h | 5 |  | ld |  | 172.8 | AU |  |  |  |  |  |  |  |  |  |  |  |  |
| Altair | 16 | CWN |  | 26.6667 |  |  | 21.3333 | 20 | 12 | 20h | 9 |  | lmois |  | 5k | AU |  |  |  |  |  |  |  |  |  |  |  |  |
| Escier | 13 | CS | -30° |  | SCR |  |  |  |  | 19h | -63 |  | ly |  | 63k | AU |  |  |  |  | 0.014 | c | g | acc |  | dj | da |  |
| Rex | 14 | CE | 0° |  | Wolf 1061 |  |  |  |  | 16h30 | -12 |  |  |  |  |  |  |  |  |  | 0.1 | AU/h | 20 | 6 | h | 50 | 100 | kkm |
|  | 14 | CES2 | -30° |  | MASS |  |  |  |  | 16h | -50 |  |  |  |  |  |  |  |  |  | 2.4 | AU/j | 30 | 4 | h | 0.1 | 0.2 | AU |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Parcouru |  | 16.8 | AU/sm | 50 | 2 | h | 0.1 | 0.2 | AU |
|  |  |  |  |  |  |  |  |  |  |  |  | 1 | g |  | 10 | m/s² | 0.6 | km/min² |  |  |  |  |  |  |  |  |  |  |
| km/s | speed = g x time x A |  |  |  |  | km/s² | days |  | A | 86400 |  |  |  |  | 0.01 | km/s² |  |  |  |  |  |  |  |  |  |  |  |  |
| AU | distance = speed x time x B x A |  |  |  |  | km/s | days |  | B | 0.000577548 |  |  | 1m |  | 0.6 | km/s | 36 | km/min | 18 | 0.6 |  |  | g | acc |  | dj | da |  |
|  | distance = g x time ² x A² x B |  |  |  |  |  |  |  |  |  |  |  | 2 |  | 1.2 | km/s | 144 | km/xm² | 72 |  | 0.03c |  | 20 |  |  |  |  |  |
| days | time = square ( distance/g ) |  |  |  |  | AU | km/s² |  |  |  |  |  | 3 |  | 1.8 | km/s | 324 | km/xm² | 162 |  | AU/h |  |  |  |  |  |  |  |
| days | time = square ( distance / (g x A² x B) ) |  |  |  |  |  |  | AU | AU/j |  |  |  | 4 |  | 2.4 | km/s | 576 | km/xm² | 288 |  | AU/h |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  | 5 |  | 3 | km/s | 900 | km/xm² | 450 |  | AU/h |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  | c | 6 |  | 3.6 | km/s | 1296 | km/xm² | 648 |  | AU/h |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  | 0.00012 | 1h |  | 36 | km/s | 0.0207917 | AU/j | #VALUE! |  | AU/h |  |  |  | 0.00666667 |  |  |  |
|  |  |  | Distance parcourue |  |  |  |  |  | 1.5 |  |  | 0.00024 | 2 |  | 72 | km/s | 0.0415835 | AU/j | 4320 |  | AU/h |  |  |  |  |  |  |  |
| 1g | Vitesse |  | max | stop |  |  |  |  |  |  |  | 0.00036 | 3 |  | 108 | km/s | 0.0623752 | AU/j | 9720 |  | AU/h | g | km/m | su |  |  |  |  |
| Accel, 1m | 0.6 | km/s | 18 | 9 |  | km |  |  |  |  |  | 0.00048 | 4 |  | 144 | km/s | 0.083167 | AU/j | 17280 |  | AU/h | 1 | 36 | 1 |  |  |  |  |
| 10 min | 6 | km/s | 1800 | 900 |  | km |  |  |  |  |  | 0.0006 | 5 |  | 180 | km/s | 0.103959 | AU/j | 27000 |  | AU/h | 8 | 480 | 24 |  |  |  |  |
| 1 heure | 36 | km/s | 64.8 | 32.4 |  | kkm |  |  |  |  |  | 0.00072 | 6 |  | 216 | km/s | 0.12475 | AU/j | 38880 |  | AU/h | km/s | km/m | cu |  |  |  |  |
| 1 jour | 864 | km/s | 37.3248 | 18.6624 |  | Mkm |  |  |  |  |  | 0.00084 | 7 |  | 252 | km/s | 0.145542 | AU/j | 52920 |  | AU/h |  |  | 12 |  |  |  |  |
| Pointe, 1 sem | 1000 | km/s | 2.88 | 1.728 |  | AU |  |  |  |  |  | 0.00096 | 8 |  | 288 | km/s | 0.166334 | AU/j | 69120 |  | AU/h |  |  |  |  |  |  |  |
|  |  |  |  |  |  | Distance parcourue |  |  |  |  |  | 0.00108 | 9 |  | 324 | km/s | 0.187126 | AU/j | 87480 |  | AU/h |  |  |  |  |  |  |  |
| 1 | g | Vitesse |  |  |  | max | stop |  |  |  |  | 0.0012 | 10 |  | 360 | km/s | 0.207917 | AU/j | 108000 |  | AU/h |  | RCF = 11.2 x Radius x (RPM/1,000)2 |  |  |  |  |  |
| Accel, 1 s | 0.01 | km/s |  |  |  | 0.3 | 0.15 | km |  |  | AU/j | 0.00132 | 11 |  | 396 | km/s | 0.228709 | AU/j | 130680 |  | AU/h |  |  |  |  |  |  |  |
| 1 m | 0.6 | km/s |  |  |  | 18 | 9 | km |  |  | AU/j | 0.00144 | 12 |  | 432 | km/s | 0.249501 | AU/j | 155520 |  | AU/h |  | radius (m) | 30 |  |  |  |  |
| 1 h | 36 | km/s | #REF! | AU/h |  | 0.0648 | 0.0324 | Mkm |  | #REF! | AU/j | 0.00156 | 13 |  | 468 | km/s | 0.270293 | AU/j | 182520 |  | AU/h |  | RPM | 5 |  |  |  |  |
| 2 h | 0.00024 | c |  | AU/h |  | #REF! | #REF! | AU |  | 0 | AU/j | 0.00168 | 14 |  | 504 | km/s | 0.291084 | AU/j | 211680 |  | AU/h |  | g | 0.84 |  |  |  |  |
| 3 h | 0.00036 | c |  | AU/h |  | #REF! | #REF! | AU |  | 0 | AU/j | 0.0018 | 15 |  | 540 | km/s | 0.311876 | AU/j |  |  | AU/h |  |  |  |  |  |  |  |
| 6 h | 0.00072 | c |  | AU/h |  | #REF! | #REF! | AU |  | 0 | AU/j | 0.00192 | 16 |  | 576 | km/s | 0.332668 | AU/j |  |  | AU/h |  |  |  |  |  |  |  |
| 8 h | 0.00096 | c |  | AU/h |  | #REF! | #REF! | AU |  | 0 | AU/j | 0.00204 | 17 |  | 612 | km/s | 0.35346 | AU/j |  |  | AU/h |  |  |  |  |  |  |  |
| 12 h | 0.00144 | c |  | AU/h |  | #REF! | #REF! | AU |  | 0 | AU/j | 0.00216 | 18 |  | 648 | km/s | 0.374251 | AU/j |  |  | AU/h |  |  |  | 42 |  |  |  |
| 24 h | 0.00288 | c |  | AU/h |  | #REF! | #REF! | AU |  | 0 | AU/j | 0.00228 | 19 |  | 684 | km/s | 0.395043 | AU/j |  |  | AU/h |  |  |  |  |  |  |  |
| 48 h | 0.00576 | c |  | AU/h |  | #REF! | #REF! | AU |  | 0 | AU/j | 0.0024 | 20 |  | 720 | km/s | 0.415835 | AU/j |  |  | AU/h |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  | 0.00252 | 21 |  | 756 | km/s | 0.436627 | AU/j |  |  | AU/h |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  | 0.00264 | 22 |  | 792 | km/s | 0.457418 | AU/j |  |  | AU/h |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  | 0.00276 | 23 |  | 828 | km/s | 0.47821 | AU/j |  |  | AU/h |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  | Distance (AU) |  |  |  |  | 0.00288 | 24 | h | 864 | km/s | 0.499002 | AU/j |  |  | AU/h |  |  |  |  |  |  |  |
|  |  |  |  |  |  | Poin | Acc | Jum |  |  |  | 0.00576 | 48 | h | 1728 | km/s | 0.998004 | AU/j |  |  | AU/h |  |  |  |  |  |  |  |
| 1j | 1000 | km/s | 0.024 | AU/h |  | 0.576 | 0.288 | 0.144 |  |  |  |  | 3 |  | 2592 | km/s | 1.49701 | AU/j |  |  | AU/h |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  | 4 |  | 3456 | km/s | 1.99601 | AU/j |  |  | AU/h |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  | 5 |  | 4320 | km/s | 2.49501 | AU/j |  |  | AU/h |  |  | m/s | km/h |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  | 10 |  | 8640 | km/s | 4.99002 | AU/j |  |  | AU/h |  |  | 70 | 252 |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  | 20 |  | 17280 | km/s | 9.98004 | AU/j |  |  | AU/h |  |  |  |  |  |  |  |
| Depuis B | AU | Mkm |  | c |  |  |  | ip | is |  |  |  | 40 |  | 34560 | km/s | 19.9601 | AU/j |  |  | AU/h |  |  |  |  |  |  |  |
|  | 0.12 | 15 |  | 1 |  |  | min |  |  |  |  |  | 80 |  | 69120 | km/s | 39.9201 | AU/j |  |  | AU/h |  |  |  |  |  |  |  |
| Terra | 1 | 150 |  | 8.33333 |  |  | min |  |  |  |  |  | 160 |  | 138240 | km/s | 79.8403 | AU/j |  |  | AU/h |  |  |  |  |  |  |  |
| * Luna |  |  |  |  |  |  |  |  |  |  | jours | c |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Mars | 1.5 | 225 |  | 0.208333 |  |  | min | #REF! | 0.347222 |  |  | 0.0864 | 1mois |  | 25920 | km/s |  |  |  |  |  |  |  |  |  |  |  |  |
| Saturn |  | 0 |  | 0 |  |  |  | #REF! | 0 |  |  | 0.1728 | 2mois |  | 51840 | km/s |  |  |  |  |  |  |  |  |  |  |  |  |
| Jupiter |  | 0 |  | 0 |  |  |  | #REF! | 0 |  |  | 0.2592 | 3 |  | 77760 | km/s |  |  |  |  |  |  |  |  |  |  |  |  |
| Kuiper | 30 | 4500 |  | 4.16667 |  |  | j | #REF! | 6.94444 |  |  | 0.3456 | 4 |  | 103680 | km/s |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  | 0.432 | 5 |  | 129600 | km/s |  |  |  |  |  | 300000 | km/s |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  | 0.5184 | 6mois |  | 155520 | km/s |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  | 1.0368 | 1an |  | 311040 | km/s |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 23.4983 |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  | 1.0355 |  | 150000000 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

## Laser

|  |  | http://panoptesv.com/SciFi/LaserDeathRay/DamageFromLaser.php |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | https://www.projectrho.com/public_html/rocket/spacegunconvent2.php#id--Laser_Cannon--Attack_Vector:_Tactical_Lasers |  |  |  |  |  |  |  |  |  |  |  |  |  | 140000000 | J/s | 140000 | J/ms |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | https://en.wikipedia.org/wiki/Beer%E2%80%93Lambert_law |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Vaporization |  |  |  |  | 29.6 | 45.3 | 60 | kj/cm3 |  |  | 30 |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | https://doaj.org/article/d7eb7ea5e26e4e5abc7a32a8425ad07f |  |  |  |  |  |  |  |  |  |  |  |  |  | Heat sink = 10 GW/t |  |  |  |  |  |  |  |  |  | Heat resistance |  |  |  | 0.5 | MW/cm² |  |  |  |  |  |  |  |  |  | 825078876915095 |  |  |  |  |  |  |  |  |  |
|  | Mirror radius | 5 | m | 0.005 | km |  | 20Mm−1 |  |  |  | 500 | cm |  |  |  | 10 | kW/kg |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1550000000 |  |  |  |  |  |  |  |  |
|  | Distance | 30 | km | 2e-07 | AU |  | 30000 | m |  |  | 30000 | m |  |  |  |  |  |  | 3.89424e-06 | km | Diffraction |  | RT = L * 1.22 * λ / D​ |  |  | L = distance |  | λ = wavelength |  | D = lens diameter |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Input power | 20 | kW/kg |  |  |  |  |  |  |  | Reference | 2.4 | kW/kg | ?? |  |  |  |  |  |  | Intensity |  | BPT = BP/(π * RT²) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | cm | Intensity 2 |  | BPT = BP/RT² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 10ms | 206270 | kJ/cm² |  |  |  |  |  |  | 10000 | kg | 200000 | kW |  |  | 140000 | kW | 60000 | kW |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| absorb, air | absorb, water |  |  |  | freq |  |  |  | Mass |  | Input power |  | Efficiency |  | Aperture power |  | Waste heat |  | Spot radius |  | Intensity |  |  | in 100 millisec |  | 10 ms |  | Energy |  |  | Spot area |  |  | power |  |  | radius |  | Beam radius |  | Intensity |  | Intensity 2 |  | Beam diameter |  |  | frequency |  |  |
|  |  | nIR 1 |  |  | 2400 | nm |  |  | 5 | t | 100 | MW | 50 | % | 50 | MW | 50 | MW | 0.8784 | cm | 20.627 | GW/cm² |  | 2062.7 | kJ/cm² | 4125.39 |  |  |  |  |  |  |  |  |  |  |  |  | 0.004392 | m | 825079 | GW/m² | 2.59206e+06 | GW/m² | 0.008784 | m | 206270 | 2.4e-06 | 2062697192 |  |
| 2024-10-03 00:00:00 | 0.2 | nIR 2 |  |  | 1600 | nm |  |  | 1 | t | 20 | MW | 30 | % | 6 | GW | 14 |  | 0.5856 | cm | 5.56928 | GW/cm² |  | 556.928 | kJ/cm² | 1113.86 |  |  |  |  |  |  |  |  |  |  |  |  | 0.002928 | m | 222771 | GW/m² | 699857 | GW/m² |  |  |  | 1.6e-06 | 5.56928e+08 |  |
|  |  | nIR 3 |  |  | 1200 | nm |  |  | 1 | t | 20 | MW | 20 | % | 4 | GW | 16 |  | 0.4392 | cm | 6.60063 | GW/cm² |  | 660.063 | kJ/cm² | 1320.13 |  |  |  |  |  |  |  |  |  |  |  |  | 0.002196 | m | 264025 | GW/m² | 829460 | GW/m² |  |  |  | 1.2e-06 | 6.60063e+06 | W/cm² |
| 5e-08 | 0.1 | nIR 4 |  |  | 1064 | nm |  |  | 10 | t | 200 | MW | 70 | % | 140 | MW | 60 | MW | 0.389424 | cm | 293855 | kW/cm² |  | 29385.5 | kJ/cm² | 2938.55 | kJ/cm² | 140000 | kJ | 146.927 | 0.476426 | cm² |  | 140000000 | W |  |  |  |  |  |  |  |  |  |  |  |  | 1.064e-06 |  |  |
|  |  | nIR 5 |  |  | 800 | nm |  |  | 1 | t | 20 | MW | 10 | % | 2 | GW | 18 |  | 0.1464 | cm | 29.7028 | GW/cm² |  | 2970.28 | kJ/cm² | 5940.57 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 8e-07 |  |  |
|  |  | orange |  |  | 600 | nm |  |  | 1 | t | 20 | MW | 7 | % | 1.4 | GW | 18.6 |  | 0.1098 | cm | 36.9635 | GW/cm² |  | 3696.35 | kJ/cm² | 7392.71 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 6e-07 |  |  |
| 0.01 | 0.02 | green |  |  | 532 | nm |  |  |  |  |  |  | 20 |  |  |  |  |  | 0.194712 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 5.32e-07 |  |  |
|  |  | indigo |  |  | 400 | nm |  |  | 1 | t | 20 | MW | 3 | % | 0.6 | GW | 19.4 |  | 0.0732 | cm | 35.6434 | GW/cm² |  | 3564.34 | kJ/cm² | 7128.68 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 4e-07 |  |  |
|  |  | UV |  |  | 200 | nm |  |  | 1 | t | 20 | MW | 10 | % | 2 | GW | 18 | MW | 0.0366 | cm | 475.245 | GW/cm² |  | 47524.5 | MJ/cm² | 95049.1 |  |  |  | 4.75245e+07 | kJ/cm² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 2e-07 |  |  |
|  |  | m | 0.1 | 0.3 | 1 | 3 |  | 9 | 27 | 100 | 300 | 1000 | 2000 | 10000 | 20000 | 40000 | 60000 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | IR 1ms | Vacuum | 105787715124848 | 11754190569428 | 1057877151248 | 117541905694 |  | 13060211744 | 1451134638 | 1.05788e+08 | 1.17542e+07 | 1.05788e+06 | 264469 | 10578.8 | 2644.69 | 661.173 | 293.855 |  |  | intensity = AB / ( pi ( 0.305*10^-6 * CD / E )² ) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | kJ/cm² | atmo | 105763359407424 | 11748778810830 | 1057146647937 | 117433695439 |  | 13030174090 | 1446131242 | 1.05302e+08 | 1.16867e+07 | 1.04577e+06 | 258449 | 10219.6 | 2525.66 | 624.188 | 261.898 |  |  |  | A = input power MW |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1057.15 |  |  |
|  |  | water | 0 | 0 | 0 | 0 |  |  |  |  |  |  |  |  |  |  |  |  |  |  | B = efficiency |  |  |  |  |  | 0.0005 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 2024-10-09 00:00:00 | C = wavelength (nm) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | km | 1 | 20 | 40 | 60 | 80 | 100 | 200 | 300 | 400 | 500 | 1000 | 2000 | 3000 | 4000 | 5000 | 10000 | 20000 |  | D = distance (m) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | UV 100ms (MW) | Vacuum | 42772.1 | 106.93 | 26.7326 | 11.8811 | 6.68314 | 4.27721 | 1.0693 | 0.475245 | 0.267326 | 0.171088 | 0.0427721 | 0.010693 | 0.00475245 | 0.00267326 | 0.00171088 | 0.000427721 | 0.00010693 |  | E = lens radius |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  | intensity = 10^-7 AB / ( pi ( 0.305*10^-6 * CD / E )² ) |  |  |  |  |  |  |  |  |  |  |  |  |  | μs | J | pulses | Range | hole |  | drilled |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  | 10-7 AB = I (pi M)² |  | sqrt (10-7 AB / I / pi) = M |  |  | 0.1 | 1 | 10 | 100 | 1000 | MW |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | efficiency |  | D = E sqrt (...) / ( 0.305 10-6 C ) |  |  |  |  | 1028.53 | 325.25 | 102.853 | 32.525 | 10.2853 | km |  |  |  | 100 | 1 | 10 | 1 | 0.003 | mm | 1000 | cm | CNT |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| standard | best | theoretical |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1 | 10 | 5 | 0.016 | mm | 30 | cm | CNT |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 20 | 40 | 60 |  |  |  |  |  |  |  |  |  | intens = (5000*input*lens²) / (distance²) |  |  |  |  |  | 1 | 10 | 20 | 0.065 |  | 2 |  | CNT | 2777.78 |  |  |  |  | 1 cm of | MJ/kg |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0 |  |  |
|  |  |  |  |  |  |  |  |  | 3 | 18 |  | distance = sqrt( (5000*input*lens²) ) |  |  |  |  |  | 1 | 10 | 50 | 0.16 |  | 0.4 |  | CNT |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0 |  |  |
| UV | Mirror radius | 20 |  |  | m |  |  |  |  |  |  | 1581.14 |  |  |  |  |  | 1 | 10 | 100 | 0.3 |  | 0.1 |  | CNT |  |  | 11.52 |  |  | CNT | 108 | 7.2 |  |  |  |  |  |  |  |  |  |  |  |  |  |  | #REF! |  |  |
|  | Slope | 2 |  |  | (2 to 15) |  |  |  | 10 | 50 |  |  |  |  |  |  | 10 | 0.1 | 100 | 20 | 0.065 |  | 2 | cm | CNT |  |  |  |  |  | Steel | 50 | 3.33333 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  | Turret |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Bone | 15 | 1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 0.3 | 0.03 | 3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0 |  |  |  |  |  |  |  | Tungsten | 8.36 | 0.557333 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | 30km | 3 | 0.3 | 1 |  |  |  |  |  |  |  |  |  |  |  |  | 10 | 0.1 | 50 | 20 | 0.065 |  | 1 | cm | CNT |  | 6 | 2 |  |  | flesh | 2 | 0.133333 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | 10km | 30 | 3 | 0.3 |  |  |  |  |  |  |  | 30 km/h = 100 m/s = 10 cm/ms |  |  |  |  | 10 | 0.1 | 50 | 20 | 0.065 |  | 2 | cm | Steel |  | 3 | 1 |  |  | cloth |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 300 | 30 | 0.1 |  |  |  |  |  |  |  |  |  |  |  |  | 10 | 0.1 | 50 | 20 | 0.065 |  | 6 | cm | Bone |  | 1 | 0 |  |  | graphite | 120 | 8 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 3000 | 300 | 0.03 | Cannon |  |  | RIFLE | max |  | m | hole r |  | LxR | CNT | max |  | PISTOL |  |  |  |  | 6.5 |  | Diamond |  | 0.923077 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | 300m | 30000 | 3000 | 0.01 | 30 | 480 | 0.024 | 3 | 1000 |  | 300 | 0.05 |  | 0.003 | 0.003 | 2000 |  |  |  | 300 | 0.1 |  | 165 |  | flesh |  | 0.0363636 | -1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 333333 | 33333.3 | 0.003 | 333.333 | 120 | 0.006 | 33.3333 | 300 | 2.4 | 100 | 0.015 |  | 0.333333 | 0.0333333 | 600 |  |  |  | 100 | 0.03 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 942478 | 300000 | 0.001 | 3000 | 40 | 0.002 | 300 | 100 |  | 30 | 0.005 |  | 3 | 0.3 | 200 | 10 | 0.1 | 100 | 30 | 0.01 | e1 | 1 | CNT | 7 | bone | 1.7 | steel | 1 | graphite | 50 | flesh |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 763407 | 2700000 | 0.0003 | 3053.63 | 12 | 0.0006 | 1908.52 | 30 |  | 9 | 0.0015 |  | 27 | 2.7 | 60 |  |  | 100 | 9 | 0.003 |  | 10 | CNT |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 753982 | 24000000 | 0.0001 | 3015.93 | 4 | 0.0002 | 1884.96 | 10 |  | 3 | 0.0005 |  | 75.3982 | 24 | 20 |  |  | 100 | 3 | 0.001 |  | 100 | CNT |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 610726 | 216000000 | 3e-05 | 2442.9 | 1.2 | 6e-05 | 1526.81 | 3 |  | 1 | 0.00015 |  | 61.0726 | 216 | 6 | 10 | 0.1 | 100 | 1 | 0.0003 | e4 | 1500 | CNT |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.610726 | 2160 | 0.6 |  |  |  | 0.3 | 3e-05 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.678584 | 21600 | 0.2 |  |  |  | 0.1 | 1e-05 |  |  |  | graphite |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 10 | 50 | 20 | 0.065 |  | 80 | cm | CNT |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 260 | cm |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Power |  |  | 20 |  |  |  |  | Pulse power (MW/cm²) |  |  |  |  |  |  |  |  | range = 40-100 * lens radius * power |  |  |  |  |  |  |  | heat res |  |  | 1 |  |  |  |  |  |  |  |  |  |  | power/radius² = 5.1 |  |  | power at 50km |  |  |  |  |  |  |
|  |  | Radius |  |  | 50 |  | 100 |  | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 |  | Max | Min |  | /succes |  |  |  |  | power needed to vaporize |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 1 |  |  | 684.353 |  | 171.088 |  | 42.7721 | 19.0098 | 10.693 | 6.84353 | 4.75245 | 3.4916 | 2.67326 | 2.1122 | 1.71088 |  | 1000 | 2000 | + | -83.3333 |  | 1500 |  | 50 | 100 |  |  | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 |  | 684.353 | 684.353 |  | 684.353 | 5 |  |  |  |  |  |  |
|  |  | 2 |  |  | 2737.41 |  | 684.353 |  | 171.088 | 76.0393 | 42.7721 | 27.3741 | 19.0098 | 13.9664 | 10.693 | 8.44881 | 6.84353 |  | 2000 | 4000 | + | -166.667 |  | 3000 |  | 0.2 | 3.07692 |  |  | 0.1 | #VALUE! | #VALUE! | #DIV/0! | 0.2 | 0.2 | #DIV/0! | #DIV/0! | #VALUE! |  | 1368.71 | 684.353 |  | 2737.41 | 20 |  |  |  |  |  |  |
|  |  | 3 |  |  | 6159.18 |  | 1539.8 |  | 384.949 | 171.088 | 96.2372 | 61.5918 | 42.7721 | 31.4244 | 24.0593 | 19.0098 | 15.398 |  | 3000 | 6000 | + | -250 |  | 4500 |  | 0.05 | 0.769231 |  |  | 0.025 | #VALUE! | #VALUE! | #DIV/0! | 0.05 | 0.05 | #DIV/0! | #DIV/0! | #VALUE! |  | 2053.06 | 684.353 |  | 6159.18 | 45 |  |  |  |  |  |  |
|  |  | 4 |  |  | 10949.7 |  | 2737.41 |  | 684.353 | 304.157 | 171.088 | 109.497 | 76.0393 | 55.8656 | 42.7721 | 33.7952 | 27.3741 |  | 4000 | 8000 | + | -333.333 |  | 6000 |  | 0.0222222 | 0.34188 |  |  | 0.0111111 | #VALUE! | #VALUE! | #DIV/0! | 0.0222222 | 0.0222222 | #DIV/0! | #DIV/0! | #VALUE! |  | 2737.41 | 684.353 |  | 10949.7 | 80 |  |  |  |  |  |  |
|  |  | 5 |  |  | 17108.8 |  | 4277.21 |  | 1069.3 | 475.245 | 267.326 | 171.088 | 118.811 | 87.29 | 66.8314 | 52.805 | 42.7721 |  | 5000 | 10000 | + | -416.667 |  | 7500 |  | 0.0125 | 0.192308 |  |  | 0.00625 | #VALUE! | #VALUE! | #DIV/0! | 0.0125 | 0.0125 | #DIV/0! | #DIV/0! | #VALUE! |  | 3421.77 | 684.353 |  | 17108.8 | 125 |  |  |  |  |  |  |
|  |  | 10 |  |  | 68435.3 |  | 17108.8 |  | 4277.21 | 1900.98 | 1069.3 | 684.353 | 475.245 | 349.16 | 267.326 | 211.22 | 171.088 |  | 10000 | 20000 | + | -833.333 |  | 15000 |  | 0.008 | 0.123077 |  |  | 0.004 | #VALUE! | #VALUE! | #DIV/0! | 0.008 | 0.008 | #DIV/0! | #DIV/0! | #VALUE! |  | 6843.53 | 684.353 |  | 68435.3 | 500 |  |  |  |  |  |  |
|  |  | 25 |  |  | 427721 |  | 106930 |  | 26732.6 | 11881.1 | 6683.14 | 4277.21 | 2970.28 | 2182.25 | 1670.78 | 1320.13 | 1069.3 |  | 25000 | 50000 | + | -2083.33 |  | 37500 |  | 0.002 | 0.0307692 |  |  | 0.001 | #VALUE! | #VALUE! | #DIV/0! | 0.002 | 0.002 | #DIV/0! | #DIV/0! | #VALUE! |  | 17108.8 | 684.353 |  | 427721 | 3125 |  |  |  |  |  |  |
|  |  | 50 |  |  | 1.71088e+06 |  | 427721 |  | 106930 | 47524.5 | 26732.6 | 17108.8 | 11881.1 | 8729 | 6683.14 | 5280.5 | 4277.21 |  | 50000 | 100000 | + | -4166.67 |  | 75000 |  | 0.00032 | 0.00492308 |  |  | 0.00016 | #VALUE! | #VALUE! | #DIV/0! | 0.00032 | 0.00032 | #DIV/0! | #DIV/0! | #VALUE! |  | 34217.7 | 684.353 |  | 1.71088e+06 | 12500 |  |  |  |  |  |  |
|  |  | 100 |  |  | 6.84353e+06 |  | 1.71088e+06 |  | 427721 | 190098 | 106930 | 68435.3 | 47524.5 | 34916 | 26732.6 | 21122 | 17108.8 |  | 100000 | 200000 | + | -8333.33 |  | 150000 |  | 8e-05 | 0.00123077 |  |  | 4e-05 | #VALUE! | #VALUE! | #DIV/0! | 8e-05 | 8e-05 | #DIV/0! | #DIV/0! | #VALUE! |  | 68435.3 | 684.353 |  | 6.84353e+06 | 50000 |  |  |  |  |  |  |
|  |  | 500 |  |  | 1.71088e+08 |  | 4.27721e+07 |  | 1.0693e+07 | 4.75245e+06 | 2.67326e+06 | 1.71088e+06 | 1.18811e+06 | 872900 | 668314 | 528050 | 427721 |  | 500000 | 1000000 | + | -41666.7 |  | 750000 |  | 2e-05 | 0.000307692 |  |  | 1e-05 | #VALUE! | #VALUE! | #DIV/0! | 2e-05 | 2e-05 | #DIV/0! | #DIV/0! | #VALUE! |  | 342177 | 684.353 |  | 1.71088e+08 | 1250000 |  |  |  |  |  |  |
|  |  | 1000 |  |  | 6.84353e+08 |  | 1.71088e+08 |  | 4.27721e+07 | 1.90098e+07 | 1.0693e+07 | 6.84353e+06 | 4.75245e+06 | 3.4916e+06 | 2.67326e+06 | 2.1122e+06 | 1.71088e+06 |  | 1000000 | 2000000 | + | -83333.3 |  | 1500000 |  | 8e-07 | 1.23077e-05 |  |  | 4e-07 | #VALUE! | #VALUE! | #DIV/0! | 8e-07 | 8e-07 | #DIV/0! | #DIV/0! | #VALUE! |  | 684353 | 684.353 |  | 6.84353e+08 | 5000000 |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 10 | AU |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| IR |  | IR laser |  |  | 80% efficiency |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | #REF! | #REF! | #REF! | 2 | 0.5 | 0.222222 | 0.125 | 0.0555556 | 0.03125 | 0.02 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  | less damage but longer pulses, vastly less waste heat, deposits heat on target |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | #REF! | #REF! | #REF! | pow = (5000*input*lens²) / (distance²) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  | less weight because of small internal heat sink |  |  |  |  |  |  |  |  |  | x = 2 AB / ( pi ( 0.305* 10^4 * CD / E )² ) |  |  |  |  |  |  |  | #REF! | #REF! | #REF! | (distance/10)² = power at 10 km / power at target |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.4 | #REF! | #REF! | #REF! | distance = sqrt(ref/pow)*10 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 86.9616 | 108.702 | 217.404 | 326.106 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Power |  |  | 100 | MW |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  | Pulse power (MW/cm²) |  |  |  |  |  |  |  |  |  |  |  |  |  | #REF! |  |  |  | Pulse power (MW/cm²) * heat cap (0.5) * slope |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Distance | 1 | 20 | 40 | 60 | 80 | 100 | 200 | 300 | 400 | 500 | 1000 | 1500 | 2000 | 3000 | 4000 | 5000 | Long | Med | Short | /succes |  |  |  | 50 | 100 | 150 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Lens radius | 1 | 4231.51 | 10.5788 | 2.64469 | 1.17542 | 0.661173 | 0.423151 | 0.105788 | 0.0470168 | 0.0264469 | 0.016926 | 0.00423151 | 0.00188067 | 0.00105788 | 0.000470168 | 0.000264469 | 0.00016926 | 205.706 | 65.05 | 20.5706 | #REF! | 10.2853 | 3.2525 | 1.02853 | 0.00661173 | 0.00423151 | 0.00105788 | 0.000470168 | 0.000264469 | 0.00016926 | 4.23151e-05 | 1.88067e-05 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 2 | 16926 | 42.3151 | 10.5788 | 4.70168 | 2.64469 | 1.6926 | 0.423151 | 0.188067 | 0.105788 | 0.0677041 | 0.016926 | 0.00752268 | 0.00423151 | 0.00188067 | 0.00105788 | 0.000677041 | 411.413 | 130.1 | 41.1413 | 23.4427 | 20.5706 | 6.505 | 2.05706 | 0.0132235 | 0.00846302 | 0.00211575 | 0.000940335 | 0.000528939 | 0.000338521 | 8.46302e-05 | 3.76134e-05 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 3 | 38083.6 | 95.2089 | 23.8022 | 10.5788 | 5.95056 | 3.80836 | 0.952089 | 0.423151 | 0.238022 | 0.152334 | 0.0380836 | 0.016926 | 0.00952089 | 0.00423151 | 0.00238022 | 0.00152334 | 617.119 | 195.15 | 61.7119 | 35.1641 | 30.8559 | 9.75751 | 3.08559 |  |  |  | 0.00105788 |  | 0.000117542 |  | 4.23151e-05 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 4 | 67704.1 | 169.26 | 42.3151 | 18.8067 | 10.5788 | 6.77041 | 1.6926 | 0.752268 | 0.423151 | 0.270817 | 0.0677041 | 0.0300907 | 0.016926 | 0.00752268 | 0.00423151 | 0.00270817 | 822.825 | 260.2 | 82.2825 | 46.8854 | 41.1413 | 13.01 | 4.11413 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 5 | 105788 | 264.469 | 66.1173 | 29.3855 | 16.5293 | 10.5788 | 2.64469 | 1.17542 | 0.661173 | 0.423151 | 0.105788 | 0.0470168 | 0.0264469 | 0.0117542 | 0.00661173 | 0.00423151 | 1028.53 | 325.25 | 102.853 | 58.6068 | 51.4266 | 16.2625 | 5.14266 | #REF! | 2 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 10 | 423151 | 1057.88 | 264.469 | 117.542 | 66.1173 | 42.3151 | 10.5788 | 4.70168 | 2.64469 | 1.6926 | 0.423151 | 0.188067 | 0.105788 | 0.0470168 | 0.0264469 | 0.016926 | 2057.06 | 650.5 | 205.706 | 117.214 | 102.853 | 32.525 | 10.2853 | #REF! | 0.64 | 1.76313e-06 | 2.35084e-06 | 8.81564e-07 | 4.23151e-07 | 8.46302e-08 | 3.13445e-08 | 0 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 25 | 2.64469e+06 | 6611.73 | 1652.93 | 734.637 | 413.233 | 264.469 | 66.1173 | 29.3855 | 16.5293 | 10.5788 | 2.64469 | 1.17542 | 0.661173 | 0.293855 | 0.165293 | 0.105788 | 5142.66 | 1626.25 | 514.266 | 293.034 | 257.133 | 81.3126 | 25.7133 | 5 | 10 | 2.75489e-06 | 1.33333 | 0.375 | 0.48 | 0.2 | 0.37037 | 0 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 50 | 1.05788e+07 | 26446.9 | 6611.73 | 2938.55 | 1652.93 | 1057.88 | 264.469 | 117.542 | 66.1173 | 42.3151 | 10.5788 | 4.70168 | 2.64469 | 1.17542 | 0.661173 | 0.423151 | 10285.3 | 3252.5 | 1028.53 | 586.068 | 514.266 | 162.625 | 51.4266 | 0.000132235 | 8.46302e-05 | 0.25 | 0.111111 | 0.0625 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 100 | 4.23151e+07 | 105788 | 26446.9 | 11754.2 | 6611.73 | 4231.51 | 1057.88 | 470.168 | 264.469 | 169.26 | 42.3151 | 18.8067 | 10.5788 | 4.70168 | 2.64469 | 1.6926 | 20570.6 | 6505 | 2057.06 | 1172.14 | 1028.53 | 325.25 | 102.853 | 0.04 | 0.01 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 500 | 1057877151 | 2.64469e+06 | 661173 | 293855 | 165293 | 105788 | 26446.9 | 11754.2 | 6611.73 | 4231.51 | 1057.88 | 470.168 | 264.469 | 117.542 | 66.1173 | 42.3151 | 102853 | 32525 | 10285.3 | 5860.68 | 5142.66 | 1626.25 | 514.266 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 1000 | 4231508605 | 1.05788e+07 | 2.64469e+06 | 1.17542e+06 | 661173 | 423151 | 105788 | 47016.8 | 26446.9 | 16926 | 4231.51 | 1880.67 | 1057.88 | 470.168 | 264.469 | 169.26 | 205706 | 65050 | 20570.6 | 11721.4 | 0.137138 | 0.0433667 | 0.0137138 | Accuracy factors |  |  |  |  |  |  | Now, to use acceleration equation to calculate displacement: |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Uncertain target location due to finite sensor resolution |  |  |  |  |  |  | t = (Dm / 299,792,458) + (Dm / Wv) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 2024-02-20 00:00:00 | 1 |  |  |  | 5 |  | 15 |  |  | 50 |  |  |  |  |  |  |  |  |  |  |  |  |  | Uncertain target motion due to sensor glint or shape effects |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 5/100 |  |  |  |  | 5 |  |  |  | 25 |  | 75 |  |  |  | 250 |  |  |  |  |  |  |  |  | Sensor boresight error due to finite manufacturing tolerances |  |  |  |  |  |  | where: |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Target motion during sensor integration time |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Analog-to-digital conversion errors of sensor data |  |  |  |  |  |  | t = time it takes light from target to travel to targeting sensors plus time it takes weapon to travel to target (s) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Software errors in fire control system |  |  |  |  |  |  | t = time target has to jink before weapon arrives |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Hardware errors in fire control system |  |  |  |  |  |  | Dm = range to target (m) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Digital-to-analog conversion errors of gunlaying servo commands |  |  |  |  |  |  | Wv = weapon velocity (m/s) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Target motion during weapon aiming time |  |  |  |  |  |  | 299,792,458 = meters in one light-second |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Weapon boresight error due to finite manufacturing tolerances |  |  |  |  |  |  | Dm / 299,792,458 = time it takes light from target to travel to targeting sensors (s) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Weapon structural distortion due to inertial effects of rapid slew |  |  |  |  |  |  | Dm / Wv = time it takes weapon to travel to target (s) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Weapon structural distortion due to external or internal vibration |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | H = maximum percent chance to hit target given light-speed lag (0.0 - 1.0 with 1.0 = 100%) |  |  |  |  |  |  |  |  |  |  | Weapon structural distortion due to thermal expansion during firing |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Cm = target ship's mean cross section (m2, for a purely convex object this is approximately 1/4 of the surface area) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | accuracy | 6294.69 |  |  |  |  |  |  |  |  |  |  |  |  | a = target's acceleration (m/s, where 9.81 = 1 g) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Dm = range to target (m) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Wv = weapon velocity (m/s) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 299,792,458 = meters in one light-second |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.7854 = π / 4 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  | Lasers |  | H = Cm / (0.7854 * a2 * ((Dm + Dm) / 299,792,458)4) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

## shield

| 1 sheet | 100 | kj/m² |
| --- | --- | --- |
|  | 0.01 | kJ/cm² |

## gravity assist

|  |  |  |  |  |  | v = sqrt( G * m / r ) |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Earth | Mars | Mercury | Proxima b |  |  | m = mass of star (kg) |  |  |  |  |
| orbit radius | 1 |  |  | 0.05 | AU |  | r = radius of orbit (m) |  |  |  |  |
| orbital velocity | 29788.2 |  |  | 46544.3 | m/s |  |  | Sun mass | 1.989e+30 |  | 1.989 × 10^30 kg |
|  | 107000 | 86871 | 170505 | 167560 | km/h |  |  | Proxima mass | 2.428e+29 |  | 2.428 × 10^29 kg |
|  | 1783.33 | 1447.85 | 2841.75 | 2792.66 | km/m |  |  |  |  |  |  |
|  | 99.0741 | 80.4361 | 157.875 | 155.148 | cs |  |  | AU | 149600000000 | m |  |
|  | 29.7222 | 24.1308 | 47.3625 | 46.5443 | km/s |  |  | G | 0 | Nm² / kg² |  |
| https://space.stackexchange.com/questions/23295/how-do-we-come-up-with-the-gravity-assist-or-slingshot-formula |  |  |  |  |  |  |  |  |  |  |  |
| Final velocity = Initial velocity + 2 (velocity of the planet) |  |  |  |  |  |  |  |  |  |  |  |
| gravity assist | 59.4444 | 48.2617 | 94.725 | 93.0886 | km/s |  |  |  |  |  |  |
|  | 0.0688014 | 0.0558584 | 0.109635 | 0.107741 | gj |  |  |  |  |  |  |

## Ship size  mass

| https://www.projectrho.com/public_html/rocket/spacewarship.php#id--Ship_Types--Quick-n-Dirty_Ship_Types |  |  |  |  |  |  |  |  |  |  | frig |  | NASA |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  | 9 | dreadnaught |  | 50 | Mt |  | Propulsion | 20 | % | 3.7 | % | propulsion |
|  |  | supertanker | 500 kt | 8 | supertanker |  | 2 | MT |  | Life support | 5 | % | 3.4 | % | Thermal |
|  |  | naval carrier | 90 kt | 7 | carrier |  | 500 | kt |  | Sensors | 5 | % | 7.5 | % | Comms |
|  |  | naval battleship | 40 kt | 6 | battleship |  | 100 | kt |  | CPU | 5 | % | 8 | % | CPU |
|  |  | naval cruiser | 9 kt | 5 | battlecruiser |  | 20 | kt |  | Structure | 15 | % | 21.7 | % | Structure |
|  |  | naval destroyer | 7 kt |  |  |  |  |  |  | Cooling | 10 | % |  |  |  |
|  |  |  | 3 kt | 4 | cruiser |  | 1 | kt |  | Power | 5 | % | 28 | % | Power |
|  |  | ISS | 450 t |  |  |  |  |  |  | Payload | 35 | % | 26 | % | Payload |
|  |  | Boeing 747 | 100 t | 3 | frigate |  | 300 | t |  |  |  |  |  |  |  |
|  |  |  | 50 t | 2 | fighter |  | 50 | t |  |  | 100 |  | 98.3 |  |  |
|  |  | Jet | 10-15 t | 2 | shuttle |  | 10 | t |  |  |  |  |  |  |  |
|  |  | Voiture | 2 t | 1 | exo |  | 2 | t |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  | d = m/v |  |  |  |  |  |
|  |  | size | ratio | wet (t) | dry | width | length | volume |  | density (t/m3) |  | prop | power | payload |  |
|  | VISTA | 170x100 m | 3.22581 | 6000 | 1860 | 170 | 100 | 2.2698e+06 |  | 0.0026434 |  | 68.82 |  |  |  |
| fighter | Exacting | 4x60 m | 2 | 40 | 20 | 4 | 60 | 753.982 | m3 | 0.0530516 |  | 4 | 1 | 7 |  |
| dread | Leviathan | 0.8x3 km | 18.0956 | 4.52389e+07 | 2500000 | 800 | 3000 | 1507964474 | m3 | 0.03 |  | 92500 |  |  |  |
| battleship | Truman | 110x376m | 2 | 107197 | 53598.7 | 110 | 376 | 3.57325e+06 | m3 | 0.03 |  | 1983.15 |  |  |  |
| destro | Morrigan | 9x31m | 2 | 59.164 | 29.582 | 9 | 31 | 1972.13 | m3 | 0.03 |  | 1.09453 |  |  |  |
| fighter | Razorback | 8x20m | 2 | 50.2655 | 25.1327 | 8 | 20 | 1005.31 | m3 | 0.05 |  | 0.929911 |  |  |  |
| cruiser | Leonidas | 60*270m | 2 | 22902.2 | 11451.1 | 60 | 270 | 763407 | m3 | 0.03 |  | 423.691 |  |  |  |
| dread | Behemoth | 960x2460m | 2 | 5.34181e+07 | 2.67091e+07 | 960 | 2460 | 1780604451 | m3 | 0.03 |  | 988235 |  |  |  |
| cruiser | Scirocco | 70x200m | 2 | 23090.7 | 11545.4 | 70 | 200 | 769690 | m3 | 0.03 |  | 427.178 |  |  |  |
| frigate | Amun-Ra | 22x60m | 1.5 | 684.239 | 456.159 | 22 | 60 | 22808 | m3 | 0.03 |  | 16.8779 |  |  |  |
| frigate | Stratios | 18x60m | 1.5 | 318.086 | 212.058 | 15 | 60 | 10602.9 | m3 | 0.03 |  | 42.4115 | 10.6029 | 74.2201 |  |
| frigate | Rocinante |  | 1.5 | 108.385 | 72.2566 | 10 | 46 | 3612.83 | m3 | 0.03 |  | 2.6735 |  |  |  |
| carrier |  |  | 1.5 | 471239 | 314159 | 200 | 500 | 1.5708e+07 | m3 | 0.03 |  | 11623.9 |  |  |  |
| battleship | Nestor |  | 1.5 | 1.25664e+06 | 837758 | 200 | 800 | 2.51327e+07 | m3 | 0.05 |  | 30997 |  |  |  |
| supertanker |  |  | 3 | 2.26195e+06 | 753982 | 400 | 600 | 7.53982e+07 | m3 | 0.03 |  | 27897.3 |  |  |  |
| Laserstar |  |  | 1.5 | 1.06029e+08 | 7.06858e+07 | 3000 | 500 | 3534291735 | m3 | 0.03 |  |  |  |  |  |
| battlecruiser | Scirocco |  | 1.5 | 94247.8 | 62831.9 | 100 | 400 | 3.14159e+06 | m3 | 0.03 |  |  |  |  |  |
| cruiser |  |  | 1.5 | 2120.58 | 1413.72 | 30 | 100 | 70685.8 | m3 | 0.03 |  |  |  |  |  |
| Hub |  |  | 1.5 | 2120575041 | 1413716694 | 3000 | 10000 | 70685834706 | m3 | 0.03 |  |  |  |  |  |
| Spatioport |  |  | 1.5 | 9.42478e+07 | 6.28319e+07 | 1000 | 4000 | 3141592654 | m3 | 0.03 |  |  |  |  |  |
|  |  |  |  |  |  | 4.5 |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  | 2.5625 |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  | 2.85714 |  |  |  |  |  |  |  |  |  |
|  |  | density | 0.05 | t/m3 |  | 2.72727 |  |  |  |  |  |  |  |  |  |
|  |  | Mass | 1000 | t |  | 4 |  |  |  |  |  |  |  |  |  |
|  |  | Volume | 20000 | m3 |  | 4.6 |  |  |  |  |  |  |  |  |  |
|  | ratio 4 | r | 10.1994 | m |  | 2.5 |  |  |  |  |  |  |  |  |  |
|  |  | h | 81.5955 | m |  | 4 |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  | 1.5 |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  | 0.166667 |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  | 0 |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  | 0 |  |  |  |  |  |  |  |  |  |

## Others

|  |  |  | Plasma windows |  |
| --- | --- | --- | --- | --- |
| Passager (militaire) | 0.5 | t | https://www.projectrho.com/public_html/rocket/spacewardefense.php#id--Force_Fields--Considerations |  |
| Passager (comfort) | 1 | t | Erickson's Model |  |
| Passager (luxe) | 2 | t |  | P * V = k * E |
| Anti-laser shield |  | Kerr effect / Vacuum polarization |  | where: |
|  |  | https://arxiv.org/pdf/1012.1134 |  |  |
|  |  |  |  | P = pressure |
|  |  |  |  | V = volume |
|  |  |  |  | E energy |
|  |  |  |  | k = constant |
|  |  |  |  | Assuming k=1, you get something like 42 joules for a 1 meter radius sphere with 1 atmosphere of pressure inside. If you make k smaller, the energy requirements go up. |
|  |  |  |  | https://en.wikipedia.org/wiki/Polariton_superfluid |

## coilgun

| u |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |  |  | RODS |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Coilgun : | lower power consumption |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | coils are not eroded |  |  |  |  |  |  |  |  | mass (kg) | radius (mm) | speed (kms) | energy (MJ) | Field (T) | barrel1 (m) | barrelmin (m) | Power (W) | Graphene (kg) | MH (kg) | factor | COILGUN stats |  |  |  |  |
|  |  |  |  | 4500000000 | J |  | Rod |  |  |  |  |  |  |  |  |  |  |  |  |  |  | L/W ratio | 3 to 10 |  |  |  |
|  |  |  | Efficiency | 0.9 |  | mass | 10 | kg | 10000 | g | e-9 | 0.01 | 3 | e-9 | 30 | 0.04 | 0.04 | e2 | 0.005 | e-6 |  | Density | 1 to 20 |  |  |  |
|  | kinetic energy = 0.5 * mass * velocity2 |  |  | 4500 | MJ | radius | 25 | mm | 2.5 | cm | e-6 | 0.1 | 3 | e-6 | 30 | 0.4 | 0.04 | e5 | e0 | e-4 |  | Barrel length | L = v² / 2a |  |  | L = barrel length (m) |
|  |  |  |  | 229.183 | MJ/cm² | velocity | 30 | km/s |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | v = exit velocity (m/s) |
|  | heat energy = 0.5 * (1/e - 1) * (kinetic energy) |  |  | 250 | MJ | radius | 0.025 | m |  |  | e-6 | 0.1 | 10 | e-5 | 100 | 0.4 | 0.04 | e6 | 40 | 0.007 |  |  |  |  |  | a = average acceleration (m/s²) |
|  | projectile temperature = (heat energy) / (C * mass) |  |  | 55.5556 | % | velocity | 30000 | m/s |  |  | 0.001 | 1 | 10 | 0.05 |  | 1.8 |  | e8 | 4000 | 0.7 |  |  |  |  |  |  |
|  | volume = kinetic energy / (K * (magnetic field)^2) |  |  | 0.502655 | m3 | Heat cap | 45 |  | CNT |  | 0.01 | 2 | 10 | 0.5 |  | 4.5 |  | e9 | e4 | e0 | 2.5 | E = 1/2 LI² | > not a limiting factor |  |  | E = energy stored in magnetic field (Joules) |
|  | length = volume / area |  |  | 256 | m | Density | 20000 | kg/m3 |  |  | 0.1 | 4.5 | 10 | 5 |  | 9 |  |  | e5 | e1 | 2 |  |  |  |  | L = inductance of the coil (Henrys) |
|  |  |  |  |  |  | Length | 0.254648 | m |  |  | 1 | 10 | 10 | 50 |  | 18 |  | e10 |  |  | 2 |  |  |  |  | I = current through the coil (Amps) |
|  | mass = density * volume * ratio |  |  | 502.655 | kg | L/W ratio | 5.09296 |  |  |  | 10 | 20 | 10 | 500 |  | 45 |  |  |  |  | 2.5 |  |  |  |  |  |
|  |  |  |  | 502655 | g |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | L ≈ μ0  N² A / l |  |  |  | μ0​=4π⋅10−7H/m |
|  |  |  |  |  |  |  | Coil |  |  |  | 0.1 | 5 | 30 | 50 |  | 64 |  | e10 |  |  |  |  | μ0​= | 1.25664e-06 | H/m | N = number of turns |
|  | momentum p = m*V |  |  | 0.3 |  | K (max) | 400 | kJ/m3/T2 |  | metallic hydrogen | 1 | 10 | 30 | 500 |  | 160 |  |  |  |  | 2.5 |  |  |  |  | A = cross-sectional area of the coil (m²) |
|  |  |  |  |  |  | K | 397887 | T² m3 / J |  |  | 10 | 20 | 30 | 5000 |  | 400 |  | e11 |  |  | 2.5 |  |  |  |  | l = length of the coil (m) |
|  | accel | for above L | a = v²/ 2L | 1.75781e+06 | m/s² | field (max) | 200 | teslas |  |  |  |  |  |  |  |  |  |  |  |  |  | Imax = 10^7 A |  |  |  |  |
|  |  |  |  | 175781 | g | field | 150 | teslas |  |  | e-6 | 0.1 |  |  |  |  |  |  |  | 2e-05 |  |  |  |  |  |  |
|  | barrel min | for a = e6 gs | L = v² / 2a | 4.5 | m | Density | 10000 | kg/m3 |  |  | 0.1 | 6 | 0.3 | 0.005 | 10 | 1 |  | e6 | e1 | e-3 |  | P = B² / 2μ0 |  |  |  | P = Magnetic pressure inside the coil |
|  |  |  |  |  |  | Volume ratio | 0.1 |  |  |  | 1 | 10 | 0.3 | 0.05 |  |  | 0.16 |  |  |  |  |  | P= | 8952465549 | Pascals | B = field strength |
|  | time in barrel | t = v/a |  | 0.0170667 | s |  |  |  |  |  | 10 | 20 | 0.3 | 0.5 |  |  | 0.4 | e9 |  |  |  |  |  | 8.95247 | GPa |  |
|  | Power | P = Ek / t |  | 263671875000 | W |  |  |  |  |  | 100 | 45 | 0.3 | 5 |  |  | 0.8 |  |  |  |  |  |  | carbon nanotubes > 10 GPa |  |  |
|  | Capacitor | graphene | 360000 J/kg | 732422 | kg |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Battery | MH | 200 MJ/kg | 1318.36 | kg |  |  |  |  |  | 0.001 | 1 | 3 | 0.005 | 50 | 1.4 |  | e6 | e2 | e-2 |  |  |  |  |  |  |
|  | Pulse system | 1 shot / second (1Hz) for 150T, 10Hz for 30T |  |  |  |  |  |  |  |  | 0.01 | 2 | 3 | 0.05 | 50 | 3.6 |  |  |  |  | 2.57143 |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  | 0.1 | 5 | 3 | 0.5 |  | 0.6 |  |  |  |  | 0.166667 |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  | 1 | 10 | 3 | 5 |  | 1.5 |  | e9 |  |  | 2.5 |  |  |  |  |  |
|  | 🎯 Survivable g-ranges by Projectile Type |  |  |  |  |  |  |  |  |  | 10 | 20 | 3 | 50 |  | 4 |  |  |  |  | 2.66667 |  |  |  |  |  |
|  | Projectile Type |  | Survivable Acceleration (g) |  | Notes |  |  |  |  |  | 100 | 45 | 3 | 500 |  | 8 |  |  |  |  | 2 |  |  |  |  |  |
|  | Kinetic dart (tungsten rod) |  | >1,000,000 g |  | Solid metal penetrators can handle extreme shocks. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Simple coilgun slug (no payload) |  | 100,000 – 500,000 g |  | Reasonable target for high-speed systems. |  |  |  |  |  | e-12 | 0.001 | 2 | e-12 |  | 0 |  |  |  |  |  |  |  |  |  |  |
|  | Miniaturized electronics inside |  | 1,000 – 10,000 g |  | With careful shock mounting and hardening. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Guided munitions / sensors |  | 100 – 1,000 g |  | Close to artillery-grade limits. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Delicate optics, MEMS |  | <100 g |  | May fail even under modest acceleration. |  |  |  |  |  |  |  |  |  |  |  |  |  | hydrodynamic penetration |  | Lp​ = projectile length |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | d = Lp * ρp / ρt |  | ρp = projectile density |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ρ |  | ρt​ = target density |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | CNT |  |  | 1 |  |  |  |  |
| Pistol |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | steel | 7850 | kg/m3 | 8 |  |  |  |  |
|  |  |  |  | 20 | J |  |  |  |  |  |  |  |  |  |  |  |  |  | hull |  |  | 10 |  |  |  |  |
|  | kinetic energy = 0.5 * mass * velocity2 |  |  | 2e-05 | MJ |  |  |  |  |  |  |  | field | 30 | T |  |  |  | tungsten |  |  | 20 |  |  |  |  |
|  |  |  |  | 0.0101859 | MJ/cm² |  |  |  | mass | 1e-05 | kg |  | barrel : | 0.4 | m |  |  |  |  |  |  |  |  |  |  |  |
|  |  | impact area |  | 1.9625e-07 | m² |  |  |  | caliber | 0.5 | mm |  | Battery | 0.5 | kg | graphene |  |  |  |  |  |  |  |  |  |  |
|  | hydrodynamic penetration |  | CNT | 3.05577 | cm |  |  |  | velocity | 2 | km/s |  |  |  |  |  | Damage | 0 | delivers nanites under the skin |  |  |  |  |  |  |  |
|  |  |  | Steel | 0.381972 | cm |  |  |  | radius | 0.00025 | m |  |  |  |  |  | AP | 3 |  |  |  |  |  |  |  |  |
|  |  |  | hull | 0.305577 | cm |  |  |  | velocity | 2000 | m/s |  |  |  |  |  | RAF | x1 |  |  |  |  |  |  |  |  |
|  |  |  | tungsten | 0.152789 | cm |  |  |  |  | 20 | g/cm3 |  | Impact | 106 | dB |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | Length | 0.254648 | cm |  | Sonic boom | negligible |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | L/W ratio | 5.09296 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Sniper |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | 50000 | J |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | kinetic energy = 0.5 * mass * velocity2 |  |  | 0.05 | MJ |  |  |  |  |  |  |  | field | 150 | T |  | Damage | 5+ |  |  |  |  |  |  |  |  |
|  |  |  |  | 1.59155 | MJ/cm² |  |  |  | mass | 0.001 | kg |  | barrel : | 1.8 | m |  | AP | 4 |  |  |  |  |  |  |  |  |
|  |  | impact area |  | 3.14e-06 | m² |  |  |  | caliber | 2 | mm |  | Coil |  | kg |  | RAF | 1/sec |  |  |  |  |  |  |  |  |
|  | hydrodynamic penetration |  | CNT | 31.831 | cm |  |  |  | velocity | 10 | km/s |  | Battery | 1 | kg | MH |  |  |  |  |  |  |  |  |  |  |
|  |  |  | Steel | 3.97887 | cm |  |  |  | radius | 0.001 | m |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  | hull | 3.1831 | cm |  |  |  | velocity | 10000 | m/s |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  | tungsten | 1.59155 | cm |  |  |  |  | 20 | g/cm3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Immediate cavitation >10× rod size |  |  |  |  |  |  |  | Length | 1.59155 | cm |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | L/W ratio | 7.95775 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Rifle |  |  |  | 4500 | J |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | 4.5 | kJ |  |  |  |  |  |  |  |  |  |  |  | Damage | 3+ |  |  |  |  |  |  |  |  |
|  | kinetic energy = 0.5 * mass * velocity2 |  |  | 0.0045 | MJ |  |  |  |  |  |  |  | field | 50 | T |  | AP | 4 |  |  |  |  |  |  |  |  |
|  |  |  |  | 0.143239 | MJ/cm² |  |  |  | mass | 0.001 | kg |  | barrel : | 1 | m |  | RAF | x1 |  |  |  |  |  |  |  |  |
|  |  | impact area |  | 3.14e-06 | m² |  |  |  | caliber | 2 | mm |  | Coil |  | kg |  |  |  |  |  |  |  |  |  |  |  |
|  | hydrodynamic penetration |  | CNT | 25.4648 | cm |  |  |  | velocity | 3 | km/s |  | Battery | 0.02 | kg | MH |  |  |  |  |  |  |  |  |  |  |
|  |  |  | Steel | 3.1831 | cm |  |  |  | radius | 0.001 | m |  | Rods x100 | 0.1 | kg |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  | hull | 2.54648 | cm |  |  |  | velocity | 3000 | m/s |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  | tungsten | 1.27324 | cm |  |  |  |  | 20 | g/cm3 |  | Impact | >130 | dB |  |  |  |  |  |  |  |  |  |  |  |
|  | flesh | 1 cm hole |  |  |  |  |  |  | Length | 1.59155 | cm |  | Sonic boom | >130 | dB |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 4 cm ripple |  |  |  |  |  |  | L/W ratio | 7.95775 |  |  |  | lightning crack |  |  |  |  |  |  |  |  |  |  |  |  |
| Sniper |  |  |  | 4500000 | J |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | 4500 | kJ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | kinetic energy = 0.5 * mass * velocity2 |  |  | 4.5 | MJ |  |  |  |  |  |  |  | field | 150 | T |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | 1.76839 | MJ/cm² |  |  |  | mass | 1 | kg |  | barrel : | 2 | m |  | Damage |  |  |  |  |  |  |  |  |  |
|  |  | impact area |  | 0.00025434 | m² |  |  |  | caliber | 18 | mm |  | Coil | 0.5 | kg |  | AP | 5 |  |  |  |  |  |  |  |  |
|  | hydrodynamic penetration |  | CNT | 314.38 | cm |  |  |  | velocity | 3 | km/s |  |  |  |  |  | RAF | 1/sec |  |  |  |  |  |  |  |  |
|  |  |  | Steel | 39.2975 | cm |  |  |  | radius | 0.009 | m |  | Battery | 20 | kg | MH |  |  |  |  |  |  |  |  |  |  |
|  |  |  | hull | 31.438 | cm |  |  |  | velocity | 3000 | m/s |  | Rods x30 | 30 | kg |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  | tungsten | 15.719 | cm |  |  |  |  | 20 | g/cm3 |  | Impact | 160 | dB |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | Length | 19.6488 | cm |  | Sonic boom | 160 | dB | at 10m |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | L/W ratio | 10.916 |  |  |  | Boom/crack combo, shatter glass |  |  |  |  |  |  |  |  |  |  |  |  |
| Tank buster |  |  |  | 4500000 | J |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | 4500 | kJ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | kinetic energy = 0.5 * mass * velocity2 |  |  | 4.5 | MJ |  |  |  |  |  |  |  | field | 50 | T |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | 1.76839 | MJ/cm² |  |  |  | mass | 1 | kg |  | barrel : | 5 | m |  | Damage |  |  |  |  |  |  |  |  |  |
|  |  | impact area |  | 0.00025434 | m² |  |  |  | caliber | 18 | mm |  | Coil | 2 | kg |  | AP |  |  |  |  |  |  |  |  |  |
|  | hydrodynamic penetration |  | CNT | 314.38 | cm |  |  |  | velocity | 3 | km/s |  |  |  |  |  | RAF | 1/sec |  |  |  |  |  |  |  |  |
|  |  |  | Steel | 39.2975 | cm |  |  |  | radius | 0.009 | m |  | Battery | 8 | kg | MH |  |  |  |  |  |  |  |  |  |  |
|  |  |  | hull | 31.438 | cm |  |  |  | velocity | 3000 | m/s |  | Rods x100 |  | kg |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  | tungsten | 15.719 | cm |  |  |  |  | 20 | g/cm3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | Length | 19.6488 | cm |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | L/W ratio | 10.916 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Frigate |  |  |  | 45000000 | J |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | 45000 | kJ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | kinetic energy = 0.5 * mass * velocity2 |  |  | 45 | MJ |  |  |  |  |  |  |  | field | 50 | T |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | 70.7355 | MJ/cm² |  |  |  | mass | 0.1 | kg |  | barrel : |  | m |  | Damage |  |  |  |  |  |  |  |  |  |
|  |  | impact area |  | 6.3585e-05 | m² |  |  |  | caliber | 9 | mm |  | Coil |  | kg |  | AP |  |  |  |  |  |  |  |  |  |
|  | hydrodynamic penetration |  | CNT | 125.752 | cm |  |  |  | velocity | 30 | km/s |  |  |  |  |  | RAF |  |  |  |  |  |  |  |  |  |
|  |  |  | Steel | 15.719 | cm |  |  |  | radius | 0.0045 | m |  | Battery |  | kg | MH |  |  |  |  |  |  |  |  |  |  |
|  |  |  | hull | 12.5752 | cm |  |  |  | velocity | 30000 | m/s |  | Rods x100 |  | kg |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  | tungsten | 6.2876 | cm |  |  |  |  | 20 | g/cm3 |  | Impact | 160 | dB |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | Length | 7.8595 | cm |  | Sonic boom | 160 | dB | at 10m |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | L/W ratio | 8.73278 |  |  |  | Boom/crack combo, shatter glass |  |  |  |  |  |  |  |  |  |  |  |  |
| Station |  |  |  | 2000000000 | J |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | 2000000 | kJ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | kinetic energy = 0.5 * mass * velocity2 |  |  | 2000 | MJ |  |  |  |  |  |  |  | field | 50 | T |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | 407.437 | MJ/cm² |  |  |  | mass | 10 | kg |  | barrel : |  | m |  | Damage |  |  |  |  |  |  |  |  |  |
|  |  | impact area |  | 0.000490625 | m² |  |  |  | caliber | 25 | mm |  | Coil |  | kg |  | AP |  |  |  |  |  |  |  |  |  |
|  | hydrodynamic penetration |  | CNT | 1629.75 | cm |  |  |  | velocity | 20 | km/s |  |  |  |  |  | RAF |  |  |  |  |  |  |  |  |  |
|  |  |  | Steel | 203.718 | cm |  |  |  | radius | 0.0125 | m |  | Battery |  | kg | MH |  |  |  |  |  |  |  |  |  |  |
|  |  |  | hull | 162.975 | cm |  |  |  | velocity | 20000 | m/s |  | Rods x100 |  | kg |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  | tungsten | 81.4873 | cm |  |  |  |  | 20 | g/cm3 |  | Impact | 160 | dB |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | Length | 101.859 | cm |  | Sonic boom | 160 | dB | at 10m |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | L/W ratio | 40.7437 |  |  |  | Boom/crack combo, shatter glass |  |  |  |  |  |  |  |  |  |  |  |  |

## Kinetic

|  | https://www.projectrho.com/public_html/rocket/sidearmintro.php#bettergun |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Ke = 0.5 * M * V2 |  |  |  |  |  |  |  |  |  |
|  | https://www.projectrho.com/public_html/rocket/spacegunconvent.php#id--Kinetic_Kill_Weapons--Railguns |  |  |  |  |  |  |  |  |  |  |  |  |  |  | where: |  |  |  | Accuracy factors |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Uncertain target location due to finite sensor resolution |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Ke = kinetic energy (Joules) |  |  |  | Uncertain target motion due to sensor glint or shape effects |  |  |  |  |  |
|  | 1 kg at 9.98 km/sec is packing 50 megajoules of energy. |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M = mass of projectile (kg) |  |  |  | Sensor boresight error due to finite manufacturing tolerances |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | V = velocity of projectile relative to target (m/s) |  |  |  | Target motion during sensor integration time |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Analog-to-digital conversion errors of sensor data |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | critical temp | 100 | - | 300 | K |  |  | Wp = Ke * (1 / We) |  |  |  | Software errors in fire control system |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | critical field | 100 | - | 200 | Tesla |  |  |  |  |  |  | Hardware errors in fire control system |  |  |  |  |  |
|  | Coilgun : | lower power consumption |  |  |  |  |  |  |  |  |  |  |  |  |  | where: |  |  |  | Digital-to-analog conversion errors of gunlaying servo commands |  |  |  |  |  |
|  |  | coils are not eroded |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Target motion during weapon aiming time |  |  |  |  |  |
|  |  |  | Efficiency | 0.99 |  |  |  |  |  | Rod |  |  |  |  |  | Wp = power required by weapon to fire one projectile (Joules) |  |  |  | Weapon boresight error due to finite manufacturing tolerances |  |  |  |  |  |
|  |  |  |  | 0.0625 | kJ |  |  |  | mass | 5 | kg |  | 0.015 | cs |  | Ke = kinetic energy of one weapon projectile (Joules) |  |  |  | Weapon structural distortion due to inertial effects of rapid slew |  |  |  |  |  |
|  | kinetic energy = 0.5 * mass * velocity2 |  |  | 6.25e-05 | MJ |  |  |  | radius | 1.5 | cm |  | 6.25e-05 | MJ |  | We = efficiency of the weapon (0.0 = 0%, 1.0 = 100%) |  |  |  | Weapon structural distortion due to external or internal vibration |  |  |  |  |  |
|  |  |  |  | 8.84194e-06 | MJ/cm² |  |  |  | velocity | 0.005 | km/s |  |  |  |  |  |  |  |  | Weapon structural distortion due to thermal expansion during firing |  |  |  |  |  |
|  | heat energy = 0.5 * (1/e - 1) * (kinetic energy) |  |  | 3.15657e-07 | MJ |  |  |  | radius | 0.015 |  | m |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | projectile temperature = (heat energy) / (C * mass) |  |  | 1.40292e-07 | % |  |  |  | velocity | 5 |  | m/s |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | volume = kinetic energy / (K * (magnetic field)2) |  |  | 9.25926e-09 | m3 |  |  |  | Heat cap | 45 |  |  | CNT |  |  |  |  |  |  |  |  |  |  |  |  |
|  | length = volume / area |  |  | 1.30992e-05 | m |  |  |  | Density | 4500 | kg/m3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | Length | 1.5719 | m |  | 1.5719 |  |  | 12000 |  |  |  |  |  |  |  |  |  |
|  | mass = density * volume * ratio |  |  | 2.77778e-07 | t |  |  |  | L/W ratio | 52.3967 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Enemy position | The location of the enemy when your shot arrives. |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  | Coil |  |  |  |  |  | Weapon performance | The actual flight path of your shot as affected by the physical characteristics of the weapon itself and the environment through which the shot passes. |  |  |  |  |  |  |  |  |
|  | momentum p = m*V |  |  | 2.5e-05 |  |  |  |  | K (max) | 400 | kJ/m3/T2 |  |  |  |  | Weapon control | The degree to which you can precisely control the aiming of the weapon. |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | K | 300 | kJ/m3/T2 |  | metallic hydrogen |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | field (max) | 200 | teslas |  |  |  |  |  | TITANIUM |  | DIAMOND | GRAPHITE |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | field | 150 | teslas |  |  |  |  | specific heat C | 0.5 | J/g | 0.5 | 0.7 |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | Density | 300 | kg/m3 |  |  |  |  | specific heat C | 0.0005 | MJ/kg | 0.0005 | 0.0007 |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | Volume ratio | 0.1 |  |  |  |  |  | Melting point | 1725 | °C | 4500 | 3500 |  |  |  |  |  |
| Taille |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Heat cap | 0.8625 |  | 2.25 | 2.45 |  |  |  |  |  |
| 0 | kinetic energy = 0.5 * mass * velocity2 |  |  | 5 | kJ |  |  |  |  | 5.6 mm Handgun (M16) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | 20.3004 | kJ/cm² |  |  |  | mass | 0.01 | kg |  | 3 | cs |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Nanofiber mass needed to stop |  | 50 | g |  |  |  | caliber | 5.6 | mm |  | 0.005 | MJ | https://en.wikipedia.org/wiki/Impact_depth |  |  |  |  |  |  |  |  |  |  |
|  |  | Mass of steel to stop |  | 0.0384615 | g/cm² |  | 0.00480769 | cm | velocity | 1 | km/s |  | 5.86913 | pen/cs/kg | penetration depth D = L×A/B |  |  |  |  | penetrate skull | 200 | J |  |  |  |
|  |  | Mass of carbon fiber to stop |  | 0.00684932 | g/cm² |  | 0.00342466 | cm | radius | 0.0028 |  | m |  |  |  | L = length of projectile |  |  |  | blow arm off | 20 | kJ |  |  |  |
|  |  | Mass of diamond to stop |  | 0.000877193 | g/cm² |  | 0.000250627 | cm | velocity | 1000 |  | m/s |  |  |  | A = density of proj |  |  |  |  |  |  |  |  |  |
|  |  | Steel penetration |  | 1.76074 | cm | or | 14.0859 | g/cm² | Density | 10 | g/cm3 |  |  |  |  | B = density of armor |  |  |  |  |  |  |  |  |  |
|  |  | Armor pen |  | 0.422577 | cm | or | 0.845154 | g/cm² | Length | 4.06008 | cm |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | L/W ratio | 7.25013 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 | kinetic energy = 0.5 * mass * velocity2 |  |  | 56.25 | kJ |  |  |  |  | 10 mm Rifle |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | 71.6197 | kJ/cm² |  |  |  | mass | 0.05 | kg |  | 4.5 | cs |  | Depleted uranium | 19 | g/cm3 |  |  |  |  |  |  |  |
|  |  | Nanofiber mass needed to stop |  | 562.5 | g |  |  |  | caliber | 10 | mm |  | 0.05625 | MJ |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Mass of steel to stop |  | 0.432692 | g/cm² |  | 0.0540865 | cm | velocity | 1.5 | km/s |  | 4.39205 | pen/cs/kg |  | Steel | 8 | g/cm3 |  |  |  |  |  |  |  |
|  |  | Mass of carbon fiber to stop |  | 0.0770548 | g/cm² |  | 0.0385274 | cm | radius | 0.005 |  | m |  |  |  | Titanium | 4.5 | g/cm3 |  |  |  |  |  |  |  |
|  |  | Mass of diamond to stop |  | 0.00986842 | g/cm² |  | 0.00281955 | cm | velocity | 1500 |  | m/s |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Steel penetration |  | 4.41942 | cm | or | 35.3553 | g/cm² | Density | 10 | g/cm3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Armor pen |  | 1.06066 | cm | or | 2.12132 | g/cm² | Length | 6.3662 | cm |  |  | 0.537914 | https://www.tankarchives.ca/2014/10/penetration-equations.html |  |  |  |  |  |  |  |  |  |  |
|  |  | Diamond pen |  | 0.424264 | cm |  |  |  | L/W ratio | 6.3662 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | kinetic energy = 0.5 * mass * velocity2 |  |  | 0.45 | MJ |  |  |  |  | 20 mm Assault cannon |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | 0.143239 | MJ/cm² |  |  |  | mass | 0.4 | kg |  | 4.5 | cs | penetration B = (v * sqrt(P) ) / (K* sqrt(D) ) |  |  |  |  |  |  |  |  |  |  |
|  |  | Mass of steel to stop |  | 3.46154 | g/cm² | or | 0.432692 | cm | caliber | 20 | mm |  | 0.45 | MJ |  | v = velocity |  |  | P [dm] = V [m/s] * sqr(M [kg]) / (K * sqr(D [dm])) |  |  |  |  |  |  |
|  |  | Mass of carbon fiber to stop |  | 0.616438 | g/cm² | or | 0.308219 | cm | velocity | 1.5 | km/s |  | 0.745356 | pen/cs/kg |  | P = mass of proj |  |  |  |  |  |  |  |  |  |
|  |  | Mass of diamond to stop |  | 0.0789474 | g/cm² | or | 0.0225564 | cm | radius | 0.01 |  | m |  |  |  | K = armor resistance | 2500 |  |  |  |  |  |  |  |  |
|  |  | Steel penetration |  | 8.83883 | cm | or | 70.7107 | g/cm² | velocity | 1500 |  | m/s |  |  |  | D = caliber |  |  |  |  |  |  |  |  |  |
|  |  | Armor pen |  | 2.12132 | cm | or | 4.24264 | g/cm² | Density | 10 | g/cm3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Diamond pen |  | 0.848528 | cm | or | 2.96985 | g/cm² | Length | 12.7324 | cm |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | L/W ratio | 6.3662 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | kinetic energy = 0.5 * mass * velocity2 |  |  | 4.5 | MJ |  |  |  |  | 40 mm PDC |  |  |  |  |  |  |  |  |  |  |  |  | 45 mm antitank |  |  |
|  |  |  |  | 0.358099 | MJ/cm² |  |  |  | mass | 1 | kg |  | 9 | cs |  |  |  |  |  |  |  | mass | 1.43 | kg |  |
|  |  | Mass of steel to stop |  | 34.6154 | g/cm² | or | 4.32692 | cm | caliber | 40 | mm |  | 4.5 | MJ |  |  | 0.412984 | MJ |  |  |  | caliber | 45 | mm |  |
|  |  | Mass of carbon fiber to stop |  | 6.16438 | g/cm² | or | 3.08219 | cm | velocity | 3 | km/s |  | 0.527046 | pen/cs/kg |  |  | 6.4917e-05 | kJ/cm² |  |  |  | velocity | 0.76 | km/s |  |
|  |  | Mass of diamond to stop |  | 0.789474 | g/cm² | or | 0.225564 | cm | radius | 0.02 |  | m |  |  | Mass of steel to stop |  | 3.1768 | g/cm² | or | 0.3971 | cm | radius | 0.0225 |  | m |
|  |  | Steel penetration (Krupp) |  | 19.7642 | cm | or | 158.114 | g/cm² | velocity | 3000 |  | m/s |  |  | Mass of graphite to stop |  | 10.3246 | g/cm² | or | 5.1623 | cm | velocity | 760 |  | m/s |
|  |  | Armor pen |  | 4.74342 | cm | or | 9.48683 | g/cm² | Density | 5 | g/cm3 |  |  |  | Mass of diamond to stop |  | 0.165194 | g/cm² | or | 0.0471982 | cm | Density | 10 | g/cm3 |  |
|  |  | Diamond pen |  | 1.89737 | cm | or | 6.64078 | g/cm² | Length | 15.9155 | cm |  |  |  | Steel penetration |  | 5.645 | cm |  |  |  | Length | 2.24782 | cm |  |
|  |  |  |  |  |  |  |  |  | L/W ratio | 3.97887 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | kinetic energy = 0.5 * mass * velocity2 |  |  | 22.5 | MJ |  |  |  |  | Tank round |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | 1.14592 | MJ/cm² |  |  |  | mass | 5 | kg |  | 9 | cs |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Mass of steel to stop |  | 173.077 | g/cm² |  | 21.6346 | cm | caliber | 50 | mm |  | 22.5 | MJ |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Mass of carbon fiber to stop |  | 30.8219 | g/cm² |  | 15.411 | cm | velocity | 3 | km/s |  | 1.05409 | pen/cs |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Mass of diamond to stop |  | 3.94737 | g/cm² |  | 1.12782 | cm | radius | 0.025 |  | m |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Steel penetration |  | 39.5285 | cm | or | 316.228 | g/cm² | velocity | 3000 |  | m/s |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Armor pen |  | 9.48683 | cm | or | 18.9737 | g/cm² | Density | 10 | g/cm3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Diamond pen |  | 3.79473 | cm | or | 13.2816 | g/cm² | Length | 25.4648 | cm |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | L/W ratio | 5.09296 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 | kinetic energy = 0.5 * mass * velocity2 |  |  | 5 | MJ |  |  |  |  | Light coilgun |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | 2.82942 | MJ/cm² |  |  |  | mass | 0.1 | kg |  | 30 | cs |  |  |  | https://panzerworld.com/relative-armor-thickness |  |  |  |  |  |  |  |
|  |  | Mass of steel to stop |  | 38.4615 | g/cm² |  | 4.80769 | cm | caliber | 15 | mm |  | 5 | MJ |  |  |  | slanted armor multiplier |  |  |  |  |  |  |  |
|  |  | Mass of carbon fiber to stop |  | 6.84932 | g/cm² |  | 3.42466 | cm | velocity | 10 | km/s |  | 0.272166 | pen/cs |  |  |  | 1 to 10 |  |  |  |  |  |  |  |
|  |  | Mass of diamond to stop |  | 0.877193 | g/cm² |  | 0.250627 | cm | radius | 0.0075 |  | m |  |  |  |  |  | 30° = multiplier of 2 |  |  |  |  |  |  |  |
|  |  | Steel penetration |  | 34.0207 | cm | or | 272.166 | g/cm² | velocity | 10000 |  | m/s |  |  |  |  |  | 15° = 4 |  |  |  |  |  |  |  |
|  |  | Armor pen |  | 8.16497 | cm | or | 16.3299 | g/cm² | Density | 3.5 | g/cm3 |  |  |  |  |  |  | 10° = 6 |  |  |  |  |  |  |  |
|  |  | Diamond pen |  | 3.26599 | cm | or | 11.431 | g/cm² | Length | 16.1681 | cm |  |  |  |  |  |  | 5° = 12 |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | L/W ratio | 10.7787 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 6 | kinetic energy = 0.5 * mass * velocity2 |  |  | 50 | MJ |  |  |  |  | Coilgun |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | 7.07355 | MJ/cm² |  |  |  | mass | 1 | kg |  | 30 | cs |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Mass of steel to stop |  | 384.615 | g/cm² |  | 48.0769 | cm | caliber | 30 | mm |  | 50 | MJ |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Mass of carbon fiber to stop |  | 68.4932 | g/cm² |  | 34.2466 | cm | velocity | 10 | km/s |  | 0.608581 | pen/cs |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Mass of diamond to stop |  | 8.77193 | g/cm² |  | 2.50627 | cm | radius | 0.015 |  | m |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Steel penetration |  | 76.0726 | cm | or | 608.581 | g/cm² | velocity | 10000 |  | m/s |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Armor pen |  | 18.2574 | cm | or | 36.5148 | g/cm² | Density | 4.5 | g/cm3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Diamond pen |  | 7.30297 | cm | or | 25.5604 | g/cm² | Length | 31.438 | cm |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | L/W ratio | 10.4793 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | kinetic energy = 0.5 * mass * velocity2 |  |  | 0.4 | MJ |  |  |  |  | Small missile |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | 0.00795775 | MJ/cm² |  |  |  | mass | 20 | kg |  | 0.6 | cs |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Mass of steel to stop |  | 3.07692 | g/cm² |  | 0.384615 | cm | caliber | 80 | mm |  | 0.4 | MJ |  | 0.222222 |  |  |  |  |  |  |  |  |  |
|  |  | Mass of carbon fiber to stop |  | 0.547945 | g/cm² |  | 0.273973 | cm | velocity | 0.2 | km/s |  | 1.66667 | pen/cs |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Mass of diamond to stop |  | 0.0701754 | g/cm² |  | 0.0200501 | cm | radius | 0.04 |  | m |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Steel penetration |  | 4.16667 | cm | or | 33.3333 | g/cm² | velocity | 200 |  | m/s |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Armor pen |  | 1 | cm | or | 2 | g/cm² | Density | 4.5 | g/cm3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Diamond pen |  | 0.4 | cm | or | 1.4 | g/cm² | Length | 88.4194 | cm |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | L/W ratio | 11.0524 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | kinetic energy = 0.5 * mass * velocity2 |  |  | 0.125 | MJ |  |  |  |  | Monolame |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | 159155 | MJ/cm² |  |  |  | mass | 1 | kg |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Mass of steel to stop |  | 0.961538 | g/cm² |  | 0.120192 | cm | caliber | 0.01 | mm |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Mass of carbon fiber to stop |  | 0.171233 | g/cm² |  | 0.0856164 | cm | velocity | 0.5 | km/s |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Mass of diamond to stop |  | 0.0219298 | g/cm² |  | 0.00626566 | cm | radius | 5e-06 |  | m |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Steel penetration |  | 208.333 | cm | or | 1666.67 | g/cm² | velocity | 500 |  | m/s |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Armor pen |  | 50 | cm | or | 100 | g/cm² | Density | 4.5 | g/cm3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Diamond pen |  | 20 | cm | or | 70 | g/cm² | Length | 2.82942e+08 | cm |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | L/W ratio | 282942121052 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Deg |  | Energy |  | Steel pen |  |  |  | Energy density |  |  |  | Stopped by |  | AP |  | Stopped by |  |  |  |  |  |  |  |  |
|  | 1 | Pistol | 5 | kJ | 1.5 | cm |  |  | 20 | kJ/cm² |  |  | Carbon clothes |  | 3 |  | Combat suit |  |  |  |  |  |  |  |  |
|  | 2 | Rifle | 50 | kJ | 4 | cm |  |  | 72 | kJ/cm² |  |  | Suit |  | 8 |  | Ares armor |  |  |  |  |  |  |  |  |
|  | 3 | Gatling | 0.5 | MJ | 8 | cm |  |  | 143.239 | kJ/cm² |  |  | Ares armor |  | 3 |  | Exosuit |  |  |  |  |  |  |  |  |
|  | 4 | PDC | 4.5 | MJ | 19.7642 | cm |  |  | 358.099 | kJ/cm² |  |  | Exosuit |  | 4 |  | Power armor |  |  |  |  |  |  |  |  |
|  |  | Needler | 0.5 | MJ | 42 | cm |  |  | 64000 | kJ/cm² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Coilgun S | 5 | MJ | 72 |  |  |  | 64000 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | 5 | Tank | 20 | MJ | 39.5285 | cm |  |  | 1145.92 | kJ/cm² |  |  | Power armor |  | 5 |  | Mech |  |  |  |  |  |  |  |  |
|  | 6 | Coilgun L | 50 | MJ | 100 | cm |  |  | 25000 | kJ/cm² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Fracture | kJs |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Severe | MJs |  | 0.005 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Catastrophic | GJs |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | kinetic energy = 0.5 * mass * velocity2 |  |  | 5 | MJ |  |  |  |  | Needler |  |  |  |  |  | COILGUN stats |  |  |  |  |  |  |  |  |  |
|  |  |  |  | 636.62 | MJ/cm² |  |  |  | mass | 0.1 | kg |  |  |  |  | L/W ratio | 3 to 10 |  |  |  |  |  |  |  |  |
|  |  | Mass of steel to stop |  | 38.4615 | g/cm² |  | 4.80769 | cm | caliber | 1 | mm |  |  |  |  | Density | 1 to 20 |  |  |  |  |  |  |  |  |
|  |  | Mass of carbon fiber to stop |  | 6.84932 | g/cm² |  | 3.42466 | cm | velocity | 10 | km/s |  |  |  |  | Barrel length | L = v² / 2a |  |  | L = barrel length (m) |  |  |  |  |  |
|  |  | Mass of diamond to stop |  | 0.877193 | g/cm² |  | 0.250627 | cm | radius | 0.0005 |  |  | m |  |  |  |  |  |  | v = exit velocity (m/s) |  |  |  |  |  |
|  |  | Steel penetration |  | 131.762 | cm | or | 1054.09 | g/cm² | velocity | 10000 |  |  | m/s |  |  |  |  |  |  | a = average acceleration (m/s²) |  |  |  |  |  |
|  |  | Armor pen |  | 31.6228 | cm | or | 63.2456 | g/cm² | Density | 3 | g/cm3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Diamond pen |  | 12.6491 | cm | or | 44.2719 | g/cm² | Length | 4244.13 | cm |  |  |  |  | E = 1/2 LI² |  |  |  | E = energy stored in magnetic field (Joules) |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | L/W ratio | 42441.3 |  |  |  |  |  |  |  |  |  | L = inductance of the coil (Henrys) |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | I = current through the coil (Amps) |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | L ≈ μ0  N² A / l |  |  |  | μ0​=4π⋅10−7H/m |  |  |  |  |  |
|  |  |  | 500 | 0.5 | MJ |  |  |  |  | Sniper |  |  |  |  |  |  | μ0​= | 1.25664e-06 | H/m | N = number of turns |  |  |  |  |  |
|  |  |  |  | 63662 | kJ/cm² |  |  |  | mass | 0.01 | kg |  |  |  |  |  |  |  |  | A = cross-sectional area of the coil (m²) |  |  |  |  |  |
|  |  | Mass of steel to stop |  | 3846.15 | g/cm² |  | 480.769 | cm | caliber | 1 | mm |  |  |  |  |  |  |  |  | l = length of the coil (m) |  |  |  |  |  |
|  |  | Mass of carbon fiber to stop |  | 684.932 | g/cm² |  | 342.466 | cm | velocity | 10 | km/s |  |  |  |  | Imax = 10^7 A |  |  |  |  |  |  |  |  |  |
|  |  | Mass of diamond to stop |  | 87.7193 | g/cm² |  | 25.0627 | cm | radius | 0.0005 |  |  | m |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Steel penetration |  | 41.6667 | cm | or | 333.333 | g/cm² | velocity | 10000 |  |  | m/s |  |  | P = B² / 2μ0 |  |  |  | P = Magnetic pressure inside the coil |  |  |  |  |  |
|  |  | Armor pen |  | 10 | cm | or | 20 | g/cm² | Density | 15 | g/cm3 |  |  |  |  |  |  |  |  | B = field strength |  |  |  |  |  |
|  |  | Diamond pen |  | 4 | cm | or | 14 | g/cm² | Length | 84.8826 | cm |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | L/W ratio | 848.826 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  | 25 | 25 | MJ |  |  |  |  | Tankbuster |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | 14.1471 | kJ/cm² |  |  |  | mass | 0.5 | kg |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Mass of steel to stop |  | 192.308 | g/cm² |  | 24.0385 | cm | caliber | 15 | mm |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Mass of carbon fiber to stop |  | 34.2466 | g/cm² |  | 17.1233 | cm | velocity | 10 | km/s |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Mass of diamond to stop |  | 4.38596 | g/cm² |  | 1.25313 | cm | radius | 0.0075 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Steel penetration |  | 76.0726 | cm | or | 608.581 | g/cm² | velocity | 10000 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Armor pen |  | 18.2574 | cm | or | 36.5148 | g/cm² | Density | 20 | g/cm3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Diamond pen |  | 7.30297 | cm | or | 25.5604 | g/cm² | Length | 14.1471 | cm |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | L/W ratio | 9.4314 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | kinetic energy = 0.5 * mass * velocity2 |  |  | 0.5 | MJ |  |  |  |  | Light coilgun |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | 63.662 | MJ/cm² |  |  |  | mass | 0.01 | kg |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Mass of steel to stop |  | 3.84615 | g/cm² |  | 0.480769 | cm | caliber | 1 | mm |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Mass of carbon fiber to stop |  | 0.684932 | g/cm² |  | 0.342466 | cm | velocity | 10 | km/s |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Mass of diamond to stop |  | 0.0877193 | g/cm² |  | 0.0250627 | cm | radius | 0.0005 |  | m |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Steel penetration |  | 41.6667 | cm | or | 333.333 | g/cm² | velocity | 10000 |  | m/s |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Armor pen |  | 10 | cm | or | 20 | g/cm² | Density | 10 | g/cm3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Diamond pen |  | 4 | cm | or | 14 | g/cm² | Length | 127.324 | cm |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | L/W ratio | 1273.24 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | kinetic energy = 0.5 * mass * velocity2 |  |  | 200 | MJ |  |  |  |  | Coilgun |  |  |  |  |  |  | E= | 1.41272e+06 | J |  |  |  |  |  |  |
|  |  |  |  | 28.2942 | MJ/cm² |  |  |  | mass | 1 | kg |  | 60 | cs |  |  | I= | 100000 | A |  |  |  |  |  |  |
|  |  | Mass of steel to stop |  | 1538.46 | g/cm² |  | 192.308 | cm | caliber | 30 | mm |  | 200 | MJ |  |  | L= | 2.82545e-05 | H |  |  |  |  |  |  |
|  |  | Mass of carbon fiber to stop |  | 273.973 | g/cm² |  | 136.986 | cm | velocity | 20 | km/s |  | 0.608581 | pen/cs |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Mass of diamond to stop |  | 35.0877 | g/cm² |  | 10.0251 | cm | radius | 0.015 |  | m |  |  |  |  | N= | 100 | turns |  |  |  |  |  |  |
|  |  | Steel penetration |  | 152.145 | cm | or | 1217.16 | g/cm² | velocity | 20000 |  | m/s |  |  |  |  | A= | 0.000706858 | m² |  |  |  |  |  |  |
|  |  | Armor pen |  | 36.5148 | cm | or | 73.0297 | g/cm² | Density | 4.5 | g/cm3 |  |  |  |  |  | l= | 0.31438 | m | sweet spot = rod length +/- 50% |  |  |  |  |  |
|  |  | Diamond pen |  | 14.6059 | cm | or | 51.1208 | g/cm² | Length | 31.438 | cm |  |  |  |  |  | r= | 0.015 | m | inner radius |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | L/W ratio | 10.4793 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | v= | 1680.91 | m/s | velocity boost |  | v=sqrt( 2E/m ) |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | a= | 4.49368e+06 | m/s | accel per coil |  | a = v² / 2l |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | SUMMARY > not a limiting factor |  |  |  |  |  |  |
| Taille |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 0 | kinetic energy = 0.5 * mass * velocity2 |  |  | 625 | kJ |  |  |  |  | Poing metahumain |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | 1.98944 | kJ/cm² |  |  |  | mass | 20 | kg |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Nanofiber mass needed to stop |  | 6250 | g |  |  |  | caliber | 200 | mm |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Mass of steel to stop |  | 4.80769 | g/cm² |  | 0.600962 | cm | velocity | 0.25 | km/s |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Mass of carbon fiber to stop |  | 0.856164 | g/cm² |  | 0.428082 | cm | radius | 0.1 |  | m |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Mass of diamond to stop |  | 0.109649 | g/cm² |  | 0.0313283 | cm | velocity | 250 |  | m/s |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Steel penetration |  | 3.29404 | cm | or | 26.3523 | g/cm² | Density | 10 | g/cm3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Armor pen |  | 0.790569 | cm | or | 1.58114 | g/cm² | Length | 6.3662 | cm |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | L/W ratio | 0.31831 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

## Kinetic2

|  |  |  |  |  |  |  |  |  |  |  |  |  |  | kJ | g | km/s |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | Damage | AP | Range | Size | Ammo | Clip | Notes |  |  | Damage | AP | Notes | Energy | Mass | Speed |
| Firearms | Pistol | 1 x3 |  | Short | -2 | 5mm | 30 | Equivalent to M16 | Bullets | 5mm | 1 |  |  | 5 | 10 | 1 |
|  | SMG | 1 x6 |  | Short | -1 | 5mm | 50 |  |  | 10mm | 2 |  |  | 50 | 50 | 1.5 |
|  | Assault rifle | 2 x3 |  | Medium | -1 | 10mm | 30 |  |  | 20mm | 3 |  |  | 500 | 400 | 1.5 |
|  | Revolver | 2 |  | Short | -2 | 10mm | 10 |  |  | 40mm | 4 |  |  | 5k | 1k | 3 |
|  | Gatling | 2 x6 |  | Medium | 0 | 10mm | 100 |  |  | 50mm | 5 |  |  | 20k | 4k | 3 |
|  | Assault cannon | 3 x3 |  | Medium | 1 | 20mm | 30 |  | Mods | 5mm AP | 1 | 1 |  |  |  |  |
|  | DCA | 4 x3 |  | Long | 2 | 40mm | 100 |  |  | 10mm AP | 1 | 4 |  |  |  |  |
|  | Tank | 5 |  | Long | 3 | 50mm |  |  |  | 20mm AP | 2 | 9 |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  | 40mm AP | 3 | 20 |  |  |  |  |
|  |  | Damage | AP | Range | Size | Ammo | Clip |  |  | 50mm AP | 4 | 40 |  |  |  |  |
| Coilguns | Needler | 0 |  | Medium | -2 | 0mm | 100 | 20cm barrel |  | Bolt | +1/-1 |  | More body damage, less armor damage |  |  |  |
|  | Sniper | 3+ | 40 | ∞ | 0 | 1mm | 100 | 1m barrel |  | Smart | - |  | Can curve, shot with Processor |  |  |  |
|  | Tank buster | 5+ | 40 | ∞ | 1 | 15mm | 100 | 4m barrel |  | Gel | - | N/A | Temporary damage, ignores armor |  |  |  |
|  | Artillery | 7+ | 75 | ∞ | 2 | 30mm | 100 | 10m barrel |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | Rods | 0mm | 0 | 0 | micrometer needle, delivers substance | e-9 | e-13 | 10 |
|  |  | Damage | AP | Range | Size |  |  |  |  | 1mm | 3+ | 40 |  | 500 |  | 10 |
| Melee | Magknife | 1+ | 5x | 1m | -2 |  |  |  |  | 15mm | 5+ | 40 |  | 5k | 100 | 10 |
|  | Monoblade | 2+ | 10x | 1m | 0 |  |  |  |  | 30mm | 7+ | 75 |  | 50k | 1k | 10 |
|  | Monowire | 0+ | 20x | 5m | -2 |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | Shells | 12mm | 5+ | N/A | No damage against armor. Slug separates into shrapnel before impact |  |  |  |
|  |  | Damage | AP | Range | Size | Ammo | Clip |  |  | 45mm | * | * | Delivers grenade |  |  |  |
| Others | Shotgun | 5+ | N/A | Close | -1 | 12mm | 5 |  |  |  |  |  |  |  |  |  |
|  | Launcher | * | * | Medium | -1 | 45mm | 1 |  |  |  |  |  |  |  |  |  |
|  | Nail gun | 1 |  | Close | -2 | Nail |  |  |  |  |  |  |  |  |  |  |
|  | M16 rate of fire | 800 | rpm |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 13.3333 | rps |  |  |  |  |  |  |  |  |  |  |  |  |  |

## Armor2

|  |  | Armor |  | cm | kg |  |  | kJ/cm² | kJ/cm² | m² | cm | g/cm² |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | Kinetic | Thermal | Layers | Mass | Coverage | Material | Tens | Heat | Area | Thick | Area mass |
| External | Clothes |  | 1 | 1 | 0.1 | Full - head,hands | Carbon |  | 0.15 | 2 | 0.0075 | 0.005 |
|  | CNT clothes | 1 | 2 | 1 | 1 | Full - head | CNT | 7.5 | 3 | 2 | 0.075 | 0.05 |
|  | Kevlar vest | 1 | 3 | 2 | 10 | Torso | Kevlar | 8 | 10 | 0.24 | 2 | 4.16667 |
|  | Combat suit | 2 x3 | 4 | 2 | 10 | Full | CNT+ | 150 | 100 | 2 | 0.75 | 0.5 |
|  | Nano-armor (online) | 3 x2 | 4 | 5 | 10 | Full | RCNT | 1000 | 150 | 0.3 | 5 | 3.33333 |
|  | offline | 1 x3 | 2 | 1 |  | Full | CNT+ | 15 | 5 | 2 | 0.075 | 0.05 |
|  | Ares armor | 3 x2 | 4 | 5 | 50 | Full - joints | CNT+ | 1000 | 300 | 1.5 | 5 | 3.33333 |
|  | Exosuit | 3 x2 | 4 | 10 | 500 | Full | CNT | 1000 | 90 | 5 | 10 | 6.66667 |
|  | Power armor | 4 | 5 | 30 | 2000 | Full | CNT+ | 6000 | 3000 | 5 | 30 | 26.6667 |
|  |  | Kinetic |  | Layers | Mass | Coverage | Material | Tens | Heat | Area | Thick | Area mass |
| Dermal | Flesh |  | 0 | 1 |  | Full | Water |  | 0.03 | 2 |  |  |
|  | Synthskin |  | 1 | 1 | 0.1 | Full | Carbon |  | 0.15 | 2 | 0.01 | 0.005 |
|  | Dermal armor | 2 | 3 | 2 | 4 | Full | CNT+ | 60 | 40 | 2 | 0.3 | 0.2 |
|  | Cyber plating | 3 | 4 | 2 | 20 | Full - joints | CNT+ | 400 | 300 | 1.5 | 2 | 1.33333 |
|  |  | Kinetic |  | Layers | Mass | Coverage | Material | Tens | Heat | Area | Thick | Area mass |
| Internal | Bone |  | 2 | 1 | 4 |  | Bone |  | 1.89 | 0.5 |  | 1 |
|  | Carbon bones | 3 | 3 | 3 | 10 |  | CNT+ | 600 | 300 | 0.5 | 3 | 2 |
|  |  | Kinetic |  | Layers | Mass | Coverage | Material | Tens | Heat | Area | Thick | Area mass |
| Shields | Riot shield | 3 | 4 | 3 | 5 | Head + Torso + 1 Arm | CNT+ | 600 | 300 | 0.25 | 3 | 2 |
|  | Storm shield | 4 | 4 | 30 | 100 | 1 Arm + (Head or Torso) | CNT+ | 6000 | 300 | 0.5 | 30 | 20 |

## Laser2

|  |  |  |  |  | Range |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Damage | AP | 50 cm | 1m | 5m | 10m | 30m | 100m | 300m | 1km |  |  |  |  |  |  |  |
| Pistol | x5 | 10k < 2 | 1k < 5 | 100 < 20 | 10 < 50 | 1 < 200 |  |  |  |  |  |  |  |  |  |  |
| Rifle | x2 |  |  | 10k < 10 | 1k < 30 | 100 < 100 | 10 < 300 | 1 < 1k |  |  |  |  |  |  |  |  |
| Cannon | x1 |  |  |  | 10k < 10 | 1k < 50 | 100 < 100 | 10 < 500 | 1 < 1k |  |  |  |  |  |  |  |
|  |  |  |  |  | Damage < Penetration |  |  |  |  |  |  |  |  |  |  |  |
| Cannon |  |  |  |  | 10k | 1k | 100 | 10 | 1 |  |  |  |  |  |  |  |
| Turret |  |  |  |  |  |  |  | 10k | 1k | 100 | 10 | 1 |  |  |  |  |
|  |  |  |  |  |  | Range |  |  |  |  |  |  |  |  |  |  |
| Material | Armor | 10 cm | 30 cm | 1m | 3m | 10m | 30m | 100m | 300m | 1km | 5km | 10km | 100km |  |  |  |
| Nanotube |  |  |  |  | 20 | 2 | 0.2 |  |  |  |  |  |  |  |  |  |
| Steel |  |  |  |  | 40 | 4 | 0.4 |  |  |  |  |  |  |  |  |  |
| Bones |  |  |  |  | 100 | 10 | 1 |  |  |  |  |  |  |  |  |  |
| Clothes |  |  |  |  | 200 | 20 | 2 |  |  |  |  |  |  |  |  |  |
| Meat |  |  |  |  |  | 300 | 30 | 3 |  |  |  |  |  |  |  |  |
| Paper |  |  |  |  |  |  | 300 | 30 |  |  |  |  |  |  |  |  |
| Max (ratio 10k) |  | 0.05 | 0.5 | 5 | 20 | 50 | 200 | 500 | 2000 |  |  |  |  |  |  |  |
| Pulse intensity (kJ/cm²) |  | e7 | e6 | e5 | e4 | e3 | e2 | e1 | 1 | e-1 | e-2 | e-3 | e-5 |  |  |  |
|  |  |  |  |  |  | Range |  |  |  |  |  |  |  |  |  |  |
| Material | Armor | 10 cm | 30 cm | 1m | 3m | 10m | 30m | 100m | 300m | 1km | 3km | 10km | 100km |  |  |  |
| Nanotube | 10 |  |  |  | 10 | 1 | 0.1 |  |  |  |  |  |  | 100 | 10 | 1 |
| Steel | 5 |  |  |  | 20 | 2 | 0.2 |  |  |  |  |  |  | 50 | 5 | 2 |
| Bones | 2 |  |  |  | 50 | 5 | 0.5 |  |  |  |  |  |  | 1 | 2 | 5 |
| Clothes | 1 |  |  |  | 100 | 10 | 1 |  |  |  |  |  |  | 0.1 | 1 | 10 |
| Meat | 0.1 |  |  |  |  | 100 | 10 | 1 |  |  |  |  |  | 0.01 | 0.1 | 100 |
| Max (ratio 10k) |  | 0.1 | 0.5 | 5 | 10 | 50 | 100 | 500 | 1000 | 5k | 10k | 50k | 100k |  |  |  |
| Pulse intensity (kJ/cm²) |  | e7 | e6 | e5 | e4 | e3 | e2 | e1 | 1 | e-1 | e-2 | e-3 | e-5 |  |  |  |
|  |  |  |  | Range |  |  |  |  |  |  |  |  |  |  |  |  |
|  | 30 cm | 1m | 3m | 10m | 30m | 100m | 300m | 1km |  |  |  |  |  |  |  |  |
| Pistol | 10k < 0.1 | 1k < 0.5 | 100 < 1 | 10 < 5 | 1 < 10 |  |  |  |  |  |  |  |  |  |  |  |
| Max damage | 1 | 5 | 10 | 50 | 100 | 500 | 1k | 5k |  |  |  |  |  |  |  |  |
| Range | 30 cm | 1m | 3m | 10m | 30m | 100m | 300m | 1km |  |  |  |  |  |  |  |  |
| Rifle | 1M |  |  | 1k | 100 | 10 | 1 | 0.1 |  |  |  |  |  |  |  |  |
| Max damage | 0.1 | 1 | 5 | 10 | 50 | 100 | 500 | 1k |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  | Range (m) |  |  |  |  |  |  |  |  |  |  |
| IR cannon | 0.1 | 1 | 5 | 10 | 15 | 20 | 30 | 40 | 50 | 100 | 500 | 1000 | 5000 | 10000 |  |  |
| vacuum | 12 | 10 | 9 | 8 |  |  |  |  | (7) | (6) | 5 | 4 | 3 | 2 |  |  |
| air | 12 | 10 | 9 | (7) | (6) | 5 | 4 | 3 | 2 |  |  |  |  |  |  |  |
| water |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| max kW/cm² (vacuum) | 11 | 9 | 8 | 7 |  |  |  |  | 6 | 5 | 4 | 3 | 2 | 1 |  |  |
| max kW/cm² (air) | 11 | 9 | 8 | 6 | 5 | 4 | 3 | 2 | 1 | -5 |  |  |  |  |  |  |
| max kW/cm² (water) | 10 | -1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  | Range (m) |  |  |  |  |  |  |  |  |  |  |
| Green cannon | 0.1 | 1 | 5 | 10 | 15 | 20 | 30 | 40 | 50 | 100 | 500 | 1000 | 5000 | 10000 |  |  |
| vacuum | 12 | 10 | 9 | 8 |  |  |  |  | (7) | (6) | 5 | 4 | 3 | 2 |  |  |
| air | 12 | 10 | 9 | 8 |  |  |  |  | (7) | (6) | 5 | 4 | 2 | 1 |  |  |
| water | 11 | 8 | -1 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| max kW/cm² (vacuum) | 11 | 9 | 8 | 7 |  |  |  |  | 6 | 5 | 4 | 3 | 2 | 1 |  |  |
| max kW/cm² (air) | 11 | 9 | 8 | 7 |  |  |  |  | 6 | 5 | 4 | 3 | 1 | 0 |  |  |
| max kW/cm² (water) | 10 | 7 | -2 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Rifle | 11 | 9 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | -5 |  |  |  |  |  |  |
|  |  |  |  |  | Exo | Suit | Steel | Bones | Clothes |  |  |  |  |  |  |  |
| Cannon | 12 | 10 | 9 | 7 | 6 | 5 | 4 | 3 | 2 | -4 |  |  |  |  |  |  |
|  |  |  |  |  |  | Exo | Suit | Steel | Bones |  |  |  |  |  |  |  |
|  | 0.1 | 1 | 5 | 10 | 15 | 20 | 30 | 40 | 50 | 100 | 500 | 1000 | 5000 | 10000 |  |  |
| IR pistol, 10ms | 7 | 5 | 4 | 3 |  | 2 |  |  | 1 | 0 | -1 |  |  |  |  |  |
| max kW/cm² | 6 | 4 |  | 2 |  | 1 |  |  | 0 | -1 | -2 | -3 | -4 | -5 |  |  |
| Green pistol | 0.1 | 1 | 5 | 10 | 15 | 20 | 30 | 40 | 50 | 100 | 500 | 1000 | 5000 | 10000 |  |  |
| vacuum | (9) | (7) | (6) | 5 |  |  |  |  | 4 | 3 | 2 | 1 | 0 | -1 |  |  |
| air | (9) | (7) | (6) | 5 |  |  |  |  | 4 | 3 | 2 | 1 | -1 | (-2) |  |  |
| water | (8) | (-4) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| max kW/cm² (vacuum) | e8 | e6 | e5 | 30k |  | e4 | 3k | 2k | e3 | e2 | e1 | e0 | e-1 | e-2 |  |  |
| max kW/cm² (air) | e8 | e6 | e5 | 30k |  | e4 | 3k | 2k | e3 | e2 | e1 | e0 | e-2 | e-3 |  |  |
|  |  |  |  |  |  | Range (m) |  |  |  |  |  |  |  |  |  |  |
| IR rifle | 0.1 | 1 | 5 | 10 | 15 | 20 | 30 | 40 | 50 | 100 | 500 | 1000 | 5000 | 10000 |  |  |
| vacuum | (11) | (9) | (8) | (7) |  |  |  |  | (6) | 5 | 4 | 3 | 2 | 1 |  |  |
| air | (11) | (9) | (7) | (6) | 5 | 4 | 3 | 2 | 1 | -5 |  |  |  |  |  |  |
| water | (9) | -1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| max kW/cm² (vacuum) | e10 | e8 | e7 |  | e6 |  |  |  | e5 | e4 | e3 | e2 | e1 | e0 |  |  |
| max kW/cm² (air) | e10 | e8 | e6 | e5 | e4 | e3 | e2 | e1 | e0 | e-6 | e-50 | e-100 |  |  |  |  |
|  |  |  |  |  |  | Range (m) |  |  |  |  |  |  |  |  |  |  |
| Green rifle | 0.1 | 1 | 5 | 10 | 15 | 20 | 30 | 40 | 50 | 100 | 500 | 1000 | 5000 | 10000 |  |  |
| vacuum | (11) | (9) | (8) | (7) |  |  |  |  | (6) | 5 | 4 | 3 | 2 | 1 |  |  |
| air | (11) | (9) | (8) | (7) |  |  |  |  | (6) | 5 | 4 | 3 | 1 | 0 |  |  |
| water | (11) | (7) | (-2) |  |  |  |  |  |  |  |  |  |  |  |  |  |
| max kW/cm² (vacuum) | e10 | e8 | e7 | 5xe6 |  | e6 |  |  | e5 | e4 | e3 | e2 | e1 | e0 |  |  |
| max kW/cm² (air) | e10 | e8 | e7 | 5xe6 |  | e6 |  |  | e5 | e4 | e3 | e2 | e0 | e-1 |  |  |
|  |  |  |  |  | Range |  |  |  |  |  |  |  |  |  |  |  |
|  | 10 cm | 50 cm | 1m | 5m | 20m | 50m | 100m | 500m | 1km | 5km | 10km | 50km | 100km |  |  |  |
| Normal range | -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |  |  |  |
| Thermal armor pierced | Exo | Suit | Steel | Bones | Clothes | Flesh | Paper |  |  |  |  |  |  |  |  |  |
| Pulse intensity (kJ/cm²) | e5 | e4 | e3 | e2 | e1 | 1 | e-1 | e-2 | e-3 | e-4 | e-5 | e-6 |  |  |  |  |
| Suit |  |  | 100 | 15 | 1 | 0.1 | 0.01 | 0.001 |  |  | #DIV/0! |  |  |  |  |  |
| Steel |  |  | 200 | 30 | 2 | 0.2 | 0.02 | 0.002 |  |  | #DIV/0! |  |  |  |  |  |
| Bones |  |  | 1200 | 180 | 6 | 1.2 | 0.12 | 0.012 |  |  | #DIV/0! |  |  |  |  |  |
| Modifiers | Range |  |  |  |  |  | Quick rules |  |  |  |  |  |  |  |  |  |
| Thermal armor | -T |  |  |  |  |  |  | Decide pulse rate |  |  |  |  |  |  |  |  |
| Good angle (1 hit) | +1 |  |  |  |  |  |  | Discard 0+ dice to aim |  |  |  |  |  |  |  |  |
| Perfect angle (2 hits) | +2 |  |  |  |  |  |  | Roll and substract evasion. If no hits, it's a miss |  |  |  |  |  |  |  |  |
| Rain | -2 |  |  |  |  |  |  | Apply modifiers and check range |  |  |  |  |  |  |  |  |
| Underwater | 10 cm |  |  |  |  |  |  |  | if range > 0, no effect |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  | else roll location, all pulses hit the same loc |  |  |  |  |  |  |  |
| Pulse rate | Range | Pulses | Clip |  |  |  |  | Each pulse vaporizes 1 cm of armor, or deals 1 damage to body |  |  |  |  |  |  |  |  |
| 1ms | Normal | 10 | 0.01 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 100µs | -1 | 50 | 0.01 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 10ms | +1 | 1 | 0.01 |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  | kg |  | cm | kW | MJ | nm | % |  |  |  |  |  |  |  |
| Caliber | Range | Size | Mass |  | LR | Power | Clip | Wav | Efficiency |  |  |  |  |  |  |  |
| Pistol | Normal | 0 | 1 |  | 5 | 10 | #VALUE! | 1064 | 50 |  |  |  |  |  |  |  |
| Rifle | +2 | 1 | 5 |  | 20 | 50 | #VALUE! | 1064 | 50 |  |  |  |  |  |  |  |
| Cannon | +3 | 2 | 10 |  | 20 | 100 | #VALUE! | 1064 | 50 |  |  |  |  |  |  |  |

## Materials

|  |  | g/cm3 | kJ/cm3 | kJ/g | kJ/g | j/g C | C | MPa⋅m1/2 | MPa | J | GPa |  | j/g |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | Density | Tens | vapo | melt | Heat cap | Melting point | Tough | Comp | Charpy | Young | Res | Absorption |  |
|  | Boron | 2.3 |  | 45.3 |  |  | 2076 |  |  |  |  |  |  |  |
|  | Lithium |  |  |  | 0 | 3.58 |  |  |  |  |  |  |  |  |
|  | Aluminium | 2.7 | 0.5 |  |  |  |  |  | 90 |  |  |  |  |  |
|  | Tungsten |  |  |  |  |  |  | 100 |  |  |  |  |  |  |
|  | Graphene aerogel | 0.16 |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Metallic hydrogen | 10 |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Graphite | 2 |  | 30 |  | 1 |  |  | 300 |  |  |  |  |  |
|  | Diamond | 3.5 | 2.8 | 30 | 2.7 | 0.6 | 4500 | 2 | 20000 |  | 1050 | 47.6324 |  | high thermal conductivity |
|  | Amorphous carbon |  |  |  |  | 1 |  |  |  |  |  |  |  |  |
| Heat | carbon–carbon | 1.8 | 5.6 |  |  |  |  |  |  |  |  |  |  | high thermal shock resistance and service temp, very low crack resistance |
|  | UHTCMC | 1.8 |  |  |  |  |  |  |  |  |  |  |  | ablative heat shield |
|  | Lithium metal | 0.5 |  |  | 4.77752 | 3.56 | 1342 |  |  |  |  |  |  |  |
| Structure | Steel | 8 | 0.45 | 7.5 | 0.75 | 0.5 | 1500 | 40 | 1000 | 50 | 200 | 5.0625e-07 |  |  |
|  | HSLA steel | 8 | 0.45 |  |  |  |  |  | 1500 | 200 | 200 | 5.0625e-07 |  |  |
|  | Titanium | 4.5 | 0.9 | 6.97 | 0.86736 | 0.52 | 1668 |  | 1400 |  |  |  |  |  |
|  | FeMnAlC steel | 8 | 1.5 |  |  |  |  |  | 1000 | 450 | 200 | 0.626876 |  |  |
|  | AF1410 steel | 8 | 1.6 |  |  |  |  | 150 | 1500 | 300 | 200 | 1.40925 |  | Anti fracture steel. Super tough. Submarines, spacecraft |
| Armor | Kevlar 29 |  | 3.6 |  |  |  |  |  |  |  |  |  | 100 | stops handgun |
|  | Kevlar 49 |  | 4 | 5 | 0.536 | 1.34 | 400 |  |  |  |  |  | 100 |  |
|  | Carbon / epoxy | 2 | 3.5 | 6 | 0.68 | 1.7 | 400 | 50 | 1800 |  | 220 | 1.84808 |  | Strong and lightweight |
|  | Forged composite | 1.5 | 5 |  |  |  |  |  | 1000 |  |  |  |  |  |
|  | Carbon nanotube | 1.5 | 100 | 60 | 6 | 1.5 | 4000 |  |  |  | 1000 | 1.25e-05 |  |  |
|  | Graphene |  | 130 | 25 | 2.5 | 1 | 2500 |  |  |  |  |  |  | High thermal and electrical conductivity |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  | Carbon nanotube polymer, ceramic plating, graphene aerogel |
| Fictional | CNT+ | 1.5 | 200 | 100 | 10 | 2 | 5000 |  |  |  | 1000 | 0.005 |  |  |
|  | UltraDenseCNT | 30 | 10 | 100 | 10 | 2 | 5000 |  |  |  |  |  |  |  |
|  | CNT steel | 8 |  |  |  |  |  |  |  |  |  |  |  |  |
|  | RadX |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Lithium+ | 1 |  |  | 10 | 5 | 2000 |  |  |  |  |  |  |  |

## Armor

|  | Armor | Vaporisation |  | Density |  | Vaporisation |  |  | avg | tensile | comp strength |  | Energy needed |  |  | Density |  |  |  | Toughness |  | Res | Resilience |  | Yield strength |  | Young mod |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Titanium | 6.97 | kJ/g | 4.51 | g/cm3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Aluminum |  |  | 2710 | (kg/m²) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Graphite | 29.6 | kJ/g | 2.26 | g/cm3 | 66.896 | kJ/cm3 |  |  |  |  |  |  |  |  | 2260 | kg/m3 |  |  |  |  |  |  |  |  |  |  |  |
|  | Boron | 45.3 | kJ/g |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Steel | 7.5 | kJ/g | 8 | g/cm3 | 60 | kJ/cm3 |  |  |  | 1000 | MPa | 1 | MJ/cm3 | 0.125 | MJ/g |  | 101700 |  |  |  |  | 1.40625 | kJ/cm3 | 750 | MPa | 200 | GPa |
|  | HSLA |  |  | 7.8 | g/cm3 |  |  |  | 975 | 450 | 1500 | MPa |  |  |  | 7800 | kg/m3 |  |  |  |  |  | 5.625 | kJ/cm3 | 1500 | MPa | 200 | GPa |
|  | Carbon | 29.6 | kJ/g | 5 | g/cm3 | 148 | kJ/cm3 |  |  |  | 1880 | MPa | 1.88 | MJ/cm3 | 0.376 | MJ/g |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Graphite |  |  | 2 | g/cm3 |  |  |  |  |  | 300 | MPa | 0.3 | MJ/cm3 | 0.15 | MJ/g |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Diamond | 29.6 | kJ/g | 3.5 | g/cm3 | 103.6 | kJ/cm3 |  | 11400 | 2800 | 20000 | MPa | 20 | MJ/cm3 | 5.71429 | MJ/g |  |  |  | 2 | MPa⋅m1/2 |  | 190.476 |  | 20000 | MPa | 1050 | GPa |
|  | Carbon fiber/steel |  |  | 8 | g/cm3 | 150 | kJ/cm3 |  | 5500 | 1000 | 10000 | MPa | 10 | MJ/cm3 | 1.25 | MJ/g |  | 0.7 | kJ/m2 | 6.63 | MPa⋅m1/2 |  | 250 | kJ/cm3 | 10000 |  | 200 |  |
|  | Carbon fiber/epoxy | 29.6 | kJ/g | 2 | g/cm3 | 150 | kJ/cm3 |  | 5250 | 7000 | 3500 | MPa | 3.5 | MJ/cm3 | 1.75 | MJ/g |  |  |  | 49.8 | MPa⋅m1/2 |  | 200 | kJ/cm3 | 3500 | MPa | 50 | GPa |
|  | AF1410 High Fracture-Toughness Steel |  |  |  |  |  |  |  | 1560 | 1620 | 1500 |  |  |  |  |  |  |  |  | 150 | MPa⋅m1/2 |  | 5.625 | kJ/cm3 | 1500 |  | 200 |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Modulus of resilience = Yield stress² / 2 (Young's modulus) |  |  |  |
|  | graphene aerogel |  | 0.16 | kg/m3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1000 |  |  |  |  |  |  |  |
|  | aerographite |  | 0.18 | kg/m3 |  |  |  |  |  |  |  |  |  |  |  | 1 | g/cm3 |  |  |  |  |  |  |  |  |  |  |  |
|  | Metallic hydrogen |  | 10 | kg/m3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1 | MPa |  |  |  |  | K I = σ β sqrt(π a) |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 54 |  | = | 1 | mJ/mm3 |  |  |  |  | Where: | KI | is the stress intensity |  |
|  |  |  |  | Boil |  | Vaporize |  | Carbon layer |  |  |  |  |  |  | 13 |  |  | = | 1000 | mJ/cm3 |  |  |  |  |  |  | factor in M P a / m or p s i / i n |  |
|  | Graphite | 60 | MJ/kg | 14.5 | MW/m² | 60 | MJ/kg | 5 |  |  | GW/m² | 0.5 | MW/cm² |  |  |  |  | = | 1 | J/cm3 |  |  |  |  |  | σ | is the applied stress in MPa or psi |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | = | 0.001 | GPa |  |  |  |  |  | β | is a dimensionless correction factor depends on specimen geometry. |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | a | is the crack length in meters or inches |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | MPa | 1 | 1 |  |  |  |  |  |
|  |  |  |  |  |  |  | Slope |  |  |  |  |  |  |  |  |  |  | kW/m² |  |  | mJ/mm3 |  |  |  |  |  |  |  |
|  |  | Heat resistance |  | Active cooling |  | 3 | 9 | 15 |  |  |  |  |  |  |  |  | passive cooling |  |  |  |  |  |  |  |  |  |  |  |
|  | RadX | 0.5 | MW/cm² | 0.35 | MW/cm² | 2.55 | 7.65 | 12.75 |  |  |  |  |  |  | Graphite with tin active cooling |  | 3.5 |  |  |  |  |  |  |  |  |  |  |  |
|  | Carbon plating | 0.5 | MW/cm² |  |  | 1.5 | 4.5 | 7.5 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Whipple shield |  | 1/10 thickness of hull |  |  |  |  |  |
|  |  | Impact strength |  |  | tensile str |  |  | tensile str |  |  |  |  |  |  |  |  |  |  |  |  |  |  | completely blocks 1 hit, then destroyed on that side |  |  |  |  |  |
|  | Kevlar | 80 | J/g |  | 3600 | Mpa |  | 3.6 |  |  | MJ/cm3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Carbon nanofiber | 100 | J/g |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 | Power armor |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | L | 3 | m |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | W | 1.5 | m |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | m | 2 | t |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | surface | 10 | m² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | area mass | 20 | g/cm² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | armor mass | 10 | g/cm² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | armor depth (carbon steel) | 5 | cm |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | armor depth (carbon epoxy) | 2.85714 | cm |  |  |  |  |  |  |  |  |  |  |  |  |  |  | steel |  |  |  |  |  |  |  |  |  |  |
|  | armor depth (composite) | 3.92857 | cm |  |  |  |  |  |  |  |  |  |  |  | specific heat |  |  |  | j/g C |  |  |  |  |  |  |  |  |  |
|  | comp str | 32.2 | MJ/cm² |  |  |  |  |  |  |  |  |  |  |  | melting point |  |  |  | C |  |  |  |  |  |  |  |  |  |
|  | heat res | 69 | kJ/cm² |  |  |  |  |  |  |  |  |  |  |  | heat res (melt) |  |  | 0 | kj/g |  |  |  |  |  |  |  |  |  |
|  | vaporize | 300 | kJ/cm² |  |  |  |  |  |  |  |  |  |  |  | heat res (vaporize) |  |  | 7.5 | kj/g |  |  |  |  |  |  |  |  |  |
|  | resilience (carbon) | 1000 | kJ/cm² |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 60 | kJ/cm3 |  |  |  |  |  |  |  |  |  |
| 3 | Ares armor |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | L | 1.7 | m |  |  |  |  |  |  |  |  |  |  |  |  |  |  | carbon fiber |  |  |  |  |  |  |  |  |  |  |
|  | W | 0.5 | m |  |  |  |  |  |  |  |  |  |  |  | specific heat |  |  | 1 | j/g C |  |  |  |  |  |  |  |  |  |
|  | m | 50 | kg |  |  |  |  |  |  |  |  |  |  |  | melting point |  |  | 3500 | C |  |  |  |  |  |  |  |  |  |
|  | surface | 2 | m² |  |  |  |  |  |  |  |  |  |  |  | heat res (melt) |  |  | 3.5 | kj/g |  |  |  |  |  |  |  |  |  |
|  | m | 0.05 | t |  |  |  |  |  |  |  |  |  |  |  | heat res (vaporize) |  |  | 30 |  |  |  |  |  |  |  |  |  |  |
|  | surface | 2 | m² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | area mass | 2.5 | g/cm² |  |  |  |  |  |  |  |  |  |  |  |  |  |  | diamond |  |  |  |  |  |  |  |  |  |  |
|  | armor depth (carbon) | 1.66667 | cm |  | stops rifle AP |  |  |  |  |  |  |  |  |  | specific heat |  |  | 0.5 | j/g C |  |  |  |  |  |  |  |  |  |
|  | tensile | 250 | kJ/cm² |  | stops 3 gatling bullets, 3/4 PDC round |  |  |  |  |  |  |  |  |  | melting point |  |  | 4500 | C |  |  |  |  |  |  |  |  |  |
|  | melt | 15.75 | kJ/cm² |  | stops laser pistol at 100m, laser rifle at 600m |  |  |  |  |  |  |  |  |  | heat res (melt) |  |  | 2.25 | kj/g |  |  |  |  |  |  |  |  |  |
|  | vaporize | 150 | kJ/cm² |  | Stops laser pistol at 30m |  |  |  |  |  |  |  |  |  | heat res (vaporize) |  |  | 30 | kj/g |  |  |  |  |  |  |  |  |  |
|  | resilience (Steel) | 9.375 | MJ/cm² |  |  |  |  |  |  |  |  |  |  |  | refractive index |  |  | 2.4 | kj/g |  |  |  |  |  |  |  |  |  |
|  | resilience (carbon) | 333.333 | kJ/cm² |  | stops rifle |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | suits ? |  |  |  |  |  |  |  |  |  |  |
| 3 | Nano-armor |  |  |  |  |  |  |  |  |  |  |  |  |  |  | refraction |  | 7 |  |  |  |  |  |  |  |  |  |  |
|  | L | 1.7 | m |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | W | 0.5 | m |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Flesh |  |  |  |  |  |  |  |  |  |  |
|  | m | 10 | kg |  |  |  |  |  |  |  |  |  |  |  | specific heat |  |  | 3 | J/g °C |  |  |  |  |  |  |  |  |  |
|  | surface | 2.2 | m² |  |  |  |  |  |  |  |  |  |  |  | vaporization |  |  | 100 | C |  |  |  |  |  |  |  |  |  |
|  | m | 0.01 | t |  |  |  |  |  |  |  |  |  |  |  | heat res (vaporize) |  |  | 0.3 | kJ/g |  |  |  |  |  |  |  |  |  |
|  | surface | 2 | m² |  |  |  |  |  |  |  |  |  |  |  | density |  |  | 0.1 | g/cm3 |  |  |  |  |  |  |  |  |  |
|  | area mass (reactive) | 1 | g/cm² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | armor depth (carbon) | 0.5 | cm |  | stops pistol AP |  |  |  |  |  |  |  |  |  |  |  |  | Bone |  |  |  |  |  |  |  |  |  |  |
|  | comp str | 730 | kJ/cm² |  | stops 14 rifle bullets, 1 gatling bullet, 1/3 PDC |  |  |  |  |  |  |  |  |  | specific heat |  |  | 1260 | J/kg K |  |  |  |  |  |  |  |  |  |
|  | heat res | 7 | kJ/cm² |  | stops laser pistol at 100m, laser rifle at 600m |  |  |  |  |  |  |  |  |  |  |  |  | 1.26 | J/g °C |  |  |  |  |  |  |  |  |  |
|  | vaporize | 30 | kJ/cm² |  | Stops laser pistol at 50m |  |  |  |  |  |  |  |  |  | vaporization |  |  | 1500 | C |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | heat res (vaporize) |  |  | 1.89 | kJ/g |  |  |  |  |  |  |  |  |  |
| 2 | Combat suit |  |  |  |  |  |  |  |  |  |  |  |  |  | density |  |  | 1000 | kg/m3 |  |  |  |  |  |  |  |  |  |
|  | L | 1.7 | m |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1 | g/cm3 |  |  |  |  |  |  |  |  |  |
|  | W | 0.5 | m |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | m | 5 | kg |  |  |  |  |  |  |  |  |  |  |  | Graphite |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | surface | 2.2 | m² |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.71 | J/g °C |  |  |  |  |  |  |  |  |  |
|  | m | 0.005 | t |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | surface | 2 | m² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | area mass | 0.25 | g/cm² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | armor depth (carbon) | 0.125 | cm |  | stops no AP |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | comp str | 182.5 | kJ/cm² |  | stops 3 rifle bullets, 1/2 gatling bullet |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | heat res | 1.75 | kJ/cm² |  | stops laser pistol at 200m, laser rifle at 1200m |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | vaporize | 7.5 | kJ/cm² |  | Stops laser pistol at 100m |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Thermal armor |  | Laser pistol |  | Laser rifle |  |  | Layers |  |  |  |  |  |
| 2 | Dermal armor |  |  |  |  |  |  |  |  |  |  |  |  |  | 0 | Flesh |  | 1500 | m | 9000 | m |  |  |  |  |  |  |  |
|  | m | 4 | kg |  |  |  |  |  |  |  |  |  |  |  | 1 | Bone |  | 200 | m | 1200 | m |  |  |  |  |  |  |  |
|  | m | 0.004 | t |  |  |  |  |  |  |  |  |  |  |  |  | Clothes |  | 200 | m | 1200 | m |  | 1 |  |  |  |  |  |
|  | surface | 2 | m² |  |  |  |  |  |  |  |  |  |  |  | 2 | Suit |  | 100 | m | 600 | m |  |  |  |  |  |  |  |
|  | area mass | 0.2 | g/cm² |  |  |  |  |  |  |  |  |  |  |  | 3 | Combat suit |  | 50 | m | 300 | m |  |  |  |  |  |  |  |
|  | armor depth (carbon) | 0.1 | cm |  | stops no AP |  |  |  |  |  |  |  |  |  | 4 | Armor |  | 30 | m | 180 | m |  | 2 |  |  |  |  |  |
|  | comp str | 146 | kJ/cm² |  | stops 2 rifle bullets, 1/2 gatling bullet |  |  |  |  |  |  |  |  |  |  | Power |  | 30 | m | 180 | m |  | 3 |  |  |  |  |  |
|  | heat res | 1.05 | kJ/cm² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | vaporize | 6 | kJ/cm² |  | Stops laser at 100m |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 | Carbon clothes |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | L | 1.7 | m |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | W | 0.5 | m |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | m | 1 | kg |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | surface | 2.2 | m² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | m | 0.001 | t |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | surface | 2 | m² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | area mass | 0.05 | g/cm² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | armor depth (carbon) | 0.025 | cm |  | stops no AP |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | comp str | 36.5 | kJ/cm² |  | stops 5 pistol bullets, 1/2 rifle bullet |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | heat res | 0.2625 | kJ/cm² |  | stops laser pistol at 500m, laser rifle at 3000m |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | vaporize | 1.5 | kJ/cm² |  | Stops laser pistol at 200m |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | Reinforced skeleton |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | m | 7 | kg |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | m | 0.007 | t |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | surface | 0.3 | m² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | area mass | 2.33333 | g/cm² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | armor depth (carbon) | 1.16667 | cm |  | stops rifle AP |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | armor depth (full diamond) | 0.666667 | cm |  | Stops gatling AP |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | comp str | 1.70333 | MJ/cm² |  | Stops gatling |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | heat res | 12.25 | kJ/cm² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | vaporize | 70 | kJ/cm² |  | Stops laser pistol at 30m |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ? | Bone | 1 | g/cm3 |  | Stops laser pistol at 200m |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | vaporize | 1.89 | kJ/cm² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 0 | Flesh | 0.1 | g/cm3 |  | Stops laser pistol at 1500m |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | vaporize | 0.03 | kJ/cm² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | Cyber plating |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | m | 30 | kg |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | m | 0.03 | t |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | surface | 2 | m² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | area mass | 1.5 | g/cm² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | armor depth (carbon) | 0.75 | cm |  | stops pistol AP |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | comp str | 1095 | kJ/cm² |  | stops 14 rifle bullets, 1 gatling bullet, 1/3 PDC |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | heat res | 7.875 | kJ/cm² |  | stops laser pistol at 100m, laser rifle at 600m |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | vaporize | 45 | kJ/cm² |  | Stops laser pistol at 50m |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | Exo suit |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | m | 500 | kg |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | m | 0.5 | t |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | surface | 5 | m² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | area mass | 10 | g/cm² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | area mass (armor) | 5 | g/cm² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | armor depth (carbon) | 2.5 | cm |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | armor depth (diamond) | 1.42857 | cm |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | comp str | 3650 | kJ/cm² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | vaporize | 300 | kJ/cm² |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Submarine hull |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | thick | 4 | cm |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | tensile str (AF1410) | 8 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | vaporize | 40 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

## Ship weapons

| State | Weapon | Cycles | Min |  | Range |  |  | Max |  |  | Damage |  | Power |  | Heat |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | Electron beam | 0 | 0 | cd | x | hits | / | 0 | cd | 10 |  | Thermal | 0 | GWm | 0 | GWm | Kills and damage elecctronics by radiation. Range of a small laser, ignores armor. |

## Exacting

|  | CHASSIS | Exacting |  | Mk 1 | CLASS |  | 2 | Fighter |  |  |  |  | SPEED |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | POWER |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  | Escort drone |  |  |  |  |  |  | Power |  |  | Thrust |  |  | deltaV |  |  | Ve |  |  | T |  | Battery | 80 | / | 80 | GWh |  |
|  | Width | 4 | m | Target |  |  | Current |  |  |  |  |  | ICF - Combat |  | 0 | TW |  | 0 | g |  | 5.61578 | gd |  | 7 | Mm/s |  | 0 | MN | Power balance | -3 | GW |  |  |  |
|  | Length | 60 | m | Wet mass | 40 | t | Wet mass |  |  | 40 |  |  | ICF - Cruise |  | 0 | TW |  | 0 | g |  | 16.0451 | gd |  | 20 | Mm/s |  | 0 | MN | Power budget | 26 | min |  |  |  |
|  | Surface | 992 | m² | Fuel mass | 20 | t | Fuel mass |  |  | 20 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Volume | 753.982 | m3 | Dry mass | 20 | t | Dry mass |  |  | 20 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | HEAT |  |  |  |  |  |
|  | Density | 0.0530516 |  | Mass ratio | 2 | t | Mass ratio |  |  | 2 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Heat sink | 10 | / | 10 | GW |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Heat balance | 0 | GW |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Heat budget | ∞ | cycles |  |  |  |
|  |  |  |  |  |  |  | Power |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Used mass | 100 | % | System | Mass |  | Max |  | State | Current |  | Heat |  | Notes |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Attributes |  |  |  |  |  |
|  |  | 15 | % | Propulsion | 3 | t | 9 | TW |  | 0 | TW | 0 | GWm | ICF (Inertial Confinement Fusion), Cixing magnetic nozzle |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Agility | 6 | / | 6 |  | Guimbaled thruster, retractable jets |
|  |  | 5 | % | Power | 1 | t | 5 | GW |  | 0 | GW | 0 | GWm | Fusion core |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Power | 5 | / | 5 |  | Last-gen fusion core |
|  |  | 5 | % | CPU | 1 | t | -1 | GW | 1 | -1 | GWm | 0 | GWm | CPU, autopilot, astronav |  |  |  |  |  |  |  |  |  |  |  |  |  |  | CPU | 5 | / | 5 |  | Military grade CPU and autopilot |
|  |  | 5 | % | Sensors | 1 | t | -1 | GW | 1 | -1 | GWm | 0 | GWm | Sensor suite, comms array |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Sensors | 3 | / | 3 |  |  |
|  |  | 10 | % | Cooling | 2 | t |  |  | 0 | / | 2 | 0 | GWm | 2 x foldable Ether wings |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 5 | % | Heat sink | 1 | t | 10 | GW | 1 |  |  |  |  | Lithium-based solution (2 x more W/kg) |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Radiator profile |  |  |  |  |  |
|  |  | 4 | % | Battery | 0.8 | t | 80 | GWh | 1 | 1 |  | 1 | GWm | Metallic hydrogen (100 Wh/kg ?) |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Tech | Ether |  |  |  |  |
|  |  | 0 | % | Life support | 0 | t |  |  | 1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Area mass | 42 | kg/m² |  |  |  |
|  |  | 15 | % | Structure | 3 | t |  |  |  |  |  | -2 | GWm | Carbon / Ether hull, heat resistant |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Surface | 47.619 |  |  | m² |  |
|  |  | 5 | % | Armor | 1 | t |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Panels | 2 |  |  |  |  |
|  |  | 31 | % | Payload | 6.2 | t |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | L/W ratio | 1 |  |  |  |  |
|  |  |  |  |  |  |  | Power |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Shape | Triangle |  |  |  |  |
| Hardpoints |  | 25 | % | Armament | 5 | t | Max |  | State | Current |  | Heat |  | Cycles | Range |  | /success |  |  |  |  | Max |  | Damage |  |  |  | Size | Length | 6.90066 |  |  | m |  |
| Turret (front) |  | 1 | x | 200ms UV Laser | 1 | t | -2 | GWm | 2 | 0 | GWm | 0 | GWm | 0 | 40 | km | + | 40 |  | / | 400 |  | km | 5 | Thermal |  |  | 2 | Width | 6.90066 |  |  | m |  |
| Turret (back) |  | 2 | x | 200ms IR Laser | 1 | t | -2 | GWm | 1 | -2 | GWm | 1 | GWm | 1 | 20 | km | + | 20 |  | / | 200 |  | km | 5 | Thermal | 1 | Heat | 2 | Efficiency | 212 | kW/m² |  |  |  |
| Spine |  | 1 | x | Light Coilgun | 2 | t | -2 | GWm | 1 | 0 | GWm | 0 | GWm | 0 | 1 | g |  | RS = relative speed |  |  |  |  |  | RS | Kinetic |  |  | 48 |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Armor profile |  |  |  |  |  |
| Rack |  |  |  | Falaq 1x100 | 0.2 | t | 0 | GWm |  |  |  | 0 | GWm | Single tube launcher, 1launch/min |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Coverage ratio | 5 |  | Front only |  |  |
|  | Ammo |  | 5 | missiles | 0.5 | t |  |  |  |  |  |  |  | 100kg guided slug |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Armor density | 5.04032 | kg/m² |  |  |  |
|  | Crew |  | 1 | Cockpit (1 seat) | 0.3 | t | 0 | GWm | 1 |  |  | 0 | GWm | Gyroscopic, ejectable |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Armor density | 0.504032 | g/cm² |  |  |  |
|  | Others |  |  | Atmospheric | 0.2 | t |  |  | 1 |  |  |  |  | Landing struts, atmospheric cooling, ? |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Material | Carbon |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Heat resistance | 0.5 | MW/cm² |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Compress. yield | 50 | MJ/cm² |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Slope modifier | 9 | (3 to 15) |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Heat needed | 2.26815 | MW/cm² |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Kinetic needed | 226.815 | MW/cm² |  |  |  |

## guns

|  |  | size | mass |  | Power (GW) |  |  | Heat | Barrel (m) |  | dimensions |  | m3 | density (t/m3) |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PDC | 40mm | 3 | 2 | t | 0.2 |  |  | 0.2 | 3 |  |  |  | 1 | 2 |  |  | kg/m3 |  |
|  | 76mm | 3 | 4 | t | 0.4 |  |  | 0.4 | 4 |  |  |  | 2 | 2 |  |  | kg/m3 |  |
|  | 100mm | 4 | 20 | t | 2 |  |  |  | 5.5 |  |  |  | 10 | 2 |  |  |  |  |
|  | 305mm | 5 | 50 | t | 5 |  |  |  | 15 |  |  |  | 25 | 2 |  |  |  |  |
|  | 400mm | 6 | 100 | t | 10 |  |  |  | 20 |  |  |  | 50 | 2 |  |  |  |  |
|  |  |  |  |  |  | Warheads |  |  |  |  |  |  |  |  |  |  |  |  |
| Missiles | Quassam 1 1x5 | 0 | 0.03 |  | 1 | 1 | x | 5 | kg | 0.03 | t / tube |  |  |  |  |  |  |  |
|  | Quassam 3 1x20 | 1 | 0.05 |  | 1 | 1 | x | 20 | kg | 0.05 | t / tube |  |  |  |  |  |  |  |
|  | Falaq 1x100 | 2 | 0.2 |  | 1 | 1 | x | 100 | kg | 0.2 | t / tube |  |  |  |  |  |  |  |
|  | Wasp 12x20 | 3 | 3 |  | 6 | 12 | x | 20 | kg | 0.25 | t / tube |  |  | multitube = +1 catégorie de mass/tube |  |  |  |  |
|  | Fateh 1x500 | 3 | 4 |  | 1 | 1 | x | 500 | kg | 4 | t / tube |  |  |  |  |  |  |  |
| SCODs | Astros 40x20 | 4 | 10 |  | 10 | 40 | x | 20 | kg | 0.25 | t / tube |  |  |  |  |  |  |  |
|  | Jobaria 240x20 | 5 | 60 |  | 40 | 240 | x | 20 | kg | 0.25 | t / tube |  |  |  |  |  |  |  |
|  | Pinaka 12x100 | 5 | 12 |  | 6 | 12 | x | 100 | kg | 1 | t / tube |  |  |  |  |  |  |  |
|  | Apocalypse 12x500 | 6 | 60 |  | 6 | 12 | x | 500 | kg | 5 | t / tube |  |  |  |  |  |  |  |
|  |  |  |  |  | Power |  |  | Heat |  |  | Length | Width | m3 | density (t/m3) |  |  |  |  |
| Lasers | Light laser | 3 | 1 | t | 1 | GW |  | 0.8 | GW |  | 4 | 4 | 64 | 0.015625 | 1kw/kg peak output, efficiency 20%, duty cycle 20%, | https://www.projectrho.com/public_html/rocket/spacegunconvent2.php#id--Laser_Cannon--Attack_Vector:_Tactical_Lasers |  |  |
| Railguns | Light railgun (keel) | 4 | 5 | t | 5 |  |  | 1 |  |  | 20 | 0.5 | 5 | 1 |  |  |  |  |
|  | Light railgun (turret) | 5 | 10 | t | 5 |  |  |  |  |  | 20x0.5x0.5 |  | 5 | 2 |  |  |  |  |
|  | Light coilgun (keel) | 4 | 2 | t | 10 |  |  | 2 |  |  | 20x0.5x0.5 |  | 5 | 0.4 | 40mm slugs, 20m barrel, 1 cycle/s ?, 0.4 t/m², 5 GW/t |  |  | RAILGUN |
|  | Railgun (keel) |  | 40 | t | 40 |  |  | 8 |  |  | 40 | 1 | 40 | 1 | 40m, 80mm slug |  |  | F = I * L * B *sinx |
|  | Coilgun (keel) |  | 16 | t | 80 |  |  | 16 |  |  | 40 | 1 | 40 | 0.4 | 40m, 80mm slug |  |  |  |
|  | Heavy railgun (keel) |  | 1.35 | kt | 6.75 | kGW |  |  |  |  | 150x3 |  | 1350 | 1 | 150m, 3m slugs, 1t/m², 1GW/t |  |  | F = Force |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | I = Current |
|  |  |  |  |  |  |  |  | dim | warhead |  |  |  |  |  |  |  |  | L = Distance between rails |
|  | Astros 40x180 |  | 10 |  |  |  |  |  |  |  |  |  |  |  |  |  |  | B = Magnetic Field |
|  | Pinaka 12x214 |  |  |  |  |  |  | 5m | 100kg |  |  |  |  |  |  |  |  |  |
|  | BM-21 40x122 |  | 14 |  |  |  |  | 7x2x3 | 2 rounds/s |  |  |  |  |  |  |  |  |  |
|  | Jobaria 240x107 |  |  |  |  |  |  |  | 2 rounds/s |  |  |  |  |  |  |  |  |  |
|  | Quassam 1 1x60 |  | 0.03 |  |  |  |  |  | 5kg |  |  |  |  |  |  |  |  |  |
|  | Quassam 2 1x150 |  | 0.04 |  |  |  |  |  | 10kg |  |  |  |  |  |  |  |  |  |
|  | Quassam 3 1x200 |  | 0.05 |  |  |  |  |  | 20kg |  |  |  |  |  |  |  |  |  |
|  | Falaq 1x333 |  | 0.25 |  |  |  |  |  | 120kg |  |  |  |  |  |  |  |  |  |
|  | Fateh |  | 3.5 |  |  |  |  |  | 500kg |  |  |  |  |  |  |  |  |  |

## Stratios

| CHASSIS | Stratios |  | Mk 1 | CLASS |  | 3 | Frigate |  |  |  |  |  | SPEED |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | POWER |  |  |  |  |  |  |  |  |  |  |  |  | 100 | % |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  | Role | Escort and patrol |  |  |  |  |  |  |  |  | Speed |  | Fuel |  | Accel |  |  | Power |  |  | Ve |  | Thrust |  |  | Battery | 200 | / | 400 | GWh |  |  |  |  |  |  |  |  | 10.8625 | % |
| Width | 15 | m | Target |  |  | Current |  |  |  |  |  |  | Combat |  | 0 | kms | D |  | 0 | g | 0 |  | TW |  | 7 | Mm/s | 0 | MN |  | Power balance | 128 | GWm |  |  |  |  |  |  |  |  |  |  |  |  |
| Length | 60 | m | Wet mass | 300 | t | Wet mass |  | 300 |  | t |  |  | Cruise |  | 0 | kms | H |  | 0 | g | 0 |  | TW |  | 20 | Mm/s | 0 | MN |  | Power budget | ∞ | min |  |  |  |  |  |  |  |  |  |  |  |  |
| Surface | 4050 | m² | Fuel mass | 100 | t | Fuel mass |  | 100 |  | t |  |  | AM drive |  | 0 | kms | A |  | 0 | g | 0 |  | TW |  | 50 | Mm/s | 0 | GN |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Volume | 10602.9 | m3 | Dry mass | 200 | t | Dry mass |  | 200 |  | t |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | HEAT |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Density | 0.0282942 |  | Mass ratio | 1.5 | t | Mass ratio |  | 1.5 |  |  |  |  | FUEL | D | 40 | % |  |  | H | 0 |  | % |  |  | A | 60 | % |  |  | Heat sink | 0 | / | 100 | GW |  | Armor layers |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  | deltaV | 31.5362 | gh |  |  |  | 0 |  | gd |  |  |  | 23.4644 | gd |  |  | Heat balance | -100 | GWm |  |  | Front |  | 2 |  |  | Hull points |  |  |  |  |
|  |  |  |  |  |  | Power |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Heat budget | ∞ | min |  |  | Side |  | 0 |  | 20 | / | 20 |  |  |  |
| Mass allowance | 100 | % | System | Mass |  | Max |  | State | Current |  |  | Heat |  | Notes |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Back |  | 0 |  |  |  |  |  |  |  |
|  | 20 | % | Main engine | 40 | t | 100 | TW |  | 0 | TW |  | 0 | GWm | ICF (Inertial Confinement Fusion), Cixing™ magnetic nozzle |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Attributes |  |  |  |  |  |  |  | Armor | Localisation |  |  | Status |  |  |
|  | 1 | % | Auxiliary engine | 2 | t | 100 | TW |  | 0 | TW |  | 0 | GWm | AM Beam drive (for long distance) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Agility | 5 | / | 5 |  | 1 | - | 1 | No | Sensors |  |  |  | 1 | % |
|  | 1 | % | Thrusters | 2 | t | 1 | GW |  | -1 | GW |  | 4 | GWm | Gimbaled engine, powerful side thrusters |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Power | 5 | / | 5 |  | 2 | - | 2 |  | Spine |  |  |  | 1 | % |
|  | 5 | % | Power | 10 | t | 50 | GW |  | 50 | GW |  | 10 | GWm | Brayton cycle fusion core |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | CPU | 5 | / | 5 |  | 3 | - | 4 |  | Turret (front) |  |  |  | 2 | % |
|  | 5 | % | CPU | 10 | t | -10 | GW | 1 | -10 | GWm |  | 1 | GWm | Military grade CPU |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Sensors | 4 | / | 4 |  | 5 | - | 6 |  | Thrusters |  |  |  | 1 | % |
|  | 5 | % | Sensors | 10 | t | -8 | GW | 1 | -8 | GWm |  | 1 | GWm | Sensor suite, comms array |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 7 | - | 7 | No | Structure |  |  |  | 5.43124 | % |
|  | 11 | % | Cooling | 22 | t |  |  | 2 | / | 2 |  | -110 | GWm | 2x foldable wing |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Radiator profile |  |  |  |  | 8 | - | 12.4312 |  | Turret (side) |  |  |  | 2 | % |
|  | 5 | % | Heat sink | 10 | t | 100 | GW | 1 | -1 | GWm |  | 1 |  | Lithium+™ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Tech | Ether dust |  |  |  | 14.4312 | - | 15.4312 |  | Rack |  |  |  | 2 | % |
|  | 2 | % | Battery | 4 | t | 400 | GWh | 1 | -2 |  |  | 2 | GWm | Metallic hydrogen |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Area mass | 40 | kg/m² |  |  | 16.4312 | - | 16.8312 |  | Ammo |  |  |  | 1.4 | % |
|  | 5 | % | Life support | 10 | t | 1 | GWm | 1 | -1 | GWm |  | 1 | GWm |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Surface | 550 |  |  | m² | 13.4312 | - | 13.4312 |  | Cargo |  |  |  | 1 | % |
|  | 10 | % | Structure | 20 | t |  |  |  |  |  |  | -10 | GWm | RadX™ (lightweight hull with ether cooling) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Panels | 2 |  |  |  | 17.8312 | - | 19.8312 |  | Sensors |  |  |  | 3 | % |
|  | 10 | % | Armor | 20 | t |  |  | Front % | 100 | 0 | % Side |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | L/W ratio | 1 |  |  |  | 20.8312 | - | 40.466 | No | Cooling |  |  |  | 20.6347 | % |
|  | 1.5 | % | Gyroscope | 3 | t | 1.5 | GWm | 1 | 0 |  |  | 0 |  | Increases agility (included) |  |  |  |  |  |  |  |  |  | Radius | 20 | m | 125.664 | m² |  | Shape | Triangle |  |  |  | 41.466 | - | 45.466 |  | Life support |  |  |  | 5 | % |
|  | 1 | % | Cargo | 2 | t |  |  |  |  |  |  |  |  | Current |  | 2 | t |  |  |  |  |  |  |  |  |  |  |  |  | Length | 23.4521 |  |  | m | 46.466 | - | 46.466 |  | Deck |  |  |  | 1 | % |
|  | 17.5 | % | Payload | 35 | t |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Width | 23.4521 |  |  | m | 47.466 | - | 47.466 |  | Quarters |  |  |  | 1 | % |
|  |  |  |  |  |  | Power |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Efficiency | 200 | kW/m² |  |  | 48.466 | - | 52.466 |  | CPU |  |  |  | 5 | % |
| Hardpoints | 12.5 | % | Armament | 25 | t | Max |  | State | Current |  |  | Heat |  | Cycles | Range |  |  |  |  |  |  | Max |  |  | Damage |  |  |  | Size |  |  |  |  |  | 53.466 | - | 57.466 |  | Heat sink |  |  |  | 5 | % |
| Turret (front) | 1 | x | 200 ms UV Laser | 8 | t | -8 | GWm | 1 | 0 | GWm |  | 0 | GWm | 0 | 160 | km | x | succes |  | / | 1600 |  | km |  | 5 | Thermal |  |  | 4 | Armor profile |  |  |  |  | 58.466 | - | 59.466 |  | Battery |  |  |  | 2 | % |
| Turret (side, 2) | 2 | x | 100 ms UV Laser | 2 | t | -2 | GWm | 2 | 0 | GWm |  | 0 | GWm | 0 | 20 | km | x | succes |  | / | 200 |  | km |  | 10 | Thermal |  |  | 2 | Coverage ratio | 1 |  | Front only |  | 60.466 | - | 64.466 |  | Power |  |  |  | 5 | % |
| Turret (wheel, 2) | 2 | x | 200ms  IR Laser | 2 | t | -2 | GWm | 2 | 0 | GWm |  | 0 | GWm | 0 | 20 | km | x | succes |  | / | 200 |  | km |  | 5 | Therm |  |  | 2 | Armor density | 4.93827 | kg/m² |  |  | 65.466 | - | 67.5688 |  | Gyroscope |  |  |  | 3.10281 | % |
| Spine | 1 | x | Light Coilgun | 2 | t | -2 | GWm | 1 | 0 | GWm |  | 0 | GWm | 0 | 1 | g |  | RS = relative speed |  |  |  |  |  |  | RS | Kinetic |  |  | 48 | Armor density | 0.493827 | g/cm² |  |  | 68.5688 | - | 69.5688 |  | Turret (wheel) |  |  |  | 2 | % |
| Rack (side, 2) | 2 | x | Falaq 1x100 | 0.4 | t | 0 | GWm |  |  |  |  | 0 | GWm | Single tube launcher, 1launch/min |  |  |  |  |  |  |  |  |  |  | RS | Kinetic |  |  | 1 | Material | Carbon |  |  |  | 70.5688 | - | 75 | No | Structure |  |  |  | 5.43124 | % |
| Ammo | 32 |  | Falaq | 3.2 | t | 100kg guided slug. 40g, 60gm, Agility 6 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Heat resistance | 0.5 | MW/cm² |  |  | 76 | - | 80 |  | Fuel |  |  |  | 5 | % |
|  | 1000 |  | Rods | 1 | t | 70mm semi-guided rod (1 kg, 1m long, titanium). Agility 1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Compress. yield | 50 | MJ/cm² |  |  | 81 | - | 81 | No | Sensors |  |  |  | 1 | % |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Slope modifier | 9 | (3 to 15) |  |  | 82 | - | 99 | No | Propulsion |  |  |  | 18 | % |
| Crew |  | 10 | Military quarters | 5 | t | Deck, small lounge, medbay, 5 cabins and cramped corridors |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Thermal armor | 2.22222 | MW/cm² |  |  | 100 | - | 100 | No | Propulsion |  |  |  | 1 | % |
|  |  |  | High-G deck | 0 | t | Decreases damage from high-g manoeuvers (gyroscopic seats + drugs) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Kinetic armor | 222.222 | MW/cm² |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  | Hibernation pods | 1 | t |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  | Autopilot |  | t | Fully autonomous, sentient AI owned by the corporate overlords |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Others |  |  | Atmospheric | 2 | t | Landing struts, atmospheric cooling, ?. RadX hull mitigates friction heat |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 5 | Repair spiders |  |  | Small g-resistant drone fitted with tools |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 5 | Recon drones |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  | Rover | 1 | t |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  | Laser sail | 1 | t | Foldable sail, attached manually to take the laser highway |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

## 20s refs

| nuclear power plant | 1 | GW |  |
| --- | --- | --- | --- |
| medium sized city | 1 | GW |  |
| Net electricity consumption worldwide | 25000 | TWh |  |
| .44 Magnum | 200 | J |  |
| M16 bullet | 5 | kJ |  |
| baseball bat | 53 | kJ |  |
| grenade MK3 | 1 | MJ | https://en.wikipedia.org/wiki/MK3_grenade |
| 1 kg of TNT | 4 | MJ |  |

## Cooling

|  |  | Mass |  | Cooling |  | surface |  | Specific area mass |  | Heat Capacity |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Radiator | RadX | 1 | t | 15 | GW | 50 | m² | 20 | kg/m3 | 300 | KW/m² | carbon nanotubes + aerographite + metallic hydrogen Ether dust cooling |
|  | Marangoni | 1 | t | 10 | GW | 33.3333 | m² | 30 | kg/m² | 300 | KW/m² |  |
|  | Ether | 1 | t | 5.04762 | GW | 23.8095 | m² | 42 | kg/m² | 212 | KW/m² |  |
|  | Buckytube | 1 | t | 7.21154 | GW | 24.0385 | m² | 41.6 | kg/m² | 300 | KW/m² |  |
|  | AV:T | 1 | t | 3.57 | GW | 10 | m² | 100 | kg/m² | 357 | KW/m² |  |
| Others | RadX hull | 10 | % | 3 | kW/m² | heat resistant, fragile |  |  |  |  |  | carbon nanotubes + aerographite + metallic hydrogen Ether dust cooling |
|  | Carbon / Ether hull | 15 | % | 2 | kW/m² | heat resistant |  |  |  |  |  |  |
| Heat sink | Heat sink (sodium) | 2 | t | 3 GW |  |  |  |  |  |  |  |  |
|  | Heat sink (lithium) | 1 | t | 5 GW |  |  |  |  |  |  |  |  |
|  | Heat sink TherMoss | 1 | t | 10 GW |  |  |  |  |  |  |  |  |

## Truman

| CHASSIS |  | Truman |  | Mk 1 | CLASS |  | 6 | Battleship |  |  |  |  | SPEED |  |  |  |  |  |  |  |  |  |  |  | POWER |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Power |  | Thrust |  | deltaV |  | Ve |  | T |  | Battery | 355 | / | 355 | GWh |  |
| Width |  | 110 | m | Target |  |  | Current |  |  |  |  |  | Esptein drive |  | 18 | kTW | 1.8916 | g | 7.51673 | gd | 19 | Mm/s | 1.89474 | GN | Power balance | -6.0844 | GW |  |  |  |
| Length |  | 376 | m | Wet mass | 100 | kt | Wet mass |  |  | 100.166 |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Power budget | 58 | min |  |  |  |
| Surface | 189640 |  | m² | Fuel mass | 29 | kt | Fuel mass |  |  | 29 |  |  | AM drive |  | 0 | kTW | 0 | g | 19.7809 | gd | 50 | Mm/s | 0 | GN |  |  |  |  |  |  |
| Volume | 3.57325e+06 |  | m3 | Dry mass | 71 | kt | Dry mass |  |  | 71.166 |  |  |  |  |  |  |  |  |  |  |  |  |  |  | HEAT |  |  |  |  |  |
| Density |  | 0.0279857 | t/m3 | Mass ratio | 1.4 | kt | Mass ratio |  |  | 1.4075 |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Heat sink | 36 | / | 36 | GWm |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Heat balance | 5.7216 | GW |  |  |  |
|  |  |  |  |  |  |  | Power |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Heat budget | 6 | cycles |  |  |  |
| Used mass |  | 100.234 | % | System | Mass |  | Max |  | State | Current |  | Heat |  | Notes |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 7.1 | % | Propulsion | 10 | kt | 20 | kTW |  | 18 | kTW | 18 | kGWm | 6x S-400 Epstein drive (5 kTW) |  |  |  |  |  |  |  |  |  |  | Attributes |  |  |  |  |  |
|  |  | 0.1 | % | Propulsion | 0.072 | kt | 18 | kTW |  | 0 | kTW | 0 | kGWm | 10x 250TW AM Beam drive (for redundancy) |  |  |  |  |  |  |  |  |  |  | Agility | 2 | / | 2 |  | Agile design (for its class) |
|  |  | 5 | % | Power | 3.55 | kt | 18 | kGW |  | 1 | kGW | 1.2 | kGWm | Fusion core |  |  |  |  |  |  |  |  |  |  | Power | 5 | / | 5 |  | Last-gen fusion core |
|  |  | 5 | % | CPU | 3.55 | kt | -4 | kGW | 1 | -4 | kGWm | 0 | kGWm |  |  |  |  |  |  |  |  |  |  |  | CPU | 5 | / | 5 |  | Military grade CPU and autopilot |
|  |  | 5 | % | Sensors | 3.55 | kt | -4 | kGW | 1 | -4 | kGWm | 0 | kGWm |  |  |  |  |  |  |  |  |  |  |  | Sensors | 5 | / | 5 |  | Military grade sensors suite and comms array |
|  |  | 5 | % | Cooling | 3.55 | kt |  |  | 4 | / | 4 | -17.75 | kGWm | 4x foldable RadX radiators (33 kW/m², 150 m²/t) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 5 | % | Heat sink | 3.55 | kt | 36 | GW |  |  |  |  |  | Lithium-based solution (2 x more W/kg) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 5 | % | Battery | 3.55 | kt | 355 | GWh | 1 | 4 |  | 4 | kGWm | Metallic hydrogen (100 Wh/kg ?) |  |  |  |  |  |  |  |  |  |  | Radiator profile |  |  |  |  |  |
|  |  | 5 | % | Life support | 3.55 | kt |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Total surface | 532500 |  |  | m² |  |
|  |  | 15 | % | Structure | 10.65 | kt |  |  |  |  |  |  |  | Agile design : +1 agility |  |  |  |  |  |  |  |  |  |  | Number of panels |  |  | 4 |  |  |
|  |  | 24 | % | Armor | 17.04 | kt |  |  |  |  |  |  |  | 2 cm titanium plating (thermal + kinetic armor) |  |  |  |  |  |  |  |  | 89.8545 | kg/m² | Length / Width ratio |  |  | 1 |  |  |
|  |  | 7 | % | Cargo | 4.97 | kt |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 8.98545 | g/cm² | Shape | Rectangle |  |  |  |  |
|  |  | 12.0338 | % | Payload | 8.544 | kt |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Length | 364.863 |  |  | m |  |
|  |  |  |  |  |  |  | Power |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | Width | 364.863 |  |  | m |  |
| Hardpoints |  |  |  |  |  |  | Max |  | State | Current |  | Heat |  |  |  |  |  |  |  |  |  |  |  |  | Efficiency |  |  | 33 | kW/m² |  |
| Turret (42) |  | 42 | x | 40mm PDC | 0.084 | kt | -0.0084 | kGWm | 1 | -0.0084 | kGWm | -0.0084 | kGWm |  |  |  |  |  |  |  |  |  |  |  | Size to weight |  |  | 150 | m²/ton |  |
| Spine (2) |  | 2 | x | Heavy Railgun | 2.8 | kt | -2.8 | kGWm | 1 | -2.8 | kGWm | 0.28 | kGWm | 150m, 3m slugs |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Rack (36) |  | 15 | x | Astros 40x20kg | 0.15 | kt | -0.15 | kGWm | 1 | -0.15 | kGWm | 0 | kGWm | Single tube launcher, 1launch/min |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 21 | x | Apoc 12x500 | 1.26 | kt | -0.126 | kGWm | 1 | -0.126 | kGWm | 0 | kGWm | Single tube launcher, 1launch/min |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Ammo |  | 300 | x | Astros pack | 0.24 | kt | Packs of 40 x 20kg guided warhead |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 210 | x | Apoc pack | 1.26 | kt | Packs of 12 x 500kg guided slug |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Crew |  | 2000 | x | Living quarters | 2 | kt | -2 | GWm |  |  | GWm | 0 | GWm | Comfortable (1t / crew member) |  |  |  |  |  |  |  |  | 35.7325 | m3 / crew |  |  |  |  |  |  |
| Others |  | 6 | x | Dropship | 0.6 | kt |  |  |  |  |  |  |  | 100t armored shuttles |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 3 | x | Repair skiff | 0.15 | kt |  |  |  |  |  |  |  | 50t small craft |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

## West (Proxima station)

| Database | Nom | Statut | Corpo | Job | Tags |
| --- | --- | --- | --- | --- | --- |
| West | Sheriff | Militaire |  | Sheriff | Cyborg, whisky |
|  | Boris | Militaire |  | Sécurité | Pilote |
|  | Nadia | Militaire |  | Sécurité | Biomods |
|  | Luce | Citoyen |  |  |  |
| Database | Nom | Statut | Corpo | Job | Tags |
| Ares Patrol | Sheriff | Décédé | Ares | Sécurité |  |
|  | Boris Walker | Décédé | Union | Divertissement |  |
|  | Nadia Taylor | Décédé | Union | Divertissement |  |

## Groupe 1

| Nom | Statut | Corpo | Job | Détails |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Boros | Déviant | Ares | Securite | Soeur (Nala), Nanodreads, nanotatouage tribal, synthécuir, détaché |  |  |  |  |
| Nala | Déviante | Ares | Pilote | Curieuse, peau violette, synthécuir, implants sensoriels apparents, Instajob Astronav |  |  |  |  |
| Patrick | Citoyen | Ares | Leader | Ambitieux, rasé, débraillé, aime pas les trans', têtu, effronté |  |  |  |  |
| Emilie |  | Ares | Ingénieur | Chaton virtuel, Int 1 / Soc 3 / Psychologie 2 Infiltration 2 Electronique 1 |  |  |  |  |
| Bulles de sang et outils volent dans la pièce. L'autopilote a été court-circuité (2 dégâts) et crashé (virus P3). Chaton est caché dedans, admin, protège l'ingénieur. |  |  |  |  |  |  |  |  |
| Au reboot, autopilote détecte que les caméras sont hackées et risque de condamner Golem. |  |  |  |  |  |  |  |  |
| Nala et Patrick état critique (Phys -1), Nala fauteuil Patrick flotte Emilie aggripe DDE |  |  |  |  |  |  |  |  |
| Boros feint la mort (Phys 1) |  |  |  |  |  |  |  |  |
| Medkit | Distributeur de stimulants épuisé |  |  |  |  |  |  |  |
| Bricokit | Sans la malette |  |  |  |  |  |  |  |
| Poing choc | Dégâts +1 étourdissant |  |  |  |  |  |  |  |
| Maglame | Dégâts +1 |  |  |  |  |  |  |  |
| Bottes | magnétiques |  |  |  |  |  |  |  |
| Riveteur | Kinétique, portée courte |  |  |  |  |  |  |  |
| Sédatif | 3 blessures, 5 seringues |  |  |  |  |  |  |  |
| Corpo Ares Hunter, Ares Cruiser offert. Liste de recrues potentielles, offres d'emplois. Corporation fusionnée à l'autopilote (inséparable) |  |  |  |  |  |  |  |  |
| Nom | Statut | Corpo | Job | Détails | Matos | Attributs | Comps | 0.120563 |
| Delia | Déviante | Xenos | Loisir | Opportuniste, Provocatrice | Cybergriffes (deg +1), nanocombi | 2 3 1 5 | Psycho 3, Combat 1, Database 2 | 173.611 |
| Shark | Militaire | Ares | Sécurité | Mâchoire de requin | Pistolet laser, combi, armure dermale, treillis renforcés | 4 3 2 3 | Combat 3, Richesse 3, Psycho 2 | 62.5 |
| Protocol | Artificiel | Ares | Sécurité | Fantome, Droide adapté 0g (3) | Droide Phys 5, pistolet (gel), cuir renforcé | 5 2 3 1 | Combat 4, Elec 2, Aero 2 |  |
| Eric | Déviant |  | Pilote | Addict (Hunter) | Instajob (pirate), riveteur, poing choc, fusil blaster (virtuel) | 3 4 3 2 | Aero 3, Combat 2, Elec 2, Infil 2 |  |
| Trust | Citoyen | Metal | Ingénieur | Maintenance, Discret | Faux profil (criminel), Appareil casse-firewall (3), stungun | 1 3 5 2 | Elec 3, Ingé 2, Infil 2 |  |
|  |  |  |  |  |  | P I P S |  |  |
| Malette 5 crédits, Delia la pique pendant l'échange et fuit vers les joueurs |  |  |  |  |  |  |  |  |
| Carlos | Citoyen | Metal | Douanier |  |  |  |  |  |
| Tourelle laser 2 dégâts (3 - armure thermique) |  |  |  | Réparation : 2 succès, 1 crédit |  |  |  |  |
| Jumper 3 dégâts |  |  |  |  |  |  |  |  |

## Groupe 2

| Nom | Statut | Job | Description |  | Mutations 0g |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Sand Gates | Alpha | Medias | Leader, Opportuniste, Hédoniste, Magball |  | Poches d'oxygène |  |  |  |  |
| Cam | Adaptée | Pilote | Mutations (0g), Fils (jon), combi, torche, riveteur |  | Manoeuvre 0g (souffle par les mains et le dos) |  |  |  |  |
| Jon | Nomade | Ingenieur | Mutations (0g), Jeune, combi, bricokit, stungun |  | Peau magnétique |  |  |  |  |
|  |  |  |  |  | Résistant aux accélération |  |  |  |  |
| Rom lit 2 places luxueux (passagers), connecté à la maison |  |  |  |  | Résistant à la pression |  |  |  |  |
| Autres couchettes (equipage), connectés à l'autopilote |  |  |  |  |  |  |  |  |  |
| Sand dans le salon, café, stade |  |  |  |  |  |  |  |  |  |
| Voyage : 1 xp (jeune 2) + xp d'interaction |  |  |  |  |  |  |  |  |  |
| Arrivée : relai, Richesse creds (intérêts), stade dans la ceinture (1 semaine sans s'arrêter, sinon 2) |  |  |  |  |  |  |  |  |  |
| Anormalement chaud, antenne cassée, sortie en combi, squatté par des déviants, prise d'otage |  |  |  |  |  |  |  |  |  |
| Nom | Statut | Job | Description |  |  |  |  |  |  |
| Derek | Déviant | Leader | Cyberpunk, Raisonnable, vêtements renforcés, poing choc |  |  |  |  | Spacien | Metahumain |
| Mac | Déviant | Securite | PTSD, riveteur, combi, bottes |  |  |  |  |  | Carapace autonome dans l'espace, Armure 3 |
| Don | Déviant | Securite | Cyborg, combi, pistolet implanté (balles gel) |  |  |  |  |  | Manoeuvre 0g |
| Liz | Artificiel | Magball | Fantome, Fière, Droide P5, Combat 4, Reput 2, Elec 2, spé Magball |  |  |  |  |  | Peau magnétique |
| Tor | Déviant | Ingénieur | Spacien, Timide, Bricokit implanté |  |  |  |  |  |  |
| Veulent passage vers chez eux (3j) et pas de question. Mac est prêt à négocier |  |  |  |  |  |  |  |  |  |
| Tor dehors, navette part en scred pour ramener un LEG GO cargo (3 jours) |  |  |  |  |  |  |  |  |  |
| Si combat aerospatial, Drone Hunter intervient en 8 à 12h |  |  |  |  |  |  |  |  |  |
| https://www.youtube.com/watch?v=nFTCGS2aZtA&list=PLKudVNYkaYRjKg_tLgCmKxFMlNIMhSCPz&index=93 |  |  |  |  |  |  |  |  |  |
| Nom | Statut | Corpo | Job | Détails | Matos | Attributs | Comps |  |  |
| Jean Treau | Citoyen | Metal | Ingénieur | Maintenance, Discret |  | 1 3 5 2 | Elec 3, Ingé 2 |  |  |
| Smexy | Criminel |  | Hacker | Faux profil, Marchand d'IA illégales | Sabre éveillé (+1), Appareil casse-firewall (2), stungun | 1 3 5 2 | Elec 3, Ingé 2, Infil 2, combat 1, hot sim (+1 succès matrice) |  |  |
| Philippe Lebel | VIP | Alpha | Gouvernement | Hautain, Parieur |  |  |  |  |  |
| Colonel Grant | Militaire | Ares | Administration | Dévoué, Radical | famille sur Stoner |  |  |  |  |
| Naginata | Citoyen | TherMoss | Gouvernement | Maitre Zen, Rusé |  |  |  |  |  |
| Babble | Citoyen | Xenos | R & D | Rigide, Distrait |  |  |  |  |  |
| Toro ranconné par Trust |  |  |  |  |  |  |  |  |  |
| Romain fanmail, invitation, viré, nouveau patron. Sandra enrage, Ares abandonne la station civile. Rendez-vous avec responsable lendemain |  |  |  |  |  |  | mail successeur : ton transat, ta piscine, ta secrétaire |  |  |
| Elyxe prime, arrivé hier avec équipe maintenance. Infos : Ares, marché noir, hacking -> Shark. |  |  |  |  |  |  |  |  |  |
| Max checkup, Cam veut un verre, blip senseurs spaciens |  |  |  |  |  |  |  |  |  |
| Rom agressé par Mac |  |  |  |  |  |  |  |  |  |
| Shark fait la sécurité à la soirée, rejoint sa bande pour l'after |  |  |  |  | https://www.youtube.com/playlist?list=PLO9JXz4yMY5Krlz_OhlrkOt04UAMce1Et |  |  |  |  |
| After VIP Ares veut pas payer, pirates. TherMoss pas content, Xenos s'écrase |  |  |  |  |  |  |  |  |  |
| Max invité par Cam si besoin |  |  |  |  |  |  |  |  |  |
| proc ninja : | ville japonaise |  |  |  |  |  |  |  |  |
|  | Communications = port |  |  |  |  |  |  |  |  |
|  | Glace = chateau |  |  |  |  |  |  |  |  |
|  | Agent = samurai |  |  |  |  |  |  |  |  |
|  | Database = entrepots |  |  |  |  |  |  |  |  |
| vaisseau | Agent = soldat Ares avec cigare et machinegun |  |  |  |  |  |  |  |  |


## Scratch

> [!note] Onglets Google Sheets sans nom (`SheetN`, `Form Responses`, doublons `Copy of…`) regroupés ici. Contenu conservé tel quel.

### Form Responses 1

_(empty sheet)_


### Sheet46

| Activity | Metabolic power (W) | Mechanical power (W) | Implied efficiency |
| --- | --- | --- | --- |
| Rest / quiet sitting | 80 – 120 W | ~5 – 20 W (postural) | ~5–20% (very low useful work) |
| Standing (light activity) | 120 – 180 W | 20 – 50 W | ~15–30% |
| Walking (5 km/h) | 200 – 350 W | 60 – 120 W | ~20–35% |
| Brisk walk / power walk | 300 – 450 W | 80 – 150 W | ~25–35% |
| Easy jogging (8 km/h) | 500 – 700 W | 150 – 250 W | ~25–35% |
| Steady run (10 km/h) | 700 – 900 W | 200 – 350 W | ~25–35% |
| Marathon pace (elite ~20 km/h unrealistic; typical marathon pace) | 600 – 900 W (sustained hours) | 150 – 300 W | ~25–35% |
| Hard run / threshold (race pace) | 900 – 1,500 W | 250 – 500 W | ~25–35% |
| All-out sprint (100 m, elite) | 2,000 – 6,000 W (short, seconds) | 500 – 1,500 W | ~~20–30% (mechanical peak may be higher for limbs) |
| Short explosive burst (single jump, lift) | 1,000 – 10,000 W (very short) | 200 – 3,000 W (depending on task) | highly variable |
| Max instantaneous leg muscle power (elite) | — (metabolic supplied from ATP/PCr + glycolysis) | ~1,000–3,000 W (legs peak, for <1 s) | n/a (burst systems + elastic storage) |


### Sheet27

| 3 |  |
| --- | --- |
| 6 |  |
| 9 |  |
| 12 |  |
| 15 |  |
| 18 |  |
| 21 |  |
| 24 |  |
| 27 |  |
| 30 |  |
| 33 |  |
| 36 |  |
| 39 |  |
| 42 |  |
| 45 | 360 |
| 48 |  |
| 51 |  |
| 54 |  |
| 57 |  |
| 60 |  |
| 63 |  |
| 66 |  |
| 69 |  |
| 72 |  |
| 75 |  |
| 78 |  |
| 81 |  |
| 84 |  |
| 87 |  |
| 90 |  |
| 93 |  |
| 96 |  |
| 99 |  |
| 102 |  |
| 105 |  |
| 108 |  |
| 111 |  |
| 114 |  |
| 117 |  |
| 120 |  |
| 123 |  |
| 126 |  |
| 129 |  |
| 132 |  |
| 135 |  |
| 138 |  |
| 141 |  |
| 144 |  |
| 147 |  |
| 150 |  |
| 153 |  |
| 156 |  |
| 159 |  |
| 162 |  |
| 165 |  |
| 168 |  |
| 171 |  |
| 174 |  |
| 177 |  |
| 180 |  |
| 183 |  |
| 186 |  |
| 189 |  |
| 192 |  |
| 195 |  |
| 198 |  |
| 201 |  |
| 204 |  |
| 207 |  |
| 210 |  |
| 213 |  |
| 216 |  |
| 219 |  |
| 222 |  |
| 225 | 8550 |


### Sheet26

|  | Volume of a spherical shell with outer and inner radii R and r |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  | 4π3(R3−r3) | 1792.28 | 0.05 |  |  |  |  |
|  |  |  |  |  | 3 | earth radius |  |
|  |  |  | 0.427875 | 0.85575 | 3.5057 | g |  |
|  | Volume of sphere |  |  |  |  |  |  |
|  | 4 / 3 * π r 3 | 4188.79 |  |  |  |  |  |
|  |  | 1.04739e+15 | earth volume |  |  |  | km |
| radius | 189000 | 2.82796e+16 | utopia volume |  |  |  |  |
| shell ratio | 0.01 | 2.5198e+15 | mh volume |  |  |  |  |
|  |  |  |  |  | distance to be at 1g |  |  |
|  |  | 4.81156 | g |  | 225577 | km |  |


### Sheet8

|  |  | 83.3333 |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  | RADIATORS |  |  |  |
|  |  |  |  |  |  | heat cap | 300 | kW/m² |
|  | mass flow | 10 | kg/s |  |  | area | 833 | m² |
|  | exhaust vel | 10000000 | m/s |  |  | mass | 10 | t |
|  | momentum | 100000000 | kg m/s |  |  | cooling | 249.9 | MW |
|  | mass | 200 | tons |  |  |  |  |  |
|  | velocity | 500 | m/s |  |  |  |  |  |
|  |  |  |  |  | 400.16 |  |  |  |
|  |  |  |  |  |  | 1 newton = | amount to accelerate 1kg at 1m/s² |  |
| DELTA V |  |  |  |  |  |  |  |  |
|  | deltaV | Ve * ln ( R ) |  |  | ACCEL |  |  |  |
|  | exhaust (Ve) | 20000000 | m/s |  |  | thrust | 3000 | kN |
|  | mass ratio | 3 |  | 2 to 5 |  | mass | 60 | tons |
|  | deltaV | 2.19722e+07 | m/s |  |  | accel | 50 | m/s² |
|  |  | 21972.2 | km/s |  |  |  | 5 | g |
|  |  | 0.0732915 | c |  |  |  |  |  |
|  |  |  |  |  | SHIFTING GEARS |  | Tp = (Ve * T) / 2 |  |
|  |  |  |  |  |  | Thrust power | 10 | TW |
|  | ship width | 18 |  |  |  |  | 10000000 | MW |
|  | ship length | 60 |  |  |  | exhaust vel | 20000 | km/s |
|  | ship surface | 4320 |  |  |  | Thrust | 1000 | kN |
|  |  |  |  |  |  | waste heat | 500000 | MW |
|  |  |  |  |  |  | radiators | 1666.67 | m² |


### Sheet31

_(empty sheet)_


### Sheet6

| Nom | Statut | Corpo | Job | Détails |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Boros | Déviant | Ares | Securite | Soeur (Nala), Nanodreads, nanotatouage tribal, synthécuir, détaché |  |  |
| Nala | Déviante | Ares | Pilote | Curieuse, discrète, peau violette, synthécuir, implants sensoriels apparents, Instajob Astronav |  |  |
| Nom | Statut | Corpo | Job | Détails |  |  |
| Delia | Déviante | Xenos | Loisir | Opportuniste, Provocatrice |  |  |
| Shark | Militaire | Ares | Mercenaire | Machoire de requin, Chasseur de primes |  |  |
| Protocol | Artificiel | Ares | Mercenaire | Fantome, Droide adapté 0g (3) |  |  |
| Eric | Déviant |  | Pilote | Addict (Hunter) |  |  |
|  | a = v² / r |  |  |  |  |  |
|  | C = 2 pi * r |  |  |  |  |  |
|  |  | a (m/s²) | v (m/s) | r (m) | C (m) | RPM |
|  |  | 5 | 8.94427 | 16 | 100.531 | 5.33822 |
|  |  | 5 | 200 | 8000 | 50265.5 | 0.238732 |
|  |  | a (m/s²) | Period (s) | r (m) |  | RPM |
|  | r = a ( P / 2 pi ) ² | 5.5 | 240 | 8024.64 |  | 0.25 |
|  |  | 0.561224 |  |  |  |  |


### Sheet5

| Nom | Statut | Corpo | Job | Détails | Matos |
| --- | --- | --- | --- | --- | --- |
| Shark | Militaire | Ares | Sécurité | Mâchoire de requin |  |
| Protocol | Artificiel | Ares | Sécurité | Fantome, Droide adapté 0g (3) |  |
| Eric | Déviant |  | Pilote | Addict (Hunter) |  |
| Jean Treau | Citoyen | Metal | Ingénieur | Maintenance, Discret |  |
| Contacts marché noir Alpha centauri |  |  |  |  |  |
| Contact Infrared |  |  |  |  |  |
| Réseau de hackers |  |  |  |  |  |
| IAs conscientes |  |  |  |  |  |
