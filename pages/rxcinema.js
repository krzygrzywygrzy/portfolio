import React from "react";
import Head from "next/head";
import ProjectHeader from "../components/projects/ProjectHeader";
import TechDisplay from "../components/projects/TechDisplay";
import ProjectLinks from "../components/projects/ProjectLinks";
import Navbar from "../components/lyout/Navbar";
import { HiCode } from "react-icons/hi";

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
        <ProjectLinks
          site="https://unruffled-nobel-383aa1.netlify.app/"
          code="https://github.com/krzygrzywygrzy/RxCinema.git"
        />
      </div>
      <section className="h-144 site my-8 flex-col-reverse md:flex-row flex items-center gap-4 text-stone-600 text-xl">
        <img
          alt=""
          src="/rxcinema/rx-home-2.png"
          className="h-full object-contain shadow-xl rounded-md"
        />
        <div>
          <header className="section-title">Check out trending films</header>
          <br />
          <p className="section-paragraph">
            Everything thanks to{" "}
            <a
              rel="noreferrer"
              target="_blank"
              className="italic underline"
              href="https://www.themoviedb.org/"
            >
              The Movie DB
            </a>{" "}
            and it&apos;s film API, that provides information and photos
          </p>
        </div>
      </section>
      <section className="site text-stone-700 site my-16 text-xl">
        <header className="section-title">Other functionalities</header>
        <br />
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <header className="functionality-header">
              <span className="text-2xl">Redux Observable</span>
              <div className="flex ml-2">
                <HiCode size={28} />
              </div>
            </header>
            <p>
              App uses Redux Observable middleware instead of Thunk. That allows
              to use full power of RxJS to manipulate state.
            </p>
          </div>
          <div className="col-span-2 ">
            <img
              src="/rxcinema/rx-film.png"
              className="h-full object-cover shadow-xl rounded-md"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default rxcinema;
