import { Checkbox } from "primereact/checkbox";
import React from "react";
import { Grid } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { API } from "aws-amplify";
import { createContactUs } from "../../src/graphql/mutations";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useRouter } from "next/router";
import Image from "next/image";
import { Dialog } from "primereact/dialog";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [company, setCompany] = useState("");
  const [jobrole, setJobrole] = useState("");
  const [jobtitle, setJobtitle] = useState("");
  const [details, setDetails] = useState("");
  const [checkboxValue, setCheckboxValue] = useState([]);

  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [dialogSuccess, setDialogSuccess] = useState(false);

  const router = useRouter();
  const onCheckboxChange = (e) => {
    let selectedValue = [...checkboxValue];
    if (e.checked) selectedValue.push(e.value);
    else selectedValue.splice(selectedValue.indexOf(e.value), 1);

    setCheckboxValue(selectedValue);
  };
  const CreateContactUs = async () => {
    try {
      const createNewPostInput = {
        email: email,
        firstName: name,
        lastName: lastname,
        company: company,
        checkBox: checkboxValue,
        message: details,
      };
      console.log(createNewPostInput);
      const createNewPost = await API.graphql({
        query: createContactUs,
        variables: { input: createNewPostInput },
      });
      console.log(createNewPost);
      setDialogMessage("Thank you for contacting us!");
      setDialogVisible(true);
      setDialogSuccess(true);
    } catch (error) {
      console.error(error);
      setDialogVisible(true);
      setDialogSuccess(false);
      setDialogMessage("Something went wrong, please try again later.", error);
    }
  };
  return (
    <Container>
      <WrapperDescription>
        <FormHeaderDescription>
          <FormH1>Ready to get started?</FormH1>
        </FormHeaderDescription>
        <FormHeaderDescription>
          <p>
            Let us help you deliver better outcomes by finding innovative
            solutions to your challenging business use cases. Complete the form
            to talk to sales. We are here to help you:
          </p>
        </FormHeaderDescription>

        <RowContainer>
          <ImageContainer>
            <StampIcon>
              <Image
                src='/images/lightning.svg'
                width='50px'
                height='50px'
                alt='MOSFET'
                color='#235fd7'
              />
            </StampIcon>
          </ImageContainer>
          <BodyContainer>
            <BodyHeaderContainer>
              <h1>100x faster results</h1>
            </BodyHeaderContainer>
            <BodyBodyContainer>
              <p>
                What would take a team to do in one month we do it for 1 hour
              </p>
            </BodyBodyContainer>
          </BodyContainer>
        </RowContainer>
        <RowContainer>
          <ImageContainer>
            <StampIcon>
              <Image
                src='/images/semiconductor.png'
                width='50px'
                height='50px'
                alt='brain'
              />
            </StampIcon>
          </ImageContainer>
          <BodyContainer>
            <BodyHeaderContainer>
              <h1>Trusted by the biggest chip manufacturers</h1>
            </BodyHeaderContainer>
            <BodyBodyContainer>
              <p>
                Companies are using the AiValanche to calibrate models to reduce
                time to market
              </p>
            </BodyBodyContainer>
          </BodyContainer>
        </RowContainer>
        <RowContainer>
          <ImageContainer>
            <StampIcon>
              <Image
                src='/images/ai-icon.png'
                width='50px'
                height='50px'
                alt='brain'
              />
            </StampIcon>
          </ImageContainer>
          <BodyContainer>
            <BodyHeaderContainer>
              <h1>AI breakthrough</h1>
            </BodyHeaderContainer>
            <BodyBodyContainer>
              <p>
                This software is enabled through our research breakthrough in AI
              </p>
            </BodyBodyContainer>
          </BodyContainer>
        </RowContainer>
      </WrapperDescription>
      <WrapperForm>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            CreateContactUs();
          }}
        >
          <Grid container spacing={2} rowSpacing={2}>
            <Grid item xs={12} md={12}>
              <h1 style={{ color: "#303030" }}>Please fill in the form</h1>
            </Grid>
            <Grid item xs={12} md={12}>
              <InputText
                type='text'
                required
                placeholder='Please enter your business email *'
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
                required
                id='name'
                placeholder='First Name *'
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
                required
                id='last name'
                placeholder='Last Name *'
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
                required
                id='Company'
                placeholder='Company *'
                name='Company'
                type='Company'
                value={company}
                onChange={(event) => {
                  setCompany(event.target.value);
                }}
              />
            </Grid>

            <Grid item xs={4} md={4}>
              <Checkbox
                inputId='checkOption1'
                name='option'
                value='Enterprise'
                checked={checkboxValue.includes("Enterprise")}
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
                value='Academy'
                checked={checkboxValue.includes("Academy")}
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
                value='Personal'
                checked={checkboxValue.includes("Personal")}
                onChange={onCheckboxChange}
              />
              <label htmlFor='ingredient1' className='ml-2'>
                Personal
              </label>
              {/* </FormGroup> */}
            </Grid>

            <Grid item xs={12} md={12}>
              <InputTextarea
                required
                rows={5}
                cols={30}
                style={{ width: "100%" }}
                placeholder='Your Message *'
                value={details}
                onChange={(event) => {
                  setDetails(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <FormButton
                submit
                className='blue-white-lightblue'
                onClick={() => {
                  // CreateContactUs();
                  // router.push("/");
                }}
              >
                Contact Us
              </FormButton>
            </Grid>
          </Grid>
        </Form>
        <Dialog
          style={{ width: "500px", height: "200px", position: "relative" }}
          visible={dialogVisible}
          onHide={() => {
            setDialogVisible(false);
            router.push("/");
          }}
          header={
            dialogSuccess ? (
              <span style={{ color: "green" }}>Success</span>
            ) : (
              <span style={{ color: "red" }}>Error</span>
            )
          }
          footer={
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Button
                className='orange-white'
                onClick={() => {
                  setDialogVisible(false);
                  router.push("/");
                }}
              >
                Continue
              </Button>
            </div>
          }
        >
          {dialogMessage && <div>{dialogMessage}</div>}
        </Dialog>
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
  /* padding: 50px; */
  align-items: center;
  overflow: hidden;
  background: white; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #031224,
    #0f2847
  ); /* Chrome 10-25, Safari 5.1-6 */
`;

const RowContainer = styled.div`
  height: fit-content;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
`;
const ImageContainer = styled.div`
  height: 80%;
  width: 50px;
  user-select: none;
  color: #232331;
  margin-right: 20px;
`;

const Form = styled.form`
  background: white;
  height: 550px;
  width: 550px;
  min-height: 550px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 50px 20px 10px 20px;
  border-radius: 4px;

  box-shadow: 0 0 16px rgb(0, 0, 0, 10%);
  position: relative;
  @media screen and (max-width: 900px) {
    height: fit-content;
  }
  @media screen and (max-width: 450px) and (max-height: 700px) {
    height: 100%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    background-color: white;
  }
`;
const BodyContainer = styled.div`
  height: 100%;
  width: calc(100% - 75px);
  padding-left: 15px;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #232331;
`;
const BodyHeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  user-select: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    margin: 0px;

    color: #3fa4f9;
    font-size: 20px;

    @media screen and (max-width: 1200px) {
      width: 100%;
      font-size: 18px;
    }
    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  }
`;
const BodyBodyContainer = styled.div`
  height: 100%;
  width: 100%;
  user-select: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #989898;

  p {
    font-size: 12px;
    font-weight: 200;
    margin: 0px;
  }
`;

const FormHeaderDescription = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 1200px), screen and (max-height: 650px) {
    display: none;
  }
  @media screen and (max-width: 1200px), screen and (max-height: 650px) {
    display: none;
  }
  p {
    color: rgba(26, 26, 26, 0.9);
    font-size: 22px;
    @media screen and (max-width: 1200px), screen and (max-height: 850px) {
      width: 100%;
      font-size: 18px;
    }
    @media screen and (max-width: 600px), screen and (max-height: 750px) {
      font-size: 14px;
    }
  }
`;
const WrapperDescription = styled.div`
  width: 40%;
  height: 550px;
  display: flex;
  flex-direction: column;
  /* margin-right: 20px; */

  justify-content: flex-start;
  align-items: flex-end;
  padding-right: 20px;
  @media screen and (max-width: 900px) {
    display: none;
  }

  @media screen and (max-width: 1200px), screen and (max-height: 750px) {
    justify-content: center;
    align-items: center;
  }
`;
const WrapperForm = styled.div`
  width: 60%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  justify-content: center;
  padding-top: 0px;
  align-items: center;
  background: #d4e5f9;
  background: radial-gradient(circle at left center, #d4e5f9 0%, #f7f7f7 100%);

  @media screen and (max-width: 1200px) {
    width: 55%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
  @media screen and (max-height: 600px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px;
    padding: 20px;
    background-color: white;
    height: 100%;
  }
  @media screen and (max-height: 700px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
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

  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px;
  font-size: 44px;
  @media screen and (max-width: 1200px), screen and (max-height: 850px) {
    font-size: 40px;
  }
  @media screen and (max-width: 600px), screen and (max-height: 750px) {
    font-size: 34px;
  }
`;
const StampIcon = styled.div`
  color: #d23;
  border: 1px solid #3b3c3b; /* Set the outer border color to black */
  border-radius: 50%;
  width: 75px;
  height: 75px;
  transform: rotate(0deg);
  mask-position: 2rem 3rem;
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0.15rem;
    left: 0.15rem;
    right: 0.15rem;
    bottom: 0.15rem;
    border: 1px solid #3fa4f9; /* Set the inner border line to 0 */
    border-radius: 50%;
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
      font-size: 10px;
      padding: 5px;
    }
    @media screen and (max-width: 600px) {
      width: 95%;
      font-size: 8px;
      padding: 5px;
    }
  }
  &.orange-white:hover {
    opacity: 0.8;
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
  width: 100%;
  display: flex;
  flex-direction: center;
  justify-content: center;
  padding: 10px 60px 10px 60px;
  transition: background-color 0.2s ease;

  /* font-size: 20px; */
  @media screen and (max-width: 900px) {
    /* justify-content: flex-start; */

    padding: 10px 60px 10px 60px;
  }
  @media screen and (max-width: 500px) {
    /* justify-content: flex-start; */

    font-size: 16px;
    padding: 10px 60px 10px 60px;
  }
  &:active {
    transform: translateY(2px);
  }
  &:focus {
    outline: none;
  }

  &.blue-white-lightblue {
    width: 100%;
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
export default ContactForm;
