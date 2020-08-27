import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCog,
  faBars,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

class HomePageNavigationBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark pb-0 pt-0">
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
      </nav>
    );
  }
}

export default HomePageNavigationBar;
