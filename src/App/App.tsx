import "./App.css";
import React from "react";
import Board from "../Board/Board";

function App() {
  return (
    <div className="App">
      <h1 className="header">Крестики-нолики</h1>
      <Board />
    </div>
  );
}

export default App;
