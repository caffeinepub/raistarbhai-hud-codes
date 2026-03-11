# Sonu Sir Class Website

## Current State
- Subject-wise PDF section exists but is flat: Subject → Chapter → PDF
- Admin panel allows adding PDFs with subject + chapter name + URL
- Subjects include: Mathematics, Science, English, Hindi, Social Science, Computer
- Backend PdfChapter model has: subject, chapterName, pdfUrl (no class field)
- PDFs stored in localStorage (not backend)

## Requested Changes (Diff)

### Add
- Class field (Class 6 to Class 11) to PDF model
- Class selection in admin panel PDF form
- Class-wise navigation in SubjectPDFSection (Subject → Class → PDF)

### Modify
- PDF structure: Subject → Class → PDF (was Subject → Chapter → PDF)
- Backend PdfChapter: add `className` field
- SubjectPDFSection: show class selector after subject selection
- AdminPanel: add class dropdown in PDF add form, show class in PDF list
- Remove "Computer" from subjects list in both SubjectPDFSection and AdminPanel

### Remove
- Computer subject from all subject lists
- Default/placeholder chapters (show empty state if no PDFs)

## Implementation Plan
1. Update backend PdfChapter type to include `className` field
2. Update addPdfChapter function to accept className
3. Update getChaptersBySubject to also filter by class
4. Add new query: getChaptersBySubjectAndClass
5. Update SubjectPDFSection: Subject cards → click → class tabs (6-11) → PDF list
6. Update AdminPanel: add class Select in PDF form, display class in PDF list
7. Remove Computer from all subject arrays
