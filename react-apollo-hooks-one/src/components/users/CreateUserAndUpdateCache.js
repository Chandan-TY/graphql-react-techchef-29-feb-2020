import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_USER } from "../../mutations/mutation";
import { FETCH_ALL_USERS } from "../../queries/query";

export default function CreateUserAndUpdateCache() {
  const [createUser, { loading }] = useMutation(CREATE_USER, {
    update(cache, { data: { createUser } }) {
      debugger;
      //   console.log(cache);
      //   console.log(res);
      const { allUsers } = cache.readQuery({
        query: FETCH_ALL_USERS
      });
      const users = [...allUsers];
      users.unshift(createUser);
      cache.writeQuery({
        query: FETCH_ALL_USERS,
        data: {
          allUsers: users
        }
      });
    }
  });
  const [name, setName] = useState("ani");
  const [authProvider, setAuthProvider] = useState({
    email: {
      email: "ani@gmail.com",
      password: "ani"
    }
  });
  const createUserData = () => {
    debugger;
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
        Create User and Update UI
      </button>
      <hr />
    </div>
  );
}
