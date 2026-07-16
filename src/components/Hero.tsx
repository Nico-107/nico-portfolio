export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen bg-ink flex items-center overflow-hidden pt-20"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-1/4 right-[-5%] w-[50vw] h-[50vw] rounded-full bg-terra/5 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28 w-full grid lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-center">
        {/* Text column */}
        <div>
          <h1
            className="font-semibold text-paper leading-[0.95]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="block text-[clamp(2.8rem,8vw,7rem)] tracking-tight">
              Mikolaj
            </span>
            <span className="block text-[clamp(2.8rem,8vw,7rem)] tracking-tight">
              Szczelkun<span className="text-terra">.</span>
            </span>
          </h1>

          <p
            className="mt-4 italic text-amber text-xl font-light"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Nico
          </p>

          <p className="mt-2 text-xs text-white/25">
            Mikołaj Szczełkun — also written Mikolaj Szczelkun
          </p>

          <p className="mt-6 text-base text-white/60 max-w-lg leading-relaxed">
            I'm 18, studying at La Salle Barcelona (Universitat Ramon Llull){' '}
            <span className="text-white/35">
              {/* TODO: fill in your exact degree/program */}
            </span>
            . I build and ship software — mostly for small businesses — handling
            everything from frontend to backend, payments, and deployment myself.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-terra px-6 py-3 text-sm font-medium text-white hover:bg-terra/85 transition-colors"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/65 hover:border-white/35 hover:text-white transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Photo — order-first on mobile */}
        <div className="flex items-center justify-center order-first lg:order-last">
          <div className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border border-white/10 bg-surface-2 flex-shrink-0">
            <img
              src="/profile.jpg"
              alt="Mikolaj Szczelkun"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        aria-hidden
      >
        <span className="text-[9px] tracking-[0.25em] text-white/25 uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent" />
      </div>
    </section>
  );
}
