import { useState } from "react";
import { ArrowLeft, Mic, Check } from "lucide-react";

const TIPS = [
  "아이가 답하기 쉽도록 천천히 또박또박 말해주세요",
  "정답을 가르치기보다 함께 고민하는 모습을 보여주세요",
  "성공할 때마다 구체적으로 칭찬해 주세요",
];

export function Mission({ onBack }: { onBack: () => void }) {
  const [recording, setRecording] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="px-6 pt-14 pb-2 flex items-center gap-3">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#F3F4F6]"
        >
          <ArrowLeft size={22} color="#111827" />
        </button>
        <p className="text-[#111827]">오늘의 미션</p>
      </div>

      <div className="px-6 mt-6">
        <h2 className="text-[#111827] leading-snug">
          저녁 식탁에서<br />음식 이름으로 끝말잇기를 해보세요!
        </h2>

        <div className="mt-5 rounded-2xl border border-[#E5E7EB] p-5">
          <p className="text-[#6FB0F1] mb-3">부모님을 위한 대화 팁</p>
          <ul className="space-y-3">
            {TIPS.map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#EAF4FE] flex items-center justify-center shrink-0">
                  <Check size={12} color="#6FB0F1" strokeWidth={3} />
                </span>
                <span className="text-[#374151] leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center py-12">
        <div className="relative flex items-center justify-center">
          <span
            className={`absolute w-56 h-56 rounded-full bg-[#6FB0F1] opacity-10 ${
              recording ? "animate-ping" : ""
            }`}
          />
          <span className="absolute w-44 h-44 rounded-full bg-[#6FB0F1] opacity-15" />
          <span className="absolute w-36 h-36 rounded-full bg-[#6FB0F1] opacity-25" />
          <button
            onClick={() => setRecording((r) => !r)}
            className="relative w-28 h-28 rounded-full bg-[#6FB0F1] flex items-center justify-center text-white"
            style={{ boxShadow: "0 16px 40px rgba(111,176,241,0.55)" }}
          >
            <Mic size={40} color="white" />
          </button>
        </div>
        <p className="mt-8 text-[#6B7280]">
          {recording ? "듣고 있어요..." : "버튼을 눌러 대화를 녹음하세요"}
        </p>
      </div>

      <div className="px-6 pb-8 flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 py-4 rounded-2xl border border-[#E5E7EB] text-[#6B7280]"
        >
          미션 건너뛰기
        </button>
        <button
          onClick={onBack}
          className="flex-1 py-4 rounded-2xl bg-[#6FB0F1] text-white shadow-[0_8px_20px_rgba(111,176,241,0.35)]"
        >
          미션 완료
        </button>
      </div>
    </div>
  );
}
