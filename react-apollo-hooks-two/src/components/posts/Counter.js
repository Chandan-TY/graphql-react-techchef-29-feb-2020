import React from "react";
import { useQuery, useMutation } from "react-apollo";
import { GET_COUNTER } from "../../queries";
import { UPDATE_COUNTER } from "../../mutations";

export default function Counter(props) {
  const { data = {} } = useQuery(GET_COUNTER);
  // console.log(data)
  const [increment] = useMutation(UPDATE_COUNTER, {
    variables: {
      offset: 1
    }
  });
  const [decrement] = useMutation(UPDATE_COUNTER, {
    variables: {
      offset: -1
    }
  });
  return (
    <div>
      {" "}
      <div>
        <h1>Couter: {data.counter}</h1>
        <div className="controllers">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
}
