# Sonu Sir Class Website

## Current State
- Sonu Sir Class is a Bihar Board online learning platform.
- Subjects: Maths, Science, English, Hindi, Social Science (Classes 6–11).
- Admin can add/remove PDFs for any subject+class combination via the admin panel.
- PDFs are stored in the backend; students can download them.
- PDF viewer currently opens links externally (new tab/download).
- Service worker supports offline access.

## Requested Changes (Diff)

### Add
- A comprehensive static data file (`biharBoardData.ts`) with eVidyarthi Bihar Board study material links for all 5 subjects across Classes 6–11.
- An in-app content viewer (iframe-based overlay/modal) that opens study material from eVidyarthi inside the app instead of navigating away.
- The PDF section will now show both hardcoded eVidyarthi study materials AND any admin-added PDFs, under the same Subject → Class → Material structure.
- Each eVidyarthi entry will show as a "Read / Padhein" card (not Download); clicking opens the in-app iframe viewer.
- Fallback message if iframe is blocked, with option to open in new tab.

### Modify
- `SubjectPDFSection.tsx`: Display pre-populated eVidyarthi study materials (from static data) alongside backend-stored PDFs. Replace "Download" with "Padhein" for eVidyarthi links. Open in in-app iframe modal.
- Rename section heading from "PDF Download Section" to "Study Materials – Bihar Board".

### Remove
- Nothing removed.

## Implementation Plan
1. Create `src/frontend/src/data/biharBoardData.ts` with all eVidyarthi Bihar Board links for Maths, Science, English, Hindi, Social Science – Classes 6 to 11.
2. Create an `InAppViewer` component (iframe modal overlay) that loads a URL in-app with a close button.
3. Update `SubjectPDFSection.tsx` to:
   - Merge static eVidyarthi data with backend-stored PDFs.
   - Show all items with "Padhein" (eVidyarthi) or "Download" (admin PDFs) buttons.
   - On click of "Padhein", open `InAppViewer` with the eVidyarthi URL.
4. Validate and deploy.
