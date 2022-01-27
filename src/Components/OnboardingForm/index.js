import React, { useState } from "react";
import FormFour from "./FormFour";
import FormOne from "./FormOne";
import FormThree from "./FormThree";
import FormTwo from "./FormTwo";
import Status from "./Status";

const OnboardingForm = () => {
  const [step, setStep] = useState("one");
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <h1>Eden</h1>
      <Status setStep={setStep} />
      {step === "one" && <FormOne />}
      {step === "two" && <FormTwo />}
      {step === "three" && <FormThree />}
      {step === "four" && <FormFour />}
    </div>
  );
};

export default OnboardingForm;
