import { gql } from '@apollo/client'

export const GetBlogPosts = gql`
query {
  blogPosts (orderBy: publishedAt_DESC) {
    id
    title
    slug
    excerpt
    publishedAt
    coverImage {
      size
      width
      height
      url
    }
  }
}
`