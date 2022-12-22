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
        <div className='aboutText col-6'>
          <h1 className='aboutTitle'>About Me</h1>
          <div className='aboutPara'>
            <p>
              Labore eu cupidatat fugiat labore laborum qui ad est. Quis veniam qui ipsum mollit voluptate esse aliquip fugiat non aliqua ad consequat labore est. Adipisicing sunt sit ullamco quis eu dolor.
              Labore eu cupidatat fugiat labore laborum qui ad est. Quis veniam qui ipsum mollit voluptate esse aliquip fugiat non aliqua ad consequat labore est. Adipisicing sunt sit ullamco quis eu dolor.
              Labore eu cupidatat fugiat labore laborum qui ad est. Quis veniam qui ipsum mollit voluptate esse aliquip fugiat non aliqua ad consequat labore est. Adipisicing sunt sit ullamco quis eu dolor.
              Labore eu cupidatat fugiat labore laborum qui ad est. Quis veniam qui ipsum mollit voluptate esse aliquip fugiat non aliqua ad consequat labore est. Adipisicing sunt sit ullamco quis eu dolor.
            </p>
          </div>
          {/* <div className='aboutBottom'>
            <h3>SKILLS</h3>
            <hr/>
            <hr/>
            icons icons icons
          </div> */}
        </div>
        <div className='imgSide col-6' style={{
          backgroundImage: `url(${minime})`
        }}>
          <div className='skillsContainer'>
            <div className='skillsOne'>
              <div>
              <img className={show === false ? 'spacing aboutIcons upper' : 'aboutIcons upper'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              {show === true ? (
              <p>JavaScript</p>
              ) : null }
              </div>
              <div>
              <img className={show === false ? 'spacing aboutIcons upper' : 'aboutIcons upper'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              {show === true ? (
              <p>React</p>                
              ) : null}
              </div>
              <div>
              <img className={show === false ? 'spacing aboutIcons upper' : 'aboutIcons upper'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
              {show === true ? (
              <p>nodeJS</p>                
              ) : null}
              </div>
              <div>
              <img className={show === false ? 'spacing aboutIcons upper' : 'aboutIcons upper'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
              {show === true ? (
              <p>MongoDB</p>                
              ) : null}
              </div>
              <div>
              <img className={show === false ? 'spacing aboutIcons upper' : 'aboutIcons upper'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
              {show === true ? (
              <p>Github</p>                
              ) : null}
              </div>
              <div>
              <img className={show === false ? 'spacing aboutIcons upper' : 'aboutIcons upper'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
              {show === true ? (
              <p>Git</p>                
              ) : null}
              </div>
            </div>
            <div className='skillsTwo'>
              <div>
              <img className={show === false ? 'spacing aboutIcons lower' : 'aboutIcons lower'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                {show === true ? (
                <p>expressJS</p>                
              ) : null}
              </div>
              <div>
              <img className={show === false ? 'spacing aboutIcons lower' : 'aboutIcons lower'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                {show === true ? (
                <p>CSS3</p>                
              ) : null}
              </div>
              <div>
              <img className={show === false ? 'spacing aboutIcons lower' : 'aboutIcons lower'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
                {show === true ? (
                <p>Material UI</p>                
              ) : null}
              </div>
              <div>
              <img className={show === false ? 'spacing aboutIcons lower' : 'aboutIcons lower'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                {show === true ? (
                <p>HTML5</p>                
              ) : null}
              </div>
              <div>
              <img className={show === false ? 'spacing aboutIcons lower' : 'aboutIcons lower'} onClick={handleShow} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                {show === true ? (
                <p>Bootstrap</p>                
              ) : null}
              </div>
            </div>
          </div>
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
