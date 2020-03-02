import { gql } from "apollo-boost";
import { POST_FRAGMENT } from "./fragments";
import { GET_COUNTER } from "./queries";

export const CREATE_POST = gql`
  mutation CreatePost($text: String!, $title: String!) {
    createPost(text: $text, title: $title) {
      ...UsersPost
    }
  }
  ${POST_FRAGMENT}
`;

export const UPDATE_POST = gql`
  mutation UpdatePost($id: ID!, $text: String!, $title: String!) {
    updatePost(id: $id, text: $text, title: $title) {
      ...UsersPost
    }
  }
  ${POST_FRAGMENT}
`;

export const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id) {
      ...UsersPost
    }
  }
  ${POST_FRAGMENT}
`;

export const TOGGLE_TODO = gql`
  mutation ToggleTodo($id: Int!) {
    changeFilter(id: $id) @client
  }
`;
export const UPDATE_COUNTER = gql`
  mutation updateCounter($offset: Number!) {
    updateCounter(offset: $offset) @client
  }
`;
