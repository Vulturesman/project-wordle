import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput/GuessInput";
import PreviousGuess from "../PreviousGuess";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [previousGuess, setPreviousGuess] = useState([]);
  const [status, setStatus] = useState("running");

  function handleSubmitGuess(input) {
    const nextGuess = {
      value: input,
      id: `${input}-${Math.random()}`,
    };
    const nextGuesses = [...previousGuess, nextGuess];
    setPreviousGuess(nextGuesses);

    if (input === answer) {
      setStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
    }
  }

  return (
    <>
      <PreviousGuess previousGuess={previousGuess} answer={answer} />

      <GuessInput status={status} handleSubmitGuess={handleSubmitGuess} />

      {status === "won" && <WonBanner numOfGuesses={previousGuess.length} />}
      {status === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
