import React from "react";
import { Link } from "react-router-dom";

import Checkbox from "../../components/checkbox/Checkbox";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <img
        className="logo"
        src={require("../../images/logo-2.png")}
        alt="logo"
      />

      <div className="card">
        <h1 className="title">Login</h1>

        <form action="">
          <div className="form-row">
            <div className="left d-none d-sm-block"></div>
            <div className="right">
              <div className="login-btns">
                <button>
                  <img src={require("../../images/google.png")} alt="google" />
                  Sign-in with Google
                </button>
                <button>
                  Sign-in using
                  <img src={require("../../images/sso.png")} alt="sso" />
                </button>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="left">
              <img
                src={require("../../images/briefcase.png")}
                alt="briefcase"
              />
            </div>
            <div className="right">
              <label htmlFor="username">Username</label>
              <input type="text" />
            </div>
          </div>
          <div className="form-row">
            <div className="left">
              <img src={require("../../images/lock.png")} alt="lock" />
            </div>
            <div className="right">
              <label htmlFor="username">Password</label>
              <input type="password" />
            </div>
          </div>
          <div className="bottom">
            <Checkbox text="Remember Me" />
            <Link to="/">Forgot Password</Link>
          </div>

          <button className="signin">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
