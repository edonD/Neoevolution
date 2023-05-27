import React from "react";
import styled from "styled-components";
import Image from "next/legacy/image";

function Software() {
  return (
    <Container>
      <ImageContainer
        src='/images/test-Software.svg'
        layout='fill'
        objectFit='contain'
        alt='brain'
      />
    </Container>
  );
}

const ImageContainer = styled(Image)`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  margin-top: 80px;
  border-radius: 4px;
  user-select: none;

  overflow: hidden;
  /* box-shadow: 0 0 16px 20px rgb(0, 0, 0, 30%); */
  @media (max-width: 1200px) {
    width: 90%;
    height: 50%;
    margin-top: 0px;
  }
  /*  @media (max-width: 800px) {
    height: 350px;
  }
  @media (max-width: 600px) {
    height: 250px;
  }
  @media (max-width: 350px) {
    height: 150px;
  } */
`;
export default Software;
