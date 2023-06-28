import React, { useState } from "react";
import styled from "styled-components";

import ProfileHeaderDropdown from "../Dropdown/ProfileHeaderDropdown";
import Link from "next/link";
import { Button } from "@mui/material";
import Image from "next/image";
import AiValanchePopUp from "../../GUI/AiValancheHome/AiValanchePopUp";
import { useEffect } from "react";
import { Auth } from "aws-amplify";

function ProfileHeader() {
  const [dropDownState, setdropDownState] = useState(false);
  const toggle = () => {
    setdropDownState(!dropDownState);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameInitial, setFirstNameInitial] = useState("");
  const [lastNameInitial, setLastNameInitial] = useState("");

  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const { given_name, family_name } = user.attributes;
        setFirstName(given_name);
        setLastName(family_name);

        if (given_name) {
          setFirstNameInitial(given_name.charAt(0));
        }

        if (family_name) {
          setLastNameInitial(family_name.charAt(0));
        }
      } catch (error) {
        console.log("error fetching user profile:", error);
      }
    }

    fetchUserProfile();
  }, []);
  return (
    <Background>
      <LogoContainer>
        <Image src='/images/logo_blue.png' width={50} height={50} alt='brain' />
      </LogoContainer>
      <SecondDivider>
        {/* <Link href='/projects' passHref>
          <AiValanchePopUp
            ButtonText={"Create a new Project"}
            icon={true}
            size={14}
            // onData={onData}
          />
        </Link> */}
        <PersonalContent>
          <ImageContainer onClick={toggle}>
            <h1>
              {firstNameInitial}
              {lastNameInitial}
            </h1>
          </ImageContainer>
          <ProfileHeaderDropdown isOpen={dropDownState} onToggle={toggle} />
        </PersonalContent>
      </SecondDivider>
    </Background>
  );
}

export default ProfileHeader;

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

const LogoContainer = styled.div`
  position: relative;
  width: 10%;
  height: 60%;
  background: transparent;
  margin-left: 20px;

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
  @media (max-width: 900px) {
    width: auto;
  }
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
