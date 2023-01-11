import React from 'react'
import './About.css';

import Grid from '@mui/material/Grid';

import profilePicture from '../../images/profile_picture.png';

export const About = () => {
  return (
    <div className="aboutContainer" id="scrollAbout">
      <Grid container spacing={0} columns={{ xs: 2, sm: 2, md: 8}}>
          <Grid item xs={2} sm={4} md={5} className="textColumn">
            <h2>About me</h2>
            <p>
              Hi, I'm Luis, a 23-year-old that loves technology. I discovered HTML and CSS when I was 12 and from that moment I knew I wanted to be involved in the Tech industry. 
              I've always wanted to know how things work so that I could break them. That's why I love Quality Assurance, 
              it gives me an opportunity to understand how great software products are made, and <span className="highlightedText">it allows me to make sure they not only meet expectations but exceed them.</span>
              <br/>
              <br/>
              Today, I work <span className="highlightedText">remotely as a QA Analyst</span> for a software development company based in Denver, Colorado. 
              I've had the opportunity to work in projects in the sports and health industries, applying my <span className="highlightedText">knowledge, QA methodologies and processes.</span>
              <br/>
              <br/>
              Some of <span className="highlightedText">my responsibilities are:</span> plan and execute test plans and test cases in order to perform integration, acceptance, regression, smoke and sanity testing, 
              among others, for multiple software projects. Document and retest bugs and defects found in the testing process, and create testing 
              automation scripts that are effective and repeatable.
              <br/>
              <br/>
              Here are a few tools and technologies I've worked with:
            </p>
          </Grid>
          <Grid item xs={2} sm={4} md={3} className="pictureColumn">
            <img src={profilePicture} alt="Luis Antonio's profile" className="profilePicture"></img>
          </Grid>
          <Grid>
            <span id="scrollTools">.</span>
          </Grid>
      </Grid>
    </div>
  )
}
