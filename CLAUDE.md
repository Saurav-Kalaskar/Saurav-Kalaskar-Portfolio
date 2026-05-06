# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with React + Vite + Tailwind CSS. Single-page application with scroll-based sections.

## Commands

```bash
npm run dev      # Start dev server (port 5173)
npm run build    # Production build
npm run preview  # Preview production build
```

## Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS with custom theme colors
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Architecture

### Component Structure

All components live in `src/components/`. App.jsx composes the page from section components:

- `Navbar` - Navigation with theme toggle
- `HeroSection` - Landing section
- `AboutSection` - Personal bio
- `ExperienceSection` - Work history
- `ProjectsSection` - Portfolio projects
- `SkillsSection` - Skills display
- `ResumeSection` - Resume download
- `ContactSection` - Contact form
- `CustomCursor` - Custom cursor overlay

### Theme System

Dark/light theme toggle. Toggle adds/removes `light-theme` class on `<html>`. CSS variables defined in `index.css`.

### Fonts

- Display: Bebas Neue (headings)
- Sans: Inter (body)

## Configuration Files

- `vite.config.js` - Vite config with React plugin, allows all hosts
- `tailwind.config.js` - Custom colors (background, foreground, primary, secondary, muted, accent, card, border, cream, red)
- `postcss.config.js` - PostCSS with Autoprefixer