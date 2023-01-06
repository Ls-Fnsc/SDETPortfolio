import React from 'react'
import './Contact.css';

import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
  return (
    <div className="contactContainer">
        <div className="contactModal">
            <Grid container spacing={0} columns={{ xs: 2, sm: 2, md: 12}} className="contactContent">
                <Grid item xs={2} sm={4} md={4}>
                    <h3 className="modalTitle">
                        Start a project
                    </h3>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <p className="modalText">
                        Interested in working together? We should queue up a time to chat. Interested in working together? We should queue up a time to chat.
                    </p>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <button className="modalButton">
                        SEND AN EMAIL
                    </button>
                </Grid>
            </Grid>
        </div>
        <div className="footer">
            <p>
                Living, learning & leveling up <br/>
                one day at a time
            </p>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faLinkedin} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faGithub} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                </li>
            </ul>
        </div>
    </div>
  )
}
