import { Reveal } from './Reveal';

interface School {
  monogram: string;
  name: string;
  sub?: string;
  credential: string;
  location: string;
  current: boolean;
}

const SCHOOLS: School[] = [
  {
    monogram: 'BCG',
    name: 'The British College of Gavà',
    credential: 'IB Diploma',
    location: 'Gavà, Spain',
    current: false,
  },
  {
    monogram: 'LS',
    name: 'La Salle Barcelona',
    sub: 'Universitat Ramon Llull',
    credential: 'Currently enrolled',
    location: 'Barcelona, Spain',
    current: true,
  },
];

export function Education() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-terra">Education</p>
          <h2
            className="mt-3 text-4xl font-semibold text-ink sm:text-5xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Where I studied.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {SCHOOLS.map((s, i) => (
            <Reveal key={s.name} delay={i * 100}>
              <div
                className={`rounded-2xl border-2 p-8 h-full flex flex-col ${
                  s.current
                    ? 'border-terra/35 bg-terra/5'
                    : 'border-stone bg-white'
                }`}
              >
                {/* Monogram badge */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 ${
                    s.current
                      ? 'bg-terra text-white'
                      : 'bg-ink text-paper'
                  }`}
                >
                  <span
                    className="text-[11px] font-bold tracking-tighter"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {s.monogram}
                  </span>
                </div>

                <div className="flex-1">
                  <h3
                    className="text-xl font-semibold text-ink leading-snug"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {s.name}
                  </h3>
                  {s.sub && (
                    <p className="mt-0.5 text-sm text-graphite">{s.sub}</p>
                  )}
                </div>

                <div className="mt-6 pt-5 border-t border-stone/70 flex items-center justify-between gap-3 flex-wrap">
                  <span
                    className={`text-sm font-semibold ${
                      s.current ? 'text-terra' : 'text-graphite'
                    }`}
                  >
                    {s.credential}
                  </span>
                  <span className="text-xs text-muted">{s.location}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
