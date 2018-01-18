import React, { Component } from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import { map } from 'lodash';

class Work extends Component {
  render() {
    const { title, details, completed, link } = this.props.data;
    const { icon } = this.props;
    if (!completed) {
      if (this.props.incomplete) return (
        <span style={{ margin: "0 40px"}}>
          <Link href={link} target="_blank">
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
              <Icon><img src={icon}/></Icon>
              <Title>{ title }</Title>
            </div>
          </Link>
        </span>
      );
      else {
        return <span/>
      }
    }
    let content;
    if (this.props.index % 2 === 0) content = (
      <Row>
        <Link href={link} target="_blank">
          <Icon left preventDebounce={true}>
            <img src={icon}/>
          </Icon>
        </Link>
        <Text right preventDebounce={true}>
          { map(details, (detail, index) => (<Detail key={"workDetail"+index}>{ detail }</Detail>)) }
        </Text>
      </Row>
    );
    else content = (
      <Row>
        <Text left preventDebounce={true}  style={{ textAlign: "right" }}>
          { map(details, (detail, index) => (<Detail key={"workDetail"+index}>{ detail }</Detail>)) }
        </Text>
        <Link href={link} target="_blank">
          <Icon right preventDebounce={true}>
            <img src={icon}/>
          </Icon>
        </Link>
      </Row>
    );

    return (
      <Panel completed={completed}>
        <Row>
          <Title preventDebounce={true}>
            <Link href={link} target="_blank">{title}</Link>
          </Title>
        </Row>
        { content }
      </Panel>
    );
  }
}

const Link = styled.a`
  textDecoration: none;
  color: black;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.05);
    transition: 0.5s ease;
  }
`;

const Detail = styled.div`
  margin: 10px;
  font-weight: lighter;
  font-size: 18px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const Title = styled(Fade)`
  font-size: 3em;
  width: 100%;
  text-align: center;
  font-weight: lighter;
`;

const Icon = styled(Fade)`
  flex: 1;
  margin: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & img {
    width: 300px;
    height: 300px;
    background-color: #555;
    border-radius: 150px;
  }
`;

const Text = styled(Fade)`
  flex: 3;
  margin: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Panel = styled.div`
  width: 100%;
  height: ${props => props.completed ? "500px" : "300px"};
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export default Work;
