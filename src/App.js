import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Project from "./components/Project";
import ALink from './components/ALink';
import Tooltip from "./components/Tooltip";
// my projects
import myProjects from "./assets/Projects.js";




class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <div style={{ width: '80%', margin: '0 auto' }}> */}
        <Section bg='rgb(5,155,25)'>
          <h2>About Me</h2>
          <p>My name is Matthew Bertrandt. I am a 22 year old Graduate at UofA's Coding Boot-camp Cohort. Coding has been a part of my life for around 8-9 years when I got my first TI-83 calculator. Teamwork has been a strong skill of mine from syncing up beats in drum-line to creating sweet programming projects with other talented individuals.</p>
        </Section>
        <Section bg='#555da2'>
          <h2>My Skills</h2>
          <div className='skills clearfix'>
            <div className='skillContainer floatL'>
              <ul>
                <li>MySQL</li>
                <li>Sequelize.js</li>
                <li>MongoDB</li>
                <li>Data Structures</li>
                <li>Socket.io</li>
              </ul>
            </div>
            <div className='skillContainer floatR'>
              <ul>
                <li>HTML5/CSS</li>
                <li>Javascript</li>
                <li>Node.js</li>
                <li>Jquery</li>
                <li>React.js</li>
              </ul>
            </div>
          </div>
        </Section>

        {myProjects.map((project, i) => {
          return (
            <Section key={i} bg={project.clr}>
              <Project {...project} />
            </Section>
          )
        })}

        <Section isLast={true}>
          <h2>Contact</h2>
          <p>The best way to contact me is through <Tooltip dataToolTip="matthewbertrandt@gmail.com">My Email</Tooltip> or my <ALink href="https://www.linkedin.com/in/matthew-bertrandt/">
               LinkedIn.</ALink>
          </p>
          <p>You can also call/text me at 
            <span> (480)-369-0847.</span>
          </p>
        </Section>

      </div >
    );
  }
}

export default App;
