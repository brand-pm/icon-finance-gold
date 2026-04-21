

# Качественная вычитка переводов: страница за страницей

Цель: пройти все 4 языка (EN-эталон, RU, UK, PL) экран за экраном вручную. Никаких массовых regex-замен. Каждый блок — осознанный перевод с естественными формулировками, без англицизмов и без латиницы (кроме email и аббревиатур BVI/NDA).

## Глобальные правила (применяются ко всем блокам)

- **Family Office** → RU «семейный офис», UK «сімейний офіс», PL «biuro rodzinne». В первом упоминании в hero-описаниях допустимо «семейный офис (family office)».
- **M&A** → RU «слияния и поглощения», UK «злиття та поглинання», PL «fuzje i przejęcia». В технических ярлыках вкладок сохраняется аббревиатура M&A только если стоит рядом с переводом.
- **Private Equity / Venture / Hedge / ESG / Due Diligence / Exit / Governance / Private Banking / Asset Management / Lifestyle Management** — переводятся:
  - Private Equity → прямые инвестиции / прямі інвестиції / inwestycje private equity → inwestycje kapitałowe
  - Venture → венчурные инвестиции / венчурні інвестиції / inwestycje venture → kapitał wysokiego ryzyka
  - Due Diligence → комплексная проверка / комплексна перевірка / due diligence → analiza due diligence (PL — допустимо, термин принят)
  - Exit → выход из инвестиции / вихід з інвестиції / wyjście z inwestycji
  - Governance → корпоративное управление / корпоративне управління / ład korporacyjny
  - Private Banking → частный банкинг / приватний банкінг / bankowość prywatna
  - Asset Management → управление активами / управління активами / zarządzanie aktywami
  - Lifestyle Management → управление образом жизни / управління способом життя / zarządzanie stylem życia
- **Cookies / Email** в UI лейблах → «Файлы cookie», «Cookies» (PL — ok), «Електронна пошта», «Email» (PL — ok).
- **SEO-тайтлы и описания** — полностью локализуются для каждой страницы и каждого языка.
- **Имена людей** (Oleg, Yurii и т.д.) в PL — транслитерируются по-польски: Oleh Zabolotnyi, Yurii Łabenko и т.п. (либо оставляем латиницей как есть — уточню при правке PL-блока, по умолчанию оставляем как сейчас, т.к. это собственные имена).
- **Адрес**: «Próżna» — собственное название, остаётся латиницей. Город — на языке.

## Порядок блоков (по экранам)

| # | Блок | Что входит | Что фиксим |
|---|------|------------|------------|
| 1 | Главная (Home) | `hero`, `services`, `servicesSection`, `homeProcess`, `whyUs`, `insightsTeaser`, `contactTeaser`, `nav`, `megaMenu`, `footer`, `common`, `serviceCTA` | family office, M&A, governance, exit, Cookies, Email, Lifestyle management, ровные формулировки |
| 2 | About | `about` (hero, philosophy, story, team) | private banking, asset management, governance, Family Office, бренд-имя в hero |
| 3 | Expertise | `expertise` (hero, competencies, industries, international, key numbers) | family office, M&A, due diligence, exit, governance, BVI |
| 4 | Insights (главная + страница) | `insights`, `insightsTeaser` | категории «Family Office», «M&A», ровный business-tone |
| 5 | Contact | `contactPage` (hero, details, form, CTA) | Email-блок, NDA, тон формы, subjects |
| 6a | Service: Wealth Management | `servicePages.wealthManagement` (hero, whoBenefits, philosophy, results, strategies, opportunities, portfolio, faq, cta) | Private Equity, market neutral, Bitcoin/Ethereum, Due diligence, грамматика стратегий |
| 6b | Service: Family Office | `servicePages.familyOffice` | Single/Shared/Virtual Family Office как названия моделей |
| 6c | Service: Structuring & Tax | `servicePages.structuringTax` | комплаенс, структуры, термины |
| 6d | Service: M&A Consulting | `servicePages.maConsulting` | exit, due diligence, M&A в названиях стратегий |
| 6e | Service: Special Solutions | `servicePages.specialSolutions` | ESG, Lifestyle |
| 7 | SEO + системные | `seo.pages.*` (полная локализация всех title/description), `notFound`, `cookieConsent`, legal pages references | все страницы |

## Процесс по каждому блоку

1. Открываем EN как эталон смысла.
2. Сравниваем с текущими RU / UK / PL.
3. Переписываем проблемные строки **вручную, осмысленно**, выдерживая бизнес-тон, без кальки с английского.
4. Сохраняем правки одновременно во всех 3 нелатинских языках.
5. После блока — JSON-валидация всех 4 файлов.
6. Я отчитываюсь: «Блок N готов, исправлено столько-то строк, пример до/после». Жду «дальше» — и перехожу к следующему.

## Технические детали

- Файлы: только `src/i18n/locales/{ru,uk,pl}/common.json`. EN не трогаем.
- Никаких regex-скриптов с массовыми заменами по всему файлу — это и привело к «переносам букв» и кривым фразам ранее.
- Правки делаем через `code--line_replace` точечно, по одному ключевому пути за раз (или JSON-патч для всего блока, который я проверяю глазами перед записью).
- После каждого блока: `python3 -c "import json; json.load(open('...'))"` для всех 4 файлов.
- Memory: после согласования глоссария сохраню `mem://design/translation-glossary` со словарём терминов, чтобы больше не возвращаться к этому вопросу.

## Что начнём первым (после твоего «ок»)

**Блок 1 — Главная страница**, потому что это первое, что видит клиент, и именно там сейчас «Family Office», «M&A», «governance», «Cookies», «Lifestyle management» торчат в кириллическом тексте.

