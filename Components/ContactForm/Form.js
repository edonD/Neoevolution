import { Checkbox } from "primereact/checkbox";
import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
// import { Button } from "@mui/material
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { useRouter } from "next/router";

function ContactForm() {
  const [email, setEmail] = useState("");

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [company, setCompany] = useState("");
  const [jobrole, setJobrole] = useState("");
  const [jobtitle, setJobtitle] = useState("");
  const [details, setDetails] = useState("");
  const [dropdownItem, setDropdownItem] = useState(null);
  const dropdownItems = [
    { name: "Option 1", code: "Option 1" },
    { name: "Option 2", code: "Option 2" },
    { name: "Option 3", code: "Option 3" },
  ];
  const [checkboxValue, setCheckboxValue] = useState([]);
  const router = useRouter();
  const onCheckboxChange = (e) => {
    let selectedValue = [...checkboxValue];
    if (e.checked) selectedValue.push(e.value);
    else selectedValue.splice(selectedValue.indexOf(e.value), 1);

    setCheckboxValue(selectedValue);
  };
  return (
    <Container>
      <WrapperDescription>
        <FormHeaderDescription>
          <FormH1>Ready to get started?</FormH1>
        </FormHeaderDescription>
        <FormHeaderDescription>
          <h2>
            Let us help you deliver better outcomes by finding innovative
            solutions to your challenging business use cases. Complete the form
            to talk to sales. We're here to help you:
          </h2>
        </FormHeaderDescription>
      </WrapperDescription>
      <WrapperForm>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            //  handleSubmit(e);
          }}
        >
          <Grid container spacing={2} rowSpacing={2}>
            <Grid item xs={12} md={12}>
              <h1>Please fill in the form</h1>
            </Grid>
            <Grid item xs={12} md={12}>
              <InputText
                type='text'
                placeholder='Please enter your business email.'
                style={{ width: "100%" }}
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              ></InputText>
            </Grid>

            <Grid item xs={12} md={6}>
              <InputText
                style={{ width: "100%" }}
                id='name'
                placeholder='First Name'
                name='name'
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputText
                style={{ width: "100%" }}
                id='last name'
                placeholder='Last Name'
                name='last name'
                value={lastname}
                onChange={(event) => {
                  setLastname(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <InputText
                style={{ width: "100%" }}
                id='Company'
                placeholder='Company'
                name='Company'
                type='Company'
                value={company}
                onChange={(event) => {
                  setCompany(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputText
                style={{ width: "100%" }}
                placeholder='Job role'
                id='jobRole'
                name='jobRole'
                value={jobrole}
                onChange={(event) => {
                  setJobrole(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputText
                style={{ width: "100%" }}
                placeholder='Job title'
                value={jobtitle}
                name='jobTitle'
                id='jobTitle'
                onChange={(event) => {
                  setJobtitle(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={4} md={4}>
              <Checkbox
                inputId='checkOption1'
                name='option'
                value='Chicago'
                checked={checkboxValue.indexOf("Chicago") !== -1}
                onChange={onCheckboxChange}
              />
              <label htmlFor='ingredient1' className='ml-2'>
                Enterprise
              </label>
            </Grid>
            <Grid item xs={4} md={4}>
              {/* <FormGroup> */}
              <Checkbox
                inputId='checkOption1'
                name='option'
                value='Chicago'
                checked={checkboxValue.indexOf("Chicago") !== -1}
                onChange={onCheckboxChange}
              />
              <label htmlFor='ingredient1' className='ml-2'>
                Academy
              </label>

              {/* </FormGroup> */}
            </Grid>
            <Grid item xs={4} md={4}>
              {/* <FormGroup> */}
              <Checkbox
                inputId='checkOption1'
                name='option'
                value='Chicago'
                checked={checkboxValue.indexOf("Chicago") !== -1}
                onChange={onCheckboxChange}
              />
              <label htmlFor='ingredient1' className='ml-2'>
                Person
              </label>
              {/* </FormGroup> */}
            </Grid>

            <Grid item xs={12} md={12}>
              <InputTextarea
                variant='outlined'
                rows='5'
                style={{ width: "100%" }}
                name='Details'
                placeholder='Your Message'
                onChange={(event) => {
                  setDetails(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <FormButton
                className='blue-white-lightblue'
                onClick={() => {
                  router.push("/");
                }}
              >
                Contact Us
              </FormButton>
            </Grid>
          </Grid>
        </Form>
      </WrapperForm>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 50px;
  align-items: center;
  overflow: hidden;
  background: white; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #031224,
    #0f2847
  ); /* Chrome 10-25, Safari 5.1-6 */
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 92%;
  padding: 10px;
  /* height:100%; */
  background-color: lightblue;
`;

const Body = styled.div`
  /* p-fluid styles */
  padding: 0;
  margin: 0;

  /* formgrid styles */
  display: grid;
  //grid-template-columns: repeat(2fr, 12);
  gap: 1rem;

  /* grid styles */
  /* Add any additional grid-related styles here */
`;
const Form = styled.form`
  background: white;
  height: 92%;
  width: 550px;

  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 50px 20px 10px 20px;
  border-radius: 4px;

  box-shadow: 0 0 16px rgb(0, 0, 0, 10%);
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

const FormHeaderDescription = styled.div`
  width: 60%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  background-color: transparent;
  h2 {
    color: rgba(26, 26, 26, 0.9);
    font-size: 26px;
  }
`;
const WrapperDescription = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  padding-top: 110px;

  justify-content: flex-start;
  align-items: flex-end;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const WrapperForm = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;

  justify-content: center;
  padding-top: 0px;
  align-items: center;
  background-color: white;
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

const FormH1 = styled.h1`
  width: 100%;
  height: 100%;
  position: relative;
  color: #303030;
  font-size: 60px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin: 5px;
  @media screen and (max-width: 400px) {
    width: 70%;
  }
`;

const FormButton = styled.button`
  background-color: #1abc9c;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  /* font-size: 35px; */
  font-size: 18px;

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
export default ContactForm;
