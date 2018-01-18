import React from 'react';
import './index.css';
import ArrowDownIcon from 'react-icons/lib/fa/arrow-down';
import { Fade } from 'react-reveal';

const ScrollDownArrow = (props) => (
  <div style={{ position: "absolute", bottom: "3%" }}>
    <Fade bottom delay={3000}>
      <ArrowDownIcon style={{ color: "#222" }} className="bounce"/>
    </Fade>
  </div>
)

export default ScrollDownArrow;
