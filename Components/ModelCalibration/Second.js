import React from "react";
import styled from "styled-components";
import Image from "next/image";

function Second() {
  return (
    <Container>
      <Header>
        <h1>How it works</h1>
      </Header>
      <Body>
        <DataContainer>
          <ImageContainer>
            <Image
              src='/images/data.svg'
              width={150}
              height={100}
              alt='brain'
            />
          </ImageContainer>
          <Description>
            <DescriptionHeader>
              <h3>Upload measured data</h3>
            </DescriptionHeader>
            <DescriptionBody>
              <p>Supported formats are: csv, xlsx, json, mat.</p>
            </DescriptionBody>
          </Description>
        </DataContainer>
        <ArrowContainer>
          <Image src='/images/arrow.svg' width={150} height={100} alt='brain' />
        </ArrowContainer>
        <DataContainer>
          <ImageContainer>
            <Image
              src='/images/brain.svg'
              width={150}
              height={100}
              alt='brain'
            />
          </ImageContainer>
          <Description>
            <DescriptionHeader>
              <h3>Machine Learning</h3>
            </DescriptionHeader>
            <DescriptionBody>
              <p>Software with a dedicated ML algorithm</p>
            </DescriptionBody>
          </Description>
        </DataContainer>
        <ArrowContainer>
          <Image src='/images/arrow.svg' width={150} height={100} alt='brain' />
        </ArrowContainer>
        <DataContainer>
          <ImageContainer>
            <Image
              src='/images/graph.svg'
              width={150}
              height={100}
              alt='brain'
            />
          </ImageContainer>
          <Description>
            <DescriptionHeader>
              <h3>Final Model</h3>
            </DescriptionHeader>
            <DescriptionBody>
              <p>Receive the final device model in less than 24h</p>
            </DescriptionBody>
          </Description>
        </DataContainer>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 10px;
  height: 400px;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: "relative";
  z-index: 5;
  background-color: #f3f4f8;
  @media screen and (max-width: 800px) {
    height: 320px;
  }
  @media screen and (max-width: 600px) {
    height: 100%;
  }
`;

const Body = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: "relative";
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const DescriptionHeader = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  h3 {
    font-weight: 400;
    @media screen and (max-width: 1200px) {
      font-size: 12px;
    }
    @media screen and (max-width: 650px) {
      font-size: 8px;
    }
    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  }
`;

const DescriptionBody = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: black;

  p {
    margin: 0px 15px 15px 15px;
    color: #826d7a;
    font-size: 15px;
    @media screen and (max-width: 1200px) {
      font-size: 8px;
    }
    @media screen and (max-width: 600px) {
      font-size: 14px;
    }
  }
`;
const Header = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  h1 {
    font-weight: 400;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    height: 40%;

    padding: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const DataContainer = styled.div`
  width: 250px;
  height: 300px;
  background-color: #e2e4f1;
  margin: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1200px) {
    width: 20%;
    height: 80%;
    margin: 0px;
  }
  @media screen and (max-width: 600px) {
    width: 80%;
    height: 30%;
  }
  /* &:hover {
    background-color: #4a8bff;
    color: white;
    p {
      color: white;
    }
  } */
`;
const ArrowContainer = styled.div`
  width: 50px;
  height: 300px;
  background-color: transparent;
  margin: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    width: 30px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 50px;
  }
`;

export default Second;
