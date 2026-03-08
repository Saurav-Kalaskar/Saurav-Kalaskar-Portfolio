import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Code2, FileText, ExternalLink, Sun, Moon } from 'lucide-react'

const RESUME_URL = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69ac96a72d809c1e6539e454/8ae2d856d_Saurav_Kalaskar_Resume.pdf'

const navSections = [
  { id: 'about', label: 'ABOUT' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'resume', label: 'RÉSUMÉ' },
  { id: 'contact', label: 'CONTACT' },
]

export default function Navbar({ menuOpen, setMenuOpen, theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      {/* Fixed top navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-8 py-4 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border/30' : 'bg-transparent'
          }`}
      >
        {/* Left: Menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-2 font-display text-sm text-foreground hover:text-primary transition-colors tracking-widest"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={16} /> : <Menu size={16} />}
          <span>MENU</span>
        </button>

        {/* Center: Desktop links (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {/* Initials / Home Link (Always visible) */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hero');
            }}
            className="font-display text-2xl font-bold text-foreground transition-all cursor-pointer mr-2 hover:text-primary hover:scale-105"
          >
            SK.
          </a>


          {navSections.map((section) => (
            section.id !== 'contact' && (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(section.id);
                }}
                className="nav-link font-display text-sm text-foreground hover:text-primary transition-colors tracking-widest cursor-pointer"
              >
                {section.label}
              </a>
            )
          ))}
        </div>

        {/* Right: Contact link and Theme Toggle */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-foreground hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('contact');
            }}
            className="nav-link font-display text-sm text-foreground hover:text-cream transition-colors tracking-widest cursor-pointer"
          >
            CONTACT
          </a>
        </div>
      </nav>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[99] bg-background/98 backdrop-blur-md flex flex-col"
          >
            {/* Close area at top */}
            <div className="h-16" />

            <div className="flex-1 flex flex-col md:flex-row">
              {/* Navigation links */}
              <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-8 gap-2">
                {navSections.map((section, i) => (
                  <motion.button
                    key={section.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                    onClick={() => scrollTo(section.id)}
                    className="text-left font-display text-foreground hover:text-primary transition-colors group flex items-center gap-4"
                    style={{ fontSize: 'clamp(32px, 6vw, 72px)' }}
                  >
                    <span className="text-muted-foreground text-sm font-sans">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {section.label}
                  </motion.button>
                ))}
              </div>

              {/* Right panel: links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="md:w-72 border-t md:border-t-0 md:border-l border-border/30 px-8 md:px-12 py-8 flex flex-col justify-end gap-6"
              >
                <div className="space-y-3">
                  <p className="font-display text-xs tracking-[0.3em] text-muted-foreground mb-4">
                    [ SOCIAL LINKS ]
                  </p>
                  <a
                    href="https://github.com/Saurav-Kalaskar"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 font-display text-sm text-foreground hover:text-primary transition-colors tracking-widest"
                  >
                    <Github size={14} /> GITHUB
                  </a>
                  <a
                    href="https://linkedin.com/in/saurav-kalaskar"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 font-display text-sm text-foreground hover:text-primary transition-colors tracking-widest"
                  >
                    <Linkedin size={14} /> LINKEDIN
                  </a>
                  <a
                    href="https://leetcode.com/saurav-kalaskar"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 font-display text-sm text-foreground hover:text-primary transition-colors tracking-widest"
                  >
                    <Code2 size={14} /> LEETCODE
                  </a>
                </div>

                <div className="space-y-3 border-t border-border/30 pt-6">
                  <p className="font-display text-xs tracking-[0.3em] text-muted-foreground mb-4">
                    [ RÉSUMÉ ]
                  </p>
                  <a
                    href={RESUME_URL}
                    download
                    className="flex items-center gap-3 font-display text-sm text-foreground hover:text-primary transition-colors tracking-widest"
                  >
                    <FileText size={14} /> DOWNLOAD RÉSUMÉ PDF · 2026
                  </a>
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 font-display text-sm text-foreground hover:text-primary transition-colors tracking-widest"
                  >
                    <ExternalLink size={14} /> VIEW IN BROWSER ↗
                  </a>
                </div>

                <div className="space-y-2 border-t border-border/30 pt-6">
                  <a
                    href="mailto:skalaska@asu.edu"
                    className="block font-display text-xs text-muted-foreground hover:text-foreground transition-colors tracking-widest"
                  >
                    skalaska@asu.edu
                  </a>
                  <a
                    href="tel:6023996425"
                    className="block font-display text-xs text-muted-foreground hover:text-foreground transition-colors tracking-widest"
                  >
                    (602) 399-6425
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
