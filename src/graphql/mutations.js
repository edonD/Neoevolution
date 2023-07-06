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
