// =================================================================
// MALAFO v3 — app.js
// =================================================================

// ── STATE ─────────────────────────────────────────────────────────
const S = {
  listings:    [],
  filter:      'all',
  curListing:  null,
  curChat:     null,
  photos:      [],      // base64 strings
  camStream:   null,
  facing:      'environment',
  animalType:  'horse',
  viewIdx:     0,       // 0=side 1=front 2=back
  navStack:    [],
  installEvt:  null,
  myName:      '',
  myPhone:     '',
};

// ── UTILS ─────────────────────────────────────────────────────────
function uid() {
  let id = localStorage.getItem('mf_uid');
  if (!id) { id = 'u' + Date.now() + Math.random().toString(36).slice(2, 6); localStorage.setItem('mf_uid', id); }
  return id;
}

function tAgo(ts) {
  const d = Date.now() - ts;
  const m = Math.floor(d / 60000);
  if (m < 1)  return 'только что';
  if (m < 60) return m + ' мин';
  const h = Math.floor(m / 60);
  if (h < 24) return h + ' ч';
  const day = Math.floor(h / 24);
  if (day < 7) return day + ' д';
  return new Date(ts).toLocaleDateString('ru', { day: 'numeric', month: 'short' });
}

function esc(s) {
  return (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

const TL = { horse:'Лошадь', cow:'Корова', sheep:'Баран', goat:'Коза', camel:'Верблюд' };

let toastTimer;
function toast(msg) {
  const el = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}

// ── NAVIGATION ───────────────────────────────────────────────────
// KEY FIX: single bnav outside all screens.
// Screens use display:none / display:flex only.
// No transform, no z-index fights.

function goTo(id) {
  const cur = document.querySelector('.screen.active');
  if (cur) {
    if (cur.id === id) return;
    cur.classList.remove('active');
    S.navStack.push(cur.id);
    // stop camera when leaving camera screen
    if (cur.id === 'screen-camera') stopCam();
  }
  const next = document.getElementById(id);
  next.classList.add('active');

  // start camera when entering
  if (id === 'screen-camera') startCam();
  if (id === 'screen-prices') renderPrices();
  if (id === 'screen-chat') renderChatList();

  // update nav active state
  updateNavActive(id);
}

function goBack() {
  const cur = document.querySelector('.screen.active');
  if (!cur) return;
  if (cur.id === 'screen-camera') stopCam();
  cur.classList.remove('active');
  const prev = S.navStack.pop() || 'screen-main';
  const target = document.getElementById(prev);
  if (target) target.classList.add('active');
  updateNavActive(prev);
}

function updateNavActive(screenId) {
  document.querySelectorAll('#bnav .ni, #bnav .ni-add').forEach(b => b.classList.remove('on'));
  const map = {
    'screen-main':    'nav-home',
    'screen-chat':    'nav-chat',
    'screen-prices':  'nav-prices',
    'screen-profile': 'nav-profile',
  };
  const btnId = map[screenId];
  if (btnId) {
    const btn = document.getElementById(btnId);
    if (btn) btn.classList.add('on');
  }
}

// ── INIT ──────────────────────────────────────────────────────────
function init() {
  // Load profile from localStorage
  const p = JSON.parse(localStorage.getItem('mf_profile') || '{}');
  S.myName = p.name || '';
  S.myPhone = p.phone || '';
  if (p.name)     document.getElementById('p-name-in').value = p.name;
  if (p.phone)    document.getElementById('p-phone-in').value = p.phone;
  if (p.district) document.getElementById('p-district').value = p.district;
  updateProfileUI();

  // Load listings
  S.listings = JSON.parse(localStorage.getItem('mf_listings') || '[]');

  // Hide loader, show main
  setTimeout(() => {
    const ldr = document.getElementById('loader');
    ldr.style.opacity = '0';
    setTimeout(() => ldr.style.display = 'none', 400);
    goTo('screen-main');
    renderCards();
    updateStats();
  }, 600);

  // PWA install prompt
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    S.installEvt = e;
  });
}

