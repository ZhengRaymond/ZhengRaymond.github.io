import React, { Component } from 'react';
import './App.css';
import { Greeting, Fastbar, ScrollDownArrow, Page, Work, Projects } from './components';
import { Fade } from 'react-reveal';
import { map } from 'lodash';
import { incompleteWork, work, projects } from './data.json';
import EtsyIcon from './Etsy.jpeg';
import GenesysIcon from './Genesys.jpg';
import HomerIcon from './Homer.png';
import AppdirectIcon from './Appdirect.svg';

const iconsIncomplete = [
  EtsyIcon,
  HomerIcon,
];

const icons = [
  AppdirectIcon,
  GenesysIcon
];

class App extends Component {
  render() {
    return (
      <Fade className="App" duration={1750}>
        <Page top={true}>
          <Greeting text="Raymond Zheng"/>
          <div className="fastbarLine"/>
          <Fastbar/>
          <ScrollDownArrow/>
        </Page>
        <Page unlimited={true}>
          <Greeting text="Work"/>
          <div style={{ display: "flex", marginBottom: "100px" }}>
            {
              map(incompleteWork, (data, index) => (
                <Work key={data.title} index={index} data={data} incomplete={true} icon={iconsIncomplete[index]}/>
              ))
            }
          </div>
          {
            map(work, (data, index) => (
              <Work key={data.title} index={index} data={data} icon={icons[index]}/>
            ))
          }
        </Page>
        <Page unlimited={true} backgroundColor="white">
          <Projects projects={projects} />
        </Page>
      </Fade>
    );
  }
}

export default App;
