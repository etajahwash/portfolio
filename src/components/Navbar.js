import React from 'react'
import '../styling/Navbar.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {
    Divider,
    IconButton,
    List,
    ListItemButton,
    ListItemText,
  } from "@mui/material";

export default function Navbar() {
    const [show, setShow] = useState(false);
    const [isActive, setIsActive] = useState(false);

    function navProjects() {
        setIsActive(false);
      }
    
      function navAbout() {
        setIsActive(false);
      }
    
      function navContact() {
        setIsActive(false);
      }
    
      function navHome() {
        setIsActive(false);
      }


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
            <Link to="contact" spy={true} smooth={true} offset={0} className='contactClass'>Contact Me</Link>
            </li>
        </ul>
        <div className='menuSection'>
        <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setIsActive(true)}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor="right"
            color="palevioletred"
            open={isActive}
            onClose={() => setIsActive(false)}
            onOpen={() => {}}
          >
            <div
              style={{
                backgroundColor: "plum",
                height: "100vh",
                width: "10rem",
                color: '#42006C',
              }}
            >
              <Divider />
              <List>
              <Link to="landing" spy={true} smooth={true} offset={0}>
                <ListItemButton onClick={navHome}>
                    <ListItemText primary={"Home"} />
                </ListItemButton>
                </Link>
                <Link to="about" spy={true} smooth={true} offset={0}>
                <ListItemButton onClick={navAbout}>
                  <ListItemText fontFamily='cursive' primary={"About Me"} />
                </ListItemButton>
                </Link>
                <Link to="projects" spy={true} smooth={true} offset={0}>
                <ListItemButton onClick={navProjects}>
                  <ListItemText primary={"My Projects"} />
                </ListItemButton>
                </Link>
                <Link to="contact" spy={true} smooth={true} offset={0}>
                <ListItemButton onClick={navContact}>
                  <ListItemText primary={"Contact Me"} />
                </ListItemButton>
                </Link>
              </List>
            </div>
          </SwipeableDrawer>
        </div>
    </div>
  )
}
