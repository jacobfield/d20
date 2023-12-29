import { useState } from "react";

export function Rolld4(): JSX.Element {
  const [diceRoll, setDiceRoll] = useState<number>(randomNumber());

  function randomNumber(): number {
    let roll: number = Math.floor(Math.random() * 4) + 1;
    console.log(roll);
    return roll;
  }
  return (
    <div>
      <p className="diceTitle">d4 = {diceRoll} </p>
      <button onClick={() => setDiceRoll(randomNumber())}>Roll d4</button>
    </div>
  );
}
