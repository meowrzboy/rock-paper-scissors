import "../App.css";

export default function ScoreCounter() {
  return (
    <div className="flex gap-[16px] font-display text-black flex-col justify-center">
      <button className="cursor-pointer text-[20px] font-bold text-center">
        RESET THE SCORE
      </button>
      <div className="text-[14px] gap-[143px] font-semibold flex justify-between">
        <div>PLAYER SCORE: 0</div>
        <div>COMPUTER SCORE: 0</div>
      </div>
    </div>
  );
}
