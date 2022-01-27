import React from "react";

const Status = ({ setStep }) => {
  return (
    <div>
      <button onClick={() => setStep("one")}>step1</button>
      <button onClick={() => setStep("two")}>step2</button>
      <button onClick={() => setStep("three")}>step3</button>
      <button onClick={() => setStep("four")}>step4</button>
    </div>
  );
};

export default Status;
