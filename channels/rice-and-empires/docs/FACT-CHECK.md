# FACT-CHECK — how we make sure a script does not invent history

Owner's question (2026-11-07): "làm sao tôi biết kịch bản không bịa sử?" This is the answer, and it is mandatory for every script.

## 1. Order of work
1. Research first, write narration last. **No narration line may exist without a row in the claim table.**
2. Every narration sentence = one or more claims `C1, C2…`. Each claim row has: the claim, ≥ 2 independent sources (URL + what it says),
   a confidence grade, and the exact wording allowed on screen.
3. If a claim cannot reach grade A or B, either cut it or say it with the uncertainty out loud ("Sources disagree…", "Legend says…").

## 2. Source ladder (best → acceptable → never)
- **Best**: scholarly books/articles (e.g. K. W. Taylor *A History of the Vietnamese* 2013; Lo Jung-pang *China as a Sea Power* 2012;
  J. K. Whitmore; L. Kelley; T. Allsen; Britannica), and primary chronicles named explicitly (*Đại Việt sử ký toàn thư*, *Yuanshi* 元史,
  *An Nam chí lược*) — note whose side each chronicle is on.
- **Acceptable as pointer**: Wikipedia — use it to find the scholarly citations it relies on; a Wikipedia-only claim is at most grade B.
- **Never counts**: LLM-generated encyclopedias (e.g. llmpedia), content farms, travel sites, uncited blogs, YouTube videos, Wikipedia mirrors.

## 3. Confidence grades
| Grade | Meaning | How to say it |
|---|---|---|
| A | Consensus: ≥ 2 independent good sources agree, no known dispute | Plain statement |
| B | Event certain, details disputed (dates ± days, motives, who did what) | Hedge the disputed part ("around", "according to Vietnamese chronicles") |
| C | Legend / single source / numbers from one side | Only with a label: "Legend says…", "Yuan records claim…" |
| ✗ | Contradicted by better sources | Cut |

## 4. Fixed rules
- **Numbers** (army sizes, casualties): never one precise figure. Give a range and whose estimate it is. Medieval army sizes are almost
  always inflated by one side.
- **Every video shows at least two perspectives** (e.g. Vietnamese chronicle vs Yuan record vs modern historian).
- **Words that take sides** ("heroic", "invaders", "barbarians", "won") — only when the sources support it, or attributed.
- **Dates**: use the year unless the day is grade A.
- **Images**: illustrations must look like artwork (lacquer / map / watercolor). Never generate photoreal "historical photos".
  No modern flags or national symbols on historical scenes.
- **Description** lists the sources used, and the pinned comment invites corrections. Corrections go in a `Corrections` section of the script file.

## 5. How the owner (not fluent in English) checks a script in ~5 minutes
1. Read the **VI column** of the claim table, not the English narration.
2. Click **3 random source links** and check the cited sentence is really there (Wikipedia/Britannica have Vietnamese or translate-able pages).
3. Check every number has a range + "who says so".
4. Check there is a line from a non-Vietnamese perspective.
5. Anything that "sounds like school textbook pride" without a source → ask the agent for the source.
Note: Vietnamese school textbooks are a perspective, not neutral ground truth (e.g. "500,000 Mongol troops" is a Vietnamese-chronicle figure).

## 6. Agent self-check before handing a script over
- [ ] every narration sentence maps to claim IDs
- [ ] no grade-C claim stated without a label; no ✗ claim left
- [ ] every number has a range + attribution
- [ ] ≥ 2 perspectives present
- [ ] sources list ready for the description
- [ ] open questions listed (what you could not verify)
