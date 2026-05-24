import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Portfolio.css'

const projects = [
  {
    id: 1,
    title: 'KR Enterprises Construction',
    category: 'website',
    desc: 'Construction company website — Chennai, Tamil Nadu',
    image: '/assets/img/portfolio/kr-enterprises.png',
    link: 'https://kr-constructions.vercel.app/',
  },
  {
    id: 2,
    title: 'Preethi Motors Real Estate',
    category: 'website',
    desc: 'Real estate & property website — Coimbatore',
    image: '/assets/img/portfolio/preethi-motors.png',
    link: 'https://preethimotors.vercel.app/',
  },
  {
    id: 3,
    title: 'KR Construction',
    category: 'website',
    desc: 'Residential, commercial & industrial builds — Chennai',
    image: '/assets/img/portfolio/kr-construction.png',
    link: 'https://krconstruction.vercel.app/',
  },
  {
    id: 4,
    title: 'BrandEssence.in',
    category: 'website',
    desc: 'Digital marketing agency website — Chennai',
    image: '/assets/img/portfolio/brandessence.png',
    link: 'https://brandessence.in/',
  },
  {
    id: 5,
    title: 'Urban Edge',
    category: 'website',
    desc: 'Men\'s fashion e-commerce — +180% online sales',
    image: '/assets/img/portfolio/urban-edge.png',
    link: '',
  },
  {
    id: 6,
    title: 'Grace Boutique',
    category: 'website',
    desc: 'Ethnic wear boutique — +250% customer reach',
    image: '/assets/img/portfolio/grace-boutique.png',
    link: '',
  },
  {
    id: 7,
    title: 'StyleHub',
    category: 'website',
    desc: 'Family fashion store — +320% traffic growth',
    image: '/assets/img/portfolio/stylehub.png',
    link: '',
  },
  {
    id: 8,
    title: 'VM Farm Fresh Milk',
    category: 'app',
    desc: 'Fresh milk distribution & sales app',
    image: '/assets/img/portfolio/app2.jpeg',
    link: 'https://play.google.com/store/apps/details?id=com.vmfarmfreshmilk',
  },
  {
    id: 9,
    title: 'E-commerce Sales Analysis',
    category: 'data',
    desc: 'Analytical dashboard for sales improvement',
    image: '/assets/img/portfolio/ds2.png',
    link: 'https://github.com/athiyaman-m/E-commerce-sales-analysis-using-Power-BI',
  },
]

const filters = [
  { key: 'all', label: 'All' },
  { key: 'website', label: 'Websites' },
  { key: 'app', label: 'Apps' },
  { key: 'data', label: 'Data & AI' },
]

export default function Portfolio() {
  const [active, setActive] = useState('all')
  const [previewUrl, setPreviewUrl] = useState(null)
  const [previewTitle, setPreviewTitle] = useState('')

  const filtered = active === 'all'
    ? projects
    : projects.filter((p) => p.category === active)

  const handleProjectClick = (e, project) => {
    e.preventDefault()
    if (!project.link) return

    // External links that can't be iframed (Play Store, GitHub) open in new tab
    const externalDomains = ['play.google.com', 'github.com']
    const isExternal = externalDomains.some((d) => project.link.includes(d))

    if (isExternal) {
      window.open(project.link, '_blank', 'noopener,noreferrer')
    } else {
      setPreviewUrl(project.link)
      setPreviewTitle(project.title)
      document.body.style.overflow = 'hidden'
    }
  }

  const closePreview = () => {
    setPreviewUrl(null)
    setPreviewTitle('')
    document.body.style.overflow = ''
  }

  return (
    <section id="portfolio" className="portfolio section section-white">
      <div className="container">
        <motion.div
          className="portfolio__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            OUR WORK <span className="dot"></span>
          </div>
          <h2 className="section-title">
            PROJECTS THAT<br />
            <span className="text-red">SPEAK FOR US.</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="portfolio__filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {filters.map((f) => (
            <button
              key={f.key}
              className={`filter-btn ${active === f.key ? 'filter-btn--active' : ''}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div className="portfolio__grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.a
                key={project.id}
                href={project.link || '#'}
                className={`portfolio-item ${!project.link ? 'portfolio-item--no-link' : ''}`}
                onClick={(e) => handleProjectClick(e, project)}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="portfolio-item__image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="portfolio-item__overlay">
                  <span className="portfolio-item__category">{project.category}</span>
                  <h4 className="portfolio-item__title">{project.title}</h4>
                  <p className="portfolio-item__desc">{project.desc}</p>
                  {project.link && <span className="portfolio-item__arrow">↗</span>}
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Iframe Preview Modal ── */}
      <AnimatePresence>
        {previewUrl && (
          <motion.div
            className="preview-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="preview-modal__header">
              <div className="preview-modal__info">
                <span className="preview-modal__dot"></span>
                <span className="preview-modal__title">{previewTitle}</span>
                <span className="preview-modal__url">{previewUrl}</span>
              </div>
              <div className="preview-modal__actions">
                <a
                  href={previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="preview-modal__external"
                  title="Open in new tab"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
                <button className="preview-modal__close" onClick={closePreview} aria-label="Close preview">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="preview-modal__body">
              <iframe
                src={previewUrl}
                title={`Preview of ${previewTitle}`}
                className="preview-modal__iframe"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
