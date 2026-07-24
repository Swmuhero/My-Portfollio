import {
  ArrowUpRight,
  BracketsCurly,
  Database,
  GitBranch,
} from "@phosphor-icons/react/dist/ssr";

const projects = [
  {
    name: "E-Commerce Backend API",
    languages: ["Node.js", "Express.js", "MongoDB"],
    description:
      "A secure commerce backend with product catalogs, user authentication, cart workflows, and order-ready API architecture.",
    Icon: Database,
    href: "https://www.google.com/",
  },
  {
    name: "Real-Time Chat Service",
    languages: ["Node.js", "Socket.IO", "JavaScript"],
    description:
      "A realtime messaging service designed for low-latency events, online presence, room channels, and clean client-server contracts.",
    Icon: GitBranch,
    href: "https://www.youtube.com/",
  },
  {
    name: "Auth & Access Control",
    languages: ["Express.js", "JWT", "Bcrypt"],
    description:
      "Reusable authentication flows with protected routes, password hashing, role checks, and middleware built for production APIs.",
    Icon: BracketsCurly,
    href: "https://dogstudio.co/",
  },
  {
    name: "AI Utility Backend",
    languages: ["Python", "REST APIs", "SQL"],
    description:
      "A service layer for AI-assisted features, structured data storage, API orchestration, and reliable request handling.",
    Icon: Database,
    href: "https://www.hellomonday.com/",
  },
] as const;

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/5 bg-background px-6 pb-0 pt-24 md:px-10 md:pt-32"
    >
      <div className="hud-tick pointer-events-none absolute inset-0 opacity-[0.025]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="relative mx-auto flex max-w-[1400px] flex-col gap-14">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="flex max-w-[620px] flex-col gap-5">
            <div className="flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              <span
                aria-hidden
                className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(212,162,47,0.9)]"
              />
              Projects // Backend Builds
            </div>
            <h2 className="font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl">
            <span className="text-accent"> Projects</span>
            </h2>
            <p className="font-sans text-base leading-relaxed text-zinc-400 md:text-lg">
              Backend-focused work shaped around practical APIs, database
              design, authentication, realtime systems, and service
              architecture.
            </p>
          </div>

          <a
            href="https://github.com/Swmuhero"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-foreground backdrop-blur-md transition-all duration-200 hover:border-accent/40 hover:bg-white/[0.08] active:translate-y-[1px]"
          >
            GitHub Profile
            <ArrowUpRight
              size={14}
              weight="bold"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <div className="grid gap-4 pb-14 md:grid-cols-2 md:pb-0">
          {projects.map(({ name, languages, description, Icon, href }, index) => {
            const isLinkedProject = href !== undefined;
            const projectContent = (
              <>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent/0 via-accent/60 to-accent/0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <div className="flex h-full flex-col justify-between gap-10">
                  <div className="flex items-start justify-between gap-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] border border-accent/30 bg-accent-soft text-accent shadow-[0_0_22px_-10px_rgba(212,162,47,0.85)]">
                      <Icon size={21} weight="bold" />
                    </span>
                    <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                      Project {String(index + 1).padStart(2, "0")}
                      {isLinkedProject && (
                        <ArrowUpRight
                          size={13}
                          weight="bold"
                          className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent group-hover:opacity-100"
                        />
                      )}
                    </span>
                  </div>

                  <div>
                    <h3 className="max-w-[18ch] font-sans text-2xl font-semibold leading-tight tracking-tight text-foreground md:text-3xl">
                      {name}
                    </h3>
                    <p className="mt-4 max-w-[56ch] font-sans text-sm leading-relaxed text-zinc-400 md:text-base">
                      {description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {languages.map((language) => (
                      <span
                        key={language}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-300"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            );
            const projectClassName =
              "group relative min-h-[280px] overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.06] md:p-6";

            if (isLinkedProject) {
              return (
                <a
                  key={name}
                  href={href}
                  aria-label={`Open ${name}`}
                  className={`${projectClassName} block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70`}
                >
                  {projectContent}
                </a>
              );
            }

            return (
              <article key={name} className={projectClassName}>
                {projectContent}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
