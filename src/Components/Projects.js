import React from "react";
import project11 from "../images/project1-1.png";
import project12 from "../images/project1-2.png";
import project13 from "../images/project1-3.png";
import project21 from "../images/project2-1.png";
import project22 from "../images/project2-2.png";
import project31 from "../images/project3-1.png";
import project32 from "../images/project3-4.png";
import project33 from "../images/project3-2.png";
import project34 from "../images/project3-3.png";

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
        "This is a project that connects with an API to add, delete and edit data in the database and use a CSS framework to make decoration easier.",
      img: [project21, project22],
      builtWith: "Vue, tailwind",
    },
    {
      title: "#3 Online Shopping Application",
      description:
        "This project is a project that has authentication users to access and manage information for their own users only. we have two roles of users in this system, to practice managing users in various roles and use redux to handle state management.",
      img: [project31, project32, project33, project34],
      builtWith: "React, Redux, React router, Material-UI",
      ref: {
        url: "https://www.phoenixnext.com/new-release.html",
        title: "phoenixnext",
      },
    },
  ];

  return (
    <>
      {projects.map((pro) => {
        return (
          <div className="project">
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
            {pro.img.map((img, i) => {
              return <img src={img} alt={i} className="imageProject" />;
            })}
          </div>
        );
      })}
    </>
  );
}

export default Projects;
