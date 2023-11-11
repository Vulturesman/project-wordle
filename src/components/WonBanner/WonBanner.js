import React from "react";

import Banner from "../Banner/Banner";

function WonBanner({ numOfGuesses }) {
  return (
    <Banner status="happy">
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
