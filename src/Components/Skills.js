import {skills} from '../configs/skills'
import '../css/skills.css'
function Skills() {
  return (
    <>
      {skills.map((s) => {
        return (
          <div className="logo-card" key={s.name}>
            <div>
              {' '}
              <img src={s.src} alt={s.src} className="logo" />
            </div>
            <div>{s.name}</div>
          </div>
        )
      })}
      ;
    </>
  )
}

export default Skills
