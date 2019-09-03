import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

export function Alert() {
  return (
    <div
      className={"alert is-info"}
      style={{ width: "100%", paddingRight: "20px" }}
    >
      <span className={"d-icon d-domain"}></span>

      <div>
        <h5>This is a default alert</h5>
      </div>
      <a className={"close is-secondary"}>
        <span className={"d-icon d-close is-sub"}></span>
      </a>
    </div>
  );
}

Alert.defaultProps = {
  height: 80,
  width: 260
};
