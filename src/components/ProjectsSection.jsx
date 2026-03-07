import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X, Link } from 'lucide-react'

// Extended project details for modal
const projectDetails = {
  REALSTREAM: {
    images: [
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80',
    ],
    extended: `RealStream is a production-grade short-video streaming platform built with a polyglot microservices architecture. The platform ingests content through a dedicated Python FastAPI scraper service that interfaces with the YouTube Data API v3, normalizing metadata and storing it across dual databases — PostgreSQL for relational data (users, playlists, follows) and MongoDB for flexible video metadata.

The frontend is built on Next.js 19 with the new App Router, leveraging React Server Components for near-instant initial loads and edge-cached API routes. Authentication uses Google OAuth2 with stateless JWT tokens, enabling horizontal scaling without session stores.

Docker Compose orchestrates the entire stack locally, with each microservice independently deployable. The video feed algorithm ranks content by engagement score — a weighted function of views, likes, and watch-time — updated on a scheduled cron job.`,
  },
  ROCKETMIND: {
    images: [
      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
      'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80',
    ],
    extended: `RocketMind is an AI-powered code analysis platform developed during the Rocket Mortgage internal hackathon. It integrates AWS Bedrock's latest LLMs through a custom Model Context Protocol (MCP) server — enabling structured, tool-augmented reasoning over private codebases.

The system authenticates 550+ private GitHub repositories through Auth0 SSO with fine-grained AWS IAM permissions, ensuring every code query is scoped to the authenticated user's access level. The Angular frontend streams LLM responses token-by-token via Server-Sent Events for a real-time chat feel.

RocketMind was the only intern-led project to reach the Rocket Mortgage Hackathon finals, recognized for its practical security model and measurable developer productivity improvements during code review cycles.`,
  },
  SPYPRO: {
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
      'https://images.unsplash.com/photo-1604076913837-52ab5629fde9?w=800&q=80',
    ],
    extended: `SpyPro is a real-time precision tracking system that achieves floor-level indoor accuracy by combining GPS coordinates with a custom LRU-cached floor estimation algorithm. The 3D visualization layer uses Mapbox GL JS's 3D Buildings API to render live position updates directly on photorealistic building models.

The bidirectional communication layer is built on Socket.IO over Node.js/Express, enabling sub-100ms location updates. The floor estimation logic caches known building footprints and uses altitude + signal triangulation to determine the vertical position within a structure.

The application is deployed on Render with automatic deploys from the main branch, and the live demo supports multi-device tracking sessions simultaneously.`,
  },
}

const projects = [
  {
    number: '01',
    title: 'REALSTREAM',
    subtitle: 'Short Video Streaming Platform',
    date: 'February 2026',
    tech: ['Java Spring Boot', 'Python FastAPI', 'Next.js 19', 'PostgreSQL', 'MongoDB', 'Docker', 'OAuth2', 'JWT'],
    description:
      'A full-stack TikTok-style short video platform using polyglot microservices — Java Spring Boot and Python FastAPI scraper services — with Google OAuth2, stateless JWT, and YouTube Data API v3 ingestion.',
    link: 'https://github.com/Saurav-Kalaskar/',
    live: 'https://realstream.site',
  },
  {
    number: '02',
    title: 'ROCKETMIND',
    subtitle: 'AI Repository Analysis Tool',
    date: 'June 2025',
    tech: ['AWS Bedrock LLM', 'MCP Server', 'Angular', 'FastAPI', 'Auth0 SSO', 'AWS IAM'],
    description:
      'AI-powered code analysis platform with AWS Bedrock LLM through custom MCP server. Secured 550+ private GitHub repos using Auth0 SSO. Only intern-led team to reach Rocket Mortgage Hackathon finals.',
    link: 'https://github.com/Saurav-Kalaskar/',
  },
  {
    number: '03',
    title: 'SPYPRO',
    subtitle: 'Precision Location Tracking in 3D Space',
    date: 'March 2025',
    tech: ['Vite', 'Mapbox GL JS', 'Socket.IO', 'Node.js', 'Express', 'WebSocket', 'GPS'],
    description:
      'Real-time 3D tracking system with floor-level accuracy using Mapbox GL JS 3D API and Socket.IO for bidirectional WebSocket. LRU-cached floor estimation algorithm for precise indoor positioning.',
    link: 'https://github.com/Saurav-Kalaskar/',
    live: 'https://spypro-lc88.onrender.com',
  },
]

