import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faThumbsUp,
  faThumbsDown,
  faCircle,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";

class StickyNote extends React.Component {
  constructor() {
    super();
    this.state = {
      convertToActionItem: false,
      noteColor: "bg-warning",
    };
  }

  render() {
    const textAreaStyle = {
      resize: "none",
    };
    const { noteColor, convertToActionItem } = this.state;
    const cardClasses = ["card"];
    cardClasses.push(noteColor);
    const textAreaClasses = [
      "card-text border-0 text-white md-textarea form-control",
    ];
    textAreaClasses.push(noteColor);
    const buttonClass = ["dropdown-toggle float-right btn"];
    buttonClass.push(noteColor);
    const headerClasses = ["card-header border-bottom "];
    headerClasses.push("border-" + noteColor.split("-")[1]);
    return (
      <div className={cardClasses.join(" ")}>
        <div className={headerClasses.join(" ")}>
          <div className="dropdown">
            <button
              className={buttonClass.join(" ")}
              data-toggle="dropdown"
            ></button>
            <div className="dropdown-menu">
              <a
                className="dropdown-item"
                href="#"
                onClick={() => {
                  this.setState({ convertToActionItem: !convertToActionItem });
                }}
              >
                <FontAwesomeIcon
                  className="pr-1"
                  icon={faTasks}
                ></FontAwesomeIcon>
                {convertToActionItem
                  ? "Convert to comment"
                  : "Convert to action"}
              </a>
              <a
                href="#"
                className="dropdown-item link"
                onClick={() => {
                  this.setState({ noteColor: "bg-success" });
                }}
              >
                <FontAwesomeIcon
                  className="text-success pr-1"
                  icon={faCircle}
                ></FontAwesomeIcon>
                Green
              </a>
              <a
                href="#"
                className="dropdown-item link"
                onClick={() => {
                  this.setState({ noteColor: "bg-warning" });
                }}
              >
                <FontAwesomeIcon
                  className="text-warning pr-1"
                  icon={faCircle}
                ></FontAwesomeIcon>
                Yellow
              </a>
              <a
                href="#"
                className="dropdown-item link"
                onClick={() => {
                  this.setState({ noteColor: "bg-primary" });
                }}
              >
                <FontAwesomeIcon
                  className="text-primary pr-1"
                  icon={faCircle}
                ></FontAwesomeIcon>
                Blue
              </a>
              <a
                href="#"
                className="dropdown-item link"
                onClick={() => {
                  this.setState({ noteColor: "bg-danger" });
                }}
              >
                <FontAwesomeIcon
                  className="text-danger pr-1"
                  icon={faCircle}
                ></FontAwesomeIcon>
                Red
              </a>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div class="md-form">
            <textarea
              className={textAreaClasses.join(" ")}
              rows="4"
              maxLength="200"
              style={textAreaStyle}
            ></textarea>
          </div>
          {convertToActionItem && (
            <div className="row pb-1">
              <div className="col-sm-6">
                <select className="form-control " id="actionStatus">
                  <option>To-Do</option>
                  <option>In-progress</option>
                  <option>Done</option>
                </select>
              </div>
              <div className="col-sm-6">
                <select className="form-control" id="actionAssignedTo">
                  <option>Sandy</option>
                  <option>Chadda</option>
                  <option>Pankya</option>
                </select>
              </div>
            </div>
          )}

          <span class="badge badge-primary">Anyonymous</span>
          <div className="float-right">
            <a className="link pr-2">
              <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>2
            </a>
            <a className="link pr-2">
              <FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon>3
            </a>
            <a className="link">
              <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default StickyNote;
