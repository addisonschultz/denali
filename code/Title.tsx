import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

export function Title() {
  return (
    <div className="title">
      <span className="bar"></span>

      <div className="title-text">
        <h3>Title Element</h3>

        <h6>Caption</h6>
      </div>
    </div>
  );
}
