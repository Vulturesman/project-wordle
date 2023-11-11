import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

import GuessInput from "../GuessInput/GuessInput";
import PreviousGuess from "../PreviousGuess";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
import Keyboard from "../Keyboard/Keyboard";

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [previousGuess, setPreviousGuess] = useState([]);
  const [status, setStatus] = useState("running");

  console.log(answer);

  function handleSubmitGuess(input) {
    const nextGuesses = [...previousGuess, input];
    setPreviousGuess(nextGuesses);

    if (input === answer) {
      setStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
    }
  }

  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setPreviousGuess([]);
    setStatus("running");
  }

  const validatedGuesses = previousGuess.map((guess) =>
    checkGuess(guess, answer)
  );

  return (
    <>
      <PreviousGuess validatedGuesses={validatedGuesses} />

      <GuessInput status={status} handleSubmitGuess={handleSubmitGuess} />

      <Keyboard validatedGuesses={validatedGuesses} />

      {status === "won" && (
        <WonBanner
          numOfGuesses={previousGuess.length}
          handleRestart={handleRestart}
        />
      )}
      {status === "lost" && (
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
