# Mining the sheets

*How ten years of irregular Office workbooks become machine-readable without Mandal narrating them.*

**The problem, stated right.** The 12 workbooks in `Source/` are irregular — the byproduct of a disorganized working pattern, as Mandal says — and leaving them alone is the wrong response. So is asking him to translate them into words first: workbook -> his prose -> code is two translations, and his is the expensive one.

**What one probe found** (`Source/Transhumains - Personnages.xlsx`, 769 KB, 16 sheets, 2026-10-20). The workbooks carry their own dictionary and their own grammar:

| Signal | What it gives | Seen in the probe |
|---|---|---|
| Shared strings | the field vocabulary, already in the file | 654 strings: *Noms, Nationalité, Age propre, Age réel, Taille, Poids, Fuel, Deuterium, CPU, Sensors, Agility, Avantage, Gimmick* |
| Formulas | the relationships and the boundaries | `if(O11+O12, 20+O11+O12-30, "")` is a derived characteristic; `sum(O47:O70)` and `sum(N107:N145)` are **groups** — a section drawn by arithmetic where a heading would have been |
| Sheet names | schema and instances together | 15 `FP <personnage>` sheets beside one **`Template`**: irregularity becomes a measurable diff against the template |
| The notes and `App/data/` | a cross-check that already exists | the notes describe the same concepts; the existing data files show the target shape |

**Workflow.**

1. **Infer, don't ask** — per workbook: sheets, label column, value types, groups (from `sum` ranges), derived fields (from formulas). Mechanical, before any question is written.
2. **Propose, then let him correct** — his mode is reacting to something concrete (*"Actually, …"* after a slice is shown), not producing a description. Deliver a proposed schema per shape; he says yes, no, or corrects it.
3. **One extractor per shape** — 16 sheets sharing a `Template` are one shape; expect a handful of shapes across the 12 workbooks.
4. **Just in time, by app need** — the PRD's phases decide which workbook matters now. No blanket migration.
5. **The workbooks stay the source of truth** — read in place, never migrated; the extraction is a regenerable projection, in the shape `App/tools/build-data.mjs` already establishes: a build script, generated output, curated exceptions carrying source pointers, and a `check.mjs` guard.
6. **What inference cannot reach** — labels whose role is social rather than structural (*Gimmick*), and intent only he holds. Those are the only questions worth his words, and they are few.

**Coverage is the metric**: per shape, the share of cells mapped to a typed field. "Sorted" becomes a number, not a feeling.
