import { useTheme } from "../contexts/ThemeContext";

import "../App.css";

export default function Button({ children, onClick }) {
  const { isDark } = useTheme();
  return (
    <button
      onClick={onClick}
      className={`w-[170px] cursor-pointer h-[60px] rounded-[14px] flex justify-center items-center  ${isDark ? "bg-[#2751A3]" : "bg-[#DF2E38]"}`}
    >
      <div className="font-display font-bold text-[25px] text-white">
        {children}
      </div>
    </button>
  );
}
