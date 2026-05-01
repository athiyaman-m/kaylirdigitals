import { motion } from 'framer-motion'
import './WhyUs.css'

const steps = [
  {
    id: 1,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="8" y1="11" x2="14" y2="11" /><line x1="11" y1="8" x2="11" y2="14" />
      </svg>
    ),
    title: 'RESEARCH',
    headline: 'Strategy First.\nAlways.',
    desc: 'We study your business, competitors & audience before writing a single line of code.',
  },
  {
    id: 2,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'DESIGN',
    headline: 'Custom Built.\nNo Templates.',
    desc: 'Every pixel is crafted for your brand — unique, purposeful, and conversion-focused.',
  },
  {
    id: 3,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    title: 'DEVELOP',
    headline: 'Built To\nPerform.',
    desc: 'Clean code, fast loading, mobile-first — websites that work as hard as you do.',
  },
  {
    id: 4,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
    title: 'GROW',
    headline: 'Real Results.\nReal Growth.',
    desc: 'SEO, social media & ads that bring traffic, leads, and measurable business growth.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function WhyUs() {
  return (
    <section id="why-us" className="why-us section section-cream">
      <div className="container">
        <motion.div
          className="why-us__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            WHY CHOOSE US <span className="dot"></span>
          </div>
          <h2 className="section-title">
            HOW WE BUILD<br />
            <span className="text-red">YOUR SUCCESS.</span>
          </h2>
          <p className="why-us__subtitle">
            A proven process that transforms ideas into digital growth engines.
          </p>
        </motion.div>

        {/* Process Flow */}
        <motion.div
          className="why-flow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
        >
          {/* Animated connecting wire */}
          <div className="why-flow__wire">
            <svg className="wire-svg" viewBox="0 0 1200 8" preserveAspectRatio="none">
              <line x1="0" y1="4" x2="1200" y2="4" stroke="rgba(225,29,46,0.15)" strokeWidth="2" />
              <line x1="0" y1="4" x2="1200" y2="4" stroke="url(#wire-grad)" strokeWidth="2"
                strokeDasharray="80 1120" className="wire-pulse" />
              <defs>
                <linearGradient id="wire-grad">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="#E11D2E" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              className="why-step"
              variants={stepVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Node dot on wire */}
              <div className="why-step__node">
                <span className="node-dot"></span>
                <span className="node-ring"></span>
              </div>

              {/* Step number */}
              <div className="why-step__number">0{step.id}</div>

              {/* Icon */}
              <div className="why-step__icon">{step.icon}</div>

              {/* Label */}
              <div className="why-step__label">{step.title}</div>

              {/* Card content */}
              <div className="why-step__card">
                <h3 className="why-step__headline">
                  {step.headline.split('\n').map((line, j) => (
                    <span key={j}>{line}<br /></span>
                  ))}
                </h3>
                <p className="why-step__desc">{step.desc}</p>
              </div>

              {/* Arrow connector (except last) */}
              {i < steps.length - 1 && (
                <div className="why-step__arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA band */}
        <motion.div
          className="why-cta-band"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="why-cta-band__text">
            <span className="why-cta-band__label">YOUR BUSINESS DESERVES MORE THAN JUST A PRETTY POST.</span>
          </div>
          <a
            href="#contact"
            className="btn-primary why-cta-band__btn"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Let's Change That <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
