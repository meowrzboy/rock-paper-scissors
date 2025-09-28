import BackgroundContainer from "./components/BackgroundContainer";
import Container from "./components/Container";
import GameTitle from "./components/GameTitle";
import GameplayBlock from "./components/GameplayBlock";
import ScoreCounter from "./components/ScoreCounter";
import WinnerBlock from "./components/WinnerBlock";

import "./App.css";

export default function App() {
  return (
    <>
      <BackgroundContainer>
        <Container>
          <GameTitle />
          <ScoreCounter />
          <WinnerBlock />
          <GameplayBlock />
        </Container>
      </BackgroundContainer>
    </>
  );
}
