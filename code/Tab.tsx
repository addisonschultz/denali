import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

type Props = {
  height: number;
  width: number;
  tabItems: string[];
  kind: string;
  direction: string;
};

export function Tab(props: Props) {
  return (
    <div className={`tabs ${props.kind} ${props.direction}`}>
      <ul>
        {props.tabItems.map(item => {
          return (
            <li>
              <a>{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

addPropertyControls(Tab, {
  tabItems: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String
    },
    title: "Tab Items",
    defaultValue: ["Tab 1", "Tab 2"]
  },
  kind: {
    type: ControlType.Enum,
    title: "Kind",
    options: ["is-primary", "is-secondary"],
    optionTitles: ["Primary", "Secondary"],
    defaultValue: "is-primary"
  },
  direction: {
    type: ControlType.Enum,
    title: "Direction",
    options: ["is-horizontal", "is-vertical"],
    optionTitles: ["Horizontal", "Vertical"],
    defaultValue: "is-horizontal"
  }
});

Tab.defaultProps = {
  height: 60,
  width: 350
};
