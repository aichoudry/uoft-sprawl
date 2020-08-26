// @ts-nocheck
import React from "react";
import "../../../../styles/components/CourseHeader.css";

function CourseHeader({ code, name, description }) {
  return (
    <div className="course-body">
      <div className="header-main">
        <h1>{code}</h1>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CourseHeader;
