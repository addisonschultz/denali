import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

type Props = {
  height: number;
  width: number;
  text: string;
  options: string[];
};

export function Select(props: Props) {
  return (
    <div className="input has-arrow">
      <select name="">
        <option value="">{props.text}</option>
        {props.options.map(option => {
          return <option value="">{option}</option>;
        })}
      </select>
    </div>
  );
}

addPropertyControls(Select, {
  text: {
    type: ControlType.String,
    title: "Text",
    defaultValue: "Select an option"
  },
  options: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String
    },
    title: "Options",
    defaultValue: ["Value 1", "Value 2"]
  }
});

Select.defaultProps = {
  width: 250,
  height: 36
};
