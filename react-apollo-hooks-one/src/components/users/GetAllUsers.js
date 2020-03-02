import React from "react";

import { useQuery, useLazyQuery } from "@apollo/react-hooks";
// import { gql } from "graphql-tag";
import { gql } from "apollo-boost";
import { FETCH_ALL_USERS } from "../../queries/query";

export default function GetAllUsers() {
  const { loading, data, error, refetch } = useQuery(
    FETCH_ALL_USERS

    // {
    //   pollInterval: 3000
    // }
  );
  /* const [fetchUsers, { loading, data, error }] = useLazyQuery(gql`
    {
      allUsers {
        id
        name
      }
    }
  `); */
  if (loading) return <h1>Loading ...</h1>;
  if (error) return <h1>{error.message}</h1>;

  if (data)
    return (
      <div>
        <button className="btn btn-outline-primary"
          onClick={() => {
            refetch();
          }}
        >
          ReFetch
        </button>
        <ul className="list-group">
          {data.allUsers.map(user => {
            return <li className="list-group-item" key={user.id}>{user.name}</li>;
          })}
        </ul>
      </div>
    );
  /* return (
    <>
      <button
        onClick={() => {
          fetchUsers();
        }}
      >
        ReFetch
      </button>
      <h1>No data</h1>
    </>
  ); */
}
