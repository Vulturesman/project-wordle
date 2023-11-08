import React, { useState } from "react";

function GuessInput({ handleSubmitGuess }) {
  const [input, setInput] = useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(ev) => {
        ev.preventDefault();
        handleSubmitGuess(input);
        setInput("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={input}
        pattern="\w{5}"
        title="5 letter word please"
        onChange={(ev) => {
          setInput(ev.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
