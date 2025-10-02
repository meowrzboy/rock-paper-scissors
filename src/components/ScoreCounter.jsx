import { connect } from "react-redux";

import { useTheme } from "../contexts/ThemeContext";
import { resetGame } from "../store/gameStore";

import "../App.css";

function ScoreCounter({ playerScore, computerScore, resetGame }) {
  const { isDark } = useTheme();
  return (
    <div
      className={`flex gap-[16px] font-display flex-col justify-center ${isDark ? "text-white" : "text-black"}`}
    >
      <button
        onClick={resetGame}
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
const mapStateToProps = (state) => ({
  playerScore: state.playerScore,
  computerScore: state.computerScore,
});
const mapDispatchToProps = {
  resetGame: resetGame,
};
export default connect(mapStateToProps, mapDispatchToProps)(ScoreCounter);
