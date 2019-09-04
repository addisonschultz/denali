import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

type Props = {
  height: number;
  width: number;
  text: string;
  color: string;
  weight: string;
};

export function Chip(props: Props) {
  return (
    <span className={`chips has-bg-${props.color}-${props.weight}`}>
      {props.text}
    </span>
  );
}

addPropertyControls(Chip, {
  text: {
    type: ControlType.String,
    title: "Text",
    defaultValue: "Default Chip"
  },
  color: {
    type: ControlType.Enum,
    title: "Color",
    options: [
      "default",
      "red",
      "orange",
      "yellow",
      "lime",
      "green",
      "sky",
      "blue",
      "purple",
      "violet",
      "pink"
    ],
    optionTitles: [
      "Default",
      "Red",
      "Orange",
      "Yellow",
      "Lime",
      "Green",
      "Sky",
      "Blue",
      "Purple",
      "Violet",
      "Pink"
    ]
  },
  weight: {
    type: ControlType.Enum,
    title: "Weight",
    options: [
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900",
      "r100",
      "r200",
      "r300",
      "r400",
      "r500"
    ],
    optionTitles: [
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900",
      "r100",
      "r200",
      "r300",
      "r400",
      "r500"
    ],
    defaultValue: "500"
  }
});

Chip.defaultProps = {
  height: 20,
  width: 95
};
