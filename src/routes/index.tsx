import {Link, createFileRoute} from '@tanstack/react-router';

export const Route = createFileRoute('/')({component: Home});

/* ── Topic cards data ──────────────────────────────────── */

const TOPICS = [
  {
    to: '/interactivity' as const,
    kicker: 'Chapter 01',
    title: 'Interactivity',
    desc: 'Events, binding, bubbling & capture — master every way React connects your UI to user actions.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect
          x="4"
          y="4"
          width="24"
          height="24"
          rx="6"
          stroke="var(--lagoon)"
          strokeWidth="2"
        />
        <path
          d="M12 16l3 3 5-6"
          stroke="var(--lagoon-deep)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    accent: 'var(--lagoon)',
    accentSoft: 'rgba(79, 184, 178, 0.12)',
    topics: [
      'Event binding',
      'Bubbling & capture',
      'stopPropagation',
      'preventDefault',
    ],
  },
  {
    to: '/performance' as const,
    kicker: 'Chapter 02',
    title: 'Performance',
    desc: 'Re-renders, memoisation, lazy loading — learn to profile and optimise React apps the right way.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M6 22l6-8 5 4 9-12"
          stroke="var(--palm)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="26" cy="6" r="3" fill="var(--palm)" opacity="0.3" />
        <circle cx="26" cy="6" r="1.5" fill="var(--palm)" />
      </svg>
    ),
    accent: 'var(--palm)',
    accentSoft: 'rgba(47, 106, 74, 0.1)',
    topics: ['React.memo', 'useMemo', 'useCallback', 'Suspense & lazy'],
  },
  {
    to: '/state' as const,
    kicker: 'Chapter 03',
    title: 'State & Context',
    desc: 'Prop drilling, context providers, consumers — share state elegantly across your component tree.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle
          cx="16"
          cy="10"
          r="4"
          stroke="var(--lagoon-deep)"
          strokeWidth="2"
        />
        <circle
          cx="8"
          cy="22"
          r="3"
          stroke="var(--lagoon-deep)"
          strokeWidth="2"
        />
        <circle
          cx="24"
          cy="22"
          r="3"
          stroke="var(--lagoon-deep)"
          strokeWidth="2"
        />
        <path
          d="M16 14v4m-4.5 1.5L13 18m7 1.5L19 18"
          stroke="var(--lagoon-deep)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    accent: 'var(--lagoon-deep)',
    accentSoft: 'rgba(50, 143, 151, 0.1)',
    topics: [
      'Prop drilling',
      'createContext',
      'useContext',
      'Provider pattern',
    ],
  },
];

const STATS = [
  {value: '3', label: 'Chapters'},
  {value: '12+', label: 'Live Demos'},
  {value: '∞', label: 'Re-renders Saved'},
];

/* ── Component ─────────────────────────────────────────── */

function Home() {
  return (
    <div className="home-page">
      {/* ─── Hero ─── */}
      <section className="hero rise-in">
        <p className="island-kicker">React — Learn by building</p>
        <h1 className="hero-title display-title">
          Master React,
          <br />
          <span className="hero-title-accent">one concept at a time.</span>
        </h1>
        <p className="hero-subtitle">
          Interactive, hands-on lessons covering events, performance, and state
          management. Every concept comes with a live, editable demo — not just
          code snippets.
        </p>

        <div className="hero-actions">
          <Link to="/interactivity" className="hero-btn hero-btn-primary">
            Start Learning
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10m0 0L9 4m4 4L9 12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <a
            href="https://github.com/TANVIR0222"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn hero-btn-secondary"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </a>
        </div>
      </section>

      {/* ─── Stats strip ─── */}
      <section
        className="stats-strip rise-in"
        style={{animationDelay: '120ms'}}
      >
        {STATS.map(({value, label}) => (
          <div key={label} className="stat-item">
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </section>

      {/* ─── Topic cards ─── */}
      <section
        className="topics-section rise-in"
        style={{animationDelay: '220ms'}}
      >
        <h2 className="topics-heading">What you&apos;ll learn</h2>
        <div className="topics-grid">
          {TOPICS.map(
            ({to, kicker, title, desc, icon, accent, accentSoft, topics}) => (
              <Link key={to} to={to} className="topic-card feature-card">
                <div className="topic-card-header">
                  <div
                    className="topic-icon-wrap"
                    style={{backgroundColor: accentSoft}}
                  >
                    {icon}
                  </div>
                  <span className="island-kicker">{kicker}</span>
                </div>

                <h3 className="topic-card-title">{title}</h3>
                <p className="topic-card-desc">{desc}</p>

                <ul className="topic-tags">
                  {topics.map(t => (
                    <li key={t} className="topic-tag">
                      {t}
                    </li>
                  ))}
                </ul>

                <span className="topic-card-cta" style={{color: accent}}>
                  Explore chapter
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10m0 0L9 4m4 4L9 12"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            )
          )}
        </div>
      </section>

      {/* ─── How it works ─── */}
      <section
        className="how-section rise-in"
        style={{animationDelay: '320ms'}}
      >
        <h2 className="topics-heading">How it works</h2>
        <div className="how-grid">
          {[
            {
              step: '01',
              title: 'Read the concept',
              desc: 'Each chapter starts with a clear, concise explanation of the React concept.',
              emoji: '📖',
            },
            {
              step: '02',
              title: 'Try the live demo',
              desc: 'Every concept has an interactive, working demo you can poke and prod right in the browser.',
              emoji: '🧪',
            },
            {
              step: '03',
              title: 'See the code',
              desc: 'The code behind each demo is shown inline — no context switching to a separate file.',
              emoji: '💻',
            },
          ].map(({step, title, desc, emoji}) => (
            <div key={step} className="how-card island-shell">
              <div className="how-card-step">
                <span className="how-step-num">{step}</span>
                <span className="how-step-emoji">{emoji}</span>
              </div>
              <h3 className="how-card-title">{title}</h3>
              <p className="how-card-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA banner ─── */}
      <section className="cta-banner rise-in" style={{animationDelay: '400ms'}}>
        <div className="cta-inner island-shell">
          <div className="cta-content">
            <h2 className="cta-title display-title">Ready to dive in?</h2>
            <p className="cta-desc">
              Start with Interactivity — the foundation of every React app.
            </p>
          </div>
          <Link to="/interactivity" className="hero-btn hero-btn-primary">
            Begin Chapter 01
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10m0 0L9 4m4 4L9 12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
