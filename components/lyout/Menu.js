import React, { useRef, useEffect } from "react";
import { HiX } from "react-icons/hi";
import NavLink from "../links/NavLink";
import gsap from "gsap";

const Menu = ({ close }) => {
  const ref = useRef();
  const linksRef = useRef();
  const closeButtonRef = useRef();

  useEffect(() => {
    gsap.to(ref.current, {
      height: "100vh",
      duration: 0.3,
      ease: "circ.out",
    });
  }, []);

  const closeMenu = () => {
    gsap.to([linksRef.current, closeButtonRef.current], {
      opacity: 0,
      duration: 0,
    });
    gsap.to(ref.current, { height: 0, duration: 0.3, ease: "circ.out" });
    setTimeout(close, 300);
  };

  return (
    <div className="menu" ref={ref}>
      <div className="site py-8">
        <div
          className=" text-white cursor-pointer"
          onClick={closeMenu}
          ref={closeButtonRef}
        >
          <HiX size={30} />
        </div>
      </div>
      <div className="site md:grid grid-cols-7">
        <div className="col-span-2"></div>
        <div className="py-24 col-span-4" ref={linksRef}>
          <NavLink label="WELCOME" link="/#welcome" close={closeMenu} />
          <NavLink label="MY WORK" link="/#mywork" close={closeMenu} />
          <NavLink label="SKILLS" link="/#skills" close={closeMenu} />
          <NavLink label="CONTACT ME" link="/#contactme" close={closeMenu} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
