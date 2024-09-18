import React from "react";
import "./Header.css";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <>
      <header>
        <ul className="navp">
          <Link activeClass="active" smooth spy to="home" className="navi">
            Home
          </Link>
          <Link activeClass="active" smooth spy to="about" className="navi">
            About
          </Link>

          <a
            activeClass="active"
            className="navi"
            href="https://docs.google.com/document/d/123HrTR7rbv5S4d1nqjHkj5I7CQtYZckqdfUGkAIotSo/edit?usp=sharing"
            download
          >
            Resume
          </a>
          <Link activeClass="active" smooth spy to="project" className="navi">
            Projects
          </Link>
          <Link activeClass="active" smooth spy to="contact" className="navi">
            Contact
          </Link>
        </ul>
      </header>
    </>
  );
}
