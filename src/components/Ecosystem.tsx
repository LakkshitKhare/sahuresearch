import { useState } from "react";
import { ecosystem } from "@/lib/content";
import { cn } from "@/utils/cn";
import { Reveal, SectionHeader } from "./Primitives";
import { Atom, Bolt, Drop, Flask, Microscope, Scholar } from "./Icons";

const GLYPHS = {
  nanotech: Atom,
  electrochem: Bolt,
  catalysis: Flask,
  biosensors: Scholar,
  water: Drop,
  bioimaging: Microscope,
} as const;

export function Ecosystem() {
  const [activeId, setActiveId] = useState(ecosystem[0].id);
  const active = ecosystem.find((n) => n.id === activeId) ?? ecosystem[0];
  const Glyph = GLYPHS[active.id as keyof typeof GLYPHS];

  return (
    <section id="ecosystem" className="on-dark relative scroll-mt-20 overflow-hidden bg-ink py-24 text-white lg:py-32">
      <div aria-hidden="true" className="grid-fine-dark absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 60% at 85% 8%, rgba(36,71,232,0.16) 0%, rgba(7,10,17,0) 60%)",
        }}
      />

      <div className="shell relative">
        <SectionHeader
          index="03"
          eyebrow="Research ecosystem"
          tone="dark"
          title="One connected research ecosystem"
          lead="Select a theme to see how it connects to the laboratory's instrumentation, materials and methods."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-12 lg:mt-20 lg:grid-cols-12">
          {/* ---- Node chain ---- */}
          <Reveal className="order-2 lg:col-span-5 lg:order-1">
            <div className="relative">
              {/* Flow line */}
              <svg
                aria-hidden="true"
                className="absolute left-[3.35rem] top-3 hidden h-[calc(100%-1.5rem)] w-px lg:block"
                preserveAspectRatio="none"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="100%"
                  stroke="rgba(255,255,255,0.16)"
                  strokeWidth="1"
                  strokeDasharray="3 9"
                  style={{ animation: "dash-flow 6s linear infinite" }}
                />
              </svg>

              <ul>
                {ecosystem.map((node, i) => {
                  const isActive = node.id === activeId;
                  return (
                    <li key={node.id}>
                      <button
                        type="button"
                        onClick={() => setActiveId(node.id)}
                        onMouseEnter={() => setActiveId(node.id)}
                        onFocus={() => setActiveId(node.id)}
                        aria-pressed={isActive}
                        className={cn(
                          "group relative flex w-full min-h-14 items-center gap-5 border-l px-5 py-3.5 text-left transition-colors duration-300",
                          isActive
                            ? "border-electric bg-white/[0.05]"
                            : "border-white/10 hover:border-white/30 hover:bg-white/[0.025]",
                        )}
                      >
                        <span
                          className={cn(
                            "w-8 font-mono text-[0.6875rem] transition-colors duration-300",
                            isActive ? "text-electric" : "text-white/30 group-hover:text-white/55",
                          )}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "font-display text-[1.0625rem] font-medium tracking-tight transition-colors duration-300",
                            isActive ? "text-white" : "text-white/55 group-hover:text-white/85",
                          )}
                        >
                          {node.label}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          {/* ---- Detail panel ---- */}
          <Reveal className="order-1 lg:col-span-7 lg:order-2" delay={120}>
            <div className="relative border border-white/12 bg-white/[0.03] p-8 lg:p-11">
              <div className="flex items-start justify-between gap-6">
                <p className="label text-white/40">
                  {ecosystem.findIndex((n) => n.id === active.id) + 1} / {ecosystem.length} — Theme
                </p>
                <span
                  key={active.id}
                  className="text-white/20"
                  style={{ animation: "glyph-in 0.7s cubic-bezier(0.16,1,0.3,1) both" }}
                >
                  <Glyph size={44} />
                </span>
              </div>

              <h3
                key={`${active.id}-title`}
                className="mt-8 text-[2rem] leading-[1.1] tracking-[-0.025em] text-white lg:text-[2.6rem]"
                style={{ animation: "glyph-in 0.65s cubic-bezier(0.16,1,0.3,1) both" }}
              >
                {active.label}
              </h3>

              <p className="mt-5 max-w-[48ch] text-[1.0625rem] leading-[1.8] text-white/65">
                {active.description}
              </p>

              <hr className="my-9 border-0 rule-dark" />

              <p className="label text-white/40">Related technologies &amp; methods</p>
              <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {active.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center gap-3 border-b border-white/8 pb-3 text-[0.9375rem] text-white/75"
                  >
                    <span aria-hidden="true" className="h-1 w-1 shrink-0 bg-electric" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
