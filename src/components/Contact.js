import React from 'react'
import '../styling/Contact.css'
import contact from '../imgs/pink3.jpg'
import flower from '../imgs/violet.png'
import bigFlower from '../imgs/bigFlower.png'
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-scroll';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
const iconButtonStyles = {
  width: '10rem',
  height: '10rem',
}

export default function Contact() {
  return (
    <div className='contactContainer' id='contact' style={{
      backgroundImage: `url(${contact})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      backgroundPosition: '100% 100%'
    }}>
    <div className='contactTransition'></div>
    <div className='h1s'>
      <h1 className='contactLike'>Like What You See?</h1>
      <h1 className='contactMe'>Contact Me!</h1>
    </div>
    <div className='contactLower'>
      <div className='contactArrowContainer'>
      <EastIcon sx={iconButtonStyles} fontSize='large' className='contactArrow'  />
      </div>
      <div className='formContainer'>
          <form className='contactForm' method='POST' action='https://formsubmit.co/etajahwash@gmail.com'>
            <div className='flowerSection'>
              <img alt='flower' src={flower} className='miniFlower' />
              <img alt='flower' src={bigFlower} className='flower' /><br/>
              <img alt='flower' src={flower} className='miniFlower' />
            </div><br/>
            <input className='firstInput' type='text' name='name' placeholder='Name' required />
            <input type='email' name='email' placeholder='Email' required /><br/>
            <textarea className='messageBox' type='text' name='message' placeholder='Write your message here!' required />
            <br/>
            <button className='contactButton' type='submit' >Send</button>
          </form>
      </div>
    </div>
    <Link to="landing" spy={true} smooth={true} offset={0}>
        <div className='projectArrowSection contactBottomArrow'>
            <KeyboardDoubleArrowUpIcon className='projectArrow contactAr' />
        </div>
        </Link>
    </div>
  )
}
