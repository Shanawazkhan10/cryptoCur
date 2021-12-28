import React from "react";

const Signin = () => {
  return (
    <div>
      <div className="vh-100 d-flex justify-content-center">
        <div className="form-access my-auto">
          <form>
            <span>Sign In</span>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="text-right">
              <a href="reset-password-light.html">Forgot Password?</a>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="form-checkbox"
              />
              <label className="custom-control-label" for="form-checkbox">
                Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </form>
          <h2>
            Don't have an account? <a href="signup-light.html">Sign up here</a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Signin;
