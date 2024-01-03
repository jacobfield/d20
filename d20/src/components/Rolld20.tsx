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
import { playAudio } from "./audioPlayer.tsx";
import { FaDiceD20 } from "react-icons/fa6";
export function Rolld20(): JSX.Element {
  const [diceRoll, setDiceRoll] = useState<number>(randomNumber());

  function randomNumber(): number {
    let roll: number = Math.floor(Math.random() * 20) + 1;
    console.log(roll);
    return roll;
  }

  async function handleButtonClick() {
    setDiceRoll(randomNumber());
    await playAudio();
  }
  return (
    <>
      <img
        className="d20DiceImg"
        src={`/d20-imgs/${diceRoll}.png`}
        alt="result of dice roll"
      />
      <div>
        {/* <p className="diceTitle">
          You rolled <br /> {diceRoll}{" "}
        </p> */}
        <br></br>
        <button className="rollButton" onClick={handleButtonClick}>
          Roll d20
        </button>
      </div>
    </>
  );
}
