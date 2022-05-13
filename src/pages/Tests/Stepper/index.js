import { useState } from "react";
import "./stepper.scss";

function Stepper() {
  const [step, setStep] = useState(1);

  const handleNextClick = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrevClick = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="stepper-container">
      <section className={`card ${step === 1 ? "active" : ""}`} data-step="1">
        <h3>Step1</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        reiciendis modi porro amet obcaecati maxime inventore nostrum ex
        officiis commodi, vel, temporibus ipsum alias ipsa, exercitationem
        dolores nihil deserunt eos!
        <div>
          <button onClick={handleNextClick}>Next</button>
        </div>
      </section>
      <section className={`card ${step === 2 ? "active" : ""}`} data-step="2">
        <h3>Step2</h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ipsa
        excepturi asperiores dignissimos commodi, accusantium, aut at provident
        consectetur quasi eveniet corporis unde temporibus harum error. Ex quia
        molestiae quaerat.
        <div>
          <button onClick={handlePrevClick}>Previous</button>
          <button onClick={handleNextClick}>Next</button>
        </div>
      </section>
      <section className={`card ${step === 3 ? "active" : ""}`} data-step="3">
        <h3>Step3</h3>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, dolores
        maxime ullam voluptate quod consequuntur sit accusamus reiciendis, quos
        error obcaecati adipisci nulla inventore impedit officiis ea non
        perspiciatis dolor.
        <div>
          <button onClick={handlePrevClick}>Previous</button>
        </div>
      </section>
    </div>
  );
}

export default Stepper;
