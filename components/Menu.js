import React from "react";
import { HiX } from "react-icons/hi";
import Link from "next/link";

const Menu = ({ close }) => {
  return (
    <div className="menu">
      <div className="grid grid-cols-7 py-8">
        <div className="col-span-1"></div>
        <div className="col-span-3 text-white cursor-pointer" onClick={close}>
          <HiX size={30} />
        </div>
      </div>
      <div className="grid grid-cols-7">
        <div className="col-span-2"></div>
        <div className="py-32">
          <Link href="/#welcome" onClick={close}>
            Welcome
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
