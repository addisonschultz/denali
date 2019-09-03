import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

type Props = {
  height: number;
  width: number;
  linkTitle: boolean;
  title: string;
  showSubtitle: boolean;
  subtitle: string;
  showLink: boolean;
  link: string;
  showText: boolean;
  text: string;
  showFooter: boolean;
  footer: string;
};

export function Box(props: Props) {
  return (
    <div className={"box"} style={{ width: "100%" }}>
      {props.linkTitle ? (
        <h3>
          <a>{props.title}</a>
        </h3>
      ) : (
        <h3>{props.title}</h3>
      )}
      {props.showSubtitle && <h5>{props.subtitle}</h5>}
      <br />
      {props.showLink && <a>{props.link}</a>}
      {props.showText && <p>{props.text}</p>}
      {props.showFooter && (
        <footer>
          <p>{props.footer}</p>
        </footer>
      )}
    </div>
  );
}

addPropertyControls(Box, {
  linkTitle: {
    type: ControlType.Boolean,
    title: "Link Title?",
    defaultValue: true,
    enabledTitle: "True",
    disabledTitle: "False"
  },
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "Header"
  },
  showSubtitle: {
    type: ControlType.Boolean,
    title: "Subtitle?",
    defaultValue: true,
    enabledTitle: "True",
    disabledTitle: "False"
  },
  subtitle: {
    type: ControlType.String,
    title: "Subtitle",
    defaultValue: "Sub Title",
    hidden(props) {
      return props.showSubtitle === false;
    }
  },
  showLink: {
    type: ControlType.Boolean,
    title: "Link?",
    defaultValue: false,
    enabledTitle: "True",
    disabledTitle: "False"
  },
  link: {
    type: ControlType.String,
    title: "Link Text",
    defaultValue: "Related Link",
    hidden(props) {
      return props.showLink === false;
    }
  },
  showText: {
    type: ControlType.Boolean,
    title: "Text?",
    defaultValue: true,
    enabledTitle: "True",
    disabledTitle: "False"
  },
  text: {
    type: ControlType.String,
    title: "Paragraph Text",
    defaultValue:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
    hidden(props) {
      return props.showText === false;
    }
  },
  showFooter: {
    type: ControlType.Boolean,
    title: "Text?",
    defaultValue: false,
    enabledTitle: "True",
    disabledTitle: "False"
  },
  footer: {
    type: ControlType.String,
    title: "Paragraph Text",
    defaultValue: "This is a footer.",
    hidden(props) {
      return props.showFooter === false;
    }
  }
});

Box.defaultProps = {
  height: 270,
  width: 250
};
