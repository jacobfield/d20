import { Rolld20 } from "./RollD20.tsx";

export function AllDice(): JSX.Element {
  // put imports into an array (maybe array of objects, so can also have name.)
  // arrow on either side of page
  // on arrow clock, move through dice being rendered.
  return (
    <div>
      <Rolld20></Rolld20>
    </div>
  );
}

// Plan
// Add all other dice - d4, d6, d8, d10, d12, d100
// Add option to roll with mods
// Add option to roll multiple dice eg: 2d20
// Add option to roll multiple types of dice eg: d20 + d10
