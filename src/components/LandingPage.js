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
          <h1 className='landingTitle'> <span className='landingHello'>Hello.</span> <br/>
                <Typewriter
                words={["My name is E'Tajah.", '(pronounced: e-tay-jah ☺️)','I am a Frontend Developer', 'and local dog enthusiast.']}
                loop={false}
                cursor
                cursorBlinking={true}
                typeSpeed={95}
                deleteSpeed={40}
                delaySpeed={1000}
                />
          </h1>
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
