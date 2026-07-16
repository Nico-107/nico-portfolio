import { Reveal } from './Reveal';

interface Stop {
  code: string;
  location: string;
  institution?: string;
  note?: string;
  duration?: string;
  current?: boolean;
}

const TIMELINE: Stop[] = [
  {
    code: 'de',
    location: 'Germany',
    note: 'Born',
    duration: '~1 year',
  },
  {
    code: 'vn',
    location: 'Vietnam',
    duration: '2 years',
  },
  {
    code: 'sg',
    location: 'Singapore',
    note: 'First grade',
    duration: '3 years',
  },
  {
    code: 'cn',
    location: 'Shanghai, China',
    institution: 'Singapore International School of Shanghai (SISS) → Western International School of Shanghai (WISS)',
    duration: '4 years',
  },
  {
    code: 'es',
    location: 'Barcelona, Spain',
    institution: 'Highland School',
  },
  {
    code: 'es',
    location: 'Gavà, Spain',
    institution: 'The British College of Gavà',
    note: 'IB Diploma',
  },
  {
    code: 'es',
    location: 'Barcelona, Spain',
    institution: 'La Salle Barcelona, Universitat Ramon Llull',
    note: 'Current',
    current: true,
  },
];

export function Journey() {
  return (
    <section id="journey" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        {/* Header */}
        <Reveal>
          <p className="eyebrow text-terra">Background</p>
          <h2
            className="mt-3 text-4xl font-semibold text-ink sm:text-5xl leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Where I've lived.
          </h2>
          <p className="mt-4 max-w-xl text-base text-graphite leading-relaxed">
            I've lived in five countries growing up:
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-stone/60 border border-stone px-3 py-1.5 text-xs text-graphite">
            <span
              className="fi fi-pl"
              style={{ display: 'inline-block', width: '1.25em', height: '0.94em' }}
            />
            <span>Polish nationality — I've never actually lived there</span>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="mt-14 relative">
          {/* Vertical spine */}
          <div
            className="absolute left-[1.625rem] top-2 bottom-2 w-px bg-gradient-to-b from-stone via-stone to-transparent"
            aria-hidden
          />

          <ol className="space-y-0">
            {TIMELINE.map((stop, i) => (
              <Reveal key={i} delay={i * 55} className="relative">
                <li className="flex gap-6 items-start">
                  {/* Flag badge */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-[3.25rem] h-[3.25rem] rounded-xl flex items-center justify-center border-2 shadow-sm ${
                      stop.current
                        ? 'bg-terra border-terra shadow-terra/20'
                        : 'bg-white border-stone'
                    }`}
                  >
                    <span
                      className={`fi fi-${stop.code}`}
                      style={{ display: 'block', width: '1.9em', height: '1.43em' }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-ink text-base leading-snug">
                          {stop.location}
                        </h3>
                        {stop.institution && (
                          <p className="text-sm text-graphite mt-0.5 leading-snug">
                            {stop.institution}
                          </p>
                        )}
                        {stop.note && (
                          <span
                            className={`inline-block mt-1.5 text-[11px] font-semibold tracking-wide uppercase rounded-full px-2 py-0.5 ${
                              stop.current
                                ? 'bg-terra/10 text-terra'
                                : 'bg-stone/80 text-muted'
                            }`}
                          >
                            {stop.note}
                          </span>
                        )}
                      </div>
                      {stop.duration && (
                        <span className="shrink-0 text-xs font-mono text-muted bg-stone/60 px-2.5 py-1 rounded-full">
                          {stop.duration}
                        </span>
                      )}
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
