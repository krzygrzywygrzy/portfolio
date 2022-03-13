import React, { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

const NavLink = ({ label, link, close }) => {
  const ref = useRef();
  useEffect(() => {
    gsap.to(ref.current, {
      x: 10,
      opacity: 1,
      duration: 0.3,
      ease: "power3.out",
      delay: 0.15,
    });
  }, []);

  return (
    <div className="navlink" ref={ref}>
      <Link href={link}>
        <a onClick={close}>{label}</a>
      </Link>
    </div>
  );
};

export default NavLink;
