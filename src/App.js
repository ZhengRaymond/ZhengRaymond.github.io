import React, { Component } from 'react';
import './App.css';
import { Greeting, Fastbar, ScrollDownArrow, Page, Work, IncompleteWork, Projects } from './components';
import { map, zipWith } from 'lodash';
import { incompleteWork as incompleteWorkData, work as workData, projects } from './data.json';
import EtsyIcon from './assets/Etsy.jpeg';
import GenesysIcon from './assets/Genesys.png';
import HomerIcon from './assets/Homer.png';
import AppdirectIcon from './assets/Appdirect.svg';
import styled, { keyframes } from 'styled-components';
import sr from 'scrollreveal';

const incompleteWork = zipWith(incompleteWorkData, [ EtsyIcon, HomerIcon ], (item, value) => ({ ...item, icon: value }));
const work = zipWith(workData, [ AppdirectIcon, GenesysIcon ], (item, value) => ({ ...item, icon: value }));

window.onbeforeunload = function(){ window.scrollTo(0,0); }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeInitial: { display: "block" },
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ ...this.state, fadeInitial: "none" }), 1600);
  }

  render() {
    return (
      <div className="App">
        <WhiteFade style={{ display: this.state.fadeInitial }}/>
        <Page top={true}>
          <div style={{ height: "20vh" }}/>
          <Greeting text="Raymond Zheng"/>
          <div style={{ height: "5vh", width: "10px" }}/>
          <Fastbar/>
          <ScrollDownArrow/>
        </Page>
        <Page max="1100px" unlimited={true}>
          <Greeting text="Work"/>
          <IncompleteWork work={incompleteWork}/>
          <Work work={work}/>
        </Page>
        <Page unlimited={true} backgroundColor="white">
          <Projects projects={projects} />
        </Page>
      </div>
    );
  }
}

const fade = keyframes`
  0% {
    opacity: 1;
    display: block;
  }
  100% {
    opacity: 0;
    display: block;
  }
`;

const WhiteFade = styled.div`
  position: absolute;
  width: 105vw;
  height: 105vh;
  z-index: 9999;
  top: -5px;
  left: -5px;
  background-color: white;
  opacity: 0;
  animation: ${fade} 2s ease;
`;

export default App;
