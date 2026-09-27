# Personal Portfolio

This repository contains my personal software engineering portfolio.

The primary purpose of the site is to help me obtain my first software engineering position after graduating in Computer Engineering / Computer Science.

The portfolio should demonstrate my engineering ability through projects rather than trying to compensate for lack of professional experience with unnecessary complexity.

## Technology direction

Use:

* TypeScript;
* Next.js;
* React.

Do not create a separate backend unless a real requirement eventually makes one necessary.

Do not introduce a database unless the application develops a genuine persistence requirement.

Prefer static/local project data when that is sufficient.

The initial deployment target is Vercel.

## Architecture philosophy

Keep the architecture deliberately simple.

This is primarily a portfolio website, not a demonstration of how many technologies can be combined.

Avoid:

* microservices;
* unnecessary API layers;
* authentication;
* admin panels;
* databases;
* CMS infrastructure

unless future requirements clearly justify them.

## Initial product structure

The homepage is expected to contain:

* Hero
* About
* Skills
* Featured Projects
* Education
* Contact

The site should also provide:

* downloadable CV;
* GitHub link;
* LinkedIn link;
* email/contact information;
* responsive mobile layout;
* individual pages for important projects.

Expected project URLs may look like:

/projects/<project-slug>

## Projects

Projects are the most important part of the portfolio.

A project should communicate more than its technology list.

Where appropriate, project pages should explain:

* the problem;
* what I built;
* architecture;
* technologies;
* important implementation decisions;
* technical challenges;
* what I learned;
* source code;
* live demo when available.

Do not invent project facts that have not been provided.

## Visual direction

The design should be:

* clean;
* professional;
* modern;
* technical;
* restrained.

Avoid visual gimmicks that distract from the engineering content, including excessive animation, particles, unnecessary 3D effects, or skill-percentage indicators. And also avoid putting emojies or characters that aren't on a general keyboard, for example longer | or -.

The site should have strong typography, spacing, hierarchy, responsive design, and accessibility.

Exact colors, fonts, and theme have not been finalized yet.

## Current project state

Before proposing substantial new work, read:

docs/PROJECT_STATUS.md

Use it to understand:

* completed work;
* current decisions;
* unresolved decisions;
* current next step.

Update it after meaningful project milestones when its contents have become outdated.

Do not turn PROJECT_STATUS.md into a detailed activity log.
