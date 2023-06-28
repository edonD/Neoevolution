import React, { useState } from "react";
import styled from "styled-components";

// import ProfileHeaderDropdown from "../Dropdown/ProfileHeaderDropdown";
import Link from "next/link";
import { Button } from "@mui/material";
import Image from "next/image";

function SidebarHeader() {
  const [dropDownState, setdropDownState] = useState(false);
  const toggle = () => {
    setdropDownState(!dropDownState);
  };
  return (
    <Background>
      <LogoContainer>
        <Image
          src='/images/logo_white.png'
          layout='fill'
          objectFit='contain'
          alt='brain'
        />
      </LogoContainer>
      <SecondDivider>
        <Link href='/Contact' passHref>
          <Contact>Contact Us</Contact>
        </Link>
        <PersonalContent>
          <ImageContainer onClick={toggle}>
            <h1>ED</h1>
          </ImageContainer>
          {/* <ProfileHeaderDropdown isOpen={dropDownState} onToggle={toggle} /> */}
        </PersonalContent>
      </SecondDivider>
    </Background>
  );
}

export default SidebarHeader;

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  background: transparent;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ececf1;
`;
const Contact = styled(Button)`
  && {
    height: 48px;
    width: 200px;

    background: linear-gradient(
      45deg,
      rgba(59, 173, 227, 1) 0%,
      rgba(87, 111, 230, 1) 25%,
      rgba(152, 68, 183, 1) 51%,
      rgba(255, 53, 127, 1) 100%
    ); /* box-shadow: 0 0 10px 2px #0ff, 0 0 4px 1px #0ff; */
    padding: 8px 16px;
    margin: 10px;
    letter-spacing: 1.5px;
    font-weight: 600;
    border-radius: 4px;
    color: white;
    transition: all 0.2s ease 0s;
    transition: 0.3s;
    &:hover {
      /* color: #e5e5e5; */
      background: linear-gradient(
        45deg,
        #53a6e5 0%,
        #5d70e9 25%,
        #5d70e9 51%,
        #5d70e9 100%
      );
    }

    @media (max-width: 1000px) {
      display: none;
    }
  }
`;
const PersonalContent = styled.div`
  padding: 0;
  width: 48px;
  height: 48px;
  border-radius: 48px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  user-select: none;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px;

  &:hover {
    color: #119bbd;
  }
  /* @media (min-width: 1000px) {
    display: none;
  }
  &:hover {
    color: #119bbd;
  } */
`;
const SecondDivider = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* @media (max-width: 1000px) {
    display: none;
  } */
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #353740;
  color: black;
  h1 {
    color: white;
    font-size: 22px;
  }
`;

const LogoContainer = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-left: 20px;
  color: black;
  h1 {
    color: white;
    font-size: 22px;
  }
`;
