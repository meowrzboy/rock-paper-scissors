import "../App.css";

export default function ScoreCounter() {
  return (
    <div className=" flex gap-[16px] font-display text-black flex-col justify-center">
      <div className="text-[20px] font-bold text-center">RESET THE SCORE</div>
      <div className="text-[14px] gap-[143px] font-semibold flex justify-between">
        <div>PLAYER SCORE: 0</div>
        <div>COMPUTER SCORE: 0</div>
      </div>
    </div>
  );
}
