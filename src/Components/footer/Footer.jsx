import React from "react";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer>
      <div className="connect">
        <h1 className="connect-txt">Let's Connect there </h1>
        <button type="submit" className="connect-btn">
          <a
            href="https://www.linkedin.com/in/shraddha-gupta-7a44a1237/"
            target="_blank"
          >
            <span className="inner-connect">Connect</span>
          </a>
        </button>
      </div>
      <hr className="horizontal-line" />
      <div className="details">
        <div className="social">
          <p className="bio">
            Passionate web developer skilled in C++, Python, JavaScript, React,
            and Node.js, with proficiency in Git, Docker, Jenkins, and
            Kubernetes. Developed a restaurant management website and Medic
            World management app. 5-star C++ coder on HackerRank, solved 250+
            LeetCode challenges. Currently pursuing B.Tech in Computer Science
            at Lovely Professional University.
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/shraddha-gupta-7a44a1237/">
              <FaLinkedin />
            </a>
            <a href="https://github.com/shraddhagupta525"><FaGithub />

            </a>
            <a href="https://leetcode.com/u/shraddhagupta525/">
              <SiLeetcode />
            </a>
            <a href="https://www.instagram.com/shraddhagupta_525/">
            <FaInstagram />

            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
