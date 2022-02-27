import React from "react";
import Image from "next/image";

const TechIcon = ({ img, desc, link }) => {
  return (
    <a className="flex flex-col items-center" target="_blank" href={link}>
      <div className="tech-img-wrapper bg-white">
        <Image
          src={img}
          alt={desc}
          layout="fill"
          className="rounded-full object-cover"
        />
      </div>
      <div className="text-sm text-stone-600">{desc}</div>
    </a>
  );
};

export default TechIcon;
