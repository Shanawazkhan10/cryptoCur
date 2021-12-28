import React from "react";

const ErrorComponent = () => {
  return (
    <div>
      <h1>ErrorComponent</h1>
      <div className="error-page vh-100 d-flex justify-content-center text-center">
        <div className="my-auto">
          <h2>404</h2>
          <p>Oops something went wrong</p>
          <a href="exchange-light.html" className="btn">
            Back to Home <i className="icon ion-md-home"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
