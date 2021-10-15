import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Education from "./Components/Education";

function App() {
  return (
    <div>
      
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/About">
            <About />
          </Route>
          <Route  exact path="/Education">
            <Education />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
