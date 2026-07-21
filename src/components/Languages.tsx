import { Reveal } from './Reveal';

/* Fixed-size flag container — every flag renders at the same width/height */
function Flag({ code }: { code: string }) {
  return (
    <span
      className={`fi fi-${code} inline-block flex-shrink-0`}
      style={{ width: '1.25rem', height: '0.94rem', verticalAlign: 'middle' }}
      aria-hidden
    />
  );
}

const TIERS = [
  {
    level: 'Native',
    entries: [
      { lang: 'Polish', code: 'pl' },
    ],
  },
  {
    level: 'Fluent',
    entries: [
      { lang: 'English', code: 'gb' },
      { lang: 'Spanish', code: 'es' },
    ],
  },
  {
    level: 'Working',
    entries: [
      { lang: 'Mandarin', code: 'cn' },
      { lang: 'Catalan',  code: 'es-ct' },
    ],
  },
  {
    level: 'Reading',
    entries: [
      { lang: 'Italian',    code: 'it' },
      { lang: 'Portuguese', code: 'pt' },
      { lang: 'Ukrainian',  code: 'ua' },
    ],
  },
];

export function Languages() {
  return (
    <section className="bg-[var(--color-surface)] py-14 sm:py-20 border-t border-[var(--color-rule)]">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">

        <Reveal>
          <p className="eyebrow">Languages</p>
          <h2 className="font-fraunces mt-3 text-3xl sm:text-4xl font-light text-ink leading-snug">
            Languages.
          </h2>
        </Reveal>

        <div className="mt-8 divide-y divide-[var(--color-rule)]">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.level} delay={i * 55}>
              <div className="py-5 sm:grid sm:grid-cols-[120px_1fr] sm:gap-8 sm:items-baseline">
                {/* Tier label in mono */}
                <span className="mono text-[var(--color-muted)] block mb-2 sm:mb-0">
                  {tier.level}
                </span>
                {/* Language list in Newsreader */}
                <ul className="flex flex-wrap gap-x-7 gap-y-1 list-none m-0 p-0">
                  {tier.entries.map(({ lang, code }) => (
                    <li key={lang} className="flex items-center gap-2 text-[1rem] text-ink">
                      <Flag code={code} />
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
