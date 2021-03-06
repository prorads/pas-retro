import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import StickyNote from "../stickynote/StickyNote";

class RetroBoardSection extends React.Component {
  render() {
    const {
      id,
      sectionName,
      stickynoteClasses,
      totalSectionCount,
    } = this.props;
    const sectionClasses = ["card border border-info m-0"];
    let divClasses = "col-md-12 col-sm-6";
    if (totalSectionCount === 2) {
      divClasses = "col-md-6 col-sm-6";
    }
    if (totalSectionCount === 3) {
      divClasses = "col-md-4 col-sm-6";
    }
    if (totalSectionCount > 3) {
      divClasses = "col-md-6 col-sm-6";
    }

    return (
      <div className={divClasses}>
        <div className={sectionClasses.join(" ")} id={id}>
          <div className="card-header border border-dark">
            <h5 className="card-title float-left">{sectionName}</h5>
            <div className="dropdown float-right">
              <button className="float-right" data-toggle="dropdown">
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
              </button>
            </div>
          </div>
          <div className="card-body border border-danger">
            <div className="row align-items-center">
              <div className={stickynoteClasses}>
                <StickyNote
                  showFullName={totalSectionCount > 3 ? false : true}
                  createdBy="Anonymous"
                />
              </div>
              <div className={stickynoteClasses}>
                <StickyNote
                  showFullName={totalSectionCount > 3 ? false : true}
                  createdBy="Anonymous"
                />
              </div>
              <div className={stickynoteClasses}>
                <StickyNote
                  showFullName={totalSectionCount > 3 ? false : true}
                  createdBy="AAAAA6"
                />
              </div>
              <div className={stickynoteClasses}>
                <StickyNote
                  showFullName={totalSectionCount > 3 ? false : true}
                  createdBy="BBBBBB7"
                />
              </div>
              <div className={stickynoteClasses}>
                <StickyNote
                  showFullName={totalSectionCount > 3 ? false : true}
                  createdBy="AAA4"
                />
              </div>
              <div className={stickynoteClasses}>
                <StickyNote
                  showFullName={totalSectionCount > 3 ? false : true}
                  createdBy="AAA4"
                />
              </div>
              <div className={stickynoteClasses}>
                <StickyNote
                  showFullName={totalSectionCount > 3 ? false : true}
                  createdBy="AAA4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RetroBoardSection.propTypes = {
  id: PropTypes.string.isRequired,
  sectionName: PropTypes.string.isRequired,
  stickynoteClasses: PropTypes.string.isRequired,
  totalSectionCount: PropTypes.number.isRequired,
};

RetroBoardSection.defaultProps = {};

export default RetroBoardSection;
