import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
// import { Link as ScrollLink } from "react-scroll";
import { Button } from "@mui/material";
import { FiAlignJustify } from "react-icons/fi";
import ServicesDropdown from "./Dropdowns/ServicesDropdown";
import ProductsDropdown from "./Dropdowns/ProductsDropdown";
import Link from "next/link";
import HeaderDropdown from "./HeaderDropdown";

function Header({ children }) {
  const [hasScrolled, setHasScrolled] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 50) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const [dropDownState, setdropDownState] = useState(false);
  const toggle = () => {
    setdropDownState(!dropDownState);
    console.log("Checl");
  };

  return (
    <>
      <Nav headerdown={hasScrolled}>
        <Link href='/' passHref>
          <Logo>
            <Image
              src='/images/logo_white.png'
              layout='fill'
              objectFit='contain'
              alt='brain'
            />
          </Logo>
        </Link>
        <NavMenu>
          <FirstDivider>
            <ServicesDropdown>
              <ItemContainer headerdown={hasScrolled}>
                <Link href='/Services' passHref>
                  <span>Services</span>
                </Link>
              </ItemContainer>
            </ServicesDropdown>
            <ProductsDropdown>
              <ItemContainer headerdown={hasScrolled}>
                <Link href='/Software' passHref>
                  <span>Products</span>
                </Link>
              </ItemContainer>
            </ProductsDropdown>

            <ItemContainer headerdown={hasScrolled}>
              <Link href='/Pricing' passHref>
                <span>Pricing</span>
              </Link>
            </ItemContainer>
            <ItemContainer headerdown={hasScrolled}>
              <Link href='/about' passHref>
                <span>About</span>
              </Link>
            </ItemContainer>
          </FirstDivider>
          <SecondDivider>
            <Link href='/Login' passHref>
              <Login>Log In</Login>
            </Link>
            <Link href='/Contact' passHref>
              <Contact>Contact Us</Contact>
            </Link>
            <Link href='/Signup' passHref>
              <SignUpButton>Sign Up</SignUpButton>
            </Link>
          </SecondDivider>
        </NavMenu>
        <PersonalContent>
          <ImageContainer onClick={toggle}>
            <FiAlignJustify
              style={{ background: "transparent", color: "white" }}
              size='30px'
            />
          </ImageContainer>
          <HeaderDropdown isOpen={dropDownState} onToggle={toggle} />
        </PersonalContent>
      </Nav>
      {children}
    </>
  );
}

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: 50px;
  cursor: pointer;
  img {
    height: 20px;
    min-width: 20px;
    width: 20px;
    z-index: auto;
  }
  span {
    color: ${(p) => (p.headerdown === false ? "#f3f4f8" : "white")};

    font-size: 16px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    font-weight: 650;
    padding: 2px 0px;
    white-space: nowrap;
    position: relative;
    &:before {
      background-color: rgb(249, 249, 249);
      border-radius: 0px 0px 4px 4px;
      bottom: -6px;
      height: 2px;
      left: 0px;
      opacity: 0;
      position: absolute;
      right: 0px;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: hidden;
      width: auto;
    }
    &:hover {
      color: gray;
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
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
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  /* user-select: none; */
  cursor: pointer;
`;
const FirstDivider = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const SecondDivider = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Logo = styled.div`
  position: relative;
  width: 10%;
  height: 60%;
  background: transparent;
  margin-left: 5px;

  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: white;
  user-select: none;
  @media (max-width: 1000px) {
    width: 20%;
  }
`;

const Login = styled(Button)`
  && {
    font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
    background-color: transparent;
    height: 48px;
    width: 150px;
    justify-self: flex-end;
    color: white;
    letter-spacing: 1.5px;
    font-weight: 600;
    &:hover {
      color: #3360da;
    }

    @media (max-width: 1200px) {
      font-size: 12px;
    }
  }
`;
const SignUpButton = styled(Button)`
  && {
    font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
    background-color: white;
    height: 48px;
    width: 150px;
    justify-self: flex-end;
    color: black;
    margin: 10px;
    letter-spacing: 1.5px;
    font-weight: 600;
    &:hover {
      background-color: #e5e5e5;
    }

    @media (max-width: 1200px) {
      font-size: 12px;
    }
  }
`;
const PersonalContent = styled.div`
  padding: 0;
  width: 15%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1000px) {
    display: none;
  }
  &:hover {
    color: #119bbd;
  }
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  width: 100%;

  background-color: radial-gradient(
    circle at center center,
    #1d1f28 0%,
    #17181c 100%
  );
  background: radial-gradient(
    circle at center center,
    #1d1f28 0%,
    #17181c 100%
  );

  backdrop-filter: ${(p) =>
    p.headerdown === true
      ? " blur(3px)"
      : // ? "radial-gradient(circle at center center, #191B23 0%, #17181C 100%);"
        "transparent"};
  background: ${(p) =>
    p.headerdown === true
      ? "rgba(23, 24, 28, 0.8)"
      : // ? "radial-gradient(circle at center center, #191B23 0%, #17181C 100%);"
        "transparent"};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  letter-spacing: 16px;
  z-index: 6;
  /* user-select: none; */

  @media (max-width: 1200px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  position: relative;
  width: 66.66%;
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

    @media (max-width: 1200px) {
      font-size: 12px;
    }
  }
`;

export default Header;
