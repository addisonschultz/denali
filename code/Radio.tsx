import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

export function Radio() {
  return (
    <div className="radio">
      <input type="radio" value="A" name="sample" id="radio-sample-a" />

      <label for="radio-sample-a">Radio</label>
    </div>
  );
}
