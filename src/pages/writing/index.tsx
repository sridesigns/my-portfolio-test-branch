
/*import { GetBlogPosts } from "../../graphql/queries/writing/blogposts";
import Header from "../../components/Header";
import Link from "next/dist/client/link";
import { initializeApollo } from '../../graphql/services/apollo';



{/*export async function getStaticProps() {
  const { data } = await graph.query({
    query: GetBlogPosts,
  });
  return {
    props: {
      blogposts: data.blogPosts,
      revalidate: 60 * 60,
    },
  };
}}


  export default function Writing() {

    const blogposts = data.blogPosts

    if (loading) return <h1>Loading...</h1>;
    if (error || !data) return <h2>Error</h2>;

    return (
      <>
        <Header />
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-light text-gray-700 my-10 uppercase tracking-widest">Writing</h1>
          <div className="space-y-8">
            {blogposts.map((post) => (
              <div key={post.slug}>
                <Link href={`/writing/${post.slug}`}>
                  <a>
                    <h3 className="text-2xl font-bold pb-2">{post.title}</h3>
                  </a>
                </Link>

                <p className="text-base font-normal text-gray-600">{post.excerpt}</p>
                <p className="text-sm font-normal text-gray-500">{new Date(post.publishedAt).toDateString()}</p>
              </div>
            )
            )}
          </div>
        </div>
      </>
    )
  }

  export async function getStaticProps() {
    const apolloClient = initializeApollo();
    await apolloClient.query({
      query: GetBlogPosts,
    });
    return {
      props: {

      }
    };
  };*/