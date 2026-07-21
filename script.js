/* ================================================
   EQUILYZE v5 — Professional Trading Platform
   Complete Feature JavaScript
   ================================================ */

'use strict';

/* ─────────────────────────────────────────────
   RISK PROFILE TEST — 15 QUESTIONS (5 categories)
   ───────────────────────────────────────────── */
const riskQuestions = [
    // Category 1: Psikoloji (Q1-Q3)
    {
        id: 1,
        category: 'Psikoloji',
        question: 'Piyasalar aniden %20 düştüğünde ilk tepkiniz ne olur?',
        options: [
            { text: 'Panikler, tüm pozisyonlarımı kapatırım', score: 1 },
            { text: 'Tedirgin olur, durumu izlerim', score: 2 },
            { text: 'Sakin kalır, stratejime bağlı kalırım', score: 3 },
            { text: 'Heyecanlanır, alım fırsatı ararım', score: 4 }
        ]
    },
    {
        id: 2,
        category: 'Psikoloji',
        question: 'Büyük bir kayıp yaşadıktan sonra nasıl hissedersiniz?',
        options: [
            { text: 'Günlerce üzgün ve stresli olurum', score: 1 },
            { text: 'Bir süre kendimi kötü hissederim', score: 2 },
            { text: 'Hayal kırıklığı yaşar, analiz ederim', score: 3 },
            { text: 'Öğrenme fırsatı olarak değerlendiririm', score: 4 }
        ]
    },
    {
        id: 3,
        category: 'Psikoloji',
        question: 'Stop-loss seviyeniz tetiklendiğinde genellikle ne yaparsınız?',
        options: [
            { text: 'Stop\'u aşağı çekerim, toparlar diye beklerim', score: 1 },
            { text: 'Bazen stop\'u ertelirim', score: 2 },
            { text: 'Genellikle stop\'a uyarım', score: 3 },
            { text: 'Her zaman stop\'a uyarım, kuraldır', score: 4 }
        ]
    },
    // Category 2: Davranış (Q4-Q6)
    {
        id: 4,
        category: 'Davranış',
        question: 'Bir pozisyonunuz %50 değer kazandı. Ne yaparsınız?',
        options: [
            { text: 'Hemen tümünü satarım, kâr garantide', score: 1 },
            { text: 'Bir kısmını satarım, riski azaltırım', score: 2 },
            { text: 'Yeni seviyeye stop koyar, beklerim', score: 3 },
            { text: 'Trend devam ettiği sürece tutarım', score: 4 }
        ]
    },
    {
        id: 5,
        category: 'Davranış',
        question: 'Bir arkadaşınız "Bu hisse kesin 3 katına çıkar" dedi. Tepkiniz?',
        options: [
            { text: 'Söylediği hisseyi hemen alırım', score: 1 },
            { text: 'Biraz araştırır, sonra karar veririm', score: 2 },
            { text: 'Kendi analizimi yapar, uyuyorsa değerlendiririm', score: 3 },
            { text: 'Başkasının tavsiyesiyle işlem yapmam', score: 4 }
        ]
    },
    {
        id: 6,
        category: 'Davranış',
        question: 'Ekonomik kriz dönemlerinde yatırım stratejiniz nedir?',
        options: [
            { text: 'Tüm varlıkları nakite çeviririm', score: 1 },
            { text: 'Riski azaltırım, beklerim', score: 2 },
            { text: 'Portföyümü çeşitlendiririm', score: 3 },
            { text: 'Agresif alım yapar, fırsatları değerlendiririm', score: 4 }
        ]
    },
    // Category 3: Strateji (Q7-Q9)
    {
        id: 7,
        category: 'Strateji',
        question: 'Portföyünüzün kaçında yüksek riskli varlıklar (kripto, kaldıraçlı ürünler) yer almalı?',
        options: [
            { text: 'Hiç yer almamalı (%0)', score: 1 },
            { text: 'Küçük bir pay (%5-15)', score: 2 },
            { text: 'Önemli bir pay (%20-40)', score: 3 },
            { text: 'Büyük bir pay (%50+)', score: 4 }
        ]
    },
    {
        id: 8,
        category: 'Strateji',
        question: 'Kaldıraçlı işlemler hakkındaki görüşünüz nedir?',
        options: [
            { text: 'Kesinlikle kullanmam, çok tehlikeli', score: 1 },
            { text: 'Düşük kaldıraç ile nadir kullanabilirim', score: 2 },
            { text: 'Orta kaldıraçla stratejik kullanırım', score: 3 },
            { text: 'Yüksek kaldıraç benim için problem değil', score: 4 }
        ]
    },
    {
        id: 9,
        category: 'Strateji',
        question: 'Maksimum ne kadar portföy kaybına tahammül edebilirsiniz?',
        options: [
            { text: 'Hiç kayıp istemem (%0-5)', score: 1 },
            { text: 'Küçük kayıp tolere edebilirim (%5-15)', score: 2 },
            { text: 'Orta kayıp kabul ederim (%15-30)', score: 3 },
            { text: 'Yüksek kayıpla başa çıkabilirim (%30+)', score: 4 }
        ]
    },
    // Category 4: Deneyim (Q10-Q12)
    {
        id: 10,
        category: 'Deneyim',
        question: 'Kaç yıldır aktif olarak yatırım/trading yapıyorsunuz?',
        options: [
            { text: 'Henüz başlamadım / Yeni başladım', score: 1 },
            { text: '1-2 yıl', score: 2 },
            { text: '3-5 yıl', score: 3 },
            { text: '5 yıldan fazla', score: 4 }
        ]
    },
    {
        id: 11,
        category: 'Deneyim',
        question: 'Yatırım kararlarınızı nasıl alırsınız?',
        options: [
            { text: 'Haber ve sosyal medyaya bakarak', score: 1 },
            { text: 'Temel analiz yaparak', score: 2 },
            { text: 'Teknik analiz ve grafik okuyarak', score: 3 },
            { text: 'Sistematik strateji + risk yönetimiyle', score: 4 }
        ]
    },
    {
        id: 12,
        category: 'Deneyim',
        question: 'Trading journal (işlem günlüğü) tutma alışkanlığınız var mı?',
        options: [
            { text: 'Hayır, böyle bir alışkanlığım yok', score: 1 },
            { text: 'Ara sıra önemli işlemleri not alırım', score: 2 },
            { text: 'Düzenli tutmaya çalışırım', score: 3 },
            { text: 'Her işlemi ayrıntılı olarak kaydederim', score: 4 }
        ]
    },
    // Category 5: Hedef (Q13-Q15)
    {
        id: 13,
        category: 'Hedef',
        question: 'Yatırımınızın temel amacı nedir?',
        options: [
            { text: 'Sermayeyi enflasyondan korumak', score: 1 },
            { text: 'Düzenli pasif gelir elde etmek', score: 2 },
            { text: 'Uzun vadeli servet büyütmek', score: 3 },
            { text: 'Kısa vadede maksimum getiri sağlamak', score: 4 }
        ]
    },
    {
        id: 14,
        category: 'Hedef',
        question: 'Yatırım ufkunuz (paraya ihtiyaç duymadan tutma süreniz) ne kadar?',
        options: [
            { text: '1 yıldan az', score: 1 },
            { text: '1-3 yıl', score: 2 },
            { text: '3-7 yıl', score: 3 },
            { text: '7 yıldan fazla', score: 4 }
        ]
    },
    {
        id: 15,
        category: 'Hedef',
        question: 'Portföyünüzü ne sıklıkla aktif olarak takip edersiniz?',
        options: [
            { text: 'Ayda bir veya daha seyrek', score: 1 },
            { text: 'Haftada birkaç kez', score: 2 },
            { text: 'Her gün kontrol ederim', score: 3 },
            { text: 'Gün içinde sürekli takip ederim', score: 4 }
        ]
    }
];

const CATEGORY_RANGES = {
    'Psikoloji': [0, 2],
    'Davranış': [3, 5],
    'Strateji': [6, 8],
    'Deneyim': [9, 11],
    'Hedef': [12, 14]
};

// State
let currentQuestionIndex = 0;
let answers = [];
let sortKey = 'date';
let sortAsc = false;

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initParticles();
    initCounterAnimation();
    renderQuestion();
    initHeatmap();
    initCorrelationMatrix();
    loadJournal();
    setTodayDate();
});

function setTodayDate() {
    const dateInput = document.getElementById('tradeDate');
    if (dateInput) {
        dateInput.value = new Date().toISOString().split('T')[0];
    }
}

