import "../../styles/about.css";
// import { DiCode } from "react-icons/di";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import {brands} from '@fortawesome/fontawesome-svg-core/import.macro'

export default function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_content">
          <div className="cards">
            <article className="about_card">
              <h5>Experience</h5>
              <h6>3 Years Working</h6>
            </article>
              {/* <DiCode className="about_icon" /> */}
              {/* <FontAwesomeIcon icon="fa-brands fa-connectdevelop" /> */}
              {/* <div className="card2"> */}
            <article className="about_card">
              <MdOutlineSecurityUpdateGood className="about_icon" />
              <h5>Experience</h5>
              <h6>2 Years Working</h6>
            </article>
          {/* </div> */}
          </div>
        </div>
        <p className="about-p">
          I'm a Full Stack Java Script Web Developer with experience of building sites and web applications. Comprehend and implemented ideas like
          </p>
      </div>
    </div>
  );
}
