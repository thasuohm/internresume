import member37 from './images/member37.jpg'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import GitHubIcon from '@material-ui/icons/GitHub'
import Skills from './Components/Skills.js'
import Projects from './Components/Projects.js'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import {useCallback, useEffect, useState} from 'react'
import './css/profile.css'
import './css/layout.css'
const App = () => {
  const [current, setCurrent] = useState(0)
  const handlePosition = useCallback(() => {
    setCurrent(window.scrollY)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handlePosition)
  }, [handlePosition])

  return (
    <main className="container">
      <section>
        <header className="header">Portfolio</header>
        <section className="profile-content">
          <div>
            <img src={member37} alt="myphoto" className="image" />
          </div>
          <div className="name">
            <p> Thanapat Suwannaard</p>
          </div>
          <div className="info">
            <p>School of Information Technology, KMUTT </p>
            <div className="icon-text">
              <EmailIcon />{' '}
              <a href="mailto:thanapat.suwannaard@gmail.com">
                thanapat.suwannaard@gmail.com
              </a>
            </div>
            <div className="icon-text">
              <PhoneIcon /> <p className="noto">061-896-9299</p>
            </div>
            <div className="icon-text">
              <GitHubIcon />{' '}
              <p>
                <a href="https://github.com/thasuohm">thasuohm</a>
              </p>
            </div>
          </div>
        </section>

        <section className="border-bottom">
          <p className="f21 b">Inspire</p>
          <span>
            Since I started developing web applications. At first, I'm just
            interested in creating user-friendly applications but after I keep
            coding, I'm very interested in coding about how to make it good
            performance while it's simple and clean. I feel that it's the charm
            that really attracts me to coding and gives me the inspiration to
            become a software engineer.
          </span>
        </section>

        <section className="border-bottom">
          <p className="f21 b">Skills</p>
          <section className="skill-container">
            <Skills />
          </section>
        </section>
        <section className="project-container">
          <p className="f21 b">My Projects</p>
          <Projects />
        </section>
      </section>
      <div className="bottom-border" />
      {current > 0 && (
        <KeyboardArrowUpIcon
          className="arrow-icon"
          style={{fontSize: '40px'}}
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        />
      )}
    </main>
  )
}

export default App
