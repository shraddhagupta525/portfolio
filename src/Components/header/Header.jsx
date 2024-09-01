import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <ul className="navp">
          <Link to="/" className="navi">
            Home
          </Link>
          <Link to="/project" className="navi">
            Project
          </Link>
          <Link to="/service" className="navi">
            Service
          </Link>
          <Link to="https://docs.google.com/document/d/123HrTR7rbv5S4d1nqjHkj5I7CQtYZckqdfUGkAIotSo/edit?usp=sharing" target="_blank" className="navi">
            Resume
          </Link>
          <Link to="/education" className="navi">
            Education
          </Link>
          <Link to="/contact" className="navi">
            Contact
          </Link>
        </ul>
      </header>
    </>
  );
}
