import { useEffect } from 'react'
import heroImg from '../assets/hero.png'
import './HomePage.css'

export default function HomePage() {
  useEffect(() => {
    document.documentElement.dataset.revealReady = 'true'
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (nodes.length === 0) return

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    if (reduceMotion) {
      for (const n of nodes) n.dataset.revealVisible = 'true'
      return
    }

    // Fallback: if IntersectionObserver doesn't fire for any reason (e.g. unusual scroll
    // containers), don't leave the page blank.
    const fallback = window.setTimeout(() => {
      for (const n of nodes) n.dataset.revealVisible = 'true'
    }, 1200)

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            ;(e.target as HTMLElement).dataset.revealVisible = 'true'
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
    )

    for (const n of nodes) io.observe(n)
    return () => {
      window.clearTimeout(fallback)
      io.disconnect()
    }
  }, [])

  return (
    <div className="page">
      <section className="home" id="top">
        <div className="homeInner">
          <div className="homeLeft">
            <div className="homeArtStage">
              <div className="homeGlow" aria-hidden="true" />
              <img
                className="homeArt"
                src={heroImg}
                alt="Developer illustration"
                width={380}
                height={380}
              />
            </div>
          </div>

          <div className="homeRight">
            <p className="homeKicker">Hi there! My name is</p>

            <h1 className="homeTitle">
              Shashwatha <br /> Karkera
            </h1>

            <ul className="homeChips" aria-label="Highlights">
              <li className="homeChip">Java · Spring Boot</li>
              <li className="homeChip">React · TypeScript</li>
              <li className="homeChip">C, C++</li>
              <li className="homeChip">Python</li>
              <li className="homeChip">AWS (EC2, S3, IAM, RDS, CloudWatch, VPC, Lambda)</li>
              <li className="homeChip">MySQL, MongoDB, SQL, DynamoDB</li>
            </ul>

            <h2 className="homeRole">Full-stack engineer building reliable, high-performance systems.</h2>

            <p className="homeBio">
              I’m a full stack developer with 3 Years of experience designing and building
              end-to-end systems at JP Morgan Chase & Co, from frontend interfaces to backend services
              and databases. I enjoy tackling complex problems, optimizing
              performance, and writing clean, maintainable code.
            </p>

            <div className="homeSocial" aria-label="Social links">
              <a
                className="homeSocialLink"
                href="https://github.com/shashwatha411"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="homeIcon" role="img" aria-label="GitHub">
                  <use href="/icons.svg#github-icon" />
                </svg>
                GitHub
              </a>

              <a
                className="homeSocialLink"
                href="https://www.linkedin.com/in/shashwatha/"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="homeIcon" role="img" aria-label="LinkedIn">
                  <use href="/icons.svg#social-icon" />
                </svg>
                LinkedIn
              </a>

              <a
                className="homeSocialLink"
                href="https://leetcode.com/u/shashwatha_karkera/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="homeIcon"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="LeetCode"
                >
                  <path
                    fill="currentColor"
                    d="M13.83 3.55a1 1 0 0 1 0 1.41L7.8 11h8.2a1 1 0 1 1 0 2H7.8l6.03 6.04a1 1 0 0 1-1.41 1.41l-7.74-7.74a1 1 0 0 1 0-1.41l7.74-7.75a1 1 0 0 1 1.41 0ZM19 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Z"
                  />
                </svg>
                LeetCode
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="experience" data-reveal>
        <div className="sectionInner">
          <header className="sectionHead">
            <h2 className="sectionTitle">Experience</h2>
          </header>

          <div className="timeline">
            <div className="role" data-reveal style={{ transitionDelay: '40ms' }}>
              <div className="roleTop">
                <h3 className="roleTitle">JP Morgan Chase & Co</h3>
                <span className="roleWhen">August 2023 - Current</span>
              </div>
              <p className="roleStack">
                <em>Tech: React, TypeScript, Java, Spring Boot, PostgreSQL, Oracle MySql, AWS</em>
              </p>
              <ul className="roleDesc">
                <li>
                  Owned and developed end-to-end features across the stack,
                  including UI, backend services, and database integration.
                </li>
                <li>
                  Stabilized a bug-prone codebase by identifying and resolving
                  critical issues, improving system reliability.
                </li>
                <li>
                  Collaborated with team members and stakeholders to improve
                  processes and maintainability while supporting CI/CD-based
                  deployments.
                </li>
              </ul>
            </div>

            <div className="role" data-reveal style={{ transitionDelay: '90ms' }}>
              <div className="roleTop">
                <h3 className="roleTitle">JP Morgan Chase & Co - Summer Internship</h3>
                <span className="roleWhen">May 2022 - July 2022</span>
              </div>
              <p className="roleStack">
                <em>Tech: Figma, Java, React</em>
              </p>
              <ul className="roleDesc">
                <li>
                  Built and improved full stack features across a production
                  system, contributing to UI, backend APIs, and database logic.
                </li>
                <li>
                  Debugged and stabilized an existing codebase by resolving
                  critical issues, improving overall reliability.
                </li>
                <li>
                  Collaborated with the team and stakeholders and contributed to
                  CI/CD-based deployment processes.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="projects" data-reveal>
        <div className="sectionInner">
          <header className="sectionHead">
            <h2 className="sectionTitle">Projects</h2>
          </header>

          <div className="cards">
            <article className="card" data-reveal style={{ transitionDelay: '40ms' }}>
              <div className="cardTop">
                <h3 className="cardTitle">College Admission Predictor</h3>
                <a
                  className="cardLink"
                  href="https://github.com/shashwatha411/TEAM-NEWBEES"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open College Admission Predictor"
                >
                  Open
                </a>
              </div>
              <p className="cardBody">
                Designed and developed a full stack web app with authentication,
                backend logic, and a clean UI to predict college admissions based
                on rank data.
              </p>
              <div className="cardMeta">HTML5 · JavaScript · CSS · PHP</div>
            </article>

            <article className="card" data-reveal style={{ transitionDelay: '90ms' }}>
              <div className="cardTop">
                <h3 className="cardTitle">Unveiling the Art of Music Generation</h3>
                <a
                  className="cardLink"
                  href="https://link.springer.com/chapter/10.1007/978-981-97-2611-0_9"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Unveiling the Art of Music Generation"
                >
                  Open
                </a>
              </div>
              <p className="cardBody">
                Built Python-based data pipelines and ran compute-intensive
                workloads for music generation research.Published in Springer
                Conference Proceedings (2023).
              </p>
              <div className="cardMeta">Python · ML · Data Pipelines</div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="education" data-reveal>
        <div className="sectionInner">
          <header className="sectionHead">
            <h2 className="sectionTitle">Education</h2>
          </header>

          <div className="cards">
            <article className="card" data-reveal style={{ transitionDelay: '40ms' }}>
              <div className="cardTop">
                <h3 className="cardTitle">B.Tech, Computer Science & Engineering</h3>
                <span className="cardLink cardLinkDisabled" aria-hidden="true">
                  Details
                </span>
              </div>
              <p className="cardBody">
                Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat,
                Gujarat, India.
              </p>
              <div className="cardMeta">May 2023 · CGPA: 8.13</div>
            </article>
            <article className="card" data-reveal style={{ transitionDelay: '40ms' }}>
                          <div className="cardTop">
                            <h3 className="cardTitle">Pearson Edexcel International Advanced Level & IGCSE</h3>
                            <span className="cardLink cardLinkDisabled" aria-hidden="true">
                              Details
                            </span>
                          </div>
                          <p className="cardBody">
                            Oshwal Academy Nairobi
                          </p>
                           <div className="cardMeta">June 2019 - IAL - 1A*2A1B, June 2017 - IGCSE -7A*3A</div>
                        </article>
          </div>
        </div>
      </section>

      <section className="section" id="certifications" data-reveal>
        <div className="sectionInner">
          <header className="sectionHead">
            <h2 className="sectionTitle">Certifications</h2>
          </header>

          <div className="cards">
            <article className="card" data-reveal style={{ transitionDelay: '40ms' }}>
              <div className="cardTop">
                <h3 className="cardTitle">AWS Cloud Practitioner</h3>
                <a
                  className="cardLink"
                  href="https://www.credly.com/badges/148a16b1-3af0-4097-855f-bb1a5c963e0c"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open certification"
                >
                  Verify
                </a>
              </div>
              <p className="cardBody">
               Issued by Amazon Web Services.
              </p>
            </article>

            <article className="card" data-reveal style={{ transitionDelay: '90ms' }}>
              <div className="cardTop">
                <h3 className="cardTitle">Fundamentals of User Experience(UX) Design Google </h3>
                <a
                  className="cardLink"
                  href="https://www.coursera.org/account/accomplishments/verify/XDDLZWCRK8QR?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open certification"
                >
                  Verify
                </a>
              </div>
              <p className="cardBody">
              Issued by Google.
              </p>
              <div className="cardMeta">Year</div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="resume" data-reveal>
        <div className="sectionInner">
          <header className="sectionHead">
            <h2 className="sectionTitle">Resume</h2>
          </header>

          <a className="primaryBtn" href="/resume.pdf" target="_blank" rel="noreferrer">
            Open resume
          </a>
        </div>
      </section>
    </div>
  )
}
