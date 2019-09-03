import * as React from "react";

export function Select() {
  return (
    <div className="input has-arrow">
      <select name="">
        <option value="" disabled="" selected="">
          Select your option
        </option>

        <option value="">Value 1</option>

        <option value="">Value 2</option>

        <option value="">Value 3</option>
      </select>
    </div>
  );
}
