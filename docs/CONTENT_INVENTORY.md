# Portfolio Content Inventory

## Professional profile

* **Name:** Cristian Rotaru
* **Title:** Software Engineer
* **Goal:** Learn and help develop impactful products, while continuing to grow in software engineering and design.
* **Current strengths:** Networking and Linux.
* **Experience:**
  * Test Automation Engineer, July 2025 to December 2025
  * System Administrator, January 2026 to July 2026

## Education

* Bachelor's degree in Computer Engineering, Technical University of Cluj-Napoca, 2022 to 2026
* Master's degree in Computer Engineering, Technical University of Cluj-Napoca, 2026 to present

## Candidate projects

### Intrusion Detection System

* **Purpose:** A system for system administrators that detects traffic anomalies using both signatures and deviations from learned normal traffic.
* **Technologies:** Snort, Isolation Forest, Grafana, Floodlight, EVE-NG, Scapy, scikit-learn, Flask
* **Why feature it:** It aims to reduce Snort rule-configuration workload, centralize alert monitoring and Snort rule, health, and performance management, and detect behavior that may not match a configured signature rule.
* **GitHub repository:** https://github.com/cristirotaru1/hybrid-ids
* **Live demo:** Not specified
* **Diagrams/screenshots:** Not yet available

## Technologies to highlight

* Technologies demonstrated by the Intrusion Detection System
* Linux
* Networking
* Python
* Docker 
* Isolation Forest

## Contact and professional links

* **GitHub:** https://github.com/cristirotaru1
* **LinkedIn:** https://www.linkedin.com/in/cristian-rotaru-b49214178/
* **Email:** rotaru.io.cristian@gmail.com
* **Downloadable CV:** Availability not yet specified

## Visual direction

* Use a dark-only theme for version one. Defer a light/dark toggle.
* Use a subtle professional purple accent and a restrained, technical visual style.
* Use Geist Sans for primary typography and Geist Mono sparingly for technologies, dates, and small technical labels.
* Prioritize clear, readable, comfortable text and straightforward navigation.
* Use a centered content container, subtle borders, modest card rounding, and no heavy shadows.
* Reference for text structure only: https://stoicabogdanandrei.com/

### Approved visual tokens

| Role | Value |
| --- | --- |
| Page background | `#0D0B14` |
| Surface | `#171321` |
| Elevated surface | `#211A2D` |
| Primary text | `#F5F3FF` |
| Muted text | `#B8B2C2` |
| Purple accent | `#A78BFA` |
| Accent hover and focus | `#C4B5FD` |
| Border | `#30283D` |

### Approved spacing direction

* Page-side padding: 24px on mobile and 40px on desktop.
* Section spacing: 72px on mobile and 112px on desktop.
* Small-group gap: 16px; related content-block gap: 24px.
* Card border radius: 12px.

## Content gaps and future scope

* The initial inventory contains one candidate project.
* Future projects are intended to expand the portfolio toward four or five projects, particularly in software engineering with networking, machine learning, testing, or DevOps elements.
* Add the downloadable CV, the Intrusion Detection System's demo link, and project visuals when they are ready to be publicly shared.

## Approved first-version content scope

### Hero

* **Name:** Cristian Rotaru
* **Title:** Software Engineer
* **Introduction:** Software Engineer with experience in system administration and quality assurance, focused on building impactful products.

### About

* **System Administrator, Innovo Consulting** — Cluj-Napoca, onsite; January 2026 to July 2026. Supported the management of IoT sensors across the city, their data delivery, and internal servers and monitoring. This experience strengthened work with Linux virtual machines, containers, IoT devices, and system maintenance.
* **Test Automation Engineer, Frequentis** — Cluj-Napoca, hybrid; July 2025 to December 2025. Contributed to end-to-end and integration testing for a public safety application, focusing on a unit service and permissions. This provided practical experience using Jira, Git, and JBehave in a software testing workflow.
* State an interest in learning and helping develop impactful products.
* Highlight networking and Linux as current strengths, alongside an intention to grow in software engineering and design.

### Skills

* Linux
* Networking
* Python
* Docker
* Isolation Forest
* The technologies used in the Intrusion Detection System: Snort, Grafana, Floodlight, EVE-NG, Scapy, scikit-learn, and Flask

No proficiency ratings will be shown.

### Featured Projects

* Feature the Intrusion Detection System as the sole initial project.
* Explain its purpose and list relevant technologies.
* Link to the public GitHub repository.
* Do not show a live demo, screenshot, diagram, or project detail page until the relevant material is available.

### Education

* Bachelor's degree in Computer Engineering, Technical University of Cluj-Napoca, 2022 to 2026
* Master's degree in Computer Engineering, Technical University of Cluj-Napoca, 2026 to present

### Contact

* Link to GitHub, LinkedIn, and email.
* Do not offer a downloadable CV until it is ready.

## Incremental implementation plan

1. Initialize a minimal Next.js App Router project with TypeScript, ESLint, and a `src/` directory.
2. Establish global styling: font loading, the approved CSS design tokens, base styles, and a centered page container.
3. Build the homepage shell with semantic section landmarks, header navigation, and footer.
4. Build one homepage section at a time: Hero, About, Skills, Featured Projects, Education, then Contact.
5. Introduce one local TypeScript content module when static content is needed across more than one component or page.
6. Validate responsive layout, keyboard navigation, semantic heading structure, and external links.
7. Add project detail pages, a CV, visuals, a demo link, and a theme toggle only when their content is available.
