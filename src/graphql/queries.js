/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContactUs = /* GraphQL */ `
  query GetContactUs($id: ID!) {
    getContactUs(id: $id) {
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
export const listContactuses = /* GraphQL */ `
  query ListContactuses(
    $filter: ModelContactUsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getProfileInformation = /* GraphQL */ `
  query GetProfileInformation($id: ID!) {
    getProfileInformation(id: $id) {
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
export const listProfileInformations = /* GraphQL */ `
  query ListProfileInformations(
    $filter: ModelProfileInformationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfileInformations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getCompanyInformation = /* GraphQL */ `
  query GetCompanyInformation($id: ID!) {
    getCompanyInformation(id: $id) {
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
export const listCompanyInformations = /* GraphQL */ `
  query ListCompanyInformations(
    $filter: ModelCompanyInformationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanyInformations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
