import { gql } from '@apollo/client'

export const GetPost = gql`
query BlogPost ($slug: String!) {
  blogPosts (where: { slug: $slug })  {
    id
    title
    slug
    excerpt
    publishedAt
    coverImage {
      url
      width
      height
    }
    body{
      json
      markdown
    }  
  }
}
`

export const GetPostSlugs = gql`
query {
  blogPosts {
    slug 
  }
}
`