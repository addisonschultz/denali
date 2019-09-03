import * as React from "react";

export function Switch() {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" />

        <span className="slider"></span>

        <span className="off label">Toggle off</span>

        <span className="on label">Toggle on</span>
      </label>

      <br />

      <label className="switch">
        <input type="checkbox" checked="" />

        <span className="slider"></span>

        <span className="off label">Toggle off</span>

        <span className="on label">Toggle on</span>
      </label>

      <br />

      <label className="switch">
        <input type="checkbox" disabled="" />

        <span className="slider"></span>

        <span className="label">Toggle disabled</span>
      </label>

      <br />

      <label className="switch">
        <input type="checkbox" checked="" disabled="" />

        <span className="slider"></span>

        <span className="label">Toggle disabled on</span>
      </label>
    </div>
  );
}