// ── LISTINGS ─────────────────────────────────────────────────────
function renderCards(override) {
  const src = override || S.listings;
  const q = (document.getElementById('search-input').value || '').toLowerCase();
  let shown = S.filter === 'all' ? src : src.filter(l => l.at === S.filter);
  if (q) shown = shown.filter(l =>
    (l.title + l.breed + l.district + l.desc + l.features).toLowerCase().includes(q));

  const el = document.getElementById('listings');
  if (!shown.length) {
    el.innerHTML = `<div class="empty"><div class="icon">🐄</div><p>Объявлений пока нет.<br>Будьте первым!</p></div>`;
    return;
  }
  el.innerHTML = shown.map((l, i) => {
    const ph = l.photos && l.photos[0];
    return `
    <div class="card" style="animation-delay:${i * 0.045}s" onclick="openDetail('${l.id}')">
      <div class="card-img">
        ${ph
          ? `<img src="${ph}" alt="" loading="lazy">`
          : `<div class="no-img"><svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="var(--mu)" stroke-width="1.5"/><circle cx="8.5" cy="8.5" r="1.5" fill="var(--mu)"/><path d="M21 15l-5-5L5 21" stroke="var(--mu)" stroke-width="1.5" stroke-linecap="round"/></svg></div>`}
        ${l.wt ? `<div class="ai-badge">~${l.wt} кг</div>` : ''}
      </div>
      <div class="card-body">
        <div>
          <div class="card-title">${esc(l.title)}</div>
          <div class="card-sub">${esc([l.breed, l.features].filter(Boolean).join(' · '))}</div>
          <div class="tags">
            <span class="tag tg">${TL[l.at] || l.at}</span>
            ${l.barg === 'yes' ? '<span class="tag ta">Торг</span>' : ''}
            ${l.vacc === 'yes' ? '<span class="tag tb">Привит</span>' : ''}
          </div>
        </div>
        <div class="card-foot">
          <div class="card-loc">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="var(--mu)"><path d="M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7z"/></svg>
            ${esc(l.district)}${l.village ? ', ' + esc(l.village) : ''}
          </div>
          <div class="card-price">${l.price ? Number(l.price).toLocaleString('ru') + ' с' : 'Договор.'}</div>
        </div>
      </div>
    </div>`;
  }).join('');
}

function updateStats() {
  document.getElementById('stat-cnt').textContent = S.listings.length;
  const today = new Date().toDateString();
  const n = S.listings.filter(l => new Date(l.ts).toDateString() === today).length;
  document.getElementById('stat-new').textContent = '+' + n;
  const mine = S.listings.filter(l => l.uid === uid() || l.phone === S.myPhone);
  document.getElementById('my-ads-count').textContent = mine.length;
  document.getElementById('my-ads-sub').textContent = mine.length ? mine.length + ' активных' : 'нет активных';
}

function setFilter(type, el) {
  S.filter = type;
  document.querySelectorAll('.ftab').forEach(t => t.classList.remove('on'));
  el.classList.add('on');
  renderCards();
}

