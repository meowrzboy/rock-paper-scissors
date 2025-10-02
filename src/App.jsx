import ChooseMoveBlock from "./components/ChooseMoveBlock";
import Container from "./components/Container";
import GameContainer from "./components/GameContainer";
import GameTitle from "./components/GameTitle";
import GameplayBlock from "./components/GameplayBlock";
import ScoreCounter from "./components/ScoreCounter";
import ToggleTheme from "./components/ToggleTheme";
import WinnerBlock from "./components/WinnerBlock";
import { ThemeProvider } from "./contexts/ThemeContext";

import "./App.css";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Container>
          <ToggleTheme />
          <GameContainer>
            <GameTitle />
            <ScoreCounter />
            <WinnerBlock />
            <GameplayBlock />
            <ChooseMoveBlock />
          </GameContainer>
        </Container>
      </ThemeProvider>
    </>
  );
}
