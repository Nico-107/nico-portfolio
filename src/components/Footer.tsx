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
        <p className="text-xs text-white/25">
          © 2026 Mikolaj Szczelkun · Barcelona
        </p>
      </div>
    </footer>
  );
}
