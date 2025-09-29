import dark_mode_icon from "../assets/dark_mode_icon.svg";
import light_mode_icon from "../assets/light_mode_icon.svg";

import "../App.css";

export default function ToggleTheme() {
  return (
    <div className="w-[96px] h-[96px] absolute top-[32px] right-[32px]">
      <button>
        <img src={dark_mode_icon} className="cursor-pointer block" />
      </button>
      <button>
        <img src={light_mode_icon} className="cursor-pointer hidden" />
      </button>
    </div>
  );
}