// ── DETAIL ───────────────────────────────────────────────────────
function openDetail(id) {
  const l = S.listings.find(x => x.id === id);
  if (!l) return;
  S.curListing = l;

  document.getElementById('detail-crumb').textContent = l.title;

  // Gallery
  let galIdx = 0;
  function renderGal() {
    const gal = document.getElementById('detail-gallery');
    if (l.photos && l.photos.length) {
      gal.innerHTML = `
        <img src="${l.photos[galIdx]}" alt="" onclick="galNext()">
        ${l.wt ? `<div class="gal-ai">ИИ: ~${l.wt} кг</div>` : ''}
        <div class="gal-dots">
          ${l.photos.map((_, i) => `<div class="gdot${i === galIdx ? ' on' : ''}"></div>`).join('')}
        </div>`;
    } else {
      gal.innerHTML = `<div class="no-img" style="flex-direction:column;gap:8px">
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="var(--mu)" stroke-width="1.5"/><circle cx="8.5" cy="8.5" r="1.5" fill="var(--mu)"/><path d="M21 15l-5-5L5 21" stroke="var(--mu)" stroke-width="1.5" stroke-linecap="round"/></svg>
        <span style="font-size:12px;color:var(--mu)">Нет фото</span></div>`;
    }
  }
  window.galNext = () => {
    if (l.photos && l.photos.length > 1) { galIdx = (galIdx + 1) % l.photos.length; renderGal(); }
  };
  renderGal();

  // Market compare
  const sim = S.listings.filter(x => x.at === l.at && x.price && x.id !== l.id);
  const avg = sim.length ? Math.round(sim.reduce((a, b) => a + (+b.price), 0) / sim.length) : null;
  const diff = avg && l.price ? Math.round((+l.price / avg - 1) * 100) : null;
  const sn = l.sname || 'Продавец';

  document.getElementById('detail-body').innerHTML = `
    <div class="det-price-row">
      <div style="flex:1;min-width:0;padding-right:10px">
        <div class="det-title">${esc(l.title)}</div>
        <div class="det-sub">${esc([l.breed, l.features, l.district].filter(Boolean).join(' · '))}</div>
      </div>
      <div class="det-price">${l.price ? Number(l.price).toLocaleString('ru') + ' с' : 'Договорная'}</div>
    </div>
    <div class="tags" style="margin-top:8px">
      <span class="tag tg">${TL[l.at] || ''}</span>
      ${l.barg === 'yes' ? '<span class="tag ta">Торг уместен</span>' : ''}
      ${l.vacc === 'yes' ? '<span class="tag tb">Привит</span>' : ''}
      ${l.age ? `<span class="tag tm">${l.age} лет</span>` : ''}
    </div>

    ${l.wt ? `
    <div class="ai-card">
      <div class="ai-card-title">Анализ по фото</div>
      <div class="ai-metrics">
        <div class="ai-m"><div class="mv">~${l.wt}</div><div class="ml">кг живого</div></div>
        <div class="ai-m"><div class="mv" style="color:var(--ad)">${l.aisc || '—'}/5</div><div class="ml">упитанность</div></div>
        <div class="ai-m"><div class="mv" style="font-size:13px;color:#1a5fa0">${l.age || '?'} лет</div><div class="ml">возраст</div></div>
      </div>
    </div>` : ''}

    ${l.desc ? `<div class="section-title">Описание</div><div class="description">${esc(l.desc)}</div>` : ''}
    ${l.phone ? `<div style="margin-top:8px;font-size:13px;color:var(--mu)">📞 ${esc(l.phone)}</div>` : ''}

    <div class="seller-card">
      <div class="seller-av">${sn[0].toUpperCase()}</div>
      <div>
        <div class="seller-name">${esc(sn)}</div>
        <div class="seller-sub">${esc(l.phone || '')}</div>
      </div>
      <button class="seller-write" onclick="openChat('${l.id}','${esc(sn)}','${esc(l.title)}')">Написать →</button>
    </div>

    ${avg && l.price ? `
    <div class="mkt-card">
      <div style="font-size:11px;color:var(--mu);margin-bottom:3px">Средняя цена похожих (${sim.length} объявл.)</div>
      <div style="font-family:var(--fd);font-size:15px;font-weight:800;color:var(--g2)">${avg.toLocaleString('ru')} сом</div>
      <div style="font-size:11px;margin-top:3px;color:${diff > 0 ? 'var(--ad)' : 'var(--g4)'}">
        ${diff > 0 ? 'На ' + diff + '% выше среднего' : 'На ' + Math.abs(diff) + '% ниже среднего'}
      </div>
    </div>` : ''}

    <div class="action-row">
      <button class="btn btn-a" onclick="markInterest()">👀 Еду смотреть</button>
      <button class="btn btn-p" onclick="openChat('${l.id}','${esc(sn)}','${esc(l.title)}')">Написать</button>
    </div>
    <div style="height:8px"></div>
  `;

  goTo('screen-detail');
}

function markInterest() {
  toast('Продавец увидит ваш интерес!');
}

