import { profile } from "@/lib/content";
import { scrollToSection } from "@/lib/hooks";
import { ArrowRight, External, LinkedIn, Scholar } from "./Icons";

export function Collaboration() {
  return (
    <section className="on-dark relative overflow-hidden bg-ink py-20 text-white lg:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 120% at 20% 100%, rgba(36,71,232,0.2) 0%, rgba(7,10,17,0) 60%)",
        }}
      />
      <div className="shell relative">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="label flex items-center gap-2.5 text-white/45">
              <span aria-hidden="true" className="h-px w-6 bg-white/30" />
              Collaboration
            </p>
            <h2 className="mt-6 max-w-[26ch] text-[1.9rem] leading-[1.12] lg:text-[2.6rem]">
              Interested in Research Collaboration?
            </h2>
            <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-[1.75] text-white/60">
              For academic, interdisciplinary and research collaboration inquiries, please get in touch.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="btn btn-light h-12 min-h-12 px-6"
              >
                Contact
                <ArrowRight size={16} />
              </button>
              <a
                href={profile.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost-light h-12 min-h-12 px-5"
              >
                <Scholar size={16} />
                Google Scholar
                <External size={13} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost-light h-12 min-h-12 px-5"
              >
                <LinkedIn size={16} />
                LinkedIn
                <External size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
