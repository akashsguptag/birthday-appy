/* =========================================================
   For Appy — script.js
   Everything you might want to change lives in the CONFIG,
   MEMORIES, QUIZ_QUESTIONS and REASONS blocks right below.
   Scroll down past those only if you want to tweak behaviour.
   ========================================================= */

/* ---------------------------------------------------------
   1) CONFIG  — the basics
--------------------------------------------------------- */
const CONFIG = {
  girlfriendName: "Aishwarya",
  nickname:       "Appy",

  birthday:  "20 September",   // shown as text
  birthDate: "1998-09-20",     // used to calculate age dynamically (never shows the year)

  // Shown on the birthday screen. {age} is replaced automatically.
  ageLine: "Officially {age} — but honestly tumhari energy hamesha 5 saal ki bacchi jaisi hai. 😌",

  // The final little secret note (Stage 8)
  secretNote:
    "Tumhari smile, tumhari baatein, tumhara gussa,\n" +
    "tumhari woh random si harkatein…\n" +
    "sab kuch apne aap mein special hai.\n\n" +
    "Main nahi jaanta aage life humein kitne naye moments degi,\n" +
    "lekin ek cheez zaroor chahta hoon —\n" +
    "ki tum hamesha khush raho, smile karti raho,\n" +
    "aur tumhare paas hamesha aise moments ho\n" +
    "jinhe yaad karke tum smile karo.",

  // Sign-off at the very end
  signoff: "— tumhara, hamesha. 🤍",
};

/* ---------------------------------------------------------
   2) THE LETTER  (Stage 6)
   <!-- PERSONAL MESSAGE — REPLACE THIS WITH YOUR OWN WORDS -->
   Write it exactly how you'd say it. Line breaks are kept.
   This one already uses your words at the end — edit freely.
--------------------------------------------------------- */
const LETTER = `Main hamesha sab kuch theek se keh nahi paata.

Kabhi mazaak mein,
kabhi random baaton mein,
aur kabhi bina bole hi.

But I hope you know…
tum mere liye genuinely special ho.

Tumhare saath bitaye hue normal se moments
us waqt shayad normal hi lagte hain…
but baad mein, wahi moments main sabse zyada yaad karta hoon.

I love you so much —
thank you for being in my life. 🤍`;

/* ---------------------------------------------------------
   3) MEMORIES  (Stage 4 — the photo wall)
   Add/remove objects freely. Drop new photos in
   assets/photos/ and point "image" at them.
   Captions are just examples — make them yours. 🙂
--------------------------------------------------------- */
const MEMORIES = [
  { image: "assets/photos/memory-01.jpg", date: "", caption: "Ye wali… yahan dono ki smile bilkul genuine thi." },
  { image: "assets/photos/memory-02.jpg", date: "", caption: "Hum dono, ek table, aur bahut saari baatein. Best combo. 😎" },
  { image: "assets/photos/memory-03.jpg", date: "", caption: "Chhoti si cheez — par haath pakadna hamesha special lagta hai." },
  { image: "assets/photos/memory-04.jpg", date: "", caption: "First photo with this Korean heart. 🫰" },
  { image: "assets/photos/memory-05.jpg", date: "", caption: "Coffee thandi ho gayi thi, baatein khatam nahi hui." },
  { image: "assets/photos/memory-06.jpg", date: "", caption: "First time you sit with me. :)" },
  { image: "assets/photos/memory-07.jpg", date: "", caption: "My heroine. 🎬" },
  { image: "assets/photos/memory-08.jpg", date: "", caption: "Apni wali jagah. 🤍" },
  { image: "assets/photos/memory-09.jpg", date: "", caption: "Is moment ko caption ki zaroorat hi nahi." },
  { image: "assets/photos/memory-10.jpg", date: "", caption: "Roz ka sunset, par is din thoda zyada acha laga." },
];

