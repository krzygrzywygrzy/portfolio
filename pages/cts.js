import React from "react";
import Navbar from "../components/lyout/Navbar";
import ProjectHeader from "../components/projects/ProjectHeader";
import TechDisplay from "../components/projects/TechDisplay";
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
];

const cts = () => {
  return (
    <div>
      <CustomHead title="CTS" />
      <Navbar />
      <section className="site mt-16">
        <ProjectHeader
          title="CTS"
          desc='E-commerce app for company "Cinema &amp; Theatre Systems Laboratory"'
        />
        <TechDisplay tech={tech} />
        <ProjectLinks site={"https://ctsfront-xi.vercel.app/"} />
      </section>
      <section className="site mt-12 text-stone-600 text-lg">
        <span className="text-xl">Attention!</span> Some parts of the app are
        still in development!
      </section>
      <section className="site grid gap-4 grid-cols-3 my-12">
        <div className="col-span-2">
          <img
            src={"/cts/product.png"}
            alt=""
            className="w-full shadow-xl rounded-md"
          />
        </div>
        <div className="text-stone-700">
          <header className="section-title">
            Company website with shop functionality
          </header>
          <br />
          <div className=" font-light text-justify">
            You can learn about company and buy their audio products.
          </div>
        </div>
      </section>
      <section className="text-stone-700 site">
        <header className="section-title">Other functionalities</header>
        <br />
        <div>
          <header>CMS system</header>
        </div>
      </section>
    </div>
  );
};

export default cts;
