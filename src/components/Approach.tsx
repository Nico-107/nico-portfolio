import { Reveal } from './Reveal';

export function Approach() {
  return (
    <section id="about" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-terra">About</p>
          <h2
            className="mt-3 text-4xl font-semibold text-paper sm:text-5xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            How I work.
          </h2>
        </Reveal>

        <div className="mt-8 space-y-5">
          <Reveal delay={80}>
            <p className="text-base text-white/60 leading-relaxed">
              I'm based in Barcelona, Spain. I use AI-assisted tools like Lovable and Claude Code to move
              fast, but I don't stay no-code — I set up and manage the real infrastructure myself:
              Supabase, Vercel, Stripe. I've had to debug real production issues on live products with
              actual paying customers: broken analytics tracking, SEO misconfigurations, hydration bugs.
              I handle all of it myself, end to end.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <p className="text-base text-white/60 leading-relaxed">
              A pattern I've run into more than once: the dashboard looks clean, but the data is quietly
              wrong. On Dimension3D, PostHog showed zero conversions over 90 days despite real paying
              customers — events were firing before analytics initialized and getting silently dropped.
              On PrintTrack, I built a feature for local-only storage without thinking through the migration
              path, then had to retrofit cloud sync in a way that didn't break early users' data. These
              aren't the kinds of problems that show up in tutorials; they show up in production, and fixing
              them is usually less about code and more about reading the system carefully.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-base text-white/60 leading-relaxed">
              What I've learned: move fast on interfaces, go slow on data schemas and auth flows. The
              parts that are annoying to change later (database structure, how users authenticate, how
              events get tracked) deserve more thought upfront than the parts that are easy to iterate on.
              I didn't always get this right on the first pass, but I know where the bodies are buried.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
