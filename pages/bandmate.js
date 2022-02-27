import React from "react";
import Navbar from "../components/lyout/Navbar";
import Head from "next/head";

const bandmate = () => {
  return (
    <>
      <Head>
        <title>Bandmate</title>
      </Head>
      <Navbar />
      <div className="site">
        <header className="">
          <p className="text-stone-500 text-8xl font-bold project-details-title tracking-wide">
            Bandmate
          </p>
          <p className="text-stone-600 text-xl">
            The place where you can find mates to your band!
          </p>
        </header>
      </div>
    </>
  );
};

export default bandmate;
