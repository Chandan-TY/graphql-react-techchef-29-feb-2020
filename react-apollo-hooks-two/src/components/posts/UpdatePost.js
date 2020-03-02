import React, { useState } from "react";
import { useMutation, useQuery, useLazyQuery } from "react-apollo";
import { UPDATE_POST, TOGGLE_TODO } from "../../mutations";
import { gql } from "apollo-boost";
import { LOCAL_STATE } from "../../queries";

export default function UpdatePost() {
  const [updatePost, { data, loading }] = useMutation(UPDATE_POST);
  const [id, setId] = useState("ck2hdh20m0v9t01359ogmki4f");
  const [text, setText] = useState("h");
  const [title, setTitle] = useState("h");

  const [filter] = useMutation(TOGGLE_TODO, {
    variables: {
      id: 1
    }
  });

  const [localData, { data: data1 }] = useLazyQuery(LOCAL_STATE);

  //   console.log("result ", res);
  const updatePostData = () => {
    updatePost({
      variables: {
        id,
        text,
        title
      }
    });
  };
  const fetch = () => {
    console.log("BB");
    localData();
  };
  const mutating = () => {
    filter();
  };
  return (
    <div>
      {data1 ? (
        <ul>
          {data1.visibilityFilter.names.map(name => {
            return <li key={name}>{name}</li>;
          })}
        </ul>
      ) : null}
      <button className="btn btn-outline-primary" onClick={updatePostData}>
        Update Post
      </button>
      <button
        onClick={() => {
          fetch();
        }}
      >
        Click
      </button>
      <hr />
      <button
        onClick={() => {
          mutating();
        }}
      >
        Mutation
      </button>
    </div>
  );
}
