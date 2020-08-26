// @ts-nocheck
import React, { useState, useEffect } from "react";
import ErrorPage from "../error/404";
import axios from "axios";
import Navbar from "../../Navbar";
import CourseHeader from "./components/CourseHeader";
import Footer from "../../Footer";
import "../../../styles/course.css";
import School from "../../../images/school.svg";
import CourseRequirements from "./components/CourseRequirements";
import TableContainer from "./components/TableContainer";
import InputForm from "../../InputForm";

function CoursePage({ match }) {
  const [data, setData] = useState(undefined);
  const [campus, setCampus] = useState("UTSG");
  useEffect(() => {
    async function getData() {
      let res = await axios.get(
        `/api/${match.params.campus}/course/${match.params.code}`
      );
      setData(res.data);
    }
    getData();
  }, [match.params.code]);
  if (!data) return null;
  else if (data.message) return <ErrorPage setCampus={setCampus} />;
  else {
    return (
      <div className="course-grid">
        <InputForm campus={campus} float="-float" />
        <Navbar setCampus={setCampus} />
        <CourseHeader
          code={data.code}
          name={data.name}
          description={data.description}
        />
        <div className="course-image">
          <img src={School} alt="student doing work" />
        </div>
        <CourseRequirements
          prerequisites={data.prerequisites}
          corequisites={data.corequisites}
          exclusions={data.exclusions}
        />
        <TableContainer sections={data.meeting_sections} type="Sections" />
        <TableContainer sections={data.evaluations} type="Evaluations" />
        <Footer />
      </div>
    );
  }
}

export default CoursePage;

//
//
