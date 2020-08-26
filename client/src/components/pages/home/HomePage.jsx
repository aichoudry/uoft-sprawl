// @ts-nocheck
import React, { useState } from "react";
import "../../../styles/home.css";
import Navbar from "../../Navbar";
import Graduation from "../../../images/graduation.svg";
import InputForm from "../../InputForm";
import Footer from "../../Footer";

function Home() {
  const [campus, setCampus] = useState("UTSG");
  return (
    <div class="home-grid">
      <Navbar setCampus={setCampus} />
      <div className="main-text">
        <h1>
          UOFT<span class="emphasis"> SPRAWL</span>
        </h1>
        <p>
          search for thousands of courses offered at the university of toronto
        </p>
        <InputForm campus={campus} float="" />
      </div>
      <div className="main-img">
        <img src={Graduation} alt="student graduating" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
