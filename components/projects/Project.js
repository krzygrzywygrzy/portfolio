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
    <div className="project">
      <div onClick={handleRedirect}>
        <div className="w-full h-72 relative rounded-md shadow hover:shadow-md">
          <Image
            src={data.image}
            layout="fill"
            className="rounded-md shadow hover:shadow-md object-cover"
          />
        </div>
        <div className="my-2">
          <header className="project-title">{data.title}</header>
          <div>
            {data.desc} <span className="details-button">details...</span>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-2 gap-2">
        {data.github && (
          <a
            target="_blank"
            rel="noreferrer"
            href={data.github}
            className="hover:text-stone-700 transition"
          >
            <FaGithub size={22} />
          </a>
        )}
        {data.preview && (
          <a
            target="_blank"
            rel="noreferrer"
            href={data.preview}
            className="hover:text-stone-700 transition"
          >
            <HiOutlineEye size={28} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
