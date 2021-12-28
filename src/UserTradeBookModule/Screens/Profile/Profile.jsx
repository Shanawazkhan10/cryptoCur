import React from 'react'

const Profile = () => {
    return (
        <div>
             <div className="settings mtb15">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 col-lg-3">
          <div className="nav flex-column nav-pills settings-nav" id="v-pills-tab" role="tablist"
            aria-orientation="vertical">
            <a className="nav-link active" id="settings-profile-tab" data-toggle="pill" href="#settings-profile" role="tab"
              aria-controls="settings-profile" aria-selected="true"><i className="icon ion-md-person"></i> Profile</a>
            <a className="nav-link" id="settings-wallet-tab" data-toggle="pill" href="#settings-wallet" role="tab"
              aria-controls="settings-wallet" aria-selected="false"><i className="icon ion-md-wallet"></i> Wallet</a>
            <a className="nav-link" id="settings-tab" data-toggle="pill" href="#settings" role="tab"
              aria-controls="settings" aria-selected="false"><i className="icon ion-md-settings"></i> Settings</a>
          </div>
        </div>
        <div className="col-md-12 col-lg-9">
          <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="settings-profile" role="tabpanel"
              aria-labelledby="settings-profile-tab">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">General Information</h5>
                  <div className="settings-profile">
                    <form>
                      <img src="assets/img/avatar.svg" alt="avatar"/>
                      <div className="custom-file">
                        <input type="file" className="custom-file-input" id="fileUpload"/>
                        <label className="custom-file-label" for="fileUpload">Choose avatar</label>
                      </div>
                      <div className="form-row mt-4">
                        <div className="col-md-6">
                          <label for="formFirst">First name</label>
                          <input id="formFirst" type="text" className="form-control" placeholder="First name"/>
                        </div>
                        <div className="col-md-6">
                          <label for="formLast">Last name</label>
                          <input id="formLast" type="text" className="form-control" placeholder="Last name"/>
                        </div>
                        <div className="col-md-6">
                          <label for="emailAddress">Email</label>
                          <input id="emailAddress" type="text" className="form-control" placeholder="Enter your email"/>
                        </div>
                        <div className="col-md-6">
                          <label for="phoneNumber">Phone</label>
                          <input id="phoneNumber" type="text" className="form-control" placeholder="Enter phone number"/>
                        </div>
                        <div className="col-md-6">
                          <label for="selectLanguage">Language</label>
                          <select id="selectLanguage" className="custom-select">
                            <option selected>English</option>
                            <option>Mandarin Chinese</option>
                            <option>Spanish</option>
                            <option>Arabic</option>
                            <option>Russian</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label for="selectCurrency">Currency</label>
                          <select id="selectCurrency" className="custom-select">
                            <option selected>USD</option>
                            <option>EUR</option>
                            <option>GBP</option>
                            <option>CHF</option>
                          </select>
                        </div>
                        <div className="col-md-12">
                          <input type="submit" value="Update"/>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Security Information</h5>
                  <div className="settings-profile">
                    <form>
                      <div className="form-row">
                        <div className="col-md-6">
                          <label for="currentPass">Current password</label>
                          <input id="currentPass" type="text" className="form-control" placeholder="Enter your password"/>
                        </div>
                        <div className="col-md-6">
                          <label for="newPass">New password</label>
                          <input id="newPass" type="text" className="form-control" placeholder="Enter new password"/>
                        </div>
                        <div className="col-md-6">
                          <label for="securityOne">Security questions #1</label>
                          <select id="securityOne" className="custom-select">
                            <option selected>What was the name of your first pet?</option>
                            <option>What's your Mother's middle name?</option>
                            <option>What was the name of your first school?</option>
                            <option>Where did you travel for the first time?</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label for="securityAnsOne">Answer</label>
                          <input id="securityAnsOne" type="text" className="form-control" placeholder="Enter your answer"/>
                        </div>
                        <div className="col-md-6">
                          <label for="securityTwo">Security questions #2</label>
                          <select id="securityTwo" className="custom-select">
                            <option selected>Choose...</option>
                            <option>What was the name of your first pet?</option>
                            <option>What's your Mother's middle name?</option>
                            <option>What was the name of your first school?</option>
                            <option>Where did you travel for the first time?</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label for="securityAnsTwo">Answer</label>
                          <input id="securityAnsTwo" type="text" className="form-control" placeholder="Enter your answer"/>
                        </div>
                        <div className="col-md-6">
                          <label for="securityThree">Security questions #3</label>
                          <select id="securityThree" className="custom-select">
                            <option selected>Choose...</option>
                            <option>What was the name of your first pet?</option>
                            <option>What's your Mother's middle name?</option>
                            <option>What was the name of your first school?</option>
                            <option>Where did you travel for the first time?</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label for="securityFore">Answer</label>
                          <input id="securityFore" type="text" className="form-control" placeholder="Enter your answer"/>
                        </div>
                        <div className="col-md-12">
                          <input type="submit" value="Update"/>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="settings-wallet" role="tabpanel" aria-labelledby="settings-wallet-tab">
              <div className="wallet">
                <div className="row">
                  <div className="col-md-12 col-lg-4">
                    <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                      <a className="nav-link d-flex justify-content-between align-items-center active" data-toggle="pill"
                        href="#coinBTC" role="tab" aria-selected="true">
                        <div className="d-flex">
                          <img src="assets/img/icon/18.png" alt="btc"/>
                          <div>
                            <h2>BTC</h2>
                            <p>Bitcoin</p>
                          </div>
                        </div>
                        <div>
                          <h3>4.5484254</h3>
                          <p className="text-right"><i className="icon ion-md-lock"></i> 0.0000000</p>
                        </div>
                      </a>
                      <a className="nav-link d-flex justify-content-between align-items-center" data-toggle="pill"
                        href="#coinETH" role="tab" aria-selected="true">
                        <div className="d-flex">
                          <img src="assets/img/icon/1.png" alt="btc"/>
                          <div>
                            <h2>ETH</h2>
                            <p>Ethereum</p>
                          </div>
                        </div>
                        <div>
                          <h3>13.454845</h3>
                          <p className="text-right"><i className="icon ion-md-lock"></i> 0.0000000</p>
                        </div>
                      </a>
                      <a className="nav-link d-flex justify-content-between align-items-center" data-toggle="pill"
                        href="#coinBNB" role="tab" aria-selected="true">
                        <div className="d-flex">
                          <img src="assets/img/icon/9.png" alt="btc"/>
                          <div>
                            <h2>BNB</h2>
                            <p>Binance</p>
                          </div>
                        </div>
                        <div>
                          <h3>35.4842458</h3>
                          <p className="text-right"><i className="icon ion-md-lock"></i> 0.0000000</p>
                        </div>
                      </a>
                      <a className="nav-link d-flex justify-content-between align-items-center" data-toggle="pill"
                        href="#coinTRX" role="tab" aria-selected="true">
                        <div className="d-flex">
                          <img src="assets/img/icon/6.png" alt="btc"/>
                          <div>
                            <h2>TRX</h2>
                            <p>Tron</p>
                          </div>
                        </div>
                        <div>
                          <h3>4.458941</h3>
                          <p className="text-right"><i className="icon ion-md-lock"></i> 0.0000000</p>
                        </div>
                      </a>
                      <a className="nav-link d-flex justify-content-between align-items-center" data-toggle="pill"
                        href="#coinEOS" role="tab" aria-selected="true">
                        <div className="d-flex">
                          <img src="assets/img/icon/2.png" alt="btc"/>
                          <div>
                            <h2>EOS</h2>
                            <p>Eosio</p>
                          </div>
                        </div>
                        <div>
                          <h3>33.478951</h3>
                          <p className="text-right"><i className="icon ion-md-lock"></i> 0.0000000</p>
                        </div>
                      </a>
                      <a className="nav-link d-flex justify-content-between align-items-center" data-toggle="pill"
                        href="#coinXMR" role="tab" aria-selected="true">
                        <div className="d-flex">
                          <img src="assets/img/icon/7.png" alt="btc"/>
                          <div>
                            <h2>XMR</h2>
                            <p>Monero</p>
                          </div>
                        </div>
                        <div>
                          <h3>99.465975</h3>
                          <p className="text-right"><i className="icon ion-md-lock"></i> 0.0000000</p>
                        </div>
                      </a>
                      <a className="nav-link d-flex justify-content-between align-items-center" data-toggle="pill"
                        href="#coinKCS" role="tab" aria-selected="true">
                        <div className="d-flex">
                          <img src="assets/img/icon/4.png" alt="btc"/>
                          <div>
                            <h2>KCS</h2>
                            <p>Kstarcoin</p>
                          </div>
                        </div>
                        <div>
                          <h3>114.57564</h3>
                          <p className="text-right"><i className="icon ion-md-lock"></i> 0.0000000</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-8">
                    <div className="tab-content">
                      <div className="tab-pane fade show active" id="coinBTC" role="tabpanel">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Balances</h5>
                            <ul>
                              <li className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                  <i className="icon ion-md-cash"></i>
                                  <h2>Total Equity</h2>
                                </div>
                                <div>
                                  <h3>5.5894 BTC</h3>
                                </div>
                              </li>
                              <li className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                  <i className="icon ion-md-checkmark"></i>
                                  <h2>Available Margin</h2>
                                </div>
                                <div>
                                  <h3>2.480 BTC</h3>
                                </div>
                              </li>
                            </ul>
                            <button className="btn green">Deposit</button>
                            <button className="btn red">Withdraw</button>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Wallet Deposit Address</h5>
                            <div className="row wallet-address">
                              <div className="col-md-8">
                                <p>Deposits to this address are unlimited. Note that you may not be able to withdraw all
                                  of your
                                  funds at once if you deposit more than your daily withdrawal limit.</p>
                                <div className="input-group">
                                  <input type="text" className="form-control" value="Ad87deD4gEe8dG57Ede4eEg5dREs4d5e8f4e"/>
                                  <div className="input-group-prepend">
                                    <button className="btn btn-primary">COPY</button>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <img src="assets/img/qr-code-dark.svg" alt="qr-code"/>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Latest Transactions</h5>
                            <div className="wallet-history">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>No.</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>25-04-2019</td>
                                    <td><i className="icon ion-md-checkmark-circle-outline green"></i></td>
                                    <td>4.5454334</td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>25-05-2019</td>
                                    <td><i className="icon ion-md-checkmark-circle-outline green"></i></td>
                                    <td>0.5484468</td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>25-06-2019</td>
                                    <td><i className="icon ion-md-close-circle-outline red"></i></td>
                                    <td>2.5454545</td>
                                  </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>25-07-2019</td>
                                    <td><i className="icon ion-md-checkmark-circle-outline green"></i></td>
                                    <td>1.45894147</td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>25-08-2019</td>
                                    <td><i className="icon ion-md-close-circle-outline red"></i></td>
                                    <td>2.5454545</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="coinETH" role="tabpanel">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Balances</h5>
                            <ul>
                              <li className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                  <i className="icon ion-md-cash"></i>
                                  <h2>Total Equity</h2>
                                </div>
                                <div>
                                  <h3>4.1542 ETH</h3>
                                </div>
                              </li>
                              <li className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                  <i className="icon ion-md-checkmark"></i>
                                  <h2>Available Margin</h2>
                                </div>
                                <div>
                                  <h3>1.334 ETH</h3>
                                </div>
                              </li>
                            </ul>
                            <button className="btn green">Deposit</button>
                            <button className="btn red">Withdraw</button>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Wallet Deposit Address</h5>
                            <div className="row wallet-address">
                              <div className="col-md-8">
                                <p>Deposits to this address are unlimited. Note that you may not be able to withdraw all
                                  of your
                                  funds at once if you deposit more than your daily withdrawal limit.</p>
                                <div className="input-group">
                                  <input type="text" className="form-control" value="Ad87deD4gEe8dG57Ede4eEg5dREs4d5e8f4e"/>
                                  <div className="input-group-prepend">
                                    <button className="btn btn-primary">COPY</button>
                                  </div>
                                </div>/
                              </div>
                              <div className="col-md-4">
                                <img src="assets/img/qr-code-dark.svg" alt="qr-code"/>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Latest Transactions</h5>
                            <div className="wallet-history">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>No.</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>25-04-2019</td>
                                    <td><i className="icon ion-md-checkmark-circle-outline green"></i></td>
                                    <td>4.5454334</td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>25-05-2019</td>
                                    <td><i className="icon ion-md-checkmark-circle-outline green"></i></td>
                                    <td>0.5484468</td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>25-06-2019</td>
                                    <td><i className="icon ion-md-close-circle-outline red"></i></td>
                                    <td>2.5454545</td>
                                  </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>25-07-2019</td>
                                    <td><i className="icon ion-md-checkmark-circle-outline green"></i></td>
                                    <td>1.45894147</td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>25-08-2019</td>
                                    <td><i className="icon ion-md-close-circle-outline red"></i></td>
                                    <td>2.5454545</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="coinBNB" role="tabpanel">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Balances</h5>
                            <ul>
                              <li className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                  <i className="icon ion-md-cash"></i>
                                  <h2>Total Equity</h2>
                                </div>
                                <div>
                                  <h3>7.342 BNB</h3>
                                </div>
                              </li>
                              <li className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                  <i className="icon ion-md-checkmark"></i>
                                  <h2>Available Margin</h2>
                                </div>
                                <div>
                                  <h3>0.332 BNB</h3>
                                </div>
                              </li>
                            </ul>
                            <button className="btn green">Deposit</button>
                            <button className="btn red">Withdraw</button>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Wallet Deposit Address</h5>
                            <div className="row wallet-address">
                              <div className="col-md-8">
                                <p>Deposits to this address are unlimited. Note that you may not be able to withdraw all
                                  of your
                                  funds at once if you deposit more than your daily withdrawal limit.</p>
                                <div className="input-group">
                                  <input type="text" className="form-control" value="Ad87deD4gEe8dG57Ede4eEg5dREs4d5e8f4e"/>
                                  <div className="input-group-prepend">
                                    <button className="btn btn-primary">COPY</button>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <img src="assets/img/qr-code-dark.svg" alt="qr-code"/>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Latest Transactions</h5>
                            <div className="wallet-history">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>No.</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>25-04-2019</td>
                                    <td><i className="icon ion-md-checkmark-circle-outline green"></i></td>
                                    <td>4.5454334</td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>25-05-2019</td>
                                    <td><i className="icon ion-md-checkmark-circle-outline green"></i></td>
                                    <td>0.5484468</td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>25-06-2019</td>
                                    <td><i className="icon ion-md-close-circle-outline red"></i></td>
                                    <td>2.5454545</td>
                                  </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>25-07-2019</td>
                                    <td><i className="icon ion-md-checkmark-circle-outline green"></i></td>
                                    <td>1.45894147</td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>25-08-2019</td>
                                    <td><i className="icon ion-md-close-circle-outline red"></i></td>
                                    <td>2.5454545</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="coinTRX" role="tabpanel">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Balances</h5>
                            <ul>
                              <li className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                  <i className="icon ion-md-cash"></i>
                                  <h2>Total Equity</h2>
                                </div>
                                <div>
                                  <h3>4.3344 TRX</h3>
                                </div>
                              </li>
                              <li className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                  <i className="icon ion-md-checkmark"></i>
                                  <h2>Available Margin</h2>
                                </div>
                                <div>
                                  <h3>1.453 TRX</h3>
                                </div>
                              </li>
                            </ul>
                            <button className="btn green">Deposit</button>
                            <button className="btn red">Withdraw</button>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Wallet Deposit Address</h5>
                            <div className="row wallet-address">
                              <div className="col-md-8">
                                <p>Deposits to this address are unlimited. Note that you may not be able to withdraw all
                                  of your
                                  funds at once if you deposit more than your daily withdrawal limit.</p>
                                <div className="input-group">
                                  <input type="text" className="form-control" value="Ad87deD4gEe8dG57Ede4eEg5dREs4d5e8f4e"/>
                                  <div className="input-group-prepend">
                                    <button className="btn btn-primary">COPY</button>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <img src="assets/img/qr-code-dark.svg" alt="qr-code"/>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Latest Transactions</h5>
                            <div className="wallet-history">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>No.</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>25-04-2019</td>
                                    <td><i className="icon ion-md-checkmark-circle-outline green"></i></td>
                                    <td>4.5454334</td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>25-05-2019</td>
                                    <td><i className="icon ion-md-checkmark-circle-outline green"></i></td>
                                    <td>0.5484468</td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>25-06-2019</td>
                                    <td><i className="icon ion-md-close-circle-outline red"></i></td>
                                    <td>2.5454545</td>
                                  </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>25-07-2019</td>
                                    <td><i className="icon ion-md-checkmark-circle-outline green"></i></td>
                                    <td>1.45894147</td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>25-08-2019</td>
                                    <td><i className="icon ion-md-close-circle-outline red"></i></td>
                                    <td>2.5454545</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="coinEOS" role="tabpanel">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Balances</h5>
                            <ul>
                              <li className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                  <i className="icon ion-md-cash"></i>
                                  <h2>Total Equity</h2>
                                </div>
                                <div>
                                  <h3>33.35 EOS</h3>
                                </div>
                              </li>
                              <li className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                  <i className="icon ion-md-checkmark"></i>
                                  <h2>Available Margin</h2>
                                </div>
                                <div>
                                  <h3>4.445 EOS</h3>
                                </div>
                              </li>
                            </ul>
                            <button className="btn green">Deposit</button>
                            <button className="btn red">Withdraw</button>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Wallet Deposit Address</h5>
                            <div className="row wallet-address">
                              <div className="col-md-8">
                                <p>Deposits to this address are unlimited. Note that you may not be able to withdraw all
                                  of your
                                  funds at once if you deposit more than your daily withdrawal limit.</p>
                                <div className="input-group">
                                  <input type="text" className="form-control" value="Ad87deD4gEe8dG57Ede4eEg5dREs4d5e8f4e"/>
                                  <div className="input-group-prepend">
                                    <button className="btn btn-primary">COPY</button>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <img src="assets/img/qr-code-dark.svg" alt="qr-code"/>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Latest Transactions</h5>
                            <div className="wallet-history">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>No.</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>25-04-2019</td>
                                    <td><i className="icon ion-md-checkmark-circle-outline green"></i></td>
                                    <td>4.5454334</td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>25-05-2019</td>
                                    <td><i className="icon ion-md-checkmark-circle-outline green"></i></td>
                                    <td>0.5484468</td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>25-06-2019</td>
                                    <td><i className="icon ion-md-close-circle-outline red"></i></td>
                                    <td>2.5454545</td>
                                  </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>25-07-2019</td>
                                    <td><i className="icon ion-md-checkmark-circle-outline green"></i></td>
                                    <td>1.45894147</td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>25-08-2019</td>
                                    <td><i className="icon ion-md-close-circle-outline red"></i></td>
                                    <td>2.5454545</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="coinXMR" role="tabpanel">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Balances</h5>
                            <ul>
                              <li className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                  <i className="icon ion-md-cash"></i>
                                  <h2>Total Equity</h2>
                                </div>
                                <div>
                                  <h3>34.333 XMR</h3>
                                </div>
                              </li>
                              <li className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                  <i className="icon ion-md-checkmark"></i>
                                  <h2>Available Margin</h2>
                                </div>
                                <div>
                                  <h3>2.354 XMR</h3>
                                </div>
                              </li>
                            </ul>
                            <button className="btn green">Deposit</button>
                            <button className="btn red">Withdraw</button>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Wallet Deposit Address</h5>
                            <div className="row wallet-address">
                              <div className="col-md-8">
                                <p>Deposits to this address are unlimited. Note that you may not be able to withdraw all
                                  of your
                                  funds at once if you deposit more than your daily withdrawal limit.</p>
                                <div className="input-group">
                                  <input type="text" className="form-control" value="Ad87deD4gEe8dG57Ede4eEg5dREs4d5e8f4e"/>
                                  <div className="input-group-prepend">
                                    <button className="btn btn-primary">COPY</button>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <img src="assets/img/qr-code-dark.svg" alt="qr-code"/>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Latest Transactions</h5>
                            <div className="wallet-history">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>No.</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>25-04-2019</td>
                                    <td><i className="icon ion-md-checkmark-circle-outline green"></i></td>
                                    <td>4.5454334</td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>25-05-2019</td>
                                    <td><i className="icon ion-md-checkmark-circle-outline green"></i></td>
                                    <td>0.5484468</td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>25-06-2019</td>
                                    <td><i className="icon ion-md-close-circle-outline red"></i></td>
                                    <td>2.5454545</td>
                                  </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>25-07-2019</td>
                                    <td><i className="icon ion-md-checkmark-circle-outline green"></i></td>
                                    <td>1.45894147</td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>25-08-2019</td>
                                    <td><i className="icon ion-md-close-circle-outline red"></i></td>
                                    <td>2.5454545</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="coinKCS" role="tabpanel">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Balances</h5>
                            <ul>
                              <li className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                  <i className="icon ion-md-cash"></i>
                                  <h2>Total Equity</h2>
                                </div>
                                <div>
                                  <h3>86.577 KCS</h3>
                                </div>
                              </li>
                              <li className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                  <i className="icon ion-md-checkmark"></i>
                                  <h2>Available Margin</h2>
                                </div>
                                <div>
                                  <h3>5.78 KCS</h3>
                                </div>
                              </li>
                            </ul>
                            <button className="btn green">Deposit</button>
                            <button className="btn red">Withdraw</button>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Wallet Deposit Address</h5>
                            <div className="row wallet-address">
                              <div className="col-md-8">
                                <p>Deposits to this address are unlimited. Note that you may not be able to withdraw all
                                  of your
                                  funds at once if you deposit more than your daily withdrawal limit.</p>
                                <div className="input-group">
                                  <input type="text" className="form-control" value="Ad87deD4gEe8dG57Ede4eEg5dREs4d5e8f4e"/>
                                  <div className="input-group-prepend">
                                    <button className="btn btn-primary">COPY</button>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <img src="assets/img/qr-code-dark.svg" alt="qr-code"/>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Latest Transactions</h5>
                            <div className="wallet-history">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>No.</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>25-04-2019</td>
                                    <td><i className="icon ion-md-checkmark-circle-outline green"></i></td>
                                    <td>4.5454334</td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>25-05-2019</td>
                                    <td><i className="icon ion-md-checkmark-circle-outline green"></i></td>
                                    <td>0.5484468</td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>25-06-2019</td>
                                    <td><i className="icon ion-md-close-circle-outline red"></i></td>
                                    <td>2.5454545</td>
                                  </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>25-07-2019</td>
                                    <td><i className="icon ion-md-checkmark-circle-outline green"></i></td>
                                    <td>1.45894147</td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>25-08-2019</td>
                                    <td><i className="icon ion-md-close-circle-outline red"></i></td>
                                    <td>2.5454545</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Notifications</h5>
                  <div className="settings-notification">
                    <ul>
                      <li>
                        <div className="notification-info">
                          <p>Update price</p>
                          <span>Get the update price in your dashboard</span>
                        </div>
                        <div className="custom-control custom-switch">
                          <input type="checkbox" className="custom-control-input" id="notification1"/>
                          <label className="custom-control-label" for="notification1"></label>
                        </div>
                      </li>
                      <li>
                        <div className="notification-info">
                          <p>2FA</p>
                          <span>Unable two factor authentication service</span>
                        </div>
                        <div className="custom-control custom-switch">
                          <input type="checkbox" className="custom-control-input" id="notification2" checked/>
                          <label className="custom-control-label" for="notification2"></label>
                        </div>
                      </li>
                      <li>
                        <div className="notification-info">
                          <p>Latest news</p>
                          <span>Get the latest news in your mail</span>
                        </div>
                        <div className="custom-control custom-switch">
                          <input type="checkbox" className="custom-control-input" id="notification3"/>
                          <label className="custom-control-label" for="notification3"></label>
                        </div>
                      </li>
                      <li>
                        <div className="notification-info">
                          <p>Email Service</p>
                          <span>Get security code in your mail</span>
                        </div>
                        <div className="custom-control custom-switch">
                          <input type="checkbox" className="custom-control-input" id="notification4" checked/>
                          <label className="custom-control-label" for="notification4"></label>
                        </div>
                      </li>
                      <li>
                        <div className="notification-info">
                          <p>Phone Notify</p>
                          <span>Get transition notification in your phone </span>
                        </div>
                        <div className="custom-control custom-switch">
                          <input type="checkbox" className="custom-control-input" id="notification5" checked/>
                          <label className="custom-control-label" for="notification5"></label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card settings-profile">
                <div className="card-body">
                  <h5 className="card-title">Create API Key</h5>
                  <div className="form-row">
                    <div className="col-md-6">
                      <label for="generateKey">Generate key name</label>
                      <input id="generateKey" type="text" className="form-control" placeholder="Enter your key name"/>
                    </div>
                    <div className="col-md-6">
                      <label for="rewritePassword">Confirm password</label>
                      <input id="rewritePassword" type="password" className="form-control"
                        placeholder="Confirm your password"/>
                    </div>
                    <div className="col-md-12">
                      <input type="submit" value="Create API key"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Your API Keys</h5>
                  <div className="wallet-history">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Key</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>zRmWVcrAZ1C0RZkFMu7K5v0KWC9jUJLt</td>
                          <td>
                            <div className="custom-control custom-switch">
                              <input type="checkbox" className="custom-control-input" id="apiStatus1" checked/>
                              <label className="custom-control-label" for="apiStatus1"></label>
                            </div>
                          </td>
                          <td><i className="icon ion-md-trash"></i></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Rv5dgnKdmVPyHwxeExBYz8uFwYQz3Jvg</td>
                          <td>
                            <div className="custom-control custom-switch">
                              <input type="checkbox" className="custom-control-input" id="apiStatus2"/>
                              <label className="custom-control-label" for="apiStatus2"></label>
                            </div>
                          </td>
                          <td><i className="icon ion-md-trash"></i></td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>VxEYIs1HwgmtKTUMA4aknjSEjjePZIWu</td>
                          <td>
                            <div className="custom-control custom-switch">
                              <input type="checkbox" className="custom-control-input" id="apiStatus3"/>
                              <label className="custom-control-label" for="apiStatus3"></label>
                            </div>
                          </td>
                          <td><i className="icon ion-md-trash"></i></td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>M01DueJ4x3awI1SSLGT3CP1EeLSnqt8o</td>
                          <td>
                            <div className="custom-control custom-switch">
                              <input type="checkbox" className="custom-control-input" id="apiStatus4"/>
                              <label className="custom-control-label" for="apiStatus4"></label>
                            </div>
                          </td>
                          <td><i className="icon ion-md-trash"></i></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
    )
}

export default Profile
