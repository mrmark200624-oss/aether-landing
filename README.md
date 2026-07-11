# Aether Protocol — Landing

Одностраничный лендинг крипто-проекта на **Next.js 14 (App Router) + Tailwind CSS**.
Тёмная тема, неоновые акценты, glassmorphism, scroll-анимации, полностью адаптивный.

## Секции

- **Hero** — название токена, слоган, CTA, стат-бар
- **About** — 3 карточки-фичи
- **Tokenomics** — SVG донат-чарт (без зависимостей) + таблица распределения
- **Roadmap** — 4 квартала со статусами
- **Team** — блок команды
- **Footer** — CTA + ссылки на соцсети

Все данные — заглушки в [`data/content.ts`](data/content.ts). Меняете там — меняется на всём сайте.

## Локальный запуск

```bash
npm install
npm run dev      # http://localhost:3000
```

## Продакшн-сборка

```bash
npm run build
npm start
```

## Деплой на Vercel

Из коробки, без настройки:

1. Запушьте папку в GitHub-репозиторий.
2. На [vercel.com](https://vercel.com) → **Add New → Project** → импортируйте репозиторий.
3. Vercel сам определит Next.js. Жмите **Deploy**.

Или через CLI:

```bash
npm i -g vercel
vercel        # предпросмотр
vercel --prod # прод
```

## Стек

- Next.js 14, React 18, TypeScript
- Tailwind CSS 3.4
- Анимации — IntersectionObserver + CSS (без внешних либ)

Никаких API-ключей и переменных окружения не требуется.