// ── CAMERA ───────────────────────────────────────────────────────
const CAM_TIPS = [
  '<b>Сбоку:</b> вся туша видна целиком. Встаньте в 3–4 метрах. Свет сзади вас.',
  '<b>Спереди:</b> встаньте прямо перед животным, 2–3 метра.',
  '<b>Сзади:</b> покажите зад и хвост. 2–3 метра.',
];
const CAM_HINTS = [
  'Совместите с контуром — снимайте сбоку',
  'Теперь снимайте спереди',
  'Последнее — сзади',
];

function updateCamUI() {
  // Guide
  const g = GUIDES[S.animalType] || GUIDES.horse;
  const views = ['side', 'front', 'back'];
  document.getElementById('cam-guide').innerHTML = g[views[S.viewIdx]] || g.side;

  // Tip & hint
  document.getElementById('cam-tip').innerHTML = CAM_TIPS[S.viewIdx];
  document.getElementById('cam-hint').textContent = CAM_HINTS[S.viewIdx];

  // View tabs
  document.querySelectorAll('.vtab').forEach((t, i) => t.classList.toggle('on', i === S.viewIdx));

  // Shot counter
  document.getElementById('shot-count').textContent = S.photos.length + '/3';
}

async function startCam() {
  S.photos = [];
  S.viewIdx = 0;
  updateCamUI();
  renderPhotoSlots();
  try {
    S.camStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: S.facing, width: { ideal: 1920 }, height: { ideal: 1080 } },
      audio: false,
    });
    document.getElementById('cam-video').srcObject = S.camStream;
  } catch (e) {
    document.getElementById('cam-hint').textContent = 'Нет доступа к камере — нажмите кнопку для выбора фото';
  }
}

function stopCam() {
  if (S.camStream) {
    S.camStream.getTracks().forEach(t => t.stop());
    S.camStream = null;
  }
  const v = document.getElementById('cam-video');
  if (v) v.srcObject = null;
}

function flipCam() {
  S.facing = S.facing === 'environment' ? 'user' : 'environment';
  stopCam();
  startCam();
}

function setAnimalType(type, el) {
  S.animalType = type;
  document.querySelectorAll('.atab').forEach(t => t.classList.remove('on'));
  el.classList.add('on');
  updateCamUI();
}

function setView(idx, el) {
  S.viewIdx = idx;
  document.querySelectorAll('.vtab').forEach(t => t.classList.remove('on'));
  el.classList.add('on');
  updateCamUI();
}

function takePhoto() {
  if (S.photos.length >= 3) { toast('3 фото готово!'); goToForm(); return; }

  const vid = document.getElementById('cam-video');
  const cvs = document.getElementById('cam-canvas');

  const doCapture = (dataUrl) => {
    S.photos.push(dataUrl);
    // Flash effect
    const vf = document.getElementById('viewfinder');
    const fl = document.createElement('div');
    fl.style.cssText = 'position:absolute;inset:0;background:#fff;z-index:10;pointer-events:none;transition:opacity 0.2s;';
    vf.appendChild(fl);
    setTimeout(() => { fl.style.opacity = '0'; setTimeout(() => fl.remove(), 200); }, 80);

    // Advance view
    if (S.viewIdx < 2) {
      S.viewIdx++;
      updateCamUI();
    }

    if (S.photos.length >= 3) {
      setTimeout(goToForm, 500);
    }
  };

  if (S.camStream && vid.readyState >= 2) {
    cvs.width  = vid.videoWidth  || 640;
    cvs.height = vid.videoHeight || 480;
    cvs.getContext('2d').drawImage(vid, 0, 0);
    doCapture(cvs.toDataURL('image/jpeg', 0.72));
  } else {
    // Fallback: file input
    const inp = document.createElement('input');
    inp.type = 'file'; inp.accept = 'image/*'; inp.capture = 'environment';
    inp.onchange = e => {
      const f = e.target.files[0]; if (!f) return;
      const r = new FileReader();
      r.onload = ev => doCapture(ev.target.result);
      r.readAsDataURL(f);
    };
    inp.click();
  }
}

