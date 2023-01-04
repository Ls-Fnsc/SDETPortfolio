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
            <a href="/" className={ isNavExpanded ? "name expanded" : "name" }>
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
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Tools</a>
                    </li>
                    <li>
                        <a href="/contact">Case study</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

{/*

        <nav className={ isNavExpanded ? "navigation expanded" : "navigation" }>
            <a href="/" className={ isNavExpanded ? "name expanded" : "name" }>
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
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Tools</a>
                    </li>
                    <li>
                        <a href="/contact">Case study</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>

*/}