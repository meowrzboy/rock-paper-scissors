import { useTheme } from "../contexts/ThemeContext";

import "../App.css";

export default function GameTitle() {
  const { isDark } = useTheme();

  return (
    <div
      className={`font-display text-[30px] font-bold text-center ${isDark ? "text-[#BEBFD1]" : "text-[#070A52]"}`}
    >
      Rock Paper Scissors
    </div>
  );
}
