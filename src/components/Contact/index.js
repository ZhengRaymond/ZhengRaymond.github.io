import React, { Component } from 'react';
import styled from 'styled-components';

class Contact extends Component {
  render() {
    return (
      <div>
        <Title>Interested in hiring me?</Title>
        <Subtitle>I'm searching for 4-month <b>internships in September 2018</b>, and <b>fulltime in 2019</b>.'</Subtitle>
      </div>
    )
  }
}

const Title = styled.div`
  font-size: 3em;
`;

const Subtitle = styled.div`
  font-size: 1.3em;
  margin-top: 5px;
  margin-bottom: 10px;
  font-weight: lighter;
  line-height: 1.4em;
`;
//
// const MyForm = styled.form`
//   display: flex;
//   flex-direction: column;
//
//   & label {
//     margin-top: 15px;
//     margin-bottom: 3px;
//     font-size: 1.3em;
//   }
//
//   & input {
//     width: 300px;
//     border-radius: 5px;
//     padding: 5px;
//     font-size: 1.3em;
//     font-weight: lighter;
//   }
//
//   & textarea {
//     width: 100%;
//     height: 300px;
//   }
// `;

export default Contact;
