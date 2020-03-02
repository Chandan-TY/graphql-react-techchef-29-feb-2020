import React from "react";
import { useQuery } from "react-apollo";
import Child from "./Child";
import { FETCH_ALL_POSTS } from "../../queries";

export default function() {
  const { data,loading } = useQuery(FETCH_ALL_POSTS);
  if(loading)
  return <h1>loading ...</h1>
  if (data)
    return (
      <div>
        {data.allPosts.map(post => {
          return <Child key={post.id} id={post.id} />;
        })}
      </div>
    );
}
