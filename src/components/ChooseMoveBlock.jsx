import { connect } from "react-redux";

import { useTheme } from "../contexts/ThemeContext";
import {
  setComputerMove,
  setPlayerMove,
  updateScores,
} from "../store/gameStore";
import Button from "./Button";

import "../App.css";

function ChooseMoveBlock({ choseRock, chosePaper, choseScissors }) {
  const { isDark } = useTheme();
  return (
    <div className="flex flex-col gap-[24px] w-max">
      <div
        className={`font-display text-[14px] font-medium text-center ${isDark ? "text-[#BEBFD1]" : "text-[#353535]"}`}
      >
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

const mapDispatchToProps = (dispatch) => {
  const getComputerMove = () => {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  };
  const handleMove = (playerMove) => {
    const computerMove = getComputerMove();
    dispatch(setPlayerMove(playerMove));
    dispatch(setComputerMove(computerMove));
    dispatch(updateScores(playerMove, computerMove));
  };
  return {
    choseRock: () => handleMove("rock"),
    chosePaper: () => handleMove("paper"),
    choseScissors: () => handleMove("scissors"),
  };
};
export default connect(null, mapDispatchToProps)(ChooseMoveBlock);
