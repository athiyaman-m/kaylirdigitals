import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner container">
          {/* Logo */}
          <a href="#hero" className="navbar__logo" onClick={(e) => { e.preventDefault(); handleNav('#hero') }}>
            <div className="logo-mark">
              <span className="logo-7">7</span>
              <span className="logo-f">F</span>
            </div>
            <div className="logo-text">
              <span className="logo-digital">DIGITAL</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="navbar__nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="navbar__link"
                onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="navbar__cta"
            onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
          >
            Let's Talk
            <span className="cta-arrow">↗</span>
          </a>

          {/* Mobile Toggle */}
          <button
            className={`navbar__toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="mobile-menu__content">
              <nav className="mobile-menu__nav">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="mobile-menu__link"
                    onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                  >
                    <span className="mobile-menu__number">0{i + 1}</span>
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <motion.div
                className="mobile-menu__footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p>7fdigitals@gmail.com</p>
                <p>Tamil Nadu, India</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
