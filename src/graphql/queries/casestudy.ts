//import { gql } from '@apollo/client'
import { gql } from 'graphql-request'
import { graphQLClient } from '../services/graphcms'

export async function GetCaseStudy(slug) {
  const query = gql`
  query CaseStudy ($slug: String!){
    caseStudies (where: { slug: $slug }) {
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
      content{
        json
        markdown
      } 
    }
  }
  `
  const variables = {
    slug,
  }

  return await graphQLClient.request(query, variables);
}

export async function GetCaseStudySlug() {
  const query = gql`
query {
  blogPosts {
    slug 
  }
}
`
  return await graphQLClient.request(query);

}


