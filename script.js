/**
 * FARHANA ASHA — PURPLE CINEMATIC PORTFOLIO JAVASCRIPT
 * Ambient canvas, interactive case study modals, timeline tracking, micro-interactions
 */

// Case Studies Dataset
const caseStudies = {
  aura: {
    title: "Aura Studios",
    subtitle: "Spatial Audio Hardware & Acoustics",
    category: "Brand Strategy & Positioning",
    year: "2024",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Pre-order Volume", value: "$3.4M" },
      { label: "Press Coverage", value: "45+ Outlets" },
      { label: "Conversion Lift", value: "+210%" }
    ],
    overview: "Aura Studios engineered breakthrough acoustic transducers capable of physical spatial immersion. However, early marketing sounded like sterile laboratory spec sheets. Farhana was commissioned to rebuild the narrative foundation.",
    solution: "We redefined the brand thesis around 'The Architecture of Pure Presence'. We crafted an evocative editorial voice bible, redesigned the landing page storytelling hierarchy, and produced the flagship launch film script.",
    deliverables: ["Brand Narrative Bible", "Flagship Web Copy", "Launch Film Voiceover Script", "Product Packaging Copy"]
  },
  verve: {
    title: "Verve Intelligence",
    subtitle: "Enterprise Regulatory & FinTech Platform",
    category: "B2B SaaS Narrative Architecture",
    year: "2024",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Series A Closed", value: "$14M" },
      { label: "Enterprise Sales Cycle", value: "-35% Time" },
      { label: "Demo Booking Rate", value: "+4.2x" }
    ],
    overview: "Verve developed an AI platform analyzing trillion-dollar compliance liabilities in real-time. Traditional enterprise language felt bureaucratic and bloated.",
    solution: "We positioned Verve not merely as automated compliance, but as 'Predictive Institutional Integrity'. We crafted high-status investor decks and an editorial web presence that positioned them as the standard for tier-1 asset managers.",
    deliverables: ["Series A Pitch Deck Narrative", "Full Website Overhaul", "Executive Whitepaper Series", "Sales Enablement Battlecards"]
  },
  luminary: {
    title: "Luminary Quarterly",
    subtitle: "Print & Digital Cultural Publication",
    category: "Editorial Direction & Essays",
    year: "2023",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Subscribers", value: "85K+" },
      { label: "Avg. Read Time", value: "6m 40s" },
      { label: "Industry Awards", value: "3 Nominations" }
    ],
    overview: "A new print and digital journal exploring the tension between synthetic intelligence and human aesthetic creation.",
    solution: "Farhana served as Guest Editorial Director for Issue 03 & 04, architecting the central thesis, curating essay themes, and authoring the flagship opening monograph.",
    deliverables: ["Editorial Concept & Flow", "Lead Monograph Essays", "Digital Subscriber Newsletter", "Author Curation Guidelines"]
  },
  velvet: {
    title: "Velvet & Vine",
    subtitle: "European Luxury Maison & Atelier",
    category: "Cinematic Film Script & Tone Guide",
    year: "2024",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Film Views", value: "1.8M" },
      { label: "Private Client Waitlist", value: "4,200+" },
      { label: "Brand Recall Lift", value: "+88%" }
    ],
    overview: "A heritage fashion house launching a contemporary bespoke line needed a narrative that balanced old-world mystique with provocative modern minimalism.",
    solution: "We wrote the global launch film voiceover, luxury lookbook prose, and an ultra-exclusive private invitation series for VIP collectors.",
    deliverables: ["Cinema Voiceover Script", "Hardcover Lookbook Prose", "Private Client Email Series", "Boutique Experience Script"]
  },
  nexus: {
    title: "Nexus AI Labs",
    subtitle: "Autonomous Agent Research Lab",
    category: "Technical Narrative Architecture",
    year: "2024",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Developer Signups", value: "120K+" },
      { label: "Keynote Engagement", value: "98% Positive" },
      { label: "Enterprise Inquiries", value: "+340%" }
    ],
    overview: "An elite AI research laboratory needed to explain next-generation agent swarms to both technical engineers and Fortune 500 board executives.",
    solution: "Created the 'Agency over Automation' narrative framework, translating opaque technical whitepapers into compelling, humanized value propositions.",
    deliverables: ["Keynote Speech Narrative", "Developer Documentation Voice", "Interactive Manifesto", "Press Release Architecture"]
  },
  chronos: {
    title: "Chronos Atelier",
    subtitle: "Independent Swiss Horology",
    category: "Launch Campaign & Copywriting",
    year: "2023",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Sold Out In", value: "72 Hours" },
      { label: "Pre-order GMV", value: "$2.2M" },
      { label: "Collector Retention", value: "94%" }
    ],
    overview: "An independent watchmaker introducing a micro-rotor tourbillon with an initial run of just 50 pieces worldwide.",
    solution: "Crafted a poetic storytelling campaign focused on 'Measuring What Cannot Be Recovered', sparking passionate discussion in collector forums.",
    deliverables: ["Collector's Monograph", "Website Launch Experience", "VIP Private Invitations", "Instagram Micro-Stories"]
  }
};

