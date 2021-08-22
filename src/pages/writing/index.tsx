import { graph } from "../../graphql/services/graphcms";
import { GetBlogPosts } from "../../graphql/queries/writing/blogposts";
import Header from "../../components/Header";


export async function getStaticProps() {
  const { data } = await graph.query({
    query: GetBlogPosts,
  });
  return {
    props: {
      blogposts: data.blogPosts,
      revalidate: 60 * 60,
    },
  };
}

export default function Writing({ blogposts }) {
  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-light text-gray-700 my-10 uppercase tracking-widest">Writing</h1>
        <div className="space-y-8">
          {blogposts.map((post) => (
            <div key={post.slug}>
              <h3 className="text-2xl font-bold pb-2">{post.title}</h3>
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