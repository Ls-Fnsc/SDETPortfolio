import * as React from 'react'
import { useState, useEffect } from 'react';

import './Navbar.css';

import Hamburguer from 'hamburger-react';

export const Navbar = () => {

    const [isScrolled, setScroll] = useState(false);

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [isOpen, setOpen] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 55) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })
    
    const navigationStyle = isNavExpanded ? "navigation expanded" : "navigation";
    const navigationBackgroundStyle = isScrolled ? "navigationBackground scrolled" : "navigationBackground";

    return (
        <nav className={ `list-group-item ${navigationStyle} ${navigationBackgroundStyle}` }>
            <a className={ isNavExpanded ? "name expanded" : "name" }>
                LUIS FONSECA 
            </a>

            <button className="hamburger" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
            }}>
                <Hamburguer toggled={isOpen} toggle={setOpen}/>
            </button>
 
            <div className={ isNavExpanded ? "navigation-menu expanded" : "navigation-menu" }>
                <ul>
                    <li>
                        <a href="#scrollHome" onClick={() => {
                            setIsNavExpanded(!isNavExpanded);
                            setOpen(!isOpen);
                        }}>Home</a>
                    </li>
                    <li>
                        <a href="#scrollAbout" onClick={() => {
                            setIsNavExpanded(!isNavExpanded);
                            setOpen(!isOpen);
                        }}>About</a>
                    </li>
                    <li>
                        <a href="#scrollTools" onClick={() => {
                            setIsNavExpanded(!isNavExpanded);
                            setOpen(!isOpen);
                        }}>Tools</a>
                    </li>
                    <li>
                        <a href="#scrollCaseStudy" onClick={() => {
                            setIsNavExpanded(!isNavExpanded);
                            setOpen(!isOpen);
                        }}>Case study</a>
                    </li>
                    <li>
                        <a href="#scrollContact" onClick={() => {
                            setIsNavExpanded(!isNavExpanded);
                            setOpen(!isOpen);
                        }}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}