import { GetCaseStudies } from "../../graphql/queries/casestudies";
import Image from "next/image";
import Link from "next/link";


export default function SelectedWorks({ projects }) {
  console.log(projects);
  return (
    <>
      {projects?.caseStudies?.map((project) => (
        <div key={project.slug}>
          <Link href={`/casestudies/${project.slug}`}>
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


    </>
  )
}