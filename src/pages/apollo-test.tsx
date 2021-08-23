import { GetCaseStudies } from "../graphql/queries/casestudies";
import Image from "next/image";
import Link from "next/link";


export async function getStaticProps() {
  const projects = await GetCaseStudies()

  return {
    props: {
      projects
    },
  };
}

export default function ApolloTest({ projects }) {
  console.log(projects);
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-light text-gray-700 my-10 uppercase tracking-widest">Case Studies</h1>
      <div className="space-y-8">
        {projects?.caseStudies?.map((project) => (
          <div key={project.slug}>
            <Link href={`/casestudy/${project.slug}`}>
              <a>
                <h3 className="text-2xl font-bold pb-2">{project.title}</h3>
              </a>
            </Link>
            <p className="text-base font-normal text-gray-600">{project.summary}</p>
            <Image
              src={project.bannerImage.url}
              width={project.bannerImage.width}
              height={project.bannerImage.height}
            />
          </div>
        )
        )}
      </div>

    </div>
  )
}