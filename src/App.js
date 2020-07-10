import React, { Component } from 'react';
import './App.css';
import { Element } from "react-scroll";
import { Greeting, Fastbar, Page, Projects, Projects2, Sidebar, Gallery } from './components';
import { Header } from './common';
import { work as data_work, project as data_project } from './data.json';
import { origami as data_origami } from './data_origami.json';
import styled, { keyframes } from 'styled-components';

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
        <WhiteFade style={{ display: this.state.fadeInitial, position: "absolute", left: "110px" }}/>
				<Sidebar/>
				<div>
	        <Page href="#Home" top={true}>
	          <div style={{ height: "20vh" }}/>
	          <Greeting text="raymond_zheng"/>
	          <div style={{ height: "5vh", width: "10px" }}/>
	          <Fastbar/>
	        </Page>
	        <Element name="s_work"><Page unlimited={true} backgroundColor="white">
	          <Projects2 name="Work" projects={data_work}/>
	        </Page></Element>
					<div style={{height:"20vh"}}/>
					<Element name="s_project"><Page unlimited={true} backgroundColor="white">
	          <Projects name="Projects" projects={data_project} />
	        </Page></Element>
					<div style={{height:"20vh"}}/>
					<Element name="s_origami"><Page unlimited={true} backgroundColor="white">
						<Header>Origami</Header>
	          <div style={{width: "60vw"}}>
						<Gallery data={data_origami} />
						</div>
	        </Page></Element>
					<div style={{height:"20vh"}}/>
					<div style={{height:"20vh"}}/>
				</div>
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
