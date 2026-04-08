/* ===================================================================
   MEGA GYM - Website Interactions & i18n
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ---------------------------------------------------------------
       TRANSLATIONS
    --------------------------------------------------------------- */
    const translations = {
        el: {
            // --- NAV (shared) ---
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
            'nav-services': 'Υπηρεσίες <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>',
            'nav-trial': 'Δοκιμαστική',
            'nav-trial-short': 'Δοκιμαστική',
            'nav-cta': 'Κλείσε Ραντεβού',

            // --- INDEX: HERO ---
            'hero-badge': '33 Χρόνια Πολύτιμη Εμπειρία',
            'hero-title-1': 'ΓΙΑΤΙ Η ΠΟΙΟΤΗΤΑ ΣΤΗ ΖΩΗ ΜΟΥ',
            'hero-title-2': 'ΜΕΤΡΑΕΙ ΠΑΝΩ ΑΠΟ ΟΛΑ!',
            'hero-cta-trial': 'Δοκιμαστική Προπόνηση',
            'hero-cta-gyms': 'Τα Γυμναστήρια Μας',
            'hero-stat-locations': 'Τοποθεσίες',
            'hero-stat-years': 'Χρόνια Εμπειρίας',
            'hero-stat-fat': 'Τόνοι Λίπους Κάηκαν',
            'scroll-down': 'Κάντε scroll',

            // --- INDEX: ABOUT ---
            'about-tag': 'Ποιοι Είμαστε',
            'about-title': 'Τα Καλύτερα Ελληνικά Γυμναστήρια',
            'about-lead': 'Με <strong>33 χρόνια εμπειρίας</strong> και 7 κορυφαίες εγκαταστάσεις στην Αθήνα, τα MEGA GYM αποτελούν σημείο αναφοράς στον χώρο του fitness. Εστιάζουμε στα αποτελέσματα, όχι στις υποσχέσεις.',
            'about-desc': 'Κορυφαίος εξοπλισμός, έμπειροι γυμναστές και μοναδικά προγράμματα Group Personal Training — δωρεάν με τη συνδρομή σας. Αυτό μας κάνει διαφορετικούς.',
            'metric-fat': 'Τόνοι Λίπους',
            'metric-fat-desc': 'κάηκαν φέτος',
            'metric-muscle': 'Τόνοι Μυών',
            'metric-muscle-desc': 'προστέθηκαν φέτος',
            'accent-years': 'Χρόνια Εμπειρίας',

            // --- INDEX: SERVICES ---
            'services-tag': 'Υπηρεσίες',
            'services-title': 'Τι Προσφέρουμε',
            'services-subtitle': 'Ολοκληρωμένες υπηρεσίες γυμναστικής για κάθε στόχο',
            'service-free-badge': 'ΔΩΡΕΑΝ με Συνδρομή',
            'service-group-title': 'Group Personal Training',
            'service-group-desc': 'Ομαδική προπόνηση με προσωπική καθοδήγηση. Προγράμματα υψηλής έντασης σχεδιασμένα για αποτελέσματα.',
            'service-pt-title': 'Personal Training & Transformation',
            'service-pt-desc': 'Αποκλειστικά κέντρα EXCLUSIVE με την πιο σύγχρονη τεχνολογία. Προγράμματα μεταμόρφωσης 45 και 90 ημερών με εγγυημένα αποτελέσματα.',
            'service-pt-item1': 'EXCLUSIVE Κέντρα',
            'service-pt-item2': 'Πρόγραμμα 45 Ημερών',
            'service-pt-item3': 'Πρόγραμμα 90 Ημερών',
            'service-pt-item4': 'Διατροφική Καθοδήγηση',
            'service-pilates-title': 'Pilates Studio',
            'service-pilates-desc': 'Εξειδικευμένο στούντιο Pilates με πλήρη εξοπλισμό. Ατομικά και ομαδικά μαθήματα για κάθε επίπεδο.',
            'service-cta-more': 'Μάθε Περισσότερα',

            // --- INDEX: GYM TYPES ---
            'gymtypes-tag': 'Εγκαταστάσεις',
            'gymtypes-title': 'Δύο Τύποι Γυμναστηρίων',
            'gymtype-fc-1': 'Κορυφαίος εξοπλισμός Technogym',
            'gymtype-fc-2': 'Group Personal Training ΔΩΡΕΑΝ',
            'gymtype-fc-3': 'Έμπειροι γυμναστές',
            'gymtype-fc-4': 'Εντυπωσιακοί χώροι',
            'gymtype-fc-5': 'Locker rooms & amenities',
            'gymtype-ex-1': 'Ανεξάρτητοι χώροι αποκλειστικά για PT',
            'gymtype-ex-2': 'Σύγχρονη τεχνολογία αιχμής',
            'gymtype-ex-3': 'Προγράμματα 45 & 90 ημερών',
            'gymtype-ex-4': 'Μεγαλύτερο PT studio στην Ελλάδα (Κηφισιά)',
            'gymtype-ex-5': 'Ανοιχτά 7 ημέρες',
            'gymtype-cta': 'Δες τα Γυμναστήρια',

            // --- INDEX: TRANSFORMATIONS ---
            'transform-tag': 'Αποτελέσματα',
            'transform-title': 'Πραγματικές Μεταμορφώσεις',
            'transform-subtitle': 'Φέτος κάψαμε 5 τόνους λίπος και προσθέσαμε 2 τόνους μυών',
            'transform-days': 'ημέρες',
            'transform-ioanna': 'Απώλεια λίπους & τόνωση σε 45 ημέρες με το πρόγραμμα Transformation',
            'transform-giannis': 'Ολική μεταμόρφωση σε 90 ημέρες — μυϊκή ανάπτυξη & απώλεια λίπους',
            'transform-43kg': 'Απώλεια 43 κιλών με συνεχή καθοδήγηση και αφοσίωση',
            'transform-member': 'Μέλος MEGA GYM',
            'transform-tv-label': 'Όπως είδατε στα:',

            // --- INDEX: TRIAL CTA ---
            'trial-cta-title': 'Δοκιμαστική Προπόνηση',
            'trial-cta-desc': 'Έλα να δοκιμάσεις δωρεάν και να δεις γιατί χιλιάδες μέλη μας εμπιστεύονται',
            'trial-cta-book': 'Κλείσε Ραντεβού',

            // --- INDEX: LOCATIONS ---
            'locations-tag': 'Τοποθεσίες',
            'locations-title': 'Τα Γυμναστήρια Μας',
            'locations-subtitle': '7 κορυφαίες εγκαταστάσεις σε όλη την Αθήνα',
            'location-hq': 'Κεντρικό',
            'locations-cta': 'Δες Όλα τα Γυμναστήρια',

            // --- INDEX: CONTACT ---
            'contact-tag': 'Επικοινωνία',
            'contact-title': 'Επικοινωνήστε Μαζί Μας',
            'form-name': 'Ονοματεπώνυμο',
            'form-email': 'Email',
            'form-phone': 'Τηλέφωνο',
            'form-message': 'Μήνυμα',
            'form-submit': 'Αποστολή',

            // --- SOCIAL PROOF ---
            'proof-ig': 'Instagram Followers',
            'proof-fb': 'Facebook Likes',
            'proof-reviews': 'Google Reviews',
            'proof-members': 'Ενεργά Μέλη',

            // --- FOOTER ---
            'footer-desc': 'Τα καλύτερα Ελληνικά γυμναστήρια. 7 κορυφαίες εγκαταστάσεις στην Αθήνα.',
            'footer-nav': 'Πλοήγηση',
            'footer-programs': 'Υπηρεσίες',
            'footer-contact': 'Επικοινωνία',

            // --- GYMNASTIRIA PAGE ---
            'gym-page-title': 'ΤΑ ΓΥΜΝΑΣΤΗΡΙΑ ΜΑΣ',
            'gym-page-sub': '7 κορυφαίες εγκαταστάσεις σε όλη την Αθήνα',
            'gym-page-bc': 'Γυμναστήρια',
            'gym-page-bc-home': 'Αρχική',
            'gym-fc-title': 'MEGA GYM Fitness Clubs',
            'gym-fc-desc': 'Κορυφαία γυμναστήρια με τον καλύτερο εξοπλισμό της αγοράς, απίθανους χώρους και τους πιο έμπειρους επαγγελματίες γυμναστές. Τα Group Personal Training προγράμματα προσφέρονται ΔΩΡΕΑΝ σε όλα τα Fitness Clubs.',
            'gym-fc-feat1': 'Group Personal Training',
            'gym-fc-free': 'ΔΩΡΕΑΝ',
            'gym-fc-feat2': 'Πλήρης εξοπλισμός γυμναστικής',
            'gym-fc-feat3': 'Ομαδικά προγράμματα',
            'gym-fc-feat4': 'Pilates Studio',
            'gym-fc-feat5': 'Sauna & Wellness',
            'gym-fc-cta': 'Δες τα Προγράμματα',
            'gym-ex-title': 'MEGA GYM EXCLUSIVE',
            'gym-ex-sub': 'Transformation Centers',
            'gym-ex-desc': 'Ανεξάρτητα γυμναστήρια εξοπλισμένα με την τελευταία λέξη της τεχνολογίας. Το MEGA GYM EXCLUSIVE Κηφισιάς είναι το μεγαλύτερο Personal Training Studio στην Ελλάδα. Λειτουργούν όλη τη βδομάδα και την Κυριακή.',
            'gym-ex-feat1': 'Personal Training Transformation',
            'gym-ex-feat2': 'Τελευταία λέξη τεχνολογίας',
            'gym-ex-feat3': 'Λειτουργία 7 μέρες/εβδομάδα',
            'gym-ex-feat4': 'Προγράμματα 45 & 90 ημερών',
            'gym-ex-feat5': 'Αποδεδειγμένα αποτελέσματα',
            'gym-ex-cta': 'Μάθε Περισσότερα',
            'gym-dir-tag': '7 Τοποθεσίες',
            'gym-dir-title': 'Όλα τα MEGA GYM',
            'gym-dir-hq': 'Κεντρικό',
            'gym-trial-title': 'Θέλεις να Δοκιμάσεις;',
            'gym-trial-desc': 'Κλείσε τη δωρεάν δοκιμαστική σου προπόνηση σε οποιοδήποτε MEGA GYM.',
            'gym-trial-cta': 'Δοκιμαστική Προπόνηση',

            // --- PROPONISI PAGE ---
            'pro-page-title': 'ΠΡΟΠΟΝΗΣΗ',
            'pro-page-sub': 'Τα καλύτερα Group Personal Training προγράμματα. Μια πρωτοπορία των MEGA GYM.',
            'pro-bc': 'Προπόνηση',
            'pro-intro-tag': 'Group Personal Training',
            'pro-intro-title': 'Δωρεάν Σε Όλα Τα MEGA GYM Fitness Clubs',
            'pro-intro-p1': 'Το Group Personal Training προσφέρεται ΔΩΡΕΑΝ σε όλα τα MEGA GYM Fitness Clubs. Σε άλλα γυμναστήρια χρεώνεται τουλάχιστον 10€ ανά συνεδρία.',
            'pro-intro-p2': 'Τα καλύτερα προγράμματα, στους καλύτερους χώρους, με τον καλύτερο εξοπλισμό και τους πιο έμπειρους γυμναστές. Αυτό είναι η πρωτοπορία MEGA GYM - η κορυφαία εμπειρία γυμναστικής χωρίς επιπλέον κόστος.',
            'pro-programs-tag': 'Προγράμματα',
            'pro-programs-title': '6 Κορυφαία Group Personal Προγράμματα',
            'pro-programs-sub': 'Επέλεξε το πρόγραμμα που σου ταιριάζει - όλα ΔΩΡΕΑΝ με τη συνδρομή σου',
            'pro-trx-desc': 'Προπόνηση αιώρησης για ολόκληρο το σώμα. Χτίσε δύναμη, ισορροπία και σταθερότητα με το βάρος του σώματός σου σε ιμάντες αιώρησης TRX.',
            'pro-zone-desc': 'Υψηλής έντασης zone training. Δουλεύεις σε ζώνες κάυσης λίπους με μέγιστη απόδοση σε κάθε συνεδρία. Γρήγορα, αποτελεσματικά αποτελέσματα.',
            'pro-cage-desc': 'Λειτουργική προπόνηση σε κλωβό. Ασκήσεις δύναμης, αντοχής και ευλυγισίας σε ειδικά σχεδιασμένο functional training cage.',
            'pro-skillmill-desc': 'Προηγμένη προπόνηση σε treadmill χωρίς κινητήρα. Βελτίωσε ταχύτητα, δύναμη και αντοχή με self-powered sled training technology.',
            'pro-circuit-desc': 'Κυκλική cross training προπόνηση. Εναλλαγή σταθμών με ασκήσεις δύναμης και καρδιοαναπνευστικής αντοχής σε δυναμικό circuit.',
            'pro-sled-desc': 'Sled push & pull power training. Σπρώξε τα όριά σου με ασκήσεις ώθησης και έλξης για μέγιστη εκρηκτική δύναμη και κάψιμο λίπους.',
            'pro-why-tag': 'Γιατί MEGA GYM',
            'pro-why-title': 'Η Διαφορά Μας',
            'pro-why1-title': 'Κορυφαίος Εξοπλισμός',
            'pro-why1-desc': 'Ο καλύτερος εξοπλισμός της αγοράς σε κάθε γυμναστήριό μας. Technogym, TRX, Skillmill και πολλά ακόμα.',
            'pro-why2-title': 'Έμπειροι Γυμναστές',
            'pro-why2-desc': 'Οι πιο έμπειροι πιστοποιημένοι γυμναστές με χρόνια εξειδίκευσης σε Group Personal Training.',
            'pro-why3-title': 'Δωρεάν Με Συνδρομή',
            'pro-why3-desc': 'Όλα τα Group Personal Training προγράμματα προσφέρονται δωρεάν με τη συνδρομή σας. Μοναδικό πλεονέκτημα!',
            'pro-cta-title': 'Ξεκίνα Σήμερα',
            'pro-cta-desc': 'Κλείσε μια δωρεάν δοκιμαστική προπόνηση και ζήσε την εμπειρία Group Personal Training στα MEGA GYM.',
            'pro-cta-book': 'Δοκιμαστική Προπόνηση',
            'pro-cta-phone': 'Κάλεσέ Μας: 210 807 3926',
            'pro-other-tag': 'Ανακάλυψε Περισσότερα',
            'pro-other-title': 'Άλλες Υπηρεσίες',
            'pro-other-pt-desc': 'Ατομικά προγράμματα Personal Training Transformation στα MEGA GYM EXCLUSIVE. Προγράμματα 45 και 90 ημερών.',
            'pro-other-pil-desc': 'Πανέμορφες αίθουσες Pilates με κρεβάτια Reformer, Cadillac, Combo Chair και Ladder Barrel. Μαθήματα όλη μέρα.',

            // --- PERSONAL TRAINING PAGE ---
            'pt-page-title': 'PERSONAL TRAINING',
            'pt-page-sub': 'Στα MEGA GYM έχεις τρεις επιλογές Personal Training.',
            'pt-bc': 'Personal Training',
            'pt-options-tag': 'Οι Επιλογές Σου',
            'pt-options-title': 'Τρεις Δρόμοι Προς Το Αποτέλεσμα',
            'pt-opt1-free': 'ΔΩΡΕΑΝ',
            'pt-opt1-desc': 'Τα κορυφαία Group Personal Training προγράμματα, δωρεάν σε όλα τα MEGA GYM Fitness Clubs. TRX, MEGA ZONE, MEGA CAGE, SKILLMILL, Circuit Cross Training, MEGA SLED.',
            'pt-opt1-cta': 'Δες τα Προγράμματα',
            'pt-opt2-sub': 'TRANSFORMATION CENTERS',
            'pt-opt2-desc': 'Ανεξάρτητα γυμναστήρια εξοπλισμένα με την τελευταία λέξη της τεχνολογίας. Ατομικά προγράμματα Personal Training Transformation με εγγυημένα αποτελέσματα.',
            'pt-opt2-desc2': 'Το MEGA GYM EXCLUSIVE Κηφισιάς είναι το μεγαλύτερο Personal Training Studio στην Ελλάδα. Λειτουργία 7 μέρες την εβδομάδα, ακόμα και Κυριακή.',
            'pt-opt2-loc-label': 'Τοποθεσίες:',
            'pt-opt2-prog-label': 'Προγράμματα:',
            'pt-opt2-45': '45 Ημέρες',
            'pt-opt2-90': '90 Ημέρες',
            'pt-opt2-cta': 'Κλείσε Δοκιμαστική',
            'pt-opt3-sub': 'MEGA PILATES',
            'pt-opt3-desc': 'Πανέμορφες αίθουσες με κρεβάτια Pilates Reformer, Cadillac, Combo Chair και Ladder Barrel. Μαθήματα όλη μέρα, από 1 έως 5 άτομα.',
            'pt-opt3-cta': 'Δες το Pilates Studio',
            'pt-ex-tag': 'MEGA GYM EXCLUSIVE',
            'pt-ex-title': 'Transformation Centers',
            'pt-ex-desc': 'Ανεξάρτητα γυμναστήρια εξοπλισμένα με την τελευταία λέξη της τεχνολογίας. Σχεδιασμένα αποκλειστικά για Personal Training Transformation.',
            'pt-ex-feat1-title': 'Τεχνολογία Αιχμής',
            'pt-ex-feat1-desc': 'Εξοπλισμένα με τα πιο προηγμένα μηχανήματα και τεχνολογίες γυμναστικής. Cutting-edge technology σε κάθε εγκατάσταση.',
            'pt-ex-feat2-title': 'Προγράμματα 45 & 90 Ημερών',
            'pt-ex-feat2-desc': 'Δομημένα προγράμματα μεταμόρφωσης με συγκεκριμένους στόχους και μετρήσιμα αποτελέσματα. Κάθε πρόγραμμα σχεδιάζεται ειδικά για εσένα.',
            'pt-ex-feat3-title': 'Ανοιχτά 7 Μέρες',
            'pt-ex-feat3-desc': 'Λειτουργία 7 μέρες την εβδομάδα, συμπεριλαμβανομένης της Κυριακής. Προσαρμόζουμε το πρόγραμμα στη δική σου καθημερινότητα.',
            'pt-ex-biggest-title': 'Το Μεγαλύτερο PT Studio Στην Ελλάδα',
            'pt-ex-biggest-desc': 'Το MEGA GYM EXCLUSIVE Κηφισιάς είναι το μεγαλύτερο Personal Training Studio σε ολόκληρη την Ελλάδα. Κορυφαίος εξοπλισμός, κορυφαίοι γυμναστές, κορυφαία αποτελέσματα.',
            'pt-results-tag': 'Αποδεδειγμένα Αποτελέσματα',
            'pt-results-title': 'Πραγματικές Μεταμορφώσεις',
            'pt-results-sub': 'Χιλιάδες μέλη μας έχουν πετύχει εκπληκτικά αποτελέσματα στα MEGA GYM EXCLUSIVE Transformation Centers',
            'pt-results-stat': 'Φέτος κάψαμε 5 ΤΟΝΟΥΣ λίπος και προσθέσαμε 2 ΤΟΝΟΥΣ μυών',
            'pt-r1-sub': 'Μεταμόρφωση σε 45 ημέρες',
            'pt-r1-desc': 'Εντυπωσιακή μεταμόρφωση με πρόγραμμα κάυσης λίπους 45 ημερών. Ορατά αποτελέσματα από τις πρώτες εβδομάδες με εξατομικευμένο πρόγραμμα διατροφής και προπόνησης.',
            'pt-r2-sub': 'Μεταμόρφωση σε 90 ημέρες',
            'pt-r2-desc': 'Σημαντική αύξηση μυϊκής μάζας με πρόγραμμα 90 ημερών. Πλήρης αναδιαμόρφωση σώματος με επιστημονική προσέγγιση στη διατροφή και την προπόνηση.',
            'pt-r3-fat-label': 'Λίπος',
            'pt-r3-weight-label': 'Βάρος',
            'pt-r3-desc': 'Μείωση 43 κιλών - από 39% σωματικό λίπος σε 11%. Από 124kg σε 81kg. Μια από τις πιο εντυπωσιακές μεταμορφώσεις στα MEGA GYM EXCLUSIVE.',
            'pt-r4-sub': 'Έκαψε 38 κιλά',
            'pt-r4-desc': 'Ο Στέλιος έκαψε 38 κιλά με το πρόγραμμα Personal Training Transformation. Αλλαγή ζωής μέσω σωστής προπόνησης και διατροφής.',
            'pt-celeb-role': 'Δημοσιογράφος',
            'pt-celeb-desc': 'Ο Παύλος Σταματόπουλος μεταμορφώθηκε στα MEGA GYM EXCLUSIVE. Η ιστορία του δημοσιεύτηκε σε ΑΝΤ1, ALPHA, STAR και EPSILON.',
            'pt-cta-title': 'Ξεκίνα Τη Μεταμόρφωσή Σου',
            'pt-cta-desc': 'Κλείσε μια δωρεάν δοκιμαστική συνεδρία στο πλησιέστερο MEGA GYM EXCLUSIVE Transformation Center και ξεκίνα σήμερα.',
            'pt-cta-book': 'Κλείσε Δοκιμαστική',

            // --- PILATES PAGE ---
            'pil-page-title': 'PILATES STUDIO',
            'pil-page-sub': 'Τα καλύτερα Pilates Studio! Που αλλού; Στα MEGA GYM!',
            'pil-bc': 'Pilates Studio',
            'pil-intro-tag': 'MEGA PILATES',
            'pil-intro-title': 'Body Factory - Transformation Center',
            'pil-intro-desc': 'Το PILATES STUDIO αποτελείται από πολύ όμορφες αισθητικά αίθουσες, οι οποίες διαθέτουν ειδικό εξοπλισμό. Τα μαθήματα πραγματοποιούνται όλη μέρα, από τις 8:00 το πρωί έως τις 11:00 το βράδυ, σε γκρουπ 1 έως 5 ατόμων.',
            'pil-hi-1-title': 'Ωράριο',
            'pil-hi-1-desc': '8:00 AM - 11:00 PM\nΜαθήματα όλη μέρα',
            'pil-hi-2-title': 'Γκρουπ',
            'pil-hi-2-desc': '1 έως 5 άτομα\nΠροσωπική προσέγγιση',
            'pil-hi-3-title': 'Ποιότητα',
            'pil-hi-3-desc': 'Ειδικός εξοπλισμός\nΠιστοποιημένοι εκπαιδευτές',
            'pil-equip-tag': 'ΕΞΟΠΛΙΣΜΟΣ',
            'pil-equip-title': 'Εξοπλισμός Pilates Studio',
            'pil-reformer-desc': 'Εφευρέθηκε από τον Joseph Pilates. Πρόκειται για μια πλατφόρμα που κυλάει πάνω σε ρόδες με ελατήρια αντίστασης. Διαθέτει ρυθμιζόμενο footbar και ιμάντες για χέρια και πόδια. Πολύ αποτελεσματικές ασκήσεις με τεράστιο ρεπερτόριο ασκήσεων.',
            'pil-cadillac-desc': 'Παρόμοιο με το Reformer αλλά διαθέτει μεταλλικό πύργο που επιτρέπει ακόμα περισσότερες ασκήσεις ενδυνάμωσης και ευελιξίας. Ένα πλήρες όργανο γυμναστικής για απόλυτα αποτελέσματα.',
            'pil-chair-desc': 'Μια εκπληκτική καρέκλα Pilates που συμπληρώνει τις ασκήσεις κρεβατιού. Ιδανική για ασκήσεις ισορροπίας, ενδυνάμωσης και σταθεροποίησης. Απαραίτητο εργαλείο κάθε studio.',
            'pil-barrel-desc': 'Ένα ακόμα πολύτιμο εργαλείο Pilates. Ασκήσεις ακόμα πιο κοντά στις ανάγκες κάθε ατόμου ξεχωριστά. Ιδανικό για stretching, ενδυνάμωση πυρήνα και βελτίωση ευελιξίας.',
            'pil-acc-tag': 'ΕΞΑΡΤΗΜΑΤΑ',
            'pil-acc-title': 'Επιπλέον Εξοπλισμός',
            'pil-acc-1': 'Μικρές μπάλες Pilates',
            'pil-acc-2': 'Foam Rollers',
            'pil-acc-3': 'Μεγάλες μπάλες Pilates',
            'pil-acc-4': 'Reformer Long Box',
            'pil-acc-5': 'Στεφάνια Pilates',
            'pil-acc-6': 'Pilates Boxes',
            'pil-acc-7': 'Βαράκια Pilates',
            'pil-ben-tag': 'ΠΛΕΟΝΕΚΤΗΜΑΤΑ',
            'pil-ben-title': 'Ποιά είναι τα πλεονεκτήματα του Pilates Reformer;',
            'pil-ben-1-title': 'Δύναμη & Ευελιξία',
            'pil-ben-1-desc': 'Συνολική δύναμη, ευελιξία, συντονισμός και ισορροπία. Ένα ολοκληρωμένο πρόγραμμα εκγύμνασης για όλο το σώμα.',
            'pil-ben-2-title': 'Καθημερινότητα',
            'pil-ben-2-desc': 'Καλύτερη καθημερινή ζωή, βελτιωμένη στάση σώματος, καλύτερη κυκλοφορία αίματος. Νιώστε τη διαφορά από τις πρώτες συνεδρίες.',
            'pil-ben-3-title': 'Ανακούφιση Πόνων',
            'pil-ben-3-desc': 'Ανακούφιση από πόνους, σκολίωση, κύφωση. Θεραπευτική προσέγγιση με ασφαλείς ασκήσεις προσαρμοσμένες στις ανάγκες σας.',
            'pil-ben-4-title': 'Σμιλεμένο Σώμα',
            'pil-ben-4-desc': 'Επίπεδη κοιλιά, δυνατή πλάτη, σφιχτοί γλουτοί, τονισμένοι μηροί. Αποτελέσματα που φαίνονται και αισθάνεστε.',
            'pil-group-tag': 'ΟΜΑΔΙΚΑ',
            'pil-group-title': 'Ομαδικά Προγράμματα Pilates',
            'pil-group-p1': 'Ομαδικά προγράμματα PILATES στις καλύτερες αίθουσες που γίνανε ποτέ! Με τους πιο καταξιωμένους καθηγητές!',
            'pil-group-p2': 'Συνδυάστε το Pilates κρεβατιού με τα ομαδικά προγράμματα για διπλάσια οφέλη. Η ιδανική στρατηγική για μέγιστα αποτελέσματα σε σύντομο χρονικό διάστημα.',
            'pil-group-cta': 'Δοκίμασε Τώρα',
            'pil-cta-title': 'Κλείσε Μάθημα Pilates',
            'pil-cta-desc': 'Ξεκίνα σήμερα το ταξίδι σου στο Pilates με τους ειδικούς του MEGA GYM.',
            'pil-cta-book': 'Κλείσε Ραντεβού',
            'pil-exp-years': 'Χρόνια Πολύτιμη Εμπειρία',
            'pil-exp-desc': 'Δεκαετίες αφοσίωσης στο Pilates, με εξειδικευμένους εκπαιδευτές και σύγχρονο εξοπλισμό.',

            // --- DOKIMASTIKI PAGE ---
            'dok-page-title': 'ΔΟΚΙΜΑΣΤΙΚΗ ΠΡΟΠΟΝΗΣΗ',
            'dok-page-sub': 'Έλα να σου δείξουμε τι μπορείς να καταφέρεις! Μία επίσκεψη θα σας πείσει!',
            'dok-bc': 'Δοκιμαστική',
            'dok-trust-years': 'Χρόνια Εμπειρίας',
            'dok-trust-members': 'Μέλη',
            'dok-trust-locations': 'Τοποθεσίες',
            'dok-form-title': 'Κλείσε τη Δοκιμαστική σου',
            'dok-form-desc': 'Συμπλήρωσε τα στοιχεία σου και θα επικοινωνήσουμε μαζί σου άμεσα.',
            'dok-form-name': 'Ονοματεπώνυμο',
            'dok-form-email': 'Email',
            'dok-form-phone': 'Τηλέφωνο',
            'dok-form-location': 'Τοποθεσία',
            'dok-form-interest': 'Ενδιαφέρον',
            'dok-form-interest-placeholder': 'Επιλέξτε υπηρεσία',
            'dok-form-interest-general': 'Γενική Γυμναστική',
            'dok-form-datetime': 'Προτιμώμενη Ημέρα / Ώρα',
            'dok-form-message': 'Μήνυμα',
            'dok-form-submit': 'ΚΛΕΙΣΕ ΤΗ ΔΟΚΙΜΑΣΤΙΚΗ ΣΟΥ',
            'dok-why-tag': 'ΓΙΑΤΙ MEGA GYM',
            'dok-why-title': 'Γιατί να δοκιμάσεις;',
            'dok-why1-title': 'Εμπιστεύσου τον εαυτό σου',
            'dok-why1-desc': 'Μπορείς να τα καταφέρεις. Χρειάζεσαι απλά να βρεθείς στο σωστό περιβάλλον, με τους σωστούς ανθρώπους δίπλα σου.',
            'dok-why2-title': 'Χειροπιαστά Αποτελέσματα',
            'dok-why2-desc': '33 χρόνια χειροπιαστά αποτελέσματα για χιλιάδες μέλη. Δοκιμασμένες μέθοδοι που αποδίδουν πραγματικά.',
            'dok-why3-title': 'Ένα Σκαλοπάτι Κάθε Φορά',
            'dok-why3-desc': 'Βήμα βήμα, μέχρι να φτάσεις στον στόχο σου. Χωρίς βιασύνη, χωρίς πίεση. Με σχέδιο και υποστήριξη.',
            'dok-loc-tag': 'ΤΟΠΟΘΕΣΙΕΣ',
            'dok-loc-title': 'Βρες μας κοντά σου',
            'dok-phone-title': 'Ή τηλεφώνησέ μας!',

            // --- EPIKOINONIA PAGE ---
            'epi-page-title': 'ΕΠΙΚΟΙΝΩΝΙΑ',
            'epi-page-sub': 'Είμαστε εδώ για σένα.',
            'epi-bc': 'Επικοινωνία',
            'epi-contact-tag': 'Επικοινωνία',
            'epi-contact-title': 'Επικοινώνησε Μαζί Μας',
            'epi-contact-desc': 'Είμαστε πάντα εδώ για σένα. Επικοινώνησε μαζί μας με όποιον τρόπο σε βολεύει.',
            'epi-form-name': 'Ονοματεπώνυμο',
            'epi-form-email': 'Email',
            'epi-form-phone': 'Τηλέφωνο',
            'epi-form-location': 'Επιλέξτε Τοποθεσία',
            'epi-form-message': 'Μήνυμα',
            'epi-form-submit': 'Αποστολή Μηνύματος',
            'epi-dir-tag': '7 Τοποθεσίες',
            'epi-dir-title': 'Βρες το MEGA GYM Σου',
            'epi-dir-hq': 'Κεντρικό',
            'epi-career-tag': 'Καριέρα',
            'epi-career-title': 'ΚΑΡΙΕΡΑ - Θέσεις Εργασίας',
            'epi-career-desc': 'Ψάχνουμε πάντα ταλαντούχους ανθρώπους να ενταχθούν στην ομάδα MEGA GYM. Αν είσαι γυμναστής, personal trainer ή θέλεις να εργαστείς στον χώρο του fitness, στείλε μας το βιογραφικό σου.',
            'epi-cta-title': 'ΓΙΝΕ ΜΕΛΟΣ ΣΗΜΕΡΑ',
            'epi-cta-desc': 'Κάνε το πρώτο βήμα για μια καλύτερη ζωή. Κλείσε τη δοκιμαστική σου προπόνηση σήμερα!',
            'epi-cta-book': 'Κλείσε Ραντεβού',
        },
        en: {
            // --- NAV (shared) ---
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
            'nav-services': 'Services <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>',
            'nav-trial': 'Free Trial',
            'nav-trial-short': 'Free Trial',
            'nav-cta': 'Book Now',

            // --- INDEX: HERO ---
            'hero-badge': '33 Years of Valuable Experience',
            'hero-title-1': 'BECAUSE QUALITY IN MY LIFE',
            'hero-title-2': 'MATTERS ABOVE ALL!',
            'hero-cta-trial': 'Free Trial Session',
            'hero-cta-gyms': 'Our Gyms',
            'hero-stat-locations': 'Locations',
            'hero-stat-years': 'Years Experience',
            'hero-stat-fat': 'Tons of Fat Burned',
            'scroll-down': 'Scroll down',

            // --- INDEX: ABOUT ---
            'about-tag': 'Who We Are',
            'about-title': 'The Best Greek Gyms',
            'about-lead': 'With <strong>33 years of experience</strong> and 7 top-tier facilities across Athens, MEGA GYM is the benchmark in the fitness industry. We focus on results, not promises.',
            'about-desc': 'Top equipment, experienced trainers and unique Group Personal Training programs — free with your membership. That\'s what makes us different.',
            'metric-fat': 'Tons of Fat',
            'metric-fat-desc': 'burned this year',
            'metric-muscle': 'Tons of Muscle',
            'metric-muscle-desc': 'added this year',
            'accent-years': 'Years of Experience',

            // --- INDEX: SERVICES ---
            'services-tag': 'Services',
            'services-title': 'What We Offer',
            'services-subtitle': 'Complete fitness services for every goal',
            'service-free-badge': 'FREE with Membership',
            'service-group-title': 'Group Personal Training',
            'service-group-desc': 'Group training with personal guidance. High-intensity programs designed for results.',
            'service-pt-title': 'Personal Training & Transformation',
            'service-pt-desc': 'Exclusive EXCLUSIVE centers with cutting-edge technology. 45 and 90 day transformation programs with guaranteed results.',
            'service-pt-item1': 'EXCLUSIVE Centers',
            'service-pt-item2': '45 Day Program',
            'service-pt-item3': '90 Day Program',
            'service-pt-item4': 'Nutrition Guidance',
            'service-pilates-title': 'Pilates Studio',
            'service-pilates-desc': 'Specialized Pilates studio with full equipment. Private and group classes for all levels.',
            'service-cta-more': 'Learn More',

            // --- INDEX: GYM TYPES ---
            'gymtypes-tag': 'Facilities',
            'gymtypes-title': 'Two Types of Gyms',
            'gymtype-fc-1': 'Top Technogym equipment',
            'gymtype-fc-2': 'Group Personal Training FREE',
            'gymtype-fc-3': 'Experienced trainers',
            'gymtype-fc-4': 'Impressive facilities',
            'gymtype-fc-5': 'Locker rooms & amenities',
            'gymtype-ex-1': 'Dedicated spaces exclusively for PT',
            'gymtype-ex-2': 'Cutting-edge technology',
            'gymtype-ex-3': '45 & 90 day programs',
            'gymtype-ex-4': 'Largest PT studio in Greece (Kifisia)',
            'gymtype-ex-5': 'Open 7 days a week',
            'gymtype-cta': 'View Gyms',

            // --- INDEX: TRANSFORMATIONS ---
            'transform-tag': 'Results',
            'transform-title': 'Real Transformations',
            'transform-subtitle': 'This year we burned 5 tons of fat and added 2 tons of muscle',
            'transform-days': 'days',
            'transform-ioanna': 'Fat loss & toning in 45 days with the Transformation program',
            'transform-giannis': 'Total transformation in 90 days — muscle growth & fat loss',
            'transform-43kg': 'Lost 43kg with continuous guidance and dedication',
            'transform-member': 'MEGA GYM Member',
            'transform-tv-label': 'As seen on:',

            // --- INDEX: TRIAL CTA ---
            'trial-cta-title': 'Free Trial Session',
            'trial-cta-desc': 'Try it for free and see why thousands of members trust us',
            'trial-cta-book': 'Book Appointment',

            // --- INDEX: LOCATIONS ---
            'locations-tag': 'Locations',
            'locations-title': 'Our Gyms',
            'locations-subtitle': '7 top-tier facilities across Athens',
            'location-hq': 'Headquarters',
            'locations-cta': 'View All Gyms',

            // --- INDEX: CONTACT ---
            'contact-tag': 'Contact',
            'contact-title': 'Get In Touch',
            'form-name': 'Full Name',
            'form-email': 'Email',
            'form-phone': 'Phone',
            'form-message': 'Message',
            'form-submit': 'Send Message',

            // --- SOCIAL PROOF ---
            'proof-ig': 'Instagram Followers',
            'proof-fb': 'Facebook Likes',
            'proof-reviews': 'Google Reviews',
            'proof-members': 'Active Members',

            // --- FOOTER ---
            'footer-desc': 'The best Greek gyms. 7 top-tier facilities across Athens.',
            'footer-nav': 'Navigation',
            'footer-programs': 'Services',
            'footer-contact': 'Contact',

            // --- GYMNASTIRIA PAGE ---
            'gym-page-title': 'OUR GYMS',
            'gym-page-sub': '7 top-tier facilities across Athens',
            'gym-page-bc': 'Gyms',
            'gym-page-bc-home': 'Home',
            'gym-fc-title': 'MEGA GYM Fitness Clubs',
            'gym-fc-desc': 'Top gyms with the best equipment on the market, amazing spaces and the most experienced professional trainers. Group Personal Training programs are offered FREE at all Fitness Clubs.',
            'gym-fc-feat1': 'Group Personal Training',
            'gym-fc-free': 'FREE',
            'gym-fc-feat2': 'Full fitness equipment',
            'gym-fc-feat3': 'Group programs',
            'gym-fc-feat4': 'Pilates Studio',
            'gym-fc-feat5': 'Sauna & Wellness',
            'gym-fc-cta': 'See Programs',
            'gym-ex-title': 'MEGA GYM EXCLUSIVE',
            'gym-ex-sub': 'Transformation Centers',
            'gym-ex-desc': 'Independent gyms equipped with cutting-edge technology. MEGA GYM EXCLUSIVE Kifisia is the largest Personal Training Studio in Greece. Open all week including Sundays.',
            'gym-ex-feat1': 'Personal Training Transformation',
            'gym-ex-feat2': 'Cutting-edge technology',
            'gym-ex-feat3': 'Open 7 days/week',
            'gym-ex-feat4': '45 & 90 day programs',
            'gym-ex-feat5': 'Proven results',
            'gym-ex-cta': 'Learn More',
            'gym-dir-tag': '7 Locations',
            'gym-dir-title': 'All MEGA GYM Locations',
            'gym-dir-hq': 'Headquarters',
            'gym-trial-title': 'Want to Try?',
            'gym-trial-desc': 'Book your free trial session at any MEGA GYM.',
            'gym-trial-cta': 'Free Trial Session',

            // --- PROPONISI PAGE ---
            'pro-page-title': 'TRAINING',
            'pro-page-sub': 'The best Group Personal Training programs. A MEGA GYM innovation.',
            'pro-bc': 'Training',
            'pro-intro-tag': 'Group Personal Training',
            'pro-intro-title': 'Free At All MEGA GYM Fitness Clubs',
            'pro-intro-p1': 'Group Personal Training is offered FREE at all MEGA GYM Fitness Clubs. At other gyms it costs at least \u20AC10 per session.',
            'pro-intro-p2': 'The best programs, in the best spaces, with the best equipment and most experienced trainers. This is the MEGA GYM innovation - the ultimate fitness experience at no extra cost.',
            'pro-programs-tag': 'Programs',
            'pro-programs-title': '6 Top Group Personal Programs',
            'pro-programs-sub': 'Choose the program that suits you - all FREE with your membership',
            'pro-trx-desc': 'Full-body suspension training. Build strength, balance and stability using your own body weight on TRX suspension straps.',
            'pro-zone-desc': 'High-intensity zone training. Work in fat-burning zones with maximum output per session. Fast, effective results.',
            'pro-cage-desc': 'Functional training in a cage. Strength, endurance and flexibility exercises in a specially designed functional training cage.',
            'pro-skillmill-desc': 'Advanced motorless treadmill training. Improve speed, strength and endurance with self-powered sled training technology.',
            'pro-circuit-desc': 'Circular cross training workout. Station rotation with strength and cardio exercises in a dynamic circuit.',
            'pro-sled-desc': 'Sled push & pull power training. Push your limits with push and pull exercises for maximum explosive power and fat burning.',
            'pro-why-tag': 'Why MEGA GYM',
            'pro-why-title': 'Our Difference',
            'pro-why1-title': 'Top Equipment',
            'pro-why1-desc': 'The best equipment on the market in every one of our gyms. Technogym, TRX, Skillmill and much more.',
            'pro-why2-title': 'Experienced Trainers',
            'pro-why2-desc': 'The most experienced certified trainers with years of specialization in Group Personal Training.',
            'pro-why3-title': 'Free With Membership',
            'pro-why3-desc': 'All Group Personal Training programs are offered free with your membership. A unique advantage!',
            'pro-cta-title': 'Start Today',
            'pro-cta-desc': 'Book a free trial session and experience Group Personal Training at MEGA GYM.',
            'pro-cta-book': 'Free Trial Session',
            'pro-cta-phone': 'Call Us: 210 807 3926',
            'pro-other-tag': 'Discover More',
            'pro-other-title': 'Other Services',
            'pro-other-pt-desc': 'Individual Personal Training Transformation programs at MEGA GYM EXCLUSIVE. 45 and 90 day programs.',
            'pro-other-pil-desc': 'Beautiful Pilates studios with Reformer, Cadillac, Combo Chair and Ladder Barrel beds. Classes all day.',

            // --- PERSONAL TRAINING PAGE ---
            'pt-page-title': 'PERSONAL TRAINING',
            'pt-page-sub': 'At MEGA GYM you have three Personal Training options.',
            'pt-bc': 'Personal Training',
            'pt-options-tag': 'Your Options',
            'pt-options-title': 'Three Paths to Results',
            'pt-opt1-free': 'FREE',
            'pt-opt1-desc': 'Top Group Personal Training programs, free at all MEGA GYM Fitness Clubs. TRX, MEGA ZONE, MEGA CAGE, SKILLMILL, Circuit Cross Training, MEGA SLED.',
            'pt-opt1-cta': 'See Programs',
            'pt-opt2-sub': 'TRANSFORMATION CENTERS',
            'pt-opt2-desc': 'Independent gyms equipped with cutting-edge technology. Individual Personal Training Transformation programs with guaranteed results.',
            'pt-opt2-desc2': 'MEGA GYM EXCLUSIVE Kifisia is the largest Personal Training Studio in Greece. Open 7 days a week, including Sundays.',
            'pt-opt2-loc-label': 'Locations:',
            'pt-opt2-prog-label': 'Programs:',
            'pt-opt2-45': '45 Days',
            'pt-opt2-90': '90 Days',
            'pt-opt2-cta': 'Book Trial',
            'pt-opt3-sub': 'MEGA PILATES',
            'pt-opt3-desc': 'Beautiful studios with Pilates Reformer, Cadillac, Combo Chair and Ladder Barrel beds. Classes all day, from 1 to 5 people.',
            'pt-opt3-cta': 'See Pilates Studio',
            'pt-ex-tag': 'MEGA GYM EXCLUSIVE',
            'pt-ex-title': 'Transformation Centers',
            'pt-ex-desc': 'Independent gyms equipped with cutting-edge technology. Designed exclusively for Personal Training Transformation.',
            'pt-ex-feat1-title': 'Cutting-Edge Technology',
            'pt-ex-feat1-desc': 'Equipped with the most advanced machines and fitness technologies. Cutting-edge technology in every facility.',
            'pt-ex-feat2-title': '45 & 90 Day Programs',
            'pt-ex-feat2-desc': 'Structured transformation programs with specific goals and measurable results. Each program is designed especially for you.',
            'pt-ex-feat3-title': 'Open 7 Days',
            'pt-ex-feat3-desc': 'Open 7 days a week, including Sundays. We adapt the schedule to your daily routine.',
            'pt-ex-biggest-title': 'The Largest PT Studio In Greece',
            'pt-ex-biggest-desc': 'MEGA GYM EXCLUSIVE Kifisia is the largest Personal Training Studio in all of Greece. Top equipment, top trainers, top results.',
            'pt-results-tag': 'Proven Results',
            'pt-results-title': 'Real Transformations',
            'pt-results-sub': 'Thousands of members have achieved amazing results at MEGA GYM EXCLUSIVE Transformation Centers',
            'pt-results-stat': 'This year we burned 5 TONS of fat and added 2 TONS of muscle',
            'pt-r1-sub': 'Transformed in 45 days',
            'pt-r1-desc': 'Impressive transformation with a 45-day fat burn program. Visible results from the first weeks with a personalized nutrition and training plan.',
            'pt-r2-sub': 'Transformed in 90 days',
            'pt-r2-desc': 'Significant muscle mass increase with a 90-day program. Complete body recomposition with a scientific approach to nutrition and training.',
            'pt-r3-fat-label': 'Fat',
            'pt-r3-weight-label': 'Weight',
            'pt-r3-desc': '43kg reduction - from 39% body fat to 11%. From 124kg to 81kg. One of the most impressive transformations at MEGA GYM EXCLUSIVE.',
            'pt-r4-sub': 'Lost 38 kg',
            'pt-r4-desc': 'Stelios lost 38kg with the Personal Training Transformation program. A life change through proper training and nutrition.',
            'pt-celeb-role': 'Journalist',
            'pt-celeb-desc': 'Pavlos Stamatopoulos transformed at MEGA GYM EXCLUSIVE. His story was featured on ANT1, ALPHA, STAR and EPSILON.',
            'pt-cta-title': 'Start Your Transformation',
            'pt-cta-desc': 'Book a free trial session at the nearest MEGA GYM EXCLUSIVE Transformation Center and start today.',
            'pt-cta-book': 'Book Trial',

            // --- PILATES PAGE ---
            'pil-page-title': 'PILATES STUDIO',
            'pil-page-sub': 'The best Pilates Studio! Where else? At MEGA GYM!',
            'pil-bc': 'Pilates Studio',
            'pil-intro-tag': 'MEGA PILATES',
            'pil-intro-title': 'Body Factory - Transformation Center',
            'pil-intro-desc': 'The PILATES STUDIO features beautifully designed rooms with specialized equipment. Classes run all day, from 8:00 AM to 11:00 PM, in groups of 1 to 5 people.',
            'pil-hi-1-title': 'Schedule',
            'pil-hi-1-desc': '8:00 AM - 11:00 PM\nClasses all day',
            'pil-hi-2-title': 'Groups',
            'pil-hi-2-desc': '1 to 5 people\nPersonal approach',
            'pil-hi-3-title': 'Quality',
            'pil-hi-3-desc': 'Specialized equipment\nCertified instructors',
            'pil-equip-tag': 'EQUIPMENT',
            'pil-equip-title': 'Pilates Studio Equipment',
            'pil-reformer-desc': 'Invented by Joseph Pilates. A platform that rolls on wheels with resistance springs. Features adjustable footbar and straps for arms and legs. Highly effective exercises with a huge repertoire.',
            'pil-cadillac-desc': 'Similar to the Reformer but with a metal tower allowing even more strengthening and flexibility exercises. A complete fitness apparatus for absolute results.',
            'pil-chair-desc': 'An amazing Pilates chair that complements bed exercises. Ideal for balance, strengthening and stabilization exercises. An essential tool for every studio.',
            'pil-barrel-desc': 'Another valuable Pilates tool. Exercises even closer to individual needs. Ideal for stretching, core strengthening and flexibility improvement.',
            'pil-acc-tag': 'ACCESSORIES',
            'pil-acc-title': 'Additional Equipment',
            'pil-acc-1': 'Small Pilates balls',
            'pil-acc-2': 'Foam Rollers',
            'pil-acc-3': 'Large Pilates balls',
            'pil-acc-4': 'Reformer Long Box',
            'pil-acc-5': 'Pilates rings',
            'pil-acc-6': 'Pilates Boxes',
            'pil-acc-7': 'Pilates weights',
            'pil-ben-tag': 'BENEFITS',
            'pil-ben-title': 'What are the benefits of Pilates Reformer?',
            'pil-ben-1-title': 'Strength & Flexibility',
            'pil-ben-1-desc': 'Overall strength, flexibility, coordination and balance. A complete training program for the whole body.',
            'pil-ben-2-title': 'Daily Life',
            'pil-ben-2-desc': 'Better daily life, improved posture, better blood circulation. Feel the difference from the first sessions.',
            'pil-ben-3-title': 'Pain Relief',
            'pil-ben-3-desc': 'Relief from pain, scoliosis, kyphosis. Therapeutic approach with safe exercises tailored to your needs.',
            'pil-ben-4-title': 'Sculpted Body',
            'pil-ben-4-desc': 'Flat abs, strong back, firm glutes, toned thighs. Results you can see and feel.',
            'pil-group-tag': 'GROUP',
            'pil-group-title': 'Group Pilates Programs',
            'pil-group-p1': 'Group PILATES programs in the best studios ever made! With the most acclaimed instructors!',
            'pil-group-p2': 'Combine bed Pilates with group programs for double the benefits. The ideal strategy for maximum results in a short time.',
            'pil-group-cta': 'Try Now',
            'pil-cta-title': 'Book a Pilates Class',
            'pil-cta-desc': 'Start your Pilates journey today with the experts at MEGA GYM.',
            'pil-cta-book': 'Book Appointment',
            'pil-exp-years': 'Years of Valuable Experience',
            'pil-exp-desc': 'Decades of dedication to Pilates, with specialized instructors and modern equipment.',

            // --- DOKIMASTIKI PAGE ---
            'dok-page-title': 'FREE TRIAL SESSION',
            'dok-page-sub': 'Come and we\'ll show you what you can achieve! One visit will convince you!',
            'dok-bc': 'Free Trial',
            'dok-trust-years': 'Years Experience',
            'dok-trust-members': 'Members',
            'dok-trust-locations': 'Locations',
            'dok-form-title': 'Book Your Free Trial',
            'dok-form-desc': 'Fill in your details and we\'ll contact you immediately.',
            'dok-form-name': 'Full Name',
            'dok-form-email': 'Email',
            'dok-form-phone': 'Phone',
            'dok-form-location': 'Location',
            'dok-form-interest': 'Interest',
            'dok-form-interest-placeholder': 'Select service',
            'dok-form-interest-general': 'General Fitness',
            'dok-form-datetime': 'Preferred Day / Time',
            'dok-form-message': 'Message',
            'dok-form-submit': 'BOOK YOUR FREE TRIAL',
            'dok-why-tag': 'WHY MEGA GYM',
            'dok-why-title': 'Why try us?',
            'dok-why1-title': 'Trust Yourself',
            'dok-why1-desc': 'You can do it. You just need to be in the right environment, with the right people by your side.',
            'dok-why2-title': 'Tangible Results',
            'dok-why2-desc': '33 years of tangible results for thousands of members. Proven methods that truly deliver.',
            'dok-why3-title': 'One Step at a Time',
            'dok-why3-desc': 'Step by step, until you reach your goal. No rush, no pressure. With a plan and support.',
            'dok-loc-tag': 'LOCATIONS',
            'dok-loc-title': 'Find us near you',
            'dok-phone-title': 'Or call us!',

            // --- EPIKOINONIA PAGE ---
            'epi-page-title': 'CONTACT',
            'epi-page-sub': 'We are here for you.',
            'epi-bc': 'Contact',
            'epi-contact-tag': 'Contact',
            'epi-contact-title': 'Get In Touch',
            'epi-contact-desc': 'We\'re always here for you. Contact us in whichever way suits you.',
            'epi-form-name': 'Full Name',
            'epi-form-email': 'Email',
            'epi-form-phone': 'Phone',
            'epi-form-location': 'Select Location',
            'epi-form-message': 'Message',
            'epi-form-submit': 'Send Message',
            'epi-dir-tag': '7 Locations',
            'epi-dir-title': 'Find Your MEGA GYM',
            'epi-dir-hq': 'Headquarters',
            'epi-career-tag': 'Careers',
            'epi-career-title': 'CAREERS - Job Openings',
            'epi-career-desc': 'We\'re always looking for talented people to join the MEGA GYM team. If you\'re a trainer, personal trainer or want to work in fitness, send us your CV.',
            'epi-cta-title': 'BECOME A MEMBER TODAY',
            'epi-cta-desc': 'Take the first step towards a better life. Book your trial session today!',
            'epi-cta-book': 'Book Appointment',
        }
    };

    const placeholderTranslations = {
        el: {
            'form-name': 'Το όνομά σας',
            'form-phone': '69x xxx xxxx',
            'form-message': 'Πώς μπορούμε να βοηθήσουμε;',
            'form-location': 'Επιλέξτε Τοποθεσία',
            'dok-form-name': 'π.χ. Γιάννης Παπαδόπουλος',
            'dok-form-phone': '69x xxx xxxx',
            'dok-form-location': 'Επιλέξτε τοποθεσία',
            'dok-form-interest': 'Επιλέξτε υπηρεσία',
            'dok-form-datetime': 'π.χ. Δευτέρα 18:00',
            'dok-form-message': 'Πείτε μας τους στόχους σας...',
        },
        en: {
            'form-name': 'Your name',
            'form-phone': 'Phone number',
            'form-message': 'How can we help?',
            'form-location': 'Select Location',
            'dok-form-name': 'e.g. John Smith',
            'dok-form-phone': 'Phone number',
            'dok-form-location': 'Select location',
            'dok-form-interest': 'Select service',
            'dok-form-datetime': 'e.g. Monday 18:00',
            'dok-form-message': 'Tell us your goals...',
        }
    };

    let currentLang = 'el';


    /* ---------------------------------------------------------------
       1. PRELOADER
    --------------------------------------------------------------- */
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Only show preloader on first visit per session, not on every page navigation
        if (sessionStorage.getItem('megagym-loaded')) {
            preloader.classList.add('hidden');
        } else {
            sessionStorage.setItem('megagym-loaded', '1');
            setTimeout(() => {
                preloader.classList.add('hidden');
            }, 2000);
        }
    }


    /* ---------------------------------------------------------------
       1b. HERO SLIDESHOW
    --------------------------------------------------------------- */
    const heroSlides = document.querySelectorAll('.hero-slide');
    if (heroSlides.length > 1) {
        let currentSlide = 0;
        setInterval(() => {
            heroSlides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % heroSlides.length;
            heroSlides[currentSlide].classList.add('active');
        }, 5000);
    }


    /* ---------------------------------------------------------------
       2. NAVBAR SCROLL EFFECT
    --------------------------------------------------------------- */
    const navbar = document.getElementById('navbar');
    const pagePath = window.location.pathname.split('/').pop() || 'index.html';
    const isIndexPage = (pagePath === 'index.html' || pagePath === '' || pagePath === '/');

    function handleNavbarScroll() {
        if (!navbar) return;
        // Subpages always have scrolled (white bg) navbar since they don't have a dark hero
        if (!isIndexPage || window.scrollY > 50) {
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
                    const target = parseFloat(el.dataset.count);
                    const suffix = el.dataset.suffix || '';
                    const isDecimal = el.dataset.decimal === 'true';
                    const duration = 2000;
                    const start = performance.now();

                    function updateCounter(now) {
                        const elapsed = now - start;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const current = isDecimal
                            ? (eased * target).toFixed(1)
                            : Math.round(eased * target);

                        el.textContent = current + suffix;

                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        }
                    }

                    requestAnimationFrame(updateCounter);
                    counterObserver.unobserve(el);
                }
            });
        }, {
            threshold: 0.3
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


    /* ---------------------------------------------------------------
       12a. DARK MODE TOGGLE
    --------------------------------------------------------------- */
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        // Load saved theme
        if (localStorage.getItem('megagym-theme') === 'dark') {
            document.body.classList.add('dark-mode');
        }
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('megagym-theme',
                document.body.classList.contains('dark-mode') ? 'dark' : 'light'
            );
        });
    }


    /* ---------------------------------------------------------------
       12b. NAV DROPDOWN (prevent default on toggle links)
    --------------------------------------------------------------- */
    document.querySelectorAll('.nav-dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            // On mobile, toggle visibility
            if (window.innerWidth <= 768) {
                const menu = toggle.nextElementSibling;
                menu.style.display = menu.style.display === 'none' ? 'block' : (menu.style.display === 'block' ? 'none' : 'block');
            }
        });
    });


    /* ---------------------------------------------------------------
       12c. FLOATING ACTION BUTTON (FAB)
    --------------------------------------------------------------- */
    const fabContainer = document.getElementById('fabContainer');
    const fabToggle = document.getElementById('fabToggle');
    const fabTop = document.getElementById('fabTop');

    if (fabToggle && fabContainer) {
        fabToggle.addEventListener('click', () => {
            fabContainer.classList.toggle('open');
        });
        document.addEventListener('click', (e) => {
            if (!fabContainer.contains(e.target)) {
                fabContainer.classList.remove('open');
            }
        });
    }
    if (fabTop) {
        fabTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            fabContainer.classList.remove('open');
        });
    }


    /* ---------------------------------------------------------------
       13. FAQ ACCORDION
    --------------------------------------------------------------- */
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const wasOpen = item.classList.contains('open');
            // Close all
            document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
            // Toggle clicked
            if (!wasOpen) item.classList.add('open');
        });
    });


    /* ---------------------------------------------------------------
       14. (Removed - FAB replaces back-to-top)
    --------------------------------------------------------------- */


    /* ---------------------------------------------------------------
       14. COOKIE CONSENT BANNER
    --------------------------------------------------------------- */
    const cookieBanner = document.getElementById('cookieBanner');
    const cookieAccept = document.getElementById('cookieAccept');

    if (cookieBanner && !localStorage.getItem('megagym-cookies')) {
        setTimeout(() => cookieBanner.classList.add('visible'), 1500);
    }

    if (cookieAccept) {
        cookieAccept.addEventListener('click', () => {
            localStorage.setItem('megagym-cookies', '1');
            cookieBanner.classList.remove('visible');
            cookieBanner.classList.add('hidden');
        });
    }

});
