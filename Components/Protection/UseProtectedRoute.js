// ProtectedRoute.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Auth } from "aws-amplify";

export const UseProtectedRoute = function () {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated (e.g., from your authentication state)

    const fetchUserId = async () => {
      try {
        const isAuthenticated = await Auth.currentAuthenticatedUser();
        setIsAuthenticated(isAuthenticated);
      } catch (error) {
        // router.push("/login");
        setIsAuthenticated(false);
        console.log("Error fetching user ID:", error);
      }
      setIsLoading(false);
    };
    fetchUserId();
  }, []);
  return { isLoading, isAuthenticated };
};

export const NotSignedIn = function () {
  const router = useRouter();
  return (
    <Container>
      <h1>Authentication Required</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "300px",

          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <FormButton
          onClick={() => {
            router.push("/Login");
          }}
          className='gray-white-black'
        >
          Login
        </FormButton>
        <FormButton
          onClick={() => {
            router.push("/Signup");
          }}
          className='black-gray-white'
        >
          Sign Up
        </FormButton>
      </div>
    </Container>
  );
};

import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  h1 {
    font-size: 24px;
  }
`;

const FormButton = styled.button`
  background-color: #1abc9c;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  /* font-size: 35px; */
  font-size: 16px;
  width: 120px;
  display: flex;
  flex-direction: center;
  justify-content: center;
  padding: 10px 30px 10px 30px;
  transition: background-color 0.2s ease;
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
