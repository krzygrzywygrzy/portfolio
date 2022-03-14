import React, { useRef, useEffect } from "react";
import { HiArrowSmDown } from "react-icons/hi";
import { useRouter } from "next/router";
import gsap from "gsap";

const Welcome = () => {
  const router = useRouter();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const photoRef = useRef();

  useEffect(() => {
    gsap.to(titleRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      x: -20,
    });

    gsap.to([subtitleRef.current, photoRef.current], {
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.2,
    });
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
          <p className="ml-16 text-red-600">
            Paweł<span className="text-black">...</span>
          </p>
        </div>
        <div className="opacity-0 -bottom-5" ref={subtitleRef}>
          <p className="text-base sm:text-lg md:text-2xl xl:text-4xl font-normal">
            And I&apos;m web and mobile developer
          </p>

          <div className="text-base lg:text-lg">
            <p className="mt-12 ">
              I use React <span>(and sometimes Flutter)</span>
            </p>
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

      <div className="welcome-photo" ref={photoRef}>
        <p className="text-sm mb-2 text-center font-bold">
          Some <span className="text-red-600 text-xl">unrelated facts</span>{" "}
          about me:
        </p>
        <img
          alt=""
          src="https://i.scdn.co/image/ab6761610000e5eb07603145b500ea5408074053"
          className="rounded-md object-cover h-4/5 lg:h-5/6 w-full shadow hover:shadow-md"
        />
        <p className="text-center mt-2">
          Favourite band: <i>Bring Me The Horizon</i>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
