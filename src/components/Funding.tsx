import { funding } from "@/lib/content";
import { Reveal, SectionHeader, SourceNote } from "./Primitives";
import { Flask } from "./Icons";

export function Funding() {
  return (
    <section id="funding" className="relative scroll-mt-20 bg-paper py-24 lg:py-32">
      <div className="shell">
        <SectionHeader
          index="06"
          eyebrow="Funding"
          title="Current Funding Support"
          lead="External research funding supporting the laboratory's programme at KIIT."
        />

        <Reveal delay={80} className="mt-14">
          <div className="border border-line border-t-2 border-t-gold bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="border-b border-line p-8 lg:col-span-7 lg:border-b-0 lg:border-r lg:p-12">
                <p className="label flex items-center gap-2 text-gold">
                  <Flask size={14} />
                  Funded research
                </p>
                <h3 className="mt-6 max-w-[24ch] text-[1.75rem] leading-[1.12] lg:text-[2.25rem]">
                  {funding.title}
                </h3>
                <p className="mt-6 max-w-[48ch] text-[1.0625rem] leading-[1.75] text-ink-500">
                  {funding.summary}
                </p>
              </div>

              <div className="bg-paper-100 p-8 lg:col-span-5 lg:p-12">
                <p className="label text-ink-400">Note</p>
                <p className="mt-5 text-[0.9375rem] leading-[1.8] text-ink-600">{funding.note}</p>
                <div className="mt-8 flex items-center gap-3 border-t border-line pt-6">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 shrink-0 bg-gold"
                    style={{ clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)" }}
                  />
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-400">
                    Research grant · active
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <SourceNote className="mt-10 max-w-[70ch]">
            Funding details, supported project titles and grant administration information will be published here
            as they become available.
          </SourceNote>
        </Reveal>
      </div>
    </section>
  );
}
