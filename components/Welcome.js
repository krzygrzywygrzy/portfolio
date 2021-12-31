import React from "react";

const Welcome = () => {
  return (
    <div className="mx-8 grid grid-cols-7">
      <div className="col-span-1"></div>
      <header className="font-bold text-8xl mt-32 col-span-5 tracking-wide">
        <p className="ml-8">
          Hi! my <span className="text-stone-500">name</span> is
        </p>
        <p className="ml-16 text-orange-400">
          Paweł<span className="text-black">...</span>
        </p>
        <p className="text-4xl font-normal">And I'm web and mobile developer</p>

        <div>
          <p className="mt-12 text-base">I use React and Flutter</p>
          <p className="text-base">to craft minimalisic</p>
        </div>
      </header>

      <div className="col-span-3"></div>
    </div>
  );
};

export default Welcome;
