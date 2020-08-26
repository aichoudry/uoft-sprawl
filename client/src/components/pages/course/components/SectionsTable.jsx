import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function SectionsTable({ lectures, isFlipped }) {
  const headers = ["Code", "Instructors", "Enrollment", "Times", "Delivery"];

  lectures.sort((a, b) => (a.code > b.code ? 1 : b.code > a.code ? -1 : 0));
  return (
    <table>
      <tr>
        {headers.map((header) => (
          <th key={uuidv4()}>{header}</th>
        ))}
      </tr>
      {lectures.map((session, i) => (
        <tr>
          <td>{session.code.toUpperCase()}</td>
          <td>
            <ul>
              {session.instructors.length > 0
                ? session.instructors.map((instructor) => <li>{instructor}</li>)
                : "TBD"}
            </ul>
          </td>
          <td>{`${session.enrollment || "0"}/${session.size}`}</td>
          <td key={uuidv4()}>
            <ul>
              {session.times.map((lecture) => (
                <li>
                  {`${lecture.day.slice(0, 2).toUpperCase()} ${
                    lecture.start / 3600
                  }-${lecture.end / 3600}`}
                </li>
              ))}
            </ul>
          </td>
          <td>{session.delivery}</td>
        </tr>
      ))}
    </table>
  );
}

export default SectionsTable;
