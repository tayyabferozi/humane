import React from "react";

const Step6 = ({ incStep }) => {
  return (
    <>
      <div className="form">
        <div className="input-wrap">
          <div>
            Please enter the verification code we sent to: <br />
            name@email.com
          </div>

          <div className="input">
            <input type="text" className="code" />
          </div>
        </div>
      </div>

      <button onClick={incStep} className="next">
        Next <img src={require("../../../images/arrow.png")} alt="arrow" />
      </button>
    </>
  );
};

export default Step6;
