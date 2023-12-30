import { useState } from "react";
import { playAudio } from "./audioPlayer.tsx";
export function Rolld8(): JSX.Element {
  const [diceRoll, setDiceRoll] = useState<number>(randomNumber());

  function randomNumber(): number {
    let roll: number = Math.floor(Math.random() * 8) + 1;
    console.log(roll);
    return roll;
  }
  async function handleButtonClick() {
    setDiceRoll(randomNumber());
    await playAudio();
  }
  return (
    <div>
      <p className="diceTitle">d8 = {diceRoll} </p>
      <button onClick={handleButtonClick}>Roll d8</button>
    </div>
  );
}
