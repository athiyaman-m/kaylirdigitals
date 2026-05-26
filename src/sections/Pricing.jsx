import { motion } from 'framer-motion'
import './Pricing.css'

const plans = [
  {
    id: 1,
    name: 'Starter',
    subtitle: 'Website Only',
    price: 'Starting at ₹8,000',
    period: '',
    features: [
      'One-page or multi-page website',
      'Mobile optimised',
      'Google Maps integration',
      'Contact form + WhatsApp button',
      'Handover with source files',
    ],
    highlighted: false,
  },
  {
    id: 2,
    name: 'Presence',
    subtitle: 'Website + Social',
    price: 'Starting at ₹6,000',
    period: '/month',
    features: [
      'Website (built in month 1)',
      '12 social media posts per month',
      'Stories and highlight covers',
      'Caption writing in Tamil + English',
      'Monthly review call',
    ],
    highlighted: true,
  },
  {
    id: 3,
    name: 'Growth',
    subtitle: 'Full Package',
    price: 'Starting at ₹12,000',
    period: '/month',
    features: [
      'Everything in Presence',
      'Meta ads setup and management',
      'Ad budget separate (client pays directly)',
      'Monthly performance report',
      'Strategy call every month',
    ],
    highlighted: false,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Pricing() {
  return (
    <section id="pricing" className="pricing section section-cream">
      <div className="container">
        <motion.div
          className="pricing__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            PRICING <span className="dot"></span>
          </div>
          <h2 className="section-title">
            START HERE.<br />
            <span className="text-red">ADJUST AS YOU GROW.</span>
          </h2>
          <p className="section-subtitle pricing__subtitle">
            Transparent pricing designed for small businesses. No hidden costs, no long contracts.
          </p>
        </motion.div>

        <motion.div
          className="pricing__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              className={`pricing-card ${plan.highlighted ? 'pricing-card--highlighted' : ''}`}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              {plan.highlighted && (
                <div className="pricing-card__badge">Most Popular</div>
              )}

              <div className="pricing-card__header">
                <h3 className="pricing-card__name">
                  {plan.name} <span className="pricing-card__dash">—</span> {plan.subtitle}
                </h3>
                <div className="pricing-card__price">
                  <span className="pricing-card__amount">{plan.price}</span>
                  {plan.period && <span className="pricing-card__period">{plan.period}</span>}
                </div>
              </div>

              <ul className="pricing-card__features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="pricing-card__feature">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/+916381806635?text=Hi%2C%20I%27m%20interested%20in%20your%20pricing%20plans.%20Can%20you%20share%20more%20details%3F"
                target="_blank"
                rel="noopener noreferrer"
                className={`pricing-card__cta ${plan.highlighted ? 'btn-primary' : 'btn-dark'}`}
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
