import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import HomePage from "./pages/homepages/HomePage";
import RetroDashboardPage from "./pages/retropages/RetroDashboardPage";
import NotFound from "./pages/errorpages/NotFound";
import Unauthorized from "./pages/errorpages/Unauthorized";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCog,
  faBars,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: createBrowserHistory(),
      currentLocation: window.location.pathname,
    };
  }

  componentWillMount() {
    this.unlisten = this.state.history.listen((location, action) => {
      this.setState({ currentLocation: location.pathname });
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    const { history, currentLocation } = this.state;
    return (
      <Router history={history}>
        <div>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0">
            <div className="container">
              <a href="/home" className="navbar-brand">
                Retro
              </a>
              <button
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav">
                  <li className="nav-item px-2">
                    <a href="/home" className="nav-link active">
                      Home
                    </a>
                  </li>
                  <li className="nav-item px-2">
                    <a href="/boards/retro" className="nav-link">
                      Retro Board
                    </a>
                  </li>
                  <li className="nav-item px-2">
                    <a href="/home" className="nav-link">
                      Extra
                    </a>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown mr-3">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                      Welcome Sandy
                    </a>
                    <div className="dropdown-menu">
                      <a href="profile.html" className="dropdown-item">
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        Profile
                      </a>
                      <a href="settings.html" className="dropdown-item">
                        <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
                        Settings
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a href="login.html" className="nav-link">
                      <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div>
            <Switch>
              <Route exact path="/home" component={HomePage} />
              <Route
                exact
                path="/boards/retro"
                component={RetroDashboardPage}
              />
              <Route exact path="/404" component={NotFound} />
              <Route exact path="/401" component={Unauthorized} />
              <Redirect from="*" to="/404" />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
