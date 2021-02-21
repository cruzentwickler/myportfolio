import { parseISO, format } from 'date-fns'
import styled from 'styled-components'
import Image from 'next/image'
import { Layout } from '@/components/index'

const BlogLayout = ({ children, frontMatter }) => {
  const { title, publishedAt, summary, image, readingTime } = frontMatter

  return (
    <Layout>
      <div>{title}</div>
      <div>{format(parseISO(publishedAt), 'MMMM dd, yyyy')}</div>
      <div>{summary}</div>
      <Image src={image} alt={title} width={500} height={500} />
      <div>{readingTime.text}</div>
      <RedDiv>{children}</RedDiv>
    </Layout>
  )
}

export default BlogLayout

const RedDiv = styled.div`
  padding: 2rem;
  outline: 2px solid red;
`
