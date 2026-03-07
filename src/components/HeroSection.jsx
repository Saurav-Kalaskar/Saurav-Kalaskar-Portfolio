import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const PROFILE_IMAGE = '/IMG_3395.png'

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-15%'])

  return (
    <section
      id="hero"
      ref={ref}
      className="section-panel bg-primary flex flex-col justify-center items-center relative overflow-hidden h-screen"
    >
      {/* Side labels */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 hidden md:block">
        <span className="side-label text-cream/80">SOFTWARE ENGINEER</span>
      </div>
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 hidden md:block">
        <span className="side-label text-cream/80">ARIZONA STATE UNIVERSITY</span>
      </div>

      <div className="absolute top-8 left-8 md:top-12 md:left-12 text-cream/80 font-display text-xs tracking-[0.3em] z-20">
        01 / 04
      </div>
      <div className="absolute top-8 right-8 md:top-12 md:right-12 text-cream/80 font-display text-xs tracking-[0.3em] z-20">
        01 / 04
      </div>

      <motion.div
        style={{ opacity, y: contentY }}
        className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8 mt-12 md:mt-0 pointer-events-none"
      >
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-cream/90 tracking-[0.4em] text-xs md:text-sm mb-4 md:mb-8 z-30"
        >
          FULL STACK · AI · CLOUD
        </motion.p>

        <div className="relative w-full flex flex-col items-center justify-center">
          {/* SAURAV */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-text text-cream w-full text-center leading-[0.8]"
            style={{ fontSize: 'clamp(72px, min(18vw, 25vh), 260px)', position: 'relative', zIndex: 0 }}
          >
            SAURAV
          </motion.h1>

          {/* Profile photo */}
          <motion.div
            className="relative z-20 mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            style={{
              y,
              scale,
              marginTop: 'clamp(-60px, max(-10vw, -12vh), -120px)',
              marginBottom: 'clamp(-60px, max(-10vw, -12vh), -120px)'
            }}
          >
            <img
              src={PROFILE_IMAGE}
              alt="Saurav Kalaskar"
              className="w-full h-auto object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.5)] pointer-events-auto"
              style={{ height: 'clamp(280px, min(45vw, 50vh), 520px)' }}
            />
          </motion.div>

          {/* KALASKAR */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="hero-text text-cream w-full text-center leading-[0.8]"
            style={{ fontSize: 'clamp(72px, min(18vw, 25vh), 260px)', position: 'relative', zIndex: 0 }}
          >
            KALASKAR
          </motion.h1>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 w-full border-t border-cream/20 px-8 py-4 md:px-12 md:py-6 flex justify-between items-center z-30 bg-primary/90 backdrop-blur">
        <span className="font-display text-sm text-cream/60 tracking-widest hidden md:block">01 / 04</span>
        <span className="font-display text-sm text-cream/90 tracking-[0.3em]">SOFTWARE ENGINEER</span>
        <span className="font-display text-sm text-cream/60 tracking-widest hidden md:block">MS-IT · ASU · 4.0 GPA</span>
      </div>
    </section>
  )
}
