import "./Item.css";
import React from "react";

type Props = {
  mark: number;
  position: number;
  changeMark: (i: number) => void;
};

function Item({ mark, position, changeMark }: Props) {
  return (
    <div
      className={`Block mark${mark}`}
      onClick={(e) => changeMark(position)}
    ></div>
  );
}

export default Item;
