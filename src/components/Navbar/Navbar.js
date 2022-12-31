import * as React from 'react'
import { useState } from 'react';

import './Navbar.css';

import profilePic from '../../images/profile_pic.png';

import Hamburguer from 'hamburger-react';

export const Navbar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [isOpen, setOpen] = useState(false);
    
    return (
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
    )
}