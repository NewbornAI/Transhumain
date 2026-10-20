// GÉNÉRÉ — ne pas éditer ici : la source humaine est Equipement/Rayons/*.md ;
// ce fichier est l'export machine importé par Supermarché.html (<script src>).
// Arbitrages MJ consignés dans meta.conventions et 00 Sommaire des rayons.
window.SUPERMARCHE_DATA = {
 "meta": {
  "file": "supermarche.data.js",
  "role": "Export machine des rayons — source unique lue par Supermarché.html. Ne pas éditer sans répercuter les changements dans les notes markdown Equipement/Rayons/.",
  "source": "Equipement/Rayons/ (catalogue humain, registre des arbitrages : 00 Sommaire des rayons)",
  "updated": "2026-10-16",
  "conventions": {
   "i²": "i au carré (1/4/9/16/25/36 ₡)",
   "i seul": "i ₡",
   "1+i": "(1+i) ₡",
   "base composé": "P ₡ (puissance visée)",
   "E": "dégâts électriques/EMP",
   "promos starter": "Ares −10 %, Xenos −10 %, Union −20 %",
   "antimatière": "blast effectif ≈ 10 kt (couplage 20–30 %)",
   "M/E vaisseaux": "colonnes ignorées (arbitrage MJ)",
   "affichage familles": "hero card unique + versions concrètes (une par indice, marque distincte) ; variantes marquées parent, masquées dans la grille",
   "composé": "carte configurateur : P 1–6, add-ons (règles de prix md), doses ; option 'parent' masquée, règle stockée dans rule"
  }
 },
 "aisles": {
  "starters": [
   "Starter packs",
   "#35b6e8",
   []
  ],
  "mods": [
   "Mods & implants",
   "#7d6bd8",
   []
  ],
  "cosmes": [
   "Cosmétique",
   "#d86bd0",
   []
  ],
  "skills": [
   "Skillsofts",
   "#6bd8c8",
   [
    "Indice"
   ]
  ],
  "vet": [
   "Vêtements",
   "#8a9bb5",
   []
  ],
  "combi": [
   "Combinaisons",
   "#8a63c9",
   []
  ],
  "vie": [
   "Niveau de vie",
   "#5ac8a8",
   []
  ],
  "immo": [
   "Immobilier",
   "#b58cf0",
   []
  ],
  "inge": [
   "Ingénierie",
   "#4fc3f7",
   []
  ],
  "bio": [
   "Santé & bio",
   "#3dbb6e",
   []
  ],
  "elec": [
   "Électronique",
   "#4f7de8",
   []
  ],
  "art": [
   "Interfaces & drones",
   "#7de8c4",
   []
  ],
  "chim": [
   "Chimie & effets",
   "#d8b46b",
   []
  ],
  "mat": [
   "Matières premières",
   "#c9b458",
   []
  ],
  "aug": [
   "Augments",
   "#e8a13c",
   [
    "Indice"
   ]
  ],
  "cin": [
   "Armes cinétiques",
   "#e35d6a",
   [
    "Dégâts",
    "Perforation"
   ]
  ],
  "beam": [
   "Armes à énergie",
   "#f08a3c",
   [
    "Dégâts"
   ]
  ],
  "armor": [
   "Armures",
   "#3ea88a",
   [
    "Cinétique",
    "Thermique"
   ]
  ],
  "expl": [
   "Explosifs",
   "#d43f3f",
   [
    "TNT eq"
   ]
  ],
  "poke": [
   "Pokebots",
   "#e8c13c",
   [
    "Corps",
    "Processeur"
   ]
  ],
  "ship": [
   "Vaisseaux",
   "#5a748c",
   [
    "Taille"
   ]
  ]
 },
 "perms": [
  [
   "",
   "Aucun"
  ],
  [
   "M",
   "M — Militaire"
  ],
  [
   "P",
   "P — Professionnel"
  ],
  [
   "S",
   "S — Sûreté réseau"
  ],
  [
   "V",
   "V — VIP"
  ],
  [
   "A",
   "ALPHA"
  ],
  [
   "I",
   "INTERDIT"
  ]
 ],
 "items": [
  {
   "n": "Ares Legion",
   "a": "starters",
   "pm": "M",
   "v": 18,
   "pl": "18 ₡",
   "promo": true,
   "was": 20,
   "s": "« Tout pour servir. Dès la sortie de caisse. »",
   "f": [
    [
     "Nation",
     "Ares"
    ],
    [
     "Coût",
     "20 ₡ (−10% promo)"
    ],
    [
     "Permis",
     "Militaire"
    ]
   ],
   "d": "Corps 5, Processeur 4, Réflexes 1 + overclock 1.\nBatterie 3, vision IR, armure dermale, ossature+ (tête, torse).\nNopain, smartblood.\nArmement : fusil d'assaut (munitions gel), magknife, armure Ares.",
   "img": "Images/starters-ares-legion.jpg"
  },
  {
   "n": "Alpha Scholarship",
   "a": "starters",
   "pm": "A",
   "v": 0,
   "pl": "0 ₡",
   "s": "« Votre avenir, à crédit. »",
   "f": [
    [
     "Nation",
     "Alpha"
    ],
    [
     "Coût",
     "0 ₡"
    ],
    [
     "Condition",
     "Dossier d'admission"
    ]
   ],
   "d": "Corps 5, Processeur 4 + overclock 1.\nBricokit, medkit, imprimante.\nTous les skillsofts à indice 4.",
   "img": "Images/starters-alpha-scholarship.jpg"
  },
  {
   "n": "Xenos Explorer",
   "a": "starters",
   "v": 9,
   "pl": "9 ₡",
   "promo": true,
   "s": "« La frontière commence ici. L'assurance aussi. »",
   "f": [
    [
     "Coût",
     "10 ₡"
    ],
    [
     "Dotation",
     "xeno-complete"
    ]
   ],
   "d": "Corps et Processeur 4.\nMedkit, bricokit, androïde majordome.\nCombi Xenos, scanner Xenos, scalpel laser, magknife.",
   "was": 10,
   "img": "Images/starters-xenos-explorer.jpg"
  },
  {
   "n": "Union Spider",
   "a": "starters",
   "pm": "M",
   "v": 12,
   "pl": "12 ₡",
   "promo": true,
   "s": "« Huit pattes, zéro trace. »",
   "f": [
    [
     "Nation",
     "Union"
    ],
    [
     "Coût",
     "15 ₡"
    ],
    [
     "Permis",
     "Militaire"
    ]
   ],
   "d": "Processeur 5 + overclock 2.\nBatterie 3.\nICE indice 2, virus indice 2.",
   "was": 15,
   "img": "Images/starters-union-spider.jpg"
  },
  {
   "n": "Interface neurale",
   "a": "mods",
   "v": 0,
   "pl": "0 ₡",
   "s": "« Penser, c'est agir. »",
   "f": [
    [
     "Standard",
     "inclus de naissance"
    ]
   ],
   "d": "Permet d'interagir avec l'électronique par la pensée. Standard et sans danger.",
   "img": "Images/mods-interface-neurale.jpg"
  },
  {
   "n": "Datajack",
   "a": "mods",
   "v": 0,
   "pl": "0 ₡",
   "s": "« Old school, mais fiable. »",
   "d": "Câble pour se brancher en direct sur un port réseau. Old school — mais insensible aux brouillages.",
   "img": "Images/mods-datajack.jpg"
  },
  {
   "n": "Hermétique",
   "a": "mods",
   "v": 1,
   "pl": "1 ₡",
   "f": [
    [
     "Protection",
     "combinaison"
    ]
   ],
   "d": "Scellage intégral du corps : l'étanchéité d'une combinaison, en moins encombrant.",
   "img": "Images/mods-hermetique.jpg"
  },
  {
   "n": "Autopilote (mod)",
   "a": "mods",
   "v": 0,
   "pl": "0 ₡",
   "s": "« Le pilote automatique, version cerveau. »",
   "d": "Système nerveux peut être contrôlé à distance ou par autopilote.",
   "img": "Images/mods-autopilote-mod.jpg"
  },
  {
   "n": "Smartblood",
   "a": "mods",
   "v": 2,
   "pl": "2 ₡",
   "s": "« Saignez moins. »",
   "d": "Arrête le saignement, prévient les infections et immunise aux toxines standard. Programmable.",
   "img": "Images/mods-smartblood.jpg"
  },
  {
   "n": "Nopain",
   "a": "mods",
   "pm": "S",
   "v": 1,
   "pl": "1 ₡",
   "s": "« La douleur est une option. »",
   "f": [
    [
     "Effet",
     "douleur ignorée"
    ],
    [
     "Risque",
     "santé"
    ]
   ],
   "d": "Pas de malus de douleur. Dangereux pour la santé.",
   "img": "Images/mods-nopain.jpg"
  },
  {
   "n": "Lockpick",
   "a": "mods",
   "pm": "M",
   "v": 1,
   "pl": "1 ₡",
   "s": "« Les portes ne vous connaissent pas. »",
   "f": [
    [
     "Équivaut",
     "AP 2"
    ]
   ],
   "d": "Tentacules équipées pour se connecter de force.",
   "img": "Images/mods-lockpick.jpg"
  },
  {
   "n": "Injecteur",
   "a": "mods",
   "v": 1,
   "pl": "1 ₡",
   "d": "Injecte la substance chargée sur demande, ou en réaction. Discrétion totale, dosage au doigt.",
   "img": "Images/mods-injecteur.jpg"
  },
  {
   "n": "High-g",
   "a": "mods",
   "v": 3,
   "pl": "3 ₡",
   "s": "« 10 g ? Une formalité. »",
   "f": [
    [
     "Support",
     "10 g soutenu · pics 100+ g"
    ]
   ],
   "d": "Structures et stabilisateurs renforcés : encaisse 10 g soutenus, pics à 100+ g. À combiner avec les fauteuils high-g des vaisseaux.",
   "img": "Images/mods-high-g.jpg"
  },
  {
   "n": "Adaptation",
   "a": "mods",
   "v": 1,
   "pl": "1 ₡",
   "f": [
    [
     "Environnement",
     "au choix"
    ]
   ],
   "d": "Pour vivre dans un environnement spécifique.",
   "img": "Images/mods-adaptation.jpg"
  },
  {
   "n": "Régénération",
   "a": "mods",
   "v": 3,
   "pl": "3 ₡",
   "s": "« Le temps répare tout. Nous accélérons. »",
   "f": [
    [
     "Rythme",
     "1 PV/heure · membres 1 j/sem."
    ],
    [
     "Consommation",
     "énergie"
    ]
   ],
   "d": "Régénère 1 point de blessure par heure ; membres repoussent en 1 jour/semaine.",
   "img": "Images/mods-regeneration.jpg"
  },
  {
   "n": "Yeux de félin",
   "a": "mods",
   "v": 0,
   "pl": "0 ₡",
   "d": "Annule les malus d'obscurité (sauf totale).",
   "img": "Images/mods-yeux-de-felin.jpg"
  },
  {
   "n": "Glande",
   "a": "mods",
   "v": 1,
   "pl": "1 ₡",
   "s": "« Production maison. »",
   "f": [
    [
     "Dosage",
     "1 × P2 / jour · stock 3"
    ]
   ],
   "d": "Produit 1 dose de drogue ou toxine P2/jour. Stocke 3 doses. Injection automatique ou sur demande.",
   "img": "Images/mods-glande.jpg"
  },
  {
   "n": "Gecko",
   "a": "mods",
   "v": 1,
   "pl": "1 ₡",
   "d": "Adhérence moléculaire : murs, plafonds, coques en apesanteur. Dort accroché si on lui demande.",
   "img": "Images/mods-gecko.jpg"
  },
  {
   "n": "Decatopus",
   "a": "mods",
   "v": 1,
   "pl": "1 ₡",
   "s": "« Dix mains valent mieux qu'une. »",
   "d": "Les mains déploient 10 longs appendices modulaires pour manipuler des objets.",
   "img": "Images/mods-decatopus.jpg"
  },
  {
   "n": "Tardigrade",
   "a": "mods",
   "v": 1,
   "pl": "1 ₡",
   "s": "« Indestructible, microscopique, vous. »",
   "d": "Quasi-immunité au cancer et aux dégradations de l'ADN (faibles radiations, longue exposition).",
   "img": "Images/mods-tardigrade.jpg"
  },
  {
   "n": "Veille",
   "a": "mods",
   "v": 3,
   "pl": "3 ₡",
   "d": "Permet de dormir dans un état semi-conscient.",
   "img": "Images/mods-veille.jpg"
  },
  {
   "n": "Filtre auditif",
   "a": "mods",
   "v": 1,
   "pl": "1 ₡",
   "d": "Filtre certaines fréquences sonores (ou personnes…).",
   "img": "Images/mods-filtre-auditif.jpg"
  },
  {
   "n": "Nanotat",
   "a": "cosmes",
   "v": 0,
   "pl": "0 ₡",
   "s": "« 10 000 animations. Votre peau, la galerie. »",
   "d": "Tatouage programmable — nanites lumineuses sous la peau. 1 mois de librairie offert.",
   "img": "Images/cosmes-nanotat.jpg"
  },
  {
   "n": "Coupe augmentée",
   "a": "cosmes",
   "v": 0,
   "pl": "0 ₡",
   "d": "Chevelure en fibre optique, forme et couleurs programmables.",
   "img": "Images/cosmes-coupe-augmentee.jpg"
  },
  {
   "n": "Chirurgie esthétique",
   "a": "cosmes",
   "v": 0,
   "pl": "0 ₡+",
   "s": "« Parcourez notre catalogue de top models et héros de fiction. »",
   "d": "Parcourez notre catalogue de top models et de héros de fiction. Résultats garantis, réversibles en cuve bakta.",
   "img": "Images/cosmes-chirurgie-esthetique.jpg"
  },
  {
   "n": "Nanoskin",
   "a": "cosmes",
   "v": 1,
   "pl": "1 ₡",
   "s": "« Lassé du même look ? Changez quand vous voulez. »",
   "d": "Lassé de votre look ? Changez quand vous voulez — peau programmable du bout des doigts.",
   "img": "Images/cosmes-nanoskin.jpg"
  },
  {
   "n": "Thérapie génique",
   "a": "cosmes",
   "v": 1,
   "pl": "1 ₡",
   "s": "« Un an de moins, une journée en cuve. »",
   "f": [
    [
     "Limites",
     "ne rajeunit pas l'esprit"
    ]
   ],
   "d": "Rajeunit le corps d'un an, une journée en cuve. L'esprit garde ses rides — et ses souvenirs.",
   "img": "Images/cosmes-therapie-genique.jpg"
  },
  {
   "n": "Splicing",
   "a": "cosmes",
   "v": 0,
   "pl": "0 ₡",
   "d": "Trait animal (yeux, oreilles, queue, fourrure…).",
   "img": "Images/cosmes-splicing.jpg"
  },
  {
   "n": "Visage programmable",
   "a": "cosmes",
   "v": 3,
   "pl": "3 ₡",
   "d": "Traits, cicatrices, âge apparent : une identité de rechange au choix. Les passeports vous en voudront.",
   "img": "Images/cosmes-visage-programmable.jpg"
  },
  {
   "n": "Crash course",
   "a": "skills",
   "v": 0,
   "pl": "0 ₡",
   "f": [
    [
     "Indice",
     "3"
    ]
   ],
   "d": "Apprentissage intensif d'une compétence. Protégé contre la copie.",
   "img": "Images/skills-crash-course.jpg"
  },
  {
   "n": "Autopilote (skillsoft)",
   "a": "skills",
   "v": 2,
   "pl": "2 ₡",
   "f": [
    [
     "Indice",
     "4"
    ],
    [
     "Usage",
     "automatique"
    ]
   ],
   "d": "Utilise la compétence en autopilote. Max skillsofts actifs = Processeur.",
   "img": "Images/skills-autopilote-skillsoft.jpg"
  },
  {
   "n": "Tuteur",
   "a": "skills",
   "v": 5,
   "pl": "5 ₡",
   "f": [
    [
     "Indice",
     "5"
    ]
   ],
   "d": "Progresse en compétence. Max = indice du skillsoft.",
   "img": "Images/skills-tuteur.jpg"
  },
  {
   "n": "Mentor",
   "a": "skills",
   "v": 10,
   "pl": "10 ₡",
   "f": [
    [
     "Indice",
     "6"
    ],
    [
     "Mise à jour",
     "1 ₡ (3 ₡ early access ; l'obsolescence peut la baisser)"
    ]
   ],
   "d": "Maîtrise guidée d'une compétence, jusqu'à l'indice 6.\nAchat : 10 ₡. Mise à jour : 1 ₡ (3 ₡ early access) — l'obsolescence peut la baisser.",
   "img": "Images/skills-mentor.jpg"
  },
  {
   "n": "Formation",
   "a": "skills",
   "v": 5,
   "pl": "5 ₡",
   "d": "Donne l'expertise. 1 semaine en réalité virtuelle.",
   "img": "Images/skills-formation.jpg"
  },
  {
   "n": "Wiki",
   "a": "skills",
   "v": 0,
   "pl": "0 ₡+",
   "d": "Informations détaillées sur un sujet précis.",
   "img": "Images/skills-wiki.jpg"
  },
  {
   "n": "Prêt à porter",
   "a": "vet",
   "v": 0,
   "pl": "0 ₡",
   "d": "Le minimum : propre, couvert, indiscernable dans la foule.",
   "img": "Images/vet-pret-a-porter.jpg"
  },
  {
   "n": "Magline",
   "a": "vet",
   "v": 0,
   "pl": "0 ₡",
   "s": "« Bottes et gants magnétiques pour 0g. »",
   "d": "Bottes et gants magnétiques pour évoluer en 0 g sans hurler dans le vide.",
   "img": "Images/vet-magline.jpg"
  },
  {
   "n": "Mode",
   "a": "vet",
   "v": 1,
   "pl": "1 ₡",
   "d": "Cuir véritable, holocombi, robe de soirée…",
   "img": "Images/vet-mode.jpg"
  },
  {
   "n": "Renforcés",
   "a": "vet",
   "v": 1,
   "pl": "1 ₡",
   "f": [
    [
     "Cinétique",
     "1"
    ],
    [
     "Thermique",
     "+1"
    ]
   ],
   "d": "Tissu CNT : la protection d'un gilet kevlar avec la coupe d'un blazer.",
   "img": "Images/vet-renforces.jpg"
  },
  {
   "n": "Haute couture",
   "a": "vet",
   "v": 2,
   "pl": "2 ₡",
   "d": "Nanocombi, costume extravagant…",
   "img": "Images/vet-haute-couture.jpg"
  },
  {
   "n": "Combi",
   "a": "combi",
   "v": 0,
   "pl": "0 ₡",
   "f": [
    [
     "Hermétique",
     "24 h"
    ],
    [
     "0g",
     "oui"
    ]
   ],
   "d": "La combinaison scellée standard : 24 h d'air recyclé, compatible 0 g, poches partout.",
   "img": "Images/combi-combi.jpg"
  },
  {
   "n": "Alpha Skinsuit",
   "a": "combi",
   "v": 1,
   "pl": "1 ₡",
   "f": [
    [
     "Hermétique",
     "24 h"
    ]
   ],
   "d": "Seconde peau scellée de 24 h, se glisse sous des vêtements civils. Paranoïa discrète.",
   "img": "Images/combi-alpha-skinsuit.jpg"
  },
  {
   "n": "Combi Xenos",
   "a": "combi",
   "v": 3,
   "pl": "3 ₡",
   "f": [
    [
     "Hermétique",
     "1 semaine"
    ],
    [
     "Inclus",
     "régénération, gecko"
    ]
   ],
   "d": "Une semaine d'autonomie en milieu xéno, régénération cutanée et adhérence incluses. Le cocon des explorateurs.",
   "img": "Images/combi-combi-xenos.jpg"
  },
  {
   "n": "Combi Predator",
   "a": "combi",
   "pm": "M",
   "v": 5,
   "pl": "5 ₡",
   "s": "« Invisible par temps clair. »",
   "f": [
    [
     "Hermétique",
     "1 semaine"
    ],
    [
     "Protection",
     "armure de combat"
    ],
    [
     "Camo",
     "optique + thermique"
    ]
   ],
   "d": "Camouflage optique et thermique, scellée une semaine, protection égale à une armure de combat.\nElle rend invisible — pas invincible.",
   "img": "Images/combi-combi-predator.jpg"
  },
  {
   "n": "Ares Turtle",
   "a": "combi",
   "pm": "M",
   "v": 7,
   "pl": "7 ₡",
   "s": "« Drop orbital. Atterrissage en douceur. »",
   "f": [
    [
     "Hermétique",
     "autonome"
    ],
    [
     "Taille",
     "1"
    ],
    [
     "Chute",
     "drop orbital"
    ]
   ],
   "d": "Taille 1, autonomie totale, chute orbitale sans module de rentrée. On y survit à tout, sauf à l'attente.",
   "img": "Images/combi-ares-turtle.jpg"
  },
  {
   "n": "Cercueil (mensuel)",
   "a": "vie",
   "v": 0,
   "pl": "0 ₡/mois",
   "s": "« Smoothies protéinés et soykaf à volonté ! »",
   "f": [
    [
     "Durée",
     "1 mois"
    ]
   ],
   "d": "Cabine verticale, smoothies protéinés et soykaf à volonté.\nOn n'y dort pas bien — on y dort assez.",
   "img": "Images/vie-cercueil-mensuel.jpg"
  },
  {
   "n": "Hôtel",
   "a": "vie",
   "v": 1,
   "pl": "1 ₡/mois",
   "f": [
    [
     "Durée",
     "1 mois"
    ]
   ],
   "d": "Tourisme, liste d'adresses, room service, imprimante d'hôtel.",
   "img": "Images/vie-hotel.jpg"
  },
  {
   "n": "Vacances",
   "a": "vie",
   "v": 2,
   "pl": "2 ₡/mois",
   "d": "Croisière, festival, complexe touristique.",
   "img": "Images/vie-vacances.jpg"
  },
  {
   "n": "Résidence de luxe",
   "a": "vie",
   "v": 3,
   "pl": "3 ₡/mois",
   "d": "Centre de loisir, soirées VIP, restaurants huppés.",
   "img": "Images/vie-residence-de-luxe.jpg"
  },
  {
   "n": "Suite présidentielle",
   "a": "vie",
   "v": 5,
   "pl": "5 ₡/mois",
   "s": "« Le tapis rouge dans tout le système. »",
   "d": "La corpo déroule le tapis rouge dans tout le système : sécurité, coursier, mensonge à la demande.",
   "img": "Images/vie-suite-presidentielle.jpg"
  },
  {
   "n": "Abonnement",
   "a": "vie",
   "v": 0,
   "pl": "0 ₡+",
   "d": "Channel, app, club… Offre un cercle de contacts.",
   "img": "Images/vie-abonnement.jpg"
  },
  {
   "n": "Appartement (colonie)",
   "a": "immo",
   "v": 1,
   "pl": "1 ₡",
   "f": [
    [
     "Indice",
     "1"
    ],
    [
     "Surface",
     "module résidentiel"
    ]
   ],
   "d": "Module résidentiel de colonie, charges comprises, voisins garantis à 30 cm des deux côtés.",
   "img": "Images/immo-appartement-colonie.jpg"
  },
  {
   "n": "Appartement (astéroïde)",
   "a": "immo",
   "v": 5,
   "pl": "5 ₡",
   "f": [
    [
     "Indice",
     "1"
    ]
   ],
   "d": "Appartement dans un astéroïde résidentiel.",
   "img": "Images/immo-appartement-asteroide.jpg"
  },
  {
   "n": "Maison",
   "a": "immo",
   "v": 10,
   "pl": "10 ₡",
   "f": [
    [
     "Indice",
     "3"
    ]
   ],
   "d": "Sol, murs, toit et un peu de ciel. Le luxe, ici, c'est la gravité au choix.",
   "img": "Images/immo-maison.jpg"
  },
  {
   "n": "Villa orbitale",
   "a": "immo",
   "v": 50,
   "pl": "50 ₡",
   "f": [
    [
     "Indice",
     "5"
    ]
   ],
   "d": "Résidence autonome en orbite basse : cinquante ₡, l'apesanteur en option, le droit de regard de la Guilde en standard.",
   "img": "Images/immo-villa-orbitale.jpg"
  },
  {
   "n": "Appartement (Mars)",
   "a": "immo",
   "v": 10,
   "pl": "10 ₡",
   "f": [
    [
     "Indice",
     "1"
    ]
   ],
   "d": "Cité dôme, vue verrouillée sur l'extérieur. La poussière rouge est offerte, avec les factures.",
   "img": "Images/immo-appartement-mars.jpg"
  },
  {
   "n": "Villa (Venus)",
   "a": "immo",
   "v": 30,
   "pl": "30 ₡",
   "f": [
    [
     "Indice",
     "3"
    ]
   ],
   "d": "Villa flottante.",
   "img": "Images/immo-villa-venus.jpg"
  },
  {
   "n": "Terra VIP",
   "a": "immo",
   "pm": "V",
   "v": 1000,
   "pl": "1k+ ₡",
   "s": "« La Terre, mais en mieux. »",
   "f": [
    [
     "Indice",
     "6"
    ],
    [
     "Localisation",
     "Terre · arcologie"
    ]
   ],
   "d": "Arcologie paradisiaque sur Terre : 1 000 ₡ et plus, permis VIP exigé. L'air y sent le vrai.",
   "img": "Images/immo-terra-vip.jpg"
  },
  {
   "n": "Scanner",
   "a": "inge",
   "v": 1,
   "pl": "1 ₡",
   "d": "Analyse systèmes et compositions ; détecte les émissions à longue distance.",
   "img": "Images/inge-scanner.jpg"
  },
  {
   "n": "Bricokit",
   "a": "inge",
   "v": 1,
   "pl": "1 ₡",
   "f": [
    [
     "Charges",
     "10 incluses"
    ],
    [
     "Impression",
     "P2"
    ]
   ],
   "d": "Mallette d'outils d'ingénierie ; imprime les petits composants.",
   "img": "Images/inge-bricokit.jpg"
  },
  {
   "n": "Recharge bricokit",
   "a": "inge",
   "v": 1,
   "pl": "1 ₡",
   "f": [
    [
     "Charges",
     "10"
    ]
   ],
   "d": "10 charges de matière pour bricokit : écrous, circuits, pièces de dépannage.",
   "img": "Images/inge-recharge-bricokit.jpg"
  },
  {
   "n": "Scalpel laser",
   "a": "inge",
   "v": 1,
   "pl": "1 ₡",
   "s": "« Découpe à peu près n'importe quoi. »",
   "d": "Découpe à peu près n'importe quoi — la durée dépend de ce que vous découpez.",
   "img": "Images/inge-scalpel-laser.jpg"
  },
  {
   "n": "Outils spécialisés",
   "a": "inge",
   "v": 2,
   "pl": "2 ₡",
   "d": "Un jeu d'outres taillé pour une discipline : ils fournissent la spécialisation qui manque au bricokit.",
   "img": "Images/inge-outils-specialises.jpg"
  },
  {
   "n": "Gel de chantier",
   "a": "inge",
   "v": 0,
   "pl": "0 ₡",
   "d": "Canette de gel expansible solidifié par décharge — couvre la taille d'une porte.",
   "img": "Images/inge-gel-de-chantier.jpg"
  },
  {
   "n": "Imprimante",
   "a": "inge",
   "v": 1,
   "pl": "1 ₡",
   "d": "Imprimante 3D domestique, objets standards (taille −2 à 0).",
   "img": "Images/inge-imprimante.jpg"
  },
  {
   "n": "Imprimante industrielle",
   "a": "inge",
   "pm": "P",
   "v": 5,
   "pl": "5 ₡",
   "f": [
    [
     "Indice",
     "3"
    ]
   ],
   "d": "Assemble et désassemble la matière sans limite de surface.",
   "img": "Images/inge-imprimante-industrielle.jpg"
  },
  {
   "n": "Nano-assembleur",
   "a": "inge",
   "v": 5,
   "pl": "5 ₡",
   "d": "Impression au niveau atomique (mais lente).",
   "img": "Images/inge-nano-assembleur.jpg"
  },
  {
   "n": "Senseur",
   "a": "inge",
   "v": null,
   "pl": "2–7 ₡ · 6 versions",
   "f": [
    [
     "Bonus",
     "+i dés"
    ]
   ],
   "d": "Spectre au choix (visible, IR, radio, audible…). Fournit +i dés. Six versions, une par indice.",
   "hero": true,
   "vc": 6,
   "img": "Images/inge-senseur.jpg"
  },
  {
   "n": "Thermal smoke",
   "a": "inge",
   "v": 1,
   "pl": "1 ₡",
   "d": "Grenade fumigène qui avale la chaleur : les lasers y perdent leur AP, les capteurs thermiques leurs repères.",
   "img": "Images/inge-thermal-smoke.jpg"
  },
  {
   "n": "Scanner biométrique",
   "a": "bio",
   "v": 0,
   "pl": "0 ₡",
   "d": "Contact : santé, augments, brainwaves…",
   "img": "Images/bio-scanner-biometrique.jpg"
  },
  {
   "n": "Medkit",
   "a": "bio",
   "v": 1,
   "pl": "1 ₡",
   "f": [
    [
     "Indice",
     "2"
    ],
    [
     "Conso",
     "1 biogel / 10 utilisations"
    ]
   ],
   "d": "Outils et connaissances de médecine. Comprend scanner biométrique, petit scalpel laser, synthétiseur (niv. 2).",
   "img": "Images/bio-medkit.jpg"
  },
  {
   "n": "Capsule de biogel",
   "a": "bio",
   "v": 1,
   "pl": "1 ₡",
   "f": [
    [
     "Poids",
     "1 kg"
    ]
   ],
   "d": "1 kg de cellules souches, nutriments et nanites. La monnaie de la médecine.",
   "img": "Images/bio-capsule-de-biogel.jpg"
  },
  {
   "n": "Patch anti-douleur",
   "a": "bio",
   "v": 0,
   "pl": "0 ₡",
   "d": "Ignore 3 pts de douleur. Usages consécutifs : 1 point de fatigue.",
   "img": "Images/bio-patch-anti-douleur.jpg"
  },
  {
   "n": "Biomoniteur",
   "a": "bio",
   "v": 0,
   "pl": "0 ₡",
   "d": "Surveille les fonctions vitales.",
   "img": "Images/bio-biomoniteur.jpg"
  },
  {
   "n": "Cuve Bakta",
   "a": "bio",
   "v": 8,
   "pl": "8 ₡",
   "f": [
    [
     "Indice",
     "6"
    ],
    [
     "Requis",
     "Processeur 4 · Biologie 5"
    ]
   ],
   "s": "« Un corps de rechange en 48 h. »",
   "d": "Chirurgie, implantation et clonage.",
   "img": "Images/bio-cuve-bakta.jpg"
  },
  {
   "n": "Croix Rouge",
   "a": "bio",
   "v": 0,
   "pl": "0 ₡",
   "d": "Gel en spray, stabilise un blessé.",
   "img": "Images/bio-croix-rouge.jpg"
  },
  {
   "n": "Jesus",
   "a": "bio",
   "v": 1,
   "pl": "1 ₡",
   "s": "« Seringue de résurrection. »",
   "d": "Ignore 10 points de douleur et réanime. Usages consécutifs : potentiellement fatal.",
   "img": "Images/bio-jesus.jpg"
  },
  {
   "n": "Scanner Xenos",
   "a": "bio",
   "v": 2,
   "pl": "2 ₡",
   "f": [
    [
     "Bonus",
     "+1D"
    ]
   ],
   "d": "Scanner multispectres spécialisé exploration.",
   "img": "Images/bio-scanner-xenos.jpg"
  },
  {
   "n": "Labo portable",
   "a": "bio",
   "v": 3,
   "pl": "3 ₡",
   "f": [
    [
     "Indice",
     "4"
    ]
   ],
   "d": "Sac à dos d'analyse et de synthèse (niveau 4).",
   "img": "Images/bio-labo-portable.jpg"
  },
  {
   "n": "Drone Bakta",
   "a": "bio",
   "v": 3,
   "pl": "3 ₡",
   "d": "Corps 1, Proc 3, taille −1, Biologie 4. Volant. Medkit. Slot needler (vendu séparément).",
   "img": "Images/bio-drone-bakta.jpg"
  },
  {
   "n": "Design virtuel",
   "a": "elec",
   "v": 0,
   "pl": "0 ₡",
   "d": "Avatar ou nœud personnalisé : quitte à exister en ligne, autant soigner le décor.",
   "img": "Images/elec-design-virtuel.jpg"
  },
  {
   "n": "Virus éveillé",
   "a": "elec",
   "pm": "S",
   "v": null,
   "pl": "1–36 ₡ · 6 versions",
   "s": "« Un réveil brutal pour leurs systèmes. »",
   "f": [
    [
     "Effet",
     "dégâts matriciels +i"
    ],
    [
     "Domaine",
     "cybercombat"
    ]
   ],
   "hero": true,
   "vc": 6,
   "licence": true,
   "d": "Dégâts matriciels +i (cybercombat). Six versions, une par indice.",
   "img": "Images/elec-virus-eveille.jpg"
  },
  {
   "n": "ICE",
   "a": "elec",
   "v": null,
   "pl": "1–36 ₡ · 6 versions",
   "f": [
    [
     "Effet",
     "armure matricielle +i"
    ]
   ],
   "hero": true,
   "vc": 6,
   "d": "Armure matricielle +i (cybercombat). Six versions, une par indice, une marque différente — ouvrir la fiche.",
   "img": "Images/elec-ice.jpg"
  },
  {
   "n": "ICE noire",
   "a": "elec",
   "pm": "M",
   "v": null,
   "pl": "+2 ₡",
   "s": "« Elle déconnecte moins qu'elle ne branche. »",
   "f": [
    [
     "Effet",
     "empêche la déconnexion"
    ],
    [
     "Risque",
     "grille les cerveaux overclockés"
    ]
   ],
   "d": "Contre-mesure interdite : empêche la déconnexion forcée et grille les cerveaux en overclock. Vous aussi, peut-être.",
   "img": "Images/elec-ice-noire.jpg"
  },
  {
   "n": "Hub",
   "a": "elec",
   "pm": "S",
   "v": null,
   "pl": "1–6 ₡ · 6 versions",
   "f": [
    [
     "Taille",
     "i − 3"
    ],
    [
     "Synchronisation",
     "10^i nœuds"
    ]
   ],
   "hero": true,
   "vc": 6,
   "d": "Le chef d'orchestre de vos réseaux : synchronise jusqu'à 10^i nœuds et tient dans la taille d'un moule à manqué (i − 3). Six versions, une marque par indice.",
   "img": "Images/elec-hub.jpg"
  },
  {
   "n": "Jammer",
   "a": "elec",
   "pm": "M",
   "v": null,
   "pl": "1–6 ₡ · 6 versions",
   "s": "« Le silence est d'or. »",
   "f": [
    [
     "Effet",
     "−i/2 dés sur comm non autorisées"
    ],
    [
     "Bande",
     "sauf une"
    ]
   ],
   "hero": true,
   "vc": 6,
   "d": "Surcharge les ondes sauf une bande : −i/2 dés aux communications non autorisées. Six versions.",
   "img": "Images/elec-jammer.jpg"
  },
  {
   "n": "Jamming smoke",
   "a": "elec",
   "pm": "M",
   "v": 1,
   "pl": "1 ₡",
   "d": "Grenade à particules : disperse les ondes (−6D) autant que la conversation.",
   "img": "Images/elec-jamming-smoke.jpg"
  },
  {
   "n": "Peinture anti-wifi",
   "a": "elec",
   "v": 1,
   "pl": "1 ₡",
   "s": "« 1 kg de tranquillité. »",
   "d": "Un kilo de peinture en spray qui rend votre pièce invisible des ondes — et sourdre les techniciens.",
   "img": "Images/elec-peinture-anti-wifi.jpg"
  },
  {
   "n": "Mail interstellaire",
   "a": "elec",
   "v": null,
   "pl": "— ₡",
   "s": "« Parce que la lumière est trop lente. »",
   "f": [
    [
     "État",
     "service expérimental"
    ]
   ],
   "d": "Service expérimental de messagerie physique à grande vitesse. Délais lumineux compris, excuses non incluses.",
   "img": "Images/elec-mail-interstellaire.jpg"
  },
  {
   "n": "Drone / Droide",
   "a": "art",
   "v": 0,
   "pl": "0 ₡",
   "f": [
    [
     "Corps",
     "3"
    ],
    [
     "Processeur",
     "3"
    ]
   ],
   "d": "Le châssis de toutes les sous-traitances : Corps 3, Processeur 3, et vos ordres.",
   "img": "Images/art-drone-droide.jpg"
  },
  {
   "n": "Clone standardisé",
   "a": "art",
   "v": 0,
   "pl": "0 ₡",
   "s": "« Apparence au catalogue. Âme non fournie. »",
   "d": "Corps neuf tiré du catalogue d'apparences. Sans mémoire, sans état civil, sans remords.",
   "img": "Images/art-clone-standardise.jpg"
  },
  {
   "n": "Clone personnalisé",
   "a": "art",
   "v": 1,
   "pl": "+1 ₡",
   "d": "Votre tête sur un corps neuf : apparence, gènes et marques à façon. Le surcroît de personnalité coûte un crédit.",
   "img": "Images/art-clone-personnalise.jpg"
  },
  {
   "n": "Réparateur",
   "a": "art",
   "v": 3,
   "pl": "3 ₡",
   "d": "Drone taille −1, Électronique 4, Ingénierie 4, bricokit.",
   "img": "Images/art-reparateur.jpg"
  },
  {
   "n": "Majordome",
   "a": "art",
   "v": 1,
   "pl": "1 ₡",
   "d": "Droïde de maison taille 0, Communication 4 : il ouvre, il sert, il ment sur votre présence avec le sourire.",
   "img": "Images/art-majordome.jpg"
  },
  {
   "n": "Cyberdog",
   "a": "art",
   "v": 0,
   "pl": "0 ₡",
   "s": "« Le meilleur ami du transhumain. Options sur demande. »",
   "f": [
    [
     "Taille",
     "−1"
    ]
   ],
   "d": "Chien de compagnie révisé : taille −1, mord sur demande, adore déjà son successeur.",
   "img": "Images/art-cyberdog.jpg"
  },
  {
   "n": "Légionnaire",
   "a": "art",
   "pm": "M",
   "v": 20,
   "pl": "20 ₡",
   "promo": true,
   "s": "« Apparence fixe. Dévouement fixe. »",
   "f": [
    [
     "Base",
     "clone + pack Ares Legion"
    ]
   ],
   "d": "Clone verrouillé sur l'apparence et la doctrine du pack Ares Legion.\nIl vous survit souvent — ça fait partie du contrat.",
   "img": "Images/art-legionnaire.jpg"
  },
  {
   "n": "Bug",
   "a": "art",
   "pm": "M",
   "v": 5,
   "pl": "5 ₡",
   "f": [
    [
     "Taille",
     "−2"
    ],
    [
     "Int",
     "4 · Infiltration 3 · Élec 1"
    ]
   ],
   "d": "Drone discret de taille −2 : Int 4, Infiltration 3, Électronique 1. Il vous précède dans la pièce.",
   "img": "Images/art-bug.jpg"
  },
  {
   "n": "Spider",
   "a": "art",
   "pm": "M",
   "v": 6,
   "pl": "6 ₡",
   "f": [
    [
     "Taille",
     "−1"
    ],
    [
     "Mods",
     "caméléon, gecko, lockpick"
    ]
   ],
   "d": "Drone d'infiltration caméléon, grimpeur et crocheteur. Personne ne l'a vu ; c'est le principe.",
   "img": "Images/art-spider.jpg"
  },
  {
   "n": "Bouncer",
   "a": "art",
   "v": 3,
   "pl": "3 ₡",
   "d": "videur autonome : Corps 4, Réflexes 1, pistolet à gel. Il connaît votre carte, pas votre nom.",
   "img": "Images/art-bouncer.jpg"
  },
  {
   "n": "Pack Exosuit",
   "a": "art",
   "pm": "P",
   "v": 5,
   "pl": "5 ₡",
   "f": [
    [
     "Cinétique",
     "3"
    ]
   ],
   "d": "La coquille motorisée (cinétique 3) avec son autopilote. La coquille seule s'achète au rayon Armures.",
   "img": "Images/art-pack-exosuit.jpg"
  },
  {
   "n": "Pack Power armor",
   "a": "art",
   "pm": "M",
   "v": 10,
   "pl": "10 ₡",
   "f": [
    [
     "Cinétique",
     "4"
    ]
   ],
   "d": "Power armor pilotée par drone : cinétique 4, deux tonnes. La tenue nue est au rayon Armures.",
   "img": "Images/art-pack-power-armor.jpg"
  },
  {
   "n": "Pokebot (basique)",
   "a": "art",
   "v": 3,
   "pl": "3 ₡",
   "f": [
    [
     "Corps",
     "4"
    ],
    [
     "Processeur",
     "4"
    ],
    [
     "Taille",
     "−2 → 0"
    ]
   ],
   "d": "Châssis de combat modulaire, taille −2 à 0. Corps 4, Processeur 4, Réflexes 1 — les options se vendent séparément.",
   "img": "Images/art-pokebot-basique.jpg"
  },
  {
   "n": "Pokebot (évolution)",
   "a": "art",
   "pm": "S",
   "v": 20,
   "pl": "20 ₡",
   "f": [
    [
     "Corps",
     "5"
    ],
    [
     "Processeur",
     "4"
    ],
    [
     "Réflexes",
     "2"
    ]
   ],
   "d": "Overclock 1, ossature renforcée + armure dermale.",
   "img": "Images/art-pokebot-evolution.jpg"
  },
  {
   "n": "Sur mesure (esprit)",
   "a": "art",
   "v": null,
   "pl": "Es+Em ₡",
   "d": "Esprit + Empathie (interface non incluse).",
   "img": "Images/art-sur-mesure-esprit.jpg"
  },
  {
   "n": "Chat virtuel",
   "a": "art",
   "v": 0,
   "pl": "0 ₡",
   "s": "« Compagnon non jugé. »",
   "d": "Compagnon conversationnel gratuit, entretenu par la publicité. Il vous adore — c'est son métier.",
   "img": "Images/art-chat-virtuel.jpg"
  },
  {
   "n": "Composé (100 doses)",
   "a": "chim",
   "v": null,
   "pl": "dès 1 ₡",
   "f": [
    [
     "Base",
     "P ₡ (puissance visée)"
    ],
    [
     "Conditionné",
     "100 doses"
    ],
    [
     "Add-ons",
     "22 effets configurables"
    ]
   ],
   "composer": true,
   "licence": true,
   "s": "« Toutes les pharmacopées, aucune excuse. »",
   "d": "Composé de base + add-ons au choix. Prix unitaire = (P + additifs) × multiplicatifs, pour 100 doses ; mise à l'échelle selon les doses. Une seule carte configurateur — les add-ons ne sont plus des articles du catalogue.",
   "img": "Images/chim-compose-100-doses.jpg"
  },
  {
   "n": "Malware",
   "a": "chim",
   "pm": "M",
   "v": null,
   "pl": "P × base ₡",
   "f": [
    [
     "Puissance",
     "P = compétence visée"
    ]
   ],
   "d": "Programme malveillant sur commande : la puissance P cible une compétence précise (voir Électronique).",
   "img": "Images/chim-malware.jpg"
  },
  {
   "n": "Nanobots",
   "a": "chim",
   "v": null,
   "pl": "+1 ₡",
   "d": "Robots microscopiques génériques : ingénierie, biologie ou électronique selon le programme embarqué.",
   "img": "Images/chim-nanobots.jpg"
  },
  {
   "n": "Dopant",
   "a": "chim",
   "v": 2,
   "pl": "+2 ₡",
   "d": "+1 caractéristique pendant 1 h. Non cumulable. Descente −1 pendant 1 h.",
   "parent": "Composé (100 doses)",
   "rule": {
    "k": "fix",
    "v": 2
   },
   "img": "Images/chim-dopant.jpg"
  },
  {
   "n": "Stim",
   "a": "chim",
   "pm": "M",
   "v": 5,
   "pl": "+5 ₡",
   "d": "+1D à une caractéristique pendant 1 h. Descente −1D / 1 h.",
   "parent": "Composé (100 doses)",
   "rule": {
    "k": "fix",
    "v": 5
   },
   "img": "Images/chim-stim.jpg"
  },
  {
   "n": "Toxine",
   "a": "chim",
   "v": null,
   "pl": "+P ₡",
   "f": [
    [
     "Effet",
     "P dégâts"
    ],
    [
     "Incubation",
     "1 jour"
    ]
   ],
   "parent": "Composé (100 doses)",
   "rule": {
    "k": "P"
   },
   "img": "Images/chim-toxine.jpg"
  },
  {
   "n": "Sédatif",
   "a": "chim",
   "v": null,
   "pl": "— ₡",
   "d": "Inflige de la fatigue au lieu de blessures.",
   "parent": "Composé (100 doses)",
   "rule": {
    "k": "zero"
   },
   "img": "Images/chim-sedatif.jpg"
  },
  {
   "n": "Effet rapide",
   "a": "chim",
   "v": 1,
   "pl": "+1-3 ₡",
   "d": "Incubation : heure > minute > seconde.",
   "parent": "Composé (100 doses)",
   "rule": {
    "k": "range",
    "max": 3
   },
   "img": "Images/chim-effet-rapide.jpg"
  },
  {
   "n": "Incubation lente",
   "a": "chim",
   "v": null,
   "pl": "−1 ₡",
   "d": "Allonge le délai (minute > heure > jour > semaine). Cumulable.",
   "parent": "Composé (100 doses)",
   "rule": {
    "k": "m1"
   },
   "img": "Images/chim-incubation-lente.jpg"
  },
  {
   "n": "Persistant",
   "a": "chim",
   "v": null,
   "pl": "+P ₡",
   "d": "Inflige les dégâts P fois.",
   "parent": "Composé (100 doses)",
   "rule": {
    "k": "P"
   },
   "img": "Images/chim-persistant.jpg"
  },
  {
   "n": "Antidouleur",
   "a": "chim",
   "v": null,
   "pl": "+P ₡",
   "d": "Ignore P points de douleur. Usage consécutif : fatigue.",
   "parent": "Composé (100 doses)",
   "rule": {
    "k": "P"
   },
   "img": "Images/chim-antidouleur.jpg"
  },
  {
   "n": "Antidote",
   "a": "chim",
   "v": null,
   "pl": "+P ₡",
   "d": "Neutralise une toxine ou un malware de niveau P. À emporter avant, pas après — c'est un médicament, pas un voeu.",
   "parent": "Composé (100 doses)",
   "rule": {
    "k": "P"
   },
   "img": "Images/chim-antidote.jpg"
  },
  {
   "n": "Contagieux",
   "a": "chim",
   "pm": "I",
   "v": null,
   "pl": "×2 ₡",
   "licence": true,
   "f": [
    [
     "Propagation",
     "contact"
    ]
   ],
   "parent": "Composé (100 doses)",
   "rule": {
    "k": "x2"
   },
   "img": "Images/chim-contagieux.jpg"
  },
  {
   "n": "Aéroporté",
   "a": "chim",
   "v": null,
   "pl": "+1 ₡",
   "parent": "Composé (100 doses)",
   "rule": {
    "k": "fix",
    "v": 1
   },
   "img": "Images/chim-aeroporte.jpg"
  },
  {
   "n": "Déclencheur",
   "a": "chim",
   "v": null,
   "pl": "+1 ₡",
   "d": "Action, temps, réaction chimique…",
   "parent": "Composé (100 doses)",
   "rule": {
    "k": "fix",
    "v": 1
   },
   "img": "Images/chim-declencheur.jpg"
  },
  {
   "n": "Ingéré",
   "a": "chim",
   "v": null,
   "pl": "— ₡",
   "d": "Difficile à détecter.",
   "parent": "Composé (100 doses)",
   "rule": {
    "k": "zero"
   },
   "img": "Images/chim-ingere.jpg"
  },
  {
   "n": "Évolutif",
   "a": "chim",
   "pm": "I",
   "v": null,
   "pl": "+1-6 ₡",
   "licence": true,
   "d": "Augmente le coût de l'antidote.",
   "parent": "Composé (100 doses)",
   "rule": {
    "k": "range",
    "max": 6
   },
   "img": "Images/chim-evolutif.jpg"
  },
  {
   "n": "Discret",
   "a": "chim",
   "v": null,
   "pl": "+1-6 ₡",
   "d": "Difficile à tracer (auto-destruction…).",
   "parent": "Composé (100 doses)",
   "rule": {
    "k": "range",
    "max": 6
   },
   "img": "Images/chim-discret.jpg"
  },
  {
   "n": "Replicant",
   "a": "chim",
   "pm": "I",
   "v": null,
   "pl": "×2 ₡",
   "licence": true,
   "d": "Auto-réplication. Vitesse selon taille et matériaux disponibles.",
   "parent": "Composé (100 doses)",
   "rule": {
    "k": "x2"
   },
   "img": "Images/chim-replicant.jpg"
  },
  {
   "n": "Essaim",
   "a": "chim",
   "v": null,
   "pl": "+2 ₡",
   "f": [
    [
     "Statique",
     "e6 ab/m³"
    ],
    [
     "Active",
     "100 ab/m³"
    ],
    [
     "Stocké",
     "5e6 ab/m³"
    ]
   ],
   "d": "Une créature ; taille liée à la quantité.",
   "parent": "Composé (100 doses)",
   "rule": {
    "k": "fix",
    "v": 2
   },
   "img": "Images/chim-essaim.jpg"
  },
  {
   "n": "Guerre électronique",
   "a": "chim",
   "v": null,
   "pl": "+1 ₡",
   "d": "Dégâts sur Processeur.",
   "parent": "Composé (100 doses)",
   "rule": {
    "k": "fix",
    "v": 1
   },
   "img": "Images/chim-guerre-electronique.jpg"
  },
  {
   "n": "Smarter « JC »",
   "a": "chim",
   "v": null,
   "pl": "×2 ₡",
   "d": "Affecte les systèmes Smartblood (et uniquement eux).",
   "parent": "Composé (100 doses)",
   "rule": {
    "k": "x2"
   },
   "img": "Images/chim-smarter-jc.jpg"
  },
  {
   "n": "Non addictif",
   "a": "chim",
   "v": null,
   "pl": "×2 ₡",
   "d": "Jeton d'addiction si > 1/jour (vs 1/semaine par défaut).",
   "parent": "Composé (100 doses)",
   "rule": {
    "k": "x2"
   },
   "img": "Images/chim-non-addictif.jpg"
  },
  {
   "n": "Ultra addictif",
   "a": "chim",
   "v": null,
   "pl": "÷2 ₡",
   "f": [
    [
     "Risque",
     "jeton par dose"
    ]
   ],
   "parent": "Composé (100 doses)",
   "rule": {
    "k": "div2"
   },
   "img": "Images/chim-ultra-addictif.jpg"
  },
  {
   "n": "Contrôle",
   "a": "chim",
   "v": null,
   "pl": "+2P ₡",
   "d": "Contrôle un sens si P > caractéristique.",
   "parent": "Composé (100 doses)",
   "rule": {
    "k": "2P"
   },
   "img": "Images/chim-controle.jpg"
  },
  {
   "n": "Deuterium (100 t)",
   "a": "mat",
   "v": 0,
   "pl": "0 ₡",
   "f": [
    [
     "Quantité",
     "100 t"
    ],
    [
     "Usage",
     "réacteurs à fusion"
    ]
   ],
   "d": "Cent tonnes pour nourrir un réacteur à fusion. Livrable en navette-citerne ou en menace.",
   "img": "Images/mat-deuterium-100-t.jpg"
  },
  {
   "n": "Scraps (10 t)",
   "a": "mat",
   "v": 1,
   "pl": "1 ₡",
   "f": [
    [
     "Quantité",
     "10 t"
    ]
   ],
   "d": "Dix tonnes de métaux, carbone et matériaux courants. Passé entre les mains des Skavs, c'est presque un vaisseau.",
   "img": "Images/mat-scraps-10-t.jpg"
  },
  {
   "n": "Nanomatériaux (1 t)",
   "a": "mat",
   "v": 1,
   "pl": "1 ₡",
   "f": [
    [
     "Quantité",
     "1 t"
    ]
   ],
   "d": "Une tonne de nanomatériaux de carbone — CNT, graphène — l'échine des armures modernes.",
   "img": "Images/mat-nanomateriaux-1-t.jpg"
  },
  {
   "n": "Composants (1 t)",
   "a": "mat",
   "v": 1,
   "pl": "1 ₡",
   "f": [
    [
     "Quantité",
     "1 t"
    ]
   ],
   "d": "Une tonne de matériaux rares pour l'électronique. En bourse comme en contrebande : volatils.",
   "img": "Images/mat-composants-1-t.jpg"
  },
  {
   "n": "Biogel (1 kg)",
   "a": "mat",
   "v": 1,
   "pl": "1 ₡",
   "f": [
    [
     "Poids",
     "1 kg"
    ]
   ],
   "d": "Cellules souches en vrac. En ville, on achète en capsule ; en chantier, on achète à la tonne.",
   "img": "Images/mat-biogel-1-kg.jpg"
  },
  {
   "n": "Hydrogène métallique",
   "a": "mat",
   "pm": "P",
   "v": 1,
   "pl": "1 ₡/kg",
   "f": [
    [
     "Usage",
     "combustible militaire + supraconducteur"
    ]
   ],
   "d": "Un ₡ le kilo, la tête du client. Carburant militaire et supraconducteur noble ; permis professionnel requis.",
   "img": "Images/mat-hydrogene-metallique.jpg"
  },
  {
   "n": "Antimatière (valise)",
   "a": "mat",
   "pm": "I",
   "v": 1,
   "pl": "1 ₡/g",
   "licence": true,
   "s": "« 1 gramme. Ne pas inhaler. »",
   "f": [
    [
     "Contenant",
     "valise de confinement"
    ],
    [
     "Équivaut",
     "blast effectif ≈ 10 kt (couplage 20–30 % ; énergie brute ≈ 43 kt)"
    ]
   ],
   "d": "Un gramme dans sa valise de confinement. Ne l'ouvrez jamais, ne la posez jamais, ne la monnaie jamais.",
   "img": "Images/mat-antimatiere-valise.jpg"
  },
  {
   "n": "Corps · Athlète",
   "a": "aug",
   "v": 2,
   "pl": "2 ₡",
   "f": [
    [
     "Indice",
     "4"
    ],
    [
     "Corps",
     "4"
    ],
    [
     "Sprint",
     "40 km/h"
    ]
   ],
   "d": "L'humain bien élevé : musculature optimisée, charge ×3, sprint 40 km/h.",
   "img": "Images/aug-corps-athlete.jpg"
  },
  {
   "n": "Corps · Transhumain",
   "a": "aug",
   "v": 5,
   "pl": "5 ₡",
   "f": [
    [
     "Indice",
     "5"
    ],
    [
     "Corps",
     "5"
    ],
    [
     "Sprint",
     "80 km/h"
    ]
   ],
   "d": "Le standard du système. Charge ×5, sprint 80 km/h, coups qui comptent (1+).",
   "img": "Images/aug-corps-transhumain.jpg"
  },
  {
   "n": "Corps · Métahumain",
   "a": "aug",
   "v": 10,
   "pl": "10 ₡",
   "f": [
    [
     "Indice",
     "6"
    ],
    [
     "Corps",
     "6"
    ],
    [
     "Sprint",
     "100 km/h"
    ]
   ],
   "s": "« Au-delà du possible. »",
   "d": "Au-delà du seuil humain — légal seulement dans certaines stations. Charge ×10, sprint 100.",
   "img": "Images/aug-corps-metahumain.jpg"
  },
  {
   "n": "Énergie · Transhumain",
   "a": "aug",
   "v": 2,
   "pl": "2 ₡",
   "f": [
    [
     "Indice",
     "5"
    ],
    [
     "Crise",
     "5 r"
    ],
    [
     "Autonomie",
     "30 min marche"
    ]
   ],
   "d": "Batterie d'indice 5 : cinq rounds en crise, trente minutes de marche autonome.",
   "img": "Images/aug-energie-transhumain.jpg"
  },
  {
   "n": "Processeur · Pro",
   "a": "aug",
   "v": 2,
   "pl": "2 ₡",
   "f": [
    [
     "Indice",
     "4"
    ],
    [
     "Réf.",
     "laptop"
    ]
   ],
   "d": "Un laptop dans le crâne : dix¹² opérations par seconde, cent minutes d'autonomie.",
   "img": "Images/aug-processeur-pro.jpg"
  },
  {
   "n": "Processeur · Gamer",
   "a": "aug",
   "v": 5,
   "pl": "5 ₡",
   "f": [
    [
     "Indice",
     "5"
    ],
    [
     "Réf.",
     "gaming laptop"
    ]
   ],
   "d": "Station de jeu nomade : 10¹³ flops, dix kilos de châssis, trente minutes de gloire.",
   "img": "Images/aug-processeur-gamer.jpg"
  },
  {
   "n": "Processeur · Hacker",
   "a": "aug",
   "v": 10,
   "pl": "10 ₡",
   "f": [
    [
     "Indice",
     "6"
    ],
    [
     "Réf.",
     "custom rig"
    ]
   ],
   "s": "« Votre GPU appelle. »",
   "d": "Custom rig : 10¹⁴ flops. Cinquante kilos — à porter ou à tracter, mais jamais à laisser.",
   "img": "Images/aug-processeur-hacker.jpg"
  },
  {
   "n": "Réflexes · Basic",
   "a": "aug",
   "v": 1,
   "pl": "1 ₡",
   "f": [
    [
     "Indice",
     "1"
    ],
    [
     "Bonus",
     "+1D"
    ]
   ],
   "d": "+1 dé de réflexes. Le café du matin, version implant.",
   "img": "Images/aug-reflexes-basic.jpg"
  },
  {
   "n": "Réflexes · Pro",
   "a": "aug",
   "v": 5,
   "pl": "5 ₡",
   "f": [
    [
     "Indice",
     "2"
    ],
    [
     "Bonus",
     "+2D"
    ]
   ],
   "d": "+2 dés : vous esquivez avant que le geste adverse soit fini.",
   "img": "Images/aug-reflexes-pro.jpg"
  },
  {
   "n": "Réflexes · Sport",
   "a": "aug",
   "v": 10,
   "pl": "10 ₡",
   "f": [
    [
     "Indice",
     "3"
    ],
    [
     "Bonus",
     "+3D"
    ]
   ],
   "d": "+3 dés, agréé sans permis — tant que vous restez dans les ligues.",
   "img": "Images/aug-reflexes-sport.jpg"
  },
  {
   "n": "Bras · Mantis",
   "a": "aug",
   "v": 3,
   "pl": "3 ₡",
   "f": [
    [
     "Indice",
     "5"
    ],
    [
     "Punch",
     "3+"
    ],
    [
     "Vitesse",
     "300 m/s"
    ]
   ],
   "d": "Pli de frappe à 300 m/s, 500 kJ. Tranche les conversations comme les blindages légers.",
   "img": "Images/aug-bras-mantis.jpg"
  },
  {
   "n": "Bras · Heavy duty",
   "a": "aug",
   "v": 0,
   "pl": "0 ₡",
   "f": [
    [
     "Indice",
     "6"
    ],
    [
     "Charge",
     "×100"
    ]
   ],
   "d": "×100 votre masse en prise directe. Ce n'est pas fait pour serrer des mains.",
   "img": "Images/aug-bras-heavy-duty.jpg"
  },
  {
   "n": "Jambes · Speedrun",
   "a": "aug",
   "v": 3,
   "pl": "3 ₡",
   "f": [
    [
     "Indice",
     "6"
    ],
    [
     "Saut",
     "10 m"
    ],
    [
     "Vitesse",
     "100 km/h"
    ]
   ],
   "d": "Cent km/h en ligne droite, dix mètres de bond. Le freinage reste à votre charge.",
   "img": "Images/aug-jambes-speedrun.jpg"
  },
  {
   "n": "Jambes · Cheetah",
   "a": "aug",
   "v": 1,
   "pl": "1 ₡",
   "f": [
    [
     "Indice",
     "5"
    ],
    [
     "Vitesse",
     "30"
    ]
   ],
   "d": "Départ de prédateur : 30 km/h et une accélération que vos proies n'avaient pas prévue.",
   "img": "Images/aug-jambes-cheetah.jpg"
  },
  {
   "n": "Roues · Chenilles",
   "a": "aug",
   "v": 0,
   "pl": "0 ₡",
   "f": [
    [
     "Taille",
     "4−"
    ],
    [
     "Charge",
     "×100"
    ],
    [
     "Vitesse",
     "20"
    ]
   ],
   "d": "Charge ×100, vingt km/h tranquilles. Robuste ; le mot « discret » n'était pas au cahier des charges.",
   "img": "Images/aug-roues-chenilles.jpg"
  },
  {
   "n": "Ailes · Falcon",
   "a": "aug",
   "v": 1,
   "pl": "1 ₡",
   "f": [
    [
     "Taille",
     "−2"
    ],
    [
     "Autonomie",
     "1 h"
    ],
    [
     "Plongée",
     "×2 vit."
    ]
   ],
   "d": "Vautour du vide intérieur : plongée à vitesse ×2, une heure d'autonomie à battre des ailes.",
   "img": "Images/aug-ailes-falcon.jpg"
  },
  {
   "n": "Ailes · Dragonfly",
   "a": "aug",
   "v": 1,
   "pl": "1 ₡",
   "f": [
    [
     "Taille",
     "−4"
    ],
    [
     "Vol",
     "stationnaire"
    ]
   ],
   "d": "Vol stationnaire, braquet 180°, vingt km/h. Conçu pour les nids, les balcons et les traversées de gouffres.",
   "img": "Images/aug-ailes-dragonfly.jpg"
  },
  {
   "n": "Hélices · Thopter",
   "a": "aug",
   "v": 2,
   "pl": "2 ₡",
   "f": [
    [
     "Taille",
     "−1"
    ],
    [
     "Autonomie",
     "10 min"
    ]
   ],
   "d": "Rotor embarqué, vol stationnaire, dix minutes d'enfer en haut de votre échelle.",
   "img": "Images/aug-helices-thopter.jpg"
  },
  {
   "n": "Hélices · Microdrone",
   "a": "aug",
   "v": 2,
   "pl": "2 ₡",
   "f": [
    [
     "Taille",
     "−4"
    ]
   ],
   "d": "L'espion qui tient dans la paume : vingt km/h, dix minutes, et l'art de passer inaperçu.",
   "img": "Images/aug-helices-microdrone.jpg"
  },
  {
   "n": "Booster « DDE »",
   "a": "aug",
   "v": 11,
   "pl": "11 ₡",
   "pm": "M",
   "f": [
    [
     "Taille",
     "1"
    ],
    [
     "Poussée",
     "1 s · 100"
    ]
   ],
   "d": "Le booster d'appoint de la S.A.D. : cinquante g pendant une seconde. On ne l'allume qu'en désespoir — ou en dette.",
   "img": "Images/aug-booster-dde.jpg"
  },
  {
   "n": "Jet pack F-16",
   "a": "aug",
   "v": 12,
   "pl": "12 ₡",
   "pm": "M",
   "f": [
    [
     "Taille",
     "2"
    ],
    [
     "Vitesse",
     "1000"
    ]
   ],
   "d": "Référence d'aéronef à réaction : 1 000 km/h, une heure d'endurance, virages à 90°. Ne tient pas dans un sac.",
   "img": "Images/aug-jet-pack-f-16.jpg"
  },
  {
   "n": "Pistolet",
   "a": "cin",
   "v": 1,
   "pl": "1 ₡",
   "f": [
    [
     "Dégâts",
     "1"
    ],
    [
     "Perforation",
     "*"
    ],
    [
     "Cadence",
     "×3"
    ],
    [
     "Portée",
     "50 m"
    ],
    [
     "Taille",
     "−2"
    ],
    [
     "Munitions",
     "5 mm · 5 kJ"
    ]
   ],
   "d": "5 mm, 5 kJ, chargeur de 30. Cinquante mètres, trois tirs par tour.",
   "img": "Images/cin-pistolet.jpg"
  },
  {
   "n": "SMG",
   "a": "cin",
   "v": 2,
   "pl": "2 ₡",
   "f": [
    [
     "Dégâts",
     "1"
    ],
    [
     "Perforation",
     "*"
    ],
    [
     "Cadence",
     "×6"
    ],
    [
     "Portée",
     "50 m"
    ],
    [
     "Taille",
     "−1"
    ]
   ],
   "d": "Le pistolet qui n'a jamais appris à doser : ×6 de cadence, même portée, cinquante coups.",
   "img": "Images/cin-smg.jpg"
  },
  {
   "n": "Fusil d'assaut",
   "a": "cin",
   "v": 2,
   "pl": "2 ₡",
   "f": [
    [
     "Dégâts",
     "2"
    ],
    [
     "Perforation",
     "*"
    ],
    [
     "Cadence",
     "×3"
    ],
    [
     "Portée",
     "200 m"
    ],
    [
     "Taille",
     "−1"
    ],
    [
     "Munitions",
     "10 mm · 50 kJ"
    ]
   ],
   "s": "« Le vote armé. »",
   "d": "10 mm standard du système : 200 m, rafales ×3, chargeur de 30. L'arme des packs de départ.",
   "img": "Images/cin-fusil-d-assaut.jpg"
  },
  {
   "n": "Revolver",
   "a": "cin",
   "v": 1,
   "pl": "1 ₡",
   "f": [
    [
     "Dégâts",
     "2"
    ],
    [
     "Perforation",
     "*"
    ],
    [
     "Cadence",
     "×1"
    ],
    [
     "Portée",
     "50 m"
    ],
    [
     "Taille",
     "−2"
    ]
   ],
   "s": "« Six balles, zéro debugging. »",
   "d": "Gros calibre, un tir par tour, dix balles. Fiable sous le sable comme sous l'eau.",
   "img": "Images/cin-revolver.jpg"
  },
  {
   "n": "Gatling",
   "a": "cin",
   "v": 5,
   "pl": "5 ₡",
   "f": [
    [
     "Dégâts",
     "2"
    ],
    [
     "Perforation",
     "*"
    ],
    [
     "Cadence",
     "×6"
    ],
    [
     "Portée",
     "200 m"
    ],
    [
     "Taille",
     "0"
    ],
    [
     "Clip",
     "100"
    ]
   ],
   "d": "Cent projectiles, six salves : il ne pleut pas, il tombe.",
   "img": "Images/cin-gatling.jpg"
  },
  {
   "n": "Autocannon",
   "a": "cin",
   "v": 5,
   "pl": "5 ₡",
   "f": [
    [
     "Dégâts",
     "3"
    ],
    [
     "Perforation",
     "*"
    ],
    [
     "Cadence",
     "×3"
    ],
    [
     "Portée",
     "200 m"
    ],
    [
     "Taille",
     "0"
    ],
    [
     "Munitions",
     "20 mm"
    ]
   ],
   "d": "20 mm, 500 kJ par balle — ce qui reste quand on a fini de négocier.",
   "img": "Images/cin-autocannon.jpg"
  },
  {
   "n": "Artillerie",
   "a": "cin",
   "v": null,
   "pl": "— ₡",
   "f": [
    [
     "Dégâts",
     "4+"
    ],
    [
     "Cadence",
     "×3"
    ],
    [
     "Portée",
     "1 km"
    ],
    [
     "Taille",
     "1"
    ],
    [
     "Munitions",
     "40 mm · 5 kJ"
    ]
   ],
   "d": "40 mm, un kilomètre de portée, cinq MJ par tour. La discussion change de ton.",
   "img": "Images/cin-artillerie.jpg"
  },
  {
   "n": "Needler (coilgun)",
   "a": "cin",
   "v": 3,
   "pl": "3 ₡",
   "f": [
    [
     "Dégâts",
     "0"
    ],
    [
     "Perforation",
     "2"
    ],
    [
     "Cadence",
     "×1"
    ],
    [
     "Portée",
     "200 m"
    ],
    [
     "Taille",
     "−2"
    ],
    [
     "Bruit",
     "impact sourd"
    ]
   ],
   "s": "« Silencieux jusqu'à l'impact. »",
   "d": "Coilgun à micropointes : perforation 2, bruit de source d'eau. Le favori des drones médicaux.",
   "img": "Images/cin-needler-coilgun.jpg"
  },
  {
   "n": "Precision rifle",
   "a": "cin",
   "v": 5,
   "pl": "5 ₡",
   "f": [
    [
     "Dégâts",
     "3+"
    ],
    [
     "Perforation",
     "4"
    ],
    [
     "Cadence",
     "×1"
    ],
    [
     "Portée",
     "1 km"
    ],
    [
     "Taille",
     "−1"
    ],
    [
     "Munitions",
     "2 mm · e0 kJ"
    ],
    [
     "Bruit",
     "sonic crack"
    ]
   ],
   "s": "« Un trou. Propre. À 1 km. »",
   "d": "Deux millimètres à trois km/s : un point, un kilomètre, un sonic crack.",
   "img": "Images/cin-precision-rifle.jpg"
  },
  {
   "n": "Sniper (coil)",
   "a": "cin",
   "v": 5,
   "pl": "5 ₡",
   "f": [
    [
     "Dégâts",
     "5+"
    ],
    [
     "Perforation",
     "4"
    ],
    [
     "Cadence",
     "1/s"
    ],
    [
     "Portée",
     "5 km"
    ],
    [
     "Munitions",
     "2 mm · e1 kJ"
    ]
   ],
   "stock": "6 en stock",
   "d": "Cinq kilomètres de portée, bang assourdissant. Vous ne le verrez pas ; il vous a vus il y a cinq minutes.",
   "img": "Images/cin-sniper-coil.jpg"
  },
  {
   "n": "Tank buster",
   "a": "cin",
   "pm": "M",
   "v": 10,
   "pl": "10 ₡",
   "f": [
    [
     "Dégâts",
     "6+"
    ],
    [
     "Perforation",
     "5"
    ],
    [
     "Cadence",
     "1/s"
    ],
    [
     "Portée",
     "5 km"
    ],
    [
     "Munitions",
     "18 mm · e3 kJ"
    ],
    [
     "Clip",
     "50"
    ]
   ],
   "d": "18 mm, cinq cents kilos d'énergie cinétique, chargeur de 50. Conçu pour les blindés et les disputes de voisinage.",
   "img": "Images/cin-tank-buster.jpg"
  },
  {
   "n": "Defense Point « SAD »",
   "a": "cin",
   "pm": "M",
   "v": 10,
   "pl": "10 ₡",
   "f": [
    [
     "Perforation",
     "4"
    ],
    [
     "Cadence",
     "×6"
    ],
    [
     "Portée",
     "200 m"
    ],
    [
     "Taille",
     "−1"
    ],
    [
     "Bruit",
     "vrombissement"
    ]
   ],
   "d": "Point de défense rapproché de la S.A.D. : six salves à deux cents mètres. Son vrombissement suffit souvent.",
   "img": "Images/cin-defense-point-sad.jpg"
  },
  {
   "n": "Shotgun",
   "a": "cin",
   "v": 2,
   "pl": "2 ₡",
   "f": [
    [
     "Dégâts",
     "5+"
    ],
    [
     "Perforation",
     "N/A"
    ],
    [
     "Cadence",
     "×1"
    ],
    [
     "Portée",
     "10 m"
    ],
    [
     "Taille",
     "−1"
    ],
    [
     "Clip",
     "5 · 12 mm"
    ]
   ],
   "d": "Douze millimètres de dispersion à dix mètres. La mitraille ignore les armures.",
   "img": "Images/cin-shotgun.jpg"
  },
  {
   "n": "Lance-grenades",
   "a": "cin",
   "v": 5,
   "pl": "5 ₡",
   "f": [
    [
     "Dégâts",
     "*"
    ],
    [
     "Cadence",
     "1/s"
    ],
    [
     "Portée",
     "200 m"
    ],
    [
     "Munitions",
     "45 mm"
    ]
   ],
   "d": "Tube souple pour tous les 45 mm du rayon Explosifs. Un projectile par seconde, un argument par tir.",
   "img": "Images/cin-lance-grenades.jpg"
  },
  {
   "n": "Nail gun",
   "a": "cin",
   "v": 0,
   "pl": "0 ₡",
   "f": [
    [
     "Dégâts",
     "1"
    ],
    [
     "Perforation",
     "0"
    ],
    [
     "Portée",
     "50 m"
    ]
   ],
   "s": "« Cadeau de chantier. »",
   "d": "L'outil d'atelier qui a mal tourné : cent clous à cinquante mètres.",
   "img": "Images/cin-nail-gun.jpg"
  },
  {
   "n": "Taser",
   "a": "cin",
   "v": 0,
   "pl": "0 ₡",
   "f": [
    [
     "Dégâts",
     "3 E"
    ]
   ],
   "d": "Trois dégâts électriques : court-circuit musculaire, aucune politesse.",
   "img": "Images/cin-taser.jpg"
  },
  {
   "n": "Improvisé",
   "a": "cin",
   "v": 0,
   "pl": "0 ₡",
   "f": [
    [
     "Dégâts",
     "+1"
    ],
    [
     "Portée",
     "1 m"
    ]
   ],
   "d": "Une table, une chaise, une enseigne : +1 dégât, zéro procédure, toujours disponible.",
   "img": "Images/cin-improvise.jpg"
  },
  {
   "n": "Magknife",
   "a": "cin",
   "v": 1,
   "pl": "1 ₡",
   "f": [
    [
     "Dégâts",
     "+1"
    ],
    [
     "Perforation",
     "3"
    ],
    [
     "Portée",
     "1 m"
    ],
    [
     "Taille",
     "−2"
    ]
   ],
   "d": "Couteau multifonction 30 cm à bord monomoléculaire.",
   "img": "Images/cin-magknife.jpg"
  },
  {
   "n": "Monoblade",
   "a": "cin",
   "v": 2,
   "pl": "2 ₡",
   "f": [
    [
     "Dégâts",
     "+2"
    ],
    [
     "Perforation",
     "4"
    ],
    [
     "Portée",
     "1 m"
    ],
    [
     "Taille",
     "−1"
    ]
   ],
   "d": "Tranchant monomoléculaire maintenu par champ EM : le bord n'existe que tant que la batterie tient.",
   "img": "Images/cin-monoblade.jpg"
  },
  {
   "n": "Monowire",
   "a": "cin",
   "v": 5,
   "pl": "5 ₡",
   "f": [
    [
     "Dégâts",
     "0+"
    ],
    [
     "Perforation",
     "5"
    ],
    [
     "Portée",
     "5 m"
    ],
    [
     "Taille",
     "−3"
    ]
   ],
   "s": "« Tranche. Pli. Range. »",
   "d": "Fil quasi-monocouche. Contenant taille doigt. La direction décline toute responsabilité en cas de blessure.",
   "img": "Images/cin-monowire.jpg"
  },
  {
   "n": "Shock fist",
   "a": "cin",
   "v": 2,
   "pl": "2 ₡",
   "f": [
    [
     "Dégâts",
     "+1"
    ],
    [
     "Perforation",
     "EMP"
    ],
    [
     "Portée",
     "1 m"
    ],
    [
     "Taille",
     "−2"
    ]
   ],
   "d": "Détruit l'armure puis grille l'électronique exposée. Mode taser.",
   "img": "Images/cin-shock-fist.jpg"
  },
  {
   "n": "Thunder hammer",
   "a": "cin",
   "pm": "M",
   "v": 5,
   "pl": "5 ₡",
   "f": [
    [
     "Dégâts",
     "+3"
    ],
    [
     "Perforation",
     "EMP"
    ],
    [
     "Portée",
     "1 m"
    ],
    [
     "Taille",
     "0"
    ]
   ],
   "d": "La version lourde du poing EMP : +3 dégâts, une armure à terre, zéro discrétion.",
   "img": "Images/cin-thunder-hammer.jpg"
  },
  {
   "n": "Monosting « JC »",
   "a": "cin",
   "v": 3,
   "pl": "3 ₡",
   "f": [
    [
     "Perforation",
     "2"
    ],
    [
     "Portée",
     "1 m"
    ],
    [
     "Taille",
     "−4"
    ]
   ],
   "d": "Dard 5 mm à pointe mono sous les ongles. Injecte nanites ou toxines.",
   "img": "Images/cin-monosting-jc.jpg"
  },
  {
   "n": "Power fist « SC »",
   "a": "cin",
   "v": 5,
   "pl": "5 ₡",
   "f": [
    [
     "Dégâts",
     "+3"
    ],
    [
     "Portée",
     "1 m"
    ],
    [
     "Taille",
     "−1"
    ]
   ],
   "d": "Gantelet à piston et explosifs focalisés.",
   "img": "Images/cin-power-fist-sc.jpg"
  },
  {
   "n": "Laser mini",
   "a": "beam",
   "v": 3,
   "pl": "3 ₡",
   "f": [
    [
     "Dégâts",
     "1+"
    ],
    [
     "Cadence",
     "1/s"
    ],
    [
     "AP / portée",
     "3m:+3 · 10m:+2 · 30m:+1 · 100m:0 · 300m:−1"
    ],
    [
     "Clip",
     "20"
    ],
    [
     "Énergie",
     "5 kW · batterie 18"
    ]
   ],
   "d": "Le brûleur de poignet : utile à trente mètres, aveuglant au-delà. Vingt tirs avant la pause batterie.",
   "img": "Images/beam-laser-mini.jpg"
  },
  {
   "n": "Pistolet laser",
   "a": "beam",
   "v": 3,
   "pl": "3 ₡",
   "f": [
    [
     "Dégâts",
     "1+"
    ],
    [
     "Cadence",
     "1/s"
    ],
    [
     "AP / portée",
     "30m:+3 · 100m:+2 · 300m:+1 · 1km:0 · 3km:−1"
    ],
    [
     "Taille",
     "−2"
    ],
    [
     "Clip",
     "20"
    ]
   ],
   "d": "Premier vrai laser de ceinture : +3 AP à trente mètres, encore utile au kilomètre.",
   "img": "Images/beam-pistolet-laser.jpg"
  },
  {
   "n": "Fusil léger",
   "a": "beam",
   "v": 5,
   "pl": "5 ₡",
   "f": [
    [
     "Dégâts",
     "1+"
    ],
    [
     "Cadence",
     "1/s"
    ],
    [
     "AP / portée",
     "30m:+4 → 10km:−1"
    ],
    [
     "Taille",
     "−1"
    ],
    [
     "Énergie",
     "50 kW"
    ]
   ],
   "d": "Le standard d'escorte : cinquante kilowatts, un kilomètre de portée utile, vingt rafales.",
   "img": "Images/beam-fusil-leger.jpg"
  },
  {
   "n": "Fusil lourd",
   "a": "beam",
   "v": 8,
   "pl": "8 ₡",
   "f": [
    [
     "Dégâts",
     "1+"
    ],
    [
     "Cadence",
     "1/s"
    ],
    [
     "AP / portée",
     "30m:+5 → 10km:0"
    ],
    [
     "Taille",
     "−1"
    ],
    [
     "Énergie",
     "400 kW"
    ]
   ],
   "d": "Quatre cents kilowatts : il coupe les arbres, les cloisons et l'enthousiasme. Humidité et pluie le rendent timide.",
   "img": "Images/beam-fusil-lourd.jpg"
  },
  {
   "n": "Canon laser",
   "a": "beam",
   "v": 8,
   "pl": "8 ₡",
   "f": [
    [
     "Dégâts",
     "1+"
    ],
    [
     "Cadence",
     "1/s"
    ],
    [
     "AP / portée",
     "100m:+5 → 10km:+1"
    ],
    [
     "Taille",
     "0"
    ],
    [
     "Énergie",
     "e3 kW"
    ]
   ],
   "d": "Montage véhicule ou tourelle : cinq cents kilowatts, dix kilomètres de portée. Il voit la chaleur arriver.",
   "img": "Images/beam-canon-laser.jpg"
  },
  {
   "n": "Tourelle laser",
   "a": "beam",
   "pm": "M",
   "v": 10,
   "pl": "10 ₡",
   "f": [
    [
     "AP / portée",
     "300m:+7 → 10km:+4"
    ],
    [
     "Taille",
     "1"
    ]
   ],
   "d": "Défense de position : +7 AP à trois cents mètres. L'assaillant apprendra le mot « plafond ».",
   "img": "Images/beam-tourelle-laser.jpg"
  },
  {
   "n": "Tourelle +1",
   "a": "beam",
   "pm": "M",
   "v": 20,
   "pl": "20 ₡",
   "f": [
    [
     "AP / portée",
     "1km:+8 → 10km:+6"
    ],
    [
     "Taille",
     "2"
    ]
   ],
   "d": "Version lourde de tourelle : un kilomètre à +8 AP. Elle ne rate plus, elle sélectionne.",
   "img": "Images/beam-tourelle-1.jpg"
  },
  {
   "n": "Tourelle +2",
   "a": "beam",
   "pm": "M",
   "v": 30,
   "pl": "30 ₡",
   "f": [
    [
     "AP / portée",
     "1km:+9 → 10km:+8"
    ],
    [
     "Taille",
     "3"
    ]
   ],
   "s": "« La défense anti-aérienne, en mieux. »",
   "d": "Le mur lumineux : +9 AP au-delà du kilomètre. Les bunkers paient pour la contempler.",
   "img": "Images/beam-tourelle-2.jpg"
  },
  {
   "n": "Fusil à électrons",
   "a": "beam",
   "v": 5,
   "pl": "5 ₡",
   "f": [
    [
     "Dégâts",
     "6"
    ],
    [
     "Cadence",
     "1/s"
    ],
    [
     "Perforation",
     "5"
    ],
    [
     "Effet",
     "trou mm à travers l'armure"
    ]
   ],
   "d": "Un faisceau de particules qui perce un trou millimétrique, blindage ou pas. Portée courte, polémique longue.",
   "img": "Images/beam-fusil-a-electrons.jpg"
  },
  {
   "n": "EMP",
   "a": "beam",
   "v": 5,
   "pl": "5 ₡",
   "f": [
    [
     "Dégâts",
     "6 E"
    ],
    [
     "Cadence",
     "1/s"
    ],
    [
     "AP / portée",
     "3m:+4 → 3km:0"
    ],
    [
     "Effet",
     "électronique en surtension"
    ]
   ],
   "d": "Six dégâts électriques en rafale : l'armure encaisse, l'électronique non. Après, on négocie en morse.",
   "img": "Images/beam-emp.jpg"
  },
  {
   "n": "Bouclier riot",
   "a": "armor",
   "v": 1,
   "pl": "1 ₡",
   "f": [
    [
     "Cinétique",
     "3"
    ],
    [
     "Masse",
     "5 kg"
    ],
    [
     "Matériau",
     "CNT+"
    ]
   ],
   "d": "Le bouclier de l'ordre public : cinétique 3, cinq kilos, une carrière de matraque.",
   "img": "Images/armor-bouclier-riot.jpg"
  },
  {
   "n": "Bouclier storm",
   "a": "armor",
   "pm": "M",
   "v": 3,
   "pl": "3 ₡",
   "f": [
    [
     "Cinétique",
     "4"
    ],
    [
     "Masse",
     "100 kg"
    ]
   ],
   "d": "Le bouclier de siège : cent kilos, cinétique 4. On l'installe, on ne le porte plus.",
   "img": "Images/armor-bouclier-storm.jpg"
  },
  {
   "n": "Peau de carbone",
   "a": "armor",
   "v": 0,
   "pl": "0 ₡",
   "f": [
    [
     "Cinétique",
     "0"
    ],
    [
     "Thermique",
     "+1"
    ]
   ],
   "d": "La première couche de tout le monde : cinétique 0, thermique +1. Un vêtement, pas une armure.",
   "img": "Images/armor-peau-de-carbone.jpg"
  },
  {
   "n": "Reinforcé",
   "a": "armor",
   "v": 1,
   "pl": "1 ₡",
   "f": [
    [
     "Cinétique",
     "1"
    ],
    [
     "Thermique",
     "+1"
    ]
   ],
   "d": "Tissu CNT, kin. 1, thermique +1 : le kevlar des gens qui tiennent à leur silhouette.",
   "img": "Images/armor-reinforce.jpg"
  },
  {
   "n": "Skinsuit",
   "a": "armor",
   "v": 0,
   "pl": "0 ₡",
   "f": [
    [
     "Cinétique",
     "1"
    ],
    [
     "Thermique",
     "+1"
    ]
   ],
   "d": "Seconde peau CNT : cinétique 1 en tout confort. La frontière entre la mode et la protection.",
   "img": "Images/armor-skinsuit.jpg"
  },
  {
   "n": "Kevlar",
   "a": "armor",
   "v": 0,
   "pl": "0 ₡",
   "f": [
    [
     "Cinétique",
     "1"
    ],
    [
     "Thermique",
     "+1"
    ]
   ],
   "d": "Ancien, lourd, honnête : dix kilos pour cinétique 1. Les musées et les milices l'adorent également.",
   "img": "Images/armor-kevlar.jpg"
  },
  {
   "n": "Combat suit",
   "a": "armor",
   "v": 1,
   "pl": "1 ₡",
   "f": [
    [
     "Cinétique",
     "2"
    ],
    [
     "Masse",
     "10 kg"
    ],
    [
     "Matériau",
     "CNT+"
    ]
   ],
   "s": "« Certifiée. Garantie 30 cycles. »",
   "d": "L'uniforme du système : CNT+, dix kilos, cinétique 2. La Legion en distribue par palettes.",
   "img": "Images/armor-combat-suit.jpg"
  },
  {
   "n": "Nano-armor Hazat",
   "a": "armor",
   "pm": "M",
   "v": 5,
   "pl": "5 ₡",
   "f": [
    [
     "Cinétique",
     "3 (en ligne)"
    ],
    [
     "Hors ligne",
     "1 · +1 Thermique"
    ]
   ],
   "d": "Le réseau Hazat maintient l'agrégation moléculaire.",
   "img": "Images/armor-nano-armor-hazat.jpg"
  },
  {
   "n": "Armure Ares",
   "a": "armor",
   "pm": "M",
   "v": 3,
   "pl": "3 ₡",
   "f": [
    [
     "Cinétique",
     "3"
    ],
    [
     "Masse",
     "100 kg"
    ]
   ],
   "d": "Trois plaques CNT+ cent kilos d'engagement. Cinétique 3 ; la Legion la livre avec la nuque raide.",
   "img": "Images/armor-armure-ares.jpg"
  },
  {
   "n": "Exosuit",
   "a": "armor",
   "pm": "P",
   "v": 5,
   "pl": "5 ₡",
   "f": [
    [
     "Cinétique",
     "3"
    ],
    [
     "Masse",
     "200 kg"
    ]
   ],
   "d": "Cinétique 3, deux cents kilos : un véhicule personnel qui vous suit partout. Permis professionnel requis.",
   "img": "Images/armor-exosuit.jpg"
  },
  {
   "n": "Power armor",
   "a": "armor",
   "pm": "M",
   "v": 10,
   "pl": "10 ₡",
   "f": [
    [
     "Cinétique",
     "4"
    ],
    [
     "Masse",
     "2 t"
    ],
    [
     "Surface",
     "3.75 m²"
    ]
   ],
   "s": "« Une forteresse qui tient debout. »",
   "d": "Quatre de cinétique, deux tonnes d'excuse. L'occupant y dort, l'adversaire y réfléchit à deux fois.",
   "img": "Images/armor-power-armor.jpg"
  },
  {
   "n": "Blindage de véhicule",
   "a": "armor",
   "pm": "M",
   "v": 20,
   "pl": "20 ₡",
   "f": [
    [
     "Cinétique",
     "4"
    ],
    [
     "Masse",
     "60 t"
    ]
   ],
   "d": "Quarante millimètres de CNT+ sur six tonnes : la voiture ne prendra pas. Le parking, si.",
   "img": "Images/armor-blindage-de-vehicule.jpg"
  },
  {
   "n": "Synthskin",
   "a": "armor",
   "v": 0,
   "pl": "0 ₡",
   "f": [
    [
     "Thermique",
     "+1"
    ]
   ],
   "d": "Peau artificielle basique : rien contre les balles, un peu contre la chaleur. Le déguisement commence ici.",
   "img": "Images/armor-synthskin.jpg"
  },
  {
   "n": "Armure dermale",
   "a": "armor",
   "v": 1,
   "pl": "1 ₡",
   "f": [
    [
     "Cinétique",
     "2"
    ],
    [
     "Couche",
     "dermique"
    ]
   ],
   "d": "Implant sous-cutané. Douleur si traversée.",
   "img": "Images/armor-armure-dermale.jpg"
  },
  {
   "n": "Plaquage dermique",
   "a": "armor",
   "v": 1,
   "pl": "1 ₡/loc",
   "f": [
    [
     "Cinétique",
     "3"
    ],
    [
     "Couche",
     "dermique"
    ],
    [
     "Pose",
     "par localisation"
    ]
   ],
   "d": "Plaques CNT+ sous la peau, une par localisation : cinétique 3, dix kilos. La note d'antidote de la fiche précédente était une erreur de caisse.",
   "img": "Images/armor-plaquage-dermique.jpg"
  },
  {
   "n": "Blindage interne",
   "a": "armor",
   "v": 2,
   "pl": "2 ₡/loc",
   "f": [
    [
     "Cinétique",
     "4"
    ],
    [
     "Couche",
     "interne"
    ],
    [
     "Masse",
     "100 kg/loc"
    ]
   ],
   "d": "Quatre de cinétique autour des organes, cent kilos par localisation. À ce prix, vous survivrez pour souffrir.",
   "img": "Images/armor-blindage-interne.jpg"
  },
  {
   "n": "Squelette renforcé",
   "a": "armor",
   "v": 1,
   "pl": "1 ₡/loc",
   "f": [
    [
     "Cinétique",
     "3"
    ],
    [
     "Couche",
     "interne"
    ]
   ],
   "d": "Ossature CNT+ par localisation : cinétique 3 interne. Les métas le prennent en package ; les autres en urgence.",
   "img": "Images/armor-squelette-renforce.jpg"
  },
  {
   "n": "Grenade gel",
   "a": "expl",
   "v": 0,
   "pl": "0 ₡ (×10)",
   "f": [
    [
     "Dégâts",
     "20@1m · 10@3m · 5@6m"
    ],
    [
     "Effet",
     "gel contondant"
    ]
   ],
   "d": "Bille de gel contondant : vingt dégâts à un mètre, cinq à six. Non létale, fermement insistante.",
   "img": "Images/expl-grenade-gel.jpg"
  },
  {
   "n": "Grenade gaz",
   "a": "expl",
   "v": null,
   "pl": "× ₡ (×10)",
   "f": [
    [
     "Effet",
     "selon gaz"
    ],
    [
     "Dégâts",
     "50@1m → 5@6m"
    ]
   ],
   "d": "La seule grenade qui se choisit à l'effet : gaz selon commande, du lacrymo à l'interdit.",
   "img": "Images/expl-grenade-gaz.jpg"
  },
  {
   "n": "Fumigène",
   "a": "expl",
   "v": 1,
   "pl": "1 ₡ (×10)",
   "f": [
    [
     "Effet",
     "malus de perception"
    ]
   ],
   "d": "Rideau de particules : malus de perception pour tous, y compris pour vous. La tactique des honnêtes gens.",
   "img": "Images/expl-fumigene.jpg"
  },
  {
   "n": "TNT",
   "a": "expl",
   "v": 1,
   "pl": "1 ₡ (×10)",
   "f": [
    [
     "TNT eq",
     "1 kg"
    ],
    [
     "Dégâts",
     "20@1m → 1@12m"
    ]
   ],
   "d": "Le classique : un kilo d'équivalent, vingt dégâts au point d'impact. Le reste est une question de distance.",
   "img": "Images/expl-tnt.jpg"
  },
  {
   "n": "Frag",
   "a": "expl",
   "v": 1,
   "pl": "1 ₡ (×10)",
   "f": [
    [
     "TNT eq",
     "1 kg"
    ],
    [
     "Dégâts",
     "60@1m → 1@9m"
    ]
   ],
   "d": "Un kilo de TNT et six cents éclats : soixante dégâts à un mètre. Ne tenez rien dans votre main.",
   "img": "Images/expl-frag.jpg"
  },
  {
   "n": "MH (charge)",
   "a": "expl",
   "pm": "P",
   "v": 4,
   "pl": "4 ₡ (×10)",
   "f": [
    [
     "TNT eq",
     "50 kg"
    ],
    [
     "Dégâts",
     "80@1m → 3@12m"
    ]
   ],
   "d": "Une charge de un kilo d'hydrogène métallique : cinquante kilos d'équivalent TNT dans la poche du permis professionnel.",
   "img": "Images/expl-mh-charge.jpg"
  },
  {
   "n": "Beenade « JC »",
   "a": "expl",
   "v": 7,
   "pl": "7 ₡",
   "f": [
    [
     "Effet",
     "e4 abeilles + monosting"
    ],
    [
     "Poids",
     "1 kg"
    ]
   ],
   "s": "« Elle pique. Fort. En essaim. »",
   "licence": true,
   "d": "Dix mille abeilles de combat à dard monosting dans une boule de quinze centimètres. Marque de joueur 'JC' ; ruche furieuse garantie.",
   "img": "Images/expl-beenade-jc.jpg"
  },
  {
   "n": "Stinger (missile)",
   "a": "expl",
   "pm": "M",
   "v": 3,
   "pl": "3 ₡",
   "f": [
    [
     "TNT eq",
     "1 kg"
    ],
    [
     "Dégâts",
     "20@1m → 1@12m"
    ],
    [
     "Masse",
     "10 kg"
    ]
   ],
   "d": "Épaule, dix kilos, un kilo de TNT. La menace portative des convois.",
   "img": "Images/expl-stinger-missile.jpg"
  },
  {
   "n": "Falaq",
   "a": "expl",
   "pm": "M",
   "v": 5,
   "pl": "5 ₡",
   "f": [
    [
     "TNT eq",
     "10 kg"
    ],
    [
     "Dégâts",
     "50@1m → 2@12m"
    ]
   ],
   "d": "Cent kilos, dix tonnes d'équivalent : le missile des frégates et des mauvaises nouvelles.",
   "img": "Images/expl-falaq.jpg"
  },
  {
   "n": "Fateh",
   "a": "expl",
   "pm": "M",
   "v": 5,
   "pl": "5 ₡",
   "f": [
    [
     "TNT eq",
     "100 kg"
    ],
    [
     "Dégâts",
     "100@1m → 5@12m"
    ]
   ],
   "d": "Torpille d'excavation. Carburant limité.",
   "img": "Images/expl-fateh.jpg"
  },
  {
   "n": "Apoc",
   "a": "expl",
   "pm": "M",
   "v": 10,
   "pl": "10 ₡",
   "f": [
    [
     "TNT eq",
     "1000 kg"
    ],
    [
     "Dégâts",
     "200@1m → 10@12m"
    ]
   ],
   "d": "Dix tonnes de missile, mille kilos d'équivalent : il ne démolit pas une position, il la retire du plan.",
   "img": "Images/expl-apoc.jpg"
  },
  {
   "n": "Tête nucléaire",
   "a": "expl",
   "pm": "I",
   "v": null,
   "pl": "— ₡",
   "out": true,
   "licence": true,
   "f": [
    [
     "TNT eq",
     "e7 kg"
    ],
    [
     "Dégâts",
     "5000@1m → 250@12m"
    ],
    [
     "Effet",
     "+ radiations létales"
    ]
   ],
   "s": "« Assurance non incluse. »",
   "d": "Dix kilotonnes et des radiations pour l'après. Indisponible au catalogue — le Consortium n'enregistre même pas la demande.",
   "img": "Images/expl-tete-nucleaire.jpg"
  },
  {
   "n": "Charge MH façonnée",
   "a": "expl",
   "pm": "P",
   "v": 5,
   "pl": "5 ₡",
   "f": [
    [
     "Perforation",
     "5"
    ],
    [
     "Dégâts",
     "3@1m → 1@9m"
    ],
    [
     "TNT eq",
     "50 kg"
    ]
   ],
   "d": "Charge creuse d'hydrogène métallique, adhésive : perce cinquante centimètres d'acier — ou cinq mètres de CNT+.",
   "img": "Images/expl-charge-mh-faconnee.jpg"
  },
  {
   "n": "Micro-AM",
   "a": "expl",
   "pm": "I",
   "v": null,
   "pl": "— ₡",
   "out": true,
   "licence": true,
   "f": [
    [
     "Dégâts",
     "80@1m → 3@12m"
    ],
    [
     "TNT eq",
     "50 kg"
    ]
   ],
   "d": "Un microgramme d'antimatière dans son piège de confinement. Indisponible, interdit, et bruyant bien avant l'explosion.",
   "img": "Images/expl-micro-am.jpg"
  },
  {
   "n": "Pikashoot",
   "a": "poke",
   "pm": "S",
   "v": 3,
   "pl": "3 ₡",
   "f": [
    [
     "Corps",
     "6"
    ],
    [
     "Processeur",
     "5"
    ],
    [
     "Esprit",
     "3"
    ],
    [
     "Arme",
     "laser lourd ×6 (AP 6→4)"
    ],
    [
     "Vitesse",
     "+5 accel"
    ]
   ],
   "s": "« PI-KA-SHOOOT. »",
   "d": "Mouvements éclair. Vapeur électrifiée (juste pour le style).",
   "img": "Images/poke-pikashoot.jpg"
  },
  {
   "n": "Grolem « SAD »",
   "a": "poke",
   "v": 3,
   "pl": "3 ₡",
   "f": [
    [
     "Corps",
     "4"
    ],
    [
     "Processeur",
     "5"
    ],
    [
     "Esprit",
     "5"
    ],
    [
     "Base",
     "10 × rubber ball taille −1"
    ],
    [
     "Mods",
     "essaim, rebondissant"
    ]
   ],
   "d": "Golem de dix balles rebondissantes qui s'assemblent en un corps taille 0 ; nanites de piratage mordues. Marque S.A.D.",
   "img": "Images/poke-grolem-sad.jpg"
  },
  {
   "n": "Metalos « SC »",
   "a": "poke",
   "v": 3,
   "pl": "3 ₡",
   "f": [
    [
     "Corps",
     "5"
    ],
    [
     "Processeur",
     "4"
    ],
    [
     "Esprit",
     "5"
    ],
    [
     "Armures",
     "4/3/4"
    ],
    [
     "Attaques",
     "scie circulaire, bowling flambé"
    ]
   ],
   "s": "« German scieplex. »",
   "d": "Bots de chantier en colère : scie circulaire, bowling flambé, boosters et saut. Marque de joueur 'SC'.",
   "img": "Images/poke-metalos-sc.jpg"
  },
  {
   "n": "Glocktopus",
   "a": "poke",
   "v": 3,
   "pl": "3 ₡",
   "f": [
    [
     "Corps",
     "6"
    ],
    [
     "Processeur",
     "4"
    ],
    [
     "Arme",
     "revolver bolt ×3"
    ],
    [
     "Bras",
     "6 membres"
    ]
   ],
   "d": "Poulpe à revolver : six bras, bolt ×3, bouclier double. Polyvalent, bruyant, détesté des armuriers.",
   "img": "Images/poke-glocktopus.jpg"
  },
  {
   "n": "Laserhino",
   "a": "poke",
   "pm": "M",
   "v": 20,
   "pl": "20 ₡",
   "f": [
    [
     "Corps",
     "6"
    ],
    [
     "Processeur",
     "4"
    ],
    [
     "Arme",
     "heavy laser ×5 (1+ · 5/s)"
    ],
    [
     "Taille",
     "1"
    ]
   ],
   "s": "« Charge, puis tire. »",
   "d": "Rhinocéros à lasers lourds quintuplés : cinq tirs par seconde. Permis militaire ; patience civile.",
   "img": "Images/poke-laserhino.jpg"
  },
  {
   "n": "Tortufleur",
   "a": "poke",
   "v": 3,
   "pl": "3 ₡",
   "f": [
    [
     "Armes",
     "heavy laser, rayon arc-en-ciel"
    ],
    [
     "Mods",
     "fleurs explosives"
    ],
    [
     "Armures",
     "4/3/3"
    ]
   ],
   "d": "Tortue-laboratoire floral : champs de fleurs piégées, laser multicolore. N'arrosez pas après 20 h.",
   "img": "Images/poke-tortufleur.jpg"
  },
  {
   "n": "Ares Cruiser",
   "a": "ship",
   "pm": "M",
   "v": 100,
   "pl": "100 ₡",
   "f": [
    [
     "Taille",
     "3"
    ],
    [
     "Masse",
     "9 t"
    ],
    [
     "Propulsion",
     "4 +1D"
    ],
    [
     "CPU",
     "5"
    ],
    [
     "Cœur",
     "4"
    ],
    [
     "Senseurs",
     "4"
    ],
    [
     "Armure",
     "0 (1 de face)"
    ],
    [
     "Équipage",
     "10"
    ],
    [
     "Cargo",
     "100 T"
    ]
   ],
   "d": "Railgun fixe, tourelle laser, gyroscope, coque TherMoss, bay drone, autonomie 3/3."
  },
  {
   "n": "LEG GO Cargo",
   "a": "ship",
   "v": 50,
   "pl": "50 ₡",
   "f": [
    [
     "Taille",
     "4"
    ],
    [
     "Masse",
     "17 t"
    ],
    [
     "Propulsion",
     "2"
    ],
    [
     "CPU",
     "3"
    ],
    [
     "Cœur",
     "3"
    ],
    [
     "Armure",
     "0"
    ],
    [
     "Équipage",
     "10"
    ],
    [
     "Cargo",
     "1 kT"
    ]
   ],
   "s": "« Modulaire. Robuste. Livré en kit. »",
   "d": "Bras articulé, baie navette + camion, autopilote 3/3. Pièces disponibles à −1."
  },
  {
   "n": "LEG GO Requin",
   "a": "ship",
   "v": 75,
   "pl": "75 ₡",
   "f": [
    [
     "Taille",
     "4"
    ],
    [
     "Masse",
     "17 t"
    ],
    [
     "Propulsion",
     "3"
    ],
    [
     "CPU",
     "4"
    ],
    [
     "Armure",
     "1"
    ],
    [
     "Équipage",
     "2 (luxe) / 10 (std)"
    ],
    [
     "Cargo",
     "500 T"
    ]
   ],
   "d": "Infirmerie niv. 3, espace loisir 20 passagers, masterchef hydroponique, jumper, radiateurs."
  },
  {
   "n": "LEG GO Deluxe",
   "a": "ship",
   "v": 60,
   "pl": "60 ₡",
   "f": [
    [
     "Taille",
     "4"
    ],
    [
     "Masse",
     "17/13 t"
    ],
    [
     "Propulsion",
     "2"
    ],
    [
     "CPU",
     "5"
    ],
    [
     "Armure",
     "0"
    ],
    [
     "Équipage",
     "10"
    ],
    [
     "Cargo",
     "500 T"
    ]
   ],
   "d": "La version résidence du cargo modulaire : finitions luxueuses, cockpit pour dix, cinq cents tonnes de rangement."
  },
  {
   "n": "Navette",
   "a": "ship",
   "v": 20,
   "pl": "20 ₡",
   "f": [
    [
     "Catégorie",
     "1"
    ],
    [
     "Masse",
     "1 t"
    ],
    [
     "Propulsion",
     "3"
    ],
    [
     "Énergie",
     "3"
    ],
    [
     "Armure",
     "0"
    ],
    [
     "Équipage",
     "10"
    ],
    [
     "Cargo",
     "1 T"
    ]
   ],
   "d": "Adaptation atmosphère. Panneaux solaires."
  },
  {
   "n": "Camion",
   "a": "ship",
   "v": 20,
   "pl": "20 ₡",
   "f": [
    [
     "Catégorie",
     "1"
    ],
    [
     "Masse",
     "1 t"
    ],
    [
     "Propulsion",
     "4"
    ],
    [
     "Énergie",
     "4"
    ],
    [
     "Armure",
     "1 therm · 1 kin"
    ],
    [
     "Équipage",
     "0 (automatisé)"
    ],
    [
     "Cargo",
     "10 T"
    ]
   ],
   "d": "Porteur autonome : dix tonnes, flak lourd de protection. Il livre, quoi qu'il en coûte."
  },
  {
   "n": "Frelon",
   "a": "ship",
   "v": 10,
   "pl": "10 ₡",
   "f": [
    [
     "Catégorie",
     "0"
    ],
    [
     "Batterie",
     "3"
    ],
    [
     "Énergie",
     "solaire"
    ],
    [
     "Senseurs",
     "3"
    ],
    [
     "Passagers",
     "0"
    ],
    [
     "Tourelle",
     "laser lourd"
    ]
   ],
   "d": "Drone de combat automatisé : tourelle laser lourde, autonomie solaire, zéro pilote à nourrir."
  },
  {
   "n": "Drone espion",
   "a": "ship",
   "pm": "M",
   "v": null,
   "pl": "— ₡",
   "out": true,
   "f": [
    [
     "Catégorie",
     "0"
    ],
    [
     "Propulsion",
     "4 +1succ"
    ],
    [
     "CPU",
     "4"
    ],
    [
     "Senseurs",
     "5"
    ],
    [
     "Antenne",
     "laser"
    ]
   ],
   "d": "Réservé aux sous-traitants Union certifiés."
  },
  {
   "n": "Cercueil (vaisseau)",
   "a": "ship",
   "v": 5,
   "pl": "5 ₡",
   "f": [
    [
     "Catégorie",
     "1"
    ],
    [
     "Propulsion",
     "4"
    ],
    [
     "Énergie",
     "3"
    ],
    [
     "Cargo",
     "10 T"
    ],
    [
     "Confort",
     "—"
    ]
   ],
   "s": "« Smoothies inclus. »",
   "d": "Une capsule autonome qui attend en orbite que vous veniez la chercher. Le nom est un avertissement."
  },
  {
   "n": "Infrared Monospy",
   "a": "ship",
   "pm": "M",
   "v": null,
   "pl": "— ₡",
   "f": [
    [
     "Catégorie",
     "1"
    ],
    [
     "Propulsion",
     "5"
    ],
    [
     "CPU",
     "5"
    ],
    [
     "Cœur",
     "6"
    ],
    [
     "Senseurs",
     "6"
    ],
    [
     "Armure",
     "1 therm"
    ],
    [
     "Cargo",
     "10 T"
    ],
    [
     "Baie",
     "drone sonde"
    ]
   ],
   "d": "Jumper +2 (vitesses relativistes, consomme antimatière)."
  },
  {
   "n": "Ares Coyote",
   "a": "ship",
   "pm": "M",
   "v": null,
   "pl": "indisponible",
   "out": true,
   "f": [
    [
     "Taille",
     "3"
    ],
    [
     "Propulsion",
     "5 +1D"
    ],
    [
     "CPU",
     "6"
    ],
    [
     "Armure",
     "1 (2 de face)"
    ],
    [
     "Baie",
     "drone espion"
    ],
    [
     "Infirmerie",
     "niv. 3"
    ]
   ],
   "d": "Chasseur Ares indisponible au catalogue : troupe, infirmerie, baie à drone espion. On ne l'achète pas, on se le voit confier."
  },
  {
   "n": "Ares Limo VIP",
   "a": "ship",
   "pm": "V",
   "v": null,
   "pl": "indisponible",
   "out": true,
   "f": [
    [
     "Catégorie",
     "2"
    ],
    [
     "Propulsion",
     "5"
    ],
    [
     "Armure",
     "3 therm · 2 kin"
    ],
    [
     "Équipage",
     "10 (2 suites)"
    ],
    [
     "Droïde",
     "Physique 4 + armure combat"
    ],
    [
     "Infirmerie",
     "niv. 5"
    ]
   ],
   "s": "« Le tapis rouge, à Mach 25. »",
   "d": "Le salon volant de la Corpo : deux suites, droïde de protection, infirmerie cinq. Prix : nous consulter — discrétion incluse."
  },
  {
   "n": "MCRN Scirocco",
   "a": "ship",
   "pm": "M",
   "v": null,
   "pl": "nous consulter",
   "out": true,
   "img": "../Attachments/Hyperion blueprint.png",
   "f": [
    [
     "Taille",
     "6"
    ],
    [
     "Masse",
     "100 kt"
    ],
    [
     "Dimensions",
     "100 × 400 m"
    ],
    [
     "Armure",
     "4 (25%)"
    ],
    [
     "Équipage",
     "100 soldats + 1000 droïdes"
    ],
    [
     "Baie",
     "6 frégates · 40 drones Wasp"
    ],
    [
     "Engine",
     "1 PW"
    ],
    [
     "Radiateurs",
     "5 TW"
    ]
   ],
   "d": "Battlecruiser de cent kilotonnes : mille droïdes, six frégates en baie, laser de front à quinze mille kilomètres. Les nations s'en portent garantes ; pas vous."
  },
  {
   "n": "Ares Hyperion",
   "a": "ship",
   "pm": "M",
   "v": null,
   "pl": "nous consulter",
   "out": true,
   "img": "../Attachments/Hyperion.webp",
   "f": [
    [
     "Taille",
     "7"
    ],
    [
     "Masse",
     "1 Mt"
    ],
    [
     "Dimensions",
     "200 × 800 m"
    ],
    [
     "Propulsion",
     "5"
    ],
    [
     "CPU",
     "5"
    ],
    [
     "Sensors",
     "5"
    ]
   ],
   "s": "« La diplomatie, version 800 m. »",
   "d": "Cuirassé. Dossier classé. Les dimensions sont connues, pas la mission."
  },
  {
   "n": "Exacting class",
   "a": "ship",
   "pm": "M",
   "v": 20,
   "pl": "20 ₡",
   "f": [
    [
     "Taille",
     "3"
    ],
    [
     "Masse",
     "9 t"
    ],
    [
     "Propulsion",
     "4 +1D"
    ],
    [
     "Armure",
     "1 (+1 face)"
    ],
    [
     "Coût de base",
     "structure + moteur"
    ],
    [
     "Options",
     "coilgun, 3 lasers, lance-missile, gyro, coque TherMoss, atmo, jumper, autopilote 5/5"
    ]
   ],
   "d": "Canonnière modulaire Ares : autopilote 5/5, trois lasers, lance-missiles, rentrée atmosphérique. Livrée avec son cercueil d'équipage."
  },
  {
   "n": "Mantis",
   "a": "ship",
   "pm": "M",
   "v": null,
   "pl": "— ₡",
   "f": [
    [
     "Taille",
     "2"
    ],
    [
     "Masse",
     "4 t"
    ],
    [
     "Propulsion",
     "3"
    ],
    [
     "CPU",
     "3"
    ],
    [
     "Cœur",
     "4"
    ],
    [
     "Armure",
     "1"
    ],
    [
     "Armement",
     "2 × canon d'assaut + lance-missile"
    ],
    [
     "Équipage",
     "0"
    ]
   ],
   "s": "« Il ne négocie pas. »",
   "d": "Chasse-drones de quatre tonnes : deux canons d'assaut, un lance-missiles, personne à bord. Le nom du bras n'est pas un hasard."
  },
  {
   "n": "Vampire « SAD »",
   "a": "mods",
   "pm": "M",
   "v": 10,
   "pl": "10 ₡",
   "s": "« Votre énergie, merci. »",
   "f": [
    [
     "Type",
     "biomod"
    ],
    [
     "Origine",
     "S.A.D. (Tau Ceti)"
    ],
    [
     "Rareté",
     "produit de niche — le prix suit la rareté (dispo = coût)"
    ]
   ],
   "d": "Biomod : draine la réserve d'énergie d'une cible au contact et la transfère à son porteur. Reclassé depuis les armes (arbitrage MJ, registre D10) — 10 ₡, permis Militaire ; sa rareté gonfle le prix.",
   "img": "Images/mods-vampire-sad.jpg"
  },
  {
   "n": "Son-Y « HomeGuard » — ICE i1",
   "a": "elec",
   "parent": "ICE",
   "idx": 1,
   "marque": "Son-Y",
   "v": 1,
   "pl": "1 ₡",
   "d": "Armure matricielle +1 — grand public, gratuit pour citoyens Alpha",
   "model": "HomeGuard",
   "img": "Images/elec-son-y-homeguard-ice-i1.jpg"
  },
  {
   "n": "Skavs « Grille-rouille » — ICE i2",
   "a": "elec",
   "parent": "ICE",
   "idx": 2,
   "marque": "Skavs",
   "v": 4,
   "pl": "4 ₡",
   "d": "+2 — bricolage, pannes aléatoires",
   "model": "Grille-rouille",
   "img": "Images/elec-skavs-grille-rouille-ice-i2.jpg"
  },
  {
   "n": "X-Cell « Vaultlight » — ICE i3",
   "a": "elec",
   "parent": "ICE",
   "idx": 3,
   "marque": "X-Cell",
   "v": 9,
   "pl": "9 ₡",
   "d": "+3 — coffre-fort numérique",
   "model": "Vaultlight",
   "img": "Images/elec-x-cell-vaultlight-ice-i3.jpg"
  },
  {
   "n": "Neumann « Zen » — ICE i4",
   "a": "elec",
   "parent": "ICE",
   "idx": 4,
   "marque": "Neumann",
   "v": 16,
   "pl": "16 ₡",
   "d": "+4 — ICE mental anti-panique",
   "model": "Zen",
   "img": "Images/elec-neumann-zen-ice-i4.jpg"
  },
  {
   "n": "NetWatch « Bastion » — ICE i5",
   "a": "elec",
   "parent": "ICE",
   "idx": 5,
   "marque": "NetWatch",
   "v": 25,
   "pl": "25 ₡",
   "d": "+5 — standard d'entreprise ; accepte l'option noire +2 ₡",
   "model": "Bastion",
   "img": "Images/elec-netwatch-bastion-ice-i5.jpg"
  },
  {
   "n": "Hazat « Chevalier assermenté » — ICE i6",
   "a": "elec",
   "parent": "ICE",
   "idx": 6,
   "marque": "Hazat",
   "v": 36,
   "pl": "36 ₡",
   "d": "+6 — flotte ONU/Ares",
   "pm": "M",
   "model": "Chevalier assermenté",
   "img": "Images/elec-hazat-chevalier-assermente-ice-i6.jpg"
  },
  {
   "n": "Skavs « Pique-carcasse » — Virus éveillé i1",
   "a": "elec",
   "parent": "Virus éveillé",
   "idx": 1,
   "marque": "Skavs",
   "v": 1,
   "pl": "1 ₡",
   "d": "Dégâts matriciels +1 — junkware bon marché",
   "pm": "S",
   "model": "Pique-carcasse",
   "img": "Images/elec-skavs-pique-carcasse-virus-eveille-i1.jpg"
  },
  {
   "n": "Voodoos « Malédiction » — Virus éveillé i2",
   "a": "elec",
   "parent": "Virus éveillé",
   "idx": 2,
   "marque": "Voodoos",
   "v": 4,
   "pl": "4 ₡",
   "d": "+2 — hex-code, rumeurs d'auto-réplication",
   "pm": "S",
   "model": "Malédiction",
   "img": "Images/elec-voodoos-malediction-virus-eveille-i2.jpg"
  },
  {
   "n": "Utopia « Désarroi » — Virus éveillé i3",
   "a": "elec",
   "parent": "Virus éveillé",
   "idx": 3,
   "marque": "Utopia",
   "v": 9,
   "pl": "9 ₡",
   "d": "+3 — anti-corporations",
   "pm": "I",
   "licence": true,
   "model": "Désarroi",
   "img": "Images/elec-utopia-desarroi-virus-eveille-i3.jpg"
  },
  {
   "n": "Ten-Cents « Viral » — Virus éveillé i4",
   "a": "elec",
   "parent": "Virus éveillé",
   "idx": 4,
   "marque": "Ten-Cents",
   "v": 16,
   "pl": "16 ₡",
   "d": "+4 — détournement de flux promotionnels",
   "pm": "I",
   "licence": true,
   "model": "Viral",
   "img": "Images/elec-ten-cents-viral-virus-eveille-i4.jpg"
  },
  {
   "n": "NetWatch « Exorcisme » — Virus éveillé i5",
   "a": "elec",
   "parent": "Virus éveillé",
   "idx": 5,
   "marque": "NetWatch",
   "v": 25,
   "pl": "25 ₡",
   "d": "+5 — contre-attaque licite",
   "pm": "S",
   "model": "Exorcisme",
   "img": "Images/elec-netwatch-exorcisme-virus-eveille-i5.jpg"
  },
  {
   "n": "70R « Réveil » — Virus éveillé i6",
   "a": "elec",
   "parent": "Virus éveillé",
   "idx": 6,
   "marque": "70R",
   "v": 36,
   "pl": "36 ₡",
   "d": "+6 — mythe du net, jamais vérifié",
   "pm": "I",
   "licence": true,
   "model": "Réveil",
   "img": "Images/elec-70r-reveil-virus-eveille-i6.jpg"
  },
  {
   "n": "Son-Y « Homehub » — Hub i1",
   "a": "elec",
   "parent": "Hub",
   "idx": 1,
   "marque": "Son-Y",
   "v": 1,
   "pl": "1 ₡",
   "d": "Synchronise taille −2 · 10 nœuds",
   "pm": "S",
   "model": "Homehub",
   "img": "Images/elec-son-y-homehub-hub-i1.jpg"
  },
  {
   "n": "LEG GO « Hub modulaire » — Hub i2",
   "a": "elec",
   "parent": "Hub",
   "idx": 2,
   "marque": "LEG GO",
   "v": 2,
   "pl": "2 ₡",
   "d": "Synchronise taille −1 · 100 nœuds",
   "pm": "S",
   "model": "Hub modulaire",
   "img": "Images/elec-leg-go-hub-modulaire-hub-i2.jpg"
  },
  {
   "n": "YouPub « Feed hub » — Hub i3",
   "a": "elec",
   "parent": "Hub",
   "idx": 3,
   "marque": "YouPub",
   "v": 3,
   "pl": "3 ₡",
   "d": "Synchronise taille 0 · 1 k nœuds",
   "pm": "S",
   "model": "Feed hub",
   "img": "Images/elec-youpub-feed-hub-hub-i3.jpg"
  },
  {
   "n": "Radiance « Relais » — Hub i4",
   "a": "elec",
   "parent": "Hub",
   "idx": 4,
   "marque": "Radiance",
   "v": 4,
   "pl": "4 ₡",
   "d": "Synchronise taille +1 · 10 k nœuds",
   "pm": "S",
   "model": "Relais",
   "img": "Images/elec-radiance-relais-hub-i4.jpg"
  },
  {
   "n": "X-Cell « Clearing hub » — Hub i5",
   "a": "elec",
   "parent": "Hub",
   "idx": 5,
   "marque": "X-Cell",
   "v": 5,
   "pl": "5 ₡",
   "d": "Synchronise taille +2 · 100 k nœuds",
   "pm": "S",
   "model": "Clearing hub",
   "img": "Images/elec-x-cell-clearing-hub-hub-i5.jpg"
  },
  {
   "n": "Stategrid Combine « Nexus » — Hub i6",
   "a": "elec",
   "parent": "Hub",
   "idx": 6,
   "marque": "Stategrid Combine",
   "v": 6,
   "pl": "6 ₡",
   "d": "Synchronise taille +3 · 1 M nœuds — réseau de super-IA",
   "pm": "S",
   "model": "Nexus",
   "img": "Images/elec-stategrid-combine-nexus-hub-i6.jpg"
  },
  {
   "n": "Cowboy « Crache-bande » — Jammer i1",
   "a": "elec",
   "parent": "Jammer",
   "idx": 1,
   "marque": "Cowboy",
   "v": 1,
   "pl": "1 ₡",
   "d": "−1/2 dés sur communications non autorisées — usage prime, une bande libre",
   "pm": "M",
   "model": "Crache-bande",
   "img": "Images/elec-cowboy-crache-bande-jammer-i1.jpg"
  },
  {
   "n": "Voodoos « Voile » — Jammer i2",
   "a": "elec",
   "parent": "Jammer",
   "idx": 2,
   "marque": "Voodoos",
   "v": 2,
   "pl": "2 ₡",
   "d": "−2/2 dés sur communications non autorisées",
   "pm": "M",
   "model": "Voile",
   "img": "Images/elec-voodoos-voile-jammer-i2.jpg"
  },
  {
   "n": "Skavs « Chausse-trappe » — Jammer i3",
   "a": "elec",
   "parent": "Jammer",
   "idx": 3,
   "marque": "Skavs",
   "v": 3,
   "pl": "3 ₡",
   "d": "−3/2 dés sur communications non autorisées",
   "pm": "M",
   "model": "Chausse-trappe",
   "img": "Images/elec-skavs-chausse-trappe-jammer-i3.jpg"
  },
  {
   "n": "Ten-Cents « Blanc publicitaire » — Jammer i4",
   "a": "elec",
   "parent": "Jammer",
   "idx": 4,
   "marque": "Ten-Cents",
   "v": 4,
   "pl": "4 ₡",
   "d": "−4/2 dés sur communications non autorisées — épargne ses propres flux",
   "pm": "M",
   "model": "Blanc publicitaire",
   "img": "Images/elec-ten-cents-blanc-publicitaire-jammer-i4.jpg"
  },
  {
   "n": "Legion « Muselière » — Jammer i5",
   "a": "elec",
   "parent": "Jammer",
   "idx": 5,
   "marque": "Legion",
   "v": 5,
   "pl": "5 ₡",
   "d": "−5/2 dés sur communications non autorisées",
   "pm": "M",
   "model": "Muselière",
   "img": "Images/elec-legion-museliere-jammer-i5.jpg"
  },
  {
   "n": "NetWatch « Silence radio » — Jammer i6",
   "a": "elec",
   "parent": "Jammer",
   "idx": 6,
   "marque": "NetWatch",
   "v": 6,
   "pl": "6 ₡",
   "d": "−6/2 dés sur communications non autorisées",
   "pm": "M",
   "model": "Silence radio",
   "img": "Images/elec-netwatch-silence-radio-jammer-i6.jpg"
  },
  {
   "n": "Skavs « Retapé » — Senseur i1",
   "a": "inge",
   "parent": "Senseur",
   "idx": 1,
   "marque": "Skavs",
   "v": 2,
   "pl": "2 ₡",
   "d": "+1D — autonomie douteuse",
   "model": "Retapé",
   "img": "Images/inge-skavs-retape-senseur-i1.jpg"
  },
  {
   "n": "Guilde « Guette-roc » — Senseur i2",
   "a": "inge",
   "parent": "Senseur",
   "idx": 2,
   "marque": "Guilde",
   "v": 3,
   "pl": "3 ₡",
   "d": "+2D — bandes comm long range",
   "model": "Guette-roc",
   "img": "Images/inge-guilde-guette-roc-senseur-i2.jpg"
  },
  {
   "n": "TherMoss « Vision » — Senseur i3",
   "a": "inge",
   "parent": "Senseur",
   "idx": 3,
   "marque": "TherMoss",
   "v": 4,
   "pl": "4 ₡",
   "d": "+3D — thermique différentielle",
   "model": "Vision",
   "img": "Images/inge-thermoss-vision-senseur-i3.jpg"
  },
  {
   "n": "SETI « Grande Ourse » — Senseur i4",
   "a": "inge",
   "parent": "Senseur",
   "idx": 4,
   "marque": "SETI",
   "v": 5,
   "pl": "5 ₡",
   "d": "+4D — multispectral — base du scanner Xenos",
   "model": "Grande Ourse",
   "img": "Images/inge-seti-grande-ourse-senseur-i4.jpg"
  },
  {
   "n": "Macrotek « Veilleur » — Senseur i5",
   "a": "inge",
   "parent": "Senseur",
   "idx": 5,
   "marque": "Macrotek",
   "v": 6,
   "pl": "6 ₡",
   "d": "+5D — blindé (+1 ₡ en durci)",
   "pm": "M",
   "model": "Veilleur",
   "img": "Images/inge-macrotek-veilleur-senseur-i5.jpg"
  },
  {
   "n": "Zarya « Orbital » — Senseur i6",
   "a": "inge",
   "parent": "Senseur",
   "idx": 6,
   "marque": "Zarya",
   "v": 7,
   "pl": "7 ₡",
   "d": "+6D — longue portée",
   "model": "Orbital",
   "img": "Images/inge-zarya-orbital-senseur-i6.jpg"
  },
  {
   "n": "Réflexes « Military »",
   "a": "aug",
   "hero": true,
   "vc": 3,
   "v": null,
   "pl": "16–36 ₡ · 3 versions",
   "s": "« Le temps d'un éclair, deux fois plus. »",
   "f": [
    [
     "Effet",
     "bonus réflexes +X dés"
    ],
    [
     "Masse",
     "X × 5 % du corps"
    ],
    [
     "Gamme",
     "une marque par indice (4–6)"
    ]
   ],
   "d": "Surcélération réflexe militaire. Trois versions, une par indice — ouvrir la fiche. L'overclock cumule avec les risques cybercombat.",
   "img": "Images/aug-reflexes-military.jpg"
  },
  {
   "n": "Max-Tak « Response » — Réflexes « Military » i4",
   "a": "aug",
   "parent": "Réflexes « Military »",
   "idx": 4,
   "marque": "Max-Tak",
   "v": 16,
   "pl": "16 ₡",
   "d": "+4D — forces spéciales Xenos ; masse 20 % du corps",
   "model": "Response",
   "img": "Images/aug-max-tak-response-reflexes-military-i4.jpg"
  },
  {
   "n": "Templiers « Preux » — Réflexes « Military » i5",
   "a": "aug",
   "parent": "Réflexes « Military »",
   "idx": 5,
   "marque": "Templiers",
   "v": 25,
   "pl": "25 ₡",
   "d": "+5D — sécurité privée Ares ; masse 25 %",
   "pm": "M",
   "model": "Preux",
   "img": "Images/aug-templiers-preux-reflexes-military-i5.jpg"
  },
  {
   "n": "Hazat « Palatin » — Réflexes « Military » i6",
   "a": "aug",
   "parent": "Réflexes « Military »",
   "idx": 6,
   "marque": "Hazat",
   "v": 36,
   "pl": "36 ₡",
   "d": "+6D — flotte ONU/Ares ; masse 30 %",
   "pm": "M",
   "model": "Palatin",
   "img": "Images/aug-hazat-palatin-reflexes-military-i6.jpg"
  }
 ]
};
