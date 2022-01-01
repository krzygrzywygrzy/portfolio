import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiOutlineDesktop } from "react-icons/ai";

const MyWork = () => {
  return (
    <div id="mywork" className="my-36 m-8">
      <div className="flex justify-center">
        <div className="w-96"></div>
        <div className="font-medium w-96 tracking-widest">
          <span className="text-2xl">BandMate</span>
          <p>
            App that allows musicians to find bandmates{" "}
            <span className="details-button">details</span>
          </p>
          <a
            className="project-link"
            href="https://github.com/krzygrzywygrzy/bandmate"
            target="_blank"
          >
            <FaGithub size={24} /> <span className="ml-2">code</span>
          </a>
          <a
            className="project-link"
            href="https://awesome-mccarthy-4f7804.netlify.app/"
            target="_blank"
          >
            <AiOutlineDesktop size={24} /> <span className="ml-2">preview</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
