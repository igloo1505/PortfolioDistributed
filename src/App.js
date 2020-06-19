import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import "./index.css";

function App() {
  let sideNav;
  // const [sideNavOpen, setSideNavOpen] = useState(false);

  useEffect(() => {
    M.AutoInit();
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems);
    sideNav = instances[0];
    console.log(sideNav);
  });
  const [curPath, setPath] = useState("/");
  useEffect(() => {
    setPath(window.location.pathname);
    console.log(curPath);
  });

  return (
    <div className="App">
      <Router>
        <Navbar
          sideNavOpen={() => sideNav.open()}
          sideNavClose={() => sideNav.close()}
          curPath={curPath}
        />

        <Switch>
          <Route
            exact
            path="/"
            component={() => <AboutMe setPath={setPath} curPath={curPath} />}
          />
          <Route
            exact
            path="/portfolio"
            component={() => <Portfolio setPath={setPath} curPath={curPath} />}
          />
          <Route
            exact
            path="/contact"
            component={() => <Contact setPath={setPath} curPath={curPath} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
