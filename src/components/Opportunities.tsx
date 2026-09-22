import { opportunities } from "@/lib/content";
import { scrollToSection } from "@/lib/hooks";
import { Reveal, SectionHeader, SourceNote } from "./Primitives";
import { ArrowRight } from "./Icons";

export function Opportunities() {
  return (
    <section id="opportunities" className="relative scroll-mt-20 bg-paper-100 py-24 lg:py-32">
      <div className="shell">
        <SectionHeader
          index="07"
          eyebrow="Opportunities"
          title="Research Opportunities"
          lead="The laboratory welcomes enquiries from researchers and students whose interests align with its research directions."
        />

        <div className="mt-14">
          <ul className="border-t border-line">
            {opportunities.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 70}>
                <div className="grid grid-cols-1 gap-x-12 gap-y-4 border-b border-line py-8 lg:grid-cols-12 lg:py-9">
                  <div className="lg:col-span-4">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[0.6875rem] text-electric">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-[1.25rem] leading-snug lg:text-[1.4rem]">{item.title}</h3>
                    </div>
                  </div>
                  <div className="lg:col-span-7 lg:col-start-6">
                    <p className="max-w-[62ch] text-[0.9375rem] leading-[1.8] text-ink-500">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={120}>
          <div className="mt-14 flex flex-col gap-8 border border-line bg-white p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
            <div className="max-w-[58ch]">
              <p className="font-display text-[1.1875rem] font-medium leading-snug text-ink">
                Availability of positions varies with funding and project timelines.
              </p>
              <SourceNote className="mt-3">
                Researchers and students interested in the laboratory&apos;s research directions are encouraged
                to get in touch. Please include a short statement of research interests and a curriculum vitae.
              </SourceNote>
            </div>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="btn btn-primary h-12 min-h-12 shrink-0 px-6"
            >
              Discuss a Research Opportunity
              <ArrowRight size={16} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
