import React from 'react'
import project11 from '../images/projects/project1-1.png'
import project12 from '../images/projects/project1-2.png'
import project13 from '../images/projects/project1-3.png'
import project21 from '../images/projects/project2-1.png'
import project22 from '../images/projects/project2-2.png'
import project31 from '../images/projects/welcomepage.mp4'
import project32 from '../images/projects/logindemo.mp4'
import project33 from '../images/projects/filterandsearch.mp4'
import project34 from '../images/projects/addtocartloginandseeorder.mp4'
import project35 from '../images/projects/comment.mp4'
import calculatorApp from '../images/projects/calculatorApp.mp4'
import opdc1 from '../images/projects/OPDC-1.png'
import examonline1 from '../images/projects/exam-online-1.png'
import examonline2 from '../images/projects/exam-online-2.png'
import sharemybook from '../images/projects/sharemybook.mp4'
import sharemybook2 from '../images/projects/sharemybook-2.mp4'
import cal1 from '../images/projects/cal-1.png'
import cal3 from '../images/projects/cal-3.png'
import cal4 from '../images/projects/cal-4.png'
import distibute1 from '../images/projects/distibute-1.mp4'

import '../css/projects.css'

function Projects() {
  const projects = [
    {
      title: 'Home page Web Copy Project',
      description: ', reference from Dropbox, intended to practice HTML CSS.',
      img: [project11, project12, project13],
      builtWith: 'HTML, CSS',
      linkDes: 'Tailwind(ver.)',
      link: 'https://github.com/thasuohm/INT203_62130500037/tree/master/62130500037_groupwork_1',
    },
    {
      title: 'Product Management Application',
      description:
        ', This is a project that connects with an API to add, delete and edit data in the database and use a CSS framework to make decoration easier.',
      img: [project21, project22],
      builtWith: 'Vue, tailwind',
    },
    {
      title: 'Online Shopping Application',
      description:
        ', This project is a project that has authentication users to access and manage information for their own users only. we have three roles of users in this system, to practice managing users in various roles and use redux to handle state management.',
      vid: [project31, project32, project33, project34, project35],
      vidDes: [
        'demo welcome page',
        'demo login',
        'demo search and filter',
        'demo checkout item with cart and handle if user checkout without login',
        'demo comment',
      ],
      builtWith: 'React, Redux, React router, Material-UI',
      ref: {
        url: 'https://www.phoenixnext.com/new-release.html',
        title: 'phoenixnext',
      },
    },
    {
      title: 'Calculator Application',
      description:
        ', This project was created to practice javascript and react skills.',
      vid: [calculatorApp],
      builtWith: 'React',
      linkDes: 'Calculator',
      link: 'https://github.com/thasuohm/calculator',
    },
    {
      title: 'Dek-D TCAS calculator 65',
      description:
        ', the application to help people to calculate the percentage to get into a university and show the requirement score and score ratio for each university.',
      img: [cal1, cal3, cal4],
      builtWith: 'Next.js',
    },
    {
      title: 'Dek-D Exam Online',
      description:
        ', the application for students to buy a course to do an exam for preparing for the university. This project has to be concerned with exam time, syncing answer data, offline state, play audio, many choice formats, many UI views for each device, and the version and OS that the user use.',
      img: [examonline1, examonline2],
      builtWith: 'HTML, CSS, JavaScript, PHP',
    },
    {
      title: 'Dek-D give exam topic TGAT TPAT A-Level Program',
      description:
        ', the application to give the user about the topic for each subject and tell how many questions to get the goal score, user can print into the paper',
      vid: [distibute1],
      builtWith: 'React',
    },
    {
      title: 'OPDC Data retriever',
      description:
        ', [Government Project]  the project to handle data, monitor data, generate links, and export data as a .xlsx file and handle permission for user.',
      img: [opdc1],
      builtWith: 'HTML, CSS, Flask',
    },
    {
      title: 'Share my Book',
      description:
        ', [Senior Project] a project to help people to borrow books and donate the book. this project includes authentication by the user and login via a google account, role handling with next middleware, verifying email and forgot password, socket.io for making the in-app notification, Nodemailer to send an email, Optimize page build with server-side and integrated static generation',
      vid: [sharemybook, sharemybook2],
      builtWith: 'Next.js, Socket.io',
    },
  ]

  return (
    <>
      {projects.map((pro, i) => {
        return (
          <div
            className="project mt-10"
            key={pro.title}
            id={'project' + (i + 1)}
          >
            <div className="desProj">
              <b className="noto">
                {i + 1 + '# '}
                {pro.title}
              </b>
              <span>{pro.description}</span>
              {pro.ref && (
                <>
                  {' '}
                  (reference design from{' '}
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
                )
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
                )
              })}
          </div>
        )
      })}
    </>
  )
}

export default Projects
