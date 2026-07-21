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
  { code: 'de', location: 'Germany',             note: 'Born',        duration: '~1 yr'  },
  { code: 'vn', location: 'Vietnam',                                   duration: '2 yrs'  },
  { code: 'sg', location: 'Singapore',            note: 'Grade 1',     duration: '3 yrs'  },
  { code: 'cn', location: 'Shanghai, China',
    institution: 'SISS → WISS',                                         duration: '4 yrs'  },
  { code: 'es', location: 'Barcelona, Spain',
    institution: 'Highlands School'                                                        },
  { code: 'es', location: 'Gavà, Spain',
    institution: 'The British College of Gavà',  note: 'IB Diploma'                       },
  { code: 'pl', location: 'Polish nationality',
    note: 'Never actually lived there'                                                     },
  { code: 'es', location: 'Barcelona, Spain',
    institution: 'La Salle Barcelona — Universitat Ramon Llull', note: 'Current', current: true },
];

export function Journey() {
  return (
    <section id="journey" className="bg-paper py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">

        <Reveal>
          <p className="eyebrow">Background</p>
          <h2 className="font-fraunces mt-3 text-3xl sm:text-4xl font-light text-ink leading-snug">
            Where I&#8217;ve lived.
          </h2>
          <p className="mt-3 text-[var(--color-muted)] text-sm max-w-md">
            Five countries before university — Germany, Vietnam, Singapore, China, Spain.
          </p>
        </Reveal>

        <hr className="rule mt-8" />

        {/* Timeline */}
        <div className="mt-8 relative">
          {/* Spine */}
          <div
            className="absolute left-[1.4rem] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-rule)] via-[var(--color-rule)] to-transparent"
            aria-hidden
          />

          <ol className="space-y-0">
            {TIMELINE.map((stop, i) => (
              <Reveal key={i} delay={i * 45} className="relative">
                <li className="flex gap-5 items-start">
                  {/* Flag badge */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center border ${
                      stop.current
                        ? 'bg-accent border-accent shadow-sm'
                        : 'bg-paper border-[var(--color-rule)]'
                    }`}
                  >
                    <span
                      className={`fi fi-${stop.code}`}
                      style={{ display: 'block', width: '1.75em', height: '1.3em' }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-7">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-medium text-ink text-[0.9375rem] leading-snug">
                          {stop.location}
                        </h3>
                        {stop.institution && (
                          <p className="text-sm text-[var(--color-muted)] mt-0.5 leading-snug">
                            {stop.institution}
                          </p>
                        )}
                        {stop.note && (
                          <span
                            className={`inline-block mt-1.5 mono rounded px-1.5 py-0.5 text-[10px] ${
                              stop.current
                                ? 'bg-accent/10 text-accent'
                                : 'bg-[var(--color-surface)] text-[var(--color-muted)]'
                            }`}
                          >
                            {stop.note}
                          </span>
                        )}
                      </div>
                      {stop.duration && (
                        <span className="mono text-[var(--color-dim)] shrink-0">
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
