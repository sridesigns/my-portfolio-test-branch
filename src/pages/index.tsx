import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import { GetHome } from '../graphql/queries/home'
interface Props {

  home: string

}

export async function getStaticProps() {
  const home = await GetHome()

  return {
    props: {
      home
    },
  };
}

export default function Home({ home }: Props) {
  return (
    <div className="max-w-3xl mx-a">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>Hello World!</h1>
      <Link href="/apollo-test"><a>GQL Test</a></Link>
      <Link href="/writing"><a>Writing</a></Link>
      <div>
        <h2>Case Studies</h2>
        {home?.caseStudies?.map((project) => (
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
        ))}
      </div>

      <div>
        <h2>Side Projects</h2>
        {home?.sideProjects?.map((sproject) => (
          <div key={sproject.slug}>
            <Link href={`/casestudies/${sproject.slug}`}>
              <a>
                <h3 className="text-2xl font-bold pb-2">{sproject.title}</h3>
              </a>
            </Link>
            <p className="text-base font-normal text-gray-600">{sproject.summary}</p>
          </div>
        ))}
      </div>

      <div>
        <h2>Recents Blog Posts</h2>
        {home?.blogPosts?.map((blog) => (
          <div key={blog.slug}>
            <Link href={`/casestudies/${blog.slug}`}>
              <a>
                <h3 className="text-2xl font-bold pb-2">{blog.title}</h3>
              </a>
            </Link>
            <p className="text-base font-normal text-gray-600">{blog.excerpt}</p>
          </div>
        ))}
      </div>


    </div>
  )
}
