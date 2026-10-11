import { Reveal, SectionHeader } from "./Primitives";

const galleryItems = [
  {
    src: "/website-assets/group-photo.jpg",
    alt: "Group photograph outdoors",
  },
  {
    src: "/website-assets/recognition-photo.jpg",
    alt: "Research recognition photograph",
  },
  {
    src: "/website-assets/seminar-photo.jpg",
    alt: "Research presentation photograph",
  },
] as const;

export function Gallery() {
  return (
    <section id="gallery" className="relative scroll-mt-20 bg-paper py-24 lg:py-32">
      <div className="shell">
        <SectionHeader
          index="07"
          eyebrow="Gallery"
          title="Gallery"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => (
            <Reveal key={item.src} delay={80 + index * 80}>
              <figure className="h-full border border-line bg-white shadow-[0_12px_28px_rgba(7,10,17,0.03)] transition-transform duration-300 hover:-translate-y-1">
                <div className="overflow-hidden border-b border-line bg-paper-100">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-[18rem] w-full object-cover object-center md:h-[21rem]"
                    loading="lazy"
                  />
                </div>

              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-[0.9375rem] leading-relaxed text-ink-500">Some pics will be added later.</p>
      </div>
    </section>
  );
}
