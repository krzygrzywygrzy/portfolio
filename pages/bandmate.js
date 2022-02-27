import React from "react";
import Navbar from "../components/lyout/Navbar";
import Head from "next/head";
import TechDisplay from "../components/projects/TechDisplay";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectLinks from "../components/projects/ProjectLinks";

const tech = [
  {
    img: "/techLogos/react-logo.png",
    desc: "React",
    link: "https://reactjs.org/",
  },
  {
    img: "/techLogos/redux-logo.png",
    desc: "Redux",
    link: "https://redux.js.org/",
  },
  {
    img: "/techLogos/sass-logo.jpg",
    desc: "Sass",
    link: "https://sass-lang.com/",
  },
  {
    img: "/techLogos/firebase-logo.png",
    desc: "Firebase",
    link: "https://firebase.google.com/",
  },
  {
    img: "/techLogos/typescript-logo.png",
    desc: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
];

const bandmate = () => {
  return (
    <>
      <Head>
        <title>Bandmate</title>
      </Head>
      <Navbar />
      <div className="site">
        <ProjectHeader
          title="Bandmate"
          desc="The place where you can find mates to your band!"
        />
        <TechDisplay tech={tech} />
        <ProjectLinks
          code="https://github.com/krzygrzywygrzy/bandmate_fb"
          site="https://determined-kepler-d34ffb.netlify.app/"
        />
      </div>
    </>
  );
};

export default bandmate;
