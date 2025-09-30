import Container from "./components/Container";
import GameContainer from "./components/GameContainer";
import GameHandler from "./components/GameHandler";
import GameTitle from "./components/GameTitle";
import ToggleTheme from "./components/ToggleTheme";
import WinnerBlock from "./components/WinnerBlock";

import "./App.css";

export default function App() {
  return (
    <>
      <Container>
        <ToggleTheme />
        <GameContainer>
          <GameTitle />
          <WinnerBlock />
          <GameHandler />
        </GameContainer>
      </Container>
    </>
  );
}
