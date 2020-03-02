import React, { useState, useEffect } from "react";
import { useApolloClient, useLazyQuery } from "react-apollo";
import GetAllPosts from "./GetAllPosts";
import { FETCH_ALL_POSTS, FETCH_ONE_POST } from "../../queries";

export default function FetchLocalData() {
  const client = useApolloClient();
  const [id, setId] = useState("ck2hdh20m0v9t01359ogmki4f");
  const [posts, setPosts] = useState([]);
  const [fetchOne, { data, loading }] = useLazyQuery(FETCH_ONE_POST, {
    onCompleted: data => {
      console.log("ssssssssssss", data.Post);
      console.log("previous post ", posts);
      const p = [...posts]
      p.push(data.Post);
      setPosts(p);
    }
  });
  useEffect(() => {
    if (posts.length!==0) {
      console.log("Post ", posts);
    }
  }, [posts]);
  const getCacheData = () => {
    const d = client.readQuery({
      query: FETCH_ALL_POSTS,
      variables: {
        id: id
      }
    });
    console.log(d);
  };
  return (
    <div>
      <button onClick={getCacheData}>Get Cached Data</button>
      <button onClick={fetchOne}>FETCH POST</button>
    </div>
  );
}
