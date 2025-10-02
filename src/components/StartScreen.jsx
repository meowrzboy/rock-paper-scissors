import { useTheme } from "../contexts/ThemeContext";

import "../App.css";

export default function StartScreen({ onStartGame }) {
  const { isDark } = useTheme();
  return (
    <div className="flex gap-[32px]">
      <button
        className={`min-w-[186px] h-[90px] rounded-[14px] cursor-pointer ${isDark ? "bg-[#2751A3]" : "bg-[#DF2E38]"}`}
        onClick={onStartGame}
      >
        <div className="font-display font-bold text-[27px] text-white">
          PLAY
        </div>
      </button>
      <div
        className={`font-display font-bold text-[37px] leading-[100%] flex items-center ${isDark ? "text-[#BEBFD1]" : "text-[#070A52]"}`}
      >
        Rock Paper Scissors <br /> The game
      </div>
    </div>
  );
}
