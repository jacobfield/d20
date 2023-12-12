import { useState } from "react";

export function Rolld10(): JSX.Element {
  const [diceRoll, setDiceRoll] = useState<number>(randomNumber());

  function randomNumber(): number {
    let roll: number = Math.floor(Math.random() * 10) + 1;
    console.log(roll);
    return roll;
  }
  return (
    <div>
      <p>d10 = {diceRoll} </p>
      <button onClick={() => setDiceRoll(randomNumber())}>Roll d10</button>
    </div>
  );
}
