import React from "react";
const Total = props => {
  const part0 = props.parts.parts[0].exercises;
  const part1 = props.parts.parts[1].exercises;
  const part2 = props.parts.parts[2].exercises;

  return (
    <p>
      Number of exercises
      {part0 + part1 + part2}
    </p>
  );
};

export default Total;
