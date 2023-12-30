import { useState } from "react";
import { playAudio } from "./audioPlayer.tsx";
export function Rolld6(): JSX.Element {
  const [diceRoll, setDiceRoll] = useState<number>(randomNumber());

  function randomNumber(): number {
    let roll: number = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
    return roll;
  }
  async function handleButtonClick() {
    setDiceRoll(randomNumber());
    await playAudio();
  }
  return (
    <div>
      <p className="diceTitle">d6 = {diceRoll} </p>
      <button onClick={handleButtonClick}>Roll d6</button>
    </div>
  );
}
