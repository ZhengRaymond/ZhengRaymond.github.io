import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { map } from 'lodash';
import { Fade } from 'react-reveal';

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
      fixed: 0
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    let elements = document.getElementsByClassName("fastbarLine");
    if (elements.length > 0) {
      this.height = elements[0].getBoundingClientRect().bottom + (window.pageYOffset || document.documentElement.scrollTop);
      this.setState({...this.state, height: this.height });
    }
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    let scrollTop = document.documentElement.scrollTop - 30;
    if (scrollTop < this.height && this.state.fixed !== 0) {
      this.setState({ ...this.state, fixed: 0 });
    }
    else if (scrollTop >= this.height && this.state.fixed !== 1) {
      this.setState({ ...this.state, fixed: 1 });
    }
  }

  render() {
    const { fixed } = this.state;
    let style = {
      width: "50%",
      transition: "width 0.5s ease"
    };
    if (fixed === 1) {
      style = {
        ...style,
        position: "fixed",
        top: "0px",
        width: "100%",
      }
    }
    return (
      <Fade bottom style={style}>
        <Container fixed={fixed}>
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
      </Fade>
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

const Item = styled.span`
  flex: 1;
  max-width: 150px;
  display: flex;
  justify-content: center;
  animation: ${props => props.fixed ? "" : `${float2} 4s infinite, ${float} 3.5s infinite`};

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
    padding: 10px 0.8vw;
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
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  background-color: rgba(255, 255, 255, 0.94);
  height: ${props => props.fixed ? "60px" : "" };
  overflow: ${ props => props.fixed ? "hidden" : "visible" };
  padding-bottom: 10px;
  box-sizing: border-box;

  & span:nth-child(2) span, & span:nth-child(4) span {
    transform: ${props => props.fixed ? "translate(53px, -38px)" : ""};
  }
`;

// flex-direction: ${props => props.fixed ? "row" : "column"};
const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: purple;

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

  & img {
    transition: 0.5s ease;
    transform: ${props => props.fixed ? "scale(0.6)" : ""};
  }

  transform: ${props => props.fixed ? "translate(-30px, 40px)" : ""};

  & span {
    transform: ${props => props.fixed ? "translate(45px, -38px)" : ""};
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
