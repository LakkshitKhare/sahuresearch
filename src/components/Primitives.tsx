import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/utils/cn";
import { useReveal } from "@/lib/hooks";

/* ============================================================
   Reveal — scroll-triggered fade + rise
   ============================================================ */
type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  threshold?: number;
};

export function Reveal({ children, className, delay = 0, as: Tag = "div", threshold }: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>(threshold);
  return (
    <Tag
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/* ============================================================
   Eyebrow / section marker
   ============================================================ */
export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "label flex items-center gap-2.5",
        tone === "dark" ? "text-white/55" : "text-ink-400",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn("h-px w-6", tone === "dark" ? "bg-white/35" : "bg-ink/35")}
      />
      {children}
    </p>
  );
}

/* ============================================================
   Section header — editorial composition
   ============================================================ */
export function SectionHeader({
  index,
  eyebrow,
  title,
  lead,
  tone = "light",
  aside,
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "light" | "dark";
  aside?: ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-7 lg:grid-cols-12">
      <Reveal className="lg:col-span-7">
        <Eyebrow tone={tone}>
          {index ? <span className="text-electric">{index}</span> : null}
          <span aria-hidden="true">{index ? "/" : null}</span>
          {eyebrow}
        </Eyebrow>
        <h2
          className={cn(
            "mt-6 max-w-[22ch] text-[2.1rem] leading-[1.06] sm:text-[2.6rem] lg:text-[3.1rem]",
            tone === "dark" ? "text-white" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>

      <div className="lg:col-span-5 lg:pt-[4.6rem]">
        {lead ? (
          <Reveal delay={120}>
            <p
              className={cn(
                "max-w-[46ch] text-[1.0625rem] leading-[1.75]",
                tone === "dark" ? "text-white/65" : "text-ink-500",
              )}
            >
              {lead}
            </p>
          </Reveal>
        ) : null}
        {aside ? (
          <Reveal delay={200} className="mt-6">
            {aside}
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}

/* ============================================================
   Keyword chip list
   ============================================================ */
export function KeywordList({ items, tone = "light" }: { items: readonly string[]; tone?: "light" | "dark" }) {
  return (
    <ul className="flex flex-wrap gap-x-2 gap-y-2">
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "border px-2.5 py-1 text-[0.75rem] leading-none",
            tone === "dark"
              ? "border-white/18 text-white/70"
              : "border-ink/15 text-ink-500",
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ============================================================
   Small caption / source note
   ============================================================ */
export function SourceNote({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[0.8125rem] leading-relaxed",
        tone === "dark" ? "text-white/45" : "text-ink-400",
        className,
      )}
    >
      {children}
    </p>
  );
}
