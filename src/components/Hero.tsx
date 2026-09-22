import { bio, profile, researchAreas } from "@/lib/content";
import { scrollToSection } from "@/lib/hooks";
import { MolecularField } from "./MolecularField";
import { ArrowRight, ArrowUpRight, MapPin } from "./Icons";

function HeroTrace() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 420 150"
      className="h-auto w-full"
      fill="none"
      preserveAspectRatio="none"
    >
      <path d="M0 120h420" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
      <path d="M0 24v96" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
      <path
        d="M10 108C46 108 52 34 88 34s46 74 82 74 46-64 82-64 46 66 82 66 46-56 82-56"
        stroke="rgba(120,158,255,0.5)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 108C46 108 52 34 88 34s46 74 82 74 46-64 82-64 46 66 82 66 46-56 82-56"
        stroke="rgba(36,71,232,0.9)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeDasharray="620"
        className="hero-trace"
      />
      {[10, 88, 170, 252, 334, 416].map((x) => (
        <line
          key={x}
          x1={x}
          y1="121"
          x2={x}
          y2="127"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="on-dark relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink pt-[4.5rem] text-white"
    >
      {/* --- Background ------------------------------------------------ */}
      <MolecularField className="absolute inset-0 -z-20 h-full w-full" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(115% 85% at 12% 0%, rgba(36,71,232,0.26) 0%, rgba(7,10,17,0) 58%), radial-gradient(90% 70% at 96% 100%, rgba(11,143,166,0.2) 0%, rgba(7,10,17,0) 55%)",
        }}
      />
      <div
        aria-hidden="true"
        className="grid-fine-dark absolute inset-0 -z-10 opacity-[0.55] [mask-image:radial-gradient(120%_80%_at_50%_35%,black,transparent_78%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-ink via-ink/85 to-transparent"
      />

      {/* --- Content --------------------------------------------------- */}
      <div className="shell relative flex flex-1 flex-col justify-center py-16 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-x-12 gap-y-16 lg:grid-cols-12">
          {/* Identity */}
          <div className="lg:col-span-7">
            <p className="label hero-fade flex flex-wrap items-center gap-x-3 gap-y-1 text-white/60 [--d:120ms]">
              <span className="h-px w-7 bg-electric" aria-hidden="true" />
              Assistant Professor
              <span aria-hidden="true" className="text-white/25">
                /
              </span>
              Ramanujan Faculty Fellow
            </p>

            <h1 className="hero-line mt-7 text-[2.5rem] leading-[1.04] tracking-[-0.03em] sm:text-[3.4rem] lg:text-[4.05rem]">
              Dr. Sushant Prabhakar Sahu
            </h1>

            <div className="hero-fade mt-8 h-px w-full max-w-md bg-white/15 [--d:520ms]" aria-hidden="true" />

            <div className="hero-fade mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.72rem] font-mono uppercase tracking-[0.18em] text-white/55 [--d:560ms]">
              {[
                "Electrochemistry",
                "Nanotechnology",
                "Catalysis",
                "Biosensors",
                "Water Treatment",
                "Optical Bioimaging",
              ].map((item, index) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span>{item}</span>
                  {index < 5 ? <span aria-hidden="true" className="text-white/30">•</span> : null}
                </span>
              ))}
            </div>

            <p className="hero-fade mt-8 max-w-[38rem] text-[1.0625rem] leading-[1.75] text-white/70 [--d:600ms] lg:text-[1.1875rem]">
              {bio.lead}
            </p>

            <div className="hero-fade mt-10 flex flex-wrap items-center gap-3 [--d:700ms]">
              <a
                href="#research"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("research");
                }}
                className="btn btn-light h-12 min-h-12 px-6"
              >
                Explore Research
                <ArrowRight size={16} />
              </a>
              <a
                href="#publications"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("publications");
                }}
                className="btn btn-ghost-light h-12 min-h-12 px-6"
              >
                View Publications
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="btn btn-ghost-light h-12 min-h-12 px-6"
              >
                Contact
              </a>
            </div>

            <div className="hero-fade mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.8125rem] text-white/50 [--d:800ms]">
              <span className="flex items-center gap-2">
                <MapPin size={15} className="text-electric" />
                {profile.city}, {profile.state}
              </span>
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-white/35">
                KIIT Deemed to be University
              </span>
            </div>
          </div>

          {/* Research index */}
          <div className="hero-fade lg:col-span-5 [--d:640ms]">
            <div className="border border-white/12 bg-white/[0.025] p-7 backdrop-blur-[2px] lg:p-8">
              <p className="label text-white/40">Research directions</p>
              <ul className="mt-6 divide-y divide-white/10">
                {researchAreas.map((area) => (
                  <li key={area.id}>
                    <a
                      href="#research"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("research");
                      }}
                      className="group flex min-h-14 items-start gap-4 py-4"
                    >
                      <span className="mt-0.5 font-mono text-[0.6875rem] text-electric">{area.index}</span>
                      <span className="flex-1">
                        <span className="block font-display text-[0.9375rem] font-medium leading-snug text-white/85 transition-colors duration-300 group-hover:text-white">
                          {area.label}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={15}
                        className="mt-1 shrink-0 text-white/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-electric"
                      />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="label text-white/35">Instrumented laboratory</p>
                <div className="mt-4 max-w-[19rem] opacity-60">
                  <HeroTrace />
                </div>
                <p className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-white/30">
                  Electrochemical &amp; materials characterisation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Scroll cue ------------------------------------------------- */}
      <div className="relative hidden shrink-0 pb-7 lg:block">
        <div className="shell flex items-center justify-between">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className="group flex items-center gap-3 text-[0.6875rem] font-mono uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 hover:text-white/75"
          >
            <span className="relative block h-8 w-px overflow-hidden bg-white/15">
              <span className="absolute inset-x-0 top-0 h-3 bg-electric scroll-cue" />
            </span>
            Scroll
          </a>
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-white/25">
            Electrochemistry · Catalysis · Nanotechnology · Sensing
          </p>
        </div>
      </div>
    </section>
  );
}
