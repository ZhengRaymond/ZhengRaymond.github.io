import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';

class Result extends Component {
  render() {
    return (
      <ResultContainer>
        <button onClick={() => this.props.setTab(1)}>Previous</button>
        <button onClick={(e) => this.props.onSubmit(e, "no data")}>Cancel</button>
        <button onClick={(e) => this.props.onSubmit(e, "no data")}>Submit</button>
      </ResultContainer>
    )
  }
}

export default Result;

const ResultContainer = styled.div`
  background-color: purple;
  transition: 0.5s ease;
`;
