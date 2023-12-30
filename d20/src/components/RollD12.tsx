import { useState } from "react";
import { playAudio } from "./audioPlayer.tsx";
export function Rolld12(): JSX.Element {
  const [diceRoll, setDiceRoll] = useState<number>(randomNumber());

  function randomNumber(): number {
    let roll: number = Math.floor(Math.random() * 12) + 1;
    console.log(roll);
    return roll;
  }
  async function handleButtonClick() {
    setDiceRoll(randomNumber());
    await playAudio();
  }
  return (
    <div>
      <p className="diceTitle">d12 = {diceRoll} </p>
      <button onClick={handleButtonClick}>Roll d12</button>
    </div>
  );
}
