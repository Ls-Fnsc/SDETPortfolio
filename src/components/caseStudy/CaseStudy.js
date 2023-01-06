import React from 'react'
import './CaseStudy.css';

import Grid from '@mui/material/Grid';

import kickstarterMockup from '../../images/kickstarter_android.png';
import qaseMockup from '../../images/test_case_qase.png';
import appiumMockup from '../../images/appium_intellij.png';

export const CaseStudy = () => {
  return (
    <div className="caseStudyContainer">
        <h2>Case study: Kickstarter</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <div className="kickstarterRow">
            <Grid container spacing={4} columns={{ xs: 2, sm: 2, md: 8}}>
                <Grid item xs={2} sm={4} md={4} order={{ xs: 2, sm: 2, md: 1 }}>
                    <h3>Understanding the app</h3>
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
                    <button className="callToAction">
                        SEE MORE!
                    </button>
                </Grid>
                <Grid item xs={2} sm={4} md={4} className="mockupContainer" order={{ xs: 1, sm: 1, md: 2 }}>
                    <img src={kickstarterMockup} alt="Kickstarter app on Android device"></img>
                </Grid>
            </Grid>
        </div>

        <div className="qaseRow">
            <Grid container spacing={4} columns={{ xs: 2, sm: 2, md: 8}}>
                <Grid item xs={2} sm={4} md={4}>
                    <img src={qaseMockup} alt="Test case management tools Qase"></img>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <h3>Writing the test cases</h3>
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
                    <button className="callToAction">
                        SEE MORE!
                    </button>
                </Grid>
            </Grid>
        </div>

        <div className="appiumRow">
            <Grid container spacing={4} columns={{ xs: 2, sm: 2, md: 8}}>
                <Grid item xs={2} sm={4} md={4} order={{ xs: 2, sm: 2, md: 1 }}>
                    <h3>Test automation</h3>
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
                    <button className="callToAction">
                        SEE MORE!
                    </button>
                </Grid>
                <Grid item xs={2} sm={4} md={4} order={{ xs: 1, sm: 1, md: 2 }}>
                    <img src={appiumMockup} alt="Appium automation code in Intelli J"></img>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}