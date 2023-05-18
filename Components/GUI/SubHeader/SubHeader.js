import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f1f1;
  height: 50px;
  width: 100%;
  /* margin: 10px; */
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

  &:hover {
    background-color: ${(props) => (props.isActive ? "#3ca7db" : "#e2e2e6")};
    color: ${(props) => (props.isActive ? "#e0e0e0" : "#555")};
  }
`;

function Header() {
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState(router.pathname);

  const handleNavLinkClick = (route) => {
    if (route !== activeRoute && route !== "/about") {
      setActiveRoute(route);
      router.push(route);
    }
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
            isActive={activeRoute === "/projects/project-name/reference-data"}
            onClick={() =>
              handleNavLinkClick("/projects/project-name/reference-data")
            }
          >
            Reference Data
          </NavLink>
        </Link>

        <NavLink
          isActive={activeRoute === "/about"}
          onClick={() => handleNavLinkClick("/about")}
          isDisabled={true}
        >
          Model
        </NavLink>

        <Link href='parameters' passHref>
          <NavLink
            isActive={activeRoute === "/projects/project-name/parameters"}
            onClick={() =>
              handleNavLinkClick("/projects/project-name/parameters")
            }
          >
            Parameters
          </NavLink>
        </Link>
        <Link href='optimizer' passHref>
          <NavLink
            isActive={activeRoute === "/projects/project-name/optimizer"}
            onClick={() =>
              handleNavLinkClick("/projects/project-name/optimizer")
            }
          >
            Optimizer Settings
          </NavLink>
        </Link>
        <Link href='results' passHref>
          <NavLink
            isActive={activeRoute === "/projects/project-name/results"}
            onClick={() => handleNavLinkClick("/projects/project-name/results")}
          >
            Results
          </NavLink>
        </Link>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
