import React from "react";
import Navbar from "../components/lyout/Navbar";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-56 flex items-center flex-col text-stone-500">
        <div className="text-9xl">404</div>
        <div className="text-4xl font-light">page not found...</div>
      </div>
    </div>
  );
};

export default NotFound;
