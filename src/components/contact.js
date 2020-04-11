import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemAction, ListItemContent } from 'react-mdl';
import dilanPicture from './images/dilanemoji.JPG';
import picture5 from './images/me18.png';


class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={12}>
                        <h2>
                            <span className = "c">C</span>
                            <span className = "c">o</span>
                            <span className = "c">n</span>
                            <span className = "c">t</span>
                            <span className = "c">a</span>
                            <span className = "c">c</span>
                            <span className = "c">t</span>
                            <span> </span>
                            <span className = "c">M</span>
                            <span className = "c">e</span></h2>
                        <img src={picture5} alt="A picture of me" className="contactPhoto" style={{ height: '250px' }} />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em', fontSize:'17px', textAlign:'justify', position:'relative' }}>
                        My name is Dilan Nana. I'm currently a sophomore at Stanford University majoring in Computer Science, Class of 2022. I have experiences working as a front-end engineer, UI designer, and full-stack developer. I am familiar with various frameworks such as Express, Django, and Rails. Most recently, I have been honing my skills with ReactJS. </p>
                        <hr/>
                       <div className="email-contact-list">
                           <p>dilannana.js@gmail.com</p>
                           </div>
                           <div className="email-contact-list">
                           <p>dilan99@stanford.edu</p>
                           </div>
                          
                        <div className="contact-list">
                            {/* <List>
                                <ListItem>
                                <ListItemContent style={{ fontSize: '20px', fontFamily: 'Cutive Mono' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                    dilan99@stanford.edu
                                    </ListItemContent>
                                </ListItem>


                                <ListItem>
                                    <ListItemContent style={{ fontSize: '20px', fontFamily: 'Cutive Mono' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        dilannana.js@gmail.com
                                    </ListItemContent>
                                </ListItem>

                            </List> */}
                        </div>
                    </Cell>
                    {/*  */}

                        




                    {/* </Cell> */}
                </Grid>
            </div >
        )
    }
}

export default Contact;