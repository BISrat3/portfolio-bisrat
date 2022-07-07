import { BsFillBookmarkCheckFill } from "react-icons/bs";
import "../../styles/project.css";


import simongame from "../../images/simongame.png"
import movie_app from "../../images/movie_app.png"
import MenStore from "../../images/MenStore.png"

import Soccerplayer from "../../images/Soccerplayer.png"


const Projects = () => {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className="container experience_container">
        {/* <div class="box alt new-container"> */}
          <div class="frontend">
            <span class="">
              <img src={simongame} alt="" width="310px" />
            </span>
            <h4 class="title">Simon Game</h4>
            <p class="title-p" width="310px">
              JavaScript, HTML, CSS.
            </p>
            <div>
              <a
                href="https://github.com/BISrat3/Project1_Simon"
                class="btn"
                target="_blank"
              >
                <button type="button" class="btn btn-secondary">
                  GitHub
                </button>
              </a>
            </div>
            <span class="">
              <img
                src={movie_app}
                alt=""
                width="310px"
                height="182.58"
              />
            </span>
            <h4 class="title">Movie App</h4>
            <p class="title-p" width="310px">
              Javascript, HTML,CSS, Express, EJS Mongoose, MongoDB, Axios, API
            </p>
            <div>
              <a
                href="https://github.com/BISrat3/Movie_Project2"
                class="btn"
                target="_blank"
              >
                <button type="button" class="btn btn-secondary">
                  GitHub
                </button>
              </a>
              <a
                href="https://movie-app-1305.herokuapp.com/movies"
                class="btn"
                target="_blank"
              >
                <button type="button" class="btn btn-success">
                  Live
                </button>
              </a>
            </div>

            <span class="">
              <img
                src={Soccerplayer}
                alt=""
                width="310px"
                height="182.58"
              />
            </span>
            <h4 class="title">Soccer Player App</h4>
            <p class="title-p" width="310px">
              HTML, CSS, JavaScript, React React Bootstrap , Sportmonk-API,
              Postman
            </p>
            <div>
              <a
                href="https://github.com/BISrat3/Soccer-frontend"
                class="btn"
                target="_blank"
              >
                <button type="button" class="btn btn-secondary">
                  GitHub
                </button>
              </a>
              <a
                href="https://soccer-player-profile-app.netlify.app/"
                class="btn"
                target="_blank"
              >
                <button type="button" class="btn btn-success">
                  Live
                </button>
              </a>
            </div>

            <span class="">
              <img
                src={MenStore}
                alt=""
                width="310px"
                height="182.58"
              />
            </span>
            <h4 class="title">Men's Style Store</h4>

            <p class="title-p" width="310px">
              HTML, CSS, JavaScript,Bulma, Python, Django, BootStrap,
              Postgresql, Heroku
            </p>
            <div>
              <a
                href="https://github.com/BISrat3/Style-App"
                class="btn"
                target="_blank"
              >
                <button type="button" class="btn btn-secondary">
                  GitHub
                </button>
              </a>
              <a
                href="https://mens-styles-store.herokuapp.com/"
                class="btn"
                target="_blank"
              >
                <button type="button" class="btn btn-success">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Projects;
