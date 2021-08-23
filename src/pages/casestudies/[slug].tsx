import Header from "../../components/Header";
import Link from "next/dist/client/link";
import { GetCaseStudy, GetCaseStudySlug } from "../../graphql/queries/casestudy"

interface Props {
  slug: string
  data: {
    work: {
      id: string
      title: string
      summary: string
      publishedAt: string
      bannerImage: {
        url: string
        width: number
        height: number
      }
      content: {
        json: string
        markdown: string
      }
    }

  }

}


export async function getStaticPaths() {
  const slugRes = await GetCaseStudySlug()
  const slugs = slugRes.caseStudies


  //if (!data) return { paths: [], fallback: true }
  return {
    paths: slugs.map((slug) => ({
      params: { slug: slug.slug }
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

export default function CaseStudyView({ work }) {
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