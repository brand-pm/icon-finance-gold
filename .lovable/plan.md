

# Plan: Individual Service Pages

## What we're building
A complete **Wealth Management** service page based on the reference, then replicate the structure for all 5 services. Each service gets its own route (`/services/wealth-management`, etc.).

## Modules identified from the reference (top to bottom)

1. **ServiceHero** — Dark navy bg, service title ("Professional Wealth Management For Affluent Families"), description text, CTA button, large 3D golden icon on the right
2. **WhoBenefits** — Light bg, "Who Benefits from Our Wealth Management" left title, right side has expandable accordion items (Family Offices & Professionals, Business Owners & HNI, Affluent Families, International Investors)
3. **Philosophy** — Light bg, "Icon Financial Wealth Management Philosophy" with gold separator, 4 numbered cards (01-04: Client-first, Active Management, Risk Control, Diversification) with descriptions and arrow icons
4. **ResultsStats** — Dark navy bg, "Our Results Speak for Themselves", 6 stats in 2x3 grid ($500M+, 95%, 12%, 1.4, ~8%, $5M) with labels
5. **InvestmentStrategies** — Dark navy bg, "Our Investment Strategies" with tab navigation (Conservative Strategy, Balanced, Growth, etc.), each tab shows description + image
6. **InvestmentOpportunities** — Dark navy bg, "Wide Range of Investment Opportunities" with two tab categories (Traditional Assets / Alternative Investments), grid of cards below each
7. **PortfolioManagement** — Split layout — dark left with "How We Manage Your Portfolio" + CTA, right side with 4 numbered steps (Analysis & Planning, Portfolio Construction, Active Management, Reporting & Control) each with sub-items
8. **ServiceFAQ** — Light bg, "Frequently Asked Questions" left, accordion items right
9. **ServiceCTA** — Split — left dark with "Start Managing Your Wealth Today" text + description, right with contact form (gold accent)
10. **Footer** — Reuse existing

## Technical approach

### Routing
- Add routes in `App.tsx`: `/services/wealth-management`, `/services/family-office`, etc.
- Update "Learn more" links in `Services.tsx` to navigate to these pages
- Each route uses a shared `ServicePage` layout with service-specific data

### File structure
```text
src/pages/services/
  WealthManagement.tsx        — page composing all modules
src/components/services/
  ServiceHero.tsx             — module 1
  WhoBenefits.tsx             — module 2
  Philosophy.tsx              — module 3
  ResultsStats.tsx            — module 4
  InvestmentStrategies.tsx    — module 5
  InvestmentOpportunities.tsx — module 6
  PortfolioManagement.tsx     — module 7
  ServiceFAQ.tsx              — module 8
  ServiceCTA.tsx              — module 9
```

### Data-driven design
- Each service page will use the same component set but with different data (titles, stats, FAQ items, strategies)
- Start with **Wealth Management** first, pixel-perfect to the reference
- Then create remaining 4 service pages with adapted content

### Styling
- Follows existing design tokens (navy, gold, charcoal, offwhite)
- Marble texture where appropriate
- Gold separators, zero border-radius
- Accordion from existing shadcn/ui components

## Implementation order
1. Create all 9 service section components for Wealth Management
2. Create `WealthManagement.tsx` page composing them
3. Add route in `App.tsx`
4. Update Services tab "Learn more" to link to service pages
5. Create remaining 4 service pages with adapted content

