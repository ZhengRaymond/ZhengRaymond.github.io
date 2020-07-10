import React from 'react';
import styled, { keyframes } from 'styled-components';
import Reveal from '../ScrollReveal';

const Greeting = (props) => (
  <Reveal>
    <div style={{ display: 'flex', flexDirection: "column", alignItems: "center", width: "100%"}}>
      <Header>{ props.text }</Header>
      <Underline/>
    </div>
  </Reveal>
)

// for i in range(100):
//     if random.random() < 0.8:
//         s += str(i) + "% {\n"
//         s += "\tcolor: " + colors[int(random.random() * 16)] + ";" + "\n"
//         s += fonts[int(random.random() * 4)] + ";" + "\n"
//         s += "}\n"
//
// s += """
// 100% {
//   font-family: 'Source Code Pro', monospace;
// }
// """
const glitch = keyframes`
0% {
 color: #444;
 font-family: 'Sacramento', cursive;;
}
1% {
 color: #eee;
 font-family: 'Raleway', sans-serif;;
}
6% {
 color: #eee;
 font-family: 'Shadows Into Light', cursive;;
}
8% {
 color: #999;
 font-family: 'Sacramento', cursive;;
}
10% {
 color: #444;
 font-family: 'Shadows Into Light', cursive;;
}
11% {
 color: #666;
 font-family: 'Raleway', sans-serif;;
}
17% {
 color: #888;
 font-family: 'Source Code Pro', monospace;;
}
20% {
 color: #bbb;
 font-family: 'Sacramento', cursive;;
}
23% {
 color: #555;
 font-family: 'Source Code Pro', monospace;;
}
24% {
 color: #888;
 font-family: 'Sacramento', cursive;;
}
30% {
 color: #000;
 font-family: 'Raleway', sans-serif;;
}
33% {
 color: #eee;
 font-family: 'Source Code Pro', monospace;;
}
36% {
 color: #000;
 font-family: 'Shadows Into Light', cursive;;
}
42% {
 color: #888;
 font-family: 'Sacramento', cursive;;
}
43% {
 color: #fff;
 font-family: 'Raleway', sans-serif;;
}
44% {
 color: #bbb;
 font-family: 'Source Code Pro', monospace;;
}
51% {
 color: #999;
 font-family: 'Raleway', sans-serif;;
}
54% {
 color: #666;
 font-family: 'Source Code Pro', monospace;;
}
56% {
 color: #ccc;
 font-family: 'Shadows Into Light', cursive;;
}
60% {
 color: #000;
 font-family: 'Raleway', sans-serif;;
}
63% {
 color: #999;
 font-family: 'Raleway', sans-serif;;
}
64% {
 color: #777;
 font-family: 'Source Code Pro', monospace;;
}
75% {
 color: #333;
 font-family: 'Raleway', sans-serif;;
}
76% {
 color: #ccc;
 font-family: 'Shadows Into Light', cursive;;
}
88% {
 color: #bbb;
 font-family: 'Raleway', sans-serif;;
}
100% {
 color: #000;
 font-family: 'Source Code Pro', monospace;
}
`;

const grow = keyframes`
0% {
 transform: scale(0.9);
}
`;


const Header = styled.h1`
  font-size: 9vmin;
	height: 12vh;
  margin-bottom: 8px;
  font-weight: lighter;
  @media(max-width: 700px) {
    font-size: 10vw;
  }

	font-family: 'Source Code Pro', monospace;
	animation: ${glitch} 3s linear, ${grow} 2s ease-in;
	/* animation: grow 2s ease-in; */
`;


const widen = keyframes`
 0% {
	 width: 0;
	 background: #ccc;
 }
`

const Underline = styled.div`
	height: 1px;
	width: 30vw;
	background: #444;
	animation: ${widen} 2.4s cubic-bezier(.63,.16,.83,.67);
`

export default Greeting;
