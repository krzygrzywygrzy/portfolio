import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiOutlineEye } from "react-icons/hi";

const Project = ({ data }) => {
  const router = useRouter();
  const handleRedirect = () => {
    if (data.link) router.push(data.link);
  };

  return (
    <div className="project" onClick={handleRedirect}>
      <div className="w-full h-72">
        <img
          src={
            "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          height="100%"
          width="100%"
          className="object-cover h-full w-full rounded-md shadow hover:shadow-md"
        />
      </div>
      <div className="text-stone-600 my-2">
        <header className="project-title">{data.title}</header>
        <div>{data.desc}</div>
        <div className="flex items-center hover:text-stone-700 mt-2 gap-2 underline">
          <a target="_blank" rel="noreferrer" href={data.github}>
            <FaGithub size={22} />
          </a>
          <a target="_blank" rel="noreferrer" href={data.preview}>
            <HiOutlineEye size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