/* ---------------------------------------------------------
   4) QUIZ  (Stage 3)
   "correct" is the index (0-based) of the right option.
   A question with `multi: true` has NO correct answer — she can tick
   more than one option (used for Q2 and Q4).
   All four are filled in: Q1 (bus stand), Q2 (multi-select),
   Q3 (our song), Q4 (multi-select). Edit any wording to taste.
--------------------------------------------------------- */
const QUIZ_QUESTIONS = [
  {
    question: "Sabse pehli baar hum kahan mile the?",
    options: ["College mein 🎓", "Bus stand pe 🚌", "Kisi party mein 🎉", "Instagram pe 📱"],
    correct: 1,
    reactRight: "Bus stand. Wahin se sab shuru hua tha. 🤍",
    reactWrong: "Arre nahi… soch, wahan jahan pehli baar dekha tha tumhe.",
  },
  {
    // multi-select opinion question — there is NO right answer, she just picks.
    question: "Aur batao — aapko mujhpe kya acha lagta hai?",
    multi: true,
    options: ["Meri smile 😄", "Main tumhari sunta hoon 🎧", "Mera caring side 🤗", "Sab kuch 🥰"],
    hint: "Ek se zyada bhi chun sakti ho. 🙂",
    reactPick: "Noted. Screenshot le liya. 😌",
  },
  {
    question: "Humara official 'dedicated' song kaunsa hai?",
    options: ["Tum Hi Ho", "Saiyaan Dil Mein", "Raabta", "Kaise Hua"],
    correct: 1,
    reactRight: "Saiyaan dil mein aana re… 🎶 bilkul sahi!",
    reactWrong: "Nahi yaar… 'Saiyaan Dil Mein'. Wahi apna wala. 🎶",
  },
  {
    // multi-select opinion question — NO right answer, she just picks.
    question: "Meri ek aadat jo tumhe irritate bhi karti hai aur pasand bhi?",
    multi: true,
    options: ["Har baat pe over-thinking 🤔", "Zyada hi care karna 🥺", "Har cheez pe joke maarna 😄", "Late reply, par lamba reply 📱"],
    hint: "Ek se zyada bhi chalega. 😌",
    reactPick: "Haan haan, sab pata hai mujhe. 😅",
  },
];

/* ---------------------------------------------------------
   5) REASONS  (Stage 5 — things I like about you)
   These already use what you told me. Edit the "sub" lines
   to sound even more like you.
--------------------------------------------------------- */
const REASONS = [
  { title: "Tumhari kindness",        sub: "Bina soche doosron ke liye jo tum karti ho — wo sabse pehle notice hota hai." },
  { title: "Tumhari softness",        sub: "Gussa bhi aaye toh 2 minute se zyada tik nahi paata. 🙂" },
  { title: "Har decision mein support","sub": "Sahi ho ya galat — tum hamesha saath khadi rehti ho. Wo bahut matlab rakhta hai." },
  { title: "Tumhara behaviour & samajh","sub": "Baat ko samajhne ka tumhara tareeka… zyada logon mein nahi hota." },
  { title: "Tumhari childishness",    sub: "Sabse cute part. Umeed hai ye kabhi na badle. 🤍" },
  { title: "Aur honestly… bas tum",   sub: "Tum jaisi ho — waise hi. Isse better kuch nahi." },
];

/* ---------------------------------------------------------
   6) THE INSIDE JOKE  (hidden easter egg, Stage 8)
   Your "Titli Udi" nonsense classic, kept as-is. 🦋
--------------------------------------------------------- */
const TITLI = `Titli udi, ud na saki,
bus mein chadhi — sit na mili,
sit na mili to rone lagi…
driver ne bola "aaja mere paas",
Titli boli "hat badmaash!" 😂

(train wali, plane wali… poori kahani tumhe pata hi hai 🦋)`;

/* =========================================================
   ——— below this line is the machinery ———
   You usually don't need to edit anything past here.
========================================================= */

/* ----- stage order ----- */
const STAGES = [
  "stage-entry", "stage-funny", "stage-quiz", "stage-wall",
  "stage-reasons", "stage-letter", "stage-birthday", "stage-surprise",
];
let current = 0;

const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------------------------------------------------------
   Stage navigation
--------------------------------------------------------- */
function showStage(index) {
  const id = STAGES[index];
  STAGES.forEach((s) => {
    const el = document.getElementById(s);
    if (!el) return;
    const active = s === id;
    el.classList.toggle("is-active", active);
    el.hidden = !active;
  });
  current = index;
  window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  updateProgress();
  onEnterStage(id);
}
function nextStage() { if (current < STAGES.length - 1) showStage(current + 1); }
function previousStage() { if (current > 0) showStage(current - 1); }

// any element with [data-next] advances to the next stage
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-next]");
  if (t) { blip(); nextStage(); }
});

