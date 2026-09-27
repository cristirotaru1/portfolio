export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="page-container">
          <nav className="site-navigation" aria-label="Primary navigation">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="page-container">
        <section id="hero" className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="hero-eyebrow">Software Engineer</p>
            <h1 id="hero-title">Cristian Rotaru</h1>
            <p className="hero-introduction">
              Software Engineer with experience in system administration and
              quality assurance, focused on building impactful products.
            </p>
          </div>
        </section>
        <section id="about" className="about" aria-labelledby="about-title">
          <div className="about-introduction">
            <h2 id="about-title">About</h2>
            <p>
              I am interested in learning and helping develop impactful
              products.
            </p>
            <p>
              My current strengths are networking and Linux, and I am
              continuing to grow in software engineering and design.
            </p>
          </div>

          <div className="about-experience">
            <h3>Experience</h3>
            <ol>
              <li>
                <article className="experience-entry">
                  <div>
                    <h4>System Administrator</h4>
                    <p className="experience-meta">
                      Innovo Consulting · Cluj-Napoca · Onsite
                    </p>
                  </div>
                  <p className="experience-meta">
                    <time dateTime="2026-01">January 2026</time> to{" "}
                    <time dateTime="2026-07">July 2026</time>
                  </p>
                  <p>
                    Supported the management of IoT sensors across the city,
                    their data delivery, as well as internal servers and
                    monitoring.
                  </p>
                  <p className="experience-learning">
                    The role strengthened my experience with Linux virtual
                    machines, containers, IoT devices, and system maintenance.
                  </p>
                </article>
              </li>
              <li>
                <article className="experience-entry">
                  <div>
                    <h4>Test Automation Engineer</h4>
                    <p className="experience-meta">
                      Frequentis · Cluj-Napoca · Hybrid
                    </p>
                  </div>
                  <p className="experience-meta">
                    <time dateTime="2025-07">July 2025</time> to{" "}
                    <time dateTime="2025-12">December 2025</time>
                  </p>
                  <p>
                    Contributed to end-to-end and integration testing for a
                    public safety application, focusing on a unit service and its
                    permissions.
                  </p>
                  <p className="experience-learning">
                    It gave me practical experience using Jira, Git, and
                    JBehave in a software testing workflow.
                  </p>
                </article>
              </li>
            </ol>
          </div>
        </section>
        <section id="skills" className="skills" aria-labelledby="skills-title">
          <h2 id="skills-title">Skills</h2>

          <div className="skills-groups">
            <div className="skills-group">
              <h3>Core skills</h3>
              <ul className="skills-list">
                <li>Linux</li>
                <li>Networking</li>
                <li>Python</li>
                <li>Docker</li>
              </ul>
            </div>

            <div className="skills-group">
              <h3>Intrusion Detection System technologies</h3>
              <ul className="skills-list">
                <li>Snort</li>
                <li>Isolation Forest</li>
                <li>Grafana</li>
                <li>Floodlight</li>
                <li>EVE-NG</li>
                <li>Scapy</li>
                <li>scikit-learn</li>
                <li>Flask</li>
              </ul>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="projects"
          aria-labelledby="projects-title"
        >
          <h2 id="projects-title">Featured Projects</h2>

          <article className="project-feature">
            <div className="project-content">
              <h3>Intrusion Detection System</h3>
              <p className="project-purpose">
                A system for system administrators that detects traffic
                anomalies using both signatures and deviations from learned
                normal traffic.
              </p>

              <div className="project-value">
                <h4>Why it matters</h4>
                <p>
                  It aims to reduce the work required to configure Snort,
                  centralize alert monitoring, rule management, and health and
                  performance visibility, and detect behavior that may not
                  match a configured signature rule.
                </p>
              </div>
            </div>

            <div className="project-technologies">
              <h4>Technologies</h4>
              <ul>
                <li>Snort</li>
                <li>Isolation Forest</li>
                <li>Grafana</li>
                <li>Floodlight</li>
                <li>EVE-NG</li>
                <li>Scapy</li>
                <li>scikit-learn</li>
                <li>Flask</li>
              </ul>
            </div>
          </article>
        </section>
        <section
          id="education"
          className="education"
          aria-labelledby="education-title"
        >
          <h2 id="education-title">Education</h2>

          <ol className="education-list">
            <li>
              <article className="education-entry">
                <div>
                  <h3>Bachelor&apos;s degree</h3>
                  <p className="education-program">Computer Engineering</p>
                  <p className="education-institution">
                    Technical University of Cluj-Napoca
                  </p>
                </div>
                <p className="education-dates">
                  <time dateTime="2022">2022</time> to{" "}
                  <time dateTime="2026">2026</time>
                </p>
              </article>
            </li>
            <li>
              <article className="education-entry">
                <div>
                  <h3>Master&apos;s degree</h3>
                  <p className="education-program">Computer Engineering</p>
                  <p className="education-institution">
                    Technical University of Cluj-Napoca
                  </p>
                </div>
                <p className="education-dates">
                  <time dateTime="2026">2026</time> to present
                </p>
              </article>
            </li>
          </ol>
        </section>
        <section
          id="contact"
          className="contact"
          aria-labelledby="contact-title"
        >
          <h2 id="contact-title">Contact</h2>

          <ul className="contact-list">
            <li>
              <a
                href="https://github.com/cristirotaru1"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile, opens in a new tab"
              >
                <span>GitHub</span>
                <span>github.com/cristirotaru1</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/cristian-rotaru-b49214178/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile, opens in a new tab"
              >
                <span>LinkedIn</span>
                <span>linkedin.com/in/cristian-rotaru-b49214178</span>
              </a>
            </li>
            <li>
              <a href="mailto:rotaru.io.cristian@gmail.com">
                <span>Email</span>
                <span>rotaru.io.cristian@gmail.com</span>
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-container" />
      </footer>
    </>
  );
}
