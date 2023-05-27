import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "./HoverCard/HoverCard";
import styled from "styled-components";

function ProductsDropdown({ children }) {
  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent>
        <Container>
          <Link href='/Software' passHref>
            <RowContainer>
              <ImageContainer>
                <StyledImage>
                  <Image
                    src='/images/deepseablack.svg'
                    width='35px'
                    height='35px'
                    alt='MOSFET'
                  />
                </StyledImage>
              </ImageContainer>
              <BodyContainer>
                <BodyHeaderContainer>
                  <h1>Software</h1>
                </BodyHeaderContainer>
                <BodyBodyContainer>
                  <p>Software for characterization and modeling of devices</p>
                </BodyBodyContainer>
              </BodyContainer>
            </RowContainer>
          </Link>
        </Container>
      </HoverCardContent>
    </HoverCard>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export default ProductsDropdown;
