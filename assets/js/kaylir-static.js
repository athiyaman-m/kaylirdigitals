const whatsappUrl = 'https://wa.me/+916381806635?text=Hi%2C%20I%20need%20digital%20services%20for%20my%20business.%20Can%20you%20help%3F';

const projects = [
  { id: 1, title: 'KR Enterprises Construction', name: 'KR Enterprises', type: 'Business Website', category: 'website', desc: 'Construction company website - Chennai, Tamil Nadu', image: 'assets/img/portfolio/web1.png', link: 'https://kr-constructions.vercel.app/', metric: '+150%', metricLabel: 'Lead Generation' },
  { id: 2, title: 'Preethi Motors Real Estate', name: 'Preethi Motors', type: 'Business Website', category: 'website', desc: 'Real estate and property website - Tamil Nadu', image: 'assets/img/portfolio/web2.png', link: 'https://preethimotors.vercel.app/', metric: '+200%', metricLabel: 'Property Leads' },
  { id: 3, title: 'KR Construction', name: 'KR Construction', type: 'Business Website', category: 'website', desc: 'Residential, commercial and industrial builds', image: 'assets/img/portfolio/port.png', link: 'https://krconstruction.vercel.app/', metric: '+180%', metricLabel: 'Inquiries' },
  { id: 4, title: 'BrandEssence.in', name: 'BrandEssence', type: 'Business Website', category: 'website', desc: 'Digital marketing agency website - Chennai', image: 'assets/img/portfolio/image.png', link: 'https://brandessence.in/', metric: '+250%', metricLabel: 'Brand Reach' },
  { id: 5, title: 'Urban Edge', name: 'Urban Edge', type: 'E-Commerce Website', category: 'website', desc: "Men's fashion e-commerce - +180% online sales", image: 'assets/img/portfolio/urban-edge.png', link: '', metric: '+180%', metricLabel: 'Online Sales' },
  { id: 6, title: 'Grace Boutique', name: 'Grace Boutique', type: 'E-Commerce Website', category: 'website', desc: 'Ethnic wear boutique - +250% customer reach', image: 'assets/img/portfolio/grace-boutique.png', link: '', metric: '+250%', metricLabel: 'Customer Reach' },
  { id: 7, title: 'StyleHub', name: 'StyleHub', type: 'Business Website', category: 'website', desc: 'Family fashion store - +320% traffic growth', image: 'assets/img/portfolio/stylehub.png', link: '', metric: '+320%', metricLabel: 'Traffic Growth' },
  { id: 8, title: 'VM Farm Fresh Milk', name: 'VM Farm Fresh Milk', type: 'Mobile App', category: 'app', desc: 'Fresh milk distribution and sales app', image: 'assets/img/portfolio/app2.jpeg', link: 'https://play.google.com/store/apps/details?id=com.vmfarmfreshmilk', metric: '+40%', metricLabel: 'Ops Speed' },
  { id: 9, title: 'E-commerce Sales Analysis', name: 'Sales Dashboard', type: 'Data & AI', category: 'data', desc: 'Analytical dashboard for sales improvement', image: 'assets/img/portfolio/ds2.png', link: 'https://github.com/athiyaman-m/E-commerce-sales-analysis-using-Power-BI', metric: '+30%', metricLabel: 'Insights' }
];

const testimonials = [
  { name: 'Chandrabalan', role: 'Freelancer', text: 'Excellent work! The portfolio looks professional, modern, and represents my brand perfectly. Highly satisfied with the final result.', rating: 5 },
  { name: 'Varun', role: 'Business Owner', text: 'A well-designed website that improved my business presence. Customers find it easy to understand my services now. Great work.', rating: 5 },
  { name: 'Athiyaman', role: 'Developer', text: 'The portfolio is professional and well-designed. It showcased my skills effectively and helped me get hired. Truly happy with the outcome.', rating: 4.5 },
  { name: 'Rahul', role: 'Dairy Business', text: 'The application made managing my milk business much easier. Daily entries, customer details, and payments are now well organized.', rating: 4.5 }
];

