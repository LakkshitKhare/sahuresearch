import { useMemo, useState } from "react";
import { publications, profile } from "@/lib/content";
import { cn } from "@/utils/cn";
import { Reveal, SectionHeader, SourceNote } from "./Primitives";
import { ArrowUpRight, External, Search } from "./Icons";

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

export function Publications() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return publications.filter((pub) => {
      const matchesFilter =
        filter === "all" ||
        (filter === "earlier" ? pub.year < 2021 : String(pub.year) === filter);
      if (!matchesFilter) return false;
      if (!q) return true;
      return (
        pub.title.toLowerCase().includes(q) ||
        pub.authors.toLowerCase().includes(q) ||
        pub.journal.toLowerCase().includes(q) ||
        pub.doi.toLowerCase().includes(q)
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
          title="Selected Publications"
          lead="Peer-reviewed journal articles, conference abstracts and proceedings authored or co-authored by the laboratory."
          aside={
            <a
              href={profile.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline h-11 min-h-11 px-5"
            >
              View Google Scholar Profile
              <External size={14} />
            </a>
          }
        />

        {/* ---- Controls ---- */}
        <Reveal delay={80} className="mt-14 border-y border-line">
          <div className="flex flex-col gap-5 py-5 lg:flex-row lg:items-center lg:justify-between">
            <div
              role="group"
              aria-label="Filter publications by year"
              className="flex flex-wrap items-center gap-1"
            >
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  aria-pressed={filter === f.id}
                  className={cn(
                    "min-h-11 px-3.5 text-[0.8125rem] font-medium transition-colors duration-300",
                    filter === f.id
                      ? "bg-ink text-white"
                      : "text-ink-500 hover:bg-paper-200 hover:text-ink",
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-72">
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
                placeholder="Search title, author, journal…"
                className="h-11 w-full border border-line bg-white pl-9 pr-3 text-[0.875rem] text-ink placeholder:text-ink-400 focus:border-electric focus:outline-none"
              />
            </div>
          </div>
        </Reveal>

        {/* ---- List ---- */}
        <div className="mt-2">
          <p aria-live="polite" className="py-4 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-ink-400">
            {filtered.length} {filtered.length === 1 ? "publication" : "publications"}
            {filter !== "all" ? ` · filtered` : ""}
          </p>

          {grouped.length === 0 ? (
            <div className="border-t border-line py-16 text-center">
              <p className="font-display text-[1.125rem] text-ink">No publications match this search.</p>
              <p className="mt-2 text-[0.9375rem] text-ink-500">
                Try a different keyword, or view the complete record on Google Scholar.
              </p>
            </div>
          ) : (
            grouped.map(([year, items]) => (
              <div key={year}>
                <div className="flex items-baseline gap-5 border-t border-line pt-7">
                  <h3 className="font-display text-[2rem] font-medium tracking-[-0.03em] text-ink lg:text-[2.5rem]">
                    {year}
                  </h3>
                  <span aria-hidden="true" className="h-px flex-1 bg-line" />
                  <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-ink-400">
                    {items.length} {items.length === 1 ? "entry" : "entries"}
                  </span>
                </div>

                <ul className="mt-2">
                  {items.map((pub) => (
                    <li key={pub.doi} className="group">
                      <article className="grid grid-cols-1 gap-x-10 gap-y-3 border-b border-line-soft py-7 transition-colors duration-300 hover:bg-white lg:grid-cols-12">
                        <div className="lg:col-span-10">
                          <h4 className="text-[1.0625rem] leading-snug lg:text-[1.1875rem]">
                            <a
                              href={pub.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link-underline font-display font-medium text-ink"
                            >
                              {pub.title}
                            </a>
                          </h4>
                          <p className="mt-3 max-w-[70ch] text-[0.875rem] leading-relaxed text-ink-500">
                            <Authors value={pub.authors} />
                          </p>
                          <p className="mt-3 text-[0.875rem] text-ink-600">
                            <em className="not-italic font-medium">{pub.journal}</em>
                            <span className="mx-2 text-line" aria-hidden="true">
                              /
                            </span>
                            {pub.volume}
                          </p>
                          <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink-400">
                            DOI {pub.doi}
                          </p>
                        </div>
                        <div className="lg:col-span-2 lg:text-right">
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-11 items-center gap-1.5 text-[0.8125rem] font-medium text-ink-500 opacity-70 transition-all duration-300 group-hover:opacity-100 hover:text-electric"
                          >
                            View publication
                            <ArrowUpRight
                              size={14}
                              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                            <span className="sr-only">(opens in a new tab)</span>
                          </a>
                        </div>
                      </article>
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
              className="font-medium text-ink link-underline"
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
