import { useState } from "react";

export function Rolld6(): JSX.Element {
  const [diceRoll, setDiceRoll] = useState<number>(randomNumber());

  function randomNumber(): number {
    let roll: number = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
    return roll;
  }
  return (
    <div>
      <p>d6 = {diceRoll} </p>
      <button onClick={() => setDiceRoll(randomNumber())}>Roll d6</button>
    </div>
  );
}
