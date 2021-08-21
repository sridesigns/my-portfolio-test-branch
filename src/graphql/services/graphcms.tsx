import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: process.env.GRAPH_API_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  // get the auth token from env file
  const token = process.env.GRAPH_AUTH_TOKEN

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }

});

export const graph = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})