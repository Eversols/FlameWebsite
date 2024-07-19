/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import StepEmail from "../../Components/Steps/StepEmail";
import StepName from "../../Components/Steps/StepName";
import StepOtp from "../../Components/Steps/StepOtp";
import StepPassword from "../../Components/Steps/StepPassword";
import Header from "../../Components/LandingPage/Header";
import { voxService } from "../../Services/voximplant";
import MessengerService from "../../Services/voximplant/messenger";
// import Gender from "../Gender/index";
// import Mood from "../Mood/index";
// import Orientation from "../Orientation/index";

const steps = {
  1: StepEmail,
  2: StepOtp,
  3: StepName,
  4: StepPassword,
};

const index = () => {
  const [step, setStep] = useState(1);

  const Step = steps[step];

  useEffect(()=>{
    voxService.logout()
  },[])

  function onNext() {
    setStep(step + 1);
  }

  return (
    <>
      <Header />
      <Step onNext={onNext} setStep={setStep} step={step} />
    </>
  );
};

export default index;
