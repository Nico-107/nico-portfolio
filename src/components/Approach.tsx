import { Reveal } from './Reveal';

export function Approach() {
  return (
    <section id="about" className="bg-ink py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">

        {/* Header */}
        <Reveal>
          <p className="eyebrow">About</p>
          <h2 className="font-fraunces mt-3 text-3xl sm:text-4xl font-light text-paper leading-snug">
            How I work.
          </h2>
        </Reveal>

        {/* Body — two-column at large: prose left, pull-quotes right */}
        <div className="mt-10 lg:grid lg:grid-cols-[1fr_240px] lg:gap-16">

          {/* Prose */}
          <div className="space-y-6">
            <Reveal delay={60}>
              {/*
               * Drop cap on the first paragraph of the About section.
               * The ::first-letter pseudo-element requires plain text as the
               * first node — no wrapping spans before the opening character.
               */}
              <p className="drop-cap measure text-paper/80 text-[1.05rem] leading-[1.65]">
                I&#8217;m based in Barcelona &#8212; Polish by birth, raised across five
                countries, 18 now. I use AI&#8209;assisted tools to move fast on interfaces,
                but I don&#8217;t stay no&#8209;code: I own the real infrastructure myself
                &#8212; Supabase, Vercel, Stripe, the whole stack. Every project I&#8217;ve
                shipped has had real paying customers. That means real production issues.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p className="measure text-paper/75 text-[1.05rem] leading-[1.65]">
                A pattern I&#8217;ve run into more than once: the dashboard looks clean,
                but the data is quietly wrong. On Dimension3D, PostHog showed zero
                conversions for 90 days despite genuine orders &#8212; events were firing
                before analytics initialised and getting silently dropped. On PrintTrack,
                I built local&#8209;only storage without thinking through what happens when
                users want to sign in and sync. Both had to be fixed in production, with
                real users already in the system. These aren&#8217;t the kinds of problems
                that show up in tutorials; they show up in production, and fixing them is
                usually less about code and more about reading the system carefully.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <p className="measure text-paper/75 text-[1.05rem] leading-[1.65]">
                What I&#8217;ve learned: the parts that are annoying to change later &#8212;
                database structure, how users authenticate, how events get tracked &#8212;
                deserve more thought upfront than the parts that are easy to iterate on.
                I didn&#8217;t always get this right on the first pass. But I know where
                the bodies are buried, and I know how to read a system carefully enough
                to find the quiet failures before they compound.
              </p>
            </Reveal>
          </div>

          {/* Pull-quotes — stacked to the right at desktop, inline below prose at mobile */}
          <div className="mt-10 lg:mt-0 space-y-8">
            <Reveal delay={80}>
              <figure className="m-0">
                <blockquote className="pull-quote text-paper">
                  &#8220;The dashboard looks clean. The data is quietly wrong.&#8221;
                </blockquote>
                <figcaption className="mono mt-3 text-paper/30">
                  Dimension3D / PostHog incident
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={160}>
              <figure className="m-0">
                <blockquote className="pull-quote text-paper">
                  &#8220;Move fast on interfaces. Go slow on schemas and auth.&#8221;
                </blockquote>
                <figcaption className="mono mt-3 text-paper/30">
                  PrintTrack data migration
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
