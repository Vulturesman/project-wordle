import React from "react";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import Guess from "../Guess/Guess";

function PreviousGuess({ previousGuess, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        // Check if there's a guess at this index
        const guess = previousGuess[num];
        // If there's a guess, use its value; otherwise, pass an empty string
        const guessValue = guess ? guess.value : "";
        return <Guess key={num} value={guessValue} answer={answer} />;
      })}
    </div>
  );
}

export default PreviousGuess;
