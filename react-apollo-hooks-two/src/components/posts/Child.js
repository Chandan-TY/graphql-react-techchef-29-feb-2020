import React from "react";
import { useApolloClient } from "react-apollo";
import { FETCH_ONE_POST } from "../../queries";

export default function Child({id}) {
  const client = useApolloClient()
  /* const post = client.readQuery({
      query : FETCH_ONE_POST,
          variables:{
              id
          }
  })   */
// console.log("post ",post)
return <div>{id}</div>;
}
