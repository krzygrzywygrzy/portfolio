import React from "react";
import Navbar from "../components/lyout/Navbar";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-56 flex items-center flex-col">
        <div className="text-9xl text-stone-700">404</div>
        <div className="text-4xl font-light">page not found...</div>
      </div>
    </div>
  );
};

export default NotFound;
