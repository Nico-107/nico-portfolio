import { Reveal } from './Reveal';

interface ContactLink {
  label: string;
  display: string;
  href: string;
}

const LINKS: ContactLink[] = [
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
    label: 'WhatsApp / Phone',
    display: '+34 672 051 147',
    href: 'https://wa.me/34672051147',
  },
];

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-ink py-24 sm:py-32 border-t border-white/6">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-terra">Contact</p>
          <h2
            className="mt-3 text-4xl font-semibold text-paper sm:text-5xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Let's talk.
          </h2>
          <p className="mt-4 text-base text-white/45 max-w-sm leading-relaxed">
            Building something interesting? I'm open to conversations about
            projects, collaboration, or a genuinely hard problem to solve.
          </p>
        </Reveal>

        <div className="mt-12 space-y-3">
          {LINKS.map((l, i) => (
            <Reveal key={l.label} delay={i * 70}>
              <a
                href={l.href}
                target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/8 bg-white/4 hover:border-terra/30 hover:bg-terra/6 p-5 transition-all duration-200"
              >
                <div>
                  <p className="text-[10px] font-semibold tracking-widest text-white/30 uppercase mb-1">
                    {l.label}
                  </p>
                  <p className="font-medium text-paper">
                    {l.display}
                  </p>
                </div>
                <span className="text-white/15 group-hover:text-terra/50 transition-colors">
                  <ArrowIcon />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
