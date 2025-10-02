import { connect } from "react-redux";

import { useTheme } from "../contexts/ThemeContext";
import { winnerFinder } from "../store/gameStore";

import "../App.css";

function WinnerBlock({ playerMove, computerMove }) {
  const winner = winnerFinder(playerMove, computerMove);
  const { isDark } = useTheme();
  return (
    <div
      className={`text-nowrap relative font-display font-bold text-[40px] text-center ${isDark ? "text-[#6881D8]" : "text-[#AF2D2D]"}`}
    >
      {winner === "player" ? (
        "YOU WON ! 🎉"
      ) : winner === "computer" ? (
        "COMPUTER WON !🎉"
      ) : (
        <div className="h-[60px]"></div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  playerMove: state.playerMove,
  computerMove: state.computerMove,
});
export default connect(mapStateToProps)(WinnerBlock);
