import React, { Component } from 'react';

import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

import covidImage from './images/covidImage.png';
import covid from './images/covid.png';
import covid1 from './images/anothercovid.png';



class Projects extends Component {

    //because this is a class with a state, we need a constructor
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'rgba(255,255,255,1)', height: '176px', background:`url(${covid1}) center`, paddingTop:'40px !important' }}></CardTitle>
                        <CardText>This is a COVID-19 tracker. I used an API to pull the data. <b>Leveraged Tools: ChartJS, HTML/CSS, Material-UI, React.js</b></CardText>
                        <CardActions border style={{ textAlign: 'center' }}>
                            <Button colored>Github</Button>
                            <Button colored>Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}><IconButton name="share" /></CardMenu>
                    </Card>
                    {/* <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px' }}>HTML/CSS2</CardTitle>
                        <CardText>Dilan's first project in React</CardText>
                        <CardActions border style={{ textAlign: 'center' }}>
                            <Button colored>Github</Button>
                            <Button colored>Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}><IconButton name="share" /></CardMenu>
                    </Card> */}
                    {/* <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center /cover' }}>HTML/CSS3</CardTitle>
                        <CardText>Dilan's first project in React</CardText>
                        <CardActions border style={{ textAlign: 'center' }}>
                        <Button colored>Github</Button>
                        <Button colored>Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}><IconButton name="share" /></CardMenu>
                    </Card> */}
                    {/* <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center /cover' }}>HTML/CSS4</CardTitle>
                        <CardText>Dilan's first project in React</CardText>
                        <CardActions border style={{ textAlign: 'center' }}>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}><IconButton name="share" /></CardMenu>
                    </Card> */}
                </div>


            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center /cover', paddingTop:'40px !important' }}>ReactJS1</CardTitle>
                    <CardText>Dilan's first project in React</CardText>
                    <CardActions border style={{ textAlign: 'center' }}>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}><IconButton name="share" /></CardMenu>
                </Card>
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center /cover' }}>ReactJS2</CardTitle>
                    <CardText>Dilan's first project in React</CardText>
                    <CardActions border style={{ textAlign: 'center' }}>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}><IconButton name="share" /></CardMenu>
                </Card>
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center /cover' }}>ReactJS3</CardTitle>
                    <CardText>Dilan's first project in React</CardText>
                    <CardActions border style={{ textAlign: 'center' }}>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}><IconButton name="share" /></CardMenu>
                </Card>
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center /cover' }}>ReactJS4</CardTitle>
                    <CardText>Dilan's first project in React</CardText>
                    <CardActions border style={{ textAlign: 'center' }}>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}><IconButton name="share" /></CardMenu>
                </Card>
            </div>

            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
             
               
            </div>

            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                
               
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center /cover' }}>MongoDB4</CardTitle>
                    <CardText>Dilan's first project in React</CardText>
                    <CardActions border style={{ textAlign: 'center' }}>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}><IconButton name="share" /></CardMenu>
                </Card>
            </div>

            )
        }
    }


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    {/* <Tab style={{fontFamily: 'Cutive Mono', fontWeight: 'bold', fontSize: '17px'}}>HTML/CSS</Tab> */}
                    <Tab style={{fontFamily: 'Cutive Mono', fontWeight: 'bold',fontSize: '17px'}}>ReactJS</Tab>
                    {/* <Tab style={{fontFamily: 'Cutive Mono', fontWeight: 'bold',fontSize: '17px'}}>NodeJS</Tab> */}
                    {/* <Tab style={{fontFamily: 'Cutive Mono', fontWeight: 'bold',fontSize: '17px'}}>MongoDB</Tab> */}
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>




            </div>
        )
    }
}

export default Projects;