// PROJECTION CURÉE — ne pas confondre avec data/*.data.js générés.
// Constantes de jeu utilisées par les calculateurs de l'app (création de perso, jets).
// Source unique : Regles/Transhumains - Règles.md (§ Création, § Skillchecks) —
// `node App/tools/build-data.mjs` vérifie que ces valeurs existent encore dans la source.
window.TH_DATA = window.TH_DATA || {};
window.TH_DATA.ref = {
  meta: { curated: true, source: 'Regles/Transhumains - Règles.md', updated: '2026-10-07' },
  caracs: [
    { id: 'corps',      nom: 'Corps',      desc: 'Force, endurance, vitesse, 7 sens' },
    { id: 'processeur', nom: 'Processeur', desc: 'Calcul, mémoire, analyse' },
    { id: 'esprit',     nom: 'Esprit',     desc: 'Perception, volonté, créativité' },
    { id: 'empathie',   nom: 'Empathie',   desc: 'Charisme, leadership, élocution' }
  ],
  competences: [
    { id: 'aerospatiale', nom: 'Aérospatiale', desc: 'Pilotage, 0g, marine, réparation' },
    { id: 'biologie',     nom: 'Biologie',     desc: 'Médecine, génétique, xénobiologie' },
    { id: 'communication',nom: 'Communication',desc: 'Persuasion, psychologie, négociation' },
    { id: 'culture',      nom: 'Culture',      desc: 'Arts, coutumes, histoire, politique' },
    { id: 'economie',     nom: 'Économie',     desc: 'Corporations, bourse, commerce' },
    { id: 'electronique', nom: 'Électronique', desc: 'RV, hacking, cybercombat' },
    { id: 'ingenierie',   nom: 'Ingénierie',   desc: 'Industrie lourde, énergie, mécanique' },
    { id: 'militaire',    nom: 'Militaire',    desc: 'Combat, stratégie, commandement' },
    { id: 'reputation',   nom: 'Réputation',   desc: 'Notoriété, contacts (voir fiche de règles)' },
    { id: 'sciences',     nom: 'Sciences',     desc: 'Connaissances théoriques, recherche' },
    { id: 'securite',     nom: 'Sécurité',     desc: 'Discrétion, hacking, perception' }
  ],
  coutsCompetence: [
    { niveau: 1, xp: 1,  equivalent: 'Fondamentaux',      voie: 'Crash course' },
    { niveau: 2, xp: 3,  equivalent: 'Notions avancées',  voie: 'Stage' },
    { niveau: 3, xp: 6,  equivalent: 'Diplôme',           voie: 'Permis' },
    { niveau: 4, xp: 10, equivalent: 'Profession',        voie: 'Chauffeur' },
    { niveau: 5, xp: 15, equivalent: 'Compétition',       voie: 'Pilote de course' },
    { niveau: 6, xp: 21, equivalent: 'Maîtrise',          voie: 'Champion' }
  ],
  tranches: [
    { id: 'adolescent', nom: 'Adolescent', age: 10,  xp: 10, credits: 1, historiques: 0, xpAn: '2 xp / an',   xpSeance: '1 xp / scène' },
    { id: 'etudiant',   nom: 'Étudiant',   age: 20,  xp: 30, credits: 1, historiques: 1, xpAn: '1 xp / an',   xpSeance: '3 xp / séance' },
    { id: 'adulte',     nom: 'Adulte',     age: 50,  xp: 60, credits: 2, historiques: 2, xpAn: '1 xp / 2 ans',xpSeance: '2 xp / séance' },
    { id: 'veteran',    nom: 'Vétéran',    age: 100, xp: 85, credits: 3, historiques: 3, xpAn: '1 xp / 5 ans',xpSeance: '1 xp / séance' }
  ],
  dcs: [
    { succes: 5,  niveau: 'Stagiaire' },
    { succes: 10, niveau: 'Cadre' },
    { succes: 15, niveau: 'Expert' },
    { succes: 20, niveau: 'Champion' }
  ],
  autopilote: [
    { niveau: '0 – 1', parDe: 0 },
    { niveau: '2 – 3', parDe: 0.5 },
    { niveau: '4 – 6', parDe: 1 }
  ],
  localisations: ['Tête', 'Poitrine', 'Bras droit', 'Bras gauche', 'Abdomen', 'Jambes'],
  regles: { passionCoutXp: 1, baseCorps: 3, baseProcesseur: 3, espritEmpathie: 6, creditsParXp: 'facteur d\u2019âge \u00d7 1 \u20a1' }
};
