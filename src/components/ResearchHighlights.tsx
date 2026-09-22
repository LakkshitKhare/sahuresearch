import { useMemo, useState } from "react";
import { profile, publications } from "@/lib/content";
import { Reveal, SectionHeader } from "./Primitives";
import { ArrowUpRight, External } from "./Icons";

const highlights = [
  {
    id: "hydrogen",
    year: 2025,
    journal: "Energy & Fuels",
    title: "Facile Single-Step Synthesis of PVP-Stabilized Ru NPs for Electrochemical Hydrogen Generation",
    description:
      "A one-step colloidal route for preparing Ru nanoparticles with controlled electrochemical activity for hydrogen evolution.",
    accent: "Hydrogen generation",
    url: "https://doi.org/10.1021/acs.energyfuels.5c02899",
    imageSrc: "/portraits/1stpub.png",
    imageAlt: "Graphical abstract for the Ru nanoparticle hydrogen generation publication",
    palette: { base: "#dfe8ff", glow: "rgba(36,71,232,0.18)" },
  },
  {
    id: "shg",
    year: 2025,
    journal: "Biochemistry",
    title: "Monitoring Molecular Interactions with Cell Membranes Using Time-Dependent Second Harmonic Generation Microscopy",
    description:
      "Nonlinear optical imaging to monitor structure and dynamics at lipid interfaces and cellular membranes.",
    accent: "Optical bioimaging",
    url: "https://doi.org/10.1021/acs.biochem.4c00788",
    imageSrc: "/portraits/2ndpub.png",
    imageAlt: "Graphical abstract for the SHG cell membrane imaging publication",
    palette: { base: "#dff6f3", glow: "rgba(11,143,166,0.18)" },
  },
  {
    id: "moc2",
    year: 2025,
    journal: "Langmuir",
    title: "Guanine Assisted Contrived Low Pt-Integrated Mo2C/C for Hydrogen Evolution Reaction",
    description:
      "A template-assisted electrocatalyst design aimed at lowering platinum demand while maintaining efficient HER performance.",
    accent: "Electrocatalysis",
    url: "https://doi.org/10.1021/acs.langmuir.4c04169",
    palette: { base: "#e6eefb", glow: "rgba(36,71,232,0.15)" },
  },
  {
    id: "pfas",
    year: 2025,
    journal: "Reactive and Functional Polymers",
    title: "Polystyrene-Based Fluorinated Ionic Receptor for Selective Removal of Perfluoroalkyl Contaminants from Water",
    description:
      "Fluorinated ionic polymer architectures built to target PFAS contaminants under environmentally relevant conditions.",
    accent: "Water treatment",
    url: "https://doi.org/10.1016/j.reactfunctpolym.2025.106138",
    palette: { base: "#f5ecff", glow: "rgba(104,76,202,0.16)" },
  },
  {
    id: "sensor",
    year: 2022,
    journal: "ACS Omega",
    title: "Rapid and Direct Perfluorooctanoic Acid Sensing with Selective Ionomer Coatings on Screen Printed Electrodes under Environmentally Relevant Concentrations",
    description:
      "Electrochemical sensor development for selective PFAS detection in complex aquatic matrices.",
    accent: "Electrochemical sensors",
    url: "https://doi.org/10.1021/acsomega.1c05847",
    imageSrc: "/portraits/5thpub.png",
    imageAlt: "Graphical abstract for the PFAS sensing publication",
    palette: { base: "#e7f5ee", glow: "rgba(17,120,86,0.14)" },
  },
  {
    id: "carbon",
    year: 2015,
    journal: "ACS Applied Materials & Interfaces",
    title: "Carbon Quantum Dots and Applications in Photocatalytic Energy Conversion",
    description:
      "Visible-light photocatalysis and carbon-based nanomaterials for energy conversion and photochemical processes.",
    accent: "Carbon materials",
    url: "https://doi.org/10.1021/acsami.5b00448",
    imageSrc: "/portraits/6thpub.png",
    imageAlt: "Graphical abstract for the carbon quantum dots photocatalytic energy conversion publication",
    palette: { base: "#f9efe7", glow: "rgba(186,110,50,0.12)" },
  },
] as const;

const selectedPublications = publications.slice(0, 5);

