import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Components/About";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Experiance from "./Components/Experiance";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

function App() {
  return (
    <div>
      
      
      <Router>
        <Switch>
          <Route exact path="/">
            <About/>
          </Route>

          <Route exact path="/Education">
            <Education/>
          </Route>
          
          <Route  exact path="/Experiance">
            <Experiance />
          </Route>

          <Route  exact path="/Skills">
            <Skills/>
          </Route>

          <Route  exact path="/Contact">
            <Contact />
          </Route>

          <Route  exact path="/Projects">
            <Projects />
          </Route>
        </Switch>
      </Router>
      <Experiance/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>


    </div>
  );
}

export default App;
