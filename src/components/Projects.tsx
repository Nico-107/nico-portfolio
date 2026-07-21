import { Reveal } from './Reveal';

interface Project {
  name: string;
  logo: string;
  screenshot: string;
  displayUrl: string | null;
  link: string | null;
  github: string | null;
  summary: string;
  description: string;
  details: string[];
  stack: string[];
}

const PROJECTS: Project[] = [
  {
    name: 'Tapiko',
    logo: '/Screenshot 2026-07-16 at 11.49.43.png', /* TODO: rename to tapiko-logo.png */
    screenshot: '/tapiko-screenshot.png',
    displayUrl: null,
    link: null,
    github: 'https://github.com/Nico-107/tapiko-connect-web',
    summary: 'NFC-embedded 3D-printed plaques for restaurants and cafés.',
    description:
      'Designed and manufactured in Barcelona. Customers tap the plaque to land on reviews, socials, or a menu — no app required. Built the full stack myself: React with TanStack Start, trilingual (EN/ES/CA), Supabase-backed lead capture, and a live 3D product configurator.',
    details: [
      'Built a real product catalog with color variants — each plaque finish has its own swatch and preview image, browsable before ordering.',
      'The 3D configurator lets potential customers rotate and inspect the actual plaque geometry in the browser before placing an order.',
      'Currently building toward first real customers; backend and ordering flow are in place.',
    ],
    stack: ['React', 'TanStack Start', 'Supabase', 'Three.js', 'EN/ES/CA'],
  },
  {
    name: 'Dimension3D',
    logo: '/Screenshot 2026-07-16 at 11.37.55.png', /* TODO: rename to dimension3d-logo.png */
    screenshot: '/dimension3d-screenshot.png',
    displayUrl: 'dimension3dprints.com',
    link: 'https://www.dimension3dprints.com',
    github: null,
    summary: 'On-demand 3D printing service based in Barcelona.',
    description:
      'Started as a no-code build, then migrated to a prerendered Vite/React codebase when I needed SEO and performance control. 61+ prerendered routes across three languages, a live STL viewer, and Stripe for payments.',
    details: [
      'Audited all 61+ prerendered routes against actual build output and fixed a missing Catalan homepage, a robots.txt misconfiguration, and duplicate SEO tags.',
      'Found and fixed a silent analytics bug: PostHog showed zero conversions over 90 days despite real paying customers. Events were firing before analytics initialized and getting dropped. Fixed with a queue-based buffer.',
      'The STL viewer uses Three.js to load and render user-uploaded geometry files directly in the browser — no server-side processing.',
    ],
    stack: ['React', 'Vite', 'Three.js', 'Supabase', 'Stripe', 'EN/ES/CA'],
  },
  {
    name: 'PrintTrack',
    logo: '/Printrack.png',
    screenshot: '/printtrack-screenshot.png',
    displayUrl: 'printrack.xyz',
    link: 'https://www.printrack.xyz',
    github: null,
    summary: 'Free business management tool for 3D printing operators.',
    description:
      'A free SaaS tool for other 3D-printing operators to manage customers, pricing, and invoicing — available in six languages. PDF invoice generation, Google OAuth with cloud sync, and gcode/3mf file import for calculating print costs from actual slice data.',
    details: [
      'Added a migration path for early users who\'d started in local-only storage: their existing data carries over automatically when they sign in with Google.',
      'Identified the real problem wasn\'t traffic but activation — new users landed on an empty dashboard and left. Built a pre-populated first-run demo experience.',
      'gcode and 3mf file import lets operators drag in a slice file and get a cost estimate based on actual print time and material usage.',
    ],
    stack: ['React', 'Supabase', 'Vercel', '6 languages'],
  },
  {
    name: 'Paythra',
    logo: '/Paythra.png',
    screenshot: '/paythra-screenshot.png',
    displayUrl: 'paythra.com',
    link: 'https://paythra.com',
    github: null,
    summary: 'Finds subscriptions and recurring charges people have forgotten about.',
    description:
      'Started in a university entrepreneurship course; I built the technical side solo. Detects subscriptions automatically by scanning Gmail, with confidence scoring to separate confirmed charges from guesses. One-time payment, no subscription.',
    details: [
      'Gmail detection was the hardest part. Several backend approaches failed — ended up with a working frontend-only architecture using Google Identity Services.',
      'Confidence scoring classifies each detected charge: high-confidence matches shown immediately, lower-confidence ones grouped separately for review.',
      'Built and submitted as the technical deliverable for a university entrepreneurship course; the codebase is mine.',
    ],
    stack: ['React', 'Supabase', 'Stripe', 'Google Identity Services'],
  },
];

function ExternalIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 60}>
      <article className="border-t border-[var(--color-rule)] pt-8 pb-2">

        {/* Header row */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <img
              src={project.logo}
              alt={`${project.name} logo`}
              loading="lazy"
              className="h-6 w-auto object-contain flex-shrink-0"
            />
            <h3 className="font-fraunces text-xl font-semibold text-ink leading-none">
              {project.name}
            </h3>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 mono text-[0.6875rem] text-[var(--color-muted)] hover:text-ink no-underline transition-colors"
              >
                <GitHubIcon /> GitHub
              </a>
            )}
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 mono text-[0.6875rem] text-accent no-underline hover:opacity-75 transition-opacity"
              >
                {project.displayUrl} <ExternalIcon />
              </a>
            ) : (
              <span className="mono text-[0.6875rem] text-[var(--color-dim)]">Not yet public</span>
            )}
          </div>
        </div>

        <p className="mt-2 text-sm text-[var(--color-muted)] italic">{project.summary}</p>

        {/* Screenshot — 16:10 aspect ratio, object-top so headlines stay visible */}
        <div
          className="mt-5 overflow-hidden rounded-lg border border-[var(--color-rule)] bg-[var(--color-surface)]"
          style={{ aspectRatio: '16 / 10' }}
        >
          <img
            src={project.screenshot}
            alt={`${project.name} screenshot`}
            loading="lazy"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Body */}
        <div className="mt-6 lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div>
            <p className="text-[var(--color-mid)] text-[0.9375rem] leading-[1.65]">
              {project.description}
            </p>
            <ul className="mt-4 space-y-2.5 list-none p-0 m-0">
              {project.details.map((detail, i) => (
                <li key={i} className="flex gap-3 text-[0.9rem] text-[var(--color-muted)] leading-relaxed">
                  <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-accent/60 inline-block" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack in mono — column at large, inline row at small */}
          <div className="mt-6 lg:mt-0">
            <p className="mono text-[var(--color-dim)] mb-2">Stack</p>
            <ul className="flex flex-wrap lg:flex-col gap-1.5 lg:gap-1 list-none p-0 m-0">
              {project.stack.map((tag) => (
                <li key={tag} className="mono text-[var(--color-muted)]">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="bg-paper py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">

        <Reveal>
          <p className="eyebrow">Projects</p>
          <h2 className="font-fraunces mt-3 text-3xl sm:text-4xl font-light text-ink leading-snug">
            Things I&#8217;ve built.
          </h2>
          <p className="mt-2 text-sm text-[var(--color-muted)] max-w-lg">
            All live products I built and maintain myself — from initial setup to production debugging.
          </p>
        </Reveal>

        <div className="mt-6 space-y-10">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
