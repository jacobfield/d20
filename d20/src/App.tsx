import React from "react";
import lobgo from "./lobgo.png";
import "./App.css";
import { AllDice } from "./components/AllDice.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"dice.png"} className="App-logo" alt="logo" />
        <p className="appTitle">Roll the dice!</p>
        <img src={"dice.png"} className="App-logo" alt="logo" />
      </header>
      <AllDice></AllDice>
    </div>
  );
}

export default App;
