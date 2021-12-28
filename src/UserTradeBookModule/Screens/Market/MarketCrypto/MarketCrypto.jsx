import React from "react";

const MarketCrypto = () => {
  return (
    <div>
      <h1>MarketCrypto</h1>
      <div className="container-fluid mtb15">
        <div className="row">
          <div className="col-md-12">
            {/* <!-- TradingView Widget BEGIN --> */}
            <div className="tradingview-widget-container">
              <div className="tradingview-widget-container__widget"></div>
              <h5>Scipts add here</h5>
            </div>
            {/* <!-- TradingView Widget END --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketCrypto;
