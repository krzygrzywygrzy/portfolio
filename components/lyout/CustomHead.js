import React from "react";
import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@500&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default CustomHead;
