import React from "react";
import Part from "./Part";

const Content = ({ parts }) => (
  <div>
    {parts.map(item => (
      <Part part={item} key={item.id} />
    ))}
  </div>
);

export default Content;
