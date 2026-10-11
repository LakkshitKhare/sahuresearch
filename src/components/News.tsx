import { Reveal, SectionHeader } from "./Primitives";

export function News() {
  return (
    <section id="news" className="relative scroll-mt-20 bg-paper py-24 lg:py-32">
      <div className="shell">
        <SectionHeader
          index="06"
          eyebrow="News"
          title="News"
        />

        <Reveal delay={80}>
          <div className="mt-12 border border-line bg-white px-6 py-12 text-center lg:px-10">
            <p className="font-display text-[1.5rem] tracking-[-0.03em] text-ink lg:text-[2rem]">
              To be added soon....
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
