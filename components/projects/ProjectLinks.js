import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineEye } from "react-icons/hi";

const ProjectLinks = ({ code, site }) => {
  return (
    <section className="w-full mt-4 text-stone-600 flex justify-center md:justify-start">
      <a
        href={site}
        className="flex items-center cursor-pointer hover:text-stone-700 transition"
        target="_blank"
        rel="noreferrer"
      >
        <HiOutlineEye size={30} />
        <span className="ml-2">app preview...</span>
      </a>
      <a
        href={code}
        className="flex items-center cursor-pointer ml-8 hover:text-stone-700 transition"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={30} />
        <span className="ml-2">
          {code ? "code preview..." : "code is private..."}
        </span>
      </a>
    </section>
  );
};

export default ProjectLinks;
