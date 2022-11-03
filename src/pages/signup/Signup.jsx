import React, { useState } from "react";

import "./Signup.scss";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step3";
import Step5 from "./Step5/Step5";
import Step6 from "./Step6/Step6";
import Step7 from "./Step7/Step7";

const Signup = () => {
  const [step, setStep] = useState(2);

  const incStep = (e) => {
    e.preventDefault();

    setStep((prevState) => {
      if (prevState < 8) {
        return ++prevState;
      }

      return prevState;
    });
  };

  return (
    <div className="signup">
      <div className="left">
        <div className="left-main">
          <img src={require("../../images/logo-2.png")} alt="logo" />
          <h1>
            Welcome
            <br />
            to Humane Coaching
          </h1>
          <img
            className="mock"
            src={require("../../images/signup.png")}
            alt="signup"
          />
        </div>
      </div>
      <div className="right">
        <div className="right-main-wrap">
          <div className="right-main">
            {step === 1 && <Step1 incStep={incStep} />}
            {step === 2 && <Step2 incStep={incStep} />}
            {step === 3 && <Step3 incStep={incStep} />}
            {step === 4 && <Step4 incStep={incStep} />}
            {step === 5 && <Step5 incStep={incStep} />}
            {step === 6 && <Step6 incStep={incStep} />}
            {step === 7 && <Step7 incStep={incStep} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
