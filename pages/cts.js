import React from "react";
import Navbar from "../components/lyout/Navbar";
import ProjectHeader from "../components/projects/ProjectHeader";
import TechDisplay from "../components/projects/TechDisplay";
import ProjectLinks from "../components/projects/ProjectLinks";
import CustomHead from "../components/lyout/CustomHead";
import {
  HiOutlineAdjustments,
  HiFingerPrint,
  HiOutlineMailOpen,
} from "react-icons/hi";
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
        <ProjectHeader title="CTS" />
        <div className="text-xl text-stone-600 md:w-144 text-justify">
          E-commerce app for company "Cinema &amp; Theatre Systems Laboratory"
        </div>
        <TechDisplay tech={tech} />
        <ProjectLinks site={"https://ctsfront-xi.vercel.app/"} />
      </section>
      <section className="site flex flex-col-reverse md:grid grid-cols-3 gap-4 my-12">
        <div className="col-span-2">
          <img
            src={"/cts/product.png"}
            alt=""
            className="w-full shadow-xl rounded-md"
          />
        </div>
        <div className="text-stone-700 text-xl">
          <header className="section-title">
            Company website with shop functionality
          </header>
          <br />
          <div className="section-paragraph">
            You can learn about company and buy their audio products.
          </div>
        </div>
      </section>
      <section className="text-stone-700 site mb-16 text-xl">
        <header className="section-title">Other functionalities</header>
        <br />
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <header className="functionality-header">
              <span className="text-2xl">CMS system</span>{" "}
              <div className="flex ml-2">
                <HiOutlineAdjustments size={28} />
              </div>
            </header>
            <p>
              People with &quot;Admin&quot; role can add, edit, remove products,
              categories and discounts...
            </p>
            <br />
            <p>
              They also are able to see orders and change their state, estimate
              time of delivery etc...
            </p>
          </div>
          <div>
            <header className="functionality-header">
              <span className="text-2xl">JWT token</span>
              <div className="flex ml-2">
                <HiFingerPrint size={28} />
              </div>
            </header>
            <p>App uses JWT token to authenticate and authorize users.</p>
          </div>
          <div>
            <header className="functionality-header">
              <span className="text-2xl">E-mails</span>
              <div className="flex ml-2">
                <HiOutlineMailOpen size={28} />
              </div>
            </header>
            <p>
              App has fully functioning e-mail system to keep users notificated
              about their orders.
            </p>
          </div>
        </div>
      </section>
      <section className="site text-stone-700 mb-16">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <span>Backend of application made using:</span>
          <div className="flex gap-4">
            <TechIcon desc={"C#"} img="/techLogos/csharp-logo.png" />
            <TechIcon desc={"ASP.NET Core"} img="/techLogos/dotnet-logo.jpg" />
            <TechIcon desc={"MariaDB"} img="/techLogos/mariadb-logo.png" />
          </div>
          <span>
            by{" "}
            <a
              target="_blank"
              href={"https://github.com/michalwitek1232"}
              rel="noreferrer"
              className="italic text-lg"
            >
              Michał Witek
            </a>
          </span>
        </div>
      </section>
    </div>
  );
};

export default cts;
