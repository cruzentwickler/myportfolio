import { getAllFilesFrontMatter } from '@/utils/mdx'
import { About, Hero, Jobs, Layout } from '@/components/index'

export default function Index({ jobPosts }) {
  return (
    <Layout>
      <Hero />
      <About />
      <Jobs posts={jobPosts} />
    </Layout>
  )
}

export async function getStaticProps() {
  const jobPosts = await getAllFilesFrontMatter('jobs')

  return { props: { jobPosts } }
}
