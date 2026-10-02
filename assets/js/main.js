(() => {
  'use strict';

  const WA_NUMBER = '5511926377723';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  window.__teocodeReady = true;

  /* ── 1. Links do WhatsApp com mensagem contextual ───────────────────────
     O href base ja funciona sozinho; aqui acrescentamos a mensagem. */
  $$('a[data-wa]').forEach((a) => {
    a.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(a.dataset.wa)}`;
  });

  /* ── 2. Rastreio de cliques no GoatCounter ──────────────────────────────
     Um unico listener delegado. Se o script estiver bloqueado (adblock) ou
     falhar, o link do WhatsApp continua funcionando normalmente. */
  document.addEventListener('click', (event) => {
    const el = event.target.closest('[data-gc-event]');
    if (!el) return;
    const name = el.dataset.gcEvent;
    if (window.goatcounter && window.goatcounter.count) {
      try {
        window.goatcounter.count({ path: name, title: name, event: true });
      } catch (_) { /* o rastreio nunca pode quebrar a navegacao */ }
    }
  });

  /* ── 3. Navegacao: estado ao rolar ─────────────────────────────────── */
  const header = $('#topo');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── 4. Menu mobile ────────────────────────────────────────────────── */
  const hamburger = $('#hamburger');
  const menu = $('#menu');
  const setMenu = (open) => {
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    menu.classList.toggle('is-open', open);
    menu.inert = !open;
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) $('a', menu).focus({ preventScroll: true });
  };
  menu.inert = true;
  hamburger.addEventListener('click', () => setMenu(hamburger.getAttribute('aria-expanded') !== 'true'));
  $$('a', menu).forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      setMenu(false);
      hamburger.focus();
    }
  });
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  /* ── 5. Revelacao ao rolar (IntersectionObserver) ──────────────────── */
  const revealTargets = $$('[data-reveal], .process-line, .step');
  if (!('IntersectionObserver' in window)) {
    revealTargets.forEach((el) => el.classList.add('is-in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    revealTargets.forEach((el) => io.observe(el));
  }

  /* ── 6. Hero: entrada orquestrada + conversa de exemplo ────────────── */
  const hero = $('#inicio');
  const thread = $('#chat-thread');
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function playChat() {
    const messages = $$('.msg', thread);
    if (reduceMotion) {
      messages.forEach((m) => m.classList.add('is-in'));
      return;
    }
    await wait(1500);
    for (const msg of messages) {
      const outgoing = msg.classList.contains('msg-out');
      let typing;
      if (outgoing) {
        typing = document.createElement('span');
        typing.className = 'typing';
        typing.setAttribute('aria-hidden', 'true');
        typing.innerHTML = '<i></i><i></i><i></i>';
        thread.appendChild(typing);
        await wait(1150);
        typing.remove();
      } else {
        await wait(700);
      }
      msg.classList.add('is-in');
      await wait(outgoing ? 900 : 600);
    }
  }

  requestAnimationFrame(() => requestAnimationFrame(() => {
    hero.classList.add('hero-in');
    playChat();
  }));

  /* ── 6b. Botao flutuante do WhatsApp: aparece depois do hero ────────── */
  const waFloat = $('.wa-float');
  if (waFloat) {
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([entry]) => {
        waFloat.classList.toggle('is-visible', !entry.isIntersecting);
      }, { threshold: 0 }).observe(hero);
    } else {
      waFloat.classList.add('is-visible');
    }
  }

  /* ── 7. Formulario -> WhatsApp ─────────────────────────────────────── */
  const form = $('#lead-form');
  const phone = $('#phone');

  phone.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '').slice(0, 11);
    if (v.length > 7) v = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
    else if (v.length > 2) v = `(${v.slice(0, 2)}) ${v.slice(2)}`;
    else if (v.length) v = `(${v}`;
    e.target.value = v;
  });

  const setError = (input, message) => {
    const err = $(`#${input.id}-error`);
    input.setAttribute('aria-invalid', message ? 'true' : 'false');
    if (err) err.textContent = message || '';
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#name');
    const digits = phone.value.replace(/\D/g, '');
    let firstInvalid = null;

    if (!name.value.trim()) { setError(name, 'Informe o seu nome.'); firstInvalid = firstInvalid || name; } else setError(name, '');
    if (digits.length < 10) { setError(phone, 'Informe um WhatsApp com DDD.'); firstInvalid = firstInvalid || phone; } else setError(phone, '');

    if (firstInvalid) { firstInvalid.focus(); return; }

    const email = $('#email').value.trim();
    const service = $('#service').value;
    const message = $('#message').value.trim();
    const lines = [
      'Olá, TeoCode! Vim pelo site.',
      '',
      `Nome: ${name.value.trim()}`,
      `WhatsApp: ${phone.value.trim()}`,
    ];
    if (email) lines.push(`E-mail: ${email}`);
    if (service) lines.push(`Serviço de interesse: ${service}`);
    lines.push('', `Mensagem: ${message || 'Gostaria de saber mais sobre os serviços.'}`);

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
    $('#form-fields').hidden = true;
    const ok = $('#form-success');
    ok.hidden = false;
    ok.focus();
  });

  $('#form-reset').addEventListener('click', () => {
    form.reset();
    $('#form-success').hidden = true;
    $('#form-fields').hidden = false;
    $('#name').focus();
  });

  [$('#name'), phone].forEach((input) => input.addEventListener('input', () => setError(input, '')));
})();
