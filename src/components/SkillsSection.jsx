import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCategories = [
  {
    category: 'LANGUAGES',
    skills: ['Java', 'C#', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    category: 'FRAMEWORKS',
    skills: ['Spring Boot', 'ASP.NET Core', 'NestJS', 'Angular', 'ReactJS', 'Next.js', 'D3.js', 'Flask', 'FastAPI'],
  },
  {
    category: 'CLOUD & DATA',
    skills: ['AWS', 'Azure', 'DynamoDB', 'PostgreSQL', 'MS SQL Server', 'Snowflake', 'Redis', 'MongoDB'],
  },
  {
    category: 'DEVOPS & TOOLS',
    skills: ['Docker', 'Amazon EKS', 'SQS', 'SNS', 'Kinesis', 'CloudWatch', 'Kafka', 'Terraform', 'CI/CD', 'Jenkins', 'Git'],
  },
  {
    category: 'ML & AI',
    skills: ['PyTorch', 'OpenCV', 'Pandas', 'AWS Bedrock', 'Generative AI', 'MCP Server'],
  },
]

const education = [
  {
    period: '2024 – 2026',
    school: 'ARIZONA STATE UNIVERSITY',
    degree: 'Master of Science in Information Technology',
    gpa: 'GPA: 4.00 / 4.00',
    highlight: true,
  },
  {
    period: '2018 – 2022',
    school: 'UNIVERSITY OF MUMBAI',
    degree: 'Bachelor of Engineering in Computer Engineering',
    gpa: 'GPA: 3.41 / 4.00',
    highlight: false,
  },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="skills"
      ref={ref}
      className="section-panel bg-background border-t border-border/30"
    >
      {/* Side labels */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:block">
        <span className="side-label">SKILLS</span>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block">
        <span className="side-label">TECH STACK</span>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-16 py-20 md:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="font-display text-xs tracking-[0.3em] text-primary mb-4">
            [ TECH STACK ]
          </p>
          <h2
            className="hero-text text-foreground"
            style={{ fontSize: 'clamp(56px, 10vw, 130px)' }}
          >
            SKILLS
          </h2>
        </motion.div>

        {/* Skill rows */}
        <div className="space-y-0">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
              className="border-t border-border/30 py-8 grid grid-cols-1 md:grid-cols-4 gap-6 items-start"
            >
              <div>
                <p className="font-display text-xs tracking-[0.2em] text-muted-foreground">
                  {cat.category}
                </p>
              </div>
              <div className="md:col-span-3 flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 + i * 0.1 + j * 0.03 }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border/30" />
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-px bg-border/40"
        >
          {education.map((edu) => (
            <div
              key={edu.school}
              className="bg-background p-8 hover:bg-muted/20 transition-colors"
            >
              <p
                className={`font-display text-xs tracking-widest mb-3 ${edu.highlight ? 'text-primary' : 'text-muted-foreground'
                  }`}
              >
                {edu.period}
              </p>
              <h3 className="font-display text-xl text-foreground mb-1">{edu.school}</h3>
              <p className="text-sm text-muted-foreground">{edu.degree}</p>
              <p
                className={`font-display text-xs mt-2 ${edu.highlight ? 'text-primary/80' : 'text-muted-foreground/60'
                  }`}
              >
                {edu.gpa}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
