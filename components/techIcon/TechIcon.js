import React from "react";
import Image from "next/image";

const TechIcon = ({ img, desc, link }) => {
  return (
    <a className="flex flex-col items-center" target="_blank" href={link}>
      <div className="tech-img-wrapper">
        <Image src={img} alt={desc} layout="fill" className="rounded-full" />
      </div>
      <div className="mt-2 text-sm text-stone-500">{desc}</div>
    </a>
  );
};

export default TechIcon;
