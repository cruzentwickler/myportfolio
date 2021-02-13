import { AboutMe, Banner, Jobs, Layout, Projects } from '@/components/index'

export default function Index() {
  return (
    <Layout>
      <Banner />
      <AboutMe />
      <Jobs />
      <Projects />
    </Layout>
  )
}
