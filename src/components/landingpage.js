import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import dilanPicture from './images/dilanemoji.JPG';
import picture1 from './images/me11.png';
import picture2 from './images/me8.png';
import picture3 from './images/me10.png';
import picture4 from './images/me14.png';
import picture5 from './images/me18.png';
import picture6 from './images/me7.png';
import picture7 from './images/me5.png';
import Typewriter from 'typewriter-effect';



class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>

                        <img src={picture1} alt="A picture of me" className="avatar" />
                        {/* <img src={picture2} alt="A picture of me" className="avatar" /> */}
                        <img src={picture3} alt="A picture of me" className="avatar" />
                        <img src={picture5} alt="A picture of me" className="avatar" />
                        <img src={picture4} alt="A picture of me" className="avatar" />
                        <img src={picture6} alt="A picture of me" className="avatar" />
                        {/* <img src={picture7} alt="A picture of me" className="avatar" /> */}

                        <div className="banner-text">
                            
                        <Typewriter className="entryText"
                            onInit={(typewriter) => {
                            typewriter.typeString("Hi, I'm Dilan.")
                                .pauseFor(2000)
                                .deleteAll()
                            typewriter.typeString("Welcome to my personal website!")
                            .start();
                             }}
                        />

                            {/* <h1>Hi, I'm Dilan. Welcome to my Full Stack Web Developer</h1> */}

                            <hr />
                            <h2>Full Stack Web Developer </h2>
                            <p>HTML/CSS | Bootstrap | JavaScript | React | ReactNative | NodeJS | Express | MongoDB</p>
                            <hr />
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">
                                    {/* target _blank makes sure a new page opens...not taking user away from my website */}
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* Github */}
                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">
                                    {/* target _blank makes sure a new page opens...not taking user away from my website */}
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/* Github */}
                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">
                                    {/* target _blank makes sure a new page opens...not taking user away from my website */}
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>
                                {/* Github */}
                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">
                                    {/* target _blank makes sure a new page opens...not taking user away from my website */}
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </a>

                            </div>



                        </div>


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;