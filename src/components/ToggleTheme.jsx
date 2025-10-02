import dark_mode_icon from "../assets/dark_mode_icon.svg";
import light_mode_icon from "../assets/light_mode_icon.svg";
import { useTheme } from "../contexts/ThemeContext";

import "../App.css";

export default function ToggleTheme() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="w-[96px] h-[96px] absolute top-[32px] right-[32px]">
      <button onClick={toggleTheme}>
        {!isDark && <img src={dark_mode_icon} className="cursor-pointer" />}
        {isDark && <img src={light_mode_icon} className="cursor-pointer" />}
      </button>
    </div>
  );
}
