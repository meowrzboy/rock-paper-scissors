import "../App.css";

export default function WinnerBlock() {
  return (
    <div className="text-nowrap relative font-display font-bold text-[40px] text-[#AF2D2D] text-center">
      <div className="block">YOU WON ! 🎉</div>
      <div className="hidden">COMPUTER WON ! 🎉</div>
    </div>
  );
}
