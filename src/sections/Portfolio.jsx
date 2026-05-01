import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Portfolio.css'

const projects = [
  {
    id: 1,
    title: 'Urban Edge',
    category: 'website',
    desc: 'Men\'s fashion e-commerce — +180% online sales',
    image: '/assets/img/portfolio/urban-edge.png',
    link: '#',
  },
  {
    id: 2,
    title: 'Grace Boutique',
    category: 'website',
    desc: 'Ethnic wear boutique — +250% customer reach',
    image: '/assets/img/portfolio/grace-boutique.png',
    link: '#',
  },
  {
    id: 3,
    title: 'StyleHub',
    category: 'website',
    desc: 'Family fashion store — +320% traffic growth',
    image: '/assets/img/portfolio/stylehub.png',
    link: '#',
  },
  {
    id: 4,
    title: 'BrandEssence.in',
    category: 'website',
    desc: 'Marketing and branding website',
    image: '/assets/img/portfolio/image.png',
    link: 'https://brandessence.in/',
  },
  {
    id: 5,
    title: 'VM Farm Fresh Milk',
    category: 'app',
    desc: 'Fresh milk distribution & sales app',
    image: '/assets/img/portfolio/app2.jpeg',
    link: 'https://play.google.com/store/apps/details?id=com.vmfarmfreshmilk',
  },
  {
    id: 6,
    title: 'Freelancer Portfolio',
    category: 'website',
    desc: 'Professional portfolio website',
    image: '/assets/img/portfolio/port.png',
    link: 'https://chandrabalan-c.github.io/Chanfreenlancer/',
  },
  {
    id: 7,
    title: 'E-commerce Sales Analysis',
    category: 'data',
    desc: 'Analytical dashboard for sales improvement',
    image: '/assets/img/portfolio/ds2.png',
    link: 'https://github.com/athiyaman-m/E-commerce-sales-analysis-using-Power-BI',
  },
  {
    id: 8,
    title: 'Personal Portfolio',
    category: 'website',
    desc: 'Portfolio website showcasing skills & work',
    image: '/assets/img/portfolio/web2.png',
    link: '#',
  },
  {
    id: 9,
    title: 'Training Participants Report',
    category: 'data',
    desc: 'Analytical dashboard for training analysis',
    image: '/assets/img/portfolio/ds1.jpg',
    link: 'https://github.com/athiyaman-m/Training_Participants_Report',
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

  const filtered = active === 'all'
    ? projects
    : projects.filter((p) => p.category === active)

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
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-item"
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
                  <span className="portfolio-item__arrow">↗</span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
