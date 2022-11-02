import React from "react";
import { Link } from "react-router-dom";

const Step1 = ({ incStep }) => {
  return (
    <>
      <h2 className="title">Create Account </h2>

      <button className="google-signin">
        <img
          className="google"
          src={require("../../../images/google.png")}
          alt="google"
        />
        Sign up with Google
      </button>

      <div className="or">- OR -</div>

      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />

      <button onClick={incStep} className="next">
        Next <img src={require("../../../images/arrow.png")} alt="arrow" />
      </button>
      <div className="to-login">
        Already have an account? <Link to="/login">Log in</Link>
      </div>
    </>
  );
};

export default Step1;
