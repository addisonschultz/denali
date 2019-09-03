import * as React from "react";

export function Menu() {
  return (
    <div className="menu">
      <a className="menu-trigger">Hover for default menu</a>

      <div className="menu-content">
        <a>Home</a>

        <a>About</a>

        <a>Contact</a>

        <a>Help</a>

        <hr />

        <a>Support</a>
      </div>
    </div>
  );
}
