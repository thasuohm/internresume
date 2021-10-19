import member37 from "./images/member37.jpg";
import project11 from "./images/project1-1.png";
import project12 from "./images/project1-2.png";
import project13 from "./images/project1-3.png";
import project21 from "./images/project2-1.png";
import project22 from "./images/project2-2.png";
import project31 from "./images/project3-1.png";
import project32 from "./images/project3-2.png";
import project33 from "./images/project3-3.png";
import project34 from "./images/project3-4.png";
import html from "./images/logoSkill/html.png";
import css from "./images/logoSkill/css.png";
import js from "./images/logoSkill/js.png";
import react from "./images/logoSkill/react.png";
import Redux from "./images/logoSkill/Redux.png";
import vue from "./images/logoSkill/vue.png";
import mui from "./images/logoSkill/mui.png";
import tailwind from "./images/logoSkill/tailwind.jpg";
import git from "./images/logoSkill/git.png";
import linux from "./images/logoSkill/linux.jpg";
import sql from "./images/logoSkill/sql.jpg";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";

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
              <PhoneIcon /> <p className="noto">0618969299</p>
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
            <div className="logoCard">
              <div>
                {" "}
                <img src={html} alt="html" className="logo" />
              </div>
              <div>HTML</div>
            </div>
            <div className="logoCard">
              <div>
                {" "}
                <img src={css} alt="css" className="logo" />
              </div>
              <div>CSS</div>
            </div>
            <div className="logoCard">
              <div>
                <img src={js} alt="js" className="logo" />
              </div>
              <div>JS</div>
            </div>

            <div className="logoCard">
              <div>
                <img src={react} alt="react" className="logo" />
              </div>
              <div>React</div>
            </div>
            <div className="logoCard">
              <div>
                <img src={vue} alt="vue" className="logo" />
              </div>
              <div>Vue</div>
            </div>
            <div className="logoCard">
              <div>
                <img src={Redux} alt="redux" className="logo" />
              </div>
              <div>Redux</div>
            </div>
            <div className="logoCard">
              <div>
                <img src={mui} alt="mui" className="logo" />
              </div>
              <div>Material UI</div>
            </div>
            <div className="logoCard">
              <div>
                <img src={tailwind} alt="tailwinds" className="logo" />
              </div>
              <div>tailwind</div>
            </div>
            <div className="logoCard">
              <div>
                <img src={git} alt="git" className="logo" />
              </div>
              <div>git</div>
            </div>
            <div className="logoCard">
              <div>
                <img src={linux} alt="linux" className="logo" />
              </div>
              <div>linux</div>
            </div>

            <div className="logoCard">
              <div>
                <img src={sql} alt="sql" className="logo" />
              </div>
              <div>SQL</div>
            </div>
          </div>
        </div>

        <div className="projectContainer">
          <p style={{ marginBottom: "20px" }}>
            <b className="f21 plr-20">My projects</b>
          </p>
          <div className="project">
            <div className="desProj">
              <b className="noto">#1 Web Copy project</b>
              <span>
                , reference from Dropbox, intended to practice HTML CSS JS.
              </span>
              <div className="mt-20 b noto">Built with : HTML, CSS, JS</div>
            </div>
            <img src={project11} alt="project11" className="imageProject" />
            <img src={project12} alt="project12" className="imageProject" />
            <img src={project13} alt="project13" className="imageProject" />
          </div>

          <div className="project">
            {" "}
            <div className="desProj">
              <b className="noto">#2 product management application </b>
              <span>
                {" "}
                This is a project that connects with an API to add, delete and
                edit data in the database and use a CSS framework to make
                decoration easier.
              </span>
              <div className="mt-20 b noto">Built with : Vue, tailwind</div>
            </div>
            <img src={project21} alt="project21" className="imageProject" />
            <img src={project22} alt="project22" className="imageProject" />
          </div>

          <div className="project mt-20">
            <div className="desProj">
              <b className="noto">#3 online shopping application </b>
              <span>
                This project is a project that has authentication users to
                access and manage information for their own users only. we have
                two roles of users in this system, to practice managing users in
                various roles and use redux to handle state management.
                (reference design from{" "}
                <a href="https://www.phoenixnext.com/new-release.html">
                  phoenixnext
                </a>
                )
              </span>
              <div className="mt-20 b noto">
                Built with : React, Redux, React router, Material-UI
              </div>
            </div>
            <img src={project31} alt="project31" className="imageProject" />
            <img src={project34} alt="project34" className="imageProject" />
            <img src={project32} alt="project32" className="imageProject" />
            <img src={project33} alt="project33" className="imageProject" />
          </div>
        </div>
      </div>
      <div className="bottomBorder" />
    </div>
  );
}

export default App;
