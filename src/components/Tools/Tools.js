import React from 'react'
import './Tools.css';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import jiraLogo from '../../images/jira_logo.png';
import appiumLogo from '../../images/appium_logo.png';
import githubLogo from '../../images/github_logo.png';
import confluenceLogo from '../../images/confluence_logo.png';
import postmanLogo from '../../images/postman_logo.png';
import proxymanLogo from '../../images/proxyman_logo.png';
import qaseLogo from '../../images/qase_logo.png';
import slackLogo from '../../images/slack_logo.png';
import teamsLogo from '../../images/teams_logo.png';
import testrailLogo from '../../images/testrail_logo.png';
import visualStudioLogo from '../../images/visual_studio_logo.png';
import browserstackLogo from '../../images/browserstack_logo.png';


export const Tools = () => {
  return (
    <div className="toolsContainer">
      
      <Grid container spacing={2} columns={{ xs: 2, sm: 2, md: 12}} className="toolsCardContainer">
          <Grid item xs={2} sm={4} md={4}>
            <Card className="toolCard">
              <CardContent>
                <img src={jiraLogo} alt="Jira logo"></img>
                <p>
                  Jira is a software application that allows teams, mostly development one, to track issues, manage projects, and automate workflows.
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
              <Card className="toolCard">
                <CardContent>
                  <img src={confluenceLogo} alt="Confluence logo" style={{width: "200px"}}></img>
                  <p>
                    Workspace where knowledge and collaboration meet. Commonly used as a platform that allows teams to write and store documentation.
                  </p>
                </CardContent>
              </Card>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
              <Card className="toolCard">
                <CardContent>
                  <img src={testrailLogo} alt="TestRail logo" style={{width: "135px"}}></img>
                  <p>
                    Web-based test case management tool. It is used by testers, developers and team leads to manage, track, and organize software testing efforts.
                  </p>
                </CardContent>
              </Card>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
              <Card className="toolCard">
                <CardContent>
                  <img src={postmanLogo} alt="Postman logo" style={{width: "175px"}}></img>
                  <p>
                    Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration.
                  </p>
                </CardContent>
              </Card>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
              <Card className="toolCard">
                <CardContent>
                  <img src={proxymanLogo} alt="Proxyman logo" style={{width: "200px"}}></img>
                  <p>
                    Man-in-the-middle server that logs the traffic between an applications and SSL Web Server. Ideal to inspect HTTP/HTTPS Request and Responses.
                  </p>
                </CardContent>
              </Card>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
              <Card className="toolCard">
                <CardContent>
                  <img src={qaseLogo} alt="Qase logo" style={{width: "170px"}}></img>
                  <p>
                    Qase is a modern test management tool built for QA and Dev teams with a modern and simple interface and powerful features.
                  </p>
                </CardContent>
              </Card>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
              <Card className="toolCard">
                <CardContent>
                  <img src={slackLogo} alt="Slack logo" style={{width: "200px"}}></img>
                  <p>
                    Communication platform and collaboration hub. It includes instant messaging, voice and video calls, to help groups share information.
                  </p>
                </CardContent>
              </Card>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
              <Card className="toolCard">
                <CardContent>
                  <img src={teamsLogo} alt="Teams logo" style={{width: "190px"}}></img>
                  <p>
                    Messaging app for any organization. A workspace for real-time collaboration and communication, meetings, file and app sharing.
                  </p>
                </CardContent>
              </Card>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
              <Card className="toolCard">
                <CardContent>
                  <img src={visualStudioLogo} alt="Visual Studio logo" style={{width: "300px"}}></img>
                  <p>
                    Combines the simplicity of a source code editor with powerful developer tooling, like IntelliSense code completion and debugging.
                  </p>
                </CardContent>
              </Card>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
              <Card className="toolCard">
                <CardContent>
                  <img src={githubLogo} alt="Github logo" style={{width: "170px"}}></img>
                  <p>
                    Website and cloud-based service that helps developers store and manage their code, as well as track and control changes to their code.
                  </p>
                </CardContent>
              </Card>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
              <Card className="toolCard">
                <CardContent>
                  <img src={appiumLogo} alt="Appium logo" style={{width: "115px"}}></img>
                  <p>
                    Open-source tool for automating native, mobile web, and hybrid applications on iOS mobile, Android mobile, and Windows desktop platforms.
                  </p>
                </CardContent>
              </Card>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
              <Card className="toolCard">
                <CardContent>
                  <img src={browserstackLogo} alt="Browserstack logo" style={{width: "95px"}}></img>
                  <p>
                    Cross-browser testing platform that lets testers integrate tools to perform automated, visual, and live testing across mobile applications and websites.
                  </p>
                </CardContent>
              </Card>
          </Grid>
      </Grid>
    </div>
  )
}

