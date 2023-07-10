import React, { useRef } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";

import { Grid } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
// import { Button } from "@mui/material";
import {
  createProfileInformation,
  updateProfileInformation,
} from "../../../src/graphql/mutations";
import { getProfileInformation } from "../../../src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

import { Toast } from "primereact/toast";
import { useEffect } from "react";
import { selectUserNameId } from "../../../store/slices/userSlice";
import { useSelector } from "react-redux";

function PersonalInformation() {
  const usernameId = useSelector(selectUserNameId);
  const [profileInformation, setProfileInformation] = useState([]);

  async function fetchProfileData(id) {
    try {
      const response = await API.graphql({
        query: getProfileInformation,
        variables: { id: id },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });

      return response.data.getProfileInformation;
    } catch (error) {
      console.error("Error retrieving profile information:", error);
      throw error;
    }
  }

  useEffect(() => {
    const fetchProfileInformation = async () => {
      try {
        const ownerId = usernameId; // Provide the owner ID for which you want to retrieve the profile information
        const profileInfo = await fetchProfileData(ownerId);
        setProfileInformation(profileInfo);
        console.log("Profile Information:", profileInformation);
        setName(profileInfo.firstName);
        setLastname(profileInfo.lastName);
        setCompany(profileInfo.company);
        setCountry(profileInfo.country);
        setJobrole(profileInfo.jobRole);
        setJobtitle(profileInfo.jobTitle);

        console.log("OwnerID", ownerId, "Profile", profileInfo);
      } catch (error) {
        CreateProfileInformation(usernameId);
        console.error("Error fetching profile information:", error);
      }
    };
    fetchProfileInformation();
  }, []);

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [jobrole, setJobrole] = useState("");
  const [jobtitle, setJobtitle] = useState("");
  const [dialogMessage, setDialogMessage] = useState("");

  const toast = useRef(null);

  const handleError = () => {
    // Call the callback function with the item as an argument
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: "Error Updating",
      life: 3000,
    });
  };

  const handleSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Updated",
      detail: "Update Successful",
      life: 3000,
    });
  };

  const CreateProfileInformation = async (id) => {
    try {
      const input = {
        id: id,
        firstName: "",
        lastName: "",
        company: "",
        country: "",
        jobTitle: "",
        jobRole: "",
      };

      const response = await API.graphql({
        query: createProfileInformation,
        variables: { input: input },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      console.log("Profile updated:", response.data.updateProfileInformation);
      setProfileInformation(response.data.updateProfileInformation);
      console.log("Profile Information:", profileInformation);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const UpdateProfileInformation = async (id) => {
    try {
      const input = {
        id: id,
        firstName: name,
        lastName: lastname,
        company: company,
        country: country,
        jobTitle: jobtitle,
        jobRole: jobrole,
      };

      const response = await API.graphql({
        query: updateProfileInformation,
        variables: { input: input },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      handleSuccess();
    } catch (error) {
      handleError();
    }
  };

  // }
  // const CreateProfileInformation = async () => {
  //   try {
  //     const createNewPostInput = {
  //       id: 1,
  //       firstName: "Edon",
  //       lastName: "Derguti",
  //       company: "",
  //       country: "",
  //       jobTitle: "",
  //       jobRole: "",
  //     };
  //     console.log(createNewPostInput);
  //     const createNewPost = await API.graphql({
  //       query: updateProfileInformation,
  //       variables: { input: createNewPostInput },
  //       authMode: "AMAZON_COGNITO_USER_POOLS",
  //     });
  //     console.log(createNewPost);

  //     // handleSuccess();
  //   } catch (error) {
  //     console.error(error);
  //     // handleError();
  //     // setDialogMessage(
  //     //   "Something went wrong, please try again later."
  //     //   // "Something went wrong, please try again later." +
  //     //   //   error.errors[0].message
  //     // );
  //   }
  // };
  return (
    <WrapperForm>
      <Toast ref={toast}></Toast>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          // handleSubmit(e);
          UpdateProfileInformation(usernameId);
        }}
      >
        <Grid container spacing={2} rowSpacing={2}>
          <Grid item xs={12} md={12}>
            <Headerh2>Account</Headerh2>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='name'
              label='First Name'
              placeholder='First Name'
              name='name'
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='last name'
              label='Last Name'
              placeholder='Last Name'
              name='last name'
              value={lastname}
              onChange={(event) => {
                setLastname(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              label='Job Title'
              value={company}
              name='Company'
              placeholder='Company'
              type='Company'
              id='Company'
              onChange={(event) => {
                setCompany(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              label='Country'
              value={country}
              name='Country'
              placeholder='Country'
              type='Country'
              id='Country'
              onChange={(event) => {
                setCountry(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='jobRole'
              label='Job Role'
              placeholder='Job role'
              name='jobRole'
              value={jobrole}
              onChange={(event) => {
                setJobrole(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              value={jobtitle}
              name='jobTitle'
              label='Job Title'
              placeholder='Job title'
              id='jobTitle'
              onChange={(event) => {
                setJobtitle(event.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <Button type='submit' fullWidth className='blue-white-lightblue'>
              Update Account Information
            </Button>
          </Grid>
        </Grid>
      </Form>
    </WrapperForm>
  );
}

const Headerh2 = styled.h3`
  font-size: 18px;
  font-weight: 200;
  @media screen and (max-width: 700px) {
    font-weight: 400;
    font-size: 20px;
  }
`;

const WrapperForm = styled.div`
  width: 90%;
  height: fit-content;
  display: flex;
  flex-direction: column;

  justify-content: center;
  padding-top: 0px;
  align-items: center;
  border: 1px solid #ededed;
  border-radius: 15px;
  margin: 20px;
  overflow: hidden;
  @media screen and (max-width: 1200px), screen and (max-height: 700px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px;

    background-color: white;
    height: 100%;
  }
  @media screen and (max-height: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: white;
    height: 100%;
  }
  h1 {
    margin: 0px;
  }
  background-color: transparent;
  background: transparent;
`;
const Form = styled.form`
  background: white;
  height: 100%;
  width: 100%;

  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px 20px 10px 20px;

  /* box-shadow: 0 0 16px rgb(0, 0, 0, 10%); */
  position: relative;
  @media screen and (max-width: 600px) {
    width: 100%;
    background-color: white;
  }
  @media screen and (max-height: 780px) {
    height: 100%;
    background-color: white;
  }
`;
const Button = styled.button`
  background-color: #1abc9c;
  border-radius: 4px;
  color: #fff;
  width: 80%;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  flex-direction: center;
  justify-content: center;
  padding: 8px;
  font-weight: 300;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */

  @media screen and (max-width: 900px) {
    /* width: 80%; */
    font-size: 12px;
    padding: 5px;
  }

  &:active {
    transform: translateY(2px);
  }
  &:focus {
    outline: none;
  }

  &.orange-white {
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    flex-direction: center;
    justify-content: center;
    /* text-transform: uppercase; */
    padding: 10px;
    /* transition: background-color 0.2s ease; */
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */

    background-color: #1abc9c;
    color: #fff;
    border: 1px solid #1abc9c;
    @media screen and (max-width: 900px) {
      font-size: 12px;
      padding: 10px;
    }
    /* @media screen and (max-width: 600px) {
      width: 95%;
      font-size: 8px;
      padding: 5px;
    } */
  }
  &.orange-white:hover {
    opacity: 0.8;
  }
  &.blue-white-lightblue {
    font-size: 16px;
    padding: 15px;
    width: 320px;
    background-color: #53a5fc;
    color: #fff;
    border: 1px solid #53a5fc;
    @media screen and (max-width: 900px) {
      width: 100%;
    }
  }

  &.blue-white-lightblue:hover {
    color: #53a5fc;
    background-color: #fff;
    border: 1px solid #53a5fc;
  }
`;
const FormButton = styled.button`
  && {
    font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
    width: 320px;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #3f9cf3;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #388ddb;
    }
  }
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

export default PersonalInformation;
