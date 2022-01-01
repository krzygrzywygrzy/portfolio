import React from "react";
import Link from "next/link";

const NavLink = ({ label, link, close }) => {
  return (
    <div className="navlink">
      <Link href={link}>
        <a onClick={close}>{label}</a>
      </Link>
    </div>
  );
};

export default NavLink;
