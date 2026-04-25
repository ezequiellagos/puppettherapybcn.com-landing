You are building a **production-ready landing page** for **Puppet Therapy School Barcelona / puppettherapybcn.com**.

The repository is currently empty.  
The site will be deployed as a **static website on GitHub Pages** using a **custom domain**: `puppettherapybcn.com`.

## Core technical constraints

- Use only **HTML + CSS + vanilla JavaScript**
- Do **not** use React, Vite, Astro, Next, Bootstrap, Tailwind, jQuery, or any framework
- Keep the site simple, static, lightweight, and GitHub Pages friendly
- Organize the project cleanly so it is easy to maintain
- All code must be production-oriented, not a prototype
- Everything must work correctly on desktop, tablet, and mobile
- Use semantic HTML, accessible markup, good contrast, and solid responsive behavior
- Use relative paths so the site works well in GitHub Pages deployment
- Create all files needed for the site from scratch

## General visual direction

The visual identity should feel:

- artistic
- elegant
- therapeutic
- editorial
- immersive
- modern but warm

Primary visual palette should be based on:

- black
- fuchsia / vivid pink
- complementary neutral tones only if needed

The uploaded assets already include logos and course images. Use those as the main visual material.

## Typography direction

Use a refined, elegant combination of web fonts that suits a therapeutic-artistic institution.

Suggested approach:

- one expressive/editorial font for headings or highlighted phrases
- one highly readable sans-serif for paragraphs, UI, cards, buttons, and metadata

Do not make the site feel corporate or generic.  
Do not overload with animations.  
The site should feel visual and artistic mainly through composition, typography, spacing, imagery, and contrast.

## Content language

The entire website must be in **English only**.

If source material from the PDF is in Spanish, translate/adapt it cleanly into natural English while preserving meaning.

## Main business goal

The main CTA should be:

- **Contact Us**

This CTA should appear clearly in the hero and again near the contact section.

## Site structure to build

Create a single-page landing page with these sections:

### 1. Top announcement bar
A narrow but visible full-width bar at the top with a message that the site is under construction.

Requirements:
- visible immediately on page load
- not too tall
- high contrast
- elegant, not childish
- clearly noticeable

Suggested text:
- “Website under construction — full program details coming soon.”
or a slightly more polished equivalent in English.

### 2. Hero section
The hero must be strong and visually rich.

Include:
- logo / identity
- site title
- a short intro
- main CTA button: **Contact Us**
- secondary CTA for exploring courses, if helpful
- possibility of using the uploaded video as a hero background or hero media block **only if it improves the result and performs well**

Important:
- Evaluate whether the uploaded video is suitable for the hero
- If using video, implement it in a lightweight way:
  - muted
  - autoplay
  - loop
  - playsinline
  - with a poster/fallback image
- If the video is too heavy or visually unsuitable, use a strong static hero image instead
- The final result must still look premium even if video is not used

### 3. Who We Are section
Build a polished section using the source material from the PDF.

It should communicate the institution’s identity and approach, including:
- independent project
- training and research in the therapeutic dimensions of animated forms
- NeuroPuppetry Method™
- embodied / relational / neuro-informed approach
- work since 2017
- over 500 students
- online programs in English and Spanish
- in-person experiences in Barcelona

Use the PDF content as the base source. 

This section should feel credible, thoughtful, and well written, not over-marketed.

### 4. Courses / Programs section
This is one of the most important sections.

Display the courses as **responsive cards**.  
Each card must contain:

- image
- course/program/workshop title
- short summary excerpt
- button: **View More**

When clicking **View More**, open a **modal** with fuller information.

The modal should include:
- title
- image
- full description
- important details if available
- CTA to contact

Make the cards visually polished and consistent.

Use the PDF as the source for the six main items:

1. 8th Training in person in Barcelona  
2. 17th Puppet Therapy Course Online, English version  
3. Diplomado Puppet Therapy Online, Spanish version  
4. Puppet Therapy School — annual in-person program in Barcelona  
5. Workshop: Things That Breathe  
6. Workshop: Puppet, Humor & Therapy 

### 5. Social / community section
Include the official links clearly and elegantly:

