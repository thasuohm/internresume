import React from "react";
import project11 from "../images/project1-1.png";
import project12 from "../images/project1-2.png";
import project13 from "../images/project1-3.png";
import project21 from "../images/project2-1.png";
import project22 from "../images/project2-2.png";
import project31 from "../images/welcomepage.mp4";
import project32 from "../images/logindemo.mp4";
import project33 from "../images/filterandsearch.mp4";
import project34 from "../images/addtocartloginandseeorder.mp4";
import project35 from "../images/comment.mp4";
import "../css/projects.css";

function Projects() {
  const projects = [
    {
      title: "#1 Web Copy Project",
      description:
        ", reference from Dropbox, intended to practice HTML CSS JS.",
      img: [project11, project12, project13],
      builtWith: "HTML, CSS, JS",
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
      img: [project31, project32, project33, project34, project35],
      imgDes: [
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
            </div>

            {i <= 1 &&
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

            {i > 1 &&
              pro.img.map((img, i) => {
                return (
                  <React.Fragment key={`videoNo${i}`}>
                    <video
                      className="imageProject"
                      autoPlay
                      loop
                      muted
                      src={img}
                      type="video/mp4"
                    />
                    {pro.imgDes && (
                      <div className="text-center pb-10 f18">
                        {pro.imgDes[i]}
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
