import React from "react";

import Banner from "../Banner";

function LostBanner({ answer, handleRestart }) {
  return (
    <Banner
      status="sad"
      action={handleRestart}
      actionText="Chceš to zkusit ještě jednou? Klikni ZDE."
    >
      <p>
        Sorry, nic moc výkon. Správně bylo: <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;
