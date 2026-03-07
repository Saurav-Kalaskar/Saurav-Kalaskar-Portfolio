import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code2 } from 'lucide-react'

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="contact"
      ref={ref}
      className="section-panel bg-primary"
    >
      {/* Side labels */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:block">
        <span className="side-label text-cream/50">CONTACT</span>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block">
        <span className="side-label text-cream/50">GET IN TOUCH</span>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-16 py-20 md:py-32 flex flex-col justify-between min-h-screen">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-20"
        >
          <p className="font-display text-xs tracking-[0.3em] text-cream/60 mb-4">
            [ GET IN TOUCH ]
          </p>
          <h2
            className="hero-text text-cream"
            style={{ fontSize: 'clamp(56px, 12vw, 150px)', lineHeight: '0.9' }}
          >
            LET'S
            <br />
            CONNECT
          </h2>
        </motion.div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: Direct contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="font-display text-xs tracking-widest text-cream/50 mb-3">EMAIL</p>
              <a
                href="mailto:skalaska@asu.edu"
                className="flex items-center gap-3 text-cream text-sm hover:text-cream/70 transition-colors font-light"
              >
                <Mail size={14} className="text-cream/60" />
                skalaska@asu.edu
              </a>
            </div>

            <div>
              <p className="font-display text-xs tracking-widest text-cream/50 mb-3">PHONE</p>
              <a
                href="tel:6023996425"
                className="flex items-center gap-3 text-cream text-sm hover:text-cream/70 transition-colors font-light"
              >
                <Phone size={14} className="text-cream/60" />
                (602) 399-6425
              </a>
            </div>

            <div>
              <p className="font-display text-xs tracking-widest text-cream/50 mb-3">LOCATION</p>
              <div className="flex items-center gap-3 text-cream text-sm font-light">
                <MapPin size={14} className="text-cream/60" />
                Tempe, Arizona, 85288
              </div>
            </div>
          </motion.div>

          {/* Right: Social profiles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-4"
          >
            <p className="font-display text-xs tracking-widest text-cream/50 mb-4">
              SOCIAL PROFILES
            </p>

            <a
              href="https://github.com/Saurav-Kalaskar"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border border-cream/20 px-6 py-4 hover:border-cream/50 hover:bg-black/10 transition-all group"
            >
              <Github size={16} className="text-cream/60 group-hover:text-cream transition-colors" />
              <span className="font-display text-sm text-cream tracking-widest">GITHUB</span>
              <ExternalLink size={12} className="ml-auto text-cream/40 group-hover:text-cream/70 transition-colors" />
            </a>

            <a
              href="https://linkedin.com/in/saurav-kalaskar"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border border-cream/20 px-6 py-4 hover:border-cream/50 hover:bg-black/10 transition-all group"
            >
              <Linkedin size={16} className="text-cream/60 group-hover:text-cream transition-colors" />
              <span className="font-display text-sm text-cream tracking-widest">LINKEDIN</span>
              <ExternalLink size={12} className="ml-auto text-cream/40 group-hover:text-cream/70 transition-colors" />
            </a>

            <a
              href="https://leetcode.com/u/sauravkalaskar7/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border border-cream/20 px-6 py-4 hover:border-cream/50 hover:bg-black/10 transition-all group"
            >
              <Code2 size={16} className="text-cream/60 group-hover:text-cream transition-colors" />
              <span className="font-display text-sm text-cream tracking-widest">LEETCODE</span>
              <ExternalLink size={12} className="ml-auto text-cream/40 group-hover:text-cream/70 transition-colors" />
            </a>

            <a
              href="mailto:skalaska@asu.edu"
              className="flex items-center gap-3 border border-cream/20 px-6 py-4 hover:border-cream/50 hover:bg-black/10 transition-all group"
            >
              <Mail size={16} className="text-cream/60 group-hover:text-cream transition-colors" />
              <span className="font-display text-sm text-cream tracking-widest">EMAIL</span>
              <ExternalLink size={12} className="ml-auto text-cream/40 group-hover:text-cream/70 transition-colors" />
            </a>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-24 border-t border-cream/20 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <p className="font-display text-xs text-cream/40 tracking-widest">
            SAURAV SUNIL KALASKAR © 2026
          </p>
          <p className="font-display text-xs text-cream/40 tracking-widest">
            SOFTWARE ENGINEER · TEMPE, AZ
          </p>
          <p className="font-display text-xs text-cream/40 tracking-widest">
            MS-IT · ASU · GPA 4.0
          </p>
        </motion.div>
      </div>
    </section>
  )
}
