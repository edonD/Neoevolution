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
