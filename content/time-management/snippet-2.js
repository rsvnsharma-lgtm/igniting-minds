// ─────────────────────────────────────────────────────────────────────────────
// Time Management — Snippet 2: Types of Goals
// Content for all grade groups × all bands
// ─────────────────────────────────────────────────────────────────────────────

const SNIPPET_2 = {

  pillar : 'time-management',
  index  : 2,
  title  : 'Types of Goals',
  totalSnippets: 5,

  content: {

    // ── GRADE 6-7 ────────────────────────────────────────────────────────────
    g6: {
      developing: {
        title   : 'What kinds of goals can I have?',
        subtitle: 'Discovering the difference between a wish and a real goal',
        learn: {
          card  : { heading:'A wish vs. a goal', body:'"I want to be good at cricket" is a wish. "I will practise batting for 20 minutes every evening this week" is a goal. The difference? A goal has a plan.' },
          label : 'Two types of goals',
          boxes : [
            { icon:'⚡', heading:'Short-term goal', body:'Done in days or weeks — like finishing your project before Friday, or learning 10 new English words this week.', bg:'#EEEDFE', color:'#3C3489' },
            { icon:'🚀', heading:'Long-term goal',  body:'Takes months or years — like making the school football team, or becoming great at drawing by year end.', bg:'#E1F5EE', color:'#085041' }
          ],
          tip   : { text:'Quick check: Which is "I want better marks in Maths"? Which is "I\'ll revise Chapter 2 tonight"?', bg:'#E1F5EE', color:'#085041' }
        },
        roleplay: {
          scene    : 'Best friends Aarav and Shreya are eating lunch. Aarav says he wants to "be famous someday." Shreya says she wants to make the school quiz team this term.',
          lines    : [
            { who:'Aarav',  text:'"My goal is to be famous. What\'s yours?"' },
            { who:'Shreya', text:'"I want to make the quiz team before the inter-school competition in December."' },
            { who:'Aarav',  text:'"That\'s so small! Mine is way bigger."' }
          ],
          challenge      : 'Play as Shreya. Help Aarav understand why his goal is actually a wish — and help him turn it into one real short-term and one long-term goal. Be kind, not bossy!',
          debrief        : 'Whose goal felt more achievable — and why does that matter?',
          inputPlaceholder: 'What would you say as Shreya? How would you help Aarav?'
        },
        reflect          : [
          'Name one thing you really want to get better at. Is it a wish or a goal right now?',
          'What\'s one short-term goal you could set for just this week?',
          'What\'s something you dream about achieving before you finish school?'
        ],
        confidenceLabel  : 'How confident do you feel about understanding types of goals?'
      },

      emerging: {
        title   : 'Short-term vs. long-term — connecting the dots',
        subtitle: 'Learning how small goals today build big goals tomorrow',
        learn: {
          card  : { heading:'Goals are like stepping stones', body:'Big goals don\'t happen all at once. Every long-term goal is made of many short-term goals stacked together. Miss the small steps and the big goal stays out of reach.' },
          label : 'The goal ladder',
          ladder: [
            { icon:'🏆', heading:'Dream goal (1–3 years)', body:'Make it to the state-level science olympiad',         bg:'#E1F5EE', color:'#085041' },
            { icon:'📅', heading:'Term goal (3 months)',   body:'Top 3 in the school science competition',            bg:'#FAEEDA', color:'#633806' },
            { icon:'⏰', heading:'Weekly goal (this week)',body:'Read one science article and note 3 facts',           bg:'#EEEDFE', color:'#3C3489' }
          ]
        },
        roleplay: {
          scene    : 'Kavya wants to become a YouTuber. She\'s been saying this for 6 months but has zero videos. Her friend Rohan gently challenges her.',
          lines    : [
            { who:'Kavya', text:'"My long-term goal is 10,000 subscribers by the time I\'m 15."' },
            { who:'Rohan', text:'"Okay but you\'ve said that for ages. What did you actually do towards it this month?"' },
            { who:'Kavya', text:'"I\'ve been... planning."' }
          ],
          challenge      : 'Groups of 3 — Kavya, Rohan, and a coach. The coach helps Kavya build a goal ladder: one long-term goal broken into 3 short-term steps she can start this week.',
          debrief        : 'What\'s the risk of only thinking about the big goal and ignoring the small ones?',
          inputPlaceholder: 'If you were the coach, what goal ladder would you suggest for Kavya?'
        },
        reflect          : [
          'Pick one long-term goal you have. What are 3 short-term steps that could lead to it?',
          'Have you ever dropped a goal halfway? Was it too big, or too vague?',
          'What\'s one thing you can do TODAY that connects to a bigger goal?'
        ],
        confidenceLabel  : 'How well do you understand how short-term goals connect to long-term ones?'
      },

      proficient: {
        title   : 'Goal types, tensions & trade-offs',
        subtitle: 'When short-term and long-term goals pull in different directions',
        learn: {
          card  : { heading:'Goals can compete with each other', body:'Sometimes a short-term goal (fun with friends tonight) conflicts with a long-term goal (top marks this term). Being proficient means making those trade-offs consciously.' },
          label : 'Four goal types to know',
          grid  : [
            { icon:'⚡', heading:'Immediate',  body:'Today or this week. High energy needed.',    bg:'#E1F5EE', color:'#085041' },
            { icon:'📅', heading:'Short-term', body:'Weeks to a term. Needs a plan.',             bg:'#EEEDFE', color:'#3C3489' },
            { icon:'🚀', heading:'Long-term',  body:'1–3 years. Needs consistent habits.',        bg:'#FAEEDA', color:'#633806' },
            { icon:'⭐', heading:'Life goal',  body:'Who you want to become. Guides all others.', bg:'#FAECE7', color:'#712B13' }
          ],
          tip   : { text:'Life goals don\'t have a deadline — they shape the direction of all your other goals.', bg:'#E1F5EE', color:'#085041' }
        },
        roleplay: {
          scene    : 'Nishka (Grade 7, top student) is offered a robotics club spot — but she\'s basketball team captain. She can\'t do both well.',
          lines    : [
            { who:'Nishka', text:'"Robotics feels like my future. Basketball is what I\'ve always done. My friends are on the team. I don\'t know what to choose."' }
          ],
          challenge      : 'Write out Nishka\'s four goal types — immediate, short-term, long-term, and life goals. Based on that map, what would you advise?',
          debrief        : 'Did different people come to different conclusions? What does that say about goal-setting being personal?',
          inputPlaceholder: 'Map Nishka\'s four goal types and share your advice for her...'
        },
        reflect          : [
          'Have you ever had two goals compete? What did you choose — and would you choose the same today?',
          'What is your "life goal" right now — who do you want to become? Write one sentence.',
          'Do your weekly goals actually connect to your life goal? How would you know if they didn\'t?'
        ],
        confidenceLabel  : 'How clearly can you identify different goal types in your own life?'
      }
    },

    // ── COLLEGE ──────────────────────────────────────────────────────────────
    col: {
      developing: {
        title   : 'Wait — what even counts as a goal?',
        subtitle: 'Untangling intentions, resolutions and actual goals',
        learn: {
          card  : { heading:'Most "goals" are just intentions', body:'"I want to get fit." "I\'ll save money this semester." Without specificity and a system, these are intentions that create guilt when nothing changes.' },
          label : 'The goal spectrum',
          ladder: [
            { icon:'☁️', heading:'Intention / wish',  body:'"I want to get healthier." — vague, no action, no deadline',                           bg:'#FCEBEB', color:'#791F1F' },
            { icon:'📅', heading:'Near-term goal',    body:'Submit internship applications by 30th Nov.',                                           bg:'#FAEEDA', color:'#633806' },
            { icon:'🚀', heading:'Long-term goal',    body:'Secure a full-time role in UX design within 18 months of graduation.',                  bg:'#E1F5EE', color:'#085041' }
          ]
        },
        roleplay: {
          scene    : 'Two college roommates, Dhruv and Sana, talk the night before a new semester. Both have "plans" for the year but nothing is written down.',
          lines    : [
            { who:'Dhruv', text:'"This semester I\'m going to network more, improve my CGPA, start my side project, and go to the gym."' },
            { who:'Sana',  text:'"That\'s four goals. Which one matters most to you right now?"' },
            { who:'Dhruv', text:'"All of them. They\'re all important."' }
          ],
          challenge      : 'Play as Sana. Help Dhruv distinguish between near-term and long-term goals — and identify which of his four are genuine goals vs. vague intentions.',
          debrief        : 'Why is having too many goals at once the same as having no goals?',
          inputPlaceholder: 'What would you ask Dhruv? How would you help him sort intentions from real goals?'
        },
        reflect          : [
          'Write your top 3 goals for this semester. Are they actually goals, or intentions?',
          'Which is near-term? Which is long-term? Do they connect to each other?',
          'What\'s one goal you set last year that never happened? What was really missing?'
        ],
        confidenceLabel  : 'How clearly can you now distinguish between an intention and a real goal?'
      },

      emerging: {
        title   : 'Balancing near-term and long-term goals',
        subtitle: 'When every semester shapes years ahead — how do you prioritise?',
        learn: {
          card  : { heading:'The college goal trap', body:'College compresses time. One semester of poor choices can delay long-term goals by years. But obsessing over placements means missing experiences that shape who you become.' },
          label : 'Three goal horizons',
          ladder: [
            { icon:'⚡', heading:'This semester',    body:'Complete two certifications, maintain 8.0 CGPA, build one real portfolio piece', bg:'#EEEDFE', color:'#3C3489' },
            { icon:'📅', heading:'This year',        body:'Land a meaningful internship, lead one campus project',                         bg:'#FAEEDA', color:'#633806' },
            { icon:'⭐', heading:'Post-graduation',  body:'Work in a role that challenges you in a field you genuinely care about',        bg:'#E1F5EE', color:'#085041' }
          ]
        },
        roleplay: {
          scene    : 'Ananya (3rd year) is offered a paid internship that clashes with her final-year project commitment — her team is counting on her.',
          lines    : [
            { who:'Ananya', text:'"The internship is exactly what I need for placements. But I made a promise to my project team."' },
            { who:'Friend', text:'"Near-term goals vs. long-term goals — which wins?"' }
          ],
          challenge      : 'In triads — Ananya, Friend, neutral observer. Map her three goal horizons. Debate: does near-term always serve long-term? Observer summarises the trade-off in one sentence.',
          debrief        : 'Are some goals non-negotiable? How do values fit into goal-setting?',
          inputPlaceholder: 'Map Ananya\'s three goal horizons. What is the real trade-off? What would you advise?'
        },
        reflect          : [
          'When your semester goal and post-grad goal conflict, which usually wins? Should it?',
          'Name one near-term goal clearly building toward something bigger. Name one that isn\'t — why are you doing it?',
          'What\'s one college experience no goal framework predicted — but shaped you deeply anyway?'
        ],
        confidenceLabel  : 'How well do you understand how to balance near-term and long-term goals?'
      },

      proficient: {
        title   : 'Goals, identity and the question of alignment',
        subtitle: 'Are your goals actually yours — or inherited from others\' expectations?',
        learn: {
          card  : { heading:'The goal–identity gap', body:'Many high-achieving students set goals based on what looks good on paper — not who they want to become. The result: you hit the goal and feel empty.' },
          label : 'Four goal types that matter now',
          grid  : [
            { icon:'🪞', heading:'Identity goal',    body:'Who do I want to be? (not what do I want to have)',     bg:'#E1F5EE', color:'#085041' },
            { icon:'🌍', heading:'Impact goal',      body:'What difference do I want to make beyond myself?',      bg:'#EEEDFE', color:'#3C3489' },
            { icon:'📈', heading:'Performance goal', body:'A measurable outcome. Useful — but not enough alone.',  bg:'#FAEEDA', color:'#633806' },
            { icon:'🔁', heading:'Process goal',     body:'A daily habit. The foundation everything rests on.',    bg:'#FAECE7', color:'#712B13' }
          ],
          tip   : { text:'If no one would ever know you achieved it — would you still want the goal?', bg:'#E6F1FB', color:'#0C447C' }
        },
        roleplay: {
          scene    : 'Vikram (final year) is on track for a top finance placement — what his family wants. But a startup incubator just shortlisted his social enterprise idea.',
          lines    : [
            { who:'Vikram', text:'"Every goal I\'ve set for 4 years led to this placement. But I don\'t think I actually want it."' },
            { who:'Mentor', text:'"What kind of goals have you been chasing — yours, or the ones the system rewarded?"' }
          ],
          challenge      : 'In 3s — Vikram, mentor, devil\'s advocate. Map Vikram\'s four goal types. Mentor reveals the goal–identity gap. Devil\'s advocate argues the safe path. Vikram must articulate his identity goal clearly. Vagueness is not allowed.',
          debrief        : 'How often do we confuse external metrics — grades, salary, title — with genuine personal goals?',
          inputPlaceholder: 'Map Vikram\'s four goal types. What is his identity goal? What would you say as his mentor?'
        },
        reflect          : [
          'List 3 current goals. For each — is it an identity, impact, performance, or process goal?',
          'Which goals are genuinely yours — and which did you absorb from family, peers, or social media?',
          'If you achieved every goal you currently have — would you feel like yourself? Why or why not?'
        ],
        confidenceLabel  : 'How clearly can you see the difference between your own goals and goals others set for you?'
      }
    }
  }
};
