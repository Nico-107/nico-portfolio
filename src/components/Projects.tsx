import { Reveal } from './Reveal';

interface Project {
  name: string;
  logo: string;
  screenshot: string;
  displayUrl: string | null;
  link: string | null;
  summary: string;
  description: string;
  details: string[];
  stack: string[];
}

const PROJECTS: Project[] = [
  {
    name: 'Tapiko',
    logo: '/Screenshot 2026-07-16 at 11.49.43.png',
    screenshot: '/tapiko-screenshot.png',
    displayUrl: null,
    link: null,
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
    logo: '/Screenshot 2026-07-16 at 11.37.55.png',
    screenshot: '/dimension3d-screenshot.png',
    displayUrl: 'dimension3dprints.com',
    link: 'https://www.dimension3dprints.com',
    summary: 'On-demand 3D printing service based in Barcelona.',
    description:
      'Started as a no-code build, then migrated to a prerendered Vite/React codebase when I needed SEO and performance control that no-code platforms couldn\'t give. The site has 61+ prerendered routes across three languages, a live STL viewer so customers can preview their uploaded file before ordering, and Stripe for payments.',
    details: [
      'Audited all 61+ prerendered routes against actual build output and fixed a missing Catalan homepage, a robots.txt misconfiguration exposing the admin panel to search engines, and duplicate SEO tags across pages.',
      'Found and fixed a silent analytics bug: PostHog showed zero conversions over 90 days despite real paying customers. The events were firing before analytics initialization completed and getting dropped. Fixed with a queue-based buffer.',
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
    summary: 'Free business management tool for 3D printing operators.',
    description:
      'A free SaaS tool for other 3D-printing operators to manage customers, pricing, and invoicing — available in six languages. Built PDF invoice generation, Google OAuth with cloud sync, and gcode/3mf file import for calculating print costs from actual slice data.',
    details: [
      'Added a migration path for early users who\'d started in local-only storage: their existing data carries over automatically to cloud sync when they sign in with Google.',
      'Identified the real problem wasn\'t traffic but activation — new users landed on an empty dashboard and left. Built a pre-populated first-run demo experience so there\'s something to interact with immediately.',
      'gcode and 3mf file import lets operators drag in a slice file and get a cost estimate based on actual print time and material usage rather than a manual guess.',
    ],
    stack: ['React', 'Supabase', 'Vercel', '6 languages'],
  },
  {
    name: 'Paythra',
    logo: '/Paythra.png',
    screenshot: '/paythra-screenshot.png',
    displayUrl: 'paythra.com',
    link: 'https://paythra.com',
    summary: 'Finds subscriptions and recurring charges people have forgotten about.',
    description:
      'Started in a university entrepreneurship course; I built the technical side solo and own the GitHub repo, Stripe account, Supabase project, and Vercel deployment. Detects subscriptions automatically by scanning Gmail, with confidence scoring to separate confirmed charges from guesses. One-time payment, no subscription.',
    details: [
      'Gmail detection was the hardest part. Several backend approaches failed — server-side Gmail API access hit OAuth scope and token-refresh complexity that wasn\'t worth the architecture cost. Ended up with a working frontend-only architecture using Google Identity Services, which runs entirely in the browser.',
      'Confidence scoring classifies each detected charge: high-confidence matches get shown immediately, lower-confidence ones are grouped separately so users can review them rather than trusting every result blindly.',
      'Built and submitted as the technical deliverable for a university entrepreneurship course; the product side was a team effort, the codebase is mine.',
    ],
    stack: ['React', 'Supabase', 'Stripe', 'Google Identity Services'],
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

function BrowserMockup({ src, alt, url }: { src: string; alt: string; url: string | null }) {
  return (
    <div className="rounded-xl overflow-hidden border border-stone shadow-md">
      {/* Fake browser chrome */}
      <div className="bg-stone/60 px-4 py-2.5 flex items-center gap-3 border-b border-stone">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-stone" />
          <div className="w-2.5 h-2.5 rounded-full bg-stone" />
          <div className="w-2.5 h-2.5 rounded-full bg-stone" />
        </div>
        <div className="flex-1 min-w-0 bg-white/70 rounded-md px-3 py-1 text-xs text-muted font-mono truncate">
          {url ?? 'Not yet public'}
        </div>
      </div>
      {/* Screenshot */}
      <div className="h-56 sm:h-64 overflow-hidden bg-stone/30">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}

function ProjectBlock({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 60}>
      <article className="rounded-2xl border border-stone bg-white overflow-hidden">
        {/* Header */}
        <div className="px-7 pt-7 pb-5 border-b border-stone/60">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <img
                src={project.logo}
                alt={`${project.name} logo`}
                className="h-7 w-auto object-contain flex-shrink-0"
              />
              <h3
                className="text-xl font-semibold text-ink"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {project.name}
              </h3>
            </div>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-terra hover:text-terra/70 transition-colors flex-shrink-0"
              >
                {project.displayUrl} <ArrowIcon />
              </a>
            ) : (
              <span className="text-sm text-muted">Not yet public</span>
            )}
          </div>
          <p className="mt-2 text-sm text-graphite">{project.summary}</p>
        </div>

        {/* Screenshot */}
        <div className="px-7 pt-6">
          <BrowserMockup
            src={project.screenshot}
            alt={`${project.name} screenshot`}
            url={project.displayUrl}
          />
        </div>

        {/* Body */}
        <div className="px-7 py-6">
          <p className="text-sm text-graphite leading-relaxed">{project.description}</p>

          <ul className="mt-5 space-y-2.5">
            {project.details.map((detail, i) => (
              <li key={i} className="flex gap-3 text-sm text-graphite leading-relaxed">
                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-terra/50" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          {/* Stack tags */}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-stone/60 px-2.5 py-0.5 text-xs text-graphite"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-terra">Projects</p>
          <h2
            className="mt-3 text-4xl font-semibold text-ink sm:text-5xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Things I've built.
          </h2>
          <p className="mt-4 max-w-lg text-base text-graphite leading-relaxed">
            All live products I built and maintain myself — from initial setup to production debugging.
          </p>
        </Reveal>

        <div className="mt-14 space-y-8">
          {PROJECTS.map((p, i) => (
            <ProjectBlock key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
