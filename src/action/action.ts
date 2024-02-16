export const setMarks = (marks: number[]) => ({
  type: "SET_MARKS",
  payload: marks,
});

export const setPlayer = (player: number) => ({
  type: "SET_PLAYER",
  payload: player,
});

export const setGameOver = (status: boolean) => ({
  type: "SET_GAMEOVER",
  payload: status,
});

export const setWinner = (win: null | number) => ({
  type: "SET_WINNER",
  payload: win,
});
