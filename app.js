(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const translations = {
    en: {
      nav_work:'Work', nav_exp:'Experience', nav_skills:'Skills', nav_about:'About', nav_contact:'Contact',
      hero_status:'Open to junior software opportunities', hero_title_1:'Software that works', hero_title_2:'in the real world.',
      hero_lead:'I’m Oğuzhan — a Junior Software Developer and Technical Engineer in Istanbul. I build, integrate and validate web, mobile and hardware-connected systems with Java, Spring Boot, Flutter and modern developer tools.',
      hero_cta_work:'Explore my work', hero_cta_cv:'View CV', meta_location_label:'Based in', meta_work_label:'Work model', meta_work_value:'Remote / Hybrid', meta_focus_label:'Focus', meta_focus_value:'Software · QA · Integration',
      console_role:'Junior Software Developer', console_four:'Debug · Test · Ship', console_flow:'How I work', scroll_label:'Scroll to see selected work',
      proof_degree:'Computer Programming graduate', proof_engineer:'Technical Engineer · LedAjans', proof_china:'In-person engineering training in China', proof_alpha:'Open-source mobile product',
      section_selected:'Selected work', work_title:'Products I’ve helped move from idea to working software.', work_intro:'I use AI-assisted development where it adds speed, while staying responsible for requirements, integration, testing, debugging, documentation and delivery.',
      bismillah_type:'Mobile product · Open source', bismillah_desc:'A local-first Islamic companion for daily worship, Quran and learning. The public alpha combines offline-first flows, source-grounded content, multilingual support and a deterministic assistant layer.', bismillah_p1:'Offline prayer & Quran flows', bismillah_p2:'TR / EN / AR content', bismillah_p3:'Unit + widget validation', bismillah_p4:'Real-device Android checks',
      hr_type:'Full-stack web application', hr_title:'HR Management System', hr_desc:'Employee, inventory, assignment and personnel-record workflows with JWT authentication, role-based access and a Spring Boot + React architecture.',
      restaurant_type:'Backend / full-stack portfolio project', restaurant_title:'Restaurant Reservation', restaurant_desc:'Reservation and menu flows with registration, JWT access, user/admin roles, relational persistence and API validation through Postman.',
      film_type:'Web application', film_title:'Film Library', film_desc:'A film discovery and personal-library experience integrating TMDB data with authentication and MySQL-backed collection management.', view_repo:'View repository',
      section_experience:'Experience', experience_title:'Technical work, software delivery and real systems.', experience_intro:'My background connects software projects with hands-on technical support, field troubleshooting and system integration.', present:'Present', led_role:'Technical Engineer', led_desc:'On-site and remote technical support for LED display systems: controller setup, software integration, testing, commissioning and troubleshooting across hardware, software, network and field-operation issues.', tag_support:'Technical support', tag_integration:'System integration', tag_debug:'Troubleshooting', in_person:'In person', huidu_role:'Engineering Training', huidu_desc:'Hands-on training in LED control systems, controller and software configuration, hardware-software integration, diagnostics, troubleshooting and field deployment practices.', tag_hardware:'Hardware + software', tag_field:'Field systems', jforce_role:'Software Development Intern', jforce_desc:'Worked on a full-stack HR application using Java, Spring Boot, React, REST APIs and relational database concepts; contributed to integration, testing, troubleshooting and delivery.',
      section_toolkit:'Toolkit', skills_title:'A practical stack for building and validating products.', skills_intro:'I’m strongest when I can connect requirements, implementation, integration and verification instead of treating them as separate steps.', skill_backend:'Backend & APIs', skill_product:'Mobile & Frontend', skill_data:'Data & Persistence', skill_quality:'Quality & Delivery',
      section_about:'About', about_title:'I use AI to move faster — not to skip responsibility.', about_p1:'I’m a Computer Programming associate graduate who enjoys turning a clear problem into something testable and usable. My experience ranges from Spring Boot and React projects to Flutter mobile development and real-world technical systems.', about_p2:'For complex implementation work, I use AI-assisted coding and agent workflows. I keep ownership of the product requirements, feature breakdown, integration, debugging, test execution, verification, documentation and Git/GitHub workflow.', about_p3:'I’m looking for a junior software development, application support, QA/test or technical integration role where I can keep strengthening my core engineering skills inside a real team.',
      process_1_title:'Understand', process_1_desc:'Clarify the problem, user flow and acceptance criteria.', process_2_title:'Build', process_2_desc:'Implement with the right tools, including AI where useful.', process_3_title:'Verify', process_3_desc:'Test real outputs, reproduce bugs and validate fixes.', process_4_title:'Deliver', process_4_desc:'Document decisions and keep the Git workflow clean.', education_label:'Education', education_title:'Associate Degree · Computer Programming',
      section_contact:'Contact', contact_title:'Have a junior role where I can build, learn and contribute?', contact_desc:'I’m based in Istanbul and open to hybrid roles in Istanbul or remote opportunities across Türkiye.', contact_cv:'CV / Resume', footer_role:'Junior Software Developer · Istanbul', footer_note:'Built as a focused, recruiter-friendly portfolio.', back_top:'Back to top ↑'
    },
    tr: {
      nav_work:'Projeler', nav_exp:'Deneyim', nav_skills:'Yetkinlikler', nav_about:'Hakkımda', nav_contact:'İletişim',
      hero_status:'Junior yazılım fırsatlarına açığım', hero_title_1:'Gerçek dünyada çalışan', hero_title_2:'yazılımlar geliştiriyorum.',
      hero_lead:'Ben Oğuzhan — İstanbul’da yaşayan Junior Yazılım Geliştirici ve Teknik Mühendisim. Java, Spring Boot, Flutter ve modern geliştirici araçlarıyla web, mobil ve donanımla bağlantılı sistemleri geliştiriyor, entegre ediyor ve doğruluyorum.',
      hero_cta_work:'Projelerimi incele', hero_cta_cv:'CV’yi görüntüle', meta_location_label:'Konum', meta_work_label:'Çalışma modeli', meta_work_value:'Remote / Hibrit', meta_focus_label:'Odak', meta_focus_value:'Yazılım · QA · Entegrasyon',
      console_role:'Junior Yazılım Geliştirici', console_four:'Hata çöz · Test et · Teslim et', console_flow:'Çalışma biçimim', scroll_label:'Seçili projeleri görmek için kaydır',
      proof_degree:'Bilgisayar Programcılığı mezunu', proof_engineer:'Teknik Mühendis · LedAjans', proof_china:'Çin’de yüz yüze mühendislik eğitimi', proof_alpha:'Açık kaynak mobil ürün',
      section_selected:'Seçili projeler', work_title:'Fikirden çalışan ürüne taşıdığım projeler.', work_intro:'Hız kazandırdığı yerde yapay zekâ destekli geliştirme kullanırken gereksinim, entegrasyon, test, hata ayıklama, dokümantasyon ve teslim sorumluluğunu bende tutuyorum.',
      bismillah_type:'Mobil ürün · Açık kaynak', bismillah_desc:'Günlük ibadet, Kur’an ve öğrenme için local-first çalışan İslami yaşam uygulaması. Public alpha; çevrimdışı akışları, kaynak temelli içeriği, çoklu dil desteğini ve deterministik yardımcı katmanını bir araya getiriyor.', bismillah_p1:'Çevrimdışı namaz & Kur’an akışları', bismillah_p2:'TR / EN / AR içerik', bismillah_p3:'Birim + widget doğrulaması', bismillah_p4:'Gerçek Android cihaz kontrolleri',
      hr_type:'Full-stack web uygulaması', hr_title:'İnsan Kaynakları Yönetim Sistemi', hr_desc:'JWT kimlik doğrulama, rol tabanlı erişim ve Spring Boot + React mimarisiyle personel, envanter, atama ve personel kayıt akışları.',
      restaurant_type:'Backend / full-stack portföy projesi', restaurant_title:'Restoran Rezervasyon Sistemi', restaurant_desc:'Kayıt, JWT erişimi, kullanıcı/yönetici rolleri, ilişkisel veri saklama ve Postman API doğrulamasıyla rezervasyon ve menü akışları.',
      film_type:'Web uygulaması', film_title:'Film Kütüphanesi', film_desc:'TMDB verisini kimlik doğrulama ve MySQL tabanlı kişisel koleksiyon yönetimiyle birleştiren film keşif deneyimi.', view_repo:'Depoyu görüntüle',
      section_experience:'Deneyim', experience_title:'Teknik iş, yazılım teslimi ve gerçek sistemler.', experience_intro:'Geçmişim yazılım projelerini, sahada teknik destek, arıza analizi ve sistem entegrasyonuyla bir araya getiriyor.', present:'Devam', led_role:'Teknik Mühendis', led_desc:'LED ekran sistemlerinde yerinde ve uzaktan teknik destek; kontrolcü kurulumu, yazılım entegrasyonu, test, devreye alma ve donanım, yazılım, ağ ile saha kaynaklı sorunların çözümü.', tag_support:'Teknik destek', tag_integration:'Sistem entegrasyonu', tag_debug:'Arıza çözme', in_person:'Yüz yüze', huidu_role:'Mühendislik Eğitimi', huidu_desc:'LED kontrol sistemleri, kontrolcü ve yazılım yapılandırması, donanım-yazılım entegrasyonu, teşhis, arıza giderme ve saha devreye alma odaklı uygulamalı eğitim.', tag_hardware:'Donanım + yazılım', tag_field:'Saha sistemleri', jforce_role:'Yazılım Geliştirme Stajyeri', jforce_desc:'Java, Spring Boot, React, REST API ve ilişkisel veritabanı kavramlarıyla full-stack İK uygulamasında çalıştım; entegrasyon, test, hata çözme ve teslim süreçlerine katkı sağladım.',
      section_toolkit:'Teknik araçlar', skills_title:'Ürün geliştirmek ve doğrulamak için pratik bir teknoloji seti.', skills_intro:'Gereksinim, geliştirme, entegrasyon ve doğrulamayı ayrı işler yerine tek bir teslim süreci olarak bağlayabildiğimde en verimli çalışıyorum.', skill_backend:'Backend & API', skill_product:'Mobil & Frontend', skill_data:'Veri & Saklama', skill_quality:'Kalite & Teslim',
      section_about:'Hakkımda', about_title:'Yapay zekâyı sorumluluktan kaçmak için değil, daha hızlı ilerlemek için kullanıyorum.', about_p1:'Bilgisayar Programcılığı ön lisans mezunuyum. Net bir problemi test edilebilir ve kullanılabilir bir çözüme dönüştürmeyi seviyorum. Deneyimim Spring Boot ve React projelerinden Flutter mobil geliştirmeye ve gerçek teknik sistemlere uzanıyor.', about_p2:'Karmaşık geliştirmelerde yapay zekâ destekli kodlama ve ajan iş akışları kullanıyorum. Ürün gereksinimleri, özellik kırılımı, entegrasyon, hata ayıklama, testlerin yürütülmesi, doğrulama, dokümantasyon ve Git/GitHub akışının sorumluluğunu üstleniyorum.', about_p3:'Temel mühendislik bilgilerimi gerçek bir ekip içinde güçlendirebileceğim junior yazılım geliştirme, uygulama destek, QA/test veya teknik entegrasyon pozisyonları arıyorum.',
      process_1_title:'Anla', process_1_desc:'Problemi, kullanıcı akışını ve kabul kriterlerini netleştir.', process_2_title:'Geliştir', process_2_desc:'Uygun araçlarla, faydalı olduğunda AI desteğiyle uygula.', process_3_title:'Doğrula', process_3_desc:'Gerçek çıktıyı test et, hatayı üret ve düzeltmeyi doğrula.', process_4_title:'Teslim et', process_4_desc:'Kararları dokümante et ve Git akışını temiz tut.', education_label:'Eğitim', education_title:'Ön Lisans · Bilgisayar Programcılığı',
      section_contact:'İletişim', contact_title:'Gelişebileceğim ve katkı sunabileceğim bir junior pozisyonunuz var mı?', contact_desc:'İstanbul’dayım. İstanbul’da hibrit veya Türkiye genelinde remote fırsatlara açığım.', contact_cv:'CV / Özgeçmiş', footer_role:'Junior Yazılım Geliştirici · İstanbul', footer_note:'İşe alım odaklı, sade ve güçlü bir portföy olarak hazırlandı.', back_top:'Yukarı dön ↑'
    }
  };

  let lang = localStorage.getItem('portfolio-lang') || (navigator.language.toLowerCase().startsWith('tr') ? 'tr' : 'en');
  const langBtn = $('.lang-toggle span');
  const cvLinks = $$('.cv-link');

  function applyLang(next, animate = false) {
    lang = next;
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;
    const run = () => {
      $$('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) el.textContent = translations[lang][key];
      });
      langBtn.textContent = lang === 'en' ? 'TR' : 'EN';
      cvLinks.forEach(a => a.href = lang === 'tr' ? 'assets/cv/Oguzhan_Bilgi_CV_TR.pdf' : 'assets/cv/Oguzhan_Bilgi_CV_EN.pdf');
      document.title = lang === 'tr' ? 'Oğuzhan Bilgi — Yazılım Geliştirici' : 'Oğuzhan Bilgi — Software Developer';
    };
    if (animate && !reduced && window.anime) {
      anime({ targets:'main', opacity:[1,.25], duration:140, easing:'easeOutQuad', complete:() => { run(); anime({targets:'main',opacity:[.25,1],duration:240,easing:'easeOutQuad'}); } });
    } else run();
  }
  applyLang(lang);
  $('.lang-toggle').addEventListener('click', () => applyLang(lang === 'en' ? 'tr' : 'en', true));

  // Boot / hero choreography.
  window.addEventListener('load', () => {
    if (reduced || !window.anime) { $('.boot')?.remove(); $$('.hero-reveal').forEach(el => { el.style.opacity=1; el.style.transform='none'; }); return; }
    anime.timeline({ easing:'easeOutExpo' })
      .add({ targets:'.boot-line span', width:['0%','100%'], duration:650 })
      .add({ targets:'.boot-mark', scale:[.94,1], opacity:[.4,1], duration:400 }, '-=460')
      .add({ targets:'.boot-inner', opacity:[1,0], translateY:[0,-10], duration:350, delay:120 })
      .add({ targets:'.boot', translateY:['0%','-100%'], duration:680, complete:() => $('.boot')?.remove() })
      .add({ targets:'.hero-line', translateY:['110%','0%'], opacity:[0,1], delay:anime.stagger(90), duration:900 }, '-=250')
      .add({ targets:'.hero-reveal', opacity:[0,1], translateY:[18,0], delay:anime.stagger(75), duration:700 }, '-=680')
      .add({ targets:'.floating-chip', translateY:[12,0], opacity:[0,1], delay:anime.stagger(100), duration:650 }, '-=520');

    anime({ targets:'.phone-front', translateY:[3,-7], direction:'alternate', loop:true, duration:3600, easing:'easeInOutSine' });
    anime({ targets:'.phone-back', translateY:[42,52], direction:'alternate', loop:true, duration:4300, easing:'easeInOutSine' });
    anime({ targets:'.floating-chip', translateY:[-4,5], direction:'alternate', loop:true, duration:2500, delay:anime.stagger(300), easing:'easeInOutSine' });
  });

  // Header, scroll progress, cursor glow.
  const header = $('.site-header');
  const progress = $('.page-progress span');
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 22);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
  };
  window.addEventListener('scroll', onScroll, { passive:true }); onScroll();

  if (!reduced) {
    const glow = $('.cursor-glow');
    window.addEventListener('pointermove', e => { glow.style.left=`${e.clientX}px`; glow.style.top=`${e.clientY}px`; }, {passive:true});
  }

  // Scroll reveals.
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      revealObs.unobserve(el);
      if (reduced || !window.anime) { el.style.opacity=1; el.style.transform='none'; return; }
      anime({ targets:el, opacity:[0,1], translateY:[22,0], duration:760, easing:'easeOutCubic' });
    });
  }, { threshold:.12, rootMargin:'0px 0px -40px' });
  $$('.reveal').forEach(el => revealObs.observe(el));

  // Active nav.
  const navLinks = $$('.desktop-nav a');
  const sections = ['work','experience','skills','about'].map(id => document.getElementById(id));
  const sectionObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin:'-35% 0px -55%', threshold:0 });
  sections.forEach(s => s && sectionObs.observe(s));

  // Mobile menu.
  const menuBtn = $('.menu-toggle'); const menu = $('.mobile-menu');
  menuBtn.addEventListener('click', () => {
    const open = !menu.classList.contains('open');
    menu.classList.toggle('open', open); document.body.classList.toggle('menu-open', open); menuBtn.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-hidden', String(!open));
  });
  $$('.mobile-menu a').forEach(a => a.addEventListener('click', () => { menu.classList.remove('open'); document.body.classList.remove('menu-open'); menuBtn.setAttribute('aria-expanded','false'); menu.setAttribute('aria-hidden','true'); }));

  // Subtle 3D tilt (desktop pointers only).
  if (!reduced && window.matchMedia('(pointer:fine)').matches) {
    $$('.tilt-card').forEach(card => {
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect(); const x = (e.clientX-r.left)/r.width-.5; const y=(e.clientY-r.top)/r.height-.5;
        card.style.transform = `perspective(1100px) rotateX(${-y*2.6}deg) rotateY(${x*3.2}deg) translateZ(0)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform=''; });
    });
  }

  // Magnetic buttons: tiny, intentional movement only.
  if (!reduced && window.matchMedia('(pointer:fine)').matches) {
    $$('.magnetic').forEach(el => {
      el.addEventListener('pointermove', e => { const r=el.getBoundingClientRect(); el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.08}px,${(e.clientY-r.top-r.height/2)*.08}px)`; });
      el.addEventListener('pointerleave', () => { el.style.transform=''; });
    });
  }

  $('#year').textContent = new Date().getFullYear();
})();
