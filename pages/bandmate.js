import React from "react";
import Navbar from "../components/lyout/Navbar";
import Head from "next/head";
import TechIcon from "../components/techIcon/TechIcon";

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
];

const bandmate = () => {
  return (
    <>
      <Head>
        <title>Bandmate</title>
      </Head>
      <Navbar />
      <div className="site">
        <header className="">
          <p className="text-stone-500 text-8xl font-bold project-details-title tracking-wide">
            Bandmate
          </p>
          <p className="text-stone-600 text-xl">
            The place where you can find mates to your band!
          </p>
        </header>
        <section className="mt-4 flex jutify-start">
          {tech.map((t) => (
            <div key={t.desc} className="mr-4">
              <TechIcon img={t.img} desc={t.desc} link={t.link} />
            </div>
          ))}
        </section>
        <section className="mt-4 text-stone-600">link</section>
      </div>
    </>
  );
};

export default bandmate;
