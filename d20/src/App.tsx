import React from "react";
import lobgo from "./lobgo.png";
import "./App.css";
import { AllDice } from "./components/AllDice.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"dice.png"} className="App-logo" alt="logo" />
        <p>Roll the dice!</p>
        <AllDice></AllDice>
      </header>
    </div>
  );
}

export default App;