// ─────────────────────────────────────────────
// THEME TOGGLE
// ─────────────────────────────────────────────
function initThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const saved = localStorage.getItem('equilyze-theme');
    if (saved) html.setAttribute('data-theme', saved);

    toggle.addEventListener('click', () => {
        const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('equilyze-theme', next);
    });
}

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────
function initNavbar() {
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });
}

function initMobileMenu() {
    const btn = document.getElementById('mobileToggle');
    const links = document.getElementById('navLinks');
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        links.classList.toggle('open');
    });
    // Close when link is clicked
    links.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            btn.classList.remove('active');
            links.classList.remove('open');
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navH = document.getElementById('navbar').offsetHeight;
                window.scrollTo({ top: target.offsetTop - navH - 16, behavior: 'smooth' });
            }
        });
    });
}

function setActiveMbn(el) {
    document.querySelectorAll('.mbn-item').forEach(i => i.classList.remove('active'));
    el.classList.add('active');
}

// ─────────────────────────────────────────────
// PARTICLES
// ─────────────────────────────────────────────
function initParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;
    for (let i = 0; i < 18; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 15 + 's';
        p.style.animationDuration = (10 + Math.random() * 12) + 's';
        const size = 1 + Math.random() * 3;
        p.style.width = p.style.height = size + 'px';
        container.appendChild(p);
    }
}

// ─────────────────────────────────────────────
// COUNTER ANIMATION
// ─────────────────────────────────────────────
function initCounterAnimation() {
    const counters = document.querySelectorAll('[data-count]');
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                animateCounter(e.target, parseFloat(e.target.dataset.count));
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => io.observe(c));
}

function animateCounter(el, target) {
    const duration = 2000, start = performance.now();
    function update(t) {
        const p = Math.min((t - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 4);
        const v = target * ease;
        el.textContent = target < 10 ? v.toFixed(1) : Math.floor(v).toLocaleString('tr-TR');
        if (p < 1) requestAnimationFrame(update);
        else el.textContent = target < 10 ? target.toFixed(1) : target.toLocaleString('tr-TR');
    }
    requestAnimationFrame(update);
}

// ─────────────────────────────────────────────
// RISK PROFILE TEST
// ─────────────────────────────────────────────
function renderQuestion() {
    const q = riskQuestions[currentQuestionIndex];
    const container = document.getElementById('questionContainer');

    container.innerHTML = `
        <div class="question-card">
            <div class="question-category">${q.category} — Soru ${currentQuestionIndex + 1}</div>
            <h3>${q.question}</h3>
            <div class="answer-options">
                ${q.options.map((opt, i) => `
                    <label class="answer-option ${answers[currentQuestionIndex] === i ? 'selected' : ''}"
                           onclick="selectAnswer(${i})">
                        <input type="radio" name="answer" value="${i}" ${answers[currentQuestionIndex] === i ? 'checked' : ''}>
                        <span class="option-letter">${'ABCD'[i]}</span>
                        <span>${opt.text}</span>
                    </label>
                `).join('')}
            </div>
        </div>
    `;

    updateProgress();
    updateNavigation();
    updateCategoryHighlight(q.category);
    renderDots();
}

function updateCategoryHighlight(cat) {
    const catMap = { 'Psikoloji': 'cat-psikoloji', 'Davranış': 'cat-davranis', 'Strateji': 'cat-strateji', 'Deneyim': 'cat-deneyim', 'Hedef': 'cat-hedef' };
    Object.values(catMap).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('active');
    });
    const active = document.getElementById(catMap[cat]);
    if (active) active.classList.add('active');
}

function renderDots() {
    const wrap = document.getElementById('questionDots');
    if (!wrap) return;
    wrap.innerHTML = riskQuestions.map((_, i) => {
        let cls = 'q-dot';
        if (i === currentQuestionIndex) cls += ' current';
        else if (answers[i] !== undefined) cls += ' answered';
        return `<span class="${cls}"></span>`;
    }).join('');
}

function selectAnswer(index) {
    answers[currentQuestionIndex] = index;
    // Highlight selected
    document.querySelectorAll('.answer-option').forEach((el, i) => {
        el.classList.toggle('selected', i === index);
    });
    renderDots();
    // Auto-advance after 350ms
    setTimeout(() => {
        if (currentQuestionIndex < riskQuestions.length - 1) nextQuestion();
        else showResults();
    }, 350);
}

function updateProgress() {
    const pct = Math.round(((currentQuestionIndex + 1) / riskQuestions.length) * 100);
    const el = document.getElementById('currentQuestion');
    const pctEl = document.getElementById('progressPercent');
    const fill = document.getElementById('progressFill');
    if (el) el.textContent = currentQuestionIndex + 1;
    if (pctEl) pctEl.textContent = pct + '%';
    if (fill) fill.style.width = pct + '%';
}

function updateNavigation() {
    const prev = document.getElementById('prevBtn');
    const next = document.getElementById('nextBtn');
    if (prev) prev.disabled = currentQuestionIndex === 0;
    if (next) {
        const isLast = currentQuestionIndex === riskQuestions.length - 1;
        next.innerHTML = isLast
            ? 'Sonuçları Gör <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>'
            : 'Sonraki <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>';
    }
}

