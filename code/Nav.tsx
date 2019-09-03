import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

export function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <img
          className="nav-brand"
          src="../node_modules/denali-css/dist/images/denali-logo.svg"
        />
      </div>
    </nav>
  );
}
