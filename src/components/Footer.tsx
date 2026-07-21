export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink border-t border-white/8 py-10">
      <div className="mx-auto max-w-5xl px-6 lg:px-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">

        <span
          className="text-lg font-light text-paper/70"
          style={{ fontFamily: 'var(--font-display)', fontVariationSettings: "'SOFT' 100, 'WONK' 1" }}
        >
          N<span style={{ color: 'var(--color-accent)' }}>.</span>
        </span>

        {/* Colophon */}
        <div className="mono text-paper/25 text-right space-y-1">
          <p>Built by Mikołaj Szczełkun · Barcelona</p>
          <p>
            Fraunces &amp; Newsreader &amp; IBM Plex Mono · React + Vite
          </p>
          <p>© {year}</p>
        </div>

      </div>
    </footer>
  );
}
