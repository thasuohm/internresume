import member37 from "./images/member37.jpg";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import Skills from "./Components/Skills.js";
import Projects from "./Components/Projects.js";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { useCallback, useEffect, useState } from "react";
import "./css/profile.css";
import "./css/layout.css";
const App = () => {
  const [current, setCurrent] = useState(0);
  const handlePosition = useCallback(() => {
    setCurrent(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handlePosition);
  }, [handlePosition]);

  return (
    <div className="container">
      <div>
        <div className="header">
          <p>Port Folio</p>
        </div>
        <div className="profileContent">
          <div>
            <img src={member37} alt="myphoto" className="image" />
          </div>
          <div className="name">
            {" "}
            <p> Thanapat Suwannaard</p>
          </div>
          <div className="info">
            <p>School of Information Technology, KMUTT </p>
            <div className="iconText">
              <EmailIcon /> <p>thanapat.thz@mail.kmutt.ac.th</p>
            </div>
            <div className="iconText">
              <PhoneIcon /> <p className="noto">061-896-9299</p>
            </div>
            <div className="iconText">
              <GitHubIcon />{" "}
              <p>
                <a href="https://github.com/thasuohm">thasuohm</a>
              </p>
            </div>
          </div>
        </div>

        <div className="borderBottom">
          <p>
            <b className="f21">Inspire</b>
          </p>
          <span>
            Since I have started developing web applications. I'm pretty much
            interested in front-end development, creating user-friendly
            applications and keeping the code clean and legible. I feel that
            it's the charm that really attracts me and gives me the inspiration
            to become a front-end developer.
          </span>
        </div>

        <div className="borderBottom">
          <p>
            <b className="f21">Skills</b>
          </p>
          <div className="skillContainer">
            <Skills />
          </div>
        </div>
        <div className="projectContainer">
          <p>
            <b className="f21 ">My Projects</b>
          </p>
          <Projects />
        </div>
      </div>
      <div className="bottomBorder" />
      {current > 0 && (
        <KeyboardArrowUpIcon
          className="arrowIcon"
          style={{ fontSize: "40px" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      )}
    </div>
  );
};

export default App;
