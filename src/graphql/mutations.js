/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContactUs = /* GraphQL */ `
  mutation CreateContactUs(
    $input: CreateContactUsInput!
    $condition: ModelContactUsConditionInput
  ) {
    createContactUs(input: $input, condition: $condition) {
      id
      email
      firstName
      lastName
      company
      checkBox
      message
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateContactUs = /* GraphQL */ `
  mutation UpdateContactUs(
    $input: UpdateContactUsInput!
    $condition: ModelContactUsConditionInput
  ) {
    updateContactUs(input: $input, condition: $condition) {
      id
      email
      firstName
      lastName
      company
      checkBox
      message
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteContactUs = /* GraphQL */ `
  mutation DeleteContactUs(
    $input: DeleteContactUsInput!
    $condition: ModelContactUsConditionInput
  ) {
    deleteContactUs(input: $input, condition: $condition) {
      id
      email
      firstName
      lastName
      company
      checkBox
      message
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createProfileInformation = /* GraphQL */ `
  mutation CreateProfileInformation(
    $input: CreateProfileInformationInput!
    $condition: ModelProfileInformationConditionInput
  ) {
    createProfileInformation(input: $input, condition: $condition) {
      id
      firstName
      lastName
      company
      country
      jobTitle
      jobRole
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateProfileInformation = /* GraphQL */ `
  mutation UpdateProfileInformation(
    $input: UpdateProfileInformationInput!
    $condition: ModelProfileInformationConditionInput
  ) {
    updateProfileInformation(input: $input, condition: $condition) {
      id
      firstName
      lastName
      company
      country
      jobTitle
      jobRole
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteProfileInformation = /* GraphQL */ `
  mutation DeleteProfileInformation(
    $input: DeleteProfileInformationInput!
    $condition: ModelProfileInformationConditionInput
  ) {
    deleteProfileInformation(input: $input, condition: $condition) {
      id
      firstName
      lastName
      company
      country
      jobTitle
      jobRole
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createCompanyInformation = /* GraphQL */ `
  mutation CreateCompanyInformation(
    $input: CreateCompanyInformationInput!
    $condition: ModelCompanyInformationConditionInput
  ) {
    createCompanyInformation(input: $input, condition: $condition) {
      id
      street
      housenr
      postalcode
      city
      country
      taxID
      ponumber
      billingemail
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateCompanyInformation = /* GraphQL */ `
  mutation UpdateCompanyInformation(
    $input: UpdateCompanyInformationInput!
    $condition: ModelCompanyInformationConditionInput
  ) {
    updateCompanyInformation(input: $input, condition: $condition) {
      id
      street
      housenr
      postalcode
      city
      country
      taxID
      ponumber
      billingemail
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteCompanyInformation = /* GraphQL */ `
  mutation DeleteCompanyInformation(
    $input: DeleteCompanyInformationInput!
    $condition: ModelCompanyInformationConditionInput
  ) {
    deleteCompanyInformation(input: $input, condition: $condition) {
      id
      street
      housenr
      postalcode
      city
      country
      taxID
      ponumber
      billingemail
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
