import { useEffect, useState } from "react";

import "../App.css";

export default function ScoreCounter({ playerMove, computerMove }) {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const resetScore = () => {
    setPlayerScore(0);
    setComputerScore(0);
  };
  useEffect(() => {
    if (playerMove && computerMove) {
      winnerFinder(playerMove, computerMove);
    }
  }, [playerMove, computerMove]);

  const winnerFinder = (playerMove, computerMove) => {
    if (playerMove === computerMove) {
      return;
    } else if (
      (playerMove === "rock" && computerMove === "scissors") ||
      (playerMove === "paper" && computerMove === "rock") ||
      (playerMove === "scissors" && computerMove === "paper")
    ) {
      setPlayerScore((prev) => prev + 1);
    } else {
      setComputerScore((prev) => prev + 1);
    }
  };

  return (
    <div className="flex gap-[16px] font-display text-black flex-col justify-center">
      <button
        onClick={resetScore}
        className="cursor-pointer text-[20px] font-bold text-center"
      >
        RESET THE SCORE
      </button>
      <div className="text-[14px] gap-[143px] font-semibold flex justify-between">
        <div>PLAYER SCORE: {playerScore}</div>
        <div>COMPUTER SCORE: {computerScore}</div>
      </div>
    </div>
  );
}
