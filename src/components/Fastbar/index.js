import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { map } from 'lodash';
import sr from 'scrollreveal';
import './index.css';

import github from './github.gif';
import linkedin from './linkedin.gif';
import email from './email.gif';
import resume from './resume.gif';
// import phone from './phone.gif';
import instagram from './instagram.gif';

class Fastbar extends Component {

	constructor(props) {
    super(props);
		this.state = {
			past_first: false
		}
		this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const options = {
      duration: 800,
      origin: "bottom",
      distance: "0px",
      mobile: false,
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
    if (scrollTop < this.height && this.state.past_first) {
      this.setState({ ...this.state, past_first: false });
    }
    else if (scrollTop >= this.height && !this.state.past_first) {
      this.setState({ ...this.state, past_first: true });
    }
  }

  render() {
    return (
			<FadeIn>
				<QuickNav className={this.state.past_first ? "" : "hidden"}>
				{
					map(links, ({ action, animatedImage, method, target }, name) => (
						<a target="_blank" rel="noopener noreferrer" href={action} className="hvr-grow"><img alt={action} className="animated-image" height="30px" width="30px" src={animatedImage}/></a>
					))
				}
				</QuickNav>
	      <div ref="fastbarReveal" style={{ width: "50vw" }}>
	        <Container className="fastbar">
	          <div className="fastbar-background"/>
	          {
	            map(links, ({ action, animatedImage, method, target }, name) => (
	              <Item style={{ width: "100%", "margin-left": "0", "margin-right": "0" }} key={name}>
	                <form style={{ width: "100%" }} method={method} action={ action } target={target} className="hvr-grow">
	                  <Button type="submit">
	                    <Image className="animated-image" height="50px" width="50px" src={animatedImage}/>
	                    <div>{ name }</div>
	                  </Button>
	                </form>
	              </Item>)
	            )
	          }
	        </Container>
	        <div className="fastbar-mobile">
	          {
	            map(links, ({ action, method, target }, name) => (
	              <form key={name} method={method} action={ action } target={target} className="hvr-grow">
	                <Button type="submit">
	                  <span>{ name }</span>
	                </Button>
	                <div style={{ margin: "2px 0 4px 0", alignSelf: 'stretch', width: "1px", backgroundColor: "black"}}/>
	              </form>
	            ))
	          }
	        </div>
	      </div>
			</FadeIn>
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
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;

  & * {
    transition: 0.5s ease;
  }
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
	justify-content: space-around;
  &:focus {
    outline: none;
  }
`;

const Image = styled.img`
  margin-bottom: 8px;
`;


const links = {
  GitHub: {
    action: "https://www.github.com/ZhengRaymond",
    animatedImage: github,
    // staticImage: githubStatic,
    target: "_blank"
  },
  LinkedIn: {
    action: "https://www.linkedin.com/in/ZhengRaymond/",
    animatedImage: linkedin,
    // staticImage: linkedinStatic,
    target: "_blank"
  },
  Resume: {
    action: "https://github.com/ZhengRaymond/resume/raw/master/Raymond%20Zheng's%20Resume.pdf",
    method: "get",
    animatedImage: resume,
    // staticImage: resumeStatic
  },
  Email: {
    action: "mailto:raymond.zheng.8@gmail.com",
    animatedImage: email,
    // staticImage: emailStatic
  },
  Instagram: {
    action: "https://www.instagram.com/codetojoy/",
    animatedImage: instagram,
    // staticImage: instagramStatic
  },
  // Phone: {
  //   action: "tel:+5105841528",
  //   animatedImage: phone,
  //   staticImage: phoneStatic
  // }
}

const fadein = keyframes`
 0% {
	 opacity: 0;
 }
 80% {
	 opacity: 0;
 }
 100% {
	 opacity: 1;
 }
`

const FadeIn = styled.div`
	& {
		font-family: 'Source Code Pro', monospace;
	}
 	animation: ${fadein} 3s ease-in;

	/* This is for QuickNav: */
	.hidden {
		opacity: 0;
		transform: translateX(100px);
		transition: 0.5s ease;
	}
`;

const QuickNav = styled.div`
	display: flex;
	flex-direction: column;

	a {
		margin: 0px 0;
	}

	position: fixed;
	top: 5px;
	right: 5px;
	transition: 0.5s ease;
	cursor: pointer;
	z-index: 1;
`;
