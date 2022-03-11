import React from "react";

const ContactMe = () => {
  return (
    <div id="contactme" className="site mb-16 text-lg">
      <header className="text-center noto-serif text-4xl md:text-5xl">
        Contact Me
      </header>
      <br />
      <div className="text-center">
        You can reach me by sending email to this address:{" "}
        <a
          href="mailto:pawelprzetacznik07@gmail.com"
          className="italic underline"
          rel="noreferrer"
        >
          pawelprzetacznik07@gmail.com
        </a>
      </div>
      <div className="text-center">
        You can also check out my github profle:{" "}
        <a
          href="https://github.com/krzygrzywygrzy"
          rel="noreferrer"
          target="_blank"
          className="italic underline"
        >
          /krzygrzywygrzy
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
