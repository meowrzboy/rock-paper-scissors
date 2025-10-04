import { useState } from "react";

import StartScreen from "./StartScreen";

import "../App.css";

export default function GameContainer({ children }) {
  const [showStartScreen, setShowStartScreen] = useState(true);

  const handleStartGame = () => {
    setShowStartScreen(false);
  };

  return (
    <div>
      {showStartScreen ? (
        <StartScreen onStartGame={handleStartGame} />
      ) : (
        <div className="max-w-[621px] w-full gap-[32px] flex flex-col justify-center items-center">
          {children}
        </div>
      )}
    </div>
  );
}
