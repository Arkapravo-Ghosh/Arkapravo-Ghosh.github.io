import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";

const typestrings = [
  'DevSecOps Engineer',
  'I love to code',
]

export default function Home() {
  return (
    <div className="Home">
      <div className="Home-Header">
        <h1>Hi, I'm Arkapravo Ghosh</h1>
      </div>
      <div className="Home-Typewriter">
        <Typewriter
          options={{
            strings: typestrings,
            autoStart: true,
            loop: true,
            deleteSpeed: 20,
          }}
        />
      </div>
    </div>
  );
};
