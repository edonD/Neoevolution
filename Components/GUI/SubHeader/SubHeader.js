import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectheaderIcon } from "../../../store/slices/headerIconsSlice";
import { FiCheckCircle } from "react-icons/fi";

function Header() {
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState(router.pathname);
  const headerIcon = useSelector(selectheaderIcon);

  const handleNavLinkClick = (route) => {
    setActiveRoute(route);
    router.push(route);
  };

  useEffect(() => {
    setActiveRoute(router.pathname);
    console.log("headerIcon", headerIcon);
  }, [router.pathname]);

  return (
    <HeaderContainer>
      <Nav>
        <NavLink
          icon={headerIcon[0].value}
          isActive={
            activeRoute ===
            "/projects/create-model/select-model/insert-data/reference-data"
          }
          onClick={() =>
            handleNavLinkClick(
              "/projects/create-model/select-model/insert-data/reference-data"
            )
          }
        >
          Reference Data
          {headerIcon[0].value !== "empty" ? (
            <StyledIcon color='#6cd17a' />
          ) : null}
        </NavLink>

        <NavLink
          icon={headerIcon[1].value}
          isActive={
            activeRoute ===
            "/projects/create-model/select-model/insert-data/model"
          }
          onClick={() =>
            handleNavLinkClick(
              "/projects/create-model/select-model/insert-data/model"
            )
          }
          isDisabled={false}
        >
          Model
          {headerIcon[1].value !== "empty" ? (
            <StyledIcon color='#6cd17a' />
          ) : null}
        </NavLink>

        <NavLink
          icon={headerIcon[2].value}
          isActive={
            activeRoute ===
            "/projects/create-model/select-model/insert-data/parameters"
          }
          onClick={() =>
            handleNavLinkClick(
              "/projects/create-model/select-model/insert-data/parameters"
            )
          }
          isDisabled={false}
        >
          Parameters
          {headerIcon[2].value !== "empty" ? (
            <StyledIcon color='#6cd17a' />
          ) : null}
        </NavLink>

        <NavLink
          icon={headerIcon[3].value}
          isActive={
            activeRoute ===
            "/projects/create-model/select-model/insert-data/optimizer"
          }
          onClick={() =>
            handleNavLinkClick(
              "/projects/create-model/select-model/insert-data/optimizer"
            )
          }
          isDisabled={false}
        >
          Optimizer
          {headerIcon[3].value !== "empty" ? (
            <StyledIcon color='#6cd17a' />
          ) : null}
        </NavLink>

        <NavLink
          icon={headerIcon[4].value}
          isActive={
            activeRoute ===
            "/projects/create-model/select-model/insert-data/results"
          }
          onClick={() =>
            handleNavLinkClick(
              "/projects/create-model/select-model/insert-data/results"
            )
          }
          isDisabled={false}
        >
          Results
          {headerIcon[4].value !== "empty" ? (
            <StyledIcon color='#6cd17a' />
          ) : null}
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  height: 50px;
  width: 80%;

  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  z-index: 5;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  /* margin: 10px; */
  @media screen and (max-width: 1200px) {
    /* flex-direction: column; */
    width: 90%;
    border-radius: 4px;
    text-align: center;
  }
  @media screen and (max-width: 900px) {
    /* flex-direction: column; */
    width: 90%;
    border-radius: 0px;
    text-align: center;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const NavLink = styled.div`
  color: #333;
  width: 20%;
  font-size: 16px;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  text-decoration: none;
  /* margin-right: 20px; */
  /* padding: 10px; */
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;

  /* flex: 1; */
  padding: ${(props) => (props.icon === "empty" ? "0px" : "0 20px")};
  justify-content: ${(props) =>
    props.icon === "empty" ? "center" : "space-around"};

  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
  background-color: ${(props) => (props.isActive ? "#2196f3" : "transparent")};
  color: ${(props) => (props.isActive ? "#fff" : "#2196f3")};
  @media screen and (max-width: 1400px) {
    /* flex-direction: column; */
    font-size: 14px;
  }
  @media screen and (max-width: 900px) {
    /* flex-direction: column; */
    font-size: 12px;
  }
  @media screen and (max-width: 750px) {
    /* flex-direction: column; */

    padding: 0px;
    justify-content: center;
  }
  &:hover {
    background-color: ${(props) => (props.isActive ? "#3ca7db" : "#e2e2e6")};
    color: ${(props) => (props.isActive ? "#e0e0e0" : "#555")};
  }
`;

const StyledIcon = styled(FiCheckCircle)`
  font-size: 18px;
  @media screen and (max-width: 950px) {
    /* flex-direction: column; */
    display: none;
  }
`;

export default Header;
