import { AboutMe, Hero, Jobs, Layout, Projects } from '@/components/index'

export default function Index() {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Jobs />
      <Projects />
    </Layout>
  )
}