function goToForm() {
  stopCam();
  // AI mock estimates
  const wts = { horse:[300,350,380,400,420,450], cow:[240,260,280,300,320], sheep:[38,42,46,50,55], goat:[28,32,36,40], camel:[380,420,450,500] };
  const wl = wts[S.animalType] || [100];
  const w = wl[Math.floor(Math.random() * wl.length)];
  const sc = ['3','3','4','4','4','5'][Math.floor(Math.random() * 6)];

  document.getElementById('f-type').value = S.animalType;
  document.getElementById('f-wt').value = w;
  document.getElementById('ai-weight').textContent = '~' + w + ' кг';
  document.getElementById('ai-score').textContent = sc + '/5';
  document.getElementById('ai-banner').style.display = 'flex';

  renderPhotoSlots();
  goTo('screen-form');
}

function renderPhotoSlots() {
  const el = document.getElementById('photo-previews');
  if (!el) return;
  const labels = ['Сбоку', 'Спереди', 'Сзади'];
  el.innerHTML = [0, 1, 2].map(i => {
    const ph = S.photos[i];
    return `<div class="photo-slot${ph ? ' filled' : ''}" onclick="pickPhoto(${i})">
      ${ph
        ? `<img src="${ph}" alt=""><button class="photo-del" onclick="event.stopPropagation();delPhoto(${i})">×</button>`
        : `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" stroke="var(--mu)" stroke-width="1.5" fill="none"/><circle cx="12" cy="13" r="4" stroke="var(--mu)" stroke-width="1.5"/></svg>
          <span>${labels[i]}</span>`}
    </div>`;
  }).join('');
}

function pickPhoto(i) {
  const inp = document.createElement('input');
  inp.type = 'file'; inp.accept = 'image/*';
  inp.onchange = e => {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = ev => { S.photos[i] = ev.target.result; renderPhotoSlots(); };
    r.readAsDataURL(f);
  };
  inp.click();
}

function delPhoto(i) {
  S.photos.splice(i, 1);
  renderPhotoSlots();
}

// ── PUBLISH ───────────────────────────────────────────────────────
function publish() {
  const price = document.getElementById('f-price').value;
  if (!price) { toast('Укажите цену'); return; }

  const gender = document.getElementById('f-gender').value;
  const age    = document.getElementById('f-age').value;
  const type   = document.getElementById('f-type').value;

  const listing = {
    id:       Date.now().toString(),
    at:       type,
    title:    gender + (age ? ', ' + age + ' лет' : ''),
    breed:    document.getElementById('f-breed').value,
    gender,
    age,
    features: document.getElementById('f-features').value,
    vacc:     document.getElementById('f-vacc').value,
    wt:       document.getElementById('f-wt').value,
    aisc:     document.getElementById('ai-score')?.textContent?.replace('/5', '') || null,
    price,
    barg:     document.getElementById('f-barg').value,
    district: document.getElementById('f-district').value,
    village:  document.getElementById('f-village').value,
    phone:    document.getElementById('f-phone').value || S.myPhone,
    sname:    S.myName || 'Продавец',
    desc:     document.getElementById('f-desc').value,
    photos:   S.photos.filter(Boolean),
    uid:      uid(),
    ts:       Date.now(),
  };

  S.listings.unshift(listing);
  localStorage.setItem('mf_listings', JSON.stringify(S.listings));
  S.photos = [];

  toast('Объявление опубликовано!');
  renderCards();
  updateStats();

  // Go home, clear stack
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  S.navStack = [];
  goTo('screen-main');
}

// ── CHAT ──────────────────────────────────────────────────────────
function openChat(lid, sname, title) {
  S.curChat = { lid, sname, title };
  document.getElementById('msgs-title').textContent = title;
  document.getElementById('msgs-sub').textContent = 'Продавец: ' + sname;
  renderMsgs(lid);
  goTo('screen-msgs');
  setTimeout(scrollMsgs, 80);
}

