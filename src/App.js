import member37 from "./images/member37.jpg";
import project1 from "./images/project1.png";
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
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";

function App() {
  return (
    <div className="container">
      <div>
        <div className="header">
          <p>RESUME</p>
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
              <PhoneIcon /> <p>0618969299</p>
            </div>
            <div className="iconText">
              <GitHubIcon />{" "}
              <p>
                <a href="https://github.com/thasuohm">thasuohm</a>
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "50px" }}>
          <p>
            <b className="f21 plr-20">My Skills</b>
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
                <img
                  src={css}
                  alt="css"
                  className="logo"
                  style={{ width: "60px", height: "auto" }}
                />
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
          </div>
        </div>

        <div className="projectContainer">
          <p style={{ marginBottom: "50px" }}>
            <b className="f21 plr-20">My project experience</b>
          </p>
          <div className="project">
            <img src={project1} alt="project1" className="imageProject" />
            <p className="desProj">
              <b>#1 Web Copy project (HTML, CSS, JS)</b>,This project is based
              on Dropbox, intended to practice HTML CSS JS.
            </p>
          </div>

          <div className="project">
            <img src={project1} alt="project2" className="imageProject" />
            <p className="desProj">
              <b>#2 product management system ( Vue, tailwind ) </b> This
              project is a product management system by contacting the API to
              add, delete, edit product information. ,
            </p>
          </div>

          <div className="project">
            <img src={project1} alt="project3" className="imageProject" />
            <p className="desProj">
              <b>
                #3 online shopping system (React, Redux, Material-UI,React
                router)
              </b>
              , It is a system with two user roles: general users and admin. To
              purchase products, you must be logged in first, and users can add,
              delete, edit their own products only. Including when the purchase
              is successful, user will be able to view the purchase history and
              can comment on the product.
            </p>
          </div>
        </div>
      </div>
      <div className="bottomBorder" />
    </div>
  );
}

export default App;
