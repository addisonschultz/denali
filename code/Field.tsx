import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

export function Field() {
  return (
    <div className={"input"}>
      <input className={""} type="text" placeholder="Just a field" />
    </div>
  );
}
