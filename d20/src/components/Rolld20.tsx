// make a custom hook that produces a random number between 1-20, type number
// use math.floor and math.random*20
// Create some state that displays the randomly generated number
// const [diceRoll, setDiceRoll] = useState<number>(20);
// Create a button
// Create a handleClick function to handle the button being pressed
// handleClick calls the dice roll function
// display the result reactively
// import that into the react component
import { useState } from "react";

export function Rolld20(): JSX.Element {
  const [diceRoll, setDiceRoll] = useState<number>(randomNumber());

  function randomNumber(): number {
    let roll: number = Math.floor(Math.random() * 20) + 1;
    console.log(roll);
    return roll;
  }
  return (
    <>
      <img src={`/d20-imgs/${diceRoll}.png`} alt="result of dice roll" />
      <div>
        <p className="diceTitle">
          You rolled <br /> {diceRoll}{" "}
        </p>
        <button onClick={() => setDiceRoll(randomNumber())}>Roll d20</button>
      </div>
    </>
  );
}
