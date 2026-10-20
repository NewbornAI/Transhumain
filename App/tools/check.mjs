/**
 * check.mjs — garde-fous de livraison de l'app Transhumains (PRD phase 0, slice 3)
 * ------------------------------------------------------------------
 *   node App/tools/check.mjs        (depuis transhumains/, ou n'importe où)
 *
 * Vérifie, sans dépendance externe et sans réseau :
 *   1. syntaxe : chaque App/data/*.data.js passe « node --check » ;
 *   2. chargement : chaque fichier pose window.TH_DATA dans un contexte VM
 *      (les data/*.data.js sont des scripts classiques — contrat PRD §5) ;
 *   3. comptes : colonies, moteurs, routes interstellaires, systèmes
 *      détaillés, sections de règles (valeurs lues dans data/ le 2026-10-08,
 *      cf. prd/notes/phase-0.md — pas de chiffres inventés) ;
 *   4. zéro URL externe dans les fichiers livrés, hors crédits listés.
 *      NB : une data: URI (ex. SVG embarqué) n'est PAS du réseau : c'est du
 *      contenu, elle n'est pas comptée.
 *
 * Sortie : 0 = tout passe ; 1 = au moins un échec (exploitable en CI).
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import url from 'node:url';
import { spawnSync } from 'node:child_process';

const HERE = path.dirname(url.fileURLToPath(import.meta.url));
const APP = path.resolve(HERE, '..');
const DATA = path.join(APP, 'data');

/* ---------- attentes (lus dans data/ le 2026-10-08 ; cf. phase-0.md) ---------- */
const EXPECT = {
  'astronav.colonies': 28,
  'astronav.drives': 11,
  'astronav.interstellar.routes': 5,
  'astronav.bodies.systems': 3,
};
/* Les sections de règles ne sont pas fixées par le PRD : le plancher est le
   contenu réellement extrait à l'écriture de ce garde-fou ; toute perte fait
   échec, tout ajout passe. */
const REGLES_MIN = 10;
const REGLES_TITUS = ['Création', 'Historiques', 'Skillchecks', 'Crise', 'Crafting',
  'Electronique', 'Economie', 'Nations', 'Chronologie', 'Aerospatiale'];

/* Crédits externes explicitement autorisés dans les fichiers livrés.
   Vide à la phase 0 : rien ne sort du navigateur. Les phases suivantes y
   ajouteront leurs crédits (ex. stellar catalog) — sous forme de mention,
   pas d'URL — ou listeront ici l'URL exacte autorisée, par fichier. */
const CREDITS = [];

const failures = [];
const notes = [];
const fail = (msg) => failures.push(msg);
const ok = (msg) => notes.push(msg);

/* ---------- 1. syntaxe : node --check sur chaque fichier livré ---------- */
function livréJS(dir) {
  // fichiers livrés = tout JS sous data/ (l'app elle-même viendra en phase 1+)
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => /\.js$/.test(f)).map((f) => path.join(dir, f));
}
const dataFiles = livréJS(DATA);
if (!dataFiles.length) fail('aucun fichier data/*.data.js trouvé dans ' + DATA);
for (const f of dataFiles) {
  const r = spawnSync(process.execPath, ['--check', f], { encoding: 'utf8' });
  if (r.status !== 0) fail('node --check ÉCHEC : ' + path.basename(f) + ' — ' + (r.stderr || '').split('\n')[0]);
  else ok('syntaxe : ' + path.basename(f));
}

/* ---------- 2. chargement en VM (window shim) ---------- */
function charger(f) {
  const srcTxt = fs.readFileSync(f, 'utf8');
  const win = {};
  const sandbox = { window: win, self: win, console: { log() {}, warn() {}, error() {} } };
  vm.createContext(sandbox);
  vm.runInContext(srcTxt, sandbox, { filename: path.basename(f) });
  return (win.TH_DATA) || null;
}
let TH = {};
for (const f of dataFiles) {
  try {
    const d = charger(f);
    if (!d || !Object.keys(d).length) { fail('chargement : ' + path.basename(f) + ' ne pose pas window.TH_DATA'); continue; }
    Object.assign(TH, d);
    ok('chargement : ' + path.basename(f) + ' → TH_DATA.' + Object.keys(d).join(', TH_DATA.'));
  } catch (e) {
    fail('chargement ÉCHEC : ' + path.basename(f) + ' — ' + e.message);
  }
}

