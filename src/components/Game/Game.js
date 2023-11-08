import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import PreviousGuess from "../PreviousGuess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [previousGuess, setPreviousGuess] = useState([]);

  function handleSubmitGuess(input) {
    const nextGuess = {
      value: input,
      id: `${input}-${Math.random()}`,
    };
    setPreviousGuess([...previousGuess, nextGuess]);
  }

  return (
    <>
      <PreviousGuess previousGuess={previousGuess} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
