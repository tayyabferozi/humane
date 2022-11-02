import React from "react";
import { Link } from "react-router-dom";

const Step7 = ({ incStep }) => {
  return (
    <>
      <div className="form">
        <div className="input-wrap">
          <h2 className="small-title text-center">Congratulations!</h2>
          <div className="text-center mt-2">
            Your new account has been setup successfully!
          </div>
        </div>
      </div>

      <div className="to-login">
        Click here to <Link to="/login">Log in</Link>
      </div>
    </>
  );
};

export default Step7;
