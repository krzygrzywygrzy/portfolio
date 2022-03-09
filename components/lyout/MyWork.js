import React from "react";
import FeaturedProject from "../projects/FeaturedProject";
import Project from "../projects/Project";
import ThisPortoflio from "../projects/ThisPortoflio";

const react_projects = [
  {
    image: "/cts/home.png",
    title: "CTS",
    link: "/cts",
    desc: "E-commerce app with CMS system",
    preview: "https://ctsfront-xi.vercel.app/",
  },
  {
    image: "/maller/bm_view.png",
    title: "Maller",
    link: "/maller",
    desc: "E-commerce app",
    github: "https://github.com/krzygrzywygrzy/maller2",
    preview: "https://maller2.vercel.app/",
  },
  {
    image: "/rxcinema/home-page.png",
    title: "RxCinema",
    link: "/rxcinema",
    desc: "Simple movie database",
    github: "https://github.com/krzygrzywygrzy/RxCinema.git",
    preview: "https://nervous-poincare-0fe6c5.netlify.app/",
  },
];

const MyWork = () => {
  return (
    <div className="my-12 md:my-16">
      <header
        className="site text-center noto-serif text-4xl md:text-7xl mb-12"
        id="mywork"
      >
        My work
      </header>
      <div className="site flex flex-col-reverse md:flex-row gap-4 justify-center">
        <div className="flex flex-col gap-8 md:w-96 ">
          {react_projects.map((project) => (
            <Project key={project.title} data={project} />
          ))}
        </div>
        <FeaturedProject />
      </div>
      <ThisPortoflio />
    </div>
  );
};

export default MyWork;
