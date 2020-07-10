import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { map } from 'lodash';
import Reveal from '../ScrollReveal';

// @supports (display: grid) {
//    // code that will only run if CSS Grid is supported by the browser
// }

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
    this.handleReveal = (domEl) => {
      this.setState({ show: true });
      this.forceUpdate();
    }
  }

  render() {
    const colors = [
      "#03A9F4",
      "#9C27B0",
      "#E91E63",
      "#ffc107",
      "#80ff84",
    ]
    return (
      <Grid options={{ mobile: true, viewFactor: 0.5, origin: "top", distance: "100px", afterReveal: this.handleReveal }} interval={150} reveal="project-tile-reveal">
        <Title className="project-tile-reveal" show={this.state.show}>
						{this.props.name}
				</Title>
        {
          map(this.props.projects, (project, index) => (
            <a key={project.title} href={project.link} target="_blank" style={{ textDecorationColor: colors[index % 5] }}>
              <Tile className="project-tile-reveal">
                <div><div><img width="130px" height="130px" src={project.img} style={{ "z-index": "-1"}}/></div></div>
                <div>
									<div style={{ "font-weight": "normal", "font-size": "1.4em"}}>{ project.title }</div>
                  {
                    map(project.details, (detail, index) => (
                      <div style={{ margin: "10px 0", overflow: "hidden"}} key={"detail"+index}>{ detail }</div>
                    ))
                  }
                </div>
              </Tile>
            </a>
          ))
        }
      </Grid>
    )
  }
}

const Grid = styled(Reveal)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: auto repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 40px;
  width: 100%;
  justify-items: stretch;
  align-items: stretch;
  justify-content: center;
  align-content: center;
`;

const Tile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  width: 100%;
  height: 250px;
  border: solid 1px #ddd;
  padding: 10px 15px;
  box-sizing: border-box;

  background-color: white;
  color: black;
  transition: 0.5s ease;
  cursor: pointer;
  font-size: 18px;
  font-weight: lighter;

  & * { transition: 0.5s ease; }

  & > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.96);
    font-size: 40px;
  }

  &:hover {
    & > div:first-child {
      & div {
        transform: scale(0.8);
      }
      opacity: 0.2;
    }

    &::before, &::after {
      width: 100%;
      height: 100%;
    }
    &::before {
      border-top-color: black;
      border-right-color: black;
      transition: width 0.15s ease-out, height 0.15s ease-out 0.15s, border-color 0.2s;
    }
    &::after {
      border-bottom-color: black;
      border-left-color: black;
      transition: width 0.15s ease-out, height 0.15s ease-out 0.15s, border-color 0.2s;
    }
  }

  &::before, &::after {
    content: "";
    box-sizing: inherit;
    position: absolute;
    border: solid 2px transparent;
    width: 0;
    height: 0;
    transition: height 0.25s ease-out, width 0.25s ease-out 0.25s, border-color 0.5s;
  }
  &::before {
    top: 0;
    left: 0;
  }
  &::after {
    bottom: 0;
    right: 0;
  }
`;

const squareIn = keyframes`
  0% {
    width: 0;
    height: 0;
  }
  20% {
    width: 0;
  }
  60% {
    width: 100%;
    height: 0;
  }
  100% {
    height: 100%;
  }
`;

const Title = styled.div`
  display: ${props => props.show ? "flex" : "none"};
  justify-content: center;
  align-items: center;
	width: 265.312px;
	height: 250px;
  position: relative;
  font-size: 4em;
  background-color: black;
  color: white;
  box-sizing: border-box;

  &::before, &::after {
    content: "";
    box-sizing: inherit;
    position: absolute;
    border: solid 2px transparent;
		width: 265.312px;
		height: 250px;
    animation: ${squareIn} 1s ease-in;
  }
  &::before {
    border-top-color: black;
    border-right-color: black;
    top: 0;
    left: 0;
  }
  &::after {
    border-bottom-color: black;
    border-left-color: black;
    bottom: 0;
    right: 0;
  }
`;

export default Projects;
