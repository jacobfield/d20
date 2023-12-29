import { useState } from "react";

export function Rolld8(): JSX.Element {
  const [diceRoll, setDiceRoll] = useState<number>(randomNumber());

  function randomNumber(): number {
    let roll: number = Math.floor(Math.random() * 8) + 1;
    console.log(roll);
    return roll;
  }
  return (
    <div>
      <p className="diceTitle">d8 = {diceRoll} </p>
      <button onClick={() => setDiceRoll(randomNumber())}>Roll d8</button>
    </div>
  );
}
