import React from "react";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { useState } from "react";
import { Auth } from "aws-amplify";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/slices/userSlice";

function ProfileHeaderDropdown({ isOpen, onToggle }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    onToggle();
  };

  async function signOut() {
    try {
      await Auth.signOut();
      dispatch(setUser(null));
      router.push("/", undefined, { shallow: true });
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  const router = useRouter();
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarWrapper>
        <IconWrapper>
          <Icon>{isOpen ? <CloseIcon onClick={handleClick} /> : <></>}</Icon>
        </IconWrapper>
        <Link href='/projects' passHref>
          <SidebarRoute>
            <span>Projects</span>
          </SidebarRoute>
        </Link>
        <Link href='/account/information' passHref>
          <SidebarRoute>
            <span>Account</span>
          </SidebarRoute>
        </Link>
        <Link href='/billing/overview' passHref>
          <SidebarRoute>
            <span>Billing</span>
          </SidebarRoute>
        </Link>
        <Link href='/active/orders' passHref>
          <SidebarRoute>
            <span>Orders</span>
          </SidebarRoute>
        </Link>
        <Link href='/Contact' passHref>
          <SidebarRoute>
            <span>Contact us</span>
          </SidebarRoute>
        </Link>

        <StyledButtonPorosit
          onClick={() => {
            signOut();
          }}
        >
          <span>Sign Out</span>
        </StyledButtonPorosit>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  position: fixed;
  z-index: 10;
  width: 300px;
  height: 80px;
  background-color: transparent;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  top: 70px;
  right: 0;
  background-color: black;
  /* border: 1px solid #ececf1; */
  transition: 0.1s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  display: ${({ isOpen }) => (isOpen ? "true" : "none")};

  /* top: ${({ isOpen }) => (isOpen ? "70px" : "-100%")}; */
`;

const CloseIcon = styled(FaTimes)`
  color: black;
`;
const IconWrapper = styled.div`
  user-select: none;
  height: 80px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
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

  outline: none;
`;

const SidebarWrapper = styled.div`
  color: #000000;
  border: 1px solid #ececf1;
  background: white;
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
    margin-left: 10px;

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
    font-weight: 200;
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
  height: fit-content;
  margin: 5px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 10px;
  color: black;
  width: 100%;

  transition: all 0.2s ease-in-out;

  span {
    letter-spacing: 0cm;
    font-size: 15px;
    font-weight: 200;
  }
  &:hover {
    /* transition: all 0.2s ease-in-out; */
    background-color: #e7f3f3;
  }
`;

export default ProfileHeaderDropdown;
