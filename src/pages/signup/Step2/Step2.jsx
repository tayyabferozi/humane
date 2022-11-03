import React, { useState } from "react";

import "./Step2.scss";
import SelectBox from "../../../components/selectbox/SelectBox";

const Step2 = ({ incStep }) => {
  const [typeState, setTypeState] = useState("Life Coaching");

  const inputChangeHandler = (e) => {
    setTypeState(e.target.value);
  };

  return (
    <>
      <h2 className="small-title">Nice to meet you, (Name)!</h2>

      <div className="form">
        <div className="input-wrap">
          <div>What type of coaching business do you have?</div>

          <SelectBox
            value={typeState}
            onChange={inputChangeHandler}
            items={[
              {
                value: "Life Coaching",
                id: 1,
              },
              {
                value: "Health & Wellness",
                id: 2,
              },
              {
                value: "Career Development",
                id: 3,
              },
              {
                value: "Financial Coaching",
                id: 4,
              },
              {
                value: "Relationship Coaching",
                id: 5,
              },
              {
                value: "Leadership Coaching",
                id: 6,
              },
              {
                value: "Other",
                id: 7,
              },
            ]}
          />
          {typeState === "Other" && (
            <input
              className="specific-input"
              type="text"
              placeholder="Please specify"
            />
          )}
          {/* <div className="input">
            <img
              src={require("../../../images/arrow-down.png")}
              alt="arrow"
              className="arrow"
            />
          </div> */}
        </div>
      </div>

      <button onClick={incStep} className="next">
        Next <img src={require("../../../images/arrow.png")} alt="arrow" />
      </button>
    </>
  );
};

export default Step2;
