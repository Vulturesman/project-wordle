import React, { useState } from "react";

function GuessInput({ handleSubmitGuess, status }) {
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
      <label htmlFor="guess-input">Napiš svůj tip:</label>
      <input
        required
        disabled={status !== "running"}
        id="guess-input"
        type="text"
        value={input}
        pattern="^[\u0041-\u005A\u0061-\u007A\u00C1\u010C\u010E\u00C9\u011A\u00CD\u0147\u00D3\u0158\u0160\u0164\u00DA\u016E\u00DD\u017D\u00E1\u010D\u010F\u00E9\u011B\u00ED\u0148\u00F3\u0159\u0161\u0165\u00FA\u016F\u00FD\u017E]{5}$"
        title="Zadej přesně 5 písmen."
        onChange={(ev) => {
          setInput(ev.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
