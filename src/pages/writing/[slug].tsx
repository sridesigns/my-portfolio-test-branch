/*import { GetPost, GetPostSlugs } from "../../graphql/queries/writing/post";
import Header from "../../components/Header";
import Link from "next/dist/client/link";
import { initializeApollo } from '../../graphql/services/apollo';
import { useQuery } from '@apollo/client';
import { GetBlogPosts } from "../../graphql/queries/writing/blogposts";
import { delBasePath } from "next/dist/shared/lib/router/router";

interface Props {
  slug: string
  data: {
    post: {
      id: string
      title: string
      excerpt: string
      publishedAt: string
      coverImage: {
        url: string
        width: number
        height: number
      }
      body: {
        json: string
        markdown: string
      }
    }

  }

}


export async function getStaticPaths() {
  const apolloClient = await initializeApollo({})
  const { data } = await apolloClient.query({ query: GetPostSlugs })


  //if (!data) return { paths: [], fallback: true }
  return {
    paths: data.blogPosts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  }
  //return { paths, fallback: true }
}
export async function getStaticProps({ params: { slug } }) {

  const apolloClient = initializeApollo({});
  const post = await apolloClient.query({
    query: GetPost,
    variables: { slug },
  });
  return {
    props: {
      post: post.blogPosts[0],
      initialApolloState: apolloClient.cache.extract()
    },
  };
};

export default function PostView({ post }) {
  console.log(post);

  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-light text-gray-700 my-10 uppercase tracking-widest">Writing</h1>
        <div className="space-y-8">
          <h3 className="text-2xl font-bold pb-2">{post.title}</h3>
          <p className="text-base font-normal text-gray-600">{post.excerpt}</p>
          <p className="text-sm font-normal text-gray-500">{new Date(post.publishedAt).toDateString()}</p>
        </div>

      </div>
    </>
  )
}*/