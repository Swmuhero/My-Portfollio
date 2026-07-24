import {
  ArrowUpRight,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  Phone,
} from "@phosphor-icons/react/dist/ssr";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const contactChannels = [
  {
    label: "Phone",
    value: "+91 8972216611",
    href: "tel:+918972216611",
    note: "Direct line",
    Icon: Phone,
    external: false,
  },
  {
    label: "Email",
    value: "swapneel793@gmail.com",
    href: "mailto:swapneel793@gmail.com",
    note: "Primary inbox",
    Icon: EnvelopeSimple,
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/Swmuhero",
    href: "https://github.com/Swmuhero",
    note: "Code archive",
    Icon: GithubLogo,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/swapneel-mukherjee-a27516307",
    href: "https://www.linkedin.com/in/swapneel-mukherjee-a27516307/",
    note: "Professional profile",
    Icon: LinkedinLogo,
    external: true,
  },
] as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 bg-background px-6 py-24 md:px-10 md:py-32"
    >
      <div className="hud-tick pointer-events-none absolute inset-0 opacity-[0.025]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="relative mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[4fr_5fr] lg:items-end">
        <AnimatedSection className="flex flex-col gap-7">
          <AnimatedItem>
            <EyebrowBadge>Contact // Open Channel</EyebrowBadge>
          </AnimatedItem>

          <AnimatedItem>
            <h2 className="max-w-[12ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl">
              Stay in <span className="text-accent">Touch</span>
            </h2>
          </AnimatedItem>

          <AnimatedItem>
            <p className="max-w-[48ch] font-sans text-base leading-relaxed text-zinc-400 md:text-lg">
              Let&apos;s connect for backend development, API architecture,
              project collaboration, or engineering conversations.
            </p>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="grid gap-3 md:grid-cols-2">
          {contactChannels.map(({ label, value, href, note, Icon, external }) => (
            <AnimatedItem key={label} className="min-w-0">
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                aria-label={`${label}: ${value}`}
                className="group relative flex min-h-[136px] min-w-0 flex-col justify-between overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035] p-5 transition-all duration-200 hover:border-accent/40 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 active:translate-y-[1px]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent-soft text-accent shadow-[0_0_18px_-8px_rgba(212,162,47,0.75)]">
                    <Icon size={20} weight="bold" />
                  </span>
                  <ArrowUpRight
                    size={15}
                    weight="bold"
                    className="text-zinc-500 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </div>

                <div className="mt-7 min-w-0">
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                    {label}
                  </span>
                  <span className="mt-2 block break-words font-sans text-sm font-medium leading-snug text-foreground md:text-base">
                    {value}
                  </span>
                  <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.24em] text-accent/80">
                    {note}
                  </span>
                </div>
              </a>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
