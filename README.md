# Mind Well Psychiatry Specialists

Professional responsive website for the existing Mind Well Florida Sites project. Source identity is retained. External DNS and Squarespace settings are not modified.

## Website

Eight pages: Home, Services, Insurance & payment, About, Contact, Appointments, Website privacy information, and Careers. The home page contains interactive Facilities and Patients paths, service selectors, audience-specific FAQs, and a facility enquiry tool. The navigation and call-to-action labels are consistent across pages.

Dr. Gill's supplied photograph is included unchanged and appears only on About Us. Adnan's portraits are removed from the website assets; his text-only Practice Administration & Website Support details appear at the end of About Us. Original uploaded photographs are retained outside the website.

The supplied MW brain logo replaces the generic M mark in every page's header, footer, and favicon, and is used in the home branding cards. Website 1's navy-to-teal hero, gold calls to action, white cards, light teal sections, and dark footer inform the theme while the existing page structure and interactive paths are preserved.

The custom cursor image, animation code, and cursor stylesheet have been removed. Normal browser cursors are used. Review banners, trial wording, simulated card uploads, and fictitious appointment calendars have been removed.

## Fluid page layout

The restored eight-page design uses the available screen width with responsive 16–48 px edge spacing. Cards and content grids expand across desktop screens; contact cards use four columns on wide screens, privacy information uses a responsive two-column grid, and patient/profile layouts stack on mobile. Paragraph widths remain readable within their sections.

## Appointment and contact behavior

Visitors select a visit type and payment preference to prepare a general appointment enquiry. The email button opens the visitor’s own email application with that nonclinical message. The visitor chooses whether to send it. No website form submits patient data; no files, medical information, payments, or appointment reservations are collected. Facility enquiry outlines follow the same visitor-controlled email pattern.

Coverage must be verified by the practice and health plan. No insurer is represented as accepted. Contact email addresses are retained from the existing project.

Live secure intake, insurance-card uploads, and calendar reservations require the practice’s approved scheduling/intake service and actual availability. This site does not represent those services as connected.

## Verification

All eight pages passed content audits for leftover trial/demo text, local links and assets, unique IDs, single primary headings and main regions, viewport/description/indexing metadata, image integrity and dimensions, labels, and ARIA references. JavaScript syntax checks passed.

Automated DOM simulation of the actual scripts passed: both audience paths, keyboard tab controls, service selectors, patient CTA, facility enquiry email composition, inquiry dialogs, privacy modal, menus on all pages, and appointment enquiries for insurance, self-pay, and undecided payment preferences. Required choices and editing behavior passed. CSS blocks were checked and responsive layout rules retained.

Browser layout checks covered all eight pages in 320, 390, 768, 1440, and 1920 px frames with no horizontal overflow. The widened desktop home page and an unscaled mobile home page were visually inspected. Mobile menu opening and patient-path selection were checked in the browser. QA used the local Sites preview; the managed browser cannot reach deployed Sites URLs.

## Hosting

Buildless static assets are served from `dist/`. The tracked hosting manifest retains the original Sites project ID. Privacy is enforced through hosting access controls, with noindex/robots directives as supplementary measures.
