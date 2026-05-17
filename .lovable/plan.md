## Audit of current state

I checked all 12 fix points. Many are already in place from previous loops. Here is the actual delta to ship.

### Already done — skip
- P4 ComparisonBlock: keys `comparison.*` exist in all 4 locales; component rendered in `Index.tsx` between `Services` and `ScenariosOverviewSection`.
- P5 PresaleFAQ: keys `presaleFAQ.*` exist in all 4 locales; component rendered in `Index.tsx`.
- P6 Special Solutions whoBenefits[2]: replaced with "Startups and Founders" / "Стартапи та Засновники" / "Стартапы и Основатели" / "Startupy i Founderzy" in all 4 locales.
- P10 (partial): EN + UK already use the new CTA title in all 8 occurrences; PL/RU updated only at line 1832 (expertise), still old at lines 361 (about.cta), 474, 512 (other ctas).
- P12 i18n keys (`placeholder`, `successMessage`, `button: "Subskrybuj"`) and `NewsletterCta.tsx` inline form already wired into `pages/Insights.tsx`.

### Remaining work

**1. i18n string edits — `src/i18n/locales/{en,pl,uk,ru}/common.json`**

- P1 `hero.subtitle` (line ~41): replace with the audit text in all 4 locales.
- P2 `footer.tagline` (line ~212): replace with the audit text (mentions Warsaw + 5 jurisdictions) in all 4 locales.
- P9 `about.philosophy.items[0].description`: append the "Independent in advisory mandates; where transaction fees apply — as in M&A — these are fully disclosed…" sentence (not present yet) in all 4 locales.
- P10 PL + RU only: replace remaining old "Rozpocznij poufną rozmowę" / "Начните конфиденциальный разговор" at the 3 spots (`about.cta.title`, and two other `cta.title` at lines ~474 and ~512) with "Umów poufne wprowadzenie" / "Запланировать конфиденциальное знакомство". EN/UK already consistent.
- P11 `servicePages.familyOffice.whoBenefits.items[0].title` (line ~843): "10 mln USD" → "2 mln USD" in PL/UK/RU and "$10M+" → "$2M+" in EN. Scan description for any "10" references and align.
- P7 add new block `about.teamStats` (eyebrow + 3 items with `n` and `label`) per audit text, in all 4 locales.

**2. Component edits**

- P3 `src/components/Footer.tsx`: remove the `nav.insights` entry from the `footer.navigate` column (keep route, keep key). Single-line removal in the `footerCols` array.
- P7 add `TeamStats` block (eyebrow + 3 large gold numbers in Playfair + Inter labels with vertical gold separators) rendered inside or right after `TeamSection` on the About page. Stays on the cream/marble background; uses `gold-separator` and existing tokens.
- P8 reorder `src/pages/About.tsx` so the order becomes: `ServiceHero` → `Philosophy` → `TeamSection` → `TeamStats` → `PortfolioManagement` (Story timeline) → `ServiceCTA`. This makes the Story timeline visible after the team grid as the audit requires.

**3. Verification**

After edits, walk through the 13 verification points from the prompt: hero subtitle on `/pl`, footer tagline + no Insights link in nav, Comparison + Presale FAQ visible on home, Startups item on `/pl/services/special-solutions`, team stats + Story timeline after team on `/pl/about`, philosophy[0] independence sentence, `/pl/expertise` CTA "Umów poufne wprowadzenie", `/pl/services/family-office` "2 mln USD", `/pl/insights` inline newsletter.

### Scope guard
- No changes to routes, hreflang, sitemap, forms, marble/infinity/gold-separator, golden glass icons, Playfair typography, or any already-applied fix.
- `nav.insights` i18n key and `/insights` route stay; only the footer nav link is removed.
