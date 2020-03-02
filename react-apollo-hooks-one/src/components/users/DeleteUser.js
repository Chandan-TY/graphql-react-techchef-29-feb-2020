import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { DELETE_USER } from "../../mutations/mutation";

export default function DeleteUser() {
  console.log("DELETE USER Component");

  const [deleteUser, { data, loading }] = useMutation(DELETE_USER);
  const [id, setId] = useState("ck2t2aiot17xm0137fcqy5x4t");

  const deleteUserData = () => {
    deleteUser({
      variables: {
        id
      }
    });
  };
  return (
    <div>
      <button className="btn btn-outline-primary" onClick={deleteUserData}>
        Delete User
      </button>
      <hr />
    </div>
  );
}
