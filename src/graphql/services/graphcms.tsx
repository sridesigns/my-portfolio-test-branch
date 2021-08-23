/*import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
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
  ssrMode: typeof window === 'undefined',
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})*/

{/*import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const token = process.env.GRAPH_AUTH_TOKEN

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: process.env.GRAPH_API_ENDPOINT, // e.g. https://www.myapi.com/api/v2
      headers: {
        authorization: `Bearer ${token}`, // or any other values for the http request
      },
    }),
    cache: new InMemoryCache(),
  });
}

export default createApolloClient;*/}

import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.GRAPH_API_ENDPOINT
const token = process.env.GRAPH_AUTH_TOKEN

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${token}`,
  },
})


