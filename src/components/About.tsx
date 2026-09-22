import { bio, profile } from "@/lib/content";
import { Reveal, SectionHeader, SourceNote } from "./Primitives";
import { ArrowUpRight, External } from "./Icons";
import { Portrait } from "./Portrait";

function FactSheet() {
  return (
    <div className="border border-line bg-white">
      <div className="flex items-center justify-between border-b border-line px-6 py-4">
        <p className="label text-ink-400">Academic profile</p>
        <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-400">
          KIIT · Odisha
        </p>
      </div>

      <dl className="divide-y divide-line-soft">
        {bio.facts.map((fact) => (
          <div key={fact.term} className="grid grid-cols-1 gap-1 px-6 py-5 sm:grid-cols-3 sm:gap-4">
            <dt className="label text-ink-400 sm:pt-1">{fact.term}</dt>
            <dd className="text-[0.9375rem] leading-relaxed text-ink sm:col-span-2">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div className="border-t border-line px-6 py-6">
        <p className="label text-ink-400">Research interests</p>
        <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
          {bio.interests.map((interest) => (
            <li
              key={interest}
              className="border border-ink/12 bg-paper-100 px-2.5 py-1 text-[0.75rem] leading-none text-ink-500"
            >
              {interest}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-line px-6 py-5">
        <a
          href={profile.scholar}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-11 items-center gap-2 text-[0.8125rem] font-medium text-ink"
        >
          Google Scholar
          <External size={14} className="text-ink-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-11 items-center gap-2 text-[0.8125rem] font-medium text-ink"
        >
          LinkedIn
          <External size={14} className="text-ink-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}

function CareerStrip() {
  return (
    <div className="mt-20 border-t border-line pt-10">
      <Reveal>
        <p className="label text-ink-400">Career</p>
      </Reveal>
      <ol className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-3">
        {bio.career.map((item, i) => (
          <Reveal as="li" key={item.role} delay={i * 90} className="border-t border-ink/15 pt-5">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-electric">
              {item.period}
            </p>
            <h3 className="mt-3 text-[1.0625rem] leading-snug">{item.role}</h3>
            <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-500">{item.org}</p>
          </Reveal>
        ))}
      </ol>
      <Reveal delay={280}>
        <SourceNote className="mt-8">{bio.careerNote}</SourceNote>
      </Reveal>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 bg-paper py-24 lg:py-32">
      <div className="shell">
        <SectionHeader
          index="01"
          eyebrow="About"
          title="Research at the interface of electrochemistry, nanotechnology and bioimaging."
          lead="Dr. Sushant Prabhakar Sahu is Assistant Professor and Ramanujan Faculty Fellow at the Centre for Innovation and Research, Kalinga Institute of Industrial Technology (KIIT) Deemed to be University, Bhubaneswar, Odisha, India."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-14 gap-y-14 lg:mt-20 lg:grid-cols-12">
          {/* Portrait — editorial placement */}
          <Reveal className="lg:col-span-5 lg:col-start-1">
            <Portrait
              slot="profile"
              alt="Dr. Sushant Prabhakar Sahu, Assistant Professor and Ramanujan Faculty Fellow, KIIT"
              caption={
                <>
                  <span className="block text-ink-500">Centre for Innovation and Research</span>
                  <span className="mt-1 block font-mono text-[0.625rem] uppercase tracking-[0.18em] text-ink-400">
                    Assistant Professor &amp; Ramanujan Faculty Fellow
                  </span>
                </>
              }
            />
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="prose-academic space-y-6">
                {bio.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={140} className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#academic-profile"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("academic-profile")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="group inline-flex min-h-11 items-center gap-2 font-display text-[0.9375rem] font-medium text-ink"
              >
                <span className="link-underline">View Academic Profile</span>
                <ArrowUpRight
                  size={16}
                  className="text-electric transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="#research"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("research")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="group inline-flex min-h-11 items-center gap-2 font-display text-[0.9375rem] font-medium text-ink"
              >
                <span className="link-underline">Read the research directions</span>
                <ArrowUpRight
                  size={16}
                  className="text-electric transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-12">
            <Reveal delay={140}>
              <FactSheet />
            </Reveal>
          </div>
        </div>

        <CareerStrip />
      </div>
    </section>
  );
}
