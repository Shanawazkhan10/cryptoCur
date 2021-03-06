import React from "react";

const ExchangeFluid = () => {
  return (
    <div>
      <h1>INCLUDE TRADE-VIEW</h1>
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-md-3">
            <div className="market-pairs">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-sm">
                    <i className="icon ion-md-search"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
              <ul className="nav nav-pills" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="pill"
                    href="#STAR"
                    role="tab"
                    aria-selected="true"
                  >
                    <i className="icon ion-md-star"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="pill"
                    href="#BTC"
                    role="tab"
                    aria-selected="true"
                  >
                    BTC
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="pill"
                    href="#ETH"
                    role="tab"
                    aria-selected="false"
                  >
                    ETH
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="pill"
                    href="#NEO"
                    role="tab"
                    aria-selected="false"
                  >
                    NEO
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="pill"
                    href="#USDT"
                    role="tab"
                    aria-selected="false"
                  >
                    USDT
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="pill"
                    href="#DAI"
                    role="tab"
                    aria-selected="false"
                  >
                    DAI
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="pill"
                    href="#PAX"
                    role="tab"
                    aria-selected="false"
                  >
                    PAX
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade show" id="STAR" role="tabpanel">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Pairs</th>
                        <th>Last Price</th>
                        <th>Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> ETH/BTC
                        </td>
                        <td>0.00020255</td>
                        <td className="red">-2.58%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> KCS/BTC
                        </td>
                        <td>0.00013192</td>
                        <td className="green">+5.6%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> XRP/BTC
                        </td>
                        <td>0.00002996</td>
                        <td className="red">-1.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> VET/BTC
                        </td>
                        <td>0.00000103</td>
                        <td className="green">+1.8%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  className="tab-pane fade show active"
                  id="BTC"
                  role="tabpanel"
                >
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Pairs</th>
                        <th>Last Price</th>
                        <th>Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> ETH/BTC
                        </td>
                        <td>0.00020255</td>
                        <td className="red">-2.58%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> KCS/BTC
                        </td>
                        <td>0.00013192</td>
                        <td className="green">+5.6%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> XRP/BTC
                        </td>
                        <td>0.00002996</td>
                        <td className="red">-1.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> VET/BTC
                        </td>
                        <td>0.00000103</td>
                        <td className="green">+1.8%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> EOS/BTC
                        </td>
                        <td>0.00000103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> BTT/BTC
                        </td>
                        <td>0.00002303</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> LTC/BTC
                        </td>
                        <td>0.03520103</td>
                        <td className="green">+1.5%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> TRX/BTC
                        </td>
                        <td>0.00330103</td>
                        <td className="red">-3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> BSV/BTC
                        </td>
                        <td>0.00300103</td>
                        <td className="green">+2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> COTI/BTC
                        </td>
                        <td>0.003500103</td>
                        <td className="green">+2.85%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> XYT/BTC
                        </td>
                        <td>0.00003103</td>
                        <td className="green">+3.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> BNB/BTC
                        </td>
                        <td>0.003500103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> XMR/BTC
                        </td>
                        <td>0.003500103</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> TRY/BTC
                        </td>
                        <td>0.00000123</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> ADA/BTC
                        </td>
                        <td>0.00050103</td>
                        <td className="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> NEO/BTC
                        </td>
                        <td>0.00340103</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> XLM/BTC
                        </td>
                        <td>0.00035103</td>
                        <td className="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> ENQ/BTC
                        </td>
                        <td>0.00354103</td>
                        <td className="green">+2.02%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> AVA/BTC
                        </td>
                        <td>0.02535103</td>
                        <td className="green">+3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> AMB/BTC
                        </td>
                        <td>0.05335103</td>
                        <td className="green">+1.0%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> MAP/BTC
                        </td>
                        <td>0.00234103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> GO/BTC
                        </td>
                        <td>0.00354103</td>
                        <td className="red">-6.50%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> KICK/BTC
                        </td>
                        <td>0.02053103</td>
                        <td className="red">-6.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> DBC/BTC
                        </td>
                        <td>0.02535103</td>
                        <td className="green">+7.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> GGC/BTC
                        </td>
                        <td>0.00353103</td>
                        <td className="red">-4.05%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane fade show" id="ETH" role="tabpanel">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Pairs</th>
                        <th>Last Price</th>
                        <th>Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> BTC/ETH
                        </td>
                        <td>0.00020255</td>
                        <td className="green">+1.58%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> KCS/ETH
                        </td>
                        <td>0.00013192</td>
                        <td className="red">-0.6%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> XRP/ETH
                        </td>
                        <td>0.00002996</td>
                        <td className="red">-0.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> VET/ETH
                        </td>
                        <td>0.00000103</td>
                        <td className="green">+1.8%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> EOS/ETH
                        </td>
                        <td>0.00000103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> BTT/ETH
                        </td>
                        <td>0.00002303</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> LTC/ETH
                        </td>
                        <td>0.03520103</td>
                        <td className="green">+1.5%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> TRX/ETH
                        </td>
                        <td>0.00330103</td>
                        <td className="red">-3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> BSV/ETH
                        </td>
                        <td>0.00300103</td>
                        <td className="green">+2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> COTI/ETH
                        </td>
                        <td>0.003500103</td>
                        <td className="green">+2.85%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> XYT/ETH
                        </td>
                        <td>0.00003103</td>
                        <td className="green">+3.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> BNB/ETH
                        </td>
                        <td>0.003500103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> XMR/ETH
                        </td>
                        <td>0.003500103</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> TRY/ETH
                        </td>
                        <td>0.00000123</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> ADA/ETH
                        </td>
                        <td>0.00050103</td>
                        <td className="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> NEO/ETH
                        </td>
                        <td>0.00340103</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> XLM/ETH
                        </td>
                        <td>0.00035103</td>
                        <td className="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> ENQ/ETH
                        </td>
                        <td>0.00354103</td>
                        <td className="green">+2.02%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> AVA/ETH
                        </td>
                        <td>0.02535103</td>
                        <td className="green">+3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> AMB/ETH
                        </td>
                        <td>0.05335103</td>
                        <td className="green">+1.0%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> MAP/ETH
                        </td>
                        <td>0.00234103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> GO/ETH
                        </td>
                        <td>0.00354103</td>
                        <td className="red">-6.50%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> KICK/ETH
                        </td>
                        <td>0.02053103</td>
                        <td className="red">-6.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> DBC/ETH
                        </td>
                        <td>0.02535103</td>
                        <td className="green">+7.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> GGC/ETH
                        </td>
                        <td>0.00353103</td>
                        <td className="red">-4.05%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane fade show" id="NEO" role="tabpanel">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Pairs</th>
                        <th>Last Price</th>
                        <th>Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> ETH/NEO
                        </td>
                        <td>0.00350255</td>
                        <td className="red">-6.58%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> KCS/NEO
                        </td>
                        <td>0.00013192</td>
                        <td className="green">+0.6%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> XRP/NEO
                        </td>
                        <td>0.00002996</td>
                        <td className="red">-0.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> VET/NEO
                        </td>
                        <td>0.00000103</td>
                        <td className="green">+1.8%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> EOS/NEO
                        </td>
                        <td>0.00000103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> BTT/NEO
                        </td>
                        <td>0.00002303</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> LTC/NEO
                        </td>
                        <td>0.03520103</td>
                        <td className="green">+1.5%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> TRX/NEO
                        </td>
                        <td>0.00330103</td>
                        <td className="red">-3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> BSV/NEO
                        </td>
                        <td>0.00300103</td>
                        <td className="green">+2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> COTI/NEO
                        </td>
                        <td>0.003500103</td>
                        <td className="green">+2.85%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> XYT/NEO
                        </td>
                        <td>0.00003103</td>
                        <td className="green">+3.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> BNB/NEO
                        </td>
                        <td>0.003500103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> XMR/NEO
                        </td>
                        <td>0.003500103</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> TRY/NEO
                        </td>
                        <td>0.00000123</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> ADA/NEO
                        </td>
                        <td>0.00050103</td>
                        <td className="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> NEO/NEO
                        </td>
                        <td>0.00340103</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> XLM/NEO
                        </td>
                        <td>0.00035103</td>
                        <td className="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> ENQ/NEO
                        </td>
                        <td>0.00354103</td>
                        <td className="green">+2.02%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> AVA/NEO
                        </td>
                        <td>0.02535103</td>
                        <td className="green">+3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> AMB/NEO
                        </td>
                        <td>0.05335103</td>
                        <td className="green">+1.0%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> MAP/NEO
                        </td>
                        <td>0.00234103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> GO/NEO
                        </td>
                        <td>0.00354103</td>
                        <td className="red">-6.50%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> KICK/NEO
                        </td>
                        <td>0.02053103</td>
                        <td className="red">-6.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> DBC/NEO
                        </td>
                        <td>0.02535103</td>
                        <td className="green">+7.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> GGC/NEO
                        </td>
                        <td>0.00353103</td>
                        <td className="red">-4.05%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane fade show" id="USDT" role="tabpanel">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Pairs</th>
                        <th>Last Price</th>
                        <th>Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> ETH/USDT
                        </td>
                        <td>0.00350255</td>
                        <td className="red">-2.58%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> KCS/USDT
                        </td>
                        <td>0.00013192</td>
                        <td className="green">+6.6%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> XRP/USDT
                        </td>
                        <td>0.00002996</td>
                        <td className="red">-0.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> VET/USDT
                        </td>
                        <td>0.00000103</td>
                        <td className="green">+1.8%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> EOS/USDT
                        </td>
                        <td>0.00000103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> BTT/USDT
                        </td>
                        <td>0.00002303</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> LTC/USDT
                        </td>
                        <td>0.03520103</td>
                        <td className="green">+1.5%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> TRX/USDT
                        </td>
                        <td>0.00330103</td>
                        <td className="red">-3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> BSV/USDT
                        </td>
                        <td>0.00300103</td>
                        <td className="green">+2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> COTI/USDT
                        </td>
                        <td>0.003500103</td>
                        <td className="green">+2.85%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> XYT/USDT
                        </td>
                        <td>0.00003103</td>
                        <td className="green">+3.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> BNB/USDT
                        </td>
                        <td>0.003500103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> XMR/USDT
                        </td>
                        <td>0.003500103</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> TRY/USDT
                        </td>
                        <td>0.00000123</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> ADA/USDT
                        </td>
                        <td>0.00050103</td>
                        <td className="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> USDT/USDT
                        </td>
                        <td>0.00340103</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> XLM/USDT
                        </td>
                        <td>0.00035103</td>
                        <td className="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> ENQ/USDT
                        </td>
                        <td>0.00354103</td>
                        <td className="green">+2.02%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> AVA/USDT
                        </td>
                        <td>0.02535103</td>
                        <td className="green">+3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> AMB/USDT
                        </td>
                        <td>0.05335103</td>
                        <td className="green">+1.0%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> MAP/USDT
                        </td>
                        <td>0.00234103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> GO/USDT
                        </td>
                        <td>0.00354103</td>
                        <td className="red">-6.50%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> KICK/USDT
                        </td>
                        <td>0.02053103</td>
                        <td className="red">-6.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> DBC/USDT
                        </td>
                        <td>0.02535103</td>
                        <td className="green">+7.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> GGC/USDT
                        </td>
                        <td>0.00353103</td>
                        <td className="red">-4.05%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane fade show" id="DAI" role="tabpanel">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Pairs</th>
                        <th>Last Price</th>
                        <th>Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> ETH/DAI
                        </td>
                        <td>0.05320255</td>
                        <td className="green">+6.58%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> KCS/DAI
                        </td>
                        <td>0.00013192</td>
                        <td className="green">+0.6%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> XRP/DAI
                        </td>
                        <td>0.00002996</td>
                        <td className="red">-0.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> VET/DAI
                        </td>
                        <td>0.00000103</td>
                        <td className="green">+1.8%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> EOS/DAI
                        </td>
                        <td>0.00000103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> BTT/DAI
                        </td>
                        <td>0.00002303</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> LTC/DAI
                        </td>
                        <td>0.03520103</td>
                        <td className="green">+1.5%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> TRX/DAI
                        </td>
                        <td>0.00330103</td>
                        <td className="red">-3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> BSV/DAI
                        </td>
                        <td>0.00300103</td>
                        <td className="green">+2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> COTI/DAI
                        </td>
                        <td>0.003500103</td>
                        <td className="green">+2.85%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> XYT/DAI
                        </td>
                        <td>0.00003103</td>
                        <td className="green">+3.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> BNB/DAI
                        </td>
                        <td>0.003500103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> XMR/DAI
                        </td>
                        <td>0.003500103</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> TRY/DAI
                        </td>
                        <td>0.00000123</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> ADA/DAI
                        </td>
                        <td>0.00050103</td>
                        <td className="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> DAI/DAI
                        </td>
                        <td>0.00340103</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> XLM/DAI
                        </td>
                        <td>0.00035103</td>
                        <td className="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> ENQ/DAI
                        </td>
                        <td>0.00354103</td>
                        <td className="green">+2.02%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> AVA/DAI
                        </td>
                        <td>0.02535103</td>
                        <td className="green">+3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> AMB/DAI
                        </td>
                        <td>0.05335103</td>
                        <td className="green">+1.0%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> MAP/DAI
                        </td>
                        <td>0.00234103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> GO/DAI
                        </td>
                        <td>0.00354103</td>
                        <td className="red">-6.50%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> KICK/DAI
                        </td>
                        <td>0.02053103</td>
                        <td className="red">-6.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> DBC/DAI
                        </td>
                        <td>0.02535103</td>
                        <td className="green">+7.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> GGC/DAI
                        </td>
                        <td>0.00353103</td>
                        <td className="red">-4.05%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane fade show" id="PAX" role="tabpanel">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Pairs</th>
                        <th>Last Price</th>
                        <th>Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> ETH/PAX
                        </td>
                        <td>0.00330255</td>
                        <td className="red">-9.58%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> KCS/PAX
                        </td>
                        <td>0.00055192</td>
                        <td className="red">-0.6%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> XRP/PAX
                        </td>
                        <td>0.00002996</td>
                        <td className="red">-0.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> VET/PAX
                        </td>
                        <td>0.00000103</td>
                        <td className="green">+1.8%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> EOS/PAX
                        </td>
                        <td>0.00000103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> BTT/PAX
                        </td>
                        <td>0.00002303</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> LTC/PAX
                        </td>
                        <td>0.03520103</td>
                        <td className="green">+1.5%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> TRX/PAX
                        </td>
                        <td>0.00330103</td>
                        <td className="red">-3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> BSV/PAX
                        </td>
                        <td>0.00300103</td>
                        <td className="green">+2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> COTI/PAX
                        </td>
                        <td>0.003500103</td>
                        <td className="green">+2.85%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> XYT/PAX
                        </td>
                        <td>0.00003103</td>
                        <td className="green">+3.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> BNB/PAX
                        </td>
                        <td>0.003500103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> XMR/PAX
                        </td>
                        <td>0.003500103</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> TRY/PAX
                        </td>
                        <td>0.00000123</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> ADA/PAX
                        </td>
                        <td>0.00050103</td>
                        <td className="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> PAX/PAX
                        </td>
                        <td>0.00340103</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> XLM/PAX
                        </td>
                        <td>0.00035103</td>
                        <td className="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> ENQ/PAX
                        </td>
                        <td>0.00354103</td>
                        <td className="green">+2.02%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> AVA/PAX
                        </td>
                        <td>0.02535103</td>
                        <td className="green">+3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> AMB/PAX
                        </td>
                        <td>0.05335103</td>
                        <td className="green">+1.0%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> MAP/PAX
                        </td>
                        <td>0.00234103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> GO/PAX
                        </td>
                        <td>0.00354103</td>
                        <td className="red">-6.50%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> KICK/PAX
                        </td>
                        <td>0.02053103</td>
                        <td className="red">-6.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> DBC/PAX
                        </td>
                        <td>0.02535103</td>
                        <td className="green">+7.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon ion-md-star"></i> GGC/PAX
                        </td>
                        <td>0.00353103</td>
                        <td className="red">-4.05%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="main-chart">
              {/* <!-- TradingView Widget BEGIN --> */}
              <div className="tradingview-widget-container">
                <div id="tradingview_e8053"></div>
                <script src="https://s3.tradingview.com/tv.js"></script>
                {/* <script>
              new TradingView.widget(
                {
                  "width": 100%,
                  "height": 550,
                  "symbol": "BITSTAMP:BTCUSD",
                  "interval": "D",
                  "timezone": "Etc/UTC",
                  "theme": "Light",
                  "style": "1",
                  "locale": "en",
                  "toolbar_bg": "#f1f3f6",
                  "enable_publishing": false,
                  "withdateranges": true,
                  "hide_side_toolbar": false,
                  "allow_symbol_change": true,
                  "show_popup_button": true,
                  "popup_width": "1000",
                  "popup_height": "650",
                  "container_id": "tradingview_e8053"
                }
              );
            </script> */}
              </div>
              {/* <!-- TradingView Widget END --> */}
            </div>
            <div className="market-trade">
              <ul className="nav nav-pills" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="pill"
                    href="#pills-trade-limit"
                    role="tab"
                    aria-selected="true"
                  >
                    Limit
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="pill"
                    href="#pills-market"
                    role="tab"
                    aria-selected="false"
                  >
                    Market
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="pill"
                    href="#pills-stop-limit"
                    role="tab"
                    aria-selected="false"
                  >
                    Stop Limit
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="pill"
                    href="#pills-stop-market"
                    role="tab"
                    aria-selected="false"
                  >
                    Stop Market
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="pills-trade-limit"
                  role="tabpanel"
                >
                  <div className="d-flex justify-content-between">
                    <div className="market-trade-buy">
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Price"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">BTC</span>
                        </div>
                      </div>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Amount"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">ETH</span>
                        </div>
                      </div>
                      <ul className="market-trade-list">
                        <li>
                          <a href="#!">25%</a>
                        </li>
                        <li>
                          <a href="#!">50%</a>
                        </li>
                        <li>
                          <a href="#!">75%</a>
                        </li>
                        <li>
                          <a href="#!">100%</a>
                        </li>
                      </ul>
                      <p>
                        Available: <span>0 BTC = 0 USD</span>
                      </p>
                      <p>
                        Volume: <span>0 BTC = 0 USD</span>
                      </p>
                      <p>
                        Margin: <span>0 BTC = 0 USD</span>
                      </p>
                      <p>
                        Fee: <span>0 BTC = 0 USD</span>
                      </p>
                      <button className="btn buy">Buy</button>
                    </div>
                    <div className="market-trade-sell">
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Price"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">BTC</span>
                        </div>
                      </div>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Amount"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">ETH</span>
                        </div>
                      </div>
                      <ul className="market-trade-list">
                        <li>
                          <a href="#!">25%</a>
                        </li>
                        <li>
                          <a href="#!">50%</a>
                        </li>
                        <li>
                          <a href="#!">75%</a>
                        </li>
                        <li>
                          <a href="#!">100%</a>
                        </li>
                      </ul>
                      <p>
                        Available: <span>0 BTC = 0 USD</span>
                      </p>
                      <p>
                        Volume: <span>0 BTC = 0 USD</span>
                      </p>
                      <p>
                        Margin: <span>0 BTC = 0 USD</span>
                      </p>
                      <p>
                        Fee: <span>0 BTC = 0 USD</span>
                      </p>
                      <button className="btn sell">Sell</button>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-market"
                  role="tabpanel"
                >
                  <div className="d-flex justify-content-between">
                    <div className="market-trade-buy">
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Price"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">BTC</span>
                        </div>
                      </div>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Amount"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">ETH</span>
                        </div>
                      </div>
                      <ul className="market-trade-list">
                        <li>
                          <a href="#!">25%</a>
                        </li>
                        <li>
                          <a href="#!">50%</a>
                        </li>
                        <li>
                          <a href="#!">75%</a>
                        </li>
                        <li>
                          <a href="#!">100%</a>
                        </li>
                      </ul>
                      <p>
                        Available: <span>0 BTC = 0 USD</span>
                      </p>
                      <p>
                        Volume: <span>0 BTC = 0 USD</span>
                      </p>
                      <p>
                        Margin: <span>0 BTC = 0 USD</span>
                      </p>
                      <p>
                        Fee: <span>0 BTC = 0 USD</span>
                      </p>
                      <button className="btn buy">Buy</button>
                    </div>
                    <div className="market-trade-sell">
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Price"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">BTC</span>
                        </div>
                      </div>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Amount"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">ETH</span>
                        </div>
                      </div>
                      <ul className="market-trade-list">
                        <li>
                          <a href="#!">25%</a>
                        </li>
                        <li>
                          <a href="#!">50%</a>
                        </li>
                        <li>
                          <a href="#!">75%</a>
                        </li>
                        <li>
                          <a href="#!">100%</a>
                        </li>
                      </ul>
                      <p>
                        Available: <span>0 BTC = 0 USD</span>
                      </p>
                      <p>
                        Volume: <span>0 BTC = 0 USD</span>
                      </p>
                      <p>
                        Margin: <span>0 BTC = 0 USD</span>
                      </p>
                      <p>
                        Fee: <span>0 BTC = 0 USD</span>
                      </p>
                      <button className="btn sell">Sell</button>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-stop-limit"
                  role="tabpanel"
                >
                  <div className="d-flex justify-content-between">
                    <div className="market-trade-buy">
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Price"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">BTC</span>
                        </div>
                      </div>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Amount"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">ETH</span>
                        </div>
                      </div>
                      <ul className="market-trade-list">
                        <li>
                          <a href="#!">25%</a>
                        </li>
                        <li>
                          <a href="#!">50%</a>
                        </li>
                        <li>
                          <a href="#!">75%</a>
                        </li>
                        <li>
                          <a href="#!">100%</a>
                        </li>
                      </ul>
                      <p>
                        Available: <span>0 BTC = 0 USD</span>
                      </p>
                      <p>
                        Volume: <span>0 BTC = 0 USD</span>
                      </p>
                      <p>
                        Margin: <span>0 BTC = 0 USD</span>
                      </p>
                      <p>
                        Fee: <span>0 BTC = 0 USD</span>
                      </p>
                      <button className="btn buy">Buy</button>
                    </div>
                    <div className="market-trade-sell">
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Price"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">BTC</span>
                        </div>
                      </div>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Amount"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">ETH</span>
                        </div>
                      </div>
                      <ul className="market-trade-list">
                        <li>
                          <a href="#!">25%</a>
                        </li>
                        <li>
                          <a href="#!">50%</a>
                        </li>
                        <li>
                          <a href="#!">75%</a>
                        </li>
                        <li>
                          <a href="#!">100%</a>
                        </li>
                      </ul>
                      <p>
                        Available: <span>0 BTC = 0 USD</span>
                      </p>
                      <p>
                        Volume: <span>0 BTC = 0 USD</span>
                      </p>
                      <p>
                        Margin: <span>0 BTC = 0 USD</span>
                      </p>
                      <p>
                        Fee: <span>0 BTC = 0 USD</span>
                      </p>
                      <button className="btn sell">Sell</button>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-stop-market"
                  role="tabpanel"
                >
                  <div className="d-flex justify-content-between">
                    <div className="market-trade-buy">
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Price"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">BTC</span>
                        </div>
                      </div>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Amount"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">ETH</span>
                        </div>
                      </div>
                      <ul className="market-trade-list">
                        <li>
                          <a href="#!">25%</a>
                        </li>
                        <li>
                          <a href="#!">50%</a>
                        </li>
                        <li>
                          <a href="#!">75%</a>
                        </li>
                        <li>
                          <a href="#!">100%</a>
                        </li>
                      </ul>
                      <p>
                        Available: <span>0 BTC = 0 USD</span>
                      </p>
                      <p>
                        Volume: <span>0 BTC = 0 USD</span>
                      </p>
                      <p>
                        Margin: <span>0 BTC = 0 USD</span>
                      </p>
                      <p>
                        Fee: <span>0 BTC = 0 USD</span>
                      </p>
                      <button className="btn buy">Buy</button>
                    </div>
                    <div className="market-trade-sell">
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Price"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">BTC</span>
                        </div>
                      </div>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Amount"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">ETH</span>
                        </div>
                      </div>
                      <ul className="market-trade-list">
                        <li>
                          <a href="#!">25%</a>
                        </li>
                        <li>
                          <a href="#!">50%</a>
                        </li>
                        <li>
                          <a href="#!">75%</a>
                        </li>
                        <li>
                          <a href="#!">100%</a>
                        </li>
                      </ul>
                      <p>
                        Available: <span>0 BTC = 0 USD</span>
                      </p>
                      <p>
                        Volume: <span>0 BTC = 0 USD</span>
                      </p>
                      <p>
                        Margin: <span>0 BTC = 0 USD</span>
                      </p>
                      <p>
                        Fee: <span>0 BTC = 0 USD</span>
                      </p>
                      <button className="btn sell">Sell</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="order-book">
              <h2 className="heading">Order Book</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>Price(BTC)</th>
                    <th>Amount(ETH)</th>
                    <th>Total(ETH)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="red-bg-80">
                    <td className="red">0.022572</td>
                    <td>1.253415</td>
                    <td>15.27648</td>
                  </tr>
                  <tr className="red-bg-60">
                    <td className="red">0.020371</td>
                    <td>1.205415</td>
                    <td>15.25648</td>
                  </tr>
                  <tr className="red-bg-40">
                    <td className="red">0.023572</td>
                    <td>1.645415</td>
                    <td>15.23648</td>
                  </tr>
                  <tr className="red-bg-20">
                    <td className="red">0.032378</td>
                    <td>1.206715</td>
                    <td>15.25348</td>
                  </tr>
                  <tr className="red-bg-10">
                    <td className="red">0.022573</td>
                    <td>1.262415</td>
                    <td>15.19648</td>
                  </tr>
                  <tr className="red-bg-8">
                    <td className="red">0.154377</td>
                    <td>1.225415</td>
                    <td>15.35648</td>
                  </tr>
                  <tr className="red-bg-5">
                    <td className="red">0.120373</td>
                    <td>1.285415</td>
                    <td>15.25648</td>
                  </tr>
                  <tr className="red-bg">
                    <td className="red">0.028576</td>
                    <td>1.291415</td>
                    <td>15.26448</td>
                  </tr>
                </tbody>
                <tbody className="ob-heading">
                  <tr>
                    <td>
                      <span>Last Price</span>
                      0.020367
                    </td>
                    <td>
                      <span>USD</span>
                      148.65
                    </td>
                    <td className="red">
                      <span>Change</span>
                      -0.51%
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="green-bg">
                    <td className="green">0.158373</td>
                    <td>1.209515</td>
                    <td>15.23248</td>
                  </tr>
                  <tr className="green-bg-5">
                    <td className="green">0.020851</td>
                    <td>1.206245</td>
                    <td>15.25458</td>
                  </tr>
                  <tr className="green-bg-8">
                    <td className="green">0.025375</td>
                    <td>1.205715</td>
                    <td>15.65648</td>
                  </tr>
                  <tr className="green-bg-10">
                    <td className="green">0.020252</td>
                    <td>1.205495</td>
                    <td>15.24548</td>
                  </tr>
                  <tr className="green-bg-20">
                    <td className="green">0.020373</td>
                    <td>1.205415</td>
                    <td>15.25648</td>
                  </tr>
                  <tr className="green-bg-40">
                    <td className="green">0.020156</td>
                    <td>1.207515</td>
                    <td>15.28948</td>
                  </tr>
                  <tr className="green-bg-60">
                    <td className="green">0.540375</td>
                    <td>1.205915</td>
                    <td>15.25748</td>
                  </tr>
                  <tr className="green-bg-80">
                    <td className="green">0.020372</td>
                    <td>1.205415</td>
                    <td>15.25648</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="market-history">
              <ul className="nav nav-pills" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="pill"
                    href="#recent-trades"
                    role="tab"
                    aria-selected="true"
                  >
                    Recent Trades
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="pill"
                    href="#market-depth"
                    role="tab"
                    aria-selected="false"
                  >
                    Market Depth
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade"
                  id="recent-trades"
                  role="tabpanel"
                >
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Time</th>
                        <th>Price(BTC)</th>
                        <th>Amount(ETH)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>13:03:53</td>
                        <td className="red">0.020191</td>
                        <td>0.2155045</td>
                      </tr>
                      <tr>
                        <td>13:03:53</td>
                        <td className="green">0.020191</td>
                        <td>0.2155045</td>
                      </tr>
                      <tr>
                        <td>13:03:53</td>
                        <td className="green">0.020191</td>
                        <td>0.2155045</td>
                      </tr>
                      <tr>
                        <td>13:03:53</td>
                        <td className="red">0.020191</td>
                        <td>0.2155045</td>
                      </tr>
                      <tr>
                        <td>13:03:53</td>
                        <td className="green">0.020191</td>
                        <td>0.2155045</td>
                      </tr>
                      <tr>
                        <td>13:03:53</td>
                        <td className="green">0.020191</td>
                        <td>0.2155045</td>
                      </tr>
                      <tr>
                        <td>13:03:53</td>
                        <td className="green">0.020191</td>
                        <td>0.2155045</td>
                      </tr>
                      <tr>
                        <td>13:03:53</td>
                        <td className="red">0.020191</td>
                        <td>0.2155045</td>
                      </tr>
                      <tr>
                        <td>13:03:53</td>
                        <td className="red">0.020191</td>
                        <td>0.2155045</td>
                      </tr>
                      <tr>
                        <td>13:03:53</td>
                        <td className="green">0.020191</td>
                        <td>0.2155045</td>
                      </tr>
                      <tr>
                        <td>13:03:53</td>
                        <td className="green">0.020191</td>
                        <td>0.2155045</td>
                      </tr>
                      <tr>
                        <td>13:03:53</td>
                        <td className="red">0.020191</td>
                        <td>0.2155045</td>
                      </tr>
                      <tr>
                        <td>13:03:53</td>
                        <td className="green">0.020191</td>
                        <td>0.2155045</td>
                      </tr>
                      <tr>
                        <td>13:03:53</td>
                        <td className="red">0.020191</td>
                        <td>0.2155045</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  className="tab-pane fade show active"
                  id="market-depth"
                  role="tabpanel"
                >
                  <div className="depth-chart-container">
                    <div className="depth-chart-inner">
                      <div id="lightDepthChart"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="market-news">
              <h2 className="heading">Market News</h2>
              <ul>
                <li>
                  <a href="#!">
                    <strong>KCS Pay Fees Feature is Coming Soon</strong>
                    To accelerate the ecosystem construction of KuCoin Share
                    (KCS) and promote the implementation of the KCS application.
                    <span>2019-12-04 20:22</span>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <strong>KCS Pay Fees Feature is Coming Soon</strong>
                    To accelerate the ecosystem construction of KuCoin Share
                    (KCS) and promote the implementation of the KCS application.
                    <span>2019-12-04 20:22</span>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <strong>KCS Pay Fees Feature is Coming Soon</strong>
                    To accelerate the ecosystem construction of KuCoin Share
                    (KCS) and promote the implementation of the KCS application.
                    <span>2019-12-04 20:22</span>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <strong>KCS Pay Fees Feature is Coming Soon</strong>
                    To accelerate the ecosystem construction of KuCoin Share
                    (KCS) and promote the implementation of the KCS application.
                    <span>2019-12-04 20:22</span>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <strong>KCS Pay Fees Feature is Coming Soon</strong>
                    To accelerate the ecosystem construction of KuCoin Share
                    (KCS) and promote the implementation of the KCS application.
                    <span>2019-12-04 20:22</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9">
            <div className="market-history market-order">
              <ul className="nav nav-pills" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="pill"
                    href="#open-orders"
                    role="tab"
                    aria-selected="true"
                  >
                    Open Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="pill"
                    href="#stop-orders"
                    role="tab"
                    aria-selected="false"
                  >
                    Closed Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="pill"
                    href="#order-history"
                    role="tab"
                    aria-selected="false"
                  >
                    Order history
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="pill"
                    href="#trade-history"
                    role="tab"
                    aria-selected="false"
                  >
                    Balance
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="open-orders"
                  role="tabpanel"
                >
                  <ul className="d-flex justify-content-between market-order-item">
                    <li>Time</li>
                    <li>All pairs</li>
                    <li>All Types</li>
                    <li>Buy/Sell</li>
                    <li>Price</li>
                    <li>Amount</li>
                    <li>Executed</li>
                    <li>Unexecuted</li>
                  </ul>
                  <span className="no-data">
                    <i className="icon ion-md-document"></i>
                    No data
                  </span>
                </div>
                <div className="tab-pane fade" id="stop-orders" role="tabpanel">
                  <ul className="d-flex justify-content-between market-order-item">
                    <li>Time</li>
                    <li>All pairs</li>
                    <li>All Types</li>
                    <li>Buy/Sell</li>
                    <li>Price</li>
                    <li>Amount</li>
                    <li>Executed</li>
                    <li>Unexecuted</li>
                  </ul>
                  <span className="no-data">
                    <i className="icon ion-md-document"></i>
                    No data
                  </span>
                </div>
                <div
                  className="tab-pane fade"
                  id="order-history"
                  role="tabpanel"
                >
                  <ul className="d-flex justify-content-between market-order-item">
                    <li>Time</li>
                    <li>All pairs</li>
                    <li>All Types</li>
                    <li>Buy/Sell</li>
                    <li>Price</li>
                    <li>Amount</li>
                    <li>Executed</li>
                    <li>Unexecuted</li>
                  </ul>
                  <span className="no-data">
                    <i className="icon ion-md-document"></i>
                    No data
                  </span>
                </div>
                <div
                  className="tab-pane fade"
                  id="trade-history"
                  role="tabpanel"
                >
                  <ul className="d-flex justify-content-between market-order-item">
                    <li>Time</li>
                    <li>All pairs</li>
                    <li>All Types</li>
                    <li>Buy/Sell</li>
                    <li>Price</li>
                    <li>Amount</li>
                    <li>Executed</li>
                    <li>Unexecuted</li>
                  </ul>
                  <span className="no-data">
                    <i className="icon ion-md-document"></i>
                    No data
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeFluid;
