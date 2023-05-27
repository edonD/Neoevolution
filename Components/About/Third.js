import React from "react";
import styled from "styled-components";

import Image from "next/legacy/image";
import { AiFillLinkedin } from "react-icons/ai";
// import ImageTransition from "../ImageTransition/ImageTransition";
import BiographyDialog from "../About/BiographyDialog";

function Third() {
  return (
    <Container>
      <Header>
        <h1>Our Leadership </h1>
      </Header>
      <Body>
        <DataContainerAnimation>
          <ImageContainer>
            <Image
              src='/images/andi.jpg'
              layout='fill'
              objectFit='cover'
              alt='brain'
            />
          </ImageContainer>
          <Description>
            <DescriptionHeader>
              <h3>Dr. Andi Buzo</h3>
            </DescriptionHeader>
            <DescriptionBody>
              <LogoContainer>
                <AiFillLinkedin size={50} />
              </LogoContainer>

              <BiographyDialog
                who={"Andi Buzo"}
                what={
                  "Quisque eu sapien augue. Phasellus nulla orci, finibus a egestas et, fringilla a nunc. Praesent lacinia at mauris ac elementum. Nullam rhoncus ultricies odio et commodo. Donec gravida, quam a sagittis facilisis, lorem augue maximus libero, a suscipit velit magna sit amet nulla. Phasellus elementum tempus lectus eu aliquet. In hac habitasse platea dictumst. Curabitur commodo lacus nec nulla eleifend posuere. In tellus ipsum, convallis eget ullamcorper sit amet, scelerisque in mauris. Donec quis fringilla felis, id dictum urna. Pellentesque dignissim eleifend nibh eu volutpat."
                }
              />
            </DescriptionBody>
          </Description>
        </DataContainerAnimation>

        <DataContainerAnimation>
          <ImageContainer>
            <Image
              src='/images/gazi.jpg'
              layout='fill'
              objectFit='cover'
              alt='brain'
            />
          </ImageContainer>
          <Description>
            <DescriptionHeader>
              <h3>Dr. Gazi Alia</h3>
            </DescriptionHeader>
            <DescriptionBody>
              <LogoContainer>
                <AiFillLinkedin size={50} />
              </LogoContainer>

              <BiographyDialog
                who={"Gazmend Alia"}
                what={
                  "Nunc bibendum tortor eros, at fermentum nisi volutpat eu. Maecenas faucibus tortor at mi ultrices, vitae pretium mauris vehicula. Vestibulum erat eros, consequat vel tristique vitae, molestie tempus tortor. Nunc a tempor magna. Quisque in tincidunt leo, et molestie augue. Integer tempor bibendum massa. Sed scelerisque commodo tempus. Curabitur nulla ipsum, malesuada in accumsan ac, vulputate nec neque. Sed tempor neque eu neque sodales venenatis. In hac habitasse platea dictumst. Cras imperdiet, augue at faucibus consectetur, ipsum velit porta turpis, quis lobortis arcu lectus ac erat. Proin sed consequat dui. Pellentesque consectetur dui libero, vel euismod tellus tristique non. Donec mollis interdum enim sed eleifend. Curabitur ut massa quis lorem finibus dignissim. Duis laoreet varius odio, non iaculis nunc rhoncus non."
                }
              />
            </DescriptionBody>
          </Description>
        </DataContainerAnimation>

        <DataContainerAnimation>
          <ImageContainer>
            <Image
              src='/images/edon.jpg'
              layout='fill'
              objectFit='cover'
              alt='brain'
            />
          </ImageContainer>
          <Description>
            <DescriptionHeader>
              <h3>Edon Derguti</h3>
            </DescriptionHeader>
            <DescriptionBody>
              <LogoContainer>
                <AiFillLinkedin size={50} />
              </LogoContainer>

              <BiographyDialog
                who={"Edon Derguti"}
                what={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit nibh, varius et viverra vitae, rutrum ut diam. Nullam ex nisl, mattis bibendum mollis ac, imperdiet ut mauris. Integer commodo euismod nibh vel varius. Maecenas consectetur scelerisque convallis. Phasellus molestie faucibus enim. Donec sit amet dictum magna. Mauris ac sagittis nulla. Curabitur ut tristique sapien, sit amet egestas magna. Duis ornare bibendum tellus. Integer ac lacus ut nisi ultrices molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer aliquet eget ligula ut tincidunt. Nulla diam sapien, porttitor at fringilla sed, congue sed felis. Phasellus sapien nunc, luctus ac vulputate quis, venenatis vitae tortor."
                }
              />
            </DescriptionBody>
          </Description>
        </DataContainerAnimation>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 10px;
  height: 70vh;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: "relative";
  z-index: 5;

  background-color: #f6f6f6;
  @media screen and (min-width: 250px) and (max-width: 1200px) {
    height: fit-content;
  }
`;

const Body = styled.div`
  width: 70%;
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: "relative";
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const DescriptionHeader = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  padding-left: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: black;
  h3 {
    font-weight: 200;
  }
`;

const DescriptionBody = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: black;

  p {
    margin: 0px 15px 15px 15px;
    color: black;
    font-size: 15px;
    font-weight: 200;
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
    font-size: 40px;
    font-weight: 200;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  background: transparent;

  margin: 0px;
  position: relative;
`;

const LogoContainer = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: transparent;
  margin: 5px;
  :hover {
    opacity: 0.7;
  }
  /* 
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 60%;
  } */
`;

/* 
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 60%;
  } */

const Description = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: 0px;
`;
const DataContainer = styled.div`
  width: 250px;
  height: 80%;
  background-color: transparent;
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

  /* &:hover {
    background-color: #4a8bff;
    color: white;
    p {
      color: white;
    }
  } */
`;

const DataContainerAnimation = styled.div`
  width: 350px;
  height: 450px;
  background-color: white;
  box-shadow: 0px 0px 3px 3px #fafafa;
  display: flex;
  flex-direction: column;
  border-radius: 20px;

  cursor: pointer;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 600px) and (max-width: 1200px) {
    width: 250px;
    height: 450px;
    margin: 0px;
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
    width: 10%;
    transform: rotate(90deg);
    height: 50px;
  }
`;

export default Third;
