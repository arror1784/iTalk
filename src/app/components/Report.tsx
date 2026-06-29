import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const weekData = [
  { d: "월", v: 32 },
  { d: "화", v: 38 },
  { d: "수", v: 42 },
  { d: "목", v: 50 },
  { d: "금", v: 58 },
  { d: "토", v: 66 },
  { d: "일", v: 72 },
];
const monthData = [
  { d: "1주", v: 30 },
  { d: "2주", v: 42 },
  { d: "3주", v: 55 },
  { d: "4주", v: 72 },
];

const BADGES = [
  { e: "🏆", n: "첫 미션" },
  { e: "🌟", n: "7일 연속" },
  { e: "📚", n: "어휘왕" },
  { e: "🎤", n: "발음달인" },
  { e: "💬", n: "수다쟁이" },
  { e: "🎯", n: "끝말잇기" },
];

export function Report() {
  const [tab, setTab] = useState<"week" | "month">("week");
  const data = tab === "week" ? weekData : monthData;

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-28">
      <div className="px-6 pt-14 pb-4">
        <p className="text-[#6B7280]">민준이의</p>
        <h2 className="text-[#111827] mt-1">발달 리포트</h2>
      </div>

      <div className="px-6">
        <div className="bg-white rounded-full p-1 flex w-full max-w-xs mx-auto shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
          {(["week", "month"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-2.5 rounded-full transition ${
                tab === t ? "bg-[#6FB0F1] text-white" : "text-[#6B7280]"
              }`}
            >
              {t === "week" ? "주간" : "월간"}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 mt-6">
        <div className="bg-white rounded-3xl p-5 shadow-[0_4px_18px_rgba(15,23,42,0.05)]">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[#111827]">어휘력 성장</p>
            <span className="px-2.5 py-1 rounded-full bg-[#EAF4FE] text-[#6FB0F1] text-sm">
              +12% ↑
            </span>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart key={tab} data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid stroke="#F1F5F9" vertical={false} />
                <XAxis dataKey="d" axisLine={false} tickLine={false} tick={{ fill: "#9CA3AF" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#9CA3AF" }} />
                <Tooltip
                  contentStyle={{
                    borderRadius: 12,
                    border: "none",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="v"
                  stroke="#6FB0F1"
                  strokeWidth={3}
                  dot={{ r: 5, stroke: "#6FB0F1", strokeWidth: 2, fill: "white" }}
                  activeDot={{ r: 7, fill: "#6FB0F1" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="px-6 mt-5">
        <div className="rounded-3xl p-5 bg-[#EAF4FE]">
          <p className="text-[#6FB0F1] mb-2">전문가 코멘트</p>
          <p className="text-[#1F2937] leading-relaxed">
            민준이는 또래 평균 대비 어휘 사용 빈도가 꾸준히 증가하고 있어요.
            특히 동사 표현이 풍부해졌고, 문장 길이도 4어절까지 확장되었습니다.
          </p>
          <p className="text-[#4B5563] mt-3 leading-relaxed">
            이번 주에는 감정 표현 단어를 함께 사용해보면 더욱 좋을 것 같아요.
          </p>
        </div>
      </div>

      <div className="px-6 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[#111827]">획득한 뱃지</h3>
          <span className="text-[#6FB0F1]">6 / 24</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {BADGES.map((b) => (
            <div
              key={b.n}
              className="bg-white rounded-2xl py-5 flex flex-col items-center shadow-[0_4px_12px_rgba(15,23,42,0.04)]"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#EAF4FE] to-[#D6E9FB] flex items-center justify-center text-2xl">
                {b.e}
              </div>
              <p className="mt-2 text-[#374151] text-sm">{b.n}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
