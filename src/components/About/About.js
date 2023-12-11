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
              Greetings! I'm Luis Antonio, a passionate Software QA Test Engineer experienced in the dynamic realms of Finance, Health, Streaming, and Sports industries. My expertise lies in both manual and automated testing for web-based products and native mobile apps.
              <br/>
              <br/>
              Proficient <span className="highlightedText">in Java and Python for test automation</span>, my toolkit for ensuring software quality includes Selenium, Appium, WebDriver, TestNG, Maven, Cucumber, and Git. Holding the ISTQB Certified Tester Foundation Level certification and achieving a stellar score of 970 out of 990 in the TOEIC certification reflects my commitment to excellence.
              <br/>
              <br/>
              I had the privilege of contributing to the development of the Tokyo 2020 Summer Olympics app and collaborated on projects for renowned brands such as Madison Square Garden, AbbVie, and Bleacher Report Live. Beyond coding, I've actively participated in explaining the intricacies of the testing lifecycle to various stakeholders, facilitating informed decision-making.
              <br/>
              <br/>
              What drives me in the realm of Quality Assurance is the profound satisfaction of creating software that genuinely enhances the lives of end-users. With a user-centric approach, QA becomes a means for me to connect with the needs and desires of those who interact with the products I help shape. By embracing perspectives from the development team, clients, end-users, and stakeholders, I gain a comprehensive understanding of the software product we're creating.
              <br/>
              <br/>
              My commitment to software quality is rooted in being detail-oriented and proactive. I embrace a holistic testing approach that considers the viewpoints of all stakeholders involved, ensuring alignment with both business and user requirements. By meticulously navigating through the various angles of a project, I strive to contribute to the success and satisfaction of all involved parties.
              <br/>
              <br/>
              In essence, my journey in Quality Assurance is more than a profession—it's a dedication to shaping technology that truly makes a positive impact.
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
