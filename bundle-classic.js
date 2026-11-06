const apiKey = "";
;

    document.addEventListener('DOMContentLoaded', () => {

        // ==================== i18n ENGINE (2 bahasa: ID + EN) ====================
        const T = {
            id: {
                'fb.subtitle': 'Upload 1 foto produk + nama brand, AI buat 6 desain feed seragam siap posting berurutan.',
                'feedbranding.mode-title': 'Pilih Mode',
                'feedbranding.mode-standar': 'Standar',
                'feedbranding.mode-random': 'Acak',
                'feedbranding.mode-custom': 'Custom',
                'feedbranding.custom-topic-ph': 'mis. Promo Ramadan, Manfaat untuk kulit kusam',
                'feedbranding.mode-hint-standar': '6 post format standar: Cover, Benefit, Testimoni, Cara Pakai, Harga, CTA.',
                'feedbranding.step1': 'Foto Produk',
                'feedbranding.step2': 'Nama Brand',
                'feedbranding.step3': 'Info Tambahan',
                'feedbranding.step4': 'Warna Brand',
                'feedbranding.step5': 'Rasio Foto',
                'feedbranding.upload-hint': 'Klik untuk unggah foto produk',
                'feedbranding.upload-formats': 'PNG, JPG, WEBP, HEIC',
                'feedbranding.brandname-ph': 'Nama brand (mis. Crystalin)',
                'feedbranding.slogan-ph': 'Slogan (opsional)',
                'feedbranding.price-ph': 'Harga (mis. Rp5.000)',
                'feedbranding.optional': '(Opsional)',
                'fb.model-title': 'Model di Feed',
                'fb.model-sub': 'Tampilkan orang di sebagian post (Cover, Testimoni, Cara Pakai). Sisanya tetap produk murni.',
                'fb.model-ai': 'AI model',
                'fb.model-upload': 'Upload model sendiri',
                'fb.model-hint': 'Upload foto orang (wajah jelas)',
                'fb.model-ok': 'Model siap dipakai',
                'feedbranding.color-main': 'Warna Utama',
                'feedbranding.color-second': 'Warna Sekunder',
                'feedbranding.color-second-ph': 'Kosongkan jika tidak perlu',
                'feedbranding.color-hint': 'Warna jadi background utama semua post. Pilih yang cocok dengan produkmu.',
                'feedbranding.generate': 'Buat Feed Branding',
                'feedbranding.results': 'Hasil Feed (6 Post)',
                'fb.ct-feed': 'Feed (6 Post)',
                'fb.ct-carousel': 'Carousel',
                'feedbranding.downloadall': 'Download Semua',
                'feedbranding.empty-title': 'Hasil feed akan muncul di sini',
                'feedbranding.empty-hint': 'Upload foto produk + nama brand, lalu klik Buat Feed Branding',
                'feedbranding.tips-title': 'Tips Hasil Terbaik',
                'feedbranding.tip1': 'Pakai foto produk yang jelas & pencahayaan bagus',
                'feedbranding.tip2': 'Isi nama brand persis seperti yang mau tampil',
                'feedbranding.tip3': 'Teks digambar AI — kalau ada typo, generate ulang',
                'feedbranding.role.cover': 'Cover',
                'feedbranding.role.benefit': 'Benefit',
                'feedbranding.role.testimoni': 'Testimoni',
                'feedbranding.role.carapakai': 'Cara Pakai',
                'feedbranding.role.harga': 'Harga',
                'feedbranding.role.cta': 'CTA',
                'fb.kit-title': 'Brand Kit',
                'fb.kit-hint': 'Simpan nama, warna, slogan & logo sekali — muat kapan saja.',
                'fb.kit-none': '— Muat brand tersimpan —',
                'fb.count-title': 'Jumlah Post & Gaya',
                'fb.count-label': 'Jumlah Post',
                'fb.style-label': 'Gaya Visual',
                'fb.style-auto': 'Auto',
                'fb.style-minimalis': 'Minimalis',
                'fb.style-bold': 'Bold Pop',
                'fb.style-luxury': 'Luxury',
                'fb.style-playful': 'Playful',
                'fb.logo-label': 'Logo Brand',
                'fb.logo-hint': 'Upload logo (PNG transparan disarankan)',
                'fb.logo-ok': 'Logo siap dipakai',
                'fb.caption-btn': 'Buat Caption',
                'fb.ig-btn': 'Preview IG',
                'fb.ig-posts': 'Kiriman',
                'fb.ig-followers': 'Pengikut',
                'fb.ig-following': 'Mengikuti',
                'fb.ig-editprofile': 'Edit profil',
                'fb.ig-share': 'Bagikan profil',
                'fb.ig-new': 'Baru',
                'fb.ig-hint': 'Ketuk username, angka, atau bio untuk mengedit. Klik foto profil untuk menggantinya.',
                'login.title': 'Login Pembeli',
                'login.subtitle': 'Masukkan email yang kamu pakai saat membeli di Lynk.id atau Mayar.',
                'login.email-ph': 'Email pembelian',
                'login.btn': 'Masuk',
                'login.logout': 'Keluar',
                'login.err-network': 'Tidak bisa terhubung ke server. Cek koneksi lalu coba lagi.',
                'login.err-email': 'Isi email yang valid dulu.'
            },
            en: {
                'fb.subtitle': 'Upload 1 product photo + brand name, AI builds 6 cohesive feed designs ready to post in sequence.',
                'feedbranding.mode-title': 'Choose Mode',
                'feedbranding.mode-standar': 'Standard',
                'feedbranding.mode-random': 'Random',
                'feedbranding.mode-custom': 'Custom',
                'feedbranding.custom-topic-ph': 'e.g. Ramadan Promo, Benefits for dull skin',
                'feedbranding.mode-hint-standar': '6 standard posts: Cover, Benefit, Testimonial, How to Use, Price, CTA.',
                'feedbranding.step1': 'Product Photo',
                'feedbranding.step2': 'Brand Name',
                'feedbranding.step3': 'Extra Info',
                'feedbranding.step4': 'Brand Color',
                'feedbranding.step5': 'Photo Ratio',
                'feedbranding.upload-hint': 'Click to upload product photo',
                'feedbranding.upload-formats': 'PNG, JPG, WEBP, HEIC',
                'feedbranding.brandname-ph': 'Brand name (e.g. Crystalin)',
                'feedbranding.slogan-ph': 'Slogan (optional)',
                'feedbranding.price-ph': 'Price (e.g. $5)',
                'feedbranding.optional': '(Optional)',
                'fb.model-title': 'Models in Feed',
                'fb.model-sub': 'Show a person in some posts (Cover, Testimonial, How to Use). The rest stay product-only.',
                'fb.model-ai': 'AI model',
                'fb.model-upload': 'Upload your own model',
                'fb.model-hint': 'Upload a person photo (clear face)',
                'fb.model-ok': 'Model ready',
                'feedbranding.color-main': 'Main Color',
                'feedbranding.color-second': 'Secondary Color',
                'feedbranding.color-second-ph': 'Leave empty if not needed',
                'feedbranding.color-hint': 'The color becomes the main background of every post. Pick one that fits your product.',
                'feedbranding.generate': 'Create Feed Branding',
                'feedbranding.results': 'Feed Result (6 Posts)',
                'fb.ct-feed': 'Feed (6 Posts)',
                'fb.ct-carousel': 'Carousel',
                'feedbranding.downloadall': 'Download All',
                'feedbranding.empty-title': 'Your feed result will appear here',
                'feedbranding.empty-hint': 'Upload a product photo + brand name, then click Create Feed Branding',
                'feedbranding.tips-title': 'Tips for Best Results',
                'feedbranding.tip1': 'Use a clear product photo with good lighting',
                'feedbranding.tip2': 'Type the brand name exactly as it should appear',
                'feedbranding.tip3': 'Text is drawn by AI — if there is a typo, regenerate',
                'feedbranding.role.cover': 'Cover',
                'feedbranding.role.benefit': 'Benefit',
                'feedbranding.role.testimoni': 'Testimonial',
                'feedbranding.role.carapakai': 'How to Use',
                'feedbranding.role.harga': 'Price',
                'feedbranding.role.cta': 'CTA',
                'fb.kit-title': 'Brand Kit',
                'fb.kit-hint': 'Save name, colors, slogan & logo once — load anytime.',
                'fb.kit-none': '— Load saved brand —',
                'fb.count-title': 'Post Count & Style',
                'fb.count-label': 'Number of Posts',
                'fb.style-label': 'Visual Style',
                'fb.style-auto': 'Auto',
                'fb.style-minimalis': 'Minimalist',
                'fb.style-bold': 'Bold Pop',
                'fb.style-luxury': 'Luxury',
                'fb.style-playful': 'Playful',
                'fb.logo-label': 'Brand Logo',
                'fb.logo-hint': 'Upload logo (transparent PNG recommended)',
                'fb.logo-ok': 'Logo ready to use',
                'fb.caption-btn': 'Create Captions',
                'fb.ig-btn': 'IG Preview',
                'fb.ig-posts': 'Posts',
                'fb.ig-followers': 'Followers',
                'fb.ig-following': 'Following',
                'fb.ig-editprofile': 'Edit profile',
                'fb.ig-share': 'Share profile',
                'fb.ig-new': 'New',
                'fb.ig-hint': 'Tap the username, numbers, or bio to edit. Click the profile photo to change it.',
                'login.title': 'Buyer Login',
                'login.subtitle': 'Enter the email you used when purchasing on Lynk.id or Mayar.',
                'login.email-ph': 'Purchase email',
                'login.btn': 'Log In',
                'login.logout': 'Log Out',
                'login.err-network': 'Cannot reach the server. Check your connection and try again.',
                'login.err-email': 'Enter a valid email first.'
            }
        };

        function currentLang() { return localStorage.getItem('app_language') || 'id'; }
        window.tr = (idText, enText) => currentLang() === 'en' ? enText : idText;

        function applyLanguage() {
            const dict = T[currentLang()] || T.id;
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const k = el.getAttribute('data-i18n'); if (dict[k] != null) el.textContent = dict[k];
            });
            document.querySelectorAll('[data-i18n-html]').forEach(el => {
                const k = el.getAttribute('data-i18n-html'); if (dict[k] != null) el.innerHTML = dict[k];
            });
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const k = el.getAttribute('data-i18n-placeholder'); if (dict[k] != null) el.setAttribute('placeholder', dict[k]);
            });
            document.documentElement.lang = currentLang();
        }
        window._applyLanguage = applyLanguage;

        const toggleLang = () => {
            localStorage.setItem('app_language', currentLang() === 'en' ? 'id' : 'en');
            applyLanguage();
        };
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) langToggle.addEventListener('click', toggleLang);
        const loginLangToggle = document.getElementById('login-lang-toggle');
        if (loginLangToggle) loginLangToggle.addEventListener('click', toggleLang);
        applyLanguage();

        // ==================== LOGIN GATE (lisensi pembeli, pola Canvla) ====================
        (function() {
            const AUTH_URL = 'https://script.google.com/macros/s/AKfycbzV6y_AiOjFBe3Js6mNFTcl6zQ46LpFV4nIaMPfPkkPD3G-BqEkj2TMzPe8i8aQ3I8T/exec';
            const APP_SECRET = 'FzQ9kTm4XrP7wLc2VnB8sHdJ3aGy';
            const SESSION_KEY = 'feedz_session';
            const DEVICE_KEY = 'feedz_device_token';

            const gate = document.getElementById('login-gate');
            const form = document.getElementById('login-form');
            const emailEl = document.getElementById('login-email');
            const btn = document.getElementById('login-btn');
            const errEl = document.getElementById('login-error');
            const logoutBtn = document.getElementById('logout-btn');
            if (!gate || !form) return;

            let deviceToken = localStorage.getItem(DEVICE_KEY);
            if (!deviceToken) {
                deviceToken = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : 'd' + Date.now() + Math.random().toString(36).slice(2);
                localStorage.setItem(DEVICE_KEY, deviceToken);
            }

            function t(key) { return (T[currentLang()] && T[currentLang()][key]) || T.id[key] || key; }
            function loadSession() { try { return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null'); } catch (e) { return null; } }
            function showError(msg) { errEl.textContent = msg; errEl.classList.remove('hidden'); }
            function openApp() { gate.classList.add('hidden'); logoutBtn.classList.remove('hidden'); }
            function closeApp() { gate.classList.remove('hidden'); logoutBtn.classList.add('hidden'); }

            async function authCall(action, email) {
                const q = new URLSearchParams({ app_secret: APP_SECRET, action: action, email: email, token: deviceToken });
                const res = await fetch(AUTH_URL + '?' + q.toString());
                return await res.json();
            }

            form.addEventListener('submit', async (ev) => {
                ev.preventDefault();
                errEl.classList.add('hidden');
                const email = emailEl.value.trim();
                if (!email || email.indexOf('@') === -1) { showError(t('login.err-email')); return; }
                const orig = btn.innerHTML;
                btn.disabled = true;
                btn.innerHTML = '<div class="loader !w-5 !h-5 !border-2"></div>';
                try {
                    const r = await authCall('login', email);
                    if (r && r.status === 'SUKSES') {
                        localStorage.setItem(SESSION_KEY, JSON.stringify({ email: email, nama: r.nama || '' }));
                        openApp();
                    } else {
                        showError((r && r.message) || t('login.err-network'));
                    }
                } catch (e) {
                    console.warn('login error:', e);
                    showError(t('login.err-network'));
                } finally {
                    btn.disabled = false;
                    btn.innerHTML = orig;
                    window._applyLanguage();
                }
            });

            logoutBtn.addEventListener('click', () => {
                const s = loadSession();
                localStorage.removeItem(SESSION_KEY);
                closeApp();
                if (s && s.email) authCall('logout', s.email).catch(() => {});
            });

            const session = loadSession();
            if (session && session.email) {
                openApp();
                authCall('cek', session.email).then((r) => {
                    if (r && r.status === 'INVALID') {
                        localStorage.removeItem(SESSION_KEY);
                        closeApp();
                        showError(r.message || '');
                    }
                }).catch(() => {});
            }
        })();

        // ==================== FEED BRANDING ====================
        (function() {
            const panel = document.getElementById('content-feedbranding');
            if (!panel) return;

            const imgInput = document.getElementById('fb-image-input');
            const imgPreview = document.getElementById('fb-image-preview');
            const previewContainer = document.getElementById('fb-preview-container');
            const uploadLabel = document.getElementById('fb-upload-label');
            const removeBtn = document.getElementById('fb-remove-btn');
            const brandNameEl = document.getElementById('fb-brand-name');
            const sloganEl = document.getElementById('fb-slogan');
            const priceEl = document.getElementById('fb-price');
            const colorEl = document.getElementById('fb-accent-color');
            const hexEl = document.getElementById('fb-accent-hex');
            const color2El = document.getElementById('fb-accent2-color');
            const hex2El = document.getElementById('fb-accent2-hex');
            const clear2Btn = document.getElementById('fb-accent2-clear');
            const ratioSel = document.getElementById('fb-ratio-selection');
            const generateBtn = document.getElementById('fb-generate-btn');
            const fbGenBtnHtml = generateBtn.innerHTML;
            function fbGenBtnLabel() {
                return contentType === 'carousel'
                    ? window.tr('Buat Carousel', 'Create Carousel')
                    : window.tr('Buat Feed Branding', 'Create Feed Branding');
            }
            function fbRestoreGenBtn() {
                generateBtn.innerHTML = '<i class="fas fa-wand-magic-sparkles mr-2"></i><span>' + fbGenBtnLabel() + '</span>';
            }
            const resultsGrid = document.getElementById('fb-results-grid');
            const downloadAllBtn = document.getElementById('fb-download-all-btn');

            let fbProductImage = null;
            let fbGenerated = [];
            let fbColor2 = '';
            let selectedFbRatio = '4:5';
            let fbMode = 'standar';
            let fbActiveRoles = null;
            let fbStyleAnchor = '';
            let contentType = 'feed';
            let fbModelEnabled = false;
            let fbModelSource = 'ai';     // 'ai' | 'upload'
            let fbModelImage = null;      // {mimeType, base64}
            let fbModelPersona = '';      // persona AI terkunci per sesi

            function fbDownload(dataUrl, filename) {
                return fetch(dataUrl).then(r => r.blob()).then(b => {
                    if (window.saveAs) return window.saveAs(b, filename);
                    const a = document.createElement('a'); a.href = dataUrl; a.download = filename; a.click();
                });
            }

            function normHex(v) {
                v = (v || '').trim();
                if (/^[0-9a-fA-F]{6}$/.test(v)) v = '#' + v;
                if (/^#[0-9a-fA-F]{3}$/.test(v)) v = '#' + v[1] + v[1] + v[2] + v[2] + v[3] + v[3];
                return /^#[0-9a-fA-F]{6}$/.test(v) ? v.toLowerCase() : null;
            }
            if (colorEl && hexEl) {
                colorEl.addEventListener('input', () => { hexEl.value = colorEl.value; });
                hexEl.addEventListener('input', () => { const h = normHex(hexEl.value); if (h) colorEl.value = h; });
            }
            if (color2El && hex2El) {
                color2El.addEventListener('input', () => { fbColor2 = color2El.value; hex2El.value = color2El.value; color2El.classList.remove('opacity-40'); });
                hex2El.addEventListener('input', () => {
                    const h = normHex(hex2El.value);
                    if (h) { fbColor2 = h; color2El.value = h; color2El.classList.remove('opacity-40'); }
                    else if (!hex2El.value.trim()) { fbColor2 = ''; color2El.classList.add('opacity-40'); }
                });
            }
            if (clear2Btn) clear2Btn.addEventListener('click', () => {
                fbColor2 = '';
                if (hex2El) hex2El.value = '';
                if (color2El) color2El.classList.add('opacity-40');
            });

            if (ratioSel) ratioSel.addEventListener('click', (e) => {
                const btn = e.target.closest('button[data-ratio]');
                if (!btn) return;
                ratioSel.querySelectorAll('button').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                selectedFbRatio = btn.dataset.ratio;
            });

            const fbModeSel = document.getElementById('fb-mode-selection');
            const fbCustomWrap = document.getElementById('fb-custom-topic-wrap');
            const fbModeHint = document.getElementById('fb-mode-hint');
            function fbUpdateModeHint() {
                if (!fbModeHint) return;
                const hints = {
                    standar: ['6 post format standar: Cover, Benefit, Testimoni, Cara Pakai, Harga, CTA.', '6 standard posts: Cover, Benefit, Testimonial, How to Use, Price, CTA.'],
                    random: ['AI mengarang 6 topik segar & beda tiap kali klik.', 'AI invents 6 fresh, different post angles every click.'],
                    custom: ['Tulis 1 topik, AI buat 6 post yang nyambung dari berbagai sudut.', 'Type one topic; AI creates 6 cohesive posts from varied angles.']
                };
                const t = hints[fbMode] || hints.standar;
                fbModeHint.removeAttribute('data-i18n');
                fbModeHint.textContent = window.tr(t[0], t[1]);
            }
            if (fbModeSel) fbModeSel.addEventListener('click', (e) => {
                const btn = e.target.closest('button[data-mode]');
                if (!btn) return;
                fbModeSel.querySelectorAll('button').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                fbMode = btn.dataset.mode;
                if (fbCustomWrap) fbCustomWrap.classList.toggle('hidden', fbMode !== 'custom');
                fbUpdateModeHint();
            });

            const FB_ROLES = [
                { key: 'cover',     model: true,  role: "POST ROLE - HERO COVER: The scroll-stopping campaign cover. Render the product GIGANTIC in the center as the absolute hero, floating with dramatic spotlight and deep soft shadow. The brand name appears as a MASSIVE bold display headline layered creatively behind or above the product. Decorative elements themed to the product burst outward around it (splashes, particles, ingredients, light streaks). Maximum visual impact." },
                { key: 'benefit',   model: false, role: "POST ROLE - BENEFITS: A bold benefits post, NOT clinical. Short punchy headline at top (e.g. why choose this brand). The product rendered LARGE on one side. Exactly 3 short benefit callouts as clean white rounded pill chips with small icons, visually connected to the product with thin lines or dots. Keep the same explosive brand background." },
                { key: 'testimoni', model: true,  role: "POST ROLE - SOCIAL PROOF: A trust post with energy. A row of 5 large gold stars at top, one short enthusiastic customer quote in large elegant typography as the centerpiece, a '4.9/5' rating badge, and the product visible smaller at the bottom with its shadow. Same bold brand background, premium feel." },
                { key: 'carapakai', model: true,  role: "POST ROLE - HOW TO USE: A dynamic 3-step guide. Bold short headline at top. Three numbered circular step badges (1, 2, 3) arranged diagonally or in a flow, each with a mini render of the product in use. Energetic but easy to scan. Same brand background system." },
                { key: 'harga',     model: false, role: "POST ROLE - PRICE PROMO: A high-energy promo post. The price displayed HUGE inside a bold burst badge or ribbon as the focal point, with the product rendered large beside or below it. Promo urgency energy: bold shapes, exclamation accents. Same brand background system." },
                { key: 'cta',       model: false, role: "POST ROLE - CALL TO ACTION: The closing post. A bold action headline (order now / get yours), a button-shaped badge or arrow accent, the product as a confident hero with glow, brand name prominent. Strong urgency, same brand background system." }
            ];
            fbActiveRoles = FB_ROLES;

            function carouselRoles(n) {
                const roles = [];
                roles.push({ key: 'hook', model: true, role: "CAROUSEL SLIDE - HOOK (slide 1): The scroll-stopping opening slide. A bold, curiosity-driven headline in HUGE display type that makes people stop and swipe (a promise, a bold claim, or a question). Product rendered large as hero with dramatic spotlight. Include a subtle 'swipe' cue (a small arrow or 'geser' hint) at the bottom-right. Maximum impact, sets the visual tone for the whole carousel." });
                const middle = Math.max(0, n - 2);
                for (let i = 0; i < middle; i++) {
                    roles.push({ key: 'value' + (i + 1), model: false, role: "CAROUSEL SLIDE - VALUE POINT " + (i + 1) + " of " + middle + ": One single clear value/benefit/step that continues the story from the previous slide. Short punchy headline + one supporting line. Product visible as a consistent hero. Keep the exact same background system and layout rhythm as the other slides so the swipe feels continuous." });
                }
                roles.push({ key: 'cta', model: false, role: "CAROUSEL SLIDE - CTA (final slide): The closing slide. A bold action headline (order now / DM us / get yours), a button-shaped badge or arrow accent, the product as a confident hero with glow, brand name prominent. Strong urgency, same brand background system." });
                return roles;
            }

            function fbLangWord() {
                return (localStorage.getItem('app_language') || 'id') === 'en' ? 'English' : 'Indonesian';
            }

            function updateGenerateState() {
                const ready = !!fbProductImage && brandNameEl.value.trim().length > 0;
                generateBtn.disabled = !ready;
            }

            async function fbFileToBase64(file) {
                let processed = file;
                if (file.type === 'image/heic' || file.name.toLowerCase().endsWith('.heic')) {
                    const blob = await heic2any({ blob: file, toType: 'image/jpeg', quality: 0.9 });
                    processed = new File([blob], file.name.replace(/\.heic$/i, '.jpg'), { type: 'image/jpeg' });
                }
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => { resolve({ base64: String(reader.result).split(',')[1], mimeType: processed.type || 'image/jpeg' }); };
                    reader.onerror = reject;
                    reader.readAsDataURL(processed);
                });
            }

            async function fbHandleFile(file) {
                if (!file) return;
                try {
                    fbProductImage = await fbFileToBase64(file);
                    imgPreview.src = `data:${fbProductImage.mimeType};base64,${fbProductImage.base64}`;
                    if (previewContainer) previewContainer.classList.remove('hidden');
                    if (uploadLabel) uploadLabel.classList.add('hidden');
                } catch (err) {
                    console.error('FB upload error:', err);
                    alert(window.tr('Gagal membaca foto. Coba file lain (JPG/PNG).', 'Failed to read photo. Try another file (JPG/PNG).'));
                }
                updateGenerateState();
            }

            imgInput.addEventListener('change', (e) => fbHandleFile(e.target.files && e.target.files[0]));

            if (uploadLabel) {
                ['dragover', 'dragenter'].forEach(ev => uploadLabel.addEventListener(ev, (e) => { e.preventDefault(); uploadLabel.querySelector('.fz-upload')?.classList.add('dragging'); }));
                ['dragleave', 'drop'].forEach(ev => uploadLabel.addEventListener(ev, (e) => { e.preventDefault(); uploadLabel.querySelector('.fz-upload')?.classList.remove('dragging'); }));
                uploadLabel.addEventListener('drop', (e) => fbHandleFile(e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]));
            }

            if (removeBtn) removeBtn.addEventListener('click', () => {
                fbProductImage = null;
                imgInput.value = '';
                imgPreview.src = '#';
                if (previewContainer) previewContainer.classList.add('hidden');
                if (uploadLabel) uploadLabel.classList.remove('hidden');
                updateGenerateState();
            });

            brandNameEl.addEventListener('input', updateGenerateState);

            function fbRatioWord() {
                if (selectedFbRatio === '1:1') return 'square 1:1';
                if (selectedFbRatio === '9:16') return 'vertical story 9:16';
                return 'portrait 4:5';
            }

            function fbBuildBrief() {
                const brand = brandNameEl.value.trim();
                const slogan = sloganEl.value.trim();
                const color = fbColor2
                    ? `${colorEl.value} as the dominant color with ${fbColor2} as the secondary accent (use both consistently, e.g. rich gradient or color-blocking)`
                    : colorEl.value;
                const lang = fbLangWord();
                const taglineLine = slogan ? `- Tagline: "${slogan}" shown small under the brand name.` : '';
                const styleLine = fbStyleWord() ? `\n- STYLE DIRECTION: ${fbStyleWord()}` : '';
                const logoLine = fbLogoImage ? `\n- LOGO: an additional logo image is provided as reference — place THAT EXACT logo (unchanged, do not redraw) as a small consistent brand mark in the SAME corner of every post.` : '';
                const unitWord = contentType === 'carousel' ? 'slide' : 'post';
                const setDesc = contentType === 'carousel'
                    ? `ONE slide of a ${selectedCount}-slide premium Instagram CAROUSEL that people swipe through in order. All ${selectedCount} slides form ONE connected narrative and share ONE IDENTICAL visual identity so they look seamless side-by-side when swiped`
                    : `ONE post of a ${selectedCount}-post premium Instagram feed campaign. All ${selectedCount} posts share ONE IDENTICAL visual identity`;
                return `You are a senior art director at a top advertising agency, designing ${setDesc} (campaign session: ${fbStyleAnchor}).

BRAND IDENTITY SYSTEM (must be EXACTLY the same in every ${unitWord} of this session):
- Brand name: "${brand}" - always spelled EXACTLY like this, prominent, plus a small logo-style brand mark in a corner of every post.
${taglineLine}
- BACKGROUND: full-bleed, rich, SATURATED brand-color background based on ${color} (use bold gradients, subtle texture, glow and depth). NEVER a plain white, gray, or pale background. The whole feed must look like one colorful branded wall.
- PRODUCT TREATMENT: the product from the reference photo is the HERO. Render it LARGE (it should dominate the frame), floating with a dramatic soft drop shadow, premium studio lighting and subtle reflection. Keep the product 100% identical to the reference photo.
- TYPOGRAPHY: bold condensed display headlines with very short punchy words, layered creatively with the product (in front/behind). Small clean supporting text only where needed. High contrast against the background.
- DECORATIVE ELEMENTS: floating particles, splashes, shapes or ingredients that match the product theme, plus subtle glow and depth-of-field.
- All visible text written in ${lang}, correctly spelled, minimal wording (3-6 words max per headline).${styleLine}${logoLine}
- Overall vibe: high-end D2C brand campaign, energetic, saturated, cohesive, scroll-stopping.${contentType === 'carousel' ? ' This is a swipeable carousel — keep backgrounds and layout style continuous so adjacent slides feel like one flowing story.' : ''} Format: ${fbRatioWord()}.`;
            }

            function fbModelLine(roleObj) {
                if (!fbModelEnabled || !roleObj || !roleObj.model) return '';
                const who = fbModelSource === 'upload'
                    ? 'the EXACT person shown in the additional MODEL reference photo — keep their face, skin tone and overall appearance consistent and recognizable'
                    : (fbModelPersona || 'a friendly relatable human model that fits this brand');
                return `\n\nHUMAN MODEL (this post only): Feature ONE photorealistic human model — ${who}. The model interacts with the product in the way that best fits this product type: WEARING it if it is apparel or a wearable, HOLDING or using it if it is handheld, otherwise posing beside it as a confident brand ambassador. The product must stay clearly visible, sharp and remain the focus. Keep the exact same brand background system, colors, typography and logo placement as the other posts. Natural lighting on the model, premium editorial campaign look.`;
            }

            function fbRolePrompt(roleObj) {
                const price = priceEl.value.trim();
                let role = roleObj.role;
                if (roleObj.key === 'harga') {
                    role = price
                        ? `POST ROLE - PRICE PROMO: A high-energy promo post. The price "${price}" displayed HUGE inside a bold burst badge or ribbon as the focal point, with the product rendered large beside or below it. Promo urgency energy: bold shapes, exclamation accents. Same brand background system.`
                        : roleObj.role;
                }
                return `${fbBuildBrief()}

${role}${fbModelLine(roleObj)}

Premium social media advertising design, magazine-ad quality, ultra detailed, ${fbRatioWord()} aspect ratio.`;
            }

            function padRoles(n) {
                return Array.from({ length: n }, (_, i) => ({ key: 'r' + (i + 1), model: i % 3 === 0, role: FB_ROLES[i % FB_ROLES.length].role }));
            }

            async function fbResolveRoles() {
                if (contentType === 'carousel') {
                    const nC = selectedCount;
                    if (fbMode === 'standar') return carouselRoles(nC);
                }
                if (fbMode === 'standar' && selectedCount <= 6) return FB_ROLES.slice(0, selectedCount);
                const n = selectedCount;
                const brand = brandNameEl.value.trim();
                const slogan = sloganEl.value.trim();
                const lang = fbLangWord();
                const topicEl = document.getElementById('fb-custom-topic');
                const topic = (topicEl && topicEl.value || '').trim();
                let instruction;
                if (contentType === 'carousel') {
                    if (fbMode === 'custom' && topic) {
                        instruction = `The user wants a ${n}-slide Instagram CAROUSEL (swiped in order) about this TOPIC: "${topic}". Create ${n} slides that form ONE connected story: slide 1 is a scroll-stopping HOOK, the last slide is a clear CALL TO ACTION, and the middle slides deliver value points that build on each other in sequence.`;
                    } else {
                        instruction = `Create a ${n}-slide Instagram CAROUSEL (swiped in order) that tells ONE connected story for this product/brand: slide 1 is a scroll-stopping HOOK, the last slide is a strong CALL TO ACTION, and the middle slides are value points (e.g. problem, benefit, proof, how-to, offer) that flow one into the next.`;
                    }
                } else if (fbMode === 'custom' && topic) {
                    instruction = `The user wants a ${n}-post Instagram feed campaign all centered on this TOPIC: "${topic}". Create ${n} DIFFERENT but cohesive post angles that all explore this topic from varied sides.`;
                } else {
                    instruction = `Create ${n} DIVERSE, fresh, scroll-stopping Instagram feed post angles for this product/brand. Vary the angles widely (e.g. unboxing, before/after, key ingredients, myth vs fact, bundling deal, restock alert, quick tutorial, comparison) so a daily poster never repeats.`;
                }
                const systemPrompt = `You are a senior social media creative director. ${instruction}
For each of the ${n} ${contentType === 'carousel' ? 'slides' : 'posts'} return: "label" = a very short 1-3 word ${contentType === 'carousel' ? 'slide' : 'post'} title written in ${lang}; "role" = one vivid English art-direction sentence starting with "${contentType === 'carousel' ? 'CAROUSEL SLIDE' : 'POST ROLE'} - <UPPERCASE NAME>:" describing what this single ${contentType === 'carousel' ? 'slide' : 'post'} shows, always rendering the product as the large hero; "withModel" = a boolean, set true for roughly one third to one half of the ${contentType === 'carousel' ? 'slides' : 'posts'} that would look natural with a real human model (e.g. cover, testimonial, how-to, lifestyle) and false for the rest (e.g. pure price/promo, plain CTA).
Brand: "${brand}"${slogan ? `, tagline "${slogan}"` : ''}.`;
                try {
                    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
                    const parts = [{ text: 'Generate the 6-post angle list now.' }];
                    if (fbProductImage) parts.push({ inlineData: { mimeType: fbProductImage.mimeType, data: fbProductImage.base64 } });
                    const payload = {
                        contents: [{ parts }],
                        systemInstruction: { parts: [{ text: systemPrompt }] },
                        generationConfig: {
                            responseMimeType: "application/json",
                            responseSchema: { type: "ARRAY", items: { type: "OBJECT", properties: { "label": { "type": "STRING" }, "role": { "type": "STRING" }, "withModel": { "type": "BOOLEAN" } }, required: ["label", "role"] } }
                        }
                    };
                    const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
                    if (!response.ok) throw new Error('text HTTP ' + response.status);
                    const result = await response.json();
                    let text = result && result.candidates && result.candidates[0] && result.candidates[0].content && result.candidates[0].content.parts && result.candidates[0].content.parts[0] && result.candidates[0].content.parts[0].text || '';
                    text = text.replace(/```json/gi, '').replace(/```/g, '').trim();
                    const arr = JSON.parse(text);
                    if (!Array.isArray(arr) || arr.length < n) throw new Error('bad angle array');
                    return arr.slice(0, n).map((a, i) => ({
                        key: 'ai' + (i + 1),
                        label: String(a && a.label ? a.label : ('Post ' + (i + 1))).trim().slice(0, 24),
                        model: !!(a && a.withModel),
                        role: String(a && a.role ? a.role : FB_ROLES[i % FB_ROLES.length].role).trim()
                    }));
                } catch (err) {
                    console.error('FB resolveRoles fallback -> padRoles:', err);
                    return padRoles(n);
                }
            }

            async function generateSingleFb(index) {
                const card = document.getElementById(`fb-card-${index}`);
                const roleObj = fbActiveRoles[index - 1];
                try {
                    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image-preview:generateContent?key=${apiKey}`;
                    const parts = [
                        { text: fbRolePrompt(roleObj) },
                        { inlineData: { mimeType: fbProductImage.mimeType, data: fbProductImage.base64 } }
                    ];
                    if (fbLogoImage) parts.push({ inlineData: { mimeType: fbLogoImage.mimeType, data: fbLogoImage.base64 } });
                    if (fbModelEnabled && fbModelSource === 'upload' && fbModelImage && roleObj.model) {
                        parts.push({ inlineData: { mimeType: fbModelImage.mimeType, data: fbModelImage.base64 } });
                    }
                    const payload = { contents: [{ parts }], generationConfig: { responseModalities: ['TEXT', 'IMAGE'], imageConfig: { aspectRatio: selectedFbRatio } } };
                    const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
                    const result = await response.json();
                    const base64Data = result?.candidates?.[0]?.content?.parts?.find(p => p.inlineData)?.inlineData?.data;
                    if (!base64Data) throw new Error('No image data received');
                    const imageUrl = `data:image/png;base64,${base64Data}`;
                    const pad = String(index).padStart(2, '0');
                    const filename = contentType === 'carousel'
                        ? `carousel_${pad}.png`
                        : `feedz_${index}_${roleObj.key}.png`;
                    fbGenerated[index - 1] = { url: imageUrl, filename };
                    if (card) {
                        card.querySelector('.fb-card-body').innerHTML =
                            `<div class="relative w-full h-full group">
                                <img src="${imageUrl}" class="w-full h-full object-cover rounded-md" alt="${roleObj.key}">
                                <div class="absolute bottom-2 right-2 flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                                    <button data-action="fb-preview" data-image-url="${imageUrl}" class="min-w-[44px] min-h-[44px] bg-black/60 text-white rounded-full hover:bg-black/80 shadow-lg" title="Preview"><i class="fas fa-search-plus"></i></button>
                                    <button data-action="fb-regen" data-index="${index}" class="min-w-[44px] min-h-[44px] bg-black/60 text-white rounded-full hover:bg-black/80 shadow-lg" title="Generate Ulang"><i class="fas fa-sync-alt"></i></button>
                                    <button data-action="download" data-image-url="${imageUrl}" data-filename="${filename}" class="min-w-[44px] min-h-[44px] bg-[#D9F99D] text-[#0A0A0A] rounded-full hover:brightness-110 shadow-lg" title="Unduh"><i class="fas fa-download"></i></button>
                                </div>
                             </div>`;
                    }
                } catch (error) {
                    console.error(`FB error ${index}:`, error);
                    if (card) {
                        const body = card.querySelector('.fb-card-body');
                        if (body) body.innerHTML = `<div class="flex flex-col items-center justify-center h-full gap-2"><span class="text-xs text-red-400">${window.tr('gagal', 'failed')}</span><button data-action="fb-regen" data-index="${index}" class="min-h-[44px] px-4 bg-[#1C1C1C] border border-[#262626] text-[#FAFAFA] rounded-lg text-sm font-semibold hover:border-[#D9F99D]"><i class="fas fa-sync-alt mr-1"></i>${window.tr('Ulangi', 'Retry')}</button></div>`;
                    }
                }
            }

            function fbShowPreview(url) {
                const modal = document.createElement('div');
                modal.className = 'fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999] p-4 cursor-zoom-out';
                modal.innerHTML = `<img src="${url}" class="max-w-full max-h-full rounded-lg shadow-2xl object-contain">`;
                modal.addEventListener('click', () => modal.remove());
                document.body.appendChild(modal);
            }

            async function fbRegenOne(index) {
                const card = document.getElementById(`fb-card-${index}`);
                if (!card) return;
                if (!fbStyleAnchor) fbStyleAnchor = 'campaign-' + Math.floor(Math.random() * 999999);
                fbGenerated[index - 1] = undefined;
                const body = card.querySelector('.fb-card-body');
                if (body) body.innerHTML = '<div class="loader"></div>';
                await generateSingleFb(index);
            }

            resultsGrid.addEventListener('click', (e) => {
                const pv = e.target.closest('[data-action="fb-preview"]');
                if (pv) { fbShowPreview(pv.dataset.imageUrl); return; }
                const rg = e.target.closest('[data-action="fb-regen"]');
                if (rg) { fbRegenOne(parseInt(rg.dataset.index, 10)); return; }
                const dl = e.target.closest('[data-action="download"]');
                if (dl) { fbDownload(dl.dataset.imageUrl, dl.dataset.filename); return; }
                const cp = e.target.closest('[data-action="copy-caption"]');
                if (cp) {
                    if (navigator.clipboard) navigator.clipboard.writeText(cp.dataset.text || '');
                    cp.innerHTML = `<i class="fas fa-check mr-1"></i>${window.tr('Tersalin', 'Copied')}`;
                    return;
                }
            });

            function fbRoleLabel(key) {
                const idMap = { cover: 'Cover', benefit: 'Benefit', testimoni: 'Testimoni', carapakai: 'Cara Pakai', harga: 'Harga', cta: 'CTA' };
                const enMap = { cover: 'Cover', benefit: 'Benefit', testimoni: 'Testimonial', carapakai: 'How to Use', harga: 'Price', cta: 'CTA' };
                return window.tr(idMap[key] || key, enMap[key] || key);
            }

            generateBtn.addEventListener('click', async () => {
                if (!fbProductImage || !brandNameEl.value.trim()) return;
                generateBtn.disabled = true;
                fbGenerated = [];
                const oldCarouselCap = document.getElementById('fb-carousel-caption');
                if (oldCarouselCap) oldCarouselCap.remove();
                fbStyleAnchor = 'campaign-' + Math.floor(Math.random() * 999999);
                if (fbModelEnabled && fbModelSource === 'ai') {
                    fbModelPersona = MODEL_PERSONA_POOL[Math.floor(Math.random() * MODEL_PERSONA_POOL.length)];
                }

                if (fbMode !== 'standar') {
                    const composing = window.tr('Menyusun ide…', 'Composing ideas…');
                    generateBtn.innerHTML = `<div class="loader !w-4 !h-4 !border-2 mr-2"></div><span>${composing}</span>`;
                }
                fbActiveRoles = await fbResolveRoles();
                fbRestoreGenBtn();

                if (downloadAllBtn) downloadAllBtn.classList.remove('hidden');
                if (captionBtn) captionBtn.classList.remove('hidden');
                if (igBtn) igBtn.classList.remove('hidden');

                const aspectClass = selectedFbRatio === '1:1' ? 'aspect-square' : (selectedFbRatio === '9:16' ? 'aspect-[9/16]' : 'aspect-[4/5]');
                const isCarousel = contentType === 'carousel';
                resultsGrid.className = isCarousel
                    ? 'flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2'
                    : 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4';
                resultsGrid.innerHTML = fbActiveRoles.map((r, i) => {
                    const badge = isCarousel
                        ? `<span class="text-[10px] text-[#71717A] ml-2">${i + 1}/${fbActiveRoles.length}</span>`
                        : '';
                    const cardCls = isCarousel
                        ? 'fz-card p-3 flex flex-col snap-center shrink-0 w-[80%] sm:w-[300px]'
                        : 'fz-card p-3 flex flex-col';
                    return `
                    <div id="fb-card-${i + 1}" class="${cardCls}">
                        <div class="mb-2 flex items-center"><span class="text-xs font-semibold text-[#D9F99D]">${r.label || fbRoleLabel(r.key)}</span>${badge}</div>
                        <div class="fb-card-body ${aspectClass} bg-[#1C1C1C] rounded-md flex items-center justify-center"><div class="loader"></div></div>
                    </div>`;
                }).join('');

                await Promise.allSettled(fbActiveRoles.map((_, i) => generateSingleFb(i + 1)));

                const successCount = fbGenerated.filter(Boolean).length;
                if (successCount === 0) {
                    alert(window.tr('Akun Google ini sudah mencapai batas, silakan gunakan akun Google lain.', 'This Google account has reached its limit, please use another Google account.'));
                }
                generateBtn.disabled = false;
            });

            downloadAllBtn.addEventListener('click', async () => {
                const valid = fbGenerated.filter(Boolean);
                for (let i = 0; i < valid.length; i++) await fbDownload(valid[i].url, valid[i].filename);
            });

            // ===================== v1.1 FEATURES =====================
            const countSel = document.getElementById('fb-count-selection');
            const styleSel = document.getElementById('fb-style-selection');
            const logoInput = document.getElementById('fb-logo-input');
            const logoLabel = document.getElementById('fb-logo-label');
            const logoPreview = document.getElementById('fb-logo-preview');
            const logoPreviewWrap = document.getElementById('fb-logo-preview-wrap');
            const logoRemove = document.getElementById('fb-logo-remove');
            const kitSelect = document.getElementById('fb-kit-select');
            const kitSave = document.getElementById('fb-kit-save');
            const kitDelete = document.getElementById('fb-kit-delete');
            const captionBtn = document.getElementById('fb-caption-btn');

            let selectedCount = 6;
            let selectedStyle = 'auto';
            let fbLogoImage = null;

            const fbResultsTitle = document.querySelector('#content-feedbranding [data-i18n="feedbranding.results"]');

            function fbResultsTitleText() {
                if (contentType === 'carousel') {
                    return window.tr('Hasil Carousel (' + selectedCount + ' Slide)', 'Carousel Result (' + selectedCount + ' Slides)');
                }
                return window.tr('Hasil Feed (' + selectedCount + ' Post)', 'Feed Result (' + selectedCount + ' Posts)');
            }

            function fbRefreshLabels() {
                fbRestoreGenBtn();
                if (fbResultsTitle) {
                    fbResultsTitle.removeAttribute('data-i18n');
                    fbResultsTitle.textContent = fbResultsTitleText();
                }
                fbUpdateModeHint();
            }

            function buildCountButtons() {
                const counts = contentType === 'carousel' ? [3, 5, 7, 10] : [3, 6, 9, 12];
                const def = contentType === 'carousel' ? 5 : 6;
                if (!countSel) return;
                countSel.innerHTML = counts.map(function (c) {
                    return '<button type="button" data-count="' + c + '" class="fz-chip p-2.5' + (c === def ? ' selected' : '') + '">' + c + '</button>';
                }).join('');
                selectedCount = def;
            }

            function applyContentType() {
                buildCountButtons();
                fbRefreshLabels();
            }

            const fbContentSwitch = document.getElementById('fb-content-switch');
            if (fbContentSwitch) fbContentSwitch.addEventListener('click', function (e) {
                const btn = e.target.closest('button[data-content]');
                if (!btn) return;
                fbContentSwitch.querySelectorAll('button').forEach(function (b) { b.classList.remove('selected'); });
                btn.classList.add('selected');
                contentType = btn.dataset.content;
                applyContentType();
            });

            if (countSel) countSel.addEventListener('click', (e) => {
                const btn = e.target.closest('button[data-count]');
                if (!btn) return;
                countSel.querySelectorAll('button').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                selectedCount = parseInt(btn.dataset.count, 10);
                if (fbResultsTitle) fbResultsTitle.textContent = fbResultsTitleText();
            });

            if (styleSel) styleSel.addEventListener('click', (e) => {
                const btn = e.target.closest('button[data-style]');
                if (!btn) return;
                styleSel.querySelectorAll('button').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                selectedStyle = btn.dataset.style;
            });

            function fbStyleWord() {
                const m = {
                    minimalis: 'ultra minimalist — generous clean negative space, one or two elements max, refined restrained typography, calm premium feel.',
                    bold: 'bold pop — very high saturation, chunky oversized typography, energetic geometric shapes, maximum contrast, loud and eye-catching.',
                    luxury: 'luxury — elegant and refined, gold/metallic accents, high-fashion serif typography, sophisticated muted tones, premium editorial feel.',
                    playful: 'playful — fun rounded shapes, cheerful mood, sticker-like or hand-drawn decorative elements, friendly and approachable.'
                };
                return m[selectedStyle] || '';
            }

            function showLogoPreview() {
                if (!fbLogoImage) return;
                logoPreview.src = `data:${fbLogoImage.mimeType};base64,${fbLogoImage.base64}`;
                logoPreviewWrap.classList.remove('hidden');
                logoLabel.classList.add('hidden');
            }
            function clearLogo() {
                fbLogoImage = null;
                if (logoInput) logoInput.value = '';
                logoPreviewWrap.classList.add('hidden');
                logoLabel.classList.remove('hidden');
            }
            if (logoInput) logoInput.addEventListener('change', async (e) => {
                const f = e.target.files && e.target.files[0];
                if (!f) return;
                try { fbLogoImage = await fbFileToBase64(f); showLogoPreview(); }
                catch (err) { console.error('logo error:', err); alert(window.tr('Gagal membaca logo.', 'Failed to read logo.')); }
            });
            if (logoRemove) logoRemove.addEventListener('click', clearLogo);

            // ---- Model di Feed (v1.5) ----
            const MODEL_PERSONA_POOL = [
                'a friendly young woman in her mid-20s with a natural warm smile, clean minimal casual style',
                'a confident young man in his late 20s, approachable, modern casual style',
                'a cheerful woman in her early 30s, professional yet warm, tidy contemporary look',
                'a stylish young man in his mid-20s, energetic and trendy, smart-casual outfit'
            ];
            const modelEnabledEl = document.getElementById('fb-model-enabled');
            const modelOptionsEl = document.getElementById('fb-model-options');
            const modelSourceSel = document.getElementById('fb-model-source-sel');
            const modelUploadWrap = document.getElementById('fb-model-upload-wrap');
            const modelInput = document.getElementById('fb-model-input');
            const modelLabel = document.getElementById('fb-model-label');
            const modelPreview = document.getElementById('fb-model-preview');
            const modelPreviewWrap = document.getElementById('fb-model-preview-wrap');
            const modelRemove = document.getElementById('fb-model-remove');

            function showModelPreview() {
                if (!fbModelImage) return;
                modelPreview.src = `data:${fbModelImage.mimeType};base64,${fbModelImage.base64}`;
                modelPreviewWrap.classList.remove('hidden');
                modelLabel.classList.add('hidden');
            }
            function clearModelImage() {
                fbModelImage = null;
                if (modelInput) modelInput.value = '';
                modelPreviewWrap.classList.add('hidden');
                modelLabel.classList.remove('hidden');
            }
            if (modelEnabledEl) modelEnabledEl.addEventListener('change', () => {
                fbModelEnabled = modelEnabledEl.checked;
                if (modelOptionsEl) modelOptionsEl.classList.toggle('hidden', !fbModelEnabled);
            });
            if (modelSourceSel) modelSourceSel.addEventListener('click', (e) => {
                const btn = e.target.closest('button[data-model-source]');
                if (!btn) return;
                modelSourceSel.querySelectorAll('button').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                fbModelSource = btn.dataset.modelSource;
                if (modelUploadWrap) modelUploadWrap.classList.toggle('hidden', fbModelSource !== 'upload');
            });
            if (modelInput) modelInput.addEventListener('change', async (e) => {
                const f = e.target.files && e.target.files[0];
                if (!f) return;
                try { fbModelImage = await fbFileToBase64(f); showModelPreview(); }
                catch (err) { console.error('model error:', err); alert(window.tr('Gagal membaca foto model.', 'Failed to read model photo.')); }
            });
            if (modelRemove) modelRemove.addEventListener('click', clearModelImage);

            // Brand Kit — hybrid localStorage (cache instan) + Google Apps Script (sync lintas-sesi)
            const FEEDZ_GAS_URL = 'https://script.google.com/macros/s/AKfycbzV6y_AiOjFBe3Js6mNFTcl6zQ46LpFV4nIaMPfPkkPD3G-BqEkj2TMzPe8i8aQ3I8T/exec';
            const FEEDZ_GAS_TOKEN = 'feedz-brandkit-2026';
            const KIT_STORE = 'feedz_brand_kits';
            let FEEDZ_UID = localStorage.getItem('feedz_uid');
            if (!FEEDZ_UID) {
                FEEDZ_UID = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : 'u' + Date.now() + Math.random().toString(36).slice(2);
                localStorage.setItem('feedz_uid', FEEDZ_UID);
            }
            function loadKits() { try { return JSON.parse(localStorage.getItem(KIT_STORE) || '{}'); } catch (e) { return {}; } }
            function saveKits(k) { localStorage.setItem(KIT_STORE, JSON.stringify(k)); }
            function refreshKitSelect() {
                const kits = loadKits();
                const names = Object.keys(kits);
                const none = window.tr('— Muat brand tersimpan —', '— Load saved brand —');
                const cur = kitSelect.value;
                kitSelect.innerHTML = `<option value="">${none}</option>` + names.map(nm => `<option value="${nm}">${nm}</option>`).join('');
                if (cur && kits[cur]) kitSelect.value = cur;
            }
            async function gasCall(payload) {
                if (!FEEDZ_GAS_URL) return null;
                try {
                    const res = await fetch(FEEDZ_GAS_URL, { method: 'POST', body: JSON.stringify(Object.assign({ token: FEEDZ_GAS_TOKEN, uid: FEEDZ_UID }, payload)) });
                    return await res.json();
                } catch (e) { console.warn('Brand Kit sync offline:', e); return null; }
            }
            async function gasSync() {
                const r = await gasCall({ action: 'list' });
                if (!r || !r.ok || !Array.isArray(r.kits)) return;
                const local = loadKits();
                const merged = {};
                r.kits.forEach(k => {
                    if (!k.name) return;
                    const prev = local[k.name] || {};
                    merged[k.name] = { brand: k.name, slogan: k.slogan || '', price: k.price || '', color: k.color || '', color2: k.color2 || '', logo: prev.logo || null };
                });
                Object.keys(local).forEach(n => { if (!merged[n]) merged[n] = local[n]; });
                saveKits(merged);
                refreshKitSelect();
            }
            if (kitSave) kitSave.addEventListener('click', () => {
                const name = brandNameEl.value.trim();
                if (!name) { alert(window.tr('Isi nama brand dulu sebelum simpan.', 'Enter a brand name first.')); return; }
                const kits = loadKits();
                kits[name] = { brand: name, slogan: sloganEl.value, price: priceEl.value, color: colorEl.value, color2: fbColor2, logo: fbLogoImage };
                saveKits(kits); refreshKitSelect(); kitSelect.value = name;
                gasCall({ action: 'save', kit: { name: name, slogan: sloganEl.value, price: priceEl.value, color: colorEl.value, color2: fbColor2 } });
                alert(window.tr('Brand kit tersimpan.', 'Brand kit saved.'));
            });
            if (kitSelect) kitSelect.addEventListener('change', () => {
                const kits = loadKits();
                const k = kits[kitSelect.value];
                if (!k) return;
                brandNameEl.value = k.brand || '';
                sloganEl.value = k.slogan || '';
                priceEl.value = k.price || '';
                if (k.color) { colorEl.value = k.color; hexEl.value = k.color; }
                if (k.color2) { fbColor2 = k.color2; color2El.value = k.color2; hex2El.value = k.color2; color2El.classList.remove('opacity-40'); }
                else { fbColor2 = ''; hex2El.value = ''; color2El.classList.add('opacity-40'); }
                if (k.logo) { fbLogoImage = k.logo; showLogoPreview(); } else { clearLogo(); }
                updateGenerateState();
            });
            if (kitDelete) kitDelete.addEventListener('click', () => {
                const nm = kitSelect.value;
                if (!nm) return;
                const kits = loadKits();
                delete kits[nm];
                saveKits(kits); refreshKitSelect();
                gasCall({ action: 'delete', name: nm });
            });
            refreshKitSelect();
            gasSync();

            async function fbGenerateCaptions() {
                if (!fbActiveRoles) return;
                const brand = brandNameEl.value.trim();
                const lang = fbLangWord();
                const titles = fbActiveRoles.map((r, i) => (r.label || fbRoleLabel(r.key) || ('Post ' + (i + 1))));
                if (contentType === 'carousel') {
                    const orig2 = captionBtn.innerHTML;
                    captionBtn.disabled = true;
                    captionBtn.innerHTML = `<div class="loader !w-4 !h-4 !border-2"></div>`;
                    try {
                        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
                        const sys = `You are a social media copywriter for the brand "${brand}". Write ONE single Instagram CAROUSEL caption in ${lang} for a carousel whose slides in order are: ${JSON.stringify(titles)}. The caption must open with a strong hook line (matching slide 1), briefly reflect the flow of the slides, end with a clear call to action, and finish with 5-8 relevant hashtags. Return JSON: {"caption": string, "hashtags": string}.`;
                        const payload = {
                            contents: [{ parts: [{ text: 'Write the carousel caption now.' }] }],
                            systemInstruction: { parts: [{ text: sys }] },
                            generationConfig: { responseMimeType: 'application/json', responseSchema: { type: 'OBJECT', properties: { caption: { type: 'STRING' }, hashtags: { type: 'STRING' } }, required: ['caption', 'hashtags'] } }
                        };
                        const res = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
                        const j = await res.json();
                        let text = j?.candidates?.[0]?.content?.parts?.[0]?.text || '';
                        text = text.replace(/```json/gi, '').replace(/```/g, '').trim();
                        const c = JSON.parse(text);
                        const full = (c.caption || '') + '\n\n' + (c.hashtags || '');
                        let box = document.getElementById('fb-carousel-caption');
                        if (!box) {
                            box = document.createElement('div');
                            box.id = 'fb-carousel-caption';
                            box.className = 'fz-card p-4 mt-4 text-sm';
                            resultsGrid.parentNode.insertBefore(box, resultsGrid.nextSibling);
                        }
                        box.innerHTML = `<div class="text-xs font-semibold text-[#D9F99D] mb-2">${window.tr('Caption Carousel', 'Carousel Caption')}</div><p class="fb-cc-text text-[#a1a1aa] whitespace-pre-line"></p><p class="fb-cc-tags text-[#D9F99D] mt-2 break-words"></p><button data-action="copy-caption" class="mt-2 min-h-[36px] text-[#71717A] hover:text-[#D9F99D] transition"><i class="fas fa-copy mr-1"></i>${window.tr('Salin', 'Copy')}</button>`;
                        box.querySelector('.fb-cc-text').textContent = c.caption || '';
                        box.querySelector('.fb-cc-tags').textContent = c.hashtags || '';
                        box.querySelector('[data-action="copy-caption"]').dataset.text = full;
                    } catch (err) {
                        console.error('carousel caption error:', err);
                        alert(window.tr('Gagal membuat caption, coba lagi.', 'Failed to create captions, try again.'));
                    } finally {
                        captionBtn.disabled = false;
                        captionBtn.innerHTML = orig2;
                    }
                    return;
                }
                const orig = captionBtn.innerHTML;
                captionBtn.disabled = true;
                captionBtn.innerHTML = `<div class="loader !w-4 !h-4 !border-2"></div>`;
                try {
                    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
                    const sys = `You are a social media copywriter for the brand "${brand}". For each post title, write a short engaging Instagram caption (1-2 sentences) in ${lang}, plus 5-8 relevant hashtags. Return a JSON array in the SAME order; each item: {"caption": string, "hashtags": string}.`;
                    const payload = {
                        contents: [{ parts: [{ text: 'Post titles in order: ' + JSON.stringify(titles) }] }],
                        systemInstruction: { parts: [{ text: sys }] },
                        generationConfig: { responseMimeType: 'application/json', responseSchema: { type: 'ARRAY', items: { type: 'OBJECT', properties: { caption: { type: 'STRING' }, hashtags: { type: 'STRING' } }, required: ['caption', 'hashtags'] } } }
                    };
                    const res = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
                    const j = await res.json();
                    let text = j?.candidates?.[0]?.content?.parts?.[0]?.text || '';
                    text = text.replace(/```json/gi, '').replace(/```/g, '').trim();
                    const arr = JSON.parse(text);
                    arr.forEach((c, i) => {
                        const card = document.getElementById(`fb-card-${i + 1}`);
                        if (!card || !fbGenerated[i]) return;
                        let box = card.querySelector('.fb-caption');
                        if (!box) { box = document.createElement('div'); box.className = 'fb-caption mt-2 text-xs'; card.appendChild(box); }
                        const full = (c.caption || '') + '\n\n' + (c.hashtags || '');
                        box.innerHTML = `<p class="text-[#a1a1aa] whitespace-pre-line">${c.caption || ''}</p><p class="text-[#D9F99D] mt-1 break-words">${c.hashtags || ''}</p><button data-action="copy-caption" class="mt-1.5 min-h-[36px] text-[#71717A] hover:text-[#D9F99D] transition"><i class="fas fa-copy mr-1"></i>${window.tr('Salin', 'Copy')}</button>`;
                        box.querySelector('[data-action="copy-caption"]').dataset.text = full;
                    });
                } catch (err) {
                    console.error('caption error:', err);
                    alert(window.tr('Gagal membuat caption, coba lagi.', 'Failed to create captions, try again.'));
                } finally {
                    captionBtn.disabled = false;
                    captionBtn.innerHTML = orig;
                }
            }
            if (captionBtn) captionBtn.addEventListener('click', fbGenerateCaptions);

            document.addEventListener('click', function (e) {
                const cp = e.target.closest('#fb-carousel-caption [data-action="copy-caption"]');
                if (!cp) return;
                if (navigator.clipboard) navigator.clipboard.writeText(cp.dataset.text || '');
                cp.innerHTML = `<i class="fas fa-check mr-1"></i>${window.tr('Tersalin', 'Copied')}`;
            });

            // ===================== v1.2 IG PREVIEW =====================
            const igBtn = document.getElementById('fb-ig-btn');
            const igOverlay = document.getElementById('fb-ig-overlay');
            const igClose = document.getElementById('fb-ig-close');
            const igGrid = document.getElementById('fb-ig-grid');
            const igCount = document.getElementById('fb-ig-count');
            const igUsername = document.getElementById('fb-ig-username');
            const igName = document.getElementById('fb-ig-name');
            const igBio = document.getElementById('fb-ig-bio');
            const igPfp = document.getElementById('fb-ig-pfp');
            const igPfpWrap = document.getElementById('fb-ig-pfp-wrap');
            const igNavPfp = document.getElementById('fb-ig-navpfp');
            const igPfpInput = document.getElementById('fb-ig-pfp-input');
            const igHighlights = document.getElementById('fb-ig-highlights');
            let igPfpCustom = null;
            let igUserEdited = false;
            let igPosts = [];

            [igUsername, igName, igBio].forEach(el => { if (el) el.addEventListener('input', () => { igUserEdited = true; }); });

            function igOpen() {
                const posts = [];
                fbGenerated.forEach((g, i) => {
                    if (!g) return;
                    const r = fbActiveRoles && fbActiveRoles[i];
                    posts.push({ url: g.url, label: (r && (r.label || fbRoleLabel(r.key))) || '' });
                });
                if (!posts.length) return;
                igPosts = posts;
                const brand = brandNameEl.value.trim() || 'brand';
                if (!igUserEdited) {
                    igUsername.textContent = brand.toLowerCase().replace(/\s+/g, '.').replace(/[^a-z0-9._]/g, '') || 'brand';
                    igName.textContent = brand;
                    igBio.textContent = sloganEl.value.trim() || window.tr('Tulis bio Instagram kamu di sini...', 'Write your Instagram bio here...');
                }
                const pfp = igPfpCustom || (fbLogoImage ? `data:${fbLogoImage.mimeType};base64,${fbLogoImage.base64}` : posts[0].url);
                igPfp.src = pfp;
                igNavPfp.src = pfp;
                igCount.textContent = posts.length;
                igGrid.innerHTML = posts.map((p, i) =>
                    `<button type="button" class="aspect-square overflow-hidden bg-gray-100" data-ig-idx="${i}"><img src="${p.url}" class="w-full h-full object-cover" alt=""></button>`
                ).join('');
                igHighlights.innerHTML = `
                    <div class="flex flex-col items-center gap-1 flex-shrink-0">
                        <div class="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center bg-gray-50"><i class="fas fa-plus text-xl text-gray-400"></i></div>
                        <span class="text-xs text-gray-900">${window.tr('Baru', 'New')}</span>
                    </div>` + posts.slice(0, 4).map(p => `
                    <div class="flex flex-col items-center gap-1 flex-shrink-0">
                        <div class="w-16 h-16 rounded-full border border-gray-300 p-0.5"><img src="${p.url}" class="w-full h-full rounded-full object-cover" alt=""></div>
                        <span class="text-xs text-gray-900 max-w-[64px] truncate">${p.label}</span>
                    </div>`).join('');
                igOverlay.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }

            function igCloseFn() {
                igOverlay.classList.add('hidden');
                document.body.style.overflow = '';
            }

            if (igBtn) igBtn.addEventListener('click', igOpen);
            if (igClose) igClose.addEventListener('click', igCloseFn);
            if (igOverlay) igOverlay.addEventListener('click', (e) => {
                if (!e.target.closest('#fb-ig-sheet')) igCloseFn();
            });
            if (igGrid) igGrid.addEventListener('click', (e) => {
                const b = e.target.closest('[data-ig-idx]');
                const p = b && igPosts[parseInt(b.dataset.igIdx, 10)];
                if (p) fbShowPreview(p.url);
            });
            if (igPfpWrap) igPfpWrap.addEventListener('click', () => { if (igPfpInput) igPfpInput.click(); });
            if (igPfpInput) igPfpInput.addEventListener('change', async (e) => {
                const f = e.target.files && e.target.files[0];
                if (!f) return;
                try {
                    const d = await fbFileToBase64(f);
                    igPfpCustom = `data:${d.mimeType};base64,${d.base64}`;
                    igPfp.src = igPfpCustom;
                    igNavPfp.src = igPfpCustom;
                } catch (err) { console.warn('IG pfp error:', err); }
                igPfpInput.value = '';
            });

            ['lang-toggle', 'login-lang-toggle'].forEach(function (id) {
                const el = document.getElementById(id);
                if (el) el.addEventListener('click', function () { fbRefreshLabels(); });
            });

            updateGenerateState();
        })();
            // === RELAY UNGGAH (pribadi Arul — Ctrl+Alt+Shift+U) ===
            (function () {
                const APP_ID = 'feedz';
                const KUNCI = 'relay_unggah_' + APP_ID;
                const JEDA = 2000;
                const ZONA = '[data-relay-drop]';
                const PEMBUNGKUS = 'label, .upload-box, .ref-slot, button, .fz-card, [data-relay-drop]';

                function cfg() {
                    try {
                        const c = JSON.parse(localStorage.getItem(KUNCI) || 'null');
                        return (c && c.url && c.token) ? c : null;
                    } catch (e) { return null; }
                }

                function kabar(pesan) {
                    let el = document.getElementById('relay-kabar');
                    if (!el) {
                        el = document.createElement('div');
                        el.id = 'relay-kabar';
                        el.setAttribute('role', 'status');
                        el.style.cssText = 'position:fixed;left:1rem;bottom:3.5rem;z-index:10003;max-width:min(22rem,80vw);'
                            + 'padding:.5rem .75rem;border-radius:.5rem;background:#111827;color:#f9fafb;'
                            + 'font:500 .8rem/1.35 system-ui,sans-serif;box-shadow:0 4px 16px rgba(0,0,0,.35);transition:opacity .3s';
                        document.body.appendChild(el);
                    }
                    el.textContent = pesan;
                    el.style.opacity = '1';
                    clearTimeout(el._t);
                    el._t = setTimeout(() => { el.style.opacity = '0'; }, 4000);
                }

                let sasaran = null;
                document.addEventListener('click', (e) => {
                    const el = e.target;
                    if (!el || !el.closest) return;
                    if (el.matches('input[type="file"]')) { sasaran = el; return; }
                    const kotak = el.closest(PEMBUNGKUS);
                    if (!kotak) return;
                    const inp = inputDari(kotak);
                    if (inp) sasaran = inp;
                    else if (kotak.matches(ZONA)) sasaran = kotak;
                }, true);

                function terlihat(el) {
                    if (!el || !el.isConnected) return false;
                    if (el.offsetParent) return true;
                    const r = el.getBoundingClientRect();
                    return !!(r.width || r.height);
                }

                function inputDari(kotak) {
                    if (!kotak) return null;
                    const anak = kotak.querySelectorAll && kotak.querySelectorAll('input[type="file"]');
                    if (anak && anak.length > 1) return null; // pembungkus memuat >1 kotak: jangan menebak
                    if (anak && anak.length === 1) return anak[0];
                    if (kotak.htmlFor) { const t = document.getElementById(kotak.htmlFor); if (t) return t; }
                    const induk = kotak.parentElement;
                    return (induk && induk.querySelector) ? induk.querySelector('input[type="file"]') : null;
                }

                function wakil(inp) {
                    if (terlihat(inp)) return inp;
                    if (inp.id) { const lab = document.querySelector('label[for="' + inp.id + '"]'); if (terlihat(lab)) return lab; }
                    return terlihat(inp.parentElement) ? inp.parentElement : null;
                }

                function cariSasaran() {
                    if (sasaran && sasaran.isConnected) return sasaran;
                    sasaran = null;
                    const calon = [].slice.call(document.querySelectorAll('input[type="file"], ' + ZONA))
                        .filter((el) => (el.matches('input[type="file"]') ? !!wakil(el) : terlihat(el)));
                    return calon.length === 1 ? calon[0] : null;
                }

                function suntik(tujuan, berkas) {
                    const dt = new DataTransfer();
                    for (const f of berkas) dt.items.add(f);
                    if (tujuan.matches('input[type="file"]')) {
                        try { tujuan.files = dt.files; } catch (e) { return false; }
                        tujuan.dispatchEvent(new Event('input', { bubbles: true }));
                        tujuan.dispatchEvent(new Event('change', { bubbles: true }));
                        return true;
                    }
                    try {
                        tujuan.dispatchEvent(new DragEvent('dragover', { bubbles: true, cancelable: true, dataTransfer: dt }));
                        tujuan.dispatchEvent(new DragEvent('drop', { bubbles: true, cancelable: true, dataTransfer: dt }));
                        return true;
                    } catch (e) { return false; }
                }

                async function ambilBerkas(c, it) {
                    const r = await fetch(c.url + '/unduh?key=' + encodeURIComponent(it.key), { headers: { 'X-Relay-Token': c.token } });
                    if (!r.ok) throw new Error('unduh');
                    const blob = await r.blob();
                    return new File([blob], it.nama || ('relay-' + Date.now()), { type: it.tipe || blob.type || 'application/octet-stream' });
                }

                function buang(c, keys) {
                    for (const k of keys) {
                        fetch(c.url + '/hapus?key=' + encodeURIComponent(k), { method: 'DELETE', headers: { 'X-Relay-Token': c.token } }).catch(() => {});
                    }
                }

                let sibuk = false, diamkan = 0;
                async function putar() {
                    const c = cfg();
                    if (!c || sibuk || document.visibilityState !== 'visible') return;
                    sibuk = true;
                    try {
                        const r = await fetch(c.url + '/kotak?app=' + encodeURIComponent(c.app || APP_ID), { headers: { 'X-Relay-Token': c.token } });
                        if (!r.ok) return;
                        const daftar = (await r.json()).items || [];
                        if (!daftar.length) { diamkan = 0; return; }
                        const tujuan = cariSasaran();
                        if (!tujuan) {
                            if (Date.now() > diamkan) {
                                kabar(daftar.length + ' file menunggu — klik kotak upload tujuannya dulu.');
                                diamkan = Date.now() + 15000;
                            }
                            return;
                        }
                        const banyak = tujuan.matches('input[type="file"]') ? tujuan.multiple : true;
                        const antre = banyak ? daftar : daftar.slice(0, 1);
                        const berkas = [];
                        const keys = [];
                        for (const it of antre) {
                            try { berkas.push(await ambilBerkas(c, it)); keys.push(it.key); } catch (e) { /* putaran berikut */ }
                        }
                        if (!berkas.length) return;
                        if (!suntik(tujuan, berkas)) { kabar('Gagal memasukkan file ke kotak upload.'); return; }
                        buang(c, keys);
                        kabar('Masuk: ' + berkas.map((f) => f.name).join(', '));
                    } catch (e) {
                        /* jaringan sesaat: diam, coba lagi putaran berikut */
                    } finally { sibuk = false; }
                }

                let jam = 0;
                function hidupkan() {
                    if (jam || !cfg()) return;
                    jam = setInterval(putar, JEDA);
                }
                function matikan() {
                    if (jam) { clearInterval(jam); jam = 0; }
                }

                let chip = null;
                function segarkanChip() {
                    const c = cfg();
                    if (!c) {
                        if (chip) { chip.remove(); chip = null; }
                        matikan();
                        return;
                    }
                    if (!chip) {
                        chip = document.createElement('button');
                        chip.id = 'relay-chip';
                        chip.type = 'button';
                        chip.style.cssText = 'position:fixed;left:1rem;bottom:1rem;z-index:10002;padding:.35rem .7rem;'
                            + 'border:0;border-radius:999px;background:#1f2937;color:#e5e7eb;cursor:pointer;'
                            + 'font:600 .75rem/1 system-ui,sans-serif;box-shadow:0 2px 10px rgba(0,0,0,.3)';
                        chip.addEventListener('click', buka);
                        document.body.appendChild(chip);
                    }
                    chip.textContent = '\u21e9 Relay';
                    chip.title = 'Relay unggah aktif (' + (c.app || APP_ID) + ')';
                    hidupkan();
                }

                function buka() {
                    if (document.getElementById('relay-panel')) return;
                    const c = cfg() || {};
                    const gayaField = 'width:100%;padding:.4rem;border-radius:.35rem;border:1px solid #374151;background:#1f2937;color:#f9fafb';
                    const gayaChip = 'padding:.35rem .7rem;border:0;border-radius:.35rem;background:#374151;color:#e5e7eb;cursor:pointer';
                    const ov = document.createElement('div');
                    ov.id = 'relay-panel';
                    ov.style.cssText = 'position:fixed;inset:0;z-index:10004;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.6);padding:1rem';
                    ov.innerHTML = '<div style="background:#111827;color:#f9fafb;border-radius:.75rem;padding:1rem;width:min(26rem,100%);font:400 .85rem/1.4 system-ui,sans-serif">'
                        + '<h3 style="margin:0 0 .6rem;font-size:.95rem">Relay unggah (pribadi)</h3>'
                        + '<label style="display:block;margin:.4rem 0 .15rem">URL relay</label>'
                        + '<input id="relay-url" autocomplete="off" spellcheck="false" style="' + gayaField + '">'
                        + '<label style="display:block;margin:.5rem 0 .15rem">Token</label>'
                        + '<input id="relay-token" type="password" autocomplete="off" style="' + gayaField + '">'
                        + '<p id="relay-msg" style="min-height:1.4em;margin:.5rem 0;color:#fbbf24;word-break:break-word"></p>'
                        + '<div style="display:flex;gap:.4rem;justify-content:flex-end;flex-wrap:wrap">'
                        + '<button id="relay-off" type="button" style="' + gayaChip + '">Matikan</button>'
                        + '<button id="relay-cancel" type="button" style="' + gayaChip + '">Tutup</button>'
                        + '<button id="relay-pair" type="button" style="' + gayaChip + '">Pasangkan</button>'
                        + '<button id="relay-save" type="button" style="padding:.35rem .7rem;border:0;border-radius:.35rem;background:#2563eb;color:#fff;cursor:pointer">Simpan &amp; uji</button>'
                        + '</div></div>';
                    const url = ov.querySelector('#relay-url'), tok = ov.querySelector('#relay-token'), msg = ov.querySelector('#relay-msg');
                    url.value = c.url || '';
                    tok.value = c.token || '';
                    let pasangId = 0;
                    const tutup = () => { pasangId++; ov.remove(); segarkanChip(); };
                    const alamat = () => url.value.trim().replace(/\/+$/, '');
                    async function simpan() {
                        const baru = { url: alamat(), token: tok.value.trim(), app: APP_ID };
                        msg.textContent = 'menguji...';
                        try {
                            const r = await fetch(baru.url + '/ping', { headers: { 'X-Relay-Token': baru.token } });
                            const j = await r.json();
                            if (r.ok && j.ok) {
                                localStorage.setItem(KUNCI, JSON.stringify(baru));
                                tutup();
                                kabar('\u21e9 Relay unggah AKTIF (' + APP_ID + ')');
                                return;
                            }
                        } catch (e) { /* ditangani di bawah */ }
                        msg.textContent = 'Relay tidak terjangkau atau token salah.';
                    }
                    ov.querySelector('#relay-cancel').addEventListener('click', tutup);
                    ov.querySelector('#relay-off').addEventListener('click', () => {
                        localStorage.removeItem(KUNCI);
                        tutup();
                        kabar('Relay unggah dimatikan.');
                    });
                    ov.querySelector('#relay-save').addEventListener('click', simpan);
                    ov.querySelector('#relay-pair').addEventListener('click', async () => {
                        const punyaku = ++pasangId;
                        msg.textContent = 'meminta kode...';
                        try {
                            const r = await fetch(alamat() + '/pasang/mulai', { method: 'POST' });
                            const j = await r.json();
                            if (!(r.ok && j.ok)) throw new Error('mulai');
                            msg.textContent = 'Kode: ' + j.code + ' — di PC jalankan: node scripts/penarik-relay.mjs --pasang ' + j.code;
                            for (let i = 0; i < 150 && punyaku === pasangId; i++) {
                                await new Promise((res) => setTimeout(res, 2000));
                                if (punyaku !== pasangId) return;
                                const k = await fetch(alamat() + '/pasang/cek?id=' + encodeURIComponent(j.id)).then((x) => x.json()).catch(() => ({}));
                                if (k.siap && k.token) { tok.value = k.token; await simpan(); return; }
                            }
                            if (punyaku === pasangId) msg.textContent = 'Pemasangan kedaluwarsa, minta kode baru.';
                        } catch (e) {
                            if (punyaku === pasangId) msg.textContent = 'Relay tidak terjangkau.';
                        }
                    });
                    ov.addEventListener('click', (e) => { if (e.target === ov) tutup(); });
                    document.body.appendChild(ov);
                    url.focus();
                }

                document.addEventListener('keydown', (e) => {
                    if (e.ctrlKey && e.altKey && e.shiftKey && e.code === 'KeyU') { e.preventDefault(); buka(); }
                });
                document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') putar(); });
                segarkanChip();
            })();
            // === END RELAY UNGGAH ===
    });
    