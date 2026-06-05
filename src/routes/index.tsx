import {Link, createFileRoute} from '@tanstack/react-router';

export const Route = createFileRoute('/')({component: Home});

/* ── Topic cards data ──────────────────────────────────── */

const TOPICS = [
  {
    to: '/interactivity' as const,
    num: '01',
    title: 'Interactivity',
    desc: 'Events, binding, bubbling & capture — master every way React connects your UI to user actions.',
    topics: [
      'Event binding',
      'Bubbling & capture',
      'stopPropagation',
      'preventDefault',
    ],
  },
  {
    to: '/performance' as const,
    num: '02',
    title: 'Performance',
    desc: 'Re-renders, memoisation, lazy loading — learn to profile and optimise React apps the right way.',
    topics: ['React.memo', 'useMemo', 'useCallback', 'Suspense & lazy'],
  },
  {
    to: '/state' as const,
    num: '03',
    title: 'State & Context',
    desc: 'Prop drilling, context providers, consumers — share state elegantly across your component tree.',
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
    <div className="bw-home">
      {/* ─── Hero ─── */}
      <section className="bw-hero rise-in">
        <div className="bw-hero-badge">
          <span className="bw-badge-dot" />
          React — Learn by building
        </div>
        <h1 className="bw-hero-title">
          Master React,
          <br />
          <span className="bw-hero-title-em">one concept at a time.</span>
        </h1>
        <p className="bw-hero-sub">
          Interactive, hands-on lessons covering events, performance, and state
          management. Every concept comes with a live, editable demo — not just
          code snippets.
        </p>

        <div className="bw-hero-actions">
          <Link to="/interactivity" className="bw-btn bw-btn-dark">
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
            className="bw-btn bw-btn-light"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </a>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="bw-stats rise-in" style={{animationDelay: '120ms'}}>
        {STATS.map(({value, label}) => (
          <div key={label} className="bw-stat">
            <span className="bw-stat-val">{value}</span>
            <span className="bw-stat-lbl">{label}</span>
          </div>
        ))}
      </section>

      {/* ─── Topic cards ─── */}
      <section className="bw-topics rise-in" style={{animationDelay: '220ms'}}>
        <h2 className="bw-section-title">What you&apos;ll learn</h2>
        <div className="bw-topics-grid">
          {TOPICS.map(({to, num, title, desc, topics}) => (
            <Link key={to} to={to} className="bw-topic-card">
              <span className="bw-topic-num">{num}</span>
              <h3 className="bw-topic-title">{title}</h3>
              <p className="bw-topic-desc">{desc}</p>
              <ul className="bw-topic-chips">
                {topics.map(t => (
                  <li key={t} className="bw-chip">
                    {t}
                  </li>
                ))}
              </ul>
              <span className="bw-topic-cta">
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
          ))}
        </div>
      </section>

      {/* ─── How it works ─── */}
      <section className="bw-how rise-in" style={{animationDelay: '320ms'}}>
        <h2 className="bw-section-title">How it works</h2>
        <div className="bw-how-grid">
          {[
            {
              step: '01',
              title: 'Read the concept',
              desc: 'Each chapter starts with a clear, concise explanation of the React concept.',
            },
            {
              step: '02',
              title: 'Try the live demo',
              desc: 'Every concept has an interactive, working demo you can poke and prod right in the browser.',
            },
            {
              step: '03',
              title: 'See the code',
              desc: 'The code behind each demo is shown inline — no context switching to a separate file.',
            },
          ].map(({step, title, desc}) => (
            <div key={step} className="bw-how-card">
              <span className="bw-how-num">{step}</span>
              <h3 className="bw-how-title">{title}</h3>
              <p className="bw-how-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA banner ─── */}
      <section className="bw-cta rise-in" style={{animationDelay: '400ms'}}>
        <div className="bw-cta-inner">
          <div className="bw-cta-text">
            <h2 className="bw-cta-title">Ready to dive in?</h2>
            <p className="bw-cta-desc">
              Start with Interactivity — the foundation of every React app.
            </p>
          </div>
          <Link to="/interactivity" className="bw-btn bw-btn-white">
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
