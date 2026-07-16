import { Reveal } from './Reveal';

interface Project {
  name: string;
  logo: string;
  description: string;
  stack: string[];
  link: string | null;
}

const PROJECTS: Project[] = [
  {
    name: 'Tapiko',
    logo: '/Screenshot 2026-07-16 at 11.49.43.png',
    description:
      'NFC-embedded 3D-printed plaques for restaurants and cafés. Customers tap to land on reviews, socials, or a menu — no app required.',
    stack: ['React', 'TanStack Start', 'Supabase', 'Trilingual'],
    link: null,
  },
  {
    name: 'Dimension3D',
    logo: '/Screenshot 2026-07-16 at 11.37.55.png',
    description:
      'On-demand 3D printing service based in Barcelona. Includes a live STL viewer, instant quoting, and 61+ SEO-indexed pages across three languages.',
    stack: ['React', 'Vite', 'Three.js', 'Supabase', 'Stripe'],
    link: 'https://www.dimension3dprints.com',
  },
  {
    name: 'PrintTrack',
    logo: '/Printrack.png',
    description:
      'Free business management tool for 3D printing operators. Covers customers, orders, invoicing, and file imports (gcode, 3mf). Available in six languages.',
    stack: ['React', 'Supabase', 'Vercel'],
    link: 'https://www.printrack.xyz',
  },
  {
    name: 'Paythra',
    logo: '/Paythra.png',
    description:
      'Scans Gmail and bank statements to find subscriptions and recurring charges people have forgotten about. One-time payment, no subscription.',
    stack: ['React', 'Supabase', 'Stripe'],
    link: 'https://paythra.com',
  },
];

function ArrowIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="h-full flex flex-col rounded-2xl border border-stone bg-white p-7 hover:border-terra/25 transition-colors duration-200">
        <div className="flex items-center gap-3">
          <img
            src={project.logo}
            alt={`${project.name} logo`}
            className="h-7 w-auto object-contain flex-shrink-0"
          />
          <h3
            className="text-lg font-semibold text-ink"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {project.name}
          </h3>
        </div>

        <p className="mt-3 text-sm text-graphite leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-stone/60 px-2.5 py-0.5 text-xs text-graphite"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-stone/50">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-terra hover:text-terra/70 transition-colors"
            >
              {project.link.replace(/^https?:\/\/(www\.)?/, '')} <ArrowIcon />
            </a>
          ) : (
            <span className="text-sm text-muted">Not yet public</span>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-terra">Projects</p>
          <h2
            className="mt-3 text-4xl font-semibold text-ink sm:text-5xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Things I've built.
          </h2>
          <p className="mt-4 max-w-md text-base text-graphite leading-relaxed">
            All of these are live products I built and maintain on my own.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.name} project={p} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}
