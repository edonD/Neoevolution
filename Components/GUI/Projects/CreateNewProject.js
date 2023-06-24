import React from "react";
import { GiSwirledShell } from "react-icons/gi";
import {
  selectedProjects,
  setCurrentProject,
} from "../../../store/slices/projectListSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { selectUserNameId } from "../../../store/slices/userSlice.js";
import styled from "styled-components";
import { BsPlusCircleFill } from "react-icons/bs";

import Link from "next/link";
import { uploadFolderToS3 } from "../../Storage/UploadFileFunctions.js";
import { useRouter } from "next/router.js";
import { TailSpin } from "react-loader-spinner";
import { Button } from "primereact/button";

function CreateNewProject({ onData, icon, ButtonText }) {
  const usernameId = useSelector(selectUserNameId);
  const dispatch = useDispatch();

  const projects = useSelector(selectedProjects);

  const [loading, setLoading] = React.useState(false);

  const handleClick = () => {
    setLoading(true);
    uploadFolderToS3(usernameId, `New Project 1`);
    dispatch(setCurrentProject(`New Project 1`));
  };

  return (
    <Container>
      <Wrapper>
        <Logo>
          <GiSwirledShell size={50} style={{ transform: "rotate(-180deg)" }} />
        </Logo>
        <Body>
          <HeaderIntro>Design Your Own Project</HeaderIntro>
          <Description>
            A project is a place for you to organize all of your content
            including models, simulations, model calibrations and more.
          </Description>
          <ButtonContainer>
            <Link href={`/projects/${encodeURIComponent(`New Project 1`)}`}>
              <FormButton
                className='blue-white-lightblue'
                onClick={() => {
                  handleClick();
                }}
                loading={loading}
                label={ButtonText}
                icon='pi pi-plus'
              ></FormButton>
            </Link>
            {/* <AiValanchePopUp onData={onData} ButtonText={"Create"} size={18} /> */}
          </ButtonContainer>
        </Body>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: transparent;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 100px;
  height: 100%;
  width: 100%;
`;

const Description = styled.p`
  font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: lighter;
  color: #667085;
  text-align: center;
`;
const HeaderIntro = styled.h3`
  font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
  /* font-size: 12px; */
  font-weight: lighter;
  color: #000000;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50%;
`;

const Body = styled.div`
  width: 30%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    width: 90%;
  }
`;

const Logo = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background: transparent;

  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: black;
  user-select: none;
  @media (max-width: 1000px) {
    width: 20%;
  }
`;

const FormButton = styled(Button)`
  background-color: #1abc9c;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  /* font-size: ${(props) => `${props.size}px`}; */

  display: flex;
  flex-direction: center;
  justify-content: center;
  padding: 10px 60px 10px 60px;
  transition: background-color 0.2s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  /* font-size: 20px; */
  @media screen and (max-width: 900px) {
    /* justify-content: flex-start; */
    font-size: 16px;
    padding: 5px 10px 5px 10px;
  }
  @media screen and (max-width: 500px) {
    /* justify-content: flex-start; */
    font-size: 14px;
    padding: 5px 10px 5px 10px;
  }
  &:active {
    transform: translateY(2px);
  }
  &:focus {
    outline: none;
  }
  &.gray-white-black {
    background-color: #349a77;
    color: white;
    border: 1px solid #349a77;
  }

  &.gray-white-black:hover {
    color: #349a77;
    background-color: white;
    border: 1px solid #349a77;
  }

  &.black-gray-white {
    background-color: #333;
    color: #fff;
    border: 1px solid #333;
  }

  &.black-gray-white:hover {
    color: #333;
    background-color: #fff;
    border: 1px solid #333;
  }

  &.blue-white-lightblue {
    width: 100%;
    background-color: #2196f3;
    color: #fff;
    border: 1px solid #2196f3;
    @media screen and (max-width: 900px) {
      width: 200px;
    }
  }

  &.blue-white-lightblue:hover {
    color: #2196f3;
    background-color: #fff;
    border: 1px solid #2196f3;
  }
`;

export default CreateNewProject;
