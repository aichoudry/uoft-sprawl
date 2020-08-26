const express = require("express");
const { completeCourse } = require("./api");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "uoft-flow home" });
});

app.get("/course", (req, res) => {
  res.json({ message: "search for a course" });
});

app.get("/api/UTM/course/:courseCode", async (req, res) => {
  let { courseCode } = req.params;
  let data = await completeCourse(courseCode, "Mississauga");
  res.json(data);
});

app.get("/api/UTSC/course/:courseCode", async (req, res) => {
  let { courseCode } = req.params;
  let data = await completeCourse(courseCode, "Scarborough");
  res.json(data);
});

app.get("/api/UTSG/course/:courseCode", async (req, res) => {
  let { courseCode } = req.params;
  let data = await completeCourse(courseCode, "St. George");
  res.json(data);
});

app.listen(process.env.PORT || 5000);
