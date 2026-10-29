/**
 * DWI HARDIANTO - WORLD CLASS PERSONAL BRANDING INTERACTIONS
 * Powered by Lenis Smooth Scroll, GSAP ScrollTrigger & Web Audio Synth
 */

(function () {
  'use strict';

  // ==========================================
  // 1. LENIS SMOOTH SCROLL & GSAP SYNC
  // ==========================================
  let lenis = null;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false
    });

    // Sync with GSAP ScrollTrigger if present
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  }

  // Top Scroll Progress Bar Handler
  const progressBar = document.getElementById('scroll-progress-bar');
  if (progressBar) {
    window.addEventListener('scroll', function () {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
      progressBar.style.width = `${progress}%`;
    }, { passive: true });
  }

  // ==========================================
  // 2. DATA REPOSITORY: ENTERPRISE PROJECTS
  // ==========================================
  const projectsData = [
    {
      id: 'poultryshield',
      category: 'enterprise',
      title: 'PoultryShield Enterprise',
      subtitle: 'GIS Biosecurity Command Center & Automated Decision Platform',
      client: 'PT JAPFA Comfeed Indonesia Tbk / Trinusa Nutri Biotek',
      year: '2025 - 2026',
      image: 'assets/images/projects/shield1.png',
      badge: 'Flagship Enterprise',
      description: 'Unified spatial biosecurity command center, early warning system (EWS), and automated commercial mitigation decision platform engineered for large-scale enterprise poultry operations. Features precision farm geofencing, sub-zone disease containment, and automated regulatory task generation.',
      highlights: [
        'Spatial Outbreak Prevention with 3km radius ring-buffer automated risk contagion modeling',
        'Expert System Rule Matrix Engine automatically diagnosing root causes and generating tactical SOPs',
        'Economic Risk Valuation calculating at-risk flock valuation vs mitigation product procurement budget',
        'Automated official PDF/print dispatch of Mitigation Task Orders (SP) with real-time field tracking'
      ],
      techStack: ['NestJS', 'PostgreSQL', 'PostGIS', 'TypeScript', 'Next.js', 'Docker', 'Redis', 'GIS Engine'],
      metrics: {
        uptime: '99.98%',
        scale: 'National Multi-Cluster',
        impact: 'Early Outbreak Mitigated'
      }
    },
    {
      id: 'bfc-farm',
      category: 'mobile',
      title: 'BFC Farm Mobile & Cloud ERP',
      subtitle: 'Smart Poultry Farming Operations & Real-Time Telemetry',
      client: 'BFC Farm Group',
      year: '2025',
      image: 'assets/images/projects/bfc1.png',
      badge: 'Mobile & Cloud',
      description: 'Comprehensive mobile and cloud platform for managing poultry operations across multi-branch farms. Connects on-field poultry managers with centralized inventory, feed conversion ratio (FCR) analytics, flock mortality alerts, and offline-first field synchronization.',
      highlights: [
        'Cross-platform Flutter application with resilient offline-first data synchronization',
        'Centralized Laravel 12 API with Sanctum token authentication and role-based permissions',
        'Real-time automated feed, vaccine scheduling, and growth performance telemetry',
        'Automated operational cost accounting and harvest batch profitability analysis'
      ],
      techStack: ['Flutter', 'Dart', 'Laravel API', 'MySQL', 'REST API', 'Offline Sync', 'Sanctum'],
      metrics: {
        uptime: '99.9%',
        scale: 'Multi-Farm Operations',
        impact: '35% Efficiency Boost'
      }
    },
    {
      id: 'secure-dcs',
      category: 'enterprise',
      title: 'Secure DCS (Document Control System)',
      subtitle: 'Enterprise ISO-Standard Audit & Document Vault',
      client: 'Enterprise Industrial Manufacturing',
      year: '2025 - 2026',
      image: 'assets/images/projects/dcss1.png',
      badge: 'Enterprise Security',
      description: 'High-security document management platform built to strictly adhere to ISO compliance and enterprise governance. Features multi-level collective permissions, cryptographic document versioning, automated review workflows, and immutable audit logs.',
      highlights: [
        'Granular Node Grant permission matrix (audience grants, collective departmental authorization)',
        'Immutable audit event trail logging all user actions, document lifecycle changes, and exports',
        'Automated watermarking and secure expiring link generation for external stakeholders',
        'Engineered on modern Laravel 13, SQLite/PostgreSQL, Tailwind CSS, and zero-trust security'
      ],
      techStack: ['Laravel 13', 'PHP 8.3', 'PostgreSQL', 'RBAC', 'Audit Logging', 'Tailwind CSS', 'Docker'],
      metrics: {
        uptime: '100%',
        scale: 'Strict ISO Compliance',
        impact: 'Zero Data Leakage'
      }
    },
    {
      id: 'pulsago',
      category: 'fintech',
      title: 'PulsaGo Fintech & Mobile Gateway',
      subtitle: 'High-Throughput PPOB & Digital Wallet Payment Solution',
      client: 'PulsaGo Digital',
      year: '2025 - 2026',
      image: 'assets/images/projects/payy1.png',
      badge: 'Fintech & PPOB',
      description: 'Ultra-fast automated payment gateway and B2B/B2C digital billing ecosystem. Delivers instantaneous prepaid credit (pulsa), utility vouchers, data packages, and e-money top-ups with high-throughput API integrations and automated balance ledger reconciliation.',
      highlights: [
        'Sub-second transaction processing pipeline with automated supplier failover routing',
        'Cross-platform Flutter mobile customer client alongside resilient enterprise Laravel web portal',
        'Automated double-entry ledger database preventing race conditions and duplicate debits',
        'Integrated QRIS, virtual accounts, and instant digital receipt thermal printer support'
      ],
      techStack: ['Flutter', 'Laravel', 'MariaDB', 'Redis Queue', 'Payment Gateway', 'WebSockets'],
      metrics: {
        uptime: '99.95%',
        scale: 'Thousands Daily Trx',
        impact: '<800ms Avg Settlement'
      }
    },
    {
      id: 'efactory',
      category: 'enterprise',
      title: 'Smart E-Factory & Industrial MES',
      subtitle: 'Manufacturing Execution & Machine Telemetry Center',
      client: 'Industrial Agro & Manufacturing Facilities',
      year: '2024 - 2025',
      image: 'assets/images/projects/efactory.png',
      badge: 'Industry 4.0',
      description: 'Comprehensive industrial operations platform designed for real-time plant monitoring, equipment overall equipment effectiveness (OEE) tracking, line balancing, batch trace analysis, and automated preventative maintenance schedules.',
      highlights: [
        'Interactive real-time factory floor visualization with live throughput indicators',
        'Live downtime tracking, defect categorization, and technician dispatch alerts',
        'End-to-end batch traceability from raw material ingestion to finished packaging',
        'High-density dashboard with instant exportable executive performance metrics'
      ],
      techStack: ['Vue/React', 'PHP/Laravel', 'MySQL Enterprise', 'IoT Telemetry', 'Chart.js', 'REST API'],
      metrics: {
        uptime: '99.9%',
        scale: 'Full Factory Lines',
        impact: 'Reduced Downtime 22%'
      }
    },
    {
      id: 'core-banking',
      category: 'fintech',
      title: 'Enterprise Core Financial Platform',
      subtitle: 'Multi-Branch Ledger, Loan Risk Scoring & Asset Control',
      client: 'Financial & Leasing Institutions',
      year: '2023 - 2024',
      image: 'assets/images/projects/core1.png',
      badge: 'Core Banking',
      description: 'Enterprise financial core managing multi-branch credit allocations, collateral valuations, automated amortizations, delinquency early-detection alerts, and consolidated central bank regulatory reporting.',
      highlights: [
        'Multi-entity, multi-currency ledger with strict transactional consistency',
        'Custom credit scoring algorithm factoring historical payment vectors and risk thresholds',
        'Automated contract generation, penalty calculation, and multi-tier approval workflows',
        'Zero-downtime database replication with automated point-in-time disaster recovery'
      ],
      techStack: ['PHP Enterprise', 'SQL Server / Oracle', 'Bootstrap/Tailwind', 'SOAP & REST', 'Active Directory'],
      metrics: {
        uptime: '99.99%',
        scale: 'National Branch Network',
        impact: 'Zero Accounting Drift'
      }
    },
    {
      id: 'trinusa-commercial',
      category: 'enterprise',
      title: 'Trinusa Agro-Biotech Commercial Suite',
      subtitle: 'Veterinary Pharma Distribution & Sales Automation',
      client: 'Trinusa Nutri Biotek Group',
      year: '2024 - 2025',
      image: 'assets/images/projects/trinusa1.jpeg',
      badge: 'Agro-Biotech',
      description: 'Specialized enterprise distribution system designed for livestock veterinary pharmaceuticals, disinfectants, and nutritional biosecurity formulations with cold-chain batch tracking and integrated CRM.',
      highlights: [
        'Field sales force automation with route planning and customer purchase histories',
        'Expiry-date batch rotation and cold-chain compliance tracking across warehouses',
        'Automated incentive, commission, and dealer credit limit verification engine',
        'Integrated with PoultryShield to fulfill automated mitigation order dispatches'
      ],
      techStack: ['Laravel', 'PostgreSQL', 'Livewire', 'Tailwind CSS', 'Redis', 'PDF Engine'],
      metrics: {
        uptime: '99.9%',
        scale: 'Nationwide Distribution',
        impact: 'Optimized Delivery Cycles'
      }
    },
    {
      id: 'project-operations',
      category: 'enterprise',
      title: 'Enterprise Operations Command Center',
      subtitle: 'Unified Operational Resource Planning & Telemetry',
      client: 'ITOCHU Group Subsidiary / PT ABP',
      year: '2022 - 2024',
      image: 'assets/images/projects/proj1.png',
      badge: 'Infrastructure & ERP',
      description: 'Unified command center consolidating factory logistics, network health telemetry, warehouse inventory, and employee workflow automation for an international manufacturing subsidiary.',
      highlights: [
        'Hybrid operational synchronization bridging local on-premise infrastructure with cloud services',
        'Interactive real-time equipment uptime monitoring and failover network triggers',
        'Integrated Active Directory SSO and Microsoft 365 enterprise automation pipelines',
        'Eliminated manual spreadsheet auditing across multiple internal departments'
      ],
      techStack: ['CodeIgniter / PHP', 'MySQL', 'Mikrotik API', 'Hyper-V', 'Active Directory', 'JavaScript'],
      metrics: {
        uptime: '99.95%',
        scale: 'Corporate Wide',
        impact: '60% Faster Reporting'
      }
    },
    {
      id: 'aurafocus',
      category: 'mobile',
      title: 'AuraFocus Soundscape Workstation',
      subtitle: 'Offline-First Audio Synthesizer & Binaural Beats Engine',
      client: 'Personal & Indie Release',
      year: '2026',
      image: 'assets/images/projects/61.png',
      badge: 'Mobile & Audio DSP',
      description: 'Android audio workstation engineered for deep work productivity and restorative sleep. Features gapless multi-track layering of up to 6 simultaneous soundscapes and 40Hz Gamma binaural beat synthesis.',
      highlights: [
        'Custom audio DSP architecture using Riverpod, Drift SQLite, and Android Foreground Service',
        'Ultradian rhythm focus countdown timer with automated 60-second linear volume fade curve',
        '100% offline-first local persistence requiring zero internet connection for core features',
        'Implemented adaptive battery optimization and Google AdMob rewarded passes'
      ],
      techStack: ['Flutter', 'Dart', 'Riverpod', 'Drift SQLite', 'Audio DSP', 'Android 14+'],
      metrics: {
        uptime: 'Offline First',
        scale: 'Universal Android',
        impact: 'Studio Quality Audio'
      }
    }
  ];

  // ==========================================
  // 3. SYNTHESIZED WEB AUDIO SOUND FX
  // Zero external audio files required!
  // ==========================================
  let audioCtx = null;
  let soundEnabled = true;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playFuturisticClick(freq = 800, duration = 0.04) {
    if (!soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.4, audioCtx.currentTime + duration);

      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {}
  }

  function playChime(freq = 1200) {
    if (!soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, audioCtx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.2);
    } catch (e) {}
  }

  // Audio Toggle Button
  const audioToggleBtn = document.getElementById('audio-toggle');
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', function () {
      soundEnabled = !soundEnabled;
      if (soundEnabled) {
        audioToggleBtn.classList.remove('muted');
        audioToggleBtn.innerHTML = `
          <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
          <span class="text-xs text-cyan-300 font-mono hidden sm:inline">AUDIO ON</span>
        `;
        playChime(1000);
        showToast('System Audio Feedback: Enabled', 'info');
      } else {
        audioToggleBtn.classList.add('muted');
        audioToggleBtn.innerHTML = `
          <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
          <span class="text-xs text-slate-500 font-mono hidden sm:inline">MUTED</span>
        `;
        showToast('System Audio Feedback: Muted', 'info');
      }
    });
  }

  // ==========================================
  // 4. MOUSE SPOTLIGHT FOLLOWER
  // ==========================================
  const spotlight = document.querySelector('.mouse-spotlight');
  if (spotlight && window.innerWidth >= 768) {
    let sX = window.innerWidth / 2;
    let sY = window.innerHeight / 2;
    let targetSX = sX;
    let targetSY = sY;

    window.addEventListener('mousemove', function (e) {
      targetSX = e.clientX;
      targetSY = e.clientY;
    }, { passive: true });

    function updateSpotlight() {
      sX += (targetSX - sX) * 0.15;
      sY += (targetSY - sY) * 0.15;
      spotlight.style.transform = `translate(${sX}px, ${sY}px) translate(-50%, -50%)`;
      requestAnimationFrame(updateSpotlight);
    }
    updateSpotlight();
  }

  // ==========================================
  // 5. MAGNETIC BUTTONS EFFECT
  // ==========================================
  if (window.innerWidth >= 768) {
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', function (e) {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
      });
      btn.addEventListener('mouseleave', function () {
        btn.style.transform = 'translate(0px, 0px)';
      });
    });
  }

  // ==========================================
  // 6. HEADER SCROLL DETECTION & NAVIGATION
  // ==========================================
  const header = document.querySelector('header.site-header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function () {
      playFuturisticClick(700);
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // ==========================================
  // 7. RENDER PROJECTS & 3D TILT CARDS
  // ==========================================
  const projectsGrid = document.getElementById('projects-grid');

  function renderProjects(filter = 'all') {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';

    const filtered = filter === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.category === filter);

    filtered.forEach((p, idx) => {
      const card = document.createElement('div');
      card.className = 'glass-card rounded-2xl p-6 flex flex-col justify-between group tilt-card project-card cursor-pointer opacity-0';
      card.dataset.projectId = p.id;

      const techBadgesHtml = p.techStack.slice(0, 4).map(t => `<span class="tech-pill">${t}</span>`).join('');
      const moreTechCount = p.techStack.length > 4 ? `<span class="tech-pill text-cyan-400">+${p.techStack.length - 4}</span>` : '';

      card.innerHTML = `
        <div class="tilt-inner flex flex-col h-full">
          <!-- Top Meta Bar -->
          <div class="flex items-center justify-between gap-2 mb-4">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              ${p.badge}
            </span>
            <span class="text-xs font-mono text-slate-400">${p.year}</span>
          </div>

          <!-- Screenshot Preview -->
          <div class="project-card-image-wrapper aspect-video mb-5 bg-slate-900 border border-white/5">
            <img src="${p.image}" alt="${p.title}" loading="lazy" class="w-full h-full object-cover object-top" />
            <div class="project-overlay flex items-end p-4">
              <span class="text-xs font-mono text-white/90 bg-black/60 px-2.5 py-1 rounded backdrop-blur-md border border-white/10 flex items-center gap-1">
                <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Click to Inspect
              </span>
            </div>
          </div>

          <!-- Project Title & Subtitle -->
          <div class="mb-4">
            <h3 class="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
              ${p.title}
              <svg class="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </h3>
            <p class="text-sm text-cyan-400 font-mono mt-0.5">${p.subtitle}</p>
            <p class="text-xs text-slate-400 mt-1">Client: <span class="text-slate-300">${p.client}</span></p>
          </div>

          <!-- Description Preview -->
          <p class="text-sm text-slate-300/90 line-clamp-3 mb-5 leading-relaxed font-normal">
            ${p.description}
          </p>

          <!-- Tech Stack Tags -->
          <div class="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-1.5 items-center">
            ${techBadgesHtml}
            ${moreTechCount}
          </div>
        </div>
      `;

      // Click card to open detail modal
      card.addEventListener('click', function () {
        playChime(950);
        openProjectModal(p.id);
      });

      // 3D Card Tilt listener (desktop)
      if (window.innerWidth >= 768) {
        setupCardTilt(card);
      }

      projectsGrid.appendChild(card);
    });

    // GSAP Stagger Entrance for Project Cards
    if (typeof gsap !== 'undefined') {
      gsap.to('.project-card', {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        clearProps: 'transform'
      });
    } else {
      document.querySelectorAll('.project-card').forEach(c => c.style.opacity = '1');
    }
  }

  // 3D Tilt Matrix Calculation
  function setupCardTilt(card) {
    card.addEventListener('mousemove', function (e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', function () {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  }

  // Portfolio Filter Buttons
  const filterTabs = document.querySelectorAll('.filter-tab');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', function () {
      playFuturisticClick(900);
      filterTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      const filter = this.dataset.filter;

      if (typeof gsap !== 'undefined') {
        gsap.to('.project-card', {
          opacity: 0,
          scale: 0.95,
          duration: 0.2,
          onComplete: () => renderProjects(filter)
        });
      } else {
        renderProjects(filter);
      }
    });
  });

  // Initial Render
  renderProjects('all');

  // ==========================================
  // 8. FULLSCREEN PROJECT DETAIL MODAL
  // ==========================================
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  let currentProjectIndex = 0;

  function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;
    currentProjectIndex = projectsData.findIndex(p => p.id === projectId);

    const highlightsHtml = project.highlights.map(h => `
      <li class="flex items-start gap-3 text-slate-300 text-sm">
        <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
        <span>${h}</span>
      </li>
    `).join('');

    const techPills = project.techStack.map(t => `<span class="tech-pill text-cyan-300 border-cyan-500/30 bg-cyan-500/5">${t}</span>`).join('');

    modalContent.innerHTML = `
      <div class="space-y-6">
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="px-2.5 py-0.5 rounded text-xs font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">${project.badge}</span>
              <span class="text-xs font-mono text-slate-400">${project.year}</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">${project.title}</h2>
            <p class="text-sm font-mono text-cyan-400 mt-0.5">${project.subtitle}</p>
          </div>
          <div class="text-left sm:text-right">
            <span class="text-xs text-slate-400 block font-mono">CLIENT / PARTNER</span>
            <span class="text-sm font-semibold text-slate-200">${project.client}</span>
          </div>
        </div>

        <!-- High-res Image Preview -->
        <div class="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950 shadow-2xl group">
          <img src="${project.image}" alt="${project.title}" class="w-full max-h-[550px] object-contain mx-auto" />
          <a href="${project.image}" target="_blank" class="absolute bottom-4 right-4 bg-black/75 hover:bg-cyan-500 hover:text-black transition-all px-3 py-1.5 rounded-lg text-xs font-mono backdrop-blur-md border border-white/10 flex items-center gap-1.5 text-white">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Open Full Resolution
          </a>
        </div>

        <!-- Metrics Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div class="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
            <span class="text-xs font-mono text-slate-400">UPTIME / RELIABILITY</span>
            <p class="text-lg font-bold font-mono text-cyan-400 mt-0.5">${project.metrics.uptime}</p>
          </div>
          <div class="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
            <span class="text-xs font-mono text-slate-400">DEPLOYMENT SCALE</span>
            <p class="text-lg font-bold font-mono text-violet-400 mt-0.5">${project.metrics.scale}</p>
          </div>
          <div class="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
            <span class="text-xs font-mono text-slate-400">BUSINESS IMPACT</span>
            <p class="text-lg font-bold font-mono text-emerald-400 mt-0.5">${project.metrics.impact}</p>
          </div>
        </div>

        <!-- Architecture Breakdown -->
        <div class="space-y-4">
          <h4 class="text-base font-bold font-heading text-white flex items-center gap-2">
            <span class="w-2 h-2 rounded bg-cyan-400"></span>
            System Architecture & Core Responsibilities
          </h4>
          <p class="text-slate-300 text-sm leading-relaxed">${project.description}</p>
          <ul class="space-y-2 mt-2">
            ${highlightsHtml}
          </ul>
        </div>

        <!-- Tech Stack -->
        <div class="pt-2">
          <span class="text-xs font-mono text-slate-400 block mb-2">ENGINEERING STACK & TOOLS</span>
          <div class="flex flex-wrap gap-1.5">
            ${techPills}
          </div>
        </div>

        <!-- Navigation Next / Prev -->
        <div class="flex items-center justify-between border-t border-white/10 pt-4 mt-6">
          <button id="modal-prev-btn" class="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 hover:text-white transition flex items-center gap-2">
            &larr; Previous Project
          </button>
          <button id="modal-next-btn" class="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 hover:text-white transition flex items-center gap-2">
            Next Project &rarr;
          </button>
        </div>
      </div>
    `;

    // Hook Next/Prev in modal
    document.getElementById('modal-prev-btn').addEventListener('click', function () {
      playFuturisticClick(750);
      currentProjectIndex = (currentProjectIndex - 1 + projectsData.length) % projectsData.length;
      openProjectModal(projectsData[currentProjectIndex].id);
    });

    document.getElementById('modal-next-btn').addEventListener('click', function () {
      playFuturisticClick(850);
      currentProjectIndex = (currentProjectIndex + 1) % projectsData.length;
      openProjectModal(projectsData[currentProjectIndex].id);
    });

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (lenis) lenis.stop();
  }

  function closeModal() {
    playFuturisticClick(600);
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    if (lenis) lenis.start();
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // ==========================================
  // 9. GSAP SCROLL REVEALS & MOTION TIMELINES
  // ==========================================
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {

    // Hero Stagger Animation on Initial Load
    gsap.from('.hero-content-anim > *', {
      opacity: 0,
      y: 35,
      duration: 0.9,
      stagger: 0.12,
      ease: 'power3.out',
      delay: 0.1
    });

    gsap.from('.hero-profile-anim', {
      opacity: 0,
      scale: 0.92,
      y: 40,
      duration: 1.1,
      ease: 'power3.out',
      delay: 0.35
    });

    // Fade-up Section Headers & Blocks
    document.querySelectorAll('[data-reveal="fade-up"]').forEach(el => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 45,
        duration: 0.85,
        ease: 'power3.out'
      });
    });

    // Staggered Cards (About Pillars, Skills, Contact)
    document.querySelectorAll('[data-stagger="card"]').forEach(container => {
      const cards = container.children;
      gsap.from(cards, {
        scrollTrigger: {
          trigger: container,
          start: 'top 82%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        scale: 0.96,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out'
      });
    });

    // Timeline Items Animation
    document.querySelectorAll('.timeline-item').forEach((item, idx) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        x: -40,
        duration: 0.8,
        delay: idx * 0.05,
        ease: 'power3.out'
      });
    });

    // Architecture Capabilities Stack Items Stagger
    ScrollTrigger.create({
      trigger: '#skills',
      start: 'top 75%',
      once: true,
      onEnter: () => {
        gsap.from('.stack-item', {
          opacity: 0,
          y: 18,
          duration: 0.55,
          stagger: 0.035,
          ease: 'power2.out',
          clearProps: 'transform,opacity'
        });
      }
    });

    // Animated Numbers Counter in Metrics Section
    ScrollTrigger.create({
      trigger: '.metric-item',
      start: 'top 85%',
      once: true,
      onEnter: () => {
        document.querySelectorAll('.counter-number').forEach(counter => {
          const target = parseFloat(counter.dataset.target);
          const decimals = parseInt(counter.dataset.decimals || 0);
          const obj = { val: 0 };

          gsap.to(obj, {
            val: target,
            duration: 2.0,
            ease: 'power2.out',
            onUpdate: () => {
              counter.textContent = decimals > 0 
                ? obj.val.toFixed(decimals) 
                : Math.floor(obj.val);
            }
          });
        });
      }
    });

  } else {
    // Fallback if GSAP is blocked
    document.querySelectorAll('.counter-number').forEach(counter => {
      counter.textContent = counter.dataset.target;
    });
  }

  // ==========================================
  // 10. INTERACTIVE TERMINAL HUD
  // ==========================================
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');

  if (terminalInput && terminalOutput) {
    terminalInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        const cmd = this.value.trim().toLowerCase();
        this.value = '';
        executeTerminalCommand(cmd);
      }
    });
  }

  function executeTerminalCommand(cmd) {
    playFuturisticClick(900);
    const line = document.createElement('div');
    line.className = 'mb-1';
    line.innerHTML = `<span class="text-cyan-400">guest@dwi-architect:~$</span> <span class="text-white">${cmd}</span>`;
    terminalOutput.appendChild(line);

    const resp = document.createElement('div');
    resp.className = 'mb-3 text-slate-300 text-xs';

    switch (cmd) {
      case 'help':
        resp.innerHTML = `
          <div class="space-y-1 text-slate-300">
            <div><span class="text-cyan-400 font-bold">whoami</span> - Display Dwi Hardianto identity and background</div>
            <div><span class="text-cyan-400 font-bold">skills</span> - Inspect technical stack & architectural capabilities</div>
            <div><span class="text-cyan-400 font-bold">projects</span> - List flagship enterprise projects</div>
            <div><span class="text-cyan-400 font-bold">exp</span> - Print career milestone history</div>
            <div><span class="text-cyan-400 font-bold">contact</span> - Show direct contact coordinates</div>
            <div><span class="text-cyan-400 font-bold">clear</span> - Clear terminal window buffer</div>
          </div>
        `;
        break;

      case 'whoami':
        resp.innerHTML = `
          <div class="text-cyan-300 font-bold">Dwi Hardianto</div>
          <div class="text-slate-300">IT Manager at OUCRU Indonesia (Oxford University Clinical Research Unit) & Founder of Bedulur Teknologi Indonesia.</div>
          <div class="text-slate-400">14+ Years of hands-on mastery: Network, Systems, Cloud, Enterprise Backend, Flutter, and Full-Stack Architecture.</div>
        `;
        break;

      case 'skills':
        resp.innerHTML = `
          <div class="text-cyan-300 font-bold">TECHNICAL ECOSYSTEM:</div>
          <div>• Backend: NestJS, Laravel, PHP 8+, TypeScript, PostGIS, REST/GraphQL</div>
          <div>• Frontend & Mobile: Flutter/Dart, React/Next.js, Three.js, Tailwind CSS</div>
          <div>• Infrastructure: Windows Server AD, Linux (Debian/Ubuntu), Hyper-V, VMware, Docker</div>
          <div>• Networking: Mikrotik, Cisco, Fortigate UTM, Sophos, VPN Site-to-Site</div>
          <div>• Databases: PostgreSQL, MariaDB/MySQL, SQL Server, Redis</div>
        `;
        break;

      case 'projects':
        resp.innerHTML = `
          <div class="text-cyan-300 font-bold">FLAGSHIP PROJECTS:</div>
          <div>1. PoultryShield Enterprise - GIS Biosecurity Command Center (JAPFA)</div>
          <div>2. BFC Farm Mobile - Commercial Poultry Operations & Telemetry</div>
          <div>3. Secure DCS - Enterprise ISO Document Control Vault</div>
          <div>4. PulsaGo - Automated Payment Gateway & Digital FinTech</div>
          <div>5. Smart E-Factory - Manufacturing Execution System (MES)</div>
          <div>6. AuraFocus - Offline Audio Workstation & 40Hz DSP</div>
        `;
        break;

      case 'exp':
        resp.innerHTML = `
          <div class="space-y-1">
            <div>• <span class="text-cyan-400">2024 - Present:</span> IT Manager - OUCRU Indonesia (Oxford University Clinical Research Unit)</div>
            <div>• <span class="text-cyan-400">2018 - 2024:</span> IT Chief - PT Aneka Bumi Pratama (ITOCHU Group)</div>
            <div>• <span class="text-cyan-400">2018 - 2019:</span> Senior System Admin - PT Mitra Integrasi Informatika</div>
            <div>• <span class="text-cyan-400">2015 - 2018:</span> IT System Admin - PT Mitsui Leasing Capital Indonesia</div>
            <div>• <span class="text-cyan-400">2014 - 2015:</span> IT Support Officer - PT Rezki Curah Prima</div>
            <div>• <span class="text-cyan-400">2010 - 2014:</span> Network Administrator - Platinum Internet Cafe</div>
          </div>
        `;
        break;

      case 'contact':
        resp.innerHTML = `
          <div>Email: <a href="mailto:dwihardianto13@gmail.com" class="text-cyan-400 hover:underline">dwihardianto13@gmail.com</a></div>
          <div>WhatsApp: <a href="https://wa.me/6281368337015" target="_blank" class="text-cyan-400 hover:underline">+62 813-6833-7015</a></div>
          <div>LinkedIn: <a href="https://www.linkedin.com/in/dwi-hardianto-299045104/" target="_blank" class="text-cyan-400 hover:underline">dwi-hardianto-299045104</a></div>
          <div>GitHub: <a href="https://github.com/dwihardianto" target="_blank" class="text-cyan-400 hover:underline">github.com/dwihardianto</a></div>
        `;
        break;

      case 'clear':
        terminalOutput.innerHTML = '';
        return;

      default:
        resp.innerHTML = `<span class="text-rose-400">Command not recognized: '${cmd}'. Type 'help' for available commands.</span>`;
        break;
    }

    terminalOutput.appendChild(resp);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  // ==========================================
  // 11. TOAST NOTIFICATION UTILITY
  // ==========================================
  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';

    const iconColor = type === 'success' ? 'text-emerald-400' : 'text-cyan-400';
    toast.innerHTML = `
      <svg class="w-5 h-5 ${iconColor} shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px) scale(0.9)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // Copy buttons
  document.querySelectorAll('[data-copy-target]').forEach(btn => {
    btn.addEventListener('click', function () {
      playChime(1100);
      const text = this.dataset.copyTarget;
      navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied to clipboard: ${text}`, 'success');
      }).catch(() => {
        showToast(`Selected: ${text}`, 'info');
      });
    });
  });

  // ==========================================
  // 12. CONTACT FORM INTERACTIVE HANDLER
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      playChime(1300);

      const name = document.getElementById('cf-name').value;
      const email = document.getElementById('cf-email').value;
      const subject = document.getElementById('cf-subject').value;
      const message = document.getElementById('cf-message').value;

      const waText = encodeURIComponent(
        `Halo Mas Dwi Hardianto,\n\nNama: ${name}\nEmail: ${email}\nTopik: ${subject}\n\nPesan:\n${message}\n\n(Terkirim dari Homepage Portfolio)`
      );

      const waUrl = `https://wa.me/6281368337015?text=${waText}`;
      showToast('Opening WhatsApp direct channel...', 'success');

      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 600);
    });
  }

  // Global exposure for debugging
  window.DwiPortfolio = {
    projects: projectsData,
    openProject: openProjectModal,
    showToast: showToast,
    lenis: lenis
  };

})();
