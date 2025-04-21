import React, { useState } from "react";

const Step1 = ({ next }) => {
  return (
    <>
      <div>
        <p>This is Step 1</p>
        <button disabled>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </>
  );
};

const Step2 = ({ next, prev }) => {
  return (
    <>
      <div>
        <p>This is Step 2</p>
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </>
  );
};

const Step3 = ({ next, prev }) => {
  return (
    <>
      <div>
        <p>This is Step 3</p>
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </>
  );
};

const Step4 = ({ prev, submit }) => {
  return (
    <>
      <div>
        <p>This is Step 4</p>
        <button onClick={prev}>Previous</button>
        <button disabled>Next</button>
        <button onClick={submit}>Submit</button>
      </div>
    </>
  );
};

const MultiStep = () => {
  const [step, setStep] = useState(1);

  const prev = () => {
    setStep((prev) => prev - 1);
  };

  const next = () => {
    setStep((prev) => prev + 1);
  };

  const submit = () => {
    setStep(1);
  };
  return (
    <>
      <h2>Multi Step</h2>
      {step === 1 && <Step1 next={next} />}
      {step === 2 && <Step2 next={next} prev={prev} />}
      {step === 3 && <Step3 next={next} prev={prev} />}
      {step === 4 && <Step4 prev={prev} submit={submit} />}
    </>
  );
};

export default MultiStep;
