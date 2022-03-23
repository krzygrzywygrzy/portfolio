import React, { useRef, useEffect } from "react";
import TechIcon from "../techIcon/TechIcon";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Skills = () => {
  gsap.registerPlugin(ScrollTrigger);
  const titleRef = useRef();
  const mainSkillsRef = useRef();
  const otherSkillsRef = useRef();
  useEffect(() => {
    gsap.to([mainSkillsRef.current, titleRef.current, otherSkillsRef.current], {
      opacity: 1,
      duration: 0.8,
      y: -40,
      ease: "power3.out",
      scrollTrigger: {
        trigger: mainSkillsRef.current,
      },
    });
  }, []);

  return (
    <div id="skills" className="site mt-16 mb-32 text-lg">
      <header
        className="text-center noto-serif text-4xl md:text-5xl"
        ref={titleRef}
      >
        Skills
      </header>
      <section className="skills opacity-0" ref={mainSkillsRef}>
        <div>I spend most of my time with:</div>
        <div className="flex gap-4">
          <TechIcon img={"/techLogos/react-logo.png"} desc={"React"} />
          <TechIcon img={"/techLogos/redux-logo.png"} desc={"Redux"} />
          <TechIcon
            img={"/techLogos/typescript-logo.png"}
            desc={"TypeScript"}
          />
        </div>
      </section>
      <section className="text-center flex justify-center">
        <p className="lg:w-1/2 ">
          I started to use <b>React</b> somewhere around summer 2020 and I am
          still learning new things about it. When I found out about hooks I
          instantly fell in love in them and started to use them. Meanwhile I
          also leanred how to use <b>Redux</b>, at first pure then with{" "}
          <b>Thunk</b>. Another step was <b>TypeScript</b> that allowed me to
          have more controll over code (and more hints is also great
          advantage!!). I also learned <b>Redux-Observable</b> that allowed me
          to use RxJS to manipulate Redux's store state.
        </p>
      </section>
    </div>
  );
};

export default Skills;