function getMsgs(lid) {
  return JSON.parse(localStorage.getItem('mf_msgs_' + lid) || '[]');
}

function renderMsgs(lid) {
  const msgs = getMsgs(lid);
  const area = document.getElementById('msgs-area');
  if (!msgs.length) {
    area.innerHTML = `<div style="text-align:center;padding:30px 16px;color:var(--mu);font-size:13px">Начните разговор</div>`;
    return;
  }
  area.innerHTML = msgs.map(m => {
    const isOut = m.uid === uid();
    return `<div class="msg ${isOut ? 'out' : 'in'}">${esc(m.txt)}<div class="msg-time">${tAgo(m.ts)}</div></div>`;
  }).join('');
}

function sendMsg() {
  const inp = document.getElementById('msg-input');
  const txt = inp.value.trim();
  if (!txt || !S.curChat) return;
  inp.value = ''; inp.style.height = '';

  const msg = { id: Date.now().toString(), lid: S.curChat.lid, uid: uid(), name: S.myName || 'Гость', txt, ts: Date.now() };
  const msgs = getMsgs(S.curChat.lid);
  msgs.push(msg);
  localStorage.setItem('mf_msgs_' + S.curChat.lid, JSON.stringify(msgs));
  renderMsgs(S.curChat.lid);
  scrollMsgs();
  renderChatList();
  updateStats();
}

function scrollMsgs() {
  const a = document.getElementById('msgs-area');
  if (a) a.scrollTop = a.scrollHeight;
}

function renderChatList() {
  const el = document.getElementById('chat-list');
  const keys = Object.keys(localStorage).filter(k => k.startsWith('mf_msgs_'));
  if (!keys.length) {
    el.innerHTML = `<div class="empty"><div class="icon">💬</div><p>Нет сообщений.<br>Напишите продавцу из объявления.</p></div>`;
    return;
  }
  el.innerHTML = keys.map(k => {
    const msgs = JSON.parse(localStorage.getItem(k) || '[]');
    const last = msgs[msgs.length - 1];
    if (!last) return '';
    const lid = k.replace('mf_msgs_', '');
    const l = S.listings.find(x => x.id === lid);
    const sn = l?.sname || 'Продавец';
    return `<div class="chat-item" onclick="openChat('${lid}','${esc(sn)}','${esc(l?.title || 'Объявление')}')">
      <div class="chat-av">${sn[0].toUpperCase()}</div>
      <div style="flex:1;min-width:0">
        <div class="chat-name">${esc(l?.title || 'Объявление')}</div>
        <div class="chat-preview">${esc(last.txt)}</div>
      </div>
      <div class="chat-time">${tAgo(last.ts)}</div>
    </div>`;
  }).join('');
}

function autoResize(el) {
  el.style.height = '';
  el.style.height = Math.min(el.scrollHeight, 96) + 'px';
}

// ── PRICES ────────────────────────────────────────────────────────
function renderPrices() {
  const types = ['horse', 'cow', 'sheep', 'goat', 'camel'];
  const labels = { horse:'Лошади', cow:'Коровы', sheep:'Бараны', goat:'Козы', camel:'Верблюды' };
  const emojis = { horse:'🐴', cow:'🐄', sheep:'🐑', goat:'🐐', camel:'🐪' };

  const rows = types.map(t => {
    const lst = S.listings.filter(l => l.at === t && l.price);
    if (!lst.length) return `
      <div class="price-row">
        <span class="price-animal">${emojis[t]} ${labels[t]}</span>
        <span class="price-range">нет данных</span>
      </div>`;
    const prices = lst.map(l => +l.price).sort((a, b) => a - b);
    const avg = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length);
    const mn = prices[0], mx = prices[prices.length - 1];
    return `
      <div class="price-row">
        <span class="price-animal">${emojis[t]} ${labels[t]}</span>
        <div style="text-align:right">
          <div class="price-avg">${avg.toLocaleString('ru')} с</div>
          <div class="price-range">${mn.toLocaleString('ru')}–${mx.toLocaleString('ru')} · ${lst.length} объявл.</div>
        </div>
      </div>`;
  });

  document.getElementById('prices-table').innerHTML =
    `<div class="menu-section">${rows.join('')}</div>
     <p style="font-size:12px;color:var(--mu);margin-top:12px;line-height:1.5">
       Данные из реальных объявлений на Малафо. Чем больше объявлений — тем точнее.
     </p>`;
}

