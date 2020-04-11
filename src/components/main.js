import React from 'react'; //not importing Component b/c this isn't class based component...stateless

import LandingPage from './landingpage';
import { Switch, Route } from 'react-router-dom';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Home from './home';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path = "/home" component={Home}/>
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
    </Switch>

)

export default Main;