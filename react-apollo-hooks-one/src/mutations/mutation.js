import { gql } from "apollo-boost";

/* export const CREATE_USER = gql`
  mutation {
    createUser (
      name: "ajay"
      authProvider: {
        email: { email: "ajay@gmail.com", password: "chandan" }
      }
    ) {
      email
      id
    }
  }
`; */

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $authProvider: AuthProviderSignupData!) {
    createUser(name: $name, authProvider: $authProvider) {
      email
      id
      name
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $name: String!) {
    updateUser(id: $id, name: $name) {
      id
      name
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      name
      email
    }
  }
`;
