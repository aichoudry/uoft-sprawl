// @ts-nocheck
import React from "react";
import "../../../../styles/components/CourseRequirements.css";

function CourseRequirements({ prerequisites, exclusions, corequisites }) {
  return (
    <div className="course-requirements">
      {prerequisites ? (
        <div className="pre">
          <p>{prerequisites}</p>{" "}
        </div>
      ) : null}

      {exclusions ? (
        <div className="co">
          <p>{exclusions}</p>
        </div>
      ) : null}

      {corequisites ? (
        <div className="anti">
          <p>{corequisites}</p>{" "}
        </div>
      ) : null}
    </div>
  );
}
export default CourseRequirements;
