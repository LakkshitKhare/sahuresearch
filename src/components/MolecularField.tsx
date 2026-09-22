import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: number;
};

const LINK_DISTANCE = 148;

/**
 * Ambient scientific backdrop: a slow molecular network of nodes and
 * connection lines over deep navy. Purely decorative, GPU-light, and
 * frozen to a single static frame when reduced motion is requested.
 */
export function MolecularField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let frame = 0;
    let running = true;

    const seed = () => {
      const count = Math.round(Math.min(78, Math.max(28, (width * height) / 17000)));
      particles = Array.from({ length: count }, () => {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.055 + Math.random() * 0.16;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed * 0.6,
          r: 0.7 + Math.random() * 1.7,
          hue: Math.random() > 0.72 ? 1 : 0, // 1 = aqua accent
        };
      });
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(2, window.devicePixelRatio || 1);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * 0.16;
            ctx.strokeStyle = `rgba(120, 158, 255, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.55;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        const color = p.hue ? "rgba(90, 205, 226," : "rgba(158, 186, 255,";
        ctx.fillStyle = `${color} 0.55)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = () => {
      if (!running) return;
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;
      }
      draw();
      frame = requestAnimationFrame(step);
    };

    resize();

    if (reduced) {
      draw();
    } else {
      frame = requestAnimationFrame(step);
    }

    const onResize = () => {
      resize();
      draw();
    };
    window.addEventListener("resize", onResize);

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        if (frame) cancelAnimationFrame(frame);
      } else if (!reduced && !running) {
        running = true;
        frame = requestAnimationFrame(step);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
