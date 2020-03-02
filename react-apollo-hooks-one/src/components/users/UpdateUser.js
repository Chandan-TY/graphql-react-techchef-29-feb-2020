import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { UPDATE_USER } from "../../mutations/mutation";

export default function UpdateUser() {
  console.log("UPDATED USER Component")
  const [updateUser, { data, loading }] = useMutation(UPDATE_USER);
  const [id, setId] = useState("ck2vpjocf1hc401082lbn50d3");
  const [name, setName] = useState("Nikhil");

  const updateUserData = () => {
    updateUser({
      variables: {
        id,
        name
      }
    });
  };
  return (
    <div>
      <button className="btn btn-outline-primary" onClick={updateUserData}>
        Update User
      </button>
      <hr />
    </div>
  );
}