/* run the right setup when a stage first appears */
const started = {};
function onEnterStage(id) {
  if (id === "stage-entry")    runReveal(".stage--entry .reveal");
  if (id === "stage-birthday") enterBirthday();
  if (started[id]) return;
  started[id] = true;
  if (id === "stage-quiz")     startQuiz();
  if (id === "stage-wall")     buildWall();
  if (id === "stage-reasons")  showReasons();
  if (id === "stage-letter")   showFinalMessage();
}

/* staggered reveal helper */
function runReveal(sel) {
  $$(sel).forEach((el) => {
    const d = parseInt(el.dataset.d || "0", 10) * 140;
    setTimeout(() => el.classList.add("in"), prefersReduced ? 0 : d);
  });
}

/* progress dots */
function updateProgress() {
  const nav = $("#progress");
  if (current === 0) { nav.hidden = true; return; }
  nav.hidden = false;
  nav.innerHTML = STAGES.map((_, i) => {
    const cls = i === current ? "dot current" : i < current ? "dot done" : "dot";
    return `<span class="${cls}"></span>`;
  }).join("");
}

/* ---------------------------------------------------------
   STAGE 2 — funny interaction (runaway button)
--------------------------------------------------------- */
function initFunny() {
  const wrong = $("#funnyWrong");
  const right = $("#funnyRight");
  const quip  = $("#funnyQuip");
  const cont  = $("#funnyContinue");
  const lines = [
    "Nice try. 😂",
    "Ye option allowed nahi hai.",
    "Tumhe pata hai correct answer kya hai.",
    "Madam, system tumhare against nahi… bas sach ke favour mein hai. 😂",
    "Chhod do na, jeet nahi paoge. 🙂",
  ];
  let i = 0;
  const dodge = () => {
    quip.textContent = lines[i % lines.length]; i++;
    const dx = (Math.random() * 2 - 1) * 120;
    const dy = (Math.random() * 2 - 1) * 40;
    wrong.style.transform = `translate(${dx}px, ${dy}px) rotate(${dx / 20}deg)`;
    right.animate(
      [{ transform: "scale(1)" }, { transform: "scale(1.08)" }, { transform: "scale(1)" }],
      { duration: 400, easing: "ease" }
    );
  };
  wrong.addEventListener("mouseenter", dodge);
  wrong.addEventListener("click", (e) => { e.preventDefault(); dodge(); });
  right.addEventListener("click", () => {
    blip();
    quip.textContent = "Correct answer. Har baar. 🤍";
    right.animate(
      [{ transform: "scale(1)" }, { transform: "scale(1.15)" }, { transform: "scale(1)" }],
      { duration: 500, easing: "ease" }
    );
    cont.hidden = false;
  });
}

/* ---------------------------------------------------------
   STAGE 3 — quiz
--------------------------------------------------------- */
let qi = 0;
function startQuiz() {
  qi = 0;
  renderQuestion();
  $("#quizNext").addEventListener("click", () => {
    blip();
    qi++;
    if (qi < QUIZ_QUESTIONS.length) renderQuestion();
    else nextStage();
  });
}
function renderQuestion() {
  const q = QUIZ_QUESTIONS[qi];
  $("#quizCount").textContent = `${qi + 1} / ${QUIZ_QUESTIONS.length}`;
  $("#quizQuestion").textContent = q.question;
  $("#quizReact").textContent = q.multi ? (q.hint || "") : "";
  const next = $("#quizNext");
  next.hidden = true;
  next.textContent = qi === QUIZ_QUESTIONS.length - 1 ? "Done →" : "Next →";

  const box = $("#quizOptions");
  box.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const b = document.createElement("button");
    b.className = "opt";
    b.type = "button";
    b.textContent = opt;
    if (q.multi) {
      b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", () => toggleMulti(b, q, next));
    } else {
      b.addEventListener("click", () => answer(idx, q, box, next));
    }
    box.appendChild(b);
  });
}
/* multi-select question: toggle picks, no right/wrong, advance once ≥1 chosen */
function toggleMulti(btn, q, next) {
  const on = btn.classList.toggle("selected");
  btn.setAttribute("aria-pressed", String(on));
  blip();
  const anySel = $$("#quizOptions .opt.selected").length > 0;
  next.hidden = !anySel;
  $("#quizReact").textContent = anySel ? (q.reactPick || "Aww. Ye maine note kar liya. 🤍") : (q.hint || "");
}
function answer(idx, q, box, next) {
  const btns = $$(".opt", box);
  btns.forEach((b) => (b.disabled = true));
  const react = $("#quizReact");
  if (idx === q.correct) {
    btns[idx].classList.add("correct");
    react.textContent = q.reactRight;
    blip();
  } else {
    btns[idx].classList.add("wrong");
    btns[q.correct].classList.add("correct");
    react.textContent = q.reactWrong;
  }
  next.hidden = false;
}

