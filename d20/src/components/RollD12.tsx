import { useState } from "react";

export function Rolld12(): JSX.Element {
  const [diceRoll, setDiceRoll] = useState<number>(randomNumber());

  function randomNumber(): number {
    let roll: number = Math.floor(Math.random() * 12) + 1;
    console.log(roll);
    return roll;
  }
  return (
    <div>
      <p className="diceTitle">d12 = {diceRoll} </p>
      <button onClick={() => setDiceRoll(randomNumber())}>Roll d12</button>
    </div>
  );
}
