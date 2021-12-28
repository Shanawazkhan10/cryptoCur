import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";
import Header from "./UserTradeBookModule/Components/Header/Header";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/bootstrap.min.css";
import Signup from "./UserTradeBookModule/Screens/Signup/Signup";
import Signin from "./UserTradeBookModule/Screens/Signin/Signin";
import LandingPage1 from "./UserTradeBookModule/Screens/LandingPage1/LandingPage1";
import Exchange from "./UserTradeBookModule/Screens/Exchange/Exchange";

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
