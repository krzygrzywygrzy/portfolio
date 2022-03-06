import React from "react";
import FeaturedProject from "../projects/FeaturedProject";
import Project from "../projects/Project";
import ThisPortoflio from "../projects/ThisPortoflio";

const MyWork = () => {
  return (
    <div id="mywork" className="my-12 md:my-24">
      <FeaturedProject />
      <div className="site mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-y-4">
        <Project
          data={{
            image: "/cts/home.png",
            title: "CTS",
            link: "/cts",
            desc: "E-commerce app with CMS system",
            preview: "https://ctsfront-xi.vercel.app/",
          }}
        />
        <Project
          data={{
            image: "/maller/bm_view.png",
            title: "Maller",
            link: "/maller",
            desc: "E-commerce app",
            github: "https://github.com/krzygrzywygrzy/maller2",
            preview: "https://maller2.vercel.app/",
          }}
        />
        <Project
          data={{
            image: "/rxcinema/home-page.png",
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
