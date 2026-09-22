import { useState } from "react";
import type { ResearchArea } from "@/lib/content";
import { researchAreas } from "@/lib/content";
import { cn } from "@/utils/cn";
import { Reveal, SectionHeader } from "./Primitives";
import { FIGURE_CAPTIONS, ResearchFigure, type FigureKind } from "./ResearchFigures";
import { ArrowRight, Check } from "./Icons";

const SPLIT: Record<number, { text: string; figure: string }> = {
  0: { text: "lg:col-span-7", figure: "lg:col-span-5" },
  1: { text: "lg:col-span-5", figure: "lg:col-span-7" },
  2: { text: "lg:col-span-7", figure: "lg:col-span-5" },
  3: { text: "lg:col-span-5", figure: "lg:col-span-7" },
};

function ResearchPanel({ area, position }: { area: ResearchArea; position: number }) {
  const [open, setOpen] = useState(false);
  const span = SPLIT[position] ?? SPLIT[0];
  const figureFirst = area.align === "right";
  const panelId = `research-detail-${area.id}`;

  return (
    <article className="border-t border-line py-14 lg:py-20">
      <div className="grid grid-cols-1 items-start gap-x-16 gap-y-12 lg:grid-cols-12">
        {/* ---- Text column ---- */}
        <Reveal className={cn(span.text, figureFirst && "lg:order-2")}>
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[0.8125rem] font-medium text-electric">{area.index}</span>
            <span aria-hidden="true" className="h-px flex-1 bg-line" />
            <span className="label text-ink-400">Research area</span>
          </div>

          <h3 className="mt-6 max-w-[18ch] text-[1.6rem] leading-[1.14] tracking-[-0.02em] sm:text-[2rem] lg:text-[2.35rem]">
            {area.title}
          </h3>

          <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-[1.75] text-ink-600">{area.short}</p>

          <ul className="mt-7 flex flex-wrap gap-x-2 gap-y-2">
            {area.keywords.map((keyword) => (
              <li
                key={keyword}
                className="border border-ink/12 bg-paper-100 px-2.5 py-1 text-[0.75rem] leading-none text-ink-500"
              >
                {keyword}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="group mt-9 inline-flex min-h-11 items-center gap-2.5 font-display text-[0.9375rem] font-medium text-ink"
          >
            <span className="link-underline">{open ? "Close detail" : "Explore research"}</span>
            <span
              aria-hidden="true"
              className={cn(
                "grid h-7 w-7 place-items-center border border-ink/20 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:border-electric group-hover:text-electric",
                open ? "rotate-90" : "rotate-0",
              )}
            >
              <ArrowRight size={14} />
            </span>
          </button>

          <div
            className="grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
            style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
          >
            <div id={panelId} className="overflow-hidden">
              <div className="border-l-2 border-electric/40 pl-6 pt-8">
                <p className="text-[0.9375rem] leading-[1.8] text-ink-600">{area.description}</p>
                <p className="label mt-8 text-ink-400">Research applications</p>
                <ul className="mt-4 space-y-2.5">
                  {area.applications.map((application) => (
                    <li key={application} className="flex items-start gap-3 text-[0.9375rem] text-ink">
                      <Check size={15} className="mt-1 shrink-0 text-electric" />
                      {application}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ---- Figure column ---- */}
        <Reveal className={cn(span.figure, !figureFirst && "lg:order-2")} delay={120}>
          <figure className="group border border-line bg-white transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(7,10,17,0.04)]">
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-400">
                Fig. {area.index}
              </span>
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-electric">
                {area.figure === "electrolyser"
                  ? "Electrocatalysis"
                  : area.figure === "sensor"
                    ? "Electroanalysis"
                    : area.figure === "membrane"
                      ? "Ion transport"
                      : "Spectroscopy"}
              </span>
            </div>
            <div className="overflow-hidden p-6 lg:p-8">
              <div className="transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.02]">
                <ResearchFigure kind={area.figure as FigureKind} />
              </div>
            </div>
            <figcaption className="border-t border-line px-5 py-3 text-[0.75rem] leading-relaxed text-ink-400">
              {FIGURE_CAPTIONS[area.figure as FigureKind]}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </article>
  );
}

export function Research() {
  return (
    <section id="research" className="relative scroll-mt-20 bg-paper pb-4">
      <div className="shell">
        <SectionHeader
          index="02"
          eyebrow="Research"
          title="Research Directions & Interests"
          lead="The laboratory's programme is organised around four interconnected directions, unified by a common interest in molecular systems at electrified and nanoscale interfaces — from catalytic bond formation to optical probes inside living tissue."
        />

        <div className="mt-10">
          {researchAreas.map((area, i) => (
            <ResearchPanel key={area.id} area={area} position={i} />
          ))}
        </div>

        <div className="mt-8 border-t border-line pt-10">
          <Reveal>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <p className="text-[0.9375rem] leading-relaxed text-ink-500">
                These directions are connected by shared instrumentation, materials chemistry and analytical methods.
              </p>
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-electric">
                Scientific network
              </span>
            </div>
          </Reveal>
        </div>

        <div className="border-t border-line pt-10">
          <Reveal>
            <p className="text-[0.9375rem] leading-relaxed text-ink-500">
              These directions are connected by shared instrumentation, shared materials chemistry and shared
              analytical methods. The diagram below maps how the laboratory's themes relate to one another.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
