import React from "react";

import Banner from "../Banner";

function LostBanner({ answer }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, nic moc výkon. Správně bylo: <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;
