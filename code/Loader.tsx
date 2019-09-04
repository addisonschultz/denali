import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

type Props = {
  height: number;
  width: number;
  inverse: boolean;
  size: string;
};

export function Loader(props: Props) {
  return (
    <div
      className={`loader ${props.inverse && "is-inverse"} ${props.size}`}
    ></div>
  );
}

addPropertyControls(Loader, {
  inverse: {
    type: ControlType.Boolean,
    title: "Inverse",
    defaultValue: false,
    enabledTitle: "True",
    disabledTitle: "False"
  },
  size: {
    type: ControlType.Enum,
    title: "Size",
    options: [
      "is-extrasmall",
      "is-small",
      "is-default",
      "is-medium",
      "is-large"
    ],
    optionTitles: ["XS", "Small", "Default", "Medium", "Large"],
    defaultValue: "is-default"
  }
});

Loader.defaultProps = {
  height: 24,
  width: 24
};
