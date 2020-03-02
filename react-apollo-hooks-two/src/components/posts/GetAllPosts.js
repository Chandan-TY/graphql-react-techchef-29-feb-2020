import React, { useState } from "react";
import { useQuery, useLazyQuery, useApolloClient } from "react-apollo";
import { FETCH_ALL_POSTS, FETCH_ONE_POST } from "../../queries";
import { POST_FRAGMENT } from "../../fragments";
import { gql } from "apollo-boost";

export default function GetAllPosts() {
  const { data, loading, error, refetch } = useQuery(FETCH_ALL_POSTS);
  //   debugger;

  const client = useApolloClient();
  const [fetch] = useLazyQuery(FETCH_ONE_POST);
  const [id, setId] = useState("ck2hdh20m0v9t01359ogmki4f");
  const [id1, setId1] = useState("ck2hdh20m0v9u01358mgtkqv1");

  const fetchOnePost = () => {
    client.writeData({
      data: {
        visibilityFilter: {
          __typename: "Filter",
          names: ["AA", "BB"]
        }
      }
    });
    // console.log("AAA");
    // debugger;
    /* const data = client.readQuery({
      query: FETCH_ALL_POSTS
    });

    const d = client.readFragment({
      query: POST_FRAGMENT,
      fragmentName: "UsersPost"
    });
    console.log(data);
    console.log(d); */
    /* client
      .query({
        query: FETCH_ONE_POST,
        variables: {
          id
        }
      })
      .then(res => {
        console.log(res.data);
      }); */
    // console.log(data)
    // console.log(d)
    // fetch({
    //   variables: {
    //     id: id
    //   }
    // }).then(res => {
    //   console.log(res.data);

    //   fetch({
    //     variables: {
    //       id: id1
    //     }
    //   }).then(res => {
    //     console.log(res.data);
    //   });
    // });
  };
  const fetchOn = () => {
    // client.read;
  };
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;
  return (
    <div>
      <button onClick={fetchOnePost}>Fetch One post</button>
      <button onClick={fetchOn}>Fetch </button>

      <ul className="list-group">
        {data.allPosts.map(post => {
          return (
            <li key={post.id} className="list-group-item">
              {post.text}
            </li>
          );
        })}
      </ul>

    </div>
  );
}
