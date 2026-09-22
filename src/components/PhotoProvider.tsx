import { createContext, useContext, useMemo } from "react";
import type { ReactNode } from "react";
import photoSettings from "@/lib/photo-settings.json";
import { readPhoto } from "@/lib/photoFiles";
import type { SitePhotos } from "@/lib/photoFiles";

const publishedPhotos: SitePhotos = {
  profile: readPhoto(photoSettings.profile),
  conference: readPhoto(photoSettings.conference),
};

type PhotoContextValue = {
  photos: SitePhotos;
};

const PhotoContext = createContext<PhotoContextValue | null>(null);

export function PhotoProvider({ children }: { children: ReactNode }) {
  const value = useMemo<PhotoContextValue>(
    () => ({
      photos: publishedPhotos,
    }),
    [],
  );

  return <PhotoContext.Provider value={value}>{children}</PhotoContext.Provider>;
}

export function usePhotos(): PhotoContextValue {
  const context = useContext(PhotoContext);
  if (!context) throw new Error("Photo components must be rendered inside PhotoProvider.");
  return context;
}