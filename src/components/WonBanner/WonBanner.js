import React from "react";

import Banner from "../Banner/Banner";

function WonBanner({ numOfGuesses, handleRestart }) {
  return (
    <Banner
      status="happy"
      action={handleRestart}
      actionText="Věříš si na další slovo? Klikni ZDE."
    >
      <p>
        <strong>Paráda!</strong> Tajné slovo uhodnuto{" "}
        <strong>
          {numOfGuesses === 1 ? "na první pokus" : `na ${numOfGuesses}. pokus`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;
