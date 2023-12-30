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
    <div>
      <p className="diceTitle">d4 = {diceRoll} </p>
      <button onClick={handleButtonClick}>Roll d4</button>
    </div>
  );
}
