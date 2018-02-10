import React, { Component } from 'react';
import styled from 'styled-components';
import { map } from 'lodash';
import sr from 'scrollreveal';
import './index.css';

import LazyLoad from 'react-lazyload';

import github from './github.gif';
import githubStatic from './github.jpg';
import linkedin from './linkedin.gif';
import linkedinStatic from './linkedinStatic.gif';
import email from './email.gif';
import emailStatic from './emailStatic.gif';
import resume from './resume.gif';
import resumeStatic from './resumeStatic.gif';
import phone from './phone.gif';
import phoneStatic from './phoneStatic.gif';

class Fastbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const options = {
      duration: 800,
      origin: "bottom",
      distance: "50px",
      mobile: false
    }

    sr().reveal(this.refs.fastbarReveal, options)
    this.height = this.refs.fastbarReveal.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop);

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop < this.height && this.state.fixed !== 0) {
      this.setState({ ...this.state, fixed: false });
    }
    else if (scrollTop >= this.height && this.state.fixed !== 1) {
      this.setState({ ...this.state, fixed: true });
    }
  }

  render() {
    const { fixed } = this.state;
    return (
      <div ref="fastbarReveal">
        <Container className={fixed ? "fastbar fixed" : "fastbar"}>
          <div className="fastbar-background"/>
          {
            map(links, ({ action, animatedImage, staticImage, method, target }, name) => (
              <Item fixed={fixed} key={name}>
                <form method={method} action={ action } target={target} className="hvr-shadow hvr-grow">
                  <Button fixed={fixed} type="submit">
                    <LazyLoad><Image className="animated-image" height="50px" src={animatedImage}/></LazyLoad>
                    <Image className="static-image" height="50px" src={staticImage}/>
                    <span>{ name }</span>
                  </Button>
                </form>
              </Item>)
            )
          }
        </Container>
        <div className="fastbar-mobile">
          {
            map(links, ({ action, method, target }, name) => (
              <form key={name} method={method} action={ action } target={target} className="hvr-shadow hvr-grow">
                <Button fixed={fixed} type="submit">
                  <span>{ name }</span>
                </Button>
                <div style={{ margin: "2px 0 4px 0", alignSelf: 'stretch', width: "1px", backgroundColor: "black"}}/>
              </form>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Fastbar;

// const float = keyframes`
//   0%, 100% { transform: translateY(0); }
//   50% { transform: translateY(6px); }
// `;
//
// const float2 = keyframes`
//   0%, 100% { transform: translateX(0); }
//   50% { transform: translateX(2px); }
// `;
// animation: ${props => props.fixed ? "" : `${float2} 4s infinite, ${float} 3.5s infinite`};
const Item = styled.span`
  &:nth-child(2n) {
    animation-delay: -3s;
    animation-duration: 3.8s;
  }
  &:nth-child(3n) {
    animation-delay: -1s;
    animation-duration: 4.2s;
    animation-direction: reverse;
  }
  &:nth-child(5n) {
    animation-delay: -2s;
    animation-duration: 4s;
  }

  & * {
    transition: 0.3s ease;
  }

  & button {
    width: 100%;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    & span {
      color: #000;
      text-decoration: none;
      font-size: 16px;
    }
  }
`;

const Container = styled.div`
  & * {
    transition: 0.5s ease;
  }
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;

  & .animated-image {
    display: none;
  }
  & .static-image {
    display: block;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    & .animated-image {
      display: block;
    }
    & .static-image {
      display: none;
    }
  }
`;

const Image = styled.img`
  margin-bottom: 8px;
`;


const links = {
  GitHub: {
    action: "https://www.github.com/ZhengRaymond",
    animatedImage: github,
    staticImage: githubStatic,
    target: "_blank"
  },
  LinkedIn: {
    action: "https://www.linkedin.com/in/ZhengRaymond/",
    animatedImage: linkedin,
    staticImage: linkedinStatic,
    target: "_blank"
  },
  Resume: {
    action: "https://github.com/ZhengRaymond/resume/raw/master/Raymond%20Zheng's%20Resume.pdf",
    method: "get",
    animatedImage: resume,
    staticImage: resumeStatic
  },
  Email: {
    action: "mailto:zhengraymond@outlook.com",
    animatedImage: email,
    staticImage: emailStatic
  },
  Phone: {
    action: "tel:+5105841528",
    animatedImage: phone,
    staticImage: phoneStatic
  }
}
