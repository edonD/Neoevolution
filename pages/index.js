import Header from "../Components/Home/Header";
import styled from "styled-components";
import First from "../Components/Home/First";
import Second from "../Components/Home/Second";
import Third from "../Components/Home/Third";

export default function Home() {
  return (
    <Container>
      <Header />
      <First />
      <Second />
      <Third />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* fallback for old browsers */
  background: white;

  /* Chrome 10-25, Safari 5.1-6 */
  /* background: -webkit-linear-gradient(
    to right,
    rgba(56, 189, 248, 1),
    rgba(59, 130, 246, 1)
  );

   W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  /*background: radial-gradient(
    circle at center center,
    #2c3e70 0%,
    #17181c 100%
  ); */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;
