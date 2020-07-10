import React, { Component } from 'react';
import { Link } from "react-scroll";

import styled, { keyframes } from 'styled-components';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { };

  }

  render() {
    return (
			<FloatBox>
				<Col>
					<div class="text"><Link spy={true} to="s_work" activeClass="active" smooth={true} offset={-100}>Work</Link></div>
					<div class="text"><Link spy={true} to="s_project" activeClass="active" smooth={true} offset={-100}>Projects</Link></div>
					<div class="text"><Link spy={true} to="s_origami" activeClass="active" smooth={true} offset={-100}>Origami</Link></div>
			 	</Col>
				<Arrow class="arrow"><div class="arrow">►</div><div class="arrow"></div></Arrow>
			</FloatBox>
    )
  }
}
// <Dots class="dots"><Dot/><Dot/><Dot/></Dots>


const pulse = keyframes`
 0% {
	 box-shadow: 2px 0 6px 5px #eee;
 }
 80% {
	 box-shadow: 2px 0 10px 5px #ddd;
 }
 100% {
	 box-shadow: 2px 0 15px 5px #ccc;
 }
`

const FloatBox = styled.div`
	position: fixed;
	top: 0;
	left: 0px;
	height: 100vh;
	width: 10px;
	box-shadow: 2px 0 10px 5px #bbb;
	transition: 0.5s ease;
	padding: 0 10px;
	background-color: rgb(255, 255, 255, 0.9);
	z-index: 1;
	font-weight: lighter;

	display: grid;
	grid-template-columns: auto 10px;
	align-items: center;

	/* animation: ${pulse} 2s ease-in infinite;
	animation-direction: alternate; */

	.text {
		transform: translateX(-100px);
		opacity: 0;
		width: 0;
		transition: 0.5s ease;
		margin: 8px 0;
		font-size: 1.4em;
	}
	/* .dots {
		transform: translateX(-100px);
		transition: 0.5s ease;
	} */

	.arrow {
		opacity: 1;
		transition: 0.5s ease;
	}

	&:hover {
		box-shadow: 20px 0 40px -30px #ddd;
		width: 130px;
		transition: 0.5s ease;

		.text {
			width: 100px;
			transform: translateX(0);
			opacity: 1;
			transition: 0.5s ease;
		}

		/* .dots {
			opacity: 0.1;
		} */
		.arrow {
			/* opacity: 0; */
			transition: 0.5s ease;
			transform: rotateZ(-180deg);
		}
	}

	& a {
		position: relative;
		color: #000;
		text-decoration: none;
	}
	& a.active {
		color: #000;
	}
	& a::before {
		content: "";
	  position: absolute;
	  width: 100%;
	  height: 1px;
	  bottom: 0;
	  left: 0;
	  background-color: #666;
	  visibility: hidden;
	  transform: scaleX(0);
	  transition: all 0.3s ease-in-out 0s;
	}
	& a.active::before {
		visibility: visible;
  	transform: scaleX(1);
	}

	/* background-color: purple; */
`;

const Col = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;


// const Dots = styled.div`
// 	display: flex;
// 	flex-direction: column;
//
// `;
//
// const Dot = styled.div`
// 	width: 4px;
// 	height: 4px;
// 	border: 2px solid #bbb;
// 	border-radius: 4px;
// 	margin: 2px 0;
// `

const Arrow = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 96vh;
`;

export default Sidebar;
