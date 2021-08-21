import { gql } from '@apollo/client'

export const GetCaseStudies = gql`
query {
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