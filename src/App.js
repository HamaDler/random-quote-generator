import React from "react";
import HomePage from "./components/pages/HomePage";
import HowItWorks from "./components/pages/HowItWorks";
import Services from "./components/pages/Services";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/howitworks" component={HowItWorks} />
        <Route path="/services" component={Services} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
