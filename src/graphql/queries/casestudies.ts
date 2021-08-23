//import { gql } from '@apollo/client'
import { gql, GraphQLClient } from 'graphql-request'
import { graphQLClient } from '../services/graphcms'

{/*const endpoint = process.env.GRAPH_API_ENDPOINT
const token = process.env.GRAPH_AUTH_TOKEN

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${token}`,
  },
})*/}
export async function GetCaseStudies() {
  const query = gql`
  {
    caseStudies {
      id
      title
      slug
      publishedAt
      summary
      bannerImage {
        url
        size
        width
        height
      }
      role
      duration
    }
  }
  `
  return await graphQLClient.request(query);
}

