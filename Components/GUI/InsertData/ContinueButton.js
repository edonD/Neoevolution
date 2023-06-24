import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { TailSpin } from "react-loader-spinner";
import Link from "next/link";

function ContinueButton({ show }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
  }, []);
  const router = useRouter();

  const { projectName, modelName } = router.query;
  return (
    <Link
      href={`/projects/${projectName}/${modelName[0]}/insert-data/reference-data`}
    >
      <Card
        onClick={() => {
          setLoading(true);
        }}
        show={show}
      >
        {loading ? (
          <TailSpin
            height='80'
            width='80'
            color='#3e89ff'
            ariaLabel='rotating-square-loading'
            strokeWidth='4'
            wrapperStyle={{}}
            wrapperClass=''
            visible={loading}
          />
        ) : (
          <ImageContainer>
            <Image
              src='/images/plus-svgrepo-com.svg'
              width={100}
              height={100}
              alt='brain'
            />
          </ImageContainer>
        )}
        <ListItem>
          <h3>New Calibration</h3>
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

const Card = styled.div`
  width: 200px;
  height: 200px;
  background-color: transparent;
  position: relative;
  display: ${(p) => (p.show !== 0 ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  border-radius: 15px;
  user-select: none;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.07);
  transition: all 0.2s ease 0s;
  cursor: pointer;
  &:active {
    transform: translateY(5px);
  }
  &:focus {
    outline: none;
  }

  :hover {
    color: #2196f3;
    background-color: #fff;
    border: 1px solid #2196f3;
  }
  @media screen and (max-width: 1200px) {
    margin: 10px;
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

export default ContinueButton;
