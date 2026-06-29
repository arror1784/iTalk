// 아이톡 더미 데이터 — 모든 한국어 카피와 프로토타입 데이터 집중

export const user = {
  name: "지영",
  relation: "엄마",
};

export const child = {
  name: "채이",
  age: 5,
  emoji: "🐣",
};

export const weeklyStats = {
  analyzeCount: 12,
  score: 78,
  scoreDelta: 5,
  empathy: "좋음",
};

export const cheerMessage =
  "어제 채이가 세 번이나 웃었어요. 엄마의 다정한 목소리 덕분이에요.";

export const coachMessage =
  "공감 표현이 조금 부족했어요. 5분 코칭을 시작해볼까요?";

// 최신 분석 리포트
export const latestReport = {
  score: 82,
  delta: 6,
  // 감정 톤 곡선 (대화 흐름)
  emotionTone: [
    { t: "0:00", 부모: 60, 아이: 40 },
    { t: "0:30", 부모: 55, 아이: 35 },
    { t: "1:00", 부모: 50, 아이: 25 },
    { t: "1:30", 부모: 65, 아이: 45 },
    { t: "2:00", 부모: 78, 아이: 70 },
    { t: "2:30", 부모: 85, 아이: 82 },
  ],
  // 소통 분석 비율
  analysis: [
    { label: "공감 표현", value: 32, color: "var(--green)" },
    { label: "열린 질문", value: 24, color: "var(--sky)" },
    { label: "칭찬·격려", value: 28, color: "var(--cream-strong)" },
    { label: "지시·명령", value: 16, color: "var(--coral)" },
  ],
  good: {
    title: "아이의 감정을 먼저 알아줬어요",
    quote: "많이 속상했구나",
  },
  suggestion: {
    before: "빨리 좀 해!",
    after: "5분 뒤에 시작할까? 네가 정해볼래?",
  },
};

export type Lesson = {
  id: string;
  title: string;
  emoji: string;
  duration: string;
  level: "초급" | "중급" | "고급";
  query: string; // unsplash 검색용
  points: string[];
  example: { speaker: "부모" | "아이"; text: string }[];
};

export const lessons: Lesson[] = [
  {
    id: "tantrum",
    title: "떼쓰고 울 때",
    emoji: "😭",
    duration: "5분",
    level: "초급",
    query: "child crying tantrum",
    points: [
      "먼저 아이의 감정을 말로 읽어주세요.",
      "옳고 그름을 따지기 전에 공감이 먼저예요.",
      "선택지를 주어 스스로 진정하게 도와주세요.",
    ],
    example: [
      { speaker: "아이", text: "싫어! 안 갈 거야!" },
      { speaker: "부모", text: "가기 싫어서 많이 속상하구나. 무엇이 제일 싫어?" },
    ],
  },
  {
    id: "praise",
    title: "칭찬·격려하는 법",
    emoji: "🌟",
    duration: "4분",
    level: "초급",
    query: "happy child praise parent",
    points: [
      "결과보다 과정과 노력을 칭찬하세요.",
      "구체적으로 무엇을 잘했는지 말해주세요.",
      "아이의 감정을 함께 기뻐해 주세요.",
    ],
    example: [
      { speaker: "아이", text: "엄마, 나 그림 다 그렸어!" },
      { speaker: "부모", text: "색을 정말 정성껏 칠했네. 끝까지 해낸 게 멋지다!" },
    ],
  },
  {
    id: "discipline",
    title: "훈육이 필요할 때",
    emoji: "🧭",
    duration: "6분",
    level: "중급",
    query: "parent talking to child seriously",
    points: [
      "행동과 사람을 분리해서 말하세요.",
      "규칙은 짧고 분명하게 전달하세요.",
      "감정이 가라앉은 뒤 이유를 설명하세요.",
    ],
    example: [
      { speaker: "아이", text: "동생 거 내가 가질 거야!" },
      { speaker: "부모", text: "갖고 싶었구나. 그래도 친구 물건은 먼저 물어봐야 해." },
    ],
  },
  {
    id: "angry",
    title: "화난 아이 공감하기",
    emoji: "🔥",
    duration: "5분",
    level: "중급",
    query: "angry upset child",
    points: [
      "화는 나쁜 감정이 아니라고 알려주세요.",
      "아이의 화를 대신 말로 표현해 주세요.",
      "차분해진 뒤 해결책을 함께 찾으세요.",
    ],
    example: [
      { speaker: "아이", text: "다 미워!" },
      { speaker: "부모", text: "지금 정말 화가 많이 났구나. 천천히 이야기해도 돼." },
    ],
  },
  {
    id: "sibling",
    title: "형제 다툼 중재",
    emoji: "👧🧒",
    duration: "6분",
    level: "고급",
    query: "siblings playing together",
    points: [
      "누구의 편도 들지 말고 중립을 지키세요.",
      "각자의 입장을 번갈아 들어주세요.",
      "스스로 해결책을 제안하게 도와주세요.",
    ],
    example: [
      { speaker: "아이", text: "형이 먼저 그랬어!" },
      { speaker: "부모", text: "둘 다 속상했겠다. 어떻게 하면 좋을지 같이 정해볼까?" },
    ],
  },
  {
    id: "bedtime",
    title: "잠자기 전 대화",
    emoji: "🌙",
    duration: "3분",
    level: "초급",
    query: "child bedtime story night",
    points: [
      "오늘 하루 중 좋았던 일을 물어보세요.",
      "감사와 사랑을 말로 표현하세요.",
      "내일을 기대하게 하는 말로 마무리하세요.",
    ],
    example: [
      { speaker: "부모", text: "오늘 제일 즐거웠던 일은 뭐였어?" },
      { speaker: "아이", text: "친구랑 미끄럼틀 탄 거!" },
    ],
  },
  {
    id: "smartphone",
    title: "스마트폰 규칙 정하기",
    emoji: "📱",
    duration: "5분",
    level: "중급",
    query: "child using smartphone tablet",
    points: [
      "규칙은 아이와 함께 정하세요.",
      "사용 시간을 눈으로 보이게 하세요.",
      "약속을 지켰을 때 충분히 인정해 주세요.",
    ],
    example: [
      { speaker: "아이", text: "조금만 더 보면 안 돼?" },
      { speaker: "부모", text: "우리 약속이 30분이었지? 내일 또 볼 수 있어." },
    ],
  },
];

