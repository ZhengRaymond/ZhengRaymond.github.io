import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { map } from 'lodash';
import { Fade } from 'react-reveal';
import sr from 'scrollreveal';
import './index.css';

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
    console.log(this.refs.fastbarReveal.getBoundingClientRect().top, (window.pageYOffset || document.documentElement.scrollTop))
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
                    <Image className="animated-image" height="50px" src={animatedImage}/>
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
              <form method={method} action={ action } target={target} className="hvr-shadow hvr-grow">
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

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`;

const float2 = keyframes`
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(2px); }
`;
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
  Email: {
    action: "mailto:zhengraymond@outlook.com",
    animatedImage: email,
    staticImage: emailStatic
  },
  Resume: {
    action: "https://github.com/ZhengRaymond/resume/raw/master/Raymond%20Zheng's%20Resume.pdf",
    method: "get",
    animatedImage: resume,
    staticImage: resumeStatic
  },
  Phone: {
    action: "tel:+5105841528",
    animatedImage: phone,
    staticImage: phoneStatic
  }
}

// const links = {
//   GitHub: (
//     <form action="https://www.github.com/ZhengRaymond" target="_blank" className="hvr-shadow hvr-grow">
//       <Button type="submit">
//         <Image className="animated-image" height="50px" src={github}/>
//         <Image className="static-image" height="50px" src={githubStatic}/>
//         <span>Github</span>
//       </Button>
//     </form>
//   ),
//   LinkedIn: (
//     <form action="https://www.linkedin.com/in/ZhengRaymond/" target="_blank" className="hvr-shadow hvr-grow">
//       <Button type="submit">
//         <Image className="animated-image" height="50px" src={linkedin} style={{ borderRadius: "15px" }}/>
//         <Image className="static-image" height="50px" src={linkedinStatic} style={{ borderRadius: "15px" }}/>
//         <span>LinkedIn</span>
//       </Button>
//     </form>
//   ),
//   Email: (
//     <form action="mailto:zhengraymond@outlook.com" className="hvr-shadow hvr-grow">
//       <Button type="submit">
//         <Image className="animated-image" height="50px" src={email} style={{ borderRadius: "15px" }}/>
//         <Image className="static-image" height="50px" src={emailStatic} style={{ borderRadius: "15px" }}/>
//         <span>Email</span>
//       </Button>
//     </form>
//   ),
//   Resume: (
//     <form method="get" action="https://github.com/ZhengRaymond/resume/raw/master/Raymond%20Zheng's%20Resume.pdf" className="hvr-shadow hvr-grow">
//        <Button type="submit">
//          <Image className="animated-image" height="50px" src={resume} style={{ borderRadius: "15px" }}/>
//          <Image className="static-image" height="50px" src={resumeStatic} style={{ borderRadius: "15px" }}/>
//          <span>Resume</span>
//        </Button>
//     </form>
//   ),
//   Phone: (
//     <form action="tel:+5105841528" className="hvr-shadow hvr-grow">
//       <Button type="submit">
//         <Image className="animated-image" height="50px" src={phone} style={{ borderRadius: "15px" }}/>
//         <Image className="static-image" height="50px" src={phoneStatic} style={{ borderRadius: "15px" }}/>
//         <span>Phone</span>
//       </Button>
//     </form>
//   )
// }
