import { About, Hero, Jobs, Layout, Projects } from '@/components/index'
import { getAllFilesFrontMatter } from '@/utils/mdx'

export default function Index({ jobs, projects }) {
  return (
    <Layout>
      <Hero />
      <About />
      <Jobs jobsData={jobs} />
      <Projects posts={projects} />
    </Layout>
  )
}

export async function getStaticProps() {
  const jobs = await getAllFilesFrontMatter('jobs')
  const projects = await getAllFilesFrontMatter('projects')

  return { props: { jobs, projects } }
}
