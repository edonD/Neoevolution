import Image from "next/legacy/image";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "./HoverCard/HoverCard";

function ServicesDropdown({ children }) {
  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent>
        {/* <Container> */}
        {/* <Wrapper>
            <Services>
              <h1>Compact Model Calibration</h1>
            </Services>
            <Link href='/Services/passive-modeling'>
              <RowContainer>
                <ImageContainer>
                  <StyledImage>
                    <Image
                      src='/images/resistor.svg'
                      width='35px'
                      height='35px'
                      alt='MOSFET'
                    />
                  </StyledImage>
                </ImageContainer>
                <BodyContainer>
                  <BodyHeaderContainer>
                    <h1>Passive Components Modeling</h1>
                  </BodyHeaderContainer>
                  <BodyBodyContainer>
                    <p>
                      Machine learning methodology for passive devices model
                      extraction.
                    </p>
                  </BodyBodyContainer>
                </BodyContainer>
              </RowContainer>
            </Link>
            <Link href='/Services/active-modeling'>
              <RowContainer>
                <ImageContainer>
                  <StyledImage>
                    <Image
                      src='/images/mosfet.svg'
                      width='40px'
                      height='35px'
                      alt='MOSFET'
                    />
                  </StyledImage>
                </ImageContainer>
                <BodyContainer>
                  <BodyHeaderContainer>
                    <h1>Active Components Modeling </h1>
                  </BodyHeaderContainer>
                  <BodyBodyContainer>
                    <p>
                      Machine learning methodology for active devices model
                      extraction.
                    </p>
                  </BodyBodyContainer>
                </BodyContainer>
              </RowContainer>
            </Link>
            <Link href='/Services/package-modeling'>
              <RowContainer>
                <ImageContainer>
                  <StyledImage>
                    <Image
                      src='/images/ic.svg'
                      width='35px'
                      height='35px'
                      alt='MOSFET'
                      color='#235fd7'
                    />
                  </StyledImage>
                </ImageContainer>
                <BodyContainer>
                  <BodyHeaderContainer>
                    <h1>Package design modeling </h1>
                  </BodyHeaderContainer>
                  <BodyBodyContainer>
                    <p>
                      Machine learning methodology for package model extraction.
                    </p>
                  </BodyBodyContainer>
                </BodyContainer>
              </RowContainer>
            </Link>
            <Link href='/Services/contract-modeling'>
              <RowContainer>
                <ImageContainer>
                  <StyledImage>
                    <Image
                      src='/images/contract.svg'
                      width='35px'
                      height='35px'
                      alt='MOSFET'
                      color='#235fd7'
                    />
                  </StyledImage>
                </ImageContainer>
                <BodyContainer>
                  <BodyHeaderContainer>
                    <h1>Contract Modeling</h1>
                  </BodyHeaderContainer>
                  <BodyBodyContainer>
                    <p>
                      Machine learning methodology for package model extraction.
                    </p>
                  </BodyBodyContainer>
                </BodyContainer>
              </RowContainer>
            </Link>
          </Wrapper> */}
        <Wrapper>
          <Title>
            <h1>Model Calibration Services</h1>
          </Title>
          <Link href='/Services/passive-modeling' passHref>
            <RowContainer>
              <ImageContainer>
                <StyledImage>
                  <Image
                    src='/images/resistor.svg'
                    width={35}
                    height={35}
                    alt='MOSFET'
                  />
                </StyledImage>
              </ImageContainer>
              <BodyContainer>
                <BodyHeaderContainer>
                  <h1>Passive Components Modeling</h1>
                </BodyHeaderContainer>
                <BodyBodyContainer>
                  <p>
                    Machine learning methodology for passive devices model
                    extraction.
                  </p>
                </BodyBodyContainer>
              </BodyContainer>
            </RowContainer>
          </Link>
          <Link href='/Services/active-modeling' passHref>
            <RowContainer>
              <ImageContainer>
                <StyledImage>
                  <Image
                    src='/images/mosfet.svg'
                    width={40}
                    height={35}
                    alt='MOSFET'
                  />
                </StyledImage>
              </ImageContainer>
              <BodyContainer>
                <BodyHeaderContainer>
                  <h1>Active Components Modeling </h1>
                </BodyHeaderContainer>
                <BodyBodyContainer>
                  <p>
                    Machine learning methodology for active devices model
                    extraction.
                  </p>
                </BodyBodyContainer>
              </BodyContainer>
            </RowContainer>
          </Link>
          <Link href='/Services/package-modeling' passHref>
            <RowContainer>
              <ImageContainer>
                <StyledImage>
                  <Image
                    src='/images/ic.svg'
                    width={35}
                    height={35}
                    alt='MOSFET'
                    color='#235fd7'
                  />
                </StyledImage>
              </ImageContainer>
              <BodyContainer>
                <BodyHeaderContainer>
                  <h1>Package design modeling </h1>
                </BodyHeaderContainer>
                <BodyBodyContainer>
                  <p>
                    Machine learning methodology for package model extraction.
                  </p>
                </BodyBodyContainer>
              </BodyContainer>
            </RowContainer>
          </Link>
          <Link href='/Services/contract-modeling' passHref>
            <RowContainer>
              <ImageContainer>
                <StyledImage>
                  <Image
                    src='/images/contract.svg'
                    width={35}
                    height={35}
                    alt='MOSFET'
                    color='#235fd7'
                  />
                </StyledImage>
              </ImageContainer>
              <BodyContainer>
                <BodyHeaderContainer>
                  <h1>Contract Modeling</h1>
                </BodyHeaderContainer>
                <BodyBodyContainer>
                  <p>
                    Machine learning methodology for package model extraction.
                  </p>
                </BodyBodyContainer>
              </BodyContainer>
            </RowContainer>
          </Link>
        </Wrapper>
        {/* </Container> */}
      </HoverCardContent>
    </HoverCard>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1000px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 10px;
  h1 {
    font-size: 26px;
    font-weight: 200;
    text-align: left;
  }
`;
const RowContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
`;

const StyledImage = styled.div`
  height: 45px;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #f4f4f4;
  cursor: pointer;
  &:hover {
    background-color: #e9f1ff;
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 50px;
  user-select: none;
  color: #232331;
`;
const BodyContainer = styled.div`
  height: 100%;
  width: 100%;
  padding-left: 15px;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #232331;
  border-bottom: 1px solid #efefef;
`;
const BodyBodyContainer = styled.div`
  height: 60px;
  width: 100%;
  user-select: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #989898;
  p {
    font-size: 13px;
    font-weight: 200;
  }
`;
const BodyHeaderContainer = styled.div`
  height: 40px;
  width: 100%;
  user-select: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #232331;
  cursor: pointer;

  h1 {
    margin: 0px;
    font-size: 18px;
    font-weight: 400;
    &:hover {
      color: #235fd7;
    }
  }
`;

export default ServicesDropdown;
