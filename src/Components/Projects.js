import React from "react";
import project11 from "../images/projects/project1-1.png";
import project12 from "../images/projects/project1-2.png";
import project13 from "../images/projects/project1-3.png";
import project21 from "../images/projects/project2-1.png";
import project22 from "../images/projects/project2-2.png";
import project31 from "../images/projects/welcomepage.mp4";
import project32 from "../images/projects/logindemo.mp4";
import project33 from "../images/projects/filterandsearch.mp4";
import project34 from "../images/projects/addtocartloginandseeorder.mp4";
import project35 from "../images/projects/comment.mp4";
import calculatorApp from "../images/projects/calculatorApp.mp4";
import "../css/projects.css";

function Projects() {
  const projects = [
    {
      title: "#1 Home page Web Copy Project",
      description:
        ", reference from Dropbox, intended to practice HTML CSS.",
      img: [project11, project12, project13],
      builtWith: "HTML, CSS",
      linkDes: "Tailwind(ver.)",
      link: "https://github.com/thasuohm/INT203_62130500037/tree/master/62130500037_groupwork_1",
    },
    {
      title: "#2 Product Management Application",
      description:
        ", This is a project that connects with an API to add, delete and edit data in the database and use a CSS framework to make decoration easier.",
      img: [project21, project22],
      builtWith: "Vue, tailwind",
    },
    {
      title: "#3 Online Shopping Application",
      description:
        ", This project is a project that has authentication users to access and manage information for their own users only. we have three roles of users in this system, to practice managing users in various roles and use redux to handle state management.",
      vid: [project31, project32, project33, project34, project35],
      vidDes: [
        "demo welcome page",
        "demo login",
        "demo search and filter",
        "demo checkout item with cart and handle if user checkout without login",
        "demo comment",
      ],
      builtWith: "React, Redux, React router, Material-UI",
      ref: {
        url: "https://www.phoenixnext.com/new-release.html",
        title: "phoenixnext",
      },
    },
    {
      title: "#4 Calculator Application",
      description:
        ", This project was created to practice javascript and react skills.",
      vid: [calculatorApp],
      builtWith: "React",
      linkDes: "Calculator",
      link: "https://github.com/thasuohm/calculator",
    },
  ];

  return (
    <>
      {projects.map((pro, i) => {
        return (
          <div className="project mt-10" key={pro.title}>
            <div className="desProj">
              <b className="noto">{pro.title}</b>
              <span>{pro.description}</span>
              {pro.ref && (
                <>
                  {" "}
                  (reference design from{" "}
                  <a href={pro.ref.url}>{pro.ref.title}</a>)
                </>
              )}
              <div className="mt-20 b noto">Built with : {pro.builtWith}</div>
              {pro.link && (
                <div className="mt-20 b noto">
                  link : <a href={pro.link}>{pro.linkDes}</a>
                </div>
              )}
            </div>

            {pro.img &&
              pro.img.map((img, i) => {
                return (
                  <img
                    className="imageProject"
                    src={img}
                    alt={pro.title}
                    key={`imageNo${i}`}
                  />
                );
              })}

            {pro.vid &&
              pro.vid.map((vid, i) => {
                return (
                  <React.Fragment key={`videoNo${i}`}>
                    <video
                      className="imageProject"
                      autoPlay
                      loop
                      muted
                      src={vid}
                      type="video/mp4"
                    />
                    {pro.vidDes && (
                      <div className="text-center pb-10 f18">
                        {pro.vidDes[i]}
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
          </div>
        );
      })}
    </>
  );
}

export default Projects;
