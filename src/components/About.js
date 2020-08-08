import React from "react";
import "../css/About.css";
import aboutData from "../aboutData";
import Footer from "./Footer";
import NavAll from "./NavAll";

function About() {
  return (
    <div>
      <NavAll />
      <div className="about">
        {aboutData.map((item) => (
          <div>
            <h2 className="heading">{item.heading}</h2>
            <h3 className="subheading">{item.subhead}</h3>
            <p className="para">{item.para}</p>
            <hr class="line"></hr>
            <br />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default About;
