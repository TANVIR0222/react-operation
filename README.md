# ⚛️ React Operation

An interactive, hands-on React learning platform built with **TanStack Start**. Each chapter covers a core React concept with live, editable demos — not just code snippets.

---

## 📚 Chapters

| #   | Route            | Topic               | What You'll Learn                                                  |
| --- | ---------------- | ------------------- | ------------------------------------------------------------------ |
| 01  | `/interactivity` | **Interactivity**   | Event binding, bubbling & capture, stopPropagation, preventDefault |
| 02  | `/performance`   | **Performance**     | React.memo, useMemo, useCallback, Suspense & lazy loading          |
| 03  | `/state`         | **State & Context** | Prop drilling, createContext, useContext, Provider pattern         |

---

## 🛠️ Tech Stack

| Layer         | Technology                                                                      |
| ------------- | ------------------------------------------------------------------------------- |
| Framework     | [TanStack Start](https://tanstack.com/start) + [React 19](https://react.dev)    |
| Router        | [TanStack Router](https://tanstack.com/router) (file-based)                     |
| Styling       | [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS design system          |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) (New York style)                            |
| Bundler       | [Vite 8](https://vite.dev/)                                                     |
| Server        | [Nitro](https://nitro.build/)                                                   |
| Testing       | [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) |
| Compiler      | [React Compiler](https://react.dev/learn/react-compiler) (Babel plugin)         |
| Linting       | ESLint 9 + Prettier + [Commitlint](https://commitlint.js.org/)                  |
| Git Hooks     | [Husky](https://typicode.github.io/husky/) + lint-staged                        |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ or [Bun](https://bun.sh/)

### Installation

```bash
# Clone the repository
git clone https://github.com/TANVIR0222/react-operation.git
cd react-operation

# Install dependencies
bun install
# or
npm install
```

### Development

```bash
# Start the dev server on port 3000
bun --bun run dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Global navigation header
│   └── ui/
│       └── button.tsx      # shadcn/ui Button component
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
├── routes/
│   ├── __root.tsx           # Root layout (Header + Outlet)
│   ├── index.tsx            # Home page — chapter overview
│   ├── interactivity.tsx    # Chapter 01 — Events & binding
│   ├── performance.tsx      # Chapter 02 — Memoisation & optimisation
│   └── state.tsx            # Chapter 03 — Context & state management
├── router.tsx               # TanStack Router configuration
├── routeTree.gen.ts         # Auto-generated route tree
└── styles.css               # Global styles & design system
```

---

## 📜 Available Scripts

| Script    | Command           | Description                       |
| --------- | ----------------- | --------------------------------- |
| `dev`     | `npm run dev`     | Start dev server on port 3000     |
| `build`   | `npm run build`   | Production build                  |
| `preview` | `npm run preview` | Preview production build          |
| `test`    | `npm run test`    | Run tests with Vitest             |
| `lint`    | `npm run lint`    | Lint with ESLint                  |
| `format`  | `npm run format`  | Format with Prettier + ESLint fix |
| `check`   | `npm run check`   | Check formatting with Prettier    |

---

## 🎨 Design System

The app uses a custom CSS design system with CSS custom properties:

- **Fonts** — `Fraunces` (display/serif) + `Manrope` (body/sans)
- **Home Page** — Black & white monochrome theme with bold typography
- **Chapter Pages** — Sea-green/lagoon palette (`--lagoon`, `--palm`, `--sea-ink`)
- **Components** — Glassmorphic cards (`.island-shell`), feature cards (`.feature-card`)
- **Animations** — Rise-in entrance animations, smooth hover transitions
- **Header** — Sticky glassmorphic nav with active route indicators
- **Responsive** — Mobile-first with breakpoints at 640px and 768px

---

## 🧩 Adding a New Chapter

1. Create a new file in `src/routes/` (e.g., `hooks.tsx`)
2. TanStack Router will auto-generate the route
3. Add the route to the `NAV_ITEMS` array in `src/components/Header.tsx`
4. Add a topic card to the `TOPICS` array in `src/routes/index.tsx`

```tsx
// src/routes/hooks.tsx
import {createFileRoute} from '@tanstack/react-router';

export const Route = createFileRoute('/hooks')({
  component: HooksPage,
});

function HooksPage() {
  return (
    <div className="mx-auto p-8">
      <h1 className="text-3xl font-bold">React Hooks</h1>
      {/* Your content here */}
    </div>
  );
}
```

---

## 🏗️ Building for Production

```bash
# Build
npm run build

# Run the production server
node dist/server/index.mjs
```

### Deployment

The build output is a self-contained Node server. Deploy the `dist/` directory to any Node-compatible host:

- **Vercel** / **Netlify** / **Cloudflare** — Use [Nitro presets](https://v3.nitro.build/deploy)
- **Fly.io** / **Render** / **VPS** — Run `node dist/server/index.mjs`

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/new-chapter`)
3. Commit your changes using [conventional commits](https://www.conventionalcommits.org/) (`git commit -m 'feat: add hooks chapter'`)
4. Push to the branch (`git push origin feature/new-chapter`)
5. Open a Pull Request

> Commits are enforced with [commitlint](https://commitlint.js.org/) + Husky hooks.

---

## 📄 License

This project is private and not licensed for public distribution.

---

<p align="center">
  Made with ☕ by <a href="https://github.com/TANVIR0222">TANVIR</a>
</p>
