import { useState } from "react";

// icon components
import { FaArrowsRotate } from "react-icons/fa6"; // reset <FaArrowsRotate />
import { FiPlus } from "react-icons/fi"; // Plus <FiPlus />
import { HiMiniMinusSmall } from "react-icons/hi2"; // minus <HiMiniMinusSmall />
export function LifeCounter(): JSX.Element {
  const [player1Life, setPlayer1Life] = useState<number>(20);
  const [player2Life, setPlayer2Life] = useState<number>(20);
  const [player1Name, setPlayer1Name] = useState<string>("Player 1");
  const [player2Name, setPlayer2Name] = useState<string>("Player 2");

  function handle1NameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPlayer1Name(event.target.value);
  }

  function handle2NameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPlayer2Name(event.target.value);
  }

  function handle1Increment() {
    setPlayer1Life(player1Life + 1);
  }
  function handle1Decrement() {
    setPlayer1Life(player1Life - 1);
  }

  function handle2Increment() {
    setPlayer2Life(player2Life + 1);
  }

  function handle2Decrement() {
    setPlayer2Life(player2Life - 1);
  }
  function resetLife() {
    setPlayer1Life(20);
    setPlayer2Life(20);
  }

  return (
    <div className="playerContainer">
      <div className="Player2">
        <br></br>
        <p className="playerName">{player2Name}</p>
        <br></br>
        <HiMiniMinusSmall
          className="playerGridItem"
          onClick={handle2Decrement}
        />
        <p className="playerGridItem">{player2Life}</p>
        <FiPlus className="playerGridItem" onClick={handle2Increment} />
      </div>
      <br></br>
      <br></br>
      <button className="rollButton" onClick={resetLife}>
        <FaArrowsRotate />
      </button>

      <br></br>
      <br></br>
      <div className="Player1">
        <br></br>
        <p className="playerName">{player1Name}</p>
        <br></br>
        <HiMiniMinusSmall
          className="playerGridItem"
          onClick={handle1Decrement}
        />
        <p className="playerGridItem">{player1Life}</p>
        <FiPlus className="playerGridItem" onClick={handle1Increment} />
      </div>
    </div>
  );
}
