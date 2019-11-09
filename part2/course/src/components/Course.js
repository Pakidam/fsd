import React from "react";
import Content from "./Content";

const Course = ({ course }) => {
  return (
    <>
      <Content parts={course.parts} />
    </>
  );
};

export default Course;
