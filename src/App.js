import React from "react";
import NavMenu from "./Components/NavMenu";
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";


function App() {
  return (
    <div>
      <Router>
        <NavMenu/>

        <Switch>
          <Route path='/about'>
            <About/>
          </Route>

          <Route path='/projects'>
            <Projects/>
          </Route>

          <Route path='/contact'>
           <Contact/>
          </Route>

          <Route path='/'>
            <Home/>
          </Route>
    
    
        </Switch>
      </Router>



    </div>
  );
}

export default App;
