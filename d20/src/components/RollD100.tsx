import { useState } from "react";
import { playAudio } from "./audioPlayer.tsx";
export function Rolld100(): JSX.Element {
  const [diceRoll, setDiceRoll] = useState<number>(randomNumber());

  function randomNumber(): number {
    let roll: number = Math.floor(Math.random() * 100) + 1;
    console.log(roll);
    return roll;
  }
  async function handleButtonClick() {
    setDiceRoll(randomNumber());
    await playAudio();
  }
  return (
    <>
      <div className="d100Container">
        <img
          className="d100DiceImg"
          src="/d100-imgs/blank.png"
          alt={`Dice showing result of roll = ${diceRoll}`}
        />
        <p className="d100Display">{diceRoll === 100 ? "💯" : diceRoll}</p>
      </div>
      <div>
        {/* <p className="diceTitle">d100 = {diceRoll} </p> */}
        <br></br>
        <button className="rollButton" onClick={handleButtonClick}>
          Roll d100
        </button>
      </div>
    </>
  );
}
