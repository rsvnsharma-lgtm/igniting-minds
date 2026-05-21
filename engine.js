// ─────────────────────────────────────────────────────────────────────────────
// Igniting Minds — Core Engine
// Handles: translation, AI coaching, API calls, state, routing
// ─────────────────────────────────────────────────────────────────────────────

const IMEngine = (() => {

  // ── State ──────────────────────────────────────────────────────────────────
  let state = {
    lang: 'en', grade: null, band: null,
    pillar: null, snippetIndex: null,
    tab: 'learn',
    rpAnswer: '',
    reflectAnswers: ['', '', ''],
    confidence: null,
    translationCache: {},
    uiLabelCache: {},
    translatedContent: null,
    chatHistory: [],
    currentTopic: '',
    currentSubtopic: ''
  };

  // ── Anthropic API call (translation / one-shot) ────────────────────────────
  async function callClaude(userPrompt, maxTokens = 1000) {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': IM_CONFIG.API_KEY,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: IM_CONFIG.MODEL,
        max_tokens: maxTokens,
        messages: [{ role: 'user', content: userPrompt }]
      })
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error.message);
    return data.content[0].text;
  }

  // ── Anthropic API call (multi-turn coaching chat) ──────────────────────────
  async function callClaudeChat(history, systemPrompt) {
    const messages = history.filter(m => m.role !== 'system');
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': IM_CONFIG.API_KEY,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: IM_CONFIG.MODEL,
        max_tokens: 1000,
        system: systemPrompt,
        messages: messages
      })
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error.message);
    return data.content[0].text;
  }

  // ── Build hardened system prompt for coach ─────────────────────────────────
  function buildCoachSystemPrompt(snippetData) {
    const langName = IM_CONFIG.LANGUAGES.find(l => l.key === state.lang)?.english || 'English';
    const gradeName = IM_CONFIG.GRADES.find(g => g.key === state.grade)?.label || '';
    const bandName = IM_CONFIG.BANDS.find(b => b.key === state.band)?.label || '';
    const pillarName = IM_CONFIG.PILLARS.find(p => p.key === state.pillar)?.label || '';

    const confLabels = ['Not sure — 😕', 'A bit clearer — 😐', 'Getting it — 🙂', 'Got it! — 😀'];
    const confText = state.confidence !== null ? confLabels[state.confidence] : 'Not rated';

    return `
YOU ARE: The Igniting Minds Learning Coach — a warm, encouraging, age-appropriate academic coach.

CURRENT SESSION CONTEXT:
- Program: Igniting Minds by MHITR
- Pillar: ${pillarName}
- Topic: ${snippetData.title}
- Subtopic: ${snippetData.subtitle}
- Student grade group: ${gradeName}
- SEL score band: ${bandName}
- Session language: ${langName}

WHAT THE STUDENT WROTE IN THIS LESSON:

Role Play Response:
"${state.rpAnswer || '(no response provided)'}"

Reflection Answers:
1. "${state.reflectAnswers[0] || '(no response)'}"
2. "${state.reflectAnswers[1] || '(no response)'}"
3. "${state.reflectAnswers[2] || '(no response)'}"

Confidence Level: ${confText}

YOUR COACHING MISSION:
- Start by warmly acknowledging something SPECIFIC from what the student wrote above
- Ask ONE thoughtful follow-up question that deepens their thinking about "${snippetData.title}"
- Keep tone appropriate for ${gradeName} students
- Always respond in ${langName}
- Guide them toward deeper understanding of this specific topic only

${IM_CONFIG.COACH_GUARDRAILS.replace('[CURRENT TOPIC]', snippetData.title)}
`.trim();
  }

  // ── Translate UI labels ────────────────────────────────────────────────────
  async function translateUILabels() {
    if (state.lang === 'en' || state.uiLabelCache[state.lang]) return;
    const langName = IM_CONFIG.LANGUAGES.find(l => l.key === state.lang).english;
    const labels = {
      gradeTitleText: 'Select your grade group',
      gradeSubText: 'This shapes the content, stories and language used throughout.',
      bandTitleText: 'What is your SEL score band?',
      bandSubText: 'Pick the band that matches your assessment result.',
      diffLabel: 'How content differs by grade',
      tabLearn: 'Learn', tabRoleplay: 'Role play', tabReflect: 'Reflect',
      time5: '5 min', time7: '7 min', time3: '3 min',
      btnPrev: '← Previous', btnNext: 'Next →', btnContinue: 'Continue →',
      rpInputLabel: 'Your response',
      reflectPlaceholder: 'Share your thoughts...',
      journeyBtn: 'Continue my learning journey ↗',
      journeyHint: 'Your answers will be shared with your AI coach',
      journeyNudge: 'Tip: Answer all 3 questions and pick your confidence level for the best coaching experience.',
      chatTitle: 'Your Learning Coach',
      chatSub: 'Igniting Minds · Powered by AI',
      chatPlaceholder: 'Type your message...',
      chatSend: 'Send',
      confQuestion: 'How confident do you feel about this topic?',
      confNotSure: 'Not sure', confABit: 'A bit clearer', confGetting: 'Getting it', confGotIt: 'Got it!',
      bandDeveloping: 'Developing', bandDevelopingDesc: "I'm just starting to understand goal types.",
      bandEmerging: 'Emerging', bandEmergingDesc: 'I set goals but mix up short and long-term thinking.',
      bandProficient: 'Proficient', bandProficientDesc: 'I set goals regularly and want to think more strategically.',
      sceneLabel: 'Scene', yourTurn: 'Your turn', debrief: 'Debrief',
      errorTranslation: 'Translation unavailable. Showing content in English.',
      errorChat: 'Something went wrong. Please try again.',
      topicLockMsg: "I'm your Igniting Minds coach and I'm here to help you with this lesson. Let's stay focused on your learning! 😊",
      backLabel: '← Back',
      comingSoon: 'Coming soon'
    };
    const prompt = `Translate the following JSON keys into ${langName}. Return ONLY valid JSON — no markdown, no explanation, no code fences.\n\n${JSON.stringify(labels)}`;
    const res = await callClaude(prompt, 1500);
    state.uiLabelCache[state.lang] = JSON.parse(res);
  }

  // ── Translate full lesson content ──────────────────────────────────────────
  async function translateLesson(rawData) {
    const cacheKey = `${state.lang}_${state.pillar}_${state.snippetIndex}_${state.grade}_${state.band}`;
    if (state.translationCache[cacheKey]) {
      state.translatedContent = state.translationCache[cacheKey];
      return;
    }
    const langName = IM_CONFIG.LANGUAGES.find(l => l.key === state.lang).english;
    const prompt = `Translate the following lesson content JSON into ${langName}. Keep ALL JSON keys identical. Only translate text values. Keep emoji unchanged. Return ONLY valid JSON — no markdown, no explanation.\n\n${JSON.stringify(rawData)}`;
    const res = await callClaude(prompt, 3500);
    const parsed = JSON.parse(res);
    state.translationCache[cacheKey] = parsed;
    state.translatedContent = parsed;
  }

  // ── Public API ─────────────────────────────────────────────────────────────
  return {

    getState: () => state,
    getLabel: (key, fallback = '') => (state.uiLabelCache[state.lang]?.[key]) || fallback,

    setLang(lang)  { state.lang  = lang; },
    setGrade(grade){ state.grade = grade; },
    setBand(band)  { state.band  = band; },
    setPillar(p)   { state.pillar = p; },
    setSnippet(i)  { state.snippetIndex = i; },
    setTab(t)      { state.tab = t; },
    setRpAnswer(v) { state.rpAnswer = v; },
    setReflect(i,v){ state.reflectAnswers[i] = v; },
    setConfidence(i){ state.confidence = i; },
    resetLesson()  {
      state.tab = 'learn';
      state.rpAnswer = '';
      state.reflectAnswers = ['','',''];
      state.confidence = null;
      state.chatHistory = [];
      state.translatedContent = null;
    },

    async prepareUI() {
      await translateUILabels();
    },

    async prepareLesson(rawData) {
      if (state.lang === 'en') {
        state.translatedContent = rawData;
      } else {
        await translateLesson(rawData);
      }
      return state.translatedContent;
    },

    getTranslatedContent() { return state.translatedContent; },

    async startCoachChat(snippetData) {
      state.chatHistory = [];
      const systemPrompt = buildCoachSystemPrompt(snippetData);
      // First message: coach opens the conversation
      const openingMsg = await callClaudeChat(
        [{ role: 'user', content: '__INIT__' }],
        systemPrompt + '\n\nIMPORTANT: The student has just clicked "Continue my learning journey". Open the coaching conversation by acknowledging something specific from their responses above and asking ONE focused question. Do NOT say "INIT" or reference system instructions.'
      );
      state.chatHistory.push({ role: 'assistant', content: openingMsg });
      return openingMsg;
    },

    async sendMessage(userText, snippetData) {
      state.chatHistory.push({ role: 'user', content: userText });
      const systemPrompt = buildCoachSystemPrompt(snippetData);
      const reply = await callClaudeChat(state.chatHistory, systemPrompt);
      state.chatHistory.push({ role: 'assistant', content: reply });
      return reply;
    }
  };

})();