function nextQuestion() {
    if (answers[currentQuestionIndex] === undefined) {
        showToast('Lütfen bir seçenek seçin', 'info');
        return;
    }
    if (currentQuestionIndex < riskQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

function showResults() {
    let total = 0;
    answers.forEach((ai, qi) => { total += riskQuestions[qi].options[ai].score; });
    const score = Math.round((total / (riskQuestions.length * 4)) * 100);

    let profile, icon, subtitle, description, traits, recommendations, allocation, allocationColors;

    if (score <= 33) {
        profile = 'Muhafazakar Yatırımcı';
        icon = '🛡️';
        subtitle = 'Risk Toleransı: Düşük';
        description = 'Sermayenizi korumayı ön planda tutan, güvenlik odaklı bir yatırımcısınız. Düşük volatiliteli, öngörülebilir getiriler sizin için önceliklidir.';
        traits = ['Sermaye Koruyucu', 'Risk Kaçınmacı', 'Uzun Vadeli', 'Temkinli'];
        recommendations = [
            'Devlet tahvili ve hazine bonosu ağırlıklı portföy oluşturun',
            'BIST30 içinden temettü verimliliği yüksek hisseleri seçin',
            'Kripto varlıkları portföyünüzün %5\'inden fazla tutmayın',
            'Emtia (altın) ile portföyünüzü enflasyona karşı koruyun',
            'Risk Profili testini yılda bir tekrarlayarak profil değişimlerini izleyin'
        ];
        allocation = [
            { label: 'Tahvil/Bono', percent: 50, color: '#10b981' },
            { label: 'Hisse', percent: 30, color: '#06b6d4' },
            { label: 'Altın', percent: 10, color: '#f59e0b' },
            { label: 'Kripto', percent: 5, color: '#8b5cf6' },
            { label: 'Nakit', percent: 5, color: '#6b7280' }
        ];
    } else if (score <= 66) {
        profile = 'Dengeli Yatırımcı';
        icon = '⚖️';
        subtitle = 'Risk Toleransı: Orta';
        description = 'Risk ve getiri arasında sağlıklı bir denge kuruyorsunuz. Piyasa dalgalanmalarını tolere edebiliyor, orta vadeli büyümeyi hedefliyorsunuz.';
        traits = ['Denge Odaklı', 'Çeşitlendirici', 'Analitik', 'Orta Vadeli'];
        recommendations = [
            'Hisse, tahvil ve kripto arasında denge kuran portföy oluşturun',
            'Kripto varlıkları portföyünüzün en fazla %15\'ine kadar tutabilirsiniz',
            '3-6 ayda bir portföy rebalancing yapın',
            'Yabancı para cinsinden varlıklara döviz koruması için yer verin',
            'Makro shock engine ile portföyünüzün stres testlerini düzenli yapın'
        ];
        allocation = [
            { label: 'Hisse', percent: 40, color: '#06b6d4' },
            { label: 'Tahvil/Bono', percent: 25, color: '#10b981' },
            { label: 'Kripto', percent: 15, color: '#8b5cf6' },
            { label: 'Altın', percent: 10, color: '#f59e0b' },
            { label: 'Nakit', percent: 10, color: '#6b7280' }
        ];
    } else {
        profile = 'Agresif Yatırımcı';
        icon = '🚀';
        subtitle = 'Risk Toleransı: Yüksek';
        description = 'Yüksek getiri için yüksek riski göze alan, büyüme odaklı bir yatırımcısınız. Piyasa dalgalanmalarını fırsat olarak değerlendirebilirsiniz.';
        traits = ['Getiri Odaklı', 'Risk Toleranslı', 'Kısa-Orta Vadeli', 'Aktif Trader'];
        recommendations = [
            'Büyüme potansiyeli yüksek hisse ve kripto varlıklara odaklanın',
            'Kripto portföyünüzün %25\'ine kadar çıkabilir ancak çeşitlendirin',
            'Trading Journal ile her işlemi kaydedin, pattern analizi yapın',
            'Kaldıraçlı işlemlerde strict risk yönetimi uygulayın',
            'Black Swan testini düzenli uygulayarak olası krizlere hazırlıklı olun'
        ];
        allocation = [
            { label: 'Hisse', percent: 45, color: '#06b6d4' },
            { label: 'Kripto', percent: 25, color: '#8b5cf6' },
            { label: 'Tahvil/Bono', percent: 15, color: '#10b981' },
            { label: 'Nakit', percent: 15, color: '#6b7280' }
        ];
    }

    // Hide test, show result
    document.getElementById('riskTestContainer').style.display = 'none';
    const resultCont = document.getElementById('riskResultContainer');
    resultCont.style.display = 'block';

    document.getElementById('resultIcon').textContent = icon;
    document.getElementById('resultTitle').textContent = profile;
    document.getElementById('resultSubtitle').textContent = subtitle;
    document.getElementById('resultDescription').innerHTML = `<p>${description}</p>`;

    // Traits
    document.getElementById('resultTraits').innerHTML = traits.map(t => `<span class="trait-pill">${t}</span>`).join('');

    // Score ring
    const circumference = 327;
    setTimeout(() => {
        document.getElementById('riskScoreValue').textContent = score;
        const fill = document.getElementById('scoreRingFill');
        const offset = circumference - (score / 100) * circumference;
        fill.style.strokeDashoffset = offset;
        // Color by profile
        fill.style.stroke = score <= 33 ? '#10b981' : score <= 66 ? '#06b6d4' : '#f59e0b';
    }, 200);

    // Recommendations
    document.getElementById('recommendationsList').innerHTML =
        recommendations.map(r => `<li>${r}</li>`).join('');

    // Allocation chart
    document.getElementById('allocationChart').innerHTML = allocation.map(a => `
        <div class="alloc-item">
            <div class="alloc-bar-wrap">
                <div class="alloc-bar" style="width:0%;background:${a.color}" data-width="${a.percent}"></div>
            </div>
            <span class="alloc-pct" style="color:${a.color}">%${a.percent}</span>
            <span class="alloc-label">${a.label}</span>
        </div>
    `).join('');
    setTimeout(() => {
        document.querySelectorAll('.alloc-bar').forEach(b => {
            b.style.width = b.dataset.width + '%';
        });
    }, 400);

    // Save to localStorage
    localStorage.setItem('equilyze-risk-profile', JSON.stringify({ score, profile, date: new Date().toISOString() }));
    showToast('Risk profiliniz kaydedildi!', 'success');
}

function restartTest() {
    currentQuestionIndex = 0;
    answers = [];
    document.getElementById('riskResultContainer').style.display = 'none';
    document.getElementById('riskTestContainer').style.display = 'block';
    renderQuestion();
}

function goToDashboard() {
    document.querySelector('#dashboard').scrollIntoView({ behavior: 'smooth' });
}

// ─────────────────────────────────────────────
// API CONNECTIONS
// ─────────────────────────────────────────────
function connectAPI(exchange) {
    const card = document.querySelector(`[data-exchange="${exchange}"]`);
    const status = document.getElementById('status-' + exchange);
    const btn = card.querySelector('button');

    btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> Bağlanıyor...';
    btn.disabled = true;
    if (status) { status.textContent = 'Bağlanıyor...'; status.className = 'api-status connecting'; }

    setTimeout(() => {
        if (status) { status.textContent = '✓ Bağlı'; status.className = 'api-status connected'; }
        btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Bağlı';
        btn.style.cssText = 'background:rgba(16,185,129,0.12);color:#10b981;border-color:rgba(16,185,129,0.3)';
        btn.disabled = true;
        showToast(`${exchange.charAt(0).toUpperCase() + exchange.slice(1)} bağlantısı kuruldu!`, 'success');
    }, 1800);
}

// ─────────────────────────────────────────────
// PORTFOLIO CHART
// ─────────────────────────────────────────────
let chartData = {
    '1H': [842000, 843500, 841000, 844200, 845100, 843800, 847250],
    '1D': [820000, 825000, 818000, 835000, 842000, 838000, 847250],
    '1W': [780000, 795000, 801000, 812000, 825000, 835000, 847250],
    '1M': [650000, 690000, 720000, 740000, 780000, 810000, 847250]
};
let currentTf = '1H';

function setTimeframe(btn, tf) {
    document.querySelectorAll('.tf-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentTf = tf;
    drawChart(chartData[tf]);
}

function drawChart(data) {
    const canvas = document.getElementById('portfolioChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = 200 * dpr;
    canvas.style.height = '200px';
    ctx.scale(dpr, dpr);

    const W = rect.width, H = 200;
    ctx.clearRect(0, 0, W, H);

    const min = Math.min(...data), max = Math.max(...data);
    const pad = { t: 20, b: 30, l: 10, r: 10 };
    const chartW = W - pad.l - pad.r;
    const chartH = H - pad.t - pad.b;
    const step = chartW / (data.length - 1);
    const pts = data.map((v, i) => ({
        x: pad.l + i * step,
        y: pad.t + chartH - ((v - min) / (max - min || 1)) * chartH
    }));

    // Grid lines
    ctx.save();
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= 4; i++) {
        const y = pad.t + (chartH / 4) * i;
        ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(W - pad.r, y); ctx.stroke();
    }
    ctx.restore();

    // Area fill
    ctx.save();
    const areaGrad = ctx.createLinearGradient(0, pad.t, 0, H);
    areaGrad.addColorStop(0, 'rgba(16,185,129,0.2)');
    areaGrad.addColorStop(1, 'rgba(16,185,129,0)');
    ctx.beginPath();
    pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
    ctx.lineTo(pts[pts.length - 1].x, H - pad.b);
    ctx.lineTo(pts[0].x, H - pad.b);
    ctx.closePath();
    ctx.fillStyle = areaGrad;
    ctx.fill();
    ctx.restore();

    // Line
    ctx.save();
    const lineGrad = ctx.createLinearGradient(0, 0, W, 0);
    lineGrad.addColorStop(0, '#10b981');
    lineGrad.addColorStop(1, '#06b6d4');
    ctx.strokeStyle = lineGrad;
    ctx.lineWidth = 2.5;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.beginPath();
    pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
    ctx.stroke();
    ctx.restore();

    // Dots
    pts.forEach(p => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#10b981';
        ctx.fill();
        ctx.strokeStyle = '#0a0f0d';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();
    });

    // Y axis labels (min/max)
    ctx.save();
    ctx.fillStyle = 'rgba(160,176,160,0.7)';
    ctx.font = '11px Inter, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('₺' + (max / 1000).toFixed(0) + 'K', W - pad.r, pad.t - 4);
    ctx.fillText('₺' + (min / 1000).toFixed(0) + 'K', W - pad.r, H - pad.b + 14);
    ctx.restore();
}

// Draw chart on init
const dashObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            setTimeout(() => drawChart(chartData[currentTf]), 200);
            dashObs.unobserve(e.target);
        }
    });
}, { threshold: 0.2 });
const dashEl = document.getElementById('dashboard');
if (dashEl) dashObs.observe(dashEl);
window.addEventListener('resize', () => { if (document.getElementById('portfolioChart')) drawChart(chartData[currentTf]); });

// ─────────────────────────────────────────────
// HEATMAP
// ─────────────────────────────────────────────
function initHeatmap() {
    const container = document.getElementById('heatmapCalendar');
    if (!container) return;
    const days = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
    const levels = ['profit-high', 'profit-med', 'profit-low', 'neutral', 'neutral', 'loss-low', 'loss-med', 'loss-high'];
    let html = days.map(d => `<div class="heatmap-day header">${d}</div>`).join('');
    for (let w = 0; w < 5; w++) {
        for (let d = 0; d < 7; d++) {
            const date = w * 7 + d + 1;
            if (date > 31) { html += `<div class="heatmap-day"></div>`; continue; }
            const lvl = levels[Math.floor(Math.random() * levels.length)];
            const pnl = lvl.includes('profit') ? '+₺' + (Math.random() * 5000 + 500 | 0).toLocaleString('tr-TR') :
                        lvl.includes('loss') ? '-₺' + (Math.random() * 3000 + 200 | 0).toLocaleString('tr-TR') : '±₺0';
            html += `<div class="heatmap-day ${lvl}" title="Gün ${date}: ${pnl}">${date}</div>`;
        }
    }
    container.innerHTML = html;
}

