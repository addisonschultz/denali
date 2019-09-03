import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

export function Tab() {
  return (
    <div className="tabs is-primary">
      <ul>
        <li className="is-active">
          <a>Tab 1</a>
        </li>

        <li>
          <a>Tab 2</a>
        </li>

        <li>
          <a>Tab 3</a>
        </li>

        <li>
          <a>Tab 4</a>
        </li>

        <li className="is-disabled">
          <a>Tab 5</a>
        </li>
      </ul>
    </div>
  );
}
