import { AppProvider } from "./state/AppContext";
import { PhoneFrame } from "./components/layout/PhoneFrame";
import { AppStage } from "./components/AppStage";

export default function App() {
  return (
    <AppProvider initialScreen="splash">
      <PhoneFrame>
        <AppStage />
      </PhoneFrame>
    </AppProvider>
  );
}
