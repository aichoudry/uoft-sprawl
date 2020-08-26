// @ts-nocheck
import React, { useState } from "react";
import Navbar from "../../Navbar";
import InputForm from "../../InputForm";
import "../../../styles/error.css";
import Error from "../../../images/404.svg";

export default function NotFoundPage() {
  const [campus, setCampus] = useState("UTSG");
  return (
    <div className="error-grid">
      <Navbar course={""} setCampus={setCampus} />
      <InputForm campus={campus} float="-float" />
      <img src={Error} alt="" />
      <div className="error-text">
        <h1>The page you're looking for doesnt exist!</h1>
      </div>
    </div>
  );
}