function AbstractIllustration({
  accent,
  palette,
  imageSrc,
  imageAlt,
}: {
  accent: string;
  palette: { base: string; glow: string };
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <div
      className="relative aspect-[16/9] w-full overflow-hidden border border-ink/10 bg-white"
      style={{ background: `linear-gradient(135deg, ${palette.base} 0%, rgba(255,255,255,0.92) 100%)` }}
    >
      <div className="absolute inset-0 opacity-60" style={{ background: `radial-gradient(circle at 70% 18%, ${palette.glow}, transparent 38%)` }} />
      <div className="absolute inset-0 grid-fine" aria-hidden="true" />
      {imageSrc ? (
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-5">
          <img
            src={imageSrc}
            alt={imageAlt ?? accent}
            className="h-full w-full object-contain"
            draggable={false}
          />
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center px-8 py-6">
          <svg viewBox="0 0 640 380" className="h-full w-full" aria-hidden="true">
            <g opacity="0.9">
              <path d="M72 256c62-86 163-118 272-88 82 22 124 75 176 72" fill="none" stroke="rgba(7,10,17,0.55)" strokeWidth="2" strokeLinecap="round" strokeDasharray="7 12"/>
              <path d="M104 112c54 26 94 72 102 135 6 44 36 74 80 82 72 13 142-25 194-76" fill="none" stroke="rgba(36,71,232,0.72)" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="180" cy="180" r="24" fill="rgba(255,255,255,0.75)" stroke="rgba(36,71,232,0.7)" strokeWidth="2"/>
              <circle cx="318" cy="138" r="18" fill="rgba(255,255,255,0.8)" stroke="rgba(11,143,166,0.72)" strokeWidth="2"/>
              <circle cx="468" cy="202" r="22" fill="rgba(255,255,255,0.78)" stroke="rgba(36,71,232,0.7)" strokeWidth="2"/>
              <path d="M196 260L278 212M320 170L420 210" stroke="rgba(7,10,17,0.44)" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M114 95l54 38M504 118l58 52" stroke="rgba(7,10,17,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M118 273h188" stroke="rgba(7,10,17,0.34)" strokeWidth="1.4"/>
              <path d="M384 272h120" stroke="rgba(7,10,17,0.34)" strokeWidth="1.4"/>
            </g>
          </svg>
        </div>
      )}

    </div>
  );
}

export function ResearchHighlights() {
  const [activeId, setActiveId] = useState(highlights[0].id);
  const [expanded, setExpanded] = useState(false);

  const active = useMemo(
    () => highlights.find((item) => item.id === activeId) ?? highlights[0],
    [activeId],
  );

  const activeIndex = highlights.findIndex((item) => item.id === active.id);

  const setPublication = (id: string) => {
    if (id === activeId) {
      setExpanded((current) => !current);
      return;
    }

    setActiveId(id);
    setExpanded(true);
  };

  const movePublication = (direction: 1 | -1) => {
    const nextIndex = (activeIndex + direction + highlights.length) % highlights.length;
    setActiveId(highlights[nextIndex].id);
    setExpanded(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      movePublication(1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      movePublication(-1);
    }

    if (event.key === "Escape") {
      event.preventDefault();
      setExpanded(false);
    }
  };

  return (
    <section id="projects" className="relative scroll-mt-20 bg-paper py-24 lg:py-28">
      <div className="shell max-w-[1240px]">
        <SectionHeader
          index="04"
          eyebrow="Selected Research"
          title="Research highlights and graphical abstracts"
          lead="A curated set of recent publications from the laboratory, presented as editorial scientific highlights for the current research programme."
          aside={
            <a
              href={`${profile.scholar}&view_op=list_works&sortby=pubdate`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline h-11 min-h-11 px-5"
            >
              View Google Scholar
              <External size={14} />
            </a>
          }
        />

        <Reveal delay={90} className="mt-14">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.55fr)_minmax(280px,0.82fr)] xl:items-start">
            <div
              role="button"
              tabIndex={0}
              aria-expanded={expanded}
              onKeyDown={handleKeyDown}
              className="outline-none focus-visible:ring-2 focus-visible:ring-electric/60 focus-visible:ring-offset-2"
            >
              <div
                key={active.id}
                className="overflow-hidden border border-line bg-white p-3 sm:p-4 transition-[max-height,transform] duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
                style={{
                  maxHeight: expanded ? "920px" : "420px",
                  transition: "max-height 700ms cubic-bezier(.16,1,.3,1), transform 600ms cubic-bezier(.16,1,.3,1)",
                  transform: expanded ? "translateY(0)" : "translateY(0)",
                }}
              >
                <div
                  className="overflow-hidden transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
                  style={{
                    maxHeight: expanded ? "760px" : "260px",
                    opacity: 1,
                  }}
                >
                  <div
                    className="mb-4 overflow-hidden transition-all duration-600 ease-[cubic-bezier(.16,1,.3,1)]"
                    style={{
                      transform: expanded ? "scale(1)" : "scale(0.985)",
                      opacity: 1,
                    }}
                  >
                    <AbstractIllustration
                      accent={active.accent}
                      palette={active.palette}
                      imageSrc={active.imageSrc}
                      imageAlt={active.imageAlt}
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-3 text-[0.625rem] uppercase tracking-[0.18em]">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-electric">
                          {String(activeIndex + 1).padStart(2, "0")} / {String(highlights.length).padStart(2, "0")}
                        </span>
                        <span className="text-ink-400">{active.year} · {active.journal}</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => setExpanded((current) => !current)}
                        className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-400 transition-colors hover:text-electric"
                      >
                        {expanded ? "Collapse" : "Expand"}
                      </button>
                    </div>

                    <h3 className="max-w-[18ch] text-[1.6rem] leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2rem]">
                      {active.title}
                    </h3>

                    <p className="max-w-[60ch] text-[0.9375rem] leading-relaxed text-ink-600">
                      {active.description}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href={active.url}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-primary h-11 min-h-11 px-5"
                        >
                          View publication
                          <ArrowUpRight size={14} />
                        </a>
                        <button
                          type="button"
                          onClick={() => movePublication(-1)}
                          className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-400 transition-colors hover:text-electric"
                        >
                          ← Previous
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => movePublication(1)}
                          className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-400 transition-colors hover:text-electric"
                        >
                          Next →
                        </button>
                        <span className="text-[0.6875rem] uppercase tracking-[0.14em] text-ink-400">
                          {active.accent}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <aside className="border border-line bg-white p-3 sm:p-4">
              <div className="mb-3 flex items-center justify-between gap-3 border-b border-line pb-3">
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-ink-400">
                  Featured papers
                </p>
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-electric">
                  0{highlights.length}
                </span>
              </div>

              <div className="space-y-2">
                {highlights.map((item, index) => {
                  const selected = item.id === active.id;
                  return (
                    <div
                      key={item.id}
                      className={`group w-full border p-3 text-left transition-all duration-300 ${
                        selected
                          ? "border-electric bg-electric-soft/35 shadow-[0_0_0_1px_rgba(36,71,232,0.08)]"
                          : "border-line bg-white hover:border-ink/20"
                      }`}
                    >
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-electric">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-400">
                          {item.year}
                        </span>
                      </div>

                      <p className="text-[0.95rem] leading-snug text-ink">{item.title}</p>
                      <p className="mt-2 text-[0.625rem] uppercase tracking-[0.14em] text-ink-400">{item.journal}</p>

                      <div className="mt-3 flex items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => setPublication(item.id)}
                          className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-ink transition-colors hover:text-electric"
                        >
                          Select paper
                        </button>

                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-ink transition-colors hover:text-electric"
                          onClick={(event) => event.stopPropagation()}
                        >
                          View publication
                          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </aside>
          </div>
        </Reveal>

        <div className="mt-16 border-t border-line pt-10">
          <Reveal>
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-electric">
                  Selected publications
                </p>
                <h3 className="mt-3 text-[1.8rem] leading-none tracking-[-0.02em] text-ink sm:text-[2.1rem]">
                  Recent papers
                </h3>
              </div>
              <a
                href={`${profile.scholar}&view_op=list_works&sortby=pubdate`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline h-11 min-h-11 px-4"
              >
                View all publications
              </a>
            </div>
          </Reveal>

          <div className="divide-y divide-line">
            {selectedPublications.map((publication) => (
              <article key={publication.doi} className="py-6 first:pt-0">
                <Reveal>
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-electric">
                          {publication.year}
                        </span>
                        <span aria-hidden="true" className="h-px flex-1 bg-line" />
                      </div>

                      <h4 className="mt-4 max-w-[56ch] text-[1.05rem] leading-snug text-ink sm:text-[1.2rem]">
                        {publication.title}
                      </h4>

                      <p className="mt-2 text-[0.6875rem] uppercase tracking-[0.14em] text-ink-400">
                        {publication.journal}
                      </p>
                    </div>

                    <a
                      href={publication.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[0.8125rem] font-medium text-ink transition-colors hover:text-electric"
                    >
                      View publication
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
