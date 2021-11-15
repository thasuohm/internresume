import html from "../images/logoSkill/html.png";
import css from "../images/logoSkill/css.png";
import js from "../images/logoSkill/js.png";
import java from "../images/logoSkill/java.png";
import react from "../images/logoSkill/react.png";
import Redux from "../images/logoSkill/Redux.png";
import vue from "../images/logoSkill/vue.png";
import mui from "../images/logoSkill/mui.png";
import tailwind from "../images/logoSkill/tailwind.jpg";
import git from "../images/logoSkill/git.png";
import linux from "../images/logoSkill/linux.jpg";
import sql from "../images/logoSkill/sql.png";
import "../css/skills.css";
function Skills() {
  const skills = [
    { src: html, name: "HTML" },
    { src: css, name: "CSS" },
    { src: js, name: "JavaScript" },
    { src: react, name: "React" },
    { src: Redux, name: "Redux" },
    { src: vue, name: "Vue" },
    { src: mui, name: "Material UI" },
    { src: tailwind, name: "Tailwind" },
    { src: java, name: "Java" },
    { src: git, name: "Git" },
    { src: linux, name: "Linux" },
    { src: sql, name: "SQL" },
  ];
  return (
    <>
      {skills.map((s) => {
        return (
          <div className="logoCard" key={s.name}>
            <div>
              {" "}
              <img src={s.src} alt={s.src} className="logo" />
            </div>
            <div>{s.name}</div>
          </div>
        );
      })}
      ;
    </>
  );
}

export default Skills;
