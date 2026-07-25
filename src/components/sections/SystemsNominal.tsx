"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

const telemetry = [
  { label: "Matrix", value: "80.0%", note: "St Fransics Xavier English Medium School, Andal" },
  { label: "Deploma", value: "9.8% CGPA", note: "New Horizon Institute of Technology" },
  { label: "BTECH", value: "8.2% CGPA", note: "IEM" },
];

const certificates = [
  "WhatsApp Image 2026-07-25 at 11.07.53 AM (1).jpeg",
  "WhatsApp Image 2026-07-25 at 11.07.53 AM (2).jpeg",
  "WhatsApp Image 2026-07-25 at 11.07.53 AM.jpeg",
  "WhatsApp Image 2026-07-25 at 11.07.54 AM (1).jpeg",
  "WhatsApp Image 2026-07-25 at 11.07.54 AM.jpeg",
  "WhatsApp Image 2026-07-25 at 11.07.55 AM (1).jpeg",
  "WhatsApp Image 2026-07-25 at 11.07.55 AM (2).jpeg",
  "WhatsApp Image 2026-07-25 at 11.07.55 AM.jpeg",
  "WhatsApp Image 2026-07-25 at 11.07.56 AM (1).jpeg",
  "WhatsApp Image 2026-07-25 at 11.07.56 AM (2).jpeg",
  "WhatsApp Image 2026-07-25 at 11.07.56 AM.jpeg",
  "WhatsApp Image 2026-07-25 at 11.07.57 AM.jpeg",
];

export function SystemsNominal() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [allCertificatesOpen, setAllCertificatesOpen] = useState(false);
  const [selectedDialogCertificate, setSelectedDialogCertificate] = useState<string | null>(null);

  useEffect(() => {
    const body = document.body;
    if (allCertificatesOpen || selectedDialogCertificate) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
    return () => {
      body.style.overflow = "";
    };
  }, [allCertificatesOpen, selectedDialogCertificate]);

  return (
    <section
      id="systems"
      className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16 md:grid md:grid-cols-[5fr_4fr] md:gap-20">
        <AnimatedSection className="flex flex-col gap-8">
          <AnimatedItem>
            <h2 className="max-w-[16ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl">
              This is me 
               <span className="text-accent"> Swapneel Mukherjee</span>
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="max-w-[48ch] font-sans text-base leading-relaxed text-zinc-400 md:text-lg">
              I build secure, scalable, and high-performance backend systems that power seamless digital experiences. Passionate about designing robust APIs, optimized databases, and architecting reliable server-side solutions. I focus on writing clean, maintainable code that transforms complex challenges into efficient, production-ready applications.
            </p>
          </AnimatedItem>
          <AnimatedItem>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-foreground backdrop-blur-md transition-all duration-200 hover:bg-white/[0.08] active:translate-y-[1px]"
            >
              Projects
              <ArrowUpRight
                size={14}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="flex flex-col gap-8">
          <AnimatedItem>
            <EyebrowBadge>Educational Qualifications</EyebrowBadge>
          </AnimatedItem>
          <div className="flex flex-col divide-y divide-white/8 border-t border-white/8 font-mono">
            {telemetry.map((row) => (
            <AnimatedItem key={row.label}>
              <div className="flex items-baseline justify-between gap-6 py-5">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                    {row.label}
                  </span>
                  <span className="font-sans text-[13px] text-zinc-400">
                    {row.note}
                  </span>
                </div>
                <span className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  {row.value}
                </span>
              </div>
            </AnimatedItem>
          ))}
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection className="mx-auto mt-16 max-w-[1400px] flex flex-col gap-8">
        <AnimatedItem>
          <div className="space-y-6 px-0">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                Certificates
              </span>
              <h3 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                <span className="text-white">Certificate</span>{" "}
                <span className="text-accent">achieved</span>
              </h3>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#070708] p-6">
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="rounded-full border border-white/15 bg-white/[0.06] px-5 py-2 text-sm font-medium uppercase tracking-[0.22em] text-white transition hover:bg-white/[0.14]"
                  onClick={() => setAllCertificatesOpen(true)}
                >
                  See all
                </button>
              </div>

              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#02040b]">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#02040b] to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#02040b] to-transparent" />
                <div className={`certificates-track gap-6 py-4 ${hoveredIndex !== null ? "paused" : ""}`}>
                  {[...certificates, ...certificates].map((src, index) => {
                    const isHovered = hoveredIndex === index;
                    const dimmed = hoveredIndex !== null && !isHovered;
                    return (
                      <div
                        key={`${src}-${index}`}
                        className={`certificate-item relative min-w-[320px] flex-none overflow-hidden rounded-[1.75rem] bg-[#10131c] transition duration-300 ${dimmed ? "opacity-40 blur-sm" : "opacity-100"} ${isHovered ? "scale-[1.02] border border-white/10" : ""}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <Image
                          src={`/certificates/${src}`}
                          alt={`Certificate ${index + 1}`}
                          width={420}
                          height={220}
                          className="h-[220px] w-full object-cover"
                        />
                        {isHovered ? (
                          <button
                            type="button"
                            className="absolute inset-x-4 bottom-4 rounded-full border border-white/15 bg-black/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white transition hover:bg-white/[0.08]"
                            onClick={() => setSelectedDialogCertificate(src)}
                          >
                            View
                          </button>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {selectedDialogCertificate ? (
              <div
                className="fixed inset-0 z-60 flex items-center justify-center bg-black/80 p-6"
                onClick={() => setSelectedDialogCertificate(null)}
              >
                <div
                  className="relative max-h-full w-full max-w-[90vw] overflow-hidden rounded-3xl bg-[#070708] p-4"
                  onClick={(event) => event.stopPropagation()}
                >
                  <button
                    type="button"
                    className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-2 text-sm text-white transition hover:bg-white/[0.08]"
                    onClick={() => setSelectedDialogCertificate(null)}
                  >
                    Close
                  </button>
                  <Image
                    src={`/certificates/${selectedDialogCertificate}`}
                    alt="Enlarged certificate"
                    width={1200}
                    height={900}
                    className="h-auto max-h-[80vh] w-full object-contain"
                  />
                </div>
              </div>
            ) : null}
            {allCertificatesOpen ? (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
                onClick={() => {
                  setAllCertificatesOpen(false);
                  setSelectedDialogCertificate(null);
                }}
              >
                <div
                  className="relative max-h-full w-full max-w-[95vw] overflow-hidden rounded-[2rem] bg-[#070708] p-6 shadow-2xl shadow-black/50"
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-zinc-500">
                        Certificates
                      </p>
                      <h4 className="text-2xl font-semibold text-foreground">
                        All certificates
                      </h4>
                    </div>
                    <button
                      type="button"
                      className="rounded-full border border-white/15 bg-black/60 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/[0.08]"
                      onClick={() => {
                        setAllCertificatesOpen(false);
                        setSelectedDialogCertificate(null);
                      }}
                    >
                      ×
                    </button>
                  </div>
                  <div className="max-h-[70vh] overflow-y-auto pr-2">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {certificates.map((src, index) => (
                        <button
                          key={src}
                          type="button"
                          className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d0d0f] transition-all duration-200 hover:border-white/15"
                          onClick={() => {
                            setSelectedDialogCertificate(src);
                          }}
                        >
                          <Image
                            src={`/certificates/${src}`}
                            alt={`Certificate ${index + 1}`}
                            width={720}
                            height={540}
                            className="h-[220px] w-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </AnimatedItem>
      </AnimatedSection>
    </section>
  );
}
