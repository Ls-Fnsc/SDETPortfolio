import React from 'react'
import './CaseStudy.css';

import Grid from '@mui/material/Grid';

import qaseMockup from '../../images/test_case_qase.png';
import appiumMockup from '../../images/appium_intellij.png';

export const CaseStudy = () => {
  return (
    <div className="caseStudyContainer">
        <h2>Case study: Kickstarter (Android)</h2>
        <p>
            The goal of this case study is to showcase my ability to understand the requirements of a software product, write test plans and test cases, and develop automation scripts that ultimately help the QA analyst focus on more impactful manual tasks. Kickstarter has been selected because it is an open source project with its source code for iOS, Android and Web available on a public repository.
        </p>
        <div>
            <Grid container spacing={4} columns={{ xs: 2, sm: 2, md: 8}}>
                <Grid item xs={2} sm={4} md={4} className="gridContainer">
                    <img src={qaseMockup} alt="Test case management tools Qase"></img>
                    <p>
                        Qase email: portfoliotestmail001@gmail.com
                        <br/>
                        Qase password: ytO6736D!
                    </p>
                    <a href='https://app.qase.io/project/KICKMOB' target="_blank" rel="noreferrer">
                        <button className="callToAction">
                            CHECK TEST CASES
                        </button>
                    </a>
                </Grid>
                <Grid item xs={2} sm={4} md={4} className="gridContainer">
                    <img src={appiumMockup} alt="Appium automation code in Intelli J"></img>
                    <a href='https://github.com/Ls-Fnsc/Mobile_Appium_Automation' target="_blank" rel="noreferrer">
                        <button className="callToAction" id="scrollContact">
                            CHECK TEST AUTOMATION
                        </button>
                    </a>
                </Grid>
            </Grid>
        </div>
        
    </div>
  )
}