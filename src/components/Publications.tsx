import { useMemo, useState } from "react";
import { type Publication, publications, profile } from "@/lib/content";
import { cn } from "@/utils/cn";
import { Reveal, SectionHeader, SourceNote } from "./Primitives";
import { ArrowUpRight, Search } from "./Icons";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "2025", label: "2025" },
  { id: "2022", label: "2022" },
  { id: "2021", label: "2021" },
  { id: "earlier", label: "Earlier" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"]; 

function Authors({ value }: { value: string }) {
  const parts = value.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-ink">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function PublicationGraphic({ publication }: { publication: Publication }) {
  const image = publication.tocGraphic?.trim();

  if (image) {
    return (
      <div className="group/cover relative aspect-[4/3] overflow-hidden border border-line bg-paper-100 transition-[border-color,transform] duration-[350ms] ease-[cubic-bezier(.16,1,.3,1)] hover:border-ink/20">
        <img
          src={image}
          alt={`${publication.title} publication graphic`}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-[350ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover/cover:scale-[1.02]"
        />
      </div>
    );
  }

  return (
    <div className="grid-fine relative aspect-[4/3] overflow-hidden border border-line bg-paper-100 transition-[border-color,transform] duration-[350ms] ease-[cubic-bezier(.16,1,.3,1)] hover:border-ink/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(36,71,232,0.06),transparent_55%)]" />
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <span className="label text-ink-400">TOC Graphic</span>
        <span className="mt-3 font-display text-[1.2rem] leading-none tracking-[-0.04em] text-ink-500">
          Coming soon
        </span>
      </div>
    </div>
  );
}

export function Publications() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [query, setQuery] = useState("");

  const filters = useMemo(() => {
    const years = Array.from(new Set(publications.map((pub) => pub.year))).sort((a, b) => b - a);
    const yearOptions = years.filter((year) => year >= 2020).map((year) => ({
      id: String(year),
      label: String(year),
    }));

    return [
      { id: "all", label: "All" },
      ...yearOptions,
      { id: "earlier", label: "Earlier" },
    ] as const;
  }, []);

  type DynamicFilterId = (typeof filters)[number]["id"];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return publications.filter((pub) => {
      const matchesFilter =
        filter === "all" ||
        (filter === "earlier" ? pub.year < 2020 : String(pub.year) === filter);
      if (!matchesFilter) return false;
      if (!q) return true;

      const keywords = (pub.keywords ?? []).join(" ").toLowerCase();
      return (
        pub.title.toLowerCase().includes(q) ||
        pub.authors.toLowerCase().includes(q) ||
        pub.journal.toLowerCase().includes(q) ||
        pub.doi.toLowerCase().includes(q) ||
        String(pub.year).includes(q) ||
        keywords.includes(q)
      );
    });
  }, [filter, query]);

  const grouped = useMemo(() => {
    const map = new Map<number, typeof publications>();
    for (const pub of filtered) {
      const list = map.get(pub.year) ?? [];
      list.push(pub);
      map.set(pub.year, list);
    }
    return [...map.entries()].sort((a, b) => b[0] - a[0]);
  }, [filtered]);

  return (
    <section id="publications" className="relative scroll-mt-20 bg-paper py-24 lg:py-32">
      <div className="shell">
        <SectionHeader
          index="04"
          eyebrow="Publications"
          title="Publications"
          lead="Selected research publications spanning electrochemistry, nanotechnology, environmental technologies, sensors and optical bioimaging."
          aside={
            <a
              href={profile.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline h-11 min-h-11 px-5"
            >
              View Google Scholar Profile
              <span aria-hidden="true">↗</span>
            </a>
          }
        />

        <Reveal delay={80} className="mt-12">
          <div className="flex flex-col gap-4 border-y border-line py-5 lg:flex-row lg:items-center lg:justify-between">
            <div
              role="group"
              aria-label="Filter publications by year"
              className="flex flex-wrap items-center gap-1"
            >
              {filters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id as DynamicFilterId)}
                  aria-pressed={filter === f.id}
                  className={cn(
                    "min-h-11 px-3.5 text-[0.8125rem] font-medium transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)]",
                    filter === f.id
                      ? "bg-ink text-white"
                      : "text-ink-500 hover:bg-paper-200 hover:text-ink",
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:max-w-[18rem]">
              <label htmlFor="publication-search" className="sr-only">
                Search publications
              </label>
              <Search
                size={15}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-400"
              />
              <input
                id="publication-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search publications..."
                className="h-11 w-full border border-line bg-white pl-9 pr-3 text-[0.875rem] text-ink placeholder:text-ink-400 focus:border-electric focus:outline-none"
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-2">
          <p aria-live="polite" className="py-4 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-ink-400">
            {filtered.length} {filtered.length === 1 ? "publication" : "publications"}
            {filter !== "all" ? " · filtered" : ""}
          </p>

          {grouped.length === 0 ? (
            <div className="border-t border-line py-16 text-center">
              <p className="font-display text-[1.125rem] text-ink">No publications match this search.</p>
              <p className="mt-2 text-[0.9375rem] text-ink-500">
                Try a different keyword or browse the complete publication archive on Google Scholar.
              </p>
            </div>
          ) : (
            grouped.map(([year, items]) => (
              <div key={year} className="pt-3">
                <Reveal delay={60} className="flex items-center gap-4 border-t border-line pt-6">
                  <h3 className="font-display text-[1.8rem] font-medium tracking-[-0.04em] text-ink lg:text-[2.15rem]">
                    {year}
                  </h3>
                  <span aria-hidden="true" className="h-px flex-1 bg-line" />
                </Reveal>

                <ul className="mt-2">
                  {items.map((pub, index) => (
                    <li key={`${pub.doi}-${index}`} className="group/list">
                      <Reveal delay={60 + index * 60} className="border-b border-line-soft py-6 transition-[background-color] duration-[350ms] ease-[cubic-bezier(.16,1,.3,1)] hover:bg-paper-100/70">
                        <article className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.55fr)] lg:gap-8">
                          <div className="lg:pr-2">
                            <PublicationGraphic publication={pub} />
                          </div>

                          <div className="flex flex-col justify-center">
                            <div className="flex items-start gap-4">
                              <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-400">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <div className="flex-1">
                                <h4 className="max-w-[32ch] text-[1.12rem] leading-[1.3] text-ink transition-all duration-[350ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover/list:text-ink-700 lg:text-[1.38rem]">
                                  <a
                                    href={pub.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 hover:text-electric"
                                  >
                                    {pub.title}
                                    <ArrowUpRight size={15} className="shrink-0 transition-transform duration-[350ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover/list:translate-x-0.5 group-hover/list:-translate-y-0.5" />
                                  </a>
                                </h4>

                                <p className="mt-3 max-w-[68ch] text-[0.875rem] leading-relaxed text-ink-500">
                                  <Authors value={pub.authors} />
                                </p>

                                <p className="mt-4 font-mono text-[0.65625rem] uppercase tracking-[0.16em] text-ink-400">
                                  <span className="text-ink-500">{pub.journal.toUpperCase()}</span>
                                  <span className="mx-2 text-line">·</span>
                                  {pub.year}
                                </p>

                                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-[0.75rem] font-medium text-ink-500">
                                  <a
                                    href={`https://doi.org/${pub.doi}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-electric"
                                  >
                                    DOI
                                    <ArrowUpRight size={12} className="transition-transform duration-300 group-hover/list:translate-x-0.5 group-hover/list:-translate-y-0.5" />
                                  </a>
                                  <a
                                    href={pub.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-electric"
                                  >
                                    View Publication
                                    <ArrowUpRight size={12} className="transition-transform duration-300 group-hover/list:translate-x-0.5 group-hover/list:-translate-y-0.5" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>

        <Reveal delay={100}>
          <SourceNote className="mt-10 border-t border-line pt-8">
            A selection of publications is listed above. For the complete and most current publication record,
            including citation metrics, please refer to the{" "}
            <a
              href={profile.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink underline-offset-2 hover:underline"
            >
              Google Scholar profile
            </a>
            .
          </SourceNote>
        </Reveal>
      </div>
    </section>
  );
}
