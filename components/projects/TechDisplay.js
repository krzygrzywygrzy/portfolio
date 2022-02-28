import React from "react";
import TechIcon from "../techIcon/TechIcon";

const TechDisplay = ({ tech }) => {
  return (
    <section className="w-full md:w-auto mt-4 pb-4 inline-flex justify-center md:justify-items-start border-b border-stone-600">
      {tech.map((t) => (
        <div key={t.desc} className="mr-4">
          <TechIcon img={t.img} desc={t.desc} link={t.link} />
        </div>
      ))}
    </section>
  );
};

export default TechDisplay;
