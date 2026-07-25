# Aruna Тур

Сайт гостевого дома «Аруна-Тур» — сруб у леса с баней, купелью и пространством для йоги. Курджиново, КЧР.

**Стек:** Vite + React + TypeScript + Tailwind + shadcn/ui + Supabase + Leaflet

---

## Последний коммит

`227ec65` — `fix: мобильная версия, календарь/FAQ/houserules, карта: zoomControl+toggle, восстановлен Pricing/Services после отката`
9 файлов, +145/−38. Запущен в main.

---

## Состояние на 25.07.2026 — handoff

### Разделы сайта

| Раздел | Компонент | Статус |
|---|---|---|
| Hero/Шапка | `Hero.tsx` | ✅ |
| О доме | `About.tsx` | ✅ |
| Почему этот дом | `Services.tsx` | ✅ — заголовок «Почему этот дом», карточки «СВОЙ ДОМ И ТИШИНА», «КУПЕЛЬ С РОДНИКОВОЙ ВОДОЙ», «БАНЯ НА ДРОВАХ», «ВОДОПАДЫ И ДОЛЬМЕНЫ РЯДОМ» |
| О хозяине | `HostCarousel.tsx` | ✅ — карусель с автоплеем (embla-carousel-autoplay), точки-индикаторы, fade-анимация |
| Страница хозяина | `pages/Host.tsx` | ✅ |
| FAQ | `FAQ.tsx` | ✅ — аккордеон, вопросы про дорогу/магазины/размещение |
| Правила | `HouseRules.tsx` | ✅ |
| Цены | `Pricing.tsx` | ✅ — восстановлен после отката |
| Календарь свободных дат | `AvailabilityCalendar.tsx` | ✅ — 2 месяца на десктопе, 1 на мобилке, занятые даты из Supabase |
| Карта | `MapSection.tsx` | ✅ — слои: Landmarks, Infrastructure, Routes |
| Контакты/Заявка | `Contact.tsx` + `BookingForm.tsx` | ✅ — форма бронирования, валидация zod, запись в Supabase |
| Футер | `Footer.tsx` | ✅ — адрес, контакты, мини-карта Leaflet |
| Блог | `pages/BlogPost.tsx` | ✅ |
| Маршруты | `pages/Routes.tsx` | ✅ |

### Форма бронирования (BookingForm)

- **Popover DatePicker → inline DayPicker:** заменён на инлайн календарь, range selection (заезд/выезд)
- **Занятые даты блокируются:** данные из Supabase (таблица `bookings`), обновляются раз в минуту
- **Валидация:** zod — check_out > check_in, обязательные поля, phone или email
- **Сохранение:** `supabase.from("bookings").insert(...)` в проект Kuvera
- Чекбоксы «Нужны экскурсии» / «Нужно питание»: **убраны** (удалены из формы)

### Карта Leaflet

- Центр: `[43.99037, 40.951095]` (Подгорная ул, 73, Курджиново)
- Три слоя: Landmarks, Infrastructure, Routes (данные в `src/data/`)
- Custom LayerControl (LayerControl.tsx):
  - Позиция: `topright`
  - Layout: слои слева | 🔍 +/- справа
  - **Тёмная тема:** адаптивный фон `#1c1f2b` / `white`, текст `#e2e8f0`, бордеры и тени
- ScrollWheelHandler: разрешает скролл колёсиком по карте
- ZoomToggle (кнопка 🔍): вкл/выкл зум колёсиком
- Мини-карта в футере: static, zoom=15, без зума/драга

### Тёмная тема

- Определяется `document.documentElement.classList.contains("dark")`
- LayerControl, AvailabilityCalendar, Footer — адаптированы
- Остальные компоненты используют Tailwind `dark:` модификаторы

### Supabase

- **Таблица:** `bookings` — заявки на бронь (check_in, check_out, guest_name, phone, email, guests_count, status...)
- **Статусы:** `confirmed`, `approved` — показываются как занятые даты
- **Обновление:** refetchInterval 60s
- **Проект:** Kuvera (`fvevonyrouptkihjnzco.supabase.co`)

### Git / Worktrees

- Все 18 воркерских worktree-веток смерджены в main
- Worktree-директории `.worktrees/` висят, но не мешают (можно `git worktree prune`)
- Remote: `origin` → `github.com/Korytny/arunatur`

### Известные текстовые правки

- **Адрес в футере:** «ул. Лесная, 12» → **«Подгорная улица, 73»**
- **Services.tsx:** «Почему выбирают этот дом» → **«Почему этот дом»**, «СВОЙ СРУБ И ТИШИНА» → **«СВОЙ ДОМ И ТИШИНА»**
- **HostCarousel.tsx:** «селе Курджиново, КЧР.» → «селе Курджиново.» (КЧР **убрано**)
- **Footer.tsx:** «Сруб у леса» → «Дом у леса»

### Зависимости (ключевые)

- `react-day-picker` — календари
- `react-leaflet` / `leaflet` — карты
- `date-fns` — форматирование дат (locale: ru)
- `embla-carousel-autoplay` — автоплей карусели
- `@tanstack/react-query` — запросы к Supabase
- `zod` — валидация форм
- `lucide-react` — иконки

### Разработка

```bash
npm run dev    # Vite dev server
npm run build  # Production build (~25-56s)
npx tsc        # TypeScript check (--noEmit)
```

### TODO / Открытые вопросы

- ✅ Календарь: 2 месяца на десктопе, 1 на мобилке
- ✅ Тёмная тема для LayerControl и кнопок карты
- 🟡 Обработка заявок: нужна админка или уведомления (email/TG при новой брони)
- 🟡 Трансфер, памятка гостя — ссылки-заглушки в футере
- 🟡 Telegram-бот/автоответ — была ветка `t_a8b64bc9-telegram`, смерджена, статус уточнить
