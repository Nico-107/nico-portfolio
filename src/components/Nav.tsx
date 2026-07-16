import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#journey', label: 'Journey' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    handle();
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink/90 backdrop-blur-md border-b border-white/5'
          : ''
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-4 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-xl font-semibold text-paper leading-none"
        >
          N<span className="text-terra">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/50 hover:text-white/90 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full bg-terra px-4 py-2 text-sm font-medium text-white hover:bg-terra/85 transition-colors"
          >
            Get in touch
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
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
      </div>

      {open && (
        <div className="md:hidden bg-ink/95 border-t border-white/8 px-6 py-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base text-white/70 hover:text-white transition-colors border-b border-white/5 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 flex justify-center rounded-full bg-terra px-5 py-3 text-sm font-medium text-white"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
