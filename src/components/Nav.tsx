import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#projects', label: 'Projects' },
  { href: '#about',    label: 'About'    },
  { href: '#journey',  label: 'Journey'  },
  { href: '#contact',  label: 'Contact'  },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60);
    handle();
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  /* Close mobile menu on Escape */
  useEffect(() => {
    if (!open) return;
    const handle = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', handle);
    return () => document.removeEventListener('keydown', handle);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-paper)]/95 backdrop-blur-sm border-b border-[var(--color-rule)]'
          : ''
      }`}
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#top"
          className="font-light text-base no-underline text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
          style={{ fontFamily: 'var(--font-display)', fontVariationSettings: "'SOFT' 100, 'WONK' 1" }}
        >
          N<span style={{ color: 'var(--color-accent)' }}>.</span>
        </a>

        {/* Desktop nav — mono small-caps links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="mono text-[0.6875rem] text-[var(--color-muted)] hover:text-[var(--color-ink)] no-underline transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden p-2 text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[var(--color-paper)] border-t border-[var(--color-rule)] px-6 py-5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 mono text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)] no-underline border-b border-[var(--color-rule)] last:border-0 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
