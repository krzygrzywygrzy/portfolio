import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlinePresentationChartLine } from "react-icons/hi";

const ProjectLinks = ({ code, site }) => {
  return (
    <section className="mt-4 text-stone-600 flex">
      <a
        href={site}
        className="flex items-center cursor-pointer"
        target="_blank"
        rel="noreferrer"
      >
        <HiOutlinePresentationChartLine size={30} />
        <span className="ml-1">app preview...</span>
      </a>
      <a
        href={code}
        className="flex items-center cursor-pointer ml-8"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={30} />
        <span className="ml-1">code preview...</span>
      </a>
    </section>
  );
};

export default ProjectLinks;
