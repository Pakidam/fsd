import React from "react";
import Part from "./Part";

const Content = props => {
  return (
    <>
      <Part
        part={props.parts.parts[0].name}
        exercises={props.parts.parts[0].exercises}
      />
      <Part
        part={props.parts.parts[1].name}
        exercises={props.parts.parts[1].exercises}
      />
      <Part
        part={props.parts.parts[2].name}
        exercises={props.parts.parts[2].exercises}
      />
    </>
  );
};

export default Content;
