import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const WelcomeAbout = ({ about }) => {
  const photoRef = useRef();
  useEffect(() => {
    gsap.to(photoRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.2,
    });
  }, []);

  return (
    <div className="welcome-photo" ref={photoRef}>
      <p className="text-sm mb-2 text-center font-bold">
        Some <span className={`${about.color} text-xl`}> facts</span> about me:
      </p>
      <img
        alt=""
        src={about.photo}
        className="rounded-md object-cover h-4/5 lg:h-5/6 w-full shadow hover:shadow-md"
      />
      <p className="text-center mt-2">{about.desc}</p>
    </div>
  );
};

export default WelcomeAbout;
