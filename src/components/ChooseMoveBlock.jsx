import Button from "./Button.jsx";

import "../App.css";

export default function ChooseMoveBlock({
  choseRock,
  chosePaper,
  choseScissors,
}) {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="font-display text-[14px] font-medium text-[#353535] text-center">
        Choose your move, rock paper or scissors?
      </div>
      <div className="flex gap-[48px]">
        <Button onClick={choseRock}>ROCK</Button>
        <Button onClick={chosePaper}>PAPER</Button>
        <Button onClick={choseScissors}>SCISSORS</Button>
      </div>
    </div>
  );
}
