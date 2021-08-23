import Header from "../../components/Header";
import Link from "next/dist/client/link";
import { GetCaseStudy, GetCaseStudySlug } from "../../graphql/queries/casestudy"

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
  const { data } = await GetCaseStudySlug()


  //if (!data) return { paths: [], fallback: true }
  return {
    paths: data.caseStudies.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  }
  //return { paths, fallback: true }
}
export async function getStaticProps({ params }) {

  const project = await GetCaseStudy(params.slug)

  return {
    props: {
      work: project.caseStudies[0],
    },
  };
};

export default function PostView({ work }) {
  console.log(work);

  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-light text-gray-700 my-10 uppercase tracking-widest">{work.title}</h1>
        <div className="space-y-8">
          <p className="text-base font-normal text-gray-600">{work.summary}</p>
          <p className="text-sm font-normal text-gray-500">{new Date(work.publishedAt).toDateString()}</p>
        </div>

      </div>
    </>
  )
}