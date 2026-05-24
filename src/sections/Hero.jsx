import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

/* ── Project showcase data ── */
const projects = [
  {
    id: 1,
    name: 'KR Enterprises',
    type: 'Business Website',
    image: '/assets/img/portfolio/kr-enterprises.png',
    metric: '+150%',
    metricLabel: 'Lead Generation',
    desc: 'Construction company website — Chennai',
  },
  {
    id: 2,
    name: 'Preethi Motors',
    type: 'Business Website',
    image: '/assets/img/portfolio/preethi-motors.png',
    metric: '+200%',
    metricLabel: 'Property Leads',
    desc: 'Real estate & property website — Coimbatore',
  },
  {
    id: 3,
    name: 'KR Construction',
    type: 'Business Website',
    image: '/assets/img/portfolio/kr-construction.png',
    metric: '+180%',
    metricLabel: 'Client Inquiries',
    desc: 'Residential, commercial & industrial builds',
  },
  {
    id: 4,
    name: 'BrandEssence',
    type: 'Business Website',
    image: '/assets/img/portfolio/brandessence.png',
    metric: '+250%',
    metricLabel: 'Brand Reach',
    desc: 'Digital marketing agency — Chennai',
  },
  {
    id: 5,
    name: 'Urban Edge',
    type: 'E-Commerce Website',
    image: '/assets/img/portfolio/urban-edge.png',
    metric: '+180%',
    metricLabel: 'Online Sales',
    desc: 'Men\'s fashion e-commerce with full catalog & checkout',
  },
  {
    id: 6,
    name: 'Grace Boutique',
    type: 'E-Commerce Website',
    image: '/assets/img/portfolio/grace-boutique.png',
    metric: '+250%',
    metricLabel: 'Customer Reach',
    desc: 'Ethnic wear boutique with elegant brand identity',
  },
]

/* ── Typewriter captions ── */
const captions = [
  'Your Business Is Our Business.',
  'We Study Your Business First.',
  'Real Businesses. Real Growth.',
  'Not Just Design. Direction.',
  'யாவரும் கேளிர். Everyone Is Kin.',
]

/* ── Typewriter Hook ── */
function useTypewriter(words, typeSpeed = 80, deleteSpeed = 40, pauseMs = 2000) {
  const [display, setDisplay] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const word = words[wordIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCharIndex((prev) => prev + 1)
        setDisplay(word.slice(0, charIndex + 1))
        if (charIndex + 1 === word.length) {
          setTimeout(() => setIsDeleting(true), pauseMs)
        }
      } else {
        setCharIndex((prev) => prev - 1)
        setDisplay(word.slice(0, charIndex - 1))
        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
          setCharIndex(0)
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseMs])

  return display
}

/* ── Results Stats ── */
const stats = [
  { value: '35+', label: 'Projects Delivered' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: '3x', label: 'Avg. Business Growth' },
  { value: '24hr', label: 'Response Time' },
]

export default function Hero() {
  const typedText = useTypewriter(captions, 70, 35, 2200)

  const handleCta = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  /* duplicate for infinite scroll */
  const allProjects = [...projects, ...projects]

  return (
    <section id="hero" className="hero">
      {/* ── Floating Icons Background ── */}
      <div className="hero__floating-icons" aria-hidden="true">
        {[
          { icon: '</>', x: 5, y: 15, size: 28, delay: 0 },
          { icon: '{ }', x: 88, y: 10, size: 24, delay: 1.5 },
          { icon: '#', x: 15, y: 70, size: 32, delay: 3 },
          { icon: '⚙', x: 92, y: 65, size: 26, delay: 0.8 },
          { icon: '💻', x: 75, y: 20, size: 22, delay: 2.2 },
          { icon: '📱', x: 8, y: 45, size: 20, delay: 4 },
          { icon: '📊', x: 82, y: 80, size: 24, delay: 1 },
          { icon: '🎯', x: 25, y: 85, size: 22, delay: 2.8 },
          { icon: '📣', x: 50, y: 8, size: 20, delay: 3.5 },
          { icon: '✉', x: 70, y: 90, size: 22, delay: 0.5 },
          { icon: '❤', x: 35, y: 12, size: 18, delay: 4.5 },
          { icon: '📸', x: 60, y: 75, size: 20, delay: 2 },
          { icon: '🔗', x: 45, y: 88, size: 18, delay: 1.8 },
          { icon: '< />', x: 95, y: 40, size: 20, delay: 3.2 },
          { icon: '⟨⟩', x: 3, y: 90, size: 22, delay: 0.3 },
          { icon: '★', x: 55, y: 30, size: 16, delay: 5 },
        ].map((item, i) => (
          <span
            key={i}
            className="floating-icon"
            style={{
              '--fi-x': `${item.x}%`,
              '--fi-y': `${item.y}%`,
              '--fi-size': `${item.size}px`,
              '--fi-delay': `${item.delay}s`,
              '--fi-duration': `${6 + (i % 4) * 2}s`,
            }}
          >
            {item.icon}
          </span>
        ))}
      </div>

      {/* ── Top Content ── */}
      <div className="hero__top container">
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="badge-text">KAYLIR DIGITALS</span>
          <span className="badge-dot-pulse"></span>
          <span className="badge-tagline">யாவரும் கேளிர்</span>
        </motion.div>

        {/* Torch Typewriter */}
        <motion.div
          className="torch-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="torch-pill">
            {/* Red glow orb */}
            <div className="torch-glow">
              <div className="torch-glow__core"></div>
              <div className="torch-glow__ring"></div>
              <div className="torch-glow__particles">
                {[...Array(6)].map((_, i) => (
                  <span key={i} className="torch-particle" style={{ '--i': i }} />
                ))}
              </div>
            </div>
            {/* Text */}
            <div className="torch-text">
              <span className="torch-plus">+</span>
              <span className="torch-typed">{typedText}</span>
              <span className="torch-cursor">|</span>
            </div>
          </div>
        </motion.div>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          We study your business first. Then we build.
        </motion.p>
      </div>

      {/* ── Horizontal Scrolling Marquee ── */}
      <div className="hero__marquee-section">
        <div className="marquee-label container">
          <span className="marquee-label__text">OUR WORK</span>
          <span className="marquee-label__line"></span>
          <span className="marquee-label__arrow">→</span>
        </div>

        <div className="hero__marquee">
          <div className="marquee-track">
            {allProjects.map((project, idx) => (
              <div key={`${project.id}-${idx}`} className="marquee-card">
                <div className="marquee-card__image-wrap">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="marquee-card__image"
                    loading="lazy"
                  />
                  {/* Growth badge */}
                  <div className="marquee-card__metric">
                    <span className="metric-value">{project.metric}</span>
                    <span className="metric-label">{project.metricLabel}</span>
                  </div>
                </div>
                <div className="marquee-card__info">
                  <span className="marquee-card__type">{project.type}</span>
                  <h3 className="marquee-card__name">{project.name}</h3>
                  <p className="marquee-card__desc">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <motion.div
        className="hero__stats"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="hero__stats-inner container">
          {stats.map((stat, i) => (
            <div key={i} className="hero-stat">
              <span className="hero-stat__value">{stat.value}</span>
              <span className="hero-stat__label">{stat.label}</span>
            </div>
          ))}
          <div className="hero-stat hero-stat--cta">
            <button
              className="btn-primary"
              onClick={() => handleCta('#contact')}
            >
              Let's Talk <span>↗</span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
