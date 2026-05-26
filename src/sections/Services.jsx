import { motion } from 'framer-motion'
import './Services.css'

const services = [
  {
    id: 1,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M7 8l3 3-3 3" />
        <line x1="13" y1="14" x2="17" y2="14" />
      </svg>
    ),
    title: 'WEBSITE DESIGN\n& DEVELOPMENT',
    desc: 'Fast. Responsive. Built to convert.',
    details: [
      'Custom designed for your brand',
      'Mobile-first responsive layouts',
      'SEO optimized from day one',
      'Performance tuned for speed',
    ],
  },
  {
    id: 2,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        <path d="M12 5.67L8 9.67" />
      </svg>
    ),
    title: 'SOCIAL MEDIA\nDESIGN & MANAGEMENT',
    desc: 'Consistent content. Strong presence.',
    details: [
      'Content strategy & planning',
      'Professional post designs',
      'Engagement & community management',
      'Monthly analytics reports',
    ],
  },
  {
    id: 3,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 010 7.07" />
        <path d="M19.07 4.93a10 10 0 010 14.14" />
      </svg>
    ),
    title: 'META ADS\nMANAGEMENT',
    desc: 'Targeted ads. Measurable growth.',
    details: [
      'Facebook & Instagram ads',
      'Audience targeting & segmentation',
      'A/B testing & optimization',
      'ROI tracking & reporting',
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Services() {
  return (
    <section id="services" className="services section section-dark">
      <div className="container">
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label" style={{ color: 'var(--color-white)' }}>
            WHAT WE DO <span className="dot"></span>
          </div>
          <h2 className="section-title">
            ONE PARTNER.<br />
            <span className="text-red">ALL DIGITAL.</span>
          </h2>
          <p className="section-subtitle">
            We handle everything digital — from your website to your social media
            to your ads. So you can focus on running your business.
          </p>
        </motion.div>

        <motion.div
          className="services__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="service-card__icon">
                {service.icon}
              </div>

              <div className="service-card__red-line"></div>

              <h3 className="service-card__title">
                {service.title.split('\n').map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </h3>

              <p className="service-card__desc">{service.desc}</p>

              <ul className="service-card__details">
                {service.details.map((detail, i) => (
                  <li key={i}>
                    <span className="detail-dot"></span>
                    {detail}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/+916381806635"
                target="_blank"
                rel="noopener noreferrer"
                className="service-card__link"
              >
                Get Started <span>→</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
