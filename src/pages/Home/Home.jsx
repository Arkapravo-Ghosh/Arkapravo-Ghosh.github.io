import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import Side from "../../assets/side-comp.jpg";

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
      <div className="Home-Buttons">
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <button className="Home-Button"><p>About Me</p></button>
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <button className="Home-Button"><p>Contact</p></button>
        </Link>
      </div>
      <div className="Home-Side">
        <img src={Side} alt="Side Image" />
      </div>
    </div>
  );
};
