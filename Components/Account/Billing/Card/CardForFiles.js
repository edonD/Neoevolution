import React, { useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "primereact/menu";
import { BsFiletypeJson } from "react-icons/bs";
import { RiFileList2Fill } from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { removeTestbenchItem } from "../../../../store/slices/testbenchesSlice";
import { Toast } from "primereact/toast";
import { useDispatch } from "react-redux";

function CardForFiles({ number, onData, item, callback, isSelected, onClick }) {
  // const [isSelected, setIsSelected] = useState(false);
  const menuRight = useRef(null);
  const toast = useRef(null);

  const handleClick = (event) => {
    menuRight.current.toggle(event);
  };

  const handleDelete = () => {
    // Call the callback function with the item as an argument
    toast.current.show({
      severity: "error",
      summary: "Delete",
      detail: "Data Deleted",
      life: 3000,
    });
    callback(item);
  };

  const MenuItems = [
    {
      label: "Options",
      items: [
        {
          label: "Update",
          icon: "pi pi-refresh",
          command: () => {
            toast.current.show({
              severity: "success",
              summary: "Updated",
              detail: "Data Updated",
              life: 3000,
            });
          },
        },
        {
          label: "Delete",
          icon: "pi pi-times",
          command: handleDelete,
        },
      ],
    },
  ];

  const isJsonFile = item.slice(-5) === ".json";
  return (
    <Card>
      <Header>
        <Toast ref={toast}></Toast>
        <ImageContainer>
          {isJsonFile ? (
            <BsFiletypeJson size={30} />
          ) : (
            <RiFileList2Fill size={30} color='#8d8d8d' />
          )}
        </ImageContainer>
      </Header>
      <Box>
        <CardContent>
          <SpanContainer>
            <span>{item}</span>
          </SpanContainer>
          <Buttons
            onClick={onClick}
            className={
              isSelected ? "red-white-black selected" : "red-white-black"
            }
          >
            <span>{!isSelected ? "Not Selected" : "Selected"}</span>
          </Buttons>
        </CardContent>
        <DotsContainer onClick={handleClick}>
          <HiOutlineDotsVertical size={20} />

          <Menu
            model={MenuItems}
            popup
            ref={menuRight}
            id='popup_menu_right'
            popupAlignment='right'
          />
        </DotsContainer>
      </Box>
    </Card>
  );
}

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: transparent;
  align-items: center;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
`;
const Buttons = styled.button`
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
  /* transition: background-color 0.2s ease; */

  &:active {
    transform: translateY(2px);
  }
  &:focus {
    outline: none;
  }
  &.red-white-black.selected {
    background-color: #22c55e;
    color: white;
    border: 1px solid #22c55e;
  }

  &.red-white-black {
    background-color: white;
    color: #22c55e;
    border: 1px solid #22c55e;
  }

  &.red-white-black:hover {
    opacity: 0.8;
  }
  span {
    user-select: none;
    @media screen and (max-width: 900px) {
      font-size: 12px;
    }
  }
`;

const SpanContainer = styled.div`
  width: 60%;
  background-color: transparent;
  user-select: none;
  @media screen and (max-width: 1400px) {
    font-size: 13px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 12px;
  }
  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

const Card = styled.div`
  width: 90%;
  height: 70px;
  background-color: transparent;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid black; */
  border-radius: 4px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.07);
  transition: all 0.2s ease 0s;
  margin: 5px;
  overflow: hidden;
  cursor: pointer;
`;
const Box = styled.div`
  width: 80%;
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

const DotsContainer = styled.div`
  width: 10%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none;
  :hover {
    background-color: #f5f5f5;
  }
`;

const Header = styled.div`
  width: 20%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  user-select: none;
`;

const CardContent = styled.div`
  width: 90%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding-right: 5px;
`;

export default CardForFiles;
