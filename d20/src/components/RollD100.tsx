import { useState } from "react";

export function Rolld100(): JSX.Element {
  const [diceRoll, setDiceRoll] = useState<number>(randomNumber());

  function randomNumber(): number {
    let roll: number = Math.floor(Math.random() * 100) + 1;
    console.log(roll);
    return roll;
  }
  return (
    <div>
      <p className="diceTitle">d100 = {diceRoll} </p>
      <button onClick={() => setDiceRoll(randomNumber())}>Roll d100</button>
    </div>
  );
}
