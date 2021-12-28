import React from "react";

const MarketScreener = () => {
  return (
    <div>
      <h1>MarketSreeenr</h1>
      <div class="container-fluid mtb15">
        <div class="row">
          <div class="col-md-12">
            {/* <!-- TradingView Widget BEGIN --> */}
            <div class="tradingview-widget-container">
              <div class="tradingview-widget-container__widget"></div>
              <h5>scripts add here</h5>
            </div>
            {/* <!-- TradingView Widget END --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketScreener;