// Initialize on DOMContentLoaded or immediately if already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

function initAll() {
  initAmbientCanvas();
  initCursorGlow();
  initNavigationScrollSpy();
  initPortfolioFilters();
  initTimelineProgress();
  initSoundToggle();
  initBackToTop();
}

/* ==========================================================================
   AMBIENT VIOLET CANVAS ANIMATION (HIGH-DPI & RESILIENT)
   ========================================================================== */
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let dpr = window.devicePixelRatio || 1;
  let width, height;

  function resize() {
    dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(dpr, dpr);
  }

  resize();
  window.addEventListener('resize', resize);

  const particles = [];
  const particleCount = Math.min(45, Math.floor((width * height) / 28000));

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.2 + 1.2,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      alpha: Math.random() * 0.5 + 0.25,
      color: Math.random() > 0.4 ? '167, 139, 250' : '196, 181, 253'
    });
  }

  let mouseX = -1000;
  let mouseY = -1000;
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting purple constellation lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(167, 139, 250, ${0.18 * (1 - dist / 150)})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Update & Draw particles
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      // Wrap edges
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Mouse subtle attraction
      const mdx = mouseX - p.x;
      const mdy = mouseY - p.y;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < 120 && mdist > 0) {
        p.x += (mdx / mdist) * 0.4;
        p.y += (mdy / mdist) * 0.4;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(139, 92, 246, 0.7)';
      ctx.fill();
    });

    requestAnimationFrame(render);
  }

  render();
}




/* ==========================================================================
   CURSOR GLOW FOLLOWER
   ========================================================================== */
function initCursorGlow() {
  const glow = document.getElementById('cursor-glow');
  if (!glow) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function update() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;
    glow.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
    requestAnimationFrame(update);
  }

  update();
}

/* ==========================================================================
   NAVIGATION SCROLL SPY & MOBILE MENU
   ========================================================================== */
function initNavigationScrollSpy() {
  const header = document.getElementById('main-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('menu-icon-open');
  const closeIcon = document.getElementById('menu-icon-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  // Mobile menu toggle
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        openIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        openIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        openIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      });
    });
  }

  // Scroll spy
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 160;

    // Header background blur intensification
    if (window.scrollY > 40) {
      header.classList.add('bg-[#050307]/80', 'backdrop-blur-md', 'border-b', 'border-white/5');
    } else {
      header.classList.remove('bg-[#050307]/80', 'backdrop-blur-md', 'border-b', 'border-white/5');
    }

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active', 'text-purple-300');
          link.classList.add('text-white/70');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active', 'text-purple-300');
            link.classList.remove('text-white/70');
          }
        });
      }
    });
  });
}

/* ==========================================================================
   PORTFOLIO FILTER TABS
   ========================================================================== */
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          card.classList.add('animate-fade-in');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   PROCESS TIMELINE PROGRESS INDICATOR
   ========================================================================== */
function initTimelineProgress() {
  const progress = document.getElementById('timeline-progress');
  const section = document.getElementById('process');
  const steps = document.querySelectorAll('.timeline-step');

  if (!progress || !section) return;

  window.addEventListener('scroll', () => {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight * 0.7 && rect.bottom >= 0) {
      const totalDist = rect.height;
      const currentDist = windowHeight * 0.7 - rect.top;
      let pct = Math.min(100, Math.max(0, (currentDist / totalDist) * 100));
      progress.style.height = `${pct}%`;

      // Highlight current active step
      steps.forEach((step) => {
        const stepRect = step.getBoundingClientRect();
        if (stepRect.top <= windowHeight * 0.6) {
          step.classList.add('active');
        } else {
          step.classList.remove('active');
        }
      });
    }
  });
}

/* ==========================================================================
   CASE STUDY MODAL
   ========================================================================== */
