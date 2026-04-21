# Accredian Enterprise Landing Page

A responsive enterprise landing page built with **Next.js 14** and **React 18**, focused on presenting Accredian's enterprise training offering with a polished single-page experience, section-based navigation, and a working enquiry flow.

## Overview

This project recreates an enterprise-facing landing page with:

- a sticky navigation bar with active section highlighting
- a responsive hero section with refined image framing
- stats, client logos, domain expertise, audience, CAT framework, process, FAQ, and testimonials sections
- a reusable enquiry modal
- a mock API route for enquiry form submission

The implementation uses the **App Router** and keeps most UI content data-driven through a centralized content file.

## Tech Stack

- **Next.js 14**
- **React 18**
- **CSS** via `app/globals.css`
- **Next.js API Route** for mock enquiry submission

## Setup Instructions

### Prerequisites

- Node.js 18 or later
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

### Build for production

```bash
npm run build
npm run start
```

## Project Structure

```text
app/
  api/enquiry/route.js     Mock enquiry submission API
  globals.css              Global styling and responsive layout rules
  layout.js                Root layout
  page.js                  Landing page entry
  icon.svg                 App icon

components/
  enterprise-page.jsx      Main landing page UI
  contact-modal.jsx        Enquiry modal and form

lib/
  enterprise-data.js       Content and section data
```

## Approach Taken

The page was built as a **single-page enterprise microsite** with section anchors and a strong focus on reusable rendering.

### Implementation approach

- Kept page content centralized in `lib/enterprise-data.js` to make updates easier.
- Built the main landing experience in `components/enterprise-page.jsx`.
- Used reusable helpers like `Icon`, `SectionHeading`, and `NavLink` to reduce duplication.
- Added section-aware navigation so the active nav item updates while scrolling.
- Separated the enquiry modal into its own component for cleaner logic and easier maintenance.
- Added a mock API route so the form submission behaves like a real enquiry flow.
- Styled the page responsively in `app/globals.css` with desktop and mobile behavior handled in the same global system.

### Design and UX decisions

- Preserved a clean, enterprise-oriented visual style rather than over-designing the page.
- Refined the hero image presentation to avoid awkward crop issues and text overlap.
- Kept the CAT section in a simpler circular layout after comparing more complex alternatives and prioritizing clarity.
- Focused on readability, spacing, and section hierarchy so the page feels structured and easy to scan.

## AI Usage Explanation

AI was used as a **development assistant**, not as an unreviewed source of final output.

## Where AI Helped

- Helped scaffold the page structure and break the UI into reusable sections.
- Assisted with iteration on layout and styling ideas for the hero, FAQ, modal, and supporting sections.
- Helped speed up debugging when the local dev server entered a broken asset-loading state.
- Assisted in drafting and organizing submission documentation.

## What I Modified or Improved Manually

- Reviewed and refined the visual layout after generation rather than accepting the first pass.
- Adjusted the hero image framing to avoid face cropping and overlay issues.
- Repositioned hero metric badges so text no longer appeared on top of the subject image.
- Compared alternate CAT section designs and manually chose the clearer version.
- Verified local rendering and corrected implementation details through manual testing.
- Structured the final README to clearly separate AI assistance from manual work.

## Improvements I Would Make With More Time

- Replace external image URLs with optimized local assets or `next/image`.
- Add stronger form validation and better error-state UX.
- Add accessibility improvements such as enhanced focus states and more detailed keyboard/screen-reader testing.
- Add automated tests for navigation behavior, modal interaction, and API submission.
- Split global CSS into more maintainable section-level styling or CSS modules.
- Connect the enquiry form to a real backend, email service, or CRM.
- Add richer metadata, social preview tags, and stronger production SEO polish.

## Submission Notes

### AI contribution

AI helped with:

- scaffolding
- layout suggestions
- styling iteration support
- debugging support
- documentation drafting

### Manual contribution

I manually handled:

- UI cleanup and layout judgment
- responsive refinement
- hero image correction
- final component and styling decisions
- local verification and issue fixing
- final README structure and submission framing

## Available Scripts

- `npm run dev` - start the local development server
- `npm run build` - create a production build
- `npm run start` - run the production server

## Final Note

This submission is intended to show both implementation ability and practical judgment: using AI to move faster, while still reviewing, refining, and owning the final result manually.

