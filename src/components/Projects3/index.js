// import React, { Component } from 'react';
// import styled from 'styled-components';
// import { Fade } from 'react-reveal';
// import { map } from 'lodash';
//
// // @supports (display: grid) {
// //    // code that will only run if CSS Grid is supported by the browser
// // }
//
// class Projects3 extends Component {
//   render() {
//     return (
//       <Grid>
//         <Title>Projects</Title>
//         {
//           map(this.props.projects, (project, index) => (
//             <Tile>
//               <div>{ project.title }</div>
//               <div>
//                 {
//                   map(project.details, (detail) => (<p>{ detail }</p>))
//                 }
//               </div>
//             </Tile>
//           ))
//         }
//       </Grid>
//     )
//   }
// }
// // display: flex;
// // justify-content: center;
// // flex-wrap: wrap;
// // @supports (display: grid) {
//
// const Grid = styled.div`
//   margin: 150px;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-content: center;
// `;
//
// const Tile = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex: 1;
//   margin: 20px;
//
//   min-width: 200px;
//   max-width: 300px;
//   height: 250px;
//
//   background-color: white;
//   color: black;
//   transition: 0.3s ease;
//   border: solid 3px red;
//
//   & * {
//     transition: 0.3s ease;
//   }
//
//   & div {
//     font-size: 15px;
//     font-weight: lighter;
//   }
//
//   & div:first-child {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: absolute;
//     height: 250px;
//     background-color: rgba(255, 255, 255, 0.8);
//     font-size: 24px;
//   }
//
//   &:hover {
//     & div:first-child {
//       transform: scale(1.2);
//       opacity: 0;
//     }
//     box-shadow: 0 0px 10px 3px white;
//   }
// `;
//
// const Row = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: stretch;
// `;
//
// const Title = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   min-width: 200px;
//   max-width: 300px;
//   height: 250px;
//   margin: 20px;
//   flex: 1;
//
//   font-size: 3em;
//   background-color: white;
//   box-sizing: border-box;
//   color: black;
//
//
//   &::before, &::after {
//     content: "";
//     box-sizing: inherit;
//     position: absolute;
//     border: 5px solid transparent;
//     width: 0;
//     height: 0;
//     position: absolute;
//   }
//   &::before {
//     top: 0;
//     left: 0;
//   }
//   &::after {
//     bottom: 0;
//     right: 0;
//   }
//   &:hover {
//     &::before, &::after {
//       width: 100%;
//       height: 100%;
//     }
//     &::before {
//       border-top-color: red;
//       border-right-color: red;
//       transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
//     }
//     &::after {
//       border-bottom-color: red;
//       border-left-color: red;
//       transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;
//     }
//   }
// `;
//
// const Icon = styled(Fade)`
//   flex: 1;
//   margin: 40px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;
//
// const Text = styled(Fade)`
//   flex: 3;
//   margin: 40px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;
//
// const Panel = styled.div`
//   width: 100%;
//   height: 500px;
//   padding: 30px;
//   display: flex;
//   flex-direction: column;
//   border: solid 1px black;
//   align-items: stretch;
// `;
//
// export default Projects;
