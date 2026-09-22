# Add Your Photographs

**No `public` folder is required.** Add photographs directly in the website
preview. You do not need to rename or move any image files.

## Upload And Map

1. Open the About section and click **Upload profile photo**. Select the
   close-up portrait previously shared in chat.
2. Open the conference photograph area in Facilities and click
   **Upload conference photo**. Select the photograph taken in front of
   the research poster. The profile upload also provides a shortcut here.
3. Each selected photograph immediately replaces its placeholder. The
   profile photo also updates the small portrait beside the professor's
   name in the navigation.

JPG, PNG and WebP files up to 10 MB are supported. You can also drag one
photograph onto its designated area. Uploading to one area never replaces
the other area's photograph. Both pictures retain their original aspect
ratios, including the vertical conference picture.

Large photographs are resized for the web without enlarging small originals.
The site checks file type, size and whether the image can be decoded. Use
**Change photo** to replace an image, or **Remove** to clear the local preview.

## Local Preview Versus Publication

Uploads are stored in this browser's local storage when available. They
remain after a refresh on the same site, but do not update other visitors'
browsers or write files into the source project. Clearing browser data will
remove local uploads. If storage is blocked or full, the photo remains visible
for the current visit and the site shows a warning.

The photographs previously attached in chat are not available as files in
the source project; select those same pictures once using the upload controls.

## Publish Without An Image Folder

1. Choose both photographs in the website preview.
2. Below either uploaded photo, open **Publish photos for all visitors**.
3. Click **Download photo settings**. The downloaded `photo-settings.json`
   contains both photographs as embedded image data, with their mappings.
4. Replace the existing `src/lib/photo-settings.json` with this downloaded file.
5. Rebuild and redeploy the website.

The build includes the image data, so neither a `public` folder nor a separate
image upload directory is necessary. The mappings are:

| Settings key | Website placement |
| --- | --- |
| `profile` | About portrait and navigation portrait |
| `conference` | Conference/poster-session photograph in Facilities |

Once a photograph is included in the source settings, its upload controls are
hidden on the public page. To preview replacements, open the site with
`?editPhotos=1#profile-photo` appended to its base URL. This enables local-only
editing, not an authenticated publishing service.

## Laboratory Equipment

The two personal photographs do not replace equipment schematics. Actual
laboratory photographs can be connected separately in
`src/components/EquipmentFigures.tsx`. Do not substitute unrelated stock
photography for the laboratory's equipment.