/* ---------------------------------------------------------
   STAGE 4 — photo wall + lightbox
--------------------------------------------------------- */
function buildWall() {
  const wall = $("#wall");
  wall.innerHTML = "";
  MEMORIES.forEach((m, i) => {
    const rot = (i % 2 === 0 ? -1 : 1) * (1 + (i % 3));
    const fig = document.createElement("button");
    fig.className = "polaroid";
    fig.type = "button";
    fig.style.setProperty("--rot", `${rot}deg`);
    fig.setAttribute("aria-label", `Open memory: ${m.caption}`);
    fig.innerHTML = `
      <img src="${m.image}" alt="${escapeHtml(m.caption)}" loading="lazy" decoding="async" />
      <figcaption>${escapeHtml(m.caption)}</figcaption>`;
    fig.addEventListener("click", () => openMemory(m));
    wall.appendChild(fig);
  });
}
function openMemory(m) {
  blip();
  let lb = $("#lightbox");
  if (!lb) {
    lb = document.createElement("div");
    lb.id = "lightbox";
    lb.className = "lightbox";
    lb.innerHTML = `
      <button class="lightbox-close" type="button" aria-label="Close">×</button>
      <div class="lightbox-card" role="dialog" aria-modal="true">
        <img alt="" />
        <div class="lightbox-meta">
          <p class="lightbox-date"></p>
          <p class="lightbox-note"></p>
        </div>
      </div>`;
    document.body.appendChild(lb);
    lb.addEventListener("click", (e) => {
      if (e.target === lb || e.target.closest(".lightbox-close")) closeLightbox(lb);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lb.classList.contains("open")) closeLightbox(lb);
    });
  }
  $(".lightbox-card img", lb).src = m.image;
  $(".lightbox-card img", lb).alt = m.caption;
  const dateEl = $(".lightbox-date", lb);
  dateEl.textContent = m.date || "";
  dateEl.style.display = m.date ? "block" : "none";
  $(".lightbox-note", lb).textContent = m.caption;
  lb.classList.add("open");
}
function closeLightbox(lb) { lb.classList.remove("open"); }
function showPhoto(i) { if (MEMORIES[i]) openMemory(MEMORIES[i]); } // helper

/* ---------------------------------------------------------
   STAGE 5 — reasons (reveal one by one)
--------------------------------------------------------- */
function showReasons() {
  const box = $("#reasons");
  box.innerHTML = "";
  REASONS.forEach((r, i) => {
    const el = document.createElement("div");
    el.className = "reason";
    el.innerHTML = `
      <span class="reason-num">${String(i + 1).padStart(2, "0")}</span>
      <span class="reason-title">${escapeHtml(r.title)}</span>
      <span class="reason-sub">${escapeHtml(r.sub)}</span>`;
    box.appendChild(el);
    setTimeout(() => el.classList.add("in"), prefersReduced ? 0 : 260 * i);
  });
  const total = prefersReduced ? 0 : 260 * REASONS.length + 300;
  setTimeout(() => { $("#reasonsNext").hidden = false; }, total);
}

/* ---------------------------------------------------------
   STAGE 6 — the letter (typing effect + skip)
--------------------------------------------------------- */
let typingTimer = null;
function showFinalMessage() {
  const el    = $("#letterText");
  const caret = $("#letterCaret");
  const skip  = $("#letterSkip");
  const next  = $("#letterNext");
  next.textContent = "Ek aakhri surprise… →";

  const finish = () => {
    clearInterval(typingTimer);
    el.textContent = LETTER;
    caret.classList.add("done");
    skip.hidden = true;
    next.hidden = false;
  };

  if (prefersReduced) { finish(); return; }

  let i = 0;
  el.textContent = "";
  typingTimer = setInterval(() => {
    el.textContent = LETTER.slice(0, i);
    i++;
    if (i > LETTER.length) finish();
  }, 26); // typing speed (ms per character)

  skip.addEventListener("click", finish, { once: true });
}

