import React, { useState } from "react";
import { useMutation, useApolloClient } from "react-apollo";
import { CREATE_POST } from "../../mutations";
import { FETCH_ALL_POSTS } from "../../queries";

export default function CreatePost() {
  const client = useApolloClient();
  const [createPost, { loading, data }] = useMutation(CREATE_POST, {
    update(cache, { data: { createPost } }) {
      const { allPosts } = client.readQuery({
        query: FETCH_ALL_POSTS
      });
      const posts = [...allPosts];
      posts.unshift(createPost);

      client.writeQuery({
        query: FETCH_ALL_POSTS,
        data: {
          allPosts: posts
        }
      });
    }
  });
  const [text, setText] = useState("morning");
  const [title, setTitle] = useState("morning");
  const createPostData = () => {
    createPost({
      variables: {
        text,
        title
      }
    });
  };
  return (
    <div>
      <button className="btn btn-outline-primary" onClick={createPostData}>
        Create Post
      </button>
      <hr />
    </div>
  );
}
