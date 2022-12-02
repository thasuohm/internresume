import React from 'react'
import {projects} from '../configs/projects'

import '../css/projects.css'

function Projects() {
  return (
    <>
      {projects.map((pro, i) => {
        return (
          <div
            className="project mt-10"
            key={pro.title}
            id={'project' + (i + 1)}
          >
            <section className="description-project">
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
            </section>

            {pro.img &&
              pro.img.map((img, i) => {
                return (
                  <img
                    className="img-project"
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
                      className="img-project"
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
