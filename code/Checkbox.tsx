import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

type Props = {
  height: number;
  width: number;
  text: string;
  disabled: boolean;
  partial: boolean;
};

export function Checkbox(props: Props) {
  return (
    <div className="checkbox">
      {props.partial ? (
        <input
          id="denali-checkbox"
          type="checkbox"
          value=""
          data-partial=""
          disabled={props.disabled}
        />
      ) : (
        <input
          id="denali-checkbox"
          type="checkbox"
          value=""
          disabled={props.disabled}
        />
      )}

      <label htmlFor="denali-checkbox">{props.text}</label>
    </div>
  );
}

addPropertyControls(Checkbox, {
  text: {
    type: ControlType.String,
    title: "Text",
    defaultValue: "Checkbox"
  },
  disabled: {
    type: ControlType.Boolean,
    title: "Disabled",
    defaultValue: false,
    enabledTitle: "True",
    disabledTitle: "False"
  },
  partial: {
    type: ControlType.Boolean,
    title: "Partial",
    enabledTitle: "True",
    disabledTitle: "False",
    defaultValue: false
  }
});

Checkbox.defaultProps = {
  height: 40,
  width: 115
};
