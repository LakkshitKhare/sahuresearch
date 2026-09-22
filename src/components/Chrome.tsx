import { useScrollProgress, useScrollPosition } from "@/lib/hooks";
import { cn } from "@/utils/cn";
import { ArrowUp } from "./Icons";

export function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-electric"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}

export function BackToTop() {
  const scrollY = useScrollPosition();
  const visible = scrollY > 900;

  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        })
      }
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={cn(
        "fixed bottom-6 right-5 z-[55] grid h-12 w-12 place-items-center border border-ink/20 bg-white text-ink shadow-[0_2px_12px_rgba(7,10,17,0.12)] transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:border-electric hover:text-electric",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUp size={18} />
    </button>
  );
}
