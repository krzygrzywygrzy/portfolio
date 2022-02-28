import React from "react";

const ProjectHeader = ({ title, desc }) => {
  return (
    <header>
      <p className="text-stone-500 text-7xl md:text-8xl font-bold project-details-title tracking-wide">
        {title}
      </p>
      <p className="text-stone-600 text-xl">{desc}</p>
    </header>
  );
};

export default ProjectHeader;