// Individual project row
function ProjectRow({ project, index, onOpen }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [30 * (index + 1), -20 * (index + 1)])

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-cream/20 py-10 grid grid-cols-1 md:grid-cols-12 gap-8 group hover:bg-black/10 transition-colors px-0 md:px-4 md:-mx-4 cursor-pointer"
      onClick={() => onOpen(project)}
    >
      {/* Col 1: Number + title */}
      <div className="md:col-span-4">
        <p className="font-display text-6xl text-cream/20 group-hover:text-cream/30 transition-colors mb-4">
          {project.number}
        </p>
        <h3 className="font-display text-3xl text-cream tracking-wide mb-1 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="font-display text-xs text-cream/60 tracking-widest mb-2">
          {project.subtitle.toUpperCase()}
        </p>
        <p className="font-display text-xs text-cream/40 border border-cream/20 inline-block px-2 py-1">
          {project.date}
        </p>
      </div>

      {/* Col 2: Tech stack */}
      <div className="md:col-span-3">
        <p className="font-display text-xs tracking-widest text-cream/50 mb-3">TECH STACK</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs text-cream/70 border border-cream/20 px-2 py-1 font-sans"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Col 3: Description */}
      <div className="md:col-span-5">
        <p className="font-display text-xs tracking-widest text-cream/50 mb-3">DESCRIPTION</p>
        <p className="text-xs text-cream/70 leading-relaxed mb-4">{project.description}</p>
        <span className="flex items-center gap-1 font-display text-xs text-cream/60 group-hover:text-cream transition-colors">
          <Link size={10} /> CLICK TO EXPLORE →
        </span>
      </div>
    </motion.div>
  )
}

// Project detail modal
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const details = projectDetails[project.title] || {}
  const images = details.images || []

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ type: 'spring', stiffness: 280, damping: 32 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-card w-full md:w-[700px] md:max-w-[90vw] h-[90vh] md:h-[88vh] flex flex-col overflow-hidden border border-border md:ml-auto"
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-border/50 shrink-0">
          <div>
            <p className="font-display text-xs tracking-[0.3em] text-primary mb-1">
              {project.number} / SELECTED WORK
            </p>
            <h2 className="font-display text-3xl text-foreground tracking-wide">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal body */}
        <div className="flex-1 overflow-y-auto">
          {/* Images */}
          {images.length > 0 && (
            <div className="flex gap-2 p-4 overflow-x-auto shrink-0">
              {images.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="shrink-0 w-56 h-36 overflow-hidden border border-border/40"
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </motion.div>
              ))}
            </div>
          )}

          <div className="px-8 py-6 space-y-8">
            {/* Subtitle + date */}
            <div className="flex items-center gap-4">
              <span className="font-display text-sm text-muted-foreground tracking-widest">
                {project.subtitle.toUpperCase()}
              </span>
              <span className="font-display text-xs text-primary/80 border border-primary/30 px-2 py-0.5">
                {project.date}
              </span>
            </div>

            {/* Overview */}
            <div>
              <p className="font-display text-xs tracking-widest text-muted-foreground mb-4">
                [ OVERVIEW ]
              </p>
              <div className="space-y-4">
                {(details.extended || project.description)
                  .split('\n\n')
                  .map((para, i) => (
                    <p key={i} className="text-sm text-muted-foreground leading-relaxed font-light">
                      {para}
                    </p>
                  ))}
              </div>
            </div>

            {/* Tech stack */}
            <div>
              <p className="font-display text-xs tracking-widest text-muted-foreground mb-4">
                [ TECH STACK ]
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="skill-tag text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <p className="font-display text-xs tracking-widest text-muted-foreground mb-4">
                [ LINKS ]
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 font-display text-xs text-foreground border border-border px-4 py-2.5 hover:bg-primary hover:border-primary hover:text-cream transition-all"
                >
                  <Github size={12} /> VIEW SOURCE
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 font-display text-xs text-foreground border border-border px-4 py-2.5 hover:border-primary transition-all"
                  >
                    <ExternalLink size={12} /> LIVE DEMO
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className="section-panel bg-primary"
      >
        {/* Side labels */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:block">
          <span className="side-label text-cream/50">PROJECTS</span>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block">
          <span className="side-label text-cream/50">SELECTED WORK</span>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-16 py-20 md:py-32">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="mb-16"
          >
            <p className="font-display text-xs tracking-[0.3em] text-cream/60 mb-4">
              [ SELECTED WORK ]
            </p>
            <h2
              className="hero-text text-cream"
              style={{ fontSize: 'clamp(56px, 10vw, 130px)' }}
            >
              PROJECTS
            </h2>
          </motion.div>

          {/* Project rows */}
          <div className="space-y-0">
            {projects.map((project, i) => (
              <ProjectRow
                key={project.title}
                project={project}
                index={i}
                onOpen={setSelectedProject}
              />
            ))}
            <div className="border-t border-cream/20" />
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
