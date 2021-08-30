import { GetCaseStudies } from "../graphql/queries/casestudies";
import Image from "next/image";
import Link from "next/link";
import SelectedWorks from "../components/SelectedWorks";

interface Props {

  projects: string

}

export async function getStaticProps() {
  const projects = await GetCaseStudies()

  return {
    props: {
      projects
    },
  };
}

export default function ApolloTest({ projects }: Props) {
  console.log(projects);
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-light text-gray-700 my-10 uppercase tracking-widest">Case Studies</h1>
      <div className="space-y-8">
        <h3 className="text-3xl font-bold mb-8">Selected Works</h3>
        <SelectedWorks projects={projects} />
      </div>

    </div>
  )
}