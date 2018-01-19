import React from 'react';
import styled, { keyframes } from 'styled-components';
import ArrowDownIcon from 'react-icons/lib/fa/angle-double-down';
import Reveal from '../ScrollReveal';

class ScrollDownArrow extends React.Component {
  render() {
    return (
      <Reveal options={{ duration: 500, reset: true, viewFactor: 1, mobile: true }} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "-40vh" }}>
        <Arrow/>
        <Ripple>
          <div/><div/>
        </Ripple>
      </Reveal>
    )
  }
}

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const ripple = keyframes`
  0% {
    opacity: 1;
    transform: scale(0.1);
  }
  40% {
    transform: scale(2);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;
const rippleSmall = keyframes`
  0% {
    opacity: 0.6;
    transform: scale(0.1);
  }
  40% {
    transform: scale(1);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const Arrow = styled(ArrowDownIcon)`
  opacity: ${props => props.opacity};
  font-size: 30px;
  animation: ${bounce} 2s infinite;
  transition: 0.5s ease;
  color: #555;
  position: absolute;
  bottom: 30px;
  margin-bottom: -30px;
`;

const Ripple = styled.div`
  position: absolute;
  bottom: 0;
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & div {
    position: absolute;
    opacity: 0;
    bottom: 0px;
    margin-bottom: -30px;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    box-shadow: 0 0 20px 1px black;
    &:first-child {
      animation: ${ripple} 2s cubic-bezier(.2, .75, .62, .94) infinite;
      animation-delay: 1s;
    }
    &:last-child {
      animation: ${rippleSmall} 2s cubic-bezier(.2, .75, .62, .94) infinite;
      animation-delay: 1.45s;
    }
  }
`;


export default ScrollDownArrow;
