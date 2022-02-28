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
        <title>BandMate</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />

      <div className="site flex mt-16">
        <div>
          <ProjectHeader
            title="BandMate"
            desc="The place where you can find perfect mates for your band!"
          />
          <TechDisplay tech={tech} />
          <ProjectLinks
            code="https://github.com/krzygrzywygrzy/bandmate_fb"
            site="https://determined-kepler-d34ffb.netlify.app/"
          />
        </div>
      </div>
      <div className="site">
        <div>
          <div className="flex justify-end md:mr-0 ">
            <div className="text-stone-600 mr-4 mt-24 text-lg md:w-auto relative">
              <header className="section-title lg:w-128">
                Pick musicians like you pick your dates!
              </header>
              <br />
              <p className="section-paragraph">
                Bandmate uses{" "}
                <span className="text-stone-700 font-semibold">
                  well known Tinder formula
                </span>{" "}
                to find people you need...
              </p>
              <br />
              <p className="section-paragraph">
                Just customize your profile and start looking for people to jam!
                You can decide using criteria like:{" "}
                <span className="text-stone-700 font-semibold">
                  instruments, prefered genres and even music that person
                  lestens to!
                </span>
              </p>
            </div>
            <div className="mt-16 md:mr-0 md:-mt-24">
              <img
                src={"/bandmate/jessie-profile.png"}
                className="shadow-xl overflow-hidden w-128 md:w-auto"
              />
            </div>
          </div>
        </div>
        <div className="flex mt-8 xl:-mt-72 mb-8 relative">
          <div className="">
            <img
              src={"/bandmate/chat.png"}
              className="shadow-xl w-128 md:w-auto"
            />
          </div>
          <div className="text-stone-600 ml-4 xl:mt-24 text-lg">
            <header className="section-title lg:w-128 mt-16 xl:mt-64">
              Of course you can chat with people you have matched with!
            </header>
            <br />
            <p className="section-paragraph">
              App would be useless if you were not able to connect with other
              musicians... so you can use{" "}
              <span className="text-stone-700 font-semibold">
                built in chat!
              </span>
            </p>
          </div>
        </div>
        <div className="site flex justify-center items-center text-stone-600 mt-24 mb-32 noto-serif">
          <div className="mr-8 text-2xl">Interested?</div>
          <div className="brown-button">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://determined-kepler-d34ffb.netlify.app/"
            >
              Check it out...
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default bandmate;
