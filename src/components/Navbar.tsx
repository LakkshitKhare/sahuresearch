import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { profile } from "@/lib/content";
import {
  useActiveSection,
  useBodyScrollLock,
  useEscape,
  useScrollPosition,
  scrollToSection,
} from "@/lib/hooks";
import { ArrowUpRight, Close, Menu } from "./Icons";
import { usePhotos } from "./PhotoProvider";

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Publications" },
  { id: "facilities", label: "Facilities" },
  { id: "academic-profile", label: "Academic Profile" },
  { id: "contact", label: "Contact" },
];

const NAV_IDS = NAV_LINKS.map((l) => l.id);

function Monogram() {
  const { photos } = usePhotos();
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const photo = photos.profile;

  return (
    <span
      aria-hidden="true"
      className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden border border-white/25 bg-white/[0.04] font-display text-[0.8rem] font-semibold tracking-tight text-white"
    >
      {photo && photo.src !== failedSource ? (
        <img
          src={photo.src}
          alt=""
          width={36}
          height={36}
          onError={() => setFailedSource(photo.src)}
          className="h-full w-full object-cover object-top"
        />
      ) : "SS"}
    </span>
  );
}

export function Navbar() {
  const scrollY = useScrollPosition();
  const observedActive = useActiveSection(NAV_IDS);
  const [manualActive, setManualActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const condensed = scrollY > 48;
  const active = manualActive ?? observedActive;

  useEffect(() => {
    if (!manualActive) return;
    const timer = window.setTimeout(() => setManualActive(null), 900);
    return () => window.clearTimeout(timer);
  }, [manualActive]);

  useBodyScrollLock(open);
  useEscape(open, () => setOpen(false));

  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  const go = (id: string) => {
    setManualActive(id);
    setOpen(false);
    requestAnimationFrame(() => scrollToSection(id));
  };

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
          condensed
            ? "border-b border-white/10 bg-ink/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="shell flex h-[4.5rem] items-center justify-between gap-6">
          {/* Identity */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              go("home");
            }}
            className="group flex min-h-11 items-center gap-3"
          >
            <Monogram />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[0.9375rem] font-semibold tracking-tight text-white">
                Dr. Sushant P. Sahu
              </span>
              <span className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-white/45">
                KIIT · Research
              </span>
            </span>
          </a>

          {/* Desktop navigation */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = active === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        go(link.id);
                      }}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "relative flex min-h-11 items-center px-3 text-[0.8125rem] font-medium transition-colors duration-300",
                        isActive ? "text-white" : "text-white/55 hover:text-white",
                      )}
                    >
                      {link.label}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-x-3 bottom-3 h-px origin-left bg-electric transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)]",
                          isActive ? "scale-x-100" : "scale-x-0",
                        )}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                go("contact");
              }}
              className="btn btn-ghost-light hidden h-11 min-h-11 px-4 text-[0.8125rem] sm:inline-flex"
            >
              Collaborate
              <ArrowUpRight size={15} />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              className="grid h-11 w-11 place-items-center border border-white/25 text-white transition-colors duration-300 hover:bg-white hover:text-ink lg:hidden"
            >
              {open ? <Close size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-40 bg-ink lg:hidden"
        style={open ? { animation: "glyph-in 0.35s cubic-bezier(0.16,1,0.3,1) both" } : undefined}
      >
        <div className="grid-fine-dark absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative flex h-full flex-col overflow-y-auto pb-10 pt-24">
          <nav aria-label="Mobile" className="shell">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {NAV_LINKS.map((link, i) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      go(link.id);
                    }}
                    className="flex min-h-14 items-center justify-between gap-4 py-2 text-white"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[0.6875rem] text-electric">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[1.6rem] font-medium tracking-tight">
                        {link.label}
                      </span>
                    </span>
                    <ArrowUpRight size={18} className="text-white/35" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="shell mt-10 space-y-5">
            <p className="label text-white/40">Get in touch</p>
            <a
              href={`mailto:${profile.email}`}
              className="block font-display text-[1.05rem] text-white underline decoration-electric decoration-2 underline-offset-4"
            >
              {profile.email}
            </a>
            <p className="text-[0.875rem] leading-relaxed text-white/50">
              {profile.centre}
              <br />
              {profile.institutionShort}
              <br />
              {profile.city}, {profile.state}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
