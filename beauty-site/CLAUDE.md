# Стиль Салон — Магазин оборудования для салонов красоты

## О проекте
Сайт-каталог магазина бьюти-оборудования для мастеров красоты.
Владелец — Марина, 6-7 лет на рынке, г. Благовещенск.
Слоган: «Создай свой идеальный салон красоты с нами!»
Семейный бизнес. Целевая аудитория: мастера маникюра/педикюра/парикмахеры, 20-60 лет.

## Технологии
- **Framework:** Astro 5
- **Styling:** Tailwind CSS 4 (конфигурация через @theme в global.css, НЕ tailwind.config.js!)
- **Content:** MDX + Content Collections (glob loader, Astro 5)
- **Language:** TypeScript strict
- **Deploy:** Vercel (Root Directory: beauty-site)
- **Repo:** github.com/Evgeniy79638134017/siteSTET → подпапка beauty-site/

## Бренд (ФЗ-168 от 24.06.2025)
- Основное название: «Стиль Салон» (кириллица, ВСЕГДА первой и крупнее)
- Аббревиатура: СС
- Латиница: Stil Salon — только вторичное дублирование, мельче
- Дескриптор: Магазин оборудования для салонов красоты
- ВСЕ тексты на русском, кнопки кириллицей, цены в рублях (50 000 ₽)

## Цветовая палитра
| Роль | HEX | Tailwind |
|------|-----|---------|
| Primary (малиновый) | #C41E68 | primary |
| Primary Dark | #A31856 | primary-dark |
| Primary Light (розовый) | #FFF0F5 | primary-light |
| Burgundy (тёмный) | #3D0C24 | burgundy |
| Burgundy Light | #5A1A3A | burgundy-light |
| CTA (красный) | #E63946 | cta |
| CTA Dark | #D32F3F | cta-dark |
| Text | #1A1A2E | text |
| Text Secondary | #6B7280 | text-secondary |
| Warm Pink | #FDE8EF | warm-pink |
| Success | #2D6A4F | success |

## Типографика
- Заголовки: Playfair Display (600, 700) — font-heading
- Текст: Inter (400, 500, 600) — font-body
- h1: 56/36px, h2: 40/28px, h3: 28/22px, body: 18/16px

## Ритм секций на странице
Hero (градиент) → Белая → Розовая (#FFF0F5) → Белая → CTA (тёмная #3D0C24) → повтор

## Компоненты
- Кнопка Primary: bg-primary text-white font-semibold rounded-xl px-8 py-3 hover:bg-primary-dark
- Кнопка CTA: bg-cta text-white font-semibold text-lg rounded-xl px-10 py-4 shadow-lg hover:shadow-xl
- Кнопка Secondary: border-2 border-primary text-primary rounded-xl px-8 py-3 hover:bg-primary hover:text-white
- Кнопка Ghost: border-2 border-white text-white rounded-xl px-8 py-3 hover:bg-white hover:text-burgundy
- Карточки: bg-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all
- Бейджи: bg-warm-pink text-primary text-sm rounded-full px-3 py-1

## Структура страниц
/ → Главная (лендинг-витрина)
/catalog → Каталог с фильтрами
/catalog/[slug] → Карточка товара (MDX)
/about → О магазине
/services → Услуги
/cases → Кейсы клиентов
/blog → Блог
/blog/[slug] → Статья (MDX)
/contacts → Контакты + форма
/privacy → Политика конфиденциальности
/terms → Пользовательское соглашение

## Контакты
- Телефон (WhatsApp): 8-924-449-63-55
- Телефон доп.: 8-924-449-73-88
- Telegram: t.me/stil_salon_rf
- ВКонтакте: vk.com/stil_salon_rf
- Одноклассники: ok.ru/group/70000030836320
- WhatsApp: wa.me/89244496355
- Адрес: г. Благовещенск, ул. Центральная, Л31, Чигири
- Часы: 10:00–18:00, +6 к Москве

## Стандарты кода
- TypeScript для всех файлов
- Tailwind CSS only — никаких inline-стилей, CSS-модулей
- НЕ создавать tailwind.config.js (Tailwind v4 — @theme в CSS)
- Компоненты: PascalCase (.astro)
- Контент: kebab-case (.mdx)
- Mobile-first
- Семантический HTML
- Alt-тексты для всех img
- Vanilla JS (не React) для интерактивности

## Команды
npm run dev          # Dev-сервер localhost:4321
npm run build        # Production — 0 ошибок!
npm run preview      # Просмотр production
