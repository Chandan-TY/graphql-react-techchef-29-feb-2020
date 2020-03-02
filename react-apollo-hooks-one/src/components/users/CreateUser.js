import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_USER } from "../../mutations/mutation";
import { FETCH_ALL_USERS } from "../../queries/query";

export default function CreateUser() {
  console.log("CREATE USER Component")
  const [createUser, { loading }] = useMutation(CREATE_USER, {
    refetchQueries: [
      {
        query: FETCH_ALL_USERS
      }
    ]
  });
  const [name, setName] = useState("abhilash");
  const [authProvider, setAuthProvider] = useState({
    email: {
      email: "abhilash@gmail.com",
      password: "abhilash"
    }
  });
  const createUserData = () => {
    createUser({
      variables: {
        name: name,
        authProvider: authProvider
      }
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          createUserData();
        }}
      >
        Create User
      </button>
      <hr />
    </div>
  );
}
