import React from "react";
import TechIcon from "../techIcon/TechIcon";

const TechDisplay = ({ tech }) => {
  return (
    <section className="w-full md:w-auto mt-4 pb-4 inline-flex gap-4 justify-center md:justify-items-start border-b border-stone-600">
      {tech.map((t) => (
        <TechIcon key={t.desc} img={t.img} desc={t.desc} link={t.link} />
      ))}
    </section>
  );
};

export default TechDisplay;
