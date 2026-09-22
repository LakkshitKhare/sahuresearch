import { useEffect, useRef, useState } from "react";
import { facilities } from "@/lib/content";
import { cn } from "@/utils/cn";
import { useBodyScrollLock, useEscape } from "@/lib/hooks";
import { Reveal, SectionHeader } from "./Primitives";
import { EquipmentFigure } from "./EquipmentFigures";
import { Portrait } from "./Portrait";
import { ArrowUpRight, Close, Expand } from "./Icons";

function Lightbox({
  facility,
  onClose,
}: {
  facility: (typeof facilities)[number];
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${facility.name} — enlarged schematic`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl border border-white/15 bg-ink-800"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "glyph-in 0.4s cubic-bezier(0.16,1,0.3,1) both" }}
      >
        <div className="flex items-start justify-between gap-6 border-b border-white/12 px-6 py-5">
          <div>
            <p className="label text-white/40">{facility.vendor}</p>
            <h3 className="mt-2 font-display text-[1.25rem] font-medium text-white">{facility.name}</h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close enlarged view"
            className="grid h-11 w-11 shrink-0 place-items-center border border-white/25 text-white transition-colors duration-300 hover:bg-white hover:text-ink"
          >
            <Close size={18} />
          </button>
        </div>
        <div className="p-4 sm:p-6">
          <EquipmentFigure kind={facility.figure} />
        </div>
        <div className="border-t border-white/12 px-6 py-5">
          <p className="text-[0.9375rem] leading-relaxed text-white/65">{facility.description}</p>
          <p className="mt-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-electric">
            Application — {facility.application}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Facilities() {
  const [activeId, setActiveId] = useState(facilities[0].id);
  const [lightbox, setLightbox] = useState(false);

  const active = facilities.find((f) => f.id === activeId) ?? facilities[0];

  useBodyScrollLock(lightbox);
  useEscape(lightbox, () => setLightbox(false));

  return (
    <section id="facilities" className="on-dark relative scroll-mt-20 overflow-hidden bg-ink py-24 text-white lg:py-32">
      <div aria-hidden="true" className="grid-fine-dark absolute inset-0 opacity-60" />

      <div className="shell relative">
        <SectionHeader
          index="05"
          eyebrow="Facilities"
          tone="dark"
          title="Research Facilities"
          lead="Advanced instrumentation supporting electrochemical, catalytic, polymer, sensing and nanoscale research."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-14 gap-y-12 lg:mt-20 lg:grid-cols-12">
          {/* ---- Instrument index ---- */}
          <Reveal className="order-2 lg:col-span-4 lg:order-1">
            <p className="label text-white/40">Instrument archive</p>
            <ul className="mt-5 border-t border-white/12">
              {facilities.map((facility, i) => {
                const isActive = facility.id === activeId;
                return (
                  <li key={facility.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(facility.id)}
                      aria-pressed={isActive}
                      className={cn(
                        "group flex w-full min-h-14 items-start gap-4 border-b border-white/10 px-4 py-3.5 text-left transition-colors duration-300",
                        isActive ? "bg-white/[0.06]" : "hover:bg-white/[0.025]",
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 font-mono text-[0.625rem] transition-colors duration-300",
                          isActive ? "text-electric" : "text-white/30",
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">
                        <span
                          className={cn(
                            "block font-display text-[0.9375rem] font-medium leading-snug transition-colors duration-300",
                            isActive ? "text-white" : "text-white/60 group-hover:text-white/90",
                          )}
                        >
                          {facility.name}
                        </span>
                        <span className="mt-1 block text-[0.75rem] leading-snug text-white/35">
                          {facility.vendor}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={14}
                        className={cn(
                          "mt-1 shrink-0 transition-all duration-300",
                          isActive
                            ? "text-electric"
                            : "text-white/20 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/60",
                        )}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* ---- Featured instrument ---- */}
          <Reveal className="order-1 lg:col-span-8 lg:order-2" delay={120}>
            <div className="border border-white/12 bg-white/[0.03]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/12 px-6 py-4">
                <p className="label text-white/40">
                  {String(facilities.findIndex((f) => f.id === active.id) + 1).padStart(2, "0")} /{" "}
                  {String(facilities.length).padStart(2, "0")}
                </p>
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-electric">
                  {active.detail}
                </p>
              </div>

              <div
                key={active.id}
                className="p-5 lg:p-7"
                style={{ animation: "glyph-in 0.55s cubic-bezier(0.16,1,0.3,1) both" }}
              >
                <div className="border border-white/10">
                  <EquipmentFigure kind={active.figure} />
                </div>
              </div>

              <div className="border-t border-white/12 px-6 py-7 lg:px-8">
                <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <h3 className="text-[1.5rem] leading-tight text-white lg:text-[1.75rem]">
                      {active.name}
                    </h3>
                    <p className="mt-4 max-w-[52ch] text-[0.9375rem] leading-[1.75] text-white/65">
                      {active.description}
                    </p>
                  </div>
                  <div className="lg:col-span-5 lg:border-l lg:border-white/12 lg:pl-8">
                    <p className="label text-white/40">Research application</p>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/80">
                      {active.application}
                    </p>
                    <button
                      type="button"
                      onClick={() => setLightbox(true)}
                      className="group mt-6 inline-flex min-h-11 items-center gap-2 text-[0.8125rem] font-medium text-white"
                    >
                      <Expand size={15} className="text-electric" />
                      <span className="link-underline">View larger</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---- Field context ---- */}
        <div className="mt-24 grid grid-cols-1 items-end gap-x-12 gap-y-10 border-t border-white/12 pt-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="label text-white/40">In the field</p>
            <p className="mt-5 max-w-[30ch] font-display text-[1.4rem] leading-snug text-white lg:text-[1.65rem]">
              The laboratory presents its programme at conferences and symposia.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8" delay={120}>
            <div className="grid grid-cols-1 items-end gap-x-10 gap-y-6 lg:grid-cols-12">
              <div className="mx-auto w-full max-w-[20rem] lg:col-span-7 lg:ml-auto lg:mr-0">
                <Portrait
                  slot="conference"
                  alt="Dr. Sushant P. Sahu at a scientific conference, in front of a research poster presentation"
                  aspect="252 / 467"
                  tone="dark"
                />
              </div>
              <div className="lg:col-span-5">
                <div className="border-l border-white/20 pl-5 text-[0.8125rem] leading-relaxed text-white/55">
                  <p className="text-white/85">
                    <span className="block">Conference participation</span>
                    <span className="mt-1 block">— research poster session</span>
                  </p>
                  <p className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-electric">
                    Field archive
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {lightbox ? <Lightbox facility={active} onClose={() => setLightbox(false)} /> : null}
    </section>
  );
}
