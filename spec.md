# Sonu Sir Class

## Current State
New project. No existing frontend or backend.

## Requested Changes (Diff)

### Add
- Educational tuition website for "Sonu Sir Class"
- Student registration form (Google Forms style): name, class/grade, subject, mobile number, parent name
- Form submission stored in backend
- Admin view to see all registered students
- Hero section with class name, tagline, and contact info
- Subjects offered section
- About/features section highlighting the coaching center
- Success message after form submission

### Modify
- None

### Remove
- None

## Implementation Plan

Backend:
- Student record type: name, class, subject, mobile, parentName, timestamp
- submitRegistration(name, class, subject, mobile, parentName) -> Result
- getRegistrations() -> [Student] (for admin view)

Frontend:
- Landing page with hero section: "Sonu Sir Class" title, tagline
- Subjects section: Maths, Science, English, Hindi, Social Science
- Student registration form with fields: full name, class (dropdown 1-12), subject, mobile, parent name
- Form validation and success confirmation
- Admin button (hidden/subtle) to view all registrations list
- Clean educational website design
