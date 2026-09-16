# For Appy 🤍 — a little birthday website

A static, multi-stage interactive birthday experience for Aishwarya ("Appy").
No backend, no build step, no framework — just `HTML + CSS + vanilla JS`.
Made to run anywhere, especially **GitHub Pages**.

```
/
├── index.html          all the stages (markup)
├── style.css           the whole look & feel
├── script.js           interactions + all your editable content (top of file)
├── assets/
│   ├── photos/         your photos (already added)
│   ├── music/          birthday-song.mp3 (a soft music-box tune is already here)
│   └── icons/          favicon
└── README.md
```

The 8 stages: **Entry → Funny question → Little quiz → Photo memory wall →
Things I like about you → The letter → 20 September birthday reveal → Final surprise (+ hidden Titli easter egg).**

Everything you'd want to edit lives in clearly-labelled blocks at the **top of `script.js`**
(`CONFIG`, `LETTER`, `MEMORIES`, `QUIZ_QUESTIONS`, `REASONS`, `TITLI`). You shouldn't
need to touch the machinery below the `——— below this line ———` marker.

---

## 1. Run it locally

Because it loads photos and audio, open it through a tiny local server (not just double-click),
so the browser doesn't block those files:

```bash
cd birthday-appy
python3 -m http.server 8000
# then open http://localhost:8000
```

(Any static server works — `npx serve`, VS Code Live Server, etc.)

## 2. Add / change photos

1. Drop your images into `assets/photos/`.
2. In `script.js`, edit the `MEMORIES` array — set `image`, `caption`, and optional `date`:

```js
{ image: "assets/photos/memory-01.jpg", date: "Aug 2025", caption: "your words here" },
```

Add or remove objects freely; the wall lays itself out automatically.
There are also three special photos referenced directly:
`assets/photos/surprise.jpg` (final reveal) and `assets/photos/her.jpg` (spare).

### iPhone HEIC photos
Browsers **do not** reliably show `.heic/.heif`. Convert to JPG/PNG/WebP first. Options:
- **Mac:** open in Preview → *File ▸ Export* → choose JPEG. Or in Terminal:
  ```bash
  sips -s format jpeg input.HEIC --out output.jpg
  ```
- **iPhone:** Settings ▸ Camera ▸ Formats ▸ **Most Compatible** (shoots JPG), or just AirDrop/email the photo (often converts automatically).
- **Any OS:** [cloudconvert.com](https://cloudconvert.com/heic-to-jpg) or the `heif-convert` CLI.

Keep files reasonably small (long edge ~1600px, quality ~80%) so the page loads fast.
*(The photos already in this project were converted and optimised for you.)*

## 3. Add / change music

- Replace `assets/music/birthday-song.mp3` with any `.mp3` you like (keep the same filename,
  or update the path inside the `makeAudio()` function in `script.js`).
- The track **loops** and is controlled by the ♫ button (top-right). It **never autoplays** —
  it starts only when she taps the music button or reaches the birthday screen (both are real
  user gestures, so mobile browsers allow it).
- The site works perfectly even if the music file is missing — the button just stays off.

## 4. Change her name / nickname

`script.js` → `CONFIG`:

```js
girlfriendName: "Aishwarya",
nickname:       "Appy",
```

## 5. Change birthday info

`script.js` → `CONFIG`:

```js
birthday:  "20 September",   // shown as text
birthDate: "1998-09-20",     // used to compute age — the YEAR is never shown
ageLine:   "Officially {age} — ...",  // {age} is filled in automatically
```

Age is calculated live from `birthDate`, so it's always correct and the birth year never appears.

## 6. Edit the messages

- **The letter:** `script.js` → `LETTER` (marked `PERSONAL MESSAGE — REPLACE...`). Line breaks are kept. It types out on screen with a **Skip typing** button.
- **Secret note & sign-off:** `CONFIG.secretNote` and `CONFIG.signoff`.
- **Birthday wish text:** in `index.html`, inside `#stage-birthday` (the `.wish` paragraph).

## 7. Edit quiz questions

`script.js` → `QUIZ_QUESTIONS`. `correct` is the **0-based** index of the right option:

```js
{
  question: "...",
  options: ["A", "B", "C", "D"],
  correct: 1,               // "B" is correct
  reactRight: "shown if she's right",
  reactWrong: "shown if she's wrong",
}
```

> All four questions are filled in: Q1 (bus stand), Q2 ("what do you like about me" —
> **multi-select, no right answer**), Q3 (our song, "Saiyaan Dil Mein" is correct),
> and Q4 ("a habit of mine…" — **multi-select, no right answer**).
> A question with `multi: true` lets her tick more than one option and skips the right/wrong check.
> Edit any wording to taste — nothing is left as a placeholder.

## 8. Edit "things I like about you"

`script.js` → `REASONS` — each has a `title` and a one-line `sub`. Add/remove freely;
they reveal one-by-one.

## 9. Deploy to GitHub Pages

```bash
cd birthday-appy
git init
git add .
git commit -m "birthday site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Then on GitHub: **Settings ▸ Pages ▸ Build and deployment ▸ Source = Deploy from a branch**,
pick `main` / `/ (root)`, **Save**. In ~1 minute it's live at
`https://<your-username>.github.io/<repo-name>/`.

> Tip: make the repo **private-feeling** by giving it a boring name — the URL is only shared with her. 🙂
> Photos are committed into the repo, so nothing else is needed.

---

## PERSONALIZATION CHECKLIST

```
[x] Add girlfriend's name          (CONFIG.girlfriendName)      -> done: Aishwarya
[x] Add nickname                   (CONFIG.nickname)            -> done: Appy
[x] Add our photos                 (assets/photos/ + MEMORIES)  -> done: 16 photos wired in
[x] Add birthday info              (CONFIG.birthday/birthDate)  -> done: 20 Sept
[x] Background music               (assets/music/)              -> done: music-box tune (replace if you want)
[x] Inside joke                    (TITLI)                      -> done: Titli Udi 🦋
[x] Things I like about you        (REASONS)                    -> done, tweak wording to taste
[ ] Add personal memories          (MEMORIES captions/dates)    -> captions are examples; make them yours
[ ] Write personal letter          (LETTER)                     -> a heartfelt draft is in; edit it in your words
[x] Quiz questions                 (QUIZ_QUESTIONS)             -> all 4 set; tweak wording to taste
[ ] Final surprise note            (CONFIG.secretNote)          -> edit if you want
```

---

### Notes
- **Accessibility:** semantic HTML, alt text, keyboard-navigable buttons, visible focus rings,
  and full `prefers-reduced-motion` support (animations/typing are disabled if her phone asks for it).
- **Performance:** images are lazy-loaded and pre-optimised; only two web fonts; everything else is inline CSS/JS.
- **Mobile-first:** built and tested for phones (iPhone Safari / Chrome). Every interaction works by touch.
- **Skip / re-read:** the letter can be skipped; the photo lightbox closes with ×, tap-outside, or Esc.

Made with a bit too much time and a lot of 🤍
