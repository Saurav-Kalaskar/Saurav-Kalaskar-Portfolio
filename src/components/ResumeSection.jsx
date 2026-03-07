import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FileText, Download, ExternalLink } from 'lucide-react'

const RESUME_URL = '/Saurav_Kalaskar_Resume.pdf'

const resumeHighlights = [
  { label: 'MS Information Technology', sub: 'Arizona State University · GPA 4.0' },
  { label: 'Software Engineer Intern', sub: 'Rocket Mortgage · 2025' },
  { label: 'Software Engineer II', sub: 'Accenture · 2022–2024' },
  { label: '3 Published Projects', sub: 'RealStream · RocketMind · SpyPro' },
]

const resumeStack = [
  { label: 'STACK', value: 'Java · TypeScript · Python · C#' },
  { label: 'CLOUD', value: 'AWS · Azure · Docker · Kubernetes' },
  { label: 'FRONTEND', value: 'Angular · React · Next.js · D3.js' },
  { label: 'CONTACT', value: 'skalaska@asu.edu' },
]

export default function ResumeSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="resume"
      ref={ref}
      className="section-panel bg-background border-t border-border/30 relative"
    >
      {/* Side labels */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:block">
        <span className="side-label">RESUME</span>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block">
        <span className="side-label">DOWNLOAD CV</span>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-16 py-20 md:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-xs tracking-[0.3em] text-primary mb-4"
          >
            [ CURRICULUM VITAE ]
          </motion.p>
          <h2
            className="hero-text text-foreground"
            style={{ fontSize: 'clamp(56px, 10vw, 130px)' }}
          >
            RÉSUMÉ
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border/30">
          {/* Left: Document preview */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="border-r border-border/30 p-10 flex flex-col gap-0"
          >
            <div className="flex items-center gap-3 mb-8">
              <FileText size={16} className="text-primary" />
              <span className="font-display text-xs tracking-[0.2em] text-muted-foreground">
                DOCUMENT PREVIEW
              </span>
            </div>

            {/* File card */}
            <div className="border border-border/50 p-6 mb-8 hover:border-primary/40 transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="font-display text-lg text-foreground tracking-wide mb-1">
                    SAURAV_KALASKAR
                  </p>
                  <p className="font-display text-xs text-muted-foreground tracking-widest">
                    RESUME.PDF
                  </p>
                </div>
                <FileText size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <div className="space-y-3 mb-6">
                {resumeHighlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-primary text-xs mt-0.5">▸</span>
                    <div>
                      <p className="text-sm text-foreground font-light">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="font-display text-xs text-muted-foreground/50 tracking-widest">
                LAST UPDATED · MARCH 2026
              </p>
            </div>

            {/* Download buttons */}
            <div className="flex flex-col gap-3">
              <a
                href={RESUME_URL}
                download
                className="flex items-center justify-center gap-2 font-display text-xs text-foreground border border-border px-4 py-3 hover:bg-primary hover:border-primary hover:text-cream transition-all tracking-widest"
              >
                <Download size={12} /> DOWNLOAD RÉSUMÉ PDF · 2026
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 font-display text-xs text-muted-foreground border border-border/50 px-4 py-3 hover:border-primary hover:text-foreground transition-all tracking-widest"
              >
                <ExternalLink size={12} /> VIEW IN BROWSER ↗
              </a>
            </div>
          </motion.div>

          {/* Right: Summary */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="p-10 flex flex-col justify-between"
          >
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed font-light mb-8">
                A full-stack software engineer with production experience at Rocket Mortgage and
                Accenture, currently pursuing a Master's at Arizona State University. Specializes
                in microservices, cloud-native systems, and modern frontend engineering.
              </p>

              <div className="space-y-4">
                {resumeStack.map((item) => (
                  <div key={item.label} className="grid grid-cols-3 gap-4 border-t border-border/20 pt-4">
                    <p className="font-display text-xs tracking-widest text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="col-span-2 text-sm text-foreground font-light">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
