import { useState } from "react";

// icon components
import { FaArrowsRotate } from "react-icons/fa6"; // reset <FaArrowsRotate />
import { FiPlus } from "react-icons/fi"; // Plus <FiPlus />
import { HiMiniMinusSmall } from "react-icons/hi2"; // minus <HiMiniMinusSmall />
export function LifeCounter(): JSX.Element {
  const [player1Life, setPlayer1Life] = useState<number>(20);
  const [player2Life, setPlayer2Life] = useState<number>(20);

  function handle1Increment() {
    setPlayer1Life(player1Life + 1);
  }
  function handle1Decrement() {
    setPlayer1Life(player1Life - 1);
  }

  function handle2Increment() {
    setPlayer2Life(player2Life + 1);
  }

  function handle2Decrement() {
    setPlayer2Life(player2Life - 1);
  }
}
