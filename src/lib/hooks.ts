import { useCallback, useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------
   Reduced motion preference
   ------------------------------------------------------------ */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/* ------------------------------------------------------------
   Scroll reveal via IntersectionObserver
   ------------------------------------------------------------ */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.12) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -6% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ------------------------------------------------------------
   Global scroll position (throttled with rAF)
   ------------------------------------------------------------ */
export function useScrollPosition(): number {
  const [y, setY] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setY(window.scrollY);
        frame = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return y;
}

/* ------------------------------------------------------------
   Scroll progress 0 → 1
   ------------------------------------------------------------ */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const compute = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        compute();
        frame = 0;
      });
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return progress;
}

/* ------------------------------------------------------------
   Active section id (for navigation indicator)
   ------------------------------------------------------------ */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const seen = new Map<string, number>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          seen.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        let best = "";
        let bestRatio = 0;
        for (const [id, ratio] of seen) {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }
        if (best) setActive(best);
      },
      { threshold: [0.15, 0.35, 0.6, 0.85], rootMargin: "-15% 0px -35% 0px" },
    );

    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);

  return active;
}

/* ------------------------------------------------------------
   Lock body scroll (mobile menu / lightbox)
   ------------------------------------------------------------ */
export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);
}

/* ------------------------------------------------------------
   Escape key handler
   ------------------------------------------------------------ */
export function useEscape(active: boolean, onEscape: () => void) {
  const handler = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onEscape();
    },
    [onEscape],
  );

  useEffect(() => {
    if (!active) return;
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [active, handler]);
}

/* ------------------------------------------------------------
   Smooth scroll to an element id, accounting for the sticky nav
   ------------------------------------------------------------ */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduced =
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top = el.getBoundingClientRect().top + window.scrollY - 76;
  window.scrollTo({ top: Math.max(0, top), behavior: reduced ? "auto" : "smooth" });
}
