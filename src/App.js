import member37 from "./images/member37.jpg";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import Skills from "./Components/Skills.js";
import Projects from "./Components/Projects.js";
function App() {
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

        <div className="myskill">
          <p>
            <b className="f21 plr-20">Skills</b>
          </p>
          <div className="skillContainer">
            <Skills />
          </div>
        </div>
        <div className="projectContainer">
          <p style={{ marginBottom: "20px" }}>
            <b className="f21 plr-20">My Projects</b>
          </p>
          <Projects />
        </div>
      </div>
      <div className="bottomBorder" />
    </div>
  );
}

export default App;
