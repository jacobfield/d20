import { useState } from "react";

import dice_0 from "../dice-audio/dice_0.mp3";
import dice_1 from "../dice-audio/dice_1.mp3";
import dice_2 from "../dice-audio/dice_2.mp3";
import dice_3 from "../dice-audio/dice_3.mp3";

export const allSounds: { sound: HTMLAudioElement; name: string }[] = [
  { sound: dice_0, name: "dice-0" },
  { sound: dice_1, name: "dice-1" },
  { sound: dice_2, name: "dice-2" },
  { sound: dice_3, name: "dice-3" },
];

export function playAudio() {
  let i: number = Math.floor(Math.random() * 4);
  const audio = new Audio(allSounds[i].sound);
  audio.play();

  return new Promise<void>((resolve) => {
    audio.addEventListener("ended", () => {
      resolve();
    });
  });
}
