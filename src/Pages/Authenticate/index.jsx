/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import StepEmail from "../../Components/Steps/StepEmail";
import StepGender from "../../Components/Steps/StepGender";
import StepMood from "../../Components/Steps/StepMood";
import StepName from "../../Components/Steps/StepName";
import StepOrientation from "../../Components/Steps/StepOrientation";
import StepOtp from "../../Components/Steps/StepOtp";
import StepPassword from "../../Components/Steps/StepPassword";
import StepRegion from "../../Components/Steps/StepRegion";

const steps = {
  1: StepName,
  // for testing
  // 1: StepEmail,
  // 2: StepOtp,
  // 3: StepName,
  // 3: StepPassword,
  // 4: StepMood,
  // 5: StepRegion,
  // 6:StepGender
  // 7: StepOrientation,
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
