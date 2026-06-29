import { Home, Sparkles, BarChart3, Settings } from "lucide-react";

export type Tab = "home" | "guide" | "report" | "settings";

export function BottomNav({
  active,
  onChange,
}: {
  active: Tab;
  onChange: (t: Tab) => void;
}) {
  const items: { key: Tab; label: string; Icon: any }[] = [
    { key: "home", label: "홈", Icon: Home },
    { key: "guide", label: "AI 가이드", Icon: Sparkles },
    { key: "report", label: "리포트", Icon: BarChart3 },
    { key: "settings", label: "설정", Icon: Settings },
  ];
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#EEF2F7] px-4 py-2 flex justify-around max-w-md mx-auto">
      {items.map(({ key, label, Icon }) => {
        const on = active === key;
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className="flex flex-col items-center gap-1 py-2 px-3"
          >
            <Icon
              size={22}
              color={on ? "#6FB0F1" : "#9CA3AF"}
              strokeWidth={on ? 2.4 : 2}
            />
            <span
              className="text-xs"
              style={{ color: on ? "#6FB0F1" : "#9CA3AF" }}
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
