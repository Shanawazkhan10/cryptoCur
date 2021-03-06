import React from "react";

const LandingPage1 = () => {
  return (
    <div>
      <div className="landing-hero">
        <div className="container">
          <div className="row">
            <div className="offset-md-2 col-md-8 text-center">
              <h2>A trusted and secure cryptocurrency exchange.</h2>
              <p>
                Crypo is the most advanced UI kit for making the Blockchain
                platform. This kit comes with 4 different exchange page, market,
                wallet and many more
              </p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Email"
                  aria-label="Enter Your Email"
                  aria-describedby="button-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary"
                    type="button"
                    id="button-addon2"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid no-fluid">
        <div className="row sm-gutters">
          <div className="col-md-12 mb15">
            <div className="tradingview-widget-container">
              <div className="tradingview-widget-container__widget"></div>
              {/* <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
            async>
              {
                "symbols": [
                  {
                    "description": "",
                    "proName": "BINANCE:SOLUSDT"
                  },
                  {
                    "description": "",
                    "proName": "BINANCE:BTCUSDT"
                  },
                  {
                    "description": "",
                    "proName": "BINANCE:GRTUSDT"
                  },
                  {
                    "description": "",
                    "proName": "BINANCE:BNBUSDT"
                  },
                  {
                    "description": "",
                    "proName": "BINANCE:AXSUSDT"
                  },
                  {
                    "description": "",
                    "proName": "BITFINEX:BTCUSD"
                  },
                  {
                    "description": "",
                    "proName": "BINANCE:DOTUSDT"
                  },
                  {
                    "description": "",
                    "proName": "BINANCE:ICPUSDT"
                  }
                ],
                  "showSymbolLogo": true,
                    "displayMode": "compact",
                      "locale": "en"
              }
            </script> */}
            </div>
          </div>
        </div>
      </div>

      <div className="landing-info-one landing-info-one-bg mtb100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>The most advance and secure cryptocurrency platform.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                iusto, nisi illo nulla alias fugiat repudiandae unde ab maxime
                placeat facere, dicta deleniti ipsam animi expedita quam minus
                perferendis veniam?
              </p>
              <ul>
                <li>
                  <i className="icon ion-ios-checkmark-circle"></i> Live
                  Technical Analysis
                </li>
                <li>
                  <i className="icon ion-ios-checkmark-circle"></i> Live Market
                  Data
                </li>
                <li>
                  <i className="icon ion-ios-checkmark-circle"></i> Live
                  Cryptocurrency Price
                </li>
                <li>
                  <i className="icon ion-ios-checkmark-circle"></i> Deposit &
                  Withdraw
                </li>
                <li>
                  <i className="icon ion-ios-checkmark-circle"></i> Buy & Sell
                </li>
                <li>
                  <i className="icon ion-ios-checkmark-circle"></i> Coin Listing
                </li>
                <li>
                  <i className="icon ion-ios-checkmark-circle"></i> Manage
                  Wallets
                </li>
                <li>
                  <i className="icon ion-ios-checkmark-circle"></i> Market depth
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img
                src="assets/img/landing/dash-preview.png"
                className="visible-mobile"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="landing-info-one mtb100">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="tradingview-widget-container tradingview-gain-and-loser">
                <div className="tradingview-widget-container__widget"></div>
                {/* <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js"
              async>
                {
                  "colorTheme": "light",
                    "dateRange": "12M",
                      "exchange": "US",
                        "showChart": true,
                          "locale": "en",
                            "width": "100%",
                              "height": "600",
                                "largeChartUrl": "",
                                  "isTransparent": false,
                                    "showSymbolLogo": true,
                                      "plotLineColorGrowing": "rgba(28, 217, 121, 1)",
                                        "plotLineColorFalling": "rgba(41, 98, 255, 1)",
                                          "gridLineColor": "rgba(240, 243, 250, 1)",
                                            "scaleFontColor": "rgba(120, 123, 134, 1)",
                                              "belowLineFillColorGrowing": "rgba(33, 222, 95, 0.12)",
                                                "belowLineFillColorFalling": "rgba(255, 0, 0, 0.12)",
                                                  "symbolActiveColor": "rgba(33, 150, 243, 0.12)"
                }
              </script> */}
              </div>
            </div>
            <div className="offset-md-1 col-md-6">
              <h2>Live Market Gainers and Losers tracking</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                iusto, nisi illo nulla alias fugiat repudiandae unde ab maxime
                placeat facere, dicta deleniti ipsam animi expedita quam minus
                perferendis veniam?
              </p>
              <ul>
                <li>
                  <i className="icon ion-ios-checkmark-circle"></i> Live Gainers
                  Tracking
                </li>
                <li>
                  <i className="icon ion-ios-checkmark-circle"></i> Live Losers
                  Tracking
                </li>
                <li>
                  <i className="icon ion-ios-checkmark-circle"></i> Live Market
                  Data
                </li>
                <li>
                  <i className="icon ion-ios-checkmark-circle"></i> Live
                  Cryptocurrency Price
                </li>
                <li>
                  <i className="icon ion-ios-checkmark-circle"></i> Past Coin
                  Price check
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-feature">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>
                Here are a few reasons why <br /> you should choose Crypo
              </h2>
            </div>
            <div className="col-md-4">
              <div className="landing-feature-item">
                <img src="assets/img/landing/stroge.svg" alt="" />
                <h3>Secure storage</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                  quaerat, quidem ut, fugiat blanditiis facere
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="landing-feature-item">
                <img src="assets/img/landing/backup.svg" alt="" />
                <h3>Protected by insurance</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                  quaerat, quidem ut, fugiat blanditiis facere
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="landing-feature-item">
                <img src="assets/img/landing/managment.svg" alt="" />
                <h3>Industry best practices</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                  quaerat, quidem ut, fugiat blanditiis facere
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-number">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>$657B</h2>
              <p>Quarterly volume traded</p>
            </div>
            <div className="col-md-4">
              <h2>100+</h2>
              <p>Countries supported</p>
            </div>
            <div className="col-md-4">
              <h2>56+M</h2>
              <p>Verified users</p>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-feature landing-start">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Get started in a few steps</h2>
            </div>
            <div className="col-md-4">
              <div className="landing-feature-item">
                <img src="assets/img/landing/user.svg" alt="" />
                <span>1</span>
                <h3>Create an account </h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="landing-feature-item">
                <img src="assets/img/landing/bank.svg" alt="" />
                <span>2</span>
                <h3>Link your bank account </h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="landing-feature-item">
                <img src="assets/img/landing/trade.svg" alt="" />
                <span>3</span>
                <h3>Start buying & selling</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-sub">
        <div className="container">
          <div className="row">
            <div className="offset-md-1 col-md-10">
              <div className="landing-sub-content">
                <h2>
                  Become part of a global community of people who have found
                  their path to the crypto world with Crypo
                </h2>
                <a href="signup-light.html">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage1;
