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
    img: "/techLogos/rxobs-logo.png",
    desc: "Redux Obs.",
    link: "https://redux-observable.js.org/",
  },
  {
    img: "/techLogos/tailwind-logo.png",
    desc: "Tailwindcss",
    link: "https://tailwindcss.com/",
  },
  {
    img: "/techLogos/typescript-logo.png",
    desc: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
];

const rxcinema = () => {
  return (
    <div>
      <Head>
        <title>RxCinema</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <div className="site mt-16">
        <ProjectHeader
          title="RxCinema"
          desc="Catalog of trening films and TV shows"
        />
        <TechDisplay tech={tech} />
        <ProjectLinks />
      </div>
    </div>
  );
};

export default rxcinema;
