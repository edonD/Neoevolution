import React from "react";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { SiCoronaengine } from "react-icons/si";
import Image from "next/legacy/image";
function HeaderDropdown({ isOpen, onToggle }) {
  const handleClick = () => {
    onToggle();
  };
  const router = useRouter();
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarWrapper>
        <IconWrapper>
          <Logo>
            <Link href='/' passHref>
              <SiCoronaengine size={50} />
            </Link>
          </Logo>

          <Icon onClick={handleClick}>
            <CloseIcon />
          </Icon>
        </IconWrapper>
        <Link href='/' passHref>
          <SidebarRoute>
            <span>Home</span>
          </SidebarRoute>
        </Link>
        <Link href='/Services' passHref>
          <SidebarRoute>
            <span>Services</span>
          </SidebarRoute>
        </Link>
        <Link href='/Software' passHref>
          <SidebarRoute>
            <span>Products</span>
          </SidebarRoute>
        </Link>
        <Link href='/Pricing' passHref>
          <SidebarRoute>
            <span>Pricing</span>
          </SidebarRoute>
        </Link>

        <StyledButtonPorosit
          style={{ background: "#235fd7", backgroundColor: "#235fd7" }}
          onClick={() => {
            router.push("/Contact", undefined, { shallow: true });
          }}
        >
          <span>Contact</span>
        </StyledButtonPorosit>
        <StyledButtonSignIn
          onClick={() => {
            router.push("/Login ", undefined, { shallow: true });
          }}
        >
          Log In
        </StyledButtonSignIn>
        <StyledButtonPorosit
          onClick={() => {
            router.push("/Signup", undefined, { shallow: true });
          }}
        >
          <span>Sign Up</span>
        </StyledButtonPorosit>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: 100px;
  background-color: transparent;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  top: 0;
  right: 0;
  background-color: "black";

  transition: 0.4s ease-in-out;
  display: ${({ isOpen }) => (isOpen ? "true" : "none")};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
const LogoContainer = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  margin-left: 55px;
  color: white;
  transition: 0.4s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  h1 {
    color: white;
    font-size: 22px;
  }
`;

const CloseIcon = styled(FaTimes)`
  color: white;
`;

const Logo = styled.div`
  position: relative;
  width: 10%;
  height: 100%;
  background: transparent;
  padding-left: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: white;
  @media (max-width: 1000px) {
    width: 20%;
  }
`;
const IconWrapper = styled.div`
  user-select: none;
  height: 80px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  background: transparent;
`;

const Icon = styled.div`
  position: relative;
  margin-right: 25px;
  height: 80px;
  width: 80px;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  color: #000000;

  background: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: fit-content;
  width: 100%;
`;

const StyledButtonPorosit = styled(Button)`
  && {
    font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
    background-color: #040505;
    width: 50%;
    height: 40px;

    margin: 15px;
    margin-left: 50px;

    color: white;
    &:hover {
      background-color: #3c4149;
    }
    @media screen and (max-width: 1400px) {
    }
  }
`;

const StyledButtonSignIn = styled(Button)`
  && {
    font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
    background-color: white;
    width: 50%;
    height: 40px;

    margin-left: 50px;

    color: #040505;
    &:hover {
      background-color: #dcdcdc;
    }
    @media screen and (max-width: 1400px) {
    }
  }
`;
const SidebarRoute = styled.div`
  height: 40px;
  margin: 15px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding-left: 35px;
  color: white;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  span {
    letter-spacing: 0cm;
    font-size: 25px;
    font-weight: 500;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: gray;
  }
`;

export default HeaderDropdown;
