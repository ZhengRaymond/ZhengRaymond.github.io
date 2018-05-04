import React, { Component } from 'react';
import { map } from 'lodash';
import styled from 'styled-components';
import moment from 'moment';
import TimePicker from 'material-ui/TimePicker'

class Time extends Component {
  render() {
    const times = []
    for (var i = 0; i < 24; i++) {
      times.push(i);
    }

    return (
      <TimeContainer>
        <h1>Select a Time</h1>
        <div>
          {
            map(times, (time) => (
              <TimeSlot>{ time }:00</TimeSlot>
            ))
          }
        </div>
        <Row>
          <Button onClick={() => this.props.setTab(0)}>BACK</Button>
          <Button onClick={() => this.props.setTab(2)}>Next</Button>
        </Row>
      </TimeContainer>
    )
  }
}

export default Time;

const TimeSlot = styled.div`
  border: solid 1px #aaa;
  padding: 5px;
  display: flex;
  height: 25px;
  width: 100%;
`;

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
  grid-gap: 30px;
  align-items: stretch;
  justify-items: stretch;
  transition: 0.5s ease;
`;
