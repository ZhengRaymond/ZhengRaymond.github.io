import React, { Component } from 'react';
import styled from 'styled-components';
import { map } from 'lodash';
import moment from 'moment';
import ChevronLeftIcon from 'react-icons/lib/fa/angle-double-left';
import ChevronRightIcon from 'react-icons/lib/fa/angle-double-right';

function getDatesForMonth(month) {
  const days = [];
  const monthNumber = moment().month(month).month();
  const momentIter =  moment().month(month).startOf("month").startOf("week");
  const todayIndex = moment().diff(momentIter, 'days');
  for (var i = 0; i < 35; i++) {
    days.push({
      date: momentIter.clone(),
      isToday: i === todayIndex,
      isDisabled: i < (todayIndex + 2),
      isMonth: momentIter.month() !== monthNumber
    })
    momentIter.add(1, 'day');
  }
  return days;
}

class Calendar extends Component {
  constructor(props) {
    super(props);
    const activeMonth = moment().format("MMMM");
    const days = getDatesForMonth(activeMonth);
    this.state = {
      activeMonth,
      calendar: {
        [activeMonth]: days
      }
    }

    this.changeMonth = (change) => {
      const activeMonth = moment().month(this.state.activeMonth).add(1, "month").format("MMMM");
      if (activeMonth in this.state.calendar) {
        return this.setState({ ...this.state, activeMonth })
      }
      const days = getDatesForMonth(activeMonth);
      this.setState({
        ...this.state,
        activeMonth,
        calendar: {
          ...this.state.calendar,
          [activeMonth]: days
        }
      });
    }
  }

  render() {
    const days = this.state.calendar[this.state.activeMonth];
    return (
      <div>
        <Title>Book a Appointment</Title>
        <CalendarContainer active={this.props.active}>
          <Month>
            <Button onClick={() => this.changeMonth(-1)}><ChevronLeftIcon/></Button>
              {this.state.activeMonth}
            <Button onClick={() => this.changeMonth(1)}><ChevronRightIcon/></Button>
          </Month>
          { map(['Su', 'M ', 'T', 'W', 'Th', 'F', 'Sa'], (day) => <DayLabel key={day}>{day}</DayLabel>) }
          {
            map(days, (day, key) => {
              return (
                <DayContainer
                    key={key}
                    today={day.isToday}
                    disabled={day.isDisabled} month={day.isMonth}
                    onClick={(e) => this.props.onClick(e, day.date)}>
                  { day.date.format("D") }
                </DayContainer>
              )
            })
          }
        </CalendarContainer>
      </div>
    )
  }
}

export default Calendar;

const Title = styled.div`
  font-size: 22px;
  display: flex;
  margin: 5px;
  margin-top: 15px;
  justify-content: center;
`;

const CalendarContainer = styled.div`
  display: grid;
  grid-template-rows: auto repeat(5, 1fr);
  grid-template-columns: repeat(7, 1fr);
  align-items: stretch;
  justify-items: stretch;
  box-sizing: border-box;
  border-collapse: collapse;
  border-bottom: solid 2px #ccc;
  border-left: solid 2px #ccc;
  border-top: solid 1px #ccc;
  border-right: solid 1px #ccc;
  font-family: Helvetica;
  margin: 10px;

  & div {
    border-top: solid 1px #ccc;
    border-right: solid 1px #ccc;
  }
`;

const Month = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  box-shadow: 0 1px 2px 0 #555;
  color: #03a9f4;
  padding: 5px;
  overflow-x: hidden;
  z-index: 2;
  border: none !important;
  grid-column: span 7;
  box-sizing: border-box;
`;

const DayLabel = styled.div`
  display: flex;
  font-weight: bolder;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 5px 3px;
  color: #03A9F4;
  background-color: #eee;
`;

const DayContainer = styled.div.attrs({
  color: props => props.today ? "red" : (props.disabled ? "#777" : (props.month ? "#777" : "#000")),
  backgroundcolor: props => props.disabled ? "#ccc" : "#fff",
  hovercolor: props => props.today ? "red" : (props.disabled ? "#777" : (props.month ? "#777" : "#03a9f4")),
  hoverbackgroundcolor: props => props.disabled ? "#ccc" : "#fff",
  cursor: props => props.disabled ? "default" : "pointer"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 30px;
  box-sizing: border-box;
  cursor: ${props => props.cursor};
  color: ${props => props.color};
  background-color: ${props => props.backgroundcolor};

  &:hover {
    color: ${props => props.hovercolor};
    background-color: ${props => props.hoverbackgroundcolor};
  }

  &:focused {
    background-color: red;
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  color: #555;
  cursor: pointer;
  font-size: 100%;

  &:hover {
    color: #03A9F4;
  }
  &:focused {
    transform: scale(1.05);
  }
`;
