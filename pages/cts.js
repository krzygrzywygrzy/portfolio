import React from "react";
import Navbar from "../components/lyout/Navbar";
import Head from "next/head";
import ProjectHeader from "../components/projects/ProjectHeader";
import TechDisplay from "../components/projects/TechDisplay";
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
    img: "/techLogos/rxjs-logo.png",
    desc: "RxJS",
    link: "https://rxjs.dev/",
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
  //   {
  //     img: "/techLogos/js-logo.png",
  //     desc: "JavaScript",
  //   },
];

const cts = () => {
  return (
    <div>
      <Head>
        <title>CTS</title>
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
          title="CTS"
          desc='E-commerce app for company "Cinema &amp; Theatre Systems Laboratory"'
        />
        <TechDisplay tech={tech} />
        <ProjectLinks />
      </div>
    </div>
  );
};

export default cts;
