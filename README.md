# Igniting Minds — Learning Platform
**By MHITR | Vasudhaiva Kutumbakam Software Solutions Pvt. Ltd.**

A multilingual, AI-powered experiential learning platform for the Igniting Minds SEL programme.

---

## 🚀 Quick Setup

### 1. Add your Anthropic API key
Open `config.js` and replace:
```js
API_KEY: 'YOUR_ANTHROPIC_API_KEY'
```

### 2. Deploy to Vercel
- Push this repo to GitHub
- Go to [vercel.com](https://vercel.com) → New Project → Import your repo
- No build settings needed — this is a static site
- Click Deploy ✅

### 3. Open `index.html` locally to test
Just open the file in any modern browser. No server needed for local testing.

---

## 📁 Project Structure

```
igniting-minds/
├── index.html                        ← Landing page — pillar selector
├── learn.html                        ← Main learning app
├── config.js                         ← API key, languages, pillars, guardrails
├── engine.js                         ← Core logic: translation, AI, state
├── assets/
│   ├── logo.jpeg                     ← Igniting Minds logo
│   └── style.css                     ← Shared styles (auto-loaded)
├── content/
│   ├── time-management/
│   │   ├── snippet-1.js              ← What is a Goal?
│   │   ├── snippet-2.js             ← Types of Goals ✅ (built)
│   │   ├── snippet-3.js              ← Making Goals SMART
│   │   ├── snippet-4.js              ← When Goals Get Hard
│   │   └── snippet-5.js              ← Celebrating & Reviewing Goals
│   ├── emotional-regulation/
│   ├── relationship-management/
│   ├── growth-mindset/
│   ├── structured-problem-solving/
│   └── digital-detox/
└── README.md
```

---

## ➕ Adding a New Snippet

1. Create `content/{pillar}/snippet-N.js`
2. Follow the structure of `snippet-2.js`
3. Fill in content for each `grade × band` combination
4. In `learn.html`, add the snippet to the pillar's snippet list

---

## ➕ Adding a New Pillar

1. Add an entry to `PILLARS` array in `config.js` with `available: false`
2. Create `content/{pillar-key}/` folder
3. Add snippet files
4. Set `available: true` in `config.js` when ready

---

## 🌐 Languages Supported
English · Hindi · Tamil · Telugu · Kannada · Marathi

Translation is powered by Claude AI — content is translated dynamically and cached in-session. To add a new language, add an entry to the `LANGUAGES` array in `config.js`.

---

## 🔒 AI Coach Safety
Every coaching conversation is protected by hardened guardrails in `config.js → COACH_GUARDRAILS`:
- **Topic lock** — coach only discusses the current lesson topic
- **Role lock** — cannot be reassigned or jailbroken
- **Jailbreak protection** — detects and redirects manipulation attempts
- **Content safety** — strictly age-appropriate
- **Emotional safety** — redirects distress to trusted adults

---

## 📊 SEL Score Bands
| Band | Meaning |
|------|---------|
| 🔴 Developing | Early stage — immediate support needed |
| 🟡 Emerging | Showing growth — continue structured support |
| 🟢 Proficient | Consistent skill — celebrate and stretch further |

---

## 🏫 Grade Groups
| Group | Ages | Description |
|-------|------|-------------|
| Grade 6–7 | 11–13 | Concrete, relatable, fun |
| Grade 8–9 | 13–15 | More complexity, peer dynamics |
| Grade 10–11 | 15–17 | Identity, pressure, choices |
| College | 18–22 | Career, identity, maturity |

---

*Igniting Minds is a product of MHITR, developed and owned by Vasudhaiva Kutumbakam Software Solutions Private Limited. This platform is private and confidential.*
