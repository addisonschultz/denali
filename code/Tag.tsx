import * as React from "react";

export function Tag() {
  return (
    <div className="tags">
      <span className="tag">Standard Tag</span>

      <span className="tag is-active">Active Tag</span>

      <span className="tag is-disabled">Disabled Tag</span>
    </div>
  );
}
