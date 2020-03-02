import React, { useState } from "react";
import { useMutation, useApolloClient } from "react-apollo";
import { DELETE_POST } from "../../mutations";
import { FETCH_ALL_POSTS } from "../../queries";

export default function DeletePost() {
  const client = useApolloClient();
  const [id, setId] = useState("ck2hdh20m0v9r0135f8qydi6a");
  const [deletePost, { loading, data }] = useMutation(DELETE_POST, {
    update(cache, { data: { deletePost } }) {
      const { allPosts } = client.readQuery({
        query: FETCH_ALL_POSTS
      });

      client.writeQuery({
        query: FETCH_ALL_POSTS,
        data: {
          allPosts: allPosts.filter(post => post.id !== deletePost.id)
        }
      });
    }
  });
  const deletePostData = () => {
    deletePost({
      variables: {
        id
      }
    });
  };
  return (
    <div>
      <button className="btn btn-outline-primary" onClick={deletePostData}>
        Delete Post
      </button>
      <hr />
    </div>
  );
}
