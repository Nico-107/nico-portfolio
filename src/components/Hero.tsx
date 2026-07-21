export function Hero() {
  return (
    <section id="top" className="bg-paper pt-28 pb-0">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">

        {/* Masthead grid — text left, photo right */}
        <div className="grid lg:grid-cols-[1fr_220px] gap-8 lg:gap-16 items-end">

          {/* ── Text column: always renders first in DOM → first on mobile ── */}
          <div>
            <p className="mono text-[var(--color-dim)] mb-5">
              Barcelona, Spain — {new Date().getFullYear()}
            </p>

            <h1 className="display text-[clamp(3.5rem,9vw,7.5rem)] text-ink">
              Mikołaj<br />
              Szczełkun<span style={{ color: 'var(--color-accent)' }}>.</span>
            </h1>

            <p
              className="mt-4 text-xl italic font-light text-[var(--color-muted)]"
              style={{ fontFamily: 'var(--font-display)', fontVariationSettings: "'SOFT' 100, 'WONK' 1" }}
            >
              called Nico
            </p>

            <p className="mt-5 text-[1.0625rem] text-[var(--color-mid)] leading-[1.6] max-w-[52ch]">
              18, studying Digital Business &amp; Innovation at La Salle Barcelona.
              I build and ship software — mostly for small businesses — handling
              everything from frontend to backend, payments, and deployment myself.
            </p>

            <nav className="mt-8 flex flex-wrap gap-x-7 gap-y-2" aria-label="Page sections">
              {[
                { href: '#about',    label: 'About'   },
                { href: '#projects', label: 'Projects' },
                { href: '#journey',  label: 'Journey'  },
                { href: '#contact',  label: 'Contact'  },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="mono text-[0.75rem] text-ink no-underline hover:text-[var(--color-accent)] transition-colors"
                >
                  {l.label} →
                </a>
              ))}
            </nav>
          </div>

          {/* ── Photo column ─────────────────────────────────────────────────
               lg:order-last keeps photo on the RIGHT at desktop.
               At mobile the column falls naturally BELOW the text above.
               max-h-60 caps height on mobile so the name stays above fold.
               TODO: swap profile.jpg for a neutral-background headshot.
          ── */}
          <div className="lg:order-last">
            <div
              className="w-full max-h-60 lg:max-h-none overflow-hidden"
              style={{ aspectRatio: '3 / 4', background: 'var(--color-surface)' }}
            >
              <img
                src="/profile.jpg"
                alt="Mikołaj Szczełkun"
                fetchPriority="high"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        <hr className="rule mt-12" />
      </div>
    </section>
  );
}
