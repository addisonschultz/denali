import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

type Props = {
  height: number;
  width: number;
  text: string;
  items: string[];
  align: string;
  showFooter: boolean;
  footerItems: string[];
};

export function Menu(props: Props) {
  return (
    <div className={`menu ${props.align}`} style={{ margin: 20 }}>
      <a className="menu-trigger">{props.text}</a>

      <div className="menu-content">
        {props.items &&
          props.items.map(item => {
            return <a>{item}</a>;
          })}
        {props.showFooter && (
          <>
            <hr />
            {props.footerItems.map(item => {
              return <a>{item}</a>;
            })}
          </>
        )}
      </div>
    </div>
  );
}

addPropertyControls(Menu, {
  text: {
    type: ControlType.String,
    title: "Text",
    defaultValue: "Hover Me"
  },
  items: {
    type: ControlType.Array,
    title: "Menu Items",
    propertyControl: {
      type: ControlType.String
    },
    defaultValue: ["Item 1", "Item 2"]
  },
  align: {
    type: ControlType.Enum,
    title: "Alignment",
    options: ["is-left", "is-default", "is-right"],
    optionTitles: ["Left", "Default", "Right"],
    defaultValue: "is-default"
  },
  showFooter: {
    type: ControlType.Boolean,
    title: "Footer",
    defaultValue: false,
    enabledTitle: "True",
    disabledTitle: "False"
  },
  footerItems: {
    type: ControlType.Array,
    title: "Footer Items",
    propertyControl: {
      type: ControlType.String
    },
    defaultValue: ["Footer"],
    hidden(props) {
      return props.showFooter == false;
    }
  }
});

Menu.defaultProps = {
  height: 215,
  width: 110
};
