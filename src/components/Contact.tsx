import { Reveal } from './Reveal';

const LINKS = [
  {
    label: 'Email',
    display: 'szczelkunmikolaj@gmail.com',
    href: 'mailto:szczelkunmikolaj@gmail.com',
  },
  {
    label: 'LinkedIn',
    display: 'linkedin.com/in/mikołaj-szczełkun',
    href: 'https://www.linkedin.com/in/miko%C5%82aj-szcze%C5%82kun-270696342/',
  },
  {
    label: 'GitHub',
    display: 'github.com/Nico-107',
    href: 'https://github.com/Nico-107',
  },
  {
    label: 'WhatsApp',
    display: '+34 672 051 147',
    href: 'https://wa.me/34672051147',
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-ink py-16 sm:py-24 border-t border-white/8">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">

        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="font-fraunces mt-3 text-3xl sm:text-4xl font-light text-paper leading-snug">
            Let&#8217;s talk.
          </h2>
          <p className="mt-3 text-paper/50 text-[0.9375rem] max-w-sm leading-relaxed">
            Building something interesting? Open to conversations about projects,
            collaboration, or a genuinely hard problem to solve.
          </p>
        </Reveal>

        <hr className="mt-8 border-none border-t border-white/10" />

        <div className="mt-6 divide-y divide-white/8">
          {LINKS.map((l, i) => (
            <Reveal key={l.label} delay={i * 55}>
              <a
                href={l.href}
                target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between gap-6 py-4 no-underline hover:no-underline"
              >
                <span className="mono text-paper/30 group-hover:text-accent transition-colors w-24 flex-shrink-0">
                  {l.label}
                </span>
                <span className="text-paper/80 group-hover:text-paper transition-colors text-[0.9375rem] truncate min-w-0">
                  {l.display}
                </span>
                <span className="mono text-paper/20 group-hover:text-paper/50 transition-colors flex-shrink-0">
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
