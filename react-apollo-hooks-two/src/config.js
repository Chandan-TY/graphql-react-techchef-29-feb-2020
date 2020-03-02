import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { mutations } from "./Mutation";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex",
  cache,
  resolvers: {
    Mutation: {
      ...mutations
    }
  }
});

const initialState = { counter: 0 };
cache.writeData({ data: initialState });

export default client;
