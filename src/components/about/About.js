import "../../styles/about.css";

import { MdOutlineSecurityUpdateGood } from "react-icons/md";
import {Resume} from '../../Resume/Bisrat.pdf'

import Experience from "../experience/experience";

function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_content">
        <p className="about-p">
          I have been working in the Information Technology field for 8 + years. I'm a highly motivated software Engineer with 4 + years of experience as a Full-Stack Developer. Having extensive experience working with Javascript, HTML,CSS, Python, React, Postgresql, MongoDB, Django, NodeJS and GitHub.
          </p>
          <div className="cards">
            <article className="about_card">
            <MdOutlineSecurityUpdateGood className="about_icon" />
              <h5>Experience</h5>
             <a href=""
             >
              <h6>4 Years Full Stack Developer</h6></a> 
            </article>
            <article className="about_card">
              <MdOutlineSecurityUpdateGood className="about_icon" />
              <h5>Experience</h5>
              <h6>2 Years System Security Engineer</h6>
            </article>
            <article className="about_card">
              <MdOutlineSecurityUpdateGood className="about_icon" />
              <h5>Experience</h5>
              <h6> 2 Years Network Engineer</h6>
            </article>
          </div>
        </div>
          <a href='https://drive.google.com/file/d/1wPkedlAeyY3RtxZHRJ7wvdNS6dtM3mm6/view?usp=sharing' className="btn"><button type="button" className="btn btn-success">Download Resume</button></a>
      </div>
    </div>
  );
}

export default About