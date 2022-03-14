import React from "react";
import TechIcon from "../techIcon/TechIcon";

const ThisPortoflio = () => {
  return (
    <div className="w-full flex flex-col items-center text-stone-600">
      <div className="text-lg">This portfolio site is made using:</div>
      <div className="mt-4 flex gap-4">
        <TechIcon
          img="/techLogos/nextjs-logo.png"
          desc="Next.js"
          link="https://nextjs.org/"
        />
        <TechIcon
          img="/techLogos/tailwind-logo.png"
          desc="Tailwindcss"
          link="https://tailwindcss.com/"
        />
        <TechIcon
          img="/techLogos/gsap-logo.png"
          desc="GSAP"
          link="https://greensock.com/"
        />
      </div>
    </div>
  );
};

export default ThisPortoflio;
