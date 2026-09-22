import { profile, researchAreas } from "@/lib/content";
import { NAV_LINKS } from "./Navbar";
import { ArrowUp, External, LinkedIn, Scholar } from "./Icons";

const RESEARCH_LINKS = researchAreas.map((area) => ({ label: area.label, id: "research" }));

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="grid-fine-dark absolute inset-0 opacity-50" />

      <div className="shell relative">
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 border-b border-white/12 py-16 lg:grid-cols-12 lg:py-20">
          {/* Identity */}
          <div className="lg:col-span-5">
            <p className="font-display text-[1.5rem] font-medium leading-snug tracking-tight">
              {profile.fullName}
            </p>
            <p className="mt-4 max-w-[40ch] text-[0.9375rem] leading-relaxed text-white/55">
              {profile.role}
              <br />
              {profile.centre}
              <br />
              {profile.institutionShort}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={profile.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost-light h-11 min-h-11 px-4 text-[0.8125rem]"
              >
                <Scholar size={15} />
                Google Scholar
                <External size={12} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost-light h-11 min-h-11 px-4 text-[0.8125rem]"
              >
                <LinkedIn size={15} />
                LinkedIn
                <External size={12} />
              </a>
            </div>
          </div>

          {/* Research areas */}
          <nav aria-label="Research areas" className="lg:col-span-4">
            <p className="label text-white/40">Research areas</p>
            <ul className="mt-5 space-y-2.5">
              {RESEARCH_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={`#${link.id}`}
                    className="link-underline text-[0.9375rem] text-white/65 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Navigate */}
          <nav aria-label="Footer navigation" className="lg:col-span-3">
            <p className="label text-white/40">Navigate</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5 lg:grid-cols-1">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="link-underline text-[0.9375rem] text-white/65 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-white/35">
            © {year} {profile.shortName}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="link-underline text-[0.8125rem] text-white/55 transition-colors duration-300 hover:text-white"
            >
              {profile.email}
            </a>
            <a
              href="#home"
              className="group inline-flex min-h-11 items-center gap-2 text-[0.8125rem] text-white/55 transition-colors duration-300 hover:text-white"
            >
              Back to top
              <ArrowUp
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
