import React from "react";

const Step2 = ({ incStep }) => {
  return (
    <>
      <h2 className="small-title">Nice to meet you, (Name)!</h2>

      <div className="form">
        <div className="input-wrap">
          <div>What type of coaching business do you have?</div>

          <div className="input">
            <input type="text" />
            <img
              src={require("../../../images/arrow-down.png")}
              alt="arrow"
              className="arrow"
            />
          </div>
        </div>
      </div>

      <button onClick={incStep} className="next">
        Next <img src={require("../../../images/arrow.png")} alt="arrow" />
      </button>
    </>
  );
};

export default Step2;
