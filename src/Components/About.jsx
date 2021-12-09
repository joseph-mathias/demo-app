import React from "react";
import aboutimage from "../images/about.png";

function About() {
  return (
    <div id="about">
      <div className="about-text">
        <h1>UPCOMING EVENT</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae quos
          velit assumenda soluta quisquam mollitia, modi ut magni quo veniam
          eos, eum tempore, hic similique est! Error deleniti quo debitis.
        </p>
        <button>Read More</button>
      </div>
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
    </div>
  );
}

export default About;
