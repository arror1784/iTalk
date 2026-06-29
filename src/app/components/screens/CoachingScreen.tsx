import { motion } from "motion/react";
import { Clock } from "lucide-react";
import { useApp } from "../../state/AppContext";
import { AppHeader } from "../layout/AppHeader";
import { FadeUp } from "../common/FadeUp";
import { lessons } from "../../state/dummyData";

const gradients = [
  "linear-gradient(135deg,#FFD9D2,#FF7A6B)",
  "linear-gradient(135deg,#FFF3B0,#FBE07A)",
  "linear-gradient(135deg,#C8E9F7,#2BC4F0)",
  "linear-gradient(135deg,#FFE0B2,#FFB74D)",
  "linear-gradient(135deg,#D7F5DE,#34C759)",
  "linear-gradient(135deg,#E3E0FF,#A99BFF)",
  "linear-gradient(135deg,#CFEFF7,#5FD6F7)",
];

const levelColor: Record<string, string> = {
  초급: "text-green",
  중급: "text-sky-dark",
  고급: "text-coral",
};

export function CoachingScreen() {
  const { openLesson } = useApp();

  return (
    <div className="w-full h-full flex flex-col bg-bg-light">
      <AppHeader title="코칭 라이브러리" showLogo={false} />
      <div className="flex-1 overflow-y-auto px-5 pb-32">
        <FadeUp delay={0.02}>
          <h1 className="text-ink mt-1" style={{ fontSize: 22, fontWeight: 700 }}>
            상황별 미니 레슨
          </h1>
          <p className="text-gray mt-1 mb-4" style={{ fontSize: 14 }}>
            매일 5분, 다정한 대화법을 연습해요.
          </p>
        </FadeUp>

        <div className="grid grid-cols-2 gap-3">
          {lessons.map((lesson, i) => (
            <FadeUp key={lesson.id} delay={0.06 + i * 0.05}>
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => openLesson(lesson.id)}
                className="w-full text-left rounded-[20px] bg-white overflow-hidden"
                style={{ boxShadow: "0 8px 24px rgba(20,40,60,0.06)" }}
              >
                <div
                  className="h-24 flex items-center justify-center"
                  style={{ background: gradients[i % gradients.length] }}
                >
                  <span style={{ fontSize: 40 }}>{lesson.emoji}</span>
                </div>
                <div className="p-3">
                  <p className="text-ink" style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.3 }}>
                    {lesson.title}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="flex items-center gap-1 text-gray" style={{ fontSize: 12 }}>
                      <Clock size={12} /> {lesson.duration}
                    </span>
                    <span style={{ fontSize: 12, fontWeight: 600 }} className={levelColor[lesson.level]}>
                      {lesson.level}
                    </span>
                  </div>
                </div>
              </motion.button>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  );
}
