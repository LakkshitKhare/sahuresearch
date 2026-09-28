import { profile } from "@/lib/content";
import { Reveal, SectionHeader, KeywordList } from "./Primitives";
import { ArrowUpRight, Mail } from "./Icons";

const researchAreas = [
  "Advanced Materials",
  "Ionic Polymers",
  "Electrocatalysis",
  "Nanotechnology",
  "Molecular Sensing",
] as const;

const opportunityCards = [
  {
    title: "Ph.D. Students",
    text:
      "Ph.D. students should be motivated to work at the interface of nanotechnology, polymer chemistry, spectro-electrochemistry, (bio)sensors and be willing to explore various cutting-edge spectroscopic, microscopic and electroanalytical techniques.",
    highlight:
      "No previous knowledge of experimental techniques in the above-mentioned areas is required.",
  },
  {
    title: "UG & PG Dissertation Students",
    text:
      "We welcome highly motivated undergraduate (UG) and postgraduate (PG) dissertation students interested in exploring challenging research problems in the group’s research areas.",
  },
  {
    title: "Postdoctoral Researchers",
    text:
      "We support postdoctoral applicants with NPDF/DST-WISE/DBT-RA/UGC postdoc positions.\n\nPostdocs with prior experience in the fields of polymer chemistry, materials chemistry, nanobiotechnology, catalysis are encouraged to apply for possible host support.",
    highlight: "NPDF · DST-WISE · DBT-RA · UGC",
  },
] as const;

export function JoinUs() {
  return (
    <section id="join-us" className="relative scroll-mt-20 bg-paper py-24 lg:py-28">
      <div className="shell">
        <SectionHeader
          index="08"
          eyebrow="Open Positions & Joining the Group"
          title="Join Our Research Group"
          lead="We are always interested in looking for highly motivated Ph.D. students, undergraduate (UG) and postgraduate (PG) dissertation students and postdoctoral candidates interested in exploring challenging areas of Advanced Materials, Ionic Polymers, Electrocatalysis, Nanotechnology, and Molecular Sensing."
        />

        <Reveal delay={80} className="mt-10">
          <KeywordList items={researchAreas} />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {opportunityCards.map((item, index) => (
            <Reveal key={item.title} delay={index * 90} as="article">
              <div className="group h-full border border-line bg-white p-6 transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 hover:border-ink/25 hover:bg-paper-100 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-electric">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-line" aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-[1.45rem] leading-tight text-ink sm:text-[1.7rem]">
                  {item.title}
                </h3>

                <p className="mt-5 text-[0.96rem] leading-[1.8] text-ink-500 whitespace-pre-line">
                  {item.text}
                </p>

                {item.highlight ? (
                  <div className="mt-6 border border-electric/15 bg-electric-soft px-3 py-3 text-[0.8rem] leading-[1.6] text-ink-500">
                    {item.highlight}
                  </div>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140} className="mt-16">
          <div className="border border-line bg-white p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] lg:items-start">
              <div>
                <p className="label text-ink-400">Interested in Joining?</p>
                <h3 className="mt-4 max-w-[16ch] text-[1.8rem] leading-tight text-ink sm:text-[2.1rem]">
                  Interested in Joining?
                </h3>
                <p className="mt-5 max-w-[54ch] text-[1rem] leading-[1.8] text-ink-500">
                  Interested applicants should send their updated CV along with a cover letter to Dr. Sushant P. Sahu.
                </p>
              </div>

              <div className="space-y-4 rounded-none border border-line bg-paper-100 p-5 sm:p-6">
                <div>
                  <p className="label text-ink-400">Contact</p>
                  <h4 className="mt-3 text-[1.15rem] leading-snug text-ink">Dr. Sushant P. Sahu</h4>
                </div>

                <div className="space-y-3 text-[0.96rem] text-ink-500">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-2 transition-colors hover:text-electric"
                  >
                    <Mail size={15} />
                    {profile.email}
                  </a>
                  <a
                    href={`mailto:${profile.emailAlt}`}
                    className="flex items-center gap-2 transition-colors hover:text-electric"
                  >
                    <Mail size={15} />
                    {profile.emailAlt}
                  </a>
                </div>

                <a
                  href={`mailto:${profile.email}?subject=Research%20Group%20Application`}
                  className="btn btn-primary mt-2 w-full justify-center sm:w-auto"
                >
                  Send Your Application
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
