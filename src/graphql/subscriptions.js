/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContactUs = /* GraphQL */ `
  subscription OnCreateContactUs(
    $filter: ModelSubscriptionContactUsFilterInput
    $owner: String
  ) {
    onCreateContactUs(filter: $filter, owner: $owner) {
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
export const onUpdateContactUs = /* GraphQL */ `
  subscription OnUpdateContactUs(
    $filter: ModelSubscriptionContactUsFilterInput
    $owner: String
  ) {
    onUpdateContactUs(filter: $filter, owner: $owner) {
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
export const onDeleteContactUs = /* GraphQL */ `
  subscription OnDeleteContactUs(
    $filter: ModelSubscriptionContactUsFilterInput
    $owner: String
  ) {
    onDeleteContactUs(filter: $filter, owner: $owner) {
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
export const onCreateProfileInformation = /* GraphQL */ `
  subscription OnCreateProfileInformation(
    $filter: ModelSubscriptionProfileInformationFilterInput
    $owner: String
  ) {
    onCreateProfileInformation(filter: $filter, owner: $owner) {
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
export const onUpdateProfileInformation = /* GraphQL */ `
  subscription OnUpdateProfileInformation(
    $filter: ModelSubscriptionProfileInformationFilterInput
    $owner: String
  ) {
    onUpdateProfileInformation(filter: $filter, owner: $owner) {
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
export const onDeleteProfileInformation = /* GraphQL */ `
  subscription OnDeleteProfileInformation(
    $filter: ModelSubscriptionProfileInformationFilterInput
    $owner: String
  ) {
    onDeleteProfileInformation(filter: $filter, owner: $owner) {
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
export const onCreateCompanyInformation = /* GraphQL */ `
  subscription OnCreateCompanyInformation(
    $filter: ModelSubscriptionCompanyInformationFilterInput
    $owner: String
  ) {
    onCreateCompanyInformation(filter: $filter, owner: $owner) {
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
export const onUpdateCompanyInformation = /* GraphQL */ `
  subscription OnUpdateCompanyInformation(
    $filter: ModelSubscriptionCompanyInformationFilterInput
    $owner: String
  ) {
    onUpdateCompanyInformation(filter: $filter, owner: $owner) {
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
export const onDeleteCompanyInformation = /* GraphQL */ `
  subscription OnDeleteCompanyInformation(
    $filter: ModelSubscriptionCompanyInformationFilterInput
    $owner: String
  ) {
    onDeleteCompanyInformation(filter: $filter, owner: $owner) {
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
