// import { useState } from "react";
import "../App.css";

// export default function ScoreCounter({ playerMove, computerMove }) {
export default function ScoreCounter() {
  // const [playerScore, setPlayerScore] = useState(0);
  // const [computerScore, setComputerScore] = useState(0);

  // const winnerFinder = ({ playerMove, computerMove }) => {
  //   switch ({ playerMove, computerMove }) {
  //     case ({ playerMove } = "rock"):
  //       if (({ computerMove } = "rock")) {
  //         return null;
  //       }
  //       if (({ computerMove } = "scissors")) {
  //         return setPlayerScore++;
  //       }
  //       if (({ computerMove } = "paper")) {
  //         return setComputerScore++;
  //       }
  //   }
  // };

  return (
    <div className="flex gap-[16px] font-display text-black flex-col justify-center">
      <button className="cursor-pointer text-[20px] font-bold text-center">
        RESET THE SCORE
      </button>
      <div className="text-[14px] gap-[143px] font-semibold flex justify-between">
        <div>PLAYER SCORE: </div>
        <div>COMPUTER SCORE: </div>
      </div>
    </div>
  );
}
