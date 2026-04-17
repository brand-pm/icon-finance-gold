---
name: Portfolio stage cards
description: Reusable PortfolioManagement component pattern with marble textures for service pages
type: design
---
PortfolioManagement (`src/components/services/PortfolioManagement.tsx`) is the canonical "Work Process" block — reuse on all service pages.

Stage cards:
- 4 unique monochrome marble textures cycled by index: `marble-mono-1-v3.jpg`, `marble-mono-2.jpg`, `marble-mono-3-v2.jpg`, `marble-mono-4-v2.jpg`. All white/grey only — no blue/beige tints.
- Texture applied via `--stage-texture` CSS var, opacity 0.08, mix-blend-mode screen on dark navy gradient bg.
- Equal heights via `min-height: 224px` on `.portfolio-stage-card` (was 280px, reduced 20%).
- Layout: dark gradient `hsl(220 44% 15%)` → `hsl(224 54% 10%)`, gold bottom border with shimmer animation.

Do not change the marble color tone or introduce new hues — must stay within site palette.
