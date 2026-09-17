/* ── NAV SCROLL STATE ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
}, { passive: true });

/* ── MOBILE MENU ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

function setMenu(open) {
    hamburger.classList.toggle('is-open', open);
    mobileMenu.classList.toggle('is-open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
}

hamburger.addEventListener('click', () => setMenu(!hamburger.classList.contains('is-open')));
mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

/* ── COUNTERS ── */
function animateCounter(el) {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const duration = 1600;
    const start = performance.now();

    function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        el.textContent = Math.floor(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.6 });

document.querySelectorAll('[data-count]').forEach((el) => counterObserver.observe(el));

/* ── WHATSAPP CHAT MOCK (illustrative demo, not a real transcript) ── */
const chatLog = document.getElementById('chatLog');

if (chatLog) {
    const script = [
        { from: 'in', text: 'Oi! Vi o Instagram, vocês fazem site pra salão?' },
        { from: 'out', text: 'Fazemos! 🙌 Posso te mostrar um exemplo parecido com o seu segmento e já agendar uma avaliação gratuita?' },
        { from: 'in', text: 'Pode ser sim!' },
        { from: 'out', text: 'Show, só confirmar: melhor dia e horário pra te chamar por aqui?' },
    ];

    function addBubble({ from, text }) {
        const bubble = document.createElement('div');
        bubble.className = `bubble ${from === 'in' ? 'bubble-in' : 'bubble-out'}`;
        bubble.textContent = text;
        chatLog.appendChild(bubble);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    function addTyping() {
        const typing = document.createElement('div');
        typing.className = 'typing-dots';
        typing.innerHTML = '<span></span><span></span><span></span>';
        chatLog.appendChild(typing);
        return typing;
    }

    async function playChat() {
        chatLog.innerHTML = '';
        for (const line of script) {
            if (line.from === 'out') {
                const typing = addTyping();
                await wait(900);
                typing.remove();
            } else {
                await wait(700);
            }
            addBubble(line);
            await wait(600);
        }
        await wait(3200);
        playChat();
    }

    function wait(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const chatObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                playChat();
                chatObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    chatObserver.observe(chatLog);
}

/* ── PHONE MASK ── */
const phone = document.getElementById('phone');
if (phone) {
    phone.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '').slice(0, 11);
        if (value.length > 6) value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
        else if (value.length > 2) value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        else if (value.length) value = `(${value}`;
        e.target.value = value;
    });
}

/* ── FORM → WHATSAPP ── */
const submitBtn = document.getElementById('submitBtn');
if (submitBtn) {
    submitBtn.addEventListener('click', () => {
        const name = document.getElementById('name').value.trim();
        const phoneValue = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value.trim();

        if (!name || !phoneValue) {
            alert('Por favor, preencha nome e WhatsApp.');
            return;
        }

        const lines = [
            'Olá, TeoCode! 👋',
            '',
            `Nome: ${name}`,
            `WhatsApp: ${phoneValue}`,
        ];
        if (email) lines.push(`E-mail: ${email}`);
        if (service) lines.push(`Serviço: ${service}`);
        lines.push('', `Mensagem: ${message || 'Gostaria de saber mais sobre os serviços.'}`);

        const text = encodeURIComponent(lines.join('\n'));
        window.open(`https://wa.me/5511926377723?text=${text}`, '_blank', 'noopener');

        document.getElementById('formWrap').classList.add('hidden');
        document.getElementById('formSuccess').classList.remove('hidden');
    });
}

/* ── SMOOTH SCROLL FOR ANCHOR LINKS ── */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
