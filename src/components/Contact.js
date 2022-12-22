import React from 'react'
import '../styling/Contact.css'
import contact from '../imgs/pink3.jpg'
import EastIcon from '@mui/icons-material/East';
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
            <input className='firstInput' type='text' name='name' placeholder='Name' required />
            <input type='email' name='email' placeholder='Email' required /><br/>
            <textarea className='messageBox' type='text' name='message' placeholder='Write your message here!' required />
            <br/>
            <button className='contactButton' type='submit' >Send</button>
          </form>
      </div>
    </div>
    </div>
  )
}
