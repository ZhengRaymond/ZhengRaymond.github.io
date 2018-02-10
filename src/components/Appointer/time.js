import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';

class Time extends Component {
  render() {
    return (
      <TimeContainer>
        <h1>Select a Time</h1>
        
        <Row>
          <Button onClick={() => this.props.setTab(0)}>BACK</Button>
          <Button onClick={() => this.props.setTab(2)}>Next</Button>
        </Row>
      </TimeContainer>
    )
  }
}

export default Time;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.div`
  border: solid 1px #555;
  border-radius: 2px;
  background-color: white;
  padding: 5px;
`;

const TimeContainer = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr 50px;
  grid-template-columns: 1fr;
  align-items: stretch;
  justify-items: stretch;
  transition: 0.5s ease;
`;
