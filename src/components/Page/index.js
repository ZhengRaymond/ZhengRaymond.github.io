import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10vh 15vw;
  @media (max-width: 700px) {
    margin: 10vh 5vw;
  }
  /* max-width: ${ props => props.max || "1200px" }; */
	width: 80vw;
  height: ${ props => props.unlimited ? "auto" : "100vh" };
  background-color: ${ props => props.backgroundColor || "white"};
`;

export default Page;
