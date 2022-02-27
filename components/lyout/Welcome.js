import React from "react";
import { HiArrowSmDown } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/router";

const Welcome = () => {
  const router = useRouter();

  return (
    <div id="welcome" className="mx-8 md:grid grid-cols-7">
      <div className="hidden lg:block col-span-1"></div>
      <header className="font-bold text-center md:text-left text-7xl xl:text-9xl mt-12 md:mt-56 lg:mt-32 col-span-4 lg:col-span-3 tracking-wide mr-2">
        <p className="ml-8">
          Hi! my <br />
          <span className="text-stone-500">name</span> is
        </p>
        <p className="ml-16 text-red-600">
          Paweł<span className="text-black">...</span>
        </p>
        <p className="text-base sm:text-lg md:text-2xl xl:text-4xl font-normal">
          And I&apos;m web and mobile developer
        </p>

        <div className="text-base lg:text-lg">
          <p className="mt-12 ">
            I use React <span>(and sometimes Flutter)</span>
          </p>
          <p className="border-b inline  border-black">
            to craft minimalistic and maintable apps
          </p>
        </div>
        <div className="text-xl mt-12 mb-6 text-stone-500">
          Check some of my recent projects
        </div>
        <div
          className="burger hidden md:block -mt-6 absolute slide-bottom"
          onClick={() => router.push("/#mywork")}
        >
          <HiArrowSmDown size={30} />
        </div>
      </header>

      <div className="hidden md:block col-span-3 h-4/5 ml-8 mt-16 mb-52 lg:mb-24 rounded p-1 border-dashe welcome-photo">
        <p className="text-sm mb-2 text-center font-bold">
          Some <span className="text-red-600 text-xl">unrelated facts</span>{" "}
          about me:
        </p>
        <img
          alt="krzygrzywygrzy"
          src="https://i.scdn.co/image/ab6761610000e5eb07603145b500ea5408074053"
          className="rounded object-cover h-4/5 lg:h-5/6 w-full shadow-xl"
        />
        <p className="text-center mt-2">
          Favourite band: <i>Bring Me The Horizon</i>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
