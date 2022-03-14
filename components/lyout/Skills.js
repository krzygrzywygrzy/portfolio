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
        <div>I spend most time with:</div>
        <div className="flex gap-4">
          <TechIcon img={"/techLogos/react-logo.png"} desc={"React"} />
          <TechIcon img={"/techLogos/flutter-logo.png"} desc={"Flutter"} />
          <TechIcon
            img={"/techLogos/typescript-logo.png"}
            desc={"TypeScript"}
          />
          <TechIcon img={"/techLogos/git-logo.png"} desc={"Git"} />
        </div>
      </section>
      <section className="skills opacity-0" ref={otherSkillsRef}>
        <div>But I also have some knowlage about:</div>
        <div className="flex gap-4">
          <TechIcon img={"/techLogos/mysql-logo.png"} desc={"MySQL"} />
          <TechIcon img={"/techLogos/mongo-logo.png"} desc={"MongoDB"} />
        </div>
      </section>
    </div>
  );
};

export default Skills;
