import { Reveal } from './Reveal';

interface School {
  name: string;
  program: string;
  meta: string;       /* grades / credential in mono */
  location: string;
  current?: boolean;
}

const SCHOOLS: School[] = [
  {
    name: 'Singapore International School of Shanghai',
    program: 'SISS',
    meta: 'Grades 2–3',
    location: 'Shanghai, China',
  },
  {
    name: 'Western International School of Shanghai',
    program: 'IB Primary Years Programme (PYP)',
    meta: 'Grades 4–5',
    location: 'Shanghai, China',
  },
  {
    name: 'Highlands School',
    program: 'Spanish ESO curriculum',
    meta: 'Grades 6–10',
    location: 'Barcelona, Spain',
  },
  {
    name: 'The British College of Gavà',
    program: 'IB Diploma Programme',
    meta: 'Grades 11–12',
    location: 'Gavà, Spain',
  },
  {
    name: 'La Salle Barcelona',
    program: 'Digital Business & Innovation — Universitat Ramon Llull',
    meta: 'Current',
    location: 'Barcelona, Spain',
    current: true,
  },
];

export function Education() {
  return (
    <section id="education" className="bg-paper py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">

        <Reveal>
          <p className="eyebrow">Education</p>
          <h2 className="font-fraunces mt-3 text-3xl sm:text-4xl font-light text-ink leading-snug">
            Where I studied.
          </h2>
          <p className="mt-2 text-sm text-[var(--color-muted)] max-w-md">
            The earlier years — Germany, Vietnam, Singapore — are in the Journey above.
          </p>
        </Reveal>

        <hr className="rule mt-8" />

        <ol className="mt-2 divide-y divide-[var(--color-rule)]">
          {SCHOOLS.map((s, i) => (
            <Reveal key={s.name} delay={i * 55}>
              <li className="py-6 grid sm:grid-cols-[1fr_auto] gap-1 sm:gap-8 items-baseline">
                <div>
                  <h3
                    className={`font-fraunces text-[1.1rem] font-semibold leading-snug ${
                      s.current ? 'text-accent' : 'text-ink'
                    }`}
                  >
                    {s.name}
                  </h3>
                  <p className="mt-0.5 text-sm italic text-[var(--color-muted)]">
                    {s.program}
                  </p>
                  <p className="mt-0.5 mono text-[var(--color-dim)]">
                    {s.location}
                  </p>
                </div>
                <span
                  className={`mono shrink-0 text-right ${
                    s.current ? 'text-accent' : 'text-[var(--color-dim)]'
                  }`}
                >
                  {s.meta}
                </span>
              </li>
            </Reveal>
          ))}
        </ol>

      </div>
    </section>
  );
}
