import { useState } from "react";
import { motion } from "motion/react";
import { ChevronRight, Users, Bell, Crown, Headphones, Flame, BarChart3 } from "lucide-react";
import { AppHeader } from "../layout/AppHeader";
import { FadeUp } from "../common/FadeUp";
import { Switch } from "../ui/switch";
import { user, child, myStats } from "../../state/dummyData";

export function MyPageScreen() {
  const [notify, setNotify] = useState(true);

  return (
    <div className="w-full h-full flex flex-col bg-bg-light">
      <AppHeader title="마이페이지" />
      <div className="flex-1 overflow-y-auto px-5 pb-32">
        {/* 프로필 */}
        <FadeUp delay={0.02}>
          <div className="rounded-[22px] p-5 flex items-center gap-4" style={{ background: "linear-gradient(135deg,#2BC4F0,#5FD6F7)", boxShadow: "0 8px 24px rgba(43,196,240,0.3)" }}>
            <div className="w-16 h-16 rounded-full bg-white/25 flex items-center justify-center" style={{ fontSize: 32 }}>
              {child.emoji}
            </div>
            <div className="text-white">
              <p style={{ fontSize: 18, fontWeight: 700 }}>{user.name} {user.relation}</p>
              <p className="text-white/85" style={{ fontSize: 13 }}>{child.name}({child.age}세)와 함께해요</p>
            </div>
          </div>
        </FadeUp>

        {/* 누적·스트릭 */}
        <FadeUp delay={0.1} className="grid grid-cols-2 gap-3 mt-4">
          <div className="bg-white rounded-2xl p-4 flex items-center gap-3" style={{ boxShadow: "0 8px 24px rgba(20,40,60,0.05)" }}>
            <span className="w-11 h-11 rounded-full bg-sky-light flex items-center justify-center">
              <BarChart3 size={20} className="text-sky-dark" />
            </span>
            <div>
              <p className="text-ink" style={{ fontSize: 20, fontWeight: 700 }}>{myStats.totalAnalyze}회</p>
              <p className="text-gray" style={{ fontSize: 12 }}>누적 분석</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 flex items-center gap-3" style={{ boxShadow: "0 8px 24px rgba(20,40,60,0.05)" }}>
            <span className="w-11 h-11 rounded-full bg-[#fff0e8] flex items-center justify-center">
              <Flame size={20} className="text-coral" />
            </span>
            <div>
              <p className="text-ink" style={{ fontSize: 20, fontWeight: 700 }}>{myStats.streak}일</p>
              <p className="text-gray" style={{ fontSize: 12 }}>연속 기록</p>
            </div>
          </div>
        </FadeUp>

        {/* 프리미엄 */}
        <FadeUp delay={0.18} className="mt-4">
          <motion.button whileTap={{ scale: 0.98 }} className="w-full rounded-[22px] p-4 flex items-center gap-3 bg-cream" style={{ boxShadow: "0 8px 24px rgba(20,40,60,0.06)" }}>
            <Crown size={24} className="text-[#d99e00]" fill="#FBE07A" />
            <div className="flex-1 text-left">
              <p className="text-ink" style={{ fontSize: 15, fontWeight: 700 }}>아이톡 프리미엄</p>
              <p className="text-gray" style={{ fontSize: 13 }}>무제한 분석 · 심화 코칭 리포트</p>
            </div>
            <ChevronRight size={18} className="text-gray" />
          </motion.button>
        </FadeUp>

        {/* 메뉴 리스트 */}
        <FadeUp delay={0.26} className="mt-4">
          <div className="bg-white rounded-[22px] overflow-hidden" style={{ boxShadow: "0 8px 24px rgba(20,40,60,0.05)" }}>
            <MenuRow icon={Users} label="프로필·자녀 관리" />
            <Divider />
            <div className="flex items-center gap-3 px-4 h-14">
              <Bell size={20} className="text-sky-dark" />
              <span className="flex-1 text-ink" style={{ fontSize: 15 }}>알림 설정</span>
              <Switch checked={notify} onCheckedChange={setNotify} />
            </div>
            <Divider />
            <MenuRow icon={Headphones} label="고객센터" last />
          </div>
        </FadeUp>

        <p className="text-center text-gray mt-6" style={{ fontSize: 12 }}>
          아이톡 v1.0.0
        </p>
      </div>
    </div>
  );
}

function MenuRow({ icon: Icon, label, last }: { icon: typeof Users; label: string; last?: boolean }) {
  return (
    <button className={`w-full flex items-center gap-3 px-4 h-14 active:bg-sky-light/40 ${last ? "" : ""}`}>
      <Icon size={20} className="text-sky-dark" />
      <span className="flex-1 text-left text-ink" style={{ fontSize: 15 }}>{label}</span>
      <ChevronRight size={18} className="text-gray" />
    </button>
  );
}

function Divider() {
  return <div className="h-px bg-[#eef5f9] mx-4" />;
}
