/* ===================================================================
   MEGA GYM - Website Interactions & i18n
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ---------------------------------------------------------------
       TRANSLATIONS
    --------------------------------------------------------------- */
    const translations = {
        el: {
            'nav-home': 'Αρχική',
            'nav-about': 'Σχετικά',
            'nav-programs': 'Προγράμματα',
            'nav-gyms': 'Γυμναστήρια',
            'nav-training': 'Προπόνηση',
            'nav-pt': 'Personal Training',
            'nav-pilates': 'Pilates Studio',
            'nav-locations': 'Τοποθεσίες',
            'nav-transformations': 'Μεταμορφώσεις',
            'nav-contact': 'Επικοινωνία',
            'nav-trial': 'Δοκιμαστική',
            'nav-trial-short': 'Δοκιμαστική',
            'nav-cta': 'Κλείσε Ραντεβού',
            'hero-badge': '33 Χρόνια Πολύτιμη Εμπειρία',
            'hero-title-1': 'ΓΙΑΤΙ Η ΠΟΙΟΤΗΤΑ',
            'hero-title-2': 'ΜΕΤΡΑΕΙ ΠΑΝΩ ΑΠ\' ΟΛΑ',
            'hero-subtitle': 'Τα καλύτερα Ελληνικά γυμναστήρια. 7 κορυφαίες εγκαταστάσεις στην Αθήνα με τον καλύτερο εξοπλισμό, τους πιο έμπειρους γυμναστές και αποδεδειγμένα αποτελέσματα.',
            'hero-cta-1': 'Δοκιμαστική Προπόνηση',
            'hero-cta-2': 'Τα Γυμναστήρια Μας',
            'stat-locations': 'Τοποθεσίες',
            'stat-years': 'Χρόνια Εμπειρίας',
            'stat-fat': 'Τόνοι Λίπους Φέτος',
            'scroll': 'Scroll',
            'about-tag': 'Γιατί MEGA GYM',
            'about-title': 'Τα Καλύτερα Ελληνικά Γυμναστήρια',
            'about-lead': 'Τα MEGA GYM αναγνωρίζονται ως τα καλύτερα Ελληνικά γυμναστήρια και μπορούν άνετα πλέον να συγκριθούν με τα καλύτερα γυμναστήρια του κόσμου.',
            'about-body': 'Εμείς εδώ στα Mega Gym έχουμε πολύτιμη εμπειρία 33 ετών δίνοντας χειροπιαστά αποτελέσματα σε χιλιάδες μέλη μας. Έχουμε τον τρόπο, την μέθοδο που θα σε οδηγήσει ένα σκαλοπάτι πιο πάνω. Αυτό που ξέρουμε καλά είναι να δίνουμε αποτελέσματα.',
            'metric-tons': 'τόνοι',
            'metric-tons2': 'τόνοι',
            'metric-fat-burned': 'λίπους κάηκαν φέτος',
            'metric-muscle': 'μυών προστέθηκαν',
            'accent-years': 'Χρόνια<br>Εμπειρίας',
            'gyms-tag': 'Τα Γυμναστήρια Μας',
            'gyms-title': 'Δύο Κατηγορίες, Μία Φιλοσοφία',
            'gym-badge-1': 'Fitness Club',
            'gym-type-1-title': 'MEGA GYM Fitness Clubs',
            'gym-type-1-desc': 'Κορυφαία γυμναστήρια με τον καλύτερο εξοπλισμό της αγοράς, απίθανους χώρους και τους πιο έμπειρους επαγγελματίες γυμναστές.',
            'gym-feat-1-2': 'Πλήρης εξοπλισμός γυμναστικής',
            'gym-feat-1-3': 'Ομαδικά προγράμματα',
            'gym-feat-1-4': 'Sauna & Wellness',
            'free': 'ΔΩΡΕΑΝ',
            'gym-cta-1': 'Δες τις Τοποθεσίες',
            'gym-type-2-title': 'MEGA GYM EXCLUSIVE',
            'gym-type-2-desc': 'Ανεξάρτητα γυμναστήρια εξοπλισμένα με την τελευταία λέξη της τεχνολογίας. Το MEGA GYM EXCLUSIVE Κηφισιάς είναι το μεγαλύτερο Personal Training Studio στην Ελλάδα.',
            'gym-feat-2-1': 'Personal Training Transformation',
            'gym-feat-2-2': 'Τελευταία λέξη τεχνολογίας',
            'gym-feat-2-3': 'Λειτουργία 7 μέρες/εβδομάδα',
            'gym-feat-2-4': 'Προγράμματα 45 & 90 ημερών',
            'gym-feat-2-5': 'Αποδεδειγμένα αποτελέσματα',
            'gym-cta-2': 'Ανακάλυψε Περισσότερα',
            'programs-tag': 'Προγράμματα',
            'programs-title': 'Οι Υπηρεσίες Μας',
            'programs-desc': 'Τρεις επιλογές Personal Training στα MEGA GYM',
            'program-free': 'ΔΩΡΕΑΝ με συνδρομή',
            'program-1-desc': 'Μια πρωτοπορία των Mega Gym! Τα καλύτερα Group Personal προγράμματα στους καλύτερους χώρους, με τον καλύτερο εξοπλισμό και τους πιο έμπειρους γυμναστές.',
            'program-2-desc': 'Ατομικά προγράμματα Personal Training Transformation στα MEGA GYM EXCLUSIVE. Προγράμματα 45 και 90 ημερών με εγγυημένα αποτελέσματα.',
            'program-3-desc': 'Πανέμορφες αίθουσες με κρεβάτια Pilates Reformer, Cadillac, Combo Chair και Ladder Barrel. Μαθήματα όλη μέρα, για ένα έως πέντε άτομα.',
            'trans-tag': 'Αποτελέσματα',
            'trans-title': 'Εκπληκτικές Μεταμορφώσεις',
            'trans-desc': 'Φέτος κάψαμε 5 τόνους λίπος και προσθέσαμε 2 τόνους μυών. Μία επίσκεψη θα σας πείσει!',
            'trans-type-1': 'ΚΑΥΣΗ ΛΙΠΟΥΣ / ΓΡΑΜΜΩΣΗ',
            'trans-type-2': 'ΑΥΞΗΣΗ ΜΥΙΚΟΥ ΙΣΤΟΥ',
            'trans-type-3': 'ΚΑΥΣΗ ΛΙΠΟΥΣ / ΓΡΑΜΜΩΣΗ',
            'trans-1-text': 'Η Ιωάννα μεταμορφώθηκε σε 45 ημέρες',
            'trans-2-text': 'Ο Γιάννης μεταμορφώθηκε σε τρεις μήνες',
            'trans-3-text': 'Μείωση λίπους από 39% σε 11%. Από τα 124 κιλά στα 81 κιλά',
            'trans-tv-badge': 'Όπως προβλήθηκε στην TV',
            'trans-tv-text': 'Τηλεοπτική προβολή στον ΑΝΤ1, ALPHA, STAR, EPSILON',
            'trial-title': 'Δοκιμαστική Προπόνηση',
            'trial-desc': 'Έλα να σου δείξουμε τι μπορείς να καταφέρεις! Κλείσε τη δωρεάν δοκιμαστική σου προπόνηση σε οποιοδήποτε MEGA GYM.',
            'trial-cta-1': 'Κλείσε Ραντεβού',
            'trial-cta-2': 'Τηλ: 210 807 3926',
            'loc-tag': '7 Τοποθεσίες',
            'loc-title': 'Βρες το MEGA GYM Σου',
            'loc-flagship': 'Κεντρικό',
            'contact-tag': 'Επικοινωνία',
            'contact-title': 'Μπες στην Ομάδα Μας',
            'contact-desc': 'Τι λες; Θα μπεις στην ομάδα μας; Εμείς πάντως είμαστε εδώ, για σένα και σε περιμένουμε.',
            'form-submit': 'Αποστολή Μηνύματος',
            'form-location': 'Επιλέξτε Τοποθεσία',
            'footer-desc': 'Τα καλύτερα Ελληνικά γυμναστήρια. 7 κορυφαίες εγκαταστάσεις στην Αθήνα.',
            'footer-nav': 'Πλοήγηση',
            'footer-programs': 'Υπηρεσίες',
            'footer-contact': 'Επικοινωνία',
        },
        en: {
            'nav-home': 'Home',
            'nav-about': 'About',
            'nav-programs': 'Programs',
            'nav-gyms': 'Gyms',
            'nav-training': 'Training',
            'nav-pt': 'Personal Training',
            'nav-pilates': 'Pilates Studio',
            'nav-locations': 'Locations',
            'nav-transformations': 'Transformations',
            'nav-contact': 'Contact',
            'nav-trial': 'Free Trial',
            'nav-trial-short': 'Free Trial',
            'nav-cta': 'Book Now',
            'hero-badge': '33 Years of Valuable Experience',
            'hero-title-1': 'BECAUSE QUALITY',
            'hero-title-2': 'MATTERS ABOVE ALL',
            'hero-subtitle': 'The best Greek gyms. 7 top-tier facilities across Athens with the best equipment, most experienced trainers and proven results.',
            'hero-cta-1': 'Free Trial Session',
            'hero-cta-2': 'Our Gyms',
            'stat-locations': 'Locations',
            'stat-years': 'Years Experience',
            'stat-fat': 'Tons of Fat This Year',
            'scroll': 'Scroll',
            'about-tag': 'Why MEGA GYM',
            'about-title': 'The Best Greek Gyms',
            'about-lead': 'MEGA GYM is recognized as the best Greek gym chain and can now easily be compared with the best gyms in the world.',
            'about-body': 'Here at Mega Gym we have 33 years of valuable experience delivering tangible results to thousands of members. We have the method that will take you one step higher. What we do best is deliver results.',
            'metric-tons': 'tons',
            'metric-tons2': 'tons',
            'metric-fat-burned': 'of fat burned this year',
            'metric-muscle': 'of muscle added',
            'accent-years': 'Years of<br>Experience',
            'gyms-tag': 'Our Gyms',
            'gyms-title': 'Two Categories, One Philosophy',
            'gym-badge-1': 'Fitness Club',
            'gym-type-1-title': 'MEGA GYM Fitness Clubs',
            'gym-type-1-desc': 'Top gyms with the best equipment on the market, amazing spaces and the most experienced professional trainers.',
            'gym-feat-1-2': 'Full fitness equipment',
            'gym-feat-1-3': 'Group programs',
            'gym-feat-1-4': 'Sauna & Wellness',
            'free': 'FREE',
            'gym-cta-1': 'See Locations',
            'gym-type-2-title': 'MEGA GYM EXCLUSIVE',
            'gym-type-2-desc': 'Independent gyms equipped with cutting-edge technology. MEGA GYM EXCLUSIVE Kifisia is the largest Personal Training Studio in Greece.',
            'gym-feat-2-1': 'Personal Training Transformation',
            'gym-feat-2-2': 'Cutting-edge technology',
            'gym-feat-2-3': 'Open 7 days/week',
            'gym-feat-2-4': '45 & 90 day programs',
            'gym-feat-2-5': 'Proven results',
            'gym-cta-2': 'Discover More',
            'programs-tag': 'Programs',
            'programs-title': 'Our Services',
            'programs-desc': 'Three Personal Training options at MEGA GYM',
            'program-free': 'FREE with membership',
            'program-1-desc': 'A Mega Gym innovation! The best Group Personal programs in the best spaces, with the best equipment and most experienced trainers.',
            'program-2-desc': 'Individual Personal Training Transformation programs at MEGA GYM EXCLUSIVE. 45 and 90 day programs with guaranteed results.',
            'program-3-desc': 'Beautiful studios with Pilates Reformer, Cadillac, Combo Chair and Ladder Barrel beds. Classes all day, for one to five people.',
            'trans-tag': 'Results',
            'trans-title': 'Amazing Transformations',
            'trans-desc': 'This year we burned 5 tons of fat and added 2 tons of muscle. One visit will convince you!',
            'trans-type-1': 'FAT BURN / TONING',
            'trans-type-2': 'MUSCLE GAIN',
            'trans-type-3': 'FAT BURN / TONING',
            'trans-1-text': 'Ioanna transformed in 45 days',
            'trans-2-text': 'Giannis transformed in three months',
            'trans-3-text': 'Fat reduction from 39% to 11%. From 124kg to 81kg',
            'trans-tv-badge': 'As Seen on TV',
            'trans-tv-text': 'Featured on ANT1, ALPHA, STAR, EPSILON',
            'trial-title': 'Free Trial Session',
            'trial-desc': 'Come and we\'ll show you what you can achieve! Book your free trial session at any MEGA GYM.',
            'trial-cta-1': 'Book Appointment',
            'trial-cta-2': 'Call: 210 807 3926',
            'loc-tag': '7 Locations',
            'loc-title': 'Find Your MEGA GYM',
            'loc-flagship': 'Headquarters',
            'contact-tag': 'Contact',
            'contact-title': 'Join Our Team',
            'contact-desc': 'Ready to join our team? We\'re here for you and we\'re waiting.',
            'form-submit': 'Send Message',
            'form-location': 'Select Location',
            'footer-desc': 'The best Greek gyms. 7 top-tier facilities across Athens.',
            'footer-nav': 'Navigation',
            'footer-programs': 'Services',
            'footer-contact': 'Contact',
        }
    };

    const placeholderTranslations = {
        el: {
            'form-name': 'Ονοματεπώνυμο',
            'form-phone': 'Τηλέφωνο',
            'form-message': 'Μήνυμα',
            'form-location': 'Επιλέξτε Τοποθεσία',
        },
        en: {
            'form-name': 'Full Name',
            'form-phone': 'Phone',
            'form-message': 'Message',
            'form-location': 'Select Location',
        }
    };

    let currentLang = 'el';


    /* ---------------------------------------------------------------
       1. PRELOADER
    --------------------------------------------------------------- */
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 2000);
    }


    /* ---------------------------------------------------------------
       2. NAVBAR SCROLL EFFECT
    --------------------------------------------------------------- */
    const navbar = document.getElementById('navbar');

    function handleNavbarScroll() {
        if (!navbar) return;
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    handleNavbarScroll(); // Initial check


    /* ---------------------------------------------------------------
       3. MOBILE MENU TOGGLE
    --------------------------------------------------------------- */
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }


    /* ---------------------------------------------------------------
       4. SMOOTH SCROLL WITH OFFSET
    --------------------------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
                top: top,
                behavior: 'smooth'
            });
        });
    });


    /* ---------------------------------------------------------------
       5. SCROLL ANIMATIONS (IntersectionObserver)
    --------------------------------------------------------------- */
    const animateElements = document.querySelectorAll('[data-animate]');

    if (animateElements.length > 0 && 'IntersectionObserver' in window) {
        const animateObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const delay = parseInt(el.dataset.delay) || 0;

                    setTimeout(() => {
                        el.classList.add('animated');
                    }, delay);

                    animateObserver.unobserve(el);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        animateElements.forEach(el => animateObserver.observe(el));
    }


    /* ---------------------------------------------------------------
       6. COUNTER ANIMATION
    --------------------------------------------------------------- */
    const counterElements = document.querySelectorAll('[data-count]');

    if (counterElements.length > 0 && 'IntersectionObserver' in window) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.count);
                    const duration = 1800;
                    const start = performance.now();

                    function updateCounter(now) {
                        const elapsed = now - start;
                        const progress = Math.min(elapsed / duration, 1);
                        // Ease-out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const current = Math.round(eased * target);

                        el.textContent = current;

                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        }
                    }

                    requestAnimationFrame(updateCounter);
                    counterObserver.unobserve(el);
                }
            });
        }, {
            threshold: 0.5
        });

        counterElements.forEach(el => counterObserver.observe(el));
    }


    /* ---------------------------------------------------------------
       7. ACTIVE NAV HIGHLIGHT ON SCROLL
    --------------------------------------------------------------- */
    const sections = document.querySelectorAll('section[id]');
    const navLinkElements = document.querySelectorAll('.nav-links a[href^="#"]');

    function highlightActiveNav() {
        const scrollPos = window.scrollY + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinkElements.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightActiveNav, { passive: true });


    /* ---------------------------------------------------------------
       8. PARALLAX - HERO (Desktop Only)
    --------------------------------------------------------------- */
    const heroContent = document.querySelector('.hero-content');

    function handleParallax() {
        if (!heroContent || window.innerWidth < 768) return;
        const scrollY = window.scrollY;
        const heroHeight = window.innerHeight;

        if (scrollY < heroHeight) {
            const translate = scrollY * 0.3;
            const opacity = 1 - (scrollY / heroHeight) * 0.6;
            heroContent.style.transform = `translateY(${translate}px)`;
            heroContent.style.opacity = Math.max(opacity, 0);
        }
    }

    window.addEventListener('scroll', handleParallax, { passive: true });


    /* ---------------------------------------------------------------
       9. CONTACT FORM HANDLING
    --------------------------------------------------------------- */
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formWrap = contactForm.closest('.contact-form-wrap');
            const successEl = currentLang === 'en'
                ? `<div class="form-success">
                       <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#F5C518" stroke-width="2">
                           <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                           <polyline points="22 4 12 14.01 9 11.01"/>
                       </svg>
                       <h3>Message Sent!</h3>
                       <p>We will contact you shortly.</p>
                   </div>`
                : `<div class="form-success">
                       <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#F5C518" stroke-width="2">
                           <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                           <polyline points="22 4 12 14.01 9 11.01"/>
                       </svg>
                       <h3>Το μήνυμα στάλθηκε!</h3>
                       <p>Θα επικοινωνήσουμε μαζί σας σύντομα.</p>
                   </div>`;

            if (formWrap) {
                formWrap.innerHTML = successEl;
            }
        });
    }


    /* ---------------------------------------------------------------
       10. LANGUAGE TOGGLE (i18n)
    --------------------------------------------------------------- */
    const langToggle = document.getElementById('langToggle');

    function applyTranslations(lang) {
        const dict = translations[lang];
        if (!dict) return;

        // Translate data-i18n text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        // Translate data-i18n-placeholder
        const placeholders = placeholderTranslations[lang];
        if (placeholders) {
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (placeholders[key] !== undefined) {
                    el.placeholder = placeholders[key];
                }
            });
        }

        // Update language toggle button display
        if (langToggle) {
            if (lang === 'en') {
                langToggle.innerHTML = '<span class="lang-active">EN</span> | GR';
            } else {
                langToggle.innerHTML = 'EN | <span class="lang-active">GR</span>';
            }
        }

        // Update html lang attribute
        document.documentElement.lang = lang;
        currentLang = lang;
    }

    // Load saved language from localStorage
    const savedLang = localStorage.getItem('megagym-lang');
    if (savedLang && savedLang !== currentLang) {
        applyTranslations(savedLang);
    }

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'el' ? 'en' : 'el';
            applyTranslations(newLang);
            localStorage.setItem('megagym-lang', newLang);
        });
    }


    /* ---------------------------------------------------------------
       11. ACTIVE NAV FOR MULTI-PAGE
    --------------------------------------------------------------- */
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });


    /* ---------------------------------------------------------------
       12. HANDLE ALL FORMS (trial form etc)
    --------------------------------------------------------------- */
    document.querySelectorAll('form').forEach(form => {
        if (form.id === 'contactForm') return; // already handled
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            if (btn) {
                const orig = btn.textContent;
                btn.textContent = currentLang === 'en' ? 'Sent!' : 'Στάλθηκε!';
                btn.style.background = '#22c55e';
                btn.style.color = '#fff';
                btn.disabled = true;
                setTimeout(() => {
                    btn.textContent = orig;
                    btn.style.background = '';
                    btn.style.color = '';
                    btn.disabled = false;
                    form.reset();
                }, 3000);
            }
        });
    });

});
