import React, { useEffect, useRef } from "react";
import { TextField } from "@mui/material";

import { Grid } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { selectUserNameId } from "../../../../store/slices/userSlice";
import { useSelector } from "react-redux";
import { getCompanyInformation } from "../../../../src/graphql/queries";
import {
  createCompanyInformation,
  updateCompanyInformation,
} from "../../../../src/graphql/mutations";
import { API } from "aws-amplify";
import { Toast } from "primereact/toast";

function CompanyInformation({ callback }) {
  const [street, setStreet] = useState("");
  const [housenr, setHousenr] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [taxID, setTaxID] = useState("");
  const [ponumber, setPonumber] = useState("");
  const [email, setEmail] = useState("");

  const [companyInformation, setCompanyInformation] = useState([]);
  const usernameId = useSelector(selectUserNameId);

  async function fetchCompanyInformationData(id) {
    try {
      const response = await API.graphql({
        query: getCompanyInformation,
        variables: { id: id },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });

      console.log("Profile Information:", response.data.getCompanyInformation);
      return response.data.getCompanyInformation;
    } catch (error) {
      console.error("Error retrieving profile information:", error);
      throw error;
    }
  }

  const CreateCompanyInformation = async (id) => {
    try {
      const input = {
        id: id,
        street: "",
        housenr: "",
        postalcode: "",
        city: "",
        country: "",
        taxID: "",
        ponumber: "",
        billingemail: "",
      };

      const response = await API.graphql({
        query: createCompanyInformation,
        variables: { input: input },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      console.log("Profile updated:", response.data.updateCompanyInformation);
      setProfileInformation(response.data.updateCompanyInformation);
      console.log("Profile Information:", profileInformation);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  useEffect(() => {
    const fetchProfileInformation = async () => {
      try {
        const ownerId = usernameId; // Provide the owner ID for which you want to retrieve the profile information
        const companyInformation = await fetchCompanyInformationData(ownerId);
        setCompanyInformation(companyInformation);
        console.log("Profile Information:", companyInformation);
        setStreet(companyInformation.street);
        setHousenr(companyInformation.housenr);
        setPonumber(companyInformation.ponumber);
        setPostalcode(companyInformation.postalcode);
        setCity(companyInformation.city);
        setCountry(companyInformation.country);
        setTaxID(companyInformation.taxID);
        setEmail(companyInformation.billingemail);

        console.log("OwnerID", ownerId, "Profile", companyInformation);
      } catch (error) {
        CreateCompanyInformation(usernameId);
        console.error("Error fetching profile information:", error);
      }
    };
    fetchProfileInformation();
  }, []);

  const UpdateCompanyInformation = async (id) => {
    try {
      const input = {
        id: id,
        street: street,
        housenr: housenr,
        postalcode: postalcode,
        city: city,
        country: country,
        taxID: taxID,
        ponumber: ponumber,
        billingemail: email,
      };

      const response = await API.graphql({
        query: updateCompanyInformation,
        variables: { input: input },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      console.log("Profile updated:", response.data.updateCompanyInformation);
      // handleSuccess();
    } catch (error) {
      // handleError();
    }
  };

  const onClick = () => {
    callback();
  };

  return (
    <WrapperForm>
      <Form
        onSubmit={(e) => {
          e.preventDefault();

          UpdateCompanyInformation(usernameId);
        }}
      >
        <Grid container direction='row' spacing={2} columnSpacing={2}>
          <Grid xs={12} md={12}>
            <HeaderP>Primary business address</HeaderP>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='Street Address'
              label='Street Address'
              name='street'
              value={street}
              onChange={(event) => {
                setStreet(event.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='House No'
              label='House No'
              name='House No'
              value={housenr}
              onChange={(event) => {
                setHousenr(event.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='Postal Code'
              label='Postal Code'
              name='Postal Code'
              value={postalcode}
              onChange={(event) => {
                setPostalcode(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='City'
              label='City'
              name='City'
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='Country'
              label='Country'
              name='Country'
              value={country}
              onChange={(event) => {
                setCountry(event.target.value);
              }}
            />
          </Grid>
          <Grid xs={12} md={12} style={{ marginTop: "20px" }}>
            <HeaderP>Business tax ID</HeaderP>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='name'
              label='Company TaxID'
              name='name'
              value={taxID}
              onChange={(event) => {
                setTaxID(event.target.value);
              }}
            />
          </Grid>
          <Grid xs={12} md={12} style={{ marginTop: "20px" }}>
            <HeaderP>Purchase order (PO) number</HeaderP>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='PO number'
              label='PO number'
              name='PO number'
              value={ponumber}
              onChange={(event) => {
                setPonumber(event.target.value);
              }}
            />
          </Grid>
          <Grid xs={12} md={12} style={{ marginTop: "20px" }}>
            <HeaderP>Billing Email</HeaderP>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='Billing Email'
              label='Billing Email'
              name='Billing Email'
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Grid>
        </Grid>
        <ButtonContainer>
          <CancelButton onClick={onClick}>Cancel</CancelButton>
          <SubmitButton type='submit' onClick={onClick}>
            SAVE
          </SubmitButton>
        </ButtonContainer>
      </Form>
    </WrapperForm>
  );
}

const HeaderP = styled.p`
  font-size: 14px;
  font-weight: 200;
  margin-top: 0px;
  margin: 0px;
`;

const WrapperForm = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;

  justify-content: center;
  padding-top: 0px;
  align-items: center;

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

const FormButton = styled(Button)`
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

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 40px;
`;

const CancelButton = styled(Button)`
  && {
    font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
    width: 150px;
    height: 40px;
    background-color: white;
    color: black;
    cursor: pointer;
    border: 1px solid #efefef;

    &:hover {
      background-color: #f3f3f8;
    }
  }
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;
const SubmitButton = styled(Button)`
  && {
    font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
    width: 150px;
    height: 40px;
    background: rgb(26, 64, 116);
    background: linear-gradient(90deg, #1cb5e0 0%, #000851 100%);
    color: white;
    cursor: pointer;
    margin-left: 20px;
    &:hover {
      background: linear-gradient(90deg, #1cb5e0 0%, #000851 50%);
    }
  }
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;
export default CompanyInformation;
