import React from "react";
import FeaturedProject from "../projects/FeaturedProject";
import Project from "../projects/Project";
import ThisPortoflio from "../projects/ThisPortoflio";

const MyWork = () => {
  return (
    <div id="mywork" className="my-36 m-8">
      <FeaturedProject />
      <div className="site mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Project data={{ title: "CTS", link: "/cts", desc: "damn sonh" }} />
        <Project data={{ title: "CTS" }} />
      </div>
      <ThisPortoflio />
    </div>
  );
};

export default MyWork;
