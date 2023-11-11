import React from "react";

const ROWS = [
  ["Ě", "Š", "Č", "Ř", "Ž", "Ý", "Á", "Í", "É", "Ď", "Ť", "Ň"],
  ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "Ú"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ů"],
  ["Y", "X", "C", "V", "B", "N", "M", "Ó"],
];

function getStatusByLetter(validatedGuesses) {
  const statusObj = {};

  validatedGuesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      statusObj[letter] = status;
    });
  });

  return statusObj;
}

const Keyboard = ({ validatedGuesses }) => {
  let statusByLetter = getStatusByLetter(validatedGuesses);

  return (
    <div className="keyboard">
      {ROWS.map((row, index) => (
        <div className="keyboard-row" key={index}>
          {row.map((letter) => (
            <div
              key={letter}
              className={`letter ${statusByLetter[letter] || ""}`}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
