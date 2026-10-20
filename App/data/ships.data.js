// PROJECTION CURÉE — relevé de la fiche vaisseau, pour le poste de pilotage (Astronav).
// Source unique : Vaisseaux/Transhumains - Spaceships.md (§ Stratios Patrol) et
// Vaisseaux/Stratios Merc.md (§ Stratios Merc). Les feuilles d'origine sont figées
// (export Drive 2026-10-06) ; toute modification de design se fait dans le .md puis ici.
window.TH_DATA = window.TH_DATA || {};
window.TH_DATA.ships = {
  meta: {
    curated: true,
    sources: ['Vaisseaux/Transhumains - Spaceships.md', 'Vaisseaux/Stratios Merc.md'],
    updated: '2026-10-07'
  },
  liste: [
    {
      id: 'stratios-patrol',
      nom: 'Stratios Patrol',
      chassis: 'Stratios', classe: '3', type: 'Frégate', role: 'Escorte et patrouille',
      coque: { largeur: 15, longueur: 60, masseHumide: 354.024, masseSeche: 262.024, equipage: 10, soute: { actuel: 5, max: 7.7 } },
      attributs: {
        puissance: { actuel: 5, max: 5 }, cpu: { actuel: 5, max: 5 },
        agilite: { actuel: 5, max: 5 }, senseurs: { actuel: 4, max: 4 }
      },
      equilibre: {
        puissanceGWm: -19, thermiqueGWm: 57.4,
        autonomiePuissanceMin: 10, autonomieThermiqueMin: 2,
        batterieGWm: 200, dissipateurGW: 0
      },
      moteurs: [
        { nom: 'Fusion — combat',    puissance: '10 %',  accelerationG: 0.807048 },
        { nom: 'Fusion — croisière', puissance: '—',     accelerationG: 0.282467 },
        { nom: 'Antimatière',        puissance: '100 %', accelerationG: 0.807048 }
      ],
      deltaV: [
        { mode: 'D',   carburant: '40 %', valeur: '23,4056 gh' },
        { mode: 'H',   carburant: '0 %',  valeur: '0' },
        { mode: 'D+A', carburant: '60 %', valeur: '14,6285 gd' }
      ],
      exemples: [
        { moteur: 'Fusion — combat',       au: 0.01, duree: '7,56 h', carburant: 'D' },
        { moteur: 'Antimatière (D+A)',     au: 9,    duree: '9,45 d', carburant: 'D+A' }
      ],
      pointsCoque: { avant: 20, max: 30.8 },
      blindage: {
        resistanceChaleur: '0,5 MW/cm²', limiteCompression: '50 MJ/cm²',
        densiteGlobale: '0,760 g/cm²', avant: '3,04 g/cm²', flanc: '0', arriere: '0',
        couches: ['Ether dust', 'Carbon layer'],
        thermique: { avant: 3, flanc: 0, arriere: 0 }, cinetique: { avant: 3, flanc: 0, arriere: 0 }
      },
      armes: [
        { poste: 'Tourelle (avant)',    qte: '2 ×', arme: 'Laser UV 100 ms',     cycles: '1', cadence: '4 min', portee: '40 max', degats: '10 thermique', puissanceGWm: -16, chaleurGWm: 9 },
        { poste: 'Tourelle (flancs, 2)',qte: '2 ×', arme: 'Laser UV 100 ms',     cycles: '0', cadence: '1–10 min', portee: '10 max', degats: '10 thermique', puissanceGWm: 0, chaleurGWm: 0 },
        { poste: 'Tourelle (roue, 2)',  qte: '2 ×', arme: 'Laser IR 200 ms',     cycles: '0', cadence: '1–10 min', portee: '5 max', degats: '5 thermique', puissanceGWm: 0, chaleurGWm: 0 },
        { poste: 'Spine',               qte: '1 ×', arme: 'Coilgun léger',       cycles: '0', cadence: '—', portee: '—', degats: 'cinétique', puissanceGWm: 0, chaleurGWm: 0 },
        { poste: 'Rack (flancs, 2)',    qte: '2 ×', arme: 'Falaq (100 kg guidé)',cycles: '1 lancement/min', cadence: '—', portee: '—', degats: '—', puissanceGWm: 0, chaleurGWm: 0 }
      ],
      munitions: [
        { qte: 1000, nom: 'Rods railgun', detail: '1 kg semi-guidé, 1 m titane, agilité 1' },
        { qte: 40,   nom: 'Falaq',        detail: '100 kg guidé, 40 g / 60 gm, agilité 5' }
      ],
      systemes: [
        { nom: 'Puissance',     etat: '5/5', puissanceGW: 77,    chaleurGW: 15.4 },
        { nom: 'CPU',           etat: '5/5', puissanceGW: -15,   chaleurGW: 2 },
        { nom: 'Agilité',       etat: '5/5', puissanceGW: -1,    chaleurGW: 4 },
        { nom: 'Senseurs',      etat: '4/4', puissanceGW: -12.32,chaleurGW: 1 },
        { nom: 'Radiateurs',    etat: '2/2', puissanceGW: 0,     chaleurGW: -77 },
        { nom: 'Support vie',   etat: '1/2', puissanceGW: -1,    chaleurGW: 1 },
        { nom: 'Gyroscope',     etat: '1/2', puissanceGW: 0,     chaleurGW: 0 },
        { nom: 'Moteur princ.', etat: '—',   puissanceGW: 0,     chaleurGW: 10 },
        { nom: 'Moteur aux.',   etat: '—',   puissanceGW: 0,     chaleurGW: 100 },
        { nom: 'Dissipateur',   etat: '—',   puissanceGW: 0,     chaleurGW: 0 },
        { nom: 'Batterie',      etat: '—',   puissanceGW: -2,    chaleurGW: 2 },
        { nom: 'Structure',     etat: '—',   puissanceGW: 0,     chaleurGW: -10 }
      ],
      profilMoteur: {
        puissanceMaxTW: 100,
        combat:      { veKms: 0.484229, veMms: 7,  pousseeMN: 2.85714 },
        croisiere:   { veKms: 0.16948,  veMms: 20, pousseeMN: 1 },
        antimatiere: { veKms: 0.484229, veMms: 70, pousseeMN: 2.85714 }
      },
      equipements: ['5 × Repair spider', '5 × Drones de reconnaissance', 'Voile laser pliable (1 t)', 'Supplies de base (2 t)', 'Rover (1 t)', 'Imprimante 3D (1 t)']
    },
    {
      id: 'stratios-merc',
      nom: 'Stratios Merc',
      chassis: 'Stratios', classe: '3', type: 'Frégate', role: 'Escorte et patrouille',
      coque: { largeur: 15, longueur: 60, masseHumide: 527.601, masseSeche: 429.601, equipage: 10, soute: { actuel: 10.001, max: 0 } },
      attributs: {
        puissance: { actuel: 5, max: 5 }, cpu: { actuel: 5, max: 5 },
        agilite: { actuel: 5, max: 5 }, senseurs: { actuel: 4, max: 4 }
      },
      equilibre: { puissanceGWm: -1.04, thermiqueGWm: -1193, autonomiePuissanceMin: 96, autonomieThermiqueMin: null, batterieGWm: 100, dissipateurGW: 0 },
      moteurs: [
        { nom: 'Fusion — combat',    puissance: '10 %',  accelerationG: 0.541535 },
        { nom: 'Fusion — croisière', puissance: '—',     accelerationG: 0.189537 },
        { nom: 'Antimatière',        puissance: '0 %',   accelerationG: 0 }
      ],
      deltaV: [
        { mode: 'D',   carburant: '38 %', valeur: '15,1829 gh' },
        { mode: 'H',   carburant: '0 %',  valeur: '0' },
        { mode: 'D+A', carburant: '60 %', valeur: '9,98878 gd' }
      ],
      exemples: [ { moteur: 'Fusion — combat', au: 7, duree: '244,3 h', carburant: 'D' } ],
      pointsCoque: { avant: 20, max: 40 },
      blindage: { resistanceChaleur: '0,5 MW/cm²', limiteCompression: '50 MJ/cm²', densiteGlobale: '0,494 g/cm²', avant: '1,98 g/cm²', flanc: '0', arriere: '0', couches: ['Ether dust', 'Carbon layer'], thermique: { avant: 2, flanc: 0, arriere: 0 }, cinetique: { avant: 2, flanc: 0, arriere: 0 } },
      armes: [
        { poste: 'Tourelle (flancs, 2)', qte: '1 ×', arme: 'PDC 40 mm',        cycles: '0', cadence: '—', portee: '—', degats: 'cinétique (1 kg à 2 km/s = 2 MJ, AP 3 cm)', puissanceGWm: 0, chaleurGWm: 0 },
        { poste: 'Tourelle (roue, 2)',   qte: '2 ×', arme: 'Laser IR léger',   cycles: '1', cadence: '—', portee: '0,56–5,59 cd (méd.) / 22,36 (long)', degats: '5 × 1 thermique', puissanceGWm: -0.04, chaleurGWm: 0 },
        { poste: 'Spine',                qte: '1 ×', arme: 'Coilgun léger',    cycles: '0', cadence: '—', portee: '90 cs', degats: '100 g à 30 km/s = 50 MJ', puissanceGWm: 0, chaleurGWm: 0 }
      ],
      munitions: [ { qte: 1000, nom: 'Rods légers', detail: '100 g semi-guidé (1,5 × 36 cm, diamant), agilité 1' }, { qte: 100, nom: 'Cartouches 40 mm', detail: '1 kg' } ],
      systemes: [
        { nom: 'Puissance',   etat: '5/5', puissanceGW: 10,  chaleurGW: 2 },
        { nom: 'CPU',         etat: '5/5', puissanceGW: -4,  chaleurGW: 0 },
        { nom: 'Agilité',     etat: '5/5', puissanceGW: -1,  chaleurGW: 4 },
        { nom: 'Senseurs',    etat: '4/4', puissanceGW: -3.2,chaleurGW: 0 },
        { nom: 'Radiateurs',  etat: '2/2', puissanceGW: 0,   chaleurGW: -1200 },
        { nom: 'Support vie', etat: '1/2', puissanceGW: 0,   chaleurGW: 0 },
        { nom: 'Gyroscope',   etat: '1/2', puissanceGW: 0,   chaleurGW: 0 },
        { nom: 'Moteur princ.', etat: '—', puissanceGW: 0,   chaleurGW: 10 },
        { nom: 'Batterie',    etat: '1',   puissanceGW: -1,  chaleurGW: 1 },
        { nom: 'Structure',   etat: '—',   puissanceGW: 0,   chaleurGW: -10 }
      ],
      profilMoteur: {
        puissanceMaxTW: 100,
        combat:      { veKms: 0.324921, veMms: 7,  pousseeMN: 2.85714 },
        croisiere:   { veKms: 0.113722, veMms: 20, pousseeMN: 1 },
        antimatiere: { veKms: 0,        veMms: 70, pousseeMN: 0 }
      },
      equipements: ['Repair spider', 'Rover', 'Voile laser (1 t)', 'Supplies (2 t)', 'Scrap (3 t)', 'Armure motorisée (2 t)', 'Imprimante 3D (maison)', 'Cuve Bakta', 'Autopilote IA sentiente', 'Habitat gonflable (0,8 g à 5 RPM)']
    }
  ]
};
