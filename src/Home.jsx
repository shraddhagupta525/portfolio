import React from "react";
import "./Home.css";
import { MdEmail } from "react-icons/md";
import { FaChevronCircleRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* intro part */}
      <div className="intro">
        <h1>
          Hello! I'm Shraddha gupta, <br />
          <span className="full-stack">Web developer</span> <br />
          <span className="full-intro">
            <p>
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
              <button className="about-me-btn">
                About Me <FaChevronCircleRight className="right-icon" />
              </button>
            </p>
          </span>
        </h1>
        <br />
        {/* profile image */}
        <img
          src="/src/assets/formal.jpeg"
          className="profile-image"
          alt="Shraddha's photo"
        />
      </div>

      {/* About me */}
      <div className="about-me">
        <h1>Education</h1>
      </div>
      <div className="education-details">
        <div className="graduation">
          <div className="college">
            <h1>Lovely Professional University</h1>
            <p>Jalandhar, Punjab | Sep-2021 to May-2025</p>
          </div>
          <div className="dot1">
            {/* for dotted designing */}

            <h1>.</h1>
          </div>
          <div className="course">
            <h1>B.Tech Computer Science</h1>
            <p>CGPA:7.01</p>
          </div>
        </div>
        <div className="twelveth">
          <div className="college">
            <h1>The ideal new star english school</h1>
            <p>Varanasi, Uttar Pradesh | July-2019 to May 2020</p>
          </div>
          <div className="dot2">
            {/* for dotted designing */}
            <h1>.</h1>
          </div>
          <div className="course">
            <h1>
              12<sup>th</sup>(PCM)
            </h1>
            <p>Score: 75 %</p>
          </div>
        </div>
        <div className="tenth">
          <div className="college">
            <h1>Kachhawa christian school</h1>
            <p>Mirzapur, Uttar Pradesh | July-2017 to May 2018</p>
          </div>
          <div className="dot3">
            {/* for dotted designing */}

            <h1>.</h1>
          </div>
          <div className="course">
            <h1>
              10<sup>th</sup>
            </h1>
            <p>score:85%</p>
          </div>
        </div>
      </div>

      {/* projects part */}
      <h1 className="project-headline">Projects</h1>
      <div class="projects">
  <div class="project-card">
    <img src="src/assets/coretto.jpg" alt="coffee shop management" />
    <div class="project-details">
      <h3>Coffee Shop Management System</h3>
      <p>A web-based system to manage orders and staff at a coffee shop, developed using C# .NET and MVC.</p>
    </div>
  </div>
  
  <div class="project-card">
    <img src="src/assets/medic_world.webp" alt="medic world image" />
    <div class="project-details">
      <h3>Medic World</h3>
      <p>An online platform offering healthcare solutions, allowing users to book appointments, purchase medicines, and more.</p>
    </div>
  </div>
  
  <div class="project-card">
    <img src="src/assets/calc.png" alt="calculator" />
    <div class="project-details">
      <h3>Calculator</h3>
      <p>A functional calculator built using JavaScript, with support for basic mathematical operations.</p>
    </div>
  </div>
</div>


      {/* contact through email */}
      <section className="contact">
        <h1>
          Have an Awesome Project Idea ?
          <span className="discuss"> Let's Discuss</span>
        </h1>
        <form action="" className="email">
          <MdEmail className="emailicon" />

          <input type="email" placeholder="Enter your email" pointer="text" />
          <button type="submit" className="send">
            {" "}
            Send
          </button>
        </form>
      </section>
    </>
  );
}
