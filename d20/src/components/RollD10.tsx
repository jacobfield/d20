import { useState } from "react";
import { playAudio } from "./audioPlayer.tsx";
export function Rolld10(): JSX.Element {
  const [diceRoll, setDiceRoll] = useState<number>(randomNumber());

  function randomNumber(): number {
    let roll: number = Math.floor(Math.random() * 10) + 1;
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
        className="d10DiceImg"
        src={`/d10-imgs/${diceRoll}.png`}
        alt="result of dice roll"
      />
      <div>
        {/* <p className="diceTitle">d10 = {diceRoll} </p> */}
        <br></br>
        <button className="rollButton" onClick={handleButtonClick}>
          Roll d10
        </button>
      </div>
    </>
  );
}
