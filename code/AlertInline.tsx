import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

type Props = {
  height: number;
  width: number;
  kind: string;
  text: string;
  context: string;
};

export function AlertInline(props: Props) {
  return (
    <div
      className={`alert ${props.kind} is-inline`}
      style={{ width: "100%", padding: "10px" }}
    >
      <p>
        <span className={"is-bold"}>{props.text}</span>
        {props.context}
      </p>
    </div>
  );
}

addPropertyControls(AlertInline, {
  kind: {
    type: ControlType.Enum,
    title: "Kind",
    options: [
      "has-bg-status-default",
      "has-bg-status-info",
      "has-bg-status-success",
      "has-bg-status-warning",
      "has-bg-status-danger"
    ],
    optionTitles: ["Default", "Info", "Success", "Warning", "Danger"],
    defaultValue: "has-bg-status-default"
  },
  text: {
    type: ControlType.String,
    title: "Bold Text",
    defaultValue: "Non-Production Instance: "
  },
  context: {
    type: ControlType.String,
    title: "text",
    defaultValue: "Do not use for Production or CI/CD (Screwdriver)"
  }
});

AlertInline.defaultProps = {
  height: 45,
  width: 800
};
