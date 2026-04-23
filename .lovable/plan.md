

## Fix: Header overflow / CTA touching edge on desktop (UA/RU/PL)

### Problem
At desktop widths 1024–1300px the header nav becomes overcrowded in non-English locales because Cyrillic words ("РОЗПОЧАТИ ДІАЛОГ", "ЕКСПЕРТИЗА", "АНАЛІТИКА") are much longer than English. Result:
- The "Start a Dialogue" CTA text touches the right edge of the viewport.
- Items appear to break out of their block.
- The whole bar looks unbalanced.

Root causes in `src/components/Header.tsx`:
1. Desktop nav activates at `lg:` (1024px) — too early for long Cyrillic labels.
2. Fixed `gap-8` (32px) between every nav item.
3. CTA is plain text without a contained button — visually merges with the right edge.
4. No `whitespace-nowrap` on labels, no min-width safeguards.

### What will change

**1. Header desktop breakpoint & spacing** (`src/components/Header.tsx`)
- Switch desktop nav activation from `lg:` → `xl:` (1280px). Below that, mobile menu is shown — guarantees no cramming on mid-size laptops.
- Reduce nav gap from `gap-8` → responsive `gap-6 2xl:gap-8`.
- Add `whitespace-nowrap` to every nav label and the CTA.
- Add a small left margin/divider before LanguageSwitcher so it doesn't visually merge with the previous label.

**2. CTA styling**
- Convert "Start a Dialogue →" link from plain text into a contained gold-outline pill: `border border-gold/60 px-4 py-2 rounded-full hover:bg-gold hover:text-navy`.
- This visually anchors the right side and creates breathing room from the viewport edge.

**3. Container padding**
- Increase header container side padding at desktop: `px-5 md:px-6 xl:px-8` to give the CTA more room from the edge.

**4. Mobile toggle breakpoint**
- Update the mobile menu button + portal panel from `lg:hidden` → `xl:hidden` to match the new breakpoint, so the burger appears up to 1279px.
- Update the mega-menu dropdown from `hidden lg:block` → `hidden xl:block`.

### Files touched
- `src/components/Header.tsx` — breakpoint swaps, gap reduction, `whitespace-nowrap`, CTA pill styling, container padding tweak.

No content, no translations, no other components changed. All four languages (EN/RU/UK/PL) benefit automatically because the layout now accommodates the longest labels.

### Verification
After the change I'll visually confirm in the preview at `/uk` (the worst case) that:
- All nav items fit on one line without touching the edge.
- The CTA pill has clear right-side padding from the viewport edge.
- Mobile burger appears on viewports below 1280px.
- English version (`/en`) still looks balanced and not too sparse.

