import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineEye } from "react-icons/hi";
import Link from "next/link";

const FeaturedProject = () => {
  return (
    <div className="flex justify-center ">
      <div className="w-128"></div>
      <div className="font-medium w-96 tracking-widest">
        <p className="text-stone-500">Featured Project</p>
        <span className="text-4xl noto-serif">
          <Link href="/bandmate">BandMate</Link>
        </span>
        <p>
          Tinder-like app for musicians{" "}
          <span className="details-button">
            <Link href="/bandmate">details...</Link>
          </span>
        </p>
        <div className="flex gap-4">
          <a
            className="project-link"
            href="https://github.com/krzygrzywygrzy/bandmate_fb"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={24} /> <span className="ml-2">code</span>
          </a>
          <a
            className="project-link"
            href="https://determined-kepler-d34ffb.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <HiOutlineEye size={24} /> <span className="ml-2">preview</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
