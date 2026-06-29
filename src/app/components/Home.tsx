import { Play, Bell } from "lucide-react";

const weekly = [
  { label: "어휘력", value: 72, sub: "지난주 +8" },
  { label: "발음 정확도", value: 64, sub: "지난주 +5" },
  { label: "문장 길이", value: 48, sub: "지난주 +3" },
];

export function Home({ onStartMission }: { onStartMission: () => void }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-28">
      <div className="px-6 pt-14 pb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6FB0F1] to-[#A8D0F8] flex items-center justify-center text-white">
            👶
          </div>
          <div>
            <p className="text-[#6B7280]">안녕하세요,</p>
            <p className="text-[#111827]">민준이 어머님!</p>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
          <Bell size={18} color="#6B7280" />
        </button>
      </div>

      <div className="px-6">
        <div
          className="rounded-3xl bg-gradient-to-br from-[#6FB0F1] to-[#8FC2F5] p-6 text-white relative overflow-hidden"
          style={{ boxShadow: "0 18px 40px rgba(111,176,241,0.35)" }}
        >
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10" />
          <div className="absolute -right-12 bottom-0 w-24 h-24 rounded-full bg-white/10" />
          <p className="opacity-90">오늘의 대화 미션</p>
          <h2 className="mt-2 leading-snug">
            저녁 식탁에서<br />끝말잇기 놀이하기
          </h2>
          <div className="flex items-center justify-between mt-8 relative">
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full bg-white/20 text-sm">
                어휘력
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20 text-sm">
                5분
              </span>
            </div>
            <button
              onClick={onStartMission}
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg"
            >
              <Play size={22} color="#6FB0F1" fill="#6FB0F1" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 px-6 flex items-center justify-between">
        <h3 className="text-[#111827]">주간 성장 요약</h3>
        <span className="text-[#6FB0F1]">전체보기</span>
      </div>

      <div className="no-scrollbar mt-3 pl-6 pr-6 flex gap-3 overflow-x-auto pb-2">
        {weekly.map((w) => (
          <div
            key={w.label}
            className="min-w-[160px] bg-white rounded-2xl p-4 shadow-[0_4px_14px_rgba(15,23,42,0.04)]"
          >
            <p className="text-[#6B7280] text-sm">{w.label}</p>
            <p className="text-[#111827] mt-1">{w.value}점</p>
            <div className="mt-3 h-1.5 rounded-full bg-[#EEF2F7] overflow-hidden">
              <div
                className="h-full rounded-full bg-[#6FB0F1]"
                style={{ width: `${w.value}%` }}
              />
            </div>
            <p className="text-xs text-[#6FB0F1] mt-2">{w.sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 px-6">
        <div className="bg-white rounded-2xl p-5 shadow-[0_4px_14px_rgba(15,23,42,0.04)]">
          <p className="text-[#6B7280] text-sm">오늘의 팁</p>
          <p className="text-[#111827] mt-2 leading-relaxed">
            아이의 말에 "그래서?", "왜 그랬을까?" 같은 열린 질문을 던져보세요.
            대화 길이가 평균 2배로 늘어나요.
          </p>
        </div>
      </div>
    </div>
  );
}
