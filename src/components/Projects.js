import React from "react";
import "../styling/Projects.css";
import project from "../imgs/projects2.jpg";
import gifs from "../imgs/creamydelights.gif";
import twd from "../imgs/twd2.gif";
import netflix from "../imgs/netflix.gif";
import { Link } from 'react-scroll'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function Projects() {
  return (
    <div
      className="projectsContainer"
      id="projects"
      style={{
        backgroundImage: `url(${project})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "100% 100%",
      }}
    >
      <div className="contactTransition"></div>
      <div className="letters">
        <h1 className="projectRight p">P</h1>
        <h1 className="projectLeft r">R</h1>
        <h1 className="projectRight o">O</h1>
        <h1 className="projectLeft j">J</h1>
        <h1 className="projectRight e">E</h1>
        <h1 className="projectLeft c">C</h1>
        <h1 className="projectRight t">T</h1>
        <h1 className="projectLeft s">S</h1>
      </div>
      <div className="projectsSection">
        <div className="ncSection">
          <h1 className="projectTitle">NETFLIX CLONE</h1>
          <div
            className="gifs"
            style={{
              backgroundImage: `url(${netflix})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "100% 100%",
            }}
          ></div>
          <div className="gifsBottom gbOne">
            <p className="gifText">
              <span className="largeText">E</span>a do proident sint aute labore minim.
              Ea do proident sint aute labore minim.
              Ea do proident sint aute labore minim.
            </p>
            <div className="lowestHalf">
              <div className="gifLeft">
                <h4>coded with:</h4>
                <ul className="projectUL">
                  <div className="projectFirst">
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>Material UI</li>
                  </div>
                  <div className='projectSecond'>
                  <li>Bootstrap</li>
                  <li>CSS3</li>
                  <li>HTML5</li>
                  </div>
                </ul>
              </div>
              <div className="repoContainer">
                <h4>Repo</h4>
                <img className='projectGit' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="cdSection">
          <h1 className="projectTitle">CREAMY DELIGHTS</h1>
          <div
            className="gifs"
            style={{
              backgroundImage: `url(${gifs})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "100% 100%",
            }}
          ></div>
            <div className="gifsBottom gbTwo">
            <p className="gifText">
              <span className="largeText">E</span>a do proident sint aute labore minim.
              Ea do proident sint aute labore minim.
              Ea do proident sint aute labore minim.
            </p>
            <div className="lowestHalf">
              <div className="gifLeft">
                <h4>coded with:</h4>
                <ul className="projectUL">
                  <div className="projectFirst">
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>nodeJS</li>
                  </div>
                  <div className='projectSecond'>
                  <li>expressJS</li>
                  <li>MongoDB</li>
                  <li>CSS3/HTML5</li>
                  </div>
                </ul>
              </div>
              <div className="repoContainer">
                <h4>Repo</h4>
                <img className='projectGit' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="twdSection">
          <h1 className="projectTitle">THE WITCH'S DEN</h1>
          <div
            className="gifs"
            style={{
              backgroundImage: `url(${twd})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "100% 100%",
            }}></div>
                      <div className="gifsBottom gbThree">
            <p className="gifText">
              <span className="largeText">E</span>a do proident sint aute labore minim.
              Ea do proident sint aute labore minim.
              Ea do proident sint aute labore minim.
            </p>
            <div className="lowestHalf">
              <div className="gifLeft">
                <h4>coded with:</h4>
                <ul className="projectUL">
                  <div className="projectFirst">
                  <li>JavaScript</li>
                  <li>CSS3</li>
                  <li>HTML5</li>
                  </div>
                </ul>
              </div>
              <div className="repoContainer">
                <h4>Repo</h4>
                <img className='projectGit' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="contact" spy={true} smooth={true} offset={0} className='projectLink'>
      <div className='projectArrowSection'>
        <KeyboardDoubleArrowDownIcon className='projectArrow' />
      </div>
      </Link>
    </div>
  );
}
