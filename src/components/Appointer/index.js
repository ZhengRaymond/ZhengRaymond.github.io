import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Calendar from './calendar';
import Time from './time';
import Result from './result';
import CalendarIcon from 'react-icons/lib/fa/calendar';

class Appointer extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true }
    this.open = () => this.setState({ open: true });
    this.close = (e) => {
      this.setState({ open: false });
      e.stopPropagation();
    }
  }

  render() {
    return (
      <FloatBottomLeft onClick={this.open} className={this.state.open ? "active": ""}>
        <div>
          <CalendarIconAnimate/>
        </div>
        <div>
          <DatePicker onClose={this.close}/>
        </div>
      </FloatBottomLeft>
    )
  }
}

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openTab: 0,
      activeTime: null,
      activeDate: null
    }
    this.setDate = (date) => {
      this.setState({ ...this.state, openTab: 1, activeDate: date });
    }
    this.setTime = (time) => {
      this.setState({ ...this.state, activeTime: time });
    }
    this.setTab = (tab) => {
      this.setState({ ...this.state, openTab: tab });
    }
    this.onSubmit = (e, data) => {
      this.props.onClose(e);
    }
  }

  render() {
    return (
      <div style={{overflowX: "hidden"}}>
        <Container openTab={this.state.openTab}>
          <Calendar onClick={this.setDate} setTab={this.setTab}/>
          <Time onClick={this.setTime} setTab={this.setTab}/>
          <Result onClick={this.onSubmit} onSubmit={this.onSubmit} setTab={this.setTab}/>
        </Container>
      </div>
    )
  }
}

export default Appointer;

const Container = styled.div.attrs({
  translate: props => -1 * props.openTab * 33.333 + "%"
})`
  display: flex;
  align-items: stretch;
  width: 300%;
  flex-wrap: no-wrap;
  & > div {
    width: 100%;
  }

  transform: translateX(${props => props.translate});
  transition: 0.5s ease;
`;





const FloatBottomLeft = styled.div`
  position: fixed;
  bottom: -80px;
  left: -80px;
  width: 160px;
  height: 160px;
  border-radius: 80px;
  background-color: #03A9F4;
  animation: ${expand} 4s infinite;
  box-shadow: 2px 4px 10px 2px #777;
  box-sizing: border-box;
  transition: 0.5s ease;
  cursor: pointer;
  z-index: 99;

  &.active {
    cursor: default;
    bottom: -300px;
    left: -300px;
    width: 600px;
    height: 600px;
    border-radius: 2px;
    animation: none;
    transition: 0.3s ease;
    padding-left: 300px;
    padding-bottom: 300px;
    background-color: white;

    & > div:first-child {
      opacity: 0;
      display: none;
    }
    & > div:last-child {
      opacity: 1;
      display: block;
    }
  }

  & > div:first-child {
    opacity: 1;
    display: block;
  }
  & > div:not(:first-child) {
    opacity: 0;
    display: none;
  }
`;

const CalendarIconAnimate = styled(CalendarIcon)`
  color: white;
  width: 40px;
  height: 40px;
  margin: 27px 27px 93px 93px;
`;

const expand = keyframes`
  0%, 65%, 100% {
    transform: scale(1);
  }
  75% {
    transform: scale(0.95);
  }
  82% {
    transform: scale(1.05);
  }
`;

// const CloseButton = styled.div`
//   position: absolute;
//   right: 2px;
//   top: 5px;
//   width: 30px;
//   height: 30px;
//   border-radius: 15px;
//   border: solid 1px #888;
//
//   & button {
//     font-size: 15px;
//     color: #444;
//     cursor: pointer;
//     border: none;
//     background-color: white;
//   }
//
//   &:hover button {
//     color: red;
//   }
// `;
