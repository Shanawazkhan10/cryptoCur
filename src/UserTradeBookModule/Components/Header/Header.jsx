import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="light-bb">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="exchange-light.html">
            <img src="assets/img/logo-dark.svg" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#headerMenu"
            aria-controls="headerMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="icon ion-md-menu"></i>
          </button>

          <div className="collapse navbar-collapse" id="headerMenu">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Landing Page
                </a>
                <div className="dropdown-menu">
                  <NavLink className="dropdown-item" to="/LandingFirst">
                    Landing One
                  </NavLink>
                  <a
                    className="dropdown-item"
                    href="landing-page-light-two.html"
                  >
                    Landing Two
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Exchange
                </a>
                <div className="dropdown-menu">
                  <NavLink className="dropdown-item" to="/Exchange">
                    Exchange
                  </NavLink>
                  <a
                    className="dropdown-item"
                    href="exchange-light-live-price.html"
                  >
                    Exchange Live Price
                  </a>
                  <a
                    className="dropdown-item"
                    href="exchange-light-ticker.html"
                  >
                    Exchange Ticker
                  </a>
                  <NavLink className="dropdown-item" to="/ExchangeFluid">
                    Exchange Fluid
                  </NavLink>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Markets
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="markets-light.html">
                    Markets
                  </a>
                  <a className="dropdown-item" href="market-capital-light.html">
                    Markets Line
                  </a>
                  <NavLink className="dropdown-item" to="/MarketBar">
                    Markets Bar
                  </NavLink>
                  <NavLink className="dropdown-item" to="/MarketOverview">
                    Market Overview
                  </NavLink>
                  <NavLink className="dropdown-item" to="/MarketScreener">
                    Market Screener
                  </NavLink>
                  <NavLink className="dropdown-item" to="/MarketCrypto">
                    Market Crypto
                  </NavLink>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dashboard
                </a>
                <div className="dropdown-menu">
                  <a
                    className="dropdown-item"
                    href="settings-profile-light.html"
                  >
                    Profile
                  </a>
                  <a
                    className="dropdown-item"
                    href="settings-wallet-light.html"
                  >
                    Wallet
                  </a>
                  <a className="dropdown-item" href="settings-light.html">
                    Settings
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Others
                </a>
                <div className="dropdown-menu">
                  <a
                    className="dropdown-item"
                    href="technical-analysis-light.html"
                  >
                    Technical Analysis
                  </a>
                  <a className="dropdown-item" href="cross-rates-light.html">
                    Cross Rates
                  </a>
                  <a className="dropdown-item" href="symbol-info-light.html">
                    Symbol Info
                  </a>
                  <a className="dropdown-item" href="heat-map-light.html">
                    Heat Map
                  </a>
                  <NavLink className="dropdown-item" to="/Signin">
                    Sign in
                  </NavLink>
                  <NavLink className="dropdown-item" to="/Signup">
                    Sign up
                  </NavLink>
                  <NavLink className="dropdown-item" to="/ErrorComponent">
                    404
                  </NavLink>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item header-custom-icon">
                <a className="nav-link" href="#" id="clickFullscreen">
                  <i className="icon ion-md-expand"></i>
                </a>
              </li>
              <li className="nav-item dropdown header-custom-icon">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="icon ion-md-notifications"></i>
                  <span className="circle-pulse"></span>
                </a>
                <div className="dropdown-menu">
                  <div className="dropdown-header d-flex align-items-center justify-content-between">
                    <p className="mb-0 font-weight-medium">
                      6 New Notifications
                    </p>
                    <a href="#!" className="text-muted">
                      Clear all
                    </a>
                  </div>
                  <div className="dropdown-body">
                    <a href="#!" className="dropdown-item">
                      <div className="icon">
                        <i className="icon ion-md-lock"></i>
                      </div>
                      <div className="content">
                        <p>Account password change</p>
                        <p className="sub-text text-muted">5 sec ago</p>
                      </div>
                    </a>
                    <a href="#!" className="dropdown-item">
                      <div className="icon">
                        <i className="icon ion-md-alert"></i>
                      </div>
                      <div className="content">
                        <p>Solve the security issue</p>
                        <p className="sub-text text-muted">10 min ago</p>
                      </div>
                    </a>
                    <a href="#!" className="dropdown-item">
                      <div className="icon">
                        <i className="icon ion-logo-android"></i>
                      </div>
                      <div className="content">
                        <p>Download android app</p>
                        <p className="sub-text text-muted">1 hrs ago</p>
                      </div>
                    </a>
                    <a href="#!" className="dropdown-item">
                      <div className="icon">
                        <i className="icon ion-logo-bitcoin"></i>
                      </div>
                      <div className="content">
                        <p>Bitcoin price is high now</p>
                        <p className="sub-text text-muted">2 hrs ago</p>
                      </div>
                    </a>
                    <a href="#!" className="dropdown-item">
                      <div className="icon">
                        <i className="icon ion-logo-usd"></i>
                      </div>
                      <div className="content">
                        <p>Payment completed</p>
                        <p className="sub-text text-muted">4 hrs ago</p>
                      </div>
                    </a>
                  </div>
                  <div className="dropdown-footer d-flex align-items-center justify-content-center">
                    <a href="#!">View all</a>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown header-img-icon">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src="assets/img/avatar.svg" alt="avatar" />
                </a>
                <div className="dropdown-menu">
                  <div className="dropdown-header d-flex flex-column align-items-center">
                    <div className="figure mb-3">
                      <img src="assets/img/avatar.svg" alt="" />
                    </div>
                    <div className="info text-center">
                      <p className="name font-weight-bold mb-0">Tony Stark</p>
                      <p className="email text-muted mb-3">
                        tonystark@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="dropdown-body">
                    <ul className="profile-nav">
                      <li className="nav-item">
                        <a
                          href="settings-profile-light.html"
                          className="nav-link"
                        >
                          <i className="icon ion-md-person"></i>
                          <span>Profile</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="settings-wallet-light.html"
                          className="nav-link"
                        >
                          <i className="icon ion-md-wallet"></i>
                          <span>My Wallet</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="settings-light.html" className="nav-link">
                          <i className="icon ion-md-settings"></i>
                          <span>Settings</span>
                        </a>
                      </li>
                      <li className="nav-item" id="changeThemeLight">
                        <a href="#!" className="nav-link">
                          <i className="icon ion-md-sunny"></i>
                          <span>Theme</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="exchange-light.html" className="nav-link red">
                          <i className="icon ion-md-power"></i>
                          <span>Log Out</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
