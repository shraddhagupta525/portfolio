import React from "react";
import "./Home.css";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <>
    {/* intro part */}
    <section className="intro">
      <h1>
        Hello! <br />I'm Shraddha gupta, <br /><span className="full-satck">Full stack developer
          </span> 
      </h1>





    </section>
      {/* contact through email */}
      <section className="contact">
        <h1>
          Have an Awesome Project Idea ?
          <span className="discuss"> Let's Discuss</span>
        </h1>
        <form action="" className="email">
          <MdEmail className="emailicon"/>

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
