import { gql } from '@apollo/client'

export const GetBlogPosts = gql`
query {
  blogPosts (orderBy: publishedAt_DESC) {
    id
    title
    slug
    excerpt
    publishedAt
    body {
      json
      markdown
    }
    coverImage {
      size
      width
      height
      url
    }
  }
}
`