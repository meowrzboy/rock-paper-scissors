import { legacy_createStore as createStore } from "redux";

const SET_PLAYER_MOVE = "SET_PLAYER_MOVE";
const SET_COMPUTER_MOVE = "SET_COMPUTER_MOVE";
const UPDATE_SCORES = "UPDATE_SCORES";
const RESET_GAME = "RESET_GAME";

export const setPlayerMove = (move) => ({
  type: SET_PLAYER_MOVE,
  payload: move,
});

export const setComputerMove = (move) => ({
  type: SET_COMPUTER_MOVE,
  payload: move,
});

export const updateScores = (playerMove, computerMove) => ({
  type: UPDATE_SCORES,
  payload: { playerMove, computerMove },
});

export const resetGame = () => ({
  type: RESET_GAME,
});

const initialState = {
  playerMove: null,
  computerMove: null,
  playerScore: 0,
  computerScore: 0,
};

const winnerFinder = (playerMove, computerMove) => {
  if (playerMove === computerMove) {
    return "draw";
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
};

export { winnerFinder };

const gameReducer = (state = initialState, action) => {
  console.log("Reducer received action:", action);
  switch (action.type) {
    case SET_PLAYER_MOVE:
      return {
        ...state,
        playerMove: action.payload,
      };
    case SET_COMPUTER_MOVE:
      console.log("SET_COMPUTER_MOVE action:", action);
      return {
        ...state,
        computerMove: action.payload,
      };
    case UPDATE_SCORES: {
      const { playerMove, computerMove } = action.payload;
      const winner = winnerFinder(playerMove, computerMove);
      if (winner === "player") {
        return {
          ...state,
          playerScore: state.playerScore + 1,
        };
      } else if (winner === "computer") {
        return {
          ...state,
          computerScore: state.computerScore + 1,
        };
      } else {
        return state;
      }
    }
    case RESET_GAME:
      return initialState;
    default:
      return state;
  }
};

const store = createStore(gameReducer);

export default store;
