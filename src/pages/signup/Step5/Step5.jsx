import React from "react";

const Step5 = ({ incStep }) => {
  return (
    <>
      <div className="form mb-4">
        <div className="input-wrap">
          <div>How many people work in your business?</div>

          <div className="input my-3">
            <input type="radio" id="1" name="employess" value="1" />
            <label for="1">1</label>

            <input type="radio" id="2-5" name="employess" value="2-5" />
            <label for="2-5">2 to 5 </label>

            <input type="radio" id="6-10" name="employess" value="6-10" />
            <label for="6-10">6 to 10</label>

            <input type="radio" id="11-25" name="employess" value="11-25" />
            <label for="11-25">11 to 25</label>

            <input type="radio" id="26-50" name="employess" value="26-50" />
            <label for="26-50">26 to 50</label>

            <input type="radio" id="51+" name="employess" value="51+" />
            <label for="51+">51 or more</label>
          </div>
        </div>
      </div>

      <button onClick={incStep} className="next">
        Next <img src={require("../../../images/arrow.png")} alt="arrow" />
      </button>
    </>
  );
};

export default Step5;
