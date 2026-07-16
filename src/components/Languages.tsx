import { Reveal } from './Reveal';

const SPEAK = ['Polish', 'English', 'Spanish', 'Mandarin', 'Catalan'];
const FOLLOW = ['Italian', 'Portuguese', 'Ukrainian'];

export function Languages() {
  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-terra">Languages</p>
          <h2
            className="mt-3 text-4xl font-semibold text-paper sm:text-5xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Languages.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 space-y-8">
            <div>
              <p className="text-sm text-white/40 mb-4">I speak:</p>
              <div className="flex flex-wrap gap-2.5">
                {SPEAK.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-xl border border-white/15 bg-white/6 px-4 py-2.5 text-base font-medium text-paper"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm text-white/40 mb-4">
                I can also read and follow:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {FOLLOW.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-xl border border-white/8 bg-white/3 px-4 py-2.5 text-base text-white/40"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
