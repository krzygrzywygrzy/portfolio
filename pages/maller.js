import React from "react";
import Head from "next/head";
import ProjectHeader from "../components/projects/ProjectHeader";
import TechDisplay from "../components/projects/TechDisplay";
import ProjectLinks from "../components/projects/ProjectLinks";
import Navbar from "../components/lyout/Navbar";

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
    img: "/techLogos/firebase-logo.png",
    desc: "Firebase",
    link: "https://firebase.google.com/",
  },
  {
    img: "/techLogos/typescript-logo.png",
    desc: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  {
    img: "/techLogos/algolia-logo.png",
    desc: "Algolia",
    link: "https://www.algolia.com/",
  },
];

const maller = () => {
  return (
    <div>
      <Head>
        <title>Maller</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <div className="site mt-16">
        <ProjectHeader title="Maller" desc="E-commerce app" />
        <TechDisplay tech={tech} />
        <ProjectLinks />
      </div>
    </div>
  );
};

export default maller;
