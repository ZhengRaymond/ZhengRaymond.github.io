import React, { Component } from 'react';
import styled from 'styled-components';
import { map } from 'lodash';
import Reveal from '../ScrollReveal';

class IncompleteWork extends Component {
  render() {
    return (
      <Container>
        {
          map(this.props.work, ({ title, details, completed, link, icon }, index) => (
            <Link key={title} href={link} target="_blank">
              <Icon><div><img alt={title} src={icon}/></div></Icon>
              <Title>{ title }</Title>
              <Text>{details[0]}</Text>
            </Link>
          ))
        }
      </Container>
    );
  }
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(30vw, 1fr));
  @media(max-width: 500px) {
    grid-template-columns: 1fr;
    margin: 0 50px;
  }
  margin-bottom: 100px;
  justify-items: center;
  align-items: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  transition: 0.5s ease;
  margin: 5vmin;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(Reveal)`
  grid-row: span 1;
  grid-column: span 3;
  font-size: 3vw;
  width: 40vw;
  @media (max-width: 700px) {
    width: 50vw;
    font-size: 5vw;
  }
  text-align: center;
  font-weight: lighter;
`;

const Icon = styled(Reveal)`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & img {
    width: 100%;
    height: 100%:
    max-width: 200px;
    max-height: 200px;
    object-fit: contain;
    border-radius: 150px;
    transition: 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
    transition: 0.5s ease;
  }
`;

const Text = styled(Reveal)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: lighter;
  font-size: 2vw;
  @media (max-width: 700px) {
    font-size: 4vw;
  }
`;

export default IncompleteWork;
