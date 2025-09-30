import { useState } from "react";

import ChooseMoveBlock from "./ChooseMoveBlock";
import GameplayBlock from "./GameplayBlock";
import ScoreCounter from "./ScoreCounter";

import "../App.css";

export default function GameHandler() {
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
  };
  const handlePaper = () => {
    setPlayerMove("paper");
    setComputerMove(getComputerMove());
  };
  const handleScissors = () => {
    setPlayerMove("scissors");
    setComputerMove(getComputerMove());
  };
  return (
    <div className="flex gap-[32px] flex-col">
      <ScoreCounter playerMove={playerMove} computerMove={computerMove} />
      <GameplayBlock playerMove={playerMove} computerMove={computerMove} />
      <ChooseMoveBlock
        choseRock={handleRock}
        chosePaper={handlePaper}
        choseScissors={handleScissors}
      />
    </div>
  );
}
