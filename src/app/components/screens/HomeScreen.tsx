import { motion } from "motion/react";
import { Heart, ChevronRight, Mic, Camera, Plus, Sparkles } from "lucide-react";
import { useApp } from "../../state/AppContext";
import { AppHeader } from "../layout/AppHeader";
import { FadeUp } from "../common/FadeUp";
import { SectionCard } from "../common/SectionCard";
import { user, weeklyStats, cheerMessage, coachMessage } from "../../state/dummyData";

export function HomeScreen() {
  const { go } = useApp();

  return (
    <div className="w-full h-full flex flex-col bg-bg-light">
      <AppHeader showLogo showActions />
      <div className="flex-1 overflow-y-auto px-5 pb-32">
        {/* 인사 */}
        <FadeUp delay={0.02}>
          <h1 className="text-ink mt-1" style={{ fontSize: 26, fontWeight: 700 }}>
            안녕하세요, {user.name}님!
          </h1>
          <p className="text-gray mt-1" style={{ fontSize: 15 }}>
            오늘도 우리 아이와 좋은 대화 나눠요.
          </p>
        </FadeUp>

        {/* 오늘의 응원 */}
        <FadeUp delay={0.1} className="mt-5">
          <SectionCard variant="cream">
            <div className="flex items-center gap-2 mb-2">
              <Heart size={18} className="text-coral" fill="var(--coral)" />
              <span style={{ fontSize: 14, fontWeight: 700 }}>오늘의 응원</span>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.5 }}>{cheerMessage}</p>
          </SectionCard>
        </FadeUp>

        {/* 오늘의 코칭 */}
        <FadeUp delay={0.18} className="mt-4">
          <SectionCard variant="cream" onClick={() => go("coaching", "coaching")}>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={18} className="text-sky-dark" />
              <span style={{ fontSize: 14, fontWeight: 700 }}>오늘의 코칭</span>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.5 }}>{coachMessage}</p>
            <div className="flex items-center gap-1 mt-3 text-sky-dark" style={{ fontSize: 14, fontWeight: 600 }}>
              확인 <ChevronRight size={16} />
            </div>
          </SectionCard>
        </FadeUp>

        {/* 이번 주 기록 */}
        <FadeUp delay={0.26} className="mt-6">
          <p className="text-ink mb-3" style={{ fontSize: 20, fontWeight: 600 }}>
            이번 주 기록
          </p>
          <div className="grid grid-cols-3 gap-3">
            <StatCard big={`${weeklyStats.analyzeCount}회`} label="분석" sub="이번 주" />
            <StatCard big={`${weeklyStats.score}점`} label="소통 점수" sub={`평균 +${weeklyStats.scoreDelta}`} accent />
            <StatCard big={weeklyStats.empathy} label="공감지수" sub="유지 중" />
          </div>
        </FadeUp>

        {/* 빠른 기록 */}
        <FadeUp delay={0.34} className="mt-6">
          <SectionCard variant="blue" onClick={() => go("record")}>
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <span className="w-10 h-10 rounded-full bg-white/25 flex items-center justify-center">
                  <Mic size={20} className="text-white" />
                </span>
                <span className="w-10 h-10 rounded-full bg-white/25 flex items-center justify-center">
                  <Camera size={20} className="text-white" />
                </span>
              </div>
              <div className="flex-1">
                <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.4 }}>대화를 들려주세요</p>
                <p style={{ fontSize: 13 }} className="text-white/85">
                  AI가 분석해 코칭해드릴게요.
                </p>
              </div>
              <motion.span whileTap={{ scale: 0.9 }} className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <Plus size={26} className="text-sky-dark" strokeWidth={2.5} />
              </motion.span>
            </div>
          </SectionCard>
        </FadeUp>
      </div>
    </div>
  );
}

function StatCard({
  big,
  label,
  sub,
  accent,
}: {
  big: string;
  label: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div
      className="rounded-[18px] bg-white p-3 flex flex-col items-center text-center"
      style={{ boxShadow: "0 8px 24px rgba(20,40,60,0.06)" }}
    >
      <span style={{ fontSize: 22, fontWeight: 700 }} className={accent ? "text-sky" : "text-ink"}>
        {big}
      </span>
      <span className="text-ink mt-1" style={{ fontSize: 12, fontWeight: 600 }}>
        {label}
      </span>
      <span className="text-gray" style={{ fontSize: 11 }}>
        {sub}
      </span>
    </div>
  );
}
