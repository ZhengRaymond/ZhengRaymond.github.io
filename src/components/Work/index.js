import React, { Component } from 'react';
import styled from 'styled-components';
import { map } from 'lodash';
import Reveal from '../ScrollReveal';

class Work extends Component {
  render() {
    return (
      <Container>
        {
          map(this.props.work, ({ title, details, completed, link, icon }, index) => (
            index % 2 === 0 ? (
              <Panel key={title}>
                <Title>
                  <Link href={link} target="_blank">{title}</Link>
                </Title>
                <Icon options={{ viewFactor: 0.2, origin: "left", distance: "100px" }}>
                  <Link href={link} target="_blank">
                    <img alt={link} src={icon}/>
                  </Link>
                </Icon>
                <Text options={{ origin: "right", distance: "100px" }} interval={100} reveal="work-detail-reveal" >
                  { map(details, (detail, index) => (<Detail className="work-detail-reveal" key={"workDetail"+index}>{ detail }</Detail>)) }
                </Text>
              </Panel>
            ):(
              <Panel key={title}>
                <Title>
                  <Link href={link} target="_blank">{title}</Link>
                </Title>
                <Text options={{ origin: "left", distance: "100px" }} style={{ textAlign: "right" }} interval={100} reveal="work-detail-reveal">
                  { map(details, (detail, index) => (<Detail className="work-detail-reveal" key={"workDetail"+index}>{ detail }</Detail>)) }
                </Text>
                <Icon options={{ viewFactor: 0.2, origin: "right", distance: "100px" }}>
                  <Link href={link} target="_blank">
                    <img alt={link} src={icon}/>
                  </Link>
                </Icon>
              </Panel>
            )
          ))
        }
      </Container>
    );
  }
}

const mobileWidth = 500;
const tabletWidth = 900;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  align-items: center;

  @media(max-width: ${tabletWidth}px) {
    & div:nth-child(1) div img {
      left: -20vw;
      top: 0;
    }
    & div:nth-child(2) div img {
      left: 30vw;
      top: -60vh;
    }
  }
`;

const Panel = styled.div`
  width: 100%;
  margin-bottom: 100px;
  display: grid;
  grid-template-rows: auto 1fr 1fr;
  grid-template-columns: auto auto auto;
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

const Title = styled(Reveal)`
  grid-column: span 3;
  padding: 5px;
  font-size: 3em;
  font-weight: lighter;
  @media (max-width: ${mobileWidth}px) {
    margin: 0;
  }
`;

const Icon = styled(Reveal)`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-row: span 2;

  & img {
    width: 30vmin;
    height: 30vmin;
    max-width: 250px;
    max-height: 250px;
    border-radius: 150px;
  }

  @media (max-width: ${tabletWidth}px) {
    position: relative;
    & img {
      margin: 0;
      top: -30vmin;
      position: absolute;
      width: 60vmin;
      height: 60vmin;
      opacity: 0.05;
    }
  }

  @media (max-width: ${tabletWidth}px) {
    position: relative;
    & img {
      margin: 0;
      position: absolute;
      width: 80vmin;
      height: 80vmin;
      opacity: 0.05;
    }
  }
`;

const Text = styled(Reveal)`
  grid-column: span 2;
  grid-row: span 2;
  align-self: stretch;
  text-shadow: 0 0 4px white;

  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, 1fr);
  @media (max-width: ${tabletWidth}px) {
    grid-column: span 3;
    grid-row: span 3;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.05);
    transition: 0.5s ease;
  }
`;

const Detail = styled.div`
  margin: 10px;
  font-weight: lighter;
  font-size: 18px;
`;

export default Work;
