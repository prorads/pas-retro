import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch, faLock, faMask } from "@fortawesome/free-solid-svg-icons";

class RetroDashboardPage extends React.Component {
  render() {
    const textAreaStyle = {
      resize: "none",
    };
    return (
      <>
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
        <div className="card-deck border border-primary">
          <div className="card border border-info">
            <div className="card-header border border-dark">
              <h5 className="card-title">Went Well</h5>
              <div className="float-right dropdown">
                <button></button>
              </div>
            </div>
            <div className="card-body border border-danger">
              <div className="card border border-primary">
                <div className="card-header border border-dark"></div>
                <div className="card-body border border-danger">
                  <div class="md-form">
                    <textarea
                      className="card-text bg-primary border-0 text-white md-textarea form-control"
                      rows="4"
                      maxLength="200"
                      style={textAreaStyle}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card border border-info">
            <div className="card-header border border-dark"></div>
            <div className="card-body border border-danger"></div>
          </div>
          <div className="card border border-info">
            <div className="card-header border border-dark"></div>
            <div className="card-body border border-danger"></div>
          </div>
        </div>
      </>
    );
  }
}

export default RetroDashboardPage;
