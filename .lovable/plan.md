## Проблема

Сейчас на главной идут две пары "одинаковых" фонов подряд:

```
1.  Hero                       — DARK (navy)
2.  ServicesIntro              — plain offwhite
3.  Services                   — MARBLE
4.  ComparisonBlock            — MARBLE   ← мрамор за мрамором ❌
5.  ScenariosOverviewSection   — plain white
6.  PortfolioManagement        — DARK
7.  WhyUs                      — MARBLE
8.  PresaleFAQ                 — plain offwhite
9.  Insights                   — plain offwhite ← плоский за плоским ❌
10. Contact                    — MARBLE
11. Footer                     — DARK
```

## Решение — идеальное чередование

Первые 3 секции не трогаем (как просили). Дальше выстраиваем строгий ритм
**plain → marble → plain → marble** между двумя тёмными "якорями"
(Hero / PortfolioManagement / Footer):

```
1.  Hero                       — DARK            ✓ без изменений
2.  ServicesIntro              — plain           ✓ без изменений
3.  Services                   — MARBLE          ✓ без изменений
4.  ComparisonBlock            — plain           ← убрать marble-texture
5.  ScenariosOverviewSection   — MARBLE          ← добавить marble-texture + bg-offwhite
6.  PortfolioManagement        — DARK            ✓ без изменений
7.  WhyUs                      — plain           ← убрать marble-texture
8.  PresaleFAQ                 — MARBLE          ← добавить marble-texture
9.  Insights                   — plain           ✓ без изменений
10. Contact                    — MARBLE          ✓ без изменений
11. Footer                     — DARK            ✓ без изменений
```

Между каждой парой соседних секций — смена фактуры. Между двумя тёмными
якорями ровно по 4 светлых секции с чередованием plain ↔ marble.

## Файлы и точечные правки

| Файл | Текущее | Новое |
|---|---|---|
| `src/components/ComparisonBlock.tsx` (l.19) | `bg-offwhite marble-texture` | `bg-offwhite` |
| `src/components/ScenariosOverviewSection.tsx` (l.13) | `style={{ background: "#FFFFFF" }}` | `bg-offwhite marble-texture` (убрать inline style) |
| `src/components/WhyUs.tsx` (l.12) | `bg-offwhite marble-texture` | `bg-offwhite` |
| `src/components/PresaleFAQ.tsx` (l.19) | `bg-offwhite` | `bg-offwhite marble-texture` |

Никаких изменений в layout, контенте, отступах, типографике, gold-separators
или анимациях — только класс фона на 4 секциях.

## Что это даёт

- Ноль "слипшихся" одинаковых фонов
- Симметричный ритм относительно тёмных якорей (Hero → Portfolio → Footer)
- Marble-фактура расставляет акценты на ключевых блоках: Services,
  Scenarios, PresaleFAQ, Contact — это самые "продающие" секции
- Plain-фон отдыхает глаз на Intro, Comparison, WhyUs, Insights —
  где много мелкого текста / таблиц / карточек
