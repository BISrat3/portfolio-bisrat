import "../../styles/project.css";
import simongame from "../../images/simongame.png"
import movie_app from "../../images/movie_app.png"
import MenStore from "../../images/MenStore.png"
import Soccerplayer from "../../images/Soccerplayer.png"


const Projects = () => {
  return (
    <div id="experience">
      <h2>Projects</h2>
      <div className="container experience_container">
        <div className="frontend">
            <span class="">
              <img src={simongame} alt="" width="310px" />
            </span>
            <h4 className="title">Simon Game</h4>
            <p className="title-p" width="310px">
              JavaScript, HTML, CSS.
            </p>
    
              <a
                href="https://github.com/BISrat3/Project1_Simon"
                class="btn"
                target="_blank"
              >
                <button type="button" className="btn btn-info">
                  GitHub
                </button>
              </a>
              <a
                href="https://github.com/BISrat3/Project1_Simon"
                class="btn"
                target="_blank"
              >
                <button type="button" className="btn btn-success">
                  Live
                </button>
              </a>
        </div>
        <div className="backend">
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
            
              <a
                href="https://github.com/BISrat3/Movie_Project2"
                class="btn"
                target="_blank"
              >
                <button type="button" className="btn btn-info">
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
        <div className="backend">
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
              <a
                href="https://github.com/BISrat3/Soccer-frontend"
                class="btn"
                target="_blank"
              >
                <button type="button" className="btn btn-info">
                  GitHub
                </button>
              </a>
              <a
                href="https://soccer-player-profile-app.netlify.app/"
                class="btn"
                target=""
              >
                <button type="button" class="btn btn-success">
                  Live
                </button>
              </a>
        </div>

        <div className="backend">
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
            
              <a
                href="https://github.com/BISrat3/Style-App"
                class="btn"
                target=""
              >
               <button type="button" className="btn btn-info">
                  GitHub
                </button>
              </a>
              <a
                href="https://mens-styles-store.herokuapp.com/"
                class="btn"
                target=""
              >
                <button type="button" class="btn btn-success">
                  Live
                </button>
              </a>
            
        </div>
      {/* </div> */}
    </div>
    </div>
    
  );
};

export default Projects;
