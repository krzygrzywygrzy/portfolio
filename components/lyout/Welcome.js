import React from "react";
import { HiArrowSmDown } from "react-icons/hi";

const Welcome = () => {
  return (
    <div id="welcome" className="mx-8 grid grid-cols-7">
      <div className="hidden lg:block col-span-1"></div>
      <header className="font-bold text-4xl sm:text-4xl md:text-7xl xl:text-9xl mt-56 lg:mt-32 col-span-4 lg:col-span-3 tracking-wide mr-2">
        <p className="ml-8">
          Hi! my <span className="text-stone-500">name</span> is
        </p>
        <p className="ml-16 text-red-600">
          Paweł<span className="text-black">...</span>
        </p>
        <p className="text-base sm:text-lg md:text-2xl xl:text-4xl font-normal">
          And I'm web and mobile developer
        </p>

        <div className="text-base lg:text-lg">
          <p className="mt-12 ">I use React and Flutter</p>
          <p className="border-b inline  border-black">
            to craft minimalistic and maintable apps
          </p>
        </div>
        <div className="text-xl mt-12 mb-6 text-stone-500">
          Check some of my recent projects
        </div>
        <div className="burger absolute slide-bottom">
          <HiArrowSmDown size={30} />
        </div>
      </header>

      <div className="col-span-3 mt-16 mb-52 lg:mb-12 rounded p-1 border-dashe welcome-photo">
        <img
          alt="krzygrzywygrzy"
          src="https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_960_720.jpg"
          className="rounded object-cover h-full"
        />
      </div>
    </div>
  );
};

export default Welcome;
