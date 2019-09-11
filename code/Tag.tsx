import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";

type Props = {
  height: number;
  width: number;
  style: string;
  state: string;
  size: string;
  text: string;
};

export function Tag(props: Props) {
  return (
    <div
      className={"denali-default-theme"}
      style={{
        background: "transparent",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <span
        className={"tag " + props.style + " " + props.state + " " + props.size}
      >
        {props.text}
      </span>
    </div>
  );
}

Tag.defaultProps = {
  height: 28,
  width: 98
};

addPropertyControls(Tag, {
  text: {
    type: ControlType.String,
    title: "Text",
    defaultValue: "Standard Tag",
    placeholder: "Text goes here..."
  },
  style: {
    type: ControlType.SegmentedEnum,
    title: "Type",
    defaultValue: " ",
    options: [" ", "outlined"],
    optionTitles: ["Default", "Outlined"]
  },
  state: {
    type: ControlType.Enum,
    title: "State",
    defaultValue: " ",
    options: [" ", "is-active", "is-disabled"],
    optionTitles: ["Default", "Active", "Disabled"]
  },
  size: {
    type: ControlType.Enum,
    title: "Size",
    defaultValue: " ",
    options: [" ", "is-small"],
    optionTitles: ["Default", "Small"]
  }
});
