import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import Menu from "./Menu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex justify-evenly py-8 border-b items-center sticky z-50">
      <div className="burger">
        <HiMenuAlt4 size={30} onClick={() => setShowMenu(true)} />
      </div>
      <div className="font-semibold tracking-widest text-center text-stone-700 text-lg">
        Paweł Przetacznik
      </div>
      <div className="burger font-semibold">Contact Me</div>
      {showMenu && <Menu close={() => setShowMenu(false)} />}
    </nav>
  );
};

export default Navbar;
