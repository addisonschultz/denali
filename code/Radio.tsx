import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

type Props = {
  height: number;
  width: number;
  text: string;
  disabled: boolean;
};

export function Radio(props: Props) {
  return (
    <div className="radio">
      <input
        id="denali-radio"
        type="radio"
        value=""
        data-partial=""
        disabled={props.disabled}
      />
      <label htmlFor="denali-radio">{props.text}</label>
    </div>
  );
}

addPropertyControls(Radio, {
  text: {
    type: ControlType.String,
    title: "Text",
    defaultValue: "Radio Button"
  },
  disabled: {
    type: ControlType.Boolean,
    title: "Disabled",
    defaultValue: false,
    enabledTitle: "True",
    disabledTitle: "False"
  }
});

Radio.defaultProps = {
  height: 40,
  width: 130
};
