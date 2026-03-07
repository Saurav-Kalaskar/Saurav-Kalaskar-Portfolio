import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    number: '01',
    company: 'ROCKET MORTGAGE',
    location: 'DETROIT, MI',
    period: 'May 2025 – Dec 2025',
    position: 'SOFTWARE ENGINEER INTERN',
    highlights: [
      'Built full-stack Mortgage Fee Setup with Angular 17, ASP.NET Core & NestJS microservices',
      'Led ECS-to-EKS migration with Terraform IaC — cut release downtime by 40%',
      'Refactored legacy subsystems, optimized Redis caching improving API response by 23%',
      'Modernized testing from Cypress to Playwright, achieved 95% platform coverage',
      'Integrated Auth0 SAML SSO, monitored via Splunk & AWS CloudWatch',
    ],
  },
  {
    number: '02',
    company: 'ACCENTURE SOLUTIONS',
    location: 'MUMBAI, INDIA',
    period: 'Oct 2022 – Jul 2024',
    position: 'SOFTWARE ENGINEER II',
    highlights: [
      'Built enterprise Questionnaire Management Tool with Angular + ASP.NET Core',
      'D3.js dashboards and Generative AI cards for 5,000+ employees — cut response time by 40%',
      'Optimized MS SQL Server for 10,000+ employee skills data across Asia Pacific',
      'Architected CI/CD pipelines on Azure DevOps with full API testing via Postman',
      'Promoted to SE II for high-impact Agile sprint executions and cost reduction',
    ],
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="experience"
      ref={ref}
      className="section-panel bg-background border-t border-border/30"
    >
      {/* Side labels */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:block">
        <span className="side-label">EXPERIENCE</span>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block">
        <span className="side-label">WORK HISTORY</span>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-16 py-20 md:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="font-display text-xs tracking-[0.3em] text-primary mb-4">
            [ WORK HISTORY ]
          </p>
          <h2
            className="hero-text text-foreground"
            style={{ fontSize: 'clamp(56px, 10vw, 130px)' }}
          >
            EXPERIENCE
          </h2>
        </motion.div>

        {/* Experience entries */}
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className="border-t border-border/30 py-12 grid grid-cols-1 md:grid-cols-12 gap-8"
            >
              {/* Left: Company info */}
              <div className="md:col-span-4">
                <p className="font-display text-6xl text-foreground/20 mb-4">{exp.number}</p>
                <h3 className="font-display text-2xl text-primary tracking-wide mb-1">
                  {exp.company}
                </h3>
                <p className="font-display text-xs text-muted-foreground tracking-widest mb-2">
                  {exp.location}
                </p>
                <p className="font-display text-xs text-muted-foreground/60 border border-border/30 inline-block px-2 py-1">
                  {exp.period}
                </p>
              </div>

              {/* Middle: Position */}
              <div className="md:col-span-3">
                <p className="font-display text-xs tracking-widest text-muted-foreground mb-3">
                  POSITION
                </p>
                <h4 className="font-display text-xl text-foreground tracking-wide">
                  {exp.position}
                </h4>
              </div>

              {/* Right: Key impact */}
              <div className="md:col-span-5">
                <p className="font-display text-xs tracking-widest text-muted-foreground mb-4">
                  KEY IMPACT
                </p>
                <ul className="space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                      <span className="text-primary mt-0.5 shrink-0">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border/30" />
        </div>
      </div>
    </section>
  )
}
