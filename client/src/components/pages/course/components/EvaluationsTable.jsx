import React from "react";

function EvaluationsTable({ lectures }) {
  const totalRating = (lecture) => {
    const { s1, s2, s3, s4, s5, s6 } = lecture;
    const ratings = [s1, s2, s3, s4, s5, s6];
    return (
      (ratings.reduce((sum, currentRating) => sum + currentRating) / 30) * 100
    );
  };
  const headers = [
    "Code",
    "Instructors",
    "s1",
    "s2",
    "s3",
    "s4",
    "s5",
    "s6",
    "Total %",
  ];

  return (
    <table>
      <tr>
        {headers.map((header) => (
          <th>{header}</th>
        ))}
      </tr>
      {lectures.map((lecture) => (
        <tr>
          <td>{lecture.code}</td>
          <td>
            <ul>
              {lecture.instructors.map((inst) => (
                <li>{inst}</li>
              ))}
            </ul>
          </td>
          <td>{lecture.s1}</td>
          <td>{lecture.s2}</td>
          <td>{lecture.s3}</td>
          <td>{lecture.s4}</td>
          <td>{lecture.s5}</td>
          <td>{lecture.s6}</td>
          <td>{Math.round(totalRating(lecture))}</td>
        </tr>
      ))}
    </table>
  );
}

export default EvaluationsTable;
