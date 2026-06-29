import { useState } from "react";

const CONCERNS = [
  "발음이 부정확해요",
  "어휘력이 부족해요",
  "말이 늦어요",
  "문장 만들기가 어려워요",
  "대화가 짧아요",
  "표현이 단조로워요",
];

export function Onboarding({ onComplete }: { onComplete: () => void }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (c: string) =>
    setSelected((s) => (s.includes(c) ? s.filter((x) => x !== c) : [...s, c]));

  return (
    <div className="flex flex-col min-h-screen bg-white px-6 pt-16 pb-8">
      <div className="mb-10">
        <div className="inline-block px-3 py-1 rounded-full bg-[#EAF4FE] text-[#6FB0F1] mb-4">
          아이톡 · 시작하기
        </div>
        <h1 className="text-[#1F2937] leading-snug">
          아이톡에 오신 것을<br />환영합니다!
        </h1>
        <p className="text-[#6B7280] mt-3">아이의 정보를 알려주세요</p>
      </div>

      <div className="flex-1 space-y-5">
        <div>
          <label className="block text-[#374151] mb-2">아이 이름</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="예) 민준"
            className="w-full px-5 py-4 rounded-2xl border border-[#E5E7EB] bg-white outline-none focus:border-[#6FB0F1] transition"
          />
        </div>
        <div>
          <label className="block text-[#374151] mb-2">아이 나이</label>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="예) 4세"
            className="w-full px-5 py-4 rounded-2xl border border-[#E5E7EB] bg-white outline-none focus:border-[#6FB0F1] transition"
          />
        </div>

        <div className="pt-3">
          <p className="text-[#374151] mb-3">가장 큰 언어 고민은 무엇인가요?</p>
          <div className="flex flex-wrap gap-2">
            {CONCERNS.map((c) => {
              const on = selected.includes(c);
              return (
                <button
                  key={c}
                  onClick={() => toggle(c)}
                  className={`px-4 py-2 rounded-full border transition ${
                    on
                      ? "bg-[#6FB0F1] text-white border-[#6FB0F1]"
                      : "bg-white text-[#4B5563] border-[#E5E7EB]"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <button
        onClick={onComplete}
        className="w-full py-4 rounded-2xl bg-[#6FB0F1] text-white shadow-[0_8px_20px_rgba(111,176,241,0.35)] active:scale-[0.99] transition"
      >
        맞춤 가이드 시작하기
      </button>
    </div>
  );
}
