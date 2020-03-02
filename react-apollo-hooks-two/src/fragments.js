import { gql } from "apollo-boost";

export const POST_FRAGMENT = gql`
  fragment UsersPost on Post {
    id
    text
    title
  }
`;
