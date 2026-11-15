# Edward Bridger Badar — Portfolio

Personal portfolio website for Edward Bridger Badar, IT Support & Web Specialist.

Built with plain HTML, CSS, and JavaScript. No frameworks, no build step.

## Structure

- `index.html` — main page
- `case-studies/` — one page per case study (five pages)
- `cv.html` — printable CV, the source of the PDF
- `assets/css/style.css` — styles for the website
- `assets/css/cv.css` — styles for the CV page, including print rules
- `assets/js/main.js` — interactions: mobile menu, active nav link, fade-in, footer year
- `assets/images/` — profile photo and favicon
- `assets/documents/Edward_Bridger_Badar_CV.pdf` — the CV file behind the "Download CV" button

## Languages

The site exists in three languages. Each language is a full copy of the pages:

- English — the files in the project root (`index.html`, `cv.html`, `case-studies/`)
- Indonesian — the same files inside `id/`
- Simplified Chinese — the same files inside `zh/`

All three share the same `assets/` folder. Each has its own CV PDF:
`Edward_Bridger_Badar_CV.pdf`, `..._CV_ID.pdf`, and `..._CV_ZH.pdf`.

**Every content change must be made three times**, once per language.

## View locally

Open `index.html` in a browser.

## Common updates

**Add a job**

1. Add a `<li class="timeline-item">` to the Experience section of `index.html`.
2. Add a matching `<div class="job">` to `cv.html`.
3. Regenerate the PDF (see below).

**Add a project**

Copy one `<article class="card">` block in the Projects section of `index.html` and change its text and link.

**Change the navigation**

The header is repeated in `index.html` and in every file in `case-studies/`, in each of the three languages. Change all eighteen.

**Regenerate the CV PDF**

1. Open `cv.html` in Chrome or Edge and click "Print / Save as PDF".
2. Choose "Save as PDF", paper size A4, and turn off "Headers and footers".
3. Save over `assets/documents/Edward_Bridger_Badar_CV.pdf`.