/* ---------- 3. comptes ---------- */
function get(obj, dotted) { return dotted.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj); }
if (TH.astronav) {
  const a = TH.astronav;
  const reels = {
    'astronav.colonies': Array.isArray(a.colonies) ? a.colonies.length : null,
    'astronav.drives': Array.isArray(a.drives) ? a.drives.length : null,
    'astronav.interstellar.routes': a.interstellar && Array.isArray(a.interstellar.rows) ? a.interstellar.rows.length : null,
    'astronav.bodies.systems': a.bodies ? Object.keys(a.bodies).length : null,
  };
  for (const k of Object.keys(EXPECT)) {
    if (reels[k] === EXPECT[k]) ok('compte : ' + k + ' = ' + reels[k]);
    else fail('compte : ' + k + ' attendu ' + EXPECT[k] + ', trouvé ' + reels[k]);
  }
} else if (Object.keys(TH).length) {
  fail('comptes : TH_DATA.astronav absent — impossible de vérifier les comptes');
}
if (TH.content) {
  const regles = (TH.content.regles || []);
  const titres = regles.map((s) => s.title);
  if (regles.length >= REGLES_MIN) ok('compte : sections de règles = ' + regles.length + ' (plancher ' + REGLES_MIN + ')');
  else fail('compte : sections de règles = ' + regles.length + ' < plancher ' + REGLES_MIN);
  for (const t of REGLES_TITUS) {
    if (titres.indexOf(t) >= 0) ok('section règle présente : ' + t);
    else fail('section règle manquante : ' + t);
  }
} else if (Object.keys(TH).length) {
  fail('comptes : TH_DATA.content absent');
}
/* projections curées : structure minimale */
if (!TH.ref || !TH.ref.caracs || TH.ref.caracs.length < 4) fail('ref.data.js : constante « caracs » absente ou courte');
else ok('ref : ' + TH.ref.caracs.length + ' caractéristiques');
if (!TH.ships || !TH.ships.liste || !TH.ships.liste.length) fail('ships.data.js : liste de vaisseaux absente');
else ok('ships : ' + TH.ships.liste.length + ' vaisseau(x)');

/* ---------- 4. zéro URL externe hors crédits ---------- */
const URL_RE = /https?:\/\/[^\s"'\\)\]<>]+/g;
function scanFiles(dir, acc) {
  if (!fs.existsSync(dir)) return acc;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === '.git' || e.name === 'node_modules') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) scanFiles(p, acc);
    else acc.push(p);
  }
  return acc;
}
const livres = scanFiles(APP, []).filter((p) =>
  /^data[\\/]/.test(path.relative(APP, p)) ||
  /^(index\.html|assets|js)[\\/]/.test(path.relative(APP, p)) ||
  path.basename(p) === 'index.html');
for (const p of livres) {
  const t = fs.readFileSync(p, 'utf8');
  const allowed = CREDITS.map((c) => (typeof c === 'string' ? { file: path.basename(p), re: null, url: c } : c));
  /* attribution declaree par le fichier lui-meme : meta.credits = texte de credit, pas une
     ressource chargeable — ces URLs sont explicitement listees, donc autorisees (Q28). */
  const cm = t.match(/"credits"\s*:\s*\[([^\]]*)\]/);
  if (cm) for (const u of cm[1].split(',')) {
    const uu = u.trim().replace(/^"|"$/g, '');
    if (/^https?:\/\//.test(uu)) allowed.push({ file: path.basename(p), url: uu });
  }
  let m;
  URL_RE.lastIndex = 0;
  while ((m = URL_RE.exec(t))) {
    const found = m[0];
    const credite = allowed.some((c) =>
      (c.file === path.basename(p) || c.file === '*') && (c.url === '*' || found.startsWith(c.url)));
    if (!credite) fail('URL externe non créditée dans ' + path.relative(APP, p) + ' : ' + found.slice(0, 90));
    else ok('crédit autorisé : ' + found.slice(0, 90));
  }
}
if (!livres.length) ok('aucun fichier livré à scanner (hors data/) pour les URLs');

/* ---------- sortie ---------- */
console.log('check.mjs — ' + livres.length + ' fichier(s) livré(s) examiné(s)');
for (const n of notes) console.log('  ✓ ' + n);
for (const f of failures) console.log('  ✗ ' + f);
if (failures.length) { console.log('ÉCHEC : ' + failures.length + ' problème(s).'); process.exit(1); }
console.log('OK : syntaxe, chargement, comptes, zéro URL externe hors crédits.');
process.exit(0);
