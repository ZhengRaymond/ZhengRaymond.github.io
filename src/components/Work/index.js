// import React, { Component } from 'react';
// import styled from 'styled-components';
// import { map } from 'lodash';
// import Reveal from '../ScrollReveal';
//
// const mobileWidth = 500;
// const tabletWidth = 900;
//
// const Grid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-items: center;
//   align-items: center;
// 	width: 70%;
// 	padding: 50px;
// `;
//
// const Panel = styled.div`
//   width: 100%;
//   margin-bottom: 30px;
//   display: flex;
// `;
//
// const Title = styled(Reveal)`
// 	a {
// 	  font-size: 2em;
// 		color: black;
// 		line-height: 0.7;
// 		display: inline-block;
// 		margin-bottom: 10px;
// 		text-decoration: none;
// 		border-bottom: 1px solid currentColor;
// 	  font-weight: lighter;
// 		text-shadow:
//     2px 2px white,
//     2px -2px white,
//     -2px 2px white,
//     -2px -2px white;
// 	}
// `;
//
// const Icon = styled(Reveal)`
//   margin: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   grid-row: span 2;
//
//   & img {
//     width: 30vmin;
//     height: 30vmin;
//     max-width: 250px;
//     max-height: 250px;
//     border-radius: 150px;
//   }
//
//   @media (max-width: ${tabletWidth}px) {
//     position: relative;
//     & img {
//       margin: 0;
//       top: -30vmin;
//       position: absolute;
//       width: 60vmin;
//       height: 60vmin;
//       opacity: 0.05;
//     }
//   }
//
//   @media (max-width: ${tabletWidth}px) {
//     position: relative;
//     & img {
//       margin: 0;
//       position: absolute;
//       width: 80vmin;
//       height: 80vmin;
//       opacity: 0.05;
//     }
//   }
// `;
//
// const Date = styled(Reveal)`
//   font-weight: lighter
// `;
//
// class Work extends Component {
//   render() {
//     return (
//       <Grid>
//         {map(
// 					this.props.data_work,
// 					({ title, link, date, img }, index) => (
// 						<Panel>
// 							<img width="50" height="50" src={require(`../../assets/${img}`)}/>
// 							<div style={{display: "flex", "flex-direction": "column", padding: "0 15px", "justify-content": "space-evenly"}}>
// 								<Title><a href={link}>{title}</a></Title>
// 								<Date>{date}</Date>
// 							</div>
// 						</Panel>
//           )
//       	)}
//       </Grid>
//     );
//   }
// }
//
//
// export default Work;
