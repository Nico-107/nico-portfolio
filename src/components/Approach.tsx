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

        <Reveal delay={80}>
          <p className="mt-8 text-base text-white/60 leading-relaxed max-w-2xl">
            I use AI-assisted tools like Lovable and Claude Code to move fast,
            but I don't stay no-code — I set up and manage the real infrastructure
            myself: Supabase, Vercel, Stripe. I've had to debug real production
            issues on live products with actual paying customers: broken analytics
            tracking, SEO misconfigurations, hydration bugs. I handle all of it
            myself, end to end.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
