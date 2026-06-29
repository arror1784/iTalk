import { AnimatePresence, motion } from "motion/react";
import { Toaster } from "./components/ui/sonner";
import { AppProvider, useApp, Screen } from "./state/AppContext";
import { PhoneFrame } from "./components/layout/PhoneFrame";
import { BottomTabBar } from "./components/layout/BottomTabBar";

import { SplashScreen } from "./components/screens/SplashScreen";
import { OnboardingScreen } from "./components/screens/OnboardingScreen";
import { LoginScreen } from "./components/screens/LoginScreen";
import { ChildProfileScreen } from "./components/screens/ChildProfileScreen";
import { HomeScreen } from "./components/screens/HomeScreen";
import { RecordScreen } from "./components/screens/RecordScreen";
import { AnalyzingScreen } from "./components/screens/AnalyzingScreen";
import { ReportScreen } from "./components/screens/ReportScreen";
import { CoachingScreen } from "./components/screens/CoachingScreen";
import { LessonDetailScreen } from "./components/screens/LessonDetailScreen";
import { ReportsScreen } from "./components/screens/ReportsScreen";
import { MyPageScreen } from "./components/screens/MyPageScreen";

// 탭바를 보여줄 화면들
const TAB_VISIBLE: Screen[] = ["home", "coaching", "reports", "my"];

const screens: Record<Screen, React.ComponentType> = {
  splash: SplashScreen,
  onboarding: OnboardingScreen,
  login: LoginScreen,
  profile: ChildProfileScreen,
  home: HomeScreen,
  record: RecordScreen,
  analyzing: AnalyzingScreen,
  report: ReportScreen,
  coaching: CoachingScreen,
  lesson: LessonDetailScreen,
  reports: ReportsScreen,
  my: MyPageScreen,
};

function Router() {
  const { state } = useApp();
  const Current = screens[state.screen];
  const showTabBar = TAB_VISIBLE.includes(state.screen);

  return (
    <PhoneFrame>
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={state.screen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.26, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Current />
          </motion.div>
        </AnimatePresence>
        {showTabBar && <BottomTabBar />}
      </div>
    </PhoneFrame>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Router />
      <Toaster position="top-center" />
    </AppProvider>
  );
}