// ─────────────────────────────────────────────
// CORRELATION MATRIX — 6 assets
// ─────────────────────────────────────────────
function initCorrelationMatrix() {
    const container = document.getElementById('correlationMatrix');
    if (!container) return;
    const assets = ['BTC', 'ETH', 'SPX', 'AAPL', 'THYAO', 'GARAN'];
    const matrix = [
        [1.00, 0.85, 0.32, 0.28, 0.12, 0.08],
        [0.85, 1.00, 0.29, 0.25, 0.15, 0.10],
        [0.32, 0.29, 1.00, 0.82, 0.18, 0.14],
        [0.28, 0.25, 0.82, 1.00, 0.10, 0.06],
        [0.12, 0.15, 0.18, 0.10, 1.00, 0.72],
        [0.08, 0.10, 0.14, 0.06, 0.72, 1.00]
    ];

    // Set grid columns
    container.style.gridTemplateColumns = `60px repeat(${assets.length}, 1fr)`;

    let html = '<div class="correlation-cell header"></div>';
    assets.forEach(a => html += `<div class="correlation-cell header">${a}</div>`);

    assets.forEach((a, i) => {
        html += `<div class="correlation-cell header">${a}</div>`;
        assets.forEach((_, j) => {
            const v = matrix[i][j];
            let cls = 'neutral';
            if (i === j) cls = 'pos-high';
            else if (v >= 0.7) cls = 'pos-high';
            else if (v >= 0.4) cls = 'pos-med';
            else if (v >= 0.15) cls = 'pos-low';
            else if (v <= -0.7) cls = 'neg-high';
            else if (v <= -0.4) cls = 'neg-med';
            else if (v <= -0.15) cls = 'neg-low';
            html += `<div class="correlation-cell ${cls}" title="${assets[i]} / ${assets[j]}: ${v.toFixed(2)}">${v.toFixed(2)}</div>`;
        });
    });
    container.innerHTML = html;
}

// ─────────────────────────────────────────────
// MACRO SHOCK ENGINE
// ─────────────────────────────────────────────
const shockData = {
    fed: {
        name: 'FED Faiz Kararı (+50bp)',
        impact: '-₺42,150', percent: '-5.0%', volatility: '+45%', warning: '🌩️ Fırtına'
    },
    inflation: {
        name: 'Enflasyon Şoku (Beklenti Üstü)',
        impact: '-₺38,720', percent: '-4.6%', volatility: '+38%', warning: '⚡ Dikkat'
    },
    oil: {
        name: 'Petrol Fiyatı (+20%)',
        impact: '-₺25,410', percent: '-3.0%', volatility: '+28%', warning: '🌧️ Orta Risk'
    },
    currency: {
        name: 'Dolar/TL (+15%)',
        impact: '+₺31,250', percent: '+3.7%', volatility: '+32%', warning: '⚡ Dikkat'
    }
};

function runShockScenario(scenario, cardEl) {
    document.querySelectorAll('.scenario-card').forEach(c => c.classList.remove('active'));
    if (cardEl) cardEl.classList.add('active');

    const data = shockData[scenario];
    const result = document.getElementById('shockResult');
    const metrics = document.getElementById('impactMetrics');
    result.style.display = 'block';
    metrics.style.opacity = '0';

    document.getElementById('shockScenarioName').textContent = data.name;
    document.getElementById('shockLoading').style.display = 'flex';

    setTimeout(() => {
        document.getElementById('shockLoading').style.display = 'none';
        document.getElementById('shockImpact').textContent = data.impact;
        document.getElementById('shockImpact').className = 'value ' + (data.impact.startsWith('-') ? 'negative' : 'positive');
        document.getElementById('shockPercent').textContent = data.percent;
        document.getElementById('shockPercent').className = 'value ' + (data.percent.startsWith('-') ? 'negative' : 'positive');
        document.getElementById('volatilityIncrease').textContent = data.volatility;
        document.getElementById('shockWarning').textContent = data.warning;
        metrics.style.opacity = '1';
    }, 900);
}

// ─────────────────────────────────────────────
// BLACK SWAN
// ─────────────────────────────────────────────
const swanData = {
    pandemic: {
        title: 'Pandemi Senaryosu — COVID-19 Benzeri',
        drop: 0.35, survival: 72, recovery: '14-18 ay'
    },
    crash: {
        title: '2008 Finansal Kriz Senaryosu',
        drop: 0.45, survival: 58, recovery: '24-36 ay'
    },
    war: {
        title: 'Jeopolitik Kriz Senaryosu',
        drop: 0.25, survival: 65, recovery: '18-24 ay'
    }
};

function runBlackSwan(scenario, cardEl) {
    document.querySelectorAll('.swan-card').forEach(c => c.classList.remove('active'));
    if (cardEl) cardEl.classList.add('active');

    const d = swanData[scenario];
    const portfolioValue = 847250;
    const loss = portfolioValue * d.drop;
    const remaining = portfolioValue - loss;

    const result = document.getElementById('swanResult');
    result.style.display = 'block';
    document.getElementById('swanScenarioTitle').textContent = d.title;
    document.getElementById('swanLoss').textContent = '-₺' + loss.toLocaleString('tr-TR', { maximumFractionDigits: 0 });
    document.getElementById('swanRemaining').textContent = '₺' + remaining.toLocaleString('tr-TR', { maximumFractionDigits: 0 });
    document.getElementById('recoveryTime').textContent = d.recovery;

    // Animate survival rate
    const fill = document.getElementById('survivalRate');
    const val = document.getElementById('survivalValue');
    fill.style.width = '0%';
    val.textContent = '0%';
    setTimeout(() => {
        fill.style.width = d.survival + '%';
        let cur = 0;
        const iv = setInterval(() => {
            cur = Math.min(cur + 2, d.survival);
            val.textContent = cur + '%';
            if (cur >= d.survival) clearInterval(iv);
        }, 25);
    }, 200);
}

// ─────────────────────────────────────────────
// TRADING JOURNAL
// ─────────────────────────────────────────────
let trades = [];
let filteredTrades = [];
let editingId = null;

function loadJournal() {
    const saved = localStorage.getItem('equilyze-journal');
    if (saved) {
        try { trades = JSON.parse(saved); } catch { trades = []; }
    }
    updateJournalStats();
    renderJournalTable();
}

function saveTrade() {
    const sym = document.getElementById('tradeSym').value.trim().toUpperCase();
    const date = document.getElementById('tradeDate').value;
    const type = document.getElementById('tradeType').value;
    const size = parseFloat(document.getElementById('tradeSize').value);
    const entry = parseFloat(document.getElementById('tradeEntry').value);
    const exit = parseFloat(document.getElementById('tradeExit').value) || null;
    const stop = parseFloat(document.getElementById('tradeStop').value) || null;
    const tp = parseFloat(document.getElementById('tradeTp').value) || null;
    const note = document.getElementById('tradeNote').value.trim();
    const selectedTags = [...document.querySelectorAll('.tag-check input:checked')].map(i => i.value);

    if (!sym || !date || isNaN(size) || isNaN(entry)) {
        showToast('Lütfen zorunlu alanları doldurun', 'error');
        return;
    }

    // Calculate P&L
    let pnl = null, rr = null;
    if (exit !== null) {
        pnl = type === 'buy' ? (exit - entry) * size : (entry - exit) * size;
    }
    if (stop !== null && entry !== null) {
        const risk = Math.abs(entry - stop) * size;
        if (tp !== null) {
            const reward = Math.abs(tp - entry) * size;
            rr = risk > 0 ? reward / risk : null;
        }
    }

    if (editingId !== null) {
        const idx = trades.findIndex(t => t.id === editingId);
        if (idx !== -1) {
            trades[idx] = { ...trades[idx], sym, date, type, size, entry, exit, stop, tp, pnl, rr, note, tags: selectedTags };
        }
        editingId = null;
        showToast('İşlem güncellendi', 'success');
    } else {
        trades.unshift({ id: Date.now(), sym, date, type, size, entry, exit, stop, tp, pnl, rr, note, tags: selectedTags });
        showToast('İşlem kaydedildi', 'success');
    }

    localStorage.setItem('equilyze-journal', JSON.stringify(trades));
    closeTradeModal();
    updateJournalStats();
    filterJournal();
}

function deleteTrade(id) {
    if (!confirm('Bu işlemi silmek istediğinizden emin misiniz?')) return;
    trades = trades.filter(t => t.id !== id);
    localStorage.setItem('equilyze-journal', JSON.stringify(trades));
    updateJournalStats();
    filterJournal();
    showToast('İşlem silindi', 'info');
}

