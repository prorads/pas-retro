import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch, faLock, faMask } from "@fortawesome/free-solid-svg-icons";

class RetroNavigationBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <select
            className="form-control selcls col-md-4 float-left"
            id="board"
          >
            <option>Demo-Board</option>
            <option>Your-Board</option>
          </select>

          <button
            className="navbar-toggler "
            data-toggle="collapse"
            data-target="#boardMenu"
          >
            <span className="navbar-toggler-icon dark"></span>
          </button>
          <div className="collapse navbar-collapse" id="boardMenu">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="timer" className="nav-link">
                  <FontAwesomeIcon icon={faMask}></FontAwesomeIcon>
                  Mask Comments
                </a>
              </li>
              <li className="nav-item">
                <a href="timer" className="nav-link">
                  <FontAwesomeIcon icon={faStopwatch}></FontAwesomeIcon>
                  Start Timer
                </a>
              </li>
              <li className="nav-item">
                <a href="timer" className="nav-link">
                  <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                  Lock Board
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default RetroNavigationBar;
