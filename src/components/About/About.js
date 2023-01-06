import React from 'react'
import './About.css';

import Grid from '@mui/material/Grid';

import profilePicture from '../../images/profile_picture.png';

export const About = () => {
  return (
    <div className="aboutContainer">
      <Grid container spacing={0} columns={{ xs: 2, sm: 2, md: 8}}>
          <Grid item xs={2} sm={4} md={5} className="textColumn">
            <h2>About me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Vivamus ex ipsum, ullamcorper et ultricies ut, ornare non mi. Duis commodo dapibus pharetra. Sed ut rhoncus ligula. 
              Phasellus quis neque nec sem molestie scelerisque. Proin ut orci in ligula tristique auctor non id nulla. 
              Donec placerat metus dolor, <span className="highlightedText">et viverra augue aliquet ac.</span> Ut arcu mauris, hendrerit commodo tristique quis, sodales ut nisl. 
              Cras massa risus, facilisis a faucibus nec, efficitur in lectus. Nullam tortor dui, molestie at blandit vel, scelerisque vel risus. 
              Donec eget nisi ornare, pharetra mauris iaculis, porttitor mauris. Phasellus ac accumsan arcu.
            </p>
          </Grid>
          <Grid item xs={2} sm={4} md={3} className="pictureColumn">
            <img src={profilePicture} alt="Luis Antonio's profile" className="profilePicture"></img>
          </Grid>
      </Grid>
    </div>
  )
}