function editTrade(id) {
    const t = trades.find(tr => tr.id === id);
    if (!t) return;
    editingId = id;
    document.getElementById('modalTitle').textContent = 'İşlemi Düzenle';
    document.getElementById('tradeSym').value = t.sym;
    document.getElementById('tradeDate').value = t.date;
    document.getElementById('tradeType').value = t.type;
    document.getElementById('tradeSize').value = t.size;
    document.getElementById('tradeEntry').value = t.entry;
    document.getElementById('tradeExit').value = t.exit || '';
    document.getElementById('tradeStop').value = t.stop || '';
    document.getElementById('tradeTp').value = t.tp || '';
    document.getElementById('tradeNote').value = t.note || '';
    document.querySelectorAll('.tag-check input').forEach(inp => {
        inp.checked = t.tags && t.tags.includes(inp.value);
    });
    openTradeModal();
}

function updateJournalStats() {
    const closedTrades = trades.filter(t => t.pnl !== null);
    const wins = closedTrades.filter(t => t.pnl > 0);
    const losses = closedTrades.filter(t => t.pnl < 0);
    const winRate = closedTrades.length > 0 ? (wins.length / closedTrades.length * 100) : 0;
    const totalPnl = closedTrades.reduce((s, t) => s + t.pnl, 0);
    const grossWin = wins.reduce((s, t) => s + t.pnl, 0);
    const grossLoss = Math.abs(losses.reduce((s, t) => s + t.pnl, 0));
    const pf = grossLoss > 0 ? grossWin / grossLoss : (grossWin > 0 ? Infinity : 0);
    const rrs = trades.filter(t => t.rr !== null).map(t => t.rr);
    const avgRR = rrs.length > 0 ? rrs.reduce((a, b) => a + b, 0) / rrs.length : 0;
    const bestTrade = closedTrades.sort((a, b) => b.pnl - a.pnl)[0];
    const worstTrade = closedTrades.sort((a, b) => a.pnl - b.pnl)[0];

    // Restore sort
    trades.sort((a, b) => new Date(b.date) - new Date(a.date));

    const fmt = (n) => '₺' + Math.abs(n).toLocaleString('tr-TR', { maximumFractionDigits: 0 });

    document.getElementById('stat-winrate').textContent = winRate.toFixed(1) + '%';
    document.getElementById('stat-winrate').className = 'jsc-value' + (winRate >= 50 ? ' positive' : winRate > 0 ? '' : '');
    document.getElementById('bar-winrate').style.width = winRate + '%';

    document.getElementById('stat-pnl').textContent = (totalPnl >= 0 ? '+' : '-') + fmt(totalPnl);
    document.getElementById('stat-pnl').className = 'jsc-value' + (totalPnl > 0 ? ' positive' : totalPnl < 0 ? ' negative' : '');
    document.getElementById('stat-pnl-sub').textContent = closedTrades.length + ' kapalı işlem';

    document.getElementById('stat-pf').textContent = isFinite(pf) ? pf.toFixed(2) : '∞';
    document.getElementById('stat-pf').className = 'jsc-value' + (pf >= 1.5 ? ' positive' : pf < 1 && pf > 0 ? ' negative' : '');

    document.getElementById('stat-rr').textContent = avgRR.toFixed(2);
    document.getElementById('stat-rr').className = 'jsc-value' + (avgRR >= 2 ? ' positive' : avgRR > 0 ? '' : '');

    if (bestTrade) {
        document.getElementById('stat-best').textContent = '+' + fmt(bestTrade.pnl);
        document.getElementById('stat-best-sym').textContent = bestTrade.sym;
    }
    if (worstTrade) {
        document.getElementById('stat-worst').textContent = '-' + fmt(Math.abs(worstTrade.pnl));
        document.getElementById('stat-worst-sym').textContent = worstTrade.sym;
    }
}

function filterJournal() {
    const search = (document.getElementById('journalSearch').value || '').toLowerCase();
    const typeF = document.getElementById('journalTypeFilter').value;
    const resultF = document.getElementById('journalResultFilter').value;

    filteredTrades = trades.filter(t => {
        if (search && !t.sym.toLowerCase().includes(search)) return false;
        if (typeF && t.type !== typeF) return false;
        if (resultF === 'win' && !(t.pnl > 0)) return false;
        if (resultF === 'loss' && !(t.pnl < 0)) return false;
        return true;
    });

    renderJournalTable();
}

function sortJournal(key) {
    if (sortKey === key) sortAsc = !sortAsc;
    else { sortKey = key; sortAsc = false; }

    trades.sort((a, b) => {
        let av = a[key], bv = b[key];
        if (key === 'date') { av = new Date(av); bv = new Date(bv); }
        if (typeof av === 'string') av = av.toLowerCase(), bv = (bv || '').toLowerCase();
        if (av === null) return 1; if (bv === null) return -1;
        const r = av < bv ? -1 : av > bv ? 1 : 0;
        return sortAsc ? r : -r;
    });
    filterJournal();
}

function renderJournalTable() {
    const tbody = document.getElementById('journalTableBody');
    const empty = document.getElementById('journalEmptyRow');
    const display = filteredTrades.length > 0 ? filteredTrades : (trades.length > 0 ? [] : null);

    if (!display || display.length === 0) {
        tbody.innerHTML = '';
        if (empty) { empty.style.display = ''; tbody.appendChild(empty); }
        return;
    }
    if (empty && empty.parentElement) empty.remove();

    const fmt = n => n !== null && n !== undefined ? '₺' + Math.abs(n).toLocaleString('tr-TR', { maximumFractionDigits: 0 }) : '—';
    const fmtN = n => n !== null && n !== undefined ? n.toLocaleString('tr-TR', { maximumFractionDigits: 2 }) : '—';

    tbody.innerHTML = display.map(t => `
        <tr>
            <td>${new Date(t.date).toLocaleDateString('tr-TR')}</td>
            <td class="td-symbol">${t.sym}</td>
            <td><span class="td-dir ${t.type}">${t.type === 'buy' ? '▲ Alım' : '▼ Satım'}</span></td>
            <td style="font-family:var(--font-mono)">${fmtN(t.entry)}</td>
            <td style="font-family:var(--font-mono)">${t.exit ? fmtN(t.exit) : '—'}</td>
            <td style="font-family:var(--font-mono)">${fmtN(t.size)}</td>
            <td class="${t.pnl !== null ? (t.pnl >= 0 ? 'positive' : 'negative') : ''}">
                ${t.pnl !== null ? (t.pnl >= 0 ? '+' : '-') + fmt(t.pnl) : '—'}
            </td>
            <td style="font-family:var(--font-mono)">${t.rr ? t.rr.toFixed(2) : '—'}</td>
            <td>${(t.tags || []).map(tag => `<span class="td-tag">${tag}</span>`).join(' ')}</td>
            <td class="td-note" title="${t.note || ''}">${t.note || '—'}</td>
            <td>
                <div class="td-actions">
                    <button class="td-btn" onclick="editTrade(${t.id})" title="Düzenle">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                        </svg>
                    </button>
                    <button class="td-btn delete" onclick="deleteTrade(${t.id})" title="Sil">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                        </svg>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function openTradeModal() {
    if (!editingId) {
        document.getElementById('modalTitle').textContent = 'İşlem Ekle';
        document.getElementById('tradeSym').value = '';
        document.getElementById('tradeSize').value = '';
        document.getElementById('tradeEntry').value = '';
        document.getElementById('tradeExit').value = '';
        document.getElementById('tradeStop').value = '';
        document.getElementById('tradeTp').value = '';
        document.getElementById('tradeNote').value = '';
        document.querySelectorAll('.tag-check input').forEach(i => i.checked = false);
        setTodayDate();
    }
    document.getElementById('tradeModalOverlay').classList.add('open');
    document.getElementById('tradeSym').focus();
}

function closeTradeModal(event) {
    if (event && event.target !== document.getElementById('tradeModalOverlay')) return;
    document.getElementById('tradeModalOverlay').classList.remove('open');
    editingId = null;
    document.getElementById('modalTitle').textContent = 'İşlem Ekle';
}

function exportCSV() {
    if (trades.length === 0) { showToast('Dışa aktarılacak işlem yok', 'info'); return; }
    const header = ['Tarih', 'Sembol', 'Yön', 'Giriş', 'Çıkış', 'Miktar', 'KZ', 'RR', 'Etiket', 'Not'];
    const rows = trades.map(t => [
        t.date, t.sym, t.type === 'buy' ? 'Alım' : 'Satım',
        t.entry, t.exit || '', t.size, t.pnl !== null ? t.pnl.toFixed(2) : '',
        t.rr ? t.rr.toFixed(2) : '', (t.tags || []).join('; '), t.note || ''
    ]);
    const csv = [header, ...rows].map(r => r.map(c => `"${c}"`).join(',')).join('\n');
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'equilyze-journal-' + new Date().toISOString().split('T')[0] + '.csv';
    a.click();
    showToast('CSV dışa aktarıldı!', 'success');
}

// ─────────────────────────────────────────────
// TOAST NOTIFICATIONS
// ─────────────────────────────────────────────
function showToast(msg, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icons = { success: '✓', error: '✕', info: 'ℹ' };
    toast.innerHTML = `<span style="font-size:1rem">${icons[type]}</span><span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'toastOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ─────────────────────────────────────────────
// KEYBOARD SHORTCUTS
// ─────────────────────────────────────────────
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeTradeModal();
    if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
        e.preventDefault();
        openTradeModal();
    }
});

