import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, Linkedin, Code2 } from 'lucide-react'

const stats = [
  { label: 'Current Role', value: 'SWE Intern' },
  { label: 'Company', value: 'Rocket Mortgage' },
  { label: 'GPA', value: '4.00 / 4.00' },
  { label: 'Experience', value: '2+ Years' },
  { label: 'Location', value: 'Tempe, AZ' },
  { label: 'Status', value: 'Open to Work' },
]

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="section-panel bg-background"
    >
      {/* Side labels */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:block">
        <span className="side-label">ABOUT</span>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block">
        <span className="side-label">BIODATA</span>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-16 py-20 md:py-32 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left: Name + bio */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-xs tracking-[0.3em] text-primary mb-6"
          >
            [ BIODATA ]
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="hero-text text-foreground mb-8"
            style={{ fontSize: 'clamp(48px, 8vw, 100px)' }}
          >
            SAURAV
            <br />
            KALASKAR
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-base text-muted-foreground leading-relaxed mb-6 font-light"
          >
            Saurav is a Software Engineer and MS Information Technology student at Arizona
            State University with a perfect 4.0 GPA. Currently interning at Rocket Mortgage,
            he builds full-stack platforms handling billions of mortgage transactions using
            microservices, cloud-native architectures, and modern frontend frameworks.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-base text-muted-foreground leading-relaxed mb-8 font-light"
          >
            Previously at Accenture, he developed enterprise-scale tools for 10,000+ employees
            across Asia Pacific. He is passionate about building impactful systems with Java,
            TypeScript, and cloud technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="flex gap-4 mt-8"
          >
            <a
              href="https://github.com/Saurav-Kalaskar"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-display text-xs text-foreground border border-border px-4 py-2.5 hover:bg-primary hover:border-primary hover:text-cream transition-all tracking-widest"
            >
              <Github size={12} /> GITHUB
            </a>
            <a
              href="https://linkedin.com/in/saurav-kalaskar"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-display text-xs text-foreground border border-border px-4 py-2.5 hover:bg-primary hover:border-primary hover:text-cream transition-all tracking-widest"
            >
              <Linkedin size={12} /> LINKEDIN
            </a>
            <a
              href="https://leetcode.com/saurav-kalaskar"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-display text-xs text-foreground border border-border px-4 py-2.5 hover:bg-primary hover:border-primary hover:text-cream transition-all tracking-widest"
            >
              <Code2 size={12} /> LEETCODE
            </a>
          </motion.div>
        </div>

        {/* Right: Stats grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="grid grid-cols-2 gap-px bg-border/30"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="bg-background p-6 hover:bg-muted/20 transition-colors"
            >
              <p className="font-display text-xs tracking-widest text-muted-foreground mb-2 uppercase">
                {stat.label}
              </p>
              <p className="font-display text-2xl text-foreground group-hover:text-primary transition-colors mt-2">
                {stat.value.toUpperCase()}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