- Instagram: `https://www.instagram.com/munecoterapia/`
- YouTube: `https://www.youtube.com/@munecoterapiachile9474/featured`
- Email: `puppettherapybcn@gmail.com`

There are no additional social networks.

### 6. Contact section
This section must include:

- visible contact email
- embedded Google Form
- a contact-oriented heading
- a short inviting text

Important:
- do **not** create a traditional custom form
- the section must contain only the email and the embedded Google Form
- style the embed container so it integrates visually with the site

Use a clear placeholder or config point for the Google Form embed URL if not yet available.

### 7. Footer
Keep footer minimal and elegant.

Do **not** include:
- copyright
- privacy policy
- terms
- legal notice

For now, only include a very minimal footer treatment if visually needed.

## SEO requirements

Add basic on-page SEO based on the PDF content and the course descriptions.

Implement:
- page title
- meta description
- meta keywords if useful
- canonical
- Open Graph tags
- Twitter/X style social preview tags if appropriate
- favicon links if assets allow
- good heading hierarchy
- descriptive alt text
- structured and readable semantic content

The site is for:
- puppet therapy
- NeuroPuppetry Method™
- therapeutic animated forms
- courses and workshops in Barcelona and online
- embodied / trauma-informed / creative therapeutic training

Base text source comes from the PDF.  

## Assets handling

Use the uploaded assets thoughtfully:

- logos
- logos variations
- posters / postcards / workshop images
- video file

Decide which logo version works best in:
- navbar / header
- hero
- favicon or social preview if possible

Optimize visual hierarchy so the site does not feel cluttered.

## Accessibility and UX

Implement:

- keyboard-accessible modals
- close modal with ESC and overlay click
- focus management in modals
- visible focus styles
- alt text for all images
- reduced motion respect if any transitions are used
- responsive navigation if needed
- appropriate loading behavior for images/video

## Performance goals

Keep the site lightweight and GitHub Pages friendly.

Requirements:
- avoid unnecessary JS
- lazy-load non-critical images
- compress or account for large media where possible
- avoid layout shift
- use efficient CSS organization
- do not overbuild

## Files to create

Create the full structure, at minimum something like:

- `index.html`
- `styles.css`
- `script.js`
- `assets/...` for images/video if needed
- `TODO.md` or `IMPLEMENTATION_STATUS.md`

You may create subfolders if it improves organization.

## Required implementation status file

Create a markdown file named either:

- `TODO.md`
or
- `IMPLEMENTATION_STATUS.md`

This file is important.

It must include:
- all major tasks for the landing
- completed items marked with checkboxes
- pending items marked unchecked
- notes about anything blocked by missing context/assets
- final review checklist
- anything that still needs manual replacement, such as the Google Form embed URL if missing

Use it as a real working checklist for future iterations.

## Content requirements extracted from source material

Use the PDF as the source of truth for structure and text adaptation.

Key content themes that must appear in the site:
- therapeutic dimensions of animated forms
- NeuroPuppetry Method™
- training and research
- embodiment, somatic memory, regulation, resilience
- Barcelona + online formats
- workshops and annual/international programs
- message that the site is still under construction

Relevant source material is in the attached planning PDF.   

## Quality bar

The final result should feel like a polished artistic institution landing page, not a student project.

Avoid:
- generic templates
- weak spacing
- overly bright or childish styling
- fake content
- broken interactions
- poor mobile behavior

Aim for:
- strong visual composition
- clear messaging
- elegant typography
- well-integrated imagery
- clean responsive cards
- tasteful modal design
- coherent brand feel

## Final execution instructions

1. Inspect the available uploaded assets and choose the best visual system from them
2. Build the complete landing page
3. Make sure all links and interactions work
4. Make modals responsive and accessible
5. Decide whether the hero video is worth using; if not, use a strong static media treatment
6. Populate the implementation status markdown with completed and pending items
7. Leave the project in a state ready for deployment on GitHub Pages

If any final value is missing, do not stop.  
Use a clearly named placeholder and document it in the implementation status file.

---

## Additional note for the agent

The Google Form embed URL may not yet be available. If missing, create the contact section with a clearly labeled placeholder iframe/comment and document the exact replacement point in `TODO.md` or `IMPLEMENTATION_STATUS.md`.