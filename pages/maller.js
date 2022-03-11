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
    img: "/techLogos/algolia-logo.png",
    desc: "Algolia",
    link: "https://www.algolia.com/",
  },
  {
    img: "/techLogos/js-logo.png",
    desc: "JavaScript",
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
        <ProjectHeader
          title="Maller"
          desc="E-commerce app with AI based search engine"
        />
        <TechDisplay tech={tech} />
        <ProjectLinks
          code="https://github.com/krzygrzywygrzy/maller2"
          site="https://maller2.vercel.app/"
        />
      </div>
      <section className="site flex justify-end">
        <div className="text-stone-600 mr-4 mt-24 text-lg md:w-auto relative">
          <header className="section-title lg:w-128 text-right">
            Find all products you need
          </header>
          <p></p>
        </div>
        <div className="mt-16 md:mr-0 md:-mt-36 w-80">
          <img
            alt=""
            src="/maller/bm-mobile.png"
            className="shadow-xl rounded-md"
          />
        </div>
      </section>
    </div>
  );
};

export default maller;
