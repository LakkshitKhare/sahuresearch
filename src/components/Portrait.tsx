import { useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import type { PhotoSlot } from "@/lib/photoFiles";
import { usePhotos } from "./PhotoProvider";

type PortraitProps = {
  slot: PhotoSlot;
  alt: string;
  className?: string;
  caption?: ReactNode;
  initials?: string;
  aspect?: string;
  tone?: "light" | "dark";
};

const PHOTO_COPY = {
  profile: {
    title: "Profile photograph",
    action: "Upload profile photo",
    description: "Choose your close-up portrait. It will appear here and beside your name in the navigation.",
    destination: "Mapped to About and the navigation portrait.",
  },
  conference: {
    title: "Conference photograph",
    action: "Upload conference photo",
    description: "Choose your photograph in front of the research poster. The full vertical image will be preserved.",
    destination: "Mapped to the conference photograph in Facilities.",
  },
};

export function Portrait({
  slot,
  alt,
  className,
  caption,
  initials = "SS",
  aspect = "4 / 5",
  tone = "light",
}: PortraitProps) {
  const { photos } = usePhotos();
  const photo = photos[slot];
  const isDark = tone === "dark";
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const hasImage = Boolean(photo && photo.src !== failedSource);
  const aspectRatio = photo ? `${photo.width} / ${photo.height}` : aspect;

  return (
    <figure id={`${slot}-photo`} className={cn("min-w-0 scroll-mt-24", className)}>
      <div
        className={cn(
          "relative w-full overflow-hidden border transition-colors duration-200",
          isDark ? "border-white/20 bg-ink-800" : "border-line bg-paper-100",
        )}
        style={{ aspectRatio, minHeight: hasImage ? undefined : "24rem" }}
      >
        {hasImage && photo ? (
          <img
            key={photo.src}
            src={photo.src}
            alt={alt}
            width={photo.width}
            height={photo.height}
            loading="lazy"
            decoding="async"
            onError={() => setFailedSource(photo.src)}
            className="absolute inset-0 h-full w-full object-contain"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center px-5 py-8 text-center sm:px-7">
            <span
              aria-hidden="true"
              className={cn("font-display text-5xl font-medium tracking-tight", isDark ? "text-white/40" : "text-ink-400")}
            >
              {initials}
            </span>
            <p className={cn("mt-6 font-display text-base font-medium", isDark ? "text-white" : "text-ink")}>
              {PHOTO_COPY[slot].title}
            </p>
            <p className={cn("mt-3 text-sm", isDark ? "text-white/70" : "text-ink-500")}>
              Photograph unavailable.
            </p>
          </div>
        )}
      </div>

      {caption ? (
        <figcaption className={cn("mt-4 text-[0.8125rem] leading-relaxed", isDark ? "text-white/70" : "text-ink-400")}>
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
