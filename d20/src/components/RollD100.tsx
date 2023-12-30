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
    <div>
      <p className="diceTitle">d100 = {diceRoll} </p>
      <button onClick={handleButtonClick}>Roll d100</button>
    </div>
  );
}