/* ═══════════════════════════════════════════════════════
   MONTE CARLO SIMULATION ENGINE
   Geometric Brownian Motion + VaR + CVaR + Portfolio Paths
   ═══════════════════════════════════════════════════════ */

class MonteCarloEngine {
    constructor(portfolioValue, positions) {
        this.portfolioValue = portfolioValue;
        this.positions = positions;
    }

    // Box-Muller: uniform → standard normal
    boxMuller() {
        let u = 0, v = 0;
        while (u === 0) u = Math.random();
        while (v === 0) v = Math.random();
        return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
    }

    // Cholesky decomposition for correlation matrix
    cholesky(M) {
        const n = M.length;
        const L = Array.from({ length: n }, () => new Array(n).fill(0));
        for (let i = 0; i < n; i++) {
            for (let j = 0; j <= i; j++) {
                let s = 0;
                for (let k = 0; k < j; k++) s += L[i][k] * L[j][k];
                L[i][j] = (i === j) ? Math.sqrt(Math.max(0, M[i][i] - s))
                                     : (M[i][j] - s) / (L[j][j] || 1e-10);
            }
        }
        return L;
    }

    // Pearson correlation between two arrays
    pearson(x, y) {
        const n = x.length, mx = x.reduce((a, b) => a + b) / n, my = y.reduce((a, b) => a + b) / n;
        let num = 0, dx = 0, dy = 0;
        for (let i = 0; i < n; i++) {
            num += (x[i] - mx) * (y[i] - my);
            dx += (x[i] - mx) ** 2;
            dy += (y[i] - my) ** 2;
        }
        return num / Math.sqrt(dx * dy || 1);
    }

    // Main GBM simulation
    run({ simulations = 10000, days = 252, confidenceLevels = [0.95, 0.99], scenarioMode = 'normal' } = {}) {
        // Asset parameters (realistic estimates per asset class)
        const assetParams = this._buildAssetParams(scenarioMode);
        const assets = this.positions.map(p => ({
            ...p,
            ...assetParams[p.type] || assetParams.default,
            weight: p.weight
        }));

        // Build correlation matrix
        const n = assets.length;
        const corrMatrix = Array.from({ length: n }, (_, i) =>
            Array.from({ length: n }, (_, j) => i === j ? 1 : this._getCorrelation(assets[i].type, assets[j].type, scenarioMode))
        );
        const L = this.cholesky(corrMatrix);

        // Run simulations
        const finalValues = new Float64Array(simulations);
        const samplePaths = [];
        const pathCount = Math.min(50, simulations);

        for (let s = 0; s < simulations; s++) {
            let pv = this.portfolioValue;
            const path = s < pathCount ? [pv] : null;

            for (let d = 0; d < days; d++) {
                // Generate correlated normals
                const z = new Array(n).fill(0).map(() => this.boxMuller());
                const corZ = Array(n).fill(0);
                for (let i = 0; i < n; i++)
                    for (let j = 0; j <= i; j++)
                        corZ[i] += L[i][j] * z[j];

                // Weighted portfolio return (GBM)
                let dailyRet = 0;
                assets.forEach((a, i) => {
                    const drift = a.mu - 0.5 * a.sigma ** 2;
                    dailyRet += a.weight * Math.exp(drift + a.sigma * corZ[i]);
                });
                pv *= dailyRet;
                if (path) path.push(pv);
            }

            finalValues[s] = pv;
            if (path) samplePaths.push(path);
        }

        const sorted = Array.from(finalValues).sort((a, b) => a - b);
        return {
            paths: samplePaths,
            sorted,
            simulations,
            days,
            stats: this._stats(sorted),
            var: this._var(sorted, confidenceLevels),
            cvar: this._cvar(sorted, confidenceLevels),
            distribution: this._distribution(sorted, 40),
            probabilities: this._probabilities(sorted),
        };
    }

    _buildAssetParams(mode) {
        const multiplier = { normal: 1, stressed: 2.2, extreme: 4.5 }[mode] || 1;
        const driftMod   = { normal: 1, stressed: 0.3, extreme: -0.5 }[mode] || 1;
        return {
            crypto: { mu: (0.0008 * driftMod) / 252, sigma: (0.045 * multiplier) / Math.sqrt(252) },
            stock:  { mu: (0.0004 * driftMod) / 252, sigma: (0.018 * multiplier) / Math.sqrt(252) },
            bond:   { mu: (0.0002 * driftMod) / 252, sigma: (0.006 * multiplier) / Math.sqrt(252) },
            forex:  { mu: (0.0001 * driftMod) / 252, sigma: (0.008 * multiplier) / Math.sqrt(252) },
            default:{ mu: (0.0003 * driftMod) / 252, sigma: (0.020 * multiplier) / Math.sqrt(252) },
        };
    }

    _getCorrelation(typeA, typeB, mode) {
        if (typeA === typeB) return 1;
        const base = {
            'crypto-crypto': 0.85, 'crypto-stock': 0.32, 'crypto-bond': -0.15,
            'stock-stock': 0.70, 'stock-bond': -0.25, 'bond-bond': 0.80,
            'default': 0.30
        };
        const key = [typeA, typeB].sort().join('-');
        const corr = base[key] ?? base.default;
        const stressFactor = mode === 'extreme' ? 0.3 : mode === 'stressed' ? 0.15 : 0;
        return Math.min(0.99, corr + stressFactor);
    }

    _stats(sorted) {
        const n = sorted.length;
        const mean = sorted.reduce((a, b) => a + b, 0) / n;
        const variance = sorted.reduce((a, v) => a + (v - mean) ** 2, 0) / n;
        return {
            mean,
            median: sorted[Math.floor(n / 2)],
            min: sorted[0],
            max: sorted[n - 1],
            stdDev: Math.sqrt(variance),
        };
    }

    _var(sorted, levels) {
        return levels.reduce((acc, cl) => {
            const idx = Math.floor(sorted.length * (1 - cl));
            const pv = sorted[Math.max(0, idx)];
            acc[cl] = { portfolioValue: pv, absolute: this.portfolioValue - pv, pct: (this.portfolioValue - pv) / this.portfolioValue * 100 };
            return acc;
        }, {});
    }

    _cvar(sorted, levels) {
        return levels.reduce((acc, cl) => {
            const idx = Math.floor(sorted.length * (1 - cl));
            const tail = sorted.slice(0, idx + 1);
            const avg = tail.reduce((a, b) => a + b, 0) / tail.length;
            acc[cl] = { portfolioValue: avg, absolute: this.portfolioValue - avg, pct: (this.portfolioValue - avg) / this.portfolioValue * 100 };
            return acc;
        }, {});
    }

    _distribution(sorted, bins) {
        const min = sorted[0], max = sorted[sorted.length - 1], w = (max - min) / bins;
        return Array.from({ length: bins }, (_, i) => {
            const lo = min + i * w, hi = lo + w;
            const cnt = sorted.filter(v => v >= lo && v < hi).length;
            return { lo, hi, mid: (lo + hi) / 2, cnt, pct: cnt / sorted.length * 100 };
        });
    }

    _probabilities(sorted) {
        const n = sorted.length;
        const pv = this.portfolioValue;
        const targets = [-0.30, -0.20, -0.10, 0, +0.10, +0.20, +0.30, +0.50];
        return targets.map(t => {
            const threshold = pv * (1 + t);
            const above = sorted.filter(v => v >= threshold).length;
            return { target: t, threshold, probability: above / n * 100 };
        });
    }
}

/* ── UI Controller ── */
let mcEngine = null;
let mcLastResult = null;
let mcConfidence = 0.95;
let mcPathChart = null;
let mcDistChart = null;

