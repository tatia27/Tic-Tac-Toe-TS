type Action<T> = {
  type: string;
  payload?: T;
};

type ActionMarks = Action<number[]>;
type ActionPlayer = Action<number>;
type ActionGameover = Action<boolean>;
type ActionWinner = Action<null | number>;

type InitialState = {
  marks: number[];
  player: number;
  gameOver: boolean;
  win: null | number;
};

let initial_state: InitialState = {
  marks: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  player: 1,
  gameOver: false,
  win: null,
};

type ActionVariant = ActionPlayer | ActionMarks | ActionGameover | ActionWinner;

const reducer = (state = initial_state, action: ActionVariant) => {
  switch (action.type) {
    case "SET_PLAYER":
      return { ...state, player: action.payload as InitialState["player"] };
    case "SET_MARKS":
      return { ...state, marks: action.payload as InitialState["marks"] };
    case "SET_GAMEOVER":
      return { ...state, gameOver: action.payload as InitialState["gameOver"] };
    case "SET_WINNER":
      return { ...state, win: action.payload as InitialState["win"] };
    default:
      return state;
  }
};

export default reducer;