function openProjectModal(key) {
  const data = caseStudies[key];
  if (!data) return;

  const modal = document.getElementById('project-modal');
  const body = document.getElementById('modal-body');

  const metricsHtml = data.metrics
    .map(
      (m) => `
    <div class="liquid-glass p-4 rounded-xl border border-white/10 text-center">
      <span class="font-serif italic text-2xl text-purple-accent block mb-1">${m.value}</span>
      <span class="text-[10px] uppercase font-mono tracking-widest text-muted">${m.label}</span>
    </div>
  `
    )
    .join('');

  const deliverablesHtml = data.deliverables
    .map(
      (d) => `
    <li class="flex items-center gap-2 text-xs text-white/80 font-mono">
      <span class="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
      ${d}
    </li>
  `
    )
    .join('');

  body.innerHTML = `
    <div class="space-y-6">
      <div class="flex items-center gap-2">
        <span class="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-purple-950/60 text-purple-200 border border-purple-800/40">
          ${data.category}
        </span>
        <span class="text-xs font-mono text-muted">• ${data.year}</span>
      </div>

      <div>
        <h2 class="text-3xl sm:text-4xl font-sans font-light text-white">${data.title}</h2>
        <p class="text-base text-purple-accent font-serif italic mt-1">${data.subtitle}</p>
      </div>

      <div class="rounded-2xl overflow-hidden h-64 sm:h-80 relative border border-white/10">
        <img src="${data.image}" alt="${data.title}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-[#050307] via-transparent to-transparent"></div>
      </div>

      <div class="grid grid-cols-3 gap-3 sm:gap-4">
        ${metricsHtml}
      </div>

      <div class="space-y-4 pt-2">
        <div>
          <h4 class="text-xs uppercase font-mono tracking-widest text-purple-300 mb-2">// The Challenge & Context</h4>
          <p class="text-sm text-white/75 font-light leading-relaxed">${data.overview}</p>
        </div>

        <div>
          <h4 class="text-xs uppercase font-mono tracking-widest text-purple-300 mb-2">// The Strategic Solution</h4>
          <p class="text-sm text-white/75 font-light leading-relaxed">${data.solution}</p>
        </div>

        <div>
          <h4 class="text-xs uppercase font-mono tracking-widest text-purple-300 mb-2">// Core Deliverables</h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            ${deliverablesHtml}
          </ul>
        </div>
      </div>

      <div class="pt-6 border-t border-white/10 flex justify-between items-center">
        <span class="text-xs font-mono text-muted">Ready to discuss your project?</span>
        <a href="#contact" onclick="closeProjectModal()" class="px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-white text-[#08040D] hover:bg-[#C4B5FD] transition-all shadow-purple-glow">
          Inquire Now &rarr;
        </a>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = 'auto';
}

// Close modal on Escape or backdrop click
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProjectModal();
});

document.getElementById('project-modal')?.addEventListener('click', (e) => {
  if (e.target.id === 'project-modal') closeProjectModal();
});

/* ==========================================================================
   CONTACT FORM SUBMISSION & COPY EMAIL
   ========================================================================== */
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const formSuccess = document.getElementById('form-success');

  btnText.textContent = 'Transmitting...';
  btn.disabled = true;
  btn.classList.add('opacity-70');

  setTimeout(() => {
    btnText.textContent = 'Transmit Inquiry';
    btn.disabled = false;
    btn.classList.remove('opacity-70');
    formSuccess.classList.remove('hidden');
  }, 1000);
}

function resetContactForm() {
  const form = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  if (form) form.reset();
  if (formSuccess) formSuccess.classList.add('hidden');
}

function copyEmail() {
  const email = 'hello@farhanaasha.com';
  navigator.clipboard.writeText(email).then(() => {
    const textSpan = document.getElementById('copy-email-text');
    const prev = textSpan.textContent;
    textSpan.textContent = 'Copied to Clipboard!';
    setTimeout(() => {
      textSpan.textContent = prev;
    }, 2000);
  });
}

/* ==========================================================================
   BACK TO TOP & AUDIO AMBIENCE SYNTH
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
      btn.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
    } else {
      btn.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
      btn.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

let audioCtx = null;
let isAudioActive = false;

function initSoundToggle() {
  const soundBtn = document.getElementById('sound-toggle-btn');
  if (!soundBtn) return;

  soundBtn.addEventListener('click', () => {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
    }

    if (!isAudioActive) {
      playSubtleVioletChime();
      isAudioActive = true;
      soundBtn.querySelector('.font-mono').textContent = 'Mute';
      soundBtn.classList.add('border-purple-400/50', 'text-white');
    } else {
      isAudioActive = false;
      soundBtn.querySelector('.font-mono').textContent = 'Ambient';
      soundBtn.classList.remove('border-purple-400/50', 'text-white');
    }
  });
}

function playSubtleVioletChime() {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(432, audioCtx.currentTime); // 432 Hz warm harmonic
  osc.frequency.exponentialRampToValueAtTime(576, audioCtx.currentTime + 1.2);

  gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 2.0);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + 2.0);
}
