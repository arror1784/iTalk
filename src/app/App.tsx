import { useState } from "react";
import { Onboarding } from "./components/Onboarding";
import { Home } from "./components/Home";
import { Mission } from "./components/Mission";
import { Report } from "./components/Report";
import { BottomNav, type Tab } from "./components/BottomNav";

type Screen = "onboarding" | "main" | "mission";

export default function App() {
  const [screen, setScreen] = useState<Screen>("onboarding");
  const [tab, setTab] = useState<Tab>("home");

  const renderMain = () => {
    if (tab === "report") return <Report />;
    if (tab === "guide" || tab === "settings")
      return (
        <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center pb-28 px-6 text-center">
          <p className="text-[#6B7280]">
            {tab === "guide" ? "AI 가이드" : "설정"} 화면은 준비 중이에요.
          </p>
        </div>
      );
    return <Home onStartMission={() => setScreen("mission")} />;
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen relative">
      {screen === "onboarding" && (
        <Onboarding onComplete={() => setScreen("main")} />
      )}
      {screen === "main" && (
        <>
          {renderMain()}
          <BottomNav active={tab} onChange={setTab} />
        </>
      )}
      {screen === "mission" && <Mission onBack={() => setScreen("main")} />}
    </div>
  );
}
