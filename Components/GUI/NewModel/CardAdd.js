import React, { useEffect } from "react";

import styled from "styled-components";
import Image from "next/image";
import { uploadFolderToS3 } from "../../Storage/UploadFileFunctions";
import { selectUserNameId } from "../../../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedModels,
  setCurrentModel,
} from "../../../store/slices/modelListSlice";
import { currentProject } from "../../../store/slices/projectListSlice";
import Link from "next/link";
import { TailSpin } from "react-loader-spinner";

function CardAdd({ onData }) {
  const usernameId = useSelector(selectUserNameId);
  const models = useSelector(selectedModels);
  const currentProjectName = useSelector(currentProject);
  const [loading, setLoading] = React.useState(false);
  const [currentProjectState, setCurrentProjectState] = React.useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentProjectName) {
      setCurrentProjectState(currentProjectName);
    }
  }, [currentProjectName]);
  const findHighestModelNumber = (models) => {
    console.log("Current Project", currentProjectName);
    let maxExtension = 0;
    let projectNameWithMaxExtension = "1";

    for (const project of models) {
      if (project && project.name.startsWith("New Model")) {
        const extension = parseInt(project.name.split(" ")[2]);

        if (extension > maxExtension) {
          maxExtension = extension;
          projectNameWithMaxExtension = project.name;
        }
      }
    }
    console.log(
      `Project with the highest extension: ${projectNameWithMaxExtension}`
    );
    return maxExtension;
  };

  const handleClick = () => {
    setLoading(true);
    uploadFolderToS3(
      `${usernameId}/${currentProjectState}`,
      `New Model ${findHighestModelNumber(models) + 1}`
    );
    dispatch(
      setCurrentModel(`New Model ${findHighestModelNumber(models) + 1}`)
    );
  };

  return (
    <Link
      href={`/projects/${currentProjectName}/${encodeURIComponent(
        `New Model ${findHighestModelNumber(models) + 1}`
      )}`}
    >
      <Card
        onClick={() => {
          handleClick();
        }}
      >
        <ImageContainer>
          {loading ? (
            <TailSpin
              height='50'
              width='50'
              color='#3e89ff'
              ariaLabel='rotating-square-loading'
              strokeWidth='4'
              wrapperStyle={{}}
              wrapperClass=''
              visible={loading}
            />
          ) : (
            <Image
              src='/images/plus-svgrepo-com.svg'
              width={100}
              height={100}
              alt='brain'
            />
          )}
        </ImageContainer>
        <ListItem>
          <h3>New Model</h3>
        </ListItem>
      </Card>
    </Link>
  );
}

const ImageContainer = styled.div`
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  background-color: transparent;
  align-items: center;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  user-select: none;
  @media screen and (max-width: 600px) {
  }
`;
const Button = styled.button`
  background-color: #1abc9c;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  display: flex;
  flex-direction: center;
  justify-content: center;
  padding: 5px;
  transition: background-color 0.2s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  &:active {
    transform: translateY(2px);
  }
  &:focus {
    outline: none;
  }
  &.red-white-black {
    background-color: #d92d20;
    color: white;
    border: 1px solid #d92d20;
  }

  &.red-white-black:hover {
    color: #d92d20;
    background-color: white;
    border: 1px solid #d92d20;
  }
`;
const Card = styled.div`
  width: 300px;
  height: 150px;
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
const Box = styled.div`
  width: calc(100% - 200px);
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const Header = styled.div`
  width: 200px;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const CardContent = styled.div`
  width: 45%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10px;
`;

const IconContainer = styled.div`
  width: 20%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #909aff;
  background: transparent;
`;

const IconCircle = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 40px;
  /* border: 1px solid green; */

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(check) => (check.state === "Delivered" ? "green" : " #ee7b87")};
  background: ${(check) =>
    check.state === "Delivered" ? "#ececa3" : " #fce4e7"};
  cursor: pointer;
  :hover {
    background: ${(check) =>
      check.state === "Delivered" ? "#abc32f" : " #e84b5b"};
    color: white;
  }
`;

const ListItem = styled.div`
  /* width: 100%;
  height: 50%; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: transparent;
  padding: 5px 5px 5px 5px;
  background-color: transparent;
  user-select: none;
  //margin: 5px 5px 5px 5px;
  color: black;
  //cursor: pointer;

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

const ListItemEnd = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background: transparent;
  padding: 0px;
  background-color: transparent;
  margin: 0px 0px 0px 0px;
  color: black;
  //cursor: pointer;

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
    color: #1961ff;
    font-weight: 200;
    margin-right: 10px;
    @media screen and (max-width: 750px) {
      font-size: 10px;
    }
  }
  h3 {
    color: black;
    font-weight: 200;
    margin: 0px;
    @media screen and (max-width: 750px) {
      font-size: 14px;
    }
  }
`;

const DownloadItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: transparent;
  padding: 0px;
  background-color: transparent;
  margin: 0px 0px 0px 0px;

  //cursor: pointer;

  h1 {
    font-size: 14px;
    color: black;
    font-weight: 200;
    margin: 0px;
  }
`;

export default CardAdd;
