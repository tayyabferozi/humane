import React from "react";

const Step3 = ({ incStep }) => {
  return (
    <>
      <div className="form">
        <div className="input-wrap">
          <div>What is your role?</div>

          <div className="input">
            <input type="text" />
          </div>
        </div>
      </div>

      <button onClick={incStep} className="next">
        Next <img src={require("../../../images/arrow.png")} alt="arrow" />
      </button>
    </>
  );
};

export default Step3;
