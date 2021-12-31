import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="flex justify-evenly py-8 border-b items-center sticky z-50">
      <div className="burger">
        <HiMenuAlt4 size={30} />
      </div>
      <div className="font-semibold tracking-widest text-center text-stone-700 text-lg">
        Paweł Przetacznik
      </div>
      <div className="burger">Contact Me</div>
    </nav>
  );
};

export default Navbar;
