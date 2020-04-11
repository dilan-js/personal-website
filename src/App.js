import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

// Current issues: 
// 1) I want to be able to add projects through the front-end through some kind of form? 




function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link style={{ textDecoration: 'none', fontFamily: 'Cutive Mono', fontWeight: 'bold', paddingTop:'15px', paddingBottom: '15px', paddingLeft: '30px', paddingRight:'30px', fontSize:'25px', top:'50px', borderRadius:'10px'}} to='/'>Home</Link>} scroll>
            <Navigation>
              {/* <Link to="/aboutme">About Me</Link> */}
              {/* <Link to="/resume">Resume</Link> */}
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact Me</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link style={{ textDecoration: 'none', color: 'black', paddingTop:'15px', paddingBottom: '15px', paddingLeft: '30px', paddingRight:'30px', marginLeft:'30px' }} to='/'>Home</Link>}>
            <Navigation>
              {/* <Link to="/aboutme">About Me</Link> */}
              {/* <Link to="/resume">Resume</Link> */}
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact Me</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main></Main>
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