// Default portfolio positions (will use real data when available)
const DEFAULT_POSITIONS = [
    { symbol: 'BTC/USDT', type: 'crypto', weight: 0.25 },
    { symbol: 'ETH/USDT', type: 'crypto', weight: 0.15 },
    { symbol: 'THYAO',    type: 'stock',  weight: 0.20 },
    { symbol: 'GARAN',    type: 'stock',  weight: 0.15 },
    { symbol: 'Tahvil',   type: 'bond',   weight: 0.15 },
    { symbol: 'Nakit',    type: 'bond',   weight: 0.10 },
];

function setMCConf(btn) {
    document.querySelectorAll('.mc-toggle').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    mcConfidence = parseFloat(btn.dataset.conf);
}

function runMonteCarloUI() {
    const btn = document.getElementById('mcRunBtn');
    const simCount = parseInt(document.getElementById('mcSimCount').value);
    const days = parseInt(document.getElementById('mcTimeHorizon').value);
    const scenarioMode = document.getElementById('mcScenarioMode').value;

    btn.disabled = true;
    btn.classList.add('mc-running');
    btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation:spin 1s linear infinite"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/></svg> Simülasyon çalışıyor...';

    // Show progress
    const progressWrap = document.getElementById('mcProgressWrap');
    const progressFill = document.getElementById('mcProgressFill');
    const progressLabel = document.getElementById('mcProgressLabel');
    const progressPct  = document.getElementById('mcProgressPct');
    progressWrap.style.display = 'block';
    document.getElementById('mcResultsArea').style.display = 'none';

    // Animate progress bar (simulated — actual calc is synchronous in JS)
    let pct = 0;
    const stages = [
        { pct: 20, label: 'Korelasyon matrisi hesaplanıyor...' },
        { pct: 45, label: 'Cholesky ayrıştırması...' },
        { pct: 70, label: `${simCount.toLocaleString('tr-TR')} yol simüle ediliyor...` },
        { pct: 88, label: 'VaR / CVaR hesaplanıyor...' },
        { pct: 95, label: 'Dağılım oluşturuluyor...' },
    ];

    let si = 0;
    const ticker = setInterval(() => {
        if (si < stages.length) {
            pct = stages[si].pct;
            progressLabel.textContent = stages[si].label;
            progressPct.textContent = pct + '%';
            progressFill.style.width = pct + '%';
            si++;
        }
    }, 180);

    setTimeout(() => {
        clearInterval(ticker);
        progressFill.style.width = '100%';
        progressPct.textContent = '100%';
        progressLabel.textContent = 'Tamamlandı!';

        setTimeout(() => {
            progressWrap.style.display = 'none';

            // Run actual simulation
            mcEngine = new MonteCarloEngine(847250, DEFAULT_POSITIONS);
            const result = mcEngine.run({
                simulations: simCount,
                days,
                confidenceLevels: [0.95, 0.99],
                scenarioMode
            });
            mcLastResult = result;

            renderMCResults(result, days, scenarioMode);

            btn.disabled = false;
            btn.classList.remove('mc-running');
            btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg> Yeniden Çalıştır';
            document.getElementById('mcExportBtn').style.display = 'inline-flex';
            showToast('Monte Carlo simülasyonu tamamlandı!', 'success');
        }, 300);
    }, 1100);
}

function renderMCResults(result, days, mode) {
    const pv = mcEngine.portfolioValue;
    const { stats, var: varData, cvar, distribution, probabilities, paths } = result;

    // Show results area
    document.getElementById('mcResultsArea').style.display = 'block';

    // KPI cards
    const cl = mcConfidence;
    const expChg = ((stats.mean - pv) / pv * 100).toFixed(2);
    document.getElementById('mcExpectedVal').textContent = '₺' + Math.round(stats.mean).toLocaleString('tr-TR');
    document.getElementById('mcExpectedChg').textContent = (expChg >= 0 ? '+' : '') + expChg + '%';
    document.getElementById('mcExpectedChg').className = 'mc-kpi-change ' + (expChg >= 0 ? 'positive' : 'negative');
    document.getElementById('mcVarVal').textContent = '-₺' + Math.round(varData[cl].absolute).toLocaleString('tr-TR');
    document.getElementById('mcVarPct').textContent = '−' + varData[cl].pct.toFixed(2) + '% olası maksimum kayıp';
    document.getElementById('mcCvarVal').textContent = '-₺' + Math.round(cvar[cl].absolute).toLocaleString('tr-TR');
    document.getElementById('mcCvarPct').textContent = 'Beklenen kayıp (kötü %' + Math.round((1 - cl) * 100) + ' senaryo)';
    document.getElementById('mcMedianVal').textContent = '₺' + Math.round(stats.median).toLocaleString('tr-TR');
    document.getElementById('mcStdVal').textContent = '±₺' + Math.round(stats.stdDev).toLocaleString('tr-TR') + ' std. sapma';

    // Path chart
    _renderPathChart(paths, days, pv);

    // Distribution chart
    _renderDistChart(distribution, pv, varData[cl].portfolioValue);

    // Probability table
    _renderProbTable(probabilities, pv);

    // Scenario compare
    if (mode !== 'normal') {
        _renderScenarioCompare(mode, varData, cvar, pv);
    } else {
        document.getElementById('mcScenarioCompare').style.display = 'none';
    }

    // Interpretation
    _renderInterpretation(result, days, mode, cl, pv);
}

function _renderPathChart(paths, days, pv) {
    const ctx = document.getElementById('mcPathChart').getContext('2d');
    if (mcPathChart) mcPathChart.destroy();

    const labels = Array.from({ length: days + 1 }, (_, i) => i === 0 ? 'Bugün' : i === days ? `${days}g` : i % 63 === 0 ? `${i}g` : '');

    // Sample 50 paths + percentile bands
    const p5  = paths.map((_, di) => _getPathPercentile(paths, di, 0.05));
    const p25 = paths.map((_, di) => _getPathPercentile(paths, di, 0.25));
    const p50 = paths.map((_, di) => _getPathPercentile(paths, di, 0.50));
    const p75 = paths.map((_, di) => _getPathPercentile(paths, di, 0.75));
    const p95 = paths.map((_, di) => _getPathPercentile(paths, di, 0.95));

    const sampleDs = paths.slice(0, 30).map(path => ({
        data: path,
        borderColor: 'rgba(139,92,246,0.08)',
        borderWidth: 1,
        pointRadius: 0,
        fill: false,
        tension: 0.3,
    }));

    mcPathChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [
                ...sampleDs,
                { label: 'P95', data: p95, borderColor: 'rgba(16,185,129,0.6)', borderWidth: 1.5, borderDash: [4, 3], pointRadius: 0, fill: false, tension: 0.3 },
                { label: 'P75', data: p75, borderColor: 'rgba(16,185,129,0.9)', borderWidth: 2, pointRadius: 0, fill: false, tension: 0.3 },
                { label: 'Medyan', data: p50, borderColor: '#06b6d4', borderWidth: 2.5, pointRadius: 0, fill: false, tension: 0.3 },
                { label: 'P25', data: p25, borderColor: 'rgba(239,68,68,0.8)', borderWidth: 2, pointRadius: 0, fill: false, tension: 0.3 },
                { label: 'P5', data: p5, borderColor: 'rgba(239,68,68,0.5)', borderWidth: 1.5, borderDash: [4, 3], pointRadius: 0, fill: false, tension: 0.3 },
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 600 },
            plugins: {
                legend: {
                    display: true,
                    labels: { filter: item => !item.text.startsWith('undefined'), font: { size: 10 }, color: '#8b8fa8', boxWidth: 16 }
                },
                tooltip: {
                    callbacks: {
                        label: (ctx) => ctx.dataset.label && !ctx.dataset.label.startsWith('undefined')
                            ? `${ctx.dataset.label}: ₺${Math.round(ctx.raw).toLocaleString('tr-TR')}` : null,
                    },
                    filter: item => item.dataset.label && !item.dataset.label.startsWith('undefined')
                }
            },
            scales: {
                x: { ticks: { color: '#5a7065', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.04)' } },
                y: {
                    ticks: { color: '#5a7065', font: { size: 10 }, callback: v => '₺' + Math.round(v / 1000) + 'K' },
                    grid: { color: 'rgba(255,255,255,0.04)' }
                }
            }
        }
    });
}

function _getPathPercentile(paths, dayIndex, pct) {
    const vals = paths.map(p => p[Math.min(dayIndex, p.length - 1)]).sort((a, b) => a - b);
    return vals[Math.floor(pct * vals.length)] ?? vals[vals.length - 1];
}

