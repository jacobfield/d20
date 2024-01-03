import React, { useState } from "react";
import { FaArrowsRotate } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { HiMiniMinusSmall } from "react-icons/hi2";

export function LifeCounter(): JSX.Element {
  const [player1Life, setPlayer1Life] = useState<number>(20);
  const [player2Life, setPlayer2Life] = useState<number>(20);
  const [player1Name, setPlayer1Name] = useState<string>("Player 1");
  const [player2Name, setPlayer2Name] = useState<string>("Player 2");
  const [isEditingPlayer1Name, setIsEditingPlayer1Name] =
    useState<boolean>(false);
  const [isEditingPlayer2Name, setIsEditingPlayer2Name] =
    useState<boolean>(false);

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

  const toggleEditPlayer1Name = () => {
    setIsEditingPlayer1Name((prev) => !prev);
  };
  const toggleEditPlayer2Name = () => {
    setIsEditingPlayer2Name((prev) => !prev);
  };
  return (
    <div className="playerContainer">
      <div className="Player2">
        <br></br>
        {isEditingPlayer2Name ? (
          <input
            className="inputBox2"
            type="text"
            value={player2Name}
            onChange={handle2NameChange}
            onBlur={toggleEditPlayer2Name}
            placeholder="Enter Player 2's Name"
          />
        ) : (
          <p className="playerName" onClick={toggleEditPlayer2Name}>
            {player2Name}
          </p>
        )}
        <br></br>
        <HiMiniMinusSmall
          className="playerGridItem"
          onClick={handle2Decrement}
        />
        <p className="playerGridItem">{player2Life}</p>
        <FiPlus className="playerGridItem" onClick={handle2Increment} />
      </div>

      <br></br>
      <button className="rollButton" onClick={resetLife}>
        <FaArrowsRotate />
      </button>

      <br></br>
      <br></br>
      <div className="Player1">
        <br></br>
        {isEditingPlayer1Name ? (
          <input
            className="inputBox1"
            type="text"
            value={player1Name}
            onChange={handle1NameChange}
            onBlur={toggleEditPlayer1Name}
            placeholder="Enter Player 1's Name"
          />
        ) : (
          <p className="playerName" onClick={toggleEditPlayer1Name}>
            {player1Name}
          </p>
        )}
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
