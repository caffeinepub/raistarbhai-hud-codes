# Sonu Sir Class

## Current State
Full-featured PWA with manifest.json, subject/class-wise PDF section, registration form, admin panel, and navbar. No service worker or offline caching exists yet.

## Requested Changes (Diff)

### Add
- `public/sw.js`: Service Worker that caches app shell on install and caches PDF URLs as they are opened (cache-then-network for PDFs, network-first for API calls, cache-first for static assets)
- Service worker registration in `main.tsx`
- Offline fallback UI state in SubjectPDFSection when network is unavailable

### Modify
- `main.tsx`: Register service worker after mount
- `SubjectPDFSection.tsx`: When PDF download is clicked, store PDF URL in a dedicated `pdf-cache` so it's accessible offline

### Remove
- Nothing

## Implementation Plan
1. Write `public/sw.js` with:
   - `CACHE_NAME` for app shell
   - `PDF_CACHE_NAME` for PDF files
   - `install` event: pre-cache app shell assets
   - `activate` event: delete old caches
   - `fetch` event: cache-first for static assets, cache-then-network for same-origin requests, passthrough for cross-origin non-PDF
   - Cache PDF fetch responses in `pdf-cache` when URL ends in `.pdf` or originates from PDF links
2. Register SW in `main.tsx` using `navigator.serviceWorker.register('/sw.js')`
3. In `SubjectPDFSection.tsx`, when student clicks Download, use `caches.open('pdf-cache')` to manually cache the PDF URL so it's available offline next time
