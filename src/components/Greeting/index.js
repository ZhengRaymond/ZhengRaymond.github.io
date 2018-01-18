import React from 'react';
import styled from 'styled-components';
import './index.css';
import { Fade } from 'react-reveal';

const Greeting = (props) => (
  <Fade style={{ display: 'flex', justifyContent: "center", width: "100%"}}>
    <div style={{ position: "relative", margin: "5%" }}>
      <Header className="underline">{ props.text }</Header>
    </div>
  </Fade>
)

const Header = styled.h1`
  font-size: 4em;
  font-weight: lighter;
  @media(max-width: 505px) {
    font-size: 10vw;
  }
`;

export default Greeting;
