const questions = [
  // Extroversion vs. Introversion
  {
    id: 1,
    options: [
      { text: "I’m hyped when I’m around people", color: "#FF6F61" },
      { text: "I need to recharge my social battery after a hang out", color: "#6EC1E4" },
    ],
    bubbles: [
      { value: -2, color: "#FF6F61", size: "40px" },
      { value: -1, color: "#FF6F61", size: "30px" },
      { value: 0, color: "#000000", size: "20px" },
      { value: 1, color: "#6EC1E4", size: "30px" },
      { value: 2, color: "#6EC1E4", size: "40px" },
    ],
  },
  {
    id: 2,
    options: [
      { text: "I’m the first to slide into someone’s DMs", color: "#FF6F61" },
      { text: "I wait for people to hit me up first", color: "#6EC1E4" },
    ],
    bubbles: [
      { value: -2, color: "#FF6F61", size: "40px" },
      { value: -1, color: "#FF6F61", size: "30px" },
      { value: 0, color: "#000000", size: "20px" },
      { value: 1, color: "#6EC1E4", size: "30px" },
      { value: 2, color: "#6EC1E4", size: "40px" },
    ],
  },
  {
    id: 3,
    options: [
      { text: "I feel alive at parties", color: "#FF6F61" },
      { text: "I’m happiest in my cozy room", color: "#6EC1E4" },
    ],
    bubbles: [
      { value: -2, color: "#FF6F61", size: "40px" },
      { value: -1, color: "#FF6F61", size: "30px" },
      { value: 0, color: "#000000", size: "20px" },
      { value: 1, color: "#6EC1E4", size: "30px" },
      { value: 2, color: "#6EC1E4", size: "40px" },
    ],
  },
  {
    id: 4,
    options: [
      { text: "I overshare on IG stories", color: "#FF6F61" },
      { text: "I’m more of a close-friends-only type", color: "#6EC1E4" },
    ],
    bubbles: [
      { value: -2, color: "#FF6F61", size: "40px" },
      { value: -1, color: "#FF6F61", size: "30px" },
      { value: 0, color: "#000000", size: "20px" },
      { value: 1, color: "#6EC1E4", size: "30px" },
      { value: 2, color: "#6EC1E4", size: "40px" },
    ],
  },

  // Openness
  {
    id: 5,
    options: [
      { text: "I’m down for whatever, YOLO", color: "#8BC34A" },
      { text: "I’d rather stick to the plan", color: "#AB47BC" },
    ],
    bubbles: [
      { value: -2, color: "#FF6F61", size: "40px" },
      { value: -1, color: "#FF6F61", size: "30px" },
      { value: 0, color: "#000000", size: "20px" },
      { value: 1, color: "#6EC1E4", size: "30px" },
      { value: 2, color: "#6EC1E4", size: "40px" },
    ],
  },
  {
    id: 6,
    options: [
      { text: "Minimalism? Not my vibe", color: "#8BC34A" },
      { text: "I’m all about layers, aesthetics, and deep meanings", color: "#AB47BC" },
    ],
    bubbles: [
      { value: -2, color: "#FF6F61", size: "40px" },
      { value: -1, color: "#FF6F61", size: "30px" },
      { value: 0, color: "#000000", size: "20px" },
      { value: 1, color: "#6EC1E4", size: "30px" },
      { value: 2, color: "#6EC1E4", size: "40px" },
    ],
  },
  {
    id: 7,
    options: [
      { text: "I’m obsessed with trying random TikTok trends", color: "#8BC34A" },
      { text: "I like sticking to what I know won’t flop", color: "#AB47BC" },
    ],
    bubbles: [
      { value: -2, color: "#FF6F61", size: "40px" },
      { value: -1, color: "#FF6F61", size: "30px" },
      { value: 0, color: "#000000", size: "20px" },
      { value: 1, color: "#6EC1E4", size: "30px" },
      { value: 2, color: "#6EC1E4", size: "40px" },
    ],
  },
  {
    id: 8,
    options: [
      { text: "Routines are overrated", color: "#8BC34A" },
      { text: "Routines are my sanity", color: "#AB47BC" },
    ],
    bubbles: [
      { value: -2, color: "#FF6F61", size: "40px" },
      { value: -1, color: "#FF6F61", size: "30px" },
      { value: 0, color: "#000000", size: "20px" },
      { value: 1, color: "#6EC1E4", size: "30px" },
      { value: 2, color: "#6EC1E4", size: "40px" },
    ],
  },

  // Thinking
  {
    id: 9,
    options: [
      { text: "My gut knows best (always)", color: "#FF6F61" },
      { text: "If it’s not logical, it’s not happening", color: "#6EC1E4" },
    ],
    bubbles: [
      { value: -2, color: "#FF6F61", size: "40px" },
      { value: -1, color: "#FF6F61", size: "30px" },
      { value: 0, color: "#000000", size: "20px" },
      { value: 1, color: "#6EC1E4", size: "30px" },
      { value: 2, color: "#6EC1E4", size: "40px" },
    ],
  },
  {
    id: 10,
    options: [
      { text: "I overanalyze, and that’s my strength", color: "#FF6F61" },
      { text: "I’d rather keep it simple and think with my heart", color: "#6EC1E4" },
    ],
    bubbles: [
      { value: -2, color: "#FF6F61", size: "40px" },
      { value: -1, color: "#FF6F61", size: "30px" },
      { value: 0, color: "#000000", size: "20px" },
      { value: 1, color: "#6EC1E4", size: "30px" },
      { value: 2, color: "#6EC1E4", size: "40px" },
    ],
  },
  {
    id: 11,
    options: [
      { text: "I’d ace a murder mystery show with my detective skills", color: "#FF6F61" },
      { text: "I’d solve the mystery by reading everyone’s vibes", color: "#6EC1E4" },
    ],
    bubbles: [
      { value: -2, color: "#FF6F61", size: "40px" },
      { value: -1, color: "#FF6F61", size: "30px" },
      { value: 0, color: "#000000", size: "20px" },
      { value: 1, color: "#6EC1E4", size: "30px" },
      { value: 2, color: "#6EC1E4", size: "40px" },
    ],
  },

  // Feeling
  {
    id: 12,
    options: [
      { text: "I’m the person crying during a Pixar movie", color: "#8BC34A" },
      { text: "I hold it together, even when it’s sad", color: "#AB47BC" },
    ],
    bubbles: [
      { value: -2, color: "#FF6F61", size: "40px" },
      { value: -1, color: "#FF6F61", size: "30px" },
      { value: 0, color: "#000000", size: "20px" },
      { value: 1, color: "#6EC1E4", size: "30px" },
      { value: 2, color: "#6EC1E4", size: "40px" },
    ],
  },
  {
    id: 13,
    options: [
      { text: "I ugly cry over cute videos on my FYP", color: "#8BC34A" },
      { text: "It takes A LOT to get me in my feels", color: "#AB47BC" },
    ],
    bubbles: [
      { value: -2, color: "#FF6F61", size: "40px" },
      { value: -1, color: "#FF6F61", size: "30px" },
      { value: 0, color: "#000000", size: "20px" },
      { value: 1, color: "#6EC1E4", size: "30px" },
      { value: 2, color: "#6EC1E4", size: "40px" },
    ],
  },
  {
    id: 14,
    options: [
      { text: "I’d cancel plans to comfort a friend", color: "#8BC34A" },
      { text: "I’d focus on what’s fair and keep it practical", color: "#AB47BC" },
    ],
    bubbles: [
      { value: -2, color: "#FF6F61", size: "40px" },
      { value: -1, color: "#FF6F61", size: "30px" },
      { value: 0, color: "#000000", size: "20px" },
      { value: 1, color: "#6EC1E4", size: "30px" },
      { value: 2, color: "#6EC1E4", size: "40px" },
    ],
  },

  // Sensing
  {
    id: 15,
    options: [
      { text: "Aesthetic over everything—my vibe has to be immaculate", color: "#FF6F61" },
      { text: "I’m all about the function, not the fluff", color: "#6EC1E4" },
    ],
    bubbles: [
      { value: -2, color: "#FF6F61", size: "40px" },
      { value: -1, color: "#FF6F61", size: "30px" },
      { value: 0, color: "#000000", size: "20px" },
      { value: 1, color: "#6EC1E4", size: "30px" },
      { value: 2, color: "#6EC1E4", size: "40px" },
    ],
  },
  {
    id: 16,
    options: [
      { text: "I can spot the tiniest detail in a messy room", color: "#FF6F61" },
      { text: "I’m more of a ‘big picture’ kinda person", color: "#6EC1E4" },
    ],
    bubbles: [
      { value: -2, color: "#FF6F61", size: "40px" },
      { value: -1, color: "#FF6F61", size: "30px" },
      { value: 0, color: "#000000", size: "20px" },
      { value: 1, color: "#6EC1E4", size: "30px" },
      { value: 2, color: "#6EC1E4", size: "40px" },
    ],
  },
  {
    id: 17,
    options: [
      { text: "Spontaneity keeps life exciting", color: "#FF6F61" },
      { text: "A solid plan is the blueprint for success", color: "#6EC1E4" },
    ],
    bubbles: [
      { value: -2, color: "#FF6F61", size: "40px" },
      { value: -1, color: "#FF6F61", size: "30px" },
      { value: 0, color: "#000000", size: "20px" },
      { value: 1, color: "#6EC1E4", size: "30px" },
      { value: 2, color: "#6EC1E4", size: "40px" },
    ],
  },

  // Intuition
  {
    id: 18,
    options: [
      { text: "My brain is a constant fanfic generator", color: "#8BC34A" },
      { text: "I stay focused on what’s happening IRL", color: "#AB47BC" },
    ],
    bubbles: [
      { value: -2, color: "#FF6F61", size: "40px" },
      { value: -1, color: "#FF6F61", size: "30px" },
      { value: 0, color: "#000000", size: "20px" },
      { value: 1, color: "#6EC1E4", size: "30px" },
      { value: 2, color: "#6EC1E4", size: "40px" },
    ],
  },
  {
    id: 19,
    options: [
      { text: "Debating wild ‘what if’ scenarios is my jam", color: "#8BC34A" },
      { text: "I’m here for real-life tea and heartfelt convos", color: "#AB47BC" },
    ],
    bubbles: [
      { value: -2, color: "#FF6F61", size: "40px" },
      { value: -1, color: "#FF6F61", size: "30px" },
      { value: 0, color: "#000000", size: "20px" },
      { value: 1, color: "#6EC1E4", size: "30px" },
      { value: 2, color: "#6EC1E4", size: "40px" },
    ],
  },
  {
    id: 20,
    options: [
      { text: "I trust my gut about the future", color: "#8BC34A" },
      { text: "Show me the receipts before I believe anything", color: "#AB47BC" },
    ],
    bubbles: [
      { value: -2, color: "#FF6F61", size: "40px" },
      { value: -1, color: "#FF6F61", size: "30px" },
      { value: 0, color: "#000000", size: "20px" },
      { value: 1, color: "#6EC1E4", size: "30px" },
      { value: 2, color: "#6EC1E4", size: "40px" },
    ],
  },

  // Conscientiousness
  {
    id: 21,
    options: [
      { text: "Deadlines? That’s when I finally peak", color: "#FF6F61" },
      { text: "I’d rather start early and take my sweet time", color: "#6EC1E4" },
    ],
    bubbles: [
      { value: -2, color: "#FF6F61", size: "40px" },
      { value: -1, color: "#FF6F61", size: "30px" },
      { value: 0, color: "#000000", size: "20px" },
      { value: 1, color: "#6EC1E4", size: "30px" },
      { value: 2, color: "#6EC1E4", size: "40px" },
    ],
  },
  {
    id: 22,
    options: [
      { text: "Finishing something feels like crossing the finish line", color: "#FF6F61" },
      { text: "Starting is fun; finishing is optional", color: "#6EC1E4" },
    ],
    bubbles: [
      { value: -2, color: "#FF6F61", size: "40px" },
      { value: -1, color: "#FF6F61", size: "30px" },
      { value: 0, color: "#000000", size: "20px" },
      { value: 1, color: "#6EC1E4", size: "30px" },
      { value: 2, color: "#6EC1E4", size: "40px" },
    ],
  },
  {
    id: 23,
    options: [
      { text: "Pressure makes diamonds (or meltdowns)", color: "#FF6F61" },
      { text: "Pressure? Nah, I’m chilling regardless", color: "#6EC1E4" },
    ],
    bubbles: [
      { value: -2, color: "#FF6F61", size: "40px" },
      { value: -1, color: "#FF6F61", size: "30px" },
      { value: 0, color: "#000000", size: "20px" },
      { value: 1, color: "#6EC1E4", size: "30px" },
      { value: 2, color: "#6EC1E4", size: "40px" },
    ],
  },
  {
    id: 24,
    options: [
      { text: "My calendar is a work of art", color: "#FF6F61" },
      { text: "I’ll figure it out as I go—no rush", color: "#6EC1E4" },
    ],
    bubbles: [
      { value: -2, color: "#FF6F61", size: "40px" },
      { value: -1, color: "#FF6F61", size: "30px" },
      { value: 0, color: "#000000", size: "20px" },
      { value: 1, color: "#6EC1E4", size: "30px" },
      { value: 2, color: "#6EC1E4", size: "40px" },
    ],
  },
];

export default questions;
  