// 성장 추이 (주간/월간)
export const trendWeekly = [
  { period: "월", score: 70 },
  { period: "화", score: 72 },
  { period: "수", score: 69 },
  { period: "목", score: 75 },
  { period: "금", score: 78 },
  { period: "토", score: 80 },
  { period: "일", score: 82 },
];

export const trendMonthly = [
  { period: "1주", score: 68 },
  { period: "2주", score: 72 },
  { period: "3주", score: 76 },
  { period: "4주", score: 82 },
];

export const reportHistory = [
  { id: "r1", date: "6월 28일", score: 82, delta: 6, summary: "공감 표현이 크게 늘었어요" },
  { id: "r2", date: "6월 26일", score: 76, delta: -2, summary: "지시 표현이 조금 많았어요" },
  { id: "r3", date: "6월 24일", score: 78, delta: 4, summary: "열린 질문이 좋았어요" },
  { id: "r4", date: "6월 21일", score: 74, delta: 3, summary: "칭찬으로 따뜻하게 마무리했어요" },
];

export const itemChanges = [
  { label: "공감 표현", trend: "up", value: "+12%" },
  { label: "열린 질문", trend: "up", value: "+8%" },
  { label: "칭찬·격려", trend: "up", value: "+5%" },
  { label: "지시·명령", trend: "down", value: "-9%" },
];

// AI 롤플레이 시나리오 (AI가 아이 역할)
export const roleplayScript: {
  child: string;
  hint: string;
  goodReply: string;
}[] = [
  {
    child: "엄마 미워! 나 안 잘 거야!",
    hint: "공감 먼저! 아이의 감정을 읽어주세요.",
    goodReply: "아직 더 놀고 싶어서 속상하구나.",
  },
  {
    child: "조금만 더 놀면 안 돼? 응?",
    hint: "선택지를 주어 스스로 정하게 해보세요.",
    goodReply: "그럼 책 한 권 읽고 잘까, 아니면 지금 바로 누울까?",
  },
  {
    child: "음… 책 읽고!",
    hint: "약속을 지킨 걸 인정하고 칭찬해 주세요.",
    goodReply: "좋아, 스스로 정했네. 정말 멋지다!",
  },
];

export const myStats = {
  totalAnalyze: 48,
  streak: 7,
};
