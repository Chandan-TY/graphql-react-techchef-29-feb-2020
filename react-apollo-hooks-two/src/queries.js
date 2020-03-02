import { gql } from "apollo-boost";
import { POST_FRAGMENT } from "./fragments";

export const FETCH_ALL_POSTS = gql`
  {
    allPosts(first: 10) {
      ...UsersPost
    }
  }
  ${POST_FRAGMENT}
`;

export const FETCH_ONE_POST = gql`
  query OnePost($id: ID!) {
    Post(id: $id) {
      id
      text
      title
    }
  }
`;

export const LOCAL_STATE = gql`
  {
    visibilityFilter @client {
      names
    }
  }
`;

export const GET_COUNTER = gql`
  query GetCounterValue {
    counter @client
  }
`;
