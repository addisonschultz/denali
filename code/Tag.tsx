import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

export function Tag() {
  return (
    <div className="tags">
      <span className="tag">Standard Tag</span>

      <span className="tag is-active">Active Tag</span>

      <span className="tag is-disabled">Disabled Tag</span>
    </div>
  );
}
