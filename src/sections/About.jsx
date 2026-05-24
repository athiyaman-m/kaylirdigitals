import { motion } from 'framer-motion'
import './About.css'

const pillars = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    title: 'Strategy',
    desc: 'We study your business first',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    title: 'Design',
    desc: 'That speaks to your audience',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Growth',
    desc: 'That lasts and scales',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function About() {
  return (
    <section id="about" className="about section section-cream">
      <div className="container">
        <div className="about__grid">
          {/* Left: Brand Story */}
          <motion.div
            className="about__story"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.div className="section-label" variants={itemVariants}>
              ABOUT US <span className="dot"></span>
            </motion.div>

            <motion.h2 className="section-title" variants={itemVariants}>
              YOUR SHOP IS
              <br />
              <span className="text-red">OUR SHOP.</span>
              <br />
              WE BUILD TOGETHER.
            </motion.h2>

            <motion.p className="about__desc" variants={itemVariants}>
              Kaylir Digitals is a small team from Tamil Nadu that builds digital
              presence for small businesses — websites, social media, and ads.
              We study your business first. Then we build.
            </motion.p>

            <motion.p className="about__desc about__desc--muted" variants={itemVariants}>
              யாவரும் கேளிர் — Everyone is kin. That's the idea behind Kaylir.
              Your business is our business. 🤝
            </motion.p>

            <motion.div className="about__cta" variants={itemVariants}>
              <a href="#services" className="btn-dark" onClick={(e) => {
                e.preventDefault()
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
              }}>
                What We Do <span>→</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Stamp + Pillars */}
          <motion.div
            className="about__right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            {/* Circular Stamp */}
            <motion.div className="about__stamp" variants={itemVariants}>
              <div className="stamp-circle">
                <svg viewBox="0 0 200 200" className="stamp-text-svg">
                  <defs>
                    <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                  </defs>
                  <text>
                    <textPath href="#circlePath" startOffset="0%">
                      KAYLIR • DIGITALS • YOUR BUSINESS IS OUR BUSINESS •
                    </textPath>
                  </text>
                </svg>
                <div className="stamp-center">
                  <span className="stamp-7f">KD</span>
                </div>
              </div>
            </motion.div>

            {/* Three Pillars */}
            <div className="about__pillars">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  className="pillar"
                  variants={itemVariants}
                >
                  <div className="pillar__icon">{pillar.icon}</div>
                  <div className="pillar__connector">
                    <div className="connector-line"></div>
                    <div className="connector-dot"></div>
                  </div>
                  <h4 className="pillar__title">{pillar.title}</h4>
                  <p className="pillar__desc">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div className="about__quote" variants={itemVariants}>
              <p>"யாவரும் கேளிர். <span className="text-red">Everyone is kin.</span>"</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
