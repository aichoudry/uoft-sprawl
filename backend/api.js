const { Courses, Evals, Textbooks } = require("nikel");

async function getCourse(name, campus) {
  let course = await new Courses()
    .where({
      id: { $in: name },
      campus: { $eq: campus },
    })
    .get();

  if (course.length === 0) {
    return null;
  }

  return course;
}

async function getTextbooks(name, campus) {
  let textbook = await new Textbooks()
    .where({
      //@ts-ignore
      courses: { $sr: name },
    })
    .get();

  return textbook;
}

async function getEvaluations(name, campus) {
  let evaluations = await new Evals()
    .where({ id: { $in: name }, campus: { $in: campus } })
    .get();
  return evaluations;
}

async function formatCourse(c) {
  let course = await c;
  let {
    code,
    name,
    description,
    department,
    prerequisites,
    corequisites,
    exclusions,
  } = course[0];

  let formattedCourse = {
    code,
    name,
    description,
    department,
    prerequisites,
    corequisites,
    exclusions,
    meeting_sections: [],
  };
  for (let term of course) {
    formattedCourse.meeting_sections.push({
      term: term.term,
      lectures: term.meeting_sections,
    });
  }

  return formattedCourse;
}

async function formatEvaluations(e) {
  let evals = await e;
  for (let term of evals) {
    for (let lec of term.lectures) {
      lec.instructors = [`${lec.firstname} ${lec.lastname}`];
      lec.code = lec.lecture_code;
      delete lec.lecture_code;
      delete lec.firstname;
      delete lec.lastname;
    }
  }
  return evals;
}

async function completeCourse(name, campus) {
  let course = await getCourse(name, campus);
  if (!course) {
    return { message: `${name} does not exist!` };
  }
  let formattedCourse = await formatCourse(course);
  let textbooks = await getTextbooks(name, campus);
  let evaluations = await getEvaluations(name, campus);
  formattedCourse.evaluations = await formatEvaluations(evaluations[0].terms);

  return formattedCourse;
}

module.exports = { completeCourse };
