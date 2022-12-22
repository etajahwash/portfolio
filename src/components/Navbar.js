import React from 'react'
import '../styling/Navbar.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

export default function Navbar() {
    const [show, setShow] = useState(false);
    const [topArrow, setTopArrow] = useState(false);

    function navbarTransition() {
        if(window.scrollY > 30) {
            setShow(true)
        } else {
            setShow(false)
        }

        if(window.scrollY > 2000) {
            setTopArrow(true)
        } else {
            setTopArrow(false)
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
        <Link to="landing" spy={true} smooth={true} offset={0}>
        <div className={topArrow === false ? 'clear' : 'navArrowSection'}>
            <KeyboardDoubleArrowUpIcon className='navArrow' />
        </div>
        </Link>
    </div>
  )
}
