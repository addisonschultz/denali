import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

type Props = {
  height: number;
  width: number;
  on: boolean;
  onText: string;
  offText: string;
  disabled: boolean;
};

export function Switch(props: Props) {
  return (
    <label className="switch">
      <input type="checkbox" disabled={props.disabled} checked={props.on} />

      <span className="slider"></span>

      <span className="off label">{props.offText}</span>

      <span className="on label">{props.onText}</span>
    </label>
  );
}

addPropertyControls(Switch, {
  on: {
    type: ControlType.Boolean,
    title: "On",
    defaultValue: false,
    enabledTitle: "True",
    disabledTitle: "False"
  },
  onText: {
    type: ControlType.String,
    title: "Text",
    defaultValue: "Toggle On"
  },
  offText: {
    type: ControlType.String,
    title: "Text",
    defaultValue: "Toggle Off"
  },
  disabled: {
    type: ControlType.Boolean,
    title: "Disabled",
    defaultValue: false,
    enabledTitle: "True",
    disabledTitle: "False"
  }
});

Switch.defaultProps = {
  height: 28,
  width: 130
};
