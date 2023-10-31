/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import StepEmail from "../../Components/Steps/StepEmail";
import StepOtp from "../../Components/Steps/StepOtp";
import StepName from "../../Components/Steps/StepName";
import StepPassword from "../../Components/Steps/StepPassword";

const steps = {
  1: StepEmail,
  2: StepOtp,
  3: StepName,
  4: StepPassword,
};

const index = () => {
  const [step, setStep] = useState(1);

  const Step = steps[step];

  function onNext() {
    setStep(step + 1);
  }

  return <Step onNext={onNext} setStep={setStep} step={step} />;
};

export default index;
