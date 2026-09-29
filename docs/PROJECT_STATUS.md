# Portfolio Project Status

## Objective

Build a personal portfolio for a recent Computer Engineering / Computer Science graduate seeking a first software engineering position.

The portfolio should make it easy for recruiters and engineers to:

* understand who I am;
* inspect my technical projects;
* view my skills and education;
* download my CV;
* access GitHub and LinkedIn;
* contact me.

The portfolio should provide evidence of engineering ability rather than simply reproducing the CV as a webpage.

## Architecture decisions

Current direction:

* Next.js
* React
* TypeScript
* no standalone backend
* no database
* Vercel deployment

A backend should only be introduced later if a concrete requirement justifies it.

## Proposed site structure

Homepage:

1. Hero
2. About
3. Skills
4. Featured Projects
5. Education
6. Contact

Additional pages:

* `/projects/[slug]` for detailed project case studies.

The CV should be directly downloadable when it is ready.

## Project presentation

Projects should be treated as the central part of the portfolio.

Homepage project cards should contain, when the material is available:

* screenshot;
* title;
* concise description;
* technologies;
* GitHub link;
* optional live demo;
* link to project detail page.

Individual project pages should eventually cover relevant topics such as:

* overview;
* problem;
* architecture;
* technologies;
* implementation;
* screenshots/diagrams;
* technical challenges;
* lessons learned;
* GitHub repository;
* live demo when available.

## Visual direction

Current direction:

* minimal;
* professional;
* technical;
* modern;
* restrained.

Avoid excessive animation and decorative effects.

Version one uses a dark-only theme with a subtle purple accent. A light/dark toggle is deferred.

The approved visual foundation is documented in `docs/CONTENT_INVENTORY.md`: Geist Sans with sparing Geist Mono labels; an eight-color palette; a centered content container; responsive 24px/40px page padding; 72px/112px section spacing; 12px card rounding; subtle borders; and no heavy shadows.

## Not required for initial version

Do not currently build:

* standalone backend;
* database;
* authentication;
* admin interface;
* CMS;
* blog;
* newsletter;
* testimonials;
* complicated contact infrastructure.

## Current stage

The first-version content scope and visual foundation are defined in `docs/CONTENT_INVENTORY.md`.

Version one will feature Cristian Rotaru, a Software Engineer with experience in system administration and quality assurance. It will present the Intrusion Detection System as its sole project, without a repository link, demo, screenshot, diagram, or project detail page until those materials are available. GitHub, LinkedIn, and email will be included; the CV will be added when ready.

The repository is initialized as a minimal Next.js App Router project with TypeScript, ESLint, npm, and a `src/` directory. Its global styling foundation loads Geist Sans and Geist Mono, defines the approved CSS color and spacing tokens, establishes minimal base styles, and provides a centered page container. The homepage shell contains a header with in-page placeholder navigation, completed Hero, About, Skills, Featured Projects, Education, and Contact sections, and a minimal footer. The Hero presents the approved name, title, and introduction; the About section presents the approved experience, interest, and strengths; Skills presents approved core skills and Intrusion Detection System technologies without proficiency ratings; Featured Projects presents the Intrusion Detection System's approved purpose, value statement, and technologies without unavailable links or assets; Education presents the approved degrees; and Contact provides the approved GitHub, LinkedIn, and email links only. It contains no downloadable CV, contact form, theme toggle, or additional dependencies.

The site is deployed at `https://cristian-rotaru-software-engineer.vercel.app`. The source includes a production SEO foundation that defines one canonical site URL, a crawlable `robots.txt`, and a sitemap containing the homepage; Vercel will serve these routes after the SEO change is pushed and deployed. The root metadata also contains the Google Search Console verification token, which must remain in place after ownership is verified.

The incremental implementation plan is also defined in `docs/CONTENT_INVENTORY.md`. It keeps the site static and introduces components one section at a time.

## Next step

Push and deploy the Google Search Console verification token. After deployment, verify ownership in Search Console, submit the sitemap, and request indexing for the homepage.

After the site is verified in Search Console, monitor indexing before making further SEO changes.
