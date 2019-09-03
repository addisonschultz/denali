import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

export function Table() {
  return (
    <table className="table">
      <tr>
        <th>Date</th>

        <th>Time</th>

        <th>User</th>

        <th>Cause</th>
      </tr>

      <tr>
        <td>04/14/2017</td>

        <td>1:34 PDT</td>

        <td>yby.jupiter</td>

        <td>jira123</td>
      </tr>

      <tr>
        <td>04/14/2017</td>

        <td>19:34 PDT</td>

        <td>yby.jupiter</td>

        <td>jira123</td>
      </tr>
    </table>
  );
}
