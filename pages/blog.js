import { getAllFilesFrontMatter } from '@/utils/mdx'
import Link from 'next/link'

export default function Blog({ posts }) {
  return (
    <div>
      <p>This is the blog</p>
      {posts.map((frontMatter, i) => (
        <div key={i}>
          <Link href={`/blog/${frontMatter.slug}`}>
            <a>{frontMatter.title}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}
