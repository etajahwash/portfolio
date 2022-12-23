import React from 'react'
import '../styling/LandingPage.css'
import landingbg from '../imgs/landingbg.jpg'
import { Typewriter } from 'react-simple-typewriter'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Link } from 'react-scroll';

export default function LandingPage() {


  return (
    <div className='landingPageContainer' id='landing' style={{
        backgroundImage: `url(${landingbg})`,
        height: '100vh',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100% 100%'
    }}>
        <div className='landing'>
        <div>
          <div className="landingLetters">
            <h1 className=" lph">H</h1>
            <h1 className=" lpe">E</h1>
            <h1 className=" lpl">L</h1>
            <h1 className=" lpl2">L</h1>
            <h1 className=" lpo">O</h1>
          </div>
            <h1 className='landingTitle'>
                  <Typewriter
                  words={["My name is E'Tajah.", '(pronounced: e-tay-jah)','I am a Frontend Developer', 'and local dog enthusiast.']}
                  loop={false}
                  cursor
                  cursorStyle='|'
                  cursorBlinking={true}
                  typeSpeed={95}
                  deleteSpeed={40}
                  delaySpeed={1000}
                  />
            </h1>
          </div>
          <div className='sideBar'> 
          <a href='https://www.linkedin.com/in/etajahwash?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSsNv9yroReaTyKgpheiDqw%3D%3D' rel='noreferrer' target='_blank'>
            <img alt='linkedin' className='sideIcons'  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /><br/>
          </a>  
          <a href='https://github.com/etajahwash' rel='noreferrer' target='_blank'>
            <img alt='github' className='sideIcons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          </a>
          </div>
          <Link to="about" spy={true} smooth={true} offset={0}>
            <div className='landingArrowSection'>
              <KeyboardDoubleArrowDownIcon className='landingArrow' />
            </div>
          </Link>
        </div>
    </div>
  )
}
