import React from "react";
import FeaturedProject from "../projects/FeaturedProject";
import Project from "../projects/Project";
import ThisPortoflio from "../projects/ThisPortoflio";

const MyWork = () => {
  return (
    <div id="mywork" className="my-36 md:m-8">
      <FeaturedProject />
      <div className="site mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-y-4">
        <Project
          data={{
            title: "CTS",
            link: "/cts",
            desc: "E-commerce app with CMS system",
            preview: "https://ctsfront-xi.vercel.app/",
          }}
        />
        <Project
          data={{
            title: "Maller",
            link: "/maller",
            desc: "E-commerce app",
            github: "https://github.com/krzygrzywygrzy/maller",
            preview: "https://shopping-1dac0.web.app/",
          }}
        />
        <Project
          data={{
            title: "RxCinema",
            link: "/rxcinema",
            desc: "Simple movie database",
            github: "https://github.com/krzygrzywygrzy/RxCinema.git",
          }}
        />
      </div>
      <ThisPortoflio />
    </div>
  );
};

export default MyWork;
