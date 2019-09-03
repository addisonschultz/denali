import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

export function Toggle() {
  return (
    <div className="toggle">
      <ul>
        <li>
          <a>Toggle 1</a>
        </li>

        <li className="is-active">
          <a>Toggle 2</a>
        </li>

        <li>
          <a>Toggle 3</a>
        </li>

        <li>
          <a>Toggle 4</a>
        </li>

        <li className="is-disabled">
          <a>Toggle 5</a>
        </li>
      </ul>
    </div>
  );
}