// ── PROFILE ───────────────────────────────────────────────────────
function saveProfile() {
  const name     = document.getElementById('p-name-in').value.trim();
  const phone    = document.getElementById('p-phone-in').value.trim();
  const district = document.getElementById('p-district').value;
  S.myName = name; S.myPhone = phone;
  localStorage.setItem('mf_profile', JSON.stringify({ name, phone, district }));
  updateProfileUI();
}

function updateProfileUI() {
  const name = S.myName || 'Гость';
  document.getElementById('prof-av').textContent = name[0].toUpperCase();
  document.getElementById('prof-name').textContent = name;
  document.getElementById('prof-phone').textContent = S.myPhone || 'Добавьте телефон';
}

function showMyListings() {
  const mine = S.listings.filter(l => l.uid === uid() || l.phone === S.myPhone);
  if (!mine.length) { toast('У вас нет объявлений'); return; }
  S.filter = 'all';
  document.querySelectorAll('.ftab').forEach(t => t.classList.remove('on'));
  document.querySelector('.ftab').classList.add('on');
  goTo('screen-main');
  renderCards(mine);
  toast('Показываю ваши объявления');
}

// ── INSTALL ───────────────────────────────────────────────────────
function showInstall() {
  const isIOS     = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const isAndroid = /android/i.test(navigator.userAgent);
  const box = document.getElementById('install-content');

  if (S.installEvt) {
    box.innerHTML = `
      <p style="font-size:14px;color:var(--mid);margin-bottom:16px;line-height:1.6">
        Нажмите кнопку ниже — Малафо появится на главном экране телефона как приложение.
      </p>
      <button class="btn btn-p btn-full" onclick="doInstall()">Установить</button>`;
  } else if (isIOS) {
    box.innerHTML = `
      <p style="font-size:14px;color:var(--mid);line-height:1.8">
        1. Нажмите кнопку <b>Поделиться</b> <span style="font-size:16px">⬆️</span> внизу Safari<br>
        2. Выберите <b>На экран «Домой»</b><br>
        3. Нажмите <b>Добавить</b>
      </p>`;
  } else if (isAndroid) {
    box.innerHTML = `
      <p style="font-size:14px;color:var(--mid);line-height:1.8">
        1. Нажмите <b>⋮ Меню</b> (три точки) в браузере<br>
        2. Выберите <b>Добавить на главный экран</b><br>
        3. Нажмите <b>Добавить</b>
      </p>`;
  } else {
    box.innerHTML = `<p style="font-size:14px;color:var(--mid);line-height:1.6">Откройте сайт на телефоне в Chrome или Safari и следуйте инструкции браузера.</p>`;
  }
  document.getElementById('install-modal').classList.add('open');
}

async function doInstall() {
  if (!S.installEvt) return;
  S.installEvt.prompt();
  const { outcome } = await S.installEvt.userChoice;
  if (outcome === 'accepted') { toast('Малафо установлен!'); S.installEvt = null; }
  document.getElementById('install-modal').classList.remove('open');
}

function shareApp() {
  const url = window.location.href;
  if (navigator.share) {
    navigator.share({ title: 'Малафо', text: 'Скот Кыргызстана — покупай и продавай легко', url });
  } else {
    navigator.clipboard?.writeText(url).then(() => toast('Ссылка скопирована!'));
  }
}

// ── BOOT ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);

// Called when user taps the listing header inside messages screen
function openDetailFromMsgs() {
  if (S.curChat && S.curChat.lid) {
    const l = S.listings.find(x => x.id === S.curChat.lid);
    if (l) {
      goBack(); // go back to chat list or wherever
      openDetail(l.id);
    }
  }
}
