import React from "react";
import TechIcon from "../techIcon/TechIcon";

const ThisPortoflio = () => {
  return (
    <div className="w-full flex flex-col items-center mt-32">
      <div className="text-lg">This portfolio site is made using:</div>
      <div className="mt-4 flex">
        <TechIcon
          img="/techLogos/nextjs-logo.png"
          desc="next.js"
          link="https://nextjs.org/"
        />
        <div className="ml-4">
          <TechIcon
            img="/techlogos/tailwind-logo.png"
            desc="tailwindcss"
            link="https://tailwindcss.com/"
          />
        </div>
      </div>
    </div>
  );
};

export default ThisPortoflio;
