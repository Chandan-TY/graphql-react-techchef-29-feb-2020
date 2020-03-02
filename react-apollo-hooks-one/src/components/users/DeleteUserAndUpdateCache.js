import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { DELETE_USER } from "../../mutations/mutation";
import { FETCH_ALL_USERS } from "../../queries/query";

export default function DeleteUserAndUpdateCache() {
  const [id, setId] = useState("ck2u5coic0fvn0170r7sf1p3n");

  const [deleteUser, { data, loading }] = useMutation(DELETE_USER, {
    update(cache, { data: { deleteUser } }) {
      const { allUsers } = cache.readQuery({
        query: FETCH_ALL_USERS
      });

      const users = [...allUsers];
      const updatedUsers = users.filter(user => user.id !== deleteUser.id);

      cache.writeQuery({
        query: FETCH_ALL_USERS,
        data: {
          allUsers: updatedUsers
        }
      });
    }
  });

  const deleteUserData = () => {
    deleteUser({
      variables: {
        id
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
      <button className="btn btn-outline-primary" onClick={deleteUserData}>
        Delete User and Update Cache
      </button>
      <hr />
    </div>
  );
}
