import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
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

const NavLink = styled.a`
  color: #333;

  font-size: 16px;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  text-decoration: none;
  /* margin-right: 20px; */
  /* padding: 10px; */
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
  background-color: ${(props) => (props.isActive ? "#2196f3" : "transparent")};
  color: ${(props) => (props.isActive ? "#fff" : "#2196f3")};
  @media screen and (max-width: 900px) {
    /* flex-direction: column; */
    font-size: 12px;
  }
  &:hover {
    background-color: ${(props) => (props.isActive ? "#3ca7db" : "#e2e2e6")};
    color: ${(props) => (props.isActive ? "#e0e0e0" : "#555")};
  }
`;

function Header() {
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState(router.pathname);

  const handleNavLinkClick = (route) => {
    setActiveRoute(route);
    router.push(route);
  };

  useEffect(() => {
    setActiveRoute(router.pathname);
    // console.log(router.pathname);
  }, [router.pathname]);

  return (
    <HeaderContainer>
      <Nav>
        <Link href='reference-data' passHref>
          <NavLink
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
          </NavLink>
        </Link>

        <NavLink
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
        </NavLink>

        <Link href='parameters' passHref>
          <NavLink
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
          </NavLink>
        </Link>
        <Link href='optimizer' passHref>
          <NavLink
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
          </NavLink>
        </Link>
        <Link href='results' passHref>
          <NavLink
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
          </NavLink>
        </Link>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