function _renderDistChart(distribution, pv, varThreshold) {
    const ctx = document.getElementById('mcDistChart').getContext('2d');
    if (mcDistChart) mcDistChart.destroy();

    const colors = distribution.map(b =>
        b.mid < varThreshold ? 'rgba(239,68,68,0.75)' :
        b.mid < pv           ? 'rgba(245,158,11,0.75)' :
                               'rgba(16,185,129,0.75)'
    );

    mcDistChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: distribution.map(b => '₺' + Math.round(b.mid / 1000) + 'K'),
            datasets: [{
                label: 'Olasılık (%)',
                data: distribution.map(b => b.pct.toFixed(3)),
                backgroundColor: colors,
                borderWidth: 0,
                borderRadius: 2,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 800, easing: 'easeOutQuart' },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        title: (items) => `₺${Math.round(distribution[items[0].dataIndex].lo / 1000)}K – ₺${Math.round(distribution[items[0].dataIndex].hi / 1000)}K`,
                        label: (item) => [`Olasılık: %${parseFloat(item.raw).toFixed(2)}`, `Simülasyon: ${distribution[item.dataIndex].cnt}`]
                    }
                }
            },
            scales: {
                x: { ticks: { display: false }, grid: { display: false } },
                y: {
                    ticks: { color: '#5a7065', font: { size: 10 }, callback: v => '%' + v },
                    grid: { color: 'rgba(255,255,255,0.04)' }
                }
            }
        }
    });
}

function _renderProbTable(probabilities, pv) {
    const tbody = document.getElementById('mcProbTableBody');
    const riskLabel = (prob) => {
        if (prob >= 70) return { cls: 'low', label: 'Düşük Risk' };
        if (prob >= 50) return { cls: 'medium', label: 'Orta Risk' };
        if (prob >= 30) return { cls: 'high', label: 'Yüksek Risk' };
        return { cls: 'extreme', label: 'Çok Yüksek' };
    };
    const barColor = (t) => t >= 0 ? '#10b981' : t >= -0.1 ? '#f59e0b' : '#ef4444';

    tbody.innerHTML = probabilities.map(p => {
        const rl = riskLabel(p.probability);
        return `
            <tr>
                <td>${p.target >= 0 ? '+' : ''}${(p.target * 100).toFixed(0)}%</td>
                <td style="font-family:var(--font-mono)">₺${Math.round(p.threshold).toLocaleString('tr-TR')}</td>
                <td>
                    <div class="prob-bar-wrap">
                        <div class="prob-bar">
                            <div class="prob-bar-fill" style="width:${p.probability.toFixed(1)}%;background:${barColor(p.target)};border-radius:3px;height:100%;transition:width 0.6s ease"></div>
                        </div>
                        <span class="prob-pct" style="color:${barColor(p.target)}">${p.probability.toFixed(1)}%</span>
                    </div>
                </td>
                <td><span class="risk-pill ${rl.cls}">${rl.label}</span></td>
            </tr>`;
    }).join('');

    // Animate bars in
    requestAnimationFrame(() => {
        tbody.querySelectorAll('.prob-bar-fill').forEach(b => { b.style.width = b.style.width; });
    });
}

function _renderScenarioCompare(mode, varData, cvar, pv) {
    const compare = document.getElementById('mcScenarioCompare');
    compare.style.display = 'block';
    const modeName = { stressed: 'Stres Testi', extreme: 'Black Swan' }[mode];
    const bars = [
        { label: 'Normal Piyasa VaR (%95)', val: pv * 0.05, max: pv * 0.6, color: '#10b981' },
        { label: `${modeName} VaR (%95)`, val: varData[0.95].absolute, max: pv * 0.6, color: '#f59e0b' },
        { label: `${modeName} CVaR (%95)`, val: cvar[0.95].absolute, max: pv * 0.6, color: '#ef4444' },
    ];
    document.getElementById('mcScenarioBars').innerHTML = bars.map(b => `
        <div class="mc-scenario-bar-item">
            <div class="mc-scenario-bar-header">
                <span class="mc-scenario-bar-name">${b.label}</span>
                <span class="mc-scenario-bar-val" style="color:${b.color}">-₺${Math.round(b.val).toLocaleString('tr-TR')}</span>
            </div>
            <div class="mc-scenario-track">
                <div class="mc-scenario-fill" style="width:${Math.min(100, b.val / b.max * 100).toFixed(1)}%;background:${b.color}"></div>
            </div>
        </div>`).join('');
}

function _renderInterpretation(result, days, mode, cl, pv) {
    const { stats, var: varData, cvar } = result;
    const varAbs  = varData[cl].absolute;
    const varPct  = varData[cl].pct.toFixed(1);
    const cvarAbs = cvar[cl].absolute;
    const cvarPct = cvar[cl].pct.toFixed(1);
    const expChg  = ((stats.mean - pv) / pv * 100).toFixed(1);
    const isProfit = stats.mean > pv;
    const modeDesc = { normal: 'normal piyasa koşullarında', stressed: 'stres testi senaryosunda', extreme: 'black swan senaryosunda' }[mode];

    const warnClass = parseFloat(cvarPct) > 25 ? 'mc-interp-warn' : 'mc-interp-good';
    const warnText  = parseFloat(cvarPct) > 25
        ? `⚠️ CVaR değeri %${cvarPct} seviyesinde olup portföyünüzde ciddi konsantrasyon riski bulunuyor.`
        : `✅ CVaR değeri %${cvarPct} ile kabul edilebilir sınırlarda kalıyor.`;

    document.getElementById('mcInterpretation').innerHTML = `
        <div class="mc-interp-title">🔍 Simülasyon Yorumu</div>
        <div class="mc-interp-body">
            <span class="mc-interp-highlight">${days} günlük (${Math.round(days/21)} aylık)</span>
            simülasyon ${modeDesc} portföyünüzün ortalama değerinin
            <span class="${isProfit ? 'mc-interp-good' : 'mc-interp-warn'}">
                ₺${Math.round(stats.mean).toLocaleString('tr-TR')} (%${expChg >= 0 ? '+' : ''}${expChg})
            </span>
            olmasını bekliyor. &nbsp;%${Math.round(cl * 100)} güvenle,
            portföy değeriniz
            <span class="mc-interp-warn">₺${Math.round(varData[cl].portfolioValue).toLocaleString('tr-TR')}</span>
            seviyesinin altına düşmeyecek; ancak en kötü %${Math.round((1 - cl) * 100)} senaryoda
            beklenen kayıp <span class="mc-interp-warn">₺${Math.round(cvarAbs).toLocaleString('tr-TR')} (%${cvarPct})</span>
            seviyesine ulaşabilir. &nbsp;${warnText}
        </div>`;
}

function exportMonteCarloReport() {
    if (!mcLastResult) return;
    const { stats, var: varData, cvar } = mcLastResult;
    const pv = mcEngine.portfolioValue;
    const rows = [
        ['Metrik', 'Değer'],
        ['Portföy Başlangıç Değeri', `₺${pv.toLocaleString('tr-TR')}`],
        ['Beklenen Değer', `₺${Math.round(stats.mean).toLocaleString('tr-TR')}`],
        ['Medyan Değer', `₺${Math.round(stats.median).toLocaleString('tr-TR')}`],
        ['Standart Sapma', `₺${Math.round(stats.stdDev).toLocaleString('tr-TR')}`],
        ['VaR %95', `-₺${Math.round(varData[0.95].absolute).toLocaleString('tr-TR')} (-%${varData[0.95].pct.toFixed(2)})`],
        ['VaR %99', `-₺${Math.round(varData[0.99].absolute).toLocaleString('tr-TR')} (-%${varData[0.99].pct.toFixed(2)})`],
        ['CVaR %95', `-₺${Math.round(cvar[0.95].absolute).toLocaleString('tr-TR')} (-%${cvar[0.95].pct.toFixed(2)})`],
        ['CVaR %99', `-₺${Math.round(cvar[0.99].absolute).toLocaleString('tr-TR')} (-%${cvar[0.99].pct.toFixed(2)})`],
        ['Min Senaryo', `₺${Math.round(stats.min).toLocaleString('tr-TR')}`],
        ['Max Senaryo', `₺${Math.round(stats.max).toLocaleString('tr-TR')}`],
    ];
    const csv = rows.map(r => r.map(c => `"${c}"`).join(',')).join('\n');
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'equilyze-monte-carlo-' + new Date().toISOString().split('T')[0] + '.csv';
    a.click();
    showToast('Monte Carlo raporu indirildi!', 'success');
}

// Add Chart.js spin animation style
const mcStyle = document.createElement('style');
mcStyle.textContent = `@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`;
document.head.appendChild(mcStyle);
