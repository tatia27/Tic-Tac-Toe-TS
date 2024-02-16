import { useEffect } from "react";
import React from "react";
import Item from "../Item/Item";
import { useSelector, useDispatch } from "react-redux";
import { setMarks, setPlayer, setGameOver, setWinner } from "../action/action";
import { RootState } from "../store/store";
import "./Board.css";

function Board() {
  const dispatch = useDispatch();
  const marks = useSelector((state: RootState) => state.posts.marks);
  const player = useSelector((state: RootState) => state.posts.player);
  const gameOver = useSelector((state: RootState) => state.posts.gameOver);
  const winner = useSelector((state: RootState) => state.posts.win);

  useEffect(() => {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let flag = true;

    for (let i of combinations) {
      if (marks[i[0]] === 1 && marks[i[1]] === 1 && marks[i[2]] === 1) {
        dispatch(setWinner(1));
        dispatch(setGameOver(true));
        flag = false;
      }
      if (marks[i[0]] === 2 && marks[i[1]] === 2 && marks[i[2]] === 2) {
        dispatch(setWinner(2));
        dispatch(setGameOver(true));
        flag = false;
      }
      // console.log(winner);
      if (flag && marks.every((mark: number) => mark !== 0)) {
        dispatch(setWinner(-1));
        dispatch(setGameOver(true));
      }

      // if (
      //   (marks[i[0]] !== 1 && marks[i[1]] !== 1 && marks[i[2]] !== 1) ||
      //   (marks[i[0]] !== 2 && marks[i[1]] !== 2 && marks[i[2]] !== 2)
      // ) {
      //   dispatch(setWinner("ничья"));
      //   dispatch(setGameOver(true));
      // }
    }
  }, [marks, dispatch]);

  const changeMark = (i: number) => {
    const arr = [...marks];
    if (arr[i] === 0 && !gameOver) {
      arr[i] = player;
      dispatch(setMarks(arr));
      dispatch(setPlayer(player === 1 ? 2 : 1));
    } else {
      alert("Нажми на свободное поле или заверши игру");
    }
  };

  function restart() {
    dispatch(setMarks([0, 0, 0, 0, 0, 0, 0, 0, 0]));
    dispatch(setGameOver(false));
    dispatch(setWinner(null));
  }

  return (
    <div>
      <div>
        <Item mark={marks[0]} position={0} changeMark={() => changeMark(0)} />
        <Item mark={marks[1]} position={1} changeMark={() => changeMark(1)} />
        <Item mark={marks[2]} position={2} changeMark={() => changeMark(2)} />
      </div>
      <div>
        <Item mark={marks[3]} position={3} changeMark={() => changeMark(3)} />
        <Item mark={marks[4]} position={4} changeMark={() => changeMark(4)} />
        <Item mark={marks[5]} position={5} changeMark={() => changeMark(5)} />
      </div>
      <div>
        <Item mark={marks[6]} position={6} changeMark={() => changeMark(6)} />
        <Item mark={marks[7]} position={7} changeMark={() => changeMark(7)} />
        <Item mark={marks[8]} position={8} changeMark={() => changeMark(8)} />
      </div>
      {winner && <p>Победил игрок {winner}</p>}
      <button onClick={restart}>Перезапустить</button>
    </div>
  );
}

export default Board;
