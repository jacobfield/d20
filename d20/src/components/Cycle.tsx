import { Rolld20 } from "./Rolld20.tsx";
import { Rolld4 } from "./RollD4.tsx";
import { Rolld6 } from "./RollD6.tsx";
import { Rolld8 } from "./RollD8.tsx";
import { Rolld10 } from "./RollD10.tsx";
import { Rolld12 } from "./RollD12.tsx";
import { Rolld100 } from "./RollD100.tsx";

import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";

// upon left arrow click, cycle through array lower, upon right cycle higher
// define ts array of objects
const allDice: { dice: JSX.Element; name: string }[] = [
  { dice: <Rolld20 />, name: "D20" },
  { dice: <Rolld4 />, name: "D4" },
  { dice: <Rolld6 />, name: "D6" },
  { dice: <Rolld8 />, name: "D8" },
  { dice: <Rolld10 />, name: "D10" },
  { dice: <Rolld12 />, name: "D12" },
  { dice: <Rolld100 />, name: "D100" },
];

export function Cycle(): JSX.Element {
  // Declaring index state
  const [index, setIndex] = useState<number>(0);

  function leftArrowPress(): void {
    setIndex(
      // % ensures that the index will always cycle back to the last item when going below 0,
      (previousIndex) => (previousIndex - 1 + allDice.length) % allDice.length
    );
  }

  function rightArrowPress(): void {
    // % ensures it cycles back to the first item when going above the array length.
    setIndex((previousIndex) => (previousIndex + 1) % allDice.length);
  }

  return (
    <div className="diceGrid">
      <button onClick={leftArrowPress}>
        <FaArrowAltCircleLeft className="button"></FaArrowAltCircleLeft>
      </button>
      <div>
        <p className="diceTitle">Roll {allDice[index].name}</p>
        {allDice[index].dice}
      </div>
      <button onClick={rightArrowPress}>
        <FaArrowAltCircleRight className="button"></FaArrowAltCircleRight>
      </button>
    </div>
  );
}

// Render the two arrows
// On arrow press, increment up or down - two functions, one for up, one for down
// make it be on click, handle index increment / decrement.
//If decrement results in <0, set to 7, if increment results in >7, set to 0
// based on index, display that dice
