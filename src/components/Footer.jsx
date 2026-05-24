import { motion } from 'framer-motion'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer section-dark">
      <div className="container">
        <div className="footer__grid">
          {/* Brand Column */}
          <motion.div
            className="footer__brand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="footer__logo">
              <div className="logo-mark">
                <span className="logo-kaylir">Kaylir</span>
              </div>
              <span className="logo-digital">Digitals</span>
            </div>
            <p className="footer__tagline">யாவரும் கேளிர்.<br />Everyone is kin.<br /><span className="text-red">Your shop is our shop.</span></p>
            <p className="footer__desc">
              A small team from Tamil Nadu helping small businesses build strong digital presence.
            </p>
          </motion.div>

          {/* Services Column */}
          <motion.div
            className="footer__col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="footer__heading">What We Do</h4>
            <ul className="footer__links">
              <li><a href="#services">Website Design & Dev</a></li>
              <li><a href="#services">Social Media Management</a></li>
              <li><a href="#services">Meta Ads Management</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            className="footer__col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="footer__heading">Contact</h4>
            <ul className="footer__links footer__contact">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                <a href="https://www.instagram.com/kaylirdigitals/" target="_blank" rel="noopener noreferrer">@kaylirdigitals</a>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                <a href="mailto:kaylirdigital@gmail.com">kaylirdigital@gmail.com</a>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <span>Tamil Nadu, India</span>
              </li>
            </ul>
          </motion.div>

          {/* CTA Column */}
          <motion.div
            className="footer__col footer__cta-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="footer__heading">Ready to Grow?</h4>
            <p className="footer__cta-text">Let's build something great for your business.</p>
            <a href="https://wa.me/+918940089643?text=Hi%2C%20I%20need%20digital%20services%20for%20my%20business.%20Can%20you%20help%3F" target="_blank" rel="noopener noreferrer" className="btn-primary footer__cta-btn">
              Let's Talk <span>↗</span>
            </a>
          </motion.div>
        </div>

        {/* Skyline Illustration */}
        <div className="footer__skyline">
          <svg className="skyline-svg" viewBox="0 0 1200 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet">
            <line x1="0" y1="155" x2="1200" y2="155" stroke="rgba(225,29,46,0.25)" strokeWidth="1" />
            <g stroke="rgba(225,29,46,0.35)" strokeWidth="1.2" strokeLinecap="round" fill="none">
              <line x1="80" y1="155" x2="80" y2="100" />
              <path d="M80 100 Q65 85 50 95" /><path d="M80 100 Q70 80 55 80" />
              <path d="M80 100 Q90 80 105 80" /><path d="M80 100 Q95 85 110 95" />
              <path d="M80 105 Q75 90 60 88" /><path d="M80 105 Q85 90 100 88" />
            </g>
            <g stroke="rgba(225,29,46,0.35)" strokeWidth="1.2" fill="none">
              <rect x="140" y="120" width="50" height="35" rx="1" />
              <line x1="140" y1="120" x2="165" y2="105" /><line x1="165" y1="105" x2="190" y2="120" />
              <rect x="155" y="135" width="14" height="20" rx="1" />
              <line x1="162" y1="135" x2="162" y2="155" />
            </g>
            <g stroke="rgba(225,29,46,0.35)" strokeWidth="1.2" fill="none">
              <rect x="260" y="115" width="70" height="40" rx="1" />
              <rect x="270" y="90" width="50" height="25" rx="1" />
              <rect x="280" y="70" width="30" height="20" rx="1" />
              <path d="M290 70 Q295 50 300 70" />
              <line x1="295" y1="55" x2="295" y2="48" /><circle cx="295" cy="46" r="3" />
              <path d="M287 155 L287 130 Q295 122 303 130 L303 155" />
              <line x1="265" y1="125" x2="325" y2="125" />
              <line x1="275" y1="100" x2="315" y2="100" />
              <line x1="285" y1="80" x2="305" y2="80" />
            </g>
            <g stroke="rgba(225,29,46,0.35)" strokeWidth="1.2" fill="none">
              <path d="M380 150 Q380 138 390 138 L410 138 L415 145 L420 145 L420 150" />
              <circle cx="390" cy="152" r="5" /><circle cx="415" cy="152" r="5" />
              <line x1="395" y1="138" x2="395" y2="145" />
            </g>
            <g stroke="rgba(225,29,46,0.35)" strokeWidth="1.2" fill="none">
              <rect x="470" y="110" width="55" height="45" rx="1" />
              <path d="M470 110 L497 85 L525 110" />
              <line x1="497" y1="78" x2="497" y2="65" /><line x1="491" y1="72" x2="503" y2="72" />
              <circle cx="497" cy="125" r="8" />
              <line x1="497" y1="117" x2="497" y2="133" /><line x1="489" y1="125" x2="505" y2="125" />
              <path d="M491 155 L491 142 Q497 137 503 142 L503 155" />
            </g>
            <g stroke="rgba(225,29,46,0.35)" strokeWidth="1.2" fill="none">
              <line x1="570" y1="155" x2="570" y2="110" />
              <path d="M560 110 Q570 100 580 110" />
              <circle cx="570" cy="108" r="3" fill="rgba(225,29,46,0.15)" />
            </g>
            <g stroke="rgba(225,29,46,0.35)" strokeWidth="1.2" fill="none">
              <rect x="610" y="130" width="40" height="25" rx="1" />
              <line x1="610" y1="130" x2="630" y2="118" /><line x1="630" y1="118" x2="650" y2="130" />
              <rect x="618" y="140" width="10" height="15" rx="1" />
              <rect x="635" y="136" width="8" height="8" rx="1" />
            </g>
            <g stroke="rgba(225,29,46,0.35)" strokeWidth="1.2" fill="none">
              <rect x="700" y="95" width="35" height="60" rx="1" />
              <rect x="705" y="100" width="8" height="6" rx="1" /><rect x="718" y="100" width="8" height="6" rx="1" />
              <rect x="705" y="112" width="8" height="6" rx="1" /><rect x="718" y="112" width="8" height="6" rx="1" />
              <rect x="705" y="124" width="8" height="6" rx="1" /><rect x="718" y="124" width="8" height="6" rx="1" />
              <rect x="712" y="140" width="10" height="15" rx="1" />
              <line x1="717" y1="95" x2="717" y2="85" /><line x1="713" y1="88" x2="721" y2="88" />
            </g>
            <g stroke="rgba(225,29,46,0.35)" strokeWidth="1.2" fill="none">
              <path d="M800 155 L805 95 L825 95 L830 155" />
              <ellipse cx="815" cy="93" rx="14" ry="5" />
              <path d="M810 93 L812 82 L818 82 L820 93" />
              <line x1="800" y1="88" x2="790" y2="82" stroke="rgba(225,29,46,0.2)" />
              <line x1="830" y1="88" x2="840" y2="82" stroke="rgba(225,29,46,0.2)" />
              <line x1="803" y1="115" x2="827" y2="115" /><line x1="801" y1="135" x2="829" y2="135" />
            </g>
            <g stroke="rgba(225,29,46,0.35)" strokeWidth="1.2" fill="none">
              <rect x="880" y="135" width="30" height="20" rx="1" />
              <path d="M877 135 L895 125 L913 135" />
              <rect x="920" y="135" width="30" height="20" rx="1" />
              <path d="M917 135 L935 125 L953 135" />
            </g>
            <g stroke="rgba(225,29,46,0.35)" strokeWidth="1.2" strokeLinecap="round" fill="none">
              <line x1="1000" y1="155" x2="1005" y2="95" />
              <path d="M1005 95 Q990 80 975 90" /><path d="M1005 95 Q995 75 980 75" />
              <path d="M1005 95 Q1015 75 1030 75" /><path d="M1005 95 Q1020 80 1035 90" />
              <path d="M1005 100 Q1000 85 985 83" /><path d="M1005 100 Q1010 85 1025 83" />
            </g>
            <g stroke="rgba(225,29,46,0.35)" strokeWidth="1.2" fill="none">
              <circle cx="1070" cy="150" r="7" /><circle cx="1095" cy="150" r="7" />
              <line x1="1070" y1="150" x2="1082" y2="138" /><line x1="1082" y1="138" x2="1095" y2="150" />
              <line x1="1082" y1="138" x2="1082" y2="132" /><line x1="1078" y1="132" x2="1086" y2="132" />
            </g>
            <circle cx="150" cy="30" r="1.5" fill="rgba(225,29,46,0.2)" />
            <circle cx="400" cy="20" r="1" fill="rgba(225,29,46,0.15)" />
            <circle cx="650" cy="25" r="1.5" fill="rgba(225,29,46,0.2)" />
            <circle cx="900" cy="15" r="1" fill="rgba(225,29,46,0.15)" />
            <circle cx="1100" cy="30" r="1.5" fill="rgba(225,29,46,0.2)" />
          </svg>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <p className="footer__partner">YOUR BUSINESS. <span className="text-red">OUR BUSINESS.</span></p>
          </div>
          <div className="footer__bottom-center">
            <p>© {currentYear} Kaylir Digitals. All rights reserved.</p>
          </div>
          <div className="footer__bottom-right">
            <p className="footer__tamil">யாவரும் கேளிர்.</p>
            <p className="footer__english">Everyone is kin.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
