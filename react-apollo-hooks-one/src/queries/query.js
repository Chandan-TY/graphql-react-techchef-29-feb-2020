import { gql } from "apollo-boost";

export const FETCH_ALL_USERS = gql`
  {
    allUsers {
      id
      name
    }
  }
`;
