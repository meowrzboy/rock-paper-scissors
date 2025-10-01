import { connect } from "react-redux";

import { winnerFinder } from "../store/gameStore";

import "../App.css";

function WinnerBlock({ playerMove, computerMove }) {
  const winner = winnerFinder(playerMove, computerMove);
  return (
    <div className="text-nowrap relative font-display font-bold text-[40px] text-[#AF2D2D] text-center">
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
