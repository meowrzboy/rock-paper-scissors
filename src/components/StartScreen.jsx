import "../App.css";

export default function StartScreen({ onStartGame }) {
  return (
    <div className="flex gap-[32px]">
      <button
        className="min-w-[186px] h-[90px] rounded-[14px] bg-[#DF2E38] cursor-pointer"
        onClick={onStartGame}
      >
        <div className="font-display font-bold text-[27px] text-white">
          PLAY
        </div>
      </button>
      <div className="font-display font-bold text-[37px] text-[#070A52] leading-[100%] flex items-center">
        Rock Paper Scissors <br /> The game
      </div>
    </div>
  );
}
