export function Footer() {
  return (
    <footer className="bg-ink border-t border-white/6 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between gap-4 flex-wrap">
        <span
          className="text-lg font-semibold text-paper"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          N<span className="text-terra">.</span>
        </span>
        <div className="flex flex-col items-end gap-1">
          <p className="text-xs text-white/25">
            © 2026 Mikolaj Szczelkun · Barcelona
          </p>
          <a
            href="https://nico-portfolio-gold.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/25 hover:text-white/40 transition-colors"
          >
            Built by Mikołaj Szczełkun ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
