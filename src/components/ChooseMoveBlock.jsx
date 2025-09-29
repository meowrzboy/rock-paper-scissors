import Button from "./Button.jsx";

import "../App.css";

export default function ChooseMoveBlock() {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="font-display text-[14px] font-medium text-[#353535] text-center">
        Choose your move, rock paper or scissors?
      </div>
      <div className="flex gap-[48px]">
        <Button>ROCK</Button>
        <Button>PAPER</Button>
        <Button>SCISSORS</Button>
      </div>
    </div>
  );
}
