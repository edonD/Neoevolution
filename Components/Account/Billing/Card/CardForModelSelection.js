import React from "react";

import styled from "styled-components";
import Image from "next/image";

import Link from "next/link";

function CardForModelSelection({ onData, name }) {
  return (
    // <Link href={`/projects/project-name?input=${"New Project"}`} passHref>
    <Container>
      <p>{name}</p>
      <Card
        onClick={() => {
          const icrement = 1;
          onData(icrement);
        }}
      >
        {/* <ImageContainer>
        <Image
          src='/images/plus-svgrepo-com.svg'
          layout='fill'
          objectFit='contain'
          alt='brain'
        />
      </ImageContainer> */}
        <ListItem>
          <Image
            src='/images/Transient_DC.svg'
            layout='fill'
            objectFit='contain'
            alt='brain'
          />
        </ListItem>
        {/* <Header>
          <ImageContainer>
            <Image
              src='/images/gggrain.svg'
              layout='fill'
              objectFit='contain'
              alt='brain'
            />
          </ImageContainer>
        </Header> */}
        {/* <Box>
          <CardContent>
            <ListItem>
              <h3>Project Name</h3>
            </ListItem>
            <ListItem state={state}>
              <h2>{state}</h2>
            </ListItem>
          </CardContent>
          <CardContent>
            <ListItemEnd>
              <h2>Updated at</h2>
              <h1>7 June, 2022</h1>
            </ListItemEnd>
            <ListItemEnd>
              <Button
                onClick={() => {
                  const decrement = 1;
                  onData(decrement);
                }}
                className='red-white-black'
              >
                Cancel
              </Button>
            </ListItemEnd>
          </CardContent>
        </Box> */}
      </Card>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: transparent;
  align-items: center;
  position: relative;
  flex-direction: column;

  user-select: none;
  @media screen and (max-width: 600px) {
  }
`;
const Card = styled.div`
  width: 250px;
  height: 200px;
  background-color: transparent;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.07);
  transition: all 0.2s ease 0s;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 150px;
  }
  :hover {
    background-color: #f3f3f8;
  }
`;

const ListItem = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: transparent;
  /* padding: 5px 5px 5px 5px; */

  user-select: none;
  position: relative;
  //margin: 5px 5px 5px 5px;
  color: black;
  //cursor: pointer;

  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 90%;
  }

  h1 {
    font-size: 14px;
    color: black;
    font-weight: 200;
    margin: 0px;
    @media screen and (max-width: 750px) {
      font-size: 10px;
    }
    @media screen and (max-width: 400px) {
      display: none;
    }
  }
  h2 {
    font-size: 14px;
    color: ${(check) => (check.state === "Delivered" ? "green" : "red")};
    font-weight: 200;
    margin: 0px;
    @media screen and (max-width: 750px) {
      font-size: 10px;
    }
  }
  h3 {
    color: black;
    font-weight: 200;
    margin: 0px;
    font-size: 14px;
    @media screen and (max-width: 750px) {
      font-size: 14px;
    }
  }
`;

export default CardForModelSelection;
