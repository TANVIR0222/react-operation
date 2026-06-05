import {Link, useRouterState} from '@tanstack/react-router';

const NAV_ITEMS = [
  {to: '/' as const, label: 'Home'},
  {to: '/interactivity' as const, label: 'Interactivity'},
  {to: '/performance' as const, label: 'Performance'},
  {to: '/state' as const, label: 'State'},
];

export default function Header() {
  const pathname = useRouterState({select: s => s.location.pathname});

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Logo / Brand */}
        <Link to="/" className="header-brand">
          <span className="header-logo-icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="8" fill="url(#logo-grad)" />
              <path
                d="M8 14.5c0-3.5 2.5-6.5 6-6.5s6 3 6 6.5-2.5 6.5-6 6.5"
                stroke="#fff"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <circle cx="14" cy="14.5" r="2" fill="#fff" />
              <defs>
                <linearGradient id="logo-grad" x1="0" y1="0" x2="28" y2="28">
                  <stop stopColor="var(--lagoon)" />
                  <stop offset="1" stopColor="var(--palm)" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="header-brand-text">React Operation</span>
        </Link>

        {/* Navigation */}
        <nav className="header-nav" aria-label="Main navigation">
          {NAV_ITEMS.map(({to, label}) => {
            const isActive =
              to === '/' ? pathname === '/' : pathname.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                className={`header-nav-link ${isActive ? 'is-active' : ''}`}
              >
                <span className="header-nav-label">{label}</span>
                {isActive && <span className="header-nav-indicator" />}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="header-mobile-toggle"
          aria-label="Toggle navigation menu"
          onClick={e => {
            const nav = (e.currentTarget as HTMLElement)
              .closest('.header-inner')
              ?.querySelector('.header-nav') as HTMLElement | null;
            nav?.classList.toggle('is-open');
            e.currentTarget.classList.toggle('is-open');
          }}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>
    </header>
  );
}