/* ---------------------------------------------------------
   STAGE 7 — birthday reveal
--------------------------------------------------------- */
function calcAge(iso) {
  const b = new Date(iso), n = new Date();
  let a = n.getFullYear() - b.getFullYear();
  const m = n.getMonth() - b.getMonth();
  if (m < 0 || (m === 0 && n.getDate() < b.getDate())) a--;
  return a;
}
let birthdayDone = false;
function enterBirthday() {
  runReveal(".stage--birthday .reveal-b");
  if (birthdayDone) return;
  birthdayDone = true;
  $("#hbdName").textContent = CONFIG.nickname || CONFIG.girlfriendName;
  $("#hbdAge").textContent = CONFIG.ageLine.replace("{age}", calcAge(CONFIG.birthDate));
  // start music here (gesture already happened via the button click)
  ensureMusic(true);
}

/* ---------------------------------------------------------
   STAGE 8 — final surprise
--------------------------------------------------------- */
function initSurprise() {
  $("#surpriseBtn").addEventListener("click", () => {
    blip();
    $("#surpriseTease").hidden = true;
    const rev = $("#surpriseReveal");
    rev.hidden = false;
    $("#secretNote").textContent = CONFIG.secretNote;
    $("#titliJoke").textContent = TITLI;
    $("#signoff").textContent = CONFIG.signoff;
    dropConfetti();
  });
}

/* gentle confetti */
function dropConfetti() {
  if (prefersReduced) return;
  const wrap = $("#confetti");
  const colors = ["#efc9d0", "#fbe4d6", "#e2dcf0", "#c9a36a", "#f7e3e6"];
  for (let i = 0; i < 60; i++) {
    const s = document.createElement("span");
    s.style.left = Math.random() * 100 + "vw";
    s.style.background = colors[i % colors.length];
    s.style.animationDuration = 3 + Math.random() * 3 + "s";
    s.style.animationDelay = Math.random() * 2 + "s";
    s.style.opacity = 0.6 + Math.random() * 0.4;
    if (i % 3 === 0) s.style.borderRadius = "50%";
    wrap.appendChild(s);
    setTimeout(() => s.remove(), 8000);
  }
}

/* ---------------------------------------------------------
   MUSIC — loop + toggle (never autoplays without a gesture)
--------------------------------------------------------- */
let audio = null;
function makeAudio() {
  if (audio) return audio;
  audio = new Audio("assets/music/birthday-song.mp3");
  audio.loop = true;
  audio.volume = 0.45;
  audio.addEventListener("error", () => { /* no file? button just stays off */ });
  return audio;
}
function setMusicUI(playing) {
  const b = $("#musicBtn");
  b.classList.toggle("playing", playing);
  b.setAttribute("aria-pressed", String(playing));
  b.setAttribute("aria-label", playing ? "Pause background music" : "Play background music");
}
function toggleMusic() {
  const a = makeAudio();
  if (a.paused) { a.play().then(() => setMusicUI(true)).catch(() => setMusicUI(false)); }
  else { a.pause(); setMusicUI(false); }
}
function ensureMusic(on) {
  const a = makeAudio();
  if (on && a.paused) a.play().then(() => setMusicUI(true)).catch(() => {});
}

/* ---------------------------------------------------------
   tiny UI click sound (uses WebAudio, no file needed)
--------------------------------------------------------- */
let actx = null;
function blip() {
  if (prefersReduced) return;
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const o = actx.createOscillator(), g = actx.createGain();
    o.type = "sine"; o.frequency.value = 660;
    g.gain.value = 0.04;
    o.connect(g); g.connect(actx.destination);
    o.start();
    g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + 0.18);
    o.stop(actx.currentTime + 0.2);
  } catch (e) { /* ignore */ }
}

/* ---------------------------------------------------------
   petals
--------------------------------------------------------- */
function initPetals() {
  if (prefersReduced) return;
  const wrap = $("#petals");
  for (let i = 0; i < 12; i++) {
    const p = document.createElement("span");
    p.className = "petal";
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = 10 + Math.random() * 12 + "s";
    p.style.animationDelay = -Math.random() * 20 + "s";
    p.style.transform = `scale(${0.6 + Math.random()})`;
    p.style.opacity = 0.3 + Math.random() * 0.35;
    wrap.appendChild(p);
  }
}

/* small helper */
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ---------------------------------------------------------
   boot
--------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  document.title = `For ${CONFIG.nickname || CONFIG.girlfriendName} 🤍`;
  $("#musicBtn").addEventListener("click", toggleMusic);
  initPetals();
  initFunny();
  initSurprise();
  updateProgress();
  runReveal(".stage--entry .reveal");
});
