import React from "react";
import './Header.css'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <ul>
          <Link to= "/">Home</Link>
          <Link to ="/project">Project</Link>
          <Link to ="/service">Service</Link>
          <Link to="/resume">Resume</Link>
          <Link to ="/education">Education</Link>
          <Link to = "/contact">Contact</Link>
        </ul>
      </header>
    </>
  );
}
