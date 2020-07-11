import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomePageNavigationBar from "./components/navbars/homepagenavigationbar/HomePageNavigationBar";
import HomePage from "./pages/homepages/HomePage";
import RetroDashboardPage from "./pages/retropages/RetroDashboardPage";
import NotFound from "./pages/errorpages/NotFound";
import Unauthorized from "./pages/errorpages/Unauthorized";

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
          <HomePageNavigationBar />
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
