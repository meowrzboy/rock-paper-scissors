import { useState } from "react";

import ChooseMoveBlock from "./ChooseMoveBlock";
import GameplayBlock from "./GameplayBlock";

import "../App.css";

export default function GameHandler({ winnerFinder }) {
  const [playerMove, setPlayerMove] = useState(null);
  const [computerMove, setComputerMove] = useState(null);
  const getComputerMove = () => {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  };

  const handleRock = () => {
    setPlayerMove("rock");
    setComputerMove(getComputerMove());
    winnerFinder({ playerMove, computerMove });
  };
  const handlePaper = () => {
    setPlayerMove("paper");
    setComputerMove(getComputerMove());
    winnerFinder({ playerMove, computerMove });
  };
  const handleScissors = () => {
    setPlayerMove("scissors");
    setComputerMove(getComputerMove());
    winnerFinder({ playerMove, computerMove });
  };
  return (
    <div className="flex gap-[32px] flex-col">
      <GameplayBlock playerMove={playerMove} computerMove={computerMove} />
      <ChooseMoveBlock
        choseRock={handleRock}
        chosePaper={handlePaper}
        choseScissors={handleScissors}
      />
    </div>
  );
}
