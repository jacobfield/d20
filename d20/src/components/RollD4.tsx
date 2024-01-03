import { useState } from "react";
import { playAudio } from "./audioPlayer.tsx";
export function Rolld4(): JSX.Element {
  const [diceRoll, setDiceRoll] = useState<number>(randomNumber());

  function randomNumber(): number {
    let roll: number = Math.floor(Math.random() * 4) + 1;
    console.log(roll);
    return roll;
  }

  async function handleButtonClick() {
    setDiceRoll(randomNumber());
    await playAudio();
  }
  return (
    <>
      <img
        className="d4DiceImg"
        src={`/d4-imgs/${diceRoll}.png`}
        alt="Result of dice roll"
      />
      <div>
        {/* <p className="diceTitle">d4 = {diceRoll} </p> */}
        <br></br>
        <button className="rollButton" onClick={handleButtonClick}>
          Roll d4
        </button>
      </div>
    </>
  );
}
