import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";
import Header from "./UserTradeBookModule/Components/Header/Header";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/bootstrap.min.css";
import Signup from "./UserTradeBookModule/Screens/Signup/Signup";
import Signin from "./UserTradeBookModule/Screens/Signin/Signin";
import LandingPage1 from "./UserTradeBookModule/Screens/LandingPage1/LandingPage1";
import Exchange from "./UserTradeBookModule/Screens/Exchange/Exchange";
import ExchangeFluid from "./UserTradeBookModule/Screens/Exchange/ExchangeFluid/ExchangeFluid";
import MarketBar from "./UserTradeBookModule/Screens/Market/MarketBar/MarketBar";
import MarketOverview from "./UserTradeBookModule/Screens/Market/MarketOverview/MarketOverview";
import MarketScreener from "./UserTradeBookModule/Screens/Market/MarketScreener/MarketScreener";
import MarketCrypto from "./UserTradeBookModule/Screens/Market/MarketCrypto/MarketCrypto";
import ErrorComponent from "./UserTradeBookModule/Components/ErrorComponent/ErrorComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/Signin" component={Signin} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/LandingFirst" component={LandingPage1} />
          <Route exact path="/Exchange" component={Exchange} />
          <Route exact path="/ExchangeFluid" component={ExchangeFluid} />
          <Route exact path="/MarketBar" component={MarketBar} />
          <Route exact path="/MarketOverview" component={MarketOverview} />
          <Route exact path="/MarketScreener" component={MarketScreener} />
          <Route exact path="/MarketCrypto" component={MarketCrypto} />
          <Route exact path="/ErrorComponent" component={ErrorComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
