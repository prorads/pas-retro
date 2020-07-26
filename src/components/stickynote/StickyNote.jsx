import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faThumbsUp,
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
    const { id, createdBy, showFullName } = this.props;
    const textAreaStyle = {
      resize: "none",
    };
    let name = createdBy;
    if (!showFullName && createdBy.length > 6) {
      name = createdBy.substring(0, 3) + "...";
    }
    const { noteColor, convertToActionItem } = this.state;
    const cardClasses = ["card m-1"];
    cardClasses.push(noteColor);
    const textAreaClasses = [
      "card-text border-0 text-white md-textarea form-control",
    ];
    textAreaClasses.push(noteColor);
    const buttonClass = ["dropdown-toggle btn"];
    buttonClass.push(noteColor);
    const headerClasses = ["card-header border-bottom p-0"];
    headerClasses.push("border-" + noteColor.split("-")[1]);
    return (
      <div className={cardClasses.join(" ")} id={id}>
        <div className={headerClasses.join(" ")}>
          <div className="float-left pl-1">
            <span className="badge badge-primary">{name}</span>
          </div>
          <div className="dropdown float-right">
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
          <div className="float-right p-1">
            <a className="link pr-2">
              <FontAwesomeIcon icon={faThumbsUp} size></FontAwesomeIcon>2
            </a>
            <a className="link">
              <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="md-form">
            <textarea
              className={textAreaClasses.join(" ")}
              rows="3"
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
        </div>
      </div>
    );
  }
}

StickyNote.propTypes = {
  id: PropTypes.string.isRequired,
  createdBy: PropTypes.string,
  showFullName: PropTypes.bool,
};

StickyNote.defaultProps = {
  createdBy: "Anonymous",
  showFullName: true,
};

export default StickyNote;
