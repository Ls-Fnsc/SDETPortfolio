import React from 'react'
import './Contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
  return (
    <div className="contactContainer">
        <div className="contactModal">
            <div className='contactModalContent'>
                <h3 className="modalTitle">
                    Do you think I'd be a good fit for your team?
                </h3>
                <a href="mailto:lfonsecadieguez@gmail.com">
                    <button className="modalButton">
                        SEND ME AN EMAIL!
                    </button>
                </a>
            </div>
        </div>
        <div className="footer">
            <p>
                Made by Luis Fonseca <br/>
                Guatemala City, Guatemala <br/>
                <a href="tel:50247811200">
                    +502 4781-1200
                </a><br/>
                <a href="mailto:lfonsecadieguez@gmail.com">
                    lfonsecadieguez@gmail.com
                </a>
            </p>
            <ul>
                <li>
                    <a href='https://www.linkedin.com/in/luis-antonio-fonseca-dieguez-60059a125/' target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="iconLink"/>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/Ls-Fnsc' target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="iconLink"/>
                    </a>
                </li>
                <li>
                    <a href="mailto:lfonsecadieguez@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} className="iconLink"/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}