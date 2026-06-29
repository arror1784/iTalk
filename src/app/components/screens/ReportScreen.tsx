import { useRef } from "react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import { ArrowUpRight, ThumbsUp, MessageSquareQuote, ArrowRight } from "lucide-react";
import { useApp } from "../../state/AppContext";
import { AppHeader } from "../layout/AppHeader";
import { FadeUp } from "../common/FadeUp";
import { SectionCard } from "../common/SectionCard";
import { ScoreGauge } from "../common/ScoreGauge";
import { EmotionLineChart } from "../common/EmotionLineChart";
import { AnalysisBars } from "../common/AnalysisBars";
import { latestReport } from "../../state/dummyData";

export function ReportScreen() {
  const { go } = useApp();
  const saveRef = useRef<HTMLButtonElement>(null);

  const onSave = () => {
    confetti({
      particleCount: 80,
      spread: 65,
      origin: { y: 0.85 },
      colors: ["#2BC4F0", "#FBE07A", "#34C759"],
    });
    toast.success("리포트를 저장했어요!");
  };

  return (
    <div className="w-full h-full flex flex-col bg-bg-light">
      <AppHeader title="분석 리포트" showBack />
      <div className="flex-1 overflow-y-auto px-5 pb-32">
        {/* 게이지 */}
        <FadeUp delay={0.05} className="flex flex-col items-center mt-2">
          <ScoreGauge score={latestReport.score} />
          <div className="flex items-center gap-1 mt-2 text-green" style={{ fontSize: 14, fontWeight: 600 }}>
            <ArrowUpRight size={16} /> 지난 대화보다 +{latestReport.delta}점
          </div>
        </FadeUp>

        {/* 감정 톤 곡선 */}
        <FadeUp delay={0.15} className="mt-6">
          <Card title="감정 톤 곡선" legend>
            <EmotionLineChart data={latestReport.emotionTone} />
          </Card>
        </FadeUp>

        {/* 소통 분석 막대 */}
        <FadeUp delay={0.22} className="mt-4">
          <Card title="소통 분석">
            <AnalysisBars items={latestReport.analysis} />
          </Card>
        </FadeUp>

        {/* 잘한 점 */}
        <FadeUp delay={0.3} className="mt-4">
          <SectionCard variant="white" className="!bg-[#eafaef]">
            <div className="flex items-center gap-2 mb-2">
              <ThumbsUp size={18} className="text-green" />
              <span className="text-green" style={{ fontSize: 14, fontWeight: 700 }}>잘한 점</span>
            </div>
            <p className="text-ink" style={{ fontSize: 15, lineHeight: 1.5 }}>
              {latestReport.good.title} — <span style={{ fontWeight: 600 }}>'{latestReport.good.quote}'</span>
            </p>
          </SectionCard>
        </FadeUp>

        {/* 이렇게 말해보세요 */}
        <FadeUp delay={0.38} className="mt-4">
          <SectionCard variant="blue">
            <div className="flex items-center gap-2 mb-3">
              <MessageSquareQuote size={18} className="text-white" />
              <span style={{ fontSize: 14, fontWeight: 700 }}>이렇게 말해보세요</span>
            </div>
            <div className="bg-white/15 rounded-2xl p-3 mb-2">
              <span className="text-white/80" style={{ fontSize: 12 }}>이렇게 말했어요</span>
              <p style={{ fontSize: 15, fontWeight: 600 }}>"{latestReport.suggestion.before}"</p>
            </div>
            <div className="flex justify-center my-1">
              <ArrowRight size={18} className="rotate-90 text-white/80" />
            </div>
            <div className="bg-white rounded-2xl p-3">
              <span className="text-sky-dark" style={{ fontSize: 12, fontWeight: 600 }}>이렇게 바꿔보세요</span>
              <p className="text-ink" style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.4 }}>
                "{latestReport.suggestion.after}"
              </p>
            </div>
          </SectionCard>
        </FadeUp>
      </div>

      {/* 하단 액션 */}
      <div className="px-5 pb-10 pt-3 bg-bg-light flex gap-3">
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={() => go("coaching", "coaching")}
          className="flex-1 h-14 rounded-2xl bg-sky text-white"
          style={{ fontSize: 16, fontWeight: 600 }}
        >
          이 상황 코칭 받기
        </motion.button>
        <motion.button
          ref={saveRef}
          whileTap={{ scale: 0.96 }}
          onClick={onSave}
          className="px-6 h-14 rounded-2xl bg-white text-sky-dark border border-[#cfe9f4]"
          style={{ fontSize: 16, fontWeight: 600 }}
        >
          저장
        </motion.button>
      </div>
    </div>
  );
}

function Card({ title, children, legend }: { title: string; children: React.ReactNode; legend?: boolean }) {
  return (
    <div className="rounded-[22px] bg-white p-5" style={{ boxShadow: "0 8px 24px rgba(20,40,60,0.06)" }}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-ink" style={{ fontSize: 16, fontWeight: 600 }}>{title}</span>
        {legend && (
          <div className="flex gap-3" style={{ fontSize: 12 }}>
            <span className="flex items-center gap-1 text-gray"><i className="inline-block w-2.5 h-2.5 rounded-full bg-sky" />부모</span>
            <span className="flex items-center gap-1 text-gray"><i className="inline-block w-2.5 h-2.5 rounded-full bg-cream-strong" />아이</span>
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
