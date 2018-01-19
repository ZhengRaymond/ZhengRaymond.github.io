import React from 'react';
import styled from 'styled-components';
import './index.css';
import Reveal from '../ScrollReveal';

const Greeting = (props) => (
  <Reveal>
    <div style={{ display: 'flex', flexDirection: "column", alignItems: "center", width: "100%"}}>
      <Header>{ props.text }</Header>
      <div className="underline"/>
    </div>
  </Reveal>
)

const Header = styled.h1`
  font-size: 9vmin;
  margin-bottom: 8px;
  font-weight: lighter;
  @media(max-width: 700px) {
    font-size: 10vw;
  }
`;

export default Greeting;
