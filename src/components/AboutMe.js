import React from 'react'
import '../styling/AboutMe.css'
import minime from '../imgs/me2.png'
import pink from '../imgs/geo.jpg'
import { useState } from 'react'
import { Link } from 'react-scroll'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';


export default function AboutMe() {
  const [show, setShow] = useState(false)

  function handleShow() {
    setShow(!show)
  }
  return (
    <div className='aboutMeContainer' id='about' style={{
      backgroundImage: `url(${pink})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      backgroundPosition: '100% 100%'
    }}>
      <div className='aboutTransition'></div>
      <div className='aboutSection'>
        <div className='aboutText'>
          <h1 className='aboutTitle'>About Me</h1>
          <div className='aboutPara'>
            <p>
            I am a Frontend Software Developer specilaizing in React JS. My greatest achivement to-date
            includes a Full Stack React Application that utilizes both Frontend and Backend machinations. I was
            able to employ UI/UX Design while creating my own API to pull CRUD operational data.
            I am an eager learner and lover of dogs, but more importantly I have a will that cannot be shaken. Once
            I set my mind on something, I get it done. That is my approach to not only coding but life itself.  
            </p>
          </div>
        </div>
        <div className='aboutRight'>
          <div className='skillsContainer'>
            <div className='skillsOne'>
              <div>
              <img alt='mini language icons' className={show === false ? 'spacing aboutIcons upper' : 'aboutIcons upper'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              {show === true ? (
              <p>JavaScript</p>
              ) : null }
              </div>
              <div>
              <img alt='mini language icons' className={show === false ? 'spacing aboutIcons upper' : 'aboutIcons upper'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              {show === true ? (
              <p>React</p>                
              ) : null}
              </div>
              <div>
              <img alt='mini language icons' className={show === false ? 'spacing aboutIcons upper' : 'aboutIcons upper'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
              {show === true ? (
              <p>nodeJS</p>                
              ) : null}
              </div>
              <div>
              <img alt='mini language icons' className={show === false ? 'spacing aboutIcons upper' : 'aboutIcons upper'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
              {show === true ? (
              <p>MongoDB</p>                
              ) : null}
              </div>
              <div>
              <img alt='mini language icons' className={show === false ? 'spacing aboutIcons upper' : 'aboutIcons upper'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
              {show === true ? (
              <p>Github</p>                
              ) : null}
              </div>
              <div>
              <img alt='mini language icons' className={show === false ? 'spacing aboutIcons upper' : 'aboutIcons upper'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
              {show === true ? (
              <p>Git</p>                
              ) : null}
              </div>
            </div>
            <div className='skillsTwo'>
              <div>
              <img alt='mini language icons' className={show === false ? 'spacing aboutIcons lower' : 'aboutIcons lower'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                {show === true ? (
                <p>expressJS</p>                
              ) : null}
              </div>
              <div>
              <img alt='mini language icons' className={show === false ? 'spacing aboutIcons lower' : 'aboutIcons lower'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                {show === true ? (
                <p>CSS3</p>                
              ) : null}
              </div>
              <div>
              <img alt='mini language icons' className={show === false ? 'spacing aboutIcons lower' : 'aboutIcons lower'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
                {show === true ? (
                <p>Material UI</p>                
              ) : null}
              </div>
              <div>
              <img alt='mini language icons' className={show === false ? 'spacing aboutIcons lower' : 'aboutIcons lower'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                {show === true ? (
                <p>HTML5</p>                
              ) : null}
              </div>
              <div>
              <img alt='mini language icons' className={show === false ? 'spacing aboutIcons lower' : 'aboutIcons lower'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                {show === true ? (
                <p>Bootstrap</p>                
              ) : null}
              </div>
            </div>
          </div>
          <div className='skillsText'>
              <h2>Skills</h2>



              <ul className='aboutUl'>




              <li>
              <img alt='mini language icons' className={show === false ? 'spacing aboutIcons upper' : 'aboutIcons upper'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              {show === true ? (
              <p>JavaScript</p>
              ) : null }
              </li>
              <li>
              <img alt='mini language icons' className={show === false ? 'spacing aboutIcons upper' : 'aboutIcons upper'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              {show === true ? (
              <p>React</p>                
              ) : null}
              </li>
              <li>
              <img alt='mini language icons' className={show === false ? 'spacing aboutIcons upper' : 'aboutIcons upper'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
              {show === true ? (
              <p>nodeJS</p>                
              ) : null}
              </li>
              <li>
              <img alt='mini language icons' className={show === false ? 'spacing aboutIcons upper' : 'aboutIcons upper'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
              {show === true ? (
              <p>MongoDB</p>                
              ) : null}
              </li>
              <li>
              <img alt='mini language icons' className={show === false ? 'spacing aboutIcons lower' : 'aboutIcons lower'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                {show === true ? (
                <p>expressJS</p>                
              ) : null}
              </li>
              <li>
              <img alt='mini language icons' className={show === false ? 'spacing aboutIcons lower' : 'aboutIcons lower'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                {show === true ? (
                <p>CSS3</p>                
              ) : null}
              </li>
              <li>
              <img alt='mini language icons' className={show === false ? 'spacing aboutIcons lower' : 'aboutIcons lower'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                {show === true ? (
                <p>HTML5</p>                
              ) : null}
              </li>
              <li>
              <img alt='mini language icons' className={show === false ? 'spacing aboutIcons lower' : 'aboutIcons lower'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                {show === true ? (
                <p>Bootstrap</p>                
              ) : null}
              </li>


              </ul>



          </div>
          <div className='imgSide' style={{
          backgroundImage: `url(${minime})`
        }}></div>
        </div>
      </div>
      <Link to="projects" spy={true} smooth={true} offset={0}>
      <div className='aboutArrowSection'>
        <KeyboardDoubleArrowDownIcon className='aboutArrow' />
      </div>
      </Link>
    </div>
  )
}
