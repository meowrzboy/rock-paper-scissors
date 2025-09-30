import paper_icon from "../assets/paper_icon.svg";
import rock_icon1 from "../assets/rock_icon1.svg";
import scissors_icon1 from "../assets/scissors_icon1.svg";

import "../App.css";

export default function GameplayBlock({ playerMove, computerMove }) {
  const getMoveIcon = (move) => {
    switch (move) {
      case "rock":
        return rock_icon1;
      case "paper":
        return paper_icon;
      case "scissors":
        return scissors_icon1;
      default:
        return rock_icon1;
    }
  };

  return (
    <div className="flex gap-[58px] justify-center">
      <img src={getMoveIcon(playerMove)} className="w-[100px] h-[100px]" />

      <div className="text-[20px] font-bold font-display text-black mt-[50px] mb-[26px]">
        VS
      </div>
      <img
        src={getMoveIcon(computerMove)}
        className="scale-x-[-1] w-[100px] h-[100px]"
      />
    </div>
  );
}
