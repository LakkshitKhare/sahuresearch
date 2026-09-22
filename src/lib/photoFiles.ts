export type PhotoSlot = "profile" | "conference";

export type SitePhoto = {
  src: string;
  name: string;
  width: number;
  height: number;
};

export type SitePhotos = Record<PhotoSlot, SitePhoto | null>;

export const PHOTO_SLOTS: PhotoSlot[] = ["profile", "conference"];
export const PHOTO_ACCEPT = "image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp";
export const PHOTO_MAX_BYTES = 10 * 1024 * 1024;

export function readPhoto(value: unknown): SitePhoto | null {
  if (!value || typeof value !== "object") return null;
  const photo = value as Partial<SitePhoto>;

  if (typeof photo.src !== "string" || typeof photo.name !== "string") return null;

  const validDataUri = /^data:image\/(jpeg|png|webp);base64,/.test(photo.src);
  const validPublicPath = /^\/?(?:[A-Za-z0-9_\-./]+\.(?:png|jpg|jpeg|webp)|\/[A-Za-z0-9_\-./]+\.(?:png|jpg|jpeg|webp))$/i.test(photo.src);

  if (!validDataUri && !validPublicPath) return null;

  const width = typeof photo.width === "number" && Number.isFinite(photo.width) ? photo.width : 1200;
  const height = typeof photo.height === "number" && Number.isFinite(photo.height) ? photo.height : 1500;

  return { src: photo.src, name: photo.name, width, height };
}

export async function preparePhoto(file: File): Promise<SitePhoto> {
  const acceptedType = ["image/jpeg", "image/png", "image/webp"].includes(file.type);
  const acceptedExtension = !file.type && /\.(jpe?g|png|webp)$/i.test(file.name);

  if (!acceptedType && !acceptedExtension) {
    throw new Error("Choose a JPG, PNG or WebP photograph. Other file types are not supported.");
  }
  if (!file.size) throw new Error("This file is empty. Please choose a different photograph.");
  if (file.size > PHOTO_MAX_BYTES) {
    throw new Error("This photograph exceeds 10 MB. Please choose a smaller file.");
  }

  const url = URL.createObjectURL(file);
  const image = new Image();

  try {
    await new Promise<void>((resolve, reject) => {
      const timeout = window.setTimeout(() => {
        image.onload = null;
        image.onerror = null;
        reject(new Error("The photograph took too long to open. Please try a smaller file."));
      }, 20000);

      image.onload = () => {
        window.clearTimeout(timeout);
        resolve();
      };
      image.onerror = () => {
        window.clearTimeout(timeout);
        reject(new Error("This photograph could not be opened. Please export it as JPG or PNG and try again."));
      };
      image.src = url;
    });

    if (!image.naturalWidth || !image.naturalHeight) {
      throw new Error("This image has no readable dimensions. Please choose another photograph.");
    }

    // Keep small originals at their native size; reduce large uploads before storing.
    const scale = Math.min(1, 1600 / Math.max(image.naturalWidth, image.naturalHeight));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Image processing is unavailable in this browser. Please try another browser.");

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    let src = canvas.toDataURL("image/jpeg", 0.9);
    if (src.length > 1200000) src = canvas.toDataURL("image/jpeg", 0.74);
    if (!src.startsWith("data:image/jpeg;base64,")) {
      throw new Error("The photograph could not be processed. Please try another image.");
    }

    return { src, name: file.name, width: canvas.width, height: canvas.height };
  } finally {
    image.onload = null;
    image.onerror = null;
    URL.revokeObjectURL(url);
  }
}

export function downloadPhotoSettings(photos: SitePhotos): void {
  const blob = new Blob([JSON.stringify(photos, null, 2) + "\n"], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "photo-settings.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}