const captions = [
  'Digital Growth For Chennai Businesses.',
  'Your Business Is Our Business.',
  'Websites, Ads, Posters And SEO.',
  'We Study Your Business First.',
  'யாவரும் கேளிர். Everyone Is Kin.'
];

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function initPreloader() {
  const preloader = $('#preloader');
  if (!preloader) return;
  window.setTimeout(() => {
    preloader.classList.add('preloader--hide');
    window.setTimeout(() => preloader.remove(), 500);
  }, 1200);
}

function initTheme() {
  const root = document.documentElement;
  const knob = $('#themeKnob');
  const button = $('#themeToggle');

  const apply = (theme) => {
    root.setAttribute('data-theme', theme);
    knob?.classList.toggle('theme-toggle__knob--light', theme === 'light');
    if (button) button.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  };

  localStorage.removeItem('theme');
  apply('light');
  button?.addEventListener('click', () => {
    apply(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
}

function initNavigation() {
  const navbar = $('#navbar');
  const menu = $('#mobileMenu');
  const toggle = $('#menuToggle');
  const close = $('#menuClose');

  const onScroll = () => {
    navbar?.classList.toggle('navbar--scrolled', window.scrollY > 50);
    $('#whatsappFloat')?.toggleAttribute('hidden', window.scrollY <= 300);
    $('#scrollTop')?.toggleAttribute('hidden', window.scrollY <= 500);
  };

  const closeMenu = () => {
    if (!menu || !toggle) return;
    menu.hidden = true;
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggle?.addEventListener('click', () => {
    const isOpen = menu && !menu.hidden;
    if (!menu) return;
    menu.hidden = isOpen;
    toggle.classList.toggle('active', !isOpen);
    toggle.setAttribute('aria-expanded', String(!isOpen));
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  close?.addEventListener('click', closeMenu);
  $$('.mobile-menu__link').forEach((link) => link.addEventListener('click', closeMenu));
  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = $(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  $('#scrollTop')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initTypewriter() {
  const el = $('#typedText');
  if (!el) return;
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const word = captions[wordIndex];
    charIndex += deleting ? -1 : 1;
    el.textContent = word.slice(0, charIndex);

    if (!deleting && charIndex === word.length) {
      deleting = true;
      window.setTimeout(tick, 1800);
      return;
    }
    if (deleting && charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % captions.length;
    }
    window.setTimeout(tick, deleting ? 35 : 70);
  };

  tick();
}

function renderHeroProjects() {
  const track = $('#heroProjects');
  if (!track) return;
  track.innerHTML = [...projects.slice(0, 7), ...projects.slice(0, 7)].map((project) => `
    <article class="marquee-card">
      <div class="marquee-card__image-wrap">
        <img src="${project.image}" alt="${project.name} digital marketing project by Kaylir Digitals" class="marquee-card__image" loading="lazy">
        <div class="marquee-card__metric"><span class="metric-value">${project.metric}</span><span class="metric-label">${project.metricLabel}</span></div>
      </div>
      <div class="marquee-card__info">
        <span class="marquee-card__type">${project.type}</span>
        <h2 class="marquee-card__name">${project.name}</h2>
        <p class="marquee-card__desc">${project.desc}</p>
      </div>
    </article>
  `).join('');
}

function initPortfolio() {
  const grid = $('#portfolioGrid');
  const modal = $('#previewModal');
  const frame = $('#previewFrame');
  const close = $('#previewClose');
  const external = $('#previewExternal');
  if (!grid) return;

  const openPreview = (project) => {
    if (!project.link) return;
    if (project.link.includes('play.google.com') || project.link.includes('github.com')) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
      return;
    }
    $('#previewTitle').textContent = project.title;
    $('#previewUrlText').textContent = project.link;
    external.href = project.link;
    frame.src = project.link;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  const closePreview = () => {
    modal.hidden = true;
    frame.src = 'about:blank';
    document.body.style.overflow = '';
  };

  const render = (filter = 'all') => {
    const list = filter === 'all' ? projects : projects.filter((project) => project.category === filter);
    grid.innerHTML = list.map((project) => `
      <a href="${project.link || '#portfolio'}" class="portfolio-item ${project.link ? '' : 'portfolio-item--no-link'}" data-id="${project.id}">
        <div class="portfolio-item__image"><img src="${project.image}" alt="${project.title} project by Kaylir Digitals" loading="lazy"></div>
        <div class="portfolio-item__overlay">
          <span class="portfolio-item__category">${project.category}</span>
          <h3 class="portfolio-item__title">${project.title}</h3>
          <p class="portfolio-item__desc">${project.desc}</p>
          ${project.link ? '<span class="portfolio-item__arrow">↗</span>' : ''}
        </div>
      </a>
    `).join('');

    $$('.portfolio-item', grid).forEach((item) => {
      item.addEventListener('click', (event) => {
        const project = projects.find((entry) => entry.id === Number(item.dataset.id));
        if (!project?.link) {
          event.preventDefault();
          return;
        }
        event.preventDefault();
        openPreview(project);
      });
    });
  };

  $$('#portfolioFilters .filter-btn').forEach((button) => {
    button.addEventListener('click', () => {
      $$('#portfolioFilters .filter-btn').forEach((entry) => entry.classList.remove('filter-btn--active'));
      button.classList.add('filter-btn--active');
      render(button.dataset.filter);
    });
  });

  close?.addEventListener('click', closePreview);
  modal?.addEventListener('click', (event) => {
    if (event.target === modal) closePreview();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal && !modal.hidden) closePreview();
  });
  render();
}

function renderTestimonials() {
  const wrapper = $('#testimonialSlides');
  if (!wrapper) return;
  wrapper.innerHTML = testimonials.map((item) => {
    const stars = '★'.repeat(Math.floor(item.rating)) + (item.rating % 1 ? '☆' : '');
    return `
      <div class="swiper-slide">
        <article class="testimonial-card">
          <div class="testimonial__stars" aria-label="${item.rating} star review">${stars}</div>
          <p class="testimonial-card__text">"${item.text}"</p>
          <div class="testimonial-card__author">
            <h3 class="testimonial-card__name">${item.name}</h3>
            <span class="testimonial-card__role">${item.role}</span>
          </div>
        </article>
      </div>
    `;
  }).join('');

  if (window.Swiper) {
    new Swiper('.testimonials__swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: { delay: 4000, disableOnInteraction: false },
      pagination: { el: '.testimonials__pagination', clickable: true },
      breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
    });
  }
}

function initContactForm() {
  const form = $('#contactForm');
  const submit = $('#contactSubmit');
  const success = $('#formSuccess');
  const error = $('#formError');
  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    success.hidden = true;
    error.hidden = true;
    submit.disabled = true;
    submit.textContent = 'Sending...';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(form)
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message || 'Submission failed');
      form.reset();
      success.hidden = false;
    } catch (err) {
      error.textContent = `✕ ${err.message || 'Error submitting form. Please try again.'}`;
      error.hidden = false;
    } finally {
      submit.disabled = false;
      submit.innerHTML = 'Send Message <span>→</span>';
    }
  });
}

function initReveal() {
  const items = $$('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('reveal--visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach((item) => observer.observe(item));
}

document.addEventListener('DOMContentLoaded', () => {
  $('#currentYear').textContent = new Date().getFullYear();
  initPreloader();
  initTheme();
  initNavigation();
  initTypewriter();
  renderHeroProjects();
  initPortfolio();
  renderTestimonials();
  initContactForm();
  initReveal();
});
