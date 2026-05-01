import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    name: 'Chandrabalan',
    role: 'Freelancer',
    text: 'Excellent work! The portfolio looks professional, modern, and represents my brand perfectly. Highly satisfied with the final result.',
    rating: 5,
    image: '/assets/img/person/chanWithCoat.png',
  },
  {
    id: 2,
    name: 'Varun',
    role: 'Business Owner',
    text: 'A well-designed website that improved my business presence. Customers find it easy to understand my services now. Great work.',
    rating: 5,
    image: '/assets/img/person/person-m-2.webp',
  },
  {
    id: 3,
    name: 'Athiyaman',
    role: 'Developer',
    text: 'The portfolio is professional and well-designed. It showcased my skills effectively and helped me get hired. Truly happy with the outcome.',
    rating: 4.5,
    image: '/assets/img/person/athi.png',
  },
  {
    id: 4,
    name: 'Rahul',
    role: 'Dairy Business',
    text: 'The application made managing my milk business much easier. Daily entries, customer details, and payments are now well organized.',
    rating: 4.5,
    image: '/assets/img/person/person-m-7.webp',
  },
]

const Stars = ({ rating }) => {
  const full = Math.floor(rating)
  const half = rating % 1 !== 0
  return (
    <div className="testimonial__stars">
      {[...Array(full)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--color-red)">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
      {half && (
        <svg width="16" height="16" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="half-star">
              <stop offset="50%" stopColor="var(--color-red)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
            </linearGradient>
          </defs>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#half-star)" />
        </svg>
      )}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section section-dark">
      <div className="container">
        <motion.div
          className="testimonials__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label" style={{ color: 'var(--color-white)' }}>
            REVIEWS <span className="dot"></span>
          </div>
          <h2 className="section-title">
            WHAT OUR<br />
            <span className="text-red">CLIENTS SAY.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={24}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.testimonials__pagination' }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonials__swiper"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="testimonial-card">
                  <Stars rating={t.rating} />
                  <p className="testimonial-card__text">"{t.text}"</p>
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">
                      <img src={t.image} alt={t.name} loading="lazy" />
                    </div>
                    <div>
                      <h4 className="testimonial-card__name">{t.name}</h4>
                      <span className="testimonial-card__role">{t.role}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="testimonials__pagination"></div>
        </motion.div>
      </div>
    </section>
  )
}
