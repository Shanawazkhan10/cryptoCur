import React from "react";

const Signup = () => {
  return (
    <div>
      <div class="vh-100 d-flex justify-content-center">
        <div class="form-access my-auto">
          <form>
            <span>Create Account</span>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Full Name" />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                placeholder="Email Address"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="Confirm Password"
              />
            </div>
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="form-checkbox"
              />
              <label class="custom-control-label" for="form-checkbox">
                I agree to the <a href="#!">Terms & Conditions</a>
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Create Account
            </button>
          </form>
          <h2>
            Already have an account?{" "}
            <a href="signin-light.html">Sign in here</a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Signup;
