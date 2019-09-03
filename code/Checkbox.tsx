import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

export function Checkbox() {
  return (
    <div className="checkbox">
      <input id="denali-checkbox-1" type="checkbox" value="value1" />

      <label for="denali-checkbox-1">Checkbox</label>
    </div>
  );
}
