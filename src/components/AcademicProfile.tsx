import { useMemo, useState } from "react";
import {
  academicAppointments,
  academicProfileSummary,
  awardsTimeline,
  conferencePresentations,
  educationHistory,
  labLeadership,
  patents,
  professionalAffiliations,
  projectFunding,
  publications,
  researchSpecializations,
  studentMentoring,
  teachingApproach,
  teachingHistory,
} from "@/lib/content";
import { Reveal, SectionHeader } from "./Primitives";
import { ArrowUpRight, External } from "./Icons";

const tabs = [
  "Education",
  "Academic Appointments",
  "Awards & Honors",
  "Patents",
  "Conference Presentations",
  "Research Projects",
  "Teaching",
  "Student Mentoring",
  "Research Leadership",
  "Professional Services",
] as const;

export function AcademicProfile() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Education");

  const content = useMemo(() => {
    switch (activeTab) {
      case "Education":
        return (
          <div className="space-y-8">
            {educationHistory.map((item, index) => (
              <Reveal key={item.degree} delay={index * 70} className="relative pl-8">
                <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border border-electric bg-electric/10" aria-hidden="true" />
                <div className="border border-line bg-white p-6"> 
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-electric">{item.year}</p>
                  <h3 className="mt-4 text-[1.45rem] leading-snug text-ink">{item.degree}</h3>
                  <p className="mt-3 text-[0.9375rem] text-ink-500">{item.institution}</p>
                  <p className="mt-2 text-[0.875rem] text-ink-500">{item.detail}</p>
                  {item.thesis ? <p className="mt-4 text-[0.875rem] leading-relaxed text-ink-600">{item.thesis}</p> : null}
                </div>
              </Reveal>
            ))}
          </div>
        );
      case "Academic Appointments":
        return (
          <div className="space-y-7">
            {academicAppointments.map((item, index) => (
              <Reveal key={`${item.title}-${item.period}`} delay={index * 70} className="relative pl-8">
                <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border border-ink/25 bg-white" aria-hidden="true" />
                <div className={item.isFeatured ? "border-l-2 border-electric bg-electric-soft/35 p-6" : "border border-line bg-white p-6"}>
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-electric">{item.period}</p>
                  <h3 className="mt-4 text-[1.3rem] leading-snug text-ink">{item.title}</h3>
                  <p className="mt-3 whitespace-pre-line text-[0.9375rem] leading-relaxed text-ink-500">{item.org}</p>
                  {item.host ? <p className="mt-4 text-[0.875rem] text-ink-600">{item.host}</p> : null}
                  {item.research ? <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-600">{item.research}</p> : null}
                </div>
              </Reveal>
            ))}
          </div>
        );
      case "Awards & Honors":
        return (
          <div className="space-y-5">
            {awardsTimeline.map((award, index) => (
              <Reveal key={`${award.year}-${award.title}`} delay={index * 50} className="flex gap-4 border-b border-line pb-4">
                <p className="min-w-[6.5rem] font-mono text-[0.625rem] uppercase tracking-[0.14em] text-electric">{award.year}</p>
                <p className="text-[0.9375rem] leading-relaxed text-ink-600">{award.title}</p>
              </Reveal>
            ))}
          </div>
        );
      case "Patents":
        return (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {patents.map((patent, index) => (
              <Reveal key={patent.number} delay={index * 60} className="border border-line bg-white p-6">
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-electric">{patent.status}</p>
                <h3 className="mt-5 text-[1.2rem] leading-snug text-ink">{patent.title}</h3>
                <p className="mt-4 text-[0.875rem] leading-relaxed text-ink-500">{patent.inventors}</p>
                <p className="mt-4 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-ink-400">{patent.number}</p>
              </Reveal>
            ))}
          </div>
        );
      case "Conference Presentations":
        return (
          <div className="space-y-6">
            {conferencePresentations.slice(0, 10).map((item, index) => (
              <Reveal key={`${item.title}-${item.year}`} delay={index * 50} className="border border-line bg-white p-5">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-electric">{item.year}</p>
                  <span className="text-[0.6875rem] uppercase tracking-[0.14em] text-ink-400">{item.format}</span>
                </div>
                <h3 className="mt-4 text-[1.2rem] leading-snug text-ink">{item.title}</h3>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-ink-500">{item.authors}</p>
                <p className="mt-2 text-[0.875rem] text-ink-600">{item.venue}</p>
                <p className="mt-1 text-[0.875rem] text-ink-500">{item.location}</p>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-[0.8125rem] text-ink font-medium link-underline">
                    View record
                    <ArrowUpRight size={14} />
                  </a>
                ) : null}
              </Reveal>
            ))}
          </div>
        );
      case "Research Projects":
        return (
          <div className="space-y-8">
            <div>
              <p className="label text-ink-400">Awarded</p>
              <div className="mt-5 border border-line bg-white p-6">
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-electric">{projectFunding.awarded[0].label}</p>
                <h3 className="mt-4 text-[1.5rem] leading-snug text-ink">{projectFunding.awarded[0].title}</h3>
                <p className="mt-4 text-[0.9375rem] text-ink-500">{projectFunding.awarded[0].cost}</p>
                <p className="mt-3 text-[0.9375rem] text-ink-500">{projectFunding.awarded[0].pi}</p>
              </div>
            </div>
            <div>
              <p className="label text-ink-400">Submitted</p>
              <div className="mt-5 space-y-5">
                {projectFunding.submitted.map((project) => (
                  <div key={project.label} className="border border-line bg-white p-6">
                    <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-electric">{project.label}</p>
                    <h3 className="mt-4 text-[1.25rem] leading-snug text-ink">{project.title}</h3>
                    <p className="mt-4 text-[0.875rem] text-ink-500">{project.pi}</p>
                    <p className="mt-2 text-[0.875rem] text-ink-500">{project.coPi}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "Teaching":
        return (
          <div className="space-y-7">
            {teachingHistory.map((entry, index) => (
              <Reveal key={`${entry.institution}-${entry.period}`} delay={index * 60} className="border border-line bg-white p-6">
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-electric">{entry.period}</p>
                <h3 className="mt-4 text-[1.25rem] leading-snug text-ink">{entry.institution}</h3>
                <ul className="mt-4 space-y-2 text-[0.9375rem] leading-relaxed text-ink-600">
                  {entry.details.map((detail) => <li key={detail}>• {detail}</li>)}
                </ul>
                <p className="mt-4 text-[0.875rem] text-ink-500">{entry.audience}</p>
              </Reveal>
            ))}
            <div className="border border-line bg-paper-100 p-6">
              <p className="label text-ink-400">Teaching Approach</p>
              <ul className="mt-4 grid gap-2 text-[0.9375rem] text-ink-600 md:grid-cols-2">
                {teachingApproach.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          </div>
        );
      case "Student Mentoring":
        return (
          <div className="space-y-6">
            {studentMentoring.map((student, index) => (
              <Reveal key={student.name} delay={index * 60} className="relative pl-8">
                <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border border-electric bg-electric/10" aria-hidden="true" />
                <div className="border border-line bg-white p-5">
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-electric">{student.period}</p>
                  <h3 className="mt-4 text-[1.2rem] leading-snug text-ink">{student.name}</h3>
                  <p className="mt-2 text-[0.875rem] text-ink-500">{student.degree}</p>
                  <p className="mt-2 text-[0.875rem] text-ink-500">{student.role}</p>
                  <p className="mt-3 text-[0.875rem] leading-relaxed text-ink-600">{student.project}</p>
                </div>
              </Reveal>
            ))}
          </div>
        );
      case "Research Leadership":
        return (
          <div className="border border-line bg-white p-6">
            <ul className="grid gap-3 text-[0.9375rem] leading-relaxed text-ink-600 md:grid-cols-2">
              {labLeadership.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        );
      case "Professional Services":
        return (
          <div className="space-y-6">
            {professionalAffiliations.map((item, index) => (
              <Reveal key={item.org} delay={index * 60} className="border border-line bg-white p-5">
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-electric">{item.period}</p>
                <h3 className="mt-4 text-[1.2rem] leading-snug text-ink">{item.org}</h3>
              </Reveal>
            ))}
            <div className="border border-line bg-paper-100 p-6">
              <p className="label text-ink-400">Professional activities</p>
              <ul className="mt-4 space-y-2 text-[0.9375rem] leading-relaxed text-ink-600">
                {conferencePresentations.slice(0, 7).map((item) => (
                  <li key={`${item.title}-${item.year}`}>• {item.venue} ({item.year})</li>
                ))}
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  }, [activeTab]);

  return (
    <section id="academic-profile" className="relative scroll-mt-20 bg-paper py-24 lg:py-32">
      <div className="shell">
        <SectionHeader
          index="05"
          eyebrow="Academic Profile"
          title="Academic profile and scholarly record"
          lead={academicProfileSummary}
          aside={
            <a
              href={publications[0]?.url || "https://scholar.google.com/citations?hl=en&user=RKUGv88AAAAJ&view_op=list_works&sortby=pubdate"}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline h-11 min-h-11 px-5"
            >
              View Google Scholar
              <External size={14} />
            </a>
          }
        />

        <Reveal delay={80} className="mt-14 border border-line bg-white">
          <div className="flex flex-wrap gap-2 border-b border-line p-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`min-h-11 px-4 text-[0.75rem] font-medium tracking-[0.02em] transition-colors duration-300 ${
                  activeTab === tab ? "bg-ink text-white" : "text-ink-500 hover:bg-paper-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="p-5 md:p-8">{content}</div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-5">
          <div className="border border-line bg-white p-6">
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-electric">26</p>
            <p className="mt-3 text-[0.625rem] uppercase tracking-[0.14em] text-ink-400">H-index</p>
          </div>
          <div className="border border-line bg-white p-6">
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-electric">6,000+</p>
            <p className="mt-3 text-[0.625rem] uppercase tracking-[0.14em] text-ink-400">Citations</p>
          </div>
          <div className="border border-line bg-white p-6 md:col-span-3">
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-electric">301.6+</p>
            <p className="mt-3 text-[0.625rem] uppercase tracking-[0.14em] text-ink-400">Cumulative Impact Factor</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-5">
          <p className="label text-ink-400">Research specializations</p>
          <div className="flex flex-wrap gap-2">
            {researchSpecializations.map((item) => (
              <span key={item} className="border border-ink/12 bg-paper-100 px-2.5 py-1 text-[0.75rem] leading-none text-ink-500">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
