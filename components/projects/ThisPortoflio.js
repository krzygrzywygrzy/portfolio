import React from "react";
import TechIcon from "../techIcon/TechIcon";

const ThisPortoflio = () => {
  return (
    <div className="w-full flex flex-col items-center mt-12 text-stone-600">
      <div className="text-lg">This portfolio site is made using:</div>
      <div className="mt-4 flex">
        <TechIcon
          img="/techLogos/nextjs-logo.png"
          desc="Next.js"
          link="https://nextjs.org/"
        />
        <div className="ml-4">
          <TechIcon
            img="/techLogos/tailwind-logo.png"
            desc="Tailwindcss"
            link="https://tailwindcss.com/"
          />
        </div>
      </div>
    </div>
  );
};

export default ThisPortoflio;
