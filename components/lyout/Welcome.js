import React, { useRef, useEffect, useState } from "react";
import { HiArrowSmDown } from "react-icons/hi";
import { useRouter } from "next/router";
import gsap from "gsap";
import WelcomeAbout from "./WelcomeAbout";
import abouts from "../../core/abouts";

const Welcome = () => {
  const router = useRouter();
  const titleRef = useRef();
  const subtitleRef = useRef();

  useEffect(() => {
    gsap.to(titleRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      x: -20,
    });

    gsap.to(subtitleRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.2,
    });
  }, []);

  //abouts
  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const [currentAbout, setCurrentAbout] = useState(0);
  const [displayAbout, setDisplayAbout] = useState(true);
  useEffect(() => {
    const changeAbouts = async () => {
      await timeout(4000);

      setDisplayAbout(false);
      await timeout(1000);
      setCurrentAbout((curr) => {
        if (curr !== abouts.length - 1) return curr + 1;
        else return 0;
      });

      setDisplayAbout(true);
      changeAbouts();
    };
    changeAbouts();
  }, []);

  return (
    <div id="welcome" className="mx-8 md:grid grid-cols-7">
      <div className="hidden lg:block col-span-1"></div>
      <header className="welcome-header">
        <div ref={titleRef} className="opacity-0  -left-5">
          <p className="ml-8">
            Hi! my <br />
            <span className="text-stone-500">name</span> is
          </p>
          <p className={`ml-16 ${abouts[currentAbout].color}`}>
            Paweł<span className="text-black">...</span>
          </p>
        </div>
        <div className="opacity-0 -bottom-5" ref={subtitleRef}>
          <p className="text-base sm:text-lg md:text-2xl xl:text-4xl font-normal">
            And I&apos;m web developer
          </p>

          <div className="text-base lg:text-lg">
            <p className="mt-12 ">I use React</p>
            <p className="border-b inline  border-black">
              to craft minimalistic and maintainable apps
            </p>
          </div>
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
      <div className="md:h-144 col-span-3">
        {displayAbout && <WelcomeAbout about={abouts[currentAbout]} />}
      </div>
    </div>
  );
};

export default Welcome;
