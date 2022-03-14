import React from "react";
import Navbar from "../components/lyout/Navbar";
import TechDisplay from "../components/projects/TechDisplay";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectLinks from "../components/projects/ProjectLinks";
import CustomHead from "../components/lyout/CustomHead";

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
      <CustomHead title="Bandmate" />
      <Navbar />

      <div className="site mt-16">
        <ProjectHeader
          title="BandMate"
          desc="The place where you can find perfect mates for your band!"
        />
        <TechDisplay tech={tech} />
        <ProjectLinks
          code="https://github.com/krzygrzywygrzy/bandmate_fb"
          site="https://goofy-fermat-44f321.netlify.app/"
        />
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
                  listens to!
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
                built-in chat!
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default bandmate;
