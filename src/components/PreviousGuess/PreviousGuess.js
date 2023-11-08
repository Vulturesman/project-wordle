import React from "react";

function PreviousGuess({ previousGuess }) {
  return (
    <div className="guess-results">
      {previousGuess.map(({ value, id }) => (
        <p key={id} className="guess">
          {value}
        </p>
      ))}
    </div>
  );
}

export default PreviousGuess;
