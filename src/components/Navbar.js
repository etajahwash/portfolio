import React from 'react'
import '../styling/Navbar.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll';

export default function Navbar() {
    const [show, setShow] = useState(false);

    function navbarTransition() {
        if(window.scrollY > 30) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', navbarTransition);
        return () => window.removeEventListener('scroll', navbarTransition);
    }, [])
  return (
    <div className={`navbarContainer ${show && 'navbarScroll'}`}>
        <ul className='ulClick'>
            <li>
            <Link to="about" spy={true} smooth={true} offset={0}>About Me</Link>
            </li>
            <li>
            <Link to="projects" spy={true} smooth={true} offset={0}>Projects</Link>
            </li>
            <li>
            <Link to="contact" spy={true} smooth={true} offset={0}>Contact Me</Link>
            </li>
        </ul>
    </div>
  )
}
