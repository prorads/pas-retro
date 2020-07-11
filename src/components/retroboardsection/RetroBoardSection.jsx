import React from "react";
import StickyNote from "../stickynote/StickyNote";

class RetroBoardSection extends React.Component {
  render() {
    return (
      <div className="card border border-info">
        <div className="card-header border border-dark">
          <h5 className="card-title">Went Well</h5>
          <div className="float-right dropdown">
            <button></button>
          </div>
        </div>
        <div className="card-body border border-danger">
          <StickyNote />
        </div>
      </div>
    );
  }
}

export default RetroBoardSection